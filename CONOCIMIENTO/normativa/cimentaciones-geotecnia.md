# Cimentaciones y Geotecnia en México — Manual de criterio y obra (base: NTC-Cimentaciones, RCDMX 2017)

> Documento de panel: geotecnia + estructura de cimentaciones + residencia de obra. Valores verificados contra el texto oficial publicado en la Gaceta Oficial de la CDMX (15-dic-2017). Donde la norma **no** tabula un valor (p. ej. q_adm por zona), se indica explícitamente y se dan rangos de práctica con su advertencia.

## 1. Tipos de cimentación y reglas de dedo para elegir

| Tipo | Cuándo entra (regla de dedo) | Profundidad / sótanos típicos | Suelo donde brilla |
|---|---|---|---|
| **Zapata aislada** | Cargas de columna bajas-medias; cuando el área de zapatas suma **< ~40-50%** del área del predio | Desplante 0.6-2.0 m | Zona I (Lomas), tobas, suelos firmes |
| **Zapata corrida** | Muros de carga o ejes de columnas muy cercanas; mampostería | 0.6-1.5 m | Zona I, transición firme |
| **Zapata combinada / con contratrabe** | Dos columnas cercanas, columna de lindero con excentricidad, o cuando la zapata aislada se "sale" del predio | Contratrabe rigidiza y reparte | Cuando hay momentos / linderos |
| **Losa de cimentación (plateada/aliviada con contratrabes)** | Cuando las zapatas suman **> ~50%** del área en planta, o el suelo es blando y se busca repartir | 1 sótano o desplante somero | Zona II y III somera, suelos blandos uniformes |
| **Cajón de cimentación (compensado)** | Edificios medios-altos en arcilla blanda; se **sustituye** peso de suelo excavado por el peso de la estructura → cimentación *compensada* | 1-4 sótanos | Zona III (lacustre) por excelencia |
| **Cajón + pilotes de fricción** | Cuando el cajón compensado no basta y hay que tomar el remanente de carga y controlar emersión/hundimiento | Múltiples sótanos | Zona III pesada |
| **Pilas coladas in situ (Ø ≥ 60-80 cm, hasta >2 m)** | Cargas altas concentradas; **apoyo de punta** en estrato firme profundo | Punta en estrato resistente (en Zona III, los "Depósitos Profundos" bajo la arcilla) | Transición y lacustre con estrato firme alcanzable |
| **Pilotes de fricción (precolados hincados o colados)** | Estrato firme **demasiado profundo o inexistente** a costo razonable; la carga se toma por el fuste | Flotantes en la arcilla | Zona III lacustre profunda |
| **Pilotes de punta** | Estrato resistente alcanzable; transfieren a la capa dura | Apoyados en Depósitos Profundos / toba | Transición; lacustre con punta en DP |

**Reglas de dedo de cambio:**
- **Zapata → losa:** si la suma de áreas de zapatas pasa de ~40-50% del predio, conviene losa.
- **Somera → profunda:** cuando q_adm somera no alcanza, o los **asentamientos** (no la falla) gobiernan. En Zona III casi siempre manda el asentamiento, no la capacidad de carga.
- **Fricción vs punta:** punta si hay estrato firme a profundidad costeable; fricción si el firme está muy hondo. En el lacustre profundo de CDMX casi todo es **fricción**.
- **Compensación:** en lacustre, antes de meter pilotes se agota la **compensación** (cajón): por cada metro de suelo excavado se "descuenta" su peso. Compensación total ⇒ sobrecarga neta ≈ 0.

---

## 2. Zonificación geotécnica de la CDMX (texto oficial NTC-2017, §2.2)

