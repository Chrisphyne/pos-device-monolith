(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_device-model_device-model_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-model/device-model.component.ts?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-model/device-model.component.ts?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vue2_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-filters */ "./node_modules/vue2-filters/dist/vue2-filters.js");
/* harmony import */ var vue2_filters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_filters__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceModel = /** @class */ (function (_super) {
    __extends(DeviceModel, _super);
    function DeviceModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.removeId = null;
        _this.itemsPerPage = 20;
        _this.queryCount = null;
        _this.page = 1;
        _this.previousPage = 1;
        _this.propOrder = 'id';
        _this.reverse = false;
        _this.totalItems = 0;
        _this.deviceModels = [];
        _this.isFetching = false;
        return _this;
    }
    DeviceModel.prototype.mounted = function () {
        this.retrieveAllDeviceModels();
    };
    DeviceModel.prototype.clear = function () {
        this.page = 1;
        this.retrieveAllDeviceModels();
    };
    DeviceModel.prototype.retrieveAllDeviceModels = function () {
        var _this = this;
        this.isFetching = true;
        var paginationQuery = {
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        };
        this.deviceModelService()
            .retrieve(paginationQuery)
            .then(function (res) {
            _this.deviceModels = res.data;
            _this.totalItems = Number(res.headers['x-total-count']);
            _this.queryCount = _this.totalItems;
            _this.isFetching = false;
        }, function (err) {
            _this.isFetching = false;
        });
    };
    DeviceModel.prototype.handleSyncList = function () {
        this.clear();
    };
    DeviceModel.prototype.prepareRemove = function (instance) {
        this.removeId = instance.id;
        if (this.$refs.removeEntity) {
            this.$refs.removeEntity.show();
        }
    };
    DeviceModel.prototype.removeDeviceModel = function () {
        var _this = this;
        this.deviceModelService()
            .delete(this.removeId)
            .then(function () {
            var message = _this.$t('posdevicerestapiApp.deviceModel.deleted', { param: _this.removeId });
            _this.$bvToast.toast(message.toString(), {
                toaster: 'b-toaster-top-center',
                title: 'Info',
                variant: 'danger',
                solid: true,
                autoHideDelay: 5000,
            });
            _this.removeId = null;
            _this.retrieveAllDeviceModels();
            _this.closeDialog();
        });
    };
    DeviceModel.prototype.sort = function () {
        var result = [this.propOrder + ',' + (this.reverse ? 'desc' : 'asc')];
        if (this.propOrder !== 'id') {
            result.push('id');
        }
        return result;
    };
    DeviceModel.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    DeviceModel.prototype.transition = function () {
        this.retrieveAllDeviceModels();
    };
    DeviceModel.prototype.changeOrder = function (propOrder) {
        this.propOrder = propOrder;
        this.reverse = !this.reverse;
        this.transition();
    };
    DeviceModel.prototype.closeDialog = function () {
        this.$refs.removeEntity.hide();
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceModelService'),
        __metadata("design:type", Function)
    ], DeviceModel.prototype, "deviceModelService", void 0);
    DeviceModel = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], DeviceModel);
    return DeviceModel;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (DeviceModel);


/***/ }),

