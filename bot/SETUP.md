# 🚀 Cómo poner a vivir a StructurAI (Telegram + Web) — GRATIS

Guía paso a paso. Todo es de **capa gratuita**: lo único que NO es $0 sería usar Claude en lugar
de Gemini (opcional). Tiempo estimado: ~30-40 min la primera vez.

> El bot lee su "cerebro" (identidad + conocimiento) directo del repo de GitHub. Por eso, cuando
> edites un `.md` y hagas `git push`, **el bot aprende sin re-desplegar** (la caché se refresca sola).

---

## Resumen de piezas

| Pieza | Servicio | Costo |
|---|---|---|
| Repo (cerebro + curación) | GitHub | $0 |
| Cerebro (IA) | Google Gemini (AI Studio) | $0 |
| Runtime (Telegram + Web) | Cloudflare Workers | $0 |
| Aprendizaje | GitHub Issues (semi-automático con aprobación) | $0 |

---

## Paso 0 — Subir el repo a GitHub (una sola vez)

El proyecto ya está commiteado en local. Para subirlo:

```bash
# 1. Autentícate (abre el navegador):
gh auth login

# 2. Crea el repo en tu cuenta y haz push (PÚBLICO, para que el bot lea el cerebro gratis):
cd D:\apps\structurai
gh repo create structurai --public --source=. --remote=origin --push
```

> ¿Lo quieres **privado**? Cámbialo a `--private` y luego dale a `GITHUB_TOKEN` permiso de
> **Contents: Read** además de Issues (el Worker necesita leer los `.md` con el token).
> Para empezar, **público es lo más simple**: el contenido es referencia de ingeniería, no datos sensibles.

Toma nota de tu usuario; tu `RAW_BASE` será:
`https://raw.githubusercontent.com/TU_USUARIO/structurai/main`

---

## Paso 1 — Bot de Telegram (token)

1. En Telegram, habla con **@BotFather**.
2. Envía `/newbot`, elige nombre y usuario (debe terminar en `bot`, p. ej. `structurai_mx_bot`).
3. BotFather te da un **token** como `123456:ABC-DEF...`. Guárdalo.

---

## Paso 2 — Llave de Gemini (gratis)

1. Entra a **https://aistudio.google.com/** con tu cuenta Google.
2. "Get API key" → "Create API key". Copia la **API key**.

---

## Paso 3 — Token de GitHub para el aprendizaje (Issues)

1. GitHub → Settings → Developer settings → **Fine-grained tokens** → Generate new token.
2. Repository access: **Only select repositories → structurai**.
3. Permissions: **Issues → Read and write** (si el repo es privado, añade **Contents → Read-only**).
4. Genera y copia el token.

---

## Paso 4 — Desplegar el Worker en Cloudflare

```bash
cd D:\apps\structurai\bot
npm install                 # instala wrangler

# Edita wrangler.toml: cambia TU_USUARIO en RAW_BASE y GITHUB_REPO.

npx wrangler login          # abre el navegador, crea/usa tu cuenta Cloudflare (gratis)

# Carga los 4 secretos (te los pedirá uno por uno):
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_WEBHOOK_SECRET     # inventa una cadena larga aleatoria
npx wrangler secret put GITHUB_TOKEN

npx wrangler deploy
```

Al terminar te dará una URL como:
`https://structurai-bot.TU-SUBDOMINIO.workers.dev`

- Ábrela en el navegador → ahí está la **web app** de chat. 🎉
- (Esa misma URL es el endpoint del bot de Telegram.)

---

## Paso 5 — Conectar el webhook de Telegram

Reemplaza `<TOKEN>`, `<URL>` y `<SECRET>` (el mismo `TELEGRAM_WEBHOOK_SECRET` del paso 4):

```bash
curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=<URL>/telegram&secret_token=<SECRET>"
```

Ejemplo:
```bash
curl "https://api.telegram.org/bot123456:ABC/setWebhook?url=https://structurai-bot.tuuser.workers.dev/telegram&secret_token=mi-secreto-largo"
```

Debe responder `{"ok":true,...}`. ¡Listo! Escríbele a tu bot en Telegram.

---

## Probar

- **Web:** abre la URL del Worker.
- **Telegram:** busca tu bot por su `@usuario` y mándale "¿cada cuánto pongo un castillo?".
- Usa los botones **👍 👎 ✍️**: lo que marques crea un **Issue** en tu repo con una propuesta de
  aprendizaje que tú apruebas (ver `APRENDIZAJE/como-retroalimentar.md`).

---

## Cómo AJUSTAR cosas después (todo es editable)

| Quiero cambiar… | Edita… | Y luego… |
|---|---|---|
| Tono / personalidad | `IDENTITY/personality.md`, `IDENTITY/soul.md` | `git push` (el bot toma la última versión) |
| Reglas de respuesta | `IDENTITY/operating-principles.md` o `bot/src/prompt.js` | push / `wrangler deploy` |
| Conocimiento (corregir/añadir) | el `.md` de `CONOCIMIENTO/` + `MEMORY.md` | `git push` |
| Qué archivos carga cada pregunta | `bot/src/router.js` | `wrangler deploy` |
| Cambiar Gemini → Claude u otro | `bot/src/llm.js` (solo esa función) | `wrangler deploy` |
| Modelo de Gemini | `MODEL` en `wrangler.toml` | `wrangler deploy` |

**Regla:** cambios en archivos `.md` del cerebro → solo `git push`. Cambios en código del bot
(`bot/src/*`) o config → `npx wrangler deploy`.

---

## Solución de problemas

- **El bot no responde en Telegram:** revisa el webhook con
  `curl https://api.telegram.org/bot<TOKEN>/getWebhookInfo`. El `url` debe ser tu Worker + `/telegram`.
- **"No se pudo leer ... desde RAW_BASE":** revisa que `RAW_BASE` en `wrangler.toml` apunte a tu repo
  y que el repo sea público (o el token tenga Contents:Read).
- **Respuestas vacías:** revisa la `GEMINI_API_KEY` y los logs con `npx wrangler tail`.
- **No se crean Issues:** revisa `GITHUB_TOKEN` (permiso Issues:Write) y `GITHUB_REPO` en `wrangler.toml`.
- **Ver logs en vivo:** `npx wrangler tail`.

---

## Costos reales

- Cloudflare Workers: 100,000 peticiones/día gratis. Sobra.
- Gemini (AI Studio free tier): límites de ritmo holgados para un grupo de colegas. $0.
- GitHub: gratis.
- Si algún día quieres la calidad de **Claude**: editas `bot/src/llm.js` y pones tu `ANTHROPIC_API_KEY`
  como secreto. Ahí ya hay un costo por uso (centavos por pregunta), pero el resto sigue igual.
