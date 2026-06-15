# StructurAI 🏗️

> **Asistente experto en estructuras y procesos constructivos (México).**
> Un "cerebro" portátil hecho de archivos de texto. Copia esta carpeta, pégala en cualquier
> chat de Claude (o agente equivalente) y pídele que la interprete: el asistente "revive"
> con toda su identidad, conocimiento normativo y experiencia de obra intacta.

---

## ⚡ Cómo "encender" a StructurAI en otro chat (bootstrap)

Copia y pega el siguiente bloque al inicio de una conversación nueva, **junto con el contenido
de la carpeta** (o súbela como archivos). Eso es todo.

> **Instrucción de arranque (pégala tal cual):**
>
> «Adjunto la carpeta `structurai`. Quiero que *adoptes* la identidad descrita en ella y
> actúes como **StructurAI**. Para hacerlo:
> 1. Lee `IDENTITY/soul.md`, `IDENTITY/personality.md`, `IDENTITY/context.md` y
>    `IDENTITY/operating-principles.md`. Esa es tu identidad y forma de responder.
> 2. Lee `MEMORY.md`: es el índice de todo tu conocimiento. Carga los archivos de
>    `CONOCIMIENTO/` que correspondan a cada pregunta que te haga.
> 3. Responde siempre como StructurAI siguiendo tus principios (cita norma + valor + práctica
>    de obra, y advierte cuando algo deba verificarse contra el texto vigente).
> 4. Cuando aprendas algo nuevo y útil, propón añadirlo siguiendo `APRENDIZAJE/como-retroalimentar.md`.
>
> Confírmame que has adoptado la identidad y dame la bienvenida como StructurAI.»

Si el chat no puede leer archivos, pega primero los 4 archivos de `IDENTITY/` y el `MEMORY.md`;
después ve pegando el archivo de `CONOCIMIENTO/` que haga falta según el tema.

---

## 🧠 Qué es esto (y qué no)

- **Es** una base de conocimiento estructurada + una "personalidad" para que un LLM responda
  preguntas abiertas de ingeniería estructural y construcción mexicana con criterio de obra.
- **No es** un sustituto del DRO/Corresponsable ni del proyecto estructural sellado. Todo lo
  que produce es **orientativo** y debe verificarse contra el texto vigente de la norma y el
  juicio de un ingeniero responsable. (Ver `IDENTITY/operating-principles.md`.)

---

## 📂 Estructura de la carpeta

```
structurai/
├── README.md                      ← este archivo (bootstrap de importación)
├── MEMORY.md                      ← índice maestro: qué hay y dónde
│
├── IDENTITY/                      ← quién es StructurAI
│   ├── soul.md                    ← propósito, valores, "alma"
│   ├── personality.md             ← tono, estilo, cómo habla
│   ├── context.md                 ← contexto: usuario, normas, alcance geográfico
│   └── operating-principles.md    ← reglas de respuesta y seguridad profesional
│
├── CONOCIMIENTO/                  ← el saber técnico (26 documentos)
│   ├── 00-indice.md               ← enruta cada pregunta a su archivo
│   ├── normativa/                 ← concreto+ACI, mampostería, acero+AISC, sismo+CFE, cargas,
│   │   │                             cimentaciones, viento, losas/punzonamiento, presforzado,
│   │   │                             conexiones de acero, comportamiento sísmico, puentes, materiales avanzados
│   ├── fundamentos-teoria/        ← análisis y dinámica, confiabilidad/desempeño, fuego/fatiga/sustentabilidad
│   ├── procesos-constructivos/    ← procesos, control de calidad, vivienda/autoconstrucción
│   ├── diseno-conceptual/         ← estructuración, criterio senior, constructibilidad
│   ├── elementos-especiales/      ← escaleras/muros/tanques/pretiles/volados, estructuras de gran claro
│   ├── patologia-y-evaluacion/    ← grietas, corrosión, refuerzo, evaluación post-sismo
│   ├── herramientas-digitales/    ← software, FEM, BIM, optimización, SHM, IA
│   ├── referencia/                ← mapa global de códigos + temarios de posgrados de élite
│   └── preguntas-abiertas/        ← ejemplos resueltos (¿cada cuánto un castillo?, etc.)
│
└── APRENDIZAJE/                   ← cómo crece StructurAI
    ├── changelog.md               ← bitácora de qué se ha añadido y cuándo
    └── como-retroalimentar.md     ← protocolo para incorporar conocimiento nuevo
```

---

## 🤖 Bot en vivo (Telegram + Web)

La carpeta `bot/` contiene un bot listo para desplegar **gratis** (Cloudflare Workers + Gemini)
que responde como StructurAI en **Telegram** y en una **web app de chat**, y aprende del uso vía
**GitHub Issues** (semi-automático con tu aprobación). El bot lee su cerebro directo de este repo:
editas un `.md` y haces `git push`, y el bot toma la última versión.

➡️ **Guía de despliegue paso a paso:** [bot/SETUP.md](bot/SETUP.md)

## 🔁 Cómo se retroalimenta

Cada vez que StructurAI y tú resuelven algo nuevo (un valor de catálogo, una práctica de obra,
una aclaración normativa), se guarda siguiendo `APRENDIZAJE/como-retroalimentar.md` y se anota
una línea en `MEMORY.md` y en `APRENDIZAJE/changelog.md`. Así la carpeta se vuelve más sabia con
el uso y sigue siendo 100 % portátil.

---

## 📌 Versión y alcance normativo

- **Normas mexicanas:** NTC-2017 del RCDMX (Concreto, Acero, Mampostería, Sismo, Criterios y Acciones), con notas de la actualización 2020 de Mampostería.
- **CFE:** Manual de Diseño de Obras Civiles — Diseño por Sismo (MDOC-DS 2015), PRODISIS.
- **Internacionales:** ACI 318-19, AISC 360-16 / 341 / 358 (LRFD), referencias ASCE 7.
- **Procesos:** NMX-C-406 (vigueta-bovedilla), fichas de fabricantes mexicanos, prácticas de obra.

- **Teoría y frontera:** análisis matricial/FEM/dinámica, confiabilidad y diseño por desempeño (β, FEMA P-58), fuego/fatiga/fractura, materiales avanzados (UHPC, CLT, LC3), gran claro, BIM/FEM/IA, y mapa global de códigos + posgrados de élite.

Creado: 2026-06-14 · v3.0 · Idioma: español (MX) · 26 documentos de conocimiento (~45,000 palabras).
