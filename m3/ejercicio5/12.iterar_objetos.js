//USAR FOR IN PARA ITERAR OBJETOS
const persona = {
    nombre: "Juan",
    apellido: "Villa",
    fechaNacimiento: "02/03/1995",
    run: "1-1"
};


for (const key in persona) {
    let valor = persona[key];
    console.log(key,":", valor);
}