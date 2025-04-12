import { ISpatialInfoObject } from '../interfaces';
import { faker } from '@faker-js/faker';

export function getEmptySpatialInfo(objectId: string): ISpatialInfoObject {
  if (objectId == '23456') {
    return {
      objectId: objectId,
      terrain: {
        reference: 'WGS84',
        voxelValues: [],
      },
      building: {
        reference: faker.lorem.word(),
        voxelValues: [],
      },
      restrictedArea: {
        reference: 'TEST3',
        type: 'TYPE_FREE',
        voxelValues: [],
      },
      emergencyArea: {
        reference: 'Emergency',
        voxelValues: [],
      },
      overlayArea: {
        ownerAddress: {
          grpc: faker.internet.url(),
          rest: faker.internet.url(),
          other: faker.internet.url(),
        },
        voxelValues: [],
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
        voxelValues: [],
      },
      weather: {
        reference: faker.lorem.word(),
        voxelValues: [],
      },
      weatherForecast: {
        reference: faker.lorem.word(),
        voxelValues: [],
      },
      microwave: {
        mobile: {
          reference: 'string',
          plmnId: {
            mobileCountryCode: '4',
            mobileNetworkCode: '4001',
          },
          voxelValues: [],
        },
        wifi: {
          reference: 'wifi',
          ssid: '445667dd',
          voxelValues: [],
        },
      },
    };
  }
  return {
    objectId: objectId,
    terrain: {
      reference: 'WGS84',
      voxelValues: [],
    },
    building: {
      reference: faker.lorem.word(),
      voxelValues: [],
    },
    restrictedArea: {
      reference: faker.lorem.word(),
      type: 'TYPE_FREE',
      voxelValues: [],
    },
    emergencyArea: {
      reference: faker.lorem.word(),
      voxelValues: [],
    },
    overlayArea: {
      ownerAddress: {
        grpc: faker.internet.url(),
        rest: faker.internet.url(),
        other: faker.internet.url(),
      },
      voxelValues: [],
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
      voxelValues: [],
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

    weather: {
      reference: faker.lorem.word(),
      voxelValues: [],
    },
    weatherForecast: {
      reference: faker.lorem.word(),
      voxelValues: [],
    },
    microwave: {
      mobile: {
        reference: 'string',
        plmnId: {
          mobileCountryCode: '4',
          mobileNetworkCode: '4000',
        },
        voxelValues: [],
      },
      wifi: {
        reference: 'wifi',
        ssid: '445667dd',
        voxelValues: [],
      },
    },
    groundRisk: {
      reference: faker.lorem.word(),
      voxelValues: [],
    },
    ariRisk: {
      reference: faker.lorem.word(),
      voxelValues: [],
    },
  };
}
