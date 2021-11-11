<template>
  <div>
    <h2 id="page-heading" data-cy="DeviceOrderHeading">
      <span v-text="$t('posdevicerestapiApp.deviceOrder.home.title')" id="device-order-heading">Device Orders</span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info mr-2" v-on:click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon>
          <span v-text="$t('posdevicerestapiApp.deviceOrder.home.refreshListLabel')">Refresh List</span>
        </button>
        <router-link :to="{ name: 'DeviceOrderCreate' }" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            id="jh-create-entity"
            data-cy="entityCreateButton"
            class="btn btn-primary jh-create-entity create-device-order"
          >
            <font-awesome-icon icon="plus"></font-awesome-icon>
            <span v-text="$t('posdevicerestapiApp.deviceOrder.home.createLabel')"> Create a new Device Order </span>
          </button>
        </router-link>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && deviceOrders && deviceOrders.length === 0">
      <span v-text="$t('posdevicerestapiApp.deviceOrder.home.notFound')">No deviceOrders found</span>
    </div>
    <div class="table-responsive" v-if="deviceOrders && deviceOrders.length > 0">
      <table class="table table-striped" aria-describedby="deviceOrders">
        <thead>
          <tr>
            <th scope="row"><span v-text="$t('global.field.id')">ID</span></th>
            <th scope="row"><span v-text="$t('posdevicerestapiApp.deviceOrder.quantity')">Quantity</span></th>
            <th scope="row"><span v-text="$t('posdevicerestapiApp.deviceOrder.totalPrice')">Total Price</span></th>
            <th scope="row"><span v-text="$t('posdevicerestapiApp.deviceOrder.device')">Device</span></th>
            <th scope="row"><span v-text="$t('posdevicerestapiApp.deviceOrder.cart')">Cart</span></th>
            <th scope="row"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="deviceOrder in deviceOrders" :key="deviceOrder.id" data-cy="entityTable">
            <td>
              <router-link :to="{ name: 'DeviceOrderView', params: { deviceOrderId: deviceOrder.id } }">{{ deviceOrder.id }}</router-link>
            </td>
            <td>{{ deviceOrder.quantity }}</td>
            <td>{{ deviceOrder.totalPrice }}</td>
            <td>
              <div v-if="deviceOrder.device">
                <router-link :to="{ name: 'DeviceView', params: { deviceId: deviceOrder.device.id } }">{{
                  deviceOrder.device.name
                }}</router-link>
              </div>
            </td>
            <td>
              <div v-if="deviceOrder.cart">
                <router-link :to="{ name: 'ShoppingCartView', params: { shoppingCartId: deviceOrder.cart.id } }">{{
                  deviceOrder.cart.id
                }}</router-link>
              </div>
            </td>
            <td class="text-right">
              <div class="btn-group">
                <router-link :to="{ name: 'DeviceOrderView', params: { deviceOrderId: deviceOrder.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-info btn-sm details" data-cy="entityDetailsButton">
                    <font-awesome-icon icon="eye"></font-awesome-icon>
                    <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                  </button>
                </router-link>
                <router-link :to="{ name: 'DeviceOrderEdit', params: { deviceOrderId: deviceOrder.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-primary btn-sm edit" data-cy="entityEditButton">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                    <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                  </button>
                </router-link>
                <b-button
                  v-on:click="prepareRemove(deviceOrder)"
                  variant="danger"
                  class="btn btn-sm"
                  data-cy="entityDeleteButton"
                  v-b-modal.removeEntity
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                  <span class="d-none d-md-inline" v-text="$t('entity.action.delete')">Delete</span>
                </b-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal ref="removeEntity" id="removeEntity">
      <span slot="modal-title"
        ><span
          id="posdevicerestapiApp.deviceOrder.delete.question"
          data-cy="deviceOrderDeleteDialogHeading"
          v-text="$t('entity.delete.title')"
          >Confirm delete operation</span
        ></span
      >
      <div class="modal-body">
        <p id="jhi-delete-deviceOrder-heading" v-text="$t('posdevicerestapiApp.deviceOrder.delete.question', { id: removeId })">
          Are you sure you want to delete this Device Order?
        </p>
      </div>
      <div slot="modal-footer">
        <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
        <button
          type="button"
          class="btn btn-primary"
          id="jhi-confirm-delete-deviceOrder"
          data-cy="entityConfirmDeleteButton"
          v-text="$t('entity.action.delete')"
          v-on:click="removeDeviceOrder()"
        >
          Delete
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./device-order.component.ts"></script>
