<template>
  <div>
    <h2 id="page-heading" data-cy="DeviceModelHeading">
      <span v-text="$t('posdevicerestapiApp.deviceModel.home.title')" id="device-model-heading">Device Models</span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info mr-2" v-on:click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon>
          <span v-text="$t('posdevicerestapiApp.deviceModel.home.refreshListLabel')">Refresh List</span>
        </button>
        <router-link :to="{ name: 'DeviceModelCreate' }" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            id="jh-create-entity"
            data-cy="entityCreateButton"
            class="btn btn-primary jh-create-entity create-device-model"
          >
            <font-awesome-icon icon="plus"></font-awesome-icon>
            <span v-text="$t('posdevicerestapiApp.deviceModel.home.createLabel')"> Create a new Device Model </span>
          </button>
        </router-link>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && deviceModels && deviceModels.length === 0">
      <span v-text="$t('posdevicerestapiApp.deviceModel.home.notFound')">No deviceModels found</span>
    </div>
    <div class="table-responsive" v-if="deviceModels && deviceModels.length > 0">
      <table class="table table-striped" aria-describedby="deviceModels">
        <thead>
          <tr>
            <th scope="row" v-on:click="changeOrder('id')">
              <span v-text="$t('global.field.id')">ID</span>
              <jhi-sort-indicator :current-order="propOrder" :reverse="reverse" :field-name="'id'"></jhi-sort-indicator>
            </th>
            <th scope="row" v-on:click="changeOrder('name')">
              <span v-text="$t('posdevicerestapiApp.deviceModel.name')">Name</span>
              <jhi-sort-indicator :current-order="propOrder" :reverse="reverse" :field-name="'name'"></jhi-sort-indicator>
            </th>
            <th scope="row" v-on:click="changeOrder('description')">
              <span v-text="$t('posdevicerestapiApp.deviceModel.description')">Description</span>
              <jhi-sort-indicator :current-order="propOrder" :reverse="reverse" :field-name="'description'"></jhi-sort-indicator>
            </th>
            <th scope="row"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="deviceModel in deviceModels" :key="deviceModel.id" data-cy="entityTable">
            <td>
              <router-link :to="{ name: 'DeviceModelView', params: { deviceModelId: deviceModel.id } }">{{ deviceModel.id }}</router-link>
            </td>
            <td>{{ deviceModel.name }}</td>
            <td>{{ deviceModel.description }}</td>
            <td class="text-right">
              <div class="btn-group">
                <router-link :to="{ name: 'DeviceModelView', params: { deviceModelId: deviceModel.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-info btn-sm details" data-cy="entityDetailsButton">
                    <font-awesome-icon icon="eye"></font-awesome-icon>
                    <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                  </button>
                </router-link>
                <router-link :to="{ name: 'DeviceModelEdit', params: { deviceModelId: deviceModel.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-primary btn-sm edit" data-cy="entityEditButton">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                    <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                  </button>
                </router-link>
                <b-button
                  v-on:click="prepareRemove(deviceModel)"
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
          id="posdevicerestapiApp.deviceModel.delete.question"
          data-cy="deviceModelDeleteDialogHeading"
          v-text="$t('entity.delete.title')"
          >Confirm delete operation</span
        ></span
      >
      <div class="modal-body">
        <p id="jhi-delete-deviceModel-heading" v-text="$t('posdevicerestapiApp.deviceModel.delete.question', { id: removeId })">
          Are you sure you want to delete this Device Model?
        </p>
      </div>
      <div slot="modal-footer">
        <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
        <button
          type="button"
          class="btn btn-primary"
          id="jhi-confirm-delete-deviceModel"
          data-cy="entityConfirmDeleteButton"
          v-text="$t('entity.action.delete')"
          v-on:click="removeDeviceModel()"
        >
          Delete
        </button>
      </div>
    </b-modal>
    <div v-show="deviceModels && deviceModels.length > 0">
      <div class="row justify-content-center">
        <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
      </div>
      <div class="row justify-content-center">
        <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./device-model.component.ts"></script>
