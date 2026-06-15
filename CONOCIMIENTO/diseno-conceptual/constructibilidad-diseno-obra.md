# Constructibilidad: donde el plano se encuentra con la obra

> Síntesis de cien residentes y superintendentes dialogando con el proyectista. La **interacción diseño↔construcción**: por qué un detalle que se ve bien en plano falla o es imposible en obra.

## 0. La tesis de campo
> *"El plano no se cae. La obra sí. Usted dibuja la estructura terminada; yo la tengo que parir pieza por pieza, y entre que nace y que está completa, pasa por estados que su modelo nunca vio."*

**El detalle más elegante que no se puede construir es un mal detalle.**

| # | Tensión | Síntoma en obra | Origen en plano |
|---|---|---|---|
| 1 | Congestión de acero | Oquedades en nudos | Sobrearmado sin verificar separaciones |
| 2 | Secuencia constructiva | Fisuras, contraflecha mal, puntales reventados | Se diseñó la estructura "completa" |
| 3 | Detalles imprácticos | Ganchos que no caben, tornillos sin acceso | Se dibujó en 2D lo que vive en 3D |
| 4 | Coordinación MEP | Trabe perforada donde no, hueco en diafragma | Estructura y MEP en planos que no se hablan |
| 5 | Clima y logística | Junta fría, concreto quemado, grúa sin alcance | No se pensó el "cómo llega" |
| 6 | Tolerancias que chocan | Ancla sobre varilla, placa que no cierra | Tolerancias que nadie absorbió |

## 1. Congestión de acero (rebar congestion)

**El problema físico:** el concreto necesita espacio entre varillas mayor que el agregado, más holgura para el vibrador (Ø 25-60 mm). En el **nudo viga-columna** confluyen estribos de columna, estribos de viga, longitudinal de dos o más vigas y el arranque de la columna superior → el concreto **forma un puente y debajo queda aire** (oquedad/nido de abeja), precisamente donde más esfuerzo hay.

**Separación libre mínima (ACI 318 §25.2 / NTC):**

| Condición | Separación libre mínima |
|---|---|
| Capa horizontal (vigas, columnas) | el mayor de: **1·db, 25 mm, 1.33×agregado** |
| Columnas (entre longitudinales) | el mayor de 1.5·db, 40 mm |

> Regla de bolsillo: **separación libre ≥ 1.33 × agregado** es la que más se viola. Agregado de 19 mm → ≥25 mm libres; de 40 mm → ≥53 mm (casi ningún nudo sísmico lo da).

**Dónde se concentra:** traslapes amontonados (si se traslapa el 100% en una sección, la cuantía local se **duplica**); ganchos sísmicos a 135°; lecho doble cruzando lecho doble + bastón de columna.

**Cómo lo resuelve el residente:** concreto autocompactante/fluido (rev. 18-22 cm) en nudos; agregado de 13 mm en la zona; vibrador de Ø 25 mm; **cuatrapear traslapes / coplas mecánicas**; haces de varillas (bundles).

