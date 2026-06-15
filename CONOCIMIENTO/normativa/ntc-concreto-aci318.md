# Diseño de Concreto Reforzado: NTC-DCEC (RCDMX) vs. ACI 318-19

> Documento de referencia comparativo entre las **Normas Técnicas Complementarias para Diseño y Construcción de Estructuras de Concreto** (NTC-DCEC, publicadas en la Gaceta Oficial de la CDMX el 15-dic-2017, vigentes con el RCDMX) y el **ACI 318-19** (*Building Code Requirements for Structural Concrete*).
>
> **Unidades:** las NTC usan el sistema SI con f'c y fy en **MPa** (las ediciones previas usaban kg/cm²; se incluyen equivalencias). El ACI 318-19 se cita en su versión SI (318M-19) salvo donde se indica el sistema inglés (psi).
>
> *Nota de alcance:* No existe una "RCDMX 2023" de concreto que sustituya a las NTC-2017; las NTC-DCEC vigentes son las de 2017. Cuando un valor cambió respecto de NTC-2004 o ACI 318-14, se indica.

---

## 1. Filosofía de diseño: factores de carga y de resistencia

Ambas normas usan **diseño por estados límite / LRFD** (resistencia última). La resistencia de diseño debe cumplir:

```
Resistencia de diseño ≥ Resistencia requerida
φ·Rn  (ACI)   ó   FR·Rn  (NTC)   ≥   Σ(factores de carga × efectos de carga)
```

La diferencia conceptual es la **nomenclatura** (φ en ACI, **FR** en NTC) y el **origen de los factores de carga** (en CDMX provienen de las **NTC sobre Criterios y Acciones**, no de la norma de concreto).

### 1.1 Factores de reducción de resistencia — Tabla comparativa

| Solicitación / elemento | **FR (NTC-DCEC 2017)** | **φ (ACI 318-19)** |
|---|---|---|
| Flexión (secc. controlada por tensión, εt ≥ 0.005) | **0.90** | **0.90** |
| Flexión, secc. de transición (0.002 < εt < 0.005) | (interpolación implícita) | 0.65–0.90 (interpolado) |
| Flexión, secc. controlada por compresión (εt ≤ εty) | **0.75** (columnas con estribos) | **0.65** (estribos) / 0.75 (espiral/zuncho) |
| Cortante y torsión | **0.75** | **0.75** |
| Flexocompresión (columnas, estribos) | **0.75** (general); 0.80 si εt grande | 0.65 → 0.90 según εt |
| Flexocompresión (columnas, zuncho/hélice) | **0.80** | 0.75 → 0.90 según εt |
| Aplastamiento del concreto | **0.65** (NTC 0.70 en algunos casos) | **0.65** |
| Dispositivos de anclaje / aplastamiento sobre apoyo | 0.65 | 0.65 |
| Modelo de puntales y tensores | 0.75 | 0.75 |

> **Diferencia clave:** el ACI 318-19 hace φ **variable** con la deformación neta de tensión εt (φ = 0.65 + 0.25·(εt − εty)/(0.005 − εty) para estribos). Las NTC fijan FR = 0.90 para flexión y FR = 0.75 para flexocompresión sin la transición continua tan explícita, aunque limitan la cuantía para garantizar comportamiento dúctil (controlado por tensión).

### 1.2 Factores de carga (combinaciones)

**NTC sobre Criterios y Acciones (CDMX):**

| Combinación | Factor |
|---|---|
| Carga muerta + viva máxima (acciones permanentes + variables) | **1.3·CM + 1.5·CV** |
| Con acción accidental (sismo o viento) | **1.1·(CM + CVa ± S)** |
| Estado límite de servicio | 1.0 (cargas nominales) |

> CVa = carga viva instantánea (combinación con sismo). El factor 1.1 aplica a la combinación gravitacional + accidental.

**ACI 318-19 (remite a ASCE/SEI 7), combinaciones LRFD principales:**

