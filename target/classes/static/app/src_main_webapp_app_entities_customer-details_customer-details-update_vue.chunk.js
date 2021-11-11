(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_customer-details_customer-details-update_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/customer-details/customer-details-update.component.ts?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/customer-details/customer-details-update.component.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _shared_model_customer_details_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/model/customer-details.model */ "./src/main/webapp/app/shared/model/customer-details.model.ts");
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
    customerDetails: {
        gender: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        phone: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        addressLine1: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        addressLine2: {},
        branch: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        country: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        user: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
    },
};
var CustomerDetailsUpdate = /** @class */ (function (_super) {
    __extends(CustomerDetailsUpdate, _super);
    function CustomerDetailsUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customerDetails = new _shared_model_customer_details_model__WEBPACK_IMPORTED_MODULE_1__.CustomerDetails();
        _this.users = [];
        _this.shoppingCarts = [];
        _this.isSaving = false;
        _this.currentLanguage = '';
        return _this;
    }
    CustomerDetailsUpdate.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            if (to.params.customerDetailsId) {
                vm.retrieveCustomerDetails(to.params.customerDetailsId);
            }
            vm.initRelationships();
        });
    };
    CustomerDetailsUpdate.prototype.created = function () {
        var _this = this;
        this.currentLanguage = this.$store.getters.currentLanguage;
        this.$store.watch(function () { return _this.$store.getters.currentLanguage; }, function () {
            _this.currentLanguage = _this.$store.getters.currentLanguage;
        });
    };
    CustomerDetailsUpdate.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.customerDetails.id) {
            this.customerDetailsService()
                .update(this.customerDetails)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.customerDetails.updated', { param: param.id });
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
            this.customerDetailsService()
                .create(this.customerDetails)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.customerDetails.created', { param: param.id });
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
    CustomerDetailsUpdate.prototype.retrieveCustomerDetails = function (customerDetailsId) {
        var _this = this;
        this.customerDetailsService()
            .find(customerDetailsId)
            .then(function (res) {
            _this.customerDetails = res;
        });
    };
    CustomerDetailsUpdate.prototype.previousState = function () {
        this.$router.go(-1);
    };
    CustomerDetailsUpdate.prototype.initRelationships = function () {
        var _this = this;
        this.userService()
            .retrieve()
            .then(function (res) {
            _this.users = res.data;
        });
        this.shoppingCartService()
            .retrieve()
            .then(function (res) {
            _this.shoppingCarts = res.data;
        });
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('customerDetailsService'),
        __metadata("design:type", Function)
    ], CustomerDetailsUpdate.prototype, "customerDetailsService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('userService'),
        __metadata("design:type", Function)
    ], CustomerDetailsUpdate.prototype, "userService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('shoppingCartService'),
        __metadata("design:type", Function)
    ], CustomerDetailsUpdate.prototype, "shoppingCartService", void 0);
    CustomerDetailsUpdate = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            validations: validations,
        })
    ], CustomerDetailsUpdate);
    return CustomerDetailsUpdate;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (CustomerDetailsUpdate);


/***/ }),

/***/ "./src/main/webapp/app/shared/model/customer-details.model.ts":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/shared/model/customer-details.model.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetails": function() { return /* binding */ CustomerDetails; }
/* harmony export */ });
var CustomerDetails = /** @class */ (function () {
    function CustomerDetails(id, gender, phone, addressLine1, addressLine2, branch, country, user, carts) {
        this.id = id;
        this.gender = gender;
        this.phone = phone;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.branch = branch;
        this.country = country;
        this.user = user;
        this.carts = carts;
    }
    return CustomerDetails;
}());



/***/ }),

/***/ "./src/main/webapp/app/entities/customer-details/customer-details-update.vue":
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/customer-details/customer-details-update.vue ***!
  \***********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details-update.vue?vue&type=template&id=6dca9f9c& */ "./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c&");
