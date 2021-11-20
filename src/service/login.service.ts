import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import UsersRepository from '../repositories/users.repository';
import { getCustomRepository } from 'typeorm';
import { IUsers } from './users.service';

export default class LoginService {
  async execute({ nickname, senha }: IUsers) {
    try {
      const usersRepository = getCustomRepository(UsersRepository);
      const verifyNickName = await usersRepository.findOne({
        where: { nickname },
      });
      if (!verifyNickName) {
        return 'Nickname/password inválido.';
      }
      const passwordCompare = await compare(senha, verifyNickName.password);
      if (!passwordCompare) {
        return 'Nickname/password inválido.';
      }
      const userId = verifyNickName.id;
      const token = sign(
        {
          user: {
            nickname: verifyNickName.nickname,
            id: verifyNickName.id,
          },
        },
        process.env.JW_SECRET,
        {
          subject: '',
          expiresIn: '1d',
        },
      );
      return { token, userId };
    } catch (err) {
      return err.message;
    }
  }
}