| Combinación | Factor |
|---|---|
| 1 | **1.4·D** |
| 2 | **1.2·D + 1.6·L + 0.5·(Lr ó S ó R)** |
| 3 | 1.2·D + 1.6·(Lr ó S ó R) + (1.0·L ó 0.5·W) |
| 4 | 1.2·D + 1.0·W + 1.0·L + 0.5·(Lr ó S ó R) |
| 5 | **1.2·D + 1.0·E + 1.0·L + 0.2·S** |
| 6 | 0.9·D + 1.0·W |
| 7 | **0.9·D + 1.0·E** |

> D = muerta, L = viva, Lr = viva de techo, S = nieve, R = lluvia, W = viento, E = sismo.

---

## 2. Recubrimientos mínimos de concreto

El **recubrimiento libre** se mide desde la superficie del concreto hasta la cara exterior del refuerzo (estribo o barra longitudinal).

### 2.1 NTC-DCEC 2017

| Condición / elemento | Recubrimiento libre mínimo |
|---|---|
| Concreto colado contra el suelo, permanentemente expuesto a él | **70 mm** |
| Concreto expuesto a suelo o intemperie, barras > No. 6 (Ø ≥ 19 mm) | **50 mm** |
| Concreto expuesto a suelo o intemperie, barras ≤ No. 5 (Ø ≤ 16 mm) | **40 mm** |
| Losas, muros, viguetas no expuestas a intemperie ni suelo (barras ≤ No. 11) | **20 mm** |
| Vigas y columnas no expuestas (al estribo) | **≈ 20–25 mm** (≥ Ø barra y ≥ 1.5·tamaño máx. de agregado) |
| Cascarones y losas plegadas (barras ≤ No. 5) | **13 mm** |
| Ambiente corrosivo / agresivo | incrementar; el recubrimiento nunca menor que **el diámetro de la barra** ni que **1.5 × tamaño máximo del agregado** |

> Para elementos con vida útil prolongada o exposición a cloruros, las NTC remiten a incrementar el recubrimiento y/o exigir mayor calidad de concreto (relación a/c baja).

### 2.2 ACI 318-19 (Tabla 20.5.1.3.1)

| Exposición / elemento | Recubrimiento libre |
|---|---|
| Concreto colado contra el suelo y expuesto permanentemente | **75 mm (3 in)** |
| Expuesto a intemperie o suelo, barras No. 19 a No. 57 (Ø19–57 mm) | **50 mm (2 in)** |
| Expuesto a intemperie o suelo, barras ≤ No. 16 (Ø ≤ 16 mm), malla MW200/MD200 | **40 mm (1½ in)** |
| No expuesto — losas, muros, viguetas, barras ≤ No. 36 | **20 mm (¾ in)** |
| No expuesto — losas, muros con barras No. 43 y No. 57 | **40 mm (1½ in)** |
| No expuesto — vigas, columnas (al estribo, espiral) | **40 mm (1½ in)** |
| No expuesto — cascarones, placas plegadas, barras ≤ No. 16 | **13 mm (½ in)** |

> Para **exposición a cloruros** o ambientes severos (categorías de exposición C, S, F, W), el ACI exige adicionalmente requisitos de **f'c mínimo, relación a/c máxima y contenido de aire** (Tabla 19.3.2.1), no solo el recubrimiento.

---

## 3. Refuerzo por flexión en vigas: cuantías mínima, balanceada y máxima

Definiciones: ρ = As/(b·d). Cuantía **balanceada** ρb corresponde a la falla simultánea de aplastamiento del concreto (εcu) y fluencia del acero (εy).

### 3.1 Cuantía balanceada (ambas normas, forma general)

```
        f'c        εcu                              εcu = 0.003
ρb = β1 ─── · ──────────── ,   con   β1 = 0.85 para f'c ≤ 28 MPa (NTC: f*c ≤ 28)
        fy    εcu + fy/Es                            β1 decrece 0.05 por cada 7 MPa por encima (mín 0.65)
```
- **NTC:** usa f"c = 0.85·f*c (bloque equivalente), con f*c = 0.8·f'c. Es = 200 000 MPa.
- **ACI:** usa 0.85·f'c directamente; εcu = 0.003; Es = 200 000 MPa.

### 3.2 Cuantía mínima por flexión

**NTC-DCEC 2017** (asegura que Mr ≥ Magrietamiento):

