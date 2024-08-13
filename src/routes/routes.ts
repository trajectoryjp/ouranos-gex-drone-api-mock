import { Application, Router } from 'express';
import { ERRORS } from '../common/constants';
import { cbError } from '../common/handler';
import { HTTPSTATUS } from '../common/enums';
import AuthRoutes from './auth.routes';

export async function SetRoutes(app: Application) {
  const router = Router();

  app.use('/api', router);

  new AuthRoutes(router);

  app.use((req, res, next) => {
    return cbError(res, HTTPSTATUS.NOT_FOUND, ERRORS.API_NOT_FOUND, { endPoint: req.path });
  });
}
