# Elementos Estructurales Especiales — diseño y construcción

> Bases: NTC-Concreto/Cimentaciones/Sismo (RCDMX 2017), ACI 318, ACI 350 (estructuras de líquidos). Las "reglas de dedo" son para predimensionar; **el diseño definitivo siempre se calcula.**

## 0. Tabla maestra de reglas de dedo

| Elemento | Predimensionamiento | Refuerzo de arranque | Revisión gobernante |
|---|---|---|---|
| Escalera en losa | Peralte = L/25 a L/30 | #4 @ 15-20 cm en el claro | Flexión + sismo (efecto col. corta) |
| Rampa vehicular | Pendiente ≤ 15% (18% interior con transición) | Malla + bastones | Cortante en transición |
| Muro contención voladizo | Base B = 0.5-0.7 H; vástago base = H/12 | Acero a tensión en cara de tierra | **Volteo, deslizamiento, capacidad de carga** |
| Cisterna/tanque | Muro = H/10 a H/12 (mín 20-25 cm); fondo = 25-35 cm | Doble parrilla | **Flotación (vacío) + hidrostática (lleno)** |
| Alberca | Muro 20-25 cm; fondo 20-30 cm | Doble malla | **Flotación de cubeta vacía** |
| Pretil/barda | Espesor ≥ 12-15 cm | Castillos @ ≤4 m + dala de remate | **Volteo sísmico (apéndice)** |
| Volado | Peralte = L/10; acero **arriba** | Lecho superior continuo, anclado | Deflexión + anclaje del negativo |

## 1. Escaleras de concreto

**Concepto:** salvo que se desligue, la escalera **forma parte del sistema estructural**. Dos consecuencias en sismo: (1) **rigidiza el cubo** y atrae fuerza; (2) **efecto columna corta** en descansos (el descanso apoyado a media altura **acorta la columna libre** → cortante = M/h con h pequeño → cortante muy alto → falla frágil en X).

> **Criterio:** o se **modela** la escalera (incluyendo la columna corta resultante, reforzando esa columna por cortante en toda su altura), o se **desliga sísmicamente**. El error es no hacer ninguna de las dos.

**Tipos:** en zancas (vigas inclinadas), **en losa** (la más común, predimensionar como losa), autoportante/volada (flexión + torsión), helicoidal (3D, mucho acero por torsión).

**Predimensionamiento:** peralte `h ≈ L/25 a L/30` (L = claro horizontal proyectado). Confort: `2·CP + H ≈ 61-64 cm` (CP ≈17-18, huella ≈28-30). Descansos cada ~12-15 escalones.

**Armado:** principal en el claro inclinado (positivo abajo, negativo sobre apoyos), #4 @15-20 cm; temperatura #3 @20-25. **Punto crítico: el quiebre cóncavo** — el acero en tensión que se dobla "hacia adentro" tiende a **desprender el recubrimiento**; debe anclarse cruzado, no continuar siguiendo el ángulo entrante.

**Junta sísmica:** desligar con **apoyo deslizante** (neopreno/teflón) cuya carrera sea ≥ la deriva de entrepiso. Si se deja fijo en ambos extremos, **diseña la columna corta por cortante de capacidad**.

## 2. Rampas

**Pendientes:** peatonal accesible ≤6-8% (10% en tramos cortos, descansos cada 9 m); vehicular ≤12-15% (hasta 18% interior con **transiciones** de ~½ pendiente en 3-4 m).

**Cómo trabaja:** losa inclinada (flexión en el claro) + **diafragma inclinado** que une dos niveles → transmite sismo en el plano y puede generar columna corta donde cruza una columna. **Considerarlo en el modelo o desligar.** Refuerzo extra de cortante en transiciones + bastones negativos sobre apoyos.

## 3. Muros de contención

**Tipos:** gravedad (≤3 m), **voladizo/cantilever** (3-8 m, el más usado), con contrafuertes (>8 m), tierra armada (MSE).

**Predimensionamiento (voladizo):** Base B = **0.5-0.7 H**; vástago en la base = **H/12**; zapata = H/10-H/12; puntera ≈ B/3; talón ≈ 2B/3; **dentellón** bajo la zapata para deslizamiento.

