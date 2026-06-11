//HISTORIAL DE TRANSACCIONES (SIMULA BASE DE DATOS)
let transacciones = [
    {id: 1, glosa: "Compra en línea", monto: 5000},
    {id: 2, glosa: "Depósito", monto: 10000},
    {id: 3, glosa: "Transferencia recibida", monto: 750000},
    {id: 4, glosa: "Cobro administración mensual", monto: 500}
];


//CAPTURAMOS LISTA DEL DOM DONDE QUEREMOS MOSTRAR LAS TRANSACCIONES

const listaTransaccionesEl =  document.getElementById("listaTransacciones");


//UTILIZAMOS UN CICLO / BUCLE PARA RECORRER LA LISTA

let elementosLi = "";
for (const transaccion of transacciones) {

    elementosLi += `<li class="list-group-item border border-info">${transaccion.glosa} - $${transaccion.monto}</li>`;
}

//ASIGNAR LOS ELEMENTOS A LA UL DEL DOM
listaTransaccionesEl.innerHTML = elementosLi;




//AGREGAR BALANCE INICIAL

let balanceInicial = 100_000;

//CAPTURAR ELEMENTO DEL DOM

const montoBalance = document.getElementById("montoBalance");

//MANIPuLACIÓN DEL EMENTO DEL DOM
montoBalance.innerText = balanceInicial;

