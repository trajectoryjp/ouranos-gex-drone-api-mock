import { Request, Response, NextFunction } from 'express';
import Ajv, { ValidateFunction } from 'ajv';

import { ERRORS } from '../constants';
import { cbError } from '../handler';
import { HTTPSTATUS } from '../enums';

export function ValidateRequest(
  schema: object,
): (req: Request, res: Response, next: NextFunction) => void {
  const ajv = new Ajv();

  ajv.addFormat('email', {
    type: 'string',
    validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  });

  ajv.addFormat('date', {
    type: 'string',
    validate: /^\d{4}-\d{2}-\d{2}$/,
  });

  ajv.addFormat('time', {
    type: 'string',
    validate: /^\d{2}:\d{2}$/,
  });

  ajv.addFormat('year', {
    type: 'string',
    validate: /^(19|20)\d{2}$/,
  });

  ajv.addFormat('month', {
    type: 'string',
    validate: /^(0[1-9]|1[0-2])$/,
  });

  return (req: Request, res: Response, next: NextFunction) => {
    if (Object.keys(req.body).length === 0) {
      return next();
    }

    const isValid = ajv.validate(schema, req.body);

    if (!isValid || Object.keys(req.body).length === 0) {
      return cbError(
        res,
        HTTPSTATUS.BAD_REQUEST,
        ERRORS.BAD_REQUEST,
        ajv.errorsText(ajv.errors, { separator: '\n' }),
      );
    }

    next();
  };
}

export function ValidateQueryParams(
  schema: any,
): (req: Request, res: Response, next: NextFunction) => void {
  const ajv = new Ajv();
  return (req: Request, res: Response, next: NextFunction) => {
    const queryParams: any = req.query;
    for (let query in queryParams) {
      if (schema.properties[query].type == 'number') {
        queryParams[query] = parseInt(queryParams[query]);
      }
    }
    const isValid = ajv.validate(schema, queryParams);

    if (!isValid) {
      return cbError(
        res,
        HTTPSTATUS.BAD_REQUEST,
        ERRORS.BAD_REQUEST,
        ajv.errorsText(ajv.errors, { separator: '\n' }),
      );
    }
    next();
  };
}
