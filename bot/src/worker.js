// worker.js — Cloudflare Worker de StructurAI.
// Rutas:
//   GET  /                 -> interfaz web de chat
//   POST /api/chat         -> {message} -> {reply}            (web)
//   POST /api/feedback     -> {question,answer,type} -> Issue (web)
//   POST /telegram         -> webhook de Telegram (valida secret header)
//   GET  /health           -> ok
//
// El "cerebro" (identidad + conocimiento) vive en el repo de GitHub y se carga vía RAW_BASE.

import { route } from "./router.js";
import { getIdentity, getKnowledge } from "./knowledge.js";
import { buildSystem, buildUser } from "./prompt.js";
import { callLLM, draftLearning } from "./llm.js";
import { createIssue } from "./github.js";
import { WEB_HTML } from "./web.js";
import {
  sendAnswer, sendText, sendTyping, answerCallback,
} from "./telegram.js";

// Núcleo: responde una pregunta como StructurAI.
async function answer(question, env) {
  const [identity, files] = [await getIdentity(env), route(question)];
  const knowledge = await getKnowledge(files, env);
  const system = buildSystem(identity);
  const user = buildUser(knowledge, question);
  return callLLM(system, user, env);
}

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    try {
      // --- Web UI ---
      if (request.method === "GET" && pathname === "/") {
        return new Response(WEB_HTML, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      }
      if (pathname === "/health") return json({ ok: true, service: "StructurAI" });

      // --- API web: chat ---
      if (request.method === "POST" && pathname === "/api/chat") {
        const { message } = await request.json().catch(() => ({}));
        if (!message) return json({ error: "Falta 'message'" }, 400);
        const reply = await answer(message, env);
        return json({ reply });
      }

      // --- API web: feedback (aprendizaje semi-automático) ---
      if (request.method === "POST" && pathname === "/api/feedback") {
        const { question, answer: ans, type } = await request.json().catch(() => ({}));
        if (type === "up") return json({ ok: true });
        if (!question || !ans) return json({ error: "Faltan datos" }, 400);
        ctx.waitUntil(Promise.resolve()); // (placeholder por simetría)
        const proposal = await draftLearning(question, ans, env);
        const titleType = type === "fix" ? "Corrección sugerida" : "Respuesta a revisar";
        const result = await createIssue(
          env,
          `[Aprendizaje] ${titleType}: ${question.slice(0, 70)}`,
          issueBody(question, ans, proposal, "web"),
        );
        return json(result);
      }

      // --- Webhook de Telegram ---
      if (request.method === "POST" && pathname === "/telegram") {
        const secret = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
        if (secret !== env.TELEGRAM_WEBHOOK_SECRET) {
          return new Response("forbidden", { status: 403 });
        }
        const update = await request.json().catch(() => ({}));
        ctx.waitUntil(handleTelegram(update, env));
        return new Response("ok"); // responder rápido a Telegram
      }

      return new Response("Not found", { status: 404 });
    } catch (e) {
      return json({ error: e.message }, 500);
    }
  },
};

function issueBody(question, ans, proposal, origin) {
  return (
    `**Origen:** ${origin}\n\n` +
    `### Pregunta\n${question}\n\n` +
    `### Respuesta del bot\n${ans}\n\n` +
    `### Propuesta de aprendizaje (borrador del bot)\n${proposal}\n\n` +
    `---\n` +
    `**Para aprobar:** edita/ajusta la propuesta, añádela al archivo de \`CONOCIMIENTO/\` que corresponda, ` +
    `anota la línea en \`MEMORY.md\` y \`APRENDIZAJE/changelog.md\`, y cierra este issue. ` +
    `(Ver \`APRENDIZAJE/como-retroalimentar.md\`.)`
  );
}

async function handleTelegram(update, env) {
  const token = env.TELEGRAM_BOT_TOKEN;
  try {
    // Mensajes de texto
    if (update.message && update.message.text) {
      const msg = update.message;
      const text = msg.text.trim();
      if (text === "/start" || text === "/ayuda") {
        return sendText(token, msg.chat.id,
          "🏗️ Soy StructurAI, tu asistente de estructuras y procesos constructivos (México).\n\n" +
          "Pregúntame lo que sea: castillos, viguetas, drift, cimentaciones, punzonamiento, criterio de diseño…\n\n" +
          "En cada respuesta verás 👍 👎 ✍️ — úsalos para mejorarme (lo que marques entra como propuesta de aprendizaje en GitHub).\n\n" +
          "⚠️ Soy orientativo: no sustituyo el cálculo firmado por un ingeniero responsable.");
      }
      await sendTyping(token, msg.chat.id);
      const reply = await answer(text, env);
      return sendAnswer(token, msg.chat.id, msg.message_id, reply);
    }

    // Botones de feedback
    if (update.callback_query) {
      const cq = update.callback_query;
      const data = cq.data || "";
      if (data === "fb:up") {
        return answerCallback(token, cq.id, "👍 ¡Gracias!");
      }
      if (data === "fb:down" || data === "fb:fix") {
        const ans = cq.message?.text || "";
        const question = cq.message?.reply_to_message?.text || "(pregunta no disponible)";
        const proposal = await draftLearning(question, ans, env);
        const titleType = data === "fb:fix" ? "Corrección sugerida" : "Respuesta a revisar";
        const result = await createIssue(
          env,
          `[Aprendizaje] ${titleType}: ${question.slice(0, 70)}`,
          issueBody(question, ans, proposal, "telegram"),
        );
        return answerCallback(
          token, cq.id,
          result.ok ? "✅ Lo mandé a revisión en GitHub" : "⚠️ No se pudo crear el issue",
        );
      }
    }
  } catch (e) {
    // Silencioso: Telegram reintenta si fallamos, evitamos loops.
    console.log("telegram error", e.message);
  }
}
