const persona = {
    nombre: "Juan",
    apellido: "Soto",
    edad: 30,
    saludar(){
        console.log("Hola, mi nombre es " + this.nombre); 
    }
};

//DESESTRUCTURACIÓN DE UN OBJETO
let { nombre, apellido } = persona;

let mensaje = `Hola ${nombre} ${apellido}, gracias por visitarnos`;

console.log(mensaje);
