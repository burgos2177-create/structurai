# Concreto Presforzado y Prefabricados — Manual de Criterio (México)

> Marco: **NTC-Concreto RCDMX 2017** (Cap. Presfuerzo); **PCI Design Handbook**; **ACI 318/PTI** para postensado; criterio de fabricantes mexicanos (ANIPPAC, ANIVIP, Tubeco, Premex, SEPSA, Velosa). Unidades kg/cm², m, cm, t.

## 0. Conceptos base
- **Presfuerzo:** precomprimir el concreto antes de las cargas, para que trabaje sin (o con poco) agrietamiento. El concreto es bueno a compresión y malo a tensión.
- **Pretensado:** el torón se tensa **antes** de colar (mesa de tensado); la fuerza se transfiere **por adherencia** al cortar. Producto de **planta**.
- **Postensado:** el acero se tensa **después** de endurecido, contra anclajes mecánicos. **Planta o sitio** (losa de edificio = caso in-situ).

## 1. Pretensado vs. Postensado

| Concepto | **Pretensado** | **Postensado** |
|---|---|---|
| Tensado | Antes de colar | Después de fraguar |
| Transferencia | **Adherencia** | **Anclaje mecánico** |
| Dónde | Planta | Planta o **sitio** |
| Trayectoria del cable | Recta (o deflectada) | **Curva/parabólica** (sigue el momento) |
| Ducto/inyección | No | Sí; inyectado si **adherido** |
| Producto típico | Viguetas, TT, alveolares, AASHTO | Losas de edificio, trabes de gran claro, dovelas |

**Cuándo cada uno:** pretensado → prefabricado en serie (repetición, economía de escala). Postensado → claros grandes y geometría a la medida (planta libre, poco peralte, transferencias).

**Ventajas del presfuerzo:** secciones esbeltas → menor peso → **menor sismo**; control de agrietamiento y flecha; aprovecha materiales de alta resistencia.

**Pérdidas de presfuerzo:** la fuerza efectiva de largo plazo ≈ **80-85% de la inicial** (pérdida total **15-20%**).

| Pérdida | Mecanismo | ¿Pre/Post? | Magnitud |
|---|---|---|---|
| Acortamiento elástico | Concreto se comprime al transferir | Ambas | 2-4% |
| Relajación del acero | Pierde tensión a deformación constante | Ambas | 2-4% (baja relajación) |
| Flujo plástico (creep) | Deformación diferida | Ambas | 4-8% |
| Contracción | Concreto se acorta al secar | Ambas | 3-6% |
| **Fricción** (cable vs ducto) | Curvatura + wobble | **Solo post** | 3-8% |
| **Deslizamiento de anclaje** (set) | Cuña se asienta unos mm | **Solo post** | 2-5% |

Pretensado: ~18-22%. Postensado: ~15-20% con fricción/set como protagonistas (cables largos: tensar por ambos extremos).

## 2. Materiales

**Acero (torón estándar):** **ASTM A416 Gr. 270 baja relajación**, fpu ≈ **19,000 kg/cm² (270 ksi/1860 MPa)**.

| Ø | Área | Carga de ruptura |
|---|---|---|
| 3/8" (9.5 mm) | 0.548 cm² | ≈ 10.5 t |
| 1/2" (12.7 mm) | 0.987 cm² | ≈ 18.7 t |
| 0.6" (15.24 mm) | 1.40 cm² | ≈ 26.5 t |

Tensado inicial ~0.70-0.80 fpu; servicio ≈ 0.60 fpu. **Siempre baja relajación.**

