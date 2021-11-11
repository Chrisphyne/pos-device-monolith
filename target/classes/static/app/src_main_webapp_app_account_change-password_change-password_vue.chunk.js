(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_account_change-password_change-password_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/change-password/change-password.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/change-password/change-password.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var validations = {
    resetPassword: {
        currentPassword: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        },
        newPassword: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(4),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(254),
        },
        confirmPassword: {
            // prettier-ignore
            sameAsPassword: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.sameAs)(function (vm) {
                return vm.newPassword;
            }),
        },
    },
};
var ChangePassword = /** @class */ (function (_super) {
    __extends(ChangePassword, _super);
    function ChangePassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.success = null;
        _this.error = null;
        _this.doNotMatch = null;
        _this.resetPassword = {
            currentPassword: null,
            newPassword: null,
            confirmPassword: null,
        };
        return _this;
    }
    ChangePassword.prototype.changePassword = function () {
        var _this = this;
        if (this.resetPassword.newPassword !== this.resetPassword.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/account/change-password', {
                currentPassword: this.resetPassword.currentPassword,
                newPassword: this.resetPassword.newPassword,
            })
                .then(function () {
                _this.success = 'OK';
                _this.error = null;
            })
                .catch(function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    Object.defineProperty(ChangePassword.prototype, "username", {
        get: function () {
            return this.$store.getters.account ? this.$store.getters.account.login : '';
        },
        enumerable: false,
        configurable: true
    });
    ChangePassword = __decorate([
        (0,vue_class_component__WEBPACK_IMPORTED_MODULE_3__.default)({
            validations: validations,
            computed: __assign({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['account'])),
        })
    ], ChangePassword);
    return ChangePassword;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (ChangePassword);


/***/ }),

/***/ "./src/main/webapp/app/account/change-password/change-password.vue":
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/account/change-password/change-password.vue ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.vue?vue&type=template&id=22a31d5c& */ "./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c&");
/* harmony import */ var _change_password_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/account/change-password/change-password.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _change_password_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__.render,
  _change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('22a31d5c')) {
      api.createRecord('22a31d5c', component.options)
    } else {
      api.reload('22a31d5c', component.options)
    }
    module.hot.accept(/*! ./change-password.vue?vue&type=template&id=22a31d5c& */ "./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.vue?vue&type=template&id=22a31d5c& */ "./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c&");
(function () {
      api.rerender('22a31d5c', {
        render: _change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/account/change-password/change-password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/account/change-password/change-password.component.ts?vue&type=script&lang=ts&":
/*!***********************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/change-password/change-password.component.ts?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_change_password_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./change-password.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/change-password/change-password.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_change_password_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c&":
/*!********************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_22a31d5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./change-password.vue?vue&type=template&id=22a31d5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/change-password/change-password.vue?vue&type=template&id=22a31d5c& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
        _vm.account
          ? _c("h2", { attrs: { id: "password-title" } }, [
              _c(
                "span",
                {
                  domProps: {
                    innerHTML: _vm._s(
                      _vm.$t("password.title", { username: _vm.username })
                    ),
                  },
                },
                [
                  _vm._v("\n          Password for ["),
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
                  innerHTML: _vm._s(_vm.$t("password.messages.success")),
                },
              },
              [_c("strong", [_vm._v("Password changed!")])]
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
                  innerHTML: _vm._s(_vm.$t("password.messages.error")),
                },
              },
              [
                _c("strong", [_vm._v("An error has occurred!")]),
                _vm._v(" The password could not be changed.\n      "),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.doNotMatch
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger",
                attrs: { role: "alert" },
                domProps: {
                  textContent: _vm._s(
                    _vm.$t("global.messages.error.dontmatch")
                  ),
                },
              },
              [
                _vm._v(
                  "\n        The password and its confirmation do not match!\n      "
                ),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { name: "form", role: "form", id: "password-form" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.changePassword()
              },
            },
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "currentPassword" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("global.form['currentpassword.label']")
                    ),
                  },
                },
                [_vm._v("Current password")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.resetPassword.currentPassword.$model,
                    expression: "$v.resetPassword.currentPassword.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.resetPassword.currentPassword.$invalid,
                  invalid: _vm.$v.resetPassword.currentPassword.$invalid,
                },
                attrs: {
                  type: "password",
                  id: "currentPassword",
                  name: "currentPassword",
                  placeholder: _vm.$t(
                    "global.form['currentpassword.placeholder']"
                  ),
                  required: "",
                  "data-cy": "currentPassword",
                },
                domProps: {
                  value: _vm.$v.resetPassword.currentPassword.$model,
                },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.resetPassword.currentPassword,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.resetPassword.currentPassword.$anyDirty &&
              _vm.$v.resetPassword.currentPassword.$invalid
                ? _c("div", [
                    !_vm.$v.resetPassword.currentPassword.required
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
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "newPassword" },
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
                    value: _vm.$v.resetPassword.newPassword.$model,
                    expression: "$v.resetPassword.newPassword.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.resetPassword.newPassword.$invalid,
                  invalid: _vm.$v.resetPassword.newPassword.$invalid,
                },
                attrs: {
                  type: "password",
                  id: "newPassword",
                  name: "newPassword",
                  placeholder: _vm.$t("global.form['newpassword.placeholder']"),
                  minlength: "4",
                  maxlength: "50",
                  required: "",
                  "data-cy": "newPassword",
                },
                domProps: { value: _vm.$v.resetPassword.newPassword.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.resetPassword.newPassword,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.resetPassword.newPassword.$anyDirty &&
              _vm.$v.resetPassword.newPassword.$invalid
                ? _c("div", [
                    !_vm.$v.resetPassword.newPassword.required
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
                    !_vm.$v.resetPassword.newPassword.minLength
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
                    !_vm.$v.resetPassword.newPassword.maxLength
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
                  attrs: { for: "confirmPassword" },
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
                    value: _vm.$v.resetPassword.confirmPassword.$model,
                    expression: "$v.resetPassword.confirmPassword.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.resetPassword.confirmPassword.$invalid,
                  invalid: _vm.$v.resetPassword.confirmPassword.$invalid,
                },
                attrs: {
                  type: "password",
                  id: "confirmPassword",
                  name: "confirmPassword",
                  placeholder: _vm.$t(
                    "global.form['confirmpassword.placeholder']"
                  ),
                  minlength: "4",
                  maxlength: "50",
                  required: "",
                  "data-cy": "confirmPassword",
                },
                domProps: {
                  value: _vm.$v.resetPassword.confirmPassword.$model,
                },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.resetPassword.confirmPassword,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.resetPassword.confirmPassword.$anyDirty &&
              _vm.$v.resetPassword.confirmPassword.$invalid
                ? _c("div", [
                    !_vm.$v.resetAccount.confirmPassword.sameAsPassword
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
                  disabled: _vm.$v.resetPassword.$invalid,
                  "data-cy": "submit",
                },
                domProps: {
                  textContent: _vm._s(_vm.$t("password.form.button")),
                },
              },
              [_vm._v("\n          Save\n        ")]
            ),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_account_change-password_change-password_vue.chunk.js.map