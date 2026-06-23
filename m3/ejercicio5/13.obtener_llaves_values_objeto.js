const persona = {
    nombre: "Juan",
    apellido: "Villa",
    fechaNacimiento: "02/03/1995",
    run: "1-1"
};

//OBTENER LAS LLAVES
const llaves = Object.keys(persona);

console.log("Laves", llaves);

//OBTENER LOS VALORES
const valores= Object.values(persona);

console.log("Valores", valores);

//OBTENER LAS LLAVES Y VALORES

const entradas = Object.entries(persona);

console.log("Entradas", entradas);

for (const entrada of entradas) {
    
    console.log(entrada[0], ":", entrada[1]);
}