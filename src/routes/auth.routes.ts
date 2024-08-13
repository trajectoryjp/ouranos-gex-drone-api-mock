import { Router } from 'express';
import { APIS } from '../common/constants';
import { ValidateRequest } from '../common/middleware/validation.middleware';
import { AuthController } from '../controllers';
import { loginDtoSchema } from '../dto';


export default class AuthRoutes {
  private AuthController: AuthController;

  constructor(private router: Router) {
    this.AuthController = new AuthController();
    this.configureRoutes();
  }

  private configureRoutes() {


    // POST /auth/login 
    this.router.post(
      `${APIS.AUTH}/login`,
      ValidateRequest(loginDtoSchema),
      this.AuthController.login,
    );

    // Sample route with AUthenticate() middleware
    // this.router.get(`${APIS.AUTH}/logout`, Authenticate(), this.AuthController.logout);

  }
}
