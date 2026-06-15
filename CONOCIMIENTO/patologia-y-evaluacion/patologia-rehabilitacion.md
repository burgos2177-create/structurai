# Patología, Diagnóstico, Rehabilitación y Refuerzo Estructural

> Manual de criterio pericial — concreto reforzado y mampostería (CDMX / NTC, ACI, ASTM). Las cifras son referencia; **todo dictamen exige verificación en sitio, cálculo y firma de DRO/Corresponsable.**

## 0. Glosario
- **Fisura** (< ~0.2-0.3 mm, superficial) · **Grieta** (pasante / > ~0.3 mm, suele ser estructural) · **Fractura** (con desplazamiento) · **Delaminación** (capas separadas) · **Desprendimiento/spalling** (pérdida de material, varilla expuesta) · **Eflorescencia** (sales blancas = paso de humedad).

## 1. Diagnóstico de grietas

**Regla de oro:** la grieta de tracción **abre perpendicular a la tensión principal**. Leer orientación, posición y patrón → deducir el mecanismo. **Antes de medir, entender la causa.**

| Mecanismo | Ubicación / patrón | Orientación | ¿Estructural? | Alarma |
|---|---|---|---|---|
| **Flexión** | Centro de claro (cara inferior); sobre apoyos en continuas | Vertical, perpendicular al eje | Sí | Una grieta ancha aislada |
| **Cortante** | Cerca de apoyos; en alma | **Diagonal ~45°** | Sí — **frágil, peligrosa** | Diagonal que cruza el peralte |
| **Cortante columna corta** | Columna acortada por antepecho | Diagonal en **"X"** | Sí — **falla frágil de sismo** | Cualquier "X" en columna |
| **Asentamiento diferencial** | Muros/trabes, desde esquinas de vanos | Diagonal, apunta a la zona que bajó | Sí (cimentación) | Puertas que se atoran, pisos desnivelados |
| Contracción plástica | Losas/firmes, superficial | "Piel de cocodrilo" | No (normalmente) | Solo si es pasante |
| **Corrosión** | **Paralela a la varilla** | Longitudinal + mancha óxido | Sí (degradación) | Mancha café + grieta paralela |
| Aplastamiento | Cabeza de columna, nudos | Verticales + descascaramiento | Sí — **crítica** | Concreto que "explota", varilla pandeada |

**Anchos (durabilidad, ACI 224R-01):** aire seco 0.41 mm; humedad/suelo 0.30; descongelantes 0.18; agua de mar 0.15; tanques 0.10.

**Lectura de campo (CR):** <0.2 mm cosmética; 0.2-0.4 servicio; 0.4-1.0 atención; 1.0-3.0 **daño estructural probable**; >3.0 **severo**.

> **El ancho por sí solo no clasifica.** Una diagonal de cortante de 0.5 mm en columna es más peligrosa que una de flexión de 1 mm en una trabe. **Patrón y ubicación pesan más que el milímetro.**

**Prueba de actividad:** **testigos de yeso/fisurómetros** con fecha; si avanzan, la grieta está **viva** → prioridad alta.

## 2. Corrosión del refuerzo

El acero está **pasivado** por el pH alto (~12.5-13.5). Se corroe cuando se rompe la pasivación:
- **Carbonatación:** el CO₂ baja el pH a <9; el frente avanza ∝√tiempo. Típico en ciudad, recubrimientos delgados.
- **Cloruros:** rompen la pasivación localmente → **picaduras (pitting)**. Costa, sales, aditivos con cloruro.

El óxido ocupa **2-6× el volumen del acero** → agrieta y desprende. Secuencia: mancha → grieta paralela → delaminación (suena hueco) → desprendimiento → **pérdida de sección**.

**Potencial de media celda (ASTM C876, Cu/CuSO₄):** > −200 mV (corrosión <10%); −200 a −350 (incierto); < −350 (> 90%). Leer por **gradiente** (>50 mV significativo, >100 mV actividad localizada). Complementar con resistividad, carbonatación (fenolftaleína) y cloruros.

**Reparación:** demoler hasta **2 cm más allá** de la varilla (descubrir 100% del perímetro) → limpiar a metal blanco → si pérdida >20-25% adicionar varilla → pasivar → **mortero de reparación** con polímero → protección (inhibidores, membranas anti-carbonatación, **protección catódica** si cloruros generalizados).

