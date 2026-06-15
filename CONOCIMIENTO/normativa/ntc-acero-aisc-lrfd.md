# Diseño de Estructuras de Acero — NTC-DCEA (RCDMX 2017) y AISC 360-16 (LRFD)

> Documento técnico de referencia para diseño de estructuras de acero por el método de
> **Factores de Carga y Resistencia (LRFD)**, conforme a las **NTC para Diseño y Construcción
> de Estructuras de Acero (NTC-DCEA)** del RCDMX 2017 y a **ANSI/AISC 360-16**, con referencias
> a las provisiones sísmicas **AISC 341** y conexiones precalificadas **AISC 358**.

---

## 1. LRFD vs ASD — Filosofía de estados límite

El diseño moderno del acero se basa en la **filosofía de estados límite**: la estructura debe
tener una probabilidad aceptablemente baja de alcanzar un *estado límite de falla* (resistencia,
estabilidad) o de *servicio* (deflexiones, vibraciones). El AISC 360-16 unifica ambos métodos
(LRFD y ASD) en una sola resistencia nominal `Rn`, y solo cambia cómo se aplica la seguridad.

| Concepto | LRFD (Load and Resistance Factor Design) | ASD (Allowable Strength Design) |
|---|---|---|
| Ecuación de diseño | `Ru ≤ φ·Rn` | `Ra ≤ Rn / Ω` |
| `Ru / Ra` | Resistencia requerida con cargas **factorizadas** | Resistencia requerida con cargas de **servicio** |
| Factor aplicado | Factor de resistencia **φ ≤ 1.0** (reduce `Rn`) | Factor de seguridad **Ω ≥ 1.0** (divide `Rn`) |
| Naturaleza | Probabilística/confiabilidad; factores distintos por carga | Factor de seguridad global y constante |

**Relación φ – Ω.** Ambos métodos están calibrados para resistencias equivalentes:

```
Ω = 1.5 / φ          (equivalentemente   φ·Ω ≈ 1.5)
```

Ejemplos: fluencia/flexión `φ = 0.90 → Ω = 1.67`; fractura/conexiones `φ = 0.75 → Ω = 2.00`.

**¿Cuándo se usa cada uno?**
- **LRFD** es el método preferido y predominante; **obligatorio** para las conexiones
  precalificadas IMF/SMF de AISC 358.
- **ASD** se mantiene como alternativa válida en AISC 360.
- **NTC-DCEA / RCDMX 2017** opera bajo filosofía de **estados límite con factores de carga y de
  resistencia (FR)**, conceptualmente equivalente a LRFD.

---

## 2. Combinaciones de carga

### 2.1 Combinaciones LRFD (ASCE 7 / AISC 360-16)

`D`=muerta, `L`=viva, `Lr`=viva de techo, `S`=nieve, `R`=lluvia, `W`=viento, `E`=sismo.

| # | Combinación LRFD |
|---|---|
| 1 | `1.4D` |
| 2 | `1.2D + 1.6L + 0.5(Lr o S o R)` |
| 3 | `1.2D + 1.6(Lr o S o R) + (L o 0.5W)` |
| 4 | `1.2D + 1.0W + L + 0.5(Lr o S o R)` |
| 5 | `1.2D + 1.0E + L + 0.2S` |
| 6 | `0.9D + 1.0W` |
| 7 | `0.9D + 1.0E` |

> Las combinaciones 6 y 7 con `0.9D` controlan el **volteo / levantamiento**.

### 2.2 Combinaciones NTC — Criterios y Acciones (RCDMX 2017)

Acciones **permanentes** (muerta), **variables** (viva) y **accidentales** (sismo, viento).

| Tipo de combinación | Factor de carga (FC) | Notas |
|---|---|---|
| Permanentes + Variables (Grupo B) | **1.3** permanentes · **1.5** variables | Edificaciones normales |
| Permanentes + Variables (Grupo A) | **1.5** permanentes · **1.7** variables | Hospitales, escuelas, esenciales |
| Permanentes + Variables + Accidental | **1.1** a todas | Una accidental a la vez |
| Acción favorable a estabilidad | **0.9** | Análogo a `0.9D` del LRFD |
| Estados límite de **servicio** | **1.0** | Sin factorizar |

---

## 3. Factores de resistencia φ típicos (LRFD, AISC 360-16)

| Estado límite | φ (LRFD) | Ω (ASD) |
|---|---|---|
| Tensión — **fluencia** en área gruesa (`Fy·Ag`) | **0.90** | 1.67 |
| Tensión — **fractura** en área neta efectiva (`Fu·Ae`) | **0.75** | 2.00 |
| Compresión (pandeo por flexión/torsión) | **0.90** | 1.67 |
| Flexión | **0.90** | 1.67 |
| Cortante — almas `h/tw ≤ 2.24√(E/Fy)` (perfiles I laminados) | **1.00** | 1.50 |
| Cortante — caso general | **0.90** | 1.67 |
| Pernos — tensión y cortante | **0.75** | 2.00 |
| Soldadura — metal de aportación | **0.75** | 2.00 |
| Aplastamiento en perforaciones (`bearing`) | **0.75** | 2.00 |
| Deslizamiento crítico (servicio, agujeros estándar) | **1.00** | 1.50 |

