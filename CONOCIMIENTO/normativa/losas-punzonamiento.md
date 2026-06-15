# Losas de Concreto: Macizas, Planas, Reticulares y Punzonamiento

> Bases: **NTC-Concreto (RCDMX 2017)** y **ACI 318-19**. Enfoque: losa maciza (1 y 2 direcciones), plana/aligerada, **punzonamiento** (crítico), losa de cimentación y proceso constructivo. *No repite vigueta-bovedilla (otro documento).*

## 0. Mapa rápido de decisión

| Si tienes… | Usa | Razón |
|---|---|---|
| Claros ≤ 6 m, marcos con trabes | **Maciza perimetralmente apoyada** | Económica, robusta, dúctil |
| Tablero con `m = a_corto/a_largo < 0.5` | **Maciza en una dirección** | El claro largo casi no trabaja |
| Claros 5-8 m sin trabes, carga ligera | **Losa plana (flat plate)** | Altura libre, cimbra simple |
| Claros 7-12 m, aligerar peso | **Reticular / waffle** | Reduce peso muerto y flecha |
| Cargas altas + columnas | **Flat slab con ábaco/capitel** | Resuelve **punzonamiento** |
| Suelo blando, control de asentamientos | **Losa de cimentación (mat)** | Reparte presión |

> **Regla de oro:** en losa plana lo que manda casi nunca es la flexión — es el **cortante por penetración (punzonamiento)** en la conexión losa-columna. Falla **frágil**, sin aviso, y es la que tira edificios en sismo.

## 1. Losas macizas

### 1.1 ¿Una o dos direcciones? — relación `m = a_corto/a_largo`

| `m` | Comportamiento | Diseño |
|---|---|---|
| `m < 0.5` (largo > 2× corto) | El claro largo aporta poco | **Una dirección** (principal en el corto + temperatura en el largo) |
| `0.5 ≤ m ≤ 1.0` | Ambos claros trabajan | **Dos direcciones** (perimetralmente apoyada) |

### 1.2 Maciza en UNA dirección
Se diseña como **viga ancha de 1 m**. Momentos por **coeficientes de continuidad** (claros ~iguales ≤20% diferencia, carga uniforme, viva ≤ 3× muerta):

| Posición | Coef. (×`w·ln²`) |
|---|---|
| M⁻ apoyo extremo monolítico | 1/24 |
| M⁺ claro extremo | 1/14 |
| M⁻ primer apoyo interior | 1/10 (2 claros) / 1/11 (≥3) |
| M⁺ claros interiores | 1/16 |
| M⁻ apoyos interiores | 1/11 |

Peralte mínimo (ACI 318-19 7.3.1.1, fy=420): ln/20 (simple), ln/24 (un extremo continuo), ln/28 (ambos), ln/10 (voladizo).

### 1.3 Maciza en DOS direcciones — método de coeficientes NTC
Aplica si: tablero ~rectangular, carga ~uniforme, M⁻ en apoyo común no difieren >50%, viva/muerta ≤2 (monolítica) ó ≤1.

1. Clasificar cada tablero (interior, borde, esquina) y cada borde (continuo/discontinuo).
2. Entrar a la tabla con `m = a_corto/a_largo` → coeficientes (×10⁻⁴) para M⁻ interior, M⁻ discontinuo y M⁺, en cada dirección.
3. `M = coef × w × a_corto²`.

| Concepto | Criterio |
|---|---|
| M⁻ borde interior continuo | Coef alto → **bastón negativo principal** |
| M⁻ borde discontinuo | ≈ ⅓ del positivo (la realidad restringe el borde "simplemente apoyado") |
| Dirección corta | Recibe más momento → refuerzo más cerrado |

**Peralte mínimo (criterio del perímetro NTC):** `d_mín = Perímetro del tablero / 250` (fy=420, carga ≤~380 kg/m²), contando los lados discontinuos ×1.25. Da peraltes de **8-12 cm** para claros de 3.5-6 m.

**Distribución y bastones:**

| Tema | Regla |
|---|---|
| Franjas | Central (50% del claro) y extremas (25% c/u, con menor momento) |
| **Bastones negativos** | Lecho superior sobre apoyos; longitud ≈ **L/4** desde el paño a cada lado, anclado |
| Separación máxima | `s ≤ 3.5h` y `≤ 50 cm` |
| Temperatura | ρ ≈ **0.002** (fy=420); ACI = 0.0018 |
| Recubrimiento | 2-2.5 cm interior; 4 cm si expuesto |

> **Error clásico:** cortar el bastón "a ojo". Si no llega a la zona de momento nulo, agrieta el lecho superior sobre el apoyo. Respeta `L/4` y ánclalo.

## 2. Losas planas y aligeradas

