const persona = {};

//ASIGNACIÓN DE VALOR
persona.nombre = "Pedro";
persona.apellido = "Castillo";
persona.edad = 25;
persona.fechaNacimiento = "01/03/2001";

//ELIMINAR PROPIEDADES DE UN OBJETO
delete persona.edad;

console.log(persona);