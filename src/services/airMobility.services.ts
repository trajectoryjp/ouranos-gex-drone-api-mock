import { getSpatialInfo } from '../utils/spaceIntlAcqFaker.utils';
import { HTTP_RESPONSE_STATUS } from '../common/enums';
import { ISpatialID, ISpatialInfoResponse } from '../interfaces';
import { ThrowError, logger } from '../utils';

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
      return spatialDetails;
    } catch (error) {
      throw ThrowError(error);
    }
  }
}
