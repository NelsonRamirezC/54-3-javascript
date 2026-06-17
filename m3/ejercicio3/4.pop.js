//.pop NOS PERMITE ELIMINAR EL ÚLTIMO ELEMENTO DE UN ARRAY
// POP RETORNA EL ELEMENTO ELIMINADO

let personas = ["Pedro", "Marta", "Juan"];

console.log("Lista original");
console.table(personas);

//ELIMINAMOS EL ÚLTIMO ELEMENTO
let retorno = personas.pop();
console.log("Se ha eliminado a la siguiente persona:", retorno);

//ARRAY DESPUÉS DE LA ELIMINACIÓN
console.log("Arreglo después de la eliminación");
console.table(personas);
