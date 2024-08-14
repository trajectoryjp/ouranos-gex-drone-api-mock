export interface IAuth {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthResponse {
  result: string;
  token: string;
}

export interface IAuthConnect {
  userID: string;
  organizationID: string;
  password: string;
}

export interface IAuthTokenHeader {
  userID: string;
  organizationID: string;
}
