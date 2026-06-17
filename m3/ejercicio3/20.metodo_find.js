//.find -> ENCUENTRA EL PRIMER ELEMENTO QUE COINCIDA CON EL TEST DE BUSQUEDA
// SI NO SE ENCUENTRA COINCIDENCIA (NO PASA TEST) RETORNA UN UNDEFINED (CONSIDERA FALSO EN TERMINOS BOOLEANOS)
let personas = ["Pedro", "Carlos", "Marta", "Juana"];

let nombreBuscado = "Pedro";

let foundPersona = personas.find(persona => persona == nombreBuscado);

if(foundPersona){
    console.log(nombreBuscado, "Existe en la base de datos...");
}else {
    console.log(nombreBuscado, "No existe en la base de datos...");
}
