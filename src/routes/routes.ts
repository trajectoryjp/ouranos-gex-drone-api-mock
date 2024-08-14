import { Application, Router } from 'express';
import { ERRORS } from '../common/constants';
import { cbError } from '../common/handler';
import { HTTPSTATUS } from '../common/enums';
import AuthRoutes from './auth.routes';
// import AirMobilityRoutes from './airMobility.routes';
import { AppConfig } from '../config';

export async function SetRoutes(app: Application) {
  const router = Router();

  app.use(`${AppConfig.GEN_API}/${AppConfig.GEN_API_VERSION}`, router);
  // app.use(`${AppConfig.UAS_API}/${AppConfig.UAS_API_VERSION}`, router);

  new AuthRoutes(router);
  // new AirMobilityRoutes(router);

  app.use((req, res, next) => {
    return cbError(res, HTTPSTATUS.NOT_FOUND, ERRORS.API_NOT_FOUND, { endPoint: req.path });
  });
}
