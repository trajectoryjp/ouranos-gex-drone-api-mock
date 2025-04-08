import Ajv from 'ajv';
require('dotenv').config();

const ajv = new Ajv({ allErrors: true });
require('ajv-formats')(ajv);

const jwtConfigSchema = {
  type: 'object',
  properties: {
    JWT_SECRET: { type: 'string' },
    JWT_EXPIRATION: { type: 'string' },
    JWT_USERNAME: { type: 'string' },
    JWT_ID: { type: 'string' },
    JWT_ACCESS_TOKEN_EXPIRATION: { type: 'string' },
    JWT_REFRESH_TOKEN_EXPIRATION: { type: 'string' },
  },
  required: ['JWT_SECRET', 'JWT_EXPIRATION', 'JWT_USERNAME', 'JWT_ID', 'JWT_ACCESS_TOKEN_EXPIRATION', 'JWT_REFRESH_TOKEN_EXPIRATION'],
};

const jwtValidate = ajv.compile(jwtConfigSchema);

const defaultJwtConfig = {
  JWT_SECRET: 'IMONE',
  JWT_EXPIRATION: '1h',
  JWT_USERNAME: 'USER_NAME',
  JWT_ID: 'USER_ID',
  JWT_ACCESS_TOKEN_EXPIRATION: '1h',
  JWT_REFRESH_TOKEN_EXPIRATION: '90d',
};

export const JWTConfig = {
  JWT_SECRET: process.env.JWT_SECRET || defaultJwtConfig.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || defaultJwtConfig.JWT_EXPIRATION,
  JWT_USERNAME: process.env.JWT_USERNAME || defaultJwtConfig.JWT_USERNAME,
  JWT_ID: process.env.JWT_ID || defaultJwtConfig.JWT_ID,
  JWT_ACCESS_TOKEN_EXPIRATION: process.env.JWT_ACCESS_TOKEN_EXPIRATION || defaultJwtConfig.JWT_ACCESS_TOKEN_EXPIRATION,
  JWT_REFRESH_TOKEN_EXPIRATION: process.env.JWT_REFRESH_TOKEN_EXPIRATION || defaultJwtConfig.JWT_REFRESH_TOKEN_EXPIRATION,
};

if (!jwtValidate(JWTConfig)) {
  throw jwtValidate.errors;
}
