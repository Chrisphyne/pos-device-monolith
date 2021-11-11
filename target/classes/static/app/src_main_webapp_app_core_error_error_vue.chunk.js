(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_core_error_error_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/core/error/error.component.ts?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/core/error/error.component.ts?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************/
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


var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    function Error() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorMessage = null;
        _this.error403 = false;
        _this.error404 = false;
        return _this;
    }
    Error.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            var errorMessage = null;
            var error403 = false;
            var error404 = false;
            if (to.meta.errorMessage) {
                errorMessage = to.meta.errorMessage;
            }
            if (to.meta.error403) {
                error403 = to.meta.error403;
            }
            if (to.meta.error404) {
                error404 = to.meta.error404;
            }
            vm.init(errorMessage, error403, error404);
        });
    };
    Error.prototype.init = function (errorMessage, error403, error404) {
        if (errorMessage === void 0) { errorMessage = null; }
        if (error403 === void 0) { error403 = false; }
        if (error404 === void 0) { error404 = false; }
        this.errorMessage = errorMessage;
        this.error403 = error403;
        this.error404 = error404;
        if (!this.$store.getters.authenticated && this.error403) {
            this.loginService().openLogin(this.$root);
        }
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('loginService'),
        __metadata("design:type", Function)
    ], Error.prototype, "loginService", void 0);
    Error = __decorate([
        vue_class_component__WEBPACK_IMPORTED_MODULE_1__.default
    ], Error);
    return Error;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (Error);


/***/ }),

/***/ "./src/main/webapp/app/core/error/error.vue":
/*!**************************************************!*\
  !*** ./src/main/webapp/app/core/error/error.vue ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.vue?vue&type=template&id=452992f8& */ "./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8&");
/* harmony import */ var _error_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/core/error/error.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _error_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('452992f8')) {
      api.createRecord('452992f8', component.options)
    } else {
      api.reload('452992f8', component.options)
    }
    module.hot.accept(/*! ./error.vue?vue&type=template&id=452992f8& */ "./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.vue?vue&type=template&id=452992f8& */ "./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8&");
(function () {
      api.rerender('452992f8', {
        render: _error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/core/error/error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/core/error/error.component.ts?vue&type=script&lang=ts&":
/*!************************************************************************************!*\
  !*** ./src/main/webapp/app/core/error/error.component.ts?vue&type=script&lang=ts& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_error_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./error.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/core/error/error.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_error_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8&":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_template_id_452992f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./error.vue?vue&type=template&id=452992f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/core/error/error.vue?vue&type=template&id=452992f8& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("h1", { domProps: { textContent: _vm._s(_vm.$t("error.title")) } }, [
          _vm._v("Error Page!"),
        ]),
        _vm._v(" "),
        _vm.errorMessage
          ? _c("div", [
              _c("div", { staticClass: "alert alert-danger" }, [
                _vm._v(_vm._s(_vm.errorMessage)),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.error403
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger",
                domProps: { textContent: _vm._s(_vm.$t("error.http.403")) },
              },
              [_vm._v("You are not authorized to access this page.")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.error404
          ? _c(
              "div",
              {
                staticClass: "alert alert-warning",
                domProps: { textContent: _vm._s(_vm.$t("error.http.404")) },
              },
              [_vm._v("The page you requested does not exist.")]
            )
          : _vm._e(),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("span", { staticClass: "hipster img-fluid rounded" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_core_error_error_vue.chunk.js.map