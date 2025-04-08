export interface AuthenticatedRequest extends Request {
    user:{
        _id: string;
        email: string;
        userType: string;
        status: string;
    }
  }