**Concreto:** prefabricado pretensado f'c **350-500 kg/cm²**, f'ci ≥ 280 (poder cortar a 12-18 h). Losa postensada f'c 280-350, f'ci ≥ 210 al tensar (~0.7 f'c).

## 3. Elementos prefabricados típicos (claro vs peralte — rangos comerciales)

**Vigueta pretensada + bovedilla:** peralte 13-30 cm, claros hasta ~10.5 m; peso ~200-250 kg/m².

**Losa alveolar/extruida (spancrete/spiroll):** ancho **1.20 m**, peralte 10-30 cm, claros hasta **~14 m**. **Autoportante (sin apuntalar).**

**Trabe doble T (TT):** peralte 40-100 cm, claros 10-30 m (cubiertas, estacionamientos).

**Trabe cajón:** peralte 90-160 cm, claros 20-45 m (puentes; alta rigidez torsional).

**Trabe AASHTO/tipo I:** peraltes **115-240 cm**, claros **20-55 m** (puentes); presfuerzo en bulbo inferior + losa de rodamiento colada (sección compuesta).

**Columnas/trabes prefabricadas:** hasta 2-3 niveles por pieza (limitado por transporte/izaje). **Muros tilt-up:** colados en piso e izados, espesor 15-25 cm, altura 6-12 m (naves, CEDIS).

## 4. Losas postensadas en sitio (edificios)

| | **No adherido (unbonded)** | **Adherido (bonded)** |
|---|---|---|
| Torón | Monotorón engrasado en PE | Torones en ducto inyectado con mortero |
| Velocidad | Más rápido | Más lento (grout) |
| Uso en México | **El más común** en losas | Trabes de gran fuerza, puentes |

**Ventajas:** claros largos con poco peralte (**L/peralte ≈ 40-45**); menor peso → menos sismo; control de flecha por *load balancing* (cable curvo genera carga hacia arriba); plantas libres.

**Proceso de tensado:** cimbra → tendido de torones (perfil parabólico) → armado/anclajes → colado/curado → al alcanzar f'ci ~0.7 f'c, **tensado con gato** torón por torón (registrar **presión + elongación**) → verificar elongación vs teórica (±5-7%) → corte y sellado (adherido: **inyección de mortero**).

**Cuándo conviene:** edificios con claros 7-12 m, planta libre, poco peralte. **No tanto:** claros <6 m, plantas muy irregulares, sin personal especializado. **Cuidado:** permitir el **acortamiento elástico** (juntas/strips de cierre) o se dañan columnas de borde.

## 5. Conexiones de prefabricados (el punto débil sísmico)

> La pieza casi nunca falla; falla la **conexión**.

| Conexión | Comportamiento sísmico |
|---|---|
| Ménsula/dado con asiento | Frágil si el asiento es corto o el pasador mal anclado |
| Junta seca (placas soldadas/atornilladas) | Rígida y frágil, mala disipación |
| **Junta húmeda** (colado de integración + traslapes) | **Mejor**: emula estructura monolítica, más dúctil |
| Firme + malla (diafragma) | Da continuidad de diafragma; clave para repartir el sismo |

**Por qué fallan:** asientos cortos (la trabe **se cae del apoyo**); conexiones secas que no disipan; **fachadas "piso a piso"** (colapsaron en 1985 por no acomodar el drift); falta de diafragma; tolerancias no absorbidas.

**Criterio NTC/PCI:** **emulación monolítica** (continuidad de refuerzo, confinamiento de la junta con estribos, desarrollo); **longitud de asiento generosa** + topes; **firme estructural con malla y conectores** obligatorio.

## 6. Proceso y montaje (voz de montajista)

**Transporte (manda el despiece):** longitud ~18-25 m sin permiso (30-40 m+ con escolta), peso ~20-40 t. Estudio de ruta (radios, gálibos, puentes).

**Izaje:** insertos diseñados para peso + succión + impacto (factor ~1.2-1.5); izar por **2 o 4 puntos de diseño**; **balancín (spreader bar)**; verificar carta de grúa (capacidad cae con el radio).

**Almacenaje:** apoyar **solo en 2 puntos** cerca de los de izaje; durmientes alineados verticalmente; proteger torones/anclajes.

**Estabilidad:** arriostramiento temporal hasta integrar conexión definitiva y diafragma. Tilt-up: braces hasta cubierta.

**Tolerancias (PCI):** posición ±12-19 mm; nivel de asiento ±6-13 mm; plomo h/500; longitud de apoyo no menor a la de diseño (¡crítico!).

## 7. Criterio y errores (voz senior)

- **Contraflecha (camber):** el presforzado nace curvado hacia arriba. Prever diferencia de nivel entre piezas (colchón de firme); crece con el tiempo (creep) y varía pieza a pieza. Si se restringe, **se agrieta**.
- **Manejo:** las grietas casi siempre vienen de izar/apoyar mal o descimbrar con f'ci insuficiente. Pieza agrietada en el patín de tensión → **rechazar o evaluar**, no maquillar.
- **Conexiones mal detalladas = causa #1:** asiento corto, soldadura sin inspección, junta sin estribos, sin holgura para tolerancias.
- **Diafragma olvidado:** sin firme + malla + conectores, el entrepiso no reparte el sismo.
- **Acortamiento por postensado:** dejar que la losa se acorte o las columnas de borde sufren.
- **Especificación:** siempre torón **baja relajación A416 Gr. 270**, con certificado de colada.
- **Fricción:** en cables largos/curvos, tensar por ambos extremos y verificar elongaciones.

## Fuentes

- NTC-Concreto RCDMX 2017: https://transparencia.cdmx.gob.mx/storage/app/uploads/public/83_/N_C/ONC/83_N_CONCRETO.pdf
- ASTM A416 (torón Gr. 270): https://www.materiales.gelsonluz.com/2020/09/astm-a416-propiedades-mecanicas.html
- Vigueta pretensada (Premex): https://www.premex.com.mx/viga_pretensada.html
- Losa alveolar (Velosa / SEPSA Spiroll): https://velosa.com.mx/producto/losa-alveolar/
- Trabes AASHTO (Tubeco / ANIPPAC): https://www.tubeco.com.mx/catalogos/presforzados.pdf · https://anippac.org.mx/wp-content/uploads/2021/08/02.pdf
- Postensado L/45 (PTI): https://www.academia.edu/33366682/
- Conexiones viga-columna prefabricadas (UNAM): https://ru.dgb.unam.mx/server/api/core/bitstreams/bad40105-418f-47c3-8039-7fa86a927fd8/content
- Fachadas prefabricadas "piso a piso" – sismo 1985 (Rev. Ing. Sísmica): https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-092X2018000100077

> **Nota:** las tablas claro/peralte son rangos comerciales de predimensionamiento; el diseño final lo da el cálculo del fabricante con cargas reales y requisitos sísmicos NTC.
