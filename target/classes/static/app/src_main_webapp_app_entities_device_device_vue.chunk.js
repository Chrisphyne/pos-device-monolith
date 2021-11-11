(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_device_device_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device.component.ts?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device.component.ts?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vue2_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-filters */ "./node_modules/vue2-filters/dist/vue2-filters.js");
/* harmony import */ var vue2_filters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_filters__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_data_data_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/data/data-utils.service */ "./src/main/webapp/app/shared/data/data-utils.service.ts");
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




var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.removeId = null;
        _this.itemsPerPage = 20;
        _this.queryCount = null;
        _this.page = 1;
        _this.previousPage = 1;
        _this.propOrder = 'id';
        _this.reverse = false;
        _this.totalItems = 0;
        _this.devices = [];
        _this.isFetching = false;
        return _this;
    }
    Device.prototype.mounted = function () {
        this.retrieveAllDevices();
    };
    Device.prototype.clear = function () {
        this.page = 1;
        this.retrieveAllDevices();
    };
    Device.prototype.retrieveAllDevices = function () {
        var _this = this;
        this.isFetching = true;
        var paginationQuery = {
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        };
        this.deviceService()
            .retrieve(paginationQuery)
            .then(function (res) {
            _this.devices = res.data;
            _this.totalItems = Number(res.headers['x-total-count']);
            _this.queryCount = _this.totalItems;
            _this.isFetching = false;
        }, function (err) {
            _this.isFetching = false;
        });
    };
    Device.prototype.handleSyncList = function () {
        this.clear();
    };
    Device.prototype.prepareRemove = function (instance) {
        this.removeId = instance.id;
        if (this.$refs.removeEntity) {
            this.$refs.removeEntity.show();
        }
    };
    Device.prototype.removeDevice = function () {
        var _this = this;
        this.deviceService()
            .delete(this.removeId)
            .then(function () {
            var message = _this.$t('posdevicerestapiApp.device.deleted', { param: _this.removeId });
            _this.$bvToast.toast(message.toString(), {
                toaster: 'b-toaster-top-center',
                title: 'Info',
                variant: 'danger',
                solid: true,
                autoHideDelay: 5000,
            });
            _this.removeId = null;
            _this.retrieveAllDevices();
            _this.closeDialog();
        });
    };
    Device.prototype.sort = function () {
        var result = [this.propOrder + ',' + (this.reverse ? 'desc' : 'asc')];
        if (this.propOrder !== 'id') {
            result.push('id');
        }
        return result;
    };
    Device.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    Device.prototype.transition = function () {
        this.retrieveAllDevices();
    };
    Device.prototype.changeOrder = function (propOrder) {
        this.propOrder = propOrder;
        this.reverse = !this.reverse;
        this.transition();
    };
    Device.prototype.closeDialog = function () {
        this.$refs.removeEntity.hide();
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceService'),
        __metadata("design:type", Function)
    ], Device.prototype, "deviceService", void 0);
    Device = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            mixins: [(vue2_filters__WEBPACK_IMPORTED_MODULE_1___default().mixin)],
        })
    ], Device);
    return Device;
}((0,vue_class_component__WEBPACK_IMPORTED_MODULE_3__.mixins)(_shared_data_data_utils_service__WEBPACK_IMPORTED_MODULE_2__.default)));
/* harmony default export */ __webpack_exports__["default"] = (Device);


/***/ }),

/***/ "./src/main/webapp/app/shared/data/data-utils.service.ts":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/shared/data/data-utils.service.ts ***!
  \***************************************************************/
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

/**
 * An utility service for data.
 */
