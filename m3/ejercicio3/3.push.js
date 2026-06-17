const estudiantes = [];

//AGREGAR ESTUDIANTES MEDIANTE PUSH (siempre agrega al final)
//AGREGAR 1 ELEMENTO A LA VEZ
estudiantes.push("Angel");
console.table(estudiantes);

//AGREGAR VARIOS ELEMENTOS A LA VEZ -> n cantidad
let nuevaCantidad = estudiantes.push("Felipe", "Francisco");
console.log("Nueva cantidad de elementos: ", nuevaCantidad);
console.table(estudiantes);

