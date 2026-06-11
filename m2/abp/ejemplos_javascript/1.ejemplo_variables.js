// VARIABLES

let nombre = "Carlos"; //string
let edad = 45; // Number -> int
let imc = 19.5; // Number -> decimal -> float
let estado = true; // puede ser true o false -> Tipo boolean
let notas = [5, 6, 7, 3, 4]; // Array
let direccion = {calle: "Pasaje 1", numero: "A58"}; // Object

//imprimir variables
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("IMC:", imc);
console.log("Estado:", estado);
console.log("Notas:", notas);
console.log("Primera nota:", notas[0]);
let ultimoIndice = notas.length - 1;
console.log("Última nota:", notas[ultimoIndice]);
console.log("Calle:", direccion.calle);
console.log("Número casa:", direccion["numero"]);