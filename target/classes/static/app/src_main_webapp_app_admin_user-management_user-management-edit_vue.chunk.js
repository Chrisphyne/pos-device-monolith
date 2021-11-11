(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_admin_user-management_user-management-edit_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/user-management/user-management-edit.component.ts?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/user-management/user-management-edit.component.ts?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var _shared_model_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/model/user.model */ "./src/main/webapp/app/shared/model/user.model.ts");
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



var loginValidator = function (value) {
    if (!value) {
        return true;
    }
    return /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/.test(value);
};
var validations = {
    userAccount: {
        login: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(254),
            pattern: loginValidator,
        },
        firstName: {
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(50),
        },
        lastName: {
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(50),
        },
        email: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.email,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(5),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(50),
        },
    },
};
var JhiUserManagementEdit = /** @class */ (function (_super) {
    __extends(JhiUserManagementEdit, _super);
    function JhiUserManagementEdit() {
        var _this = _super.call(this) || this;
        _this.isSaving = false;
        _this.authorities = [];
        _this.languages = _this.$store.getters.languages;
        _this.userAccount = new _shared_model_user_model__WEBPACK_IMPORTED_MODULE_1__.User();
        _this.userAccount.authorities = [];
        return _this;
    }
    JhiUserManagementEdit.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            vm.initAuthorities();
            if (to.params.userId) {
                vm.init(to.params.userId);
            }
        });
    };
    JhiUserManagementEdit.prototype.initAuthorities = function () {
        var _this = this;
        this.userManagementService()
            .retrieveAuthorities()
            .then(function (_res) {
            _this.authorities = _res.data;
        });
    };
    JhiUserManagementEdit.prototype.init = function (userId) {
        var _this = this;
        this.userManagementService()
            .get(userId)
            .then(function (res) {
            _this.userAccount = res.data;
        });
    };
    JhiUserManagementEdit.prototype.previousState = function () {
        this.$router.go(-1);
    };
    JhiUserManagementEdit.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.userAccount.id) {
            this.userManagementService()
                .update(this.userAccount)
                .then(function (res) {
                _this.returnToList();
                _this.$root.$bvToast.toast(_this.getMessageFromHeader(res).toString(), {
                    toaster: 'b-toaster-top-center',
                    title: 'Info',
                    variant: 'info',
                    solid: true,
                    autoHideDelay: 5000,
                });
            });
        }
        else {
            this.userManagementService()
                .create(this.userAccount)
                .then(function (res) {
                _this.returnToList();
                _this.$root.$bvToast.toast(_this.getMessageFromHeader(res).toString(), {
                    toaster: 'b-toaster-top-center',
                    title: 'Success',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 5000,
                });
            });
        }
    };
    JhiUserManagementEdit.prototype.returnToList = function () {
        this.isSaving = false;
        this.$router.go(-1);
    };
    JhiUserManagementEdit.prototype.getMessageFromHeader = function (res) {
        return this.$t(res.headers['x-posdevicerestapiapp-alert'], {
            param: decodeURIComponent(res.headers['x-posdevicerestapiapp-params'].replace(/\+/g, ' ')),
        });
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('userService'),
        __metadata("design:type", Function)
    ], JhiUserManagementEdit.prototype, "userManagementService", void 0);
    JhiUserManagementEdit = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            validations: validations,
        }),
        __metadata("design:paramtypes", [])
    ], JhiUserManagementEdit);
    return JhiUserManagementEdit;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiUserManagementEdit);


/***/ }),

