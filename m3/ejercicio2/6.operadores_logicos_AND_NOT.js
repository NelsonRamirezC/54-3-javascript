//OR (o lógico) -> ||
//AND (y lógico) -> &&
// NOT (negación) -> !

//se utilizan en conjunto con operadores de comparación
// <, >, <=, >=, !=, ==, ===, !==

//EJEMPLO AND -> APROBACIÓN CURSO BOOTCAMP

// PROMEDIO NOTAS : >= 4.0
// CONECTIVIDAD: >= 145 HORAS
// PORCENTAJE ACTIVIDADES OBLIGATORIAS: >= 90 %

let promedio = 4.3;
let conectividadHrs = 190;
let porcentajeActividades = 95;

//regla promedio
let reglaPromedio = promedio >= 4; // true o false
//Regla conectividad
let reglaConectividad = conectividadHrs >= 145; // true o false
//Regla conectividad
let reglActividades = porcentajeActividades >= 90; // true o false

if(reglaPromedio && reglaConectividad && reglActividades){ //true - true - true
    console.log("Felicitaciones, usted cumple con los criterios de aprobación.");
}else {
    console.log("Lo sentimos, usted no cumple los criterios de aprobación.");
    console.log("Usted no cumple la suguiente/s reglas:");

    if(!reglaPromedio){
        console.log("- Usted no tiene promedio suficiente (MAYOR O IGUAL A 4.0), su promedio es:", promedio);
    };

    if(!reglaConectividad){
        console.log("- Usted no cuenta con las horas mínimas de conectividad (MAYOR O IGUAL A 145 hrs), su conectividad es de:", conectividadHrs, "hrs.");
    }

    if(!reglActividades){
        console.log("- Su porcentaje de actividades es inferior al 90 % exigido, su porcentaje es de:", porcentajeActividades, "%.");
    };
}
