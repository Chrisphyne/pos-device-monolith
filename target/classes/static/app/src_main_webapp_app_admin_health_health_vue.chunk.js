(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_admin_health_health_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/health/health-modal.component.ts?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/health/health-modal.component.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

var JhiHealthModal = /** @class */ (function (_super) {
    __extends(JhiHealthModal, _super);
    function JhiHealthModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JhiHealthModal.prototype.baseName = function (name) {
        return this.healthService().getBaseName(name);
    };
    JhiHealthModal.prototype.subSystemName = function (name) {
        return this.healthService().getSubSystemName(name);
    };
    JhiHealthModal.prototype.readableValue = function (value) {
        if (this.currentHealth.name === 'diskSpace') {
            // Should display storage space in an human readable unit
            var val = value / 1073741824;
            if (val > 1) {
                // Value
                return val.toFixed(2) + ' GB';
            }
            else {
                return (value / 1048576).toFixed(2) + ' MB';
            }
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        else {
            return value.toString();
        }
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)(),
        __metadata("design:type", Object)
    ], JhiHealthModal.prototype, "currentHealth", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('healthService'),
        __metadata("design:type", Function)
    ], JhiHealthModal.prototype, "healthService", void 0);
    JhiHealthModal = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component
    ], JhiHealthModal);
    return JhiHealthModal;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiHealthModal);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/health/health.component.ts?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/health/health.component.ts?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _health_modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-modal.vue */ "./src/main/webapp/app/admin/health/health-modal.vue");
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