**Empujes:** **activo** Ka = tan²(45−φ/2) (caso usual); **reposo** K0 ≈ 1−sen φ (muro rígido/sótano, empuje mayor); **pasivo** Kp = tan²(45+φ/2) (delante de la puntera, a menudo se desprecia). Si el relleno se satura, **suma el empuje hidrostático** (enorme). Considerar sobrecarga del tráfico (Ka·q).

**Las 3 revisiones + 1:**

| Revisión | FS mínimo |
|---|---|
| **Volteo** | FS ≥ 1.5 (2.0 con sismo/suelos pobres) |
| **Deslizamiento** | FS ≥ 1.5 (fricción base + pasivo + dentellón) |
| **Capacidad de carga** | FS ≥ 3; resultante en el tercio medio (**e ≤ B/6**, sin tensiones) |
| Estabilidad global | FS ≥ 1.5 (círculos de falla) |

> **Drenaje — la causa #1 de falla.** Sin drenaje, el agua se acumula y genera empuje hidrostático que el muro no previó (puede ser 2× el de diseño). Obligatorio: **lloraderos (weep holes)** Ø~10 cm @1.5-3 m con **filtro de grava/geotextil**; dren longitudinal al pie; relleno drenante; impermeabilizar la cara de tierra.

**Juntas:** contracción cada ~6-9 m; dilatación en muros largos (~18-30 m).

**Errores:** (1) no drenar; (2) rellenar antes de que el concreto gane resistencia, con maquinaria pesada; (3) olvidar el dentellón; (4) acero del vástago en la cara equivocada; (5) ignorar la sobrecarga; (6) resultante fuera del tercio medio.

## 4. Cisternas y tanques

**Dos casos de carga (diseñar por el más desfavorable de cada muro):**

| Caso | Solicitación | Acero en |
|---|---|---|
| **Lleno** (sin relleno exterior) | Presión hidrostática interior `p = γ·h` empuja hacia afuera | cara **interior** |
| **Vacío** (con relleno/NAF) | Empuje de tierra exterior empuja hacia adentro | cara **exterior** |
| **Vacío con NAF alto** | **Subpresión/flotación** | losa de fondo |

Por eso los muros llevan **doble parrilla**.

> **Subpresión/flotación (crítico):** un tanque vacío con NAF alto es un "barco" enterrado; `U = γ_agua · h_NAF · A_planta` puede levantarlo. **FS_flotación = (peso propio + tierra sobre zarpas + lastre) / subpresión ≥ 1.2-1.5.** Soluciones: **engrosar/extender la losa de fondo** (zarpa con tierra encima), anclas/pilotes a tensión, lastre, **válvula de alivio** (no apta para agua potable), o sub-drenaje. **Error clásico:** vaciar la cisterna en lluvias con NAF arriba → flota y se truena.

**Impermeabilidad (ACI 350):** **limitar el ancho de grieta** (w ≤ 0.10 mm en contacto continuo con líquido) con **acero bien distribuido en barras de menor diámetro y poca separación**; cuantía de retracción mayor; **a/c ≤ 0.45-0.50**; buen curado.

**Juntas con banda de PVC (waterstop):** en todas las juntas de colado, banda con bulbo (movimiento) o plana (construcción) que obliga al agua a un camino más largo. La **junta muro-losa de fondo** es la más crítica (waterstop + media caña sí o sí).

**Prueba de estanqueidad:** llenar por etapas → estabilizar 24-72 h → mantener ~7 días midiendo descenso → criterio típico pérdida ≤ ~0.1% del volumen (descontando evaporación), sin manchas de humedad exterior.

## 5. Albercas

Estructuralmente un **tanque enterrado** (el "vaso"). **El riesgo #1 es la flotación de la cubeta vacía:** vaciarla con NAF alto la levanta/voltea/cuartea (hay numerosos casos). Medidas: **drenaje perimetral y de fondo** que abata el NAF, **válvula hidrostática de alivio** en el fondo (la protección más común y barata en albercas), lastre/anclas. **Nunca vaciar sin verificar NAF y abrir la válvula.** Muro 20-25 cm, fondo 20-30 cm, doble malla, mismo control de agrietamiento que el tanque.

