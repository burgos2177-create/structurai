# Diseño por Viento — Guía Densa de Referencia (México)

> **Bases:** NTC para Diseño por Viento del RCDMX (2017) · Manual de Diseño de Obras Civiles CFE — Diseño por Viento (MDOC-DV 2020) · Referencia ASCE 7-16/22.
> Las NTC-Viento toman la metodología del MDOC-CFE. Lo que cambia entre documentos son los **mapas de isotacas, la tabla de VR y algunos coeficientes locales**.

## 0. Flujo de cálculo (método estático)

```
Clasificar (Grupo A/B/C + Tipo 1/2/3/4)
   → VR (mapa isotacas + periodo de retorno según Grupo)
   → VD = FTR·Fα·VR  (velocidad de diseño a la altura z)
   → qz = 0.0048·G·VD² [kg/m²]
   → pz = Cp·qz   ;   Fz = Cp·qz·A
   → Tipo 2: ×G (amplificación dinámica) ; Tipo 3: + fuerza transversal por vórtices
```

## 1. Velocidades de diseño

**VR (velocidad regional):** máxima velocidad media probable a **10 m sobre terreno plano abierto**, ráfaga de **3 s**, sin corregir por rugosidad/topografía. En costa incorpora probabilidad de huracán.

**Periodo de retorno por Grupo:**

| Grupo | Importancia | Tr (años) | Ejemplos |
|---|---|---|---|
| **A** | Esencial | **200** | Hospitales, subestaciones, escuelas, estadios, tanques |
| **B** | Común | **50** | Vivienda, oficinas, comercio, naves típicas |
| **C** | Baja/temporal | **10** | Bodegas provisionales |

> Valores típicos VR para CDMX (3 s, 10 m): Zona I ≈ 28/25/19; Zona II ≈ 33/30/23; Zona III ≈ 39/35/27 m/s (Tr=200/50/10). *Verificar Tabla 3.1 de la edición vigente.*

**Mapa de isotacas:** las velocidades **suben hacia las costas y Yucatán** (huracanes, VR hasta ~200-240 km/h) y **bajan en el Altiplano** (~120-160 km/h).

**Velocidad de diseño:** `VD = FTR·Fα·VR` — Fα (perfil de altura, crece con z), FTR (topografía + rugosidad; si hay rugosidades distintas en <500 m, tomar la **más desfavorable**).

**Categorías de rugosidad (4, MDOC/NTC):**

| Cat. | Descripción | α | δ (m) |
|---|---|---|---|
| 1 | Mar abierto, lagos, planicies | 0.061 | 280 |
| 2 | Campo abierto, obstáculos aislados | 0.095 | 350 |
| 3 | Suburbano, arbolado, industrial disperso | 0.140 | 410 |
| 4 | Centro urbano denso, bosque | 0.192 | 470 |

> Equivalencia ASCE 7: Cat. 1↔D, 2↔C, 3↔B. **Criterio clave:** mayor rugosidad → menor velocidad cerca del suelo PERO más turbulencia → mayor factor de ráfaga. **No usar Cat. 4 "porque hay ciudad" sin verificar la longitud mínima de desarrollo (fetch):** si frente a la estructura hay un claro (avenida ancha, lote baldío), gobierna la rugosidad menor → velocidad mayor.

## 2. Presión dinámica y presiones de diseño

```
qz = 0.0048·Ga·VD² [kg/m²]   (VD en km/h)
Ga = 0.392·Ω / (273+θ)   (Ω = presión barométrica mm Hg por altitud; θ = temperatura °C)
pz = Cp·qz     Fz = Cp·qz·A
```

> **Criterio de altitud (clave en México):** en CDMX (~2240 msnm) Ga **< 1** → qz baja ~20-25% vs nivel del mar. A nivel del mar (Veracruz/Cancún) Ga ≈ 1. **No ignorar Ga.**

