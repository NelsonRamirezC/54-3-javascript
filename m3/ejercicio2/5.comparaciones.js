// <, >, <=, >=, !=, ==, ===, !==

//SI USUARIO ES NO ES ADMINISTRADOR ENTONCES PROHIBIMOS EL ACCESO

let tipoUsuario = "administrador";


if(tipoUsuario != "administrador"){
    console.log("Usted no puede ingresar.");
}else {
    console.log("Acceso permitido.");
}