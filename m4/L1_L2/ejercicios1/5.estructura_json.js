class Persona {
    constructor(rut, nombre, apellido) {
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
};

const persona1 = new Persona("1-1", "Miguel", "Valencia");

//TRANSFORMAR UN OBJETO EN UN STRING CON FORMATO OBJECTO DE JAVASCRIPT
const persona1Json = JSON.stringify(persona1);

console.log(typeof(persona1Json)); //String
console.log(persona1Json);


//CONVERTIR JSON A OBJECT JAVASCRIPT
//IMPORTANTE, SE PIERDE LA REFERENCIA COMO INSTANCIA DE CLASE Persona Y SE CONVIERTE EN UN OBJETO LITERAL

const persona1Object= JSON.parse(persona1Json);

console.log(persona1Object); // VUELVE A SER UN OBJETO JS PERO, LITERAL
