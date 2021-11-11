<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="posdevicerestapiApp.deviceModel.home.createOrEditLabel"
          data-cy="DeviceModelCreateUpdateHeading"
          v-text="$t('posdevicerestapiApp.deviceModel.home.createOrEditLabel')"
        >
          Create or edit a DeviceModel
        </h2>
        <div>
          <div class="form-group" v-if="deviceModel.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="deviceModel.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.deviceModel.name')" for="device-model-name">Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="device-model-name"
              data-cy="name"
              :class="{ valid: !$v.deviceModel.name.$invalid, invalid: $v.deviceModel.name.$invalid }"
              v-model="$v.deviceModel.name.$model"
              required
            />
            <div v-if="$v.deviceModel.name.$anyDirty && $v.deviceModel.name.$invalid">
              <small class="form-text text-danger" v-if="!$v.deviceModel.name.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('posdevicerestapiApp.deviceModel.description')" for="device-model-description"
              >Description</label
            >
            <input
              type="text"
              class="form-control"
              name="description"
              id="device-model-description"
              data-cy="description"
              :class="{ valid: !$v.deviceModel.description.$invalid, invalid: $v.deviceModel.description.$invalid }"
              v-model="$v.deviceModel.description.$model"
            />
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
            :disabled="$v.deviceModel.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./device-model-update.component.ts"></script>