var JhiDataUtils = /** @class */ (function (_super) {
    __extends(JhiDataUtils, _super);
    function JhiDataUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Method to abbreviate the text given
     */
    JhiDataUtils.prototype.abbreviate = function (text, append) {
        if (append === void 0) { append = '...'; }
        if (text.length < 30) {
            return text;
        }
        return text ? text.substring(0, 15) + append + text.slice(-10) : '';
    };
    /**
     * Method to find the byte size of the string provides
     */
    JhiDataUtils.prototype.byteSize = function (base64String) {
        return this.formatAsBytes(this.size(base64String));
    };
    /**
     * Method to open file
     */
    JhiDataUtils.prototype.openFile = function (contentType, data) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // To support IE and Edge
            var byteCharacters = atob(data);
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            var blob = new Blob([byteArray], {
                type: contentType,
            });
            window.navigator.msSaveOrOpenBlob(blob);
        }
        else {
            // Other browsers
            var fileURL = "data:" + contentType + ";base64," + data;
            var win = window.open();
            win.document.write('<iframe src="' +
                fileURL +
                '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
        }
    };
    /**
     * Method to convert the file to base64
     */
    JhiDataUtils.prototype.toBase64 = function (file, cb) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            var base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
            cb(base64Data);
        };
    };
    /**
     * Method to clear the input
     */
    JhiDataUtils.prototype.clearInputImage = function (entity, elementRef, field, fieldContentType, idInput) {
        if (entity && field && fieldContentType) {
            if (Object.prototype.hasOwnProperty.call(entity, field)) {
                entity[field] = null;
            }
            if (Object.prototype.hasOwnProperty.call(entity, fieldContentType)) {
                entity[fieldContentType] = null;
            }
            if (elementRef && idInput && elementRef.nativeElement.querySelector('#' + idInput)) {
                elementRef.nativeElement.querySelector('#' + idInput).value = null;
            }
        }
    };
    JhiDataUtils.prototype.endsWith = function (suffix, str) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    JhiDataUtils.prototype.paddingSize = function (value) {
        if (this.endsWith('==', value)) {
            return 2;
        }
        if (this.endsWith('=', value)) {
            return 1;
        }
        return 0;
    };
    JhiDataUtils.prototype.size = function (value) {
        return (value.length / 4) * 3 - this.paddingSize(value);
    };
    JhiDataUtils.prototype.formatAsBytes = function (size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    };
    JhiDataUtils.prototype.setFileData = function (event, entity, field, isImage) {
        if (event && event.target.files && event.target.files[0]) {
            var file_1 = event.target.files[0];
            if (isImage && !/^image\//.test(file_1.type)) {
                return;
            }
            this.toBase64(file_1, function (base64Data) {
                entity[field] = base64Data;
                entity[field + "ContentType"] = file_1.type;
            });
        }
    };
    /**
     * Method to download file
     */
    JhiDataUtils.prototype.downloadFile = function (contentType, data, fileName) {
        var byteCharacters = atob(data);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], {
            type: contentType,
        });
        var tempLink = document.createElement('a');
        tempLink.href = window.URL.createObjectURL(blob);
        tempLink.download = fileName;
        tempLink.target = '_blank';
        tempLink.click();
    };
    /**
     * Method to parse header links
     */
    JhiDataUtils.prototype.parseLinks = function (header) {
        var links = {};
        if (header === null || header.indexOf(',') === -1) {
            return links;
        }
        // Split parts by comma
        var parts = header.split(',');
        // Parse each part into a named link
        parts.forEach(function (p) {
            if (p.indexOf('>;') === -1) {
                return;
            }
            var section = p.split('>;');
            var url = section[0].replace(/<(.*)/, '$1').trim();
            var queryString = { page: null };
            url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) {
                queryString[$1] = $3;
            });
            var page = queryString.page;
            if (typeof page === 'string') {
                page = parseInt(page, 10);
            }
            var name = section[1].replace(/rel="(.*)"/, '$1').trim();
            links[name] = page;
        });
        return links;
    };
    JhiDataUtils = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component
    ], JhiDataUtils);
    return JhiDataUtils;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (JhiDataUtils);


/***/ }),

