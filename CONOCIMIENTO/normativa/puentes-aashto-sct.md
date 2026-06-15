# Ingeniería de Puentes — diseño y construcción

> Bases: **AASHTO LRFD Bridge Design**, **SCT/IMT** (Normas N·PRY·CAR·6·01, modelos IMT 66.5/20.5), CFE-MDOC (sismo/viento). Unidades SI.

## 0. Marco normativo en México
- **AASHTO LRFD** — filosofía LRFD, estados límite, cargas, diseño (base internacional).
- **SCT/IMT** — modelos de carga viva **IMT 66.5** (red principal) e **IMT 20.5** (secundaria), combinaciones, impacto. PT-243 es el sustento técnico.
> **México no copia AASHTO en cargas:** el IMT demostró que los modelos AASHTO (HL-93) dan momentos **inferiores** a los de los vehículos pesados reales mexicanos (T3-S2-R4). Por eso hay modelos propios.

## 1. Tipos por claro

| Tipo | Claro típico | Cuándo |
|---|---|---|
| Losa maciza | 6-12 m | Pasos cortos, alcantarillas |
| Losa-trabe (vigas T) | 12-25 m | Urbanos, sobre obra falsa |
| **Vigas AASHTO presforzadas** | 15-40 m | **El caballito de batalla de México** (prefabricadas, izadas) |
| Vigas cajón | 30-90 m (continuo >150) | Grandes claros, curvas, torsión |
| Continuo multitramo | 30-200 m/tramo | Reduce momentos, elimina juntas |
| Marco rígido (pórtico) | 20-50 m | Pasos a desnivel (sin apoyos) |
| Armadura (truss) | 40-150 m | Acero, ferrocarril, peatonales |
| Arco | 50-300 m (récord >550) | Cañones, buen terreno (empuje) |
| **Atirantado (cable-stayed)** | 150-1,100 m | Rango medio-largo (200-600 m hoy) |
| Colgante (suspension) | 500-2,000+ m | Los claros más largos; sensible al viento |

> Atirantado vs colgante: atirantado lleva la carga al mástil por cables rectos (axiles altos en tablero); colgante usa cable parabólico anclado a tierra. 300-900 m → atirantado; >1,000 m → colgante.

## 2. Partes
- **Superestructura:** tablero/losa (18-25 cm), vigas, diafragmas/contraventeo (distribuyen carga viva, dan estabilidad de montaje), carpeta.
- **Subestructura:** estribos (soportan + retienen terraplén), pilas/columnas, cabezal.
- **Cimentación:** profunda (pilotes/pilas) obligada con socavación o suelo blando; **bajo la profundidad de socavación de diseño**.
- **Apoyos:** neopreno (el más usado), neopreno laminado, **POT** (cargas altas), pendular/esférico (sismo, recentrado).
- **Juntas de dilatación:** punto débil de durabilidad (filtraciones). Tendencia: **puentes integrales** sin juntas.
- **Barreras:** niveles de prueba TL-1 a TL-6 (MASH/AASHTO).

## 3. Cargas

**HL-93 (AASHTO)** = envolvente del mayor de:
1. **Camión de diseño:** ejes 35/145/145 kN; trasero variable 4.3-9.0 m + carga de carril.
2. **Tándem:** 2 ejes de 110 kN a 1.2 m + carga de carril.
3. **Carga de carril:** 9.3 kN/m sobre 3.0 m (sin impacto).

**Modelos mexicanos SCT/IMT:** **IMT 66.5** (~66.5 t) e **IMT 20.5** (~20.5 t). Impacto IMT: junta de dilatación **75%**, un eje **40%**, dos-tres ejes **30%**, más de tres **25%**.

**Impacto AASHTO (IM, solo camión/tándem):** juntas del tablero **75%**, fatiga **15%**, general **33%**.

**Distribución de carga viva:** factores `g` por viga (dependen de S, L, K_g, t_s); o modelo de emparrillado/FEM. **Líneas de influencia** para posicionar la carga móvil.

**Otras:** fatiga (un camión, separación 9.0 m, IM 15%, factor 0.75), frenado (25% de ejes), viento, sismo, empuje, **socavación**.

## 4. Diseño LRFD AASHTO
`Σ ηᵢγᵢQᵢ ≤ φRₙ`. **Estados límite:** Resistencia (I-V), Servicio (I-IV: deflexiones/grietas), Fatiga, Evento Extremo (I sismo, II colisión/socavación). Factores Strength I: DC 1.25/0.90, DW 1.50/0.65, LL+IM **1.75**; Service II 1.30; Extreme Event I (sismo) EQ 1.00. Los permanentes usan **máx o mín** según favorezca.

