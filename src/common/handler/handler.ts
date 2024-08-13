import { Response } from 'express';
import { HTTPSTATUS } from '../enums';
import { logger } from '../../utils';
import { IError } from '../interfaces';

export const cb = (code: HTTPSTATUS, res: Response, responseData: any) => {
  let response;
  if (responseData) {
    response = { data: responseData };
  }
  return res.status(code).json(response);
};
export const cbError = (res: Response, code: HTTPSTATUS, type: IError, error: any) => {
  const errorContent = {
    code,
    key: type.key,
    message: type.message,
    error: error ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : '',
  };

  logger.error(errorContent);
  return res.status(code).json({ error: errorContent });
};
