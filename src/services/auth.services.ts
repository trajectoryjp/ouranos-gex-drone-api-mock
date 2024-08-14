import { HTTP_RESPONSE_STATUS } from '../common/enums';
import { IAuthConnect, IAuthResponse } from '../interfaces';
import { ThrowError, generateAccessToken, logger } from '../utils';

export class AuthService {
  public static instance: AuthService;

  public static getInstance = (): AuthService => {
    if (!this.instance) {
      this.instance = new AuthService();
    }
    return this.instance;
  };

  public async login(data: IAuthConnect): Promise<Partial<IAuthResponse> | null> {
    logger.info('AuthService - login()');

    const { userID, organizationID } = data;

    //after validating the user
    const result = HTTP_RESPONSE_STATUS.COMPLETE;
    try {
      return {
        result,
        token: generateAccessToken({ userID, organizationID }),
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }
}
