const tareas = [];

const generarID = () => {
    const timestamp = Date.now().toString(36);
    const aleatorio = Math.random().toString(36).substring(2, 5);
    return `id-${timestamp}-${aleatorio}`;
};

class Tarea {
    //DEFINIMOS LAS PROPIEDADES
    constructor(nombre, descripcion, fechaIngreso, fechaLimite, prioridad) {
        this.id = generarID();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaIngreso = fechaIngreso;
        this.fechaLimite = fechaLimite;
        this.prioridad = prioridad;
    }

    //AQUÍ SE DEFINE LOS MÉTODOS

    crear() {
        tareas.push(this);
    };

    actualizar(){

    };

    eliminar(){

    };
};

//CREANDO INSTANCIAS DE CLASE (OBJETOS)

const t1 = new Tarea("Comprar materiales", "Compras corchetes de media pulgada", "01/07/2026", "03/07/2026", 3);

const t2 = new Tarea("Tarea 2", "descripción tarea 2", "01/07/2026", "04/07/2026", 3);

t1.crear();
t2.crear();

console.log("Lista de tareas:", tareas);