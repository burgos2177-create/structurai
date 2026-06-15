# Diseño por Sismo en México: NTC-Sismo (RCDMX 2017) y MDOC-DS CFE (2015)

> Documento técnico de referencia. Compara la **NTC para Diseño por Sismo del RCDMX (NTC-Sismo
> 2017)** con el **Capítulo de Diseño por Sismo del Manual de Diseño de Obras Civiles de la CFE
> (MDOC-DS 2015)**.

---

## 1. Ámbito y filosofía de cada normativa

| Aspecto | NTC-Sismo 2017 (RCDMX) | MDOC-DS CFE 2015 |
|---|---|---|
| Ámbito territorial | Solo Ciudad de México | Toda la República Mexicana |
| Herramienta de peligro | **SASID** (zonificación CDMX) | **PRODISIS** (peligro continuo nacional) |
| Enfoque del espectro | Espectro de sitio interpolado por coordenadas | Espectro regional transparente + factor de sitio |
| Estados límite | Servicio (limitación de daños) y Seguridad/Colapso | Servicio (Grupo A) y Colapso |
| Reducción por ductilidad | Factor **Q'** (a partir de Q) | Factor **Q'** |
| Sobrerresistencia | Factor **R** | Factor **R** (a partir de R₀) |
| Redundancia | Factor ρ | Factor ρ |

Ambas adoptan el formato de **espectro transparente** (sin reducir) y aplican por separado los
factores Q', R y ρ. Esta es la innovación clave de la generación 2015–2017.

---

## 2. Construcción del espectro de diseño

### 2.1 Espectro NTC-Sismo 2017 (vía SASID)

La NTC-2017 **no usa fórmulas cerradas por tipo de suelo** como la NTC-2004; el espectro elástico
transparente se obtiene **punto a punto del SASID** (Sistema de Acciones Sísmicas de Diseño)
introduciendo las coordenadas del predio. Parámetros:

| Parámetro | Significado |
|---|---|
| **a₀** | Aceleración máxima del terreno (T = 0), fracción de g |
| **c** | Coeficiente sísmico (ordenada máxima de la meseta) |
| **Tₐ** | Periodo característico inicial de la meseta |
| **T_b** | Periodo característico final de la meseta |
| **k** | Controla la caída de la rama descendente (T > T_b) |

| Rama | Intervalo | Ordenada a(T) |
|---|---|---|
| Ascendente | T < Tₐ | a₀ + (c − a₀)·(T / Tₐ) |
| Meseta | Tₐ ≤ T ≤ T_b | c |
| Descendente | T_b < T ≤ T_c | c·(T_b / T)^r |
| Cola | T > T_c | c·(T_b/T_c)^r·[k + (1−k)(T_c/T)²]·(T_c/T)² |

> La NTC-2017 distingue el **espectro de diseño** (colapso) y el **espectro de servicio** (espectro
> elástico ÷ ~5.5).

### 2.2 Espectro MDOC-DS CFE 2015 (vía PRODISIS)

Espectro regional transparente afectado por factores de sitio. El usuario introduce coordenadas,
importancia y propiedades del suelo (Vs, Hs).

| Parámetro | Significado |
|---|---|
| **a₀** | Aceleración máxima del terreno |
| **c** | Ordenada espectral máxima (meseta) |
| **Tₐ, T_b** | Límites de la meseta |
| **T_c** | Inicio de la caída cuadrática (≈ 2.0 s típico) |
| **r** | Exponente de la primera rama descendente |
| **k** | Parámetro de la cola larga |
| **β** | Factor de amortiguamiento (5% concreto) |

PRODISIS arranca con el **espectro de roca (Vs ≥ 720 m/s)** y aplica el **factor de sitio** según
el terreno.

### 2.3 Clasificación de suelo

| Norma | Clasificación |
|---|---|
| **NTC-2017** | Implícita en SASID (Zonas I Lomas, II Transición, III Lacustre con subzonas IIIa–IIId). |
| **MDOC-DS 2015** | Roca (Vs ≥ 720 m/s) + **Tipo I firme, II intermedio, III blando**, por Vs y periodo Ts. |

---

## 3. Factor de comportamiento sísmico Q y Q'

### 3.1 Valores de Q — NTC-2017

