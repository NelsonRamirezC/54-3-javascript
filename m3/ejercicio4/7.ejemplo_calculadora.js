function calculadora(numero1, numero2){
    //PRIVADO
    const sumar = function(){
        return numero1 + numero2;
    }

    const restar = function(){
        return numero1 - numero2;
    }

    //PÚBLICO
    return {
        sumar, restar
    }
};

let operaciones1 = calculadora(4,5);

console.log(operaciones1.sumar());
console.log(operaciones1.restar());

let operaciones2 = calculadora(2,6);
console.log(operaciones2.sumar());
console.log(operaciones2.restar());