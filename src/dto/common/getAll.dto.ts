export const getAllDtoSchema = {
  type: 'object',
  properties: {
    start: { type: 'number' },
    limit: { type: 'number' },
  },
  additionalProperties: false,
};