/* harmony import */ var _customer_details_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details-update.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/customer-details/customer-details-update.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _customer_details_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('6dca9f9c')) {
      api.createRecord('6dca9f9c', component.options)
    } else {
      api.reload('6dca9f9c', component.options)
    }
    module.hot.accept(/*! ./customer-details-update.vue?vue&type=template&id=6dca9f9c& */ "./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details-update.vue?vue&type=template&id=6dca9f9c& */ "./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c&");
(function () {
      api.rerender('6dca9f9c', {
        render: _customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/customer-details/customer-details-update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/customer-details/customer-details-update.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/customer-details/customer-details-update.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_customer_details_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./customer-details-update.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/customer-details/customer-details-update.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_customer_details_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c&":
/*!******************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c& ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_details_update_vue_vue_type_template_id_6dca9f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer-details-update.vue?vue&type=template&id=6dca9f9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/customer-details/customer-details-update.vue?vue&type=template&id=6dca9f9c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
                id:
                  "posdevicerestapiApp.customerDetails.home.createOrEditLabel",
                "data-cy": "CustomerDetailsCreateUpdateHeading",
              },
              domProps: {
                textContent: _vm._s(
                  _vm.$t(
                    "posdevicerestapiApp.customerDetails.home.createOrEditLabel"
                  )
                ),
              },
            },
            [_vm._v("\n        Create or edit a CustomerDetails\n      ")]
          ),
          _vm._v(" "),
          _c("div", [
            _vm.customerDetails.id
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
                        value: _vm.customerDetails.id,
                        expression: "customerDetails.id",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "id", name: "id", readonly: "" },
                    domProps: { value: _vm.customerDetails.id },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.customerDetails, "id", $event.target.value)
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
                  attrs: { for: "customer-details-gender" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.customerDetails.gender")
                    ),
                  },
                },
                [_vm._v("Gender")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.customerDetails.gender.$model,
                      expression: "$v.customerDetails.gender.$model",
                    },
                  ],
                  staticClass: "form-control",
                  class: {
                    valid: !_vm.$v.customerDetails.gender.$invalid,
                    invalid: _vm.$v.customerDetails.gender.$invalid,
                  },
                  attrs: {
                    name: "gender",
                    id: "customer-details-gender",
                    "data-cy": "gender",
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
                        _vm.$v.customerDetails.gender,
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
                        value: "MALE",
                        label: _vm.$t("posdevicerestapiApp.Gender.MALE"),
                      },
                    },
                    [_vm._v("MALE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "FEMALE",
                        label: _vm.$t("posdevicerestapiApp.Gender.FEMALE"),
                      },
                    },
                    [_vm._v("FEMALE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "OTHER",
                        label: _vm.$t("posdevicerestapiApp.Gender.OTHER"),
                      },
                    },
                    [_vm._v("OTHER")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.$v.customerDetails.gender.$anyDirty &&
              _vm.$v.customerDetails.gender.$invalid
                ? _c("div", [
                    !_vm.$v.customerDetails.gender.required
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
                  attrs: { for: "customer-details-phone" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.customerDetails.phone")
                    ),
                  },
                },
                [_vm._v("Phone")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.customerDetails.phone.$model,
                    expression: "$v.customerDetails.phone.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.customerDetails.phone.$invalid,
                  invalid: _vm.$v.customerDetails.phone.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "phone",
                  id: "customer-details-phone",
                  "data-cy": "phone",
                  required: "",
                },
                domProps: { value: _vm.$v.customerDetails.phone.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.customerDetails.phone,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.customerDetails.phone.$anyDirty &&
              _vm.$v.customerDetails.phone.$invalid
                ? _c("div", [
                    !_vm.$v.customerDetails.phone.required
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
                  attrs: { for: "customer-details-addressLine1" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.customerDetails.addressLine1")
                    ),
                  },
                },
                [_vm._v("Address Line 1")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.customerDetails.addressLine1.$model,
                    expression: "$v.customerDetails.addressLine1.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.customerDetails.addressLine1.$invalid,
                  invalid: _vm.$v.customerDetails.addressLine1.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "addressLine1",
                  id: "customer-details-addressLine1",
                  "data-cy": "addressLine1",
                  required: "",
                },
                domProps: { value: _vm.$v.customerDetails.addressLine1.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.customerDetails.addressLine1,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.customerDetails.addressLine1.$anyDirty &&
              _vm.$v.customerDetails.addressLine1.$invalid
                ? _c("div", [
                    !_vm.$v.customerDetails.addressLine1.required
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
                  attrs: { for: "customer-details-addressLine2" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.customerDetails.addressLine2")
                    ),
                  },
                },
                [_vm._v("Address Line 2")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.customerDetails.addressLine2.$model,
                    expression: "$v.customerDetails.addressLine2.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.customerDetails.addressLine2.$invalid,
                  invalid: _vm.$v.customerDetails.addressLine2.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "addressLine2",
                  id: "customer-details-addressLine2",
                  "data-cy": "addressLine2",
                },
                domProps: { value: _vm.$v.customerDetails.addressLine2.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.customerDetails.addressLine2,
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
                  attrs: { for: "customer-details-branch" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.customerDetails.branch")
                    ),
                  },
                },
                [_vm._v("Branch")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.customerDetails.branch.$model,
                    expression: "$v.customerDetails.branch.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.customerDetails.branch.$invalid,
                  invalid: _vm.$v.customerDetails.branch.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "branch",
                  id: "customer-details-branch",
                  "data-cy": "branch",
                  required: "",
                },
                domProps: { value: _vm.$v.customerDetails.branch.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.customerDetails.branch,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.customerDetails.branch.$anyDirty &&
              _vm.$v.customerDetails.branch.$invalid
                ? _c("div", [
                    !_vm.$v.customerDetails.branch.required
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
                  attrs: { for: "customer-details-country" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.customerDetails.country")
                    ),
                  },
                },
                [_vm._v("Country")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.customerDetails.country.$model,
                    expression: "$v.customerDetails.country.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.customerDetails.country.$invalid,
                  invalid: _vm.$v.customerDetails.country.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "country",
                  id: "customer-details-country",
                  "data-cy": "country",
                  required: "",
                },
                domProps: { value: _vm.$v.customerDetails.country.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.customerDetails.country,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.customerDetails.country.$anyDirty &&
              _vm.$v.customerDetails.country.$invalid
                ? _c("div", [
                    !_vm.$v.customerDetails.country.required
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
                  attrs: { for: "customer-details-user" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.customerDetails.user")
                    ),
                  },
                },
                [_vm._v("User")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.customerDetails.user,
                      expression: "customerDetails.user",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "customer-details-user",
                    "data-cy": "user",
                    name: "user",
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
                        _vm.customerDetails,
                        "user",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  !_vm.customerDetails.user
                    ? _c("option", {
                        attrs: { selected: "" },
                        domProps: { value: null },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.users, function (userOption) {
                    return _c(
                      "option",
                      {
                        key: userOption.id,
                        domProps: {
                          value:
                            _vm.customerDetails.user &&
                            userOption.id === _vm.customerDetails.user.id
                              ? _vm.customerDetails.user
                              : userOption,
                        },
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(userOption.login) +
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
            _vm.$v.customerDetails.user.$anyDirty &&
            _vm.$v.customerDetails.user.$invalid
              ? _c("div", [
                  !_vm.$v.customerDetails.user.required
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
                  disabled: _vm.$v.customerDetails.$invalid || _vm.isSaving,
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
//# sourceMappingURL=src_main_webapp_app_entities_customer-details_customer-details-update_vue.chunk.js.map