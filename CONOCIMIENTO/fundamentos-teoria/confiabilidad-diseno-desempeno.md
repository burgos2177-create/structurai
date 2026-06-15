# Confiabilidad Estructural y Diseño por Desempeño

> La teoría probabilista detrás de los códigos modernos y los paradigmas de desempeño (PBD/PBEE, FEMA P-58), resiliencia y riesgo.

## 0. Idea central: nada es 100% seguro
La seguridad absoluta no existe. El objetivo no es "que no falle nunca", sino una **probabilidad de falla aceptablemente baja** durante la vida útil, consistente con las consecuencias. El diseño es un **problema de decisión bajo incertidumbre** (balance costo ↔ riesgo).

## 1. Estados límite y LRFD (la teoría)

| Familia | Controla | Consecuencia |
|---|---|---|
| **ELU (último)** | Seguridad/colapso (fluencia, pandeo, fractura, volteo) | β alto, Pf baja |
| **ELS (servicio)** | Funcionalidad (deflexiones, vibraciones, grietas) | β menor, Pf más tolerable |

**LRFD:** `φ·Rₙ ≥ Σ γᵢ·Qₙᵢ`. Carga y resistencia tienen variabilidades distintas → se factorizan **por separado**: φ≤1 (penaliza incertidumbre de capacidad, modo de falla), γ≥1 (amplifica cada carga según su dispersión; muerta ~1.2 < viva ~1.5-1.6). Logra **confiabilidad más uniforme** que un FS global único.

**Incertidumbre:** **aleatoria** (azar irreducible: resistencia real, intensidad del próximo sismo) vs **epistémica** (ignorancia reducible con datos: error del modelo). Confundirlas distorsiona el riesgo.

## 2. Confiabilidad estructural

Función de estado límite (margen) `g = R − S`: g>0 seguro, g<0 falla, g=0 frontera.
**Probabilidad de falla** `Pf = P(g≤0)`. Para R,S normales independientes:

$$\beta = \frac{\mu_R - \mu_S}{\sqrt{\sigma_R^2 + \sigma_S^2}}, \qquad P_f = \Phi(-\beta), \qquad \beta = -\Phi^{-1}(P_f)$$

β = número de desviaciones estándar que separan la media del margen del estado de falla (interpretación de Hasofer-Lind: distancia más corta al estado de falla en espacio estandarizado).

| β | Pf aprox | "1 en N" | Interpretación |
|---|---|---|---|
| 2.5 | 6.2×10⁻³ | ~1/160 | ELS de servicio |
| 3.0 | 1.35×10⁻³ | ~1/740 | Mínimo estructural |
| **3.5** | **2.3×10⁻⁴** | **~1/5,000** | **Objetivo típico ELU edificación** |
| 4.0 | 3.2×10⁻⁵ | ~1/31,000 | Conexiones, modos frágiles |
| 4.5 | 3.4×10⁻⁶ | ~1/294,000 | Estructuras críticas |

**Métodos:** FOSM (medias/varianzas, no invariante), **FORM** (estándar de calibración; punto de diseño MPP, invariante), SORM (curvatura), Monte Carlo (exacto pero costoso).

**Calibración de código:** φ y γ se derivan para alcanzar un β objetivo `β_T` (extraído de la práctica satisfactoria existente), optimizando para minimizar la dispersión de β. **El factor de seguridad de un código es la huella visible de un cálculo de confiabilidad.**

## 3. Diseño Basado en Desempeño (PBD)

| Prescriptivo | Por desempeño |
|---|---|
| El código dicta **el cómo** | Define **el qué** (objetivos explícitos) |
| Único objetivo implícito: no colapso bajo sismo de diseño | Múltiples objetivos por nivel de sismo y daño |
| El dueño no sabe qué le quedará | El dueño elige y conoce el desempeño |

Nació tras Loma Prieta/Northridge/Kobe (edificios que "cumplían" pero quedaban inservibles). Documento fundacional: **SEAOC Vision 2000 (1995)**.

**Niveles de desempeño:** Totalmente Operacional → Operacional → Ocupación Inmediata (IO) → Seguridad de Vida (LS) → Prevención de Colapso (CP).
**Niveles de sismo:** Frecuente (~43a) → Ocasional (~72a) → Raro/diseño DBE (10%/50a ≈ **475 años**) → Muy raro/MCE (2%/50a ≈ **2,475 años**).

**Matriz Vision 2000 (objetivos):**

| Sismo ↓ \ Desempeño → | Tot. Operacional | Operacional | Seg. de Vida | Prev. Colapso |
|---|:---:|:---:|:---:|:---:|
| Frecuente | ◆ Básico | | | |
| Ocasional | ◆ Esencial | ◆ Básico | | |
| Raro/DBE | ◆ Seg.crítica | ◆ Esencial | ◆ **Básico** | |
| MCE | | ◆ Seg.crítica | ◆ Esencial | ◆ Básico |

> **Clave:** un edificio ordinario "al código" apunta a **Seguridad de Vida** bajo el sismo de diseño — **deliberadamente acepta daño severo y posible pérdida total del inmueble** a cambio de salvar vidas. El código **nunca prometió** que siguiera siendo usable.

## 4. PBEE y FEMA P-58

