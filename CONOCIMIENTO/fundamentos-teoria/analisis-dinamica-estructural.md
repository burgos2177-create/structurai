# Análisis Estructural y Dinámica — fundamentos que todo estructurista debe dominar

> Andamiaje teórico que el resto de la biblioteca asume. Regla de oro: **el software resuelve ecuaciones; tú decides si las ecuaciones describen tu edificio.**

## 0. Las tres ecuaciones que gobiernan TODO

| Familia | Qué impone | Ejemplo |
|---|---|---|
| **Equilibrio** | ΣF = 0, ΣM = 0 (o d'Alembert dinámico) | Reacciones, cortantes, momentos |
| **Compatibilidad** | Las deformaciones encajan geométricamente | Continuidad de pendiente en un nudo rígido |
| **Constitutiva** | Respuesta del material (σ–ε) | Ley de Hooke σ = Eε |

En una estructura **isostática** el equilibrio basta. En una **hiperestática** sobran incógnitas → hay que invocar compatibilidad + constitutiva, y por eso depende de la **rigidez relativa** de sus miembros y es sensible a asentamientos/temperatura.

## 1. Análisis clásico

**Grado de indeterminación (2D):** externo `GI = r − (3+c)`; armaduras `(b+r) − 2n`; marcos `3m + r − 3n − c`.

| GI | Clasificación | Implicación |
|---|---|---|
| < 0 | Inestable (mecanismo) | Colapsa |
| = 0 | Isostática | Insensible a temperatura/asentamientos/rigidez |
| > 0 | Hiperestática | Redundancia; sensible a asentamientos, temperatura, rigidez relativa |

> GI ≥ 0 es necesario pero **no suficiente**: puede haber inestabilidad geométrica (reacciones concurrentes/paralelas). Verifica disposición, no solo el conteo.

- **Método de las fuerzas (flexibilidad):** incógnitas = redundantes; `[f]{X} = −{Δ₀}`; matriz `[f]` simétrica (Maxwell-Betti). Incógnitas = indeterminación **estática**.
- **Método de los desplazamientos (rigidez):** incógnitas = desplazamientos de nudo; `[K]{u}={F}`. Incógnitas = indeterminación **cinemática**. **Base de todo software.** Pendiente-deflexión es la versión manual: `M_ij = (2EI/L)(2θᵢ+θⱼ−3ψ) + M^F_ij`.
- **Distribución de momentos (Cross):** iterativa, ideal para **verificar a mano**. K=4EI/L (lejano empotrado) o 3EI/L (articulado); transporte ½.
- **Líneas de influencia:** valor de UNA respuesta vs. posición de una carga unitaria móvil. **Müller-Breslau:** la LI es proporcional a la deformada al liberar esa acción. Indispensable en **puentes, grúas, vías** (carga móvil).
- **Superposición:** válida solo en lineal-elástico con pequeños desplazamientos. **Se rompe** con plasticidad, P-Δ y contactos → en no lineal **no puedes sumar casos de carga**.
- **Teoremas energéticos:** trabajo virtual `1·Δ = ∫(Mm/EI)dx + ∫(Nn/EA)dx + ...` (el caballo de batalla, maneja temperatura/asentamientos); Castigliano `Δᵢ = ∂U/∂Pᵢ`; mínima energía `∂U/∂Xᵢ=0` (puente con el método de fuerzas).

## 2. Método de rigidez matricial (la base del software)

`{f} = [k]{u}`. Barra axial: `(EA/L)[[1,−1],[−1,1]]`. Viga 2D (4 GDL): `(EI/L³)[[12,6L,−12,6L],[6L,4L²,−6L,2L²],[−12,−6L,12,−6L],[6L,2L²,−6L,4L²]]`. Frame 2D = 6 GDL; frame 3D = **12 GDL**.

- **Transformación:** `[k]_global = [T]ᵀ[k]_local[T]`.
- **Ensamblaje (rigidez directa):** sumar coeficientes de elemento en los GDL globales compartidos → `[K]` simétrica, dispersa, bandeada.
- **Condiciones de frontera:** los apoyos restringen GDL. Sin suficientes restricciones, `[K]` es **singular** → "inestabilidad / pivote nulo" (mecanismo de cuerpo rígido). Error #1 de principiantes.
- Solución: se factoriza (`Cholesky/LDLᵀ`), no se invierte. Luego `{f}=[k][T]{u}` por elemento.

## 3. Método del elemento finito (FEM)

Generaliza la rigidez a **medios continuos** (placas, cascarones, sólidos): `u = ΣNᵢuᵢ` (funciones de forma), `[k] = ∫[B]ᵀ[D][B]dV`. La solución es **aproximada** y mejora al refinar.

| Elemento | Captura | Uso |
|---|---|---|
| Barra (truss) | Solo axial | Armaduras |
| Viga (frame) | Axial+flexión+cortante+torsión | Marcos, edificios, puentes |
| Placa/Cascarón (shell) | Membrana + flexión | Losas, muros, tanques, naves |
| Sólido (brick/tet) | Estado 3D | Conexiones, apoyos, concreto masivo |

- **Convergencia:** refinar hasta que la respuesta de interés cambie < 2-5%. **Singularidades** (esquinas entrantes, cargas puntuales): el esfuerzo **no converge** (crece sin límite) → no diseñes con el pico de un nodo singular.
- **Cuidado:** garbage in/out (las condiciones de frontera dominan); elementos distorsionados; locking; FEM lineal no ve plasticidad ni pandeo.
> **Criterio:** frame + shells para losas basta en un edificio; reserva sólidos 3D para detalles locales (una conexión), no el edificio entero.

## 4. Análisis plástico / diseño límite

`Mp = Fy·Z` (Z módulo plástico), `My = Fy·S`. **Factor de forma** `f = Mp/My = Z/S`: rectangular **1.50**, perfil I **≈1.12-1.15**, circular 1.70.

- **Mecanismo de colapso:** rótulas para mecanismo = `GI+1`. Método del trabajo: `ΣP·δ = ΣMp·θ`. La carga de colapso es la **menor** de todos los mecanismos (viga, lateral/sway, combinado).
- **Teoremas del límite:** estático/inferior (equilibrio + no viola Mp → **seguro/conservador**); cinemático/superior (cualquier mecanismo → **no conservador**); unicidad (ambos → exacto). El inferior **justifica el diseño por capacidad y puntal-tensor**.
- **Redistribución de momentos:** los códigos permiten reducir M⁻ de apoyo ~20-30% en elementos dúctiles.
> Exige **ductilidad real** (secciones compactas, confinamiento, arriostramiento). No redistribuyas en elementos frágiles.

## 5. Dinámica estructural

`[M]{ü} + [C]{u̇} + [K]{u} = {F(t)}`. Importa cuando la inercia (masa) y el amortiguamiento cuentan.

### 5.1 Un grado de libertad (1 GDL)
`mü + cu̇ + ku = F(t)`. **ωₙ = √(k/m)**, `T = 2π√(m/k)`. **Amortiguamiento:** `ζ = c/c_cr`, `c_cr = 2√(km)`, `ω_d = ωₙ√(1−ζ²)`.

| ζ | Régimen |
|---|---|
| 0 < ζ < 1 | Subamortiguado (estructuras reales) |
| 1 | Crítico |
| >1 | Sobreamortiguado |

Estructuras: **ζ ≈ 2% (acero) a 5% (concreto)** — el espectro de diseño usa 5%. Decremento logarítmico `δ ≈ 2πζ`. **Resonancia** (β=Ω/ωₙ≈1): amplificación `≈ 1/(2ζ)` — ¡×25 para ζ=2%! Peligro de maquinaria, peatones (~2 Hz).

### 5.2 N grados de libertad
Problema de valores propios `([K] − ω²[M]){φ} = 0`: **valores propios** ω² → frecuencias; **vectores propios** {φ} → **modos**. Ortogonalidad respecto a M y K **desacopla** el sistema en N osciladores 1 GDL (coordenadas modales). **Masa modal participante:** códigos exigen **Σ M_eff ≥ 0.90 M_total** por dirección (capturar todos los modos relevantes).

### 5.3 Análisis modal espectral
Leer la respuesta máxima de cada modo del espectro y combinar (los máximos no son simultáneos): **SRSS** `√(ΣRᵢ²)` (modos separados >10%) o **CQC** (modos cercanos/3D con torsión). **Usa CQC por defecto en 3D.**

### 5.4 De dónde nace el espectro de respuesta
(1) Acelerograma real; (2) muchos osciladores 1 GDL con distinto T; (3) someter cada uno e **anotar su máximo**; (4) graficar máximo vs T = **espectro de respuesta**. El **espectro de diseño** del código es una **envolvente suavizada** de muchos sismos posibles del sitio.

## 6. Análisis no lineal

**Geométrica:** equilibrio sobre geometría deformada (superposición no aplica). **P-Δ** (carga gravitacional sobre desplazamiento lateral → momentos volcantes + reduce rigidez; crítico en altos). **Pandeo:** `([K]+λ[K_g]){φ}=0`. Códigos: incluir P-Δ si el coeficiente de estabilidad `θ = (P·Δ)/(V·h) > ~0.10`.

**De material:** `[K]` cambia por plasticidad/agrietamiento; rótulas concentradas o fibras.

- **Pushover (estático no lineal):** carga lateral creciente → **curva de capacidad** (cortante basal vs desplazamiento de azotea). Estima ductilidad, secuencia de rótulas; punto de desempeño (ATC-40/FEMA 440/ASCE 41). **Límite:** patrón de carga fijo (no capta bien modos superiores), no capta duración ni reversiones.
- **Time-history no lineal:** integra en el tiempo bajo acelerogramas (Newmark-β). La referencia "exacta" (capta secuencia, modos superiores, energía histerética). Requiere suite de registros (≥7 para promedio, ≥3 para máximo). Costo alto.
- **IDA (análisis dinámico incremental):** time-history repetido escalando cada registro a intensidades crecientes → curva IM vs DM. Base de **FEMA P695** (calibrar factores R). Investigación/desempeño, no diseño cotidiano.

## 7. Criterio: ¿qué método y cuándo?

| Método | Cuándo basta |
|---|---|
| Lineal estático (fuerza lateral equivalente) | Regular, bajo, periodo corto, 1er modo |
| **Modal espectral (lineal)** | **Caso base de diseño sísmico** de edificios |
| Lineal + P-Δ | Altos/flexibles (θ>0.10) |
| Pushover | Evaluación de desempeño, 1er modo dominante |
| Time-history no lineal | Importantes/irregulares, aislamiento, disipadores |
| IDA | Investigación, fragilidad, FEMA P695 |

**Errores conceptuales comunes:** confundir el modelo con la realidad; diafragma rígido aplicado a ciegas; ignorar P-Δ; aceptar masa participante <90%; SRSS con modos cercanos; superponer casos en no lineal; sobre-refinar malla con fronteras mal puestas; diseñar con el pico de una singularidad FEM; usar Ig sin agrietar (sobreestima rigidez); pushover sin ductilidad real; amortiguamiento mal asignado.

> El experto **elige el método más simple que captura la física dominante** y sabe qué desprecia. **Modela, verifica con equilibrio global de cabeza (ΣV = peso, momento de volteo), y desconfía de cualquier número que no puedas explicar.**

## Fuentes

- Masa participante ≥90% (Dlubal): https://www.dlubal.com/en/support-and-learning/support/knowledge-base/001985
- SRSS vs CQC (SkyCiv): https://skyciv.com/docs/tech-notes/structural-3d/response-spectrum-analysis-modal-combination-methods/
- Factor de forma / análisis plástico (Caprani): https://www.colincaprani.com/files/notes/SAIII/Plastic%20Analysis%201011.pdf
- Vamvatsikos & Cornell — Incremental Dynamic Analysis (EESD): https://onlinelibrary.wiley.com/doi/abs/10.1002/eqe.141
- U.S. NRC RG 1.92 (combinación modal): https://www.nrc.gov/docs/ML1222/ML12220A043.pdf
