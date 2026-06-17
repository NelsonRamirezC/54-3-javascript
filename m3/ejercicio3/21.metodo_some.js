//.some() -> DEVUELVE TRUE O FALSE SI PASA O NO EL TEST
// 
let personas = ["Pedro", "Carlos", "Marta", "Juana"];

let nombreBuscado = "Pedro";

let resultado = personas.some(persona => persona == nombreBuscado);

if(resultado){
    console.log(nombreBuscado, "Existe en el Array");
}else{
    console.log(nombreBuscado, "No existe en el Array");
}