/***/ "./src/main/webapp/app/entities/device/device.vue":
/*!********************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device.vue ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device.vue?vue&type=template&id=3fe08fd4& */ "./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4&");
/* harmony import */ var _device_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/device/device.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _device_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__.render,
  _device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('3fe08fd4')) {
      api.createRecord('3fe08fd4', component.options)
    } else {
      api.reload('3fe08fd4', component.options)
    }
    module.hot.accept(/*! ./device.vue?vue&type=template&id=3fe08fd4& */ "./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device.vue?vue&type=template&id=3fe08fd4& */ "./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4&");
(function () {
      api.rerender('3fe08fd4', {
        render: _device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/device/device.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/device/device.component.ts?vue&type=script&lang=ts&":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device.component.ts?vue&type=script&lang=ts& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./device.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4&":
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_template_id_3fe08fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./device.vue?vue&type=template&id=3fe08fd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device.vue?vue&type=template&id=3fe08fd4& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("h2", { attrs: { id: "page-heading", "data-cy": "DeviceHeading" } }, [
        _c(
          "span",
          {
            attrs: { id: "device-heading" },
            domProps: {
              textContent: _vm._s(
                _vm.$t("posdevicerestapiApp.device.home.title")
              ),
            },
          },
          [_vm._v("Devices")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex justify-content-end" },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-info mr-2",
                attrs: { disabled: _vm.isFetching },
                on: { click: _vm.handleSyncList },
              },
              [
                _c("font-awesome-icon", {
                  attrs: { icon: "sync", spin: _vm.isFetching },
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    domProps: {
                      textContent: _vm._s(
                        _vm.$t(
                          "posdevicerestapiApp.device.home.refreshListLabel"
                        )
                      ),
                    },
                  },
                  [_vm._v("Refresh List")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("router-link", {
              attrs: { to: { name: "DeviceCreate" }, custom: "" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function (ref) {
                    var navigate = ref.navigate
                    return [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary jh-create-entity create-device",
                          attrs: {
                            id: "jh-create-entity",
                            "data-cy": "entityCreateButton",
                          },
                          on: { click: navigate },
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "plus" } }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.$t(
                                    "posdevicerestapiApp.device.home.createLabel"
                                  )
                                ),
                              },
                            },
                            [_vm._v(" Create a new Device ")]
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                },
              ]),
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      !_vm.isFetching && _vm.devices && _vm.devices.length === 0
        ? _c("div", { staticClass: "alert alert-warning" }, [
            _c(
              "span",
              {
                domProps: {
                  textContent: _vm._s(
                    _vm.$t("posdevicerestapiApp.device.home.notFound")
                  ),
                },
              },
              [_vm._v("No devices found")]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.devices && _vm.devices.length > 0
        ? _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped",
                attrs: { "aria-describedby": "devices" },
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("id")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(_vm.$t("global.field.id")),
                            },
                          },
                          [_vm._v("ID")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "id",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
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
                              textContent: _vm._s(
                                _vm.$t("posdevicerestapiApp.device.name")
                              ),
                            },
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "name",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("description")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("posdevicerestapiApp.device.description")
                              ),
                            },
                          },
                          [_vm._v("Description")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "description",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("price")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("posdevicerestapiApp.device.price")
                              ),
                            },
                          },
                          [_vm._v("Price")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "price",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("deviceSize")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("posdevicerestapiApp.device.deviceSize")
                              ),
                            },
                          },
                          [_vm._v("Device Size")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "deviceSize",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("image")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("posdevicerestapiApp.device.image")
                              ),
                            },
                          },
                          [_vm._v("Image")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "image",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { scope: "row" },
                        on: {
                          click: function ($event) {
                            return _vm.changeOrder("deviceModel.name")
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("posdevicerestapiApp.device.deviceModel")
                              ),
                            },
                          },
                          [_vm._v("Device Model")]
                        ),
                        _vm._v(" "),
                        _c("jhi-sort-indicator", {
                          attrs: {
                            "current-order": _vm.propOrder,
                            reverse: _vm.reverse,
                            "field-name": "deviceModel.name",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", { attrs: { scope: "row" } }),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.devices, function (device) {
                    return _c(
                      "tr",
                      { key: device.id, attrs: { "data-cy": "entityTable" } },
                      [
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "DeviceView",
                                    params: { deviceId: device.id },
                                  },
                                },
                              },
                              [_vm._v(_vm._s(device.id))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(device.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(device.description))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(device.price))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t(
                                  "posdevicerestapiApp.Size." +
                                    device.deviceSize
                                )
                              ),
                            },
                          },
                          [_vm._v(_vm._s(device.deviceSize))]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          device.image
                            ? _c(
                                "a",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.openFile(
                                        device.imageContentType,
                                        device.image
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("img", {
                                    staticStyle: { "max-height": "30px" },
                                    attrs: {
                                      src:
                                        "data:" +
                                        device.imageContentType +
                                        ";base64," +
                                        device.image,
                                      alt: "device image",
                                    },
                                  }),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          device.image
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(device.imageContentType) +
                                    ", " +
                                    _vm._s(_vm.byteSize(device.image))
                                ),
                              ])
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          device.deviceModel
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "DeviceModelView",
                                          params: {
                                            deviceModelId:
                                              device.deviceModel.id,
                                          },
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(device.deviceModel.name))]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _c(
                            "div",
                            { staticClass: "btn-group" },
                            [
                              _c("router-link", {
                                attrs: {
                                  to: {
                                    name: "DeviceView",
                                    params: { deviceId: device.id },
                                  },
                                  custom: "",
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (ref) {
                                        var navigate = ref.navigate
                                        return [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-info btn-sm details",
                                              attrs: {
                                                "data-cy":
                                                  "entityDetailsButton",
                                              },
                                              on: { click: navigate },
                                            },
                                            [
                                              _c("font-awesome-icon", {
                                                attrs: { icon: "eye" },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-none d-md-inline",
                                                  domProps: {
                                                    textContent: _vm._s(
                                                      _vm.$t(
                                                        "entity.action.view"
                                                      )
                                                    ),
                                                  },
                                                },
                                                [_vm._v("View")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              }),
                              _vm._v(" "),
                              _c("router-link", {
                                attrs: {
                                  to: {
                                    name: "DeviceEdit",
                                    params: { deviceId: device.id },
                                  },
                                  custom: "",
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (ref) {
                                        var navigate = ref.navigate
                                        return [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-sm edit",
                                              attrs: {
                                                "data-cy": "entityEditButton",
                                              },
                                              on: { click: navigate },
                                            },
                                            [
                                              _c("font-awesome-icon", {
                                                attrs: { icon: "pencil-alt" },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-none d-md-inline",
                                                  domProps: {
                                                    textContent: _vm._s(
                                                      _vm.$t(
                                                        "entity.action.edit"
                                                      )
                                                    ),
                                                  },
                                                },
                                                [_vm._v("Edit")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.removeEntity",
                                      modifiers: { removeEntity: true },
                                    },
                                  ],
                                  staticClass: "btn btn-sm",
                                  attrs: {
                                    variant: "danger",
                                    "data-cy": "entityDeleteButton",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.prepareRemove(device)
                                    },
                                  },
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: "times" },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "d-none d-md-inline",
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.$t("entity.action.delete")
                                        ),
                                      },
                                    },
                                    [_vm._v("Delete")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
              ]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("b-modal", { ref: "removeEntity", attrs: { id: "removeEntity" } }, [
        _c("span", { attrs: { slot: "modal-title" }, slot: "modal-title" }, [
          _c(
            "span",
            {
              attrs: {
                id: "posdevicerestapiApp.device.delete.question",
                "data-cy": "deviceDeleteDialogHeading",
              },
              domProps: { textContent: _vm._s(_vm.$t("entity.delete.title")) },
            },
            [_vm._v("Confirm delete operation")]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c(
            "p",
            {
              attrs: { id: "jhi-delete-device-heading" },
              domProps: {
                textContent: _vm._s(
                  _vm.$t("posdevicerestapiApp.device.delete.question", {
                    id: _vm.removeId,
                  })
                ),
              },
            },
            [
              _vm._v(
                "\n        Are you sure you want to delete this Device?\n      "
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { attrs: { slot: "modal-footer" }, slot: "modal-footer" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "button" },
              domProps: { textContent: _vm._s(_vm.$t("entity.action.cancel")) },
              on: {
                click: function ($event) {
                  return _vm.closeDialog()
                },
              },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: {
                type: "button",
                id: "jhi-confirm-delete-device",
                "data-cy": "entityConfirmDeleteButton",
              },
              domProps: { textContent: _vm._s(_vm.$t("entity.action.delete")) },
              on: {
                click: function ($event) {
                  return _vm.removeDevice()
                },
              },
            },
            [_vm._v("\n        Delete\n      ")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.devices && _vm.devices.length > 0,
              expression: "devices && devices.length > 0",
            },
          ],
        },
        [
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            [
              _c("jhi-item-count", {
                attrs: {
                  page: _vm.page,
                  total: _vm.queryCount,
                  itemsPerPage: _vm.itemsPerPage,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            [
              _c("b-pagination", {
                attrs: {
                  size: "md",
                  "total-rows": _vm.totalItems,
                  "per-page": _vm.itemsPerPage,
                  change: _vm.loadPage(_vm.page),
                },
                model: {
                  value: _vm.page,
                  callback: function ($$v) {
                    _vm.page = $$v
                  },
                  expression: "page",
                },
              }),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_device_device_vue.chunk.js.map