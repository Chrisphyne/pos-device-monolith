/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import VueRouter from 'vue-router';

import * as config from '@/shared/config/config';
import DeviceOrderDetailComponent from '@/entities/device-order/device-order-details.vue';
import DeviceOrderClass from '@/entities/device-order/device-order-details.component';
import DeviceOrderService from '@/entities/device-order/device-order.service';
import router from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('DeviceOrder Management Detail Component', () => {
    let wrapper: Wrapper<DeviceOrderClass>;
    let comp: DeviceOrderClass;
    let deviceOrderServiceStub: SinonStubbedInstance<DeviceOrderService>;

    beforeEach(() => {
      deviceOrderServiceStub = sinon.createStubInstance<DeviceOrderService>(DeviceOrderService);

      wrapper = shallowMount<DeviceOrderClass>(DeviceOrderDetailComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: { deviceOrderService: () => deviceOrderServiceStub },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundDeviceOrder = { id: 123 };
        deviceOrderServiceStub.find.resolves(foundDeviceOrder);

        // WHEN
        comp.retrieveDeviceOrder(123);
        await comp.$nextTick();

        // THEN
        expect(comp.deviceOrder).toBe(foundDeviceOrder);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        const foundDeviceOrder = { id: 123 };
        deviceOrderServiceStub.find.resolves(foundDeviceOrder);

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
