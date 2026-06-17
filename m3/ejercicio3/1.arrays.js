let personas = ["Pedro", "Carlos", "Marta", "Juana"];

// console.log(typeof(personas));

console.log(personas);
console.table(personas);

//ACCEDIENDO A VALORES / DATOS DE UN ARRAY MEDIANTE SU ÍNDICE
console.log("Primer elemento: ", personas[0]);
console.log("Primer elemento: ", personas[3]);

//PROPIEDAD .length ->
console.log("Cantidad personas: ", personas.length);

//ACCEDER AL ÚLTIMO ELEMENTO (length - 1)
let ultimoIndice = personas.length -1;
console.log("Primer elemento: ", personas[ultimoIndice]);

//CAMBIAR EL CONTENIDO DE UN ARRAY
personas[0] = "Mario";

console.log("Después del cambio de valor:");
console.table(personas);
