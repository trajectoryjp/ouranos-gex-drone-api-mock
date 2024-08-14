import { Router } from 'express';
import { APIS } from '../common/constants';
import { ValidateRequest } from '../common/middleware/validation.middleware';
import { AirMobilityController } from '../controllers';
import { spatialIDDtoSchema } from '../dto';

export default class AirMobilityRoutes {
  private AirMobilityController: AirMobilityController;

  constructor(private router: Router) {
    this.AirMobilityController = new AirMobilityController();
    this.configureRoutes();
  }

  private configureRoutes() {
    // get spatial information from objectID
    this.router.post(
      `/get-object`,
      ValidateRequest(spatialIDDtoSchema),
      this.AirMobilityController.getSpatialInformation,
    );
  }
}
