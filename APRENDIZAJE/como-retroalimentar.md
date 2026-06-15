# Cómo retroalimentar a StructurAI

Protocolo para que StructurAI **crezca** sin perder su portabilidad. Cualquier conocimiento nuevo
y reutilizable que surja en una conversación se guarda como texto, en esta misma carpeta, para que
el siguiente chat de Claude lo herede al leerla.

---

## Cuándo guardar algo

Guarda cuando aparezca conocimiento **nuevo, correcto y reutilizable**, por ejemplo:

- Un **valor de catálogo o de norma** que no estaba (un intereje raro de un fabricante, un drift de
  un subcaso, una proporción de mortero local).
- Una **práctica de obra** validada (cómo se hace algo en una región, un truco de residente).
- Una **corrección del usuario experto** ("en realidad la NTC dice X, no Y"). Estas tienen
  prioridad: el usuario que firma sabe más que un valor genérico.
- Una **pregunta abierta nueva** bien resuelta (va al banco de preguntas).
- Una **aclaración de edición normativa** (qué cambió entre 2017 y 2023, etc.).

**No** guardes: cosas efímeras de una sola conversación, datos sin fuente o dudosos, ni opiniones
sin respaldo. Ante la duda sobre un valor de seguridad, NO lo guardes como verdad: márcalo como
"por verificar".

---

## Cómo guardar (3 pasos)

### Paso 1 — Coloca el contenido en el archivo correcto
- Conocimiento normativo → el archivo de `CONOCIMIENTO/normativa/` que corresponda.
- Práctica de obra → `CONOCIMIENTO/procesos-constructivos/procesos-constructivos.md`.
- Criterio de diseño/estructuración → `CONOCIMIENTO/diseno-conceptual/...`.
- Pregunta abierta resuelta → `CONOCIMIENTO/preguntas-abiertas/preguntas-abiertas.md` (usa la
  plantilla del final de ese archivo).
- ¿Tema nuevo que no encaja? Crea un archivo nuevo en la subcarpeta adecuada y regístralo.

Cada entrada nueva debe traer: **el dato, su porqué, su fuente, y la fecha** (formato AAAA-MM-DD).
Si es una corrección del usuario, anótalo: `(corrección de usuario experto, AAAA-MM-DD)`.

### Paso 2 — Actualiza los índices
- Si creaste un archivo nuevo, añade su línea en `CONOCIMIENTO/00-indice.md` y en `MEMORY.md`.
- Si solo ampliaste un archivo existente, no hace falta tocar el índice (salvo que cambie su alcance).

### Paso 3 — Anota en el changelog
Añade una línea en `APRENDIZAJE/changelog.md` con fecha, qué se añadió y de dónde salió.

---

## Marcado de confianza (úsalo siempre)

Para no propagar errores en un dominio de seguridad, marca cada dato nuevo:

- ✅ **Verificado** — confirmado contra texto normativo, fabricante o fuente citada.
- ⚠️ **Por verificar** — plausible pero sin fuente confirmada; usar con cautela y advertirlo.
- 👷 **Práctica de obra** — costumbre de campo, no necesariamente mínimo normativo.
- 🧑‍🔧 **Corrección de usuario experto** — el usuario que sabe lo corrigió; prevalece, con su porqué.

---

## Cómo lo propone StructurAI en conversación

Cuando StructurAI detecte conocimiento guardable, dice algo como:

> "Esto vale la pena recordarlo. Propongo añadir a `[archivo]`: **[dato]** — *porqué:* [...] —
> *fuente:* [...] — marcado como [✅/⚠️/👷/🧑‍🔧]. ¿Lo guardo?"

Si el usuario confirma (o si la instrucción de arranque autoriza guardar automáticamente), se
realizan los 3 pasos. Así la carpeta es cada vez más sabia y sigue siendo 100 % portátil: se copia,
se pega en otro chat, y todo el aprendizaje viaja con ella.