## 6. Pretiles, parapetos y bardas

> **Es lo que más cae y mata en sismos.** Son apéndices que experimentan **amplificación dinámica** (la aceleración en lo alto es varias veces la del suelo) y, mal anclados, vuelcan sobre la vía pública.

**Comportamiento:** **voladizo invertido** (empotrado abajo, libre arriba); momento en la base = F_sísmica × altura/2. La NTC-Sismo estima la fuerza como masa × aceleración del piso × factor de amplificación (γₐ). **Diseña el pretil para fuerzas mayores que las del edificio, porque se amplifican.**

| Requisito (NTC-Mampostería) | Valor |
|---|---|
| Castillos | extremos, intersecciones, y **≤1.5 H o ≤4 m** |
| Dala de remate | en pretiles cuya altura **>500 mm**; dalas intermedias ≤3 m |
| Anclaje del castillo | varillas ancladas en la estructura (losa/trabe) con longitud suficiente |
| Espesor de muro (bardas) | ≥ 12-15 cm |

**Anclaje (lo decisivo):** dejar **dovelas/varillas de espera** ahogadas en el colado que continúen dentro de los castillos del pretil. Pretil "apoyado y pegado" sin acero pasante = volteo seguro. Bardas independientes: dado y zapata corrida; bardas largas con juntas y contrafuertes. **Errores:** pretil sin anclaje, sin dala de remate, castillos muy separados, ignorar la amplificación, anuncios/tinacos añadiendo masa en lo alto.

## 7. Volados y trabes de transferencia

**Volados:** momento negativo en el empotre → **acero principal en el LECHO SUPERIOR** (arriba). Peralte `h ≈ L_vol/10` (rigen por deflexión). El acero superior debe **anclarse dentro del claro de respaldo**. Limitar deflexión L/240-L/480. **Errores:** acero abajo en vez de arriba (colapso); acero superior mal anclado; sin contraflecha; descimbrado prematuro.

**Trabes de transferencia:** reciben columnas/muros que **no bajan continuos** y los transfieren lateralmente. Cuidados: cargas enormes → comportamiento de **viga-pared (puntal-tensor)**; **discontinuidad vertical = irregularidad** penalizada → diseñar por **capacidad/sobrerresistencia**; a menudo **presforzada**; **no debe ser el eslabón débil** (sostiene todo lo de arriba); apuntalamiento robusto.

> **Criterio (volados y transferencias):** son elementos **sin redundancia** — si fallan, se llevan todo lo que sostienen. Márgenes mayores, revisar deflexiones de servicio, cuidar obsesivamente el **anclaje del acero** y la **secuencia de descimbrado**.

## Fuentes

- NTC-Concreto RCDMX 2017: https://transparencia.cdmx.gob.mx/storage/app/uploads/public/83_/N_C/ONC/83_N_CONCRETO.pdf
- NTC-Sismo 2017 (apéndices, factor γₐ): https://iisee.kenken.go.jp/worldlist/34_Mexico/Mexico_normas-tecnicas-complementarias-diseno-sismo-2017(1).pdf
- Diseño de muros de contención en voladizo (Univ. Antioquia): https://bibliotecadigital.udea.edu.co/server/api/core/bitstreams/4c2adea5-862d-45de-afd1-1a750881d6cd/content
- Cisternas y tanques — waterstop, juntas (Retex): https://retex.com.mx/images/pdfs_soluciones/CISTERNAS%20Y%20TANQUES.pdf
- Sika — Impermeabilización de cisternas, tanques y piscinas: https://mex.sika.com/es/construccion/impermeailizantes-sika/impermeabilizacionparazonasestructurales/impermeabilizacion-cisternas.html
- Ejemplo de voladizo de concreto (acero superior, deflexión): https://marcelopardo.com/ejemplo-de-voladizo-de-hormigon-de-230cm-de-largo/
- Aceleraciones de piso para apéndices (SciELO): https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-092X2023000200057

> Referencias complementarias (consultar edición vigente): ACI 318, ACI 350/350.1/350.3 (estructuras de líquidos — control de grietas, hermeticidad y diseño sísmico de tanques).
