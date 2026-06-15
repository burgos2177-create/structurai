# Changelog de StructurAI

Bitácora de crecimiento de la base de conocimiento. Lo más reciente arriba.
Formato: `AAAA-MM-DD — qué cambió — fuente/origen`.

---

## 2026-06-14 — Génesis (v1.0)

Creación del entorno completo a partir de investigación verificada con fuentes (NTC, ACI, AISC,
CFE, fabricantes mexicanos).

**Identidad creada:**
- `IDENTITY/soul.md`, `personality.md`, `context.md`, `operating-principles.md`.

**Conocimiento creado:**
- `CONOCIMIENTO/normativa/ntc-concreto-aci318.md` — ✅ NTC-DCEC 2017 vs ACI 318-19.
- `CONOCIMIENTO/normativa/ntc-mamposteria.md` — ✅ NTC-Mampostería 2017/2020 (castillos ≤1.5H y ≤4m).
- `CONOCIMIENTO/normativa/ntc-acero-aisc-lrfd.md` — ✅ NTC-DCEA + AISC 360/341/358.
- `CONOCIMIENTO/normativa/ntc-sismo-cfe-mdoc.md` — ✅ NTC-Sismo (SASID) + CFE MDOC-DS (PRODISIS).
- `CONOCIMIENTO/normativa/ntc-criterios-cargas.md` — ✅ NTC-Criterios + ASCE 7.
- `CONOCIMIENTO/procesos-constructivos/procesos-constructivos.md` — ✅/👷 vigueta-bovedilla, mampostería, cimentaciones, concreto, montaje.
- `CONOCIMIENTO/diseno-conceptual/estructuracion-secciones-variables.md` — ✅ estructuración y secciones variables.
- `CONOCIMIENTO/preguntas-abiertas/preguntas-abiertas.md` — 6 preguntas semilla resueltas + plantilla.

**Infraestructura:**
- `README.md` (bootstrap de importación), `MEMORY.md` (índice maestro), `CONOCIMIENTO/00-indice.md`,
  `APRENDIZAJE/como-retroalimentar.md`.

**Notas de verificación pendientes (⚠️ por cotejar contra texto oficial vigente):**
- Tablas de drift 4.2.1–4.2.3 de NTC-Sismo: valores ancla confirmados; intermedios del articulado.
- Fórmula exacta de ℓdb (desarrollo) y coeficiente de losas en dos direcciones de NTC-Concreto.
- Valores de cargas vivas de azotea: existe ajuste en revisión 2023 vs 2017.

---

<!-- Nuevas entradas debajo de esta línea, las más recientes arriba. -->

## 2026-06-14 — Oleada final v3.0 (cierre de temario)

Tercera fase: cerrar el temario de una maestría de estructuras de élite (8 frentes en paralelo,
verificación web). Se añadieron **8 documentos** y 3 carpetas nuevas. Total: **26 docs de conocimiento.**

**Nuevos documentos:**
- `fundamentos-teoria/analisis-dinamica-estructural.md` — ✅ análisis (rigidez matricial, FEM, plástico/límite) y dinámica (1GDL/NGDL, espectro de respuesta, no lineal pushover/time-history/IDA). El andamiaje teórico.
- `fundamentos-teoria/confiabilidad-diseno-desempeno.md` — ✅ β/Pf/FORM, LRFD teoría, PBD/Vision 2000, PBEE/FEMA P-58 (ecuación PEER), resiliencia/low-damage, riesgo.
- `fundamentos-teoria/fuego-fatiga-fractura-sustentabilidad.md` — ✅ fuego (acero/concreto/madera, WTC), fatiga (S-N, categorías), fractura (DBTT, Liberty ships), carbono incorporado/LCA, durabilidad.
- `normativa/puentes-aashto-sct.md` — ✅ tipos, HL-93/IMT, LRFD AASHTO, sismo/aeroelasticidad (Tacoma), métodos constructivos, socavación.
- `normativa/materiales-avanzados.md` — ✅ aditivos/SCM, UHPC/SCC/FRC, durabilidad (fib B34), aceros avanzados, FRP (ACI 440.11), madera masiva (CLT), cold-formed, LC3/sustentabilidad.
- `elementos-especiales/estructuras-gran-claro.md` — ✅ armaduras/espaciales, arcos, cables/membranas, cascarones (Candela), neumáticas, torres/silos (Janssen), edificios altos (tubo/diagrid/megaestructura).
- `herramientas-digitales/ingenieria-estructural-digital.md` — ✅ software, FEM, BIM, paramétrico, optimización, SHM, gemelos digitales, IA (con criterio de responsabilidad).
- `referencia/mapa-codigos-posgrados.md` — ✅ códigos mundiales (MX/EUA/Europa/intl + ediciones 2022-2025), temarios de maestrías de élite, frontera, organizaciones, criterio de nivel mundial.

