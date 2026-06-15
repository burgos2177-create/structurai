# Comportamiento Sísmico y Sistemas de Protección — criterio avanzado

> **No** reproduce el cálculo de espectros, Q/Q' ni sobrerresistencia (eso vive en `ntc-sismo-cfe-mdoc.md`). Aquí el **comportamiento real**, los **mecanismos de falla** y los **sistemas modernos**. Marco: NTC-Sismo 2023 (RCDF), ASCE 7, FEMA P-58, AISC 341.

## 1. Mecanismos de falla sísmica — catálogo

> Criterio rector: **un sismo busca el eslabón más débil y la trayectoria de falla frágil más corta.** Elimina esas trayectorias *antes* de calcular.

| Mecanismo | Por qué ocurre | Cómo evitarlo |
|---|---|---|
| **Piso suave / PB débil** | Discontinuidad de rigidez entre un nivel (PB sin muros) y los de arriba (con relleno) → la deriva se concentra en un entrepiso | Continuidad de muros/rigidez; muros de cortante hasta cimentación; columnas de PB por capacidad |
| **Columna corta / cautiva** ⚠️ *la más letal* | Antepechos/ventanas de media altura reducen la longitud libre Lc. La rigidez va con 1/Lc³ y el cortante con 1/Lc: si Lc baja a h/4, **el cortante se cuadruplica** → falla por cortante frágil (X) | **Junta/holgura** entre el muro de relleno y la columna; si no, diseñar toda la altura libre por cortante con estribos cerrados muy próximos |
| **Mecanismo de columnas (vs col. fuerte-viga débil)** | Rótulas en columnas → mecanismo de entrepiso (la columna además carga gravedad) | Imponer **ΣMcol ≥ 1.2·ΣMviga** en cada nudo |
| **Golpeteo (pounding)** | Edificios con periodos distintos vibran desfasados e impactan; peor si las losas de uno chocan a media altura del otro | **Junta sísmica** ≥ suma de desplazamientos máximos; alinear losas |
| **Irregularidad torsional** | CM ≠ CR → la planta gira; el perímetro alejado recibe deriva amplificada | Simetrizar rigidez; rigidez perimetral balanceada |
| **Edificio de esquina** | Torsión + golpeteo + falta de redundancia (dos caras abiertas, dos colindantes) | Rigidizar las caras abiertas; evitar excentricidad |
| **Discontinuidad vertical** | Muro/columna que no baja continuo (se "cuelga" de una viga de transferencia) | Continuidad; si hay transferencia, diseñarla por capacidad |
| **Punzonamiento de losa plana** | La conexión losa-columna transmite cortante + momento en un perímetro pequeño → falla frágil, la losa "se zafa" y cae en pancake | **No usar losa plana como único sistema sismorresistente**; muros/marcos; capiteles; refuerzo de cortante. **~40% de daños graves de 1985** fueron de este sistema |
| **Falla de nudos** | El nudo no transmite el cortante de las vigas plastificadas; sin estribos en el nudo, falla diagonal | Confinar el nudo, anclar bien, verificar cortante del panel |
| **Pandeo de contravientos** | La diagonal pandea en compresión → ciclo histerético asimétrico y degradante | Limitar esbeltez o **usar BRB** |
| **Volcamiento** | Edificio esbelto: el momento de volteo tracciona columnas perimetrales y sobrecarga la cimentación | Cimentación capaz de tracción (pilotes); arriostrar |

```
   COLUMNA LIBRE (h)              COLUMNA CAUTIVA (Lc = h/4)
   V ∝ 1/h                        V ∝ 1/Lc  → 4·V
  ┌────────┐ viga              ┌────────┐ viga
  │        │  flexión          │██████  │ ← muro/antepecho rígido pegado
  │        │  dúctil           │██████  │
  │        │                   │   ╳    │ ← falla CORTANTE frágil (X)
  └────────┘                   └────────┘
```

> **Criterio núcleo:** el 80% de la seguridad sísmica se decide en la **concepción** (geometría, continuidad, ubicación de muros), no en el análisis. Un edificio mal concebido no se "salva" con más acero.

## 2. Ductilidad y disipación de energía

La estructura sismorresistente **no resiste el sismo elásticamente** (sería antieconómico): incursiona en el rango inelástico de forma controlada, disipando energía sin colapsar.

- **Rótulas plásticas:** deben formarse en los **extremos de las vigas** (viga-débil). Una viga plastificada sigue cargando gravedad; una columna plastificada compromete la estabilidad.
- **Diseño por capacidad — jerarquía:** `Viga (fusible dúctil) < Columna < Nudo < Cimentación`. Las columnas se arman en función del **momento resistente real de las vigas**, no de la fuerza elástica.
- **Energía histerética:** área del lazo carga-descarga. Lazo "gordo" y estable = mucha disipación; **pinching** (adelgazamiento) = degradación. El concreto mal confinado y los contravientos que pandean degradan rápido.
- **Efecto P-Δ dinámico:** la gravedad sobre la estructura ya desplazada amplifica la deriva; bajo demanda inelástica puede llevar a **rigidez tangente negativa → inestabilidad (colapso lateral)**. Por eso se limita la distorsión de entrepiso.
- **Demanda vs capacidad de desplazamiento:** la falla ocurre cuando la demanda de distorsión supera la capacidad de deformación. El detallado (confinamiento) **compra** capacidad; la irregularidad y la columna corta **disparan** la demanda.