| Sistema | Descripción | Cuándo |
|---|---|---|
| **Flat plate** | Losa de espesor constante directo en columnas, sin trabes ni ábaco | Departamentos/oficinas, claros 5-7 m. La más esbelta y rápida |
| **Flat slab (ábaco/capitel)** | Losa plana + engrosamiento local sobre columnas | Claros mayores o cargas altas, **cuando manda el punzonamiento** |
| **Reticular/waffle** | Nervaduras ortogonales con **casetones**; **zona maciza** alrededor de columnas | Claros 7-12 m, reduce peso muerto |

- **Ábaco (drop panel):** aumenta `d` en la zona crítica → sube resistencia a punzonamiento. Se extiende ≥ 1/6 del claro a cada lado, proyecta ≥ h/4 bajo la losa.
- **Capitel:** agranda el perímetro crítico `b₀`.
- En reticular, la **zona maciza** alrededor de la columna cumple la función del ábaco.

**Desventaja clave (flat plate/reticular):** **mal comportamiento sísmico** (sin trabes → poca rigidez lateral) + vulnerabilidad de punzonamiento.

**Peralte mínimo (ACI 318-19 Tabla 8.3.1.1, fy=420):**

| Caso | Ext. sin trabe borde | Ext. con trabe | Interior |
|---|---|---|---|
| **Sin ábaco** | ln/30 | ln/33 | ln/33 |
| **Con ábaco** | ln/33 | ln/36 | ln/36 |

Mínimos absolutos: 12.5 cm sin ábaco, 10 cm con ábaco. **Reticular:** h ≈ L/24 a L/20; nervios 10-15 cm, casetón 60×60 a 80×80 cm, capa de compresión ≥ 5 cm.

> **Cuidado:** `L/h` depende solo del claro. En claros largos o cargas altas **calcula la flecha real**.

## 3. PUNZONAMIENTO (cortante por penetración) — el tema crítico

La columna "perfora" la losa como un punzón; superficie de falla = cono troncado a ~45°. Es **frágil**: excedido `vc`, la conexión se desprende sin redistribución.

**Perímetro crítico `b₀`:** a **`d/2`** de la cara de columna. Interior rectangular: `b₀ = 2(c₁+d) + 2(c₂+d)`; borde sin lado exterior; esquina solo dos lados. `d` = promedio de peraltes en ambas direcciones.

**`vc` ACI 318-19 §22.6.5.2 — el MENOR de tres (psi):**
```
(a) vc = (2 + 4/β)·λ·λs·√f'c          β = lado largo/corto
(b) vc = (αs·d/b₀ + 2)·λ·λs·√f'c       αs = 40 interior, 30 borde, 20 esquina
(c) vc = 4·λ·λs·√f'c
```
- **`λs` = factor de tamaño (nuevo en 318-19):** `λs = √(2/(1+0.004·d)) ≤ 1.0` (d en pulgadas). **Penaliza losas gruesas.**
- `√f'c ≤ 100 psi`. Diseño: `vu ≤ φ·vc`, **φ = 0.75**.

**Transferencia de momento losa-columna (lo que mata en sismo):**
```
vu = Vu/(b₀·d) ± γv·Mu·c / Jc
γv = 1 − γf ,   γf = 1/(1 + (2/3)√(b₁/b₂))
```
El momento sísmico se invierte cíclicamente y degrada la conexión en ambos lados.

**Refuerzo contra punzonamiento:**

| Sistema | vc reducido | vn máx | vs |
|---|---|---|---|
| **Estribos cerrados** | 2·λ·λs·√f'c | **6√f'c** | Av·fyt/(b₀·s) |
| **Pernos/stud rails** | 3·λ·λs·√f'c | **8√f'c** | Av·fyt/(b₀·s) |

Mínimo: `Av/s ≥ 2√f'c·b₀/fyt`. Primer perno ≤ d/2; s ≤ d/2. **Los pernos con cabeza (stud rails) > estribos**: se anclan mecánicamente, más fiables en losa delgada, dan vn mayor. **Recomendados en zona sísmica** (ACI 421.1R).

**Zapatas:** mismo fenómeno a d/2; ACI permite despreciar λs (confinamiento del suelo). Suele gobernar el **espesor**. Revisar ambos: penetración (a d/2) y una dirección (a d, viga ancha).

**Por qué colapsan las losas planas en sismo — 19-S 2017:**
- **~61% de los colapsos en CDMX (2017) fueron de losa plana sobre columnas** (vs ~43% en 1985).
- Mecanismo: poca rigidez lateral → grandes distorsiones → momento cíclico en la conexión → cortante excéntrico excede vc → **punzonamiento frágil** → la losa pierde apoyo y cae → **colapso progresivo (pancaking)**.
- Agravantes: planta baja débil, edificios de esquina, golpeteo, daño acumulado de 1985.
- **Lecciones:** (1) no usar flat plate como único sistema sismorresistente → combinar con **muros de cortante** o trabes; (2) **refuerzo de integridad (ACI 318-19 §8.7.4.2):** acero inferior **continuo a través de la columna** que sostiene la losa aunque se punzone; (3) **stud rails** y verificar la conexión para el **drift sísmico**.