**Ampliaciones:** `00-indice.md` y `MEMORY.md` actualizados a 26 docs; mapa rápido pregunta→archivo extendido.

**Notas de verificación (⚠️):** valores típicos en fórmulas teóricas (β, factores de forma, IM AASHTO);
modelos IMT (PDF normativo dio 403 al fetch directo, datos de resúmenes indexados); algunos nombres de
cursos de posgrado descritos por área; ediciones de código a 2026 (confirmar vigencia local).


## 2026-06-14 — Expansión masiva v2.0 (artillería completa)

Segunda fase de investigación (12 frentes en paralelo con verificación web) para que StructurAI
"hable como 100 ingenieros senior de estructuras + 100 de campo". Se añadieron **10 documentos de
conocimiento** y se ampliaron índices y banco de preguntas.

**Nuevos documentos:**
- `normativa/cimentaciones-geotecnia.md` — ✅ NTC-Cimentaciones 2017 (F_R=0.35/0.65, Tabla 3.1.1, zonificación CDMX verificadas), pilas/pilotes/cajón, excavaciones profundas, criterio de obra.
- `normativa/viento-ntc-cfe-asce.md` — ✅ NTC-Viento + CFE MDOC-DV + ASCE 7; qz, Cp, vórtices, viento vs sismo.
- `normativa/losas-punzonamiento.md` — ✅ losas macizas/planas/reticulares; punzonamiento ACI 318-19 (λs, stud rails); lecciones 2017.
- `normativa/presforzado-prefabricados.md` — ✅/👷 pre/postensado, prefabricados mexicanos, conexiones sísmicas.
- `normativa/conexiones-acero-soldadura.md` — ✅ AISC 360/341/358, AWS D1.1, placas base/anclas, montaje.
- `normativa/comportamiento-sismico-proteccion.md` — ✅ mecanismos de falla, ductilidad, aislamiento/disipadores/TMD, casos MX (Torre Mayor, 85/2017).
- `procesos-constructivos/control-calidad-supervision.md` — 👷✅ pruebas, tolerancias ACI 117, rendimientos, bitácora, checklist de liberación de colado.
- `procesos-constructivos/vivienda-mamposteria-practica.md` — 👷 autoconstrucción, densidad de muros, errores típicos, criterio sísmico de vivienda.
- `diseno-conceptual/criterio-estructurista-senior.md` — 🧑‍🔧 reglas de dedo, configuración, "lo que la norma no dice", errores de modelación, sanity checks, checklist.
- `diseno-conceptual/constructibilidad-diseno-obra.md` — 👷 interacción diseño↔obra: congestión de acero, secuencia, detalles imprácticos, MEP, RFI.
- `elementos-especiales/elementos-especiales.md` — ✅ escaleras, rampas, muros de contención, tanques/albercas (flotación), pretiles, volados, transferencias.
- `patologia-y-evaluacion/patologia-rehabilitacion.md` — ✅ grietas, corrosión, pruebas, refuerzo (FRP/encamisado), evaluación post-sismo, criterio de perito.

**Ampliaciones:** `00-indice.md` y `MEMORY.md` actualizados (18 documentos); banco de preguntas
abiertas ampliado de 6 a 13 (P7-P13: losa plana/punzonamiento, densidad de muros en vivienda,
perforar trabes, viento vs sismo, flotación de tanques, congestión de acero, aisladores).

**Notas de verificación pendientes (⚠️):** ediciones NTC 2017 vs 2023 (drift, irregularidades);
tablas de coeficientes de losas; VR por ciudad y Cp de cubiertas (en imágenes de PDF); valores de
q_adm/k de cimentación (la NTC obliga a exploración de sitio, no los tabula); sobrecostos de
aislamiento (2-10%, rango entre fuentes).


