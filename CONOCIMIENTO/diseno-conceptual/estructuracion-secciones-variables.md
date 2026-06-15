# Diseño Conceptual, Estructuración y Elementos de Sección Variable

> Guía para la concepción y estructuración de edificios, con énfasis en vigas/trabes de sección
> variable (acarteladas) y en cómo la distribución de rigidez gobierna dónde "trabaja" la estructura.

---

## 1. Principios de Estructuración

La estructuración define la disposición, tipo y proporción de los elementos resistentes **antes**
del análisis. Una buena estructuración resuelve el 80 % del problema sísmico; ningún análisis
sofisticado rescata una mala concepción.

### 1.1 Regularidad en planta y elevación

- **Simetría:** planta simétrica en masa y rigidez respecto a dos ejes ortogonales. La asimetría
  separa el **centro de masa (CM)** del **centro de rigidez (CR)** → **torsión** que sobrecarga los
  elementos perimetrales.
- **Compacidad:** evitar plantas en L, T, U, H. Si son inevitables, dividir con **juntas sísmicas**.
- **Regularidad en elevación:** evitar cambios bruscos de rigidez/masa. Un piso más flexible que
  los adyacentes es un **piso suave/blando**, mecanismo de colapso frecuente.

```
PLANTA REGULAR (bien)        PLANTA IRREGULAR (mal)
┌───────────────┐            ┌────────┐
│   CM ≈ CR     │            │        │────────┐
│      ·        │            │   CM   │   CR   │  ← excentricidad
│               │            │   ·         ·   │     → torsión
└───────────────┘            └────────────────┘
```

### 1.2 Continuidad de elementos verticales

Columnas y muros **continuos desde la cimentación hasta la azotea**, sin offsets. Una columna que
"muere" en una viga obliga a una **trabe de transferencia** (costosa y vulnerable); solo se
justifica cuando la arquitectura lo impone.

### 1.3 Columna fuerte – viga débil (strong column / weak beam)

Principio de **diseño por capacidad**: las **rótulas plásticas se forman en los extremos de las
vigas**, no en las columnas. Así la disipación de energía se reparte en muchas vigas y las columnas
quedan esencialmente elásticas, evitando el **mecanismo de piso suave**.

$$\sum M_{nc} \ge 1.2 \sum M_{nb}$$

```
DESEABLE (col. fuerte/viga débil)     INDESEABLE (piso suave)
   │     │     │                          │     │     │
───●═════●═════●───  ← rótulas         ───┼─────┼─────┼───
   │     │     │       en vigas           ●     ●     ●  ← rótulas en
───●═════●═════●───                     ──●─────●─────●──   columnas → colapso
```

### 1.4 Redundancia (hiperestaticidad)

Múltiples trayectorias de carga. Si un elemento plastifica, la fuerza se **redistribuye**. Los
códigos penalizan la baja redundancia (factor ρ).

### 1.5 Trayectoria de cargas (load path)

Camino continuo hasta el suelo: losa → vigas secundarias → trabes → columnas/muros → cimentación →
terreno. Cada conexión es crítica: **la cadena es tan fuerte como su eslabón más débil.**

### 1.6 Diafragma rígido

La losa distribuye las fuerzas laterales entre los elementos verticales **en proporción a su
rigidez**. Diafragma rígido (losa maciza/con firme) reparte por rigidez; flexible (con grandes
aberturas) por área tributaria. Aberturas grandes (escaleras, ductos) deben reforzarse.

### 1.7 Juntas constructivas y sísmicas

- **Junta sísmica:** separación entre cuerpos para evitar **golpeteo (pounding)**. Ancho ≥ suma de
  desplazamientos máximos.
- **Junta constructiva (de colado):** en zonas de **bajo cortante** (centro del claro, no apoyos),
  con superficie rugosa/llaves de cortante.

### 1.8 Predimensionamiento (reglas prácticas)

