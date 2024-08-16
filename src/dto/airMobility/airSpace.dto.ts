import { spatialInfoAreaFigureDtoScehmma } from './spatialInfoArea.dto';

export const periodDtoSchema = {
  type: 'object',
  properties: {
    startTime: { type: 'string' },
    endTime: { type: 'string' },
  },
  required: ['startTime', 'endTime'],
  additionalProperties: false,
};

export const airSpaceDtoSchema = {
  type: 'object',
  properties: {
    figure: spatialInfoAreaFigureDtoScehmma,
    period: periodDtoSchema,
    includeReserveArea: { type: 'boolean' },
  },
  required: ['figure', 'period', 'includeReserveArea'],
  additionalProperties: false,
};
