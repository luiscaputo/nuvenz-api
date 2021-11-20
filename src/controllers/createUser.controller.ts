import { AppResponse } from '@types';
import { Request, Response } from 'express';
import { Users } from '../models/Users';
import UsersRepository from '../repositories/users.repository';
import CreateUsersServices, { IUsers } from '../service/users.service';
import { getCustomRepository } from 'typeorm';

export default class CreateUserController {
  async handle(
    request: Request<IUsers>,
    response: Response<AppResponse<Users[]>>,
  ) {
    try {
      const { nickname, senha } = request.body;
      const usersRepository = getCustomRepository(UsersRepository);
      const createUserService = new CreateUsersServices();
      const verifyNickName = await usersRepository.find({
        where: { nickname },
      });
      if (verifyNickName.length > 0) {
        return response.status(400).json({
          success: false,
          message: 'Nickname já existente, tente outro!',
        });
      }
      const creatingUser = await createUserService.execute({
        nickname,
        senha,
      });
      return response.status(200).json({ success: true, data: creatingUser });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
}
