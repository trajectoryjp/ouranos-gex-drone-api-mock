import * as generator from 'generate-password';
import { logger } from './winston.utils';
import { ThrowError } from './error.utils';
import jwt from 'jsonwebtoken';
import { JWTConfig } from '../config';
import { IAuth } from '../interfaces';

const secretKey: string = JWTConfig.JWT_SECRET;

export function generateAccessToken(email: string) {
  const secretUser = {
    email,
  };

  const accessToken = jwt.sign(secretUser, secretKey, {
    expiresIn: JWTConfig.JWT_EXPIRATION,
  });

  return accessToken;
}
