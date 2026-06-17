//CONTAR PARES E IMPARES
//CONOCER LA SUMA DE LOS PARES E IMPARES

let numeros = [1,3,4,5,8,13,15,18,20];

let pares = 0;
let impares = 0;
let sumaPares = 0;
let sumaImpares = 0;

for (const numero of numeros) {

    let residuo = numero % 2;

    if(residuo == 0){
        pares++;
        sumaPares += numero;
    }else {
        impares++;
        sumaImpares += numero;
    }
};

console.log("=".repeat(30));
console.log("Total de pares: ", pares);
console.log("Total suma de pares: ", sumaPares);
console.log("*".repeat(30));
console.log("Total impares:", impares);
console.log("Total suma de impares: ", sumaImpares);
console.log("=".repeat(30));