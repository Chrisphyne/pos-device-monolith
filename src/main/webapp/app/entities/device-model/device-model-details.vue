<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="deviceModel">
        <h2 class="jh-entity-heading" data-cy="deviceModelDetailsHeading">
          <span v-text="$t('posdevicerestapiApp.deviceModel.detail.title')">DeviceModel</span> {{ deviceModel.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('posdevicerestapiApp.deviceModel.name')">Name</span>
          </dt>
          <dd>
            <span>{{ deviceModel.name }}</span>
          </dd>
          <dt>
            <span v-text="$t('posdevicerestapiApp.deviceModel.description')">Description</span>
          </dt>
          <dd>
            <span>{{ deviceModel.description }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link
          v-if="deviceModel.id"
          :to="{ name: 'DeviceModelEdit', params: { deviceModelId: deviceModel.id } }"
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

<script lang="ts" src="./device-model-details.component.ts"></script>
