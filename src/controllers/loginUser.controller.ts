import { AppResponse } from '@types';
import { Request, Response } from 'express';
import LoginService from '../service/login.service';
import { IUsers } from '../service/users.service';

export default class LoginUserController {
  async handle(request: Request<IUsers>, response: Response<AppResponse<any>>) {
    try {
      const { nickname, senha } = request.body;
      const loginUserService = new LoginService();
      const token = await loginUserService.execute({ nickname, senha });
      return response.json({ success: true, data: token });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
}
