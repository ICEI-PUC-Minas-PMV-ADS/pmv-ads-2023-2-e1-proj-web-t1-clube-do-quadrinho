import { logout } from "../../services/account-service/account-service.js"

document.getElementById("sair").addEventListener("click", () => {
    logout();
    window.location.replace(`${window.location.origin} /paginas/login/login-page.html`);
});