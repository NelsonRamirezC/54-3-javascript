const persona = {
    nombre: "Juan",
    edad: 30,
    saludar(){
        console.log("Hola, mi nombre es " + this.nombre); 
    }
};

let propiedad = "edad";
console.log(persona.nombre); //NOTACIÓN DE PUNTO
console.log(persona["edad"]); //NOTACIÓN DE CORCHETES
persona.saludar();