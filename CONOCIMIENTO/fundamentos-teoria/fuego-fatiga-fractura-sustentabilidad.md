# Fuego, Fatiga, Fractura y Sustentabilidad Estructural

> Cuatro estados límite que rara vez gobiernan el predimensionamiento por gravedad pero han causado colapsos mortíferos. Lección común: **no son revisiones de último momento, son requisitos de desempeño integrados desde el concepto, el material y el detallado.**

## 0. Mapa

| Tema | Variable crítica | Mecanismo |
|---|---|---|
| **Fuego** | Temperatura del elemento vs tiempo | Pérdida de resistencia/rigidez del material caliente |
| **Fatiga** | Rango de esfuerzo (Δσ) y N° de ciclos | Nucleación y propagación lenta de grieta → falla súbita |
| **Fractura** | Tenacidad (K_IC) vs temperatura | Propagación inestable de grieta (frágil, sin aviso) |
| **Sustentabilidad** | Carbono incorporado (kgCO₂e) | Impacto climático |

Fatiga **crea** la grieta; mecánica de fractura dice **cuándo** se vuelve inestable. Durabilidad = sustentabilidad (la estructura que dura el doble incorpora la mitad de carbono/año).

## 1. Ingeniería de fuego estructural

El fuego no "quema": **degrada las propiedades mecánicas con la temperatura.**

**Acero — el más vulnerable:**

| Temperatura | fy retenido | E retenido |
|---|---|---|
| <300°C | ~100% | ~100% |
| 400°C | ~85-90% | ~70% |
| **550°C** | **~60%** | ~45% |
| **600°C** | **~50%** | ~30% |
| 700-800°C | 10-20% | muy baja |

> Si el acero no superó ~600°C y se enfría, **recupera** sus propiedades (reutilizable). Por encima, deterioro residual. Es vulnerable por su alta conductividad y factor de sección alto.

**Concreto — spalling explosivo:** incombustible, pero el agua intersticial se evapora → **presión de vapor** + esfuerzos térmicos → descascaramiento (crítico ~600°C, espesor 2-2.5 cm). **Peor en alta resistencia** (baja permeabilidad, el vapor no escapa). El spalling expone el refuerzo. **Mitigación: fibras de polipropileno** (se funden ~160°C creando canales de escape).

**Madera (mass timber) — charring:** se forma una capa de **carbón aislante** que protege el núcleo. Diseño por **tasa de carbonización ~0.65 mm/min** (CLT/glulam): se descuenta la profundidad carbonizada + capa de resistencia nula y se verifica la sección residual. Permite 1-2 h de resistencia sin protección añadida (sobredimensionar = sacrificial char).

**Resistencia al fuego:** en minutos/horas (R30...R180). Criterios **R-E-I** (capacidad portante, integridad, aislamiento); estructural = **R**.

**Protección pasiva:** intumescente (se expande ~200°C; estético, requiere mantenimiento; no actúa antes de 200°C), mortero proyectado (vermiculita/perlita; económico, voluminoso), recubrimiento de concreto, placas de yeso.

**Curva estándar (ISO 834/ASTM E119)** — siempre creciente, ~945°C a 60 min, irreal (sin enfriamiento). **PBD/fuego natural** — modela el fuego real del recinto (carga combustible, ventilación, con decaimiento). Cada vez más usado.

**WTC (lección):** las torres resistieron el impacto; cayeron porque el fuego, tras **desprenderse el recubrimiento ignífugo**, calentó el acero. WTC 7 colapsó por fuego sin impacto. Lecciones codificadas: protección que permanezca adherida, +1 h de resistencia en altos, diseño contra **colapso progresivo** (robustez), mejor compartimentación.

## 2. Fatiga

Falla bajo cargas cíclicas a niveles **muy por debajo de la resistencia estática**. Sin aviso visible. Fases: **nucleación** (en un concentrador) → **propagación estable** → **rotura final súbita**.

**Curva S-N (Wöhler):** rango de esfuerzo vs ciclos a la falla. **Límite de fatiga** (endurance limit): esfuerzo bajo el cual el material soporta ∞ ciclos. Aceros (BCC): suelen tener límite real → **vida infinita** si Δσ < umbral. Aluminio: no tiene → **vida finita**.

> **El detalle, no el material base.** La fatiga gobierna en las **discontinuidades**: soldaduras (el pie es un concentrador severo), conexiones, agujeros. **Subir el grado del acero NO mejora la vida a fatiga de una soldadura.**

**Categorías de detalle (AASHTO/AISC):** A (mejor, metal base limpio) → B/B′ → C/C′ (atiesadores, attachments cortos) → D → **E/E′ (la peor)**. Diseño: elegir categoría alta y verificar Δσ < umbral (CAFL).

**Dónde es crítica:** puentes (millones de ciclos de camiones/trenes — el caso emblemático), grúas, postes/luminarias (vórtices de von Kármán), offshore/aerogeneradores (fatiga-corrosión), rieles, recipientes a presión.

## 3. Mecánica de fractura

| | Dúctil | Frágil |
|---|---|---|
| Aviso | Sí (fluencia, deformación) | **No, súbita** |
| Energía | Alta | **Baja** |
| Propagación | Lenta, estable | **Rápida, inestable** |

`K ≈ Y·σ·√(πa)`; la fractura ocurre cuando K alcanza la **tenacidad K_IC**. **Una estructura con esfuerzos bajísimos puede fracturarse** si tiene una grieta grande y material de baja tenacidad.

