(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_account_settings_settings_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/settings/settings.component.ts?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/settings/settings.component.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ "./src/main/webapp/app/constants.ts");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
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




var validations = {
    settingsAccount: {
        firstName: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.minLength)(1),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.maxLength)(50),
        },
        lastName: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.minLength)(1),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.maxLength)(50),
        },
        email: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required,
            email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.email,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.minLength)(5),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.maxLength)(254),
        },
    },
};
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.success = null;
        _this.error = null;
        _this.errorEmailExists = null;
        _this.languages = _this.$store.getters.languages || [];
        return _this;
    }
    Settings.prototype.save = function () {
        var _this = this;
        this.error = null;
        this.errorEmailExists = null;
        axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/account', this.settingsAccount)
            .then(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.errorEmailExists = null;
        })
            .catch(function (error) {
            _this.success = null;
            _this.error = 'ERROR';
            if (error.response.status === 400 && error.response.data.type === _constants__WEBPACK_IMPORTED_MODULE_1__.EMAIL_ALREADY_USED_TYPE) {
                _this.errorEmailExists = 'ERROR';
                _this.error = null;
            }
        });
    };
    Object.defineProperty(Settings.prototype, "settingsAccount", {
        get: function () {
            return this.$store.getters.account;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "username", {
        get: function () {
            return this.$store.getters.account ? this.$store.getters.account.login : '';
        },
        enumerable: false,
        configurable: true
    });
    Settings = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_2__.Component)({
            validations: validations,
        })
    ], Settings);
    return Settings;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_2__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (Settings);


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.vue":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/account/settings/settings.vue ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=27f84c0a& */ "./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a&");
/* harmony import */ var _settings_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/account/settings/settings.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _settings_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('27f84c0a')) {
      api.createRecord('27f84c0a', component.options)
    } else {
      api.reload('27f84c0a', component.options)
    }
    module.hot.accept(/*! ./settings.vue?vue&type=template&id=27f84c0a& */ "./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=27f84c0a& */ "./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a&");
(function () {
      api.rerender('27f84c0a', {
        render: _settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/account/settings/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************!*\
  !*** ./src/main/webapp/app/account/settings/settings.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_settings_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./settings.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/settings/settings.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_settings_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a&":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_27f84c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=27f84c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/settings/settings.vue?vue&type=template&id=27f84c0a& ***!
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
        _vm.username
          ? _c("h2", { attrs: { id: "settings-title" } }, [
              _c(
                "span",
                {
                  domProps: {
                    innerHTML: _vm._s(
                      _vm.$t("settings.title", { username: _vm.username })
                    ),
                  },
                },
                [
                  _vm._v("User settings for ["),
                  _c("strong", [_vm._v(_vm._s(_vm.username))]),
                  _vm._v("]"),
                ]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.success
          ? _c(
              "div",
              {
                staticClass: "alert alert-success",
                attrs: { role: "alert" },
                domProps: {
                  innerHTML: _vm._s(_vm.$t("settings.messages.success")),
                },
              },
              [_c("strong", [_vm._v("Settings saved!")])]
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
        _vm._v(" "),
        _vm.settingsAccount
          ? _c(
              "form",
              {
                attrs: {
                  name: "form",
                  id: "settings-form",
                  role: "form",
                  novalidate: "",
                },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.save()
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-control-label",
                      attrs: { for: "firstName" },
                      domProps: {
                        textContent: _vm._s(_vm.$t("settings.form.firstname")),
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
                        value: _vm.$v.settingsAccount.firstName.$model,
                        expression: "$v.settingsAccount.firstName.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.settingsAccount.firstName.$invalid,
                      invalid: _vm.$v.settingsAccount.firstName.$invalid,
                    },
                    attrs: {
                      type: "text",
                      id: "firstName",
                      name: "firstName",
                      placeholder: _vm.$t(
                        "settings.form['firstname.placeholder']"
                      ),
                      minlength: "1",
                      maxlength: "50",
                      required: "",
                      "data-cy": "firstname",
                    },
                    domProps: {
                      value: _vm.$v.settingsAccount.firstName.$model,
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.settingsAccount.firstName,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.settingsAccount.firstName.$anyDirty &&
                  _vm.$v.settingsAccount.firstName.$invalid
                    ? _c("div", [
                        !_vm.$v.settingsAccount.firstName.required
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "settings.messages.validate.firstname.required"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your first name is required.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.settingsAccount.firstName.minLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "settings.messages.validate.firstname.minlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your first name is required to be at least 1 character.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.settingsAccount.firstName.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "settings.messages.validate.firstname.maxlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your first name cannot be longer than 50 characters.\n            "
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
                        textContent: _vm._s(_vm.$t("settings.form.lastname")),
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
                        value: _vm.$v.settingsAccount.lastName.$model,
                        expression: "$v.settingsAccount.lastName.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.settingsAccount.lastName.$invalid,
                      invalid: _vm.$v.settingsAccount.lastName.$invalid,
                    },
                    attrs: {
                      type: "text",
                      id: "lastName",
                      name: "lastName",
                      placeholder: _vm.$t(
                        "settings.form['lastname.placeholder']"
                      ),
                      minlength: "1",
                      maxlength: "50",
                      required: "",
                      "data-cy": "lastname",
                    },
                    domProps: { value: _vm.$v.settingsAccount.lastName.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.settingsAccount.lastName,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.settingsAccount.lastName.$anyDirty &&
                  _vm.$v.settingsAccount.lastName.$invalid
                    ? _c("div", [
                        !_vm.$v.settingsAccount.lastName.required
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "settings.messages.validate.lastname.required"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your last name is required.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.settingsAccount.lastName.minLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "settings.messages.validate.lastname.minlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your last name is required to be at least 1 character.\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.settingsAccount.lastName.maxLength
                          ? _c(
                              "small",
                              {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t(
                                      "settings.messages.validate.lastname.maxlength"
                                    )
                                  ),
                                },
                              },
                              [
                                _vm._v(
                                  "\n              Your last name cannot be longer than 50 characters.\n            "
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
                        value: _vm.$v.settingsAccount.email.$model,
                        expression: "$v.settingsAccount.email.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.settingsAccount.email.$invalid,
                      invalid: _vm.$v.settingsAccount.email.$invalid,
                    },
                    attrs: {
                      type: "email",
                      id: "email",
                      name: "email",
                      placeholder: _vm.$t("global.form['email.placeholder']"),
                      minlength: "5",
                      maxlength: "254",
                      email: "",
                      required: "",
                      "data-cy": "email",
                    },
                    domProps: { value: _vm.$v.settingsAccount.email.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.settingsAccount.email,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.settingsAccount.email.$anyDirty &&
                  _vm.$v.settingsAccount.email.$invalid
                    ? _c("div", [
                        !_vm.$v.settingsAccount.email.required
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
                        !_vm.$v.settingsAccount.email.email
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
                        !_vm.$v.settingsAccount.email.minLength
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
                        !_vm.$v.settingsAccount.email.maxLength
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
                _vm.languages && Object.keys(_vm.languages).length > 1
                  ? _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          attrs: { for: "langKey" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("settings.form.language")
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
                              value: _vm.settingsAccount.langKey,
                              expression: "settingsAccount.langKey",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "langKey",
                            name: "langKey",
                            "data-cy": "langKey",
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
                                _vm.settingsAccount,
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
                            { key: "lang-" + key, domProps: { value: key } },
                            [_vm._v(_vm._s(language.name))]
                          )
                        }),
                        0
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      type: "submit",
                      disabled: _vm.$v.settingsAccount.$invalid,
                      "data-cy": "submit",
                    },
                    domProps: {
                      textContent: _vm._s(_vm.$t("settings.form.button")),
                    },
                  },
                  [_vm._v("\n          Save\n        ")]
                ),
              ]
            )
          : _vm._e(),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_account_settings_settings_vue.chunk.js.map