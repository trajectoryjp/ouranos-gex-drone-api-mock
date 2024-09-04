export const spatialIDDtoSchema = {
  type: 'object',
  properties: {
    objectId: { type: 'string' },
  },
  required: ['objectId'],
  additionalProperties: false,
};

export interface GetObjectRequestDto {
  objectId: string;
}

export const IDArraySchema = {
  type: 'array',
  items: {
    type: 'string',
  },
  additionalProperties: false,
};
