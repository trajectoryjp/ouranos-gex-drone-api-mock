export const loginDtoSchema = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

export interface LoginDto {
  email: string;
  password: string;
}

export const connectServerDtoSchema = {
  type: 'object',
  properties: {
    userID: { type: 'string' },
    organizationID: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['userID', 'organizationID', 'password'],
  additionalProperties: false,
};
