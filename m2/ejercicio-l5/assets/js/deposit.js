let balanceInicial = 100_000;

//CAPTURAR ELEMENTO DEL DOM

const montoBalance = document.getElementById("montoBalance");

//MANIPuLACIÓN DEL EMENTO DEL DOM
montoBalance.innerText = balanceInicial;


//EVENTO PARA CAPTURAR FORMULARIO Y CONTROLAR EVENTO SUBMIT

const formDeposito = document.getElementById("formDeposito");

formDeposito.addEventListener("submit", function(event){

    //PREVENIR EVENTO POR DEFECTO
    event.preventDefault();

    //AQUÍ CAPTURAMOS EL VALOR INGRESADO POR EL USUARIO EN EL INPUT
    let montoDeposito = document.getElementById("monto").value;

    //AQUÍ REALIZAMOS LA CONVERSIÓN DE STRING A NUMBER
    montoDeposito = Number(montoDeposito);

    let balance = Number(montoBalance.innerText);

    let nuevoBalance = balance  + montoDeposito;

    //VOLVEMOS A REASIGNAR AL ELEMENTO DEL DOM EL NUEVO BALANCE
    montoBalance.innerText = nuevoBalance;

    //REINICIAR EL FORMULARIO
    formDeposito.reset();

    //MENSAJE AL USUARIO DE ÉXITO
    alert(`Se agregó un total de: ${montoDeposito}, siendo su nuevo balance: ${nuevoBalance}`);

});