/***/ "./src/main/webapp/app/entities/device-model/device-model.vue":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-model/device-model.vue ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-model.vue?vue&type=template&id=cece49d8& */ "./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8&");
/* harmony import */ var _device_model_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-model.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/device-model/device-model.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _device_model_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('cece49d8')) {
      api.createRecord('cece49d8', component.options)
    } else {
      api.reload('cece49d8', component.options)
    }
    module.hot.accept(/*! ./device-model.vue?vue&type=template&id=cece49d8& */ "./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-model.vue?vue&type=template&id=cece49d8& */ "./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8&");
(function () {
      api.rerender('cece49d8', {
        render: _device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/device-model/device-model.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/device-model/device-model.component.ts?vue&type=script&lang=ts&":
/*!******************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-model/device-model.component.ts?vue&type=script&lang=ts& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_model_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./device-model.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-model/device-model.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_model_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8&":
/*!***************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_model_vue_vue_type_template_id_cece49d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./device-model.vue?vue&type=template&id=cece49d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-model/device-model.vue?vue&type=template&id=cece49d8& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h2",
        { attrs: { id: "page-heading", "data-cy": "DeviceModelHeading" } },
        [
          _c(
            "span",
            {
              attrs: { id: "device-model-heading" },
              domProps: {
                textContent: _vm._s(
                  _vm.$t("posdevicerestapiApp.deviceModel.home.title")
                ),
              },
            },
            [_vm._v("Device Models")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-end" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-info mr-2",
                  attrs: { disabled: _vm.isFetching },
                  on: { click: _vm.handleSyncList },
                },
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: "sync", spin: _vm.isFetching },
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t(
                            "posdevicerestapiApp.deviceModel.home.refreshListLabel"
                          )
                        ),
                      },
                    },
                    [_vm._v("Refresh List")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("router-link", {
                attrs: { to: { name: "DeviceModelCreate" }, custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var navigate = ref.navigate
                      return [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-primary jh-create-entity create-device-model",
                            attrs: {
                              id: "jh-create-entity",
                              "data-cy": "entityCreateButton",
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "plus" },
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "posdevicerestapiApp.deviceModel.home.createLabel"
                                    )
                                  ),
                                },
                              },
                              [_vm._v(" Create a new Device Model ")]
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      !_vm.isFetching && _vm.deviceModels && _vm.deviceModels.length === 0
        ? _c("div", { staticClass: "alert alert-warning" }, [
            _c(
              "span",
              {
                domProps: {
                  textContent: _vm._s(
                    _vm.$t("posdevicerestapiApp.deviceModel.home.notFound")
                  ),
                },
              },
              [_vm._v("No deviceModels found")]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.deviceModels && _vm.deviceModels.length > 0
        ? _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "deviceModels" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("id")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(_vm.$t("global.field.id")),
                            },
                          },
                          [_vm._v("ID")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "id",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("name")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("posdevicerestapiApp.deviceModel.name")
                              ),
                            },
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "name",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("description")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t(
                                  "posdevicerestapiApp.deviceModel.description"
                                )
                              ),
                            },
                          },
                          [_vm._v("Description")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "description",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "row" } }),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.deviceModels, function (deviceModel) {
                    return _c(
                      "tr",
                      {
                        key: deviceModel.id,
                        attrs: { "data-cy": "entityTable" },
                      },
                      [
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "DeviceModelView",
                                    params: { deviceModelId: deviceModel.id },
                                  },
                                },
                              },
                              [_vm._v(_vm._s(deviceModel.id))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(deviceModel.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(deviceModel.description))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _c(
                            "div",
                            { staticClass: "btn-group" },
                            [
                              _c("router-link", {
                                attrs: {
                                  to: {
                                    name: "DeviceModelView",
                                    params: { deviceModelId: deviceModel.id },
                                  },
                                  custom: "",
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (ref) {
                                        var navigate = ref.navigate
                                        return [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-info btn-sm details",
                                              attrs: {
                                                "data-cy":
                                                  "entityDetailsButton",
                                              },
                                              on: { click: navigate },
                                            },
                                            [
                                              _c("font-awesome-icon", {
                                                attrs: { icon: "eye" },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-none d-md-inline",
                                                  domProps: {
                                                    textContent: _vm._s(
                                                      _vm.$t(
                                                        "entity.action.view"
                                                      )
                                                    ),
                                                  },
                                                },
                                                [_vm._v("View")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              }),
                              _vm._v(" "),
                              _c("router-link", {
                                attrs: {
                                  to: {
                                    name: "DeviceModelEdit",
                                    params: { deviceModelId: deviceModel.id },
                                  },
                                  custom: "",
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (ref) {
                                        var navigate = ref.navigate
                                        return [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-sm edit",
                                              attrs: {
                                                "data-cy": "entityEditButton",
                                              },
                                              on: { click: navigate },
                                            },
                                            [
                                              _c("font-awesome-icon", {
                                                attrs: { icon: "pencil-alt" },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-none d-md-inline",
                                                  domProps: {
                                                    textContent: _vm._s(
                                                      _vm.$t(
                                                        "entity.action.edit"
                                                      )
                                                    ),
                                                  },
                                                },
                                                [_vm._v("Edit")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.removeEntity",
                                      modifiers: { removeEntity: true },
                                    },
                                  ],
                                  staticClass: "btn btn-sm",
                                  attrs: {
                                    variant: "danger",
                                    "data-cy": "entityDeleteButton",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.prepareRemove(deviceModel)
                                    },
                                  },
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: "times" },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "d-none d-md-inline",
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.$t("entity.action.delete")
                                        ),
                                      },
                                    },
                                    [_vm._v("Delete")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
              ]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("b-modal", { ref: "removeEntity", attrs: { id: "removeEntity" } }, [
        _c("span", { attrs: { slot: "modal-title" }, slot: "modal-title" }, [
          _c(
            "span",
            {
              attrs: {
                id: "posdevicerestapiApp.deviceModel.delete.question",
                "data-cy": "deviceModelDeleteDialogHeading",
              },
              domProps: { textContent: _vm._s(_vm.$t("entity.delete.title")) },
            },
            [_vm._v("Confirm delete operation")]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c(
            "p",
            {
              attrs: { id: "jhi-delete-deviceModel-heading" },
              domProps: {
                textContent: _vm._s(
                  _vm.$t("posdevicerestapiApp.deviceModel.delete.question", {
                    id: _vm.removeId,
                  })
                ),
              },
            },
            [
              _vm._v(
                "\n        Are you sure you want to delete this Device Model?\n      "
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { attrs: { slot: "modal-footer" }, slot: "modal-footer" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "button" },
              domProps: { textContent: _vm._s(_vm.$t("entity.action.cancel")) },
              on: {
                click: function ($event) {
                  return _vm.closeDialog()
                },
              },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: {
                type: "button",
                id: "jhi-confirm-delete-deviceModel",
                "data-cy": "entityConfirmDeleteButton",
              },
              domProps: { textContent: _vm._s(_vm.$t("entity.action.delete")) },
              on: {
                click: function ($event) {
                  return _vm.removeDeviceModel()
                },
              },
            },
            [_vm._v("\n        Delete\n      ")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.deviceModels && _vm.deviceModels.length > 0,
              expression: "deviceModels && deviceModels.length > 0",
            },
          ],
        },
        [
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            [
              _c("jhi-item-count", {
                attrs: {
                  page: _vm.page,
                  total: _vm.queryCount,
                  itemsPerPage: _vm.itemsPerPage,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            [
              _c("b-pagination", {
                attrs: {
                  size: "md",
                  "total-rows": _vm.totalItems,
                  "per-page": _vm.itemsPerPage,
                  change: _vm.loadPage(_vm.page),
                },
                model: {
                  value: _vm.page,
                  callback: function ($$v) {
                    _vm.page = $$v
                  },
                  expression: "page",
                },
              }),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_device-model_device-model_vue.chunk.js.map