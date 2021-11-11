(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_admin_metrics_metrics_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/metrics/metrics-modal.component.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/metrics/metrics-modal.component.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************/
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


var JhiMetricsModal = /** @class */ (function (_super) {
    __extends(JhiMetricsModal, _super);
    function JhiMetricsModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.threadDumpFilter = null;
        return _this;
    }
    Object.defineProperty(JhiMetricsModal.prototype, "threadDumpData", {
        get: function () {
            var data = {
                threadDumpAll: 0,
                threadDumpBlocked: 0,
                threadDumpRunnable: 0,
                threadDumpTimedWaiting: 0,
                threadDumpWaiting: 0,
            };
            if (this.threadDump) {
                this.threadDump.forEach(function (value) {
                    if (value.threadState === 'RUNNABLE') {
                        data.threadDumpRunnable += 1;
                    }
                    else if (value.threadState === 'WAITING') {
                        data.threadDumpWaiting += 1;
                    }
                    else if (value.threadState === 'TIMED_WAITING') {
                        data.threadDumpTimedWaiting += 1;
                    }
                    else if (value.threadState === 'BLOCKED') {
                        data.threadDumpBlocked += 1;
                    }
                });
                data.threadDumpAll = data.threadDumpRunnable + data.threadDumpWaiting + data.threadDumpTimedWaiting + data.threadDumpBlocked;
            }
            return data;
        },
        enumerable: false,
        configurable: true
    });
    JhiMetricsModal.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)(),
        __metadata("design:type", Object)
    ], JhiMetricsModal.prototype, "threadDump", void 0);
    JhiMetricsModal = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], JhiMetricsModal);
    return JhiMetricsModal;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiMetricsModal);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/metrics/metrics.component.ts?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/metrics/metrics.component.ts?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metrics_modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics-modal.vue */ "./src/main/webapp/app/admin/metrics/metrics-modal.vue");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JhiMetrics = /** @class */ (function (_super) {
    __extends(JhiMetrics, _super);
    function JhiMetrics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.metrics = {};
        _this.threadData = null;
        _this.threadStats = {};
        _this.updatingMetrics = true;
        return _this;
    }
    JhiMetrics.prototype.mounted = function () {
        this.refresh();
    };
    JhiMetrics.prototype.refresh = function () {
        var _this = this;
        this.metricsService()
            .getMetrics()
            .then(function (resultsMetrics) {
            _this.metrics = resultsMetrics.data;
            _this.metricsService()
                .retrieveThreadDump()
                .then(function (res) {
                _this.updatingMetrics = true;
                _this.threadData = res.data.threads;
                _this.threadStats = {
                    threadDumpRunnable: 0,
                    threadDumpWaiting: 0,
                    threadDumpTimedWaiting: 0,
                    threadDumpBlocked: 0,
                    threadDumpAll: 0,
                };
                _this.threadData.forEach(function (value) {
                    if (value.threadState === 'RUNNABLE') {
                        _this.threadStats.threadDumpRunnable += 1;
                    }
                    else if (value.threadState === 'WAITING') {
                        _this.threadStats.threadDumpWaiting += 1;
                    }
                    else if (value.threadState === 'TIMED_WAITING') {
                        _this.threadStats.threadDumpTimedWaiting += 1;
                    }
                    else if (value.threadState === 'BLOCKED') {
                        _this.threadStats.threadDumpBlocked += 1;
                    }
                });
                _this.threadStats.threadDumpAll =
                    _this.threadStats.threadDumpRunnable +
                        _this.threadStats.threadDumpWaiting +
                        _this.threadStats.threadDumpTimedWaiting +
                        _this.threadStats.threadDumpBlocked;
                _this.updatingMetrics = false;
            })
                .catch(function () {
                _this.updatingMetrics = true;
            });
        })
            .catch(function () {
            _this.updatingMetrics = true;
        });
    };
    JhiMetrics.prototype.openModal = function () {
        if (this.$refs.metricsModal.show) {
            this.$refs.metricsModal.show();
        }
    };
    JhiMetrics.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    JhiMetrics.prototype.formatNumber1 = function (value) {
        return numeral__WEBPACK_IMPORTED_MODULE_0___default()(value).format('0,0');
    };
    JhiMetrics.prototype.formatNumber2 = function (value) {
        return numeral__WEBPACK_IMPORTED_MODULE_0___default()(value).format('0,00');
    };
    JhiMetrics.prototype.convertMillisecondsToDuration = function (ms) {
        var times = {
            year: 31557600000,
            month: 2629746000,
            day: 86400000,
            hour: 3600000,
            minute: 60000,
            second: 1000,
        };
        var time_string = '';
        var plural = '';
        for (var key in times) {
            if (Math.floor(ms / times[key]) > 0) {
                if (Math.floor(ms / times[key]) > 1) {
                    plural = 's';
                }
                else {
                    plural = '';
                }
                time_string += Math.floor(ms / times[key]).toString() + ' ' + key.toString() + plural + ' ';
                ms = ms - times[key] * Math.floor(ms / times[key]);
            }
        }
        return time_string;
    };
    JhiMetrics.prototype.isObjectExisting = function (metrics, key) {
        return metrics && metrics[key];
    };
    JhiMetrics.prototype.isObjectExistingAndNotEmpty = function (metrics, key) {
        return this.isObjectExisting(metrics, key) && JSON.stringify(metrics[key]) !== '{}';
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_2__.Inject)('metricsService'),
        __metadata("design:type", Function)
    ], JhiMetrics.prototype, "metricsService", void 0);
    JhiMetrics = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_2__.Component)({
            components: {
                'metrics-modal': _metrics_modal_vue__WEBPACK_IMPORTED_MODULE_1__.default,
            },
        })
    ], JhiMetrics);
    return JhiMetrics;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_2__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiMetrics);


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.vue":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/admin/metrics/metrics-modal.vue ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metrics-modal.vue?vue&type=template&id=dc79ea98& */ "./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98&");
/* harmony import */ var _metrics_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics-modal.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _metrics_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__.render,
  _metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('dc79ea98')) {
      api.createRecord('dc79ea98', component.options)
    } else {
      api.reload('dc79ea98', component.options)
    }
    module.hot.accept(/*! ./metrics-modal.vue?vue&type=template&id=dc79ea98& */ "./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metrics-modal.vue?vue&type=template&id=dc79ea98& */ "./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98&");
(function () {
      api.rerender('dc79ea98', {
        render: _metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/metrics/metrics-modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.vue":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/admin/metrics/metrics.vue ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metrics.vue?vue&type=template&id=55e5cdd8& */ "./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8&");
/* harmony import */ var _metrics_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/admin/metrics/metrics.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _metrics_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__.render,
  _metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('55e5cdd8')) {
      api.createRecord('55e5cdd8', component.options)
    } else {
      api.reload('55e5cdd8', component.options)
    }
    module.hot.accept(/*! ./metrics.vue?vue&type=template&id=55e5cdd8& */ "./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metrics.vue?vue&type=template&id=55e5cdd8& */ "./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8&");
(function () {
      api.rerender('55e5cdd8', {
        render: _metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/admin/metrics/metrics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts?vue&type=script&lang=ts&":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/metrics/metrics-modal.component.ts?vue&type=script&lang=ts& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_metrics_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./metrics-modal.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/metrics/metrics-modal.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_metrics_modal_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts?vue&type=script&lang=ts&":
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/metrics/metrics.component.ts?vue&type=script&lang=ts& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_metrics_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./metrics.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/admin/metrics/metrics.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_metrics_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98&":
/*!********************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_modal_vue_vue_type_template_id_dc79ea98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./metrics-modal.vue?vue&type=template&id=dc79ea98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98&");


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8&":
/*!**************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_metrics_vue_vue_type_template_id_55e5cdd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./metrics.vue?vue&type=template&id=55e5cdd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/metrics/metrics-modal.vue?vue&type=template&id=dc79ea98& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal-body" },
    [
      _c(
        "span",
        {
          staticClass: "badge badge-primary",
          on: {
            click: function ($event) {
              _vm.threadDumpFilter = ""
            },
          },
        },
        [
          _vm._v("All "),
          _c("span", { staticClass: "badge badge-pill badge-default" }, [
            _vm._v(_vm._s(_vm.threadDumpData.threadDumpAll)),
          ]),
        ]
      ),
      _vm._v(" \n  "),
      _c(
        "span",
        {
          staticClass: "badge badge-success",
          on: {
            click: function ($event) {
              _vm.threadDumpFilter = "RUNNABLE"
            },
          },
        },
        [
          _vm._v("Runnable "),
          _c("span", { staticClass: "badge badge-pill badge-default" }, [
            _vm._v(_vm._s(_vm.threadDumpData.threadDumpRunnable)),
          ]),
        ]
      ),
      _vm._v(" \n  "),
      _c(
        "span",
        {
          staticClass: "badge badge-info",
          on: {
            click: function ($event) {
              _vm.threadDumpFilter = "WAITING"
            },
          },
        },
        [
          _vm._v("Waiting "),
          _c("span", { staticClass: "badge badge-pill badge-default" }, [
            _vm._v(_vm._s(_vm.threadDumpData.threadDumpWaiting)),
          ]),
        ]
      ),
      _vm._v(" \n  "),
      _c(
        "span",
        {
          staticClass: "badge badge-warning",
          on: {
            click: function ($event) {
              _vm.threadDumpFilter = "TIMED_WAITING"
            },
          },
        },
        [
          _vm._v("Timed Waiting "),
          _c("span", { staticClass: "badge badge-pill badge-default" }, [
            _vm._v(_vm._s(_vm.threadDumpData.threadDumpTimedWaiting)),
          ]),
        ]
      ),
      _vm._v(" \n  "),
      _c(
        "span",
        {
          staticClass: "badge badge-danger",
          on: {
            click: function ($event) {
              _vm.threadDumpFilter = "BLOCKED"
            },
          },
        },
        [
          _vm._v("Blocked "),
          _c("span", { staticClass: "badge badge-pill badge-default" }, [
            _vm._v(_vm._s(_vm.threadDumpData.threadDumpBlocked)),
          ]),
        ]
      ),
      _vm._v(" \n  "),
      _c("div", { staticClass: "mt-2" }, [_vm._v(" ")]),
      _vm._v("\n  Filter\n  "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.threadDumpFilter,
            expression: "threadDumpFilter",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text" },
        domProps: { value: _vm.threadDumpFilter },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.threadDumpFilter = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _vm._l(
        _vm.filterBy(_vm.threadDump, _vm.threadDumpFilter),
        function (entry, key) {
          return _c("div", { key: key, staticClass: "pad" }, [
            _c("h6", [
              _c(
                "span",
                {
                  staticClass: "badge",
                  class: _vm.getBadgeClass(entry.threadState),
                },
                [_vm._v(_vm._s(entry.threadState))]
              ),
              _vm._v(
                " " +
                  _vm._s(entry.threadName) +
                  " (ID " +
                  _vm._s(entry.threadId) +
                  ")\n      "
              ),
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0);" },
                  on: {
                    click: function ($event) {
                      entry.show = !entry.show
                    },
                  },
                },
                [
                  _c(
                    "span",
                    {
                      attrs: { hidden: entry.show },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.threads.dump.show")
                        ),
                      },
                    },
                    [_vm._v("Show StackTrace")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      attrs: { hidden: !entry.show },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.threads.dump.hide")
                        ),
                      },
                    },
                    [_vm._v("Hide StackTrace")]
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card", attrs: { hidden: !entry.show } }, [
              _c(
                "div",
                { staticClass: "card-body" },
                _vm._l(entry.stackTrace, function (st, key) {
                  return _c("div", { key: key, staticClass: "break" }, [
                    _c("samp", [
                      _vm._v(
                        _vm._s(st.className) + "." + _vm._s(st.methodName) + "("
                      ),
                      _c("code", [
                        _vm._v(
                          _vm._s(st.fileName) + ":" + _vm._s(st.lineNumber)
                        ),
                      ]),
                      _vm._v(")"),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "mt-1" }),
                  ])
                }),
                0
              ),
            ]),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass: "table table-sm table-responsive",
                attrs: { "aria-describedby": "Metrics" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.jvm.threads.dump.blockedtime")
                          ),
                        },
                      },
                      [_vm._v("Blocked Time")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.jvm.threads.dump.blockedcount")
                          ),
                        },
                      },
                      [_vm._v("Blocked Count")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.jvm.threads.dump.waitedtime")
                          ),
                        },
                      },
                      [_vm._v("Waited Time")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.jvm.threads.dump.waitedcount")
                          ),
                        },
                      },
                      [_vm._v("Waited Count")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.jvm.threads.dump.lockname")
                          ),
                        },
                      },
                      [_vm._v("Lock Name")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v(_vm._s(entry.blockedTime))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(entry.blockedCount))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(entry.waitedTime))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(entry.waitedCount))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "thread-dump-modal-lock",
                        attrs: { title: entry.lockName },
                      },
                      [_c("code", [_vm._v(_vm._s(entry.lockName))])]
                    ),
                  ]),
                ]),
              ]
            ),
          ])
        }
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/admin/metrics/metrics.vue?vue&type=template&id=55e5cdd8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
              id: "metrics-page-heading",
              "data-cy": "metricsPageHeading",
            },
            domProps: { textContent: _vm._s(_vm.$t("metrics.title")) },
          },
          [_vm._v("Application Metrics")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary float-right",
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
                  textContent: _vm._s(_vm.$t("metrics['refresh.button']")),
                },
              },
              [_vm._v("Refresh")]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "h3",
        { domProps: { textContent: _vm._s(_vm.$t("metrics.jvm.title")) } },
        [_vm._v("JVM Metrics")]
      ),
      _vm._v(" "),
      !_vm.updatingMetrics
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c(
                "h4",
                {
                  domProps: {
                    textContent: _vm._s(_vm.$t("metrics.jvm.memory.title")),
                  },
                },
                [_vm._v("Memory")]
              ),
              _vm._v(" "),
              _c(
                "div",
                _vm._l(_vm.metrics.jvm, function (entry, key) {
                  return _c(
                    "div",
                    { key: key },
                    [
                      entry.max !== -1
                        ? _c("span", [
                            _c("span", [_vm._v(_vm._s(key))]),
                            _vm._v(
                              " (" +
                                _vm._s(
                                  _vm.formatNumber1(entry.used / 1048576)
                                ) +
                                "M / " +
                                _vm._s(_vm.formatNumber1(entry.max / 1048576)) +
                                "M)\n          "
                            ),
                          ])
                        : _c("span", [
                            _c("span", [_vm._v(_vm._s(key))]),
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.formatNumber1(entry.used / 1048576)
                                ) +
                                "M\n          "
                            ),
                          ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          "Committed : " +
                            _vm._s(
                              _vm.formatNumber1(entry.committed / 1048576)
                            ) +
                            "M"
                        ),
                      ]),
                      _vm._v(" "),
                      entry.max !== -1
                        ? _c(
                            "b-progress",
                            {
                              attrs: {
                                variant: "success",
                                animated: "",
                                max: entry.max,
                                striped: "",
                              },
                            },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  value: entry.used,
                                  label:
                                    _vm.formatNumber1(
                                      (entry.used * 100) / entry.max
                                    ) + "%",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                }),
                0
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c(
                  "h4",
                  {
                    domProps: {
                      textContent: _vm._s(_vm.$t("metrics.jvm.threads.title")),
                    },
                  },
                  [_vm._v("Threads")]
                ),
                _vm._v(" "),
                _c("span", [
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.threads.runnable")
                        ),
                      },
                    },
                    [_vm._v("Runnable")]
                  ),
                  _vm._v(" " + _vm._s(_vm.threadStats.threadDumpRunnable)),
                ]),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    attrs: {
                      variant: "success",
                      max: _vm.threadStats.threadDumpAll,
                      striped: "",
                    },
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.threadStats.threadDumpRunnable,
                        label:
                          _vm.formatNumber1(
                            (_vm.threadStats.threadDumpRunnable * 100) /
                              _vm.threadStats.threadDumpAll
                          ) + "%",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", [
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.threads.timedwaiting")
                        ),
                      },
                    },
                    [_vm._v("Timed Waiting")]
                  ),
                  _vm._v(
                    " (" + _vm._s(_vm.threadStats.threadDumpTimedWaiting) + ")"
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    attrs: {
                      variant: "success",
                      max: _vm.threadStats.threadDumpAll,
                      striped: "",
                    },
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.threadStats.threadDumpTimedWaiting,
                        label:
                          _vm.formatNumber1(
                            (_vm.threadStats.threadDumpTimedWaiting * 100) /
                              _vm.threadStats.threadDumpAll
                          ) + "%",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", [
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.threads.waiting")
                        ),
                      },
                    },
                    [_vm._v("Waiting")]
                  ),
                  _vm._v(
                    " (" + _vm._s(_vm.threadStats.threadDumpWaiting) + ")"
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    attrs: {
                      variant: "success",
                      max: _vm.threadStats.threadDumpAll,
                      striped: "",
                    },
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.threadStats.threadDumpWaiting,
                        label:
                          _vm.formatNumber1(
                            (_vm.threadStats.threadDumpWaiting * 100) /
                              _vm.threadStats.threadDumpAll
                          ) + "%",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", [
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.threads.blocked")
                        ),
                      },
                    },
                    [_vm._v("Blocked")]
                  ),
                  _vm._v(
                    " (" + _vm._s(_vm.threadStats.threadDumpBlocked) + ")"
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    attrs: {
                      variant: "success",
                      max: _vm.threadStats.threadDumpAll,
                      striped: "",
                    },
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.threadStats.threadDumpBlocked,
                        label:
                          _vm.formatNumber1(
                            (_vm.threadStats.threadDumpBlocked * 100) /
                              _vm.threadStats.threadDumpAll
                          ) + "%",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    "Total: " +
                      _vm._s(_vm.threadStats.threadDumpAll) +
                      "\n        "
                  ),
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.metricsModal",
                          modifiers: { metricsModal: true },
                        },
                      ],
                      staticClass: "hand",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#threadDump",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.openModal()
                        },
                      },
                    },
                    [_c("font-awesome-icon", { attrs: { icon: "eye" } })],
                    1
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c("h4", [_vm._v("System")]),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v("Uptime"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8 text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.convertMillisecondsToDuration(
                              _vm.metrics.processMetrics["process.uptime"]
                            )
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._v("Start time"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8 text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatMillis")(
                              _vm.metrics.processMetrics["process.start.time"]
                            )
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-9" }, [
                        _vm._v("Process CPU usage"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3 text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              100 *
                                _vm.metrics.processMetrics["process.cpu.usage"]
                            )
                          ) + " %"
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-progress",
                  { attrs: { variant: "success", max: 100, striped: "" } },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value:
                          100 * _vm.metrics.processMetrics["process.cpu.usage"],
                        label:
                          _vm.formatNumber1(
                            100 *
                              _vm.metrics.processMetrics["process.cpu.usage"]
                          ) + "%",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-9" }, [
                        _vm._v("System CPU usage"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3 text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              100 *
                                _vm.metrics.processMetrics["system.cpu.usage"]
                            )
                          ) + " %"
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-progress",
                  { attrs: { variant: "success", max: 100, striped: "" } },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value:
                          100 * _vm.metrics.processMetrics["system.cpu.usage"],
                        label:
                          _vm.formatNumber1(
                            100 * _vm.metrics.processMetrics["system.cpu.usage"]
                          ) + "%",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-9" }, [
                        _vm._v("System CPU count"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3 text-right" }, [
                        _vm._v(
                          _vm._s(_vm.metrics.processMetrics["system.cpu.count"])
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-9" }, [
                        _vm._v("System 1m Load average"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3 text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.processMetrics[
                                "system.load.average.1m"
                              ]
                            )
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-9" }, [
                        _vm._v("Process files max"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3 text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber1(
                              _vm.metrics.processMetrics["process.files.max"]
                            )
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.updatingMetrics
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-9" }, [
                        _vm._v("Process files open"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3 text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber1(
                              _vm.metrics.processMetrics["process.files.open"]
                            )
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ],
              1
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "h3",
        { domProps: { textContent: _vm._s(_vm.$t("metrics.jvm.gc.title")) } },
        [_vm._v("Garbage collections")]
      ),
      _vm._v(" "),
      !_vm.updatingMetrics &&
      _vm.isObjectExisting(_vm.metrics, "garbageCollector")
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c(
                "div",
                [
                  _c("span", [
                    _vm._v(
                      "\n          GC Live Data Size/GC Max Data Size (" +
                        _vm._s(
                          _vm.formatNumber1(
                            _vm.metrics.garbageCollector[
                              "jvm.gc.live.data.size"
                            ] / 1048576
                          )
                        ) +
                        "M /\n          " +
                        _vm._s(
                          _vm.formatNumber1(
                            _vm.metrics.garbageCollector[
                              "jvm.gc.max.data.size"
                            ] / 1048576
                          )
                        ) +
                        "M)\n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-progress",
                    {
                      attrs: {
                        variant: "success",
                        max:
                          _vm.metrics.garbageCollector["jvm.gc.max.data.size"],
                        striped: "",
                      },
                    },
                    [
                      _c("b-progress-bar", {
                        attrs: {
                          value:
                            _vm.metrics.garbageCollector[
                              "jvm.gc.live.data.size"
                            ],
                          label:
                            _vm.formatNumber2(
                              (100 *
                                _vm.metrics.garbageCollector[
                                  "jvm.gc.live.data.size"
                                ]) /
                                _vm.metrics.garbageCollector[
                                  "jvm.gc.max.data.size"
                                ]
                            ) + "%",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c(
                "div",
                [
                  _c("span", [
                    _vm._v(
                      "\n          GC Memory Promoted/GC Memory Allocated (" +
                        _vm._s(
                          _vm.formatNumber1(
                            _vm.metrics.garbageCollector[
                              "jvm.gc.memory.promoted"
                            ] / 1048576
                          )
                        ) +
                        "M /\n          " +
                        _vm._s(
                          _vm.formatNumber1(
                            _vm.metrics.garbageCollector[
                              "jvm.gc.memory.allocated"
                            ] / 1048576
                          )
                        ) +
                        "M)\n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-progress",
                    {
                      attrs: {
                        variant: "success",
                        max:
                          _vm.metrics.garbageCollector[
                            "jvm.gc.memory.allocated"
                          ],
                        striped: "",
                      },
                    },
                    [
                      _c("b-progress-bar", {
                        attrs: {
                          value:
                            _vm.metrics.garbageCollector[
                              "jvm.gc.memory.promoted"
                            ],
                          label:
                            _vm.formatNumber2(
                              (100 *
                                _vm.metrics.garbageCollector[
                                  "jvm.gc.memory.promoted"
                                ]) /
                                _vm.metrics.garbageCollector[
                                  "jvm.gc.memory.allocated"
                                ]
                            ) + "%",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-9" }, [
                  _vm._v("Classes loaded"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 text-right" }, [
                  _vm._v(_vm._s(_vm.metrics.garbageCollector.classesLoaded)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-9" }, [
                  _vm._v("Classes unloaded"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 text-right" }, [
                  _vm._v(_vm._s(_vm.metrics.garbageCollector.classesUnloaded)),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                {
                  staticClass: "table table-striped",
                  attrs: { "aria-describedby": "Jvm gc" },
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "col" } }),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.count")
                            ),
                          },
                        },
                        [_vm._v("Count")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.mean")
                            ),
                          },
                        },
                        [_vm._v("Mean")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.min")
                            ),
                          },
                        },
                        [_vm._v("Min")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.p50")
                            ),
                          },
                        },
                        [_vm._v("p50")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.p75")
                            ),
                          },
                        },
                        [_vm._v("p75")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.p95")
                            ),
                          },
                        },
                        [_vm._v("p95")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.p99")
                            ),
                          },
                        },
                        [_vm._v("p99")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          attrs: { scope: "col" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.servicesstats.table.max")
                            ),
                          },
                        },
                        [_vm._v("Max")]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("jvm.gc.pause")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.metrics.garbageCollector["jvm.gc.pause"].count
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.garbageCollector["jvm.gc.pause"].mean
                            )
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.garbageCollector["jvm.gc.pause"][
                                "0.0"
                              ]
                            )
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.garbageCollector["jvm.gc.pause"][
                                "0.5"
                              ]
                            )
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.garbageCollector["jvm.gc.pause"][
                                "0.75"
                              ]
                            )
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.garbageCollector["jvm.gc.pause"][
                                "0.95"
                              ]
                            )
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.garbageCollector["jvm.gc.pause"][
                                "0.99"
                              ]
                            )
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            _vm.formatNumber2(
                              _vm.metrics.garbageCollector["jvm.gc.pause"].max
                            )
                          )
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "h3",
        { domProps: { textContent: _vm._s(_vm.$t("metrics.jvm.http.title")) } },
        [_vm._v("HTTP requests (time in millisecond)")]
      ),
      _vm._v(" "),
      !_vm.updatingMetrics &&
      _vm.isObjectExisting(_vm.metrics, "http.server.requests")
        ? _c(
            "table",
            {
              staticClass: "table table-striped",
              attrs: { "aria-describedby": "Jvm http" },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    {
                      attrs: { scope: "col" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.http.table.code")
                        ),
                      },
                    },
                    [_vm._v("Code")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      attrs: { scope: "col" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.http.table.count")
                        ),
                      },
                    },
                    [_vm._v("Count")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "text-right",
                      attrs: { scope: "col" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.http.table.mean")
                        ),
                      },
                    },
                    [_vm._v("Mean")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "text-right",
                      attrs: { scope: "col" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("metrics.jvm.http.table.max")
                        ),
                      },
                    },
                    [_vm._v("Max")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(
                  _vm.metrics["http.server.requests"]["percode"],
                  function (entry, key) {
                    return _c("tr", { key: key }, [
                      _c("td", [_vm._v(_vm._s(key))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "b-progress",
                            {
                              attrs: {
                                variant: "success",
                                animated: "",
                                max:
                                  _vm.metrics["http.server.requests"]["all"]
                                    .count,
                                striped: "",
                              },
                            },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  value: entry.count,
                                  label: _vm.formatNumber1(entry.count),
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.formatNumber2(_vm.filterNaN(entry.mean))
                            ) +
                            "\n        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.formatNumber2(entry.max))),
                      ]),
                    ])
                  }
                ),
                0
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("h3", [_vm._v("Endpoints requests (time in millisecond)")]),
      _vm._v(" "),
      !_vm.updatingMetrics
        ? _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "Endpoint" },
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.metrics.services, function (entry, entryKey) {
                      return _vm._l(entry, function (method, methodKey) {
                        return _c("tr", { key: entryKey + "-" + methodKey }, [
                          _c("td", [_vm._v(_vm._s(methodKey))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(entryKey))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(method.count)),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.formatNumber2(method.mean))),
                          ]),
                        ])
                      })
                    }),
                  ],
                  2
                ),
              ]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "h3",
        { domProps: { textContent: _vm._s(_vm.$t("metrics.cache.title")) } },
        [_vm._v("Cache statistics")]
      ),
      _vm._v(" "),
      !_vm.updatingMetrics && _vm.isObjectExisting(_vm.metrics, "cache")
        ? _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "Cache" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.cache.cachename")
                          ),
                        },
                      },
                      [_vm._v("Cache name")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.hits",
                        },
                      },
                      [_vm._v("Cache Hits")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.misses",
                        },
                      },
                      [_vm._v("Cache Misses")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.gets",
                        },
                      },
                      [_vm._v("Cache Gets")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.puts",
                        },
                      },
                      [_vm._v("Cache Puts")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.removals",
                        },
                      },
                      [_vm._v("Cache Removals")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.evictions",
                        },
                      },
                      [_vm._v("Cache Evictions")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.hitPercent",
                        },
                      },
                      [_vm._v("Cache Hit %")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: {
                          scope: "col",
                          "data-translate": "metrics.cache.missPercent",
                        },
                      },
                      [_vm._v("Cache Miss %")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.metrics.cache, function (entry, key) {
                    return _c("tr", { key: key }, [
                      _c("td", [_vm._v(_vm._s(key))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(entry["cache.gets.hit"])),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(entry["cache.gets.miss"])),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(
                            entry["cache.gets.hit"] + entry["cache.gets.miss"]
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(entry["cache.puts"])),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(entry["cache.removals"])),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(entry["cache.evictions"])),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.formatNumber2(
                                _vm.filterNaN(
                                  (100 * entry["cache.gets.hit"]) /
                                    (entry["cache.gets.hit"] +
                                      entry["cache.gets.miss"])
                                )
                              )
                            ) +
                            "\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.formatNumber2(
                                _vm.filterNaN(
                                  (100 * entry["cache.gets.miss"]) /
                                    (entry["cache.gets.hit"] +
                                      entry["cache.gets.miss"])
                                )
                              )
                            ) +
                            "\n          "
                        ),
                      ]),
                    ])
                  }),
                  0
                ),
              ]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "h3",
        {
          domProps: { textContent: _vm._s(_vm.$t("metrics.datasource.title")) },
        },
        [_vm._v("DataSource statistics (time in millisecond)")]
      ),
      _vm._v(" "),
      !_vm.updatingMetrics &&
      _vm.isObjectExistingAndNotEmpty(_vm.metrics, "databases")
        ? _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "Connection pool" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "col" } }, [
                      _c(
                        "span",
                        {
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("metrics.datasource.usage")
                            ),
                          },
                        },
                        [_vm._v("Connection Pool Usage")]
                      ),
                      _vm._v(
                        " (active: " +
                          _vm._s(_vm.metrics.databases.active.value) +
                          ", min:\n            " +
                          _vm._s(_vm.metrics.databases.min.value) +
                          ", max: " +
                          _vm._s(_vm.metrics.databases.max.value) +
                          ", idle: " +
                          _vm._s(_vm.metrics.databases.idle.value) +
                          ")\n          "
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.datasource.count")
                          ),
                        },
                      },
                      [_vm._v("Count")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.datasource.mean")
                          ),
                        },
                      },
                      [_vm._v("Mean")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.servicesstats.table.min")
                          ),
                        },
                      },
                      [_vm._v("Min")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.servicesstats.table.p50")
                          ),
                        },
                      },
                      [_vm._v("p50")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.servicesstats.table.p75")
                          ),
                        },
                      },
                      [_vm._v("p75")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.servicesstats.table.p95")
                          ),
                        },
                      },
                      [_vm._v("p95")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.$t("metrics.servicesstats.table.p99")
                          ),
                        },
                      },
                      [_vm._v("p99")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-right",
                        attrs: { scope: "col" },
                        domProps: {
                          textContent: _vm._s(_vm.$t("metrics.datasource.max")),
                        },
                      },
                      [_vm._v("Max")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v("Acquire")]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(_vm._s(_vm.metrics.databases.acquire.count)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.filterNaN(_vm.metrics.databases.acquire.mean)
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.acquire["0.0"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.acquire["0.5"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.acquire["0.75"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.acquire["0.95"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.acquire["0.99"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.filterNaN(_vm.metrics.databases.acquire.max)
                          )
                        )
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Creation")]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(_vm._s(_vm.metrics.databases.creation.count)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.filterNaN(_vm.metrics.databases.creation.mean)
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.creation["0.0"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.creation["0.5"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.creation["0.75"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.creation["0.95"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.metrics.databases.creation["0.99"]
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.filterNaN(_vm.metrics.databases.creation.max)
                          )
                        )
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Usage")]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(_vm._s(_vm.metrics.databases.usage.count)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.filterNaN(_vm.metrics.databases.usage.mean)
                          )
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(_vm.metrics.databases.usage["0.0"])
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(_vm.metrics.databases.usage["0.5"])
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(_vm.metrics.databases.usage["0.75"])
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(_vm.metrics.databases.usage["0.95"])
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(_vm.metrics.databases.usage["0.99"])
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _vm._v(
                        _vm._s(
                          _vm.formatNumber2(
                            _vm.filterNaN(_vm.metrics.databases.usage.max)
                          )
                        )
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        { ref: "metricsModal", attrs: { size: "lg" } },
        [
          _c(
            "h4",
            {
              staticClass: "modal-title",
              attrs: { slot: "modal-title", id: "showMetricsLabel" },
              domProps: {
                textContent: _vm._s(_vm.$t("metrics.jvm.threads.dump.title")),
              },
              slot: "modal-title",
            },
            [_vm._v("Threads dump")]
          ),
          _vm._v(" "),
          _c("metrics-modal", { attrs: { "thread-dump": _vm.threadData } }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Method")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Endpoint url")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Count"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right", attrs: { scope: "col" } }, [
          _vm._v("Mean"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_metrics_metrics_vue.chunk.js.map