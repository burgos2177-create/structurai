# Criterio del Estructurista Senior — lo que la experiencia enseña y la norma no dice

> *"La norma te dice qué revisar; la experiencia te dice qué va a fallar."*
> Documento de criterio, no de fórmulas. Los números son **reglas de dedo de arranque**: sirven para predimensionar y para *oler* errores, nunca para sustituir el análisis y la revisión normativa.

## 0. Marco mental — cómo piensa el senior
- **El predimensionamiento es una hipótesis, no un resultado.** Si el análisis te pide algo muy lejos de tu regla de dedo, *primero sospecha del modelo, no de la regla*.
- **El 80% de la seguridad se decide en la configuración, no en el cálculo.**
- **"La rigidez atrae fuerza."** Donde pongas rigidez, ahí llegará el cortante sísmico. Esto gobierna torsión, columna corta, piso suave, distribución de muros.
- **"Diseña el camino de cargas, no los elementos."** Si no puedes dibujar con el dedo cómo baja cada carga hasta el suelo, hay un problema que el software no te va a gritar.

## 1. Reglas de dedo de predimensionamiento

> Úsalas como **punto de partida** y como **detector de mentiras**. Si el software se aleja >25-30%, investiga el porqué antes de aceptar.

### 1.1 Trabes / vigas

| Elemento | Peralte (h) | Notas |
|---|---|---|
| Trabe de concreto, claro normal | **L/10 a L/12** | L/10 si carga pesada/sísmica; L/12 si liviana |
| Trabe continua interior | L/12 a L/14 | La continuidad permite menor peralte |
| Trabe simplemente apoyada | L/10 | Sin continuidad, peraltala más |
| Viga de acero (IPR/W) laminada | **L/18 a L/22** | Gobierna la deflexión, no la resistencia |
| Trabe de marco sísmico de acero | L/16 a L/20 | Verifica compacidad y conexión precalificada |
| **Volado (cantilever)** | **peralte ≈ L_vol/3 a L_vol/4** en el empotramiento | Deflexión y vibración mandan |

> *"En volados, primero la deflexión y la vibración, luego la resistencia. Un volado que no se cae pero vibra al caminar, está mal diseñado."*

### 1.2 Losas

| Sistema | Peralte | Claro económico |
|---|---|---|
| Maciza 1 dirección | L/24-L/28 (continua); L/20 simple | hasta ~4.5 m |
| Maciza 2 direcciones | perímetro/250 | 4-6 m |
| Aligerada (vigueta-bovedilla) | L/25-L/30 | 4-7 m |
| Plana sin ábacos | L/30-L/33 | 5-7.5 m (cuida punzonamiento) |
| Plana con ábacos | L/33-L/36 | hasta 9 m |
| Postensada | L/40-L/45 | 8-12 m |

### 1.3 Columnas

