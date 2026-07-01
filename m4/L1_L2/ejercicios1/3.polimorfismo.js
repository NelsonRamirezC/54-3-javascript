class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comunicarse() {
        console.log("método genérico...");
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    comunicarse() {
        console.log("Guaf Guaf");
    }
}

class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    comunicarse() {
        console.log("Miau Miau");
    }
}


const gato1 = new Gato("Cuchito");
const perro1 = new Perro("Pepito");

const animales = [gato1, perro1];

for (const animal of animales) {
    animal.comunicarse();
};