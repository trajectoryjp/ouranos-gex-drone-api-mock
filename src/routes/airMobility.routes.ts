import { Router } from 'express';
import { APIS } from '../common/constants';
import { ValidateRequest } from '../common/middleware/validation.middleware';
import { AirMobilityController } from '../controllers';
import {
  airSpaceDtoSchema,
  flightPlanReservationDtoSchema,
  riskLevelsDtoSchema,
  spatialIDDtoSchema,
  spatialInfoAreaDtoSchema,
  spatialInfoAreaRequestDtoSchema,
} from '../dto';

export default class AirMobilityRoutes {
  private AirMobilityController: AirMobilityController;

  constructor(private router: Router) {
    this.AirMobilityController = new AirMobilityController();
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.post(
      `/get-object`,
      ValidateRequest(spatialIDDtoSchema),
      this.AirMobilityController.getSpatialInformation,
    );

    this.router.post(
      `/delete-object`,
      ValidateRequest(spatialIDDtoSchema),
      this.AirMobilityController.removeSpatialInformation,
    );

    this.router.post(
      `/get-value`,
      ValidateRequest(spatialInfoAreaDtoSchema),
      this.AirMobilityController.getSpatialInformationForArea,
    );

    this.router.post(
      `/put-object`,
      ValidateRequest(spatialInfoAreaRequestDtoSchema),
      this.AirMobilityController.registerSpatialInfo,
    );

    this.router.post(
      `/put-reserve-area`,
      ValidateRequest(flightPlanReservationDtoSchema),
      this.AirMobilityController.registerFlightPlanReservation,
    );

    this.router.post(
      `/select-airspace-arrangement`,
      ValidateRequest(airSpaceDtoSchema),
      this.AirMobilityController.selectAirspaceArrangement,
    );

    this.router.post(
      `/select-airspace-arrangement-stream`,
      ValidateRequest(airSpaceDtoSchema),
      this.AirMobilityController.selectAirspaceArrangementStream,
    );

    this.router.post(
      `/get-risk-levels`,
      ValidateRequest(riskLevelsDtoSchema),
      this.AirMobilityController.getRiskLevels,
    );

    this.router.post(`/carriers`, this.AirMobilityController.writeCarrierCodes);

    this.router.get(`/carriers`, this.AirMobilityController.getCarrierCodes);
  }
}
