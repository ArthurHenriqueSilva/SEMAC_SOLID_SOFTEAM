/*
 * Código separado que demonstra o uso do UserManagement e enfatiza as dificuldades.
 * Este exemplo mostra como um serviço mal estruturado pode gerar problemas de manutenção e uso.
 * Problemas enfrentados:
 * - Dependência direta de implementações internas.
 * - Erros não padronizados dificultam o tratamento.
 * - Métodos expõem detalhes internos, criando dependências rígidas.
 * - Código rígido, acoplado e difícil de testar ou adaptar para mudanças futuras.
 */

import { UserManagement } from "../userManager";

const userManager = new UserManagement();

/**
 * Adicionando usuários
 * Demonstra a dificuldade de lidar com validações internas e erros não padronizados.
 */
try {
  const user1 = userManager.addUser("Alice", "alice@example.com");
  console.log("Usuário criado:", user1);

  const user2 = userManager.addUser("Bob", "bob@example.com");
  console.log("Usuário criado:", user2);

  // Adicionando um usuário com dados incompletos (erros não padronizados)
  userManager.addUser("", "");
} catch (error) {
  console.error("Erro ao criar usuário:", error);
}

/**
 * Buscando usuários
 * Mostra como a requisição direta aos métodos internos pode dificultar a abstração.
 */
try {
  const foundUser = userManager.getUserById(1);
  console.log("Usuário encontrado:", foundUser);

  const nonExistentUser = userManager.getUserById(99);
  console.log("Usuário inexistente:", nonExistentUser);
} catch (error) {
  console.error("Erro ao buscar usuário:", error);
}

/**
 * Atualizando usuários
 * Demonstra como a lógica de atualização está acoplada à implementação interna.
 */
try {
  const updatedUser = userManager.updateUser(1, "Alice Updated", "alice.updated@example.com");
  console.log("Usuário atualizado:", updatedUser);
} catch (error) {
  console.error("Erro ao atualizar usuário:", error);
}

/**
 * Removendo usuários
 * Mostra a falta de feedback padronizado em operações críticas.
 */
const isDeleted = userManager.deleteUser(2);
console.log("Usuário deletado com sucesso:", isDeleted);

const isDeletedNonExistent = userManager.deleteUser(99);
console.log("Tentativa de deletar usuário inexistente:", isDeletedNonExistent);

/**
 * Listando todos os usuários
 * Exposição direta dos dados internos sem abstração.
 */
const allUsers = userManager.getAllUsers();
console.log("Todos os usuários:", allUsers);
