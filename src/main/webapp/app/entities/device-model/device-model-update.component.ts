import { Component, Vue, Inject } from 'vue-property-decorator';

import { required } from 'vuelidate/lib/validators';

import DeviceService from '@/entities/device/device.service';
import { IDevice } from '@/shared/model/device.model';

import { IDeviceModel, DeviceModel } from '@/shared/model/device-model.model';
import DeviceModelService from './device-model.service';

const validations: any = {
  deviceModel: {
    name: {
      required,
    },
    description: {},
  },
};

@Component({
  validations,
})
export default class DeviceModelUpdate extends Vue {
  @Inject('deviceModelService') private deviceModelService: () => DeviceModelService;
  public deviceModel: IDeviceModel = new DeviceModel();

  @Inject('deviceService') private deviceService: () => DeviceService;

  public devices: IDevice[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.deviceModelId) {
        vm.retrieveDeviceModel(to.params.deviceModelId);
      }
      vm.initRelationships();
    });
  }

  created(): void {
    this.currentLanguage = this.$store.getters.currentLanguage;
    this.$store.watch(
      () => this.$store.getters.currentLanguage,
      () => {
        this.currentLanguage = this.$store.getters.currentLanguage;
      }
    );
  }

  public save(): void {
    this.isSaving = true;
    if (this.deviceModel.id) {
      this.deviceModelService()
        .update(this.deviceModel)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.deviceModel.updated', { param: param.id });
          return this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    } else {
      this.deviceModelService()
        .create(this.deviceModel)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.deviceModel.created', { param: param.id });
          this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Success',
            variant: 'success',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    }
  }

  public retrieveDeviceModel(deviceModelId): void {
    this.deviceModelService()
      .find(deviceModelId)
      .then(res => {
        this.deviceModel = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.deviceService()
      .retrieve()
      .then(res => {
        this.devices = res.data;
      });
  }
}
