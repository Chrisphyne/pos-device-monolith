(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_customer-details_customer-details_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/customer-details/customer-details.component.ts?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/customer-details/customer-details.component.ts?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************************/
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


var CustomerDetails = /** @class */ (function (_super) {
    __extends(CustomerDetails, _super);
    function CustomerDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.removeId = null;
        _this.itemsPerPage = 20;
        _this.queryCount = null;
        _this.page = 1;
        _this.previousPage = 1;
        _this.propOrder = 'id';
        _this.reverse = false;
        _this.totalItems = 0;
        _this.customerDetails = [];
        _this.isFetching = false;
        return _this;
    }
    CustomerDetails.prototype.mounted = function () {
        this.retrieveAllCustomerDetailss();
    };
    CustomerDetails.prototype.clear = function () {
        this.page = 1;
        this.retrieveAllCustomerDetailss();
    };
    CustomerDetails.prototype.retrieveAllCustomerDetailss = function () {
        var _this = this;
        this.isFetching = true;
        var paginationQuery = {
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        };
        this.customerDetailsService()
            .retrieve(paginationQuery)
            .then(function (res) {
            _this.customerDetails = res.data;
            _this.totalItems = Number(res.headers['x-total-count']);
            _this.queryCount = _this.totalItems;
            _this.isFetching = false;
        }, function (err) {
            _this.isFetching = false;
        });
    };
    CustomerDetails.prototype.handleSyncList = function () {
        this.clear();
    };
    CustomerDetails.prototype.prepareRemove = function (instance) {
        this.removeId = instance.id;
        if (this.$refs.removeEntity) {
            this.$refs.removeEntity.show();
        }
    };
    CustomerDetails.prototype.removeCustomerDetails = function () {
        var _this = this;
        this.customerDetailsService()
            .delete(this.removeId)
            .then(function () {
            var message = _this.$t('posdevicerestapiApp.customerDetails.deleted', { param: _this.removeId });
            _this.$bvToast.toast(message.toString(), {
                toaster: 'b-toaster-top-center',
                title: 'Info',
                variant: 'danger',
                solid: true,
                autoHideDelay: 5000,
            });
            _this.removeId = null;
            _this.retrieveAllCustomerDetailss();
            _this.closeDialog();
        });
    };
    CustomerDetails.prototype.sort = function () {
        var result = [this.propOrder + ',' + (this.reverse ? 'desc' : 'asc')];
        if (this.propOrder !== 'id') {
            result.push('id');
        }
        return result;
    };
    CustomerDetails.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    CustomerDetails.prototype.transition = function () {
        this.retrieveAllCustomerDetailss();
    };
    CustomerDetails.prototype.changeOrder = function (propOrder) {
        this.propOrder = propOrder;
        this.reverse = !this.reverse;
        this.transition();
    };
    CustomerDetails.prototype.closeDialog = function () {
        this.$refs.removeEntity.hide();
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('customerDetailsService'),
        __metadata("design:type", Function)
    ], CustomerDetails.prototype, "customerDetailsService", void 0);
    CustomerDetails = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], CustomerDetails);
    return CustomerDetails;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (CustomerDetails);


/***/ }),

