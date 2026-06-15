// knowledge.js — Carga la identidad y el conocimiento desde el repo de GitHub (RAW_BASE).
// Cachea en memoria del isolate para no re-descargar en cada petición.
// RAW_BASE ejemplo: https://raw.githubusercontent.com/<usuario>/structurai/main

const IDENTITY_FILES = [
  "IDENTITY/soul.md",
  "IDENTITY/personality.md",
  "IDENTITY/context.md",
  "IDENTITY/operating-principles.md",
];

let identityCache = null;
const knowledgeCache = new Map(); // ruta -> texto

async function fetchRaw(path, env) {
  const base = (env.RAW_BASE || "").replace(/\/$/, "");
  const url = `${base}/${path}`;
  const res = await fetch(url, { cf: { cacheTtl: 600, cacheEverything: true } });
  if (!res.ok) throw new Error(`No se pudo leer ${path} (${res.status}) desde ${base}`);
  return await res.text();
}

export async function getIdentity(env) {
  if (identityCache) return identityCache;
  const parts = await Promise.all(
    IDENTITY_FILES.map((f) =>
      fetchRaw(f, env).then((t) => `\n\n===== ${f} =====\n${t}`).catch(() => "")
    )
  );
  identityCache = parts.join("");
  return identityCache;
}

export async function getKnowledge(paths, env) {
  const chunks = await Promise.all(
    paths.map(async (p) => {
      if (knowledgeCache.has(p)) return { p, t: knowledgeCache.get(p) };
      try {
        const t = await fetchRaw(p, env);
        knowledgeCache.set(p, t);
        return { p, t };
      } catch (e) {
        return { p, t: `(No se pudo cargar ${p})` };
      }
    })
  );
  return chunks
    .map((c) => `\n\n===== FUENTE: ${c.p} =====\n${c.t}`)
    .join("");
}

// Permite refrescar la caché si el conocimiento cambia (opcional, llamar desde un endpoint admin).
export function clearCache() {
  identityCache = null;
  knowledgeCache.clear();
}
