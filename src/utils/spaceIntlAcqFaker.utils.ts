import { ISpatialInfoObject } from '../interfaces';
import { faker } from '@faker-js/faker';

export function getSpatialInfo(objectId: string): ISpatialInfoObject {
  return {
    objectId: objectId,
    terrain: {
      reference: faker.lorem.word(),
      voxelValues: [{ id: { ID: faker.database.mongodbObjectId() }, vacant: true }],
    },
    building: {
      reference: faker.lorem.word(),
      voxelValues: [{ id: { ID: faker.database.mongodbObjectId() }, vacant: true }],
    },
    restrictedArea: {
      reference: faker.lorem.word(),
      type: 'TYPE_FREE',
      voxelValues: [{ id: { ID: faker.database.mongodbObjectId() } }],
    },
    emergencyArea: {
      reference: faker.lorem.word(),
      voxelValues: [{ id: { ID: faker.database.mongodbObjectId() }, vacant: true }],
    },
    reserveArea: {
      ownerId: faker.database.mongodbObjectId(),
      reservationTime: {
        period: {
          startTime: faker.date.future().toISOString(),
          endTime: faker.date.future().toISOString(),
        },
        occupation: faker.lorem.word(),
        reserveId: faker.database.mongodbObjectId(),
      },
      voxelValues: [
        {
          id: { ID: faker.database.mongodbObjectId() },
          reservationTime: {
            period: {
              startTime: faker.date.future().toISOString(),
              endTime: faker.date.future().toISOString(),
            },
            occupation: faker.lorem.word(),
            reserveId: faker.database.mongodbObjectId(),
          },
        },
      ],
    },
    channel: {
      ownerAddress: {
        grpc: faker.internet.ipv4(),
        rest: faker.internet.url(),
        other: faker.internet.ipv6(),
      },
      channelId: faker.database.mongodbObjectId(),
      channelValues: [{ id: { ID: faker.string.uuid() } }],
      junctionValues: [
        {
          id: { ID: faker.database.mongodbObjectId() },
          connectedChannelIds: [faker.string.uuid()],
        },
      ],
    },
    overlayArea: {
      ownerAddress: {
        grpc: faker.internet.url(),
        rest: faker.internet.url(),
        other: faker.internet.url(),
      },
      voxelValues: [{ id: { ID: faker.database.mongodbObjectId() } }],
    },
    weather: {
      reference: faker.lorem.word(),
      voxelValues: [
        {
          id: { ID: faker.database.mongodbObjectId() },
          currentWeather: {
            startTime: faker.date.recent().toISOString(),
            endTime: faker.date.future().toISOString(),
            windDirection: faker.number.int({ min: 0, max: 360 }),
            windSpeed: 0, //  faker.number.int({ min: 0, max: 150 }), // Wind speed in km/h
            cloudRate: 0,
            temperature: 0,
            dewPoint: 0,
            pressure: 0,
            precipitation: 0,
            visibility: 0,
            gggg: faker.lorem.word(),
          },
        },
      ],
    },
    weatherForecast: {
      reference: faker.lorem.word(),
      voxelValues: [
        {
          id: { ID: faker.database.mongodbObjectId() },
          forecast: {
            startTime: faker.date.future().toISOString(),
            endTime: faker.date.future().toISOString(),
            windDirection: 0,
            windSpeed: 0,
            cloudRate: 0,
            precipitation: 0,
          },
        },
      ],
    },
    microwave: {
      mobile: {
        reference: faker.lorem.word(),
        plmnId: {
          mobileCountryCode: faker.location.countryCode(),
          mobileNetworkCode: faker.location.zipCode(),
        },
        voxelValues: [
          {
            id: { ID: faker.database.mongodbObjectId() },
            RSI: faker.number.int({ min: -120, max: 0 }), // RSI for mobile signal
          },
        ],
      },
      wifi: {
        reference: faker.lorem.word(),
        ssid: faker.internet.domainWord(),
        voxelValues: [
          {
            id: { ID: faker.database.mongodbObjectId() },
            RSI: faker.number.int({ min: -120, max: 0 }), // RSI for Wi-Fi signal
          },
        ],
      },
    },
    groundRisk: {
      reference: faker.lorem.word(),
      voxelValues: [
        {
          id: { ID: faker.database.mongodbObjectId() },
          value: faker.number.int({ min: 0, max: 100 }), // Ground risk value
        },
      ],
    },
    ariRisk: {
      reference: faker.lorem.word(),
      voxelValues: [
        {
          id: { ID: faker.database.mongodbObjectId() },
          value: faker.number.int({ min: 0, max: 100 }), // Air risk value
        },
      ],
    },
  };
}