| Criterio | Regla de dedo |
|---|---|
| Área por carga axial (concreto) | **Ag ≈ P/(0.25 a 0.35 f'c)** — usa 0.25 en columnas sísmicas (margen para flexión) |
| Bajada de carga rápida | **~1.0 a 1.2 t/m² por nivel** de área tributaria (habitacional/oficina) |
| Dimensión mínima | ≥ 30 cm (sísmico); relación lados ≤ 1:4 |
| Crecimiento por altura | la columna de PB carga todo: dimensiónala primero y reduce hacia arriba en saltos de ~5 cm cada 2-3 niveles, sin cambios bruscos |
| % de área de planta en columnas | ~0.8% a 1.5% (edificios medios); >2% = claros excesivos o concepto caro |

### 1.4 Muros de cortante y densidad de muros

| Criterio | Regla de dedo |
|---|---|
| Espesor de muro de cortante | ≥ 15 cm (vivienda); 20-30 cm (altos); ≥ h_entrepiso/20-25 |
| **Densidad de muro de cortante (concreto)** | **~1% a 2% del área de planta por dirección** |
| **Densidad de muro en mampostería (vivienda)** | **~1.5-2% por dirección** en zona sísmica (algunos manuales hasta 3-4%) |
| Relación de aspecto | esbelto si h/L > 2 (flexión); robusto si < 1 (cortante) |
| Ubicación | **simétricos, perimetrales y continuos hasta cimentación** |

> *"En vivienda de mampostería, la densidad de muros decide la vida del edificio. No hay análisis sofisticado que salve a una casa con poco muro en una dirección."*

### 1.5 Columna fuerte–viga débil
**ΣM_columna / ΣM_viga en el nudo ≥ 1.2** (diseño por capacidad). Queremos rótula plástica en *vigas*, no en columnas. El acero de viga debe *caber y anclarse* en la columna.

### 1.6 Cimentación

| Tipo | Regla de arranque |
|---|---|
| Zapata aislada | área = (P_servicio × 1.05-1.10) / q_adm |
| Cambio a losa de cimentación | si la suma de zapatas > **~40-50%** del área de planta |
| Cajón/losa en suelo blando (lago CDMX) | busca **compensación** (peso excavado ≈ peso edificio) |
| Profundidad de desplante | ≥ 0.8-1.5 m (evitar suelo intemperizado/relleno) |

> *"La cimentación no se calcula, se concibe con el geotecnista. El 90% de los pleitos por grietas son asentamientos diferenciales, no falla de superestructura."*

### 1.7 Claros económicos por sistema

| Sistema | Económico | Se dispara arriba de |
|---|---|---|
| Maciza / vigueta-bovedilla | 4-6 m | 7 m |
| Plana de concreto | 6-8 m | 9 m |
| Marco de concreto | 6-9 m | 10-11 m |
| Marco de acero | 9-12 m | 15 m |
| Postensado | 10-14 m | 16 m |
| Prefabricado (TT, dobles T) | 12-20 m | 25 m |
| Armaduras de acero / naves | 20-40 m | mayor pide arco/cable |

## 2. Configuración y concepción

**Cómo "leer" un proyecto:** (1) busca la retícula (6-9 m); (2) traza el camino de cargas con lápiz; (3) localiza núcleos rígidos naturales (cubos de escalera/elevador, muros de baños) → ahí van tus muros de cortante; (4) detecta los enemigos sísmicos antes de modelar.

**Dónde poner:** columnas en la retícula, alineadas y continuas; muros simétricos, **lo más perimetrales posible** y continuos hasta cimentación. **Regla de oro: "Acerca el centro de rigidez al centro de masa."**

**Los pecados capitales:**

| Patología | Cómo evitarla |
|---|---|
| **Piso suave / PB débil** | Continuar muros/marcos rígidos a PB; no dejar la PB "de cristal" |
| **Columna corta** | Separar el muro de relleno de la columna con junta, o modelarlo; nunca antepechos a media columna |
| **Irregularidad torsional** | Simetrizar muros; distorsión del extremo ≤ 1.2× la promedio |
| **Esquinas entrantes (L, T, U)** | Juntas sísmicas que dividan en bloques regulares |
| **Discontinuidad en altura** | Reducir secciones gradualmente; bajar muros completos hasta cimentación |
| **Diafragma con huecos** | Vigas de borde/collares alrededor de huecos |

> *"Lo regular sobrevive. Cada irregularidad que aceptes, la pagas en acero, en detallado o en daño."*

**Juntas sísmicas:** separación ≥ suma de desplazamientos máximos de los dos cuerpos. *"Más vale junta de sobra que golpeteo."* Pasante de azotea a cimentación, sin "puentes" de acabado.

## 3. Lo que la norma no dice (criterio puro)

1. **Redundancia real ≠ factor de redundancia.** Pregúntate: *"si este elemento desaparece, ¿se cae el edificio?"*.
2. **Jerarquía de fallas:** fluencia dúctil de vigas → nunca cortante frágil → nunca columnas → nunca nudos → nunca cimentación. *"Haz frágil lo que sobra y dúctil lo que importa."*
3. **"Diseña el camino de cargas."** El software calcula lo que le das; el camino lo concibes tú.
4. **"La rigidez atrae fuerza."** No puedes esconder un muro de relleno: si está, trabaja. Modela lo que existe.
5. **Controla el drift antes que la resistencia.** En sismo el daño lo causa la deformación. Drift: ~0.002-0.004 (limitación de daño) y ~0.015 (colapso) en sistemas dúctiles. *"Primero rigidiza, luego resiste."*
6. **Detallar para que se pueda construir.** *"Un detalle que el fierrero no entiende, se construye mal."*
7. **Sobrerresistencia oculta** (losa colabora, f'c real > nominal): es tu colchón, **no tu factor de diseño**.
8. **Factores de seguridad mentales:** *"Sé tacaño en lo que avisa, generoso en lo que mata"* (conexiones, nudos, cortante, cimentación).

## 4. Errores típicos de diseño y modelación

| Error | Criterio del senior |
|---|---|
| **Inercias agrietadas mal puestas** | Factores consistentes (vigas más agrietadas que columnas); coherentes entre drift y resistencia |
| **No modelar muros de relleno** | Modélalos o sepáralos con junta real. *Un muro mal ignorado mató más estructuras que un error de fórmula* |
| **Apoyos idealizados** | La realidad no es empotrada ni articulada pura. Corre ambos extremos y diseña la envolvente |
| **No revisar P-Delta** | Si el coeficiente de estabilidad es alto, *rigidiza*, no solo amplifiques |
| **Masa mal asignada** | El cortante basal sale de la masa; una masa mal puesta corrompe todo el análisis modal |
| **Diafragma rígido supuesto sin serlo** | Verifica relación de aspecto y huecos |
| **Conexiones idealizadas (acero)** | El modelo debe reflejar la conexión real del taller |
| **No revisar etapas constructivas** | En altos/prefabricado/postensado, los esfuerzos de montaje superan a los de servicio |
| **Exceso de confianza en software** | *Valida con la mano.* Garbage in, garbage out |

**Sanity checks a mano:**
- Periodo fundamental ≈ **N/10** s. Si el software da el triple, hay algo flojo.
- Cortante basal ≈ **c × W**.
- Reacciones verticales totales ≈ área × niveles × (~1 t/m²).
- Suma de reacciones = suma de cargas (equilibrio global). *Siempre.*

> *"El software no diseña; calcula. Si no puedes estimar el resultado a mano en un orden de magnitud, no entiendes tu modelo."*

## 5. Criterio económico

| Factor | Concreto | Acero | Prefabricado |
|---|---|---|---|
| Claros | ≤9-10 m | 9-15 m+ | 12-25 m |
| Velocidad | lenta | rápida | muy rápida |
| Rigidez/drift | alta (buena) | baja (cuida drift) | media-alta |
| Cuándo conviene | vivienda, edificios medios | naves, claros grandes, plazos | repetición masiva, claros grandes |

> *"En México la mano de obra es barata y el acero caro: por eso gana el concreto en lo común. El acero gana cuando el tiempo o el claro lo justifican."*

- **Optimiza repitiendo, no afinando.** Estandariza 3-4 tipos de trabe y columna.
- **El costo del detallado puede superar al del material.** *"Acero barato mal detallado sale caro."*
- **Los claros disparan el costo de forma no lineal** (de 7 a 10 m puede duplicar el costo).
- **Cuida el peso propio:** en suelo blando, cada tonelada arriba se paga doble en cimentación.
- **Líneas rojas (NO ahorrar):** cimentación, nudos, conexiones, refuerzo por cortante, confinamiento, juntas sísmicas.

## 6. Checklist mental antes de entregar

**Concepción:** ¿camino de cargas continuo? ¿CR cerca del CM, torsión ≤1.2×? ¿sin piso suave/columna corta/transferencias? ¿continuidad hasta cimentación? ¿juntas sísmicas suficientes? ¿columna fuerte-viga débil (≥1.2)?
**Análisis:** ¿inercias consistentes? ¿muros de relleno modelados/aislados? ¿masa completa? ¿periodo ≈N/10, cortante ≈c·W, equilibrio cierra? ¿P-Delta? ¿diafragma verificado? ¿drift en límites?
**Detallado:** ¿jerarquía dúctil? ¿el acero cabe y se ancla? ¿conexiones reflejan el taller? ¿cimentación con el geotecnista? ¿etapas constructivas/contraflechas?
**Cierre:** ¿validé 3 resultados a mano? ¿secciones estandarizadas? ¿margen donde la incertidumbre es alta? **¿Le entregaría este edificio a mi propia familia?**

> *"Si no firmarías para vivir abajo, no lo entregues."*

## Fuentes

- NTC-Sismo 2023 (PDF oficial, IISEE): https://iisee.kenken.go.jp/worldlist/34_Mexico/Mexico%202023-09-16%20NTC-SISMO%20-%20Para%20Entrega.pdf
- NTC-Concreto 2017 (SMIE): https://www.smie.org.mx/uploads/1/2022-11/normas_tecnicas_complementarias_diseno_construccion_estructuras_concreto_2017.pdf
- Recomendaciones estructurales materiales industrializados (CONAVI): https://siesco.conavi.gob.mx/doc/tecnicos/recomendaciones/Estructura%20Materiales%20industrializados.pdf

> Las reglas de dedo son de arranque y verificación; toda decisión final debe respaldarse con el análisis y la revisión normativa vigente.