```
              0.7·√f'c
ρmin = As,min ─────────── · b·d        (f'c y fy en MPa)
                 fy
```
Equivalente en kg/cm²: `ρmin = 0.7·√(f'c)/fy` con f'c, fy en kg/cm². Para losas y zapatas, las NTC permiten usar el **refuerzo por temperatura** como mínimo en la dirección secundaria.

**ACI 318-19 (9.6.1.2):** As,min es el **mayor** de:

```
         0.25·√f'c                    1.4
As,min = ───────── · bw·d      y      ─── · bw·d        (SI, MPa)
            fy                         fy
```
En sistema inglés: `As,min = max(3√f'c/fy , 200/fy)·bw·d` (psi).
**Excepción (9.6.1.3):** no se requiere As,min si As provisto ≥ 1.33·As requerido por análisis.

### 3.3 Cuantía máxima por flexión

**NTC-DCEC 2017:**
- Marcos **ordinarios / sin requisitos sísmicos especiales:** `ρmax = 0.75·ρb`
- Marcos **dúctiles (Q = 3 o 4):** `ρmax = 0.025` (2.5 %) y además se exige sección controlada por tensión.

**ACI 318-19:** no fija ρmax explícito; lo controla **indirectamente** exigiendo que en flexión la sección sea **controlada por tensión o de transición**, es decir εt ≥ 0.004 como límite absoluto (φ se reduce si εt < 0.005). En la práctica:
```
ρmax ≈ ρ correspondiente a εt = 0.004  ⇒  ρmax = 0.85·β1·(f'c/fy)·(0.003/0.007)
```
Para **marcos especiales (SMF, Cap. 18):** `ρ ≤ 0.025` y como mínimo 2 barras continuas arriba y abajo.

---

## 4. Refuerzo por temperatura y contracción en losas

Refuerzo perpendicular al principal, para controlar agrietamiento por contracción y cambios de temperatura.

### 4.1 NTC-DCEC 2017

Área mínima por contracción y temperatura, por unidad de ancho, en cada dirección:

```
        660·x1
as = ──────────────      (mm²/m de ancho, por capa)
      fy·(x1 + 100)
```
donde x1 = espesor de la losa en mm. **Regla práctica simplificada** muy usada: `as,min ≈ 0.002·b·h` para fy = 412 MPa (4200 kg/cm²) y losas comunes.
**Separación máxima** del refuerzo por temperatura: **≤ 3.5·h** o **500 mm**, el menor. En losas expuestas a la intemperie la cuantía se incrementa.

### 4.2 ACI 318-19 (24.4.3)

Cuantía mínima de refuerzo de contracción y temperatura sobre el **área bruta** de concreto:

| Tipo de acero | ρt mínimo |
|---|---|
| Barras corrugadas Grado 280/350 | **0.0020** |
| Barras corrugadas o malla Grado 420 | **0.0018** |
| Refuerzo con fy > 420 MPa (medido a εy = 0.0035) | **0.0018 × 420/fy**, pero ≥ **0.0014** |

**Separación máxima** del refuerzo de temperatura: **≤ 5·h** o **450 mm** (18 in), el menor.

---

## 5. Peraltes mínimos por deflexión

Si el peralte total **h** del elemento es mayor que estos valores, **no es necesario calcular deflexiones** (se cumplen por defecto). L = claro libre (ACI) o claro entre apoyos.

### 5.1 ACI 318-19 — Tabla 9.3.1.1 (vigas y losas en una dirección, no presforzadas)

| Condición de apoyo | **Vigas y losas nervadas** (h mín) | **Losas macizas en una dirección** (h mín) |
|---|---|---|
| Simplemente apoyada | **L/16** | **L/20** |
| Un extremo continuo | **L/18.5** | **L/24** |
| Ambos extremos continuos | **L/21** | **L/28** |
| Voladizo (cantiléver) | **L/8** | **L/10** |

> **Corrección por fy:** los valores son para fy = 420 MPa (60 ksi) y concreto de peso normal. Para otro fy, multiplicar h por **(0.4 + fy/700)** [SI, MPa] = (0.4 + fy/100 000) [psi]. Para concreto ligero (wc = 1440–1840 kg/m³), multiplicar por **(1.65 − 0.0003·wc) ≥ 1.09**.

