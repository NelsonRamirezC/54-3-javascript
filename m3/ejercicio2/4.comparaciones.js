// <, >, <=, >=, !=, ==, ===, !==


//DETERMINAR QUÉ ESTUDIANTE ES MAYOR, EN CASO DE TENER LA MISMA EDAD MOSTRAR UN MENSAJE INDICANDO ESO

let edadEstudiante1 = 43;
let edadEstudiante2 = 43;

if(edadEstudiante1 > edadEstudiante2){
    console.log(`estudiante 1 (${edadEstudiante1} años) es mayor que estudiante 2 (${edadEstudiante2} años)`);
}else if(edadEstudiante2 > edadEstudiante1){
    console.log(`estudiante 2 (${edadEstudiante2} años) es mayor que estudiante 1 (${edadEstudiante1} años)`);
} else {
    console.log(`Ambos estudiantes tienen la misma edad (${edadEstudiante1} años)`);
}
