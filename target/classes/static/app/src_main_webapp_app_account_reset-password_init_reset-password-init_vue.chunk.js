(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_account_reset-password_init_reset-password-init_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/reset-password/init/reset-password-init.component.ts?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/reset-password/init/reset-password-init.component.ts?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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



var validations = {
    resetAccount: {
        email: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
            minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(5),
            maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(254),
            email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.email,
        },
    },
};
var ResetPasswordInit = /** @class */ (function (_super) {
    __extends(ResetPasswordInit, _super);
    function ResetPasswordInit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.success = null;
        _this.error = null;
        _this.resetAccount = {
            email: null,
        };
        return _this;
    }
    ResetPasswordInit.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/account/reset-password/init', this.resetAccount.email, {
            headers: {
                'content-type': 'text/plain',
            },
        })
            .then(function () {
            _this.success = true;
        })
            .catch(function (error) {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    ResetPasswordInit = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)({
            validations: validations,
        })
    ], ResetPasswordInit);
    return ResetPasswordInit;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (ResetPasswordInit);


/***/ }),

/***/ "./src/main/webapp/app/account/reset-password/init/reset-password-init.vue":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/account/reset-password/init/reset-password-init.vue ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-init.vue?vue&type=template&id=d9107294& */ "./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294&");
/* harmony import */ var _reset_password_init_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password-init.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/account/reset-password/init/reset-password-init.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _reset_password_init_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__.render,
  _reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('d9107294')) {
      api.createRecord('d9107294', component.options)
    } else {
      api.reload('d9107294', component.options)
    }
    module.hot.accept(/*! ./reset-password-init.vue?vue&type=template&id=d9107294& */ "./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-init.vue?vue&type=template&id=d9107294& */ "./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294&");
(function () {
      api.rerender('d9107294', {
        render: _reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/account/reset-password/init/reset-password-init.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/account/reset-password/init/reset-password-init.component.ts?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/reset-password/init/reset-password-init.component.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_reset_password_init_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./reset-password-init.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/reset-password/init/reset-password-init.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_reset_password_init_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294&":
/*!****************************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294& ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_init_vue_vue_type_template_id_d9107294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reset-password-init.vue?vue&type=template&id=d9107294& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/reset-password/init/reset-password-init.vue?vue&type=template&id=d9107294& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
        !_vm.success
          ? _c("div", { staticClass: "alert alert-warning" }, [
              _c(
                "p",
                {
                  domProps: {
                    textContent: _vm._s(_vm.$t("reset.request.messages.info")),
                  },
                },
                [_vm._v("Enter the email address you used to register.")]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.success
          ? _c("div", { staticClass: "alert alert-success" }, [
              _c(
                "p",
                {
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("reset.request.messages.success")
                    ),
                  },
                },
                [
                  _vm._v(
                    "Check your emails for details on how to reset your password."
                  ),
                ]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.success
          ? _c(
              "form",
              {
                attrs: { name: "form", role: "form" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.requestReset()
                  },
                },
              },
              [
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
                        value: _vm.$v.resetAccount.email.$model,
                        expression: "$v.resetAccount.email.$model",
                      },
                    ],
                    staticClass: "form-control",
                    class: {
                      valid: !_vm.$v.resetAccount.email.$invalid,
                      invalid: _vm.$v.resetAccount.email.$invalid,
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
                      "data-cy": "emailResetPassword",
                    },
                    domProps: { value: _vm.$v.resetAccount.email.$model },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.$v.resetAccount.email,
                          "$model",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.$v.resetAccount.email.$anyDirty &&
                  _vm.$v.resetAccount.email.$invalid
                    ? _c("div", [
                        !_vm.$v.resetAccount.email.required
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
                        !_vm.$v.resetAccount.email.email
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
                        !_vm.$v.resetAccount.email.minLength
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
                        !_vm.$v.resetAccount.email.maxLength
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
                      textContent: _vm._s(_vm.$t("reset.request.form.button")),
                    },
                  },
                  [_vm._v("\n          Reset\n        ")]
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
//# sourceMappingURL=src_main_webapp_app_account_reset-password_init_reset-password-init_vue.chunk.js.map