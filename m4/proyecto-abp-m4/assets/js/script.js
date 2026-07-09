import GestorTareas from "./clases/GestorTareas.js";

const gestorTareas = new GestorTareas();

const crearFilaTabla = (tarea) => {
    let { id, descripcion, estado, fechaCreacion } = tarea;

    let estadoTexto = estado ? "Finalizado" : "Pendiente";
    return `
        <tr>
            <th scope="row">${id}</th>
                <td>${descripcion}</td>
                <td>${estadoTexto}</td>
                <td>${fechaCreacion}</td>
                <td>
                    <button class="btn btn-warning" data-id="${id}">Cambiar Estado</button>
                    <button class="btn btn-danger" data-id="${id}">Eliminar</button>
                </td>
        </tr> `;
};

const actualizarTablaTareas = (tareas = []) => {
    if (tareas.length == 0) return;

    let acumuladorFilas = "";
    for (const tarea of tareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    }

    document.querySelector("#tabla-tareas tbody").innerHTML = acumuladorFilas;
};

const alternarBotonesCrearTarea = () => {
    const botonCrearTarea = document.getElementById("btn-crear-tarea");
    const botonCrearTareaSpinner = document.getElementById("btn-crear-tarea-spinner");
    botonCrearTarea.classList.toggle("d-none");
    botonCrearTareaSpinner.classList.toggle("d-none");
};

//EVENTO FOMULARIO PARA CREAR TAREAS

const formCrearTarea = document.getElementById("form-crear-tarea");

formCrearTarea.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        //OBTENER EL VALOR INGRESADO POR EL USUARIO EN EL INPUT CON NAME descripcion
        const dataForm = new FormData(formCrearTarea);
        let descripcion = dataForm.get("descripcion");

        const tarea = gestorTareas.crearTarea(descripcion);

        //ALTERNAR ENTRE MOSTRAR Y OCULTAR UN BOTÓN PARA EVITAR QUE EL USUARIO REALICE MÁS DE 1 CLIC
        alternarBotonesCrearTarea();

        setTimeout(() => {
            alert(
                `Se ha creado correctamente la tarea: ${tarea.descripcion}.\nID: ${tarea.id}`,
            );

            const tareas = gestorTareas.obtenerTareas();

            actualizarTablaTareas(tareas);

            //regreso botones a la normalidad
            alternarBotonesCrearTarea();

            //TERMINANDO DE CREAR EL FORMULARIO LIMPIAMOS EL INPUT
            formCrearTarea.reset();
        }, 1500);
    } catch (error) {
        console.log(error);
    }
});
