import { Component, Inject } from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import JhiDataUtils from '@/shared/data/data-utils.service';

import { required, decimal, minValue } from 'vuelidate/lib/validators';

import DeviceModelService from '@/entities/device-model/device-model.service';
import { IDeviceModel } from '@/shared/model/device-model.model';

import { IDevice, Device } from '@/shared/model/device.model';
import DeviceService from './device.service';

const validations: any = {
  device: {
    name: {
      required,
    },
    description: {},
    price: {
      required,
      decimal,
      min: minValue(0),
    },
    deviceSize: {
      required,
    },
    image: {},
    deviceModel: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class DeviceUpdate extends mixins(JhiDataUtils) {
  @Inject('deviceService') private deviceService: () => DeviceService;
  public device: IDevice = new Device();

  @Inject('deviceModelService') private deviceModelService: () => DeviceModelService;

  public deviceModels: IDeviceModel[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.deviceId) {
        vm.retrieveDevice(to.params.deviceId);
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
    if (this.device.id) {
      this.deviceService()
        .update(this.device)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.device.updated', { param: param.id });
          return this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    } else {
      this.deviceService()
        .create(this.device)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.device.created', { param: param.id });
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

  public retrieveDevice(deviceId): void {
    this.deviceService()
      .find(deviceId)
      .then(res => {
        this.device = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public clearInputImage(field, fieldContentType, idInput): void {
    if (this.device && field && fieldContentType) {
      if (Object.prototype.hasOwnProperty.call(this.device, field)) {
        this.device[field] = null;
      }
      if (Object.prototype.hasOwnProperty.call(this.device, fieldContentType)) {
        this.device[fieldContentType] = null;
      }
      if (idInput) {
        (<any>this).$refs[idInput] = null;
      }
    }
  }

  public initRelationships(): void {
    this.deviceModelService()
      .retrieve()
      .then(res => {
        this.deviceModels = res.data;
      });
  }
}
