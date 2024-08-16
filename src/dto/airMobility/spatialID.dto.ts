export const spatialIDDtoSchema = {
  type: 'object',
  properties: {
    objectID: { type: 'string' },
  },
  required: ['objectID'],
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
