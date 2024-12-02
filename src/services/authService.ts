import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';
import { createSession } from '../helpers/sessionHelper';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Método de registro de usuário
  async registerUser(name: string, email: string, password: string) {
    const passwordhash = await hashPassword(password);  // Usando hash assíncrono
    console.log("Senha original:", password); 
    console.log("Hash gerado:", passwordhash);
    const user = await this.userRepository.addUser(name, email, passwordhash);
    console.log("Usuário registrado:", user);
    return user;
  }

  // Método de login de usuário
  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw new Error('Usuário não encontrado');
    console.log('Senha fornecida:', password);
    console.log('Hash armazenado:', user.passwordhash); 
    const isPasswordValid = await comparePassword(password, user.passwordhash); 
    console.log('Senha válida:', isPasswordValid);

    if (!isPasswordValid) throw new Error('Senha incorreta');

    createSession(user.id); 
    return user;
  }
}
