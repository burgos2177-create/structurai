// web.js — Interfaz web de chat (se sirve en GET /). Autocontenida, sin dependencias.
export const WEB_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>StructurAI 🏗️</title>
<style>
  :root { --bg:#0f1419; --panel:#1a2230; --acc:#f0a020; --txt:#e6e9ee; --mut:#8b97a8; --usr:#243447; }
  * { box-sizing:border-box; }
  body { margin:0; font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
         background:var(--bg); color:var(--txt); height:100vh; display:flex; flex-direction:column; }
  header { padding:14px 18px; background:var(--panel); border-bottom:1px solid #2a3547; display:flex; align-items:center; gap:10px; }
  header h1 { font-size:18px; margin:0; }
  header .tag { color:var(--mut); font-size:12px; font-weight:normal; }
  #log { flex:1; overflow-y:auto; padding:18px; display:flex; flex-direction:column; gap:14px; }
  .msg { max-width:760px; padding:12px 15px; border-radius:12px; line-height:1.5; white-space:pre-wrap; word-wrap:break-word; }
  .user { background:var(--usr); align-self:flex-end; }
  .bot { background:var(--panel); align-self:flex-start; border:1px solid #2a3547; }
  .bot table { border-collapse:collapse; margin:8px 0; font-size:13px; }
  .bot td, .bot th { border:1px solid #3a4757; padding:4px 8px; }
  .bot code { background:#0c1117; padding:1px 5px; border-radius:4px; font-size:13px; }
  .fb { margin-top:8px; display:flex; gap:8px; }
  .fb button { background:transparent; border:1px solid #3a4757; color:var(--mut); border-radius:8px;
               padding:3px 10px; cursor:pointer; font-size:13px; }
  .fb button:hover { border-color:var(--acc); color:var(--acc); }
  .fb .done { color:var(--acc); border-color:var(--acc); }
  footer { padding:14px 18px; background:var(--panel); border-top:1px solid #2a3547; display:flex; gap:10px; }
  #q { flex:1; resize:none; background:var(--bg); color:var(--txt); border:1px solid #2a3547; border-radius:10px;
       padding:11px 13px; font-size:15px; font-family:inherit; max-height:140px; }
  #send { background:var(--acc); color:#1a1300; border:none; border-radius:10px; padding:0 20px; font-weight:bold; cursor:pointer; }
  #send:disabled { opacity:.5; cursor:default; }
  .note { color:var(--mut); font-size:12px; text-align:center; padding:6px; }
  a { color:var(--acc); }
</style>
</head>
<body>
  <header>
    <span style="font-size:22px">🏗️</span>
    <h1>StructurAI <span class="tag">— estructuras y procesos constructivos (MX)</span></h1>
  </header>
  <div id="log">
    <div class="msg bot">¡Hola! Soy <b>StructurAI</b>. Pregúntame de estructuras o procesos de obra: castillos, viguetas, secciones variables, drift, cimentaciones, punzonamiento, criterio de diseño… lo que necesites.
<span class="note">Orientativo, no sustituye el cálculo firmado por un ingeniero responsable.</span></div>
  </div>
  <footer>
    <textarea id="q" rows="1" placeholder="Escribe tu pregunta…"></textarea>
    <button id="send">Enviar</button>
  </footer>
<script>
const log = document.getElementById('log');
const q = document.getElementById('q');
const send = document.getElementById('send');
let last = { question:'', answer:'' };

function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
// Render mínimo: **negritas**, \`código\`, y tablas markdown simples.
function render(t){
  let h = esc(t);
  const lines = h.split('\\n'); let out=[]; let tbl=[];
  const flush=()=>{ if(tbl.length){ out.push(toTable(tbl)); tbl=[]; } };
  for(const ln of lines){
    if(/^\\s*\\|.*\\|\\s*$/.test(ln)){ tbl.push(ln); }
    else { flush(); out.push(ln); }
  }
  flush();
  h = out.join('\\n');
  h = h.replace(/\\*\\*(.+?)\\*\\*/g,'<b>$1</b>').replace(/\`(.+?)\`/g,'<code>$1</code>');
  return h;
}
function toTable(rows){
  rows = rows.filter(r=>!/^\\s*\\|[\\s:|-]+\\|\\s*$/.test(r));
  const cells = rows.map(r=>r.trim().replace(/^\\||\\|$/g,'').split('|').map(c=>c.trim()));
  if(!cells.length) return '';
  let h='<table>'; cells.forEach((row,i)=>{ h+='<tr>'; row.forEach(c=>{ h+= (i===0?'<th>':'<td>')+c+(i===0?'</th>':'</td>'); }); h+='</tr>'; });
  return h+'</table>';
}

function add(text, who, withFb){
  const d = document.createElement('div');
  d.className = 'msg ' + who;
  d.innerHTML = who==='bot' ? render(text) : esc(text);
  if(withFb){
    const fb = document.createElement('div'); fb.className='fb';
    fb.innerHTML = '<button data-t="up">👍 Útil</button><button data-t="down">👎 Revisar</button><button data-t="fix">✍️ Corregir</button>';
    fb.querySelectorAll('button').forEach(b=> b.onclick=()=>feedback(b.dataset.t, fb, b));
    d.appendChild(fb);
  }
  log.appendChild(d); log.scrollTop = log.scrollHeight;
  return d;
}

async function feedback(type, fb, btn){
  if(type==='up'){ btn.classList.add('done'); btn.textContent='👍 ¡Gracias!'; return; }
  btn.disabled=true; btn.textContent='enviando…';
  try{
    const r = await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({question:last.question, answer:last.answer, type})});
    const j = await r.json();
    btn.classList.add('done');
    btn.textContent = j.url ? '✅ En revisión' : (j.ok ? '✅ Registrado' : '⚠️ Error');
  }catch(e){ btn.textContent='⚠️ Error'; }
}

async function ask(){
  const text = q.value.trim(); if(!text) return;
  q.value=''; q.style.height='auto'; send.disabled=true;
  add(text,'user',false);
  const thinking = add('…','bot',false);
  try{
    const r = await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text})});
    const j = await r.json();
    const reply = j.reply || ('Error: '+(j.error||'sin respuesta'));
    thinking.remove();
    last = { question:text, answer:reply };
    add(reply,'bot',true);
  }catch(e){ thinking.remove(); add('⚠️ Error de conexión: '+e.message,'bot',false); }
  send.disabled=false; q.focus();
}
send.onclick=ask;
q.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); ask(); }});
q.addEventListener('input',()=>{ q.style.height='auto'; q.style.height=Math.min(q.scrollHeight,140)+'px'; });
</script>
</body>
</html>`;