> **Criterio:** resistencia sin ductilidad es una trampa. Un edificio más resistente pero frágil colapsa más violentamente que uno menos resistente pero dúctil.

## 3. Irregularidades

La NTC-Sismo **2023** reemplazó las 13 condiciones de regularidad de 2017 por **dos familias** (planta: 5 tipos; elevación: 3 tipos). Ahora se controla **principalmente vía distorsiones límite**; solo la **fuerte irregularidad en elevación** penaliza el factor `Q'`. Se introduce un factor `λp` que amplifica las **aceleraciones de piso** para diafragmas, apéndices y no estructurales.

| Irregularidad | Efecto | Cómo evitarla |
|---|---|---|
| Torsional | Giro en planta, deriva en perímetro | Coincidir CM y CR; rigidez perimetral balanceada |
| Esquinas entrantes (L,T,H) | Concentración en el ángulo | **Junta sísmica** en cuerpos regulares |
| Discontinuidad de diafragma | El piso no reparte como cuerpo rígido | Limitar aberturas; colectores y cuerdas |
| Piso suave/débil | Mecanismo de entrepiso | Continuidad de rigidez/resistencia |
| Retranqueos/geometría variable | Latigazo | Transiciones graduales |

> **Criterio:** la norma **castiga** la irregularidad, pero el castigo no la arregla. Cuando la arquitectura exige una forma irregular, **fragmentar con juntas sísmicas** en cuerpos regulares suele ser superior a "calcular" la irregularidad.

## 4. Sistemas modernos de protección

Filosofía: **en vez de pedirle a la estructura que aguante toda la energía, se la desvía a dispositivos.** Dos familias: **aislar** (desacoplar del suelo) y **disipar** (absorber en dispositivos sacrificables).

### 4.1 Aislamiento sísmico de base
Se intercala una capa **muy flexible lateralmente** entre superestructura y cimentación. **Alarga el periodo** (de ~0.5-1 s a 2.5-3.5 s), llevándolo fuera de la zona de mayor energía, y **desacopla** el movimiento del suelo. Derivas y aceleraciones de piso caen drásticamente. (NTC-Sismo 2023, **Apéndice C**.)

| Dispositivo | Principio |
|---|---|
| **Elastomérico con núcleo de plomo (LRB)** | Caucho laminado (flexibilidad) + núcleo de plomo que fluye y disipa. El más común en hospitales |
| **Péndulo de fricción (FPS / triple)** | El edificio "pendula" sobre superficie cóncava; fricción disipa, curvatura recentra |
| **Alto amortiguamiento (HDR)** | Caucho disipativo, sin plomo |

**Cuándo conviene:** edificios **esenciales** que deben seguir operativos (hospitales, emergencia, data centers), en **suelo firme/roca**, rígidos y de baja-mediana altura.

**Cuándo NO:** **suelo blando (zona de lago CDMX) → NO** (el periodo largo del edificio aislado coincide con el del suelo → **resonancia**, amplifica en vez de proteger — el límite más crítico del Valle de México); **edificios muy altos/esbeltos → NO** (ya son flexibles; problemas de tracción/volcamiento en los aisladores).

### 4.2 Disipadores de energía
Fusibles reemplazables que absorben energía y protegen los elementos primarios.

| Tipo | Disipa por | Sensible a | Ventaja |
|---|---|---|---|
| **Metálicos/histeréticos (ADAS/TADAS)** | Placas de acero que fluyen | **Desplazamiento** | Económicos, lazo estable, reemplazables |
| **Fluido viscoso** | Pistón fuerza fluido por orificios (F = C·v^α) | **Velocidad** | **Desfasado 90° de la fuerza elástica** → no añade fuerza en el pico de deriva. Ideal viento y sismo |
| **Friccionales** | Superficies precargadas que deslizan | Desplazamiento | Lazo rectangular (máxima energía/ciclo) |
| **BRB (contraviento restringido al pandeo)** | Núcleo de acero que **fluye igual en tracción y compresión** (camisa impide el pandeo) | Desplazamiento | Simétrico y estable; **fusible estructural** |

> **Criterio clave:** los **viscosos (velocidad)** dan su fuerza máxima cuando la estructura pasa por la posición neutra (no en máxima deriva) → **no sobrecargan** columnas en el instante crítico; excelentes para altos y viento. Los de **desplazamiento** controlan deriva directamente.

