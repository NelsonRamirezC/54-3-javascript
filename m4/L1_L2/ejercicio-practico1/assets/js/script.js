import Calculadora from "./clases/Calculadora.js";

//evento botón sumar 2 valores

const sumar2Valores = document.getElementById("sumar2Valores");

sumar2Valores.addEventListener("click", () => {
    let valor1 = prompt("Ingresa el primer valor.");
    let valor2 = prompt("Ingresa el segundo valor.");

    let resultado = Calculadora.sumar(valor1, valor2);

    alert(`El resultado de la suma de: ${valor1} y ${valor2} es: ${resultado}`);
});

//evento botón sumarVarios

const sumarVarios = document.getElementById("sumarVarios");

sumarVarios.addEventListener("click", () => {
    let cantidad = prompt("Cuántos valores quieres sumar?");
    cantidad = Number(cantidad);

    if (isNaN(cantidad)) {
        return alert("Valor ingresado no es un número, vuelva a intentar.");
    }

    const valores = [];

    for (let iterador = 1; iterador <= cantidad; iterador++) {
        let valor = Number(prompt(`Ingresa el valor N° ${iterador} a sumar.`));

        valores.push(valor);
    }

    //USAMOS EL OPERADOR SPREAD

    try {
        //AQUÍ SE AGREGA EL CÓDIGO QUE PUEDE TENER ERRORES.
        let resultado = Calculadora.sumarVarios(...valores);

        let respuesta =
            "El resultado de la suma de los siguientes valores:\n" +
            `[${valores.join(", ")}]\n\n` +
            `Resultado: ${resultado}`;

        alert(respuesta);
    } catch (error) {
        //AQUÍ SE CINTROLAN LOS ERRORES
        alert(error);
    }
});
