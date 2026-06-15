# Acciones y Cargas para el Diseño Estructural — NTC-Criterios (RCDMX 2017) y ASCE 7

> **Norma base:** *NTC sobre Criterios y Acciones para el Diseño Estructural de las Edificaciones*
> — Gaceta Oficial CDMX, 15-dic-2017. **Comparación:** ASCE/SEI 7 (LRFD).
> Valores en kg/m² (MKS). Equivalencia: 100 kg/m² ≈ 0.98 kN/m² ≈ 1.0 kPa.

---

## 1. Clasificación de las acciones (Cap. 2)

| Tipo | Definición | Ejemplos | Intensidad de diseño |
|---|---|---|---|
| **Permanentes** | Continuas, intensidad ~constante | Carga muerta, empuje estático de tierras/líquidos, presfuerzo, asentamientos | Intensidad **media** |
| **Variables** | Intensidad variable en el tiempo | Carga viva, temperatura, equipo, contracción | `W` media, `Wa` instantánea, `Wm` máxima |
| **Accidentales** | Lapsos breves, valor extraordinario | **Sismo**, **viento**, explosiones, incendios | Periodo de retorno / espectro |

**Combinación (Art. 2.3):**
- **Comb. 1 — Permanentes + Variables** (gravitacional), variable principal en máxima `Wm`.
- **Comb. 2 — Permanentes + Variables + UNA accidental** (sismo **o** viento, no simultáneos), con
  variables en instantánea `Wa`.

---

## 2. Factores de carga — NTC vs ASCE 7

### 2.1 NTC-2017 (Sección 3.4)

| Combinación | Grupo B (común) | Grupo A (hospitales, escuelas) |
|---|---|---|
| **Gravitacional** | **1.3** permanentes · **1.5** variables | **1.5** · **1.7** |
| **Accidental** (sismo/viento) | **1.1** a todas | **1.1** |
| Efecto **favorable** (volteo, flotación) | **0.9** | 0.9 |

> **Transición:** NTC-2004 usaba factor único **1.4** (Grupo B). NTC-2017 lo desglosó en **1.3
> permanentes / 1.5 variables**. En la práctica conviven ambas referencias.

### 2.2 ASCE 7 LRFD

```
1.4D
1.2D + 1.6L + 0.5(Lr o S o R)
1.2D + 1.6(Lr o S o R) + (1.0L o 0.5W)
1.2D + 1.0W + 1.0L + 0.5(Lr o S o R)
0.9D + 1.0W
1.2D + 1.0E + 1.0L + 0.2S
0.9D + 1.0E
```

### 2.3 Comparativa

| Concepto | NTC-2017 (Grupo B) | ASCE 7 LRFD |
|---|---|---|
| Gravitacional principal | `1.3 D + 1.5 L` | `1.2 D + 1.6 L` |
| Solo muerta | (cubierto por 1.3 D) | `1.4 D` |
| Sísmica | `1.1 (D + L_inst + E)` | `1.2 D + 1.0 E + 1.0 L (+0.2S)` |
| Volteo | `0.9 D` | `0.9 D ± 1.0 W/E` |

> El factor 1.1 "bajo" de NTC no implica menor seguridad: el sismo ya se calcula con espectro de
> periodo de retorno alto y Q/Q' absorbe la sobrerresistencia.

---

## 3. Cargas vivas unitarias — Tabla 6.1.1 NTC-2017 (kg/m²)

`W` = media (deformaciones diferidas); `Wa` = instantánea (combinaciones accidentales);
`Wm` = máxima (diseño gravitacional).

| Destino / Uso | W | Wa | Wm |
|---|---:|---:|---:|
| Habitación (casas, departamentos, hoteles, hospitales) | 70 | 90 | 170 |
| Oficinas, despachos, laboratorios | 100 | 180 | 250 |
| Aulas | 100 | 180 | 250 |
| Comunicación (pasillos, escaleras, vestíbulos públicos) | 40 | 150 | 350 |
| Estadios y reunión **sin asientos individuales** | 40 | 350 | 450 |
| Otros lugares de reunión (templos, cines, teatros, gimnasios, restaurantes, bibliotecas) | 40 | 250 | 350 |
| Comercios, fábricas y bodegas | 0.8·Wm | 0.9·Wm | Wm (≥ 350) |
| Azoteas pendiente **≤ 5 %** | 15 | 70 | 100 |
| Azoteas pendiente **> 5 %**; otras cubiertas | 5 | 20 | 40 |
| Volados en vía pública (marquesinas, balcones) | 15 | 70 | 300 |
| Garajes y estacionamientos (autos ≤ 2.5 t) | 40 | 100 | 250 |

