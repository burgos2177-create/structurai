# Preguntas Abiertas Resueltas — Banco de Criterio

> Ejemplos resueltos del tipo de pregunta que StructurAI debe contestar: prácticas, abiertas, de
> obra y de criterio. Cada respuesta sigue el patrón: **dato primero → porqué → fuente → matices**.
> Este archivo crece con cada nueva consulta (ver `APRENDIZAJE/como-retroalimentar.md`).

---

## P1. ¿A cada cuánto debo poner un castillo intermedio en una longitud de muro de block?

**Respuesta corta:** a una separación **no mayor que 1.5 veces la altura libre del muro (1.5 H) ni
que 4 m**, lo que resulte **menor**. Además, *siempre* en extremos de muro, intersecciones con
otros muros y bordes de aberturas grandes.

**El porqué:** los castillos confinan el muro y le dan capacidad ante sismo (lo "amarran" para que
no se desmorone). Si se separan demasiado, el paño de mampostería entre castillos es muy grande y
puede agrietarse en diagonal y desprenderse. El límite liga la separación a la altura (muros más
altos → paños más esbeltos → castillos más seguido) con un tope absoluto de 4 m.

**Fuente:** NTC-Mampostería (RCDMX 2017/2020), Cap. 5, detallado de mampostería confinada.

**Matices y ejemplo:**
- Muro de H = 2.5 m → 1.5 H = 3.75 m < 4 m → **rige 3.75 m**.
- Muro de H = 2.4 m → 1.5 H = 3.6 m → **rige 3.6 m**.
- Muros altos (H ≥ 2.67 m) → el tope de **4 m** controla.
- **Ojo:** mucha gente cita "3 m" (valor de normas viejas) o "1 H" — el texto vigente dice 1.5 H y
  4 m. En la práctica, conviene además **modular** los castillos con las aberturas (que coincidan
  con jambas de puertas/ventanas), aunque eso los ponga más seguido que el máximo normativo.
- Sección del castillo: igual al espesor del muro, dimensión paralela ≥ 15 cm; mínimo 4 varillas.

---

## P2. ¿A cada cuánto se ponen las viguetas para colocar correctamente la bovedilla?

**Respuesta corta:** el **intereje típico es 70 cm** centro a centro (rango común 67–75 cm). Lo
define el **ancho de la bovedilla**, así que se confirma al colocar la primera fila.

**El porqué:** la bovedilla se apoya en los patines inferiores de dos viguetas contiguas. El intereje
= ancho útil de la bovedilla + ancho del patín de la vigueta. Bovedillas de EPS comerciales miden
~0.61–0.63 m de ancho → intereje ~0.70 m. No es un valor que elijas libremente: lo manda el módulo
de la pieza que compres.

**Fuente:** fichas técnicas de fabricantes mexicanos (Sovalto, Premex, Greencel), NMX-C-406.

**Matices:**
- A mayor claro o carga → **menor intereje y/o mayor peralte de vigueta**.
- El **peralte** se elige por el claro: EPS ≈ **L/20**, cemento-arena ≈ **L/25** (ver tabla en
  `procesos-constructivos.md`). Ej.: claro de 4 m con EPS → peralte total ≈ 20 cm → vigueta de 15
  o 16 cm + capa de 4–5 cm.
- **Capa de compresión** 4–5 cm con malla 6×6-10/10. Apuntalar a ≤1.80 m con contraflecha; no
  retirar puntales antes de 14 días; no pisar la bovedilla.

---

## P3. En una viga de sección variable, ¿dónde aumento peralte para que tome más momento y dónde lo debilito?

**Respuesta corta:** **engruesa el peralte donde el momento es máximo** (en los apoyos de vigas
continuas/empotradas y en el empotramiento de un voladizo) y **adelgázalo donde el momento es bajo**
(centro del claro, punta del voladizo). Y recuerda el matiz: **más peralte no solo resiste más
momento, también lo *atrae*.**

