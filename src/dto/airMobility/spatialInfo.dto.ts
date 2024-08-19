const idSchema = {
  type: 'object',
  properties: {
    ID: { type: 'string' },
  },
  required: ['ID'],
  additionalProperties: false,
};
const voxelValueSchema0 = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: idSchema,
    },
    required: ['id'],
    additionalProperties: false,
  },
};

const voxelValuesSchema1 = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: idSchema,
      vacant: { type: 'boolean' },
    },
    required: ['id', 'vacant'],
    additionalProperties: false,
  },
};
export const reserveAreaValues = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: idSchema,
      reservationTime: {
        type: 'object',
        properties: {
          period: {
            type: 'object',
            properties: {
              startTime: { type: 'string' },
              endTime: { type: 'string' },
            },
            required: ['startTime', 'endTime'],
            additionalProperties: false,
          },
          occupation: { type: 'string' },
          reserveId: { type: 'string' },
        },
        required: ['period', 'occupation', 'reserveId'],
        additionalProperties: false,
      },
    },
    required: ['id', 'reservationTime'],
    additionalProperties: false,
  },
};

const voxelWeather = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'object',
        properties: {
          ID: { type: 'string' },
        },
        required: ['ID'],
        additionalProperties: false,
      },
      currentWeather: {
        type: 'object',
        properties: {
          startTime: { type: 'string' },
          endTime: { type: 'string' },
          windDirection: { type: 'number' },
          windSpeed: { type: 'number' },
          cloudRate: { type: 'number' },
          temperature: { type: 'number' },
          dewPoint: { type: 'number' },
          pressure: { type: 'number' },
          precipitation: { type: 'number' },
          visibility: { type: 'number' },
          gggg: { type: 'string' },
        },
        required: [
          'startTime',
          'endTime',
          'windDirection',
          'windSpeed',
          'cloudRate',
          'temperature',
          'dewPoint',
          'pressure',
          'precipitation',
          'visibility',
          'gggg',
        ],
        additionalProperties: false,
      },
    },
    required: ['id', 'currentWeather'],
    additionalProperties: false,
  },
};

const voxelMicro = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: idSchema,
      RSI: { type: 'number' },
    },
    required: ['id', 'RSI'],
    additionalProperties: false,
  },
};

const voxelRisks = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: idSchema,
      value: { type: 'number' },
    },
    required: ['id', 'value'],
    additionalProperties: false,
  },
};

const channelSchema = {
  type: 'object',
  properties: {
    ownerAddress: {
      type: 'object',
      properties: {
        grpc: { type: 'string' },
        rest: { type: 'string' },
        other: { type: 'string' },
      },
      required: ['grpc', 'rest', 'other'],
      additionalProperties: false,
    },
    channelId: { type: 'string' },
    channelValues: {
      type: 'array',
      items: { type: 'object', properties: { id: idSchema } },
    },
    junctionValues: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: idSchema,
          connectedChannelIds: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        required: ['id', 'connectedChannelIds'],
        additionalProperties: false,
      },
    },
  },
  required: ['ownerAddress', 'channelId', 'channelValues', 'junctionValues'],
  additionalProperties: false,
};

const weatherSchema = {
  type: 'object',
  properties: {
    reference: { type: 'string' },
    voxelValues: voxelWeather,
  },
  required: ['reference', 'voxelValues'],
  additionalProperties: false,
};

const weatherForecastSchema = {
  type: 'object',
  properties: {
    reference: { type: 'string' },
    voxelValues: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: idSchema,
          forecast: {
            type: 'object',
            properties: {
              startTime: { type: 'string' },
              endTime: { type: 'string' },
              windDirection: { type: 'number' },
              windSpeed: { type: 'number' },
              cloudRate: { type: 'number' },
              precipitation: { type: 'number' },
            },
            required: [
              'startTime',
              'endTime',
              'windDirection',
              'windSpeed',
              'cloudRate',
              'precipitation',
            ],
            additionalProperties: false,
          },
        },
        required: ['id', 'forecast'],
        additionalProperties: false,
      },
    },
  },
};

