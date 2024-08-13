import { NextFunction, Response, Request } from 'express';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import { IAuth } from '../../interfaces';
import { cbError } from '../handler';
import { ERRORS, ERRORS_AUTH } from '../constants';
import { HTTPSTATUS } from '../enums';

import { JWTConfig } from '../../config';
import { AuthenticatedRequest } from '../interfaces/request.interface';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWTConfig.JWT_SECRET,
};

export function Authenticate(): (req: Request, res: Response, next: NextFunction) => void {
  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      try {
        return done(null, {
          _id: jwtPayload._id,
          email: jwtPayload.email,
          userType: jwtPayload.userType,
        });
      } catch (error) {
        return done(error, false, { message: 'Error validating user' });
      }
    }),
  );
  return (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (err: any, user: any, info: any) => {
      if (user) {
        (req as unknown as AuthenticatedRequest).user = user;
        next();
      }
      if (info)
        return cbError(res, HTTPSTATUS.UNAUTHORIZED, ERRORS_AUTH.INVALID_TOKEN, info.message);
      if (err)
        return cbError(res, HTTPSTATUS.INTERNAL_SERVER_ERROR, ERRORS.INTERNAL_SERVER_ERROR, err);
    })(req, res, next);
  };
}
