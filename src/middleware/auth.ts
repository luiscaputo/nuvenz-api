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
    nickname: Yup.string()
      .required('Informe seu nickname, é obrigatório!')
      .min(8, 'Nickname demasiado curto.')
      .max(16, 'Nickname demasiado extenso.'),
    password: Yup.string()
      .required('Informe sua senha, é obrigatório!')
      .min(8, 'Password demasiada curta. Coloque uma mais segura.')
      .max(16, 'Password demasiada longa. Ainda pode esquecer.'),
  });
  await showError(req, res, next, schema);
};

export const login = async (
  req: Request<IUsers>,
  res: Response<AppResponse<Users[]>>,
  next: NextFunction,
) => {
  const schema = Yup.object().shape({
    nickname: Yup.string().required('Informe seu nickname, é obrigatório!'),
    senha: Yup.string().required('Informe sua senha, é obrigatório!'),
  });
  await showError(req, res, next, schema);
};
