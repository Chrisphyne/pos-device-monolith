(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_account_reset-password_finish_reset-password-finish_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/reset-password/finish/reset-password-finish.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/reset-password/finish/reset-password-finish.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
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
    resetAccount: {
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
var ResetPasswordFinish = /** @class */ (function (_super) {
    __extends(ResetPasswordFinish, _super);
    function ResetPasswordFinish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.doNotMatch = null;
        _this.success = null;
        _this.error = null;
        _this.keyMissing = null;
        _this.resetAccount = {
            newPassword: null,
            confirmPassword: null,
        };
        return _this;
    }
    ResetPasswordFinish.prototype.created = function () {
        if (this.$route !== undefined && this.$route.query !== undefined && this.$route.query.key !== undefined) {
            this.key = this.$route.query.key;
        }
        this.keyMissing = !this.key;
    };
    ResetPasswordFinish.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.success = null;
        this.error = null;
        if (this.resetAccount.newPassword !== this.resetAccount.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/account/reset-password/finish', { key: this.key, newPassword: this.resetAccount.newPassword })
                .then(function () {
                _this.success = 'OK';
            })
                .catch(function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    ResetPasswordFinish.prototype.openLogin = function () {
        this.loginService().openLogin(this.$root);
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Inject)('loginService'),
        __metadata("design:type", Function)
    ], ResetPasswordFinish.prototype, "loginService", void 0);
    ResetPasswordFinish = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)({
            validations: validations,
        })
    ], ResetPasswordFinish);
    return ResetPasswordFinish;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (ResetPasswordFinish);


/***/ }),

/***/ "./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue":
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue ***!
  \*************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-finish.vue?vue&type=template&id=237f90bc& */ "./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc&");
/* harmony import */ var _reset_password_finish_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password-finish.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/account/reset-password/finish/reset-password-finish.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _reset_password_finish_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('237f90bc')) {
      api.createRecord('237f90bc', component.options)
    } else {
      api.reload('237f90bc', component.options)
    }
    module.hot.accept(/*! ./reset-password-finish.vue?vue&type=template&id=237f90bc& */ "./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-finish.vue?vue&type=template&id=237f90bc& */ "./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc&");
(function () {
      api.rerender('237f90bc', {
        render: _reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/account/reset-password/finish/reset-password-finish.component.ts?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/reset-password/finish/reset-password-finish.component.ts?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_reset_password_finish_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./reset-password-finish.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/reset-password/finish/reset-password-finish.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_reset_password_finish_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc&":
/*!********************************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc& ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_finish_vue_vue_type_template_id_237f90bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reset-password-finish.vue?vue&type=template&id=237f90bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue?vue&type=template&id=237f90bc& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-8" }, [
        _c(
          "h1",
          { domProps: { textContent: _vm._s(_vm.$t("reset.request.title")) } },
          [_vm._v("Reset your password")]
        ),
        _vm._v(" "),
        _vm.keyMissing
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger",
                domProps: {
                  innerHTML: _vm._s(_vm.$t("reset.finish.messages.keymissing")),
                },
              },
              [_c("strong", [_vm._v("The password reset key is missing.")])]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.error
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _c(
                "p",
                {
                  domProps: {
                    textContent: _vm._s(_vm.$t("reset.finish.messages.error")),
                  },
                },
                [
                  _vm._v(
                    "\n          Your password couldn't be reset. Remember a password request is only valid for 24 hours.\n        "
                  ),
                ]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.success
          ? _c("div", { staticClass: "alert alert-success" }, [
              _c(
                "span",
                {
                  domProps: {
                    innerHTML: _vm._s(_vm.$t("reset.finish.messages.success")),
                  },
                },
                [
                  _c("strong", [_vm._v("Your password had been reset.")]),
                  _vm._v(" Please "),
                ]
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
                  on: { click: _vm.openLogin },
                },
                [_vm._v("sign in")]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.doNotMatch
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _c(
                "p",
                {
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("global.messages.error.dontmatch")
                    ),
                  },
                },
                [_vm._v("The password and its confirmation do not match!")]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.success && !_vm.keyMissing
          ? _c("div", { staticClass: "alert alert-warning" }, [
              _c(
                "p",
                {
                  domProps: {
                    textContent: _vm._s(_vm.$t("reset.finish.messages.info")),
                  },
                },
                [_vm._v("Choose a new password.")]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.keyMissing
          ? _c("div", [
              !_vm.success
                ? _c(
                    "form",
                    {
                      attrs: { name: "form", role: "form" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.finishReset()
                        },
                      },
                    },
                    [
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
                              value: _vm.$v.resetAccount.newPassword.$model,
                              expression: "$v.resetAccount.newPassword.$model",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            valid: !_vm.$v.resetAccount.newPassword.$invalid,
                            invalid: _vm.$v.resetAccount.newPassword.$invalid,
                          },
                          attrs: {
                            type: "password",
                            id: "newPassword",
                            name: "newPassword",
                            placeholder: _vm.$t(
                              "global.form['newpassword.placeholder']"
                            ),
                            minlength: "4",
                            maxlength: "50",
                            required: "",
                            "data-cy": "resetPassword",
                          },
                          domProps: {
                            value: _vm.$v.resetAccount.newPassword.$model,
                          },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.resetAccount.newPassword,
                                "$model",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.$v.resetAccount.newPassword.$anyDirty &&
                        _vm.$v.resetAccount.newPassword.$invalid
                          ? _c("div", [
                              !_vm.$v.resetAccount.newPassword.required
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
                                        "\n                Your password is required.\n              "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.$v.resetAccount.newPassword.minLength
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
                                        "\n                Your password is required to be at least 4 characters.\n              "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.$v.resetAccount.newPassword.maxLength
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
                                        "\n                Your password cannot be longer than 50 characters.\n              "
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
                              value: _vm.$v.resetAccount.confirmPassword.$model,
                              expression:
                                "$v.resetAccount.confirmPassword.$model",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            valid: !_vm.$v.resetAccount.confirmPassword
                              .$invalid,
                            invalid:
                              _vm.$v.resetAccount.confirmPassword.$invalid,
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
                            "data-cy": "confirmResetPassword",
                          },
                          domProps: {
                            value: _vm.$v.resetAccount.confirmPassword.$model,
                          },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.resetAccount.confirmPassword,
                                "$model",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.$v.resetAccount.confirmPassword.$anyDirty &&
                        _vm.$v.resetAccount.confirmPassword.$invalid
                          ? _c("div", [
                              !_vm.$v.resetAccount.confirmPassword
                                .sameAsPassword
                                ? _c(
                                    "small",
                                    {
                                      staticClass: "form-text text-danger",
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.$t(
                                            "global.messages.error.dontmatch"
                                          )
                                        ),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                The password and its confirmation do not match!\n              "
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
                            disabled: _vm.$v.resetAccount.$invalid,
                            "data-cy": "submit",
                          },
                          domProps: {
                            textContent: _vm._s(_vm.$t("password.form.button")),
                          },
                        },
                        [_vm._v("\n            Save\n          ")]
                      ),
                    ]
                  )
                : _vm._e(),
            ])
          : _vm._e(),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_account_reset-password_finish_reset-password-finish_vue.chunk.js.map