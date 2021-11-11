(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_account_activate_activate_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/activate/activate.component.ts?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/activate/activate.component.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
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


var Activate = /** @class */ (function (_super) {
    __extends(Activate, _super);
    function Activate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.success = false;
        _this.error = false;
        return _this;
    }
    Activate.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            if (to.query.key) {
                vm.init(to.query.key);
            }
        });
    };
    Activate.prototype.init = function (key) {
        var _this = this;
        this.activateService()
            .activateAccount(key)
            .then(function (res) {
            _this.success = true;
            _this.error = false;
        }, function (err) {
            _this.error = true;
            _this.success = false;
        });
    };
    Activate.prototype.openLogin = function () {
        this.loginService().openLogin(this.$root);
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('activateService'),
        __metadata("design:type", Function)
    ], Activate.prototype, "activateService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('loginService'),
        __metadata("design:type", Function)
    ], Activate.prototype, "loginService", void 0);
    Activate = __decorate([
        vue_class_component__WEBPACK_IMPORTED_MODULE_1__.default
    ], Activate);
    return Activate;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (Activate);


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.vue":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.vue ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate.vue?vue&type=template&id=76da360a& */ "./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a&");
/* harmony import */ var _activate_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/account/activate/activate.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _activate_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__.render,
  _activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('76da360a')) {
      api.createRecord('76da360a', component.options)
    } else {
      api.reload('76da360a', component.options)
    }
    module.hot.accept(/*! ./activate.vue?vue&type=template&id=76da360a& */ "./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate.vue?vue&type=template&id=76da360a& */ "./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a&");
(function () {
      api.rerender('76da360a', {
        render: _activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/account/activate/activate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_activate_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./activate.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/account/activate/activate.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_activate_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a&":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activate_vue_vue_type_template_id_76da360a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./activate.vue?vue&type=template&id=76da360a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/account/activate/activate.vue?vue&type=template&id=76da360a& ***!
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
      _c("div", { staticClass: "col-md-8" }, [
        _c(
          "h1",
          { domProps: { textContent: _vm._s(_vm.$t("activate.title")) } },
          [_vm._v("Activation")]
        ),
        _vm._v(" "),
        _vm.success
          ? _c("div", { staticClass: "alert alert-success" }, [
              _c(
                "span",
                {
                  domProps: {
                    innerHTML: _vm._s(_vm.$t("activate.messages.success")),
                  },
                },
                [
                  _c("strong", [
                    _vm._v("Your user account has been activated."),
                  ]),
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
              _vm._v(".\n      "),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.error
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger",
                domProps: {
                  innerHTML: _vm._s(_vm.$t("activate.messages.error")),
                },
              },
              [
                _c("strong", [_vm._v("Your user could not be activated.")]),
                _vm._v(" Please use the registration form to sign up.\n      "),
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
//# sourceMappingURL=src_main_webapp_app_account_activate_activate_vue.chunk.js.map