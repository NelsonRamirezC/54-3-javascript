let prototipo = {
    nombre: "nombre...",
    saludar() {
        console.log("Hola!");
    },
};


let nuevoObjeto = Object.create(prototipo);

nuevoObjeto.saludar(); // "Hola!"

nuevoObjeto.nombre = "Pedro";
console.log(nuevoObjeto.nombre);