const person = {
    firstname: "Juan",
    lastname: "Soto",
    age: 30,
};

let {firstname: nombre, lastname: apellido} = person;

console.log(nombre);
console.log(apellido);