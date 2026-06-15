# Conexiones de Acero, Soldadura, Placas Base y Anclajes

> Bases: AISC 360-16 (Cap. J), AISC 341/358 (sísmico), AWS D1.1 (soldadura), RCSC (pernos de alta resistencia), NTC-Acero RCDMX-2017. *No repite diseño de miembros; enfoca la transferencia de fuerzas en las uniones y su ejecución.*

## 1. Conexiones atornilladas

| Tipo | Mecanismo | Gobierna | Cuándo |
|---|---|---|---|
| **Aplastamiento (bearing)** | Perno a cortante; transfiere por aplastamiento perno↔placa | Cortante del perno / aplastamiento-desgarre | Default, conexiones estáticas |
| **Deslizamiento crítico (SC)** | Fricción entre superficies; requiere **pretensado** | Resistencia al deslizamiento | Cargas reversibles/cíclicas, fatiga, sísmico, agujeros sobremedida |

**Apriete:** *snug-tight* (contacto firme, default bearing) vs **pretensionado** (≥ Tabla J3.1; obligatorio en SC, sísmico, fatiga, A490 a tensión).

**Pernos (ASTM F3125, antes A325/A490):**

| Grado | Fu | Cortante N / X (rosca incluida/excluida) | Tensión |
|---|---|---|---|
| **A325** | 120 ksi | Fnv 54 / 68 ksi | Fnt 90 ksi |
| **A490** | 150 ksi | Fnv 68 / 84 ksi | Fnt 113 ksi |

φ = 0.75 (LRFD). **A490 no se galvaniza en caliente** (fragilización por hidrógeno).

**Pretensión mínima (Tabla J3.1) = 0.70·Fu·área de tensión.** Ej. A325: ¾"=28 kips, ⅞"=39, 1"=51, 1¼"=71.

**Métodos de pretensado:**

| Método | Cómo | Notas |
|---|---|---|
| **Giro de tuerca** | Desde snug, girar **⅓ vuelta** (L≤4d), **½** (4-8d), **⅔** (>8d) | El más robusto y barato; marca visual con plumón |
| **Llave calibrada** | Torque para ≥1.05× pretensión, verificado con Skidmore | NO arranca de snug; sensible a lubricación/óxido |
| **DTI (ASTM F959)** | Rondana con protuberancias que se aplastan; medir con galga | Inspección visual rápida |
| **TC (twist-off F1852)** | Punta estriada se cizalla a la pretensión correcta | Rápido, a prueba de operador |

> AISC/RCSC **NO reconocen "apretar a torque" prescrito** como medio válido. El torque no es proxy confiable de tensión.