const microwaveSchema = {
  type: 'object',
  properties: {
    mobile: {
      type: 'object',
      properties: {
        reference: { type: 'string' },
        plmnId: {
          type: 'object',
          properties: {
            mobileCountryCode: { type: 'string' },
            mobileNetworkCode: { type: 'string' },
          },
          required: ['mobileCountryCode', 'mobileNetworkCode'],
          additionalProperties: false,
        },
        voxelValues: voxelMicro,
      },
      required: ['reference', 'plmnId', 'voxelValues'],
      additionalProperties: false,
    },
    wifi: {
      type: 'object',
      properties: {
        reference: { type: 'string' },
        ssid: { type: 'string' },
        voxelValues: voxelMicro,
      },
      required: ['reference', 'ssid', 'voxelValues'],
      additionalProperties: false,
    },
  },
  required: ['mobile', 'wifi'],
  additionalProperties: false,
};

const risksSchema = {
  type: 'object',
  properties: {
    reference: { type: 'string' },
    voxelValues: voxelRisks,
  },
  required: ['reference', 'voxelValues'],
  additionalProperties: false,
};

export const spatialInfoAreaRequestDtoSchema = {
  type: 'object',
  properties: {
    overwrite: { type: 'boolean' },
    object: {
      type: 'object',
      properties: {
        objectId: { type: 'string' },
        terrain: {
          type: 'object',
          properties: {
            reference: { type: 'string' },
            voxelValues: voxelValuesSchema1,
          },
          required: ['reference', 'voxelValues'],
          additionalProperties: false,
        },
        building: {
          type: 'object',
          properties: {
            reference: { type: 'string' },
            voxelValues: voxelValuesSchema1,
          },
          required: ['reference', 'voxelValues'],
          additionalProperties: false,
        },
        restrictedArea: {
          type: 'object',
          properties: {
            reference: { type: 'string' },
            type: { type: 'string' },
            voxelValues: voxelValueSchema0,
          },
          required: ['reference', 'type', 'voxelValues'],
          additionalProperties: false,
        },
        emergencyArea: {
          type: 'object',
          properties: {
            reference: { type: 'string' },
            voxelValues: voxelValuesSchema1,
          },
          required: ['reference', 'voxelValues'],
          additionalProperties: false,
        },
        reserveArea: {
          type: 'object',
          properties: {
            ownerId: { type: 'string' },
            reservationTime: {
              type: 'object',
              properties: {
                period: {
                  type: 'object',
                  properties: {
                    startTime: { type: 'string' },
                    endTime: { type: 'string' },
                  },
                  required: ['startTime', 'endTime'],
                  additionalProperties: false,
                },
                occupation: { type: 'string' },
                reserveId: { type: 'string' },
              },
              required: ['period', 'occupation', 'reserveId'],
              additionalProperties: false,
            },
            voxelValues: reserveAreaValues,
          },
          required: ['ownerId', 'reservationTime', 'voxelValues'],
          additionalProperties: false,
        },
        channel: channelSchema,
        overlayArea: {
          type: 'object',
          properties: {
            ownerAddress: {
              type: 'object',
              properties: {
                grpc: { type: 'string' },
                rest: { type: 'string' },
                other: { type: 'string' },
              },
              required: ['grpc', 'rest', 'other'],
              additionalProperties: false,
            },
            voxelValues: voxelValueSchema0,
          },
          required: ['ownerAddress', 'voxelValues'],
          additionalProperties: false,
        },
        weather: weatherSchema,
        weatherForecast: weatherForecastSchema,
        microwave: microwaveSchema,
        groundRisk: risksSchema,
        ariRisk: risksSchema,
      },
      additionalProperties: false,
    },
  },
  required: ['overwrite', 'object'],
  additionalProperties: false,
};
