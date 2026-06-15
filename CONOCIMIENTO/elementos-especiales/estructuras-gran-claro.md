# Estructuras de Gran Claro y Especiales

> Idea rectora: **la forma que pone al material a trabajar en esfuerzo puro (axial o de membrana) es la más eficiente.** El gran claro no se vence con secciones grandes, sino con geometría inteligente.

## 0. Eficiencia por forma
Toda esta familia busca **evitar la flexión** (donde solo trabajan las fibras extremas).

| Mecanismo | Esfuerzo | Eficiencia |
|---|---|---|
| Viga/losa | Flexión | Baja-media |
| Armadura | Axial (barras) | Alta |
| Arco | Compresión + empuje | Muy alta |
| Cable | Tensión pura | Máxima (no pandea) |
| Cascarón | Membrana en el plano | Máxima |

El **cable** es el límite de eficiencia (tensión pura, no pandea); el **arco** es su imagen en compresión (paga pandeo + empuje); el **cascarón** lleva el arco a 2D.

## 1. Armaduras (trusses)
Nudos articulados idealizados → barras solo a **axial**. Cuerdas toman el momento global (par T-C), diagonales/montantes el cortante.
- **Tipos planos:** Pratt (diagonales en tensión), Howe (en compresión, madera), Warren (zig-zag, económica), Fink, tijera.
- **Espaciales (space frames):** malla de **doble capa** (gran rigidez con poco peso, redundancia, trabajo bidireccional), nudos MERO.
- **Claros:** plana 12-75 m; doble capa hasta ~100 m+; triple capa ≥100 m.
> Cuidar **pandeo de barras comprimidas** (gobierna) y **diseño de nudos** (costo y punto débil).

## 2. Arcos
Transforma gravedad en **compresión axial** + genera **empuje horizontal** en apoyos (reduce momentos vs viga). **Funicular:** la forma de un cable colgado, invertida, da compresión pura.
- **Tipos:** triarticulado (isostático, insensible a asentamientos/temperatura), biarticulado (rígido), empotrado (el más rígido, exige cimentación firme), **atirantado** (un tirante absorbe el empuje → apoyos ligeros, "bowstring").
- **Claros:** decenas a cientos de m (puentes >500 m).
> **Criterio clave:** resolver el **empuje horizontal**. Terreno firme → apoyos a tierra; terreno malo → arco atirantado. Vigilar **pandeo del arco** y momentos por cargas asimétricas.

## 3. Estructuras tensadas / de cable
Solo **tensión** (100% del material, no pandea). El reto es la **estabilidad de forma**.
- **Cubiertas colgantes** (funicular), **superficie anticlástica** (silla, dos familias de cables de curvatura opuesta con **pretensión** cruzada), **cable domes** (anillo a compresión + cables radiales, lógica de rueda de bicicleta), **membranas** (PTFE/PVC, **ETFE** hasta ~30 m solo), **tensegrity** (barras a compresión que "flotan" en una red de cables).
- **Pretensión insuficiente:** pierde rigidez, **ponding** (agua), **aleteo/flutter** aeroelástico. **Excesiva:** fatiga.
- **Claros:** los mayores de cubierta (estadios de cientos de m; domo de Singapur 312 m).
> Diseñar la **forma antes que la sección** (form-finding); resolver anclajes y bordes (toda la tensión se concentra ahí), drenaje y respuesta al viento.

## 4. Cascarones y láminas (shells)
Superficie delgada curva que resiste por **acción de membrana** (esfuerzos en el plano). La **doble curvatura** da la rigidez.
- **Cúpulas:** compresión en meridianos + **anillo de tensión** en la base (Panteón de Roma, 43 m).
- **Hypar (paraboloide hiperbólico):** superficie anticlástica de **líneas rectas** (reglada → cimbra de tablas rectas, baratísima); arcos de compresión + catenarias de tensión.
- **Félix Candela** (México), referencia mundial: **Los Manantiales** (Xochimilco, 1958), 8 hypars, espesor **~4 cm**. Su genio: geometría reglada + estática sencilla.
- **Pandeo** = modo de falla gobernante (sensible a imperfecciones), no el aplastamiento. Récord: **CNIT** (París, 1958), ~218 m de claro con ~8 cm de espesor.
> El costo real está en la **cimbra** (de ahí lo atractivo de los hypars reglados).

## 5. Estructuras neumáticas
Forma y estabilidad por **diferencia de presión de aire** (membrana a tensión). Soportadas por aire (todo el recinto presurizado; Pabellón Fuji Osaka 1970: solo 0.03 psi) o infladas (solo arcos/cojines). Claros grandes con peso casi nulo; **dependen del aire continuo y de anclajes contra levantamiento** (el viento gobierna).

