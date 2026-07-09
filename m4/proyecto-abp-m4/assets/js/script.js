import GestorTareas from "./clases/GestorTareas.js";

const gestorTareas = new GestorTareas();

const crearFilaTabla = (tarea) => {
    let { id, descripcion, estado, fechaCreacion } = tarea;

    let estadoTexto = estado ? "Finalizado" : "Pendiente";

    let estiloBagde = estado ? "text-bg-success" : "text-bg-warning";
    return `
        <tr>
            <th scope="row">${id}</th>
                <td>${descripcion}</td>
                <td>
                    <span class="badge ${estiloBagde}">${estadoTexto}</span></td>
                <td>${fechaCreacion}</td>
                <td>
                    <button class="btn btn-warning btn-cambiar-estado" data-id="${id}">Cambiar Estado</button>
                    <button class="btn btn-danger btn-eliminar-tarea" data-id="${id}">Eliminar</button>
                </td>
        </tr> `;
};

const mostrarStatsTareas = () => {
    document.getElementById("span-tareas-total").innerText =
        gestorTareas.cantidadTareas();
    document.getElementById("span-tareas-pendientes").innerText =
        gestorTareas.cantidadTareasPendientes();
    document.getElementById("span-tareas-finalizadas").innerText =
        gestorTareas.cantidadTareasFinalizadas();
};

const actualizarTablaTareas = (tareas = []) => {
    mostrarStatsTareas();

    if (tareas.length == 0) {
        document.querySelector("#tabla-tareas").classList.add("d-none");
        document
            .querySelector("#mensaje-sin-tareas")
            .classList.remove("d-none");
        return;
    }

    document.querySelector("#tabla-tareas").classList.remove("d-none");
    document.querySelector("#mensaje-sin-tareas").classList.add("d-none");

    let acumuladorFilas = "";
    for (const tarea of tareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    }

    document.querySelector("#tabla-tareas tbody").innerHTML = acumuladorFilas;
};

const alternarBotonesCrearTarea = () => {
    const botonCrearTarea = document.getElementById("btn-crear-tarea");
    const botonCrearTareaSpinner = document.getElementById(
        "btn-crear-tarea-spinner",
    );
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

        setTimeout(async () => {
            alert(
                `Se ha creado correctamente la tarea: ${tarea.descripcion}.\nID: ${tarea.id}`,
            );

            const tareas = await gestorTareas.obtenerTareas();

            actualizarTablaTareas(tareas);

            //regreso botones a la normalidad
            alternarBotonesCrearTarea();

            //TERMINANDO DE CREAR EL FORMULARIO LIMPIAMOS EL INPUT
            formCrearTarea.reset();
        }, 1000);
    } catch (error) {
        console.log(error);
    }
});

//DELEGACIÓN EVENTO BOTONES EDITAR Y ELIMINAR TAREAS

document
    .querySelector("#tabla-tareas tbody")
    .addEventListener("click", async (event) => {
        try {
            const elemento = event.target;

            if (elemento.tagName != "BUTTON") return;

            const id = elemento.dataset.id;

            if (elemento.className.includes("btn-cambiar-estado")) {
                //AQUÍ EDITAMOS EL ESTAMOS
                let confirmacion = false;

                let tarea = gestorTareas.obtenerTareaPorId(id);

                if (tarea.estado) {
                    confirmacion = confirm(
                        "Está seguro de remover el estado finalizado y dejar tarea pendiente?",
                    );
                } else {
                    confirmacion = confirm("Está seguro de finalizar a tarea?");
                }

                if (confirmacion) {
                    gestorTareas.cambiarEstadoTarea(id);
                }
            } else if (elemento.className.includes("btn-eliminar-tarea")) {
                //AQUÍ ELIMINAMOS LA TAREA

                let confirmacion = confirm(
                    `Está seguro de eliminar la tarea con id: ${id}?`,
                );

                if (!confirmacion) return;

                let respuesta = gestorTareas.eliminarTarea(id);

                if (respuesta) {
                    alert("Tarea eliminada correctamente");
                } else {
                    alert(
                        "Error al intentar eliminar la tarea, vuelva a intentar...",
                    );
                }
            }

            // AL FINAL ACTUALIZAR LA TABLA DE TAREAS

            const tareas = await gestorTareas.obtenerTareas();
            actualizarTablaTareas(tareas);
        } catch (error) {
            console.log(error);
        }
    });

//EVENTO DE CARGA INICIAL DE LA PÁGINA DESPUÉS DEL DOM

addEventListener("DOMContentLoaded", (event) => {
    setTimeout(async () => {
        try {
            const tareas = await gestorTareas.obtenerTareas();
            actualizarTablaTareas(tareas);
            document
                .getElementById("spinner-tabla-loader")
                .classList.add("d-none");
        } catch (error) {
            console.log(error);
        }
    }, 700);
});
