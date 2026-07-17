class Wallet {
    constructor(saldo){
        this.saldo = saldo;
    }

    depositar(monto){
        this.saldo += Number(monto);
        return this.saldo;
    }
}


export default Wallet;

`
Atributos:
contactos
transacciones

Comportamientos:
enviar,
depositar,
descontar,
sumar
`
