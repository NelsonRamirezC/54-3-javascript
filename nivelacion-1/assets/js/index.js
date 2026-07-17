import Usuario from "./clases/Usuario.js";
const linkLogout = document.getElementById("link-logout");
const linkLogin = document.getElementById("link-login");
const linkSendMoney = document.getElementById("link-send-money");
const linkDeposit = document.getElementById("link-deposit");


linkLogout.addEventListener("click", ()=> {
    
    alert("Cerrando sesión...");

    Usuario.logout();

    location.href = "./index.html";
});


const main = () => {
    let usuarioStorage = localStorage.getItem("usuario");

    if(usuarioStorage){
        linkLogout.classList.remove("d-none");
        linkSendMoney.classList.remove("d-none");
        linkDeposit.classList.remove("d-none");

        linkLogin.classList.add("d-none");
    }
}

main();