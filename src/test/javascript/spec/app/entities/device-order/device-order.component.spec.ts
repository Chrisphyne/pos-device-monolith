/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import DeviceOrderComponent from '@/entities/device-order/device-order.vue';
import DeviceOrderClass from '@/entities/device-order/device-order.component';
import DeviceOrderService from '@/entities/device-order/device-order.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('b-badge', {});
localVue.directive('b-modal', {});
localVue.component('b-button', {});
localVue.component('router-link', {});

const bModalStub = {
  render: () => {},
  methods: {
    hide: () => {},
    show: () => {},
  },
};

describe('Component Tests', () => {
  describe('DeviceOrder Management Component', () => {
    let wrapper: Wrapper<DeviceOrderClass>;
    let comp: DeviceOrderClass;
    let deviceOrderServiceStub: SinonStubbedInstance<DeviceOrderService>;

    beforeEach(() => {
      deviceOrderServiceStub = sinon.createStubInstance<DeviceOrderService>(DeviceOrderService);
      deviceOrderServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<DeviceOrderClass>(DeviceOrderComponent, {
        store,
        i18n,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          deviceOrderService: () => deviceOrderServiceStub,
        },
      });
      comp = wrapper.vm;
    });

    it('Should call load all on init', async () => {
      // GIVEN
      deviceOrderServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllDeviceOrders();
      await comp.$nextTick();

      // THEN
      expect(deviceOrderServiceStub.retrieve.called).toBeTruthy();
      expect(comp.deviceOrders[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      deviceOrderServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeDeviceOrder();
      await comp.$nextTick();

      // THEN
      expect(deviceOrderServiceStub.delete.called).toBeTruthy();
      expect(deviceOrderServiceStub.retrieve.callCount).toEqual(1);
    });
  });
});
