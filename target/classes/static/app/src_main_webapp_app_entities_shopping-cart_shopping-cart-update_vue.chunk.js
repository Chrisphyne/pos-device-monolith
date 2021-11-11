(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_shopping-cart_shopping-cart-update_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.component.ts?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.component.ts?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_date_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/date/filters */ "./src/main/webapp/app/shared/date/filters.ts");
/* harmony import */ var _shared_model_shopping_cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/model/shopping-cart.model */ "./src/main/webapp/app/shared/model/shopping-cart.model.ts");
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
    shoppingCart: {
        placedDate: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        },
        status: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        },
        totalPrice: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
            decimal: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.decimal,
            min: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minValue)(0),
        },
        paymentMethod: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        },
        paymentReference: {},
        customerDetails: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        },
    },
};
var ShoppingCartUpdate = /** @class */ (function (_super) {
    __extends(ShoppingCartUpdate, _super);
    function ShoppingCartUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shoppingCart = new _shared_model_shopping_cart_model__WEBPACK_IMPORTED_MODULE_3__.ShoppingCart();
        _this.deviceOrders = [];
        _this.customerDetails = [];
        _this.isSaving = false;
        _this.currentLanguage = '';
        return _this;
    }
    ShoppingCartUpdate.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            if (to.params.shoppingCartId) {
                vm.retrieveShoppingCart(to.params.shoppingCartId);
            }
            vm.initRelationships();
        });
    };
    ShoppingCartUpdate.prototype.created = function () {
        var _this = this;
        this.currentLanguage = this.$store.getters.currentLanguage;
        this.$store.watch(function () { return _this.$store.getters.currentLanguage; }, function () {
            _this.currentLanguage = _this.$store.getters.currentLanguage;
        });
    };
    ShoppingCartUpdate.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.shoppingCart.id) {
            this.shoppingCartService()
                .update(this.shoppingCart)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.shoppingCart.updated', { param: param.id });
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
            this.shoppingCartService()
                .create(this.shoppingCart)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.shoppingCart.created', { param: param.id });
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
    ShoppingCartUpdate.prototype.convertDateTimeFromServer = function (date) {
        if (date && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).isValid()) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).format(_shared_date_filters__WEBPACK_IMPORTED_MODULE_2__.DATE_TIME_LONG_FORMAT);
        }
        return null;
    };
    ShoppingCartUpdate.prototype.updateInstantField = function (field, event) {
        if (event.target.value) {
            this.shoppingCart[field] = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(event.target.value, _shared_date_filters__WEBPACK_IMPORTED_MODULE_2__.DATE_TIME_LONG_FORMAT);
        }
        else {
            this.shoppingCart[field] = null;
        }
    };
    ShoppingCartUpdate.prototype.updateZonedDateTimeField = function (field, event) {
        if (event.target.value) {
            this.shoppingCart[field] = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(event.target.value, _shared_date_filters__WEBPACK_IMPORTED_MODULE_2__.DATE_TIME_LONG_FORMAT);
        }
        else {
            this.shoppingCart[field] = null;
        }
    };
    ShoppingCartUpdate.prototype.retrieveShoppingCart = function (shoppingCartId) {
        var _this = this;
        this.shoppingCartService()
            .find(shoppingCartId)
            .then(function (res) {
            res.placedDate = new Date(res.placedDate);
            _this.shoppingCart = res;
        });
    };
    ShoppingCartUpdate.prototype.previousState = function () {
        this.$router.go(-1);
    };
    ShoppingCartUpdate.prototype.initRelationships = function () {
        var _this = this;
        this.deviceOrderService()
            .retrieve()
            .then(function (res) {
            _this.deviceOrders = res.data;
        });
        this.customerDetailsService()
            .retrieve()
            .then(function (res) {
            _this.customerDetails = res.data;
        });
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('shoppingCartService'),
        __metadata("design:type", Function)
    ], ShoppingCartUpdate.prototype, "shoppingCartService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceOrderService'),
        __metadata("design:type", Function)
    ], ShoppingCartUpdate.prototype, "deviceOrderService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('customerDetailsService'),
        __metadata("design:type", Function)
    ], ShoppingCartUpdate.prototype, "customerDetailsService", void 0);
    ShoppingCartUpdate = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            validations: validations,
        })
    ], ShoppingCartUpdate);
    return ShoppingCartUpdate;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartUpdate);


/***/ }),

/***/ "./src/main/webapp/app/shared/model/shopping-cart.model.ts":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/shared/model/shopping-cart.model.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCart": function() { return /* binding */ ShoppingCart; }
/* harmony export */ });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(id, placedDate, status, totalPrice, paymentMethod, paymentReference, orders, customerDetails) {
        this.id = id;
        this.placedDate = placedDate;
        this.status = status;
        this.totalPrice = totalPrice;
        this.paymentMethod = paymentMethod;
        this.paymentReference = paymentReference;
        this.orders = orders;
        this.customerDetails = customerDetails;
    }
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue":
/*!*****************************************************************************!*\
  !*** ./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-update.vue?vue&type=template&id=c9545d74& */ "./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74&");
