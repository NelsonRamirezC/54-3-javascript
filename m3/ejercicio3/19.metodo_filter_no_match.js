let notas = [4.5, 6.5, 4.8, 6.5, 3.5];

//ALUMNOS REPROBADOS

let reprobados = notas.filter(nota => nota < 4);

if(reprobados.length > 0){
    console.log("ESTUDANTES REPROBADOS:", reprobados.length);
    console.table(reprobados);
}else{
    console.log("NO EXISTEN ESTUDIANTES REPROBADOS.");
}