**Losas en dos direcciones (ACI 8.3.1.1):** el peralte mínimo se controla por ln/30, ln/33, ln/36 (sin/con vigas y según αfm), con tablas específicas (Tabla 8.3.1.1 y 8.3.1.2).

### 5.2 NTC-DCEC 2017 — peraltes mínimos

Las NTC permiten omitir el cálculo de deflexiones si h ≥ valores análogos. Para **vigas** (concreto fy = 412 MPa):

| Condición de apoyo | h mín (vigas) |
|---|---|
| Simplemente apoyada | **L/16** |
| Un extremo continuo | **L/18.5** |
| Ambos extremos continuos | **L/21** |
| Voladizo | **L/8** |

> Corrección por fy ≠ 412 MPa: multiplicar por **(0.4 + fy/700)** (fy en MPa). Estos valores coinciden con el ACI por su origen común.

**Losas macizas perimetralmente apoyadas (dos direcciones, NTC):**
El peralte efectivo mínimo se obtiene con:
```
        Perímetro
d ≥  ───────────── · k       (sin omitir el cálculo si no se cumple)
          250
```
con el perímetro del tablero en cm; el coeficiente se ajusta cuando fy ≠ 412 MPa multiplicando por `(0.032·⁴√(fs·w))`. Para **losas en una dirección**, las NTC usan los mismos cocientes h/L de la tabla de vigas (L/24, L/28, etc., para losas macizas).

---

## 6. Separación de estribos (refuerzo transversal en vigas)

### 6.1 Vigas de marcos NO dúctiles / ordinarios

**Separación máxima por cortante (ambas normas):**

