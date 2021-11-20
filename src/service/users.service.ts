import UsersRepository from 'repositories/users.repository';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcrypt';

export interface IUsers {
  nickname: string;
  password: string;
}

export default class UsersServices {
  async execute({ nickname, password }: IUsers) {
    try {
      const usersRepository = getCustomRepository(UsersRepository);
      const verifyExistsNickname = await usersRepository.find({
        where: { nickname },
      });
      if (verifyExistsNickname) {
        return 'Nickname existente. Tente outro nickname.';
      }
      const passwordHash = await hash(password, 8);
      const createUser = usersRepository.create({
        nickname,
        password: passwordHash,
      });
      await usersRepository.save(createUser);
      return createUser;
    } catch (err) {
      return err.message;
    }
  }
}