**El porqué:** la rigidez a flexión va con la inercia, y la inercia con el **cubo del peralte**
($I = bh^3/12$). En una estructura hiperestática los momentos se reparten **en proporción a la
rigidez relativa**. Engrosar una zona la vuelve más rígida → atrae más momento hacia ella → y de
paso le das la capacidad para resistirlo. Es un círculo virtuoso: peralte donde duele.

**Fuente:** ver `diseno-conceptual/estructuracion-secciones-variables.md`.

**Matices:**
- **Viga continua/empotrada:** cartelas en los apoyos (momento negativo máximo), afinar al centro.
- **Voladizo:** máximo peralte en el empotramiento, cuña hacia la punta.
- **Marco/nave industrial:** cartela en los aleros (eaves haunch), longitud ≈ 10 % del claro.
- **Cortante:** el peralte máximo coincide con el cortante máximo (apoyos); diseña a cortante con el
  peralte real variable, considerando la contribución de las alas inclinadas.
- **Ideal:** que el peralte siga el diagrama de momentos → "viga de igual resistencia" (mínimo peso).

---

## P4. ¿Qué peralte de trabe predimensiono para un claro dado?

**Respuesta corta:** $h \approx L/10$ a $L/12$. Para concreto, además verifica el mínimo por
deflexión: $h \ge L/16$ (simplemente apoyada) a $L/21$ (ambos extremos continuos).

**El porqué:** L/10–L/12 da una trabe con rigidez suficiente para controlar deflexiones y un armado
razonable. El L/16–L/21 del ACI/NTC es el umbral bajo el cual hay que calcular deflexiones
explícitamente.

**Fuente:** `diseno-conceptual/...` (predimensionamiento) y `ntc-concreto-aci318.md` §5.

**Matices:** base $b \approx 0.3h$–$0.5h$ (mín 20 cm). Si hay cargas altas o incertidumbre, usa
L/10. Trabes de acero pueden ser más esbeltas (controlar por PLT y deflexión de servicio).

---

## P5. ¿Cuándo descimbro / retiro puntales?

**Respuesta corta:** **costados** (no cargan) a ~36 h; **fondos de trabes y losas** y **puntales de
vigueta-bovedilla** a **mínimo 14 días** (hasta 21–28 según claro y carga).

**El porqué:** los costados solo dan forma; los fondos sostienen el peso hasta que el concreto gana
resistencia. Descimbrar un fondo antes de tiempo provoca deflexiones permanentes o falla.

**Fuente:** `procesos-constructivos.md` §4.5 y §1.4.

**Matices:** son mínimos **orientativos**. Lo correcto es validar con el desarrollo real de
resistencia (clima, curado, tipo de cemento, cilindros). Regla de oro: **descimbrar por
resistencia, no por calendario.** Curar mínimo 7 días.

---

## P6. ¿Qué factores de carga uso, NTC o ASCE/ACI?

**Respuesta corta:** en CDMX/NTC-2017, gravitacional **1.3 muerta + 1.5 viva**; accidental **1.1**
a todo; favorable **0.9**. En ACI/ASCE 7 (LRFD): **1.2D + 1.6L**, **1.2D + 1.0E + 1.0L + 0.2S**,
**0.9D + 1.0E**, etc.

**El porqué:** ambos son estados límite. NTC desglosó en 2017 el viejo 1.4 único en 1.3/1.5 para
una confiabilidad más uniforme (la carga muerta tiene menos dispersión que la viva).

**Fuente:** `ntc-criterios-cargas.md` §2.

**Matices:** Grupo A (hospitales, escuelas) usa 1.5/1.7. Usa el reglamento de tu jurisdicción; el
RCDMX aplica formalmente solo a CDMX.

---

## P7. ¿Por qué se cayeron tantos edificios de losa plana en 2017 y cómo lo evito?