## 6. Cubiertas de gran claro (estadios, aeropuertos, naves)
Elegir según: claro (más luz → arco → cascarón → cable/membrana), peso propio (domina en gran claro), función (¿retráctil? ¿luz ETFE?), **viento** (succión y aleteo gobiernan), empuje (anillos de tensión/tirantes), costo de cimbra/montaje (desplaza al concreto delgado hacia acero/membrana).

## 7. Torres, mástiles, chimeneas
Voladizos muy esbeltos donde **el viento gobierna**: empuje (along-wind) + **desprendimiento de vórtices** (across-wind) que con **lock-in** (sincronización con la frecuencia natural) amplifica resonante, incluso a vientos bajos. La naturaleza cíclica → **la fatiga gobierna** uniones soldadas.
- **Autosoportada** (<~60 m) vs **atirantada con vientos/guyed** (>~60 m).
> Verificar VIV/lock-in y fatiga. Mitigar con **amortiguadores (TMD)**, **aletas helicoidales (strakes)**, o cambiar rigidez/frecuencia.

## 8. Silos y tanques elevados
**Presión de granos — Janssen:** por fricción contra paredes (efecto arco), la presión es **exponencial y se satura** con la profundidad (no lineal como un líquido). Silos esbeltos (h/a≥7.5): régimen asintótico; bajos (h/a≤1.5): ~lineal tipo Rankine. Distinguir **llenado vs descarga** (mayor y excéntrica). **Pandeo de pared delgada** = falla gobernante (sensible a imperfecciones, presión asimétrica, succión por viento en silo vacío). **Tanques elevados:** masa elevada → gobierna sismo/viento (péndulo invertido).

## 9. Edificios altos y super-altos
A mayor altura gobierna el **viento/sismo** y luego el **confort** (aceleraciones). Fazlur Khan: "premium for height". Sistemas en orden de altura:

| Sistema | Cómo trabaja |
|---|---|
| Marco rígido | Flexión de marco |
| Núcleo / muros de cortante | Gran voladizo |
| Marco + núcleo (dual) | Interacción |
| **Tubo con marco (framed tube)** | Columnas perimetrales juntas → fachada como tubo hueco (Khan) |
| Tubo arriostrado (trussed) | Diagonales grandes reducen shear lag (John Hancock) |
| Tubo en haz (bundled) | Varios tubos agrupados (Willis/Sears, 442 m) |
| Outrigger + cinturón | Brazos rígidos conectan núcleo y columnas perimetrales |
| Diagrid | Malla diagonal perimetral (carga axial; Hearst, Gherkin) |
| Megaestructura | Megacolumnas + megadiagonales (Burj-class) |

El "tubo" concentra el material en el **perímetro** (máximo brazo) → enemigo: **shear lag** (las esquinas cargan más). **Drift** ~H/400-H/500; **aceleración de confort** fija la rigidez en super-altos. Mitigar con **TMD** (Taipei 101, Shanghai) y **forma aerodinámica** (esquinas redondeadas, ahusamiento, giro en planta).

## 10. Criterio integrador

| Principio | Consecuencia |
|---|---|
| Evitar la flexión | Buscar axial puro o membrana |
| El cable es el límite | Tensión pura, no pandea |
| El arco es el cable invertido | Compresión casi pura, paga empuje + pandeo |
| Cascarón = arco en 2D | Gobierna el pandeo y la cimbra |
| Forma reglada = construcción barata | Hypars de Candela |
| Gran claro → gobierna el peso propio | La solución más ligera gana |
| Altura → gobierna el viento (y el confort) | Material al perímetro y axial (tubo→diagrid→megaestructura) |
| Esbeltez → gobierna el viento dinámico | VIV, lock-in, aleteo, **fatiga** |

> Una estructura de gran claro bien concebida **es** su forma. Primero la geometría que pone al material en esfuerzo puro; la sección viene después.

## Fuentes

- Space Frame Structures (Handbook): http://freeit.free.fr/Structure%20Engineering%20HandBook/13.pdf
- Arch Analysis (EngineeringSkills): https://www.engineeringskills.com/posts/arch-analysis
- Los Manantiales / Félix Candela (ArchDaily): https://www.archdaily.com/496202/ad-classics-los-manantiales-felix-candela
- Concrete shell (Panteón, CNIT): https://en.wikipedia.org/wiki/Concrete_shell
- Janssen / silos (Nature Sci. Reports): https://www.nature.com/articles/s41598-025-20867-0
- Tube structures / Fazlur Khan (Omrania): https://omrania.com/inspiration/hancock-center-tube-structures-changed-skyscraper-history/