| Zona | Nombre | Descripción normativa | Cimentación típica | Problema dominante |
|---|---|---|---|---|
| **I** | **Lomas** | Rocas o suelos firmes fuera del ambiente lacustre; **frecuente presencia de oquedades, cavernas y túneles de minas de arena y rellenos artificiales no controlados** | Zapatas, losa somera | Minas/oquedades, rellenos, toba colapsable saturada |
| **II** | **Transición** | Depósitos profundos a **20 m o menos**; estratos arenosos/limo-arenosos intercalados con arcilla lacustre de espesor variable | Losa, cajón, pilas a punta | Heterogeneidad, contactos abruptos, asentamientos diferenciales |
| **III** | **Lacustre** | Potentes depósitos de **arcilla altamente compresible**, espesor puede ser >50 m | Cajón compensado, pilotes de fricción, pilotes de control | **Hundimiento regional** y emersión aparente |

**Capacidades de carga típicas (NO normativas — la NTC obliga a exploración del sitio):**
La NTC-2017 **no tabula q_adm por zona**. Rangos de práctica solo como orden de magnitud:
- **Zona I (toba/firme):** q_adm orientativa **20-40 t/m²** (200-400 kPa); cuidado con toba colapsable al saturarse.
- **Zona II (transición):** **10-25 t/m²** según estrato de apoyo.
- **Zona III (arcilla blanda):** capacidad somera ~**5-8 t/m²**, pero **gobierna el asentamiento**, no la falla.

**Hundimiento regional:** la sobreexplotación del acuífero consolida la arcilla; la superficie baja (históricamente varios cm a ~30-40 cm/año en zonas críticas del oriente). Consecuencias:
- **Emersión aparente:** un edificio compensado/sobre pilotes "se queda arriba" mientras el terreno baja.
- **Fricción negativa (FN):** el suelo que baja "cuelga" del pilote y le agrega carga hacia abajo. **Crítico** en Zona III.
- **Pilotes de control** (Manuel González Flores): permiten "soltar" carga y seguir el hundimiento sin que el edificio emerja.

---

## 3. Capacidad de carga, factores y asentamientos admisibles

### 3.1 Factores (verificados, NTC-2017 §3.2)
**Factores de resistencia F_R (sobre capacidad de carga NETA), estados límite de falla:**

| F_R | Aplica a |
|---|---|
| **0.35** | Capacidad en base de **zapatas en Zona I**; zapatas de colindancia a **< 5 m** en Zonas II y III; **pilotes/pilas de punta** en estrato friccionante |
| **0.65** | Todos los **demás casos** |

**Factores de carga F_C:** de las NTC-Criterios. Para **estado límite de servicio** (asentamientos), **F_C = 1.0**.

> El viejo **FS = 3** (somera) y **FS ≈ 2-2.5/3** (profunda) sigue siendo útil como **chequeo de sensatez**, pero el cumplimiento normativo es por desigualdad ΣQ·F_C ≤ R·F_R (LRFD).

### 3.2 Movimientos admisibles — Tabla 3.1.1 NTC-2017 (verificada)

**a) Movimientos verticales (valor medio):**

| Concepto | Zona I | Zonas II y III |
|---|---|---|
| **Asentamiento — construcciones aisladas** | **50 mm (5.0 cm)** ¹ | **300 mm (30 cm)** ¹ |
| **Asentamiento — construcciones colindantes** | **25 mm (2.5 cm)** | **150 mm (15 cm)** |
| **Emersión — aisladas** | — | **300 mm (30 cm)** ¹ |
| **Emersión — colindantes** | — | **150 mm (15 cm)** |
| **Velocidad del componente diferido** | — | **10 mm/semana** |

¹ *Aceptable mayor en construcciones aisladas si se considera explícitamente en el diseño de pilotes y conexiones.*

**b) Inclinación media (desplomo):** límite = **100/(100 + 3·h_c) %** (h_c en m). Ej.: h_c=30 m → 0.53 % ≈ 1/190. Grúas viajeras: 0.3 %.

**c) Distorsión angular (γ = δ/L), referencia generalizada:** **1/500** acabados frágiles; **1/250** inclinación visible / daño en marcos; **1/150** daño severo en muros de carga.

---

## 4. Proceso constructivo real por tipo

