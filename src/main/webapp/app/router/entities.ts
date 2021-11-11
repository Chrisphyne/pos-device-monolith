import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore

// prettier-ignore
const Device = () => import('@/entities/device/device.vue');
// prettier-ignore
const DeviceUpdate = () => import('@/entities/device/device-update.vue');
// prettier-ignore
const DeviceDetails = () => import('@/entities/device/device-details.vue');
// prettier-ignore
const DeviceModel = () => import('@/entities/device-model/device-model.vue');
// prettier-ignore
const DeviceModelUpdate = () => import('@/entities/device-model/device-model-update.vue');
// prettier-ignore
const DeviceModelDetails = () => import('@/entities/device-model/device-model-details.vue');
// prettier-ignore
const CustomerDetails = () => import('@/entities/customer-details/customer-details.vue');
// prettier-ignore
const CustomerDetailsUpdate = () => import('@/entities/customer-details/customer-details-update.vue');
// prettier-ignore
const CustomerDetailsDetails = () => import('@/entities/customer-details/customer-details-details.vue');
// prettier-ignore
const ShoppingCart = () => import('@/entities/shopping-cart/shopping-cart.vue');
// prettier-ignore
const ShoppingCartUpdate = () => import('@/entities/shopping-cart/shopping-cart-update.vue');
// prettier-ignore
const ShoppingCartDetails = () => import('@/entities/shopping-cart/shopping-cart-details.vue');
// prettier-ignore
const DeviceOrder = () => import('@/entities/device-order/device-order.vue');
// prettier-ignore
const DeviceOrderUpdate = () => import('@/entities/device-order/device-order-update.vue');
// prettier-ignore
const DeviceOrderDetails = () => import('@/entities/device-order/device-order-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default [
  {
    path: '/device',
    name: 'Device',
    component: Device,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device/new',
    name: 'DeviceCreate',
    component: DeviceUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device/:deviceId/edit',
    name: 'DeviceEdit',
    component: DeviceUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device/:deviceId/view',
    name: 'DeviceView',
    component: DeviceDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-model',
    name: 'DeviceModel',
    component: DeviceModel,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-model/new',
    name: 'DeviceModelCreate',
    component: DeviceModelUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-model/:deviceModelId/edit',
    name: 'DeviceModelEdit',
    component: DeviceModelUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-model/:deviceModelId/view',
    name: 'DeviceModelView',
    component: DeviceModelDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer-details',
    name: 'CustomerDetails',
    component: CustomerDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer-details/new',
    name: 'CustomerDetailsCreate',
    component: CustomerDetailsUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer-details/:customerDetailsId/edit',
    name: 'CustomerDetailsEdit',
    component: CustomerDetailsUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer-details/:customerDetailsId/view',
    name: 'CustomerDetailsView',
    component: CustomerDetailsDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/shopping-cart/new',
    name: 'ShoppingCartCreate',
    component: ShoppingCartUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/shopping-cart/:shoppingCartId/edit',
    name: 'ShoppingCartEdit',
    component: ShoppingCartUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/shopping-cart/:shoppingCartId/view',
    name: 'ShoppingCartView',
    component: ShoppingCartDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-order',
    name: 'DeviceOrder',
    component: DeviceOrder,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-order/new',
    name: 'DeviceOrderCreate',
    component: DeviceOrderUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-order/:deviceOrderId/edit',
    name: 'DeviceOrderEdit',
    component: DeviceOrderUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/device-order/:deviceOrderId/view',
    name: 'DeviceOrderView',
    component: DeviceOrderDetails,
    meta: { authorities: [Authority.USER] },
  },
  // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
];
