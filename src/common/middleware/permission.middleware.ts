import { Request, Response, NextFunction } from 'express';

import { ERRORS } from '../constants';
import { cbError } from '../handler';
import { HTTPSTATUS, USER_TYPE } from '../enums';
import { AuthenticatedRequest } from "../interfaces";


export function ValidatePermission(
  userRole: USER_TYPE[],
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    if (userRole.includes((req as unknown as AuthenticatedRequest).user?.userType as USER_TYPE)) {
      next();
    } else {
      return cbError(res, HTTPSTATUS.FORBIDDEN, ERRORS.FORBIDDEN, ERRORS.FORBIDDEN);
    }
  };
}