> **Error común:** parchar solo lo visible → **efecto ánodo incipiente** (la corrosión reaparece junto al parche). Tratar toda la zona contaminada.

## 3. Pruebas y evaluación

| Ensayo | Norma | Mide | Tipo |
|---|---|---|---|
| **Esclerómetro** | ASTM C805 | Dureza superficial → estima f'c | No destr. (necesita correlación con núcleos) |
| **Núcleos/corazones** | ASTM C42 | f'c real | **Destructivo** (el más confiable) |
| **Ultrasonido (UPV)** | ASTM C597 | Homogeneidad, huecos, fisuras internas | No destr. |
| **Pacómetro** | — | Posición de varilla, **recubrimiento** | No destr. |
| **Media celda** | ASTM C876 | Probabilidad de corrosión | No destr. |
| **Prueba de carga** | ACI 437 / NTC | Respuesta real (deflexión, recuperación) | In situ |

> **Nunca un solo ensayo decide.** Secuencia: pacómetro → esclerómetro + UPV (barrido) → núcleos dirigidos a las zonas peores → media celda/cloruros si hay sospecha. **Levantamiento de daños** sistemático (croquis, anchos, fotos con escala y fecha) = base probatoria del dictamen.

## 4. Técnicas de refuerzo y rehabilitación

| Técnica | Resuelve | Aporta | Cuándo SÍ | Cuidado |
|---|---|---|---|---|
| **Encamisado de concreto** | Capacidad axial/flexión/cortante/confinamiento | Rigidez + resistencia + ductilidad | Columnas mal confinadas | **Debe atravesar losa**; aumenta peso y rigidez (atrae sismo) |
| **Encamisado de acero** | Confinamiento y cortante | Resistencia + ductilidad, poco espesor | No se puede engrosar mucho | Adherencia (mortero de relleno), fuego/corrosión |
| **FRP (fibra de carbono)** | Confinamiento, cortante, flexión | Ductilidad **sin añadir peso ni rigidez global** | Confinar columnas, evitar falla frágil | Ver §4.1 |
| **Muros de cortante / contraventeos nuevos** | **Demanda lateral global** | Gran aumento de rigidez | Estructuras flexibles, piso suave | **Cambia el comportamiento global**; revisar cimentación |
| **Recimentación/micropilotes** | Asentamientos | Soporte al subsuelo | Asentamiento activo | Costoso; en CDMX el hundimiento complica |
| **Postensado externo** | Flexión/cortante, deflexiones | Cierra grietas sin demoler | Trabes deficientes | Anclajes, protección, pérdidas |
| **Inyección de grietas (epóxica)** | Restituye monolitismo | Recupera transmisión y sella | Grieta **estable** | **Inútil si la causa sigue activa** |
| **Demolición/sustitución** | Elemento irrecuperable | — | Reparar cuesta más o no garantiza seguridad | — |

