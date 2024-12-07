import User from "../model/User";

/**
 * Interface que define os métodos a serem implementados pelo repositório de usuários.
 * 
 * Essa interface descreve os métodos essenciais para interação com os dados de usuários, como
 * a busca por um usuário específico e a persistência de um novo usuário.
 * 
 * @interface IUserRepository
 */
export default interface IUserRepository {
    /**
     * Busca um usuário pelo seu identificador único.
     * 
     * @param {number} id - O identificador único do usuário a ser buscado.
     * @returns {Promise<User | undefined>} - Retorna uma promessa que resolve para o usuário encontrado ou `undefined` caso o usuário não seja encontrado.
     */
    findById(id: number): Promise<User | undefined>;

    /**
     * Salva um novo usuário no repositório.
     * 
     * @param {User} user - O objeto de usuário a ser salvo.
     * @returns {Promise<User>} - Retorna uma promessa que resolve para o usuário salvo.
     */
    save(user: User): Promise<User>;
}