| Condición | NTC-DCEC 2017 | ACI 318-19 (9.7.6.2.2) |
|---|---|---|
| Cortante moderado (Vs ≤ 0.33√f'c·bw·d en ACI; Vu ≤ "límite" NTC) | **s ≤ d/2** y ≤ 600 mm | **s ≤ d/2** y ≤ 600 mm |
| Cortante alto (Vs > 0.33√f'c·bw·d) | **s ≤ d/4** | **s ≤ d/4** |

### 6.2 Vigas de marcos DÚCTILES / especiales (SMF) — zonas de confinamiento

Se requiere refuerzo transversal de confinamiento (estribos cerrados / hoops) en una **longitud = 2·h** medida desde la cara del apoyo (zona de articulación plástica).

**ACI 318-19 (18.6.4) — dentro de la zona de confinamiento (2h desde la cara):**
El primer estribo a ≤ 50 mm de la cara de la columna; separación s ≤ el **menor** de:

| Criterio | Valor |
|---|---|
| d/4 | **d/4** |
| 6·db (db = Ø barra long. menor) | **6·db** |
| Separación absoluta | **150 mm (6 in)** |

> *Nota ACI 318-19:* se eliminó el antiguo límite de 24·db_estribo; los gobernantes son d/4, 6·db y 150 mm.

**ACI 318-19 — fuera de la zona de confinamiento (resto del claro):**
```
s ≤ d/2   (estribos de cortante)
```

**NTC-DCEC 2017 (marcos dúctiles, Q = 3 ó 4) — zona de confinamiento (2h desde la cara):**
Primer estribo a ≤ 50 mm de la cara; s ≤ el **menor** de:

| Criterio | Valor |
|---|---|
| d/4 | **d/4** |
| 8·db (barra longitudinal) | **8·db** |
| 24·db_estribo | **24·db_estribo** |
| Separación absoluta | **300 mm** |

**NTC — fuera de la zona de confinamiento:** `s ≤ d/2`.

> Diferencia destacable: ACI 318-19 usa **6·db** y **150 mm**; las NTC usan **8·db** y **300 mm** en zona de confinamiento de vigas dúctiles. ACI es algo más estricto en este punto.

---

## 7. Longitudes de desarrollo y anclaje

### 7.1 Concepto

La **longitud de desarrollo (ℓd)** es la longitud embebida recta necesaria para que la barra alcance su esfuerzo de fluencia fy sin que falle la adherencia/hendimiento. Si no hay longitud recta suficiente, se usan **ganchos estándar (ℓdh)** o **barras con cabeza** (headed bars).

### 7.2 ACI 318-19 — barras corrugadas en tensión (25.4.2.4, ecuación general)

```
       ⎛   fy      ψt·ψe·ψs·ψg    ⎞
ℓd =   ⎜ ─────── · ───────────── ⎟ · db
       ⎝ 1.1·λ·√f'c   (cb+Ktr)/db ⎠
```
con (cb + Ktr)/db ≤ 2.5, y ℓd ≥ 300 mm. Factores de modificación:

| Factor | Significado | Valores |
|---|---|---|
| ψt | posición del refuerzo | 1.3 (barras superiores, >300 mm de concreto fresco debajo); 1.0 otras |
| ψe | revestimiento (epóxico) | 1.5 / 1.2 / 1.0 |
| ψs | tamaño de barra | 0.8 (≤ No.19) / 1.0 (≥ No.22) |
| **ψg** | grado del acero (**nuevo en 318-19**) | 1.0 (Gr 40–60); **1.15 (Gr 80)**; **1.3 (Gr 100)** |
| λ | concreto ligero | 0.75 ligero / 1.0 normal |

**Gancho estándar en tensión (ℓdh, 25.4.3):**
```
        ⎛ fy·ψe·ψr·ψo·ψc ⎞
ℓdh =   ⎜ ───────────── ⎟ · db^1.5  ,   ℓdh ≥ max(8db, 150 mm)
        ⎝   23·λ·√f'c     ⎠
```

**Reglas prácticas (ACI, aproximadas, Gr 60, f'c=28 MPa, condiciones normales):**
- Barras inferiores en tensión: **ℓd ≈ 40–50·db**
- Barras superiores: ~30 % más largas (factor 1.3)
- Gancho estándar: **ℓdh ≈ 12·db** (mucho menor que la recta)
- Traslapes Clase B en tensión: **1.3·ℓd**

### 7.3 NTC-DCEC 2017 — longitud de desarrollo

Concepto equivalente; la NTC expresa ℓd como `ℓd = ℓdb · (factores) ≥ 300 mm`, con la longitud básica:
```
        0.30·db·fy
ℓdb = ──────────────   (forma simplificada, MPa)  ≥  0.11·db·fy/√f'c
            √f'c
```
y factores por posición (1.3 barras superiores), recubrimiento, refuerzo transversal y epóxico, análogos al ACI. **Gancho estándar:** doblez de 90° o 180° con extensión ≥ 12·db (90°) ó 4·db (180°), y ℓdh ≥ max(8·db, 150 mm).

> Regla práctica común en México: para barras en tensión, **ℓd ≈ 40·db** (Gr 42, f'c = 25 MPa) como primera estimación; verificar con la fórmula.

### 7.4 Anclaje en marcos dúctiles (zonas sísmicas)

En **nudos de marcos especiales/dúctiles**, las barras de viga que terminan en la columna deben anclarse con **gancho a 90°** y la longitud de desarrollo del gancho ℓdh para barras Gr 60 en concreto de peso normal (ACI 18.8.5):
```
        fy·db
ℓdh = ─────────   ≥ max(8db, 150 mm)
       5.4·√f'c
```

---

## 8. Resistencias típicas f'c y fy usadas en México

### 8.1 Concreto (f'c)

| f'c (kg/cm²) | f'c (MPa, aprox.) | Uso típico |
|---|---|---|
| 200 | ~20 | Estructuras menores, firmes, elementos no estructurales |
| **250** | **~25** | **Muy común** en edificación: losas, vigas, columnas |
| **300** | **~30** | Columnas, elementos de marcos, estructuras medianas |
| 350 | ~34 | Columnas con cargas altas, edificios de mediana altura |
| 400–500 | ~40–49 | Columnas de edificios altos, concreto de alta resistencia |
| ≥ 600 | ≥ 59 | Concreto de alta resistencia (requiere control estricto) |

> Las NTC exigen para **estructuras dúctiles** (marcos Q = 3 o 4) un **f'c mínimo de 25 MPa (≈ 250 kg/cm²)**. El concreto "clase 1" (NTC) tiene mayor módulo de elasticidad; clase 2 menor (Ec = 8 000√f'c para clase 1; 2 500√f'c kg/cm² aprox. clase 2 según agregado).

### 8.2 Acero de refuerzo (fy)

| Designación | fy (kg/cm²) | fy (MPa) | Notas |
|---|---|---|---|
| Grado 42 / Gr 60 (común) | **4200** | **412–420** | **El más usado** en México (varilla corrugada) |
| Grado 56 / Gr 80 | 5600 | ~550 | Alta resistencia; permitido por ACI 318-19 en SMF |
| Grado 30 / Gr 40 | 3000 | ~294 | Mallas, estribos; **ya no permitido en sistemas sísmicos por ACI 318-19** |
| Malla electrosoldada | 5000–6000 | ~490–588 | Refuerzo de losas, temperatura |

> El acero estándar mexicano (NMX-C-407 / ASTM A615) más empleado es **Grado 42 (fy = 4200 kg/cm² ≈ 420 MPa)**. Para marcos dúctiles, ACI 318-19 y las NTC exigen acero con relación fu/fy ≥ 1.25 y alargamiento mínimo (ductilidad), típicamente **ASTM A706 Gr 60**.

---

## 9. Detallado sísmico de columnas (marcos dúctiles / SMF)

### 9.1 Cuantía de refuerzo longitudinal

| Parámetro | NTC-DCEC 2017 (dúctil) | ACI 318-19 (SMF, 18.7.4) |
|---|---|---|
| Cuantía mínima ρg | **0.01 (1 %)** | **0.01 (1 %)** |
| Cuantía máxima ρg | **0.04 (4 %)** | **0.06 (6 %)**; en zonas de traslape ≤ 0.04 recomendado |
| Número mínimo de barras | 4 (rectangular) / 6 (circular) | 4 / 6 |

### 9.2 Columna fuerte – viga débil

```
ΣMnc ≥ (6/5)·ΣMnb        (ACI 18.7.3.2 — suma de momentos de columnas ≥ 1.2× suma de vigas en el nudo)
```
Las NTC exigen una condición análoga de **"columna fuerte – viga débil"** para evitar mecanismos de piso blando.

### 9.3 Confinamiento (refuerzo transversal en zonas de articulación plástica)

**Longitud de confinamiento ℓo** (desde cada cara del nudo) = el **mayor** de:
- Peralte mayor de la columna (h)
- 1/6 de la altura libre (Hn/6)
- 450 mm (ACI) / 600 mm (NTC, en casos)

**Separación de estribos/zunchos en ℓo (ACI 18.7.5.3)** = el **menor** de:

| Criterio | Valor |
|---|---|
| 1/4 de la dimensión menor de la columna | **b/4** |
| 6·db (barra longitudinal) | **6·db** |
| so = 100 + (350 − hx)/3 | **100 ≤ so ≤ 150 mm** |

**Área de refuerzo de confinamiento (ACI 18.7.5.4)** — para estribos rectangulares, Ash es el mayor de:
```
Ash         f'c                  Ash         f'c   ⎛ Ag      ⎞
─── = 0.3·──── ·(Ag/Ach − 1)  ;  ─── = 0.09·──── ; ⎜── − 1 ⎟ versión 318-19 añade término por Pu/Po
s·bc         fyt                  s·bc         fyt  ⎝Ach     ⎠
```
> ACI 318-19 introdujo un **tercer requisito** para columnas con carga axial alta (Pu > 0.3·Ag·f'c) o concreto de alta resistencia (f'c > 70 MPa), que incrementa Ash en función de Pu/(Po) y de la relación de esbeltez del núcleo.

**NTC-DCEC 2017 — confinamiento de columnas dúctiles, s en ℓo** = menor de:
- **b/4** (dimensión menor)
- **6·db**
- **100 mm** (cuando hx requiere) / **150 mm**

con cuantía volumétrica de zuncho `ρs ≥ 0.45·(Ag/Ach − 1)·f'c/fyt` y `ρs ≥ 0.12·f'c/fyt`.

### 9.4 Nudo (unión) viga–columna

Conceptos clave (ACI 18.8 / NTC):

- **Resistencia a cortante del nudo** Vn = γ·√f'c·Aj (SI), con γ:
  - **1.7·√f'c (≈ 20·√f'c psi)** para nudos confinados en las 4 caras
  - **1.25·√f'c (≈ 15·√f'c psi)** confinado en 3 caras o dos opuestas
  - **1.0·√f'c (≈ 12·√f'c psi)** otros
  *(Aj = área efectiva del nudo).*
- **Confinamiento del nudo:** debe continuar el refuerzo transversal de la columna (hoops) a través del nudo; si está confinado por vigas en las 4 caras, se permite reducir a la mitad la cantidad y aumentar s hasta 150 mm.
- **Anclaje de barras de viga en el nudo:** gancho estándar a 90° con ℓdh = fy·db/(5.4·√f'c); las barras deben pasar/anclar dentro del núcleo confinado.
- **Relación de dimensiones:** la dimensión de la columna paralela al refuerzo de la viga debe ser ≥ **20·db** de la barra de viga (Gr 60; **26·db** para Gr 80 en ACI 318-19) para garantizar adherencia a través del nudo.
- **Acción cortante:** el nudo se diseña para el cortante generado por el desarrollo de Mpr (momentos probables) de las vigas, no por las fuerzas del análisis elástico.

---

## 10. Notas finales sobre diferencias y vigencia

- Las **NTC-DCEC 2017** y el **ACI 318-19** son conceptualmente muy similares (LRFD, columna fuerte–viga débil, confinamiento), pues las NTC se basan históricamente en versiones previas del ACI 318.
- Diferencias prácticas a recordar:
  - φ vs FR: ACI hace φ variable con εt; NTC fija FR por tipo de solicitación.
  - Factores de carga: NTC usa **1.3 CM + 1.5 CV**; ACI/ASCE-7 usa **1.2 D + 1.6 L**.
  - Confinamiento de vigas dúctiles: ACI usa **6·db / 150 mm**; NTC **8·db / 300 mm**.
  - ACI 318-19 incorporó **ψg** (grado del acero) en ℓd, permitió **Gr 80** en sistemas sísmicos y prohibió **Gr 40**, y añadió un tercer requisito de Ash para columnas muy cargadas / concreto de alta resistencia.
- **Verificar siempre la edición vigente** y los anexos locales; los valores en kg/cm² ↔ MPa pueden redondearse de forma distinta entre fuentes (1 MPa ≈ 10.2 kg/cm²).

---

## Fuentes

- Gaceta Oficial de la CDMX — NTC-DCEC 2017 (texto oficial)
- Formulario NTC-2017 (Gerdau Corsa): https://www.gerdaucorsa.com.mx/sites/mx_gerdau/files/PDF/FORMULARIO%20NTC_2017web_lr-min.pdf
- ACI 318-19 — Beam Design Limits / Tabla 9.3.1.1 (ideCAD): https://help.idecad.com/ideCAD/beam-design-limits
- ACI 318-19 — Beam Reinforcement Limits (ideCAD): https://help.idecad.com/ideCAD/beam-reinforcement-limits
- ACI 318-19 — Column Reinforcement Limits (ideCAD): https://help.idecad.com/ideCAD/column-reinforcement-limits
- ACI 318-19 — Development of Reinforcement (ℓd, ψg, ganchos) (ideCAD): https://help.idecad.com/ideCAD/development-of-reinforcement
- ACI 318-19 — Transverse reinforcement, columns seismic (Tekla/Trimble): https://support.tekla.com/doc/tekla-structural-designer/2026/ref_transversereinforcementcolumnsseismicaci318
- ACI 318-19 — Notable changes 318-14 → 318-19 (PCI Journal, Ghosh): https://www.pci.org/PCI_Docs/Publications/PCI%20Journal/2024/March-April/23-0001_Feature_Ghosh_MA24.pdf
- Seismic Design of RC Special Moment Frames (NIST GCR 8-917-1): https://www.atcouncil.org/pdfs/nistgcr8-917-1.pdf

> **Nota de verificación:** algunos detalles numéricos de las NTC (coeficiente de losas en dos direcciones, fórmula exacta de ℓdb) provienen del articulado conocido más que de una verificación URL directa. Cotejar contra el PDF oficial de la Gaceta antes de un uso normativo formal.
