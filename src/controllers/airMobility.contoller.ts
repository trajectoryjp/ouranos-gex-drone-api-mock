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

export class AirMobilityController {
  private airMobilityService: AirmobilityService;

  constructor() {
    this.airMobilityService = AirmobilityService.getInstance();
  }

  getSpatialInformation = async (req: Request, res: Response) => {
    logger.info('AirMobilityController - getSpatialInformation()');

    try {
      const objectID = req?.body?.objectId as string;
      const response = await this.airMobilityService.getSpatialInformation(objectID);

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
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

      return cb(HTTPSTATUS.OK, res, response);
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

      return cb(HTTPSTATUS.OK, res, response);
    } catch (error) {
      return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, error);
    }
  };
}
