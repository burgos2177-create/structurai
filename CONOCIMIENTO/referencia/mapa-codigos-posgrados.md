# Mapa Global de Códigos y Temario de Maestrías de Estructuras de Élite

> Mapa mental del campo: qué normas existen y cómo se relacionan, qué enseñan los posgrados de élite, hacia dónde va la investigación, qué organizaciones importan y qué dominar para estar al nivel mundial.

## 1. Panorama de códigos mundiales

**Filosofía común:** casi todos usan **diseño por estados límite (LRFD)** con factores parciales calibrados por **confiabilidad** (base: **ISO 2394**, en Europa **EN 1990**). México (NTC, CFE) adopta el mismo marco.

### México
| Documento | Alcance |
|---|---|
| **RCDF** | Reglamento marco de edificación CDMX → remite a las NTC |
| **NTC-CDMX 2023** (10 normas) | Criterios y Acciones, Sismo 2023, Viento, Concreto, Acero, Mampostería, Madera y Bambú, Cimentaciones, Evaluación y Rehabilitación, Revisión de Seguridad |
| **CFE-MDOC** | Presas, líneas, industria, torres. **Diseño por Sismo 2015** y por Viento; referencia nacional de peligro |
| **SCT/SICT** | Puentes/carreteras (usa AASHTO LRFD como base) |
| **NMX/ONNCCE** | Normas de producto/ensayo (análogo a ASTM) |

### EUA (I-Codes + estándares de sociedades)
**IBC 2024** (marco) adopta por referencia: **ASCE/SEI 7-22** (cargas), **ACI 318-25** (concreto), **AISC 360-22/341-22/358-22** (acero), **AASHTO LRFD 10ª 2024** (puentes), **TMS 402-22** (mampostería), **NDS 2024** (madera), **ASCE 41-23** (evaluación/retrofit).

### Europa — Eurocódigos (EN 1990-1999)
EC0 EN1990 (bases), EC1 acciones, EC2 concreto, EC3 acero, EC4 mixtas, EC5 madera, EC6 mampostería, EC7 geotecnia, **EC8 sismo**, EC9 aluminio. Cada país añade su **Anexo Nacional**.

### Internacional
**fib Model Code 2010/2020** (concreto, estado del arte que alimenta EC2/ACI/NTC, durabilidad), **ISO 2394** (confiabilidad).

### Otros
Canadá (**NBCC**+CSA), Japón (BSL+AIJ, líder en aislamiento), China (**GB**), India (**IS**), NZ/Australia (**AS/NZS 1170**, cuna del diseño por capacidad y low-damage), Chile (**NCh 433**, gran desempeño real), Perú (E.030), Colombia (NSR-10).

### Cómo se relaciona México
- **Concreto:** NTC sigue de cerca **ACI 318**; fib en durabilidad.
- **Acero:** NTC alineada con **AISC 360/341/358**.
- **Puentes:** práctica SICT usa **AASHTO LRFD**.
- **Sismo:** escuela propia fuerte (CDMX por sus suelos blandos **únicos en el mundo**; CFE-MDOC nacional). Comparte el marco con ASCE 7/EC8, pero los **espectros de sitio de CDMX** no se importan.
- **Bases:** todos descienden de **ISO 2394**.

**Diferencias filosóficas:** EUA (prescriptivo + reference standards, fuerte en SDC); Europa (primeros principios, anexos nacionales, rigor geotécnico); Australia/NZ/Japón (pioneros en capacidad/aislamiento/low-damage); México-CDMX (caso casi único por interacción suelo-estructura).

## 2. Temario de las maestrías de élite (ADN del estructurista)

