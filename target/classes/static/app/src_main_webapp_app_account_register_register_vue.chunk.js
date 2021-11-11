(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_account_register_register_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/register/register.component.ts?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/register/register.component.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ "./src/main/webapp/app/constants.ts");
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




var loginPattern = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.helpers.regex('alpha', /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/);
var validations = {
    registerAccount: {
        login: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(1),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(50),
            pattern: loginPattern,
        },
        email: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(5),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(254),
            email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.email,
        },
        password: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(4),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(254),
        },
    },
    confirmPassword: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(4),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(50),
        // prettier-ignore
        sameAsPassword: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.sameAs)(function () {
            return this.registerAccount.password;
        }),
    },
};
var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registerAccount = {
            login: undefined,
            email: undefined,
            password: undefined,
        };
        _this.confirmPassword = null;
        _this.error = '';
        _this.errorEmailExists = '';
        _this.errorUserExists = '';
        _this.success = false;
        return _this;
    }
    Register.prototype.register = function () {
        var _this = this;
        this.error = null;
        this.errorUserExists = null;
        this.errorEmailExists = null;
        this.registerAccount.langKey = this.$store.getters.currentLanguage;
        this.registerService()
            .processRegistration(this.registerAccount)
            .then(function () {
            _this.success = true;
        })
            .catch(function (error) {
            _this.success = null;
            if (error.response.status === 400 && error.response.data.type === _constants__WEBPACK_IMPORTED_MODULE_1__.LOGIN_ALREADY_USED_TYPE) {
                _this.errorUserExists = 'ERROR';
            }
            else if (error.response.status === 400 && error.response.data.type === _constants__WEBPACK_IMPORTED_MODULE_1__.EMAIL_ALREADY_USED_TYPE) {
                _this.errorEmailExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    Register.prototype.openLogin = function () {
        this.loginService().openLogin(this.$root);
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('registerService'),
        __metadata("design:type", Function)
    ], Register.prototype, "registerService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('loginService'),
        __metadata("design:type", Function)
    ], Register.prototype, "loginService", void 0);
    Register = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            validations: validations,
        })
    ], Register);
    return Register;
}(vue__WEBPACK_IMPORTED_MODULE_3__.default));
/* harmony default export */ __webpack_exports__["default"] = (Register);


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.vue":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.vue ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=e76dc7ec& */ "./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec&");
/* harmony import */ var _register_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/account/register/register.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _register_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('e76dc7ec')) {
      api.createRecord('e76dc7ec', component.options)
    } else {
      api.reload('e76dc7ec', component.options)
    }
    module.hot.accept(/*! ./register.vue?vue&type=template&id=e76dc7ec& */ "./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=e76dc7ec& */ "./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec&");
(function () {
      api.rerender('e76dc7ec', {
        render: _register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/account/register/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_register_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./register.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/register/register.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_register_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec&":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_e76dc7ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=e76dc7ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/register/register.vue?vue&type=template&id=e76dc7ec& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8 toastify-container" }, [
        _c(
          "h1",
          {
            attrs: { id: "register-title", "data-cy": "registerTitle" },
            domProps: { textContent: _vm._s(_vm.$t("register.title")) },
          },
          [_vm._v("Registration")]
        ),
        _vm._v(" "),
        _vm.success
          ? _c(
              "div",
              {
                staticClass: "alert alert-success",
                attrs: { role: "alert" },
                domProps: {
                  innerHTML: _vm._s(_vm.$t("register.messages.success")),
                },
              },
              [
                _c("strong", [_vm._v("Registration saved!")]),
                _vm._v(" Please check your email for confirmation.\n      "),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.error
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger",
                attrs: { role: "alert" },
                domProps: {
                  innerHTML: _vm._s(_vm.$t("register.messages.error.fail")),
                },
              },
              [
                _c("strong", [_vm._v("Registration failed!")]),
                _vm._v(" Please try again later.\n      "),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.errorUserExists
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger",
                attrs: { role: "alert" },
                domProps: {
                  innerHTML: _vm._s(
                    _vm.$t("register.messages.error.userexists")
                  ),
                },
              },
              [
                _c("strong", [_vm._v("Login name already registered!")]),
                _vm._v(" Please choose another one.\n      "),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.errorEmailExists
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger",
                attrs: { role: "alert" },
                domProps: {
                  innerHTML: _vm._s(
                    _vm.$t("register.messages.error.emailexists")
                  ),
                },
              },
              [
                _c("strong", [_vm._v("Email is already in use!")]),
                _vm._v(" Please choose another one.\n      "),
              ]
            )
          : _vm._e(),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        !_vm.success
          ? _c(
              "form",
              {
                attrs: {
                  id: "register-form",
                  name: "registerForm",
                  role: "form",
                  "no-validate": "",
                },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.register()
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-control-label",
                      attrs: { for: "username" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("global.form['username.label']")
                        ),
                      },
                    },
                    [_vm._v("Username")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.$v.registerAccount.login.$model,
                        expression: "$v.registerAccount.login.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.registerAccount.login.$invalid,
                      invalid: _vm.$v.registerAccount.login.$invalid,
                    },
                    attrs: {
                      type: "text",
                      id: "username",
                      name: "login",
                      required: "",
                      minlength: "1",
                      maxlength: "50",
                      pattern:
                        "^[a-zA-Z0-9!#$&'*+=?^_`{|}~.-]+@?[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
                      placeholder: _vm.$t(
                        "global.form['username.placeholder']"
                      ),
                      "data-cy": "username",
                    },
                    domProps: { value: _vm.$v.registerAccount.login.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.registerAccount.login,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.registerAccount.login.$anyDirty &&
                  _vm.$v.registerAccount.login.$invalid
                    ? _c("div", [
                        !_vm.$v.registerAccount.login.required
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "register.messages.validate.login.required"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your username is required.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.registerAccount.login.minLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "register.messages.validate.login.minlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your username is required to be at least 1 character.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.registerAccount.login.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "register.messages.validate.login.maxlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your username cannot be longer than 50 characters.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.registerAccount.login.pattern
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "register.messages.validate.login.pattern"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your username can only contain letters and digits.\n            "
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
                        textContent: _vm._s(
                          _vm.$t("global.form['email.label']")
                        ),
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
                        value: _vm.$v.registerAccount.email.$model,
                        expression: "$v.registerAccount.email.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.registerAccount.email.$invalid,
                      invalid: _vm.$v.registerAccount.email.$invalid,
                    },
                    attrs: {
                      type: "email",
                      id: "email",
                      name: "email",
                      minlength: "5",
                      maxlength: "254",
                      email: "",
                      required: "",
                      placeholder: _vm.$t("global.form['email.placeholder']"),
                      "data-cy": "email",
                    },
                    domProps: { value: _vm.$v.registerAccount.email.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.registerAccount.email,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.registerAccount.email.$anyDirty &&
                  _vm.$v.registerAccount.email.$invalid
                    ? _c("div", [
                        !_vm.$v.registerAccount.email.required
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
                        !_vm.$v.registerAccount.email.email
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
                        !_vm.$v.registerAccount.email.minLength
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
                        !_vm.$v.registerAccount.email.maxLength
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
                                  "\n              Your email cannot be longer than 100 characters.\n            "
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
                      attrs: { for: "firstPassword" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("global.form['newpassword.label']")
                        ),
                      },
                    },
                    [_vm._v("New password")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.$v.registerAccount.password.$model,
                        expression: "$v.registerAccount.password.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.registerAccount.password.$invalid,
                      invalid: _vm.$v.registerAccount.password.$invalid,
                    },
                    attrs: {
                      type: "password",
                      id: "firstPassword",
                      name: "password",
                      minlength: "4",
                      maxlength: "50",
                      required: "",
                      placeholder: _vm.$t(
                        "global.form['newpassword.placeholder']"
                      ),
                      "data-cy": "firstPassword",
                    },
                    domProps: { value: _vm.$v.registerAccount.password.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.registerAccount.password,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.registerAccount.password.$anyDirty &&
                  _vm.$v.registerAccount.password.$invalid
                    ? _c("div", [
                        !_vm.$v.registerAccount.password.required
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.newpassword.required"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your password is required.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.registerAccount.password.minLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.newpassword.minlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your password is required to be at least 4 characters.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.registerAccount.password.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.newpassword.maxlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your password cannot be longer than 50 characters.\n            "
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
                      attrs: { for: "secondPassword" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("global.form['confirmpassword.label']")
                        ),
                      },
                    },
                    [_vm._v("New password confirmation")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.$v.confirmPassword.$model,
                        expression: "$v.confirmPassword.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.confirmPassword.$invalid,
                      invalid: _vm.$v.confirmPassword.$invalid,
                    },
                    attrs: {
                      type: "password",
                      id: "secondPassword",
                      name: "confirmPasswordInput",
                      minlength: "4",
                      maxlength: "50",
                      required: "",
                      placeholder: _vm.$t(
                        "global.form['confirmpassword.placeholder']"
                      ),
                      "data-cy": "secondPassword",
                    },
                    domProps: { value: _vm.$v.confirmPassword.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.confirmPassword,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.confirmPassword.$dirty &&
                  _vm.$v.confirmPassword.$invalid
                    ? _c("div", [
                        !_vm.$v.confirmPassword.required
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.confirmpassword.required"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your confirmation password is required.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.confirmPassword.minLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.confirmpassword.minlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your confirmation password is required to be at least 4 characters.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.confirmPassword.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "global.messages.validate.confirmpassword.maxlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your confirmation password cannot be longer than 50 characters.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.confirmPassword.sameAsPassword
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t("global.messages.error.dontmatch")
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              The password and its confirmation do not match!\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      type: "submit",
                      disabled: _vm.$v.$invalid,
                      "data-cy": "submit",
                    },
                    domProps: {
                      textContent: _vm._s(_vm.$t("register.form.button")),
                    },
                  },
                  [_vm._v("\n          Register\n        ")]
                ),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("p"),
        _vm._v(" "),
        _c("div", { staticClass: "alert alert-warning" }, [
          _c(
            "span",
            {
              domProps: {
                textContent: _vm._s(
                  _vm.$t("global.messages.info.authenticated.prefix")
                ),
              },
            },
            [_vm._v("If you want to ")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "alert-link",
              domProps: {
                textContent: _vm._s(
                  _vm.$t("global.messages.info.authenticated.link")
                ),
              },
              on: {
                click: function ($event) {
                  return _vm.openLogin()
                },
              },
            },
            [_vm._v("sign in")]
          ),
          _c(
            "span",
            {
              domProps: {
                innerHTML: _vm._s(
                  _vm.$t("global.messages.info.authenticated.suffix")
                ),
              },
            },
            [
              _vm._v(", you can try the default accounts:"),
              _c("br"),
              _vm._v('- Administrator (login="admin" and password="admin") '),
              _c("br"),
              _vm._v('- User (login="user" and\n          password="user").'),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_account_register_register_vue.chunk.js.map