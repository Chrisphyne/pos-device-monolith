import { IDevice } from '@/shared/model/device.model';

export interface IDeviceModel {
  id?: number;
  name?: string;
  description?: string | null;
  devices?: IDevice[] | null;
}

export class DeviceModel implements IDeviceModel {
  constructor(public id?: number, public name?: string, public description?: string | null, public devices?: IDevice[] | null) {}
}
