import { IAuthResponse } from '../interfaces';
import { ThrowError, generateAccessToken, logger } from '../utils';

export class AuthService {
  public static instance: AuthService;

  public static getInstance = (): AuthService => {
    if (!this.instance) {
      this.instance = new AuthService();
    }
    return this.instance;
  };

  public async login(email: string): Promise<Partial<IAuthResponse> | null> {
    logger.info('AuthService - login()');
    try {
      return {
        token: generateAccessToken(email),
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }
}
