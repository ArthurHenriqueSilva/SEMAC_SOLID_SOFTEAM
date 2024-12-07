import User from "../model/User";
import IUserRepository from "../repository/IUserRepository";

/**
 * Serviço que delega operações de busca e persistência de usuários para um repositório de usuários.
 * 
 * Esta classe implementa a interface `IUserRepository` e serve como um intermediário para
 * a execução das operações de busca e salvamento de usuários. Ela delega essas operações
 * para uma instância de `IUserRepository` que é injetada via dependência.
 * 
 * @class AnotherUserService
 * @implements {IUserRepository}
 * 
 * @example
 * const userRepository = new UserRepository();
 * const anotherUserService = new AnotherUserService(userRepository);
 * const user = await anotherUserService.findById(1);
 * await anotherUserService.save(new User(1, "Arthur Henrique", "arthur@email.com", "password"));
 */
export default class AnotherUserService implements IUserRepository {
    /**
     * Cria uma instância do serviço de usuários, injetando um repositório de usuários.
     * 
     * @constructor
     * @param {IUserRepository} userRepository - O repositório de usuários a ser utilizado pelas operações de busca e salvamento.
     */
    constructor(
        private userRepository: IUserRepository
    ) {}

    /**
     * Busca um usuário pelo seu identificador único.
     * 
     * @param {number} id - O identificador único do usuário a ser buscado.
     * @returns {Promise<User | undefined>} - Retorna uma promessa que resolve para o usuário encontrado ou `undefined` caso o usuário não seja encontrado.
     */
    async findById(id: number): Promise<User | undefined> {
        console.log(`Procurando por user id.${id}`);
        return await this.userRepository.findById(id);
    }

    /**
     * Salva um novo usuário.
     * 
     * @param {User} user - O objeto de usuário a ser salvo.
     * @returns {Promise<User>} - Retorna uma promessa que resolve para o usuário salvo.
     */
    async save(user: User): Promise<User> {
        console.log("Cadastrando user...");
        return await this.userRepository.save(user);
    }
}
