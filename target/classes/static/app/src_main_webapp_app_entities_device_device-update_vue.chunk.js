(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_entities_device_device-update_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device-update.component.ts?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device-update.component.ts?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony import */ var _shared_data_data_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/data/data-utils.service */ "./src/main/webapp/app/shared/data/data-utils.service.ts");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _shared_model_device_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/model/device.model */ "./src/main/webapp/app/shared/model/device.model.ts");
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
    device: {
        name: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required,
        },
        description: {},
        price: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required,
            decimal: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.decimal,
            min: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.minValue)(0),
        },
        deviceSize: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required,
        },
        image: {},
        deviceModel: {
            required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__.required,
        },
    },
};
var DeviceUpdate = /** @class */ (function (_super) {
    __extends(DeviceUpdate, _super);
    function DeviceUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.device = new _shared_model_device_model__WEBPACK_IMPORTED_MODULE_2__.Device();
        _this.deviceModels = [];
        _this.isSaving = false;
        _this.currentLanguage = '';
        return _this;
    }
    DeviceUpdate.prototype.beforeRouteEnter = function (to, from, next) {
        next(function (vm) {
            if (to.params.deviceId) {
                vm.retrieveDevice(to.params.deviceId);
            }
            vm.initRelationships();
        });
    };
    DeviceUpdate.prototype.created = function () {
        var _this = this;
        this.currentLanguage = this.$store.getters.currentLanguage;
        this.$store.watch(function () { return _this.$store.getters.currentLanguage; }, function () {
            _this.currentLanguage = _this.$store.getters.currentLanguage;
        });
    };
    DeviceUpdate.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.device.id) {
            this.deviceService()
                .update(this.device)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.device.updated', { param: param.id });
                return _this.$root.$bvToast.toast(message.toString(), {
                    toaster: 'b-toaster-top-center',
                    title: 'Info',
                    variant: 'info',
                    solid: true,
                    autoHideDelay: 5000,
                });
            });
        }
        else {
            this.deviceService()
                .create(this.device)
                .then(function (param) {
                _this.isSaving = false;
                _this.$router.go(-1);
                var message = _this.$t('posdevicerestapiApp.device.created', { param: param.id });
                _this.$root.$bvToast.toast(message.toString(), {
                    toaster: 'b-toaster-top-center',
                    title: 'Success',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 5000,
                });
            });
        }
    };
    DeviceUpdate.prototype.retrieveDevice = function (deviceId) {
        var _this = this;
        this.deviceService()
            .find(deviceId)
            .then(function (res) {
            _this.device = res;
        });
    };
    DeviceUpdate.prototype.previousState = function () {
        this.$router.go(-1);
    };
    DeviceUpdate.prototype.clearInputImage = function (field, fieldContentType, idInput) {
        if (this.device && field && fieldContentType) {
            if (Object.prototype.hasOwnProperty.call(this.device, field)) {
                this.device[field] = null;
            }
            if (Object.prototype.hasOwnProperty.call(this.device, fieldContentType)) {
                this.device[fieldContentType] = null;
            }
            if (idInput) {
                this.$refs[idInput] = null;
            }
        }
    };
    DeviceUpdate.prototype.initRelationships = function () {
        var _this = this;
        this.deviceModelService()
            .retrieve()
            .then(function (res) {
            _this.deviceModels = res.data;
        });
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceService'),
        __metadata("design:type", Function)
    ], DeviceUpdate.prototype, "deviceService", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('deviceModelService'),
        __metadata("design:type", Function)
    ], DeviceUpdate.prototype, "deviceModelService", void 0);
    DeviceUpdate = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            validations: validations,
        })
    ], DeviceUpdate);
    return DeviceUpdate;
}((0,vue_class_component__WEBPACK_IMPORTED_MODULE_4__.mixins)(_shared_data_data_utils_service__WEBPACK_IMPORTED_MODULE_1__.default)));
/* harmony default export */ __webpack_exports__["default"] = (DeviceUpdate);


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

/***/ "./src/main/webapp/app/shared/model/device.model.ts":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/shared/model/device.model.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": function() { return /* binding */ Device; }
/* harmony export */ });
var Device = /** @class */ (function () {
    function Device(id, name, description, price, deviceSize, imageContentType, image, deviceModel) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.deviceSize = deviceSize;
        this.imageContentType = imageContentType;
        this.image = image;
        this.deviceModel = deviceModel;
    }
    return Device;
}());



/***/ }),

