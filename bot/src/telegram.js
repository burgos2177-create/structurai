// telegram.js — Helpers de la API de Telegram Bot.

const API = "https://api.telegram.org/bot";

async function tg(method, token, payload) {
  const res = await fetch(`${API}${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json().catch(() => ({}));
}

// Telegram limita los mensajes a 4096 caracteres; partimos en trozos.
function chunk(text, size = 3900) {
  const out = [];
  let s = text;
  while (s.length > size) {
    let cut = s.lastIndexOf("\n", size);
    if (cut < size * 0.6) cut = size;
    out.push(s.slice(0, cut));
    s = s.slice(cut);
  }
  out.push(s);
  return out;
}

const FEEDBACK_KEYBOARD = {
  inline_keyboard: [[
    { text: "👍 Útil", callback_data: "fb:up" },
    { text: "👎 Revisar", callback_data: "fb:down" },
    { text: "✍️ Corregir", callback_data: "fb:fix" },
  ]],
};

export async function sendAnswer(token, chatId, replyToId, text) {
  const parts = chunk(text);
  for (let i = 0; i < parts.length; i++) {
    const isLast = i === parts.length - 1;
    await tg("sendMessage", token, {
      chat_id: chatId,
      text: parts[i],
      reply_to_message_id: replyToId,
      // Botones de feedback solo en el último trozo. Sin parse_mode para evitar
      // errores con markdown imperfecto del modelo.
      reply_markup: isLast ? FEEDBACK_KEYBOARD : undefined,
    });
  }
}

export async function sendText(token, chatId, text) {
  for (const part of chunk(text)) {
    await tg("sendMessage", token, { chat_id: chatId, text: part });
  }
}

export async function sendTyping(token, chatId) {
  return tg("sendChatAction", token, { chat_id: chatId, action: "typing" });
}

export async function answerCallback(token, callbackId, text) {
  return tg("answerCallbackQuery", token, {
    callback_query_id: callbackId,
    text,
    show_alert: false,
  });
}
