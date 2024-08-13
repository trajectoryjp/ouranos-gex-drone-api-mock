export const ERRORS = {
  BAD_REQUEST: {
    key: 'BAD_REQUEST',
    message: 'Invalid syntax for this request was provided',
  },
  UNAUTHORIZED: {
    key: 'UNAUTHORIZED',
    message: 'You are unauthorized to access the requested resource',
  },
  FORBIDDEN: {
    key: 'FORBIDDEN',
    message: 'You are not allowed to access the requested resource',
  },
  NOT_FOUND: {
    key: 'NOT_FOUND',
    message: 'We could not find the resource you requested',
  },
  CONFLICT: {
    key: 'CONFLICT',
    message:
      'The request could not be completed due to a conflict with the current state of the resource',
  },
  INTERNAL_SERVER_ERROR: {
    key: 'INTERNAL_SERVER_ERROR',
    message: 'Unexpected Internal Server Error',
  },
  API_NOT_FOUND: {
    key: 'API_NOT_FOUND',
    message: 'The requested API is not found',
  },
  INVALID_SCHEMA: {
    key: 'INVALID_SCHEMA',
    message: 'The provided schema is invalid',
  },
  PARAMETER_MISSING: {
    key: 'PARAMETER_MISSING',
    message: 'Required parameters are missing',
  },
  INVALID_PARAMETERS: {
    key: 'INVALID_PARAMETERS',
    message: 'The provided parameters are invalid',
  },
  INVALID_ID: {
    key: 'INVALID_ID',
    message: 'The provided resource id is invalid',
  },
  GET_FAILED: {
    key: 'GET_FAILED',
    message: 'Failed to get the requested resouces',
  },
  CREATE_FAILED: {
    key: 'CREATE_FAILED',
    message: 'Failed to create the requested resouce',
  },
  UPDATE_FAILED: {
    key: 'UPDATE_FAILED',
    message: 'Failed to update the requested resouce',
  },
  DELETE_FAILED: {
    key: 'DELETE_FAILED',
    message: 'Failed to delete the requested resouce',
  },
  ALREADY_EXISTS: {
    key: 'ALREADY_EXISTS',
    message: 'The resouce already exists',
  },
  INVALID_REFRESH_TOKEN: {
    key: 'INVALID_REFRESH_TOKEN',
    message: 'The provided refresh token is invalid',
  },
}

export const ERRORS_AUTH = {
  INVALID_SYNTAX: {
    key: 'INVALID_SYNTAX',
    message: 'Email and Password does not match',
  },

  USER_NOT_FOUND: {
    key: 'USER_NOT_FOUND',
    message: 'Email not found',
  },

  INVALID_TOKEN: {
    key: 'INVALID_TOKEN',
    message: 'jwt is invalid',
  },

  INCORRECT_RESET_CODE: {
    key: 'INCORRECT_RESET_CODE',
    message: 'Incorrect passsword reset code',
  },
};