/***/ "./src/main/webapp/app/entities/device/device-update.vue":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device-update.vue ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-update.vue?vue&type=template&id=19ce5bdc& */ "./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc&");
/* harmony import */ var _device_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-update.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/entities/device/device-update.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _device_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__.render,
  _device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('19ce5bdc')) {
      api.createRecord('19ce5bdc', component.options)
    } else {
      api.reload('19ce5bdc', component.options)
    }
    module.hot.accept(/*! ./device-update.vue?vue&type=template&id=19ce5bdc& */ "./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-update.vue?vue&type=template&id=19ce5bdc& */ "./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc&");
(function () {
      api.rerender('19ce5bdc', {
        render: _device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/entities/device/device-update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/entities/device/device-update.component.ts?vue&type=script&lang=ts&":
/*!*************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device-update.component.ts?vue&type=script&lang=ts& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./device-update.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/entities/device/device-update.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_device_update_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc&":
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_update_vue_vue_type_template_id_19ce5bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./device-update.vue?vue&type=template&id=19ce5bdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/entities/device/device-update.vue?vue&type=template&id=19ce5bdc& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        {
          attrs: { name: "editForm", role: "form", novalidate: "" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.save()
            },
          },
        },
        [
          _c(
            "h2",
            {
              attrs: {
                id: "posdevicerestapiApp.device.home.createOrEditLabel",
                "data-cy": "DeviceCreateUpdateHeading",
              },
              domProps: {
                textContent: _vm._s(
                  _vm.$t("posdevicerestapiApp.device.home.createOrEditLabel")
                ),
              },
            },
            [_vm._v("\n        Create or edit a Device\n      ")]
          ),
          _vm._v(" "),
          _c("div", [
            _vm.device.id
              ? _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      attrs: { for: "id" },
                      domProps: {
                        textContent: _vm._s(_vm.$t("global.field.id")),
                      },
                    },
                    [_vm._v("ID")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.device.id,
                        expression: "device.id",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "id", name: "id", readonly: "" },
                    domProps: { value: _vm.device.id },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.device, "id", $event.target.value)
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "device-name" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.device.name")
                    ),
                  },
                },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.device.name.$model,
                    expression: "$v.device.name.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.device.name.$invalid,
                  invalid: _vm.$v.device.name.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "name",
                  id: "device-name",
                  "data-cy": "name",
                  required: "",
                },
                domProps: { value: _vm.$v.device.name.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.$v.device.name, "$model", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.device.name.$anyDirty && _vm.$v.device.name.$invalid
                ? _c("div", [
                    !_vm.$v.device.name.required
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.required")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field is required.\n            "
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
                  attrs: { for: "device-description" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.device.description")
                    ),
                  },
                },
                [_vm._v("Description")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.device.description.$model,
                    expression: "$v.device.description.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.device.description.$invalid,
                  invalid: _vm.$v.device.description.$invalid,
                },
                attrs: {
                  type: "text",
                  name: "description",
                  id: "device-description",
                  "data-cy": "description",
                },
                domProps: { value: _vm.$v.device.description.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.device.description,
                      "$model",
                      $event.target.value
                    )
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "device-price" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.device.price")
                    ),
                  },
                },
                [_vm._v("Price")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.$v.device.price.$model,
                    expression: "$v.device.price.$model",
                    modifiers: { number: true },
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.device.price.$invalid,
                  invalid: _vm.$v.device.price.$invalid,
                },
                attrs: {
                  type: "number",
                  name: "price",
                  id: "device-price",
                  "data-cy": "price",
                  required: "",
                },
                domProps: { value: _vm.$v.device.price.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.device.price,
                      "$model",
                      _vm._n($event.target.value)
                    )
                  },
                  blur: function ($event) {
                    return _vm.$forceUpdate()
                  },
                },
              }),
              _vm._v(" "),
              _vm.$v.device.price.$anyDirty && _vm.$v.device.price.$invalid
                ? _c("div", [
                    !_vm.$v.device.price.required
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.required")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field is required.\n            "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.$v.device.price.min
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.min", { min: 0 })
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field should be at least 0.\n            "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.$v.device.price.numeric
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.number")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field should be a number.\n            "
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
                  attrs: { for: "device-deviceSize" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.device.deviceSize")
                    ),
                  },
                },
                [_vm._v("Device Size")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$v.device.deviceSize.$model,
                      expression: "$v.device.deviceSize.$model",
                    },
                  ],
                  staticClass: "form-control",
                  class: {
                    valid: !_vm.$v.device.deviceSize.$invalid,
                    invalid: _vm.$v.device.deviceSize.$invalid,
                  },
                  attrs: {
                    name: "deviceSize",
                    id: "device-deviceSize",
                    "data-cy": "deviceSize",
                    required: "",
                  },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.$v.device.deviceSize,
                        "$model",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "S",
                        label: _vm.$t("posdevicerestapiApp.Size.S"),
                      },
                    },
                    [_vm._v("S")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "M",
                        label: _vm.$t("posdevicerestapiApp.Size.M"),
                      },
                    },
                    [_vm._v("M")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "L",
                        label: _vm.$t("posdevicerestapiApp.Size.L"),
                      },
                    },
                    [_vm._v("L")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "XL",
                        label: _vm.$t("posdevicerestapiApp.Size.XL"),
                      },
                    },
                    [_vm._v("XL")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    {
                      attrs: {
                        value: "XXL",
                        label: _vm.$t("posdevicerestapiApp.Size.XXL"),
                      },
                    },
                    [_vm._v("XXL")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.$v.device.deviceSize.$anyDirty &&
              _vm.$v.device.deviceSize.$invalid
                ? _c("div", [
                    !_vm.$v.device.deviceSize.required
                      ? _c(
                          "small",
                          {
                            staticClass: "form-text text-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.$t("entity.validation.required")
                              ),
                            },
                          },
                          [
                            _vm._v(
                              "\n              This field is required.\n            "
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
                  attrs: { for: "device-image" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.device.image")
                    ),
                  },
                },
                [_vm._v("Image")]
              ),
              _vm._v(" "),
              _c("div", [
                _vm.device.image
                  ? _c("img", {
                      staticStyle: { "max-height": "100px" },
                      attrs: {
                        src:
                          "data:" +
                          _vm.device.imageContentType +
                          ";base64," +
                          _vm.device.image,
                        alt: "device image",
                      },
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.device.image
                  ? _c(
                      "div",
                      { staticClass: "form-text text-danger clearfix" },
                      [
                        _c("span", { staticClass: "pull-left" }, [
                          _vm._v(
                            _vm._s(_vm.device.imageContentType) +
                              ", " +
                              _vm._s(_vm.byteSize(_vm.device.image))
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary btn-xs pull-right",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.clearInputImage(
                                  "image",
                                  "imageContentType",
                                  "file_image"
                                )
                              },
                            },
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "times" },
                            }),
                          ],
                          1
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("input", {
                  ref: "file_image",
                  attrs: {
                    type: "file",
                    id: "file_image",
                    "data-cy": "image",
                    accept: "image/*",
                  },
                  domProps: {
                    textContent: _vm._s(_vm.$t("entity.action.addimage")),
                  },
                  on: {
                    change: function ($event) {
                      return _vm.setFileData($event, _vm.device, "image", true)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.$v.device.image.$model,
                    expression: "$v.device.image.$model",
                  },
                ],
                staticClass: "form-control",
                class: {
                  valid: !_vm.$v.device.image.$invalid,
                  invalid: _vm.$v.device.image.$invalid,
                },
                attrs: {
                  type: "hidden",
                  name: "image",
                  id: "device-image",
                  "data-cy": "image",
                },
                domProps: { value: _vm.$v.device.image.$model },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.$v.device.image, "$model", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.device.imageContentType,
                    expression: "device.imageContentType",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "hidden",
                  name: "imageContentType",
                  id: "device-imageContentType",
                },
                domProps: { value: _vm.device.imageContentType },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.device,
                      "imageContentType",
                      $event.target.value
                    )
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "form-control-label",
                  attrs: { for: "device-deviceModel" },
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("posdevicerestapiApp.device.deviceModel")
                    ),
                  },
                },
                [_vm._v("Device Model")]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.device.deviceModel,
                      expression: "device.deviceModel",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "device-deviceModel",
                    "data-cy": "deviceModel",
                    name: "deviceModel",
                    required: "",
                  },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.device,
                        "deviceModel",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  !_vm.device.deviceModel
                    ? _c("option", {
                        attrs: { selected: "" },
                        domProps: { value: null },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.deviceModels, function (deviceModelOption) {
                    return _c(
                      "option",
                      {
                        key: deviceModelOption.id,
                        domProps: {
                          value:
                            _vm.device.deviceModel &&
                            deviceModelOption.id === _vm.device.deviceModel.id
                              ? _vm.device.deviceModel
                              : deviceModelOption,
                        },
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(deviceModelOption.name) +
                            "\n            "
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _vm.$v.device.deviceModel.$anyDirty &&
            _vm.$v.device.deviceModel.$invalid
              ? _c("div", [
                  !_vm.$v.device.deviceModel.required
                    ? _c(
                        "small",
                        {
                          staticClass: "form-text text-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.$t("entity.validation.required")
                            ),
                          },
                        },
                        [
                          _vm._v(
                            "\n            This field is required.\n          "
                          ),
                        ]
                      )
                    : _vm._e(),
                ])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", id: "cancel-save" },
                on: {
                  click: function ($event) {
                    return _vm.previousState()
                  },
                },
              },
              [
                _c("font-awesome-icon", { attrs: { icon: "ban" } }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    domProps: {
                      textContent: _vm._s(_vm.$t("entity.action.cancel")),
                    },
                  },
                  [_vm._v("Cancel")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  type: "submit",
                  id: "save-entity",
                  "data-cy": "entityCreateSaveButton",
                  disabled: _vm.$v.device.$invalid || _vm.isSaving,
                },
              },
              [
                _c("font-awesome-icon", { attrs: { icon: "save" } }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    domProps: {
                      textContent: _vm._s(_vm.$t("entity.action.save")),
                    },
                  },
                  [_vm._v("Save")]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_device_device-update_vue.chunk.js.map