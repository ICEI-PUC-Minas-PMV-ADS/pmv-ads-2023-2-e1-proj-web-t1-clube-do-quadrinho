import { logout } from "../../services/account-service/account-service.js"

document.getElementById("sair").addEventListener("click", () => {
    logout();
    window.location.replace(`${window.location.origin}/pmv-ads-2023-2-e1-proj-web-t1-clube-do-quadrinho/paginas/login/login-page.html`);
});