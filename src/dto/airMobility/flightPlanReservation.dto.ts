import { reserveAreaValues } from './spatialInfo.dto';

export const flightPlanReservationDtoSchema = {
  type: 'object',
  properties: {
    objectId: { type: 'string' },
    overwrite: { type: 'boolean' },
    area: reserveAreaValues,
  },
  required: ['overwrite', 'area'],
  additionalProperties: false,
};
