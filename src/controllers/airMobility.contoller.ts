import { Request, Response } from 'express';
import { AirmobilityService } from '../services';
import { logger } from '../utils';
import { HTTPSTATUS } from '../common/enums';
import { cbError, cb } from '../common/handler';
import { ERRORS } from '../common/constants';
import {
  IFlightPlanReservation,
  ISpatialInfoArea,
  ISpatialInfoRegisterRequest,
} from '../interfaces';
import { IAirSpace } from 'src/interfaces/airSpace.interface';
import { IRiskLevels } from 'src/interfaces/riskLevels.interface';

export class AirMobilityController {
  private airMobilityService: AirmobilityService;

  constructor() {
    this.airMobilityService = AirmobilityService.getInstance();
  }

  getSpatialInformation = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - getSpatialInformation()');

    try {
      const objectID = req?.body?.objectId as string;
      res.setHeader('Content-Type', 'application/json');

      res.write(
        JSON.stringify({
          result: {
            objectId: objectID,
            terrain: {
              reference: 'WGS84',
              voxelValues: [],
            },
          },
        }) + '\n',
      );
      const response = await this.airMobilityService.getSpatialInformation(objectID);
      res.write(JSON.stringify(response));
      return res.end();
    } catch (error) {
      console.log(error);
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  removeSpatialInformation = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - removeSpatialInformation()');

    try {
      const objectID = req?.body?.objectID as string;
      const response = await this.airMobilityService.removeSpatialInformation(objectID);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  getSpatialInformationForArea = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - getSpatialInformationForArea()');

    try {
      const spatialInfo = req?.body?.spatialInfo as ISpatialInfoArea;
      const response = await this.airMobilityService.getSpatialInfoArea(spatialInfo);

      res.setHeader('Content-Type', 'application/json');

      response?.forEach((item) => {
        const jsonRes = JSON.stringify(item);
        res.write(jsonRes + '\n');
      });

      return res.end();
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  registerSpatialInfo = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - registerSpatialInfoasync()');
    console.log('AirMobilityController - registerSpatialInfoasync()');
    try {
      const spatialInfo = req?.body?.spatialInfo as ISpatialInfoRegisterRequest;
      const response = await this.airMobilityService.registerSpatialInfo(spatialInfo);
      // const response = {
      //   objectId: '0',
      //   error: 'ErrorCode_AccessDeny',
      // };
      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  registerFlightPlanReservation = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - registerFlightPlanReservation()');

    try {
      const flightPlanReservation = req?.body?.flightPlanReservation as IFlightPlanReservation;
      const response =
        await this.airMobilityService.registerFlightPlanReservation(flightPlanReservation);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  selectAirspaceArrangement = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - selectAirspaceArrangement()');

    try {
      const airSpace = req?.body?.airSpace as IAirSpace;
      const response = await this.airMobilityService.selectAirspaceArrangement(airSpace);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };
  selectAirspaceArrangementStream = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - selectAirspaceArrangementStream()');

    try {
      const airSpace = req?.body?.airSpace as IAirSpace;
      const response = await this.airMobilityService.selectAirspaceArrangementStream(airSpace);
      console.log(response);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  getRiskLevels = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - getRiskLevels()');

    try {
      const riskLevelsBody = req?.body?.riskLevels as IRiskLevels;
      const response = await this.airMobilityService.getRiskLevels();

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  writeCarrierCodes = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - writeCarrierCodes()');

    try {
      const codes = req?.body as Record<string, string>;
      const response = await this.airMobilityService.writeCarrierCodes(codes);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };

  getCarrierCodes = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - getCarrierCodes()');

    try {
      const response = await this.airMobilityService.getCarrierCodes();

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };
}