**Notas:**
- Comercios/fábricas/bodegas: `Wm ≥ 350 kg/m²`, verificar contra carga real.
- Comunicación/escaleras: revisar además **carga concentrada de 250 kg** sobre 50×50 cm.

> **Aviso de edición:** la revisión 2023 ajustó algunos valores de azotea (p. ej. azotea ≤5 %:
> W=5, Wa=20, Wm=40). Confirmar edición aplicable a la jurisdicción y fecha de proyecto.

---

## 4. Reducción de carga viva por área tributaria (NTC 6.1.2)

Para elementos con **área tributaria A > 36 m²** (usos de habitación/oficina):

```
Wm = 100 + 420/√A        [kg/m²]   (A en m²)
```

| A (m²) | Wm reducida (kg/m²) |
|---:|---:|
| 36 | 170 (sin reducción) |
| 100 | 142 |
| 200 | 130 |
| 400 | 121 |
| ≥ 1000 | ~113 |

- **No aplica** a concentración de público ni estacionamientos.
- ASCE 7: `L = L₀·(0.25 + 4.57/√(K_LL·A_T))` [SI], piso 0.50·L₀ (elementos) / 0.40·L₀ (un nivel).

---

## 5. Cargas muertas típicas

### 5.1 Pesos volumétricos (kg/m³)

| Material | kg/m³ |
|---|---:|
| Concreto reforzado | 2400 |
| Concreto simple | 2200 |
| Mortero cemento-arena | 2100 |
| Tabique macizo de barro recocido | 1500 |
| Tabique hueco / block de concreto | 1300 |
| Acero estructural | 7850 |
| Vidrio | 2550 |

### 5.2 Cargas muertas superficiales (kg/m²)

| Componente | kg/m² |
|---|---:|
| Losa maciza de concreto, e = 10 cm | 240 |
| Losa maciza de concreto, e = 12 cm | 288 |
| Losa aligerada / vigueta-bovedilla | 200–260 |
| Firme de mortero, e = 3–4 cm | 65–85 |
| Loseta cerámica + mortero | 60–80 |
| Plafón / aplanado de yeso (1.5 cm) | 25 |
| Impermeabilizante + relleno de azotea | 80–150 |
| Instalaciones colgadas | 20–40 |
| Muro divisorio de tabique (por m² de losa) | 100–150 |

### 5.3 Sobrecarga reglamentaria (NTC 5.1.2)

| Caso | Incremento |
|---|---:|
| Losa de concreto **colada en sitio** | **+20 kg/m²** |
| Capa de **mortero** sobre losa | **+20 kg/m²** |
| **Total** (losa colada + mortero) | **+40 kg/m²** |

> No se aplican cuando el efecto de la carga muerta sea **favorable**.

---

## 6. Empujes de tierra, líquidos y granos

| Tipo | Naturaleza | Expresión |
|---|---|---|
| **Líquidos** | Hidrostática, triangular | `p = γ·h`; `E = ½·γ·h²` (γ_agua = 1000 kg/m³). Incluir subpresión bajo NAF. |
| **Tierras** | Lateral según rigidez del muro | `E = ½·K·γ·h²`; **activo** K_a = tan²(45−φ/2), **reposo** K₀ = 1−sen φ, **pasivo** K_p. Incluir sobrecarga `q` y nivel freático. |
| **Granos (silos)** | Arqueo (Janssen) | Presión no lineal; parte del peso se transfiere por fricción a paredes. |

- Con **sismo**, el empuje de tierras se incrementa (criterio **Mononobe-Okabe**) y pasa a la
  combinación accidental.

---

## Fuentes

- NTC sobre Criterios y Acciones 2017 (texto oficial, PAOT): https://paot.org.mx/centro/normas_a/2022/8.pdf
- Versión oficial alterna (transparencia CDMX): https://transparencia.cdmx.gob.mx/storage/app/uploads/public/5a6/121/9b2/5a61219b29d84155886673.pdf
- Tabla 6.1.1 Cargas Vivas Unitarias 2017: https://www.scribd.com/document/585709910/Tabla-6-1-1-Cargas-Vivas-Unitarias-2017
- *Transición del Factor de Carga NTC-2004 → NTC-2017* (Redalyc): https://www.redalyc.org/journal/944/94457671007/html/
- ASCE 7 LRFD Load Combinations: https://steelcalculator.app/reference/load-combinations-asce7/

> **Aviso técnico:** documento de referencia para anteproyecto. Verificar contra el texto vigente
> de las NTC y el RCDMX antes de cualquier diseño definitivo.
