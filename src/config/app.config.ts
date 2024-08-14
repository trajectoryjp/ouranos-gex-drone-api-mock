import Ajv from 'ajv';

require('dotenv').config();

const ajv = new Ajv({ allErrors: true });

require('ajv-formats')(ajv);

const configSchema = {
  type: 'object',
  properties: {
    APP_ENV: {
      type: 'string',
      enum: ['dev', 'staging', 'production'],
    },
    APP_PORT: { type: 'integer' },
  },
  required: ['APP_ENV', 'APP_PORT'],
};

const validate = ajv.compile(configSchema);

const defaultConfig = {
  APP_ENV: 'dev',
  APP_PORT: 3001,
};
const ALLOWED_ORIGINS = ['http://localhost:5173', 'https://imoneyuyu.com'];

export const AppConfig = {
  APP_ENV: process.env.APP_ENV || defaultConfig.APP_ENV,
  APP_PORT: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : defaultConfig.APP_PORT,
  APP_ALLOWED_ORIGINS: ALLOWED_ORIGINS,
  GEN_API: process.env.GEN_API_GENERIC,
  UAS_API: process.env.UAS_API_AIRMOBILITY,
  GEN_API_VERSION: process.env.GEN_API_VERSION,
  UAS_API_VERSION: process.env.UAS_API_VERSION,
};

if (!validate(AppConfig)) {
  throw validate.errors;
}
