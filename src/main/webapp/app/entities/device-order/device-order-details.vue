<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="deviceOrder">
        <h2 class="jh-entity-heading" data-cy="deviceOrderDetailsHeading">
          <span v-text="$t('posdevicerestapiApp.deviceOrder.detail.title')">DeviceOrder</span> {{ deviceOrder.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('posdevicerestapiApp.deviceOrder.quantity')">Quantity</span>
          </dt>
          <dd>
            <span>{{ deviceOrder.quantity }}</span>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.deviceOrder.totalPrice')">Total Price</span>
          </dt>
          <dd>
            <span>{{ deviceOrder.totalPrice }}</span>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.deviceOrder.device')">Device</span>
          </dt>
          <dd>
            <div v-if="deviceOrder.device">
              <router-link :to="{ name: 'DeviceView', params: { deviceId: deviceOrder.device.id } }">{{
                deviceOrder.device.name
              }}</router-link>
            </div>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.deviceOrder.cart')">Cart</span>
          </dt>
          <dd>
            <div v-if="deviceOrder.cart">
              <router-link :to="{ name: 'ShoppingCartView', params: { shoppingCartId: deviceOrder.cart.id } }">{{
                deviceOrder.cart.id
              }}</router-link>
            </div>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link
          v-if="deviceOrder.id"
          :to="{ name: 'DeviceOrderEdit', params: { deviceOrderId: deviceOrder.id } }"
          custom
          v-slot="{ navigate }"
        >
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./device-order-details.component.ts"></script>