> En NTC-DCEA el equivalente es el **Factor de Resistencia FR**: FR = 0.90 (fluencia, compresión,
> flexión), FR = 0.75 (fractura, conexiones).

---

## 4. Clasificación de secciones (pandeo local)

Se compara `λ = b/t` (o `h/tw`) con los límites `λp` y `λr` de la **Tabla B4.1** de AISC 360-16.

| Clase | Condición | Comportamiento |
|---|---|---|
| **Compacta** | `λ ≤ λp` | Desarrolla `Mp` sin pandeo local; permite rotación inelástica. |
| **No compacta** | `λp < λ ≤ λr` | Alcanza `Fy` en fibra extrema pero pandea antes de `Mp`. |
| **Esbelta** | `λ > λr` | Pandea localmente en rango elástico; capacidad reducida. |

Valores típicos (perfiles I a flexión, `E=200,000 MPa`):
- Patín (no atiesado): `λp = 0.38√(E/Fy)`, `λr = 1.0√(E/Fy)`
- Alma (atiesada, flexión): `λp = 3.76√(E/Fy)`, `λr = 5.70√(E/Fy)`

> Para diseño sísmico dúctil, AISC 341 exige límites más estrictos: secciones **altamente
> dúctiles** (`λhd`) y **moderadamente dúctiles** (`λmd`).

---

## 5. Diseño de miembros

### 5.1 Tensión (AISC 360-16 Cap. D)

| Estado límite | Resistencia nominal | φ |
|---|---|---|
| **Fluencia** en área gruesa | `Pn = Fy·Ag` | 0.90 |
| **Fractura** en área neta efectiva | `Pn = Fu·Ae` con `Ae = U·An` | 0.75 |

- `U` = factor de **retraso de cortante (shear lag)**, Tabla D3.1.
- **Esbeltez recomendada** en tensión: `L/r ≤ 300`.

### 5.2 Compresión (AISC 360-16 Cap. E)

`Pn = Fcr·Ag`. La esbeltez efectiva `KL/r` define el régimen:

```
KL/r ≤ 4.71√(E/Fy)   →  pandeo INELÁSTICO:  Fcr = [0.658^(Fy/Fe)]·Fy
KL/r > 4.71√(E/Fy)   →  pandeo ELÁSTICO:    Fcr = 0.877·Fe
con   Fe = π²E / (KL/r)²   (Euler)
```

- `K` = factor de longitud efectiva: empotrado-empotrado `K≈0.5`, articulado-articulado `K=1.0`,
  empotrado-libre `K=2.0`. Marcos no arriostrados `K > 1`.
- **Esbeltez recomendada** en compresión: **`KL/r ≤ 200`**.

### 5.3 Flexión (AISC 360-16 Cap. F) — Pandeo lateral-torsional (PLT)

Para perfiles I compactos respecto al eje fuerte, `Mn` según `Lb` frente a `Lp` y `Lr`:

| Zona | Condición | `Mn` |
|---|---|---|
| **Plástica** | `Lb ≤ Lp` | `Mn = Mp = Fy·Zx` (sin PLT) |
| **Inelástica** | `Lp < Lb ≤ Lr` | `Mn = Cb[Mp − (Mp − 0.7Fy·Sx)(Lb−Lp)/(Lr−Lp)] ≤ Mp` |
| **Elástica** | `Lb > Lr` | `Mn = Fcr·Sx ≤ Mp` (PLT elástico) |

- `Lp = 1.76·ry·√(E/Fy)`; `Cb` = factor de gradiente de momento (1.0 conservador).
- `Mp = Fy·Z` (plástico); `My = Fy·S` (fluencia).

### 5.4 Cortante (AISC 360-16 Cap. G)

```
Vn = 0.6·Fy·Aw·Cv1
```
- `Aw = d·tw`. Para perfiles I laminados con `h/tw ≤ 2.24√(E/Fy)`, `Cv1 = 1.0` **y φ = 1.00**.

---

## 6. Aceros estructurales típicos

| Acero ASTM | Aplicación | `Fy` (MPa / ksi) | `Fu` (MPa / ksi) |
|---|---|---|---|
| **A36** | Placas, barras, perfiles diversos | 250 / 36 | 400–550 / 58–80 |
| **A992** | Perfiles W (vigas/columnas) — *estándar actual* | 345 / 50 | 450 / 65 |
| **A572 Gr. 50** | Perfiles, placas, HSS soldados | 345 / 50 | 450 / 65 |

