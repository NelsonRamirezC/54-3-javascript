//DESTRUCTURING ARRAYS

let personas = ["pedro", "juan", "diego", "marta"];

let [primero, segundo, ...resto] = personas;

console.log(primero);
console.log(segundo);
console.log(resto);