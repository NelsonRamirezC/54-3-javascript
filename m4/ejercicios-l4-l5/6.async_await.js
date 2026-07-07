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


const procesarLogin = async ( ) => {
    try {
        let respuesta = await login("usuario@gmail.com", "123456");
        console.log(respuesta);
        console.log("Redireccionado al usuario...");
        
    } catch (error) {
        console.error("Error:", error);
    }
}

procesarLogin();


console.log("Resto del código...");