**Respuesta corta:** por **punzonamiento** (cortante por penetración) en la conexión losa-columna,
una falla **frágil y sin aviso**. ~61% de los colapsos en CDMX en 2017 fueron de losa plana sobre
columnas. Se evita **no usándola como único sistema sismorresistente**: agрégale muros de cortante
o trabes, pon **stud rails** en las conexiones críticas y **acero de integridad continuo** por la columna.

**El porqué:** la losa plana sin trabes tiene poca rigidez lateral → grandes distorsiones de
entrepiso → momento cíclico en la conexión → cortante excéntrico que excede vc → la losa "se zafa"
de la columna y cae sobre el piso de abajo (colapso progresivo / pancaking).

**Fuente:** `normativa/losas-punzonamiento.md` §3 y `normativa/comportamiento-sismico-proteccion.md`.

**Matices:** el acero de integridad (ACI 318-19 §8.7.4.2) es el "cinturón de seguridad": aunque la
conexión se punzone, sostiene la losa. Verifica la conexión para el **drift sísmico**, no solo gravedad.

---

## P8. Tengo una casa de block de 2 pisos, ¿cuánto muro necesito y dónde?

**Respuesta corta:** apunta a **~1.5-2% de densidad de muro por dirección** (área de muros ÷ área de
planta, calculada **por separado en X y Y**), con los muros **repartidos parejo en las dos
direcciones, simétricos y continuos** de la cimentación a la azotea.

**El porqué:** la mampostería confinada se comporta excelente en sismo por su **redundancia** (muchos
muros en paralelo) y **rigidez** (casi no se mueve). El talón de Aquiles es la dirección con poco
muro: ahí la casa se tuerce (torsión) y falla. Y si los muros desaparecen en planta baja (local/
cochera), aparece el **piso suave** — el colapso más letal y común.

**Fuente:** `procesos-constructivos/vivienda-mamposteria-practica.md` §2 y §5.

**Matices:** confina todo (castillos ≤4 m y en esquinas/cruces/huecos >60 cm, dala de cierre corrida),
deja **esperas** para el 2º piso, y si quieres abrir la planta baja, **eso ya es trabajo de ingeniero**
con marco diseñado, no de albañil.

---

## P9. ¿Dónde puedo perforar una trabe para pasar un ducto?

**Respuesta corta:** en el **tercio medio del peralte** (verticalmente) y cerca del **centro del claro**
(longitudinalmente), nunca cerca del apoyo ni en el tercio superior/inferior. Hueco ≤ ~⅓ del peralte,
**reforzado en su perímetro** con estribos extra y diagonales en las esquinas.

**El porqué:** el tercio medio está lejos de las fibras de máxima compresión (arriba) y máxima tensión
(abajo); el centro del claro tiene **cortante bajo**. Cerca del apoyo el cortante es máximo y el alma
es vital: ahí un hueco es un "corte de cortante".

**Fuente:** `diseno-conceptual/constructibilidad-diseno-obra.md` §4.

**Matices:** toda perforación en trabe debería requerir autorización del proyectista (RFI). En losa,
cuidado con huecos grandes que **cortan el diafragma** (necesitan vigas de borde/collar).

---

## P10. ¿Cuándo gobierna el viento sobre el sismo?

**Respuesta corta:** cuando la estructura es **ligera, con mucha superficie expuesta y poca masa**:
naves de lámina, cubiertas ligeras, anuncios espectaculares, antenas, y edificios altos esbeltos en
zonas de **baja sismicidad** (costa del Golfo/Sureste). El sismo va con la masa; el viento con el área × V².

**El porqué:** F_sismo ≈ masa × coeficiente; F_viento ≈ área × presión. Poca masa → sismo bajo; mucha
área → viento alto. En naves la cubierta enorme y ligera hace que la **succión que la arranca** gobierne.

**Fuente:** `normativa/viento-ntc-cfe-asce.md` §4.