## 5. Sismo y viento

**Vulnerabilidad sísmica:** (1) **pérdida de apoyo (unseating)** — la trabe se cae del cabezal (causa #1 de colapso sísmico: Loma Prieta, Kobe, Northridge); (2) columnas (cortante frágil, mal confinamiento); (3) **licuación**; (4) apoyos que "caminan".

**Diseño de pilas por capacidad:** rótulas dúctiles inspeccionables en columnas, proteger cabezales/nudos/cimentación. Confinamiento (ganchos 135°). **Ancho de asiento generoso.** Dispositivos: topes (shear keys), restrainers, aisladores, amortiguadores viscosos.

**Aeroelasticidad (claros largos):** **flameo/flutter torsional** (sobre una velocidad crítica el amortiguamiento aerodinámico se vuelve negativo → amplitud crece sin límite), vórtices, buffeting. **Tacoma Narrows (1940):** colapsó con viento de ~64-68 km/h por flameo torsional (tablero de placa llena). Todo puente largo moderno se valida en **túnel de viento** con tableros aerodinámicos (cajón/ranuras).

## 6. Métodos constructivos

| Método | Cuándo |
|---|---|
| Colado in situ sobre obra falsa | Cortos-medios, buen acceso abajo |
| **Vigas prefabricadas (izadas/lanzadas)** | 15-45 m. El más común en México |
| Dovelas — voladizos sucesivos (balanced cantilever) | 60-250 m, sobre ríos/barrancas, sin obra falsa |
| Empujado (incremental launching) | Tablero cajón empujado sobre pilas (terreno inaccesible abajo) |
| Atirantado por dovelas | 200-600 m, control geométrico fino |
| Colgante | >500 m (torres, cables, péndolas) |

> Criterio: si no se puede tocar el suelo bajo el claro → voladizos sucesivos o empujado.

## 7. Socavación y durabilidad

> **Socavación = causa #1 de colapso de puentes a nivel mundial** (~60% de las fallas por causas hidráulicas; ~72% involucró estribos, ~25% pilas). Componentes (HEC-18): general/contracción, local en pila (vórtices de herradura), local en estribo, degradación. **Mitigación:** desplantar la cimentación **bajo la socavación total de diseño** (creciente de 100-500 años), enrocamiento, monitoreo.

**Durabilidad:** corrosión por cloruros (recubrimiento, concreto denso, acero galvanizado/epóxico), filtraciones en juntas (→ puentes integrales), fatiga, RAA, drenaje (el agua mal conducida es el enemigo).

## 8. Criterio: predimensionamiento y errores

**Peralte/claro (h/L):** losa maciza 1/15-1/20; losa-trabe 1/13-1/16; **viga AASHTO presforzada ≈ L/20**; cajón presforzado 1/18-1/22; viga de acero 1/22-1/28; armadura 1/8-1/12. Tablero ≈ L_viga/20 (mín 18 cm); separación de vigas 2.0-3.0 m.

**Errores:** subestimar socavación (causa #1); ancho de asiento insuficiente (unseating); mal confinamiento de columnas; ignorar aeroelasticidad; juntas/drenaje mal resueltos; olvidar cargas de montaje (la viga aislada se vuelca antes de los diafragmas); diafragmas insuficientes; **usar cargas AASHTO sin verificar el modelo mexicano IMT**; ignorar creep/contracción/temperatura en continuos.

## Fuentes

- IMT — Norma de cargas (PT-243): https://imt.mx/archivos/Publicaciones/PublicacionTecnica/pt243.pdf
- IMT — N·PRY·CAR·6·01·003 (modelos IMT): https://normas.imt.mx/storage/normativa/N-PRY-CAR-6-01-003-01.pdf
- AASHTO HL-93: https://engineeringcivil.org/articles/bridge/hl-93-aashto-vehicular-live-loading-truck-tandem-design-lane-load/
- FHWA — LRFD Steel Girder Design Example (factores, IM): https://www.fhwa.dot.gov/bridge/lrfd/us_ds3.cfm
- FHWA — Scour Evaluations: https://www.fhwa.dot.gov/publications/focus/01feb/scour.cfm
- Tacoma Narrows (flameo): https://www.simscale.com/blog/tacoma-narrows-bridge-collapse/

> Verificar valores contra los PDF normativos vigentes (normas.imt.mx) y AASHTO LRFD edición vigente antes de diseño formal.
