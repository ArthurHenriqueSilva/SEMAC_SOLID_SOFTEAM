import User from "../model/User";
import IUserRepository from "./IUserRepository";

/**
 * Responsável pelo acesso ao 'Banco de Dados' de usuários.
 * 
 * Esta classe implementa os métodos definidos pela interface `IUserRepository` para
 * interagir com os dados de usuários, fornecendo operações como salvar e buscar um usuário
 * por seu identificador único. A implementação é feita utilizando um array local como armazenamento.
 * 
 * @class UserRepository
 * @implements {IUserRepository}
 * 
 * @example
 * const userRepository = new UserRepository();
 * const newUser = await userRepository.save(new User(1, "Arthur Henrique", "arthur@email.com", "MYpassword123$!"));
 * const user = await userRepository.findById(1);
 */
export default class UserRepository implements IUserRepository {
    private users: User[] = [];

    /**
     * Busca um usuário pelo seu identificador único.
     * 
     * @param {number} id - O identificador único do usuário a ser buscado.
     * @returns {Promise<User | undefined>} - Retorna uma promessa que resolve para o usuário encontrado ou `undefined` caso o usuário não seja encontrado.
     */
    public async findById(id: number): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    /**
     * Salva um novo usuário no repositório.
     * 
     * @param {User} user - O objeto de usuário a ser salvo.
     * @returns {Promise<User>} - Retorna uma promessa que resolve para o usuário salvo.
     */
    public async save(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }
}

/*  
Podemos utilizar uma interface de repositório central ou aplicar o princípio ISP e implementar várias interfaces.
class UserRepository implements IUserSaver, IUserFinder
*/