**UC Berkeley (SEMM)** — cuna de PEER/OpenSees/FEM: mecánica de sólidos/medios continuos, análisis estructural, concreto/acero/presforzado avanzado, **riesgo (Engineering Risk Analysis)**, materiales (mecanismos de falla, tecnología del concreto), dinámica/sismo, FEM no lineal. Minor obligatorio en **matemáticas/estadística**.
**MIT (CEE)** — mecánica de materiales (elasticidad, plasticidad, fractura, fatiga), diseño computacional/**optimización**, interfaz ingeniería-arquitectura, geomecánica.
**Stanford (Blume)** — análisis y diseño, **análisis probabilístico de peligro/riesgo (PSHA)**, no lineal, SHM, evaluación de pérdidas (PBEE, el framework PEER nació Stanford-Berkeley).
**Caltech (Applied Mechanics)** — elasticidad/plasticidad, **propagación de ondas**, fractura, dinámica, análisis matricial, FEM, **control e identificación de sistemas**, instrumentación de movimiento fuerte.
**Imperial College** — acero/concreto avanzado, presforzado, tecnología del concreto, regiones D, **FEM**, dinámica, madera/mampostería, opción Data Science.
**ETH Zürich (IBK + SDEE)** — diseño conceptual, mecánica estructural, dinámica y vibración, **diseño sísmico I/II**, construcción digital (Block Research Group, bóvedas).
**U. Tokyo** — diagnóstico sísmico, reforzamiento, mantenimiento; líder mundial en **aislamiento, disipación y mesas vibradoras (E-Defense)**.
**NUS** — concreto/acero avanzado, dinámica/sismo, FEM, offshore, viento, confiabilidad.
**UNAM (Posgrado en Ingeniería, II-UNAM)** — campos: **Acero, Concreto, Ingeniería Sísmica**; matemáticas común; análisis avanzado, dinámica, sismo, FEM, confiabilidad. Investigación sísmica de primer nivel en Latinoamérica.
**IPN (SEPI/ESIA)** — análisis, dinámica, sismo, concreto/acero, FEM, interacción suelo-estructura; ligado a las NTC-CDMX.

**Núcleo común por área:** análisis avanzado (matricial, no lineal, estabilidad, plástico/límite) · mecánica del medio continuo (elasticidad, plasticidad, fractura/fatiga) · **dinámica e ingeniería sísmica** (espectros, modal, no lineal, capacidad, PSHA, PBEE, aislamiento) · FEM y computación (OpenSees/Abaqus, optimización) · concreto avanzado (regiones D, presforzado, fib) · acero/mixtas (conexiones, marcos sísmicos) · **confiabilidad y riesgo** (FORM/SORM, Monte Carlo, calibración ISO 2394) · materiales · puentes · viento · geotecnia/SSI · matemáticas/estadística.

## 3. Frontera de investigación
Resiliencia y PBEE/PBWE; **low-damage** (rocking, postensado, fusibles); **IA/ML** (predicción no lineal, generativo, surrogate); **gemelos digitales + SHM + IoT**; **materiales sustentables/descarbonización** (carbono incorporado, ACI 318-25 apéndice de sustentabilidad); **impresión 3D de concreto**; infraestructura envejecida (ASCE 41-23); riesgo multi-amenaza y cambio climático (tsunami en ASCE 7-22, riesgo objetivo en AASHTO 10ª); modelado multiescala.

## 4. Organizaciones y recursos

| Org | Aporta |
|---|---|
| **ACI** | ACI 318, Structural Journal |
| **AISC** | AISC 360/341/358, Modern Steel |
| **ASCE/SEI** | ASCE 7, ASCE 41, J. of Structural Engineering |
| **EERI** | Earthquake Spectra, reconnaissance |
| **PEER** | OpenSees, PBEE, NGA |
| **fib** | Model Code, Structural Concrete |
| **IABSE** | Structural Engineering International |
| **México: SMIE** | Congreso Nacional de Ingeniería Estructural |
| **México: SMIS** | Revista de Ingeniería Sísmica |
| **II-UNAM, CENAPRED, CICM** | Investigación, normativa, peligro |

**Revistas:** JSE (ASCE), EESD, Earthquake Spectra, Engineering Structures, Structural Safety, Structural Concrete (fib), Revista de Ingeniería Sísmica (SMIS). **Conferencias:** WCEE, fib Symposium, IABSE Congress.

## 5. Criterio: qué dominar para estar al nivel mundial

1. **Fundamentos profundos:** mecánica del medio continuo, análisis matricial/no lineal, **dinámica** y FEM hasta poder *programarlo*; probabilidad/estadística como segunda lengua.
2. **Bilingüismo normativo:** dominar **NTC-CDMX + CFE-MDOC** y **ASCE 7/ACI 318/AISC 360-341**, con lectura de **Eurocódigos** y **fib MC**. Entender *por qué* difieren.
3. **Sismo a nivel de desempeño:** capacidad, espectros/PSHA, no lineal (pushover, time-history), **PBEE**, aislamiento/disipación, retrofit (**ASCE 41 / NTC-Rehabilitación**). En México es identidad profesional.
4. **Especialización T-shape:** una vertical de élite (puentes-AASHTO, altos+viento, presforzado, sismo-SSI) sobre base ancha.
5. **Cómputo moderno + datos:** OpenSees/Abaqus, Python, optimización, alfabetización en **ML/digital twins/SHM**.
6. **Sustentabilidad y resiliencia como criterio**, no añadido.
7. **Comunidad:** ACI/AISC/ASCE-SEI/EERI/fib + **SMIE/SMIS**; leer JSE/EESD/Earthquake Spectra; asistir a WCEE/IABSE/Congreso Nacional.

> **Mapa de prioridades para el estructurista mexicano:** domina fundamentos y dinámica/sismo → vuélvete bilingüe NTC↔ACI/AISC con lectura de Eurocódigos → especialízate → suma cómputo/IA y resiliencia → conéctate con la comunidad global. **Tu ventaja local (suelos de CDMX, sismo) es, bien explotada, una ventaja mundial.**

## Fuentes

- UC Berkeley SEMM: https://ce.berkeley.edu/programs/semm/graduate-requirements
- Stanford CEE / Blume: https://blume.stanford.edu/
- Imperial — MSc Concrete Structures: https://www.imperial.ac.uk/study/pg/civil-engineering/concrete-structures/
- ETH Zürich IBK: https://ibk.ethz.ch/education.html
- UNAM Posgrado Ingeniería (Estructuras): https://www.ingenieria.unam.mx/posgradoingcivil/aspirantes-maestria.html
- NTC-Sismo 2023: https://iisee.kenken.go.jp/worldlist/34_Mexico/Mexico%202023-09-16%20NTC-SISMO%20-%20Para%20Entrega.pdf
- Eurocódigos (CE): https://eurocodes.jrc.ec.europa.eu/EN-Eurocodes/eurocode-basis-structural-design
- ASCE 7-22 / ACI 318-25 / AISC 360-22 / AASHTO 10ª — sociedades respectivas.

> Ediciones a 2026 verificadas; algunos nombres de cursos se describen por área. Confirmar catálogos vigentes de cada programa.
