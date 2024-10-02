import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { SetRoutes } from '../routes';
import passport from 'passport';
import { AppConfig } from '../config';
import morgan from 'morgan';

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
    this.app.use(passport.initialize());
    if (AppConfig.APP_ENV === 'dev') {
      this.app.use(morgan('dev'));
    }
  }

  loadRoutes() {
    SetRoutes(this.app);
  }

  load() {
    this.loadMiddleware();
    this.loadRoutes();
  }
}
