(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_device-order_device-order-update_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-order/device-order-update.component.ts?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-order/device-order-update.component.ts?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _shared_model_device_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/model/device-order.model */ "./src/main/webapp/app/shared/model/device-order.model.ts");
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
    deviceOrder: {
        quantity: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.numeric,
            min: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minValue)(0),
        },
        totalPrice: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            decimal: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.decimal,
            min: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minValue)(0),
        },
        device: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        cart: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
    },
};
var DeviceOrderUpdate = /** @class */ (function (_super) {
    __extends(DeviceOrderUpdate, _super);
    function DeviceOrderUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceOrder = new _shared_model_device_order_model__WEBPACK_IMPORTED_MODULE_1__.DeviceOrder();
        _this.devices = [];
        _this.shoppingCarts = [];
        _this.isSaving = false;
        _this.currentLanguage = '';
        return _this;
    }
    DeviceOrderUpdate.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            if (to.params.deviceOrderId) {
                vm.retrieveDeviceOrder(to.params.deviceOrderId);
            }
            vm.initRelationships();
        });
    };
    DeviceOrderUpdate.prototype.created = function () {
        var _this = this;
        this.currentLanguage = this.$store.getters.currentLanguage;
        this.$store.watch(function () { return _this.$store.getters.currentLanguage; }, function () {
            _this.currentLanguage = _this.$store.getters.currentLanguage;
        });
    };
    DeviceOrderUpdate.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.deviceOrder.id) {
            this.deviceOrderService()
                .update(this.deviceOrder)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.deviceOrder.updated', { param: param.id });
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
            this.deviceOrderService()
                .create(this.deviceOrder)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.deviceOrder.created', { param: param.id });
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
    DeviceOrderUpdate.prototype.retrieveDeviceOrder = function (deviceOrderId) {
        var _this = this;
        this.deviceOrderService()
            .find(deviceOrderId)
            .then(function (res) {
            _this.deviceOrder = res;
        });
    };
    DeviceOrderUpdate.prototype.previousState = function () {
        this.$router.go(-1);
    };
    DeviceOrderUpdate.prototype.initRelationships = function () {
        var _this = this;
        this.deviceService()
            .retrieve()
            .then(function (res) {
            _this.devices = res.data;
        });
        this.shoppingCartService()
            .retrieve()
            .then(function (res) {
            _this.shoppingCarts = res.data;
        });
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceOrderService'),
        __metadata("design:type", Function)
    ], DeviceOrderUpdate.prototype, "deviceOrderService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceService'),
        __metadata("design:type", Function)
    ], DeviceOrderUpdate.prototype, "deviceService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('shoppingCartService'),
        __metadata("design:type", Function)
    ], DeviceOrderUpdate.prototype, "shoppingCartService", void 0);
    DeviceOrderUpdate = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            validations: validations,
        })
    ], DeviceOrderUpdate);
    return DeviceOrderUpdate;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (DeviceOrderUpdate);


/***/ }),

/***/ "./src/main/webapp/app/shared/model/device-order.model.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/shared/model/device-order.model.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceOrder": function() { return /* binding */ DeviceOrder; }
/* harmony export */ });
var DeviceOrder = /** @class */ (function () {
    function DeviceOrder(id, quantity, totalPrice, device, cart) {
        this.id = id;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.device = device;
        this.cart = cart;
    }
    return DeviceOrder;
}());



/***/ }),