| Q | Sistema estructural y requisitos |
|---|---|
| **4** | Marcos dúctiles de concreto/acero (alta ductilidad), o duales con detallado de alta ductilidad. |
| **3** | Marcos y sistemas duales de **ductilidad media**. |
| **2** | Marcos de baja ductilidad, muros de concreto, mampostería confinada. |
| **1** | Baja capacidad dúctil: mampostería no reforzada, péndulos invertidos. |

### 3.2 Factor de reducción por ductilidad Q' (NTC-2017)

```
Q'(T) = 1 + (Q − 1)·√(β·T / (k·T_b))        si  T ≤ T_b
Q'(T) = 1 + (Q − 1)·√(β·p)                   si  T > T_b
```
con p = k + (1−k)(T_b/T)². Para T pequeño Q' → 1 (estructuras rígidas no desarrollan ductilidad).

### 3.3 Q' en MDOC-DS CFE 2015

Formato análogo: Q → Q'(T,Q) creciendo de 1 hacia Q. Para edificios admite **Q hasta 4**. La
fuerza se reduce dividiendo el espectro transparente entre **Q'·R·ρ**.

---

## 4. Factores de sobrerresistencia R y redundancia ρ

### 4.1 NTC-2017 — Sobrerresistencia R

| T | R |
|---|---|
| T ≤ Tₐ | R = k·R₀ + (1 − k)·(T/Tₐ)·R₀ (crece con T) |
| T > Tₐ | R = R₀ |

con **R₀ = 2.0** base general.

### 4.2 Redundancia ρ (NTC-2017 y CFE, idéntico criterio)

| ρ | Condición |
|---|---|
| **0.8** | Poca redundancia: una crujía o línea única por dirección |
| **1.0** | ≥2 crujías por marco y ≥2 marcos paralelos por dirección |
| **1.25** | ≥3 crujías y ≥3 líneas resistentes por dirección |

Fuerza sísmica reducida (ambas normas):
```
a_reducida(T) = a(T) / (Q'(T) · R(T) · ρ)
```

---

## 5. Regularidad / irregularidad

### NTC-Sismo 2017

Estructura **regular**: planta simétrica, altura/base ≤ 4, largo/ancho ≤ 2.5, sin entrantes
> 20%, pisos rígidos continuos, columnas restringidas, rigidez/resistencia de entrepiso
controlada, masas similares, **e_s ≤ 0.10 b**, etc.

