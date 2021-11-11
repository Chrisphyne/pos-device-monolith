<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="posdevicerestapiApp.device.home.createOrEditLabel"
          data-cy="DeviceCreateUpdateHeading"
          v-text="$t('posdevicerestapiApp.device.home.createOrEditLabel')"
        >
          Create or edit a Device
        </h2>
        <div>
          <div class="form-group" v-if="device.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="device.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.device.name')" for="device-name">Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="device-name"
              data-cy="name"
              :class="{ valid: !$v.device.name.$invalid, invalid: $v.device.name.$invalid }"
              v-model="$v.device.name.$model"
              required
            />
            <div v-if="$v.device.name.$anyDirty && $v.device.name.$invalid">
              <small class="form-text text-danger" v-if="!$v.device.name.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.device.description')" for="device-description"
              >Description</label
            >
            <input
              type="text"
              class="form-control"
              name="description"
              id="device-description"
              data-cy="description"
              :class="{ valid: !$v.device.description.$invalid, invalid: $v.device.description.$invalid }"
              v-model="$v.device.description.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.device.price')" for="device-price">Price</label>
            <input
              type="number"
              class="form-control"
              name="price"
              id="device-price"
              data-cy="price"
              :class="{ valid: !$v.device.price.$invalid, invalid: $v.device.price.$invalid }"
              v-model.number="$v.device.price.$model"
              required
            />
            <div v-if="$v.device.price.$anyDirty && $v.device.price.$invalid">
              <small class="form-text text-danger" v-if="!$v.device.price.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
              <small class="form-text text-danger" v-if="!$v.device.price.min" v-text="$t('entity.validation.min', { min: 0 })">
                This field should be at least 0.
              </small>
              <small class="form-text text-danger" v-if="!$v.device.price.numeric" v-text="$t('entity.validation.number')">
                This field should be a number.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.device.deviceSize')" for="device-deviceSize"
              >Device Size</label
            >
            <select
              class="form-control"
              name="deviceSize"
              :class="{ valid: !$v.device.deviceSize.$invalid, invalid: $v.device.deviceSize.$invalid }"
              v-model="$v.device.deviceSize.$model"
              id="device-deviceSize"
              data-cy="deviceSize"
              required
            >
              <option value="S" v-bind:label="$t('posdevicerestapiApp.Size.S')">S</option>
              <option value="M" v-bind:label="$t('posdevicerestapiApp.Size.M')">M</option>
              <option value="L" v-bind:label="$t('posdevicerestapiApp.Size.L')">L</option>
              <option value="XL" v-bind:label="$t('posdevicerestapiApp.Size.XL')">XL</option>
              <option value="XXL" v-bind:label="$t('posdevicerestapiApp.Size.XXL')">XXL</option>
            </select>
            <div v-if="$v.device.deviceSize.$anyDirty && $v.device.deviceSize.$invalid">
              <small class="form-text text-danger" v-if="!$v.device.deviceSize.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.device.image')" for="device-image">Image</label>
            <div>
              <img
                v-bind:src="'data:' + device.imageContentType + ';base64,' + device.image"
                style="max-height: 100px"
                v-if="device.image"
                alt="device image"
              />
              <div v-if="device.image" class="form-text text-danger clearfix">
                <span class="pull-left">{{ device.imageContentType }}, {{ byteSize(device.image) }}</span>
                <button
                  type="button"
                  v-on:click="clearInputImage('image', 'imageContentType', 'file_image')"
                  class="btn btn-secondary btn-xs pull-right"
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                </button>
              </div>
              <input
                type="file"
                ref="file_image"
                id="file_image"
                data-cy="image"
                v-on:change="setFileData($event, device, 'image', true)"
                accept="image/*"
                v-text="$t('entity.action.addimage')"
              />
            </div>
            <input
              type="hidden"
              class="form-control"
              name="image"
              id="device-image"
              data-cy="image"
              :class="{ valid: !$v.device.image.$invalid, invalid: $v.device.image.$invalid }"
              v-model="$v.device.image.$model"
            />
            <input
              type="hidden"
              class="form-control"
              name="imageContentType"
              id="device-imageContentType"
              v-model="device.imageContentType"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.device.deviceModel')" for="device-deviceModel"
              >Device Model</label
            >
            <select
              class="form-control"
              id="device-deviceModel"
              data-cy="deviceModel"
              name="deviceModel"
              v-model="device.deviceModel"
              required
            >
              <option v-if="!device.deviceModel" v-bind:value="null" selected></option>
              <option
                v-bind:value="device.deviceModel && deviceModelOption.id === device.deviceModel.id ? device.deviceModel : deviceModelOption"
                v-for="deviceModelOption in deviceModels"
                :key="deviceModelOption.id"
              >
                {{ deviceModelOption.name }}
              </option>
            </select>
          </div>
          <div v-if="$v.device.deviceModel.$anyDirty && $v.device.deviceModel.$invalid">
            <small class="form-text text-danger" v-if="!$v.device.deviceModel.required" v-text="$t('entity.validation.required')">
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
            :disabled="$v.device.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./device-update.component.ts"></script>