### 4.1 Cimentación somera (zapatas / losa)
Trazo y nivel → excavación → abatir NAF si aplica → **plantilla** de concreto pobre (f'c ≈ 100, 5-10 cm) → armado sobre **silletas/calzas** (recubrimiento ≥ 5 cm contra suelo, 7.5 cm sin plantilla) → colado monolítico (plan contra juntas frías) → curado ≥ 7 días → relleno y compactación en capas de 20-30 cm al 90-95% Proctor.

### 4.2 Cajón compensado (Zona III)
Excavación por etapas controlando **falla de fondo (heave)**; **losa de fondo gruesa + contratrabes peraltadas**; diseño de **subpresión** (puede flotar el cajón vacío); control topográfico de **emersión**.

### 4.3 Pilas coladas in situ con lodo bentonítico
Brocal → perforación (con **lodo bentonítico** ~1.03-1.10 g/cm³, Marsh ~32-45 s) → **limpieza de fondo (desazolve)** → izaje del armado → **colado con tubería tremie** desde el fondo (el concreto desplaza el lodo; tremie siempre embebido ≥ 1.5-2 m) → control de **volumen teórico vs real** (sobreconsumo = oquedad).

### 4.4 Pilotes precolados hincados
Fabricación/curado → **hinca** con martillo/vibrohincado, control por **fórmula de hinca/rechazo** y/o **PDA**; verticalidad ≤ ~2%. En arcilla, sobrepresión de poro + "set-up" (recuperación con el tiempo).

### 4.5 Abatimiento de NAF
**Achique** (sumideros), **well-point** (arenas/limos, 4-6 m por etapa), **pozos profundos** (gran caudal). **Cuidado:** no bombear de más bajo arcilla → consolidación y arrastre de finos que daña vecinos; controlar **subpresión** y **sifonamiento (piping)**.

---

## 5. Criterio de obra / voz senior — reglas de dedo y errores

**Reglas de dedo:**
- *"En el lacustre no te pelea la falla, te pelea el asentamiento."* Diseña por servicio y compensa.
- *"Si las zapatas se besan, ya es losa."* >40-50% de área ⇒ losa.
- *"Plantilla siempre."* Sin plantilla el acero se contamina y pierdes recubrimiento.
- *"El tremie nunca sale del concreto."* Si se descubre, entra lodo y haces una pila con corazón de lodo.
- *"Volumen de concreto que no cuadra, oquedad que te va a cobrar."*
- *"Fricción negativa: en Zona III el suelo se cuelga de tu pilote."*
- *"No bombees de más."* Cada metro de abatimiento de la arcilla es asentamiento que le regalas al vecino.

**Errores típicos y solución:**

| Error | Causa | Solución en obra |
|---|---|---|
| **Talud que se derrumba** | Falta de ademe / sobreexcavación / lluvia | Bermas, ademe (tablestaca, Berlín, muro Milán), abatir NAF, escalonar |
| **Falla de fondo / heave** | Excavación profunda sin contrapeso | Excavar por tableros, dejar tapón, anclar, acelerar losa de fondo |
| **Sifonamiento / piping** | Gradiente hidráulico alto | Abatir presión con pozos, filtros invertidos, empotrar más el ademe |
| **Armado mal calzado** | Sin silletas | Rechazar y recalzar antes de colar |
| **Junta fría en losa** | Colado interrumpido | Juntas con llave y **banda de PVC (waterstop)**, escarificado y lechada |
| **Pila con oquedad/cuello** | Tremie descubierto, desazolve malo | Pruebas **sónicas (cross-hole/PIT)**, inyección, pila de relevo |
| **Cajón que flota** | Subpresión > peso en obra vacía | Lastre/anclas temporales, no desaguar de golpe |

---

## 6. Contención y estabilización de excavaciones profundas

| Sistema | Concepto | Criterio de uso |
|---|---|---|
| **Muro Milán** | Tableros colados en zanja bajo **lodo bentonítico** con tremie. Primer uso en México: Metro CDMX | Excavaciones profundas con NAF alto; sirve como **muro definitivo de sótano**. El más usado en CDMX |
| **Tablestacas** | Pantalla continua machihembrada (acero/concreto) | Excavaciones medias, frente de agua, temporales |
| **Muro Berlinés** | Perfiles hincados + revestimiento entre ellos | Suelos cohesivos con NAF bajo; económico |
| **Anclas postensadas** | Tendón en barreno **inyectado** con **bulbo** en estrato resistente; se **pretensan** | Liberan el interior; requieren bulbo competente (en CDMX, tobas de transición). Se prueban a tensión |
| **Apuntalamiento / troqueles** | Puntales internos | Cuando no hay terreno para anclar |

Siempre: **instrumentación** (inclinómetros, testigos topográficos en vecinos, piezómetros) y excavación por etapas.

---

## 7. Estudio de mecánica de suelos — qué pide el estructurista

**Entregables del EMS:** tipo de cimentación y profundidad de desplante; **q_adm neta** (con F_R); **asentamientos** (totales/diferenciales) vs Tabla 3.1.1; **módulo de reacción k (balasto)** para losa/cajón; en sísmico **V_s**, periodo T_s, espectro; para pilotes/pilas capacidad por fricción y punta + **fricción negativa**; NAF y agresividad del agua (sulfatos).

| Parámetro | Para qué | Referencia |
|---|---|---|
| q_adm | Dimensionar zapatas/losa | Sitio-específico |
| **Módulo de reacción k** | Resortes de losa/cajón | Arcilla blanda ~2-5 kg/cm³; dura 6-10; arena media 3-9; densa 9-20. ⚠️ **k no es propiedad intrínseca**: depende de tamaño/forma; corregir del valor de placa al tamaño real |
| c_u | Capacidad en arcilla | Arcilla lacustre CDMX muy baja |
| V_s | Respuesta sísmica, T_s | Lacustre blando ⇒ T_s largo (amplificación 1985) |

> En CDMX la geotecnia **manda sobre la elección estructural**: la misma torre se cimienta con zapatas en Lomas, pilas a punta en Transición y cajón compensado + pilotes de fricción en el Lacustre. En Zona III el enemigo permanente es el **hundimiento regional** y la **fricción negativa**.

---

## Fuentes

- NTC para Diseño y Construcción de Cimentaciones, RCDMX 2017 — texto oficial (PAOT): https://paot.org.mx/centro/normas_a/2022/1%20NORMAS%20TECNICAS%20COMPLEMENTARIAS%20PARA%20DISENO%20Y%20CONSTRUCCION%20DE%20CIMENTACIONES.pdf
- NTC-Cimentaciones 2017 (IPN/ESIA): https://uteycv.esiaz.ipn.mx/comunidad/estructuras/comunicados/NTC%2006.nov.202_cimentaciones.pdf
- Pilotes de control (IINGEN-UNAM): https://aplicaciones.iingen.unam.mx/ConsultasSPII/MediaDOI/SID-710.pdf
- Los suelos lacustres de la Ciudad de México (Díaz-Rodríguez): https://www.scipedia.com/wd/images/2/26/Draft_Content_101349517Diaz-Rodriguez.pdf
- Muros Milán — análisis técnico (Grupo Delta): https://grupo-delta.mx/muros-milan-analisis-tecnico-aplicaciones/
- Coeficiente de balasto — valores típicos: https://www.inesa-tech.com/blog/como-estimar-coeficiente-balasto-vertical-cimentaciones-superficiales/
- Manual de Obras Civiles — cimentaciones (gob.mx): https://www.gob.mx/cms/uploads/attachment/file/105410/Tomo_IV_An_lisis_para_Dise_o_de_CIMENTACIONES_V_2.1.pdf

> **Nota de verificación:** zonificación §2.2, F_R = 0.35/0.65, F_C = 1.0 en servicio y la Tabla 3.1.1 (asentamientos 5/2.5 cm Zona I; 30/15 cm Zonas II-III; emersión 30/15 cm; velocidad 10 mm/semana; desplomo 100/(100+3h_c)%) se extrajeron del PDF oficial de la Gaceta. Las **q_adm por zona, valores de k y FS≈3** son de práctica/literatura, NO tabulados por la NTC, que obliga a exploración del sitio.