El PBD de 2ª generación (PEER, FEMA P-58) describe el desempeño en **consecuencias cuantitativas y probabilistas**: pérdidas (\$), tiempo de reparación (downtime), víctimas.

**Ecuación marco del PEER** (teorema de probabilidad total):

$$\lambda(DV) = \iiint p(DV|DM)\,p(DM|EDP)\,p(EDP|IM)\,|d\lambda(IM)|$$

Cadena **IM → EDP → DM → DV** (peligro → respuesta → daño → pérdida): IM (intensidad, de PSHA), EDP (deriva/aceleración, de análisis no lineal), DM (daño por componente, de fragilidades), DV (\$/downtime/víctimas). Modularidad: cada eslabón se desarrolla por separado.

**Funciones de fragilidad** (lognormal): `P(DM≥dsᵢ|EDP) = Φ(ln(edp/θᵢ)/βᵢ)`. **Lo no estructural domina la pérdida económica.** Salidas: **EAL** (pérdida anual esperada), probabilidad de inhabitabilidad, distribución de downtime — entregado como **dinero y tiempo**, no una etiqueta.

## 5. Resiliencia y diseño de baja pérdida

Resiliencia = capacidad de **recuperar funcionalidad rápido**. `R = ∫Q(t)dt`. Las "4 R": Robustez, Redundancia, Recursos, Rapidez.
**Estados de recuperación:** Reocupación → Recuperación Funcional → Recuperación Total. La tendencia regulatoria empuja a exigir **recuperación funcional**, no solo no-colapso.

**Low-damage / re-centrables:** rocking (balanceo controlado), **postensado no adherido** (deriva residual ≈ 0), fusibles reemplazables (disipadores), aislamiento/disipación. Programa **PRESSS** (UC San Diego). La combinación **postensado (re-centra) + disipadores reemplazables (disipan)** es el arquetipo: poco o ningún daño estructural y deriva residual mínima.

**Calificaciones:** **REDi™** (Arup: Plata/Oro/Platino, fija objetivos de pérdida y downtime), **USRC** (1-5 estrellas).

## 6. Riesgo

$$\text{Riesgo} = \text{Peligro} \times \text{Vulnerabilidad} \times \text{Exposición}$$

El **peligro** casi no se modifica (es natural); el ingeniero actúa sobre la **vulnerabilidad** (diseño, detallado, refuerzo, baja pérdida); la **exposición** se gestiona con uso del suelo y redundancia.

**Periodo de retorno** `T_R = 1/λ`; `P = 1 − e^(−t/T_R)`. DBE = 475 años (10%/50a); MCE = 2,475 años (2%/50a).
> Error frecuente: "475 años" **no** significa "ocurre cada 475 años". Significa **~0.21%/año, ≈10% en 50 años**. Es una tasa, no un calendario; puede ocurrir mañana y otra vez el mes próximo.

## 7. Criterio para el ingeniero mexicano

- Las **NTC del RCDF** ya están calibradas a un β objetivo (factores F_C, F_R). "Cumplir el código" hereda esa confiabilidad **para el objetivo del código (Seguridad de Vida)**, no funcionalidad post-sismo.
- México evolucionó tras 1985 y 2017; las NTC-Sismo ya incorporan estados límite de servicio/colapso y espectros por periodo de retorno, pero siguen siendo **predominantemente prescriptivas**.

**Por qué un edificio "que cumple" puede quedar inservible:** (1) el objetivo es la vida, no el inmueble (acepta deriva residual antieconómica); (2) **lo no estructural y el contenido dominan la pérdida** y el código apenas los regula; (3) el **downtime** no está en el código.

**Cuándo pedir PBD:** continuidad crítica (hospitales, data centers, telecom), alto valor de contenido, edificios altos/irregulares/atípicos, sistemas innovadores (aislamiento/disipación/postensado), cliente que piensa en costo de ciclo de vida, sitio de peligro elevado (suelo blando CDMX).

> **Mensaje al cliente:** "El reglamento garantiza que su edificio **no matará a nadie** bajo un sismo fuerte, pero **no garantiza que usted pueda volver a usarlo**. Si su operación no puede parar, conviene diseñar por desempeño: definir cuánto daño, cuánto costo de reparación y cuántos días de paro acepta para cada nivel de sismo — opcionalmente con tecnologías de baja pérdida que dejan el edificio casi intacto."

## Fuentes

- Rosowsky — Structural Reliability (Handbook): http://freeit.free.fr/Structure%20Engineering%20HandBook/26.pdf
- FEMA P-58 Vol.1 (Methodology): https://www.atcouncil.org/pdfs/ATC-58-1/FEMAP-58_Volume1_Pre-ReleaseAugust2012.pdf
- SEAOC Vision 2000 (matriz de desempeño): https://www.scribd.com/document/416420604/seaoc-vision-2000-pdf
- Deierlein, Krawinkler & Cornell — A Framework for PBEE: https://www.nzsee.org.nz/db/2003/View/Paper140s.pdf
- Arup REDi Rating System: https://www.usrc.org/wp-content/uploads/REDi_Final-Version-1.0_October-2013.pdf
- USGS — Earthquake Hazards 201 (periodos de retorno): https://www.usgs.gov/programs/earthquake-hazards/science/earthquake-hazards-201-technical-qa
