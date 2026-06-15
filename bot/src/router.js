// router.js — Enrutador por palabras clave.
// Decide qué archivos de CONOCIMIENTO cargar según la pregunta, replicando el
// "mapa rápido pregunta → archivo" de CONOCIMIENTO/00-indice.md.
// Esto mantiene el prompt pequeño (rápido y barato) sin necesidad de una llamada extra al LLM.

const K = "CONOCIMIENTO";

// Cada regla: { rx: regex de disparo, files: [rutas en el repo] }
const RULES = [
  { rx: /castillo|dala|cadena|muro de block|mamposter[ií]a confinada|tabique|tabic[oó]n|aparejo|endentado/i,
    files: [`${K}/normativa/ntc-mamposteria.md`] },
  { rx: /vigueta|bovedilla|interej|losa aligerada|capa de compresi[oó]n/i,
    files: [`${K}/procesos-constructivos/procesos-constructivos.md`] },
  { rx: /secci[oó]n variable|cartela|acartelad|peralte variable|d[oó]nde aumento|atrae momento|haunch/i,
    files: [`${K}/diseno-conceptual/estructuracion-secciones-variables.md`] },
  { rx: /predimension|regla de dedo|qu[eé] peralte|cu[aá]nto muro|densidad de muro|configuraci[oó]n|estructur(ar|aci[oó]n)|checklist|modelaci[oó]n/i,
    files: [`${K}/diseno-conceptual/criterio-estructurista-senior.md`] },
  { rx: /columna corta|piso suave|planta baja|golpeteo|pounding|aislador|disipador|tmd|ductilidad|mecanismo de falla|torsi[oó]n/i,
    files: [`${K}/normativa/comportamiento-sismico-proteccion.md`] },
  { rx: /recubrimiento|estribo|cuant[ií]a|anclaje|longitud de desarrollo|f'?c|f ?y|aci ?318|nudo|confinamiento/i,
    files: [`${K}/normativa/ntc-concreto-aci318.md`] },
  { rx: /factor(es)? de carga|carga viva|carga muerta|combinaci[oó]n|reducci[oó]n por [aá]rea|empuje/i,
    files: [`${K}/normativa/ntc-criterios-cargas.md`] },
  { rx: /drift|distorsi[oó]n|espectro|factor q|sasid|prodisis|sismo|s[ií]smic|cfe|mdoc/i,
    files: [`${K}/normativa/ntc-sismo-cfe-mdoc.md`] },
  { rx: /cimentaci[oó]n|zapata|pilote|pila|caj[oó]n|asentamiento|geotecn|losa de cimentaci[oó]n|excavaci[oó]n|lodo benton/i,
    files: [`${K}/normativa/cimentaciones-geotecnia.md`] },
  { rx: /viento|succi[oó]n|c[uú]pula|cubierta ligera|anuncio|isotacas|v[oó]rtic|gobierna viento/i,
    files: [`${K}/normativa/viento-ntc-cfe-asce.md`] },
  { rx: /losa plana|punzonamiento|reticular|waffle|flat slab|capitel|[aá]baco/i,
    files: [`${K}/normativa/losas-punzonamiento.md`] },
  { rx: /presfor|pretensad|postensad|prefabricad|tor[oó]n|trabe tt|aashto|alveolar|tilt-?up/i,
    files: [`${K}/normativa/presforzado-prefabricados.md`] },
  { rx: /conexi[oó]n de acero|soldadura|aws|perno|tornillo|placa base|ancla|montaje de acero|a325|a490/i,
    files: [`${K}/normativa/conexiones-acero-soldadura.md`] },
  { rx: /lrfd|asd|aisc|perfil|pandeo|esbeltez|compacta|miembro de acero|columna de acero/i,
    files: [`${K}/normativa/ntc-acero-aisc-lrfd.md`] },
  { rx: /descimbr|revenimiento|curado|vibrado|cilindro|tolerancia|rendimiento|bit[aá]cora|liberaci[oó]n de colado|control de calidad|prueba de|vicio oculto/i,
    files: [`${K}/procesos-constructivos/control-calidad-supervision.md`] },
  { rx: /vivienda|autoconstrucci[oó]n|casa|albañil|segundo piso|cuatrapead/i,
    files: [`${K}/procesos-constructivos/vivienda-mamposteria-practica.md`] },
  { rx: /escalera|rampa|muro de contenci[oó]n|cisterna|tanque|alberca|pretil|barda|parapeto|volado|cantilever|transferencia|flotaci[oó]n/i,
    files: [`${K}/elementos-especiales/elementos-especiales.md`] },
  { rx: /grieta|corrosi[oó]n|reforzar|refuerzo de|frp|fibra de carbono|encamisad|escler[oó]metro|n[uú]cleo|dictamen|post-?s[ií]smo|patolog/i,
    files: [`${K}/patologia-y-evaluacion/patologia-rehabilitacion.md`] },
  { rx: /constructibilidad|congesti[oó]n de acero|perforar (la )?trabe|hueco en|nudo congestionad|rfi|secuencia constructiva|reapuntal/i,
    files: [`${K}/diseno-conceptual/constructibilidad-diseno-obra.md`] },
  { rx: /puente|aashto|hl-?93|imt|socavaci[oó]n|tacoma|dovela|tablero/i,
    files: [`${K}/normativa/puentes-aashto-sct.md`] },
  { rx: /uhpc|autocompactante|scc|fibra|madera|clt|glulam|cold-?formed|carbono incorporad|lc3|aditivo|durabilidad|vida [uú]til/i,
    files: [`${K}/normativa/materiales-avanzados.md`] },
  { rx: /modal|matriz de rigidez|elemento finito|\bfem\b|pushover|time-?history|\bida\b|an[aá]lisis (estructural|pl[aá]stico)|din[aá]mica|frecuencia natural|periodo/i,
    files: [`${K}/fundamentos-teoria/analisis-dinamica-estructural.md`] },
  { rx: /confiabilidad|[ií]ndice (beta|β)|fema p-?58|desempe[ñn]o|pbee|resilien|probabilidad de falla|periodo de retorno|riesgo/i,
    files: [`${K}/fundamentos-teoria/confiabilidad-diseno-desempeno.md`] },
  { rx: /fuego|incendio|resistencia al fuego|fatiga|fractura|d[uú]ctil-?fr[aá]gil|charpy|sustentab|carbono|lca|spalling|intumescente/i,
    files: [`${K}/fundamentos-teoria/fuego-fatiga-fractura-sustentabilidad.md`] },
  { rx: /software|etabs|sap2000|opensees|\bbim\b|param[eé]tric|optimizaci[oó]n|\bshm\b|gemelo digital|inteligencia artificial|\bia\b|machine learning/i,
    files: [`${K}/herramientas-digitales/ingenieria-estructural-digital.md`] },
  { rx: /euroc[oó]digo|c[oó]digo(s)? (mundial|internacional)|qu[eé] estudiar|maestr[ií]a|posgrado|asce|tms|nds| aci vs|nbcc|temario/i,
    files: [`${K}/referencia/mapa-codigos-posgrados.md`] },
  { rx: /armadura|space frame|arco|cascar[oó]n|cable|membrana|candela|edificio alto|rascacielos|tubo|diagrid|gran claro|hypar|silo|torre/i,
    files: [`${K}/elementos-especiales/estructuras-gran-claro.md`] },
];

// Fallback cuando ninguna regla dispara: criterio senior + índice (el modelo decide con su identidad).
const FALLBACK = [`${K}/diseno-conceptual/criterio-estructurista-senior.md`];

const MAX_FILES = 3;

export function route(question) {
  const hits = [];
  for (const rule of RULES) {
    if (rule.rx.test(question)) {
      for (const f of rule.files) if (!hits.includes(f)) hits.push(f);
    }
    if (hits.length >= MAX_FILES) break;
  }
  return hits.length ? hits.slice(0, MAX_FILES) : FALLBACK;
}
