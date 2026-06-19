
//Función regular / clásica (es5 < 2015)

let numero1 = 10;

function sumar(numero1, numero2) {
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let resultado = numero1 + numero2;
    
    if(isNaN(resultado)){
        console.log("Se intentó sumar valores que no son números.");
    }else{
        console.log("Suma:", resultado);
    }
};

sumar(2, 9);
sumar("3", 9);
sumar(2, "8");
sumar(2, "a");

