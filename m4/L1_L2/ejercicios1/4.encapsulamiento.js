class CuentaBancaria {
    #saldo; // Propiedad privada (ES6)

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    //SETTER
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: ${this.#saldo}`);
        } else {
            console.log("El monto debe ser mayor a 0.");
        }
    }

    //SETTER
    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.#saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }

    //GETTER
    verSaldo() {
        console.log(`Saldo actual: ${this.#saldo}`);
    }
}

const cuenta1 = new CuentaBancaria(5000);

cuenta1.depositar(1000);

cuenta1.retirar(500);

cuenta1.verSaldo();

console.log(cuenta1);