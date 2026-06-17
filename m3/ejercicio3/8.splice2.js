//ELIMINANDO ELEMENTOS CON SPLICE

let semanaClases = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

//ELIMINAMOS JUEVES Y VIERNES DE LA SEMANA DE CLASES

//INDICAMOS EL INDICE INICIAL Y LA CANTIDAD DE ELEMENTOS A ELIMINAR

semanaClases.splice(3, 2);

console.log("Resultado Semana Clases:", semanaClases);
