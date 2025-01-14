import { Router } from 'express';
import { APIS } from '../common/constants';
import { ValidateRequest } from '../common/middleware/validation.middleware';
import { AuthController } from '../controllers';
import { connectServerDtoSchema } from '../dto';

export default class AuthRoutes {
  private AuthController: AuthController;

  constructor(private router: Router) {
    this.AuthController = new AuthController();
    this.configureRoutes();
  }

  private configureRoutes() {
    // POST /gen/api/generic/v3/connect-server
    this.router.post(
      `/connect-server`,
      // ValidateRequest(connectServerDtoSchema),
      this.AuthController.login,
    );
  }
}
