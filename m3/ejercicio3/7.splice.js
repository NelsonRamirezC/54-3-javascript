//.splice AGREGA ELEMENTOS O ELIMINA ELEMENTOS EN POSICIONES DETERMINADAS POR NOSOTROS

let meses= ["Enero", "Febrero", "Abril", "Mayo"];

//UTILIZAR SPLICE PARA INGRESAR EL MES FALTANTE MARZO
//primer valor determina posición inicial
//segundo valor determina la cantidad de elementos a eliminar
//tercer valor (opcional) agrega nuevos elementos -> n cantidad
meses.splice(2, 0, "Marzo");

console.log(meses);