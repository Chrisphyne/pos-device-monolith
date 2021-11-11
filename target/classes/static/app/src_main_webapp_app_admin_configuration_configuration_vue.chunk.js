(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_admin_configuration_configuration_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/configuration/configuration.component.ts?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/configuration/configuration.component.ts?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************************/
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


var JhiConfiguration = /** @class */ (function (_super) {
    __extends(JhiConfiguration, _super);
    function JhiConfiguration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.orderProp = 'prefix';
        _this.reverse = false;
        _this.allConfiguration = false;
        _this.configuration = false;
        _this.configKeys = [];
        _this.filtered = '';
        return _this;
    }
    JhiConfiguration.prototype.mounted = function () {
        this.init();
    };
    JhiConfiguration.prototype.init = function () {
        var _this = this;
        this.configurationService()
            .loadConfiguration()
            .then(function (res) {
            _this.configuration = res;
            for (var _i = 0, _a = _this.configuration; _i < _a.length; _i++) {
                var config = _a[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService()
            .loadEnvConfiguration()
            .then(function (res) {
            _this.allConfiguration = res;
        });
    };
    JhiConfiguration.prototype.changeOrder = function (prop) {
        this.orderProp = prop;
        this.reverse = !this.reverse;
    };
    JhiConfiguration.prototype.keys = function (dict) {
        return dict === undefined ? [] : Object.keys(dict);
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('configurationService'),
        __metadata("design:type", Function)
    ], JhiConfiguration.prototype, "configurationService", void 0);
    JhiConfiguration = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], JhiConfiguration);
    return JhiConfiguration;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiConfiguration);


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.vue":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/admin/configuration/configuration.vue ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.vue?vue&type=template&id=4ad29a8c& */ "./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c&");
/* harmony import */ var _configuration_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/configuration/configuration.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _configuration_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__.render,
  _configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('4ad29a8c')) {
      api.createRecord('4ad29a8c', component.options)
    } else {
      api.reload('4ad29a8c', component.options)
    }
    module.hot.accept(/*! ./configuration.vue?vue&type=template&id=4ad29a8c& */ "./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.vue?vue&type=template&id=4ad29a8c& */ "./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c&");
(function () {
      api.rerender('4ad29a8c', {
        render: _configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/configuration/configuration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts?vue&type=script&lang=ts&":
/*!*****************************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/configuration/configuration.component.ts?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_configuration_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./configuration.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/configuration/configuration.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_configuration_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c&":
/*!**************************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_configuration_vue_vue_type_template_id_4ad29a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./configuration.vue?vue&type=template&id=4ad29a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/configuration/configuration.vue?vue&type=template&id=4ad29a8c& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "h2",
      {
        attrs: {
          id: "configuration-page-heading",
          "data-cy": "configurationPageHeading",
        },
        domProps: { textContent: _vm._s(_vm.$t("configuration.title")) },
      },
      [_vm._v("Configuration")]
    ),
    _vm._v(" "),
    _vm.allConfiguration && _vm.configuration
      ? _c(
          "div",
          [
            _c(
              "span",
              {
                domProps: {
                  textContent: _vm._s(_vm.$t("configuration.filter")),
                },
              },
              [_vm._v("Filter (by prefix)")]
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
            _c("h3", [_vm._v("Spring configuration")]),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass:
                  "table table-striped table-bordered table-responsive d-table",
                attrs: { "aria-describedby": "Configuration" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        staticClass: "w-40",
                        attrs: { scope: "col" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("prefix")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("configuration.table.prefix")
                              ),
                            },
                          },
                          [_vm._v("Prefix")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "w-60",
                        attrs: { scope: "col" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("properties")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("configuration.table.properties")
                              ),
                            },
                          },
                          [_vm._v("Properties")]
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(
                    _vm.orderBy(
                      _vm.filterBy(_vm.configuration, _vm.filtered),
                      _vm.orderProp,
                      _vm.reverse === true ? 1 : -1
                    ),
                    function (entry) {
                      return _c("tr", { key: entry.prefix }, [
                        _c("td", [_c("span", [_vm._v(_vm._s(entry.prefix))])]),
                        _vm._v(" "),
                        _c(
                          "td",
                          _vm._l(_vm.keys(entry.properties), function (key) {
                            return _c("div", { key: key, staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _vm._v(_vm._s(key)),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "float-right badge-secondary break",
                                  },
                                  [_vm._v(_vm._s(entry.properties[key]))]
                                ),
                              ]),
                            ])
                          }),
                          0
                        ),
                      ])
                    }
                  ),
                  0
                ),
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.keys(_vm.allConfiguration), function (key) {
              return _c("div", { key: key }, [
                _c("h4", [_c("span", [_vm._v(_vm._s(key))])]),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-sm table-striped table-bordered table-responsive d-table",
                    attrs: { "aria-describedby": "Properties" },
                  },
                  [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.allConfiguration[key], function (item) {
                        return _c("tr", { key: item.key }, [
                          _c("td", { staticClass: "break" }, [
                            _vm._v(_vm._s(item.key)),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "break" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "float-right badge-secondary break",
                              },
                              [_vm._v(_vm._s(item.val))]
                            ),
                          ]),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ])
            }),
          ],
          2
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "w-40", attrs: { scope: "col" } }, [
          _vm._v("Property"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-60", attrs: { scope: "col" } }, [
          _vm._v("Value"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_configuration_configuration_vue.chunk.js.map