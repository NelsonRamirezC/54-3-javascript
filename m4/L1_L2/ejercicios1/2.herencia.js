class Persona {
    constructor(rut, nombre, apellido) {
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

//LA HERENCIA SE LOGRA UTILIZANDO extends
class Cliente extends Persona {
    constructor(rut, nombre, apellido, peso, altura) {
        super(rut, nombre, apellido);
        this.peso = peso;
        this.altura = altura;
    }

    IMC() {
        return this.peso / this.altura ** this.altura;
    };
};

class Empleado extends Persona {
    constructor(rut, nombre, apellido, cargo, sueldo) {
        super(rut, nombre, apellido);
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

    aumentarSueldo(aumento) {
        this.sueldo += aumento;
        return this.sueldo;
    };
};

const cliente1 = new Cliente("1-1", "Pedro", "Soto", 75, 1.8);

const empleado1 = new Empleado("2-2", "José", "Figueroa", "Vendedor", 850_000);


console.log("Sueldo anterior:", empleado1.sueldo);
let nuevoSueldo = empleado1.aumentarSueldo(7500);
console.log("Nuevo sueldo:", empleado1.sueldo);
