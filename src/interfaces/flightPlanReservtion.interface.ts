import { ReserveVoxelValue } from './spaceIntelligenceAcquisition.interface';

export interface IFlightPlanReservation {
  objectID: string;
  overwrite: boolean;
  area: ReserveVoxelValue[];
}
