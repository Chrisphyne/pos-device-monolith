import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minValue, decimal } from 'vuelidate/lib/validators';

import DeviceService from '@/entities/device/device.service';
import { IDevice } from '@/shared/model/device.model';

import ShoppingCartService from '@/entities/shopping-cart/shopping-cart.service';
import { IShoppingCart } from '@/shared/model/shopping-cart.model';

import { IDeviceOrder, DeviceOrder } from '@/shared/model/device-order.model';
import DeviceOrderService from './device-order.service';

const validations: any = {
  deviceOrder: {
    quantity: {
      required,
      numeric,
      min: minValue(0),
    },
    totalPrice: {
      required,
      decimal,
      min: minValue(0),
    },
    device: {
      required,
    },
    cart: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class DeviceOrderUpdate extends Vue {
  @Inject('deviceOrderService') private deviceOrderService: () => DeviceOrderService;
  public deviceOrder: IDeviceOrder = new DeviceOrder();

  @Inject('deviceService') private deviceService: () => DeviceService;

  public devices: IDevice[] = [];

  @Inject('shoppingCartService') private shoppingCartService: () => ShoppingCartService;

  public shoppingCarts: IShoppingCart[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.deviceOrderId) {
        vm.retrieveDeviceOrder(to.params.deviceOrderId);
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
    if (this.deviceOrder.id) {
      this.deviceOrderService()
        .update(this.deviceOrder)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.deviceOrder.updated', { param: param.id });
          return this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    } else {
      this.deviceOrderService()
        .create(this.deviceOrder)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.deviceOrder.created', { param: param.id });
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

  public retrieveDeviceOrder(deviceOrderId): void {
    this.deviceOrderService()
      .find(deviceOrderId)
      .then(res => {
        this.deviceOrder = res;
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
    this.shoppingCartService()
      .retrieve()
      .then(res => {
        this.shoppingCarts = res.data;
      });
  }
}
