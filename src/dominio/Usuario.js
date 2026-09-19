export class Usuario {
    constructor(login, senha) {
        this.login = login;
        this.senha = senha;
    }
    autenticar(senhaDigital) {
        return this.senha === senhaDigital;
    }
}