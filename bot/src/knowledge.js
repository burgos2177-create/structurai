// knowledge.js — Carga la identidad y el conocimiento desde el repo de GitHub (RAW_BASE).
// Cachea en memoria del isolate con un TTL, para que tras un `git push` el bot tome la
// nueva versión en pocos minutos SIN necesidad de redeploy.
// RAW_BASE ejemplo: https://raw.githubusercontent.com/<usuario>/structurai/main

const IDENTITY_FILES = [
  "IDENTITY/soul.md",
  "IDENTITY/personality.md",
  "IDENTITY/context.md",
  "IDENTITY/operating-principles.md",
];

const TTL_MS = 5 * 60 * 1000; // 5 min: un git push se refleja en el bot en <= 5 min sin redeploy.

let identityCache = { t: 0, v: null };
const knowledgeCache = new Map(); // ruta -> { t, v }

async function fetchRaw(path, env) {
  const base = (env.RAW_BASE || "").replace(/\/$/, "");
  const url = `${base}/${path}`;
  // cacheTtl corto en el edge de Cloudflare para que las actualizaciones se propaguen rápido.
  const res = await fetch(url, { cf: { cacheTtl: 120, cacheEverything: true } });
  if (!res.ok) throw new Error(`No se pudo leer ${path} (${res.status}) desde ${base}`);
  return await res.text();
}

export async function getIdentity(env) {
  if (identityCache.v && Date.now() - identityCache.t < TTL_MS) return identityCache.v;
  const parts = await Promise.all(
    IDENTITY_FILES.map((f) =>
      fetchRaw(f, env).then((t) => `\n\n===== ${f} =====\n${t}`).catch(() => "")
    )
  );
  identityCache = { t: Date.now(), v: parts.join("") };
  return identityCache.v;
}

export async function getKnowledge(paths, env) {
  const chunks = await Promise.all(
    paths.map(async (p) => {
      const c = knowledgeCache.get(p);
      if (c && Date.now() - c.t < TTL_MS) return { p, t: c.v };
      try {
        const v = await fetchRaw(p, env);
        knowledgeCache.set(p, { t: Date.now(), v });
        return { p, t: v };
      } catch (e) {
        return { p, t: `(No se pudo cargar ${p})` };
      }
    })
  );
  return chunks
    .map((c) => `\n\n===== FUENTE: ${c.p} =====\n${c.t}`)
    .join("");
}

// Refresco manual de la caché si se necesita (opcional).
export function clearCache() {
  identityCache = { t: 0, v: null };
  knowledgeCache.clear();
}
