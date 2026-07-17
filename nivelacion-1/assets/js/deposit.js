import Usuario from "./clases/Usuario.js";

let usuarioStorage = localStorage.getItem("usuario");

if(!usuarioStorage){
    location.href = "./index.html"; 
}

usuarioStorage = JSON.parse(usuarioStorage);

const formDeposit = document.getElementById("form-deposit");
const outputSaldo = document.getElementById("output-saldo");

outputSaldo.innerText = usuarioStorage.wallet.saldo;

if(formDeposit){

    formDeposit.addEventListener("submit", (event) => {

        try {
            event.preventDefault();
    
            const usuario = new Usuario();

            usuario.actualizar();

            
            let monto = Number(document.getElementById("deposit-monto").value);

            let nuevoMonto = usuario.wallet.depositar(monto);

            usuario.guardar();

            let mensaje = `Se ha depositado correctamente el  monto de ${monto}.`;
            alert(mensaje);

            outputSaldo.innerText = nuevoMonto;

            formDeposit.reset();

        } catch (error) {
            alert("Se ha producido un error: "+ error);
            console.log(error);
        }
    })
}


