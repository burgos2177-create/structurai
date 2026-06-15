// github.js — Crea Issues en el repo para el aprendizaje semi-automático con aprobación.
// Requiere GITHUB_TOKEN (fine-grained, permiso Issues: Read & Write) y GITHUB_REPO ("usuario/structurai").

export async function createIssue(env, title, body, labels = ["aprendizaje-pendiente"]) {
  if (!env.GITHUB_TOKEN || !env.GITHUB_REPO) {
    return { ok: false, error: "GITHUB_TOKEN o GITHUB_REPO no configurados" };
  }
  const res = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "StructurAI-Bot",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ title, body, labels }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return { ok: false, error: `GitHub ${res.status}: ${detail.slice(0, 200)}` };
  }
  const data = await res.json();
  return { ok: true, url: data.html_url, number: data.number };
}
