const login = (email, password) => {
    return new Promise((resolve, reject) => {
        let emailDB = "usuario@gmail.com";
        let passwordDB = "123456";

        setTimeout(() => {
            if (email == emailDB && password == passwordDB) {
                resolve("Credenciales ok!");
            } else {
                reject("Credenciales inválidas.");
            }
        }, 2000);
    });
};

let email = "usuario@gmail.com";
let password = "123456";


console.log("Iniciando programa...");

login(email, password)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((rechazo)=> {
        console.log("Motivo rechazo:", rechazo);
    })
    .finally(()=> {
        console.log("Programa terminado...");
    })