**Geometría (J3.3/J3.4):** separación mín **2⅔d** (preferido **3d**); distancia al borde según Tabla J3.4 (p.ej. ¾": 1¼" cizallado, 1" laminado). Tipos de agujero: STD (estándar), OVS (sobremedida, solo SC), SSL/LSL (ranurados).

**Deslizamiento crítico (J3.8):** `Rn = μ·Du·hf·Tb·ns`, μ = **0.30** (Clase A) / **0.50** (Clase B), Du = 1.13. φ = 1.00 (STD) / 0.85 (OVS).

## 2. Conexiones soldadas

| Tipo | Garganta efectiva | Uso |
|---|---|---|
| **Filete** | te = 0.707·w (lados a 90°) | El más usado, no requiere bisel |
| **CJP (penetración completa)** | te = espesor de placa | Desarrolla 100% del metal base; no se calcula |
| **PJP (penetración parcial)** | te = profundidad del bisel | Económica; restricciones sísmicas |

**Electrodos:** **E70XX** (70 ksi) matching para A36/A572-50/A992. **Bajo hidrógeno (E7018)** obligatorio en alta resistencia y sísmico (mantener en horno). Procesos: SMAW (campo), FCAW, GMAW, SAW (taller).

**Tamaño mínimo de filete (Tabla J2.4):** ≤¼" → 1/8"; ¼-½" → 3/16"; ½-¾" → ¼"; >¾" → 5/16". **Máximo:** material ≥¼" → espesor − 1/16". Resistencia (E70XX): φRn = 1.392·w·L kips. Longitud mín ≥ 4·w.

**Precalentamiento (AWS D1.1):** según acero, espesor e hidrógeno; de sin requisito a 65-110 °C en espesores gruesos. CE alto → más precalentamiento. Verificar con crayón térmico antes de iniciar.

**Simbología (AWS A2.4):** símbolo **debajo de la línea = lado de la flecha**; **arriba = lado opuesto**. Triángulo = filete; círculo = todo alrededor; banderín = soldar en campo.

## 3. AWS D1.1 — Calificación e inspección

| Documento | Qué es |
|---|---|
| **WPS** | Receta de soldadura (proceso, aporte, amperaje, precalentamiento, posición) |
| **PQR** | Registro del cupón soldado y **ensayado** que respalda un WPS |
| **WPS precalificado** | Exento de PQR si cumple los límites de D1.1 (metales/electrodos listados) |
| **WPQ** | Calificación del soldador (cupón ensayado por doblez/RT) |

**END (NDT):** **VT** (visual, 100%), **PT** (penetrantes, superficie), **MT** (partículas, ferromagnéticos), **UT** (ultrasonido, interno — primario en CJP a tensión y conexiones sísmicas), **RT** (radiografía, registro).

**Aceptación visual:** **grietas = CERO** (ninguna aceptable); socavado ≤ 1/32" (transversal a tensión) ó 1/16"; porosidad limitada; perfil sin traslape; cráteres rellenos. Sísmico (Demand Critical Welds): tenacidad Charpy + backing/tabs tratados.

## 4. Conexiones típicas

**Viga-columna a momento (precalificadas AISC 358-16):**

| Conexión | Concepto |
|---|---|
| **RBS (dogbone)** | Recortar alas de la viga para forzar la rótula fuera de la cara de columna. Requiere arriostramiento lateral cerca de la RBS |
| **End-plate (BUEP/BSEP)** | Placa soldada en taller, atornillada en campo (sin soldadura de campo) |
| **WUF-W** | Alas con CJP a la columna, alma con placa de cortante |
| Propietarias | Kaiser, ConXL, SidePlate, Strong Frame |

Requisitos sísmicos: **continuity plates** (alineadas con alas de viga), **doubler plates** (zona de panel), **strong-column/weak-beam** (ΣMpc*/ΣMpb* > 1.0), **DCW** con tenacidad certificada, backing inferior removido.

**Conexiones a cortante:** placa simple/**shear tab** (1 fila de 2-12 pernos, línea de pernos↔soldadura ≤ 3.5"), doble ángulo, asiento, placa de extremo. Revisar: cortante/aplastamiento, fluencia/ruptura de placa, **bloque de cortante**, alma despatinada (coped).

**Empalmes de columna:** a ~1.2 m sobre piso; compresión por contacto (milled-to-bear) pero con resistencia mínima a tensión/flexión exigida. Sísmico: desarrollar resistencias específicas.

**Contraventeo (gusset plates):** **Método de Fuerza Uniforme (UFM)**. Estados límite: sección Whitmore, pandeo de placa, bloque de cortante. Sísmico (SCBF): dejar **2t lineal / 8t elíptica** para la rótula fuera del plano de la riostra.

## 5. Placas base y anclas (AISC Design Guide 1)

**Placa base (axial):**
1. Aplastamiento del concreto: `φc·Pp`, φc=0.65, `Pp = 0.85·f'c·A1·√(A2/A1)` con **√(A2/A1) ≤ 2**.
2. Espesor: `tp = ℓ·√(2·Pu/(0.90·Fy·B·N))`, ℓ = mayor voladizo (m, n).

**Casos:** solo axial (presión uniforme); axial + momento pequeño (e ≤ N/6, toda compresión); momento grande (e > N/6, **anclas en tensión** + bloque de compresión); cortante (fricción + anclas + llave).

**Anclas:** **ASTM F1554** Gr. 36/55/105 (varilla roscada, headed). Diseño del concreto por **ACI 318 Cap. 17** (breakout, pull-out, side-face blowout); suele gobernar el concreto, no el acero. Refuerzo suplementario (hairpins).

**Cortante en la base:** fricción (μ≈0.55-0.7), aplastamiento de anclas, **llave de cortante (shear lug)** `φ·1.3·f'c·Al` (φ=0.65), o embeber la base.

**Grout:** sin contracción, ≥ 2× f'c del cimiento, espesor 25-50 mm con venteo. **Agujeros sobremedida** en placa base (Tabla 14-2) para tolerar imprecisión de anclas; **rondana de placa** sobre el agujero.

**Tolerancias de anclas (AISC CSP):** ±1/8" dentro del grupo, ±1/4" del patrón a la línea de columnas. Corrección de anclas mal puestas → **aprobación del EOR**.

## 6. Montaje y criterio de campo

**Secuencia:** survey de anclas ANTES de izar → asiento de columnas (tuercas de nivel/shims) → vigas con pernos de montaje (grúa no se suelta sin ≥2 pernos) → **plomeo** → **contraventeo provisional** → apriete/pretensado final → **soldaduras de campo al final** → grout.

**Seguridad (OSHA):** ≥2 pernos por conexión antes de soltar la grúa; columnas con ≥4 anclas (carga excéntrica de montaje). No retirar contraventeo hasta que el sistema lateral definitivo esté completo.

**Errores típicos:**

| Error | Consecuencia | Prevención |
|---|---|---|
| **Anclas mal ubicadas** | No asienta / agujero no cuadra | Survey antes de colar; plantilla; agujeros sobremedida |
| **Soldadura sin precalentamiento** | Agrietamiento por hidrógeno; rechazo UT | Tempilstik; horno para electrodos; no soldar acero helado |
| **Soldadura de campo mal ejecutada** | Rechazo VT/UT, reproceso | Soldador calificado para la posición real; CWI presente |
| **"Conexiones que no llegan"** | Pernos cortos, placas que no traslapan | Verificar grip + hilos; revisar holguras en detallado |
| Pernos no pretensados donde se requiere | Deslizamiento, fatiga, falla sísmica | Identificar juntas SC en planos; bitácora |
| Falta de continuity/doubler plates | Falla local en sismo | Verificar AISC 358/341 |
| Backing/weld tabs no removidos | Falla frágil (lección Northridge 1994) | Remover backing + filete de refuerzo |

## Criterio de obra / voz senior

- **"Suelda en taller, atornilla en campo."** La soldadura de campo es cara, lenta y dependiente del clima/posición/operador.
- **El agujero sobremedida es tu amigo, hasta que deja de serlo** (en SC castiga con φ menor y exige rondana endurecida).
- **Nunca confíes el cortante de base solo a la fricción del grout.** Pon llave de cortante o diseña anclas para cortante.
- **La grieta es cero. Punto.** Socavado y porosidad tienen tolerancia; las grietas no.
- **Precalienta o paga después.** El ahorro se va en reproceso de UT y en una junta frágil.
- **El que aprieta no es el que inspecciona.** Pretensado con bitácora y verificación independiente.
- **Plomea antes de soldar y antes de groutear.** Si sueldas el nudo fuera de plomo, congelaste el error.
- **Lección Northridge:** backing no removido, weld tabs, electrodos sin tenacidad y el weld access hole. AISC 358/341 + DCW + Charpy son la respuesta.
- **No fuerces lo que no llega.** Casi siempre hay una causa aguas arriba (ancla, fabricación, plomeo).

## Fuentes

- AISC 360-16 Specification (Cap. J): https://www.aisc.org/globalassets/aisc/publications/standards/a360-16-spec-and-commentary_june-2018.pdf
- RCSC Specification (pernos A325/A490): https://www.boltcouncil.org/files/2004RCSCSpecification.pdf
- Giro de tuerca / DTI (Applied Bolting): https://appliedbolting.com/pdf/turn-of-nut-download.pdf
- AWS D1.1 inspección visual — aceptación: https://qualitypros.com.au/guide-to-aws-d1-1-visual-inspection-acceptance-criteria-2025-edition/
- AISC 358-16 conexiones precalificadas (descarga libre): https://www.aisc.org/news/2016-aisc-prequalified-seismic-moment-connection-standard-available-for-free-download/
- AISC Design Guide 1 (placas base y anclas): http://www.abarsazeha.com/images/ScinteficResources/DesignGuide/AISC%20Design%20Guide%2001%20-%20Base%20Plate%20And%20Anchor%20Rod%20Design%202nd%20Ed.pdf
- Tolerancias de anclas (ASCC PS-14): https://ascconline.org/Portals/ASCC/Files/Position%20Statements/PS-14_AnchorBoltTolerances_09-11_Web_SC.pdf

> **Nota:** valores verificados contra fuentes técnicas (IDEA StatiCa, steelcalculator, RCSC, AISC DG1). Para planos de obra, cotejar tablas exactas contra ediciones físicas de AISC 360-16, 358-16 y AWS D1.1 vigentes.
