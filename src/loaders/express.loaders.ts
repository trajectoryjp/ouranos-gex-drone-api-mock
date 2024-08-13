import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { SetRoutes } from '../routes';
import passport from 'passport';
import { AppConfig } from '../config';

export class ExpressLoader {
  constructor(private app: Application) {
    this.app = app;
  }

  loadMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(
      cors({
        origin: AppConfig.APP_ALLOWED_ORIGINS,
        credentials: true,
      }),
    );
    this.app.use(passport.initialize())
  }

  loadRoutes() {
    SetRoutes(this.app);
  }

  load() {
    this.loadMiddleware();
    this.loadRoutes();
  }
}
