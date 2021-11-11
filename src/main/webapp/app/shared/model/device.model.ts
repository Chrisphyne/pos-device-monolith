import { IDeviceModel } from '@/shared/model/device-model.model';

import { Size } from '@/shared/model/enumerations/size.model';
export interface IDevice {
  id?: number;
  name?: string;
  description?: string | null;
  price?: number;
  deviceSize?: Size;
  imageContentType?: string | null;
  image?: string | null;
  deviceModel?: IDeviceModel;
}

export class Device implements IDevice {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string | null,
    public price?: number,
    public deviceSize?: Size,
    public imageContentType?: string | null,
    public image?: string | null,
    public deviceModel?: IDeviceModel
  ) {}
}