/***/ "./src/main/webapp/app/entities/device-order/device-order-update.vue":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-order/device-order-update.vue ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-order-update.vue?vue&type=template&id=08e5e6b2& */ "./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2&");
/* harmony import */ var _device_order_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-order-update.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/device-order/device-order-update.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _device_order_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__.render,
  _device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('08e5e6b2')) {
      api.createRecord('08e5e6b2', component.options)
    } else {
      api.reload('08e5e6b2', component.options)
    }
    module.hot.accept(/*! ./device-order-update.vue?vue&type=template&id=08e5e6b2& */ "./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-order-update.vue?vue&type=template&id=08e5e6b2& */ "./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2&");
(function () {
      api.rerender('08e5e6b2', {
        render: _device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/device-order/device-order-update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/device-order/device-order-update.component.ts?vue&type=script&lang=ts&":
/*!*************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-order/device-order-update.component.ts?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_order_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./device-order-update.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-order/device-order-update.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_order_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2&":
/*!**********************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2& ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_order_update_vue_vue_type_template_id_08e5e6b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./device-order-update.vue?vue&type=template&id=08e5e6b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-order/device-order-update.vue?vue&type=template&id=08e5e6b2& ***!
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
                id: "posdevicerestapiApp.deviceOrder.home.createOrEditLabel",
                "data-cy": "DeviceOrderCreateUpdateHeading",
              },
              domProps: {
                textContent: _vm._s(
                  _vm.$t(
                    "posdevicerestapiApp.deviceOrder.home.createOrEditLabel"
                  )
                ),
              },
            },
            [_vm._v("\n        Create or edit a DeviceOrder\n      ")]
          ),
          _vm._v(" "),
          _c("div", [
            _vm.deviceOrder.id
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
                        value: _vm.deviceOrder.id,
                        expression: "deviceOrder.id",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "id", name: "id", readonly: "" },
                    domProps: { value: _vm.deviceOrder.id },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.deviceOrder, "id", $event.target.value)
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
                  attrs: { for: "device-order-quantity" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.deviceOrder.quantity")
                    ),
                  },
                },
                [_vm._v("Quantity")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.$v.deviceOrder.quantity.$model,
                    expression: "$v.deviceOrder.quantity.$model",
                    modifiers: { number: true },
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.deviceOrder.quantity.$invalid,
                  invalid: _vm.$v.deviceOrder.quantity.$invalid,
                },
                attrs: {
                  type: "number",
                  name: "quantity",
                  id: "device-order-quantity",
                  "data-cy": "quantity",
                  required: "",
                },
                domProps: { value: _vm.$v.deviceOrder.quantity.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.deviceOrder.quantity,
                      "$model",
                      _vm._n($event.target.value)
                    )
                  },
                  blur: function ($event) {
                    return _vm.$forceUpdate()
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.deviceOrder.quantity.$anyDirty &&
              _vm.$v.deviceOrder.quantity.$invalid
                ? _c("div", [
                    !_vm.$v.deviceOrder.quantity.required
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
                    _vm._v(" "),
                    !_vm.$v.deviceOrder.quantity.min
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.min", { min: 0 })
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field should be at least 0.\n            "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.$v.deviceOrder.quantity.numeric
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.number")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field should be a number.\n            "
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
                  attrs: { for: "device-order-totalPrice" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.deviceOrder.totalPrice")
                    ),
                  },
                },
                [_vm._v("Total Price")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.$v.deviceOrder.totalPrice.$model,
                    expression: "$v.deviceOrder.totalPrice.$model",
                    modifiers: { number: true },
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.deviceOrder.totalPrice.$invalid,
                  invalid: _vm.$v.deviceOrder.totalPrice.$invalid,
                },
                attrs: {
                  type: "number",
                  name: "totalPrice",
                  id: "device-order-totalPrice",
                  "data-cy": "totalPrice",
                  required: "",
                },
                domProps: { value: _vm.$v.deviceOrder.totalPrice.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.deviceOrder.totalPrice,
                      "$model",
                      _vm._n($event.target.value)
                    )
                  },
                  blur: function ($event) {
                    return _vm.$forceUpdate()
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.deviceOrder.totalPrice.$anyDirty &&
              _vm.$v.deviceOrder.totalPrice.$invalid
                ? _c("div", [
                    !_vm.$v.deviceOrder.totalPrice.required
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
                    _vm._v(" "),
                    !_vm.$v.deviceOrder.totalPrice.min
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.min", { min: 0 })
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field should be at least 0.\n            "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.$v.deviceOrder.totalPrice.numeric
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.number")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field should be a number.\n            "
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
                  attrs: { for: "device-order-device" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.deviceOrder.device")
                    ),
                  },
                },
                [_vm._v("Device")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.deviceOrder.device,
                      expression: "deviceOrder.device",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "device-order-device",
                    "data-cy": "device",
                    name: "device",
                    required: "",
                  },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.deviceOrder,
                        "device",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  !_vm.deviceOrder.device
                    ? _c("option", {
                        attrs: { selected: "" },
                        domProps: { value: null },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.devices, function (deviceOption) {
                    return _c(
                      "option",
                      {
                        key: deviceOption.id,
                        domProps: {
                          value:
                            _vm.deviceOrder.device &&
                            deviceOption.id === _vm.deviceOrder.device.id
                              ? _vm.deviceOrder.device
                              : deviceOption,
                        },
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(deviceOption.name) +
                            "\n            "
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _vm.$v.deviceOrder.device.$anyDirty &&
            _vm.$v.deviceOrder.device.$invalid
              ? _c("div", [
                  !_vm.$v.deviceOrder.device.required
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
                            "\n            This field is required.\n          "
                          ),
                        ]
                      )
                    : _vm._e(),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "device-order-cart" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.deviceOrder.cart")
                    ),
                  },
                },
                [_vm._v("Cart")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.deviceOrder.cart,
                      expression: "deviceOrder.cart",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "device-order-cart",
                    "data-cy": "cart",
                    name: "cart",
                    required: "",
                  },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.deviceOrder,
                        "cart",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  !_vm.deviceOrder.cart
                    ? _c("option", {
                        attrs: { selected: "" },
                        domProps: { value: null },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.shoppingCarts, function (shoppingCartOption) {
                    return _c(
                      "option",
                      {
                        key: shoppingCartOption.id,
                        domProps: {
                          value:
                            _vm.deviceOrder.cart &&
                            shoppingCartOption.id === _vm.deviceOrder.cart.id
                              ? _vm.deviceOrder.cart
                              : shoppingCartOption,
                        },
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(shoppingCartOption.id) +
                            "\n            "
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _vm.$v.deviceOrder.cart.$anyDirty &&
            _vm.$v.deviceOrder.cart.$invalid
              ? _c("div", [
                  !_vm.$v.deviceOrder.cart.required
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
                            "\n            This field is required.\n          "
                          ),
                        ]
                      )
                    : _vm._e(),
                ])
              : _vm._e(),
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
                  disabled: _vm.$v.deviceOrder.$invalid || _vm.isSaving,
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
//# sourceMappingURL=src_main_webapp_app_entities_device-order_device-order-update_vue.chunk.js.map