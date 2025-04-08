import { spatialInfoAreaFigureDtoScehmma } from './spatialInfoArea.dto';

export const riskLevelsDtoSchema = {
  type: 'object',
  properties: {
    figure: spatialInfoAreaFigureDtoScehmma,
    zoomLevel: { type: 'number' },
  },
  required: ['figure', 'zoomLevel'],
  additionalProperties: false,
};
