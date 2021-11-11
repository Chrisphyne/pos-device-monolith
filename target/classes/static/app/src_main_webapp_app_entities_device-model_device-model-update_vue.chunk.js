(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_device-model_device-model-update_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-model/device-model-update.component.ts?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-model/device-model-update.component.ts?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _shared_model_device_model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/model/device-model.model */ "./src/main/webapp/app/shared/model/device-model.model.ts");
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



var validations = {
    deviceModel: {
        name: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        description: {},
    },
};
var DeviceModelUpdate = /** @class */ (function (_super) {
    __extends(DeviceModelUpdate, _super);
    function DeviceModelUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceModel = new _shared_model_device_model_model__WEBPACK_IMPORTED_MODULE_1__.DeviceModel();
        _this.devices = [];
        _this.isSaving = false;
        _this.currentLanguage = '';
        return _this;
    }
    DeviceModelUpdate.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            if (to.params.deviceModelId) {
                vm.retrieveDeviceModel(to.params.deviceModelId);
            }
            vm.initRelationships();
        });
    };
    DeviceModelUpdate.prototype.created = function () {
        var _this = this;
        this.currentLanguage = this.$store.getters.currentLanguage;
        this.$store.watch(function () { return _this.$store.getters.currentLanguage; }, function () {
            _this.currentLanguage = _this.$store.getters.currentLanguage;
        });
    };
    DeviceModelUpdate.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.deviceModel.id) {
            this.deviceModelService()
                .update(this.deviceModel)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.deviceModel.updated', { param: param.id });
                return _this.$root.$bvToast.toast(message.toString(), {
                    toaster: 'b-toaster-top-center',
                    title: 'Info',
                    variant: 'info',
                    solid: true,
                    autoHideDelay: 5000,
                });
            });
        }
        else {
            this.deviceModelService()
                .create(this.deviceModel)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.deviceModel.created', { param: param.id });
                _this.$root.$bvToast.toast(message.toString(), {
                    toaster: 'b-toaster-top-center',
                    title: 'Success',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 5000,
                });
            });
        }
    };
    DeviceModelUpdate.prototype.retrieveDeviceModel = function (deviceModelId) {
        var _this = this;
        this.deviceModelService()
            .find(deviceModelId)
            .then(function (res) {
            _this.deviceModel = res;
        });
    };
    DeviceModelUpdate.prototype.previousState = function () {
        this.$router.go(-1);
    };
    DeviceModelUpdate.prototype.initRelationships = function () {
        var _this = this;
        this.deviceService()
            .retrieve()
            .then(function (res) {
            _this.devices = res.data;
        });
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceModelService'),
        __metadata("design:type", Function)
    ], DeviceModelUpdate.prototype, "deviceModelService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceService'),
        __metadata("design:type", Function)
    ], DeviceModelUpdate.prototype, "deviceService", void 0);
    DeviceModelUpdate = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            validations: validations,
        })
    ], DeviceModelUpdate);
    return DeviceModelUpdate;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (DeviceModelUpdate);


/***/ }),

/***/ "./src/main/webapp/app/shared/model/device-model.model.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/shared/model/device-model.model.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceModel": function() { return /* binding */ DeviceModel; }
/* harmony export */ });
var DeviceModel = /** @class */ (function () {
    function DeviceModel(id, name, description, devices) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.devices = devices;
    }
    return DeviceModel;
}());



/***/ }),

/***/ "./src/main/webapp/app/entities/device-model/device-model-update.vue":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-model/device-model-update.vue ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-model-update.vue?vue&type=template&id=685d425c& */ "./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c&");
/* harmony import */ var _device_model_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-model-update.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/device-model/device-model-update.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _device_model_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__.render,
  _device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('685d425c')) {
      api.createRecord('685d425c', component.options)
    } else {
      api.reload('685d425c', component.options)
    }
    module.hot.accept(/*! ./device-model-update.vue?vue&type=template&id=685d425c& */ "./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-model-update.vue?vue&type=template&id=685d425c& */ "./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c&");
(function () {
      api.rerender('685d425c', {
        render: _device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/device-model/device-model-update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/device-model/device-model-update.component.ts?vue&type=script&lang=ts&":
/*!*************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-model/device-model-update.component.ts?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_model_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./device-model-update.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-model/device-model-update.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_model_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c&":
/*!**********************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c& ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_model_update_vue_vue_type_template_id_685d425c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./device-model-update.vue?vue&type=template&id=685d425c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-model/device-model-update.vue?vue&type=template&id=685d425c& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-8" }, [
      _c(
        "form",
        {
          attrs: { name: "editForm", role: "form", novalidate: "" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.save()
            },
          },
        },
        [
          _c(
            "h2",
            {
              attrs: {
                id: "posdevicerestapiApp.deviceModel.home.createOrEditLabel",
                "data-cy": "DeviceModelCreateUpdateHeading",
              },
              domProps: {
                textContent: _vm._s(
                  _vm.$t(
                    "posdevicerestapiApp.deviceModel.home.createOrEditLabel"
                  )
                ),
              },
            },
            [_vm._v("\n        Create or edit a DeviceModel\n      ")]
          ),
          _vm._v(" "),
          _c("div", [
            _vm.deviceModel.id
              ? _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      attrs: { for: "id" },
                      domProps: {
                        textContent: _vm._s(_vm.$t("global.field.id")),
                      },
                    },
                    [_vm._v("ID")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.deviceModel.id,
                        expression: "deviceModel.id",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "id", name: "id", readonly: "" },
                    domProps: { value: _vm.deviceModel.id },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.deviceModel, "id", $event.target.value)
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "device-model-name" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.deviceModel.name")
                    ),
                  },
                },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.deviceModel.name.$model,
                    expression: "$v.deviceModel.name.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.deviceModel.name.$invalid,
                  invalid: _vm.$v.deviceModel.name.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "name",
                  id: "device-model-name",
                  "data-cy": "name",
                  required: "",
                },
                domProps: { value: _vm.$v.deviceModel.name.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.deviceModel.name,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.deviceModel.name.$anyDirty &&
              _vm.$v.deviceModel.name.$invalid
                ? _c("div", [
                    !_vm.$v.deviceModel.name.required
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.required")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field is required.\n            "
                            ),
                          ]
                        )
                      : _vm._e(),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "device-model-description" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.deviceModel.description")
                    ),
                  },
                },
                [_vm._v("Description")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.deviceModel.description.$model,
                    expression: "$v.deviceModel.description.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.deviceModel.description.$invalid,
                  invalid: _vm.$v.deviceModel.description.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "description",
                  id: "device-model-description",
                  "data-cy": "description",
                },
                domProps: { value: _vm.$v.deviceModel.description.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.deviceModel.description,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", id: "cancel-save" },
                on: {
                  click: function ($event) {
                    return _vm.previousState()
                  },
                },
              },
              [
                _c("font-awesome-icon", { attrs: { icon: "ban" } }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    domProps: {
                      textContent: _vm._s(_vm.$t("entity.action.cancel")),
                    },
                  },
                  [_vm._v("Cancel")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  type: "submit",
                  id: "save-entity",
                  "data-cy": "entityCreateSaveButton",
                  disabled: _vm.$v.deviceModel.$invalid || _vm.isSaving,
                },
              },
              [
                _c("font-awesome-icon", { attrs: { icon: "save" } }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    domProps: {
                      textContent: _vm._s(_vm.$t("entity.action.save")),
                    },
                  },
                  [_vm._v("Save")]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_device-model_device-model-update_vue.chunk.js.map