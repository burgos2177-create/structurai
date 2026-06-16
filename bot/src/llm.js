// llm.js — Adaptador del modelo de lenguaje.
// Actualmente: Google Gemini (capa gratuita). Para cambiar a Claude u otro,
// reemplaza SOLO la función callLLM() — el resto del bot no cambia.

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function callLLM(systemPrompt, userText, env, attempt = 0) {
  const model = env.MODEL || "gemini-flash-latest";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

  const body = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents: [{ role: "user", parts: [{ text: userText }] }],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 2048,
      topP: 0.95,
      // gemini-flash-latest es un modelo "thinking": razona internamente antes de responder.
      // Lo desactivamos para que (a) ese razonamiento no se filtre (a veces en inglés) y
      // (b) no se coma los tokens de salida dejando la respuesta a medias.
      thinkingConfig: { thinkingBudget: 0 },
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // Reintento ante saturación temporal de la capa gratuita (429) o servicio (503).
  if ((res.status === 429 || res.status === 503) && attempt < 2) {
    await sleep(2000 * (attempt + 1)); // 2s, luego 4s
    return callLLM(systemPrompt, userText, env, attempt + 1);
  }
  if (res.status === 429) {
    throw new Error("límite de la capa gratuita de Gemini alcanzado (varias preguntas muy seguidas); reintenta en ~1 min");
  }
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Gemini ${res.status}: ${detail.slice(0, 200)}`);
  }

  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "";
  if (!text) {
    // Puede venir vacío por filtros de seguridad; devolver algo útil.
    const reason = data?.candidates?.[0]?.finishReason || "desconocido";
    return `No pude generar una respuesta (motivo: ${reason}). Reformula la pregunta, por favor.`;
  }
  return text.trim();
}

// Para el aprendizaje semi-automático: el bot redacta una propuesta de conocimiento
// a partir de una pregunta y respuesta que el usuario marcó para revisión.
export async function draftLearning(question, answer, env) {
  const system =
    "Eres un editor técnico de una base de conocimiento de ingeniería estructural mexicana. " +
    "Tu tarea es redactar una PROPUESTA DE APRENDIZAJE breve y verificable a partir de una " +
    "pregunta y la respuesta que un usuario marcó para revisión. NO inventes valores normativos. " +
    "Devuelve EXACTAMENTE este formato markdown:\n\n" +
    "**Dato:** <el dato o regla, 1-2 líneas>\n" +
    "**Porqué:** <el mecanismo físico o intención normativa>\n" +
    "**Fuente sugerida:** <norma + artículo / fabricante / 'por verificar'>\n" +
    "**Confianza:** <✅ verificado | ⚠️ por verificar | 👷 práctica de obra>\n" +
    "**Archivo destino sugerido:** <ruta dentro de CONOCIMIENTO/>";
  const user = `Pregunta del usuario:\n${question}\n\nRespuesta marcada para revisión:\n${answer}`;
  try {
    return await callLLM(system, user, env);
  } catch (e) {
    return `_(No se pudo redactar la propuesta automáticamente: ${e.message})_`;
  }
}
