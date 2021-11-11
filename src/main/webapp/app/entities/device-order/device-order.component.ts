import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IDeviceOrder } from '@/shared/model/device-order.model';

import DeviceOrderService from './device-order.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class DeviceOrder extends Vue {
  @Inject('deviceOrderService') private deviceOrderService: () => DeviceOrderService;
  private removeId: number = null;

  public deviceOrders: IDeviceOrder[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllDeviceOrders();
  }

  public clear(): void {
    this.retrieveAllDeviceOrders();
  }

  public retrieveAllDeviceOrders(): void {
    this.isFetching = true;

    this.deviceOrderService()
      .retrieve()
      .then(
        res => {
          this.deviceOrders = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public handleSyncList(): void {
    this.clear();
  }

  public prepareRemove(instance: IDeviceOrder): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removeDeviceOrder(): void {
    this.deviceOrderService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('posdevicerestapiApp.deviceOrder.deleted', { param: this.removeId });
        this.$bvToast.toast(message.toString(), {
          toaster: 'b-toaster-top-center',
          title: 'Info',
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000,
        });
        this.removeId = null;
        this.retrieveAllDeviceOrders();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
