(self["webpackChunkposdevicerestapi"] = self["webpackChunkposdevicerestapi"] || []).push([["src_main_webapp_app_core_home_home_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/core/home/home.component.ts?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/core/home/home.component.ts?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************/
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


var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.openLogin = function () {
        this.loginService().openLogin(this.$root);
    };
    Object.defineProperty(Home.prototype, "authenticated", {
        get: function () {
            return this.$store.getters.authenticated;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Home.prototype, "username", {
        get: function () {
            return this.$store.getters.account ? this.$store.getters.account.login : '';
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)('loginService'),
        __metadata("design:type", Function)
    ], Home.prototype, "loginService", void 0);
    Home = __decorate([
        vue_class_component__WEBPACK_IMPORTED_MODULE_1__.default
    ], Home);
    return Home;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),

/***/ "./src/main/webapp/app/core/home/home.vue":
/*!************************************************!*\
  !*** ./src/main/webapp/app/core/home/home.vue ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=16362f12& */ "./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12&");
/* harmony import */ var _home_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.ts?vue&type=script&lang=ts& */ "./src/main/webapp/app/core/home/home.component.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _home_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('16362f12')) {
      api.createRecord('16362f12', component.options)
    } else {
      api.reload('16362f12', component.options)
    }
    module.hot.accept(/*! ./home.vue?vue&type=template&id=16362f12& */ "./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=16362f12& */ "./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12&");
(function () {
      api.rerender('16362f12', {
        render: _home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/main/webapp/app/core/home/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main/webapp/app/core/home/home.component.ts?vue&type=script&lang=ts&":
/*!**********************************************************************************!*\
  !*** ./src/main/webapp/app/core/home/home.component.ts?vue&type=script&lang=ts& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_home_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./home.component.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-1[0].rules[0].use[0]!./src/main/webapp/app/core/home/home.component.ts?vue&type=script&lang=ts&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_use_0_home_component_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12&":
/*!*******************************************************************************!*\
  !*** ./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_16362f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=16362f12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/main/webapp/app/core/home/home.vue?vue&type=template&id=16362f12& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "home row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-9" }, [
      _c(
        "h1",
        {
          staticClass: "display-4",
          domProps: { textContent: _vm._s(_vm.$t("home.title")) },
        },
        [_vm._v("Welcome, Java Hipster!")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "lead",
          domProps: { textContent: _vm._s(_vm.$t("home.subtitle")) },
        },
        [_vm._v("This is your homepage")]
      ),
      _vm._v(" "),
      _c("div", [
        _vm.authenticated
          ? _c("div", { staticClass: "alert alert-success" }, [
              _vm.username
                ? _c(
                    "span",
                    {
                      domProps: {
                        textContent: _vm._s(
                          _vm.$t("home.logged.message", {
                            username: _vm.username,
                          })
                        ),
                      },
                    },
                    [
                      _vm._v(
                        'You are logged in as user "' +
                          _vm._s(_vm.username) +
                          '"'
                      ),
                    ]
                  )
                : _vm._e(),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.authenticated
          ? _c("div", { staticClass: "alert alert-warning" }, [
              _c(
                "span",
                {
                  domProps: {
                    textContent: _vm._s(
                      _vm.$t("global.messages.info.authenticated.prefix")
                    ),
                  },
                },
                [_vm._v("If you want to ")]
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
                  on: {
                    click: function ($event) {
                      return _vm.openLogin()
                    },
                  },
                },
                [_vm._v("sign in")]
              ),
              _c(
                "span",
                {
                  domProps: {
                    innerHTML: _vm._s(
                      _vm.$t("global.messages.info.authenticated.suffix")
                    ),
                  },
                },
                [
                  _vm._v(", you can try the default accounts:"),
                  _c("br"),
                  _vm._v(
                    '- Administrator (login="admin" and password="admin") '
                  ),
                  _c("br"),
                  _vm._v(
                    '- User (login="user" and\n          password="user").'
                  ),
                ]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.authenticated
          ? _c(
              "div",
              { staticClass: "alert alert-warning" },
              [
                _c(
                  "span",
                  {
                    domProps: {
                      textContent: _vm._s(
                        _vm.$t("global.messages.info.register.noaccount")
                      ),
                    },
                  },
                  [_vm._v("You don't have an account yet?")]
                ),
                _vm._v(" \n        "),
                _c(
                  "router-link",
                  {
                    staticClass: "alert-link",
                    attrs: { to: "/register" },
                    domProps: {
                      textContent: _vm._s(
                        _vm.$t("global.messages.info.register.link")
                      ),
                    },
                  },
                  [_vm._v("Register a new account")]
                ),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("p", { domProps: { textContent: _vm._s(_vm.$t("home.question")) } }, [
        _vm._v("If you have any question on JHipster:"),
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c(
            "a",
            {
              attrs: {
                href: "https://www.jhipster.tech/",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              domProps: { textContent: _vm._s(_vm.$t("home.link.homepage")) },
            },
            [_vm._v("JHipster homepage")]
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              attrs: {
                href: "http://stackoverflow.com/tags/jhipster/info",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              domProps: {
                textContent: _vm._s(_vm.$t("home.link.stackoverflow")),
              },
            },
            [_vm._v("JHipster on Stack Overflow")]
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              attrs: {
                href:
                  "https://github.com/jhipster/generator-jhipster/issues?state=open",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              domProps: { textContent: _vm._s(_vm.$t("home.link.bugtracker")) },
            },
            [_vm._v("JHipster bug tracker")]
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              attrs: {
                href: "https://gitter.im/jhipster/generator-jhipster",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              domProps: { textContent: _vm._s(_vm.$t("home.link.chat")) },
            },
            [_vm._v("JHipster public chat room")]
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              attrs: {
                href: "https://twitter.com/jhipster",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              domProps: { textContent: _vm._s(_vm.$t("home.link.follow")) },
            },
            [_vm._v("follow @jhipster on Twitter")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("p", [
        _c("span", { domProps: { textContent: _vm._s(_vm.$t("home.like")) } }, [
          _vm._v("If you like JHipster, don't forget to give us a star on"),
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: {
              href: "https://github.com/jhipster/generator-jhipster",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            domProps: { textContent: _vm._s(_vm.$t("home.github")) },
          },
          [_vm._v("GitHub")]
        ),
        _vm._v("!\n    "),
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
//# sourceMappingURL=src_main_webapp_app_core_home_home_vue.chunk.js.map