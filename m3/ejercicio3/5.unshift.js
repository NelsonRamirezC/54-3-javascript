//.unshift -> PERMITE AGREGAR NUEVOS ELEMENTO AL PRINCIPIO DEL ARRAY

let personas = ["Pedro", "Carlos", "Marta", "Juana"];

//AGREGAMOS UN ELEMENTO AL PRINCIPIO
let nuevaCantidad = personas.unshift("Ana");

console.log("La nueva cantidad es:", nuevaCantidad);
console.log(personas); // OUTPUT: [ 'Ana', 'Pedro', 'Carlos', 'Marta', 'Juana' ]
console.table(personas);