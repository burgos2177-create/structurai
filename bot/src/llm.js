// llm.js — Adaptador del modelo de lenguaje.
// Actualmente: Google Gemini (capa gratuita). Para cambiar a Claude u otro,
// reemplaza SOLO la función callLLM() — el resto del bot no cambia.

export async function callLLM(systemPrompt, userText, env) {
  const model = env.MODEL || "gemini-2.0-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

  const body = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents: [{ role: "user", parts: [{ text: userText }] }],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 2048,
      topP: 0.95,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Gemini ${res.status}: ${detail.slice(0, 300)}`);
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