> **A992** es el material preferido para perfiles W (relación `Fy/Fu ≤ 0.85` controlada, importante
> para ductilidad sísmica). En México se especifica como **A992** o **NMX-B-284 / A572 Gr. 50**.

---

## 7. Conexiones (AISC 360-16 Cap. J)

### 7.1 Atornilladas — pernos de alta resistencia A325 / A490

| Perno | `Fnt` (tensión) | `Fnv` cortante (rosca incluida) |
|---|---|---|
| **A325** (Grupo A) | 620 MPa / 90 ksi | 372 MPa / 54 ksi |
| **A490** (Grupo B) | 780 MPa / 113 ksi | 469 MPa / 68 ksi |

- **Tipo aplastamiento (`bearing`):** cortante por contacto del vástago. Estados límite: cortante
  del perno, **aplastamiento/desgarramiento** (`Rn = 1.2·lc·t·Fu ≤ 2.4·d·t·Fu`).
- **Tipo deslizamiento crítico (`slip-critical`):** cortante por fricción, pernos pretensionados
  (~70% de `Fu`). Para cargas reversibles, fatiga, sismo.

### 7.2 Soldadas

- **Filete:** estado límite = cortante en garganta efectiva. `Rn = Fnw·Awe`, `Fnw = 0.6·FEXX`
  (E70XX = 70 ksi); `φ = 0.75`.
- **Penetración completa (CJP):** desarrolla la resistencia del metal base; en sismo se exige
  tenacidad (Charpy) controlada.

---

## 8. Diseño sísmico en acero — AISC 341 y AISC 358

Filosofía de **diseño por capacidad**: zona fusible dúctil protegida, con resistencia esperada
amplificada por `Ry` (`Ry·Fy`).

### Tipos de marcos a momento

| Sistema | Ductilidad | `R` típico (ASCE 7) | Detallado |
|---|---|---|---|
| **OMF** (Ordinario) | Mínima | ~3.5 | Requisitos mínimos |
| **IMF** (Intermedio) | Moderada | ~4.5 | Rotación ≥ 0.02 rad |
| **SMF** (Especial) | Alta | ~8.0 | Rotación ≥ 0.04 rad; columna fuerte–viga débil |

> A mayor `R`, mayor reducción de la fuerza sísmica, pero **mayores exigencias de ductilidad**.

### Conexiones precalificadas — AISC 358

Conexiones viga-columna precalificadas para IMF/SMF (evitan ensayos proyecto por proyecto),
diseñadas por **LRFD**. Ejemplos: **RBS** (Reduced Beam Section / "hueso de perro"), **BFP**
(Bolted Flange Plate), **WUF-W**, **EEP / BEEP** (End-Plate). Cada una con límites de aplicabilidad.

---

## 9. Relaciones de esbeltez límite recomendadas

| Solicitación | Límite recomendado |
|---|---|
| Miembros en **compresión** | `KL/r ≤ 200` |
| Miembros en **tensión** | `L/r ≤ 300` (recomendación) |

---

## Fuentes

- ANSI/AISC 360-16, *Specification for Structural Steel Buildings* (with Commentary): https://www.aisc.org/globalassets/aisc/publications/standards/a360-16-spec-and-commentary_june-2018.pdf
- AISC 360-16 Steel Member Design, SkyCiv: https://skyciv.com/docs/skyciv-member-design/member-design-modules/aisc-360/
- Flexure per AISC 360-16 §F (Lp, Lr, PLT), ideCAD: https://help.idecad.com/ideCAD/design-of-steel-members-for-flexure-per-aisc-360-1
- Flexural Buckling per AISC 360-16, ideCAD: https://help.idecad.com/ideCAD/flexural-buckling
- Tension Members §D, ideCAD: https://help.idecad.com/ideCAD/design-of-steel-members-for-tension-per-aisc-360-1
- ASD vs LRFD Methodology, SDC Verifier: https://sdcverifier.com/articles/differences-between-asd-and-lrfd-methodology-in-finite-element-analysis/
- Steel Grades Fy & Fu (A36, A992, A572): https://steelcalculator.app/reference/steel-grades/
- OMF/IMF/SMF, SEU: https://learnwithseu.com/breaking-down-the-differences-between-omf-imf-smf/
- AISC 358 — Prequalified Connections, GlobalSpec: https://standards.globalspec.com/std/14611919/358
- NTC Criterios y Acciones / RCDMX 2017 (PAOT): https://paot.org.mx/centro/normas_a/2022/8.pdf
- NTC RCDMX 2017 (compendio), SMIG: https://www.smig.org.mx/archivos/NTC2017/normas-tecnicas-complementarias-reglamento-construcciones-cdmx-2017.pdf
