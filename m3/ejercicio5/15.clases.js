class Persona {
    // DEFINICIÓN DE ATRIBUTOS
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    };
};

const persona1 = new Persona("Pedro", "Soto", 65);
const persona2 = new Persona("Mario", "Villegas", 40);

const listaPersonas = [persona1, persona2];

console.log("LISTADO DE PERSONAS:");
listaPersonas.forEach((persona, index) => {
    let mensaje = `${index + 1}.- ${persona.nombreCompleto()}`;
    
    console.log(mensaje);
});
