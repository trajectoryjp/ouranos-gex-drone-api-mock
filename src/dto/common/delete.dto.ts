export const deleteDtoSchema = {
  type: 'object',
  properties: {
    ids: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  additionalProperties: false,
  required: ['ids'],
};

export interface DeleteDto {
  ids: string[];
}
