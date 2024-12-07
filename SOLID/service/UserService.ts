import User from "../model/User";
import IUserRepository from "../repository/IUserRepository";

/**
 * Serviço responsável pelas operações de criação e consulta de usuários.
 * 
 * Esta classe implementa a lógica de negócios relacionada aos usuários, como criação e recuperação
 * de usuários. Ela interage com o repositório de usuários para persistir e buscar informações dos usuários.
 * 
 * @class UserService
 * 
 * @example
 * const userRepository = new UserRepository();
 * const userService = new UserService(userRepository);
 * const newUser = await userService.createUser("Arthur Henrique", "arthur@email.com", "password123");
 * const user = await userService.getUserById(1);
 */
export default class UserService {
    /**
     * Cria uma instância do serviço de usuários, injetando o repositório de usuários.
     * 
     * @constructor
     * @param {IUserRepository} userRepository - O repositório de usuários a ser utilizado pelas operações de criação e consulta.
     */
    constructor(
        private userRepository: IUserRepository
    ) {}

    /**
     * Cria um novo usuário e o salva no repositório.
     * 
     * @param {string} name - O nome do novo usuário.
     * @param {string} email - O endereço de e-mail do novo usuário.
     * @param {string} password - A senha do novo usuário.
     * @returns {Promise<User>} - Retorna uma promessa que resolve para o usuário recém-criado.
     */
    public async createUser(name: string, email: string, password: string): Promise<User> {
        const user = new User(Date.now(), name, email, password); // Cria um novo usuário com um id baseado no timestamp.
        return await this.userRepository.save(user);
    }

    /**
     * Recupera um usuário pelo seu identificador único.
     * 
     * @param {number} id - O identificador único do usuário a ser recuperado.
     * @returns {Promise<User | undefined>} - Retorna uma promessa que resolve para o usuário encontrado ou `undefined` caso não seja encontrado.
     */
    public async getUserById(id: number): Promise<User | undefined> {
        return await this.userRepository.findById(id);
    }
}
