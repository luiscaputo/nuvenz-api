import UsersRepository from '../repositories/users.repository';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcrypt';

export interface IUsers {
  nickname: string;
  senha: string;
}

export default class CreateUsersServices {
  async execute({ nickname, senha }: IUsers) {
    try {
      const usersRepository = getCustomRepository(UsersRepository);
      const passwordHash = await hash(senha, 8);
      const createUser = usersRepository.create({
        nickname,
        password: passwordHash,
        status: 'Active',
      });
      await usersRepository.save(createUser);
      return createUser;
    } catch (err) {
      return err.message;
    }
  }
}
