//CARACTERÍSTICAS DE FUNCIONES DE PRIMERA CLASE

function multiplicador(factor) {

    return function (x) {
        return x * factor;
    };
}

const duplicar = multiplicador(2);

console.log(duplicar(4));

const triplicar = multiplicador(3);

console.log(triplicar(10));
