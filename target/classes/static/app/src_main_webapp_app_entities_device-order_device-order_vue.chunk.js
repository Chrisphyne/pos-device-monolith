(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_device-order_device-order_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-order/device-order.component.ts?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-order/device-order.component.ts?vue&type=script&lang=ts& ***!
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


var DeviceOrder = /** @class */ (function (_super) {
    __extends(DeviceOrder, _super);
    function DeviceOrder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.removeId = null;
        _this.deviceOrders = [];
        _this.isFetching = false;
        return _this;
    }
    DeviceOrder.prototype.mounted = function () {
        this.retrieveAllDeviceOrders();
    };
    DeviceOrder.prototype.clear = function () {
        this.retrieveAllDeviceOrders();
    };
    DeviceOrder.prototype.retrieveAllDeviceOrders = function () {
        var _this = this;
        this.isFetching = true;
        this.deviceOrderService()
            .retrieve()
            .then(function (res) {
            _this.deviceOrders = res.data;
            _this.isFetching = false;
        }, function (err) {
            _this.isFetching = false;
        });
    };
    DeviceOrder.prototype.handleSyncList = function () {
        this.clear();
    };
    DeviceOrder.prototype.prepareRemove = function (instance) {
        this.removeId = instance.id;
        if (this.$refs.removeEntity) {
            this.$refs.removeEntity.show();
        }
    };
    DeviceOrder.prototype.removeDeviceOrder = function () {
        var _this = this;
        this.deviceOrderService()
            .delete(this.removeId)
            .then(function () {
            var message = _this.$t('posdevicerestapiApp.deviceOrder.deleted', { param: _this.removeId });
            _this.$bvToast.toast(message.toString(), {
                toaster: 'b-toaster-top-center',
                title: 'Info',
                variant: 'danger',
                solid: true,
                autoHideDelay: 5000,
            });
            _this.removeId = null;
            _this.retrieveAllDeviceOrders();
            _this.closeDialog();
        });
    };
    DeviceOrder.prototype.closeDialog = function () {
        this.$refs.removeEntity.hide();
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceOrderService'),
        __metadata("design:type", Function)
    ], DeviceOrder.prototype, "deviceOrderService", void 0);
    DeviceOrder = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], DeviceOrder);
    return DeviceOrder;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (DeviceOrder);


/***/ }),

/***/ "./src/main/webapp/app/entities/device-order/device-order.vue":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-order/device-order.vue ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-order.vue?vue&type=template&id=71492198& */ "./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198&");
/* harmony import */ var _device_order_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-order.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/device-order/device-order.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _device_order_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__.render,
  _device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('71492198')) {
      api.createRecord('71492198', component.options)
    } else {
      api.reload('71492198', component.options)
    }
    module.hot.accept(/*! ./device-order.vue?vue&type=template&id=71492198& */ "./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-order.vue?vue&type=template&id=71492198& */ "./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198&");
(function () {
      api.rerender('71492198', {
        render: _device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/device-order/device-order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/device-order/device-order.component.ts?vue&type=script&lang=ts&":
/*!******************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-order/device-order.component.ts?vue&type=script&lang=ts& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_order_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./device-order.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device-order/device-order.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_order_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198&":
/*!***************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_order_vue_vue_type_template_id_71492198___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./device-order.vue?vue&type=template&id=71492198& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device-order/device-order.vue?vue&type=template&id=71492198& ***!
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
        { attrs: { id: "page-heading", "data-cy": "DeviceOrderHeading" } },
        [
          _c(
            "span",
            {
              attrs: { id: "device-order-heading" },
              domProps: {
                textContent: _vm._s(
                  _vm.$t("posdevicerestapiApp.deviceOrder.home.title")
                ),
              },
            },
            [_vm._v("Device Orders")]
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
                            "posdevicerestapiApp.deviceOrder.home.refreshListLabel"
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
                attrs: { to: { name: "DeviceOrderCreate" }, custom: "" },
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
                              "btn btn-primary jh-create-entity create-device-order",
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
                                      "posdevicerestapiApp.deviceOrder.home.createLabel"
                                    )
                                  ),
                                },
                              },
                              [_vm._v(" Create a new Device Order ")]
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
      !_vm.isFetching && _vm.deviceOrders && _vm.deviceOrders.length === 0
        ? _c("div", { staticClass: "alert alert-warning" }, [
            _c(
              "span",
              {
                domProps: {
                  textContent: _vm._s(
                    _vm.$t("posdevicerestapiApp.deviceOrder.home.notFound")
                  ),
                },
              },
              [_vm._v("No deviceOrders found")]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.deviceOrders && _vm.deviceOrders.length > 0
        ? _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "deviceOrders" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(_vm.$t("global.field.id")),
                          },
                        },
                        [_vm._v("ID")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "row" } }, [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("posdevicerestapiApp.deviceOrder.quantity")
                            ),
                          },
                        },
                        [_vm._v("Quantity")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "row" } }, [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t(
                                "posdevicerestapiApp.deviceOrder.totalPrice"
                              )
                            ),
                          },
                        },
                        [_vm._v("Total Price")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "row" } }, [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("posdevicerestapiApp.deviceOrder.device")
                            ),
                          },
                        },
                        [_vm._v("Device")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "row" } }, [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("posdevicerestapiApp.deviceOrder.cart")
                            ),
                          },
                        },
                        [_vm._v("Cart")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "row" } }),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.deviceOrders, function (deviceOrder) {
                    return _c(
                      "tr",
                      {
                        key: deviceOrder.id,
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
                                    name: "DeviceOrderView",
                                    params: { deviceOrderId: deviceOrder.id },
                                  },
                                },
                              },
                              [_vm._v(_vm._s(deviceOrder.id))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(deviceOrder.quantity))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(deviceOrder.totalPrice))]),
                        _vm._v(" "),
                        _c("td", [
                          deviceOrder.device
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "DeviceView",
                                          params: {
                                            deviceId: deviceOrder.device.id,
                                          },
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(deviceOrder.device.name))]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          deviceOrder.cart
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "ShoppingCartView",
                                          params: {
                                            shoppingCartId: deviceOrder.cart.id,
                                          },
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(deviceOrder.cart.id))]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _c(
                            "div",
                            { staticClass: "btn-group" },
                            [
                              _c("router-link", {
                                attrs: {
                                  to: {
                                    name: "DeviceOrderView",
                                    params: { deviceOrderId: deviceOrder.id },
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
                                    name: "DeviceOrderEdit",
                                    params: { deviceOrderId: deviceOrder.id },
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
                                      return _vm.prepareRemove(deviceOrder)
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
                id: "posdevicerestapiApp.deviceOrder.delete.question",
                "data-cy": "deviceOrderDeleteDialogHeading",
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
              attrs: { id: "jhi-delete-deviceOrder-heading" },
              domProps: {
                textContent: _vm._s(
                  _vm.$t("posdevicerestapiApp.deviceOrder.delete.question", {
                    id: _vm.removeId,
                  })
                ),
              },
            },
            [
              _vm._v(
                "\n        Are you sure you want to delete this Device Order?\n      "
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
                id: "jhi-confirm-delete-deviceOrder",
                "data-cy": "entityConfirmDeleteButton",
              },
              domProps: { textContent: _vm._s(_vm.$t("entity.action.delete")) },
              on: {
                click: function ($event) {
                  return _vm.removeDeviceOrder()
                },
              },
            },
            [_vm._v("\n        Delete\n      ")]
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_device-order_device-order_vue.chunk.js.map