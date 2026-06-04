let balanceInicial = 100_000;

//CAPTURAR ELEMENTO DEL DOM

const montoBalance = document.getElementById("montoBalance");

console.log(montoBalance); //ver elemento en consola

//MANIPuLACIÓN DEL EMENTO DEL DOM

montoBalance.innerText = balanceInicial;

//innerText sirve para obtener y asignar un contenido a un elemento;

//CONOCER EL CONTENIDO DE UN ELEMENTO
console.log("Valor del elemento:", montoBalance.innerText);
