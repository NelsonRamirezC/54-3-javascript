//SCOPE DE Y CONST

let nombre = "pedro";
const PI = 3.1416;

if(true){
    let nombre = "María";
    const PI = 3.14;

    console.log("Ejecutando dentro del bloque:");
    console.log(nombre);
    console.log(PI);
}


console.log("Ejecutando fuera del bloque.");
console.log(nombre);
console.log(PI);