### 4.1 FRP — cuándo sí, cuándo no (ACI 440.2R)
**Sí:** confinamiento de columnas (ductilidad, f'c confinado), cortante (envolver en U/cerrado), flexión (fibras en la cara de tensión). Es **intervención local** que corrige el modo de falla **sin alterar la rigidez global** (por eso no atrae más sismo).
**No/límites:** no suma rigidez global → no resuelve piso suave; **elástico-frágil hasta la rotura** (límites de deformación); **despegue (debonding)** crítico → longitud de anclaje calculada + anclas mecánicas; el **sustrato debe estar sano** (reparar corrosión antes, verificar con pull-off); **fuego** degrada la resina (~Tg 50-80 °C) → protección.

## 5. Evaluación post-sismo

**Semáforo de habitabilidad (CDMX/ISC):**

| Color | Significado | Acción |
|---|---|---|
| 🟢 Verde | Habitable, daño menor (no estructural) | Uso normal; reparar acabados |
| 🟡 Amarillo | Uso restringido, daño moderado | Acceso controlado; **dictamen a fondo** |
| 🔴 Rojo | **No habitable**, riesgo de colapso | Desalojo; apuntalamiento; posible demolición |

> Referencia 2017 (CDMX): de ~7,649 revisados → 6,640 verdes, 688 amarillos, 321 rojos. La **evaluación rápida** (semáforo) NO es el dictamen definitivo; el **dictamen de seguridad estructural** (firmado por DRO/Corresponsable/perito registrado, ISC) es el documento legal.

**Lecciones de 1985 y 2017 (CDMX):**
- **Zona de lago (Zona III):** suelo blando amplifica; **periodo dominante 1.0-1.5 s** concentró colapsos de 2017 en edificios de **4 a 10 pisos** (resonancia suelo-estructura).
- **Losa plana:** ~61% de colapsos 2017 (vs ~43% en 1985) — punzonamiento + deriva.
- **Planta baja débil / piso suave** (estacionamientos sin muros), **edificios de esquina**, **golpeteo (pounding)** sin junta sísmica.
- **Daño acumulado 1985→2017** no reparado → colapso en 2017. **El daño no se "borró".**
- **Columna corta** (antepechos que acortan la columna) → falla frágil por cortante.

> Combinación letal: **sistema débil (losa plana/pocos muros) + irregularidad (piso suave, esquina) + suelo en resonancia + daño previo no reparado.**

## 6. Criterio de perito / voz senior

**Reforzar vs demoler:**
- **Reforzar** si: sistema viable, daño localizado/reparable, causa identificable y controlable, costo razonable (regla: si reforzar **supera ~50-60%** del costo de reconstruir o no garantiza seguridad → replantear demoler).
- **Demoler** si: daño severo generalizado, configuración irremediable (piso suave imposible de corregir), corrosión con pérdida masiva, asentamiento incontrolable.

**Triage:** (1) vida primero (lo que puede matar hoy → apuntalar/desalojar ya); (2) elementos primarios antes que secundarios; (3) mecanismos frágiles (cortante, columna corta, punzonamiento) antes que dúctiles; (4) **causa antes que síntoma**.

**Errores comunes en rehabilitación:**
1. **Refuerzo que cambia la rigidez y atrae más sismo** (V ∝ rigidez). Rigidizar una zona crea irregularidad/torsión → puede empeorar. **Rehacer el análisis global y revisar cimentación.**
2. **FRP mal adherido/anclado** → despega y no aporta el día del sismo.
3. **FRP donde el problema es global** (piso suave) → problema equivocado.
4. **Inyectar con la causa viva** → reabre al lado.
5. **Encamisar sin atravesar el entrepiso** → no hay continuidad del refuerzo longitudinal.
6. **Parchar solo lo visible** en corrosión → efecto ánodo.
7. **No verificar la cimentación** tras añadir peso/rigidez (crítico en CDMX).
8. **Confiar en un solo ensayo.**
9. **Ignorar el daño acumulado** (la lección más cara de 2017).

> **Voz senior:** el refuerzo bien hecho empieza con el **diagnóstico**, no con el material. Primero entiendo el mecanismo que falló y la demanda; luego elijo entre **dar rigidez** (muros/contraventeos, cambia la demanda global, revisa cimentación) o **dar ductilidad/capacidad local** (FRP, encamisados). Confundir esos dos caminos origina la mayoría de las rehabilitaciones que vuelven a fallar. Y nunca cierro una grieta sin antes matar lo que la abrió.

## Fuentes

- ACI 224R-01 (anchos de grieta): https://www.academia.edu/41966086/ACI_224R_01
- ASTM C876 — Potencial de media celda: https://www.grupokb.com.mx/blog/item/15-potencial-de-corrosion-en-el-concreto
- FRP / ACI 440.2R (confinamiento, debonding): https://www.redalyc.org/journal/467/46750927006/html/
- Sika — Reforzamiento de Estructuras: https://mex.sika.com/dam/dms/mx01/r/sika-reforzamiento-estructural.pdf
- Evaluación post-sismo CDMX (semáforo, cifras 2017): https://www.xataka.com.mx/otros-1/quien-es-el-que-puede-certificar-que-mi-casa-es-habitable-o-no-despues-del-sismo
- Daños/colapsos 2017 (losa plana 61%, periodo 1.0-1.5 s) — Redalyc: https://www.redalyc.org/journal/618/61864056001/html/
- Análisis de daños 19-S-2017 — SciELO: https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-092X2019000200019

> Ningún criterio sustituye el cálculo, la inspección en sitio y la firma de un DRO/Corresponsable o perito registrado.