**Penalizaciones (corrección de Q'):**

| Condición | Factor sobre Q' |
|---|---|
| **Regular** | 1.0 |
| **Irregular** (incumple 1 condición) | **0.9** |
| **Fuertemente irregular** (2+ o e_s > 0.2b) | **0.8** |
| Condiciones extremas | hasta **0.7** |

Se multiplica Q' por el corrector, **aumentando** las fuerzas de diseño.

---

## 6. Métodos de análisis

| Método | NTC-2017 | MDOC-DS CFE 2015 |
|---|---|---|
| **Estático** | Regulares **H ≤ 30 m**; irregulares **H ≤ 20 m**. | Regulares **≤ 30 m**. |
| **Dinámico modal espectral** | Cualquier estructura; obligatorio fuera del rango estático. Masa modal ≥ 90%. | Igual. |
| **Paso a paso (no lineal)** | Estructuras importantes/irregulares/altas; acelerogramas escalados. | Estructuras especiales (presas, puentes, Grupo A1). |

Cortante basal estático: V = (c/Q'·R·ρ)·W, distribuido por nivel ∝ w_i·h_i.

---

## 7. Límites de distorsión de entrepiso (drift) — VALORES SENSIBLES

### 7.1 Estado límite de servicio (NTC-2017)

Se revisa con el **espectro de servicio**:

| Condición | γ límite |
|---|---|
| Elementos no estructurales **ligados** (sin separar) | **0.002** |
| Elementos no estructurales **desligados/separados** | **0.004** |

### 7.2 Estado límite de seguridad contra colapso (NTC-2017, Tablas 4.2.1–4.2.3)

| Sistema estructural | Q | γ_max (colapso) |
|---|---|---|
| Marcos dúctiles de concreto/acero (alta ductilidad) | 4 | **0.030** |
| Marcos de concreto/acero (ductilidad media) | 3 | **0.020** |
| Marcos de concreto/acero (baja ductilidad) | 2 | **0.015** |
| Marcos + contravientos/muros dúctiles (dual) | 4 | **0.020** |
| Marcos con contravientos de ductilidad media | 3 | **0.015** |
| Muros de concreto dúctiles | 3 | **0.015** |
| Muros de concreto de ductilidad limitada | 2 | **0.010** |
| Mampostería confinada (con refuerzo) | 2 | **0.005** |
| Mampostería confinada sin refuerzo adicional | 1.5 | **0.0035** |
| Mampostería no confinada | 1 | **0.0025** |

> Los valores ancla (0.002, 0.004, 0.015, 0.030) están confirmados; los intermedios provienen del
> articulado. **Verificar contra las tablas 4.2.1–4.2.3 vigentes** del material correspondiente.

### 7.3 MDOC-DS CFE 2015

| Estado | γ límite |
|---|---|
| Servicio (Grupo A) | ~**0.002** |
| Colapso, marcos dúctiles | hasta **0.030** |
| Colapso, sistemas duales/muros | **0.015–0.020** |
| Colapso, baja ductilidad | **0.006–0.012** |

---

## 8. Efectos ortogonales, P-Delta y torsión

### Ortogonales (100% + 30%)

```
E = ± 1.0·E_x ± 0.3·E_y
E = ± 0.3·E_x ± 1.0·E_y
```

### P-Delta (segundo orden)

- **NTC-2017:** considerar cuando el coeficiente de estabilidad θ = (V_i·Δ_i)/(W_i·h_i·V_basal) >
  ~0.08–0.10. Si θ > 0.30 → rigidizar (inadmisible). Amplificar distorsiones por 1/(1−θ).

### Torsión

- Momento torsionante: M_t = V·(1.5·e_s + 0.1·b) **ó** V·(e_s − 0.1·b), el más desfavorable.
- `e_s` = excentricidad estática; `0.1·b` = excentricidad accidental. e_s > 0.2·b → irregular.

---

## 9. Clasificación por importancia

### NTC-Sismo 2017

| Grupo | Descripción | Importancia |
|---|---|---|
| **A** | Hospitales, escuelas, bomberos, subestaciones, terminales, museos, estadios, tóxicos. | Espectro **amplificado ~1.5** (mayor periodo de retorno) |
| **B** | Comunes (vivienda, oficinas, comercio, industria). **B1** (H > 30 m o > 6,000 m²) y **B2** (resto). | **1.0** |

### MDOC-DS CFE 2015

| Grupo | Descripción |
|---|---|
| **A** | Gran importancia. **A1**: extrema (presas, nucleares, grandes puentes); **A2**: muy importante. |
| **B** | Convencionales. **B1**: H > 13 m o > 400 m²; **B2**: menores. |
| **C** | Importancia menor. |

---

## 10. PRODISIS y SASID

| Herramienta | Norma | Función |
|---|---|---|
| **SASID** | NTC-CDMX 2017 | Con coordenadas entrega el espectro de diseño transparente (a₀, c, Tₐ, T_b, k, r), de servicio y reducidos. Reemplaza la zonificación tabular de NTC-2004. |
| **PRODISIS** | MDOC-DS CFE 2015 | Peligro sísmico continuo nacional. Con coordenadas, grupo y suelo (Vs, Hs) entrega aceleración en roca, clasificación de terreno, factor de sitio y espectro regional. Versión v4.1. |

**Diferencia clave:** SASID resuelve solo CDMX con microzonificación de altísima resolución;
PRODISIS cubre todo el país con peligro **continuo** por coordenadas.

---

## Fuentes

- NTC para Diseño por Sismo (con Comentarios) — Gaceta Oficial CDMX 2017: https://www.scribd.com/document/551203482/NTC-para-Diseno-por-Sismo-con-Comentarios-GOCDMX-FINAL
- *Requisitos de control de distorsiones, ductilidad, resistencia e irregularidad...* — Revista de Ingeniería Sísmica (SciELO, 2025): https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-092X2025000100103
- *Factor de comportamiento sísmico máximo... MDOC-CFE-2015* — Revista de Ingeniería Sísmica (SciELO, 2021): https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-092X2021000100059
- Ayudas CFE 2015: Diseño Estructural por Sismo MDOC: https://www.studocu.com/es-mx/document/universidad-veracruzana/analisis-estructural/ayudas-cfe-2015-diseno-por-sismo-mdoc/95954611

> **Advertencia profesional:** varios valores de drift dependen de subcasos específicos de las
> tablas 4.2.1–4.2.3 por material. Consultar siempre el texto vigente de la Gaceta Oficial CDMX
> (NTC-2017) y el MDOC-DS CFE 2015 con PRODISIS v4.1.