- **pz > 0 = empuje**, **pz < 0 = succión**. Presión interior: si aberturas > 30% de una pared, calcular; si no, recubrimiento con Cp interior = ±0.25.

**Coeficientes de presión Cp (construcciones cerradas):**

| Superficie | Cp típico | Efecto |
|---|---|---|
| Muro barlovento | **+0.8** | Empuje |
| Muro sotavento | **−0.5** | Succión |
| Muros laterales | **−0.7** | Succión |
| Cubierta plana/casi plana | **−0.8 a −1.2** | **Succión (levanta)** |
| Cubierta 2 aguas, sotavento | −0.5 a −0.6 | Succión |
| Estructuras reticulares (elementos planos) | **2.0** | Arrastre |
| Muros/anuncios aislados | hasta **2.0** | Fuerza total |

> **Cubiertas ligeras a baja pendiente (< ~10-15°): la succión gobierna.** Toda la cubierta succiona; el viento **arranca lámina y anclajes**. Error #1 de campo.

**Aleros, bordes, esquinas, parapetos (presiones LOCALES):**
- Zona de borde: ancho = **1/10 de la dimensión menor** en planta. Los Cp de borde se aplican **al diseño de sujetadores**.
- **Parapetos:** Cp = −3.0 + A/75 ≤ −1.8 (A = área tributaria m²) → en elementos chicos tiende a **−3.0**.
- En esquinas de cubierta y aleros los picos de succión alcanzan **2 a 3 veces** la succión central (ASCE: zonas 1/2/3).

## 3. Análisis estático vs dinámico

| Tipo | Característica | Método |
|---|---|---|
| **1** | Rígida; **H/d ≤ 5 y T ≤ 1 s** | Estático (G=1) |
| **2** | Esbelta: **H/d > 5 ó T > 1 s** (torres, antenas, anuncios, edificios altos) | Estático **× G** |
| **3** | Tipo 2 + **vórtices** (cilindros, chimeneas, planta circular) | Tipo 2 + fuerza transversal |
| **4** | Aeroelástica (cubiertas colgantes/flexibles) | **Túnel de viento** |

**Umbral del dinámico:** `H/d > 5` ó `T > 1 s`.

**Factor de amplificación dinámica G (Tipo 2):** combina g (peak factor), B (background), S (tamaño), F (energía), no (frecuencia), β (amortiguamiento: **0.01 acero, 0.02 concreto**).

**Vórtices de Von Kármán (Tipo 3):**
```
Vcr = 5·no·d  [m/s]   (Strouhal ≈ 0.2)
FL = CT·qz·d / (2β)   con CT = 0.28 (circular)
```
El **1/β** es crítico: amortiguamiento bajo (chimenea soldada β≈0.01) **dispara FL**. Se puede omitir vórtices si el periodo difiere ≥30% de la frecuencia de desprendimiento (Vcr excede la velocidad de diseño en z=H).

## 4. CRITERIO CLAVE — ¿Cuándo gobierna VIENTO sobre SISMO?

**Físico:** el sismo ∝ **masa**; el viento ∝ **área expuesta × V²**.

> **Ligera + mucha superficie + poca masa → gobierna viento.**
> **Pesada + compacta + zona sísmica alta → gobierna sismo.**

| Gobierna VIENTO | Por qué |
|---|---|
| Naves industriales de lámina | Masa baja → sismo bajo; cubierta enorme → succión alta |
| Cubiertas ligeras / techumbres | Succión las arranca |
| Anuncios espectaculares, monopostes | Toda la solicitación es viento (Cp hasta 2.0) |
| Antenas, torres | Esbeltez + área + dinámica; sismo marginal |
| Bardas y muros aislados | Volteo fuera de plano |
| Edificios altos esbeltos en zona de BAJA sismicidad (Golfo/Sureste) | Sismo bajo por zona; viento alto por huracán + altura |

