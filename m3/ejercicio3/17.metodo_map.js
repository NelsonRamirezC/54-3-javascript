let personas = ["Pedro", "Carlos", "Marta", "Juana"];

// function convertirMayusculas(palabra){
//     return palabra.toUpperCase();
// };


let personasMayusculas = personas.map(persona => persona.toUpperCase());

console.log("Array original:", personas);
console.log("Array convertido:", personasMayusculas);