/***/ "./src/main/webapp/app/shared/model/user.model.ts":
/*!********************************************************!*\
  !*** ./src/main/webapp/app/shared/model/user.model.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
var User = /** @class */ (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id;
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.activated = activated;
        this.langKey = langKey;
        this.authorities = authorities;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-edit.vue":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management-edit.vue ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management-edit.vue?vue&type=template&id=4b1e1262& */ "./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262&");
/* harmony import */ var _user_management_edit_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management-edit.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/user-management/user-management-edit.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _user_management_edit_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__.render,
  _user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('4b1e1262')) {
      api.createRecord('4b1e1262', component.options)
    } else {
      api.reload('4b1e1262', component.options)
    }
    module.hot.accept(/*! ./user-management-edit.vue?vue&type=template&id=4b1e1262& */ "./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management-edit.vue?vue&type=template&id=4b1e1262& */ "./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262&");
(function () {
      api.rerender('4b1e1262', {
        render: _user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/user-management/user-management-edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-edit.component.ts?vue&type=script&lang=ts&":
/*!**************************************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management-edit.component.ts?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_user_management_edit_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./user-management-edit.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/user-management/user-management-edit.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_user_management_edit_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262&":
/*!***********************************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_management_edit_vue_vue_type_template_id_4b1e1262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./user-management-edit.vue?vue&type=template&id=4b1e1262& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/user-management/user-management-edit.vue?vue&type=template&id=4b1e1262& ***!
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-8" }, [
      _vm.userAccount
        ? _c(
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
                  attrs: { id: "myUserLabel" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("userManagement.home.createOrEditLabel")
                    ),
                  },
                },
                [_vm._v("Create or edit a User")]
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    attrs: { hidden: !_vm.userAccount.id },
                  },
                  [
                    _c(
                      "label",
                      {
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
                          value: _vm.userAccount.id,
                          expression: "userAccount.id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "id", readonly: "" },
                      domProps: { value: _vm.userAccount.id },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.userAccount, "id", $event.target.value)
                        },
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-control-label",
                      domProps: {
                        textContent: _vm._s(_vm.$t("userManagement.login")),
                      },
                    },
                    [_vm._v("Login")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.$v.userAccount.login.$model,
                        expression: "$v.userAccount.login.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.userAccount.login.$invalid,
                      invalid: _vm.$v.userAccount.login.$invalid,
                    },
                    attrs: { type: "text", name: "login" },
                    domProps: { value: _vm.$v.userAccount.login.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.userAccount.login,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.userAccount.login.$anyDirty &&
                  _vm.$v.userAccount.login.$invalid
                    ? _c("div", [
                        !_vm.$v.userAccount.login.required
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
                        !_vm.$v.userAccount.login.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t("entity.validation.maxlength", {
                                      max: 50,
                                    })
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              This field cannot be longer than 50 characters.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.userAccount.login.pattern
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t("entity.validation.patternLogin")
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              This field can only contain letters, digits and e-mail addresses.\n            "
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
                      attrs: { for: "firstName" },
                      domProps: {
                        textContent: _vm._s(_vm.$t("userManagement.firstName")),
                      },
                    },
                    [_vm._v("First Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.$v.userAccount.firstName.$model,
                        expression: "$v.userAccount.firstName.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.userAccount.firstName.$invalid,
                      invalid: _vm.$v.userAccount.firstName.$invalid,
                    },
                    attrs: {
                      type: "text",
                      id: "firstName",
                      name: "firstName",
                      placeholder: _vm.$t(
                        "settings.form['firstname.placeholder']"
                      ),
                    },
                    domProps: { value: _vm.$v.userAccount.firstName.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.userAccount.firstName,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.userAccount.firstName.$anyDirty &&
                  _vm.$v.userAccount.firstName.$invalid
                    ? _c("div", [
                        !_vm.$v.userAccount.firstName.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t("entity.validation.maxlength", {
                                      max: 50,
                                    })
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              This field cannot be longer than 50 characters.\n            "
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
                      attrs: { for: "lastName" },
                      domProps: {
                        textContent: _vm._s(_vm.$t("userManagement.lastName")),
                      },
                    },
                    [_vm._v("Last Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.$v.userAccount.lastName.$model,
                        expression: "$v.userAccount.lastName.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.userAccount.lastName.$invalid,
                      invalid: _vm.$v.userAccount.lastName.$invalid,
                    },
                    attrs: {
                      type: "text",
                      id: "lastName",
                      name: "lastName",
                      placeholder: _vm.$t(
                        "settings.form['lastname.placeholder']"
                      ),
                    },
                    domProps: { value: _vm.$v.userAccount.lastName.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.userAccount.lastName,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.userAccount.lastName.$anyDirty &&
                  _vm.$v.userAccount.lastName.$invalid
                    ? _c("div", [
                        !_vm.$v.userAccount.lastName.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t("entity.validation.maxlength", {
                                      max: 50,
                                    })
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              This field cannot be longer than 50 characters.\n            "
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
                      attrs: { for: "email" },
                      domProps: {
                        textContent: _vm._s(_vm.$t("userManagement.email")),
                      },
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.$v.userAccount.email.$model,
                        expression: "$v.userAccount.email.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.userAccount.email.$invalid,
                      invalid: _vm.$v.userAccount.email.$invalid,
                    },
                    attrs: {
                      type: "email",
                      id: "email",
                      name: "email",
                      placeholder: _vm.$t("global.form['email.placeholder']"),
                      email: "",
                      required: "",
                    },
                    domProps: { value: _vm.$v.userAccount.email.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.userAccount.email,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.userAccount.email.$anyDirty &&
                  _vm.$v.userAccount.email.$invalid
                    ? _c("div", [
                        !_vm.$v.userAccount.email.required
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.email.required"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your email is required.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.userAccount.email.email
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.email.invalid"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your email is invalid.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.userAccount.email.minLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.email.minlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your email is required to be at least 5 characters.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.userAccount.email.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.email.maxlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your email cannot be longer than 50 characters.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "activated" },
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.userAccount.activated,
                            expression: "userAccount.activated",
                          },
                        ],
                        staticClass: "form-check-input",
                        attrs: {
                          disabled: _vm.userAccount.id === null,
                          type: "checkbox",
                          id: "activated",
                          name: "activated",
                        },
                        domProps: {
                          checked: Array.isArray(_vm.userAccount.activated)
                            ? _vm._i(_vm.userAccount.activated, null) > -1
                            : _vm.userAccount.activated,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = _vm.userAccount.activated,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.userAccount,
                                    "activated",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.userAccount,
                                    "activated",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.userAccount, "activated", $$c)
                            }
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("userManagement.activated")
                            ),
                          },
                        },
                        [_vm._v("Activated")]
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _vm.languages && Object.keys(_vm.languages).length > 0
                  ? _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          attrs: { for: "langKey" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("userManagement.langKey")
                            ),
                          },
                        },
                        [_vm._v("Language")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.userAccount.langKey,
                              expression: "userAccount.langKey",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { id: "langKey", name: "langKey" },
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
                                _vm.userAccount,
                                "langKey",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.languages, function (language, key) {
                          return _c(
                            "option",
                            { key: key, domProps: { value: key } },
                            [_vm._v(_vm._s(language.name))]
                          )
                        }),
                        0
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      domProps: {
                        textContent: _vm._s(_vm.$t("userManagement.profiles")),
                      },
                    },
                    [_vm._v("Profiles")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userAccount.authorities,
                          expression: "userAccount.authorities",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { multiple: "", name: "authority" },
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
                            _vm.userAccount,
                            "authorities",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    _vm._l(_vm.authorities, function (authority) {
                      return _c(
                        "option",
                        { key: authority, domProps: { value: authority } },
                        [_vm._v(_vm._s(authority))]
                      )
                    }),
                    0
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" },
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
                      disabled: _vm.$v.userAccount.$invalid || _vm.isSaving,
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
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_user-management_user-management-edit_vue.chunk.js.map