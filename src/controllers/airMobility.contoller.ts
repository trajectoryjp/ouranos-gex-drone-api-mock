import { Request, Response } from 'express';
import { AirmobilityService } from '../services';
import { logger } from '../utils';
import { HTTPSTATUS } from '../common/enums';
import { cbError, cb } from '../common/handler';
import { ERRORS } from '../common/constants';

export class AirMobilityController {
  private authService: AirmobilityService;

  constructor() {
    this.authService = AirmobilityService.getInstance();
  }

  getSpatialInformation = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - getSpatialInformation()');

    try {
      const objectID = req?.body?.objectID as string;
      const response = await this.authService.getSpatialInformation(objectID);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };
}