var JhiHealth = /** @class */ (function (_super) {
    __extends(JhiHealth, _super);
    function JhiHealth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healthData = null;
        _this.currentHealth = null;
        _this.updatingHealth = false;
        return _this;
    }
    JhiHealth.prototype.mounted = function () {
        this.refresh();
    };
    JhiHealth.prototype.baseName = function (name) {
        return this.healthService().getBaseName(name);
    };
    JhiHealth.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiHealth.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService()
            .checkHealth()
            .then(function (res) {
            _this.healthData = _this.healthService().transformHealthData(res.data);
            _this.updatingHealth = false;
        })
            .catch(function (error) {
            if (error.status === 503) {
                _this.healthData = _this.healthService().transformHealthData(error.error);
            }
            _this.updatingHealth = false;
        });
    };
    JhiHealth.prototype.showHealth = function (health) {
        this.currentHealth = health;
        this.$refs.healthModal.show();
    };
    JhiHealth.prototype.subSystemName = function (name) {
        return this.healthService().getSubSystemName(name);
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Inject)('healthService'),
        __metadata("design:type", Function)
    ], JhiHealth.prototype, "healthService", void 0);
    JhiHealth = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)({
            components: {
                'health-modal': _health_modal_vue__WEBPACK_IMPORTED_MODULE_0__.default,
            },
        })
    ], JhiHealth);
    return JhiHealth;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiHealth);


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.vue":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health-modal.vue ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-modal.vue?vue&type=template&id=72a75028& */ "./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028&");
/* harmony import */ var _health_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-modal.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/health/health-modal.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _health_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__.render,
  _health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('72a75028')) {
      api.createRecord('72a75028', component.options)
    } else {
      api.reload('72a75028', component.options)
    }
    module.hot.accept(/*! ./health-modal.vue?vue&type=template&id=72a75028& */ "./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-modal.vue?vue&type=template&id=72a75028& */ "./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028&");
(function () {
      api.rerender('72a75028', {
        render: _health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/health/health-modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.vue":
/*!*****************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.vue ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.vue?vue&type=template&id=1166b04c& */ "./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c&");
/* harmony import */ var _health_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/health/health.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _health_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__.render,
  _health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('1166b04c')) {
      api.createRecord('1166b04c', component.options)
    } else {
      api.reload('1166b04c', component.options)
    }
    module.hot.accept(/*! ./health.vue?vue&type=template&id=1166b04c& */ "./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.vue?vue&type=template&id=1166b04c& */ "./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c&");
(function () {
      api.rerender('1166b04c', {
        render: _health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/health/health.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health-modal.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_health_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./health-modal.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/health/health-modal.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_health_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts?vue&type=script&lang=ts&":
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.component.ts?vue&type=script&lang=ts& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_health_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./health.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/health/health.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_health_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028&":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_health_modal_vue_vue_type_template_id_72a75028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./health-modal.vue?vue&type=template&id=72a75028& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028&");


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c&":
/*!************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_health_vue_vue_type_template_id_1166b04c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./health.vue?vue&type=template&id=1166b04c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/health/health-modal.vue?vue&type=template&id=72a75028& ***!
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
  return _c("div", { staticClass: "modal-body pad" }, [
    _vm.currentHealth && _vm.currentHealth.details
      ? _c("div", [
          _c(
            "h5",
            {
              domProps: {
                textContent: _vm._s(_vm.$t("health.details.properties")),
              },
            },
            [_vm._v("Properties")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "Health" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        staticClass: "text-left",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(_vm.$t("health.details.name")),
                        },
                      },
                      [_vm._v("Name")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-left",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(_vm.$t("health.details.value")),
                        },
                      },
                      [_vm._v("Value")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(
                    _vm.currentHealth.details.details,
                    function (item, index) {
                      return _c("tr", { key: index }, [
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(_vm._s(index)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(_vm._s(_vm.readableValue(item))),
                        ]),
                      ])
                    }
                  ),
                  0
                ),
              ]
            ),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.currentHealth && _vm.currentHealth.error
      ? _c("div", [
          _c(
            "h4",
            {
              domProps: { textContent: _vm._s(_vm.$t("health.details.error")) },
            },
            [_vm._v("Error")]
          ),
          _vm._v(" "),
          _c("pre", [_vm._v(_vm._s(_vm.currentHealth.error))]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/health/health.vue?vue&type=template&id=1166b04c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [
        _c(
          "span",
          {
            attrs: {
              id: "health-page-heading",
              "data-cy": "healthPageHeading",
            },
            domProps: { textContent: _vm._s(_vm.$t("health.title")) },
          },
          [_vm._v("Health Checks")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary float-right",
            attrs: { disabled: _vm.updatingHealth },
            on: {
              click: function ($event) {
                return _vm.refresh()
              },
            },
          },
          [
            _c("font-awesome-icon", { attrs: { icon: "sync" } }),
            _vm._v(" "),
            _c(
              "span",
              {
                domProps: {
                  textContent: _vm._s(_vm.$t("health['refresh.button']")),
                },
              },
              [_vm._v("Refresh")]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c(
          "table",
          {
            staticClass: "table table-striped",
            attrs: { id: "healthCheck", "aria-describedby": "Health check" },
          },
          [
            _c("thead", [
              _c("tr", [
                _c(
                  "th",
                  {
                    attrs: { scope: "col" },
                    domProps: {
                      textContent: _vm._s(_vm.$t("health.table.service")),
                    },
                  },
                  [_vm._v("Service Name")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass: "text-center",
                    attrs: { scope: "col" },
                    domProps: {
                      textContent: _vm._s(_vm.$t("health.table.status")),
                    },
                  },
                  [_vm._v("Status")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass: "text-center",
                    attrs: { scope: "col" },
                    domProps: {
                      textContent: _vm._s(_vm.$t("health.details.details")),
                    },
                  },
                  [_vm._v("Details")]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.healthData, function (health) {
                return _c("tr", { key: health.name }, [
                  _c("td", [
                    _c("span", {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t(
                            "health.indicator." + _vm.baseName(health.name)
                          )
                        ),
                      },
                    }),
                    _vm._v(" " + _vm._s(_vm.subSystemName(health.name))),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c(
                      "span",
                      {
                        staticClass: "badge",
                        class: _vm.getBadgeClass(health.status),
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("health.status." + health.status)
                          ),
                        },
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(health.status) +
                            "\n            "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    health.details || health.error
                      ? _c(
                          "a",
                          {
                            staticClass: "hand",
                            on: {
                              click: function ($event) {
                                return _vm.showHealth(health)
                              },
                            },
                          },
                          [_c("font-awesome-icon", { attrs: { icon: "eye" } })],
                          1
                        )
                      : _vm._e(),
                  ]),
                ])
              }),
              0
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        { ref: "healthModal" },
        [
          _vm.currentHealth
            ? _c(
                "h4",
                {
                  staticClass: "modal-title",
                  attrs: { slot: "modal-title", id: "showHealthLabel" },
                  slot: "modal-title",
                },
                [
                  _c("span", {
                    domProps: {
                      textContent: _vm._s(
                        _vm.$t(
                          "health.indicator." +
                            _vm.baseName(_vm.currentHealth.name)
                        )
                      ),
                    },
                  }),
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.subSystemName(_vm.currentHealth.name)) +
                      "\n    "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("health-modal", {
            attrs: { "current-health": _vm.currentHealth },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_health_health_vue.chunk.js.map