import { Application, Router } from 'express';
import { ERRORS } from '../common/constants';
import { cbError } from '../common/handler';
import { HTTPSTATUS } from '../common/enums';
import AuthRoutes from './auth.routes';
import { ROUTES } from '../common/constants';
// import AirMobilityRoutes from './airMobility.routes';
import { AppConfig } from '../config';

export async function SetRoutes(app: Application) {
  const routerAuth = Router();
  const routerAIRMB = Router();

  app.use(`${ROUTES.GEN_API}/${AppConfig.GEN_API_VERSION}`, routerAuth);
  app.use(`${ROUTES.UAS_API}/${AppConfig.UAS_API_VERSION}`, routerAIRMB);

  new AuthRoutes(routerAuth);
  // new AirMobilityRoutes(routerAIRMB);

  app.use((req, res, next) => {
    return cbError(res, HTTPSTATUS.NOT_FOUND, ERRORS.API_NOT_FOUND, { endPoint: req.path });
  });
}
