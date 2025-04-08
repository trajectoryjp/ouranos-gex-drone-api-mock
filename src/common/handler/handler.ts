import { Response } from 'express';
import { HTTPSTATUS } from '../enums';
import { logger } from '../../utils';
import { IError } from '../interfaces';
import { IErrorType } from 'src/interfaces';

export const cb = (code: HTTPSTATUS, res: Response, responseData: any) => {
  return res.status(code).json(responseData);
};
export const cbError = (res: Response, code: HTTPSTATUS, type: IError, error: any) => {
  logger.error(error.message);
  return res.status(code).json({
    code: 0,
    message: type.message,
    details: [{ '@type': error.message, property1: null, property2: null }],
  });
};
