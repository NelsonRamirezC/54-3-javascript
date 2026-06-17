//CONOCER EL TOTA A PAGAR EN SUELDOS
let sueldos = [500_000, 800_000, 600_000, 1_000_000];

let totalAPagar = 0;

for (let index = 0; index < sueldos.length; index++) {
    const sueldo = sueldos[index];
    totalAPagar += sueldo;
};

console.log("Total a pagar en remuneraciones:", totalAPagar);