/***/ "./src/main/webapp/app/entities/customer-details/customer-details.vue":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/entities/customer-details/customer-details.vue ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details.vue?vue&type=template&id=01ce55b4& */ "./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4&");
/* harmony import */ var _customer_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/customer-details/customer-details.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _customer_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('01ce55b4')) {
      api.createRecord('01ce55b4', component.options)
    } else {
      api.reload('01ce55b4', component.options)
    }
    module.hot.accept(/*! ./customer-details.vue?vue&type=template&id=01ce55b4& */ "./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details.vue?vue&type=template&id=01ce55b4& */ "./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4&");
(function () {
      api.rerender('01ce55b4', {
        render: _customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/customer-details/customer-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/customer-details/customer-details.component.ts?vue&type=script&lang=ts&":
/*!**************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/customer-details/customer-details.component.ts?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_customer_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./customer-details.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/customer-details/customer-details.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_customer_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4&":
/*!***********************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_details_vue_vue_type_template_id_01ce55b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer-details.vue?vue&type=template&id=01ce55b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/customer-details/customer-details.vue?vue&type=template&id=01ce55b4& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { id: "page-heading", "data-cy": "CustomerDetailsHeading" } },
        [
          _c(
            "span",
            {
              attrs: { id: "customer-details-heading" },
              domProps: {
                textContent: _vm._s(
                  _vm.$t("posdevicerestapiApp.customerDetails.home.title")
                ),
              },
            },
            [_vm._v("Customer Details")]
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
                            "posdevicerestapiApp.customerDetails.home.refreshListLabel"
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
                attrs: { to: { name: "CustomerDetailsCreate" }, custom: "" },
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
                              "btn btn-primary jh-create-entity create-customer-details",
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
                                      "posdevicerestapiApp.customerDetails.home.createLabel"
                                    )
                                  ),
                                },
                              },
                              [_vm._v(" Create a new Customer Details ")]
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
      !_vm.isFetching && _vm.customerDetails && _vm.customerDetails.length === 0
        ? _c("div", { staticClass: "alert alert-warning" }, [
            _c(
              "span",
              {
                domProps: {
                  textContent: _vm._s(
                    _vm.$t("posdevicerestapiApp.customerDetails.home.notFound")
                  ),
                },
              },
              [_vm._v("No customerDetails found")]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.customerDetails && _vm.customerDetails.length > 0
        ? _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "customerDetails" },
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
                            return _vm.changeOrder("gender")
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
                                  "posdevicerestapiApp.customerDetails.gender"
                                )
                              ),
                            },
                          },
                          [_vm._v("Gender")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "gender",
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
                            return _vm.changeOrder("phone")
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
                                  "posdevicerestapiApp.customerDetails.phone"
                                )
                              ),
                            },
                          },
                          [_vm._v("Phone")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "phone",
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
                            return _vm.changeOrder("addressLine1")
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
                                  "posdevicerestapiApp.customerDetails.addressLine1"
                                )
                              ),
                            },
                          },
                          [_vm._v("Address Line 1")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "addressLine1",
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
                            return _vm.changeOrder("addressLine2")
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
                                  "posdevicerestapiApp.customerDetails.addressLine2"
                                )
                              ),
                            },
                          },
                          [_vm._v("Address Line 2")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "addressLine2",
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
                            return _vm.changeOrder("branch")
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
                                  "posdevicerestapiApp.customerDetails.branch"
                                )
                              ),
                            },
                          },
                          [_vm._v("Branch")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "branch",
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
                            return _vm.changeOrder("country")
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
                                  "posdevicerestapiApp.customerDetails.country"
                                )
                              ),
                            },
                          },
                          [_vm._v("Country")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "country",
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
                            return _vm.changeOrder("user.login")
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
                                  "posdevicerestapiApp.customerDetails.user"
                                )
                              ),
                            },
                          },
                          [_vm._v("User")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "user.login",
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
                  _vm._l(_vm.customerDetails, function (customerDetails) {
                    return _c(
                      "tr",
                      {
                        key: customerDetails.id,
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
                                    name: "CustomerDetailsView",
                                    params: {
                                      customerDetailsId: customerDetails.id,
                                    },
                                  },
                                },
                              },
                              [_vm._v(_vm._s(customerDetails.id))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t(
                                  "posdevicerestapiApp.Gender." +
                                    customerDetails.gender
                                )
                              ),
                            },
                          },
                          [_vm._v(_vm._s(customerDetails.gender))]
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(customerDetails.phone))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(customerDetails.addressLine1)),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(customerDetails.addressLine2)),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(customerDetails.branch))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(customerDetails.country))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                customerDetails.user
                                  ? customerDetails.user.login
                                  : ""
                              ) +
                              "\n          "
                          ),
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
                                    name: "CustomerDetailsView",
                                    params: {
                                      customerDetailsId: customerDetails.id,
                                    },
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
                                    name: "CustomerDetailsEdit",
                                    params: {
                                      customerDetailsId: customerDetails.id,
                                    },
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
                                      return _vm.prepareRemove(customerDetails)
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
                id: "posdevicerestapiApp.customerDetails.delete.question",
                "data-cy": "customerDetailsDeleteDialogHeading",
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
              attrs: { id: "jhi-delete-customerDetails-heading" },
              domProps: {
                textContent: _vm._s(
                  _vm.$t(
                    "posdevicerestapiApp.customerDetails.delete.question",
                    { id: _vm.removeId }
                  )
                ),
              },
            },
            [
              _vm._v(
                "\n        Are you sure you want to delete this Customer Details?\n      "
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
                id: "jhi-confirm-delete-customerDetails",
                "data-cy": "entityConfirmDeleteButton",
              },
              domProps: { textContent: _vm._s(_vm.$t("entity.action.delete")) },
              on: {
                click: function ($event) {
                  return _vm.removeCustomerDetails()
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
              value: _vm.customerDetails && _vm.customerDetails.length > 0,
              expression: "customerDetails && customerDetails.length > 0",
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
//# sourceMappingURL=src_main_webapp_app_entities_customer-details_customer-details_vue.chunk.js.map