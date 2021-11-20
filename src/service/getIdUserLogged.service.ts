import { request } from 'express';
import { decode } from 'jsonwebtoken';

export const userLoggedId = () => {
  const authAuthorizations = request.headers.authorization;
  const [, token] = authAuthorizations.split(' ');
  const t = decode(token);
  return t[0];
};
