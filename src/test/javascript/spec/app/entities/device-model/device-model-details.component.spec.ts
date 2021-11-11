/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import VueRouter from 'vue-router';

import * as config from '@/shared/config/config';
import DeviceModelDetailComponent from '@/entities/device-model/device-model-details.vue';
import DeviceModelClass from '@/entities/device-model/device-model-details.component';
import DeviceModelService from '@/entities/device-model/device-model.service';
import router from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('DeviceModel Management Detail Component', () => {
    let wrapper: Wrapper<DeviceModelClass>;
    let comp: DeviceModelClass;
    let deviceModelServiceStub: SinonStubbedInstance<DeviceModelService>;

    beforeEach(() => {
      deviceModelServiceStub = sinon.createStubInstance<DeviceModelService>(DeviceModelService);

      wrapper = shallowMount<DeviceModelClass>(DeviceModelDetailComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: { deviceModelService: () => deviceModelServiceStub },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundDeviceModel = { id: 123 };
        deviceModelServiceStub.find.resolves(foundDeviceModel);

        // WHEN
        comp.retrieveDeviceModel(123);
        await comp.$nextTick();

        // THEN
        expect(comp.deviceModel).toBe(foundDeviceModel);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        const foundDeviceModel = { id: 123 };
        deviceModelServiceStub.find.resolves(foundDeviceModel);

        // WHEN
        comp.beforeRouteEnter({ params: { deviceModelId: 123 } }, null, cb => cb(comp));
        await comp.$nextTick();

        // THEN
        expect(comp.deviceModel).toBe(foundDeviceModel);
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
