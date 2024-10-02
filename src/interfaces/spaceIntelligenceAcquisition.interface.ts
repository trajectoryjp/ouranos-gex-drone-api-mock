export interface ISpatialInfoResponse {
  result: ISpatialInfoObject;
  error: IErrorType;
}

export interface ISpatialInfoAreaResponse {
  result: {
    objects: ISpatialInfoObject[];
  };
  error: IErrorType;
}

export interface ISpatialInfoRegisterRequest {
  overwrite: boolean;
  object: ISpatialInfoObject;
}
export interface ISpatialInfoFlightRegisterResponse {
  objectId: string;
  error: string;
}

export interface IErrorType {
  code: number;
  message: string;
  details: Array<Record<string, any>>;
}
export interface ISpatialInfoObject {
  objectId: string;
  terrain?: Terrain;
  building?: Building;
  restrictedArea?: RestrictedArea;
  emergencyArea?: EmergencyArea;
  reserveArea?: ReserveArea;
  channel?: Channel;
  overlayArea?: OverlayArea;
  weather?: Weather;
  weatherForecast?: WeatherForecast;
  microwave?: Microwave;
  groundRisk?: Risk;
  ariRisk?: Risk;
}

interface Terrain {
  reference: string;
  voxelValues: VoxelValue[];
}

interface Building {
  reference: string;
  voxelValues: VoxelValue[];
}

interface RestrictedArea {
  reference: string;
  type: string;
  voxelValues: VoxelValue[];
}

interface EmergencyArea {
  reference: string;
  voxelValues: VoxelValue[];
}

interface ReserveArea {
  ownerId: string;
  reservationTime: ReservationTime;
  voxelValues: ReserveVoxelValue[];
}

interface Channel {
  ownerAddress: OwnerAddress;
  channelId: string;
  channelValues: VoxelValue[];
  junctionValues: JunctionValue[];
}

interface OverlayArea {
  ownerAddress: OwnerAddress;
  voxelValues: VoxelValue[];
}

interface Weather {
  reference: string;
  voxelValues: WeatherVoxelValue[];
}

interface WeatherForecast {
  reference: string;
  voxelValues: ForecastVoxelValue[];
}

interface Microwave {
  mobile: Mobile;
  wifi: Wifi;
}

interface Mobile {
  reference: string;
  plmnId: PlmnId;
  voxelValues: MicrowaveVoxelValue[];
}

interface Wifi {
  reference: string;
  ssid: string;
  voxelValues: MicrowaveVoxelValue[];
}

interface Risk {
  reference: string;
  voxelValues: RiskVoxelValue[];
}

interface VoxelValue {
  id: Id;
  vacant?: boolean;
}

export interface ReserveVoxelValue {
  id: Id;
  reservationTime: ReservationTime;
}

interface WeatherVoxelValue {
  id: Id;
  currentWeather: WeatherDetail;
}

interface ForecastVoxelValue {
  id: Id;
  forecast: ForecastDetail;
}

interface MicrowaveVoxelValue {
  id: Id;
  RSI: number;
}

interface RiskVoxelValue {
  id: Id;
  value: number;
}

interface JunctionValue {
  id: Id;
  connectedChannelIds: string[];
}

interface Id {
  ID: string;
}

interface OwnerAddress {
  grpc: string;
  rest: string;
  other: string;
}

interface ReservationTime {
  period: Period;
  occupation: string;
  reserveId: string;
}

interface Period {
  startTime: string;
  endTime: string;
}

interface WeatherDetail {
  startTime: string;
  endTime: string;
  windDirection: number;
  windSpeed: number;
  cloudRate: number;
  temperature: number;
  dewPoint: number;
  pressure: number;
  precipitation: number;
  visibility: number;
  gggg: string;
}

interface ForecastDetail {
  startTime: string;
  endTime: string;
  windDirection: number;
  windSpeed: number;
  cloudRate: number;
  precipitation: number;
}

interface PlmnId {
  mobileCountryCode: string;
  mobileNetworkCode: string;
}

export interface ISpatialID {
  objectId: string;
}
export interface ISpatialInfoArea {
  figure: IFigure;
  requestType: string[];
}

export interface IFigure {
  identification: {
    ID: 'string';
  };
  tube: {
    start: startEndCoordinates;
    end: startEndCoordinates;
    radian: number;
  };
  polygon: {};
}

interface startEndCoordinates {
  latitude: number;
  longitude: number;
  altitude: number;
  altitudeAttribute: string;
}
