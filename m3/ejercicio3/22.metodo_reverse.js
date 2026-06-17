//.reverse() -> INVIERTE EN SENTIDO DEL ARRAY
let valores = [1,2,3,4,5,6,7,8];

valores.reverse(); //MODIFICA EL ORIGINAL

console.log(valores);


//MÉTODO .toReversed() -> hace lo mismo sin modificar el original (retorna un nuevo Array)

console.log(valores.toReversed());

console.log("Original:", valores);