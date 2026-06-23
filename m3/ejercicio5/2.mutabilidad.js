let persona1 = {nombre:"Pedro", apellido: "Castillo"};

console.log("Nombre persona1:", persona1.nombre);

let persona2 = persona1;

persona2.nombre = "Juan";

console.log("revisión de objetos después del cambio:")

console.log("persona1:", persona1);
console.log("persona2:", persona2);