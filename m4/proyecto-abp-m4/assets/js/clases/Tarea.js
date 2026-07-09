class Tarea {
    constructor(descripcion) {
        // Genera un ID único universal (UUID v4) usando la API crypto nativa del navegador
        this.id = crypto.randomUUID().slice(0,6);
        this.descripcion = descripcion;
        // Estado false -> Pendiente / true -> Finalizada
        this.estado = false;
        // Fecha de creación formateada con Moment.js
        this.fechaCreacion = moment().format("DD/MM/YYYY");
    }
}

export default Tarea;