**Qué debió hacer el diseñador:** verificar la separación libre **en el nudo** (no solo la cuantía); dibujar el nudo **a escala con diámetros reales**; preferir **menos varillas de mayor diámetro** (4#12 mejor que 8#8); aumentar peralte 5 cm; especificar revenimiento/agregado en plano. **Alarma si la cuantía local en el nudo pasa de ~4-6%.**

## 2. Secuencia constructiva y su efecto estructural

> *"Mi edificio nace puntal por puntal, colado por colado, y carga peso de obra que su análisis de servicio nunca puso."*

- **La estructura no nace completa:** el orden de colado cambia los esfuerzos. En grandes hiperestáticas y presfuerzo, el **análisis por etapas** no es lujo.
- **Apuntalamiento y reapuntalamiento (lo más subestimado):** los puntales transmiten el peso de la losa joven a las losas de abajo, **también jóvenes**. **La carga de construcción sobre una losa inferior puede ser MAYOR que su carga de servicio** (ACI 347). La falla de obra gris más típica es el **descimbrado prematuro y el mal reapuntalamiento**, no el sismo. Mantener 2-4 niveles de puntal/reapuntalado; retirar solo con resistencia comprobada (cilindros).
- **Contraflechas:** si el plano no da magnitud y forma, la carpintería la inventa. *"Dígame cuánto de contraflecha y dónde."*
- **Juntas de colado:** SÍ a **L/3 del claro** (bajo cortante); NO sobre el apoyo/cara de columna. *"La junta fría que más duele es la no planeada: se acabó el concreto y cayó justo donde más cortante hay."*
- **Acortamiento de columnas en altos:** elástico + creep + contracción → **acortamiento diferencial** (columna muy cargada se acorta más que un muro al lado → losa fuera de nivel; puede acumular varios cm en decenas de niveles). Solución: **tablas de compensación por nivel** (sobreelevar el colado de cada piso). Sin ellas, "se nivela mal solo".

## 3. Detalles imprácticos de plano

> *"En el plano ese gancho mide una línea. En la obra mide 30 cm de varilla doblada que choca con la columna."*

| Detalle de plano | Por qué falla | Convergencia real |
|---|---|---|
| Gancho 90°/180° en varilla gruesa, nudo angosto | El gancho + radio de doblez no caben | **Barra con cabeza (headed bar)** o agrandar el nudo |
| Recubrimiento imposible con tanto acero | El paquete ya no deja 40 mm | Reducir barras o aumentar sección |
| Doblez de #10/#11/#14 con radio chico | Radio mínimo (4-8 db) no entra; doblar menor **quiebra** la varilla | Respetar radio mínimo; dimensionar para alojarlo |
| Conexión atornillada sin holgura para la llave | No hay espacio para el dado | Tornillo desde un lado o reubicar |
| Soldadura de campo sin acceso para electrodo/casco | El soldador no alcanza ni ve la raíz | Mover la junta, dejar acceso de erección |
| Anclas de placa base que caen sobre varilla | El ancla quiere bajar donde hay un estribo | Coordinar plantilla de anclas con armado **en el mismo plano** |

> *"El acceso es estructura, ingeniero. Si no cabe la llave, la conexión no existe."*

## 4. Coordinación con instalaciones (MEP)

> *"Su trabe es perfecta hasta que el de aire necesita pasar un ducto de 40 cm por en medio. Y va a pasar, porque el plafón ya está vendido a esa altura."*

**Perforar una trabe: dónde SÍ y dónde NO:**

| Zona | ¿Pasar ducto? | Razón |
|---|---|---|
| **Tercio medio del peralte** (vertical) | **SÍ** | Lejos de máxima compresión (arriba) y tensión (abajo) |
| Tercio superior/inferior | **NO** | Corta acero principal o bloque de compresión |
| **Centro del claro** (a lo largo) | **SÍ** | Cortante bajo |
| **Cerca del apoyo / cara de columna** | **NO** | Cortante máximo |

Reglas de bolsillo (sujetas a revisión): hueco ≤ ~0.33-0.40 del peralte, en tercio medio, zona central, separado ≥2 diámetros, **reforzado en su perímetro** (estribos extra + diagonales en esquinas).

**Huecos en losa que cortan el diafragma:** la losa reparte el sismo; un cubo de escalera/ducto mal ubicado **corta el diafragma**. Huecos grandes → **elementos de borde / collar** (vigas perimetrales, colectores). **No ahogar tubería** que reduzca sección (Ø tubo ≤ 1/3 del espesor de losa, separados ≥3 diámetros).

> *"En obra, cuando estructura y MEP no se hablaron, el que gana es el martillo: alguien rompe algo. Y casi siempre rompe mi trabe."* La solución: **BIM con detección de interferencias (clash detection)** antes del colado.

## 5. Clima y logística

| Condición | Qué pasa | Medida |
|---|---|---|
| **Calor** (>32°C, sol, viento) | Fragua rápido, junta fría, fisura plástica | Colar de noche, hielo en el agua, retardante, curado inmediato |
| **Frío** (<5°C) | Riesgo de congelación antes de fraguar | Agua caliente, cobertores, acelerante, no colar sobre superficie helada |
| **Lluvia** | a/c sube, superficie débil | Proteger, no colar bajo lluvia, no manguerear |

**Junta fría por falta de material (la más común):** el **tiempo abierto** del concreto es ~45 min a 1.5 h; si el suministro se interrumpe más que eso, junta fría donde nadie la quería. Mitigar: continuidad de suministro, retardante, y un **punto de junta planeado** por si todo falla.

**Acceso y maniobra:** ¿la bomba pluma alcanza el punto más lejano? ¿la grúa tiene radio y capacidad para la pieza más pesada? ¿caben los camiones a girar? **La altura de entrepiso define qué sistema de cimbra cabe.**

## 6. Tolerancias que chocan

```
Tolerancia total ≈ T(fabricación) + T(montaje) + T(trazo) + T(temperatura)
```
Cada eslabón aporta error y **se suman**. La interfaz **acero-concreto** (placa base sobre dado, ancla preahogada) es la de mayor pleito. Por eso el acero deja **agujeros holgados, calzas/shims, lechada (grout) bajo placa base, plantillas de anclas**.

> **El diseño debe decidir, explícitamente, dónde se absorbe la suma de tolerancias.** Si no lo decide, se absorbe a martillo y esmeril —y eso cambia la estructura que se calculó.

## 7. Criterio: diseña pensando en quién lo va a construir

**Los mandamientos del residente al proyectista:**
1. Dibuja el detalle **a escala** con diámetros, ganchos y radios reales.
2. **Verifica el nudo, no solo la sección.**
3. **Reserva acceso de herramienta** en cada conexión (llave, electrodo, vibrador, bomba).
4. **Indica la secuencia:** orden de colado, f'c para descimbrar, niveles de apuntalado, contraflechas, compensación de acortamiento.
5. **Coordina MEP desde el plano** (BIM/clash detection).
6. **Decide dónde se absorben las tolerancias.**
7. **Notas constructivas en el plano:** revenimiento, agregado, juntas permitidas, autorización para perforar.
8. **Pregúntate "¿cómo lo armo?"** antes de "¿cómo lo calculo?".

**El RFI (Solicitud de Información):** el cordón umbilical plano↔obra. *"Un proyecto sano se mide por cuándo llegan los RFI, no por cuántos. Si me llegan en el armado, ganamos. Si me llegan después del colado, ya perdimos los dos."*

> **El plano se encuentra con la obra en un solo lugar: en la cabeza del que diseña pensando en quién lo va a construir.**

## Fuentes

- ACI 318 §25.2 separación de refuerzo (idecad): https://help.idecad.com/ideCAD/minimum-spacing-of-reinforcement
- Compatibilidad de tolerancias (SEAONC CTN-G-4): https://seaofnc.org/images/meeting/091924/guidelines_for_tolerance_compatibility_in_sr_cip_construction_ctn_g_4.pdf
- Apuntalamiento/reapuntalamiento (ACI 347.2R): https://www.concrete.org/Portals/0/Files/PDF/Previews/347.2R-17_preview.pdf
- Acortamiento de columnas en altos (BSB Group): https://bsbgroup.com/blog/axial-shortening-of-columns-in-tall-buildings
- Tolerancias de montaje del acero (AISC 303): https://www.aisc.org/globalassets/aisc/publications/standards/a303-22w.pdf

> Las "reglas de bolsillo" son prácticas de campo **sujetas a revisión del proyectista**, no prescripción reglamentaria.
