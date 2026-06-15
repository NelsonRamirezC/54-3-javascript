// OPERADOR LÓGICO OR (||)
//Debe cumplir al menos 1 condición

// BECA DE ESTUDIOS, CRITERIOS:
/*
- Estar cesante
- Trabajando, pero con sueldo inferior a 1.300.000
*/

let cesante = false;
let renta = 1_100_000;

if(cesante || renta < 1_300_000){
    console.log("Usted es candidato a beca.");
}else {
    console.log("Usted no cumple con los requisitos de beca.");
}