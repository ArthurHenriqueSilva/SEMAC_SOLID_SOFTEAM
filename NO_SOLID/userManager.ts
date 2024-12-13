// Este código não aplica os princípios SOLID e combina Model, Repository e Service em um único módulo.

export class UserManagement {
    // Propriedades armazenadas diretamente na "classe única"
    private users: { id: number; name: string; email: string }[] = [];
    private lastId: number = 0;
  
    // Adiciona um novo usuário (quebra SRP: lógica de negócio e persistência misturadas)
    addUser(name: string, email: string): { id: number; name: string; email: string } {
      if (!name || !email) {
        throw new Error("Name and email are required.");
      }
      const newUser = { id: ++this.lastId, name, email };
      this.users.push(newUser);
      return newUser;
    }
  
    // Busca um usuário pelo ID (depende de detalhes internos, sem abstração)
    getUserById(id: number): { id: number; name: string; email: string } | null {
      for (const user of this.users) {
        if (user.id === id) {
          return user;
        }
      }
      return null;
    }
  
    // Atualiza os dados de um usuário (mistura regras de negócio e persistência)
    updateUser(id: number, name?: string, email?: string): { id: number; name: string; email: string } | null {
      const user = this.getUserById(id);
      if (!user) {
        throw new Error("User not found.");
      }
      if (name) user.name = name;
      if (email) user.email = email;
      return user;
    }
  
    // Remove um usuário pelo ID (operações diretamente manipulando dados internos)
    deleteUser(id: number): boolean {
      const index = this.users.findIndex((user) => user.id === id);
      if (index === -1) {
        return false;
      }
      this.users.splice(index, 1);
      return true;
    }
  
    // Retorna todos os usuários (exposição direta dos dados internos)
    getAllUsers(): { id: number; name: string; email: string }[] {
      return this.users;
    }
  }