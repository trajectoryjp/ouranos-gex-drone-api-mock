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
import { getRiskLevelsDB } from '../utils/getRiskLevels.utils';
import { readCarrierCodes, writeCarrierCodes } from '../utils/fileUtils';

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
      const objectIDs = ['12344', '23456'];
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
          ID: [
            '20/0/931187/412852',
            '20/0/931187/412853',
            '20/0/931187/412854',
            '20/0/931187/412856',
            '20/0/931187/412857',
            '20/0/931188/412852',
            '20/0/931188/412853',
            '20/0/931188/412854',
          ],
        },
        flyableSpace: {
          ID: [
            '20/1/931160/412864',
            '20/1/931160/412865',
            '20/1/931160/412866',
            '20/1/931160/412867',
            '20/1/931161/412864',
            '20/1/931161/412865',
            '20/1/931161/412866',
            '20/1/931161/412867',
            '20/1/931162/412864',
            '20/1/931162/412865',
            '20/1/931162/412866',
            '20/1/931162/412867',
            '20/1/931163/412864',
            '20/1/931163/412865',
            '20/1/931163/412866',
            '20/1/931163/412867',
            '20/1/931164/412864',
            '20/1/931164/412865',
            '20/1/931164/412866',
            '20/1/931164/412867',
            '20/1/931165/412864',
            '20/1/931165/412865',
            '20/1/931165/412866',
            '20/1/931165/412867',
            '20/1/931166/412864',
            '20/1/931166/412865',
            '20/1/931166/412866',
            '20/1/931166/412867',
          ],
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
            ID: [
              '20/0/931187/412852',
              '20/0/931187/412853',
              '20/0/931187/412854',
              '20/0/931187/412856',
              '20/0/931187/412857',
              '20/0/931188/412852',
              '20/0/931188/412853',
              '20/0/931188/412854',
            ],
          },
          flyableSpace: {
            ID: [
              '20/1/931160/412864',
              '20/1/931160/412865',
              '20/1/931160/412866',
              '20/1/931160/412867',
              '20/1/931161/412864',
              '20/1/931161/412865',
              '20/1/931161/412866',
              '20/1/931161/412867',
              '20/1/931162/412864',
              '20/1/931162/412865',
              '20/1/931162/412866',
              '20/1/931162/412867',
              '20/1/931163/412864',
              '20/1/931163/412865',
              '20/1/931163/412866',
              '20/1/931163/412867',
              '20/1/931164/412864',
              '20/1/931164/412865',
              '20/1/931164/412866',
              '20/1/931164/412867',
              '20/1/931165/412864',
              '20/1/931165/412865',
              '20/1/931165/412866',
              '20/1/931165/412867',
              '20/1/931166/412864',
              '20/1/931166/412865',
              '20/1/931166/412866',
              '20/1/931166/412867',
            ],
          },
          occupiedSpace: {
            ID: [
              '20/0/931200/412850',
              '20/0/931200/412851',
              '20/0/931200/412852',
              '20/0/931200/412853',
              '20/0/931200/412854',
              '20/0/931201/412850',
              '20/0/931201/412851',
              '20/0/931201/412852',
              '20/0/931201/412853',
              '20/0/931201/412854',
              '20/0/931202/412850',
              '20/0/931202/412851',
              '20/0/931202/412852',
              '20/0/931202/412853',
              '20/0/931202/412854',
              '20/0/931203/412850',
              '20/0/931203/412851',
              '20/0/931203/412852',
              '20/0/931203/412853',
              '20/0/931203/412854',
            ],
          },
          error: 'ErrorCode_UNSPECIFIED',
        },
        error: commonError(),
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async getRiskLevels(): Promise<any> {
    logger.info('AirmobilityService - getRiskLevels()');

    try {
      const riskLevelsArray = getRiskLevelsDB();
      return {
        result: { riskLevels: riskLevelsArray.riskLevels },
        error: commonError(),
      };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async writeCarrierCodes(codes: Record<string, string>): Promise<any> {
    try {
      writeCarrierCodes(codes);
      return { message: 'Carrier codes updated successfully' };
    } catch (error) {
      throw ThrowError(error);
    }
  }

  public async getCarrierCodes(): Promise<any> {
    try {
      const codes = readCarrierCodes();
      return codes;
    } catch (error) {
      throw ThrowError(error);
    }
  }
}
