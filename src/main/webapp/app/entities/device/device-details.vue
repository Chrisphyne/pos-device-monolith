<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="device">
        <h2 class="jh-entity-heading" data-cy="deviceDetailsHeading">
          <span v-text="$t('posdevicerestapiApp.device.detail.title')">Device</span> {{ device.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('posdevicerestapiApp.device.name')">Name</span>
          </dt>
          <dd>
            <span>{{ device.name }}</span>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.device.description')">Description</span>
          </dt>
          <dd>
            <span>{{ device.description }}</span>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.device.price')">Price</span>
          </dt>
          <dd>
            <span>{{ device.price }}</span>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.device.deviceSize')">Device Size</span>
          </dt>
          <dd>
            <span v-text="$t('posdevicerestapiApp.Size.' + device.deviceSize)">{{ device.deviceSize }}</span>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.device.image')">Image</span>
          </dt>
          <dd>
            <div v-if="device.image">
              <a v-on:click="openFile(device.imageContentType, device.image)">
                <img
                  v-bind:src="'data:' + device.imageContentType + ';base64,' + device.image"
                  style="max-width: 100%"
                  alt="device image"
                />
              </a>
              {{ device.imageContentType }}, {{ byteSize(device.image) }}
            </div>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.device.deviceModel')">Device Model</span>
          </dt>
          <dd>
            <div v-if="device.deviceModel">
              <router-link :to="{ name: 'DeviceModelView', params: { deviceModelId: device.deviceModel.id } }">{{
                device.deviceModel.name
              }}</router-link>
            </div>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="device.id" :to="{ name: 'DeviceEdit', params: { deviceId: device.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./device-details.component.ts"></script>
