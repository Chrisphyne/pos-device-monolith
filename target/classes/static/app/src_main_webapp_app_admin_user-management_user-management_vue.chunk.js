(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_admin_user-management_user-management_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/user-management/user-management.component.ts?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/user-management/user-management.component.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************************/
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


var JhiUserManagementComponent = /** @class */ (function (_super) {
    __extends(JhiUserManagementComponent, _super);
    function JhiUserManagementComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.error = '';
        _this.success = '';
        _this.users = [];
        _this.itemsPerPage = 20;
        _this.queryCount = null;
        _this.page = 1;
        _this.previousPage = 1;
        _this.propOrder = 'id';
        _this.reverse = false;
        _this.totalItems = 0;
        _this.isLoading = false;
        _this.removeId = null;
        return _this;
    }
    JhiUserManagementComponent.prototype.mounted = function () {
        this.loadAll();
    };
    JhiUserManagementComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userManagementService()
            .update(user)
            .then(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.loadAll();
        })
            .catch(function () {
            _this.success = null;
            _this.error = 'ERROR';
            user.activated = false;
        });
    };
    JhiUserManagementComponent.prototype.loadAll = function () {
        var _this = this;
        this.isLoading = true;
        this.userManagementService()
            .retrieve({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        })
            .then(function (res) {
            _this.isLoading = false;
            _this.users = res.data;
            _this.totalItems = Number(res.headers['x-total-count']);
            _this.queryCount = _this.totalItems;
        })
            .catch(function () {
            _this.isLoading = false;
        });
    };
    JhiUserManagementComponent.prototype.handleSyncList = function () {
        this.loadAll();
    };
    JhiUserManagementComponent.prototype.sort = function () {
        var result = [this.propOrder + ',' + (this.reverse ? 'desc' : 'asc')];
        if (this.propOrder !== 'id') {
            result.push('id');
        }
        return result;
    };
    JhiUserManagementComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    JhiUserManagementComponent.prototype.transition = function () {
        this.loadAll();
    };
    JhiUserManagementComponent.prototype.changeOrder = function (propOrder) {
        this.propOrder = propOrder;
        this.reverse = !this.reverse;
        this.transition();
    };
    JhiUserManagementComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userManagementService()
            .remove(this.removeId)
            .then(function (res) {
            var message = _this.$t(res.headers['x-posdevicerestapiapp-alert'], {
                param: decodeURIComponent(res.headers['x-posdevicerestapiapp-params'].replace(/\+/g, ' ')),
            });
            _this.$bvToast.toast(message.toString(), {
                toaster: 'b-toaster-top-center',
                title: 'Info',
                variant: 'danger',
                solid: true,
                autoHideDelay: 5000,
            });
            _this.removeId = null;
            _this.loadAll();
            _this.closeDialog();
        });
    };
    JhiUserManagementComponent.prototype.prepareRemove = function (instance) {
        this.removeId = instance.login;
        if (this.$refs.removeUser) {
            this.$refs.removeUser.show();
        }
    };
    JhiUserManagementComponent.prototype.closeDialog = function () {
        if (this.$refs.removeUser) {
            this.$refs.removeUser.hide();
        }
    };
    Object.defineProperty(JhiUserManagementComponent.prototype, "username", {
        get: function () {
            return this.$store.getters.account ? this.$store.getters.account.login : '';
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('userService'),
        __metadata("design:type", Function)
    ], JhiUserManagementComponent.prototype, "userManagementService", void 0);
    JhiUserManagementComponent = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], JhiUserManagementComponent);
    return JhiUserManagementComponent;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiUserManagementComponent);


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.vue":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management.vue ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management.vue?vue&type=template&id=934f6ad0& */ "./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0&");
/* harmony import */ var _user_management_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/user-management/user-management.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _user_management_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__.render,
  _user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('934f6ad0')) {
      api.createRecord('934f6ad0', component.options)
    } else {
      api.reload('934f6ad0', component.options)
    }
    module.hot.accept(/*! ./user-management.vue?vue&type=template&id=934f6ad0& */ "./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management.vue?vue&type=template&id=934f6ad0& */ "./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0&");
(function () {
      api.rerender('934f6ad0', {
        render: _user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/user-management/user-management.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_user_management_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./user-management.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/user-management/user-management.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_user_management_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0&":
/*!******************************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_management_vue_vue_type_template_id_934f6ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user-management.vue?vue&type=template&id=934f6ad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/user-management/user-management.vue?vue&type=template&id=934f6ad0& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h2", [
      _c(
        "span",
        {
          attrs: {
            id: "user-management-page-heading",
            "data-cy": "userManagementPageHeading",
          },
          domProps: {
            textContent: _vm._s(_vm.$t("userManagement.home.title")),
          },
        },
        [_vm._v("Users")]
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
              attrs: { disabled: _vm.isLoading },
              on: { click: _vm.handleSyncList },
            },
            [
              _c("font-awesome-icon", {
                attrs: { icon: "sync", spin: _vm.isLoading },
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("userManagement.home.refreshListLabel")
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
            attrs: { custom: "", to: { name: "JhiUserCreate" } },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var navigate = ref.navigate
                  return [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary jh-create-entity",
                        on: { click: navigate },
                      },
                      [
                        _c("font-awesome-icon", { attrs: { icon: "plus" } }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("userManagement.home.createLabel")
                              ),
                            },
                          },
                          [_vm._v("Create a new User")]
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
    ]),
    _vm._v(" "),
    _vm.users
      ? _c(
          "div",
          { staticClass: "table-responsive" },
          [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "Users" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
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
                        attrs: { scope: "col" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("login")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("userManagement.login")
                              ),
                            },
                          },
                          [_vm._v("Login")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "login",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("email")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("userManagement.email")
                              ),
                            },
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "email",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("langKey")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("userManagement.langKey")
                              ),
                            },
                          },
                          [_vm._v("Lang Key")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "langKey",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }, [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("userManagement.profiles")
                            ),
                          },
                        },
                        [_vm._v("Profiles")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("createdDate")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("userManagement.createdDate")
                              ),
                            },
                          },
                          [_vm._v("Created Date")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "createdDate",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("lastModifiedBy")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("userManagement.lastModifiedBy")
                              ),
                            },
                          },
                          [_vm._v("Last Modified By")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "lastModifiedBy",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col", id: "modified-date-sort" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("lastModifiedDate")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("userManagement.lastModifiedDate")
                              ),
                            },
                          },
                          [_vm._v("Last Modified Date")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "lastModifiedDate",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "col" } }),
                  ]),
                ]),
                _vm._v(" "),
                _vm.users
                  ? _c(
                      "tbody",
                      _vm._l(_vm.users, function (user) {
                        return _c(
                          "tr",
                          { key: user.id, attrs: { id: user.login } },
                          [
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "JhiUserView",
                                        params: { userId: user.login },
                                      },
                                    },
                                  },
                                  [_vm._v(_vm._s(user.id))]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.login))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "jhi-user-email" }, [
                              _vm._v(_vm._s(user.email)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              !user.activated
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-danger btn-sm deactivated",
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.$t("userManagement.deactivated")
                                        ),
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.setActive(user, true)
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n              Deactivated\n            "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              user.activated
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success btn-sm",
                                      attrs: {
                                        disabled: _vm.username === user.login,
                                      },
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.$t("userManagement.activated")
                                        ),
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.setActive(user, false)
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n              Activated\n            "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.langKey))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              _vm._l(user.authorities, function (authority) {
                                return _c("div", { key: authority }, [
                                  _c(
                                    "span",
                                    { staticClass: "badge badge-info" },
                                    [_vm._v(_vm._s(authority))]
                                  ),
                                ])
                              }),
                              0
                            ),
                            _vm._v(" "),
                            user.createdDate
                              ? _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$d(
                                        Date.parse(user.createdDate),
                                        "short"
                                      )
                                    )
                                  ),
                                ])
                              : _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatDate")(user.createdDate)
                                    )
                                  ),
                                ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.lastModifiedBy))]),
                            _vm._v(" "),
                            user.lastModifiedDate
                              ? _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$d(
                                        Date.parse(user.lastModifiedDate),
                                        "short"
                                      )
                                    )
                                  ),
                                ])
                              : _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatDate")(
                                        user.lastModifiedDate
                                      )
                                    )
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
                                        name: "JhiUserView",
                                        params: { userId: user.login },
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
                                        name: "JhiUserEdit",
                                        params: { userId: user.login },
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
                                                  on: { click: navigate },
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: {
                                                      icon: "pencil-alt",
                                                    },
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
                                      staticClass: "btn btn-sm delete",
                                      attrs: {
                                        variant: "danger",
                                        disabled: _vm.username === user.login,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.prepareRemove(user)
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
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "removeUser",
                attrs: {
                  id: "removeUser",
                  title: _vm.$t("entity.delete.title"),
                },
                on: {
                  ok: function ($event) {
                    return _vm.deleteUser()
                  },
                },
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "p",
                    {
                      attrs: { id: "jhi-delete-user-heading" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("userManagement.delete.question", {
                            login: _vm.removeId,
                          })
                        ),
                      },
                    },
                    [
                      _vm._v(
                        "\n          Are you sure you want to delete this user?\n        "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { slot: "modal-footer" }, slot: "modal-footer" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button" },
                        domProps: {
                          textContent: _vm._s(_vm.$t("entity.action.cancel")),
                        },
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
                        attrs: { type: "button", id: "confirm-delete-user" },
                        domProps: {
                          textContent: _vm._s(_vm.$t("entity.action.delete")),
                        },
                        on: {
                          click: function ($event) {
                            return _vm.deleteUser()
                          },
                        },
                      },
                      [_vm._v("\n          Delete\n        ")]
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.users && _vm.users.length > 0,
            expression: "users && users.length > 0",
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_user-management_user-management_vue.chunk.js.map