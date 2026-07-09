import Tarea from "./clases/Tarea.js";

export const crearFilaTabla = (tarea) => {
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


export const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    const tareas = data.map(tarea => {
        const nuevaTarea = new Tarea(tarea.title);
        nuevaTarea.estado = tarea.completed;
        return nuevaTarea
    })

    return tareas;
};

