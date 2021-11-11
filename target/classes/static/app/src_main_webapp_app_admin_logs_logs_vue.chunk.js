(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_admin_logs_logs_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/logs/logs.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/logs/logs.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************/
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


var JhiLogs = /** @class */ (function (_super) {
    __extends(JhiLogs, _super);
    function JhiLogs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loggers = [];
        _this.filtered = '';
        _this.orderProp = 'name';
        _this.reverse = false;
        return _this;
    }
    JhiLogs.prototype.mounted = function () {
        this.init();
    };
    JhiLogs.prototype.init = function () {
        var _this = this;
        this.logsService()
            .findAll()
            .then(function (response) {
            _this.extractLoggers(response);
        });
    };
    JhiLogs.prototype.updateLevel = function (name, level) {
        var _this = this;
        this.logsService()
            .changeLevel(name, level)
            .then(function () {
            _this.init();
        });
    };
    JhiLogs.prototype.changeOrder = function (orderProp) {
        this.orderProp = orderProp;
        this.reverse = !this.reverse;
    };
    JhiLogs.prototype.extractLoggers = function (response) {
        this.loggers = [];
        if (response.data) {
            for (var _i = 0, _a = Object.keys(response.data.loggers); _i < _a.length; _i++) {
                var key = _a[_i];
                var logger = response.data.loggers[key];
                this.loggers.push({ name: key, level: logger.effectiveLevel });
            }
        }
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('logsService'),
        __metadata("design:type", Function)
    ], JhiLogs.prototype, "logsService", void 0);
    JhiLogs = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], JhiLogs);
    return JhiLogs;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiLogs);


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.vue":
/*!*************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/logs.vue ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs.vue?vue&type=template&id=209e6128& */ "./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128&");
/* harmony import */ var _logs_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/logs/logs.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _logs_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__.render,
  _logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('209e6128')) {
      api.createRecord('209e6128', component.options)
    } else {
      api.reload('209e6128', component.options)
    }
    module.hot.accept(/*! ./logs.vue?vue&type=template&id=209e6128& */ "./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs.vue?vue&type=template&id=209e6128& */ "./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128&");
(function () {
      api.rerender('209e6128', {
        render: _logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/logs/logs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts?vue&type=script&lang=ts&":
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/logs.component.ts?vue&type=script&lang=ts& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_logs_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./logs.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/logs/logs.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_logs_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128&":
/*!********************************************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_template_id_209e6128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./logs.vue?vue&type=template&id=209e6128& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/logs/logs.vue?vue&type=template&id=209e6128& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "table-responsive" }, [
    _c(
      "h2",
      {
        attrs: { id: "logs-page-heading", "data-cy": "logsPageHeading" },
        domProps: { textContent: _vm._s(_vm.$t("logs.title")) },
      },
      [_vm._v("Logs")]
    ),
    _vm._v(" "),
    _vm.loggers
      ? _c("div", [
          _c(
            "p",
            {
              domProps: {
                textContent: _vm._s(
                  _vm.$t("logs.nbloggers", { total: _vm.loggers.length })
                ),
              },
            },
            [_vm._v("There are " + _vm._s(_vm.loggers.length) + " loggers.")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { domProps: { textContent: _vm._s(_vm.$t("logs.filter")) } },
            [_vm._v("Filter")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filtered,
                expression: "filtered",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.filtered },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.filtered = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _c(
            "table",
            {
              staticClass: "table table-sm table-striped table-bordered",
              attrs: { "aria-describedby": "Logs" },
            },
            [
              _c("thead", [
                _c("tr", { attrs: { title: "click to order" } }, [
                  _c(
                    "th",
                    {
                      attrs: { scope: "col" },
                      on: {
                        click: function ($event) {
                          return _vm.changeOrder("name")
                        },
                      },
                    },
                    [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(_vm.$t("logs.table.name")),
                          },
                        },
                        [_vm._v("Name")]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { scope: "col" },
                      on: {
                        click: function ($event) {
                          return _vm.changeOrder("level")
                        },
                      },
                    },
                    [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(_vm.$t("logs.table.level")),
                          },
                        },
                        [_vm._v("Level")]
                      ),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm._l(
                _vm.orderBy(
                  _vm.filterBy(_vm.loggers, _vm.filtered),
                  _vm.orderProp,
                  _vm.reverse === true ? 1 : -1
                ),
                function (logger) {
                  return _c("tr", { key: logger.name }, [
                    _c("td", [_c("small", [_vm._v(_vm._s(logger.name))])]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            logger.level === "TRACE"
                              ? "btn-primary"
                              : "btn-light",
                          on: {
                            click: function ($event) {
                              return _vm.updateLevel(logger.name, "TRACE")
                            },
                          },
                        },
                        [_vm._v("\n            TRACE\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            logger.level === "DEBUG"
                              ? "btn-success"
                              : "btn-light",
                          on: {
                            click: function ($event) {
                              return _vm.updateLevel(logger.name, "DEBUG")
                            },
                          },
                        },
                        [_vm._v("\n            DEBUG\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            logger.level === "INFO" ? "btn-info" : "btn-light",
                          on: {
                            click: function ($event) {
                              return _vm.updateLevel(logger.name, "INFO")
                            },
                          },
                        },
                        [_vm._v("\n            INFO\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            logger.level === "WARN"
                              ? "btn-warning"
                              : "btn-light",
                          on: {
                            click: function ($event) {
                              return _vm.updateLevel(logger.name, "WARN")
                            },
                          },
                        },
                        [_vm._v("\n            WARN\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            logger.level === "ERROR"
                              ? "btn-danger"
                              : "btn-light",
                          on: {
                            click: function ($event) {
                              return _vm.updateLevel(logger.name, "ERROR")
                            },
                          },
                        },
                        [_vm._v("\n            ERROR\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            logger.level === "OFF"
                              ? "btn-secondary"
                              : "btn-light",
                          on: {
                            click: function ($event) {
                              return _vm.updateLevel(logger.name, "OFF")
                            },
                          },
                        },
                        [_vm._v("\n            OFF\n          ")]
                      ),
                    ]),
                  ])
                }
              ),
            ],
            2
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_logs_logs_vue.chunk.js.map