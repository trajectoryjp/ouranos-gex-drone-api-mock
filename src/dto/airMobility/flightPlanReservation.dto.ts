import { reserveAreaValues } from './spatialInfo.dto';

export const flightPlanReservationDtoSchema = {
  type: 'object',
  properties: {
    objectId: { type: 'string' },
    overwrite: { type: 'boolean' },
    area: reserveAreaValues,
  },
  required: ['objectId', 'overwrite', 'area'],
  additionalProperties: false,
};
