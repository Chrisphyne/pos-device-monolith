import { Component, Vue, Inject } from 'vue-property-decorator';

import { IDeviceModel } from '@/shared/model/device-model.model';
import DeviceModelService from './device-model.service';

@Component
export default class DeviceModelDetails extends Vue {
  @Inject('deviceModelService') private deviceModelService: () => DeviceModelService;
  public deviceModel: IDeviceModel = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.deviceModelId) {
        vm.retrieveDeviceModel(to.params.deviceModelId);
      }
    });
  }

  public retrieveDeviceModel(deviceModelId) {
    this.deviceModelService()
      .find(deviceModelId)
      .then(res => {
        this.deviceModel = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
