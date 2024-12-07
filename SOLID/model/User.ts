/**
 * Representa um usuário no sistema.
 * 
 * @class User
 */
export default class User {
    /**
     * Cria uma instância de User.
     * 
     * @constructor
     * @param {number} id - O identificador único do usuário.
     * @param {string} name - O nome do usuário.
     * @param {string} email - O endereço de e-mail do usuário.
     * @param {string} password - A senha do usuário.
     */
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string
    ) {}
}
