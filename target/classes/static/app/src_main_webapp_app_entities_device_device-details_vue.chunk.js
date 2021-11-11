(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_device_device-details_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device-details.component.ts?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device-details.component.ts?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony import */ var _shared_data_data_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/data/data-utils.service */ "./src/main/webapp/app/shared/data/data-utils.service.ts");
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



var DeviceDetails = /** @class */ (function (_super) {
    __extends(DeviceDetails, _super);
    function DeviceDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.device = {};
        return _this;
    }
    DeviceDetails.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            if (to.params.deviceId) {
                vm.retrieveDevice(to.params.deviceId);
            }
        });
    };
    DeviceDetails.prototype.retrieveDevice = function (deviceId) {
        var _this = this;
        this.deviceService()
            .find(deviceId)
            .then(function (res) {
            _this.device = res;
        });
    };
    DeviceDetails.prototype.previousState = function () {
        this.$router.go(-1);
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceService'),
        __metadata("design:type", Function)
    ], DeviceDetails.prototype, "deviceService", void 0);
    DeviceDetails = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component
    ], DeviceDetails);
    return DeviceDetails;
}((0,vue_class_component__WEBPACK_IMPORTED_MODULE_2__.mixins)(_shared_data_data_utils_service__WEBPACK_IMPORTED_MODULE_1__.default)));
/* harmony default export */ __webpack_exports__["default"] = (DeviceDetails);


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

/***/ "./src/main/webapp/app/entities/device/device-details.vue":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device-details.vue ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-details.vue?vue&type=template&id=1ba9a6c9& */ "./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9&");
/* harmony import */ var _device_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-details.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/device/device-details.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _device_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__.render,
  _device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('1ba9a6c9')) {
      api.createRecord('1ba9a6c9', component.options)
    } else {
      api.reload('1ba9a6c9', component.options)
    }
    module.hot.accept(/*! ./device-details.vue?vue&type=template&id=1ba9a6c9& */ "./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-details.vue?vue&type=template&id=1ba9a6c9& */ "./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9&");
(function () {
      api.rerender('1ba9a6c9', {
        render: _device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/device/device-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/device/device-details.component.ts?vue&type=script&lang=ts&":
/*!**************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device-details.component.ts?vue&type=script&lang=ts& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./device-details.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device-details.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_details_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9&":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_details_vue_vue_type_template_id_1ba9a6c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./device-details.vue?vue&type=template&id=1ba9a6c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device-details.vue?vue&type=template&id=1ba9a6c9& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-8" }, [
      _vm.device
        ? _c(
            "div",
            [
              _c(
                "h2",
                {
                  staticClass: "jh-entity-heading",
                  attrs: { "data-cy": "deviceDetailsHeading" },
                },
                [
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("posdevicerestapiApp.device.detail.title")
                        ),
                      },
                    },
                    [_vm._v("Device")]
                  ),
                  _vm._v(" " + _vm._s(_vm.device.id) + "\n      "),
                ]
              ),
              _vm._v(" "),
              _c("dl", { staticClass: "row jh-entity-details" }, [
                _c("dt", [
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
                ]),
                _vm._v(" "),
                _c("dd", [_c("span", [_vm._v(_vm._s(_vm.device.name))])]),
                _vm._v(" "),
                _c("dt", [
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
                ]),
                _vm._v(" "),
                _c("dd", [
                  _c("span", [_vm._v(_vm._s(_vm.device.description))]),
                ]),
                _vm._v(" "),
                _c("dt", [
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
                ]),
                _vm._v(" "),
                _c("dd", [_c("span", [_vm._v(_vm._s(_vm.device.price))])]),
                _vm._v(" "),
                _c("dt", [
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
                ]),
                _vm._v(" "),
                _c("dd", [
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t(
                            "posdevicerestapiApp.Size." + _vm.device.deviceSize
                          )
                        ),
                      },
                    },
                    [_vm._v(_vm._s(_vm.device.deviceSize))]
                  ),
                ]),
                _vm._v(" "),
                _c("dt", [
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
                ]),
                _vm._v(" "),
                _c("dd", [
                  _vm.device.image
                    ? _c("div", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.openFile(
                                  _vm.device.imageContentType,
                                  _vm.device.image
                                )
                              },
                            },
                          },
                          [
                            _c("img", {
                              staticStyle: { "max-width": "100%" },
                              attrs: {
                                src:
                                  "data:" +
                                  _vm.device.imageContentType +
                                  ";base64," +
                                  _vm.device.image,
                                alt: "device image",
                              },
                            }),
                          ]
                        ),
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.device.imageContentType) +
                            ", " +
                            _vm._s(_vm.byteSize(_vm.device.image)) +
                            "\n          "
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("dt", [
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
                ]),
                _vm._v(" "),
                _c("dd", [
                  _vm.device.deviceModel
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
                                    deviceModelId: _vm.device.deviceModel.id,
                                  },
                                },
                              },
                            },
                            [_vm._v(_vm._s(_vm.device.deviceModel.name))]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  attrs: {
                    type: "submit",
                    "data-cy": "entityDetailsBackButton",
                  },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.previousState()
                    },
                  },
                },
                [
                  _c("font-awesome-icon", { attrs: { icon: "arrow-left" } }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(_vm.$t("entity.action.back")),
                      },
                    },
                    [_vm._v(" Back")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm.device.id
                ? _c("router-link", {
                    attrs: {
                      to: {
                        name: "DeviceEdit",
                        params: { deviceId: _vm.device.id },
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
                                  staticClass: "btn btn-primary",
                                  on: { click: navigate },
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: "pencil-alt" },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.$t("entity.action.edit")
                                        ),
                                      },
                                    },
                                    [_vm._v(" Edit")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      false,
                      2496563092
                    ),
                  })
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_device_device-details_vue.chunk.js.map