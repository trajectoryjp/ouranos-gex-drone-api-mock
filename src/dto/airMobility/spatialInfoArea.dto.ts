import { REQUEST_TYPES } from '../../common/enums/airMobility';

const identificationSchema = {
  type: 'object',
  properties: {
    ID: { type: 'string' },
  },
  required: ['ID'],
  additionalProperties: false,
};

const tubeStartEndSchema = {
  type: 'object',
  properties: {
    latitude: { type: 'number' },
    longitude: { type: 'number' },
    altitude: { type: 'number' },
    altitudeAttribute: { type: 'string' },
  },
  required: ['latitude', 'longitude', 'altitude', 'altitudeAttribute'],
  additionalProperties: false,
};

const tubeDtoSchema = {
  type: 'object',
  properties: {
    start: tubeStartEndSchema,
    end: tubeStartEndSchema,
    radian: { type: 'number' },
  },
  required: ['start', 'end', 'radian'],
  additionalProperties: false,
};

const polygonDtoSchema = {
  type: 'object',
  additionalProperties: false,
};

export const spatialInfoAreaFigureDtoScehmma = {
  type: 'object',
  properties: {
    identification: identificationSchema,
    tube: tubeDtoSchema,
    polygon: polygonDtoSchema,
  },
  required: ['identification'],
  additionalProperties: false,
};

const spatialInfoAreaRequestTypeDtoSchema = {
  type: 'array',
  items: {
    type: 'string',
    enum: Object.values(REQUEST_TYPES),
  },
  additionalProperties: false,
};

export const spatialInfoAreaDtoSchema = {
  type: 'object',
  properties: {
    figure: spatialInfoAreaFigureDtoScehmma,
    requestType: spatialInfoAreaRequestTypeDtoSchema,
  },
  required: ['figure', 'requestType'],
  additionalProperties: false,
};
