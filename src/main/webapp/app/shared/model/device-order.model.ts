import { IDevice } from '@/shared/model/device.model';
import { IShoppingCart } from '@/shared/model/shopping-cart.model';

export interface IDeviceOrder {
  id?: number;
  quantity?: number;
  totalPrice?: number;
  device?: IDevice;
  cart?: IShoppingCart;
}

export class DeviceOrder implements IDeviceOrder {
  constructor(
    public id?: number,
    public quantity?: number,
    public totalPrice?: number,
    public device?: IDevice,
    public cart?: IShoppingCart
  ) {}
}