### 4.3 Amortiguadores de masa sintonizada (TMD/TLD)
Una gran masa cerca de la cúpula, **sintonizada a la frecuencia fundamental**; oscila **en contrafase** y cancela parte del movimiento. Para **confort frente a viento** y sismo en edificios altos esbeltos. **Taipei 101:** TMD de péndulo de ~660-730 t suspendido entre los pisos 87-92. **TLD:** usa el chapoteo de tanques de agua (más barato, doble función contra incendio).

## 5. Casos y lecciones mexicanas

- **Torre Mayor (CDMX, 2003):** primer alto en Latinoamérica con **~98 amortiguadores de fluido viscoso** en súper-diagonales. En el **19-S-2017 (M 7.1): sin daño estructural, sin cristales rotos.** Caso emblemático de disipación pasiva funcionando.
- **Edificios aislados:** el aislamiento se extendió a edificios de +30 niveles, hospitales y grandes obras, concentrado en **esenciales sobre suelo firme**.
- **Lecciones 1985 vs 2017:**

| Lección | Veredicto |
|---|---|
| **Losa plana sin muros** | **El peor sistema** en suelo blando; evitar como único resistente |
| **Piso suave (PB comercial)** | Patrón dominante de colapso; continuidad de rigidez |
| **Edificios de esquina / golpeteo** | Torsión + impacto; juntas reales y rigidizar caras abiertas |
| **Columna corta** | Desligar antepechos/ventanas |
| **Acero dúctil bien detallado** | Buen desempeño — la ductilidad paga |
| **Disipación pasiva (Torre Mayor)** | Sin daño — los sistemas de protección funcionan |

> **Criterio histórico:** **2017 repitió los modos de falla de 1985** (losa plana, piso suave, esquina, golpeteo). No fue mala suerte: fue construcción que **ignoró las lecciones**.

## 6. Criterio: ¿protección especial o estructura convencional bien hecha?

**Punto de partida innegociable:** un sistema de protección **no rescata** una mala concepción. Primero se resuelve regularidad, continuidad, columna fuerte-viga débil y detallado dúctil.

```
¿Bien concebida (regular, dúctil, col. fuerte-viga débil)?
   └─ NO → corregir la concepción PRIMERO.
   └─ SÍ → ¿Necesita seguir OPERATIVA tras un sismo fuerte?
            ├─ Hospital/esencial + suelo FIRME → AISLAMIENTO (LRB/FPS)
            ├─ Alto, viento + sismo → DISIPADORES VISCOSOS (± TMD)
            ├─ Control de deriva / retrofit → BRB o histeréticos/friccionales
            └─ Común, presupuesto ajustado → CONVENCIONAL dúctil bien hecho
```

| Sistema | Sobrecosto vs convencional | Beneficio |
|---|---|---|
| Convencional dúctil | base | Vida (no colapso); puede quedar inoperante meses |
| **Aislamiento de base** | **~2-10%** | Daño casi nulo, operación continua; puede ahorrar acero/concreto en superestructura |
| Disipadores viscosos/BRB | bajo-moderado | Reduce deriva; ideal en retrofit y altos |
| TMD/TLD | moderado | Confort ante viento |

> **Criterio costo-beneficio:** la métrica correcta **no es el costo inicial sino el del ciclo de vida** (reparación + reemplazo de equipos + **lucro cesante/continuidad de servicio**). En un hospital, las horas de inactividad superan la inversión. Para vivienda común, el dinero rinde más en **concepción regular + detallado dúctil + buena supervisión** que en dispositivos.

## Fuentes

- El efecto de columna corta (UCV): https://saber.ucv.ve/ojs/index.php/rev_tc/article/view/3609
- Golpeteo entre estructuras (UPRM): https://www.uprm.edu/riseup/wp-content/uploads/sites/223/2020/02/Golpeteo.pdf
- Distorsiones/irregularidad NTCS 2023 (SciELO): https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-092X2025000100103
- Aislamiento sísmico en la NTC-Sismo del RCDF: https://www.researchgate.net/publication/375769407
- Disipadores viscosos (SciELO): https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-092X2024000100072
- Torre Mayor (Milenio): https://www.milenio.com/estados/torre-mayor-sin-rasgunos-tras-sismo-se-defiende-meciendose
- BRB — pandeo restringido: https://tis.com.tr/producto/buckling-restrained-brace-brb-arriostramiento-restringido-al-pandeo
- TMD Taipei 101: https://ceint.institute/2024/02/27/tuned-mass-damper-del-taipei-101/
- Aisladores vs disipadores, cómo decidir (Quaketek): https://quaketek.com/es/aisladores-vs-disipadores-sismicos-como-decidir/

> Nota: los porcentajes de sobrecosto del aislamiento (2-10%) y el peso del TMD de Taipei 101 (~660-730 t) varían entre fuentes; se presentan como rangos.
