let textos = ["á", "é", "í", "ó", "ú", "ñ", "Á", "É", "Í",];

const comparador = (a, b) => a.localeCompare(b, 'es', { sensitivity : 'base' });

textos.sort(comparador);
console.log(textos);