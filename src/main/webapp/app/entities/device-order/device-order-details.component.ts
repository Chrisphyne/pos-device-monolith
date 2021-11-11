import { Component, Vue, Inject } from 'vue-property-decorator';

import { IDeviceOrder } from '@/shared/model/device-order.model';
import DeviceOrderService from './device-order.service';

@Component
export default class DeviceOrderDetails extends Vue {
  @Inject('deviceOrderService') private deviceOrderService: () => DeviceOrderService;
  public deviceOrder: IDeviceOrder = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.deviceOrderId) {
        vm.retrieveDeviceOrder(to.params.deviceOrderId);
      }
    });
  }

  public retrieveDeviceOrder(deviceOrderId) {
    this.deviceOrderService()
      .find(deviceOrderId)
      .then(res => {
        this.deviceOrder = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
