import User from "../model/User";

/**
 * Interface para operações de busca de usuários no sistema.
 * 
 * @interface IUserFinder
 */
export default interface IUserFinder {
    /**
     * Busca um usuário pelo seu identificador único.
     * 
     * @param {number} id - O identificador único do usuário a ser buscado.
     * @returns {Promise<User | undefined>} - Retorna uma promessa que resolve para o usuário encontrado ou `undefined` caso o usuário não seja encontrado.
     */
    findById(id: number): Promise<User | undefined>;
}