**DBTT (temperatura de transición dúctil-frágil):** los aceros ferríticos (BCC) son dúctiles por encima de cierta temperatura y **frágiles al enfriarse**. Los austeníticos (FCC, inox 304/316) no la presentan (uso criogénico). **Especificar tenacidad (Charpy) a la temperatura de servicio mínima.**

**Lección — barcos Liberty:** se partieron en dos en el Atlántico helado (bajo la DBTT). Causas concurrentes: acero de baja tenacidad + casco soldado continuo (la grieta no encontraba junta que la detuviera) + soldadura deficiente + **esquinas vivas de escotillas** (concentradores). Soluciones que fundaron la mecánica de fractura: mejor tenacidad, **redondear esquinas**, detenedores de grieta, mejor soldadura.

> **Triángulo letal:** material de baja tenacidad + defecto/grieta + tracción (+ frío + triaxialidad). Controla cualquiera de los tres y evitas la falla.

## 4. Sustentabilidad estructural

**Carbono incorporado:** CO₂ de extraer/fabricar/transportar/construir materiales (antes de operar). Domina cada vez más la huella, y gran parte vive en la **estructura**.

| Material | Carbono incorporado | Notas |
|---|---|---|
| Concreto/cemento | El clínker es el problema | Cemento ≈ **8% del CO₂ global** |
| Acero | Alta/tonelada | EAF (chatarra) ≪ BOF (alto horno) |
| Madera | La más baja | Almacena carbono biogénico; ~35% de ahorro potencial |

**LCA (ciclo de vida, EN 15978):** A1-A3 (producto), A4-A5 (construcción), B1-B7 (uso, **reemplazo**), C1-C4 (fin de vida), D (reúso/reciclaje). Las **EPD** dan los datos por material.

**Jerarquía de acción (regla 80/20):**
1. **Construir menos / reusar** lo existente (evita casi todo el carbono incorporado).
2. **Usar menos material** (eficiencia estructural; menos material = menos carbono y costo).
3. **Materiales bajos en carbono** (concreto con SCM/LC3, acero EAF, mass timber).
4. **Diseño para desensamble (DfD/DfMA)** — atornillado vs soldado/colado, modular, "banco de materiales".
5. **Optimización topológica.**
> El ~80% de la reducción se decide en las **primeras semanas** (sistema, material, cantidad).

**Certificaciones:** LEED (WBLCA, EPD), **SE 2050** (cero carbono incorporado neto en estructuras para 2050). **El ingeniero estructural controla las palancas de mayor impacto.**

## 5. Durabilidad = sustentabilidad

Una estructura durable es sustentable (amortiza su carbono en más años, evita reparación/demolición/reconstrucción). Vida de servicio del CR: **iniciación** (penetración de CO₂/cloruros) → **propagación** (corrosión activa). Palancas: **recubrimiento suficiente + concreto compacto/baja permeabilidad**, inhibidores, drenaje. Conecta los cuatro temas (un detalle durable suele ser buen detalle de fatiga; un acero tenaz resiste mejor la grieta en frío).

## 6. Criterio: cuándo cada tema es crítico

| Tema | Crítico cuando… |
|---|---|
| Fuego | Altos, ocupación vulnerable, acero expuesto, estacionamientos, sótanos, túneles |
| Fatiga | Puentes, grúas, maquinaria, postes al viento, offshore, vías |
| Fractura | Bajas temperaturas, secciones gruesas, impacto, acero de baja tenacidad, soldadura restringida |
| Sustentabilidad | **Siempre**; especialmente concreto/acero a gran escala |
| Durabilidad | Marino, deshielo/sales, industrial, sulfatos, alta humedad |

> **Integrar desde el diseño, no al final:** fuego = elegir el sistema; fatiga = elegir categorías de detalle altas; fractura = especificar tenacidad y geometría suave; carbono = decidir sistema/material/cantidad temprano; durabilidad = fijar clase de exposición y recubrimiento. **Seguridad y sustentabilidad no compiten, convergen:** el material justo, el detalle dúctil y tenaz, la estructura que dura, son a la vez lo más seguro y lo más limpio.

## Fuentes

- AISC — Steel Exposed to Fire: https://www.aisc.org/aisc/solutions-center/engineering-faqs/112-steel-exposed-to-fire/
- PMC — Explosive Spalling Mechanism: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9099466/
- Wiley — Charring rates of timber: https://onlinelibrary.wiley.com/doi/full/10.1002/fam.3173
- NIST — WTC 7 investigation: https://www.nist.gov/world-trade-center-investigation/study-faqs/wtc-7-investigation
- SAGE — Modified AASHTO S-N curves: https://journals.sagepub.com/doi/10.1080/15732480601103630
- Metallurgy & Materials — Liberty Ship Failures: https://metallurgyandmaterials.wordpress.com/2015/12/25/liberty-ship-failures/
- RMI — Embodied Carbon 101: https://rmi.org/embodied-carbon-101/
- PMC — Net-Zero Embodied Carbon: https://pmc.ncbi.nlm.nih.gov/articles/PMC10832066/

> Valores típicos/orientativos; para diseño consultar el código vigente (Eurocódigos 2/3/5 Parte 1-2, ASTM E119, ISO 834, AISC 360 Cap.8 y Ap.3, AASHTO LRFD, ACI 318, NTC del RCDF).