/* harmony import */ var _shopping_cart_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart-update.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _shopping_cart_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__.render,
  _shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('c9545d74')) {
      api.createRecord('c9545d74', component.options)
    } else {
      api.reload('c9545d74', component.options)
    }
    module.hot.accept(/*! ./shopping-cart-update.vue?vue&type=template&id=c9545d74& */ "./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-update.vue?vue&type=template&id=c9545d74& */ "./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74&");
(function () {
      api.rerender('c9545d74', {
        render: _shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.component.ts?vue&type=script&lang=ts&":
/*!***************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.component.ts?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_shopping_cart_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./shopping-cart-update.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_shopping_cart_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74&":
/*!************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74& ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_cart_update_vue_vue_type_template_id_c9545d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shopping-cart-update.vue?vue&type=template&id=c9545d74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/shopping-cart/shopping-cart-update.vue?vue&type=template&id=c9545d74& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                id: "posdevicerestapiApp.shoppingCart.home.createOrEditLabel",
                "data-cy": "ShoppingCartCreateUpdateHeading",
              },
              domProps: {
                textContent: _vm._s(
                  _vm.$t(
                    "posdevicerestapiApp.shoppingCart.home.createOrEditLabel"
                  )
                ),
              },
            },
            [_vm._v("\n        Create or edit a ShoppingCart\n      ")]
          ),
          _vm._v(" "),
          _c("div", [
            _vm.shoppingCart.id
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
                        value: _vm.shoppingCart.id,
                        expression: "shoppingCart.id",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "id", name: "id", readonly: "" },
                    domProps: { value: _vm.shoppingCart.id },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.shoppingCart, "id", $event.target.value)
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
                  attrs: { for: "shopping-cart-placedDate" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.shoppingCart.placedDate")
                    ),
                  },
                },
                [_vm._v("Placed Date")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex" }, [
                _c("input", {
                  staticClass: "form-control",
                  class: {
                    valid: !_vm.$v.shoppingCart.placedDate.$invalid,
                    invalid: _vm.$v.shoppingCart.placedDate.$invalid,
                  },
                  attrs: {
                    id: "shopping-cart-placedDate",
                    "data-cy": "placedDate",
                    type: "datetime-local",
                    name: "placedDate",
                    required: "",
                  },
                  domProps: {
                    value: _vm.convertDateTimeFromServer(
                      _vm.$v.shoppingCart.placedDate.$model
                    ),
                  },
                  on: {
                    change: function ($event) {
                      return _vm.updateInstantField("placedDate", $event)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _vm.$v.shoppingCart.placedDate.$anyDirty &&
              _vm.$v.shoppingCart.placedDate.$invalid
                ? _c("div", [
                    !_vm.$v.shoppingCart.placedDate.required
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
                    !_vm.$v.shoppingCart.placedDate.ZonedDateTimelocal
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.ZonedDateTimelocal")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field should be a date and time.\n            "
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
                  attrs: { for: "shopping-cart-status" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.shoppingCart.status")
                    ),
                  },
                },
                [_vm._v("Status")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.shoppingCart.status.$model,
                      expression: "$v.shoppingCart.status.$model",
                    },
                  ],
                  staticClass: "form-control",
                  class: {
                    valid: !_vm.$v.shoppingCart.status.$invalid,
                    invalid: _vm.$v.shoppingCart.status.$invalid,
                  },
                  attrs: {
                    name: "status",
                    id: "shopping-cart-status",
                    "data-cy": "status",
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
                        _vm.$v.shoppingCart.status,
                        "$model",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "COMPLETED",
                        label: _vm.$t(
                          "posdevicerestapiApp.OrderStatus.COMPLETED"
                        ),
                      },
                    },
                    [_vm._v("COMPLETED")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "PAID",
                        label: _vm.$t("posdevicerestapiApp.OrderStatus.PAID"),
                      },
                    },
                    [_vm._v("PAID")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "PENDING",
                        label: _vm.$t(
                          "posdevicerestapiApp.OrderStatus.PENDING"
                        ),
                      },
                    },
                    [_vm._v("PENDING")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "CANCELLED",
                        label: _vm.$t(
                          "posdevicerestapiApp.OrderStatus.CANCELLED"
                        ),
                      },
                    },
                    [_vm._v("CANCELLED")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "REFUNDED",
                        label: _vm.$t(
                          "posdevicerestapiApp.OrderStatus.REFUNDED"
                        ),
                      },
                    },
                    [_vm._v("REFUNDED")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.$v.shoppingCart.status.$anyDirty &&
              _vm.$v.shoppingCart.status.$invalid
                ? _c("div", [
                    !_vm.$v.shoppingCart.status.required
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
                  attrs: { for: "shopping-cart-totalPrice" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.shoppingCart.totalPrice")
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
                    value: _vm.$v.shoppingCart.totalPrice.$model,
                    expression: "$v.shoppingCart.totalPrice.$model",
                    modifiers: { number: true },
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.shoppingCart.totalPrice.$invalid,
                  invalid: _vm.$v.shoppingCart.totalPrice.$invalid,
                },
                attrs: {
                  type: "number",
                  name: "totalPrice",
                  id: "shopping-cart-totalPrice",
                  "data-cy": "totalPrice",
                  required: "",
                },
                domProps: { value: _vm.$v.shoppingCart.totalPrice.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.shoppingCart.totalPrice,
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
              _vm.$v.shoppingCart.totalPrice.$anyDirty &&
              _vm.$v.shoppingCart.totalPrice.$invalid
                ? _c("div", [
                    !_vm.$v.shoppingCart.totalPrice.required
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
                    !_vm.$v.shoppingCart.totalPrice.min
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
                    !_vm.$v.shoppingCart.totalPrice.numeric
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
                  attrs: { for: "shopping-cart-paymentMethod" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.shoppingCart.paymentMethod")
                    ),
                  },
                },
                [_vm._v("Payment Method")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.shoppingCart.paymentMethod.$model,
                      expression: "$v.shoppingCart.paymentMethod.$model",
                    },
                  ],
                  staticClass: "form-control",
                  class: {
                    valid: !_vm.$v.shoppingCart.paymentMethod.$invalid,
                    invalid: _vm.$v.shoppingCart.paymentMethod.$invalid,
                  },
                  attrs: {
                    name: "paymentMethod",
                    id: "shopping-cart-paymentMethod",
                    "data-cy": "paymentMethod",
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
                        _vm.$v.shoppingCart.paymentMethod,
                        "$model",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "CREDIT_CARD",
                        label: _vm.$t(
                          "posdevicerestapiApp.PaymentMethod.CREDIT_CARD"
                        ),
                      },
                    },
                    [_vm._v("card")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "IDEAL",
                        label: _vm.$t(
                          "posdevicerestapiApp.PaymentMethod.IDEAL"
                        ),
                      },
                    },
                    [_vm._v("ideal")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.$v.shoppingCart.paymentMethod.$anyDirty &&
              _vm.$v.shoppingCart.paymentMethod.$invalid
                ? _c("div", [
                    !_vm.$v.shoppingCart.paymentMethod.required
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
                  attrs: { for: "shopping-cart-paymentReference" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t(
                        "posdevicerestapiApp.shoppingCart.paymentReference"
                      )
                    ),
                  },
                },
                [_vm._v("Payment Reference")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.shoppingCart.paymentReference.$model,
                    expression: "$v.shoppingCart.paymentReference.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.shoppingCart.paymentReference.$invalid,
                  invalid: _vm.$v.shoppingCart.paymentReference.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "paymentReference",
                  id: "shopping-cart-paymentReference",
                  "data-cy": "paymentReference",
                },
                domProps: {
                  value: _vm.$v.shoppingCart.paymentReference.$model,
                },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.shoppingCart.paymentReference,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "shopping-cart-customerDetails" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.shoppingCart.customerDetails")
                    ),
                  },
                },
                [_vm._v("Customer Details")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.shoppingCart.customerDetails,
                      expression: "shoppingCart.customerDetails",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "shopping-cart-customerDetails",
                    "data-cy": "customerDetails",
                    name: "customerDetails",
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
                        _vm.shoppingCart,
                        "customerDetails",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  !_vm.shoppingCart.customerDetails
                    ? _c("option", {
                        attrs: { selected: "" },
                        domProps: { value: null },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.customerDetails, function (customerDetailsOption) {
                    return _c(
                      "option",
                      {
                        key: customerDetailsOption.id,
                        domProps: {
                          value:
                            _vm.shoppingCart.customerDetails &&
                            customerDetailsOption.id ===
                              _vm.shoppingCart.customerDetails.id
                              ? _vm.shoppingCart.customerDetails
                              : customerDetailsOption,
                        },
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(customerDetailsOption.id) +
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
            _vm.$v.shoppingCart.customerDetails.$anyDirty &&
            _vm.$v.shoppingCart.customerDetails.$invalid
              ? _c("div", [
                  !_vm.$v.shoppingCart.customerDetails.required
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
                  disabled: _vm.$v.shoppingCart.$invalid || _vm.isSaving,
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
//# sourceMappingURL=src_main_webapp_app_entities_shopping-cart_shopping-cart-update_vue.chunk.js.map