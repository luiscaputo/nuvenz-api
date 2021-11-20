import { NextFunction, Request, Response } from 'express';
import { Users } from 'models/Users';
import { IUsers } from 'service/users.service';
import * as Yup from 'yup';
import { showError } from '.';
import { AppResponse } from '../@types';

export const createUser = async (
  req: Request<IUsers>,
  res: Response<AppResponse<Users[]>>,
  next: NextFunction,
) => {
  const schema = Yup.object().shape({
    nickname: Yup.string().required('Informe seu nickname, é obrigatório!'),
    password: Yup.string().required('Informe sua senha, é obrigatório!'),
  });
  await showError(req, res, next, schema);
};
