
//CAPTURAMOS EL ELEMENTO FORMULARIO DEL DOM
const formLoginEl = document.getElementById("formLogin");

//SI EL ELEMENTO EXITE, EJECUTA EL BLOQUE VERDADERO
if(formLoginEl){

    const emailBD = "usuario1@gmail.com";
    const passwordBD ="123456";

    formLoginEl.addEventListener("submit", function(event){

        //DETENEMOS LAS ACCIONES POR DEFECTO DEL FORMULARIO Y CONTROLAMOS NOSOTROS EL EVENTO
        event.preventDefault();

        const formData = new FormData(formLoginEl);

        //CAPTURAMOS LOS VALORES DEL FORMLARIO A TRAVÉS DEL NOMBRE DEL ATRIBUTO NAME DEL INPUT
        let emailUsuario = formData.get("email");
        let passwordUsuario = formData.get("password");

        //EL OPERADOR LÓGICO AND (&&) OBLIGA A QUE SE CUMPLAN AMBAS CONDICIONES PARA EJECUTAR EL BLOQUE IF
        if(emailBD == emailUsuario && passwordBD == passwordUsuario){
            alert("Ha iniciado sesión correctamente!");

            //REDIRECCIÓN DEL USUARIO A LA PÁGINA menu.html

            location.href = "./menu.html";
        }else {
            alert("Error!, password y/o email incorrectos.");
        }


    });    
}