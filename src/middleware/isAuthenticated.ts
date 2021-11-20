import { Request, Response, NextFunction, json } from 'express';
import { decode, verify } from 'jsonwebtoken';

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeaders = request.headers.authorization;

  if (!authHeaders) {
    return response.status(401).json({
      errorCode: 'Token Inválido.',
    });
  }

  const [, token] = authHeaders.split(' ');

  try {
    verify(token, process.env.JW_SECRET);

    const { sub } = decode(token);
    const guardSub = sub;

    return next();
  } catch (err) {
    return response.status(500).json({ errorCode: 'Token is Required.' });
  }
}
