import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import UsersRepository from '../repositories/users.repository';
import { getCustomRepository } from 'typeorm';
import { IUsers } from './users.service';

type UserRequest = {
  nickname: string;
  senha: string;
};

export default class LoginService {
  async execute({ nickname, senha }: UserRequest): Promise<any> {
    try {
      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findOne({ where: { nickname } });

      if (!user) {
        return new Error('Nickname/password inválido.');
      }

      const passwordCompare = await compare(senha, user.password);

      if (!passwordCompare) {
        return new Error('Nickname/password inválido.');
      }

      const userId = user.id;
      const token = sign(
        {
          id: userId,
        },
        process.env.JW_SECRET,
        {
          subject: user.id.toString(),
          expiresIn: '1d',
        },
      );
      return { token, userId };
    } catch (err) {
      return err.message;
    }
  }
}
