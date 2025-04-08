import { IErrorType, IFigure } from './spaceIntelligenceAcquisition.interface';

export interface IAirSpace {
  figure: IFigure;
  period: IPeriod;
  includeReserveArea: boolean;
}

interface IPeriod {
  startTime: string;
  endTime: string;
}

export interface IAirSpaceResponse {
  outOfSpace: {
    ID: string[];
  };
  flyableSpace: {
    ID: string[];
  };
  error: string;
}

export interface IAirSpaceResponseStream {
  result: {
    outOfSpace: {
      ID: string[];
    };
    flyableSpace: {
      ID: string[];
    };
    occupiedSpace: {
      ID: string[];
    };
    error: string;
  };
  error: IErrorType;
}
