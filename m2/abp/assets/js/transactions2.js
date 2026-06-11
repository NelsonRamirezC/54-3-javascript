// HISTORIAL DE TRANSACCIONES (SIMULA BASE DE DATOS)
const transacciones = [
    {id: 1, glosa: "Compra en línea", monto: 5000},
    {id: 2, glosa: "Depósito", monto: 10000},
    {id: 3, glosa: "Transferencia recibida", monto: 750000},
    {id: 4, glosa: "Cobro administración mensual", monto: 500}
];


// CAPTURAMOS LISTA DEL DOM DONDE QUEREMOS MOSTRAR LAS TRANSACCIONES
const listaTransaccionesEl = document.getElementById("listaTransacciones");

// Si el elemento existe, construimos los <li> usando DocumentFragment
if (listaTransaccionesEl) {
    const fragment = document.createDocumentFragment();

    for (const transaccion of transacciones) {
        const li = document.createElement('li');
        li.className = 'list-group-item border border-info';
        li.textContent = `${transaccion.glosa} - $${transaccion.monto}`;
        fragment.appendChild(li);
    }

    // Insertar todos los nodos de una sola vez evita reflows múltiples
    listaTransaccionesEl.appendChild(fragment);
}
