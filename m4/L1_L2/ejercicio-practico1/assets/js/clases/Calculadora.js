//LAS FUNCIONES ESTATICAS NO NECESITAN DE INSTANCIAR LA CLASE
class Calculadora {
    static sumar(valor1, valor2) {
        valor1 = Number(valor1);
        valor2 = Number(valor2);

        let suma = valor1 + valor2;
        return suma;
    }

    static sumarVarios(...valores) {
        //OPERDOR REST

        //VALIDAR SI DENTRO DEL ARRAY HAY VALORES NO NÚMERICOS

        let validacionNan = valores.some((valor) => isNaN(Number(valor)));

        if (validacionNan) {
            throw new Error(
                "No se pueden sumar valores que no son números válidos!",
            );
        };

        let suma = 0;

        for (const valor of valores) {
            suma += Number(valor);
        }

        return suma;
    }

    static restar(valor1, valor2) {
        let resta = valor1 - valor2;
        return resta;
    }
}

//CON ESTA INSTRUCCIÓN EXPORTAMOS UN OBJETO / VARIABLES / ETC
//PROPÓSITO: SER USADO EN OTROS ARCHIVOS
//EXPORT DEFAULT PERMITE EXPORTAR 1 SÓLO ELEMENTO
export default Calculadora;
