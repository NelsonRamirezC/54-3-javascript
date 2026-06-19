//SUMAR MILTIPLES VALORES

function sumar(...valores){ // los ... (operador rest) guarda los valores en un array
    return valores.reduce((acc, currValue) => acc + Number(currValue), 0);
};


let resultadoSuma = sumar(2,5);

if(isNaN(resultadoSuma)){
    console.log("Revise los valores ingresados...");
}else {
    console.log("Resultado:", resultadoSuma);
}
