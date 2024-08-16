import { getSpatialInfo } from '../utils/spaceIntlAcqFaker.utils';
import {
  IFlightPlanReservation,
  ISpatialInfoArea,
  ISpatialInfoAreaResponse,
  ISpatialInfoFlightRegisterResponse,
  ISpatialInfoRegisterRequest,
  ISpatialInfoResponse,
  SpaceInfoDeletionResponse,
} from '../interfaces';
import { ThrowError, commonError, logger } from '../utils';
import { AIRMOBILITY_ERROR_CODES, OBJECT_TYPE } from '../common/enums/airMobility';
import { IAirSpaceResponse, IAirSpaceResponseStream } from 'src/interfaces/airSpace.interface';

export class AirmobilityService {
  public static instance: AirmobilityService;

  public static getInstance = (): AirmobilityService => {
    if (!this.instance) {
      this.instance = new AirmobilityService();
    }
    return this.instance;
  };

  public async getSpatialInformation(
    objectID: string,
  ): Promise<Partial<ISpatialInfoResponse> | null> {
    logger.info('AirmobilityService - getSpatialInformation()');

    try {
      const spatialDetails = getSpatialInfo(objectID);
      const errObj = commonError();
      return { result: spatialDetails, error: errObj };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async removeSpatialInformation(
    objectID: string,
  ): Promise<SpaceInfoDeletionResponse | null> {
    logger.info('AirmobilityService - removeSpatialInformation()');

    try {
      return { error: OBJECT_TYPE.UNSPECIFIED };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async getSpatialInfoArea(
    spatialInfo: ISpatialInfoArea,
  ): Promise<Partial<ISpatialInfoAreaResponse> | null> {
    logger.info('AirmobilityService - getSpatialInfoArea()');

    try {
      //retieve objectIDs from databse using spatialInfo
      const objectIDs = ['12344'];
      const spatialDetailObjects = objectIDs.map((objectID) => getSpatialInfo(objectID));
      const errObj = commonError();
      return { result: { objects: spatialDetailObjects }, error: errObj };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async registerSpatialInfo(
    spatialInfo: ISpatialInfoRegisterRequest,
  ): Promise<ISpatialInfoFlightRegisterResponse | null> {
    logger.info('AirmobilityService - registerSpatialInfo()');

    try {
      //save spatialInfo to database and retrieve objectID
      return {
        objectId: '1233434',
        error: AIRMOBILITY_ERROR_CODES.UNSPECIFIED,
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async registerFlightPlanReservation(
    flightPlanReservationInfo: IFlightPlanReservation,
  ): Promise<ISpatialInfoFlightRegisterResponse | null> {
    logger.info('AirmobilityService - registerFlightPlanReservation()');

    try {
      //save FlightPlanReservation to database and retrieve objectID
      return {
        objectId: '1233434',
        error: AIRMOBILITY_ERROR_CODES.UNSPECIFIED,
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async selectAirspaceArrangement(airSpaceInfo: any): Promise<IAirSpaceResponse | null> {
    logger.info('AirmobilityService - selectAirspaceArrangement()');

    try {
      //get airspace  from db
      return {
        outOfSpace: {
          ID: ['12333', '22341'],
        },
        flyableSpace: {
          ID: ['12323', '22224'],
        },
        error: 'ErrorCode_UNSPECIFIED',
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async selectAirspaceArrangementStream(
    airSpaceInfo: any,
  ): Promise<IAirSpaceResponseStream | null> {
    logger.info('AirmobilityService - selectAirspaceArrangementStream()');

    try {
      //get airspace arrangement stream from db
      return {
        result: {
          outOfSpace: {
            ID: ['12333', '22341'],
          },
          flyableSpace: {
            ID: ['12323', '22224'],
          },
          occupiedSpace: {
            ID: ['12323', '22224'],
          },
          error: 'ErrorCode_UNSPECIFIED',
        },
        error: commonError(),
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }
}