## 4. Losas de cimentación (mat)

**Cuándo:** suelo blando, cargas concentradas, columnas muy juntas o control de asentamientos diferenciales.

**Modelo Winkler (balasto):** `ks = q/δ` (kg/cm³). Valores orientativos (placa 30×30): arcilla blanda 0.5-1.5; media/firme 1.5-5; arena suelta 1-3; media 3-9; densa/grava 9-25+.

> **`ks` NO es propiedad del suelo** — depende del **tamaño, rigidez y carga**. Corregir por tamaño; mejor obtenerlo del asentamiento calculado (`ks = q_adm/asentamiento`).

**Comportamiento:** losa rígida (presión ~lineal, zapata combinada invertida) vs flexible (presión bajo columnas, placa sobre resortes/EF). Verificar flexión (doble parrilla), **punzonamiento de cada columna**, y asentamientos. Espesores 40-120 cm (edificios altos CDMX: 80-150 cm). Recubrimiento ≥ 5-7.5 cm.

## 5. Proceso constructivo y criterio

- **Cimbra/apuntalamiento:** soporta concreto fresco + cimbra + carga de colado (~200-300 kg/m² extra). **Contraflecha** en claros largos: L/300 a L/500.
- **Reapuntalamiento (re-shoring):** al descimbrar, re-apuntalar **sin precargar** (solo "tocar"). Mantener 2-3 niveles apuntalados; quitar de abajo hacia arriba. Tiempos: fondo de losa 14-21 días (claros grandes hasta 28).
- **Juntas de colado:** SÍ en zonas de cortante/momento bajos (tercio central, ≈L/3 del apoyo), rugosa/limpia/saturada con barras pasantes. **NUNCA sobre apoyos/columnas** (M⁻, cortante máx, **zona de punzonamiento**).
- **Curado:** mínimo 7 días; iniciar apenas resista pisado.

**Errores típicos:**

| Error | Consecuencia | Prevención |
|---|---|---|
| Bastón negativo corto (no llega a L/4) | Fisura en lecho superior | Marcar en plano y **medir en obra** |
| **Recubrimiento del lecho superior pisado** | Pierde `d` → grieta/flecha; en flat plate **dispara el punzonamiento** | **Silletas rígidas** cada 80-100 cm, tablones de tránsito |
| Flechas excesivas | Por peralte apurado/descimbrado prematuro/sin contraflecha | Respetar L/h, calcular flecha, contraflecha, re-apuntalar |
| Junta sobre apoyo/columna | Plano de debilidad en zona crítica | Junta en tercio central |
| Sin acero de integridad (flat plate) | Colapso progresivo | Acero inferior pasante por la columna |

## Criterio de obra / voz senior

- **El punzonamiento es el que tira losas planas, no la flexión.** Lo primero que reviso en un flat plate es la conexión losa-columna con el momento **sísmico**, y exijo **stud rails** en columnas interiores cargadas.
- **Flat plate solo, en zona sísmica, es jugar con fuego.** O le pones muros de cortante o le pones trabes.
- **El acero de integridad es el cinturón de seguridad.** Aunque la conexión se punzone, evita que la losa caiga.
- **El lecho superior negativo es sagrado.** Si los albañiles lo pisan y aplastan, pierdes `d`. Silletas rígidas y tablones, sin excepción.
- **Bastones: mídelos.** Regla L/4 desde el paño y anclado.
- **No descimbres con calendario, descimbra con cilindros.** La flecha por descimbrado prematuro no se quita nunca.
- **`ks` no sale de una tabla.** Depende del tamaño de tu losa; sácalo del asentamiento calculado y verifica punzonamiento columna por columna.

## Fuentes

- NTC-Concreto, Gaceta Oficial CDMX 2017: https://transparencia.cdmx.gob.mx/storage/app/uploads/public/83_/N_C/ONC/83_N_CONCRETO.pdf
- Two-Way Shear / Punching Shear ACI 318-19 (ideCAD): https://help.idecad.com/ideCAD/two-way-shear-strength · https://help.idecad.com/ideCAD/punching-shear-design
- Vc size effect λs ACI 318-19 (RISA): https://blog.risa.com/post/shear-contribution-for-concrete-vc-per-aci-318-19
- ACI 421.1R — headed studs en losas: http://www.xiaonianduan.com/media/ACI4211r_99.pdf
- Desempeño de estructuras de losa plana en el sismo 2017 (Redalyc): https://www.redalyc.org/journal/618/61864056001/61864056001.pdf
- Coeficiente de balasto (Víctor Yepes, UPV): https://victoryepes.blogs.upv.es/tag/coeficiente-de-balasto/

> **Verificación:** las ecuaciones de punzonamiento ACI 318-19 están verificadas. Los coeficientes exactos de la tabla NTC de losas en dos direcciones, longitudes de bastón y `Perímetro/250` se presentan como reglas consolidadas; cotejar contra el PDF oficial de NTC-Concreto (capítulo de losas) antes de un cálculo formal.