**Matices:** por debajo de ~40-50 m en zona sísmica media-alta, el sismo controla. **Siempre se revisan
ambos** y se diseña con la envolvente. En edificios altos, además, el viento suele gobernar el **confort
por aceleración** (≤0.04g), no la resistencia.

---

## P11. La cisterna/alberca se me "tronó" o flotó, ¿por qué?

**Respuesta corta:** casi siempre por **flotación**: la vaciaron con el **nivel freático (NAF) alto**.
Un tanque/alberca vacío es un "barco" enterrado; la subpresión del agua del suelo lo levanta, lo voltea
o lo cuartea.

**El porqué:** la subpresión `U = γ_agua × h_NAF × área` puede superar el peso propio. Lleno, el agua
lo mantiene; vacío, nada lo sujeta.

**Fuente:** `elementos-especiales/elementos-especiales.md` §4 y §5.

**Matices:** revisa **FS_flotación ≥ 1.2-1.5**. Soluciones: **válvula hidrostática de alivio** en el
fondo (lo más común en albercas), losa de fondo extendida con tierra encima, anclas, o sub-drenaje que
abata el NAF. **Nunca vacíes en temporada de lluvias sin abrir la válvula de alivio.**

---

## P12. ¿Por qué el nudo viga-columna me quedó hueco (con oquedades)?

**Respuesta corta:** por **congestión de acero**: en el nudo se juntan estribos de columna, estribos
de viga, el longitudinal de las vigas y el arranque de la columna superior, y el concreto **no pasa** —
forma un puente y debajo queda aire, justo donde más esfuerzo hay.

**El porqué:** el concreto necesita separación libre entre varillas ≥ el mayor de **1·db, 25 mm y
1.33×el agregado**, más holgura para el vibrador. Cuando se amontona el acero (sobre todo si se
traslapa el 100% en una sección, que duplica la cuantía local), no hay por dónde colar.

**Fuente:** `diseno-conceptual/constructibilidad-diseno-obra.md` §1.

**Matices:** en obra se cura con concreto fluido + agregado de ½" y vibrador delgado. Pero el remedio
real era del diseñador: **menos varillas de mayor diámetro** (4#12 mejor que 8#8), cuatrapear traslapes,
o subir el peralte 5 cm. Alarma si la cuantía local del nudo pasa de ~4-6%.

---

## P13. ¿Conviene poner aisladores sísmicos a mi edificio?

**Respuesta corta:** solo si es un edificio **esencial** (hospital, emergencia, data center) que debe
seguir operando tras un sismo, está en **suelo firme** y es rígido/de baja-mediana altura. En **suelo
blando (zona de lago de CDMX) NO** — el aislamiento amplifica por resonancia.

**El porqué:** el aislador **alarga el periodo** del edificio (a ~2.5-3.5 s) para sacarlo de la zona de
mayor energía del sismo. Pero en suelo blando el periodo del suelo también es largo → coinciden →
**resonancia**, lo contrario de lo buscado. En edificios altos ya flexibles, aporta poco y genera
tracción en los aisladores.

**Fuente:** `normativa/comportamiento-sismico-proteccion.md` §4.1.

**Matices:** para edificios altos con viento + sismo, mejor **disipadores viscosos** (caso Torre Mayor,
sin daño en 2017). Para vivienda común, el dinero rinde más en **buena concepción + detallado dúctil +
supervisión** que en dispositivos. Un sistema de protección **no rescata una mala concepción**.

---

## Plantilla para nuevas preguntas (copiar y llenar)

```
## Pn. [Pregunta]

**Respuesta corta:** [el dato accionable, 1–2 líneas]

**El porqué:** [mecanismo físico o intención normativa]

**Fuente:** [norma + artículo / fabricante / archivo de CONOCIMIENTO]

**Matices:** [cuándo cambia, excepciones, advertencia de verificación]
```