**Regla de altura:** por debajo de ~40-50 m en zona sísmica media-alta, **el sismo controla**. Arriba de eso y/o esbeltez en planta > 5, **el viento empieza a controlar** cortante, volteo y **aceleraciones de confort**. **Siempre se revisan AMBOS** y se diseña con la envolvente.

## 5. Elementos críticos

| Elemento | Acción crítica | Cuidado |
|---|---|---|
| Cubierta ligera de lámina | Succión central + picos en bordes/esquinas | Sujetadores con Cp local |
| Aleros/voladizos | Succión arriba + empuje abajo (**se suman**) | Fijación al larguero |
| Naves industriales | Marco + **largueros/polines** por succión local | Pull-out de tornillos |
| Anuncios/monopostes | Cp hasta 2.0 + **vórtices** en poste circular | Volteo de cimentación + fatiga |
| Fachadas/cancelería | **Presión local** por área tributaria | Usar Cp de recubrimiento, NO del marco |
| Parapetos | −3.0 + A/75 ≤ −1.8 | El elemento chico ve el Cp mayor |

## 6. Estados límite de servicio

**Drift por viento:** sin elementos frágiles **Δ/h ≤ 0.005**; con muros que pueden dañarse **≤ 0.002**.

**Confort (edificios altos):** aceleración por empujes dinámicos **≤ 0.04·g** (techo normativo). Criterio de confort residencial premium ~**10-25 milli-g** (ISO 10137).

> **Voz senior:** en edificios altos esbeltos el problema rara vez es resistencia; es **confort por aceleración**. La cura es **rigidez + amortiguamiento (TMD/TLD)**, no más acero a ciegas.

## 7. Errores frecuentes / voz de campo

1. **Anclajes de cubierta con succión media** → ignora picos de borde (−2 a −3). La cubierta vuela por las orillas.
2. **"La lámina vuela" = succión subestimada en aleros** (succión arriba + empuje abajo). Verificar pull-out del tornillo en el calibre real.
3. **Confundir Cp del marco con Cp de recubrimiento** → rompe cristales en esquinas de torres.
4. **Olvidar Ga** → sobre/subestima qz por altitud.
5. **No revisar vórtices** en chimeneas/monopostes circulares → falla por fatiga transversal a vientos medios.
6. **Asumir "el sismo siempre manda"** → en naves/cubiertas/anuncios/esbeltos gobierna viento. Revisar envolvente.
7. **Rugosidad optimista** (Cat. 4 sin verificar fetch).
8. **Edificio alto solo por resistencia** → falta confort (≤0.04g) y drift (0.002-0.005).

## Fuentes

- NTC para Diseño por Viento, RCDMX 2017 (PAOT): https://paot.org.mx/centro/normas_a/2022/3.pdf
- NTC Viento (Colegio de Arquitectos): https://colegiodearquitectos.mx/wp-content/uploads/2014/01/004-NTC-PARA-DISE%C3%91O-POR-VIENTO.pdf
- MDOC CFE — Diseño por Viento 2020: https://es.scribd.com/document/511751047/Manual-de-Diseno-de-Obras-Civiles-Por-Viento-2020
- MDOC-CFE Viento (INEEL): https://cecse.ineel.mx/cursos/fichas/CapituloDisenoViento.pdf
- Tomo III — Análisis para Diseño por Viento (gob.mx): https://www.gob.mx/cms/uploads/attachment/file/105407/Tomo_III_An_lisis_para_Dise_o_por_VIENTO_V_2.1.pdf

> **Verificación:** ecuaciones (qz=0.0048·Ga·VD², VD=FTR·Fα·VR), clasificación Tipo 1-4, Cp de parapeto (−3.0+A/75≤−1.8), Vcr=5·no·d con CT=0.28, drift 0.002/0.005 y aceleración 0.04g se transcribieron del texto normativo. **Los VR por ciudad y algunos Cp de cubiertas inclinadas viven en tablas/figuras que en los PDF públicos son imágenes: confirmar contra la edición vigente local antes de cerrar diseño.**
