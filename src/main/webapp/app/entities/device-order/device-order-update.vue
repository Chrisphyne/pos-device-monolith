<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="posdevicerestapiApp.deviceOrder.home.createOrEditLabel"
          data-cy="DeviceOrderCreateUpdateHeading"
          v-text="$t('posdevicerestapiApp.deviceOrder.home.createOrEditLabel')"
        >
          Create or edit a DeviceOrder
        </h2>
        <div>
          <div class="form-group" v-if="deviceOrder.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="deviceOrder.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.deviceOrder.quantity')" for="device-order-quantity"
              >Quantity</label
            >
            <input
              type="number"
              class="form-control"
              name="quantity"
              id="device-order-quantity"
              data-cy="quantity"
              :class="{ valid: !$v.deviceOrder.quantity.$invalid, invalid: $v.deviceOrder.quantity.$invalid }"
              v-model.number="$v.deviceOrder.quantity.$model"
              required
            />
            <div v-if="$v.deviceOrder.quantity.$anyDirty && $v.deviceOrder.quantity.$invalid">
              <small class="form-text text-danger" v-if="!$v.deviceOrder.quantity.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
              <small class="form-text text-danger" v-if="!$v.deviceOrder.quantity.min" v-text="$t('entity.validation.min', { min: 0 })">
                This field should be at least 0.
              </small>
              <small class="form-text text-danger" v-if="!$v.deviceOrder.quantity.numeric" v-text="$t('entity.validation.number')">
                This field should be a number.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.deviceOrder.totalPrice')" for="device-order-totalPrice"
              >Total Price</label
            >
            <input
              type="number"
              class="form-control"
              name="totalPrice"
              id="device-order-totalPrice"
              data-cy="totalPrice"
              :class="{ valid: !$v.deviceOrder.totalPrice.$invalid, invalid: $v.deviceOrder.totalPrice.$invalid }"
              v-model.number="$v.deviceOrder.totalPrice.$model"
              required
            />
            <div v-if="$v.deviceOrder.totalPrice.$anyDirty && $v.deviceOrder.totalPrice.$invalid">
              <small class="form-text text-danger" v-if="!$v.deviceOrder.totalPrice.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
              <small class="form-text text-danger" v-if="!$v.deviceOrder.totalPrice.min" v-text="$t('entity.validation.min', { min: 0 })">
                This field should be at least 0.
              </small>
              <small class="form-text text-danger" v-if="!$v.deviceOrder.totalPrice.numeric" v-text="$t('entity.validation.number')">
                This field should be a number.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.deviceOrder.device')" for="device-order-device">Device</label>
            <select class="form-control" id="device-order-device" data-cy="device" name="device" v-model="deviceOrder.device" required>
              <option v-if="!deviceOrder.device" v-bind:value="null" selected></option>
              <option
                v-bind:value="deviceOrder.device && deviceOption.id === deviceOrder.device.id ? deviceOrder.device : deviceOption"
                v-for="deviceOption in devices"
                :key="deviceOption.id"
              >
                {{ deviceOption.name }}
              </option>
            </select>
          </div>
          <div v-if="$v.deviceOrder.device.$anyDirty && $v.deviceOrder.device.$invalid">
            <small class="form-text text-danger" v-if="!$v.deviceOrder.device.required" v-text="$t('entity.validation.required')">
              This field is required.
            </small>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.deviceOrder.cart')" for="device-order-cart">Cart</label>
            <select class="form-control" id="device-order-cart" data-cy="cart" name="cart" v-model="deviceOrder.cart" required>
              <option v-if="!deviceOrder.cart" v-bind:value="null" selected></option>
              <option
                v-bind:value="deviceOrder.cart && shoppingCartOption.id === deviceOrder.cart.id ? deviceOrder.cart : shoppingCartOption"
                v-for="shoppingCartOption in shoppingCarts"
                :key="shoppingCartOption.id"
              >
                {{ shoppingCartOption.id }}
              </option>
            </select>
          </div>
          <div v-if="$v.deviceOrder.cart.$anyDirty && $v.deviceOrder.cart.$invalid">
            <small class="form-text text-danger" v-if="!$v.deviceOrder.cart.required" v-text="$t('entity.validation.required')">
              This field is required.
            </small>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="$v.deviceOrder.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./device-order-update.component.ts"></script>
