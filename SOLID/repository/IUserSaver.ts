import User from "../model/User";

/**
 * Interface que define o método para salvar um usuário no repositório.
 * 
 * Essa interface descreve o método necessário para persistir um usuário no sistema.
 * 
 * @interface IUserSaver
 */
export default interface IUserSaver {
    /**
     * Salva um novo usuário no sistema.
     * 
     * @param {User} user - O objeto de usuário a ser salvo.
     * @returns {Promise<User>} - Retorna uma promessa que resolve para o usuário salvo.
     */
    save(user: User): Promise<User>;
}
