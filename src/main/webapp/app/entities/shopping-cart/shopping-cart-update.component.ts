import { Component, Vue, Inject } from 'vue-property-decorator';

import { required, decimal, minValue } from 'vuelidate/lib/validators';
import dayjs from 'dayjs';
import { DATE_TIME_LONG_FORMAT } from '@/shared/date/filters';

import DeviceOrderService from '@/entities/device-order/device-order.service';
import { IDeviceOrder } from '@/shared/model/device-order.model';

import CustomerDetailsService from '@/entities/customer-details/customer-details.service';
import { ICustomerDetails } from '@/shared/model/customer-details.model';

import { IShoppingCart, ShoppingCart } from '@/shared/model/shopping-cart.model';
import ShoppingCartService from './shopping-cart.service';

const validations: any = {
  shoppingCart: {
    placedDate: {
      required,
    },
    status: {
      required,
    },
    totalPrice: {
      required,
      decimal,
      min: minValue(0),
    },
    paymentMethod: {
      required,
    },
    paymentReference: {},
    customerDetails: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class ShoppingCartUpdate extends Vue {
  @Inject('shoppingCartService') private shoppingCartService: () => ShoppingCartService;
  public shoppingCart: IShoppingCart = new ShoppingCart();

  @Inject('deviceOrderService') private deviceOrderService: () => DeviceOrderService;

  public deviceOrders: IDeviceOrder[] = [];

  @Inject('customerDetailsService') private customerDetailsService: () => CustomerDetailsService;

  public customerDetails: ICustomerDetails[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.shoppingCartId) {
        vm.retrieveShoppingCart(to.params.shoppingCartId);
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
    if (this.shoppingCart.id) {
      this.shoppingCartService()
        .update(this.shoppingCart)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.shoppingCart.updated', { param: param.id });
          return this.$root.$bvToast.toast(message.toString(), {
            toaster: 'b-toaster-top-center',
            title: 'Info',
            variant: 'info',
            solid: true,
            autoHideDelay: 5000,
          });
        });
    } else {
      this.shoppingCartService()
        .create(this.shoppingCart)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('posdevicerestapiApp.shoppingCart.created', { param: param.id });
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

  public convertDateTimeFromServer(date: Date): string {
    if (date && dayjs(date).isValid()) {
      return dayjs(date).format(DATE_TIME_LONG_FORMAT);
    }
    return null;
  }

  public updateInstantField(field, event) {
    if (event.target.value) {
      this.shoppingCart[field] = dayjs(event.target.value, DATE_TIME_LONG_FORMAT);
    } else {
      this.shoppingCart[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.shoppingCart[field] = dayjs(event.target.value, DATE_TIME_LONG_FORMAT);
    } else {
      this.shoppingCart[field] = null;
    }
  }

  public retrieveShoppingCart(shoppingCartId): void {
    this.shoppingCartService()
      .find(shoppingCartId)
      .then(res => {
        res.placedDate = new Date(res.placedDate);
        this.shoppingCart = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.deviceOrderService()
      .retrieve()
      .then(res => {
        this.deviceOrders = res.data;
      });
    this.customerDetailsService()
      .retrieve()
      .then(res => {
        this.customerDetails = res.data;
      });
  }
}
