import { IErrorType } from '../interfaces';
import { logger } from './winston.utils';

export function ThrowError(error: any) {
  logger.error(error.toString());
  return error;
}

export function commonError(): IErrorType {
  return {
    code: 0,
    message: '',
    details: [
      {
        '@type': 'string',
        property1: null,
        property2: null,
      },
    ],
  };
}
