import UserRepository from "../repository/UserRepository";
import UserService from "../service/UserService";

/**
 * Instancia o repositório de usuários e o serviço de usuários.
 * 
 * Neste exemplo, criamos uma instância do `UserRepository` e a injetamos no `UserService`. O `UserService`
 * pode então usar os métodos do repositório para salvar e recuperar usuários. 
 * 
 * Caso tivéssemos outro módulo que implementasse a interface `IUserRepository`, poderíamos instanciá-lo
 * e utilizá-lo no `UserService`. Isso é útil, por exemplo, durante períodos de transição, onde as regras
 * de negócios ou a implementação de persistência dos dados estão sendo alteradas.
 * 
 * @example
 * const userRepository = new UserRepository();
 * const userService = new UserService(userRepository);
 * const newUser = await userService.createUser("Arthur", "arthur@example.com", "praquesenha?");
 * const user = await userService.getUserById(1);
 */
const userRepository = new UserRepository();

const userService = new UserService(userRepository);
