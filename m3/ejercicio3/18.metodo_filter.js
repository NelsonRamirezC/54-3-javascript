// FILTER PERMITE FILTAR SEGÚN UNA O VARIAS CONDICONES
//RETORNA N VALORES
// SI NINGÚN ELEMENTO CUMPLE CON EL FILTRO RETORNA UN ARRAY VACÍO

let numeros = [2,3,4,5,7,13,20,21,56,78,99,101];

//FILTRAR PARES
let pares = numeros.filter(numero => (numero % 2) == 0);

console.log("Pares: ", pares);

//FILTRAR IMPARES
let impares = numeros.filter(numero => (numero % 2) == 1);

console.log("Impares: ", impares);
