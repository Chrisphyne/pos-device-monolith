/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import * as config from '@/shared/config/config';
import DeviceOrderUpdateComponent from '@/entities/device-order/device-order-update.vue';
import DeviceOrderClass from '@/entities/device-order/device-order-update.component';
import DeviceOrderService from '@/entities/device-order/device-order.service';

import DeviceService from '@/entities/device/device.service';

import ShoppingCartService from '@/entities/shopping-cart/shopping-cart.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});
localVue.component('b-input-group', {});
localVue.component('b-input-group-prepend', {});
localVue.component('b-form-datepicker', {});
localVue.component('b-form-input', {});

describe('Component Tests', () => {
  describe('DeviceOrder Management Update Component', () => {
    let wrapper: Wrapper<DeviceOrderClass>;
    let comp: DeviceOrderClass;
    let deviceOrderServiceStub: SinonStubbedInstance<DeviceOrderService>;

    beforeEach(() => {
      deviceOrderServiceStub = sinon.createStubInstance<DeviceOrderService>(DeviceOrderService);

      wrapper = shallowMount<DeviceOrderClass>(DeviceOrderUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          deviceOrderService: () => deviceOrderServiceStub,

          deviceService: () => new DeviceService(),

          shoppingCartService: () => new ShoppingCartService(),
        },
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.deviceOrder = entity;
        deviceOrderServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(deviceOrderServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.deviceOrder = entity;
        deviceOrderServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(deviceOrderServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        const foundDeviceOrder = { id: 123 };
        deviceOrderServiceStub.find.resolves(foundDeviceOrder);
        deviceOrderServiceStub.retrieve.resolves([foundDeviceOrder]);

        // WHEN
        comp.beforeRouteEnter({ params: { deviceOrderId: 123 } }, null, cb => cb(comp));
        await comp.$nextTick();

        // THEN
        expect(comp.deviceOrder).toBe(foundDeviceOrder);
      });
    });

    describe('Previous state', () => {
      it('Should go previous state', async () => {
        comp.previousState();
        await comp.$nextTick();

        expect(comp.$router.currentRoute.fullPath).toContain('/');
      });
    });
  });
});