| Elemento | Regla | Notas |
|---|---|---|
| **Trabes/vigas (peralte h)** | $h \approx L/10$ a $L/12$ | L = claro libre. L/10 con incertidumbre o cargas altas. |
| **Base de viga (b)** | $b \approx 0.3h$ a $0.5h$, $b \ge 20$ cm | $1.5 \le h/b \le 4$. |
| **Losa maciza (1 dir.)** | $h \approx L/24$ a $L/28$ | L = claro corto. |
| **Losa maciza (2 dir.)** | $h \approx perímetro/180$ o $L/40$ | L = lado mayor. |
| **Columnas** | $A_g \ge P_u / (0.45 f'_c)$ preliminar | Verificar por carga axial + momento, drift y nudo. |
| **Muros de cortante** | espesor $\ge L/25$ y $\ge 15$ cm | Densidad ~1–2 % del área de planta por dirección. |

### 1.9 Sistemas estructurales

- **Marcos (momentos):** dúctiles y flexibles arquitectónicamente, pero **flexibles lateralmente**
  → controlan por drift. Económicos hasta ~15–20 niveles.
- **Muros de cortante:** muy rígidos, controlan deriva, ideales para edificios altos.
- **Sistemas duales:** marcos + muros (o contraventeos). Los muros toman el mayor cortante; los
  marcos aportan redundancia (≥25 % como segunda línea de defensa).
- **Contraventeos:** **concéntricos (CBF)** rígidos pero menos dúctiles; **excéntricos (EBF)** con
  **eslabón dúctil (link)** que disipa energía.

---

## 2. Vigas / Trabes de Sección Variable (Acarteladas / Haunched)

### 2.1 La pregunta central

> *"Si tengo una viga de sección variable, ¿dónde me conviene aumentar más peralte para que asuma
> más momento y dónde debilitar para que absorba menos?"*

**Respuesta corta:** aumenta el peralte **donde el diagrama de momentos es máximo** (apoyos de
vigas continuas/empotradas, empotramiento de voladizos) y redúcelo donde el momento es bajo (centro
del claro o punta del voladizo). **Matiz clave en estructuras hiperestáticas: el peralte no solo
resiste el momento, también lo *atrae*.**

### 2.2 El mecanismo: rigidez ∝ inercia ∝ peralte³

$$I = \frac{b\,h^3}{12}$$

El **peralte $h$ está al cubo**:

> **Duplicar la base $b$ duplica la rigidez; duplicar el peralte $h$ la multiplica por OCHO**
> ($2^3 = 8$).

En estructuras **hiperestáticas**, los momentos se distribuyen **en proporción a la rigidez
relativa**. Por tanto:

- **Aumentar el peralte → mayor rigidez relativa → ATRAE momento hacia esa zona.**
- **Reducir el peralte → menor rigidez → ALEJA el momento.**

Esto es deseable: las zonas naturalmente más solicitadas (apoyos) se hacen más peraltadas, lo que
les da capacidad Y atrae aún más momento, descargando el centro del claro.

```
RIGIDEZ ∝ h³   →   el momento "fluye" hacia lo rígido
     poco rígido          MUY rígido
       (h chico)          (h grande)
        ~~~~~~~ ─────────► ████████   ← aquí se concentra el momento
```

### 2.3 Dónde poner las cartelas según el tipo de viga

**Viga continua o doblemente empotrada (carga gravitacional):**
- Momentos **máximos NEGATIVOS en los APOYOS**; positivo (menor) al centro.
- → **Cartelas en los apoyos**, afinando hacia el centro.

```
VIGA CONTINUA — peralte de la cartela (████)
  ████▄                            ▄████   ← cartelas en apoyos (M⁻ máx)
  █████▄__                      __▄█████
        ‾‾‾▄▄▄________________▄▄▄‾‾‾        ← centro: peralte mínimo (M⁺)
```

**Voladizo (cantilever):**
- Momento **máximo en el EMPOTRAMIENTO**, cero en la punta.
- → **Máximo peralte en el empotramiento**, afinando hacia la punta (cuña). Caso de libro de la
  "viga de igual resistencia".

```
VOLADIZO
  ████████▄▄▄▄▄▄▄▄▄▄▄▄▄____________
  ██████████████▄▄▄▄▄▄▄▄▄▄▄▄▄______ → punta (M = 0, peralte mínimo)
  ▲ empotramiento (M máx)
```

**Marco rígido / nave industrial acartelada (steel portal frame):**
- Momento máximo en los **aleros (eaves)**, en el nudo viga–columna.
- → **Cartela en el alero** (eaves haunch) y, secundariamente, en la cumbrera (apex).

```
MARCO ACARTELADO (nave industrial)
            apex haunch
               ╱╲
          ____╱  ╲____
    ████╱              ╲████   ← eaves haunch (M máx en aleros)
   ║                        ║
   ║ columna                ║ columna
  ═╩═                      ═╩═
```

### 2.4 Reglas dimensionales de las cartelas

- **Concreto (vigas):** $L_{cartela} \approx L/10$ a $L/8$; pendiente típica **1:3** (vertical:horizontal).
- **Acero (eaves haunch):** longitud $\approx$ **10 % del claro** del marco. Con esa longitud, el
  momento negativo al final de la cartela ≈ momento positivo máximo cerca de la cumbrera → diseño
  equilibrado.
- **Peralte de la cartela del alero:** se corta del **mismo perfil del larguero** (o algo mayor) y
  se suelda al alma inferior.

### 2.5 Diseño por capacidad: "viga de igual resistencia"

El ideal es que **el peralte siga el diagrama de momentos**, de modo que $\sigma = M/S$ (con
$S = I/c$) sea **constante** a lo largo de la viga. Optimiza el material (menos peso para la misma
seguridad). Es la razón física de cartelas, voladizos afinados y trabes presforzadas de peralte
variable.

### 2.6 Consideraciones de cortante

El peralte variable **modifica el cortante** — no es gratis:

- **Alas inclinadas:** la componente vertical de la fuerza en el patín inclinado puede **ayudar** a
  resistir el cortante (inclinación favorable) o **incrementarlo** (desfavorable). En trabes
  acarteladas de concreto, el refuerzo longitudinal inclinado contribuye al cortante.
- El peralte máximo coincide con el cortante máximo (en apoyos): diseñar a cortante en la sección
  crítica con el peralte **real variable**, no el promedio.

### 2.7 Pandeo y constructibilidad

- **Pandeo:** en acero, el patín comprimido (inferior, en el momento negativo del alero) debe
  arriostrarse contra **pandeo lateral-torsional** (stays al patín inferior). Almas esbeltas de
  peralte variable requieren rigidizadores.
- **Constructibilidad:** la sección variable complica encofrados/cortes/soldaduras. La economía de
  material debe compensar el mayor costo de fabricación.

### 2.8 Aplicaciones típicas

- **Naves industriales:** marcos de acero acartelados; claros **25–35 m** son los más eficientes.
- **Trabes de transferencia:** gran peralte/cartela para momentos y cortantes elevados.
- **Vigas presforzadas:** peralte variable siguiendo el momento (puentes, dobles T).
- **Voladizos arquitectónicos:** marquesinas, balcones con perfil en cuña.

---

## 3. Criterios de Modelación previos al Análisis

1. **Rigideces relativas gobiernan la distribución de fuerzas.** Antes de afinar secciones,
   pregúntate: *¿quiero que esta zona tome más o menos momento?* y ajusta el peralte.
2. **Modelar la sección variable correctamente.** Usar elementos **tapered** o discretizar en
   segmentos prismáticos cortos que aproximen $I(x)$. Modelarla como prismática equivalente
   **subestima la atracción de momento al apoyo** y el cortante real allí.
3. **Inercia efectiva/agrietada (concreto):** en sismo, inercias reducidas (~$0.5 I_g$ vigas,
   $0.7 I_g$ columnas). La rigidez **relativa** decide el reparto.
4. **Zonas rígidas en nudos (rigid end offsets):** mejoran la estimación de deriva y momentos en
   cara de apoyo.
5. **Estrategia de "dónde quiero que falle":** jerarquía de resistencia (columna fuerte/viga débil)
   + jerarquía de rigidez (peralte donde quiero atraer momento) = el diseñador **dirige el mecanismo
   de colapso** hacia uno dúctil y predecible. Esa es la esencia del diseño por capacidad.

---

## Resumen de Ideas Clave

| Concepto | Regla mental |
|---|---|
| Rigidez vs. peralte | $I \propto h^3$ → duplicar $h$ rigidiza ×8 |
| Atracción de momento | Más rígido (más peralte) → **atrae** más momento |
| Viga continua/empotrada | Cartelas **en los apoyos** (M⁻ máximo) |
| Voladizo | Máximo peralte **en el empotramiento**, afinar a la punta |
| Marco/nave | Cartela en **aleros**, longitud ≈ 10 % del claro |
| Predim. trabe | $h = L/10$ a $L/12$ |
| Filosofía sísmica | Columna fuerte / viga débil + diafragma rígido + redundancia |
| Diseño óptimo | Peralte que sigue el momento = "viga de igual resistencia" |

---

## Fuentes

- Portal frames — SteelConstruction.info: https://steelconstruction.info/Portal_frames
- SCI Publication P252, *Design of Single-Span Steel Portal Frames*: https://www.steelconstruction.info/images/4/44/SCI_P252.pdf
- *The Role of Haunches in Portal Frames* — Structville: https://structville.com/2020/05/the-role-of-haunches-in-portal-frames.html
- *Moment of Inertia: Structural Stiffness and Section Properties* — RISA Blog: https://blog.risa.com/moment-of-inertia
- *Haunched Beams in Concrete* — Civil Engineering Profile: https://civilengpro.com/haunched-beams/
- *Trabes acarteladas de concreto reforzado... mecanismo de cortante* — Redalyc/SMIS: https://www.redalyc.org/journal/618/61853899002/html/
- *The strong column-weak beam design philosophy* — ResearchGate: https://www.researchgate.net/publication/342869179
- *Lateral Stiffness of RC Moment Frames with Haunched Beams* — ResearchGate: https://www.researchgate.net/publication/259483193
- *Predimensionamiento de vigas y pilares* — Wikipedia: https://es.wikipedia.org/wiki/Predimensionamiento_de_vigas_y_pilares
