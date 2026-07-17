import Wallet from "./Wallet.js"
const getUsuarios = async () => {

    let url = location.origin+"/usuarios.json";
    const response = await fetch(url);
    const data = await response.json();

    return data;
}



class Usuario {
    constructor(){
        this.id = "";
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.wallet = ""
    }

    #guardarUsuarioStorage(){
        localStorage.setItem("usuario", JSON.stringify(this));
    }

    async login(email, password){
        let usuarios = await getUsuarios();
        let usuario = usuarios.find(
            u => u.email == email.toLowerCase() && u.password == password.toLowerCase()
        );

        if(usuario){
            this.id = usuario.id;
            this.nombre = usuario.nombre;
            this.apellido = usuario.apellido;
            this.email = usuario.email;
            this.wallet = new Wallet(usuario.saldo);
            
            this.#guardarUsuarioStorage();
            return true;
        }else{
            return false;
        }
    }

    static logout(){
        localStorage.clear();
    }
}


export default Usuario;