"use strict";
(self["webpackChunkkriti"] = self["webpackChunkkriti"] || []).push([["resources_vue_components_pages_Palette_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cyhnkckali_vue3_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cyhnkckali/vue3-color-picker */ "./node_modules/@cyhnkckali/vue3-color-picker/dist/vue3-color-picker.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ColorPalette",
  components: {
    Vue3ColorPicker: _cyhnkckali_vue3_color_picker__WEBPACK_IMPORTED_MODULE_0__.Vue3ColorPicker
  },
  data: function data() {
    return {
      colors: [],
      active_color: null
    };
  },
  mounted: function mounted() {
    this.loadColors();
  },
  methods: {
    addNewColor: function addNewColor() {
      this.colors.push({
        name: '$color-100',
        code: '#777'
      });
    },
    loadColors: function loadColors() {
      var _this = this;
      Kriti.api({
        url: 'kriti.api.Colors:loadColors',
        then: function then(response) {
          _this.colors = response.colors;
        }
      });
    },
    saveColors: function saveColors() {
      Kriti.api({
        url: 'kriti.api.Colors:saveColors',
        data: {
          colors: this.colors
        },
        then: function then(response) {
          if (response.success) {
            location.reload();
          }
        }
      });
    },
    selectActiveColor: function selectActiveColor(color) {
      this.active_color = null;
      this.active_color = color;
    },
    closePalette: function closePalette() {
      this.active_color = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interface_ColorPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface/ColorPalette */ "./resources/vue/components/interface/ColorPalette.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Palette",
  components: {
    ColorPalette: _interface_ColorPalette__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=template&id=44c8a816":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=template&id=44c8a816 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "color-palette"
};
var _hoisted_2 = ["onUpdate:modelValue"];
var _hoisted_3 = ["onUpdate:modelValue"];
var _hoisted_4 = ["onClick"];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-palette"
}, null, -1 /* HOISTED */);
var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  key: 0,
  "class": "color-palette__palette"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Vue3ColorPicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Vue3ColorPicker");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.colors, function (color, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "color-palette__color",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-color: ".concat(color.code))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "color-palette__code",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.colors[index].name = $event;
      }
    }, null, 8 /* PROPS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.colors[index].name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "color-palette__name",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.colors[index].code = $event;
      }
    }, null, 8 /* PROPS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.colors[index].code]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "color-palette__select",
      onClick: function onClick($event) {
        return $options.selectActiveColor(color);
      }
    }, [].concat(_hoisted_6), 8 /* PROPS */, _hoisted_4)], 4 /* STYLE */);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "color-palette__button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addNewColor && $options.addNewColor.apply($options, arguments);
    })
  }, " + "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "color-palette__button",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.saveColors && $options.saveColors.apply($options, arguments);
    })
  }, " Save colors "), $data.active_color ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "color-palette__palette__close",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.closePalette && $options.closePalette.apply($options, arguments);
    })
  }, " Закрыть "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Vue3ColorPicker, {
    modelValue: $data.active_color.code,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.active_color.code = $event;
    }),
    mode: "solid",
    showColorList: false,
    showEyeDrop: false,
    type: "HEX"
  }, null, 8 /* PROPS */, ["modelValue"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=template&id=52d53410":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=template&id=52d53410 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "playground"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ColorPalette = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ColorPalette");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPalette)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".color-palette {\n  width: 450px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.1215686275);\n  border-radius: 12px;\n}\n.color-palette__select {\n  margin-left: auto;\n  border-radius: 12px;\n  color: #000000;\n  margin-top: 2px;\n}\n.color-palette .color-palette__color {\n  display: flex;\n  padding: 10px;\n}\n.color-palette .color-palette__color input {\n  border: none;\n  width: 110px;\n  background: rgba(255, 255, 255, 0.168627451);\n  border-radius: 5px;\n  margin: 0px 5px;\n  text-align: center;\n}\n.color-palette__button {\n  padding: 5px 13px;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 11px;\n  display: inline-block;\n  background: #fff;\n  margin-right: 5px;\n}\n.color-palette__palette {\n  position: absolute;\n  margin-left: 180px;\n  margin-top: -32px;\n}\n.color-palette__palette__close {\n  padding: 6px 13px;\n  text-align: center;\n  background: #fff;\n  border-radius: 16px;\n  margin-bottom: 5px;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/ColorPalette.vue"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;AAAJ;AAEI;EACI,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;AAAR;AAGI;EACI,aAAA;EACA,aAAA;AADR;AAEQ;EACI,YAAA;EACA,YAAA;EACA,4CAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AAAZ;AAGI;EACI,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;AADR;AAGI;EACI,kBAAA;EACA,kBAAA;EACA,iBAAA;AADR;AAEQ;EACI,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AAAZ","sourcesContent":["\n.color-palette {\n    width: 450px;\n    padding: 10px;\n    background: #0000001f;\n    border-radius: 12px;\n\n    &__select {\n        margin-left: auto;\n        border-radius: 12px;\n        color: #000000;\n        margin-top: 2px;\n    }\n\n    .color-palette__color {\n        display: flex;\n        padding: 10px;\n        input {\n            border: none;\n            width: 110px;\n            background: #ffffff2b;\n            border-radius: 5px;\n            margin: 0px 5px;\n            text-align: center;\n        }\n    }\n    &__button {\n        padding: 5px 13px;\n        border-radius: 5px;\n        font-weight: bold;\n        cursor: pointer;\n        margin-top: 11px;\n        display: inline-block;\n        background: #fff;\n        margin-right: 5px;\n    }\n    &__palette {\n        position: absolute;\n        margin-left: 180px;\n        margin-top: -32px;\n        &__close {\n            padding: 6px 13px;\n            text-align: center;\n            background: #fff;\n            border-radius: 16px;\n            margin-bottom: 5px;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playground {\n  padding: 15px;\n  background-color: #777;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/pages/Palette.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,sBAAA;AAAJ","sourcesContent":["\n.playground {\n    padding: 15px;\n    background-color: #777;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_44c8a816_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_44c8a816_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_44c8a816_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_style_index_0_id_52d53410_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_style_index_0_id_52d53410_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_style_index_0_id_52d53410_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/vue/components/interface/ColorPalette.vue":
/*!*************************************************************!*\
  !*** ./resources/vue/components/interface/ColorPalette.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorPalette_vue_vue_type_template_id_44c8a816__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPalette.vue?vue&type=template&id=44c8a816 */ "./resources/vue/components/interface/ColorPalette.vue?vue&type=template&id=44c8a816");
/* harmony import */ var _ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPalette.vue?vue&type=script&lang=js */ "./resources/vue/components/interface/ColorPalette.vue?vue&type=script&lang=js");
/* harmony import */ var _ColorPalette_vue_vue_type_style_index_0_id_44c8a816_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss */ "./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ColorPalette_vue_vue_type_template_id_44c8a816__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/interface/ColorPalette.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/pages/Palette.vue":
/*!****************************************************!*\
  !*** ./resources/vue/components/pages/Palette.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Palette_vue_vue_type_template_id_52d53410__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Palette.vue?vue&type=template&id=52d53410 */ "./resources/vue/components/pages/Palette.vue?vue&type=template&id=52d53410");
/* harmony import */ var _Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Palette.vue?vue&type=script&lang=js */ "./resources/vue/components/pages/Palette.vue?vue&type=script&lang=js");
/* harmony import */ var _Palette_vue_vue_type_style_index_0_id_52d53410_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss */ "./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Palette_vue_vue_type_template_id_52d53410__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/pages/Palette.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/interface/ColorPalette.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/vue/components/interface/ColorPalette.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/components/pages/Palette.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/vue/components/pages/Palette.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Palette.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/components/interface/ColorPalette.vue?vue&type=template&id=44c8a816":
/*!*******************************************************************************************!*\
  !*** ./resources/vue/components/interface/ColorPalette.vue?vue&type=template&id=44c8a816 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_template_id_44c8a816__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_template_id_44c8a816__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=template&id=44c8a816 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=template&id=44c8a816");


/***/ }),

/***/ "./resources/vue/components/pages/Palette.vue?vue&type=template&id=52d53410":
/*!**********************************************************************************!*\
  !*** ./resources/vue/components/pages/Palette.vue?vue&type=template&id=52d53410 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_template_id_52d53410__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_template_id_52d53410__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Palette.vue?vue&type=template&id=52d53410 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=template&id=52d53410");


/***/ }),

/***/ "./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss":
/*!**********************************************************************************************************!*\
  !*** ./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_44c8a816_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss");


/***/ }),

/***/ "./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss":
/*!*************************************************************************************************!*\
  !*** ./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Palette_vue_vue_type_style_index_0_id_52d53410_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Palette.vue?vue&type=style&index=0&id=52d53410&lang=scss");


/***/ }),

/***/ "./node_modules/@cyhnkckali/vue3-color-picker/dist/vue3-color-picker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@cyhnkckali/vue3-color-picker/dist/vue3-color-picker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vue3ColorPicker: () => (/* binding */ $l)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const st = { class: "color-input-menu" }, ot = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "ColorInputMenu",
  props: {
    inputType: { default: "RGB", type: String }
  },
  emits: ["onChangeInputName"],
  setup(n, { emit: d }) {
    const a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(n.inputType), i = d, u = (g) => {
      a.value = g, i("onChangeInputName", g);
    };
    return (g, s) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", st, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(a.value == "RGB" ? "active" : ""),
        onClick: s[0] || (s[0] = (b) => u("RGB"))
      }, "RGB", 2),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(a.value == "HSL" ? "active" : ""),
        onClick: s[1] || (s[1] = (b) => u("HSL"))
      }, "HSL", 2),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(a.value == "HSV" ? "active" : ""),
        onClick: s[2] || (s[2] = (b) => u("HSV"))
      }, "HSV", 2),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(a.value == "CMYK" ? "active" : ""),
        onClick: s[3] || (s[3] = (b) => u("CMYK"))
      }, "CMYK", 2)
    ]));
  }
}), rt = {
  key: 0,
  class: "ck-cp-controller-bar"
}, it = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, ut = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M21.5 0h9c0.831 0 1.5 0.669 1.5 1.5v9c0 0.606-0.363 1.156-0.925 1.387s-1.206 0.106-1.637-0.325l-2.438-2.438-5.438 5.438c-0.587 0.588-1.538 0.588-2.119 0l-2-2c-0.587-0.588-0.587-1.537 0-2.119l5.438-5.438-2.444-2.444c-0.431-0.431-0.556-1.075-0.325-1.637s0.781-0.925 1.387-0.925zM10.5 32h-9c-0.831 0-1.5-0.669-1.5-1.5v-9c0-0.606 0.362-1.156 0.925-1.387s1.206-0.106 1.637 0.325l2.438 2.438 5.438-5.438c0.588-0.587 1.537-0.587 2.119 0l2 2c0.588 0.587 0.588 1.538 0 2.119l-5.438 5.438 2.438 2.438c0.431 0.431 0.556 1.075 0.325 1.637s-0.781 0.925-1.387 0.925z" }, null, -1), ct = [
  ut
], dt = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, pt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M29 16c0-7.18-5.82-13-13-13s-13 5.82-13 13v0c0 7.18 5.82 13 13 13s13-5.82 13-13v0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16v0c0 8.837-7.163 16-16 16s-16-7.163-16-16v0z" }, null, -1), gt = [
  pt
], vt = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, mt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M0.013 29.306c0.156 1.512 1.431 2.694 2.987 2.694h26c1.656 0 3-1.344 3-3v-6c0-1.656-1.344-3-3-3h-3v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5h-4v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5h-4v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5h-5c-0.55 0-1-0.45-1-1s0.45-1 1-1h5v-4h-5c-0.55 0-1-0.45-1-1s0.45-1 1-1h5v-4h-5c-0.55 0-1-0.45-1-1s0.45-1 1-1h5v-3c0-1.656-1.344-3-3-3h-6c-1.656 0-3 1.344-3 3v26c0 0.106 0.006 0.206 0.013 0.306z" }, null, -1), ft = [
  mt
], ht = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, yt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M0.013 29.306c0.156 1.512 1.431 2.694 2.987 2.694h26c1.656 0 3-1.344 3-3v-6c0-1.656-1.344-3-3-3h-3v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5h-4v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5h-4v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5h-5c-0.55 0-1-0.45-1-1s0.45-1 1-1h5v-4h-5c-0.55 0-1-0.45-1-1s0.45-1 1-1h5v-4h-5c-0.55 0-1-0.45-1-1s0.45-1 1-1h5v-3c0-1.656-1.344-3-3-3h-6c-1.656 0-3 1.344-3 3v26c0 0.106 0.006 0.206 0.013 0.306z" }, null, -1), bt = [
  yt
], kt = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, $t = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M21.35 1.825l-6.344 6.35-0.588-0.588c-0.781-0.781-2.050-0.781-2.831 0s-0.781 2.050 0 2.831l10 10c0.781 0.781 2.050 0.781 2.831 0s0.781-2.050 0-2.831l-0.587-0.587 6.344-6.35c2.438-2.438 2.438-6.388 0-8.819s-6.387-2.438-8.819 0zM3.462 20.206c-0.938 0.938-1.462 2.212-1.462 3.538v2.65l-1.663 2.494c-0.531 0.794-0.425 1.85 0.25 2.525s1.731 0.781 2.525 0.25l2.494-1.663h2.65c1.325 0 2.6-0.525 3.537-1.462l7.544-7.544-2.831-2.831-7.544 7.544c-0.188 0.188-0.444 0.294-0.706 0.294h-2.256v-2.256c0-0.262 0.106-0.519 0.294-0.706l7.544-7.544-2.831-2.831-7.544 7.544z" }, null, -1), wt = [
  $t
], xt = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, Ct = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M32 16c0 0.056 0 0.113 0 0.169-0.025 2.281-2.1 3.831-4.381 3.831h-6.119c-1.656 0-3 1.344-3 3 0 0.212 0.025 0.419 0.063 0.619 0.131 0.637 0.406 1.25 0.675 1.869 0.381 0.863 0.756 1.719 0.756 2.625 0 1.988-1.35 3.794-3.337 3.875-0.219 0.006-0.438 0.012-0.662 0.012-8.831 0-15.994-7.162-15.994-16s7.162-16 16-16 16 7.162 16 16zM8 18c0-1.105-0.895-2-2-2s-2 0.895-2 2v0c0 1.105 0.895 2 2 2s2-0.895 2-2v0zM8 12c1.105 0 2-0.895 2-2s-0.895-2-2-2v0c-1.105 0-2 0.895-2 2s0.895 2 2 2v0zM18 6c0-1.105-0.895-2-2-2s-2 0.895-2 2v0c0 1.105 0.895 2 2 2s2-0.895 2-2v0zM24 12c1.105 0 2-0.895 2-2s-0.895-2-2-2v0c-1.105 0-2 0.895-2 2s0.895 2 2 2v0z" }, null, -1), It = [
  Ct
], Mt = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "28",
  height: "32",
  viewBox: "0 0 28 32"
}, Vt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M4 2c-2.206 0-4 1.794-4 4v20c0 2.206 1.794 4 4 4h20c2.206 0 4-1.794 4-4v-15.169c0-1.063-0.419-2.081-1.169-2.831l-4.831-4.831c-0.75-0.75-1.769-1.169-2.831-1.169h-15.169zM4 8c0-1.106 0.894-2 2-2h12c1.106 0 2 0.894 2 2v4c0 1.106-0.894 2-2 2h-12c-1.106 0-2-0.894-2-2v-4zM14 18c2.209 0 4 1.791 4 4s-1.791 4-4 4v0c-2.209 0-4-1.791-4-4s1.791-4 4-4v0z" }, null, -1), Nt = [
  Vt
], St = {
  key: 1,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "28",
  height: "32",
  viewBox: "0 0 28 32"
}, Bt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", { d: "M8.45 1.106l-0.45 0.894h-6c-1.106 0-2 0.894-2 2s0.894 2 2 2h24c1.106 0 2-0.894 2-2s-0.894-2-2-2h-6l-0.45-0.894c-0.337-0.681-1.031-1.106-1.788-1.106h-7.525c-0.756 0-1.45 0.425-1.787 1.106zM26 8h-24l1.325 21.188c0.1 1.581 1.413 2.813 2.994 2.813h15.362c1.581 0 2.894-1.231 2.994-2.813l1.325-21.188z" }, null, -1), Lt = [
  Bt
], Dt = {
  key: 0,
  class: "ck-cp-linear-angle-container"
}, Rt = { class: "ck-gradient-set-label" }, Tt = ["value"], Ht = {
  key: 1,
  class: "ck-cp-linear-angle-container"
}, Et = { class: "ck-gradient-set-label" }, Yt = ["value"], Xt = { style: { "margin-top": "1rem" } }, Ot = { class: "ck-gradient-set-label" }, Ut = ["value"], Gt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "PickerMenu",
  props: {
    mode: {
      default: "gradient",
      type: String
    },
    inputType: { default: "RGB", type: String },
    gradientType: { default: "linear", type: String },
    isEyeDropperUsing: { default: !1, type: Boolean },
    showColorList: { default: !0, type: Boolean },
    showEyeDrop: { default: !0, type: Boolean },
    showInputMenu: { default: !0, type: Boolean },
    angle: { default: 90, type: Number },
    percentageX: { default: 50, type: Number },
    percentageY: { default: 50, type: Number },
    local: { default: { angle: "", positionX: "", positionY: "" }, type: Object },
    iconClasses: { default: { linear: "", radial: "", ruler: "", eyeDroper: "", inputMenu: "", save: "", delete: "" }, type: Object }
  },
  emits: ["onSaveColor", "onChangeMode", "onChangeInputType", "onDeleteColor", "onClickEyeDropper", "update:angle", "update:percentageX", "update:percentageY", "onInput"],
  setup(n, { emit: d }) {
    const o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), u = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), g = d, s = (v, m) => {
      switch (m) {
        case "angle":
          g("update:angle", parseInt(v.target.value)), g("onInput");
          break;
        case "percentageX":
          g("update:percentageX", parseInt(v.target.value)), g("onInput");
          break;
        case "percentageY":
          g("update:percentageY", parseInt(v.target.value)), g("onInput");
          break;
      }
    }, b = (v) => {
      u.value = !1, g("onChangeInputType", v);
    }, f = () => {
      u.value = !u.value;
    };
    return (v, m) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "ck-cp-menu",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(n.mode == "gradient" ? "" : "justify-content: end;")
      }, [
        n.mode == "gradient" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", rt, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cp-btn", n.gradientType == "linear" ? "active" : ""]),
            onClick: m[0] || (m[0] = (N) => v.$emit("onChangeMode", "linear")),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.linear ? "" : "padding: 7px;"}`)
          }, [
            n.iconClasses.linear ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.linear)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", it, ct))
          ], 6),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cp-btn", n.gradientType == "radial" ? "active" : ""]),
            onClick: m[1] || (m[1] = (N) => v.$emit("onChangeMode", "radial")),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.radial ? "" : "padding: 6px;"}`)
          }, [
            n.iconClasses.radial ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.radial)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", dt, gt))
          ], 6),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cp-btn", a.value ? "active" : ""]),
            onClick: m[2] || (m[2] = (N) => a.value = !a.value),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.ruler ? "" : "padding: 7px;"}`)
          }, [
            n.iconClasses.ruler ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.ruler)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", vt, ft))
          ], 6), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, n.gradientType == "linear"]
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cp-btn", i.value ? "active" : ""]),
            onClick: m[3] || (m[3] = (N) => i.value = !i.value),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.ruler ? "" : "padding: 7px;"}`)
          }, [
            n.iconClasses.ruler ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.ruler)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", ht, bt))
          ], 6), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, n.gradientType == "radial"]
          ])
        ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          ref_key: "rightContainer",
          ref: o,
          class: "ck-cp-controller-bar",
          style: { display: "inline-flex", "justify-content": "end", position: "relative" }
        }, [
          n.isEyeDropperUsing && n.showEyeDrop ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 0,
            type: "button",
            id: "cp-btn-eyedropper",
            class: "cp-btn",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.eyeDroper ? "" : "padding: 7px;"}`),
            onClick: m[4] || (m[4] = (N) => v.$emit("onClickEyeDropper"))
          }, [
            n.iconClasses.eyeDroper ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.eyeDroper)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", kt, wt))
          ], 4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          n.showInputMenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 1,
            type: "button",
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cp-btn", u.value ? "active" : ""]),
            onClick: f,
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.inputMenu ? "" : "padding: 7px;"}`)
          }, [
            n.iconClasses.inputMenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.inputMenu)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", xt, It))
          ], 6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(ot, {
            inputType: n.inputType,
            onOnChangeInputName: b
          }, null, 8, ["inputType"]), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, u.value]
          ]),
          n.showColorList ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 2,
            type: "button",
            class: "cp-btn",
            onClick: m[5] || (m[5] = (N) => v.$emit("onSaveColor")),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.save ? "" : "padding: 7px;"}`)
          }, [
            n.iconClasses.save ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.save)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", Mt, Nt))
          ], 4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          n.mode == "gradient" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 3,
            type: "button",
            class: "cp-btn",
            onClick: m[6] || (m[6] = (N) => v.$emit("onDeleteColor")),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`${n.iconClasses.delete ? "" : "padding: 7.5px;"}`)
          }, [
            n.iconClasses.delete ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(n.iconClasses.delete)
            }, null, 2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", St, Lt))
          ], 4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
        ], 512)
      ], 4),
      n.mode == "gradient" ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Dt, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", Rt, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n.local.angle ? n.local.angle : "Angle") + " ", 1),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n.angle) + "°", 1)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "range",
            min: "0",
            max: "360",
            value: n.angle,
            onInput: m[7] || (m[7] = (N) => s(N, "angle"))
          }, null, 40, Tt)
        ])
      ], 512)), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, n.gradientType == "linear" && a.value]
      ]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
      n.mode == "gradient" ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Ht, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", Et, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n.local.positionX ? n.local.positionX : "Position X") + " ", 1),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n.percentageX) + "%", 1)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "range",
            min: "0",
            max: "100",
            value: n.percentageX,
            onInput: m[8] || (m[8] = (N) => s(N, "percentageX"))
          }, null, 40, Yt)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", Xt, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", Ot, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n.local.positionY ? n.local.positionY : "Position Y") + " ", 1),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n.percentageY) + "%", 1)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "range",
            min: "0",
            max: "100",
            value: n.percentageY,
            onInput: m[9] || (m[9] = (N) => s(N, "percentageY"))
          }, null, 40, Ut)
        ])
      ], 512)), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, n.gradientType == "radial" && i.value]
      ]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
    ], 64));
  }
}), Pt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "GradientBar",
  emits: ["onAddColor", "onMouseDown"],
  setup(n, { emit: d }) {
    const o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("gradientBar"), a = (i) => {
      i.preventDefault();
    };
    return (i, u) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "gradient-bar",
      onMousedown: u[1] || (u[1] = (g) => i.$emit("onMouseDown", g)),
      onDragstart: a
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        ref_key: "gradientBar",
        ref: o,
        class: "gradient-container",
        onDblclick: u[0] || (u[0] = (g) => i.$emit("onAddColor", g))
      }, null, 544)
    ], 32));
  }
}), zt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "colour-area-mask" }, null, -1), At = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "PickerWrap",
  emits: ["onMouseDown"],
  setup(n) {
    const d = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("canvas"), o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("pickerWrap"), a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("pickerPointer"), i = (u) => {
      u.preventDefault();
    };
    return (u, g) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      ref_key: "pickerWrap",
      ref: o,
      class: "cp-picker-wrap",
      onMousedown: g[0] || (g[0] = (s) => u.$emit("onMouseDown", s)),
      onDragstart: i
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", {
        ref_key: "canvas",
        ref: d,
        class: "colour-area"
      }, null, 512),
      zt,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        ref_key: "pickerPointer",
        ref: a,
        class: "colour-area-point-circle"
      }, null, 512)
    ], 544));
  }
}), Kt = { class: "picker-hue" }, Wt = ["value"], Ft = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "PickerHue",
  props: {
    modelValue: { default: 0, type: Number }
  },
  emits: ["update:modelValue", "onInput", "onChange"],
  setup(n, { emit: d }) {
    const o = d, a = (i) => {
      o("update:modelValue", parseFloat(i.target.value)), o("onInput", i);
    };
    return (i, u) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Kt, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        value: n.modelValue,
        class: "picker-hue-range-slider",
        type: "range",
        min: "0",
        max: "360",
        step: "0.1",
        onInput: a,
        onChange: u[0] || (u[0] = (g) => i.$emit("onChange", g))
      }, null, 40, Wt)
    ]));
  }
}), qt = { class: "opacity-bar" }, jt = { class: "picker-opacity-slider opacity-bar-background" }, Jt = ["value"], Qt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "OpacityBar",
  props: {
    modelValue: { default: 0, type: Number }
  },
  emits: ["update:modelValue", "onInput"],
  setup(n, { emit: d }) {
    const o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("opacitySlider"), a = d, i = (u) => {
      a("update:modelValue", parseInt(u.target.value)), a("onInput", u);
    };
    return (u, g) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", qt, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", jt, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          ref_key: "opacitySlider",
          ref: o,
          value: n.modelValue,
          class: "opacity__slider",
          type: "range",
          min: "0",
          max: "100",
          onInput: i
        }, null, 40, Jt)
      ])
    ]));
  }
}), Zt = { class: "ck-cp-input-content" }, _t = { class: "ck-cp-input-label" }, el = ["min", "max", "value"], Y = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "InputNumber",
  props: {
    label: { default: "", type: String },
    modelValue: { default: 0, type: Number },
    min: { default: 0, type: Number },
    max: { default: 100, type: Number }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: d }) {
    const o = n, a = d, i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(o.modelValue);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => o.modelValue, (f, v) => {
      f !== v && (i.value = f);
    }, { immediate: !0 });
    const u = (f) => {
      const v = (N) => {
        i.value = N, a("update:modelValue", N);
      }, m = f.target.value;
      if (!m)
        return v(o.modelValue);
      if (parseInt(m) > o.max)
        return v(o.max);
      a("update:modelValue", parseInt(m));
    }, g = (f) => {
      i.value = f.target.value;
    }, s = (f) => {
      if (["KeyE", "Equal", "Equal", "Backslash", "Slash", "NumpadDecimal", "NumpadAdd"].includes(f.code))
        return f.preventDefault();
      f.code === "Enter" && u(f);
    }, b = u;
    return (f, v) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Zt, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _t, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n.label), 1),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        min: n.min,
        max: n.max,
        value: i.value,
        onInput: g,
        onKeydown: s,
        onFocusout: v[0] || (v[0] = //@ts-ignore
        (...m) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(b) && (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(b)(...m))
      }, null, 40, el)
    ]));
  }
}), tl = { class: "ck-cp-input-content color-hex" }, ll = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "ck-cp-input-label" }, "HEX", -1), nl = ["value"], al = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "InputHex",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: d }) {
    const o = n, a = d, i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""), u = (f) => {
      const v = f.target.value;
      i.value = v, i.value = `#${v.replace(/#/g, "")}`;
    }, g = (f) => {
      const v = f.target.value;
      if (v === o.modelValue)
        return;
      if (!/^#[0-9a-fA-F]+$/.test(v)) {
        i.value = o.modelValue;
        return;
      }
      let m = v.replace(/#/g, "");
      switch (m.length) {
        case 0:
          m = o.modelValue.replace("#", "");
          break;
        case 1:
        case 2:
          m = m.repeat(3);
          break;
        case 4:
        case 5:
          m = m.slice(0, 3);
          break;
        case 3:
        case 6:
          break;
        default:
          m = m.slice(0, 6);
      }
      i.value = `#${m.toUpperCase()}`, a("update:modelValue", i.value);
    }, s = (f) => {
      f.code === "Enter" && g(f);
    }, b = g;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => o.modelValue, (f, v) => {
      f !== v && (i.value = f);
    }, { immediate: !0 }), (f, v) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", tl, [
      ll,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        value: i.value,
        onInput: u,
        onKeydown: s,
        onFocusout: v[0] || (v[0] = //@ts-ignore
        (...m) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(b) && (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(b)(...m))
      }, null, 40, nl)
    ]));
  }
}), sl = (n) => {
  const d = /^rgb\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)\)$/i;
  if (!d.test(n))
    return null;
  const o = d.exec(n);
  if (!o)
    return null;
  const a = parseInt(o[1].trim(), 10), i = parseInt(o[2].trim(), 10), u = parseInt(o[3].trim(), 10);
  return {
    r: a,
    g: i,
    b: u
  };
}, ol = (n) => {
  const d = /^rgba?\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),(\s*[\d.]+\s*)\)$/i;
  if (!d.test(n))
    return null;
  const o = d.exec(n);
  if (!o)
    return null;
  const a = parseInt(o[1].trim(), 10), i = parseInt(o[2].trim(), 10), u = parseInt(o[3].trim(), 10), g = parseFloat(o[4].trim());
  return {
    r: a,
    g: i,
    b: u,
    a: g
  };
}, rl = (n) => {
  const d = /^#?([a-f\d]{8})$/i;
  if (!d.test(n))
    return null;
  const o = d.exec(n);
  if (!o)
    return null;
  const a = o[1], i = a.substring(6, 8), u = parseInt(a.substring(0, 2), 16), g = parseInt(a.substring(2, 4), 16), s = parseInt(a.substring(4, 6), 16), b = parseInt(i, 16) / 255;
  return { r: u, g, b: s, a: b };
}, il = (n, d, o, a) => {
  function i(f) {
    const v = f.toString(16);
    return v.length === 1 ? "0" + v : v;
  }
  const u = i(Math.round(n)), g = i(Math.round(d)), s = i(Math.round(o)), b = i(Math.round(a * 255));
  return `#${u}${g}${s}${b}`;
}, ge = (n) => {
  var d;
  try {
    let o = (d = n.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      // @ts-ignore
      (g, s, b, f) => "#" + s + s + b + b + f + f
    ).substring(1).match(/.{2}/g)) == null ? void 0 : d.map((g) => parseInt(g, 16)), a = o == null ? void 0 : o[0], i = o == null ? void 0 : o[1], u = o == null ? void 0 : o[2];
    return Number.isNaN(a) || Number.isNaN(i) || Number.isNaN(u) || a === void 0 || i === void 0 || u === void 0 ? null : {
      r: a,
      g: i,
      b: u
    };
  } catch {
    return null;
  }
}, Q = (n, d, o) => {
  n = n / 255, d = d / 255, o = o / 255;
  const a = Math.max(n, d, o), i = Math.min(n, d, o);
  let u;
  return a === n ? u = (d - o) / (a - i) : a === d ? u = 2 + (o - n) / (a - i) : u = 4 + (n - d) / (a - i), u *= 60, u < 0 && (u += 360), Number.isNaN(u) && (u = 0), u;
}, ul = (n, d, o) => {
  d = d / 100, o = o / 100;
  let a, i, u, g = [];
  return a = (1 - Math.abs(2 * o - 1)) * d, i = a * (1 - Math.abs(n / 60 % 2 - 1)), u = o - a / 2, n >= 0 && n < 60 && (g = [a, i, 0]), n >= 60 && n < 120 && (g = [i, a, 0]), n >= 120 && n < 180 && (g = [0, a, i]), n >= 180 && n < 240 && (g = [0, i, a]), n >= 240 && n < 300 && (g = [i, 0, a]), n >= 300 && n <= 360 && (g = [a, 0, i]), g.map((s) => Math.round(255 * (s + u)));
}, $e = (n, d, o) => "#" + (16777216 + (o | d << 8 | n << 16)).toString(16).slice(1), He = (n, d, o) => {
  let a = ul(n, d, o);
  return { rgb: a, hexA: $e(a[0], a[1], a[2]) };
}, Ee = (n, d, o) => {
  let a, i, u, g, s, b, f = 0, v = [];
  for (v[0] = n / 255, v[1] = d / 255, v[2] = o / 255, a = v[0], i = v[0], b = 0, u = 0; u < v.length - 1; u++)
    v[u + 1] <= a && (a = v[u + 1]), v[u + 1] >= i && (i = v[u + 1], b = u + 1);
  return b === 0 && (f = (v[1] - v[2]) / (i - a)), b === 1 && (f = 2 + (v[2] - v[0]) / (i - a)), b === 2 && (f = 4 + (v[0] - v[1]) / (i - a)), isNaN(f) && (f = 0), f = f * 60, f < 0 && (f = f + 360), g = (a + i) / 2, a === i ? s = 0 : g < 0.5 ? s = (i - a) / (i + a) : s = (i - a) / (2 - i - a), s = s, { h: f, s, l: g };
}, Ye = (n, d, o) => {
  n = n % 360 / 360, d = Math.min(1, Math.max(0, d)), o = Math.min(1, Math.max(0, o));
  let a, i, u;
  if (d === 0)
    a = i = u = o;
  else {
    const g = (f, v, m) => (m < 0 && (m += 1), m > 1 && (m -= 1), m < 0.16666666666666666 ? f + (v - f) * 6 * m : m < 0.5 ? v : m < 0.6666666666666666 ? f + (v - f) * (0.6666666666666666 - m) * 6 : f), s = o < 0.5 ? o * (1 + d) : o + d - o * d, b = 2 * o - s;
    a = g(b, s, n + 1 / 3), i = g(b, s, n), u = g(b, s, n - 1 / 3);
  }
  return a = Math.round(a * 255), i = Math.round(i * 255), u = Math.round(u * 255), { r: a, g: i, b: u };
}, cl = (n, d, o) => {
  let a = 0, i = 0, u = 0;
  const g = n / 60, s = o * d, b = s * (1 - Math.abs(g % 2 - 1)), f = o - s;
  switch (Math.floor(g) % 6) {
    case 0:
      a = s, i = b, u = 0;
      break;
    case 1:
      a = b, i = s, u = 0;
      break;
    case 2:
      a = 0, i = s, u = b;
      break;
    case 3:
      a = 0, i = b, u = s;
      break;
    case 4:
      a = b, i = 0, u = s;
      break;
    case 5:
      a = s, i = 0, u = b;
      break;
  }
  return {
    r: Math.round((a + f) * 255),
    g: Math.round((i + f) * 255),
    b: Math.round((u + f) * 255)
  };
}, dl = (n, d, o) => {
  n /= 255, d /= 255, o /= 255;
  const a = Math.max(n, d, o), i = Math.min(n, d, o);
  let u, g, s = a;
  const b = a - i;
  if (a !== 0)
    g = b / a;
  else
    return { h: 0, s: 0, v: 0 };
  return b === 0 ? u = 0 : a === n ? u = 60 * ((d - o) / b % 6) : a === d ? u = 60 * ((o - n) / b + 2) : u = 60 * ((n - d) / b + 4), u < 0 && (u += 360), {
    h: Math.round(u),
    s: Math.round(g * 100) / 100,
    v: Math.round(s * 100) / 100
  };
}, pl = (n, d, o) => {
  const a = (2 - d) * o / 2, i = a && a < 1 ? d * o / (a < 0.5 ? a * 2 : 2 - a * 2) : d;
  return { h: n, s: i, l: a };
}, gl = (n, d, o, a) => {
  const i = Math.round(255 * (1 - n) * (1 - a)), u = Math.round(255 * (1 - d) * (1 - a)), g = Math.round(255 * (1 - o) * (1 - a));
  return {
    r: Math.min(255, Math.max(0, i)),
    g: Math.min(255, Math.max(0, u)),
    b: Math.min(255, Math.max(0, g))
  };
}, vl = (n, d, o) => {
  n = n / 255, d = d / 255, o = o / 255;
  const a = 1 - Math.max(n, d, o), i = (1 - n - a) / (1 - a), u = (1 - d - a) / (1 - a), g = (1 - o - a) / (1 - a);
  return {
    c: isNaN(i) ? 0 : i,
    m: isNaN(u) ? 0 : u,
    y: isNaN(g) ? 0 : g,
    k: isNaN(a) ? 0 : a
  };
}, ml = ["cp-theme"], fl = { id: "ck-cp-target-background" }, hl = {
  key: 2,
  class: "ck-cp-input-container"
}, yl = {
  key: 3,
  class: "ck-cp-local-color-conatiner"
}, bl = ["onClick"], $l = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "Vue3ColorPicker",
  props: {
    modelValue: { default: "" },
    mode: {
      default: "gradient",
      type: String
    },
    type: { default: "HEX8", type: String },
    inputType: { default: "RGB", type: String },
    theme: { default: "light", type: String },
    colorListCount: { default: 18, type: Number },
    showColorList: { default: !0, type: Boolean },
    showEyeDrop: { default: !0, type: Boolean },
    showAlpha: { default: !0, type: Boolean },
    showInputMenu: { default: !0, type: Boolean },
    showInputSet: { default: !0, type: Boolean },
    disabled: { default: !1, type: Boolean },
    local: {
      default: { angle: "", positionX: "", positionY: "" },
      type: Object
    },
    iconClasses: {
      default: {
        linear: "",
        radial: "",
        ruler: "",
        eyeDroper: "",
        inputMenu: "",
        save: "",
        delete: ""
      },
      type: Object
    }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: d }) {
    const o = n, a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), i = d, u = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(o.modelValue), g = (l) => {
      u.value = l, i("update:modelValue", l);
    }, s = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([
      { id: 1, r: 68, g: 71, b: 119, a: 100, percent: 0, hue: 0, select: !0 },
      { id: 2, r: 0, g: 0, b: 255, a: 100, percent: 100, hue: 0, select: !1 }
    ]), b = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), f = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), v = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("linear"), m = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      angle: 90,
      percentageX: 50,
      percentageY: 50
    }), N = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""), L = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(o.inputType), re = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), xe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), ie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), P = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), M = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), H = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      h: 0,
      s: 0,
      l: 0
    }), D = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      h: 0,
      s: 0,
      v: 0
    }), B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      c: 0,
      m: 0,
      y: 0,
      k: 0
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)("gradientBar", ie), (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)("canvas", F), (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)("pickerWrap", P), (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)("pickerPointer", M), (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)("opacitySlider", xe);
    let ee = 0, te = 0, Ce = 0, Ie = 0, le = 0, ne = 0;
    const Oe = (l) => {
      !P.value || !M.value || (le = P.value.offsetHeight - M.value.offsetHeight, ne = P.value.offsetWidth - M.value.offsetWidth, Ce = l.clientX - l.target.getBoundingClientRect().left, Ie = l.clientY - l.target.getBoundingClientRect().top, ee = Ce - M.value.offsetWidth / 2, te = Ie - M.value.offsetHeight / 2, M.value.style.left = `${ee}px`, M.value.style.top = `${te}px`, fe(!1), J(), window.addEventListener("mousemove", Me), window.addEventListener("mouseup", Ve));
    }, Me = (l) => {
      l.preventDefault();
      const e = P.value.getBoundingClientRect(), t = l.clientX - e.left - M.value.offsetWidth / 2, r = l.clientY - e.top - M.value.offsetHeight / 2;
      t >= 0 && t <= ne ? (ee = t, M.value.style.left = `${t}px`) : 0 > t ? (ee = 0, M.value.style.left = "0px") : t > ne && (ee = ne, M.value.style.left = `${ne}px`), r >= 0 && r <= le ? (te = r, M.value.style.top = `${r}px`) : 0 > r ? (te = 0, M.value.style.top = "0px") : r > le && (te = le, M.value.style.top = `${le}px`), fe(!1), J();
    }, Ve = () => {
      window.removeEventListener("mousemove", Me), window.removeEventListener("mouseup", Ve);
    }, fe = (l) => {
      if (!l) {
        let e = Ue();
        const t = Ye(K.value, e.s, e.l);
        if (t) {
          if (re.value) {
            let r = s.value.find((c) => c.select == !0);
            r && (r.r = t.r, r.g = t.g, r.b = t.b);
          }
          U(), E();
        }
      }
    }, K = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0), he = async (l) => {
      const { rgb: e } = He(K.value, 100, 50);
      Re(e), setTimeout(() => {
        fe(l), J();
      }, 0);
    }, Ue = () => {
      let l = { s: 0, l: 0 }, e = P.value.offsetWidth - M.value.offsetWidth, t = P.value.offsetHeight - M.value.offsetHeight, r = parseInt(M.value.style.left), p = 1 - parseInt(M.value.style.top) / t, k = r / e;
      return l.l = p / 2 * (2 - k), l.s = p * k / (1 - Math.abs(2 * l.l - 1)), Number.isNaN(l.s) && (l.s = l.l), l.l = l.l > 1 ? 1 : l.l, l.s = l.s > 1 ? 1 : l.s, l;
    }, ae = () => {
      const l = s.value.find((e) => e.select == !0);
      if (l) {
        const { l: e, s: t } = Ee(l.r, l.g, l.b);
        let r = e, c = t;
        Number.isNaN(c) && (c = r);
        let p = { x: 0, y: 0 }, k = P.value.offsetWidth - M.value.offsetWidth, C = P.value.offsetHeight - M.value.offsetHeight;
        const [$, h] = 2 * r - 1 < 0 ? [
          k * 2 * c / (1 + c),
          C * (1 - r * (1 + c))
        ] : [
          -k * 2 * (r - 1) * c / (r + c - r * c),
          C * (r - 1) * (c - 1)
        ];
        return p.x = $, p.y = h, p;
      } else
        return null;
    }, Ge = () => {
      const l = s.value.find((e) => e.select == !0);
      l && (l.hue = K.value);
    }, j = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(100), Pe = (l) => {
      if (o.showAlpha) {
        const e = l.target, t = s.value.find((r) => r.select == !0);
        t && (t.a = parseInt(e.value), E());
      }
    }, ze = (l) => {
      var t, r, c, p;
      const e = (r = (t = a.value) == null ? void 0 : t.querySelector(".gradient-handle-content")) == null ? void 0 : r.getBoundingClientRect();
      return l === 0 ? "0px" : l === 100 && e ? `${(((c = ie.value) == null ? void 0 : c.offsetWidth) || 0) - (e.width || 0)}px` : `${(((p = ie.value) == null ? void 0 : p.offsetWidth) || 0) * (l / 100) - ((e == null ? void 0 : e.width) || 0) / 2}px`;
    };
    let X = null, O = null;
    const Ne = (l) => {
      var r, c;
      const t = l.target.offsetParent;
      if ((r = t == null ? void 0 : t.id) != null && r.includes("clr-gb-")) {
        const p = t.id.replace("clr-gb-", "");
        O = t;
        const k = s.value.find((C) => C.select == !0);
        if (k && k.id != p) {
          const C = (c = a.value) == null ? void 0 : c.querySelector(
            ".gradient-handle.select"
          );
          C == null || C.classList.remove("select"), t.classList.add("select");
          const $ = s.value.findIndex(
            (h) => h.select == !0
          );
          for (let h = 0; h < s.value.length; h++) {
            const w = s.value[h];
            if (w.id == p) {
              $ != -1 && (s.value[$].select = !1), s.value[h].select = !0, j.value = w.a, W(w.r, w.g, w.b, w.hue, !0), U(), J();
              break;
            }
          }
        }
        window.addEventListener("mousemove", Se), window.addEventListener("mouseup", Ae);
      }
    }, Ae = () => {
      window.removeEventListener("mousemove", Se), window.removeEventListener("mouseup", Ne);
    }, Se = (l) => {
      var p, k;
      l.preventDefault();
      const e = (k = (p = a.value) == null ? void 0 : p.querySelector(".gradient-handle-content")) == null ? void 0 : k.getBoundingClientRect(), t = X == null ? void 0 : X.getBoundingClientRect(), r = (t == null ? void 0 : t.width) - (e == null ? void 0 : e.width);
      let c = l.clientX - ((t == null ? void 0 : t.left) || 0) - ((e == null ? void 0 : e.width) || 0) / 2;
      if (c < 0 ? c = 0 : c > r && (c = r), O) {
        O.style.left = `${c}px`;
        const C = parseFloat(
          (c / ((t == null ? void 0 : t.width) - (e == null ? void 0 : e.width)) * 100).toFixed(0)
        ), $ = s.value.find(
          (h) => h.id == (O == null ? void 0 : O.id.replace("clr-gb-", ""))
        );
        $ && ($.percent = C), E();
      }
    }, Ke = (l) => {
      var C, $;
      const e = X == null ? void 0 : X.getBoundingClientRect(), t = Math.round(
        (l.clientX - ((e == null ? void 0 : e.left) || 0)) / ((e == null ? void 0 : e.width) || 1) * 100
      ), r = s.value.findIndex((h) => h.select == !0), c = s.value[r], p = {
        id: Date.now(),
        r: c.r,
        g: c.g,
        b: c.b,
        a: c.a,
        percent: t,
        hue: c.hue,
        select: !0
      };
      s.value[r].select = !1;
      const k = (C = a.value) == null ? void 0 : C.querySelector(
        ".gradient-handle.select"
      );
      k == null || k.classList.remove("select"), s.value = [...s.value, p], De(p), O = ($ = a.value) == null ? void 0 : $.querySelector(`#clr-gb-${p.id}`), E();
    }, Be = (l) => {
      if (l.r == 0 && l.g == 0 && l.b == 0)
        return !0;
      if (l.r == 255 && l.g == 255 && l.b == 255)
        return !0;
      {
        const e = F.value.getContext("2d", { willReadFrequently: !0 }), t = F.value.width, r = F.value.height, c = e.getImageData(0, 0, t, r).data, p = l.r, k = l.g, C = l.b;
        for (let $ = 0; $ < r; $++)
          for (let h = 0; h < t; h++) {
            const w = ($ * t + h) * 4, z = c[w], et = c[w + 1], tt = c[w + 2];
            if (z === p && et === k && tt === C)
              return !0;
          }
        return !1;
      }
    }, W = (l, e, t, r, c) => {
      setTimeout(() => {
        if (Be({ r: l, g: e, b: t })) {
          let p = ae();
          p && (M.value.style.left = `${p.x}px`, M.value.style.top = `${p.y}px`);
        } else {
          let p = ae();
          p && (M.value.style.left = `${p.x}px`, M.value.style.top = `${p.y}px`), K.value = r, he(c);
        }
      }, 0);
    }, Le = () => {
      s.value.forEach((t) => De(t)), We();
      const l = s.value[0];
      K.value = l.hue, he(!0);
      let e = ae();
      e && (M.value.style.left = `${e.x}px`, M.value.style.top = `${e.y}px`), U(), E();
    }, De = (l) => {
      if (o.mode == "gradient") {
        let e = document.createElement("div");
        e.id = `clr-gb-${l.id}`, e.classList.add("gradient-handle"), e.style.left = ze(l.percent);
        let t = document.createElement("div");
        t.classList.add("gradient-handle-content"), l.select == !0 && e.classList.add("select"), e.appendChild(t), X && X.appendChild(e);
      }
    }, Re = (l) => {
      const e = F.value.getContext("2d", { willReadFrequently: !0 }), t = F.value.width, r = F.value.height;
      e.fillStyle = `rgb(${l[0]},${l[1]},${l[2]})`, e.fillRect(0, 0, t, r);
      let c = e.createLinearGradient(0, 0, t - 12, 0);
      c.addColorStop(0, "rgb(255,255,255)"), c.addColorStop(1, "rgba(255,255,255,0)"), e.fillStyle = c, e.fillRect(0, 0, t, r);
      let p = e.createLinearGradient(0, 0, 0, r);
      p.addColorStop(0, "rgba(0,0,0,0)"), p.addColorStop(1, "rgb(0,0,0)"), e.fillStyle = p, e.fillRect(0, 0, t, r);
    }, U = () => {
      if (o.showAlpha) {
        let l = s.value.find((e) => e.select == !0);
        l && (xe.value.style.background = ` linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(${l.r}, ${l.g}, ${l.b}, 100) 97%)`);
      }
    }, E = () => {
      var l;
      if (o.mode == "gradient") {
        s.value.sort((c, p) => c.percent - p.percent);
        let e = "linear-gradient(90deg, ", t;
        if (v.value == "linear") {
          t = `linear-gradient(${m.angle}deg, `;
          for (let c = 0; c < s.value.length; c++) {
            const { r: p, g: k, b: C, a: $, percent: h } = s.value[c];
            s.value.length - 1 == c ? (e = e + `rgba(${p},${k},${C},${$ / 100}) ${h}%)`, t = t + `rgba(${p},${k},${C},${$ / 100}) ${h}%)`) : (e = e + `rgba(${p},${k},${C},${$ / 100}) ${h}%, `, t = t + `rgba(${p},${k},${C},${$ / 100}) ${h}%, `);
          }
        } else {
          t = `radial-gradient(circle at ${m.percentageX}% ${m.percentageY}%, `;
          for (let c = 0; c < s.value.length; c++) {
            const { r: p, g: k, b: C, a: $, percent: h } = s.value[c];
            s.value.length - 1 == c ? (e = e + `rgba(${p},${k},${C},${$ / 100}) ${h}%)`, t = t + `rgba(${p},${k},${C},${$ / 100}) ${h}%)`) : (e = e + `rgba(${p},${k},${C},${$ / 100}) ${h}%, `, t = t + `rgba(${p},${k},${C},${$ / 100}) ${h}%, `);
          }
        }
        ie.value.style.backgroundImage = e;
        let r = (l = a.value) == null ? void 0 : l.querySelector("#ck-cp-target-background");
        r && (r.style.backgroundImage = t, re.value && g(r.style.backgroundImage));
      } else {
        const { r: e, g: t, b: r, a: c } = s.value[0];
        let p = "";
        switch (o.type) {
          case "HEX8":
            p = il(e, t, r, c / 100);
            break;
          case "RGBA":
            p = `rgba(${e},${t},${r},${c / 100})`;
            break;
          case "RGB":
            p = `rgb(${e},${t},${r})`;
            break;
          case "HEX":
            p = $e(e, t, r);
            break;
        }
        g(p);
      }
    }, We = () => {
      s.value.forEach((l) => {
        l.hue = Q(l.r, l.g, l.b);
      });
    }, Fe = (l) => {
      v.value = l, E();
    }, qe = () => {
      var l, e;
      if (s.value.length > 2) {
        const t = s.value.findIndex((r) => r.select == !0);
        if (t !== -1) {
          const r = s.value[t].id;
          s.value.splice(t, 1);
          const c = (l = a.value) == null ? void 0 : l.querySelector(`#clr-gb-${r}`);
          c == null || c.remove();
          const p = s.value[0];
          p && (p.select = !0, O = (e = a.value) == null ? void 0 : e.querySelector(`#clr-gb-${p.id}`), O == null || O.classList.add("select"), W(p.r, p.g, p.b, p.hue, !1), J(), E());
        }
      }
    }, je = () => {
      var t;
      const l = (t = a.value) == null ? void 0 : t.querySelector("#cp-btn-eyedropper");
      l == null || l.classList.add("active"), new EyeDropper().open().then((r) => {
        const { sRGBHex: c } = r, p = s.value.find((C) => C.select == !0), k = ge(c);
        if (k) {
          const C = Q(k.r, k.g, k.b);
          if (p && (p.hue = C, p.r = k.r, p.g = k.g, p.b = k.b), Be(k)) {
            const $ = ae();
            $ && (M.value.style.left = `${$.x}px`, M.value.style.top = `${$.y}px`);
          } else {
            K.value = C;
            const { rgb: $ } = He(C, 100, 50);
            Re($);
            const h = ae();
            h && (M.value.style.left = `${h.x}px`, M.value.style.top = `${h.y}px`);
          }
          J(), U(), E(), l == null || l.classList.remove("active");
        }
      }).catch(() => {
        l == null || l.classList.remove("active");
      });
    }, ue = (l, e) => {
      if (e != "a") {
        const t = s.value.find((r) => r.select == !0);
        if (t) {
          const r = Q(t.r, t.g, t.b);
          t.hue = r, W(
            t.r,
            t.g,
            t.b,
            t.hue,
            !0
          ), E(), U();
        }
      } else
        j.value = l, E(), U();
    }, ye = () => {
      const l = s.value.find((e) => e.select == !0);
      if (l && !Number.isNaN(H.h) && !Number.isNaN(H.s) && !Number.isNaN(H.l)) {
        const { r: e, g: t, b: r } = Ye(H.h, H.s / 100, H.l / 100);
        l.hue = H.h, l.r = e, l.g = t, l.b = r, W(
          l.r,
          l.g,
          l.b,
          l.hue,
          !0
        ), E(), U();
      }
    }, be = () => {
      const l = s.value.find((e) => e.select == !0);
      if (l && !Number.isNaN(D.h) && !Number.isNaN(D.s) && !Number.isNaN(D.v)) {
        const { r: e, g: t, b: r } = cl(D.h, D.s / 100, D.v / 100), { h: c } = pl(D.h, D.s / 100, D.v / 100);
        l.hue = c, l.r = e, l.g = t, l.b = r, W(
          l.r,
          l.g,
          l.b,
          l.hue,
          !0
        ), E(), U();
      }
    }, ce = () => {
      const l = s.value.find((e) => e.select == !0);
      if (l && !Number.isNaN(B.c) && !Number.isNaN(B.m) && !Number.isNaN(B.y) && !Number.isNaN(B.k)) {
        const { r: e, g: t, b: r } = gl(
          B.c / 100,
          B.m / 100,
          B.y / 100,
          B.k / 100
        ), c = Q(e, t, r);
        l.hue = c, l.r = e, l.g = t, l.b = r, W(
          l.r,
          l.g,
          l.b,
          l.hue,
          !0
        ), E(), U();
      }
    }, Je = () => {
      if (N.value) {
        const l = ge(N.value);
        if (l) {
          const e = Q(l.r, l.g, l.b), t = s.value.find((r) => r.select == !0);
          t && (t.r = l.r, t.g = l.g, t.b = l.b, t.hue = e, W(l.r, l.g, l.b, t.hue, !0), E(), U(), de(L.value));
        }
      }
    }, J = () => {
      const l = s.value.find((e) => e.select == !0);
      l && (N.value = $e(l.r, l.g, l.b).toUpperCase()), de(L.value);
    }, Qe = (l) => {
      N.value = l;
      let e = ge(N.value);
      if (e) {
        const t = Q(e.r, e.g, e.b), r = s.value.find((c) => c.select == !0);
        r && (r.r = e.r, r.g = e.g, r.b = e.b, r.hue = t, W(e.r, e.g, e.b, r.hue, !0), E(), U());
      }
    };
    window.EyeDropper && (f.value = !0);
    const Ze = () => {
      if (!b.value.find((e) => e === N.value)) {
        b.value.length === o.colorListCount && b.value.pop();
        let e = N.value;
        b.value.unshift(e), localStorage.setItem(
          "ck-cp-local-color-list",
          JSON.stringify(b.value)
        );
      }
    }, _e = (l = "") => {
      if (o.mode == "gradient") {
        let e = l.includes("linear") ? "linear" : "radial", t = [];
        if (v.value = e, e == "linear") {
          let r = /^linear-gradient\((.*)\)$/, c = l.replace(";", "").trim().match(r), p = /,\s*(?![^()]*\))/;
          if (c) {
            let k = c[1].split(p);
            for (let C = 0; C < k.length; C++) {
              const $ = k[C];
              let h = {
                id: C,
                r: 0,
                g: 0,
                b: 0,
                a: 100,
                percent: 100,
                hue: 0,
                select: !1
              };
              if ($.includes("deg"))
                m.angle = parseInt($.replace("deg", ""));
              else if ($.includes("rgba")) {
                let w = $.trim().replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                w = w.filter((z) => z.trim() !== ""), h.r = parseInt(w[0]), h.g = parseInt(w[1]), h.b = parseInt(w[2]), h.a = parseFloat(w[3]) * 100, h.percent = parseInt(w[4]), t.push(h);
              } else if ($.includes("rgb")) {
                let w = $.trim().replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                w = w.filter((z) => z.trim() !== ""), h.r = parseInt(w[0]), h.g = parseInt(w[1]), h.b = parseInt(w[2]), h.percent = parseInt(w[3]), t.push(h);
              }
            }
          }
        } else {
          let r = /^radial-gradient\((.*)\)$/, c = l.replace(";", "").trim().match(r), p = /,\s*(?![^()]*\))/;
          if (c) {
            let k = c[1].split(p);
            for (let C = 0; C < k.length; C++) {
              const $ = k[C];
              let h = {
                id: C,
                r: 0,
                g: 0,
                b: 0,
                a: 100,
                percent: 100,
                hue: 0,
                select: !1
              };
              if ($.includes("circle at")) {
                let w = $.replace("circle at ", "").replace(" ", "").replace(/%/g, " ").trim().split(" ");
                m.percentageX = parseInt(w[0]), m.percentageY = parseInt(w[1]);
              } else if ($.includes("rgba")) {
                let w = $.replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                w = w.filter((z) => z.trim() !== ""), h.r = parseInt(w[0]), h.g = parseInt(w[1]), h.b = parseInt(w[2]), h.a = parseFloat(w[3]) * 100, h.percent = parseInt(w[4]), t.push(h);
              } else if ($.includes("rgb")) {
                let w = $.replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                w = w.filter((z) => z.trim() !== ""), h.r = parseInt(w[0]), h.g = parseInt(w[1]), h.b = parseInt(w[2]), h.percent = parseInt(w[3]), t.push(h);
              }
            }
          }
        }
        t.length > 1 && (s.value = t, s.value[0].select = !0, j.value = s.value[0].a);
      } else if (l) {
        let e = {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
        if (l.includes("#"))
          if (l.length >= 8)
            e = rl(l);
          else {
            let t = ge(l);
            t ? (e.a = 1, e.r = t.r, e.g = t.g, e.b = t.b) : e = null;
          }
        else if (l.includes("rgb"))
          if (l.includes("rgba"))
            e = ol(l);
          else {
            let t = sl(l);
            t ? (e.a = 1, e.r = t.r, e.g = t.g, e.b = t.b) : e = null;
          }
        e && (s.value[0].r = e.r, s.value[0].b = e.b, s.value[0].g = e.g, s.value[0].a = parseInt((e.a * 100).toFixed(0)), j.value = s.value[0].a, s.value[0].hue = 0);
      }
    }, de = (l) => {
      const e = s.value.find((t) => t.select == !0);
      if (e) {
        switch (l) {
          case "RGB":
            break;
          case "HSL": {
            const { h: t, s: r, l: c } = Ee(
              e.r,
              e.g,
              e.b
            );
            H.h = Math.round(t), H.s = Math.round(r * 100), H.l = Math.round(c * 100);
            break;
          }
          case "HSV": {
            const { h: t, s: r, v: c } = dl(
              e.r,
              e.g,
              e.b
            );
            D.h = Math.round(t), D.s = Math.round(r * 100), D.v = Math.round(c * 100);
            break;
          }
          case "CMYK":
            {
              const { c: t, m: r, y: c, k: p } = vl(
                e.r,
                e.g,
                e.b
              );
              B.c = Math.round(t * 100), B.m = Math.round(r * 100), B.y = Math.round(c * 100), B.k = Math.round(p * 100);
            }
            break;
        }
        L.value = l;
      }
    }, Te = (l) => {
      l && _e(l), Le();
    };
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => o.modelValue, (l, e) => {
      l !== e && l !== u.value && (s.value.forEach((t) => {
        const r = X == null ? void 0 : X.querySelector(`#clr-gb-${t.id}`);
        r == null || r.remove();
      }), Te(l));
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
      let l = localStorage.getItem("ck-cp-local-color-list");
      l && (b.value = JSON.parse(l));
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      var l;
      o.mode == "gradient" && (X = (l = a.value) == null ? void 0 : l.querySelector(".gradient-bar")), Te(o.modelValue), de(L.value), re.value = !0;
    }), (l, e) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ck-cp-container", n.disabled ? "ck-cp-disabled " : ""]),
      ref_key: "pickerTemplateRef",
      ref: a,
      "cp-theme": n.theme
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(At, { onOnMouseDown: Oe }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(Gt, {
        angle: m.angle,
        "onUpdate:angle": e[0] || (e[0] = (t) => m.angle = t),
        percentageX: m.percentageX,
        "onUpdate:percentageX": e[1] || (e[1] = (t) => m.percentageX = t),
        local: n.local,
        iconClasses: n.iconClasses,
        inputType: L.value,
        percentageY: m.percentageY,
        "onUpdate:percentageY": e[2] || (e[2] = (t) => m.percentageY = t),
        mode: n.mode,
        showColorList: n.showColorList,
        showInputMenu: n.showInputMenu,
        showEyeDrop: n.showEyeDrop,
        isEyeDropperUsing: f.value,
        gradientType: v.value,
        onOnChangeMode: Fe,
        onOnInput: E,
        onOnClickEyeDropper: je,
        onOnDeleteColor: qe,
        onOnSaveColor: Ze,
        onOnChangeInputType: de
      }, null, 8, ["angle", "percentageX", "local", "iconClasses", "inputType", "percentageY", "mode", "showColorList", "showInputMenu", "showEyeDrop", "isEyeDropperUsing", "gradientType"]),
      n.mode == "gradient" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Pt, {
        key: 0,
        onOnAddColor: Ke,
        onOnMouseDown: Ne
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(Ft, {
        modelValue: K.value,
        "onUpdate:modelValue": e[3] || (e[3] = (t) => K.value = t),
        onOnInput: e[4] || (e[4] = (t) => he(!1)),
        onOnChange: Ge
      }, null, 8, ["modelValue"]),
      n.showAlpha ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Qt, {
        key: 1,
        modelValue: j.value,
        "onUpdate:modelValue": e[5] || (e[5] = (t) => j.value = t),
        onOnInput: Pe
      }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", fl, null, 512), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !1]
      ]),
      re.value && n.showInputSet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", hl, [
        L.value !== "CMYK" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(al, {
          key: 0,
          modelValue: N.value,
          "onUpdate:modelValue": [
            e[6] || (e[6] = (t) => N.value = t),
            Je
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "RGB" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 1,
          label: "R",
          min: 0,
          max: 255,
          modelValue: s.value.find((t) => t.select == !0).r,
          "onUpdate:modelValue": [
            e[7] || (e[7] = (t) => s.value.find((r) => r.select == !0).r = t),
            e[8] || (e[8] = (t) => ue(t, "r"))
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "RGB" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 2,
          label: "G",
          min: 0,
          max: 255,
          modelValue: s.value.find((t) => t.select == !0).g,
          "onUpdate:modelValue": [
            e[9] || (e[9] = (t) => s.value.find((r) => r.select == !0).g = t),
            e[10] || (e[10] = (t) => ue(t, "g"))
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "RGB" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 3,
          label: "B",
          min: 0,
          max: 255,
          modelValue: s.value.find((t) => t.select == !0).b,
          "onUpdate:modelValue": [
            e[11] || (e[11] = (t) => s.value.find((r) => r.select == !0).b = t),
            e[12] || (e[12] = (t) => ue(t, "b"))
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "HSL" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 4,
          label: "H",
          min: 0,
          max: 360,
          modelValue: H.h,
          "onUpdate:modelValue": [
            e[13] || (e[13] = (t) => H.h = t),
            ye
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "HSL" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 5,
          label: "S",
          min: 0,
          max: 100,
          modelValue: H.s,
          "onUpdate:modelValue": [
            e[14] || (e[14] = (t) => H.s = t),
            ye
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "HSL" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 6,
          label: "L",
          min: 0,
          max: 100,
          modelValue: H.l,
          "onUpdate:modelValue": [
            e[15] || (e[15] = (t) => H.l = t),
            ye
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "HSV" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 7,
          label: "H",
          min: 0,
          max: 360,
          modelValue: D.h,
          "onUpdate:modelValue": [
            e[16] || (e[16] = (t) => D.h = t),
            be
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "HSV" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 8,
          label: "S",
          min: 0,
          max: 100,
          modelValue: D.s,
          "onUpdate:modelValue": [
            e[17] || (e[17] = (t) => D.s = t),
            be
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "HSV" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 9,
          label: "V",
          min: 0,
          max: 100,
          modelValue: D.v,
          "onUpdate:modelValue": [
            e[18] || (e[18] = (t) => D.v = t),
            be
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "CMYK" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 10,
          label: "C",
          min: 0,
          max: 100,
          modelValue: B.c,
          "onUpdate:modelValue": [
            e[19] || (e[19] = (t) => B.c = t),
            ce
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "CMYK" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 11,
          label: "M",
          min: 0,
          max: 100,
          modelValue: B.m,
          "onUpdate:modelValue": [
            e[20] || (e[20] = (t) => B.m = t),
            ce
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "CMYK" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 12,
          label: "Y",
          min: 0,
          max: 100,
          modelValue: B.y,
          "onUpdate:modelValue": [
            e[21] || (e[21] = (t) => B.y = t),
            ce
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        L.value == "CMYK" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 13,
          label: "K",
          min: 0,
          max: 100,
          modelValue: B.k,
          "onUpdate:modelValue": [
            e[22] || (e[22] = (t) => B.k = t),
            ce
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        n.showAlpha ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Y, {
          key: 14,
          label: "A",
          min: 0,
          max: 100,
          style: { "margin-right": "2px" },
          modelValue: s.value.find((t) => t.select == !0).a,
          "onUpdate:modelValue": [
            e[23] || (e[23] = (t) => s.value.find((r) => r.select == !0).a = t),
            e[24] || (e[24] = (t) => ue(t, "a"))
          ]
        }, null, 8, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
      ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
      b.value.length > 0 && n.showColorList ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", yl, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(b.value, (t) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: `color-${t}`,
          class: "ck-cp-color-item",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ backgroundColor: t }),
          onClick: (r) => Qe(t)
        }, null, 12, bl))), 128))
      ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
    ], 10, ml));
  }
});



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX1BhbGV0dGVfdnVlLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXlCOEQ7QUFFOUQsaUVBQWU7RUFDWEMsSUFBSSxFQUFFLGNBQWM7RUFDcEJDLFVBQVUsRUFBRTtJQUFFRixlQUFjLEVBQWRBLDBFQUFlQTtFQUFDLENBQUM7RUFDL0JHLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIQyxNQUFNLEVBQUUsRUFBRTtNQUNWQyxZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDO0VBQ0RDLE9BQU8sV0FBQUEsUUFBQSxFQUFHO0lBQ04sSUFBSSxDQUFDQyxVQUFVLENBQUM7RUFDcEIsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDTEMsV0FBVyxXQUFBQSxZQUFBLEVBQUc7TUFDVixJQUFJLENBQUNMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDO1FBQ2JULElBQUksRUFBRSxZQUFZO1FBQ2xCVSxJQUFJLEVBQUU7TUFDVixDQUFDO0lBQ0wsQ0FBQztJQUNESixVQUFVLFdBQUFBLFdBQUEsRUFBRztNQUFBLElBQUFLLEtBQUE7TUFDVEMsS0FBSyxDQUFDQyxHQUFHLENBQUM7UUFDTkMsR0FBRyxFQUFFLDZCQUE2QjtRQUNsQ0MsSUFBSSxFQUFFLFNBQUFBLEtBQUNDLFFBQVEsRUFBSztVQUNoQkwsS0FBSSxDQUFDUixNQUFLLEdBQUlhLFFBQVEsQ0FBQ2IsTUFBSztRQUNoQztNQUNKLENBQUM7SUFDTCxDQUFDO0lBQ0RjLFVBQVUsV0FBQUEsV0FBQSxFQUFHO01BQ1RMLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO1FBQ05DLEdBQUcsRUFBRSw2QkFBNkI7UUFDbENaLElBQUksRUFBRTtVQUNGQyxNQUFNLEVBQUUsSUFBSSxDQUFDQTtRQUNqQixDQUFDO1FBQ0RZLElBQUksRUFBRSxTQUFBQSxLQUFDQyxRQUFRLEVBQUs7VUFDaEIsSUFBSUEsUUFBUSxDQUFDRSxPQUFPLEVBQUU7WUFDbEJDLFFB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QUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyx1QkFBdUIsOENBQUMsSUFBSSxnREFBQztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLFlBQVksdURBQUM7QUFDYiwrQ0FBK0MsOENBQUMsSUFBSSx1REFBQztBQUNyRCxTQUFTLDhDQUFDLE1BQU0sdURBQUMsQ0FBQyx5Q0FBRSxRQUFRLCtDQUFFLGtCQUFrQiw4Q0FBQyxJQUFJLHVEQUFDO0FBQ3RELHdCQUF3QixFQUFFO0FBQzFCO0FBQ0EsaUJBQWlCLG1EQUFDLEdBQUcsb0JBQW9CO0FBQ3pDO0FBQ0EsU0FBUztBQUNULFlBQVksdURBQUM7QUFDYjtBQUNBO0FBQ0EsQ0FBQztBQUdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvUGFsZXR0ZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZS52dWU/ZjVlZCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9QYWxldHRlLnZ1ZT8yYWI5Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db2xvclBhbGV0dGUudnVlPzg3MGYiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvUGFsZXR0ZS52dWU/NDI4ZCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT84Zjg4Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL1BhbGV0dGUudnVlP2QyYjEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZS52dWU/YjFjYyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9QYWxldHRlLnZ1ZT81ZTJkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db2xvclBhbGV0dGUudnVlPzk4NGMiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvUGFsZXR0ZS52dWU/NDhkMCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT9iMTYxIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL1BhbGV0dGUudnVlP2ZiNTIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9ub2RlX21vZHVsZXMvQGN5aG5rY2thbGkvdnVlMy1jb2xvci1waWNrZXIvZGlzdC92dWUzLWNvbG9yLXBpY2tlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiY29sb3ItcGFsZXR0ZVwiPlxuICAgIDxkaXYgdi1mb3I9XCIoY29sb3IsIGluZGV4KSBpbiBjb2xvcnNcIiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX2NvbG9yXCIgOnN0eWxlPVwiYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuY29kZX1gXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX2NvZGVcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJjb2xvcnNbaW5kZXhdLm5hbWVcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImNvbG9yc1tpbmRleF0uY29kZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fc2VsZWN0XCIgQGNsaWNrPVwic2VsZWN0QWN0aXZlQ29sb3IoY29sb3IpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXBhbGV0dGVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2xvci1wYWxldHRlX19idXR0b25cIiBAY2xpY2s9XCJhZGROZXdDb2xvclwiPlxuICAgICAgICArXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX2J1dHRvblwiIEBjbGljaz1cInNhdmVDb2xvcnNcIj5cbiAgICAgICAgU2F2ZSBjb2xvcnNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJhY3RpdmVfY29sb3JcIiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX3BhbGV0dGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX3BhbGV0dGVfX2Nsb3NlXCIgQGNsaWNrPVwiY2xvc2VQYWxldHRlXCI+XG4gICAgICAgICAgICDQl9Cw0LrRgNGL0YLRjFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFZ1ZTNDb2xvclBpY2tlciB2LW1vZGVsPVwiYWN0aXZlX2NvbG9yLmNvZGVcIiBtb2RlPVwic29saWRcIiA6c2hvd0NvbG9yTGlzdD1cImZhbHNlXCIgOnNob3dFeWVEcm9wPVwiZmFsc2VcIiB0eXBlPVwiSEVYXCIgLz5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7VnVlM0NvbG9yUGlja2VyfSBmcm9tICdAY3lobmtja2FsaS92dWUzLWNvbG9yLXBpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkNvbG9yUGFsZXR0ZVwiLFxuICAgIGNvbXBvbmVudHM6IHsgVnVlM0NvbG9yUGlja2VyIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yczogW10sXG4gICAgICAgICAgICBhY3RpdmVfY29sb3I6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQ29sb3JzKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkTmV3Q29sb3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJGNvbG9yLTEwMCcsXG4gICAgICAgICAgICAgICAgY29kZTogJyM3NzcnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBsb2FkQ29sb3JzKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuQ29sb3JzOmxvYWRDb2xvcnMnLFxuICAgICAgICAgICAgICAgIHRoZW46IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9ycyA9IHJlc3BvbnNlLmNvbG9yc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVDb2xvcnMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Db2xvcnM6c2F2ZUNvbG9ycycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IHRoaXMuY29sb3JzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RBY3RpdmVDb2xvcihjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfY29sb3IgPSBudWxsXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9jb2xvciA9IGNvbG9yXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlUGFsZXR0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2NvbG9yID0gbnVsbFxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmNvbG9yLXBhbGV0dGUge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICAgJl9fc2VsZWN0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLmNvbG9yLXBhbGV0dGVfX2NvbG9yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjJiO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgICZfX3BhbGV0dGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMycHg7XG4gICAgICAgICZfX2Nsb3NlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxM3B4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwbGF5Z3JvdW5kXCI+XG4gICAgICAgIDxDb2xvclBhbGV0dGUvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL2ludGVyZmFjZS9Db2xvclBhbGV0dGVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlBhbGV0dGVcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIENvbG9yUGFsZXR0ZVxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnBsYXlncm91bmQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb2xvci1wYWxldHRlIHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIxNTY4NjI3NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG4uY29sb3ItcGFsZXR0ZV9fc2VsZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG4uY29sb3ItcGFsZXR0ZSAuY29sb3ItcGFsZXR0ZV9fY29sb3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb2xvci1wYWxldHRlIC5jb2xvci1wYWxldHRlX19jb2xvciBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTY4NjI3NDUxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMHB4IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbG9yLXBhbGV0dGVfX2J1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMTFweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmNvbG9yLXBhbGV0dGVfX3BhbGV0dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xcbiAgbWFyZ2luLXRvcDogLTMycHg7XFxufVxcbi5jb2xvci1wYWxldHRlX19wYWxldHRlX19jbG9zZSB7XFxuICBwYWRkaW5nOiA2cHggMTNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBRFI7QUFFUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFaO0FBR0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFFUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uY29sb3ItcGFsZXR0ZSB7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDFmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcbiAgICAmX19zZWxlY3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbG9yLXBhbGV0dGVfX2NvbG9yIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICB3aWR0aDogMTEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjJiO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICZfX2J1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTNweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgfVxcbiAgICAmX19wYWxldHRlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMnB4O1xcbiAgICAgICAgJl9fY2xvc2Uge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxM3B4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wbGF5Z3JvdW5kIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvUGFsZXR0ZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ucGxheWdyb3VuZCB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YzhhODE2Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9QYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUyZDUzNDEwJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRjOGE4MTZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGM4YTgxNiZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNDRjOGE4MTZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0NGM4YTgxNicsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzQ0YzhhODE2JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YzhhODE2XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzQ0YzhhODE2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9QYWxldHRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MmQ1MzQxMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9QYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUyZDUzNDEwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9QYWxldHRlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1MmQ1MzQxMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzUyZDUzNDEwJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNTJkNTM0MTAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyZDUzNDEwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzUyZDUzNDEwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9QYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRjOGE4MTZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9QYWxldHRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MmQ1MzQxMFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YzhhODE2Jmxhbmc9c2Nzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUGFsZXR0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MmQ1MzQxMCZsYW5nPXNjc3NcIiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBBLCByZWYgYXMgUywgb3BlbkJsb2NrIGFzIHksIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBJLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgeCwgbm9ybWFsaXplQ2xhc3MgYXMgUiwgRnJhZ21lbnQgYXMgWGUsIG5vcm1hbGl6ZVN0eWxlIGFzIEcsIHdpdGhEaXJlY3RpdmVzIGFzIFosIHZTaG93IGFzIF8sIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBWLCBjcmVhdGVWTm9kZSBhcyB2ZSwgY3JlYXRlVGV4dFZOb2RlIGFzIGtlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgcSwgaW5qZWN0IGFzIG9lLCB3YXRjaCBhcyB3ZSwgdW5yZWYgYXMgbWUsIHJlYWN0aXZlIGFzIHBlLCBwcm92aWRlIGFzIHNlLCBvbkJlZm9yZU1vdW50IGFzIGx0LCBvbk1vdW50ZWQgYXMgbnQsIGNyZWF0ZUJsb2NrIGFzIFQsIHJlbmRlckxpc3QgYXMgYXQgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBzdCA9IHsgY2xhc3M6IFwiY29sb3ItaW5wdXQtbWVudVwiIH0sIG90ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiQ29sb3JJbnB1dE1lbnVcIixcbiAgcHJvcHM6IHtcbiAgICBpbnB1dFR5cGU6IHsgZGVmYXVsdDogXCJSR0JcIiwgdHlwZTogU3RyaW5nIH1cbiAgfSxcbiAgZW1pdHM6IFtcIm9uQ2hhbmdlSW5wdXROYW1lXCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IGEgPSBTKG4uaW5wdXRUeXBlKSwgaSA9IGQsIHUgPSAoZykgPT4ge1xuICAgICAgYS52YWx1ZSA9IGcsIGkoXCJvbkNoYW5nZUlucHV0TmFtZVwiLCBnKTtcbiAgICB9O1xuICAgIHJldHVybiAoZywgcykgPT4gKHkoKSwgSShcInVsXCIsIHN0LCBbXG4gICAgICB4KFwibGlcIiwge1xuICAgICAgICBjbGFzczogUihhLnZhbHVlID09IFwiUkdCXCIgPyBcImFjdGl2ZVwiIDogXCJcIiksXG4gICAgICAgIG9uQ2xpY2s6IHNbMF0gfHwgKHNbMF0gPSAoYikgPT4gdShcIlJHQlwiKSlcbiAgICAgIH0sIFwiUkdCXCIsIDIpLFxuICAgICAgeChcImxpXCIsIHtcbiAgICAgICAgY2xhc3M6IFIoYS52YWx1ZSA9PSBcIkhTTFwiID8gXCJhY3RpdmVcIiA6IFwiXCIpLFxuICAgICAgICBvbkNsaWNrOiBzWzFdIHx8IChzWzFdID0gKGIpID0+IHUoXCJIU0xcIikpXG4gICAgICB9LCBcIkhTTFwiLCAyKSxcbiAgICAgIHgoXCJsaVwiLCB7XG4gICAgICAgIGNsYXNzOiBSKGEudmFsdWUgPT0gXCJIU1ZcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKSxcbiAgICAgICAgb25DbGljazogc1syXSB8fCAoc1syXSA9IChiKSA9PiB1KFwiSFNWXCIpKVxuICAgICAgfSwgXCJIU1ZcIiwgMiksXG4gICAgICB4KFwibGlcIiwge1xuICAgICAgICBjbGFzczogUihhLnZhbHVlID09IFwiQ01ZS1wiID8gXCJhY3RpdmVcIiA6IFwiXCIpLFxuICAgICAgICBvbkNsaWNrOiBzWzNdIHx8IChzWzNdID0gKGIpID0+IHUoXCJDTVlLXCIpKVxuICAgICAgfSwgXCJDTVlLXCIsIDIpXG4gICAgXSkpO1xuICB9XG59KSwgcnQgPSB7XG4gIGtleTogMCxcbiAgY2xhc3M6IFwiY2stY3AtY29udHJvbGxlci1iYXJcIlxufSwgaXQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sIHV0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMjEuNSAwaDljMC44MzEgMCAxLjUgMC42NjkgMS41IDEuNXY5YzAgMC42MDYtMC4zNjMgMS4xNTYtMC45MjUgMS4zODdzLTEuMjA2IDAuMTA2LTEuNjM3LTAuMzI1bC0yLjQzOC0yLjQzOC01LjQzOCA1LjQzOGMtMC41ODcgMC41ODgtMS41MzggMC41ODgtMi4xMTkgMGwtMi0yYy0wLjU4Ny0wLjU4OC0wLjU4Ny0xLjUzNyAwLTIuMTE5bDUuNDM4LTUuNDM4LTIuNDQ0LTIuNDQ0Yy0wLjQzMS0wLjQzMS0wLjU1Ni0xLjA3NS0wLjMyNS0xLjYzN3MwLjc4MS0wLjkyNSAxLjM4Ny0wLjkyNXpNMTAuNSAzMmgtOWMtMC44MzEgMC0xLjUtMC42NjktMS41LTEuNXYtOWMwLTAuNjA2IDAuMzYyLTEuMTU2IDAuOTI1LTEuMzg3czEuMjA2LTAuMTA2IDEuNjM3IDAuMzI1bDIuNDM4IDIuNDM4IDUuNDM4LTUuNDM4YzAuNTg4LTAuNTg3IDEuNTM3LTAuNTg3IDIuMTE5IDBsMiAyYzAuNTg4IDAuNTg3IDAuNTg4IDEuNTM4IDAgMi4xMTlsLTUuNDM4IDUuNDM4IDIuNDM4IDIuNDM4YzAuNDMxIDAuNDMxIDAuNTU2IDEuMDc1IDAuMzI1IDEuNjM3cy0wLjc4MSAwLjkyNS0xLjM4NyAwLjkyNXpcIiB9LCBudWxsLCAtMSksIGN0ID0gW1xuICB1dFxuXSwgZHQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sIHB0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMjkgMTZjMC03LjE4LTUuODItMTMtMTMtMTNzLTEzIDUuODItMTMgMTN2MGMwIDcuMTggNS44MiAxMyAxMyAxM3MxMy01LjgyIDEzLTEzdjB6TTAgMTZjMC04LjgzNyA3LjE2My0xNiAxNi0xNnMxNiA3LjE2MyAxNiAxNnYwYzAgOC44MzctNy4xNjMgMTYtMTYgMTZzLTE2LTcuMTYzLTE2LTE2djB6XCIgfSwgbnVsbCwgLTEpLCBndCA9IFtcbiAgcHRcbl0sIHZ0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjMyXCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiXG59LCBtdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTAuMDEzIDI5LjMwNmMwLjE1NiAxLjUxMiAxLjQzMSAyLjY5NCAyLjk4NyAyLjY5NGgyNmMxLjY1NiAwIDMtMS4zNDQgMy0zdi02YzAtMS42NTYtMS4zNDQtMy0zLTNoLTN2NWMwIDAuNTUtMC40NSAxLTEgMXMtMS0wLjQ1LTEtMXYtNWgtNHY1YzAgMC41NS0wLjQ1IDEtMSAxcy0xLTAuNDUtMS0xdi01aC00djVjMCAwLjU1LTAuNDUgMS0xIDFzLTEtMC40NS0xLTF2LTVoLTVjLTAuNTUgMC0xLTAuNDUtMS0xczAuNDUtMSAxLTFoNXYtNGgtNWMtMC41NSAwLTEtMC40NS0xLTFzMC40NS0xIDEtMWg1di00aC01Yy0wLjU1IDAtMS0wLjQ1LTEtMXMwLjQ1LTEgMS0xaDV2LTNjMC0xLjY1Ni0xLjM0NC0zLTMtM2gtNmMtMS42NTYgMC0zIDEuMzQ0LTMgM3YyNmMwIDAuMTA2IDAuMDA2IDAuMjA2IDAuMDEzIDAuMzA2elwiIH0sIG51bGwsIC0xKSwgZnQgPSBbXG4gIG10XG5dLCBodCA9IHtcbiAga2V5OiAxLFxuICB2ZXJzaW9uOiBcIjEuMVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogXCIzMlwiLFxuICBoZWlnaHQ6IFwiMzJcIixcbiAgdmlld0JveDogXCIwIDAgMzIgMzJcIlxufSwgeXQgPSAvKiBAX19QVVJFX18gKi8geChcInBhdGhcIiwgeyBkOiBcIk0wLjAxMyAyOS4zMDZjMC4xNTYgMS41MTIgMS40MzEgMi42OTQgMi45ODcgMi42OTRoMjZjMS42NTYgMCAzLTEuMzQ0IDMtM3YtNmMwLTEuNjU2LTEuMzQ0LTMtMy0zaC0zdjVjMCAwLjU1LTAuNDUgMS0xIDFzLTEtMC40NS0xLTF2LTVoLTR2NWMwIDAuNTUtMC40NSAxLTEgMXMtMS0wLjQ1LTEtMXYtNWgtNHY1YzAgMC41NS0wLjQ1IDEtMSAxcy0xLTAuNDUtMS0xdi01aC01Yy0wLjU1IDAtMS0wLjQ1LTEtMXMwLjQ1LTEgMS0xaDV2LTRoLTVjLTAuNTUgMC0xLTAuNDUtMS0xczAuNDUtMSAxLTFoNXYtNGgtNWMtMC41NSAwLTEtMC40NS0xLTFzMC40NS0xIDEtMWg1di0zYzAtMS42NTYtMS4zNDQtMy0zLTNoLTZjLTEuNjU2IDAtMyAxLjM0NC0zIDN2MjZjMCAwLjEwNiAwLjAwNiAwLjIwNiAwLjAxMyAwLjMwNnpcIiB9LCBudWxsLCAtMSksIGJ0ID0gW1xuICB5dFxuXSwga3QgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sICR0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMjEuMzUgMS44MjVsLTYuMzQ0IDYuMzUtMC41ODgtMC41ODhjLTAuNzgxLTAuNzgxLTIuMDUwLTAuNzgxLTIuODMxIDBzLTAuNzgxIDIuMDUwIDAgMi44MzFsMTAgMTBjMC43ODEgMC43ODEgMi4wNTAgMC43ODEgMi44MzEgMHMwLjc4MS0yLjA1MCAwLTIuODMxbC0wLjU4Ny0wLjU4NyA2LjM0NC02LjM1YzIuNDM4LTIuNDM4IDIuNDM4LTYuMzg4IDAtOC44MTlzLTYuMzg3LTIuNDM4LTguODE5IDB6TTMuNDYyIDIwLjIwNmMtMC45MzggMC45MzgtMS40NjIgMi4yMTItMS40NjIgMy41Mzh2Mi42NWwtMS42NjMgMi40OTRjLTAuNTMxIDAuNzk0LTAuNDI1IDEuODUgMC4yNSAyLjUyNXMxLjczMSAwLjc4MSAyLjUyNSAwLjI1bDIuNDk0LTEuNjYzaDIuNjVjMS4zMjUgMCAyLjYtMC41MjUgMy41MzctMS40NjJsNy41NDQtNy41NDQtMi44MzEtMi44MzEtNy41NDQgNy41NDRjLTAuMTg4IDAuMTg4LTAuNDQ0IDAuMjk0LTAuNzA2IDAuMjk0aC0yLjI1NnYtMi4yNTZjMC0wLjI2MiAwLjEwNi0wLjUxOSAwLjI5NC0wLjcwNmw3LjU0NC03LjU0NC0yLjgzMS0yLjgzMS03LjU0NCA3LjU0NHpcIiB9LCBudWxsLCAtMSksIHd0ID0gW1xuICAkdFxuXSwgeHQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sIEN0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMzIgMTZjMCAwLjA1NiAwIDAuMTEzIDAgMC4xNjktMC4wMjUgMi4yODEtMi4xIDMuODMxLTQuMzgxIDMuODMxaC02LjExOWMtMS42NTYgMC0zIDEuMzQ0LTMgMyAwIDAuMjEyIDAuMDI1IDAuNDE5IDAuMDYzIDAuNjE5IDAuMTMxIDAuNjM3IDAuNDA2IDEuMjUgMC42NzUgMS44NjkgMC4zODEgMC44NjMgMC43NTYgMS43MTkgMC43NTYgMi42MjUgMCAxLjk4OC0xLjM1IDMuNzk0LTMuMzM3IDMuODc1LTAuMjE5IDAuMDA2LTAuNDM4IDAuMDEyLTAuNjYyIDAuMDEyLTguODMxIDAtMTUuOTk0LTcuMTYyLTE1Ljk5NC0xNnM3LjE2Mi0xNiAxNi0xNiAxNiA3LjE2MiAxNiAxNnpNOCAxOGMwLTEuMTA1LTAuODk1LTItMi0ycy0yIDAuODk1LTIgMnYwYzAgMS4xMDUgMC44OTUgMiAyIDJzMi0wLjg5NSAyLTJ2MHpNOCAxMmMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMnYwYy0xLjEwNSAwLTIgMC44OTUtMiAyczAuODk1IDIgMiAydjB6TTE4IDZjMC0xLjEwNS0wLjg5NS0yLTItMnMtMiAwLjg5NS0yIDJ2MGMwIDEuMTA1IDAuODk1IDIgMiAyczItMC44OTUgMi0ydjB6TTI0IDEyYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0ydjBjLTEuMTA1IDAtMiAwLjg5NS0yIDJzMC44OTUgMiAyIDJ2MHpcIiB9LCBudWxsLCAtMSksIEl0ID0gW1xuICBDdFxuXSwgTXQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMjhcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI4IDMyXCJcbn0sIFZ0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNNCAyYy0yLjIwNiAwLTQgMS43OTQtNCA0djIwYzAgMi4yMDYgMS43OTQgNCA0IDRoMjBjMi4yMDYgMCA0LTEuNzk0IDQtNHYtMTUuMTY5YzAtMS4wNjMtMC40MTktMi4wODEtMS4xNjktMi44MzFsLTQuODMxLTQuODMxYy0wLjc1LTAuNzUtMS43NjktMS4xNjktMi44MzEtMS4xNjloLTE1LjE2OXpNNCA4YzAtMS4xMDYgMC44OTQtMiAyLTJoMTJjMS4xMDYgMCAyIDAuODk0IDIgMnY0YzAgMS4xMDYtMC44OTQgMi0yIDJoLTEyYy0xLjEwNiAwLTItMC44OTQtMi0ydi00ek0xNCAxOGMyLjIwOSAwIDQgMS43OTEgNCA0cy0xLjc5MSA0LTQgNHYwYy0yLjIwOSAwLTQtMS43OTEtNC00czEuNzkxLTQgNC00djB6XCIgfSwgbnVsbCwgLTEpLCBOdCA9IFtcbiAgVnRcbl0sIFN0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjI4XCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAyOCAzMlwiXG59LCBCdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTguNDUgMS4xMDZsLTAuNDUgMC44OTRoLTZjLTEuMTA2IDAtMiAwLjg5NC0yIDJzMC44OTQgMiAyIDJoMjRjMS4xMDYgMCAyLTAuODk0IDItMnMtMC44OTQtMi0yLTJoLTZsLTAuNDUtMC44OTRjLTAuMzM3LTAuNjgxLTEuMDMxLTEuMTA2LTEuNzg4LTEuMTA2aC03LjUyNWMtMC43NTYgMC0xLjQ1IDAuNDI1LTEuNzg3IDEuMTA2ek0yNiA4aC0yNGwxLjMyNSAyMS4xODhjMC4xIDEuNTgxIDEuNDEzIDIuODEzIDIuOTk0IDIuODEzaDE1LjM2MmMxLjU4MSAwIDIuODk0LTEuMjMxIDIuOTk0LTIuODEzbDEuMzI1LTIxLjE4OHpcIiB9LCBudWxsLCAtMSksIEx0ID0gW1xuICBCdFxuXSwgRHQgPSB7XG4gIGtleTogMCxcbiAgY2xhc3M6IFwiY2stY3AtbGluZWFyLWFuZ2xlLWNvbnRhaW5lclwiXG59LCBSdCA9IHsgY2xhc3M6IFwiY2stZ3JhZGllbnQtc2V0LWxhYmVsXCIgfSwgVHQgPSBbXCJ2YWx1ZVwiXSwgSHQgPSB7XG4gIGtleTogMSxcbiAgY2xhc3M6IFwiY2stY3AtbGluZWFyLWFuZ2xlLWNvbnRhaW5lclwiXG59LCBFdCA9IHsgY2xhc3M6IFwiY2stZ3JhZGllbnQtc2V0LWxhYmVsXCIgfSwgWXQgPSBbXCJ2YWx1ZVwiXSwgWHQgPSB7IHN0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjFyZW1cIiB9IH0sIE90ID0geyBjbGFzczogXCJjay1ncmFkaWVudC1zZXQtbGFiZWxcIiB9LCBVdCA9IFtcInZhbHVlXCJdLCBHdCA9IC8qIEBfX1BVUkVfXyAqLyBBKHtcbiAgX19uYW1lOiBcIlBpY2tlck1lbnVcIixcbiAgcHJvcHM6IHtcbiAgICBtb2RlOiB7XG4gICAgICBkZWZhdWx0OiBcImdyYWRpZW50XCIsXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGlucHV0VHlwZTogeyBkZWZhdWx0OiBcIlJHQlwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBncmFkaWVudFR5cGU6IHsgZGVmYXVsdDogXCJsaW5lYXJcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgaXNFeWVEcm9wcGVyVXNpbmc6IHsgZGVmYXVsdDogITEsIHR5cGU6IEJvb2xlYW4gfSxcbiAgICBzaG93Q29sb3JMaXN0OiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0V5ZURyb3A6IHsgZGVmYXVsdDogITAsIHR5cGU6IEJvb2xlYW4gfSxcbiAgICBzaG93SW5wdXRNZW51OiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgYW5nbGU6IHsgZGVmYXVsdDogOTAsIHR5cGU6IE51bWJlciB9LFxuICAgIHBlcmNlbnRhZ2VYOiB7IGRlZmF1bHQ6IDUwLCB0eXBlOiBOdW1iZXIgfSxcbiAgICBwZXJjZW50YWdlWTogeyBkZWZhdWx0OiA1MCwgdHlwZTogTnVtYmVyIH0sXG4gICAgbG9jYWw6IHsgZGVmYXVsdDogeyBhbmdsZTogXCJcIiwgcG9zaXRpb25YOiBcIlwiLCBwb3NpdGlvblk6IFwiXCIgfSwgdHlwZTogT2JqZWN0IH0sXG4gICAgaWNvbkNsYXNzZXM6IHsgZGVmYXVsdDogeyBsaW5lYXI6IFwiXCIsIHJhZGlhbDogXCJcIiwgcnVsZXI6IFwiXCIsIGV5ZURyb3BlcjogXCJcIiwgaW5wdXRNZW51OiBcIlwiLCBzYXZlOiBcIlwiLCBkZWxldGU6IFwiXCIgfSwgdHlwZTogT2JqZWN0IH1cbiAgfSxcbiAgZW1pdHM6IFtcIm9uU2F2ZUNvbG9yXCIsIFwib25DaGFuZ2VNb2RlXCIsIFwib25DaGFuZ2VJbnB1dFR5cGVcIiwgXCJvbkRlbGV0ZUNvbG9yXCIsIFwib25DbGlja0V5ZURyb3BwZXJcIiwgXCJ1cGRhdGU6YW5nbGVcIiwgXCJ1cGRhdGU6cGVyY2VudGFnZVhcIiwgXCJ1cGRhdGU6cGVyY2VudGFnZVlcIiwgXCJvbklucHV0XCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBTKCksIGEgPSBTKCExKSwgaSA9IFMoITEpLCB1ID0gUyghMSksIGcgPSBkLCBzID0gKHYsIG0pID0+IHtcbiAgICAgIHN3aXRjaCAobSkge1xuICAgICAgICBjYXNlIFwiYW5nbGVcIjpcbiAgICAgICAgICBnKFwidXBkYXRlOmFuZ2xlXCIsIHBhcnNlSW50KHYudGFyZ2V0LnZhbHVlKSksIGcoXCJvbklucHV0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicGVyY2VudGFnZVhcIjpcbiAgICAgICAgICBnKFwidXBkYXRlOnBlcmNlbnRhZ2VYXCIsIHBhcnNlSW50KHYudGFyZ2V0LnZhbHVlKSksIGcoXCJvbklucHV0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicGVyY2VudGFnZVlcIjpcbiAgICAgICAgICBnKFwidXBkYXRlOnBlcmNlbnRhZ2VZXCIsIHBhcnNlSW50KHYudGFyZ2V0LnZhbHVlKSksIGcoXCJvbklucHV0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIGIgPSAodikgPT4ge1xuICAgICAgdS52YWx1ZSA9ICExLCBnKFwib25DaGFuZ2VJbnB1dFR5cGVcIiwgdik7XG4gICAgfSwgZiA9ICgpID0+IHtcbiAgICAgIHUudmFsdWUgPSAhdS52YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiAodiwgbSkgPT4gKHkoKSwgSShYZSwgbnVsbCwgW1xuICAgICAgeChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImNrLWNwLW1lbnVcIixcbiAgICAgICAgc3R5bGU6IEcobi5tb2RlID09IFwiZ3JhZGllbnRcIiA/IFwiXCIgOiBcImp1c3RpZnktY29udGVudDogZW5kO1wiKVxuICAgICAgfSwgW1xuICAgICAgICBuLm1vZGUgPT0gXCJncmFkaWVudFwiID8gKHkoKSwgSShcImRpdlwiLCBydCwgW1xuICAgICAgICAgIHgoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBSKFtcImNwLWJ0blwiLCBuLmdyYWRpZW50VHlwZSA9PSBcImxpbmVhclwiID8gXCJhY3RpdmVcIiA6IFwiXCJdKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bMF0gfHwgKG1bMF0gPSAoTikgPT4gdi4kZW1pdChcIm9uQ2hhbmdlTW9kZVwiLCBcImxpbmVhclwiKSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLmxpbmVhciA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMubGluZWFyID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMubGluZWFyKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBpdCwgY3QpKVxuICAgICAgICAgIF0sIDYpLFxuICAgICAgICAgIHgoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBSKFtcImNwLWJ0blwiLCBuLmdyYWRpZW50VHlwZSA9PSBcInJhZGlhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJdKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bMV0gfHwgKG1bMV0gPSAoTikgPT4gdi4kZW1pdChcIm9uQ2hhbmdlTW9kZVwiLCBcInJhZGlhbFwiKSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLnJhZGlhbCA/IFwiXCIgOiBcInBhZGRpbmc6IDZweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMucmFkaWFsID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMucmFkaWFsKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBkdCwgZ3QpKVxuICAgICAgICAgIF0sIDYpLFxuICAgICAgICAgIFooeChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IFIoW1wiY3AtYnRuXCIsIGEudmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIl0pLFxuICAgICAgICAgICAgb25DbGljazogbVsyXSB8fCAobVsyXSA9IChOKSA9PiBhLnZhbHVlID0gIWEudmFsdWUpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5ydWxlciA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMucnVsZXIgPyAoeSgpLCBJKFwiaVwiLCB7XG4gICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgY2xhc3M6IFIobi5pY29uQ2xhc3Nlcy5ydWxlcilcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgdnQsIGZ0KSlcbiAgICAgICAgICBdLCA2KSwgW1xuICAgICAgICAgICAgW18sIG4uZ3JhZGllbnRUeXBlID09IFwibGluZWFyXCJdXG4gICAgICAgICAgXSksXG4gICAgICAgICAgWih4KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogUihbXCJjcC1idG5cIiwgaS52YWx1ZSA/IFwiYWN0aXZlXCIgOiBcIlwiXSksXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzNdIHx8IChtWzNdID0gKE4pID0+IGkudmFsdWUgPSAhaS52YWx1ZSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLnJ1bGVyID8gXCJcIiA6IFwicGFkZGluZzogN3B4O1wifWApXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgbi5pY29uQ2xhc3Nlcy5ydWxlciA/ICh5KCksIEkoXCJpXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICBjbGFzczogUihuLmljb25DbGFzc2VzLnJ1bGVyKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBodCwgYnQpKVxuICAgICAgICAgIF0sIDYpLCBbXG4gICAgICAgICAgICBbXywgbi5ncmFkaWVudFR5cGUgPT0gXCJyYWRpYWxcIl1cbiAgICAgICAgICBdKVxuICAgICAgICBdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgeChcImRpdlwiLCB7XG4gICAgICAgICAgcmVmX2tleTogXCJyaWdodENvbnRhaW5lclwiLFxuICAgICAgICAgIHJlZjogbyxcbiAgICAgICAgICBjbGFzczogXCJjay1jcC1jb250cm9sbGVyLWJhclwiLFxuICAgICAgICAgIHN0eWxlOiB7IGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiwgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJlbmRcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9XG4gICAgICAgIH0sIFtcbiAgICAgICAgICBuLmlzRXllRHJvcHBlclVzaW5nICYmIG4uc2hvd0V5ZURyb3AgPyAoeSgpLCBJKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBpZDogXCJjcC1idG4tZXllZHJvcHBlclwiLFxuICAgICAgICAgICAgY2xhc3M6IFwiY3AtYnRuXCIsXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLmV5ZURyb3BlciA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bNF0gfHwgKG1bNF0gPSAoTikgPT4gdi4kZW1pdChcIm9uQ2xpY2tFeWVEcm9wcGVyXCIpKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMuZXllRHJvcGVyID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMuZXllRHJvcGVyKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBrdCwgd3QpKVxuICAgICAgICAgIF0sIDQpKSA6IFYoXCJcIiwgITApLFxuICAgICAgICAgIG4uc2hvd0lucHV0TWVudSA/ICh5KCksIEkoXCJidXR0b25cIiwge1xuICAgICAgICAgICAga2V5OiAxLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBSKFtcImNwLWJ0blwiLCB1LnZhbHVlID8gXCJhY3RpdmVcIiA6IFwiXCJdKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGYsXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLmlucHV0TWVudSA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMuaW5wdXRNZW51ID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMuaW5wdXRNZW51KVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCB4dCwgSXQpKVxuICAgICAgICAgIF0sIDYpKSA6IFYoXCJcIiwgITApLFxuICAgICAgICAgIFoodmUob3QsIHtcbiAgICAgICAgICAgIGlucHV0VHlwZTogbi5pbnB1dFR5cGUsXG4gICAgICAgICAgICBvbk9uQ2hhbmdlSW5wdXROYW1lOiBiXG4gICAgICAgICAgfSwgbnVsbCwgOCwgW1wiaW5wdXRUeXBlXCJdKSwgW1xuICAgICAgICAgICAgW18sIHUudmFsdWVdXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbi5zaG93Q29sb3JMaXN0ID8gKHkoKSwgSShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBrZXk6IDIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IFwiY3AtYnRuXCIsXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzVdIHx8IChtWzVdID0gKE4pID0+IHYuJGVtaXQoXCJvblNhdmVDb2xvclwiKSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLnNhdmUgPyBcIlwiIDogXCJwYWRkaW5nOiA3cHg7XCJ9YClcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLnNhdmUgPyAoeSgpLCBJKFwiaVwiLCB7XG4gICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgY2xhc3M6IFIobi5pY29uQ2xhc3Nlcy5zYXZlKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBNdCwgTnQpKVxuICAgICAgICAgIF0sIDQpKSA6IFYoXCJcIiwgITApLFxuICAgICAgICAgIG4ubW9kZSA9PSBcImdyYWRpZW50XCIgPyAoeSgpLCBJKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGtleTogMyxcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogXCJjcC1idG5cIixcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bNl0gfHwgKG1bNl0gPSAoTikgPT4gdi4kZW1pdChcIm9uRGVsZXRlQ29sb3JcIikpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5kZWxldGUgPyBcIlwiIDogXCJwYWRkaW5nOiA3LjVweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMuZGVsZXRlID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMuZGVsZXRlKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBTdCwgTHQpKVxuICAgICAgICAgIF0sIDQpKSA6IFYoXCJcIiwgITApXG4gICAgICAgIF0sIDUxMilcbiAgICAgIF0sIDQpLFxuICAgICAgbi5tb2RlID09IFwiZ3JhZGllbnRcIiA/IFooKHkoKSwgSShcImRpdlwiLCBEdCwgW1xuICAgICAgICB4KFwiZGl2XCIsIG51bGwsIFtcbiAgICAgICAgICB4KFwicFwiLCBSdCwgW1xuICAgICAgICAgICAga2UocShuLmxvY2FsLmFuZ2xlID8gbi5sb2NhbC5hbmdsZSA6IFwiQW5nbGVcIikgKyBcIiBcIiwgMSksXG4gICAgICAgICAgICB4KFwic3BhblwiLCBudWxsLCBxKG4uYW5nbGUpICsgXCLCsFwiLCAxKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIHgoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcInJhbmdlXCIsXG4gICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgbWF4OiBcIjM2MFwiLFxuICAgICAgICAgICAgdmFsdWU6IG4uYW5nbGUsXG4gICAgICAgICAgICBvbklucHV0OiBtWzddIHx8IChtWzddID0gKE4pID0+IHMoTiwgXCJhbmdsZVwiKSlcbiAgICAgICAgICB9LCBudWxsLCA0MCwgVHQpXG4gICAgICAgIF0pXG4gICAgICBdLCA1MTIpKSwgW1xuICAgICAgICBbXywgbi5ncmFkaWVudFR5cGUgPT0gXCJsaW5lYXJcIiAmJiBhLnZhbHVlXVxuICAgICAgXSkgOiBWKFwiXCIsICEwKSxcbiAgICAgIG4ubW9kZSA9PSBcImdyYWRpZW50XCIgPyBaKCh5KCksIEkoXCJkaXZcIiwgSHQsIFtcbiAgICAgICAgeChcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgeChcInBcIiwgRXQsIFtcbiAgICAgICAgICAgIGtlKHEobi5sb2NhbC5wb3NpdGlvblggPyBuLmxvY2FsLnBvc2l0aW9uWCA6IFwiUG9zaXRpb24gWFwiKSArIFwiIFwiLCAxKSxcbiAgICAgICAgICAgIHgoXCJzcGFuXCIsIG51bGwsIHEobi5wZXJjZW50YWdlWCkgKyBcIiVcIiwgMSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJyYW5nZVwiLFxuICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgIG1heDogXCIxMDBcIixcbiAgICAgICAgICAgIHZhbHVlOiBuLnBlcmNlbnRhZ2VYLFxuICAgICAgICAgICAgb25JbnB1dDogbVs4XSB8fCAobVs4XSA9IChOKSA9PiBzKE4sIFwicGVyY2VudGFnZVhcIikpXG4gICAgICAgICAgfSwgbnVsbCwgNDAsIFl0KVxuICAgICAgICBdKSxcbiAgICAgICAgeChcImRpdlwiLCBYdCwgW1xuICAgICAgICAgIHgoXCJwXCIsIE90LCBbXG4gICAgICAgICAgICBrZShxKG4ubG9jYWwucG9zaXRpb25ZID8gbi5sb2NhbC5wb3NpdGlvblkgOiBcIlBvc2l0aW9uIFlcIikgKyBcIiBcIiwgMSksXG4gICAgICAgICAgICB4KFwic3BhblwiLCBudWxsLCBxKG4ucGVyY2VudGFnZVkpICsgXCIlXCIsIDEpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgeChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICBtYXg6IFwiMTAwXCIsXG4gICAgICAgICAgICB2YWx1ZTogbi5wZXJjZW50YWdlWSxcbiAgICAgICAgICAgIG9uSW5wdXQ6IG1bOV0gfHwgKG1bOV0gPSAoTikgPT4gcyhOLCBcInBlcmNlbnRhZ2VZXCIpKVxuICAgICAgICAgIH0sIG51bGwsIDQwLCBVdClcbiAgICAgICAgXSlcbiAgICAgIF0sIDUxMikpLCBbXG4gICAgICAgIFtfLCBuLmdyYWRpZW50VHlwZSA9PSBcInJhZGlhbFwiICYmIGkudmFsdWVdXG4gICAgICBdKSA6IFYoXCJcIiwgITApXG4gICAgXSwgNjQpKTtcbiAgfVxufSksIFB0ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiR3JhZGllbnRCYXJcIixcbiAgZW1pdHM6IFtcIm9uQWRkQ29sb3JcIiwgXCJvbk1vdXNlRG93blwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBvID0gb2UoXCJncmFkaWVudEJhclwiKSwgYSA9IChpKSA9PiB7XG4gICAgICBpLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gKGksIHUpID0+ICh5KCksIEkoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZ3JhZGllbnQtYmFyXCIsXG4gICAgICBvbk1vdXNlZG93bjogdVsxXSB8fCAodVsxXSA9IChnKSA9PiBpLiRlbWl0KFwib25Nb3VzZURvd25cIiwgZykpLFxuICAgICAgb25EcmFnc3RhcnQ6IGFcbiAgICB9LCBbXG4gICAgICB4KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmX2tleTogXCJncmFkaWVudEJhclwiLFxuICAgICAgICByZWY6IG8sXG4gICAgICAgIGNsYXNzOiBcImdyYWRpZW50LWNvbnRhaW5lclwiLFxuICAgICAgICBvbkRibGNsaWNrOiB1WzBdIHx8ICh1WzBdID0gKGcpID0+IGkuJGVtaXQoXCJvbkFkZENvbG9yXCIsIGcpKVxuICAgICAgfSwgbnVsbCwgNTQ0KVxuICAgIF0sIDMyKSk7XG4gIH1cbn0pLCB6dCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29sb3VyLWFyZWEtbWFza1wiIH0sIG51bGwsIC0xKSwgQXQgPSAvKiBAX19QVVJFX18gKi8gQSh7XG4gIF9fbmFtZTogXCJQaWNrZXJXcmFwXCIsXG4gIGVtaXRzOiBbXCJvbk1vdXNlRG93blwiXSxcbiAgc2V0dXAobikge1xuICAgIGNvbnN0IGQgPSBvZShcImNhbnZhc1wiKSwgbyA9IG9lKFwicGlja2VyV3JhcFwiKSwgYSA9IG9lKFwicGlja2VyUG9pbnRlclwiKSwgaSA9ICh1KSA9PiB7XG4gICAgICB1LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gKHUsIGcpID0+ICh5KCksIEkoXCJkaXZcIiwge1xuICAgICAgcmVmX2tleTogXCJwaWNrZXJXcmFwXCIsXG4gICAgICByZWY6IG8sXG4gICAgICBjbGFzczogXCJjcC1waWNrZXItd3JhcFwiLFxuICAgICAgb25Nb3VzZWRvd246IGdbMF0gfHwgKGdbMF0gPSAocykgPT4gdS4kZW1pdChcIm9uTW91c2VEb3duXCIsIHMpKSxcbiAgICAgIG9uRHJhZ3N0YXJ0OiBpXG4gICAgfSwgW1xuICAgICAgeChcImNhbnZhc1wiLCB7XG4gICAgICAgIHJlZl9rZXk6IFwiY2FudmFzXCIsXG4gICAgICAgIHJlZjogZCxcbiAgICAgICAgY2xhc3M6IFwiY29sb3VyLWFyZWFcIlxuICAgICAgfSwgbnVsbCwgNTEyKSxcbiAgICAgIHp0LFxuICAgICAgeChcImRpdlwiLCB7XG4gICAgICAgIHJlZl9rZXk6IFwicGlja2VyUG9pbnRlclwiLFxuICAgICAgICByZWY6IGEsXG4gICAgICAgIGNsYXNzOiBcImNvbG91ci1hcmVhLXBvaW50LWNpcmNsZVwiXG4gICAgICB9LCBudWxsLCA1MTIpXG4gICAgXSwgNTQ0KSk7XG4gIH1cbn0pLCBLdCA9IHsgY2xhc3M6IFwicGlja2VyLWh1ZVwiIH0sIFd0ID0gW1widmFsdWVcIl0sIEZ0ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiUGlja2VySHVlXCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogeyBkZWZhdWx0OiAwLCB0eXBlOiBOdW1iZXIgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIiwgXCJvbklucHV0XCIsIFwib25DaGFuZ2VcIl0sXG4gIHNldHVwKG4sIHsgZW1pdDogZCB9KSB7XG4gICAgY29uc3QgbyA9IGQsIGEgPSAoaSkgPT4ge1xuICAgICAgbyhcInVwZGF0ZTptb2RlbFZhbHVlXCIsIHBhcnNlRmxvYXQoaS50YXJnZXQudmFsdWUpKSwgbyhcIm9uSW5wdXRcIiwgaSk7XG4gICAgfTtcbiAgICByZXR1cm4gKGksIHUpID0+ICh5KCksIEkoXCJkaXZcIiwgS3QsIFtcbiAgICAgIHgoXCJpbnB1dFwiLCB7XG4gICAgICAgIHZhbHVlOiBuLm1vZGVsVmFsdWUsXG4gICAgICAgIGNsYXNzOiBcInBpY2tlci1odWUtcmFuZ2Utc2xpZGVyXCIsXG4gICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgbWF4OiBcIjM2MFwiLFxuICAgICAgICBzdGVwOiBcIjAuMVwiLFxuICAgICAgICBvbklucHV0OiBhLFxuICAgICAgICBvbkNoYW5nZTogdVswXSB8fCAodVswXSA9IChnKSA9PiBpLiRlbWl0KFwib25DaGFuZ2VcIiwgZykpXG4gICAgICB9LCBudWxsLCA0MCwgV3QpXG4gICAgXSkpO1xuICB9XG59KSwgcXQgPSB7IGNsYXNzOiBcIm9wYWNpdHktYmFyXCIgfSwganQgPSB7IGNsYXNzOiBcInBpY2tlci1vcGFjaXR5LXNsaWRlciBvcGFjaXR5LWJhci1iYWNrZ3JvdW5kXCIgfSwgSnQgPSBbXCJ2YWx1ZVwiXSwgUXQgPSAvKiBAX19QVVJFX18gKi8gQSh7XG4gIF9fbmFtZTogXCJPcGFjaXR5QmFyXCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogeyBkZWZhdWx0OiAwLCB0eXBlOiBOdW1iZXIgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIiwgXCJvbklucHV0XCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBvZShcIm9wYWNpdHlTbGlkZXJcIiksIGEgPSBkLCBpID0gKHUpID0+IHtcbiAgICAgIGEoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBwYXJzZUludCh1LnRhcmdldC52YWx1ZSkpLCBhKFwib25JbnB1dFwiLCB1KTtcbiAgICB9O1xuICAgIHJldHVybiAodSwgZykgPT4gKHkoKSwgSShcImRpdlwiLCBxdCwgW1xuICAgICAgeChcImRpdlwiLCBqdCwgW1xuICAgICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICAgIHJlZl9rZXk6IFwib3BhY2l0eVNsaWRlclwiLFxuICAgICAgICAgIHJlZjogbyxcbiAgICAgICAgICB2YWx1ZTogbi5tb2RlbFZhbHVlLFxuICAgICAgICAgIGNsYXNzOiBcIm9wYWNpdHlfX3NsaWRlclwiLFxuICAgICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgIG1heDogXCIxMDBcIixcbiAgICAgICAgICBvbklucHV0OiBpXG4gICAgICAgIH0sIG51bGwsIDQwLCBKdClcbiAgICAgIF0pXG4gICAgXSkpO1xuICB9XG59KSwgWnQgPSB7IGNsYXNzOiBcImNrLWNwLWlucHV0LWNvbnRlbnRcIiB9LCBfdCA9IHsgY2xhc3M6IFwiY2stY3AtaW5wdXQtbGFiZWxcIiB9LCBlbCA9IFtcIm1pblwiLCBcIm1heFwiLCBcInZhbHVlXCJdLCBZID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiSW5wdXROdW1iZXJcIixcbiAgcHJvcHM6IHtcbiAgICBsYWJlbDogeyBkZWZhdWx0OiBcIlwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBtb2RlbFZhbHVlOiB7IGRlZmF1bHQ6IDAsIHR5cGU6IE51bWJlciB9LFxuICAgIG1pbjogeyBkZWZhdWx0OiAwLCB0eXBlOiBOdW1iZXIgfSxcbiAgICBtYXg6IHsgZGVmYXVsdDogMTAwLCB0eXBlOiBOdW1iZXIgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIl0sXG4gIHNldHVwKG4sIHsgZW1pdDogZCB9KSB7XG4gICAgY29uc3QgbyA9IG4sIGEgPSBkLCBpID0gUyhvLm1vZGVsVmFsdWUpO1xuICAgIHdlKCgpID0+IG8ubW9kZWxWYWx1ZSwgKGYsIHYpID0+IHtcbiAgICAgIGYgIT09IHYgJiYgKGkudmFsdWUgPSBmKTtcbiAgICB9LCB7IGltbWVkaWF0ZTogITAgfSk7XG4gICAgY29uc3QgdSA9IChmKSA9PiB7XG4gICAgICBjb25zdCB2ID0gKE4pID0+IHtcbiAgICAgICAgaS52YWx1ZSA9IE4sIGEoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBOKTtcbiAgICAgIH0sIG0gPSBmLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICghbSlcbiAgICAgICAgcmV0dXJuIHYoby5tb2RlbFZhbHVlKTtcbiAgICAgIGlmIChwYXJzZUludChtKSA+IG8ubWF4KVxuICAgICAgICByZXR1cm4gdihvLm1heCk7XG4gICAgICBhKFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgcGFyc2VJbnQobSkpO1xuICAgIH0sIGcgPSAoZikgPT4ge1xuICAgICAgaS52YWx1ZSA9IGYudGFyZ2V0LnZhbHVlO1xuICAgIH0sIHMgPSAoZikgPT4ge1xuICAgICAgaWYgKFtcIktleUVcIiwgXCJFcXVhbFwiLCBcIkVxdWFsXCIsIFwiQmFja3NsYXNoXCIsIFwiU2xhc2hcIiwgXCJOdW1wYWREZWNpbWFsXCIsIFwiTnVtcGFkQWRkXCJdLmluY2x1ZGVzKGYuY29kZSkpXG4gICAgICAgIHJldHVybiBmLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmLmNvZGUgPT09IFwiRW50ZXJcIiAmJiB1KGYpO1xuICAgIH0sIGIgPSB1O1xuICAgIHJldHVybiAoZiwgdikgPT4gKHkoKSwgSShcImRpdlwiLCBadCwgW1xuICAgICAgeChcInNwYW5cIiwgX3QsIHEobi5sYWJlbCksIDEpLFxuICAgICAgeChcImlucHV0XCIsIHtcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgbWluOiBuLm1pbixcbiAgICAgICAgbWF4OiBuLm1heCxcbiAgICAgICAgdmFsdWU6IGkudmFsdWUsXG4gICAgICAgIG9uSW5wdXQ6IGcsXG4gICAgICAgIG9uS2V5ZG93bjogcyxcbiAgICAgICAgb25Gb2N1c291dDogdlswXSB8fCAodlswXSA9IC8vQHRzLWlnbm9yZVxuICAgICAgICAoLi4ubSkgPT4gbWUoYikgJiYgbWUoYikoLi4ubSkpXG4gICAgICB9LCBudWxsLCA0MCwgZWwpXG4gICAgXSkpO1xuICB9XG59KSwgdGwgPSB7IGNsYXNzOiBcImNrLWNwLWlucHV0LWNvbnRlbnQgY29sb3ItaGV4XCIgfSwgbGwgPSAvKiBAX19QVVJFX18gKi8geChcInNwYW5cIiwgeyBjbGFzczogXCJjay1jcC1pbnB1dC1sYWJlbFwiIH0sIFwiSEVYXCIsIC0xKSwgbmwgPSBbXCJ2YWx1ZVwiXSwgYWwgPSAvKiBAX19QVVJFX18gKi8gQSh7XG4gIF9fbmFtZTogXCJJbnB1dEhleFwiLFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHt9XG4gIH0sXG4gIGVtaXRzOiBbXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBvID0gbiwgYSA9IGQsIGkgPSBTKFwiXCIpLCB1ID0gKGYpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBmLnRhcmdldC52YWx1ZTtcbiAgICAgIGkudmFsdWUgPSB2LCBpLnZhbHVlID0gYCMke3YucmVwbGFjZSgvIy9nLCBcIlwiKX1gO1xuICAgIH0sIGcgPSAoZikgPT4ge1xuICAgICAgY29uc3QgdiA9IGYudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHYgPT09IG8ubW9kZWxWYWx1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKCEvXiNbMC05YS1mQS1GXSskLy50ZXN0KHYpKSB7XG4gICAgICAgIGkudmFsdWUgPSBvLm1vZGVsVmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBtID0gdi5yZXBsYWNlKC8jL2csIFwiXCIpO1xuICAgICAgc3dpdGNoIChtLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgbSA9IG8ubW9kZWxWYWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbSA9IG0ucmVwZWF0KDMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtID0gbS5zbGljZSgwLCAzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbSA9IG0uc2xpY2UoMCwgNik7XG4gICAgICB9XG4gICAgICBpLnZhbHVlID0gYCMke20udG9VcHBlckNhc2UoKX1gLCBhKFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgaS52YWx1ZSk7XG4gICAgfSwgcyA9IChmKSA9PiB7XG4gICAgICBmLmNvZGUgPT09IFwiRW50ZXJcIiAmJiBnKGYpO1xuICAgIH0sIGIgPSBnO1xuICAgIHJldHVybiB3ZSgoKSA9PiBvLm1vZGVsVmFsdWUsIChmLCB2KSA9PiB7XG4gICAgICBmICE9PSB2ICYmIChpLnZhbHVlID0gZik7XG4gICAgfSwgeyBpbW1lZGlhdGU6ICEwIH0pLCAoZiwgdikgPT4gKHkoKSwgSShcImRpdlwiLCB0bCwgW1xuICAgICAgbGwsXG4gICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgdmFsdWU6IGkudmFsdWUsXG4gICAgICAgIG9uSW5wdXQ6IHUsXG4gICAgICAgIG9uS2V5ZG93bjogcyxcbiAgICAgICAgb25Gb2N1c291dDogdlswXSB8fCAodlswXSA9IC8vQHRzLWlnbm9yZVxuICAgICAgICAoLi4ubSkgPT4gbWUoYikgJiYgbWUoYikoLi4ubSkpXG4gICAgICB9LCBudWxsLCA0MCwgbmwpXG4gICAgXSkpO1xuICB9XG59KSwgc2wgPSAobikgPT4ge1xuICBjb25zdCBkID0gL15yZ2JcXCgoXFxzKlxcZCtcXHMqKSwoXFxzKlxcZCtcXHMqKSwoXFxzKlxcZCtcXHMqKVxcKSQvaTtcbiAgaWYgKCFkLnRlc3QobikpXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG8gPSBkLmV4ZWMobik7XG4gIGlmICghbylcbiAgICByZXR1cm4gbnVsbDtcbiAgY29uc3QgYSA9IHBhcnNlSW50KG9bMV0udHJpbSgpLCAxMCksIGkgPSBwYXJzZUludChvWzJdLnRyaW0oKSwgMTApLCB1ID0gcGFyc2VJbnQob1szXS50cmltKCksIDEwKTtcbiAgcmV0dXJuIHtcbiAgICByOiBhLFxuICAgIGc6IGksXG4gICAgYjogdVxuICB9O1xufSwgb2wgPSAobikgPT4ge1xuICBjb25zdCBkID0gL15yZ2JhP1xcKChcXHMqXFxkK1xccyopLChcXHMqXFxkK1xccyopLChcXHMqXFxkK1xccyopLChcXHMqW1xcZC5dK1xccyopXFwpJC9pO1xuICBpZiAoIWQudGVzdChuKSlcbiAgICByZXR1cm4gbnVsbDtcbiAgY29uc3QgbyA9IGQuZXhlYyhuKTtcbiAgaWYgKCFvKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCBhID0gcGFyc2VJbnQob1sxXS50cmltKCksIDEwKSwgaSA9IHBhcnNlSW50KG9bMl0udHJpbSgpLCAxMCksIHUgPSBwYXJzZUludChvWzNdLnRyaW0oKSwgMTApLCBnID0gcGFyc2VGbG9hdChvWzRdLnRyaW0oKSk7XG4gIHJldHVybiB7XG4gICAgcjogYSxcbiAgICBnOiBpLFxuICAgIGI6IHUsXG4gICAgYTogZ1xuICB9O1xufSwgcmwgPSAobikgPT4ge1xuICBjb25zdCBkID0gL14jPyhbYS1mXFxkXXs4fSkkL2k7XG4gIGlmICghZC50ZXN0KG4pKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCBvID0gZC5leGVjKG4pO1xuICBpZiAoIW8pXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGEgPSBvWzFdLCBpID0gYS5zdWJzdHJpbmcoNiwgOCksIHUgPSBwYXJzZUludChhLnN1YnN0cmluZygwLCAyKSwgMTYpLCBnID0gcGFyc2VJbnQoYS5zdWJzdHJpbmcoMiwgNCksIDE2KSwgcyA9IHBhcnNlSW50KGEuc3Vic3RyaW5nKDQsIDYpLCAxNiksIGIgPSBwYXJzZUludChpLCAxNikgLyAyNTU7XG4gIHJldHVybiB7IHI6IHUsIGcsIGI6IHMsIGE6IGIgfTtcbn0sIGlsID0gKG4sIGQsIG8sIGEpID0+IHtcbiAgZnVuY3Rpb24gaShmKSB7XG4gICAgY29uc3QgdiA9IGYudG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiB2Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgdiA6IHY7XG4gIH1cbiAgY29uc3QgdSA9IGkoTWF0aC5yb3VuZChuKSksIGcgPSBpKE1hdGgucm91bmQoZCkpLCBzID0gaShNYXRoLnJvdW5kKG8pKSwgYiA9IGkoTWF0aC5yb3VuZChhICogMjU1KSk7XG4gIHJldHVybiBgIyR7dX0ke2d9JHtzfSR7Yn1gO1xufSwgZ2UgPSAobikgPT4ge1xuICB2YXIgZDtcbiAgdHJ5IHtcbiAgICBsZXQgbyA9IChkID0gbi5yZXBsYWNlKFxuICAgICAgL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIChnLCBzLCBiLCBmKSA9PiBcIiNcIiArIHMgKyBzICsgYiArIGIgKyBmICsgZlxuICAgICkuc3Vic3RyaW5nKDEpLm1hdGNoKC8uezJ9L2cpKSA9PSBudWxsID8gdm9pZCAwIDogZC5tYXAoKGcpID0+IHBhcnNlSW50KGcsIDE2KSksIGEgPSBvID09IG51bGwgPyB2b2lkIDAgOiBvWzBdLCBpID0gbyA9PSBudWxsID8gdm9pZCAwIDogb1sxXSwgdSA9IG8gPT0gbnVsbCA/IHZvaWQgMCA6IG9bMl07XG4gICAgcmV0dXJuIE51bWJlci5pc05hTihhKSB8fCBOdW1iZXIuaXNOYU4oaSkgfHwgTnVtYmVyLmlzTmFOKHUpIHx8IGEgPT09IHZvaWQgMCB8fCBpID09PSB2b2lkIDAgfHwgdSA9PT0gdm9pZCAwID8gbnVsbCA6IHtcbiAgICAgIHI6IGEsXG4gICAgICBnOiBpLFxuICAgICAgYjogdVxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59LCBRID0gKG4sIGQsIG8pID0+IHtcbiAgbiA9IG4gLyAyNTUsIGQgPSBkIC8gMjU1LCBvID0gbyAvIDI1NTtcbiAgY29uc3QgYSA9IE1hdGgubWF4KG4sIGQsIG8pLCBpID0gTWF0aC5taW4obiwgZCwgbyk7XG4gIGxldCB1O1xuICByZXR1cm4gYSA9PT0gbiA/IHUgPSAoZCAtIG8pIC8gKGEgLSBpKSA6IGEgPT09IGQgPyB1ID0gMiArIChvIC0gbikgLyAoYSAtIGkpIDogdSA9IDQgKyAobiAtIGQpIC8gKGEgLSBpKSwgdSAqPSA2MCwgdSA8IDAgJiYgKHUgKz0gMzYwKSwgTnVtYmVyLmlzTmFOKHUpICYmICh1ID0gMCksIHU7XG59LCB1bCA9IChuLCBkLCBvKSA9PiB7XG4gIGQgPSBkIC8gMTAwLCBvID0gbyAvIDEwMDtcbiAgbGV0IGEsIGksIHUsIGcgPSBbXTtcbiAgcmV0dXJuIGEgPSAoMSAtIE1hdGguYWJzKDIgKiBvIC0gMSkpICogZCwgaSA9IGEgKiAoMSAtIE1hdGguYWJzKG4gLyA2MCAlIDIgLSAxKSksIHUgPSBvIC0gYSAvIDIsIG4gPj0gMCAmJiBuIDwgNjAgJiYgKGcgPSBbYSwgaSwgMF0pLCBuID49IDYwICYmIG4gPCAxMjAgJiYgKGcgPSBbaSwgYSwgMF0pLCBuID49IDEyMCAmJiBuIDwgMTgwICYmIChnID0gWzAsIGEsIGldKSwgbiA+PSAxODAgJiYgbiA8IDI0MCAmJiAoZyA9IFswLCBpLCBhXSksIG4gPj0gMjQwICYmIG4gPCAzMDAgJiYgKGcgPSBbaSwgMCwgYV0pLCBuID49IDMwMCAmJiBuIDw9IDM2MCAmJiAoZyA9IFthLCAwLCBpXSksIGcubWFwKChzKSA9PiBNYXRoLnJvdW5kKDI1NSAqIChzICsgdSkpKTtcbn0sICRlID0gKG4sIGQsIG8pID0+IFwiI1wiICsgKDE2Nzc3MjE2ICsgKG8gfCBkIDw8IDggfCBuIDw8IDE2KSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpLCBIZSA9IChuLCBkLCBvKSA9PiB7XG4gIGxldCBhID0gdWwobiwgZCwgbyk7XG4gIHJldHVybiB7IHJnYjogYSwgaGV4QTogJGUoYVswXSwgYVsxXSwgYVsyXSkgfTtcbn0sIEVlID0gKG4sIGQsIG8pID0+IHtcbiAgbGV0IGEsIGksIHUsIGcsIHMsIGIsIGYgPSAwLCB2ID0gW107XG4gIGZvciAodlswXSA9IG4gLyAyNTUsIHZbMV0gPSBkIC8gMjU1LCB2WzJdID0gbyAvIDI1NSwgYSA9IHZbMF0sIGkgPSB2WzBdLCBiID0gMCwgdSA9IDA7IHUgPCB2Lmxlbmd0aCAtIDE7IHUrKylcbiAgICB2W3UgKyAxXSA8PSBhICYmIChhID0gdlt1ICsgMV0pLCB2W3UgKyAxXSA+PSBpICYmIChpID0gdlt1ICsgMV0sIGIgPSB1ICsgMSk7XG4gIHJldHVybiBiID09PSAwICYmIChmID0gKHZbMV0gLSB2WzJdKSAvIChpIC0gYSkpLCBiID09PSAxICYmIChmID0gMiArICh2WzJdIC0gdlswXSkgLyAoaSAtIGEpKSwgYiA9PT0gMiAmJiAoZiA9IDQgKyAodlswXSAtIHZbMV0pIC8gKGkgLSBhKSksIGlzTmFOKGYpICYmIChmID0gMCksIGYgPSBmICogNjAsIGYgPCAwICYmIChmID0gZiArIDM2MCksIGcgPSAoYSArIGkpIC8gMiwgYSA9PT0gaSA/IHMgPSAwIDogZyA8IDAuNSA/IHMgPSAoaSAtIGEpIC8gKGkgKyBhKSA6IHMgPSAoaSAtIGEpIC8gKDIgLSBpIC0gYSksIHMgPSBzLCB7IGg6IGYsIHMsIGw6IGcgfTtcbn0sIFllID0gKG4sIGQsIG8pID0+IHtcbiAgbiA9IG4gJSAzNjAgLyAzNjAsIGQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBkKSksIG8gPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBvKSk7XG4gIGxldCBhLCBpLCB1O1xuICBpZiAoZCA9PT0gMClcbiAgICBhID0gaSA9IHUgPSBvO1xuICBlbHNlIHtcbiAgICBjb25zdCBnID0gKGYsIHYsIG0pID0+IChtIDwgMCAmJiAobSArPSAxKSwgbSA+IDEgJiYgKG0gLT0gMSksIG0gPCAwLjE2NjY2NjY2NjY2NjY2NjY2ID8gZiArICh2IC0gZikgKiA2ICogbSA6IG0gPCAwLjUgPyB2IDogbSA8IDAuNjY2NjY2NjY2NjY2NjY2NiA/IGYgKyAodiAtIGYpICogKDAuNjY2NjY2NjY2NjY2NjY2NiAtIG0pICogNiA6IGYpLCBzID0gbyA8IDAuNSA/IG8gKiAoMSArIGQpIDogbyArIGQgLSBvICogZCwgYiA9IDIgKiBvIC0gcztcbiAgICBhID0gZyhiLCBzLCBuICsgMSAvIDMpLCBpID0gZyhiLCBzLCBuKSwgdSA9IGcoYiwgcywgbiAtIDEgLyAzKTtcbiAgfVxuICByZXR1cm4gYSA9IE1hdGgucm91bmQoYSAqIDI1NSksIGkgPSBNYXRoLnJvdW5kKGkgKiAyNTUpLCB1ID0gTWF0aC5yb3VuZCh1ICogMjU1KSwgeyByOiBhLCBnOiBpLCBiOiB1IH07XG59LCBjbCA9IChuLCBkLCBvKSA9PiB7XG4gIGxldCBhID0gMCwgaSA9IDAsIHUgPSAwO1xuICBjb25zdCBnID0gbiAvIDYwLCBzID0gbyAqIGQsIGIgPSBzICogKDEgLSBNYXRoLmFicyhnICUgMiAtIDEpKSwgZiA9IG8gLSBzO1xuICBzd2l0Y2ggKE1hdGguZmxvb3IoZykgJSA2KSB7XG4gICAgY2FzZSAwOlxuICAgICAgYSA9IHMsIGkgPSBiLCB1ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIGEgPSBiLCBpID0gcywgdSA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBhID0gMCwgaSA9IHMsIHUgPSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgYSA9IDAsIGkgPSBiLCB1ID0gcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGEgPSBiLCBpID0gMCwgdSA9IHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBhID0gcywgaSA9IDAsIHUgPSBiO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByOiBNYXRoLnJvdW5kKChhICsgZikgKiAyNTUpLFxuICAgIGc6IE1hdGgucm91bmQoKGkgKyBmKSAqIDI1NSksXG4gICAgYjogTWF0aC5yb3VuZCgodSArIGYpICogMjU1KVxuICB9O1xufSwgZGwgPSAobiwgZCwgbykgPT4ge1xuICBuIC89IDI1NSwgZCAvPSAyNTUsIG8gLz0gMjU1O1xuICBjb25zdCBhID0gTWF0aC5tYXgobiwgZCwgbyksIGkgPSBNYXRoLm1pbihuLCBkLCBvKTtcbiAgbGV0IHUsIGcsIHMgPSBhO1xuICBjb25zdCBiID0gYSAtIGk7XG4gIGlmIChhICE9PSAwKVxuICAgIGcgPSBiIC8gYTtcbiAgZWxzZVxuICAgIHJldHVybiB7IGg6IDAsIHM6IDAsIHY6IDAgfTtcbiAgcmV0dXJuIGIgPT09IDAgPyB1ID0gMCA6IGEgPT09IG4gPyB1ID0gNjAgKiAoKGQgLSBvKSAvIGIgJSA2KSA6IGEgPT09IGQgPyB1ID0gNjAgKiAoKG8gLSBuKSAvIGIgKyAyKSA6IHUgPSA2MCAqICgobiAtIGQpIC8gYiArIDQpLCB1IDwgMCAmJiAodSArPSAzNjApLCB7XG4gICAgaDogTWF0aC5yb3VuZCh1KSxcbiAgICBzOiBNYXRoLnJvdW5kKGcgKiAxMDApIC8gMTAwLFxuICAgIHY6IE1hdGgucm91bmQocyAqIDEwMCkgLyAxMDBcbiAgfTtcbn0sIHBsID0gKG4sIGQsIG8pID0+IHtcbiAgY29uc3QgYSA9ICgyIC0gZCkgKiBvIC8gMiwgaSA9IGEgJiYgYSA8IDEgPyBkICogbyAvIChhIDwgMC41ID8gYSAqIDIgOiAyIC0gYSAqIDIpIDogZDtcbiAgcmV0dXJuIHsgaDogbiwgczogaSwgbDogYSB9O1xufSwgZ2wgPSAobiwgZCwgbywgYSkgPT4ge1xuICBjb25zdCBpID0gTWF0aC5yb3VuZCgyNTUgKiAoMSAtIG4pICogKDEgLSBhKSksIHUgPSBNYXRoLnJvdW5kKDI1NSAqICgxIC0gZCkgKiAoMSAtIGEpKSwgZyA9IE1hdGgucm91bmQoMjU1ICogKDEgLSBvKSAqICgxIC0gYSkpO1xuICByZXR1cm4ge1xuICAgIHI6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgaSkpLFxuICAgIGc6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgdSkpLFxuICAgIGI6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgZykpXG4gIH07XG59LCB2bCA9IChuLCBkLCBvKSA9PiB7XG4gIG4gPSBuIC8gMjU1LCBkID0gZCAvIDI1NSwgbyA9IG8gLyAyNTU7XG4gIGNvbnN0IGEgPSAxIC0gTWF0aC5tYXgobiwgZCwgbyksIGkgPSAoMSAtIG4gLSBhKSAvICgxIC0gYSksIHUgPSAoMSAtIGQgLSBhKSAvICgxIC0gYSksIGcgPSAoMSAtIG8gLSBhKSAvICgxIC0gYSk7XG4gIHJldHVybiB7XG4gICAgYzogaXNOYU4oaSkgPyAwIDogaSxcbiAgICBtOiBpc05hTih1KSA/IDAgOiB1LFxuICAgIHk6IGlzTmFOKGcpID8gMCA6IGcsXG4gICAgazogaXNOYU4oYSkgPyAwIDogYVxuICB9O1xufSwgbWwgPSBbXCJjcC10aGVtZVwiXSwgZmwgPSB7IGlkOiBcImNrLWNwLXRhcmdldC1iYWNrZ3JvdW5kXCIgfSwgaGwgPSB7XG4gIGtleTogMixcbiAgY2xhc3M6IFwiY2stY3AtaW5wdXQtY29udGFpbmVyXCJcbn0sIHlsID0ge1xuICBrZXk6IDMsXG4gIGNsYXNzOiBcImNrLWNwLWxvY2FsLWNvbG9yLWNvbmF0aW5lclwiXG59LCBibCA9IFtcIm9uQ2xpY2tcIl0sICRsID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiVnVlM0NvbG9yUGlja2VyXCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogeyBkZWZhdWx0OiBcIlwiIH0sXG4gICAgbW9kZToge1xuICAgICAgZGVmYXVsdDogXCJncmFkaWVudFwiLFxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICB0eXBlOiB7IGRlZmF1bHQ6IFwiSEVYOFwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBpbnB1dFR5cGU6IHsgZGVmYXVsdDogXCJSR0JcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgdGhlbWU6IHsgZGVmYXVsdDogXCJsaWdodFwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBjb2xvckxpc3RDb3VudDogeyBkZWZhdWx0OiAxOCwgdHlwZTogTnVtYmVyIH0sXG4gICAgc2hvd0NvbG9yTGlzdDogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIHNob3dFeWVEcm9wOiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0FscGhhOiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0lucHV0TWVudTogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIHNob3dJbnB1dFNldDogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIGRpc2FibGVkOiB7IGRlZmF1bHQ6ICExLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgbG9jYWw6IHtcbiAgICAgIGRlZmF1bHQ6IHsgYW5nbGU6IFwiXCIsIHBvc2l0aW9uWDogXCJcIiwgcG9zaXRpb25ZOiBcIlwiIH0sXG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9LFxuICAgIGljb25DbGFzc2VzOiB7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxpbmVhcjogXCJcIixcbiAgICAgICAgcmFkaWFsOiBcIlwiLFxuICAgICAgICBydWxlcjogXCJcIixcbiAgICAgICAgZXllRHJvcGVyOiBcIlwiLFxuICAgICAgICBpbnB1dE1lbnU6IFwiXCIsXG4gICAgICAgIHNhdmU6IFwiXCIsXG4gICAgICAgIGRlbGV0ZTogXCJcIlxuICAgICAgfSxcbiAgICAgIHR5cGU6IE9iamVjdFxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTptb2RlbFZhbHVlXCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBuLCBhID0gUyhudWxsKSwgaSA9IGQsIHUgPSBTKG8ubW9kZWxWYWx1ZSksIGcgPSAobCkgPT4ge1xuICAgICAgdS52YWx1ZSA9IGwsIGkoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBsKTtcbiAgICB9LCBzID0gUyhbXG4gICAgICB7IGlkOiAxLCByOiA2OCwgZzogNzEsIGI6IDExOSwgYTogMTAwLCBwZXJjZW50OiAwLCBodWU6IDAsIHNlbGVjdDogITAgfSxcbiAgICAgIHsgaWQ6IDIsIHI6IDAsIGc6IDAsIGI6IDI1NSwgYTogMTAwLCBwZXJjZW50OiAxMDAsIGh1ZTogMCwgc2VsZWN0OiAhMSB9XG4gICAgXSksIGIgPSBTKFtdKSwgZiA9IFMoITEpLCB2ID0gUyhcImxpbmVhclwiKSwgbSA9IHBlKHtcbiAgICAgIGFuZ2xlOiA5MCxcbiAgICAgIHBlcmNlbnRhZ2VYOiA1MCxcbiAgICAgIHBlcmNlbnRhZ2VZOiA1MFxuICAgIH0pLCBOID0gUyhcIlwiKSwgTCA9IFMoby5pbnB1dFR5cGUpLCByZSA9IFMoITEpLCB4ZSA9IFMoKSwgaWUgPSBTKCksIEYgPSBTKCksIFAgPSBTKCksIE0gPSBTKCksIEggPSBwZSh7XG4gICAgICBoOiAwLFxuICAgICAgczogMCxcbiAgICAgIGw6IDBcbiAgICB9KSwgRCA9IHBlKHtcbiAgICAgIGg6IDAsXG4gICAgICBzOiAwLFxuICAgICAgdjogMFxuICAgIH0pLCBCID0gcGUoe1xuICAgICAgYzogMCxcbiAgICAgIG06IDAsXG4gICAgICB5OiAwLFxuICAgICAgazogMFxuICAgIH0pO1xuICAgIHNlKFwiZ3JhZGllbnRCYXJcIiwgaWUpLCBzZShcImNhbnZhc1wiLCBGKSwgc2UoXCJwaWNrZXJXcmFwXCIsIFApLCBzZShcInBpY2tlclBvaW50ZXJcIiwgTSksIHNlKFwib3BhY2l0eVNsaWRlclwiLCB4ZSk7XG4gICAgbGV0IGVlID0gMCwgdGUgPSAwLCBDZSA9IDAsIEllID0gMCwgbGUgPSAwLCBuZSA9IDA7XG4gICAgY29uc3QgT2UgPSAobCkgPT4ge1xuICAgICAgIVAudmFsdWUgfHwgIU0udmFsdWUgfHwgKGxlID0gUC52YWx1ZS5vZmZzZXRIZWlnaHQgLSBNLnZhbHVlLm9mZnNldEhlaWdodCwgbmUgPSBQLnZhbHVlLm9mZnNldFdpZHRoIC0gTS52YWx1ZS5vZmZzZXRXaWR0aCwgQ2UgPSBsLmNsaWVudFggLSBsLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LCBJZSA9IGwuY2xpZW50WSAtIGwudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCwgZWUgPSBDZSAtIE0udmFsdWUub2Zmc2V0V2lkdGggLyAyLCB0ZSA9IEllIC0gTS52YWx1ZS5vZmZzZXRIZWlnaHQgLyAyLCBNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtlZX1weGAsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7dGV9cHhgLCBmZSghMSksIEooKSwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgTWUpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgVmUpKTtcbiAgICB9LCBNZSA9IChsKSA9PiB7XG4gICAgICBsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBlID0gUC52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdCA9IGwuY2xpZW50WCAtIGUubGVmdCAtIE0udmFsdWUub2Zmc2V0V2lkdGggLyAyLCByID0gbC5jbGllbnRZIC0gZS50b3AgLSBNLnZhbHVlLm9mZnNldEhlaWdodCAvIDI7XG4gICAgICB0ID49IDAgJiYgdCA8PSBuZSA/IChlZSA9IHQsIE0udmFsdWUuc3R5bGUubGVmdCA9IGAke3R9cHhgKSA6IDAgPiB0ID8gKGVlID0gMCwgTS52YWx1ZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIikgOiB0ID4gbmUgJiYgKGVlID0gbmUsIE0udmFsdWUuc3R5bGUubGVmdCA9IGAke25lfXB4YCksIHIgPj0gMCAmJiByIDw9IGxlID8gKHRlID0gciwgTS52YWx1ZS5zdHlsZS50b3AgPSBgJHtyfXB4YCkgOiAwID4gciA/ICh0ZSA9IDAsIE0udmFsdWUuc3R5bGUudG9wID0gXCIwcHhcIikgOiByID4gbGUgJiYgKHRlID0gbGUsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7bGV9cHhgKSwgZmUoITEpLCBKKCk7XG4gICAgfSwgVmUgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBNZSksIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBWZSk7XG4gICAgfSwgZmUgPSAobCkgPT4ge1xuICAgICAgaWYgKCFsKSB7XG4gICAgICAgIGxldCBlID0gVWUoKTtcbiAgICAgICAgY29uc3QgdCA9IFllKEsudmFsdWUsIGUucywgZS5sKTtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICBpZiAocmUudmFsdWUpIHtcbiAgICAgICAgICAgIGxldCByID0gcy52YWx1ZS5maW5kKChjKSA9PiBjLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgICAgICByICYmIChyLnIgPSB0LnIsIHIuZyA9IHQuZywgci5iID0gdC5iKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgVSgpLCBFKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBLID0gUygwKSwgaGUgPSBhc3luYyAobCkgPT4ge1xuICAgICAgY29uc3QgeyByZ2I6IGUgfSA9IEhlKEsudmFsdWUsIDEwMCwgNTApO1xuICAgICAgUmUoZSksIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmZShsKSwgSigpO1xuICAgICAgfSwgMCk7XG4gICAgfSwgVWUgPSAoKSA9PiB7XG4gICAgICBsZXQgbCA9IHsgczogMCwgbDogMCB9LCBlID0gUC52YWx1ZS5vZmZzZXRXaWR0aCAtIE0udmFsdWUub2Zmc2V0V2lkdGgsIHQgPSBQLnZhbHVlLm9mZnNldEhlaWdodCAtIE0udmFsdWUub2Zmc2V0SGVpZ2h0LCByID0gcGFyc2VJbnQoTS52YWx1ZS5zdHlsZS5sZWZ0KSwgcCA9IDEgLSBwYXJzZUludChNLnZhbHVlLnN0eWxlLnRvcCkgLyB0LCBrID0gciAvIGU7XG4gICAgICByZXR1cm4gbC5sID0gcCAvIDIgKiAoMiAtIGspLCBsLnMgPSBwICogayAvICgxIC0gTWF0aC5hYnMoMiAqIGwubCAtIDEpKSwgTnVtYmVyLmlzTmFOKGwucykgJiYgKGwucyA9IGwubCksIGwubCA9IGwubCA+IDEgPyAxIDogbC5sLCBsLnMgPSBsLnMgPiAxID8gMSA6IGwucywgbDtcbiAgICB9LCBhZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGNvbnN0IHsgbDogZSwgczogdCB9ID0gRWUobC5yLCBsLmcsIGwuYik7XG4gICAgICAgIGxldCByID0gZSwgYyA9IHQ7XG4gICAgICAgIE51bWJlci5pc05hTihjKSAmJiAoYyA9IHIpO1xuICAgICAgICBsZXQgcCA9IHsgeDogMCwgeTogMCB9LCBrID0gUC52YWx1ZS5vZmZzZXRXaWR0aCAtIE0udmFsdWUub2Zmc2V0V2lkdGgsIEMgPSBQLnZhbHVlLm9mZnNldEhlaWdodCAtIE0udmFsdWUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBbJCwgaF0gPSAyICogciAtIDEgPCAwID8gW1xuICAgICAgICAgIGsgKiAyICogYyAvICgxICsgYyksXG4gICAgICAgICAgQyAqICgxIC0gciAqICgxICsgYykpXG4gICAgICAgIF0gOiBbXG4gICAgICAgICAgLWsgKiAyICogKHIgLSAxKSAqIGMgLyAociArIGMgLSByICogYyksXG4gICAgICAgICAgQyAqIChyIC0gMSkgKiAoYyAtIDEpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBwLnggPSAkLCBwLnkgPSBoLCBwO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIEdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgbCA9IHMudmFsdWUuZmluZCgoZSkgPT4gZS5zZWxlY3QgPT0gITApO1xuICAgICAgbCAmJiAobC5odWUgPSBLLnZhbHVlKTtcbiAgICB9LCBqID0gUygxMDApLCBQZSA9IChsKSA9PiB7XG4gICAgICBpZiAoby5zaG93QWxwaGEpIHtcbiAgICAgICAgY29uc3QgZSA9IGwudGFyZ2V0LCB0ID0gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgIHQgJiYgKHQuYSA9IHBhcnNlSW50KGUudmFsdWUpLCBFKCkpO1xuICAgICAgfVxuICAgIH0sIHplID0gKGwpID0+IHtcbiAgICAgIHZhciB0LCByLCBjLCBwO1xuICAgICAgY29uc3QgZSA9IChyID0gKHQgPSBhLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogdC5xdWVyeVNlbGVjdG9yKFwiLmdyYWRpZW50LWhhbmRsZS1jb250ZW50XCIpKSA9PSBudWxsID8gdm9pZCAwIDogci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiBsID09PSAwID8gXCIwcHhcIiA6IGwgPT09IDEwMCAmJiBlID8gYCR7KCgoYyA9IGllLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogYy5vZmZzZXRXaWR0aCkgfHwgMCkgLSAoZS53aWR0aCB8fCAwKX1weGAgOiBgJHsoKChwID0gaWUudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBwLm9mZnNldFdpZHRoKSB8fCAwKSAqIChsIC8gMTAwKSAtICgoZSA9PSBudWxsID8gdm9pZCAwIDogZS53aWR0aCkgfHwgMCkgLyAyfXB4YDtcbiAgICB9O1xuICAgIGxldCBYID0gbnVsbCwgTyA9IG51bGw7XG4gICAgY29uc3QgTmUgPSAobCkgPT4ge1xuICAgICAgdmFyIHIsIGM7XG4gICAgICBjb25zdCB0ID0gbC50YXJnZXQub2Zmc2V0UGFyZW50O1xuICAgICAgaWYgKChyID0gdCA9PSBudWxsID8gdm9pZCAwIDogdC5pZCkgIT0gbnVsbCAmJiByLmluY2x1ZGVzKFwiY2xyLWdiLVwiKSkge1xuICAgICAgICBjb25zdCBwID0gdC5pZC5yZXBsYWNlKFwiY2xyLWdiLVwiLCBcIlwiKTtcbiAgICAgICAgTyA9IHQ7XG4gICAgICAgIGNvbnN0IGsgPSBzLnZhbHVlLmZpbmQoKEMpID0+IEMuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgaWYgKGsgJiYgay5pZCAhPSBwKSB7XG4gICAgICAgICAgY29uc3QgQyA9IChjID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmdyYWRpZW50LWhhbmRsZS5zZWxlY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgQyA9PSBudWxsIHx8IEMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdFwiKSwgdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0XCIpO1xuICAgICAgICAgIGNvbnN0ICQgPSBzLnZhbHVlLmZpbmRJbmRleChcbiAgICAgICAgICAgIChoKSA9PiBoLnNlbGVjdCA9PSAhMFxuICAgICAgICAgICk7XG4gICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBzLnZhbHVlLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ID0gcy52YWx1ZVtoXTtcbiAgICAgICAgICAgIGlmICh3LmlkID09IHApIHtcbiAgICAgICAgICAgICAgJCAhPSAtMSAmJiAocy52YWx1ZVskXS5zZWxlY3QgPSAhMSksIHMudmFsdWVbaF0uc2VsZWN0ID0gITAsIGoudmFsdWUgPSB3LmEsIFcody5yLCB3LmcsIHcuYiwgdy5odWUsICEwKSwgVSgpLCBKKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBTZSksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBBZSk7XG4gICAgICB9XG4gICAgfSwgQWUgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBTZSksIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBOZSk7XG4gICAgfSwgU2UgPSAobCkgPT4ge1xuICAgICAgdmFyIHAsIGs7XG4gICAgICBsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBlID0gKGsgPSAocCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBwLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JhZGllbnQtaGFuZGxlLWNvbnRlbnRcIikpID09IG51bGwgPyB2b2lkIDAgOiBrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0ID0gWCA9PSBudWxsID8gdm9pZCAwIDogWC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgciA9ICh0ID09IG51bGwgPyB2b2lkIDAgOiB0LndpZHRoKSAtIChlID09IG51bGwgPyB2b2lkIDAgOiBlLndpZHRoKTtcbiAgICAgIGxldCBjID0gbC5jbGllbnRYIC0gKCh0ID09IG51bGwgPyB2b2lkIDAgOiB0LmxlZnQpIHx8IDApIC0gKChlID09IG51bGwgPyB2b2lkIDAgOiBlLndpZHRoKSB8fCAwKSAvIDI7XG4gICAgICBpZiAoYyA8IDAgPyBjID0gMCA6IGMgPiByICYmIChjID0gciksIE8pIHtcbiAgICAgICAgTy5zdHlsZS5sZWZ0ID0gYCR7Y31weGA7XG4gICAgICAgIGNvbnN0IEMgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgIChjIC8gKCh0ID09IG51bGwgPyB2b2lkIDAgOiB0LndpZHRoKSAtIChlID09IG51bGwgPyB2b2lkIDAgOiBlLndpZHRoKSkgKiAxMDApLnRvRml4ZWQoMClcbiAgICAgICAgKSwgJCA9IHMudmFsdWUuZmluZChcbiAgICAgICAgICAoaCkgPT4gaC5pZCA9PSAoTyA9PSBudWxsID8gdm9pZCAwIDogTy5pZC5yZXBsYWNlKFwiY2xyLWdiLVwiLCBcIlwiKSlcbiAgICAgICAgKTtcbiAgICAgICAgJCAmJiAoJC5wZXJjZW50ID0gQyksIEUoKTtcbiAgICAgIH1cbiAgICB9LCBLZSA9IChsKSA9PiB7XG4gICAgICB2YXIgQywgJDtcbiAgICAgIGNvbnN0IGUgPSBYID09IG51bGwgPyB2b2lkIDAgOiBYLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGwuY2xpZW50WCAtICgoZSA9PSBudWxsID8gdm9pZCAwIDogZS5sZWZ0KSB8fCAwKSkgLyAoKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUud2lkdGgpIHx8IDEpICogMTAwXG4gICAgICApLCByID0gcy52YWx1ZS5maW5kSW5kZXgoKGgpID0+IGguc2VsZWN0ID09ICEwKSwgYyA9IHMudmFsdWVbcl0sIHAgPSB7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICByOiBjLnIsXG4gICAgICAgIGc6IGMuZyxcbiAgICAgICAgYjogYy5iLFxuICAgICAgICBhOiBjLmEsXG4gICAgICAgIHBlcmNlbnQ6IHQsXG4gICAgICAgIGh1ZTogYy5odWUsXG4gICAgICAgIHNlbGVjdDogITBcbiAgICAgIH07XG4gICAgICBzLnZhbHVlW3JdLnNlbGVjdCA9ICExO1xuICAgICAgY29uc3QgayA9IChDID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IEMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZ3JhZGllbnQtaGFuZGxlLnNlbGVjdFwiXG4gICAgICApO1xuICAgICAgayA9PSBudWxsIHx8IGsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdFwiKSwgcy52YWx1ZSA9IFsuLi5zLnZhbHVlLCBwXSwgRGUocCksIE8gPSAoJCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiAkLnF1ZXJ5U2VsZWN0b3IoYCNjbHItZ2ItJHtwLmlkfWApLCBFKCk7XG4gICAgfSwgQmUgPSAobCkgPT4ge1xuICAgICAgaWYgKGwuciA9PSAwICYmIGwuZyA9PSAwICYmIGwuYiA9PSAwKVxuICAgICAgICByZXR1cm4gITA7XG4gICAgICBpZiAobC5yID09IDI1NSAmJiBsLmcgPT0gMjU1ICYmIGwuYiA9PSAyNTUpXG4gICAgICAgIHJldHVybiAhMDtcbiAgICAgIHtcbiAgICAgICAgY29uc3QgZSA9IEYudmFsdWUuZ2V0Q29udGV4dChcIjJkXCIsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiAhMCB9KSwgdCA9IEYudmFsdWUud2lkdGgsIHIgPSBGLnZhbHVlLmhlaWdodCwgYyA9IGUuZ2V0SW1hZ2VEYXRhKDAsIDAsIHQsIHIpLmRhdGEsIHAgPSBsLnIsIGsgPSBsLmcsIEMgPSBsLmI7XG4gICAgICAgIGZvciAobGV0ICQgPSAwOyAkIDwgcjsgJCsrKVxuICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgdDsgaCsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ID0gKCQgKiB0ICsgaCkgKiA0LCB6ID0gY1t3XSwgZXQgPSBjW3cgKyAxXSwgdHQgPSBjW3cgKyAyXTtcbiAgICAgICAgICAgIGlmICh6ID09PSBwICYmIGV0ID09PSBrICYmIHR0ID09PSBDKVxuICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9XG4gICAgfSwgVyA9IChsLCBlLCB0LCByLCBjKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKEJlKHsgcjogbCwgZzogZSwgYjogdCB9KSkge1xuICAgICAgICAgIGxldCBwID0gYWUoKTtcbiAgICAgICAgICBwICYmIChNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtwLnh9cHhgLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAke3AueX1weGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBwID0gYWUoKTtcbiAgICAgICAgICBwICYmIChNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtwLnh9cHhgLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAke3AueX1weGApLCBLLnZhbHVlID0gciwgaGUoYyk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH0sIExlID0gKCkgPT4ge1xuICAgICAgcy52YWx1ZS5mb3JFYWNoKCh0KSA9PiBEZSh0KSksIFdlKCk7XG4gICAgICBjb25zdCBsID0gcy52YWx1ZVswXTtcbiAgICAgIEsudmFsdWUgPSBsLmh1ZSwgaGUoITApO1xuICAgICAgbGV0IGUgPSBhZSgpO1xuICAgICAgZSAmJiAoTS52YWx1ZS5zdHlsZS5sZWZ0ID0gYCR7ZS54fXB4YCwgTS52YWx1ZS5zdHlsZS50b3AgPSBgJHtlLnl9cHhgKSwgVSgpLCBFKCk7XG4gICAgfSwgRGUgPSAobCkgPT4ge1xuICAgICAgaWYgKG8ubW9kZSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlLmlkID0gYGNsci1nYi0ke2wuaWR9YCwgZS5jbGFzc0xpc3QuYWRkKFwiZ3JhZGllbnQtaGFuZGxlXCIpLCBlLnN0eWxlLmxlZnQgPSB6ZShsLnBlcmNlbnQpO1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHQuY2xhc3NMaXN0LmFkZChcImdyYWRpZW50LWhhbmRsZS1jb250ZW50XCIpLCBsLnNlbGVjdCA9PSAhMCAmJiBlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIiksIGUuYXBwZW5kQ2hpbGQodCksIFggJiYgWC5hcHBlbmRDaGlsZChlKTtcbiAgICAgIH1cbiAgICB9LCBSZSA9IChsKSA9PiB7XG4gICAgICBjb25zdCBlID0gRi52YWx1ZS5nZXRDb250ZXh0KFwiMmRcIiwgeyB3aWxsUmVhZEZyZXF1ZW50bHk6ICEwIH0pLCB0ID0gRi52YWx1ZS53aWR0aCwgciA9IEYudmFsdWUuaGVpZ2h0O1xuICAgICAgZS5maWxsU3R5bGUgPSBgcmdiKCR7bFswXX0sJHtsWzFdfSwke2xbMl19KWAsIGUuZmlsbFJlY3QoMCwgMCwgdCwgcik7XG4gICAgICBsZXQgYyA9IGUuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdCAtIDEyLCAwKTtcbiAgICAgIGMuYWRkQ29sb3JTdG9wKDAsIFwicmdiKDI1NSwyNTUsMjU1KVwiKSwgYy5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIpLCBlLmZpbGxTdHlsZSA9IGMsIGUuZmlsbFJlY3QoMCwgMCwgdCwgcik7XG4gICAgICBsZXQgcCA9IGUuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgcik7XG4gICAgICBwLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMCwwLDAsMClcIiksIHAuYWRkQ29sb3JTdG9wKDEsIFwicmdiKDAsMCwwKVwiKSwgZS5maWxsU3R5bGUgPSBwLCBlLmZpbGxSZWN0KDAsIDAsIHQsIHIpO1xuICAgIH0sIFUgPSAoKSA9PiB7XG4gICAgICBpZiAoby5zaG93QWxwaGEpIHtcbiAgICAgICAgbGV0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgbCAmJiAoeGUudmFsdWUuc3R5bGUuYmFja2dyb3VuZCA9IGAgbGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoJHtsLnJ9LCAke2wuZ30sICR7bC5ifSwgMTAwKSA5NyUpYCk7XG4gICAgICB9XG4gICAgfSwgRSA9ICgpID0+IHtcbiAgICAgIHZhciBsO1xuICAgICAgaWYgKG8ubW9kZSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICAgICAgcy52YWx1ZS5zb3J0KChjLCBwKSA9PiBjLnBlcmNlbnQgLSBwLnBlcmNlbnQpO1xuICAgICAgICBsZXQgZSA9IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCBcIiwgdDtcbiAgICAgICAgaWYgKHYudmFsdWUgPT0gXCJsaW5lYXJcIikge1xuICAgICAgICAgIHQgPSBgbGluZWFyLWdyYWRpZW50KCR7bS5hbmdsZX1kZWcsIGA7XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBzLnZhbHVlLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBjb25zdCB7IHI6IHAsIGc6IGssIGI6IEMsIGE6ICQsIHBlcmNlbnQ6IGggfSA9IHMudmFsdWVbY107XG4gICAgICAgICAgICBzLnZhbHVlLmxlbmd0aCAtIDEgPT0gYyA/IChlID0gZSArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lKWAsIHQgPSB0ICsgYHJnYmEoJHtwfSwke2t9LCR7Q30sJHskIC8gMTAwfSkgJHtofSUpYCkgOiAoZSA9IGUgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSwgYCwgdCA9IHQgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSwgYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQgPSBgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAke20ucGVyY2VudGFnZVh9JSAke20ucGVyY2VudGFnZVl9JSwgYDtcbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHMudmFsdWUubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcjogcCwgZzogaywgYjogQywgYTogJCwgcGVyY2VudDogaCB9ID0gcy52YWx1ZVtjXTtcbiAgICAgICAgICAgIHMudmFsdWUubGVuZ3RoIC0gMSA9PSBjID8gKGUgPSBlICsgYHJnYmEoJHtwfSwke2t9LCR7Q30sJHskIC8gMTAwfSkgJHtofSUpYCwgdCA9IHQgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSlgKSA6IChlID0gZSArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lLCBgLCB0ID0gdCArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lLCBgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWUudmFsdWUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZTtcbiAgICAgICAgbGV0IHIgPSAobCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBsLnF1ZXJ5U2VsZWN0b3IoXCIjY2stY3AtdGFyZ2V0LWJhY2tncm91bmRcIik7XG4gICAgICAgIHIgJiYgKHIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdCwgcmUudmFsdWUgJiYgZyhyLnN0eWxlLmJhY2tncm91bmRJbWFnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyByOiBlLCBnOiB0LCBiOiByLCBhOiBjIH0gPSBzLnZhbHVlWzBdO1xuICAgICAgICBsZXQgcCA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoby50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcIkhFWDhcIjpcbiAgICAgICAgICAgIHAgPSBpbChlLCB0LCByLCBjIC8gMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSR0JBXCI6XG4gICAgICAgICAgICBwID0gYHJnYmEoJHtlfSwke3R9LCR7cn0sJHtjIC8gMTAwfSlgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlJHQlwiOlxuICAgICAgICAgICAgcCA9IGByZ2IoJHtlfSwke3R9LCR7cn0pYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJIRVhcIjpcbiAgICAgICAgICAgIHAgPSAkZShlLCB0LCByKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGcocCk7XG4gICAgICB9XG4gICAgfSwgV2UgPSAoKSA9PiB7XG4gICAgICBzLnZhbHVlLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgbC5odWUgPSBRKGwuciwgbC5nLCBsLmIpO1xuICAgICAgfSk7XG4gICAgfSwgRmUgPSAobCkgPT4ge1xuICAgICAgdi52YWx1ZSA9IGwsIEUoKTtcbiAgICB9LCBxZSA9ICgpID0+IHtcbiAgICAgIHZhciBsLCBlO1xuICAgICAgaWYgKHMudmFsdWUubGVuZ3RoID4gMikge1xuICAgICAgICBjb25zdCB0ID0gcy52YWx1ZS5maW5kSW5kZXgoKHIpID0+IHIuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgaWYgKHQgIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgciA9IHMudmFsdWVbdF0uaWQ7XG4gICAgICAgICAgcy52YWx1ZS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgY29uc3QgYyA9IChsID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGwucXVlcnlTZWxlY3RvcihgI2Nsci1nYi0ke3J9YCk7XG4gICAgICAgICAgYyA9PSBudWxsIHx8IGMucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc3QgcCA9IHMudmFsdWVbMF07XG4gICAgICAgICAgcCAmJiAocC5zZWxlY3QgPSAhMCwgTyA9IChlID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGUucXVlcnlTZWxlY3RvcihgI2Nsci1nYi0ke3AuaWR9YCksIE8gPT0gbnVsbCB8fCBPLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIiksIFcocC5yLCBwLmcsIHAuYiwgcC5odWUsICExKSwgSigpLCBFKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgamUgPSAoKSA9PiB7XG4gICAgICB2YXIgdDtcbiAgICAgIGNvbnN0IGwgPSAodCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiB0LnF1ZXJ5U2VsZWN0b3IoXCIjY3AtYnRuLWV5ZWRyb3BwZXJcIik7XG4gICAgICBsID09IG51bGwgfHwgbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLCBuZXcgRXllRHJvcHBlcigpLm9wZW4oKS50aGVuKChyKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc1JHQkhleDogYyB9ID0gciwgcCA9IHMudmFsdWUuZmluZCgoQykgPT4gQy5zZWxlY3QgPT0gITApLCBrID0gZ2UoYyk7XG4gICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgY29uc3QgQyA9IFEoay5yLCBrLmcsIGsuYik7XG4gICAgICAgICAgaWYgKHAgJiYgKHAuaHVlID0gQywgcC5yID0gay5yLCBwLmcgPSBrLmcsIHAuYiA9IGsuYiksIEJlKGspKSB7XG4gICAgICAgICAgICBjb25zdCAkID0gYWUoKTtcbiAgICAgICAgICAgICQgJiYgKE0udmFsdWUuc3R5bGUubGVmdCA9IGAkeyQueH1weGAsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7JC55fXB4YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEsudmFsdWUgPSBDO1xuICAgICAgICAgICAgY29uc3QgeyByZ2I6ICQgfSA9IEhlKEMsIDEwMCwgNTApO1xuICAgICAgICAgICAgUmUoJCk7XG4gICAgICAgICAgICBjb25zdCBoID0gYWUoKTtcbiAgICAgICAgICAgIGggJiYgKE0udmFsdWUuc3R5bGUubGVmdCA9IGAke2gueH1weGAsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7aC55fXB4YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEooKSwgVSgpLCBFKCksIGwgPT0gbnVsbCB8fCBsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgbCA9PSBudWxsIHx8IGwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH0sIHVlID0gKGwsIGUpID0+IHtcbiAgICAgIGlmIChlICE9IFwiYVwiKSB7XG4gICAgICAgIGNvbnN0IHQgPSBzLnZhbHVlLmZpbmQoKHIpID0+IHIuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICBjb25zdCByID0gUSh0LnIsIHQuZywgdC5iKTtcbiAgICAgICAgICB0Lmh1ZSA9IHIsIFcoXG4gICAgICAgICAgICB0LnIsXG4gICAgICAgICAgICB0LmcsXG4gICAgICAgICAgICB0LmIsXG4gICAgICAgICAgICB0Lmh1ZSxcbiAgICAgICAgICAgICEwXG4gICAgICAgICAgKSwgRSgpLCBVKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZVxuICAgICAgICBqLnZhbHVlID0gbCwgRSgpLCBVKCk7XG4gICAgfSwgeWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsID0gcy52YWx1ZS5maW5kKChlKSA9PiBlLnNlbGVjdCA9PSAhMCk7XG4gICAgICBpZiAobCAmJiAhTnVtYmVyLmlzTmFOKEguaCkgJiYgIU51bWJlci5pc05hTihILnMpICYmICFOdW1iZXIuaXNOYU4oSC5sKSkge1xuICAgICAgICBjb25zdCB7IHI6IGUsIGc6IHQsIGI6IHIgfSA9IFllKEguaCwgSC5zIC8gMTAwLCBILmwgLyAxMDApO1xuICAgICAgICBsLmh1ZSA9IEguaCwgbC5yID0gZSwgbC5nID0gdCwgbC5iID0gciwgVyhcbiAgICAgICAgICBsLnIsXG4gICAgICAgICAgbC5nLFxuICAgICAgICAgIGwuYixcbiAgICAgICAgICBsLmh1ZSxcbiAgICAgICAgICAhMFxuICAgICAgICApLCBFKCksIFUoKTtcbiAgICAgIH1cbiAgICB9LCBiZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGlmIChsICYmICFOdW1iZXIuaXNOYU4oRC5oKSAmJiAhTnVtYmVyLmlzTmFOKEQucykgJiYgIU51bWJlci5pc05hTihELnYpKSB7XG4gICAgICAgIGNvbnN0IHsgcjogZSwgZzogdCwgYjogciB9ID0gY2woRC5oLCBELnMgLyAxMDAsIEQudiAvIDEwMCksIHsgaDogYyB9ID0gcGwoRC5oLCBELnMgLyAxMDAsIEQudiAvIDEwMCk7XG4gICAgICAgIGwuaHVlID0gYywgbC5yID0gZSwgbC5nID0gdCwgbC5iID0gciwgVyhcbiAgICAgICAgICBsLnIsXG4gICAgICAgICAgbC5nLFxuICAgICAgICAgIGwuYixcbiAgICAgICAgICBsLmh1ZSxcbiAgICAgICAgICAhMFxuICAgICAgICApLCBFKCksIFUoKTtcbiAgICAgIH1cbiAgICB9LCBjZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGlmIChsICYmICFOdW1iZXIuaXNOYU4oQi5jKSAmJiAhTnVtYmVyLmlzTmFOKEIubSkgJiYgIU51bWJlci5pc05hTihCLnkpICYmICFOdW1iZXIuaXNOYU4oQi5rKSkge1xuICAgICAgICBjb25zdCB7IHI6IGUsIGc6IHQsIGI6IHIgfSA9IGdsKFxuICAgICAgICAgIEIuYyAvIDEwMCxcbiAgICAgICAgICBCLm0gLyAxMDAsXG4gICAgICAgICAgQi55IC8gMTAwLFxuICAgICAgICAgIEIuayAvIDEwMFxuICAgICAgICApLCBjID0gUShlLCB0LCByKTtcbiAgICAgICAgbC5odWUgPSBjLCBsLnIgPSBlLCBsLmcgPSB0LCBsLmIgPSByLCBXKFxuICAgICAgICAgIGwucixcbiAgICAgICAgICBsLmcsXG4gICAgICAgICAgbC5iLFxuICAgICAgICAgIGwuaHVlLFxuICAgICAgICAgICEwXG4gICAgICAgICksIEUoKSwgVSgpO1xuICAgICAgfVxuICAgIH0sIEplID0gKCkgPT4ge1xuICAgICAgaWYgKE4udmFsdWUpIHtcbiAgICAgICAgY29uc3QgbCA9IGdlKE4udmFsdWUpO1xuICAgICAgICBpZiAobCkge1xuICAgICAgICAgIGNvbnN0IGUgPSBRKGwuciwgbC5nLCBsLmIpLCB0ID0gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgICAgdCAmJiAodC5yID0gbC5yLCB0LmcgPSBsLmcsIHQuYiA9IGwuYiwgdC5odWUgPSBlLCBXKGwuciwgbC5nLCBsLmIsIHQuaHVlLCAhMCksIEUoKSwgVSgpLCBkZShMLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBKID0gKCkgPT4ge1xuICAgICAgY29uc3QgbCA9IHMudmFsdWUuZmluZCgoZSkgPT4gZS5zZWxlY3QgPT0gITApO1xuICAgICAgbCAmJiAoTi52YWx1ZSA9ICRlKGwuciwgbC5nLCBsLmIpLnRvVXBwZXJDYXNlKCkpLCBkZShMLnZhbHVlKTtcbiAgICB9LCBRZSA9IChsKSA9PiB7XG4gICAgICBOLnZhbHVlID0gbDtcbiAgICAgIGxldCBlID0gZ2UoTi52YWx1ZSk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBjb25zdCB0ID0gUShlLnIsIGUuZywgZS5iKSwgciA9IHMudmFsdWUuZmluZCgoYykgPT4gYy5zZWxlY3QgPT0gITApO1xuICAgICAgICByICYmIChyLnIgPSBlLnIsIHIuZyA9IGUuZywgci5iID0gZS5iLCByLmh1ZSA9IHQsIFcoZS5yLCBlLmcsIGUuYiwgci5odWUsICEwKSwgRSgpLCBVKCkpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LkV5ZURyb3BwZXIgJiYgKGYudmFsdWUgPSAhMCk7XG4gICAgY29uc3QgWmUgPSAoKSA9PiB7XG4gICAgICBpZiAoIWIudmFsdWUuZmluZCgoZSkgPT4gZSA9PT0gTi52YWx1ZSkpIHtcbiAgICAgICAgYi52YWx1ZS5sZW5ndGggPT09IG8uY29sb3JMaXN0Q291bnQgJiYgYi52YWx1ZS5wb3AoKTtcbiAgICAgICAgbGV0IGUgPSBOLnZhbHVlO1xuICAgICAgICBiLnZhbHVlLnVuc2hpZnQoZSksIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgIFwiY2stY3AtbG9jYWwtY29sb3ItbGlzdFwiLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGIudmFsdWUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwgX2UgPSAobCA9IFwiXCIpID0+IHtcbiAgICAgIGlmIChvLm1vZGUgPT0gXCJncmFkaWVudFwiKSB7XG4gICAgICAgIGxldCBlID0gbC5pbmNsdWRlcyhcImxpbmVhclwiKSA/IFwibGluZWFyXCIgOiBcInJhZGlhbFwiLCB0ID0gW107XG4gICAgICAgIGlmICh2LnZhbHVlID0gZSwgZSA9PSBcImxpbmVhclwiKSB7XG4gICAgICAgICAgbGV0IHIgPSAvXmxpbmVhci1ncmFkaWVudFxcKCguKilcXCkkLywgYyA9IGwucmVwbGFjZShcIjtcIiwgXCJcIikudHJpbSgpLm1hdGNoKHIpLCBwID0gLyxcXHMqKD8hW14oKV0qXFwpKS87XG4gICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgIGxldCBrID0gY1sxXS5zcGxpdChwKTtcbiAgICAgICAgICAgIGZvciAobGV0IEMgPSAwOyBDIDwgay5sZW5ndGg7IEMrKykge1xuICAgICAgICAgICAgICBjb25zdCAkID0ga1tDXTtcbiAgICAgICAgICAgICAgbGV0IGggPSB7XG4gICAgICAgICAgICAgICAgaWQ6IEMsXG4gICAgICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgICAgICBnOiAwLFxuICAgICAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICAgICAgYTogMTAwLFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IDEwMCxcbiAgICAgICAgICAgICAgICBodWU6IDAsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoJC5pbmNsdWRlcyhcImRlZ1wiKSlcbiAgICAgICAgICAgICAgICBtLmFuZ2xlID0gcGFyc2VJbnQoJC5yZXBsYWNlKFwiZGVnXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgZWxzZSBpZiAoJC5pbmNsdWRlcyhcInJnYmFcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9ICQudHJpbSgpLnJlcGxhY2UoL3JnYmF8XFwofFxcKXwlL2csIFwiXCIpLnJlcGxhY2UoLywvZywgXCIgXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICB3ID0gdy5maWx0ZXIoKHopID0+IHoudHJpbSgpICE9PSBcIlwiKSwgaC5yID0gcGFyc2VJbnQod1swXSksIGguZyA9IHBhcnNlSW50KHdbMV0pLCBoLmIgPSBwYXJzZUludCh3WzJdKSwgaC5hID0gcGFyc2VGbG9hdCh3WzNdKSAqIDEwMCwgaC5wZXJjZW50ID0gcGFyc2VJbnQod1s0XSksIHQucHVzaChoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgkLmluY2x1ZGVzKFwicmdiXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAkLnRyaW0oKS5yZXBsYWNlKC9yZ2J8XFwofFxcKXwlL2csIFwiXCIpLnJlcGxhY2UoLywvZywgXCIgXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICB3ID0gdy5maWx0ZXIoKHopID0+IHoudHJpbSgpICE9PSBcIlwiKSwgaC5yID0gcGFyc2VJbnQod1swXSksIGguZyA9IHBhcnNlSW50KHdbMV0pLCBoLmIgPSBwYXJzZUludCh3WzJdKSwgaC5wZXJjZW50ID0gcGFyc2VJbnQod1szXSksIHQucHVzaChoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgciA9IC9ecmFkaWFsLWdyYWRpZW50XFwoKC4qKVxcKSQvLCBjID0gbC5yZXBsYWNlKFwiO1wiLCBcIlwiKS50cmltKCkubWF0Y2gociksIHAgPSAvLFxccyooPyFbXigpXSpcXCkpLztcbiAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgbGV0IGsgPSBjWzFdLnNwbGl0KHApO1xuICAgICAgICAgICAgZm9yIChsZXQgQyA9IDA7IEMgPCBrLmxlbmd0aDsgQysrKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICQgPSBrW0NdO1xuICAgICAgICAgICAgICBsZXQgaCA9IHtcbiAgICAgICAgICAgICAgICBpZDogQyxcbiAgICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgICAgICBhOiAxMDAsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogMTAwLFxuICAgICAgICAgICAgICAgIGh1ZTogMCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6ICExXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmICgkLmluY2x1ZGVzKFwiY2lyY2xlIGF0XCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAkLnJlcGxhY2UoXCJjaXJjbGUgYXQgXCIsIFwiXCIpLnJlcGxhY2UoXCIgXCIsIFwiXCIpLnJlcGxhY2UoLyUvZywgXCIgXCIpLnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgbS5wZXJjZW50YWdlWCA9IHBhcnNlSW50KHdbMF0pLCBtLnBlcmNlbnRhZ2VZID0gcGFyc2VJbnQod1sxXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5pbmNsdWRlcyhcInJnYmFcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9ICQucmVwbGFjZSgvcmdiYXxcXCh8XFwpfCUvZywgXCJcIikucmVwbGFjZSgvLC9nLCBcIiBcIikuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIHcgPSB3LmZpbHRlcigoeikgPT4gei50cmltKCkgIT09IFwiXCIpLCBoLnIgPSBwYXJzZUludCh3WzBdKSwgaC5nID0gcGFyc2VJbnQod1sxXSksIGguYiA9IHBhcnNlSW50KHdbMl0pLCBoLmEgPSBwYXJzZUZsb2F0KHdbM10pICogMTAwLCBoLnBlcmNlbnQgPSBwYXJzZUludCh3WzRdKSwgdC5wdXNoKGgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQuaW5jbHVkZXMoXCJyZ2JcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9ICQucmVwbGFjZSgvcmdifFxcKHxcXCl8JS9nLCBcIlwiKS5yZXBsYWNlKC8sL2csIFwiIFwiKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgdyA9IHcuZmlsdGVyKCh6KSA9PiB6LnRyaW0oKSAhPT0gXCJcIiksIGguciA9IHBhcnNlSW50KHdbMF0pLCBoLmcgPSBwYXJzZUludCh3WzFdKSwgaC5iID0gcGFyc2VJbnQod1syXSksIGgucGVyY2VudCA9IHBhcnNlSW50KHdbM10pLCB0LnB1c2goaCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdC5sZW5ndGggPiAxICYmIChzLnZhbHVlID0gdCwgcy52YWx1ZVswXS5zZWxlY3QgPSAhMCwgai52YWx1ZSA9IHMudmFsdWVbMF0uYSk7XG4gICAgICB9IGVsc2UgaWYgKGwpIHtcbiAgICAgICAgbGV0IGUgPSB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAobC5pbmNsdWRlcyhcIiNcIikpXG4gICAgICAgICAgaWYgKGwubGVuZ3RoID49IDgpXG4gICAgICAgICAgICBlID0gcmwobCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdCA9IGdlKGwpO1xuICAgICAgICAgICAgdCA/IChlLmEgPSAxLCBlLnIgPSB0LnIsIGUuZyA9IHQuZywgZS5iID0gdC5iKSA6IGUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobC5pbmNsdWRlcyhcInJnYlwiKSlcbiAgICAgICAgICBpZiAobC5pbmNsdWRlcyhcInJnYmFcIikpXG4gICAgICAgICAgICBlID0gb2wobCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdCA9IHNsKGwpO1xuICAgICAgICAgICAgdCA/IChlLmEgPSAxLCBlLnIgPSB0LnIsIGUuZyA9IHQuZywgZS5iID0gdC5iKSA6IGUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgZSAmJiAocy52YWx1ZVswXS5yID0gZS5yLCBzLnZhbHVlWzBdLmIgPSBlLmIsIHMudmFsdWVbMF0uZyA9IGUuZywgcy52YWx1ZVswXS5hID0gcGFyc2VJbnQoKGUuYSAqIDEwMCkudG9GaXhlZCgwKSksIGoudmFsdWUgPSBzLnZhbHVlWzBdLmEsIHMudmFsdWVbMF0uaHVlID0gMCk7XG4gICAgICB9XG4gICAgfSwgZGUgPSAobCkgPT4ge1xuICAgICAgY29uc3QgZSA9IHMudmFsdWUuZmluZCgodCkgPT4gdC5zZWxlY3QgPT0gITApO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgc3dpdGNoIChsKSB7XG4gICAgICAgICAgY2FzZSBcIlJHQlwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkhTTFwiOiB7XG4gICAgICAgICAgICBjb25zdCB7IGg6IHQsIHM6IHIsIGw6IGMgfSA9IEVlKFxuICAgICAgICAgICAgICBlLnIsXG4gICAgICAgICAgICAgIGUuZyxcbiAgICAgICAgICAgICAgZS5iXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgSC5oID0gTWF0aC5yb3VuZCh0KSwgSC5zID0gTWF0aC5yb3VuZChyICogMTAwKSwgSC5sID0gTWF0aC5yb3VuZChjICogMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiSFNWXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaDogdCwgczogciwgdjogYyB9ID0gZGwoXG4gICAgICAgICAgICAgIGUucixcbiAgICAgICAgICAgICAgZS5nLFxuICAgICAgICAgICAgICBlLmJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBELmggPSBNYXRoLnJvdW5kKHQpLCBELnMgPSBNYXRoLnJvdW5kKHIgKiAxMDApLCBELnYgPSBNYXRoLnJvdW5kKGMgKiAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJDTVlLXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgYzogdCwgbTogciwgeTogYywgazogcCB9ID0gdmwoXG4gICAgICAgICAgICAgICAgZS5yLFxuICAgICAgICAgICAgICAgIGUuZyxcbiAgICAgICAgICAgICAgICBlLmJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgQi5jID0gTWF0aC5yb3VuZCh0ICogMTAwKSwgQi5tID0gTWF0aC5yb3VuZChyICogMTAwKSwgQi55ID0gTWF0aC5yb3VuZChjICogMTAwKSwgQi5rID0gTWF0aC5yb3VuZChwICogMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIEwudmFsdWUgPSBsO1xuICAgICAgfVxuICAgIH0sIFRlID0gKGwpID0+IHtcbiAgICAgIGwgJiYgX2UobCksIExlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gd2UoKCkgPT4gby5tb2RlbFZhbHVlLCAobCwgZSkgPT4ge1xuICAgICAgbCAhPT0gZSAmJiBsICE9PSB1LnZhbHVlICYmIChzLnZhbHVlLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgY29uc3QgciA9IFggPT0gbnVsbCA/IHZvaWQgMCA6IFgucXVlcnlTZWxlY3RvcihgI2Nsci1nYi0ke3QuaWR9YCk7XG4gICAgICAgIHIgPT0gbnVsbCB8fCByLnJlbW92ZSgpO1xuICAgICAgfSksIFRlKGwpKTtcbiAgICB9KSwgbHQoKCkgPT4ge1xuICAgICAgbGV0IGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNrLWNwLWxvY2FsLWNvbG9yLWxpc3RcIik7XG4gICAgICBsICYmIChiLnZhbHVlID0gSlNPTi5wYXJzZShsKSk7XG4gICAgfSksIG50KCgpID0+IHtcbiAgICAgIHZhciBsO1xuICAgICAgby5tb2RlID09IFwiZ3JhZGllbnRcIiAmJiAoWCA9IChsID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGwucXVlcnlTZWxlY3RvcihcIi5ncmFkaWVudC1iYXJcIikpLCBUZShvLm1vZGVsVmFsdWUpLCBkZShMLnZhbHVlKSwgcmUudmFsdWUgPSAhMDtcbiAgICB9KSwgKGwsIGUpID0+ICh5KCksIEkoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFIoW1wiY2stY3AtY29udGFpbmVyXCIsIG4uZGlzYWJsZWQgPyBcImNrLWNwLWRpc2FibGVkIFwiIDogXCJcIl0pLFxuICAgICAgcmVmX2tleTogXCJwaWNrZXJUZW1wbGF0ZVJlZlwiLFxuICAgICAgcmVmOiBhLFxuICAgICAgXCJjcC10aGVtZVwiOiBuLnRoZW1lXG4gICAgfSwgW1xuICAgICAgdmUoQXQsIHsgb25Pbk1vdXNlRG93bjogT2UgfSksXG4gICAgICB2ZShHdCwge1xuICAgICAgICBhbmdsZTogbS5hbmdsZSxcbiAgICAgICAgXCJvblVwZGF0ZTphbmdsZVwiOiBlWzBdIHx8IChlWzBdID0gKHQpID0+IG0uYW5nbGUgPSB0KSxcbiAgICAgICAgcGVyY2VudGFnZVg6IG0ucGVyY2VudGFnZVgsXG4gICAgICAgIFwib25VcGRhdGU6cGVyY2VudGFnZVhcIjogZVsxXSB8fCAoZVsxXSA9ICh0KSA9PiBtLnBlcmNlbnRhZ2VYID0gdCksXG4gICAgICAgIGxvY2FsOiBuLmxvY2FsLFxuICAgICAgICBpY29uQ2xhc3Nlczogbi5pY29uQ2xhc3NlcyxcbiAgICAgICAgaW5wdXRUeXBlOiBMLnZhbHVlLFxuICAgICAgICBwZXJjZW50YWdlWTogbS5wZXJjZW50YWdlWSxcbiAgICAgICAgXCJvblVwZGF0ZTpwZXJjZW50YWdlWVwiOiBlWzJdIHx8IChlWzJdID0gKHQpID0+IG0ucGVyY2VudGFnZVkgPSB0KSxcbiAgICAgICAgbW9kZTogbi5tb2RlLFxuICAgICAgICBzaG93Q29sb3JMaXN0OiBuLnNob3dDb2xvckxpc3QsXG4gICAgICAgIHNob3dJbnB1dE1lbnU6IG4uc2hvd0lucHV0TWVudSxcbiAgICAgICAgc2hvd0V5ZURyb3A6IG4uc2hvd0V5ZURyb3AsXG4gICAgICAgIGlzRXllRHJvcHBlclVzaW5nOiBmLnZhbHVlLFxuICAgICAgICBncmFkaWVudFR5cGU6IHYudmFsdWUsXG4gICAgICAgIG9uT25DaGFuZ2VNb2RlOiBGZSxcbiAgICAgICAgb25PbklucHV0OiBFLFxuICAgICAgICBvbk9uQ2xpY2tFeWVEcm9wcGVyOiBqZSxcbiAgICAgICAgb25PbkRlbGV0ZUNvbG9yOiBxZSxcbiAgICAgICAgb25PblNhdmVDb2xvcjogWmUsXG4gICAgICAgIG9uT25DaGFuZ2VJbnB1dFR5cGU6IGRlXG4gICAgICB9LCBudWxsLCA4LCBbXCJhbmdsZVwiLCBcInBlcmNlbnRhZ2VYXCIsIFwibG9jYWxcIiwgXCJpY29uQ2xhc3Nlc1wiLCBcImlucHV0VHlwZVwiLCBcInBlcmNlbnRhZ2VZXCIsIFwibW9kZVwiLCBcInNob3dDb2xvckxpc3RcIiwgXCJzaG93SW5wdXRNZW51XCIsIFwic2hvd0V5ZURyb3BcIiwgXCJpc0V5ZURyb3BwZXJVc2luZ1wiLCBcImdyYWRpZW50VHlwZVwiXSksXG4gICAgICBuLm1vZGUgPT0gXCJncmFkaWVudFwiID8gKHkoKSwgVChQdCwge1xuICAgICAgICBrZXk6IDAsXG4gICAgICAgIG9uT25BZGRDb2xvcjogS2UsXG4gICAgICAgIG9uT25Nb3VzZURvd246IE5lXG4gICAgICB9KSkgOiBWKFwiXCIsICEwKSxcbiAgICAgIHZlKEZ0LCB7XG4gICAgICAgIG1vZGVsVmFsdWU6IEsudmFsdWUsXG4gICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBlWzNdIHx8IChlWzNdID0gKHQpID0+IEsudmFsdWUgPSB0KSxcbiAgICAgICAgb25PbklucHV0OiBlWzRdIHx8IChlWzRdID0gKHQpID0+IGhlKCExKSksXG4gICAgICAgIG9uT25DaGFuZ2U6IEdlXG4gICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSxcbiAgICAgIG4uc2hvd0FscGhhID8gKHkoKSwgVChRdCwge1xuICAgICAgICBrZXk6IDEsXG4gICAgICAgIG1vZGVsVmFsdWU6IGoudmFsdWUsXG4gICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBlWzVdIHx8IChlWzVdID0gKHQpID0+IGoudmFsdWUgPSB0KSxcbiAgICAgICAgb25PbklucHV0OiBQZVxuICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICBaKHgoXCJkaXZcIiwgZmwsIG51bGwsIDUxMiksIFtcbiAgICAgICAgW18sICExXVxuICAgICAgXSksXG4gICAgICByZS52YWx1ZSAmJiBuLnNob3dJbnB1dFNldCA/ICh5KCksIEkoXCJkaXZcIiwgaGwsIFtcbiAgICAgICAgTC52YWx1ZSAhPT0gXCJDTVlLXCIgPyAoeSgpLCBUKGFsLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IE4udmFsdWUsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbNl0gfHwgKGVbNl0gPSAodCkgPT4gTi52YWx1ZSA9IHQpLFxuICAgICAgICAgICAgSmVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiUkdCXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgbGFiZWw6IFwiUlwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBzLnZhbHVlLmZpbmQoKHQpID0+IHQuc2VsZWN0ID09ICEwKS5yLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzddIHx8IChlWzddID0gKHQpID0+IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApLnIgPSB0KSxcbiAgICAgICAgICAgIGVbOF0gfHwgKGVbOF0gPSAodCkgPT4gdWUodCwgXCJyXCIpKVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJSR0JcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBsYWJlbDogXCJHXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMjU1LFxuICAgICAgICAgIG1vZGVsVmFsdWU6IHMudmFsdWUuZmluZCgodCkgPT4gdC5zZWxlY3QgPT0gITApLmcsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbOV0gfHwgKGVbOV0gPSAodCkgPT4gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCkuZyA9IHQpLFxuICAgICAgICAgICAgZVsxMF0gfHwgKGVbMTBdID0gKHQpID0+IHVlKHQsIFwiZ1wiKSlcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiUkdCXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDMsXG4gICAgICAgICAgbGFiZWw6IFwiQlwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBzLnZhbHVlLmZpbmQoKHQpID0+IHQuc2VsZWN0ID09ICEwKS5iLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzExXSB8fCAoZVsxMV0gPSAodCkgPT4gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCkuYiA9IHQpLFxuICAgICAgICAgICAgZVsxMl0gfHwgKGVbMTJdID0gKHQpID0+IHVlKHQsIFwiYlwiKSlcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiSFNMXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDQsXG4gICAgICAgICAgbGFiZWw6IFwiSFwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBILmgsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMTNdIHx8IChlWzEzXSA9ICh0KSA9PiBILmggPSB0KSxcbiAgICAgICAgICAgIHllXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkhTTFwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiA1LFxuICAgICAgICAgIGxhYmVsOiBcIlNcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogSC5zLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzE0XSB8fCAoZVsxNF0gPSAodCkgPT4gSC5zID0gdCksXG4gICAgICAgICAgICB5ZVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJIU0xcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogNixcbiAgICAgICAgICBsYWJlbDogXCJMXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEgubCxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxNV0gfHwgKGVbMTVdID0gKHQpID0+IEgubCA9IHQpLFxuICAgICAgICAgICAgeWVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiSFNWXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDcsXG4gICAgICAgICAgbGFiZWw6IFwiSFwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBELmgsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMTZdIHx8IChlWzE2XSA9ICh0KSA9PiBELmggPSB0KSxcbiAgICAgICAgICAgIGJlXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkhTVlwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiA4LFxuICAgICAgICAgIGxhYmVsOiBcIlNcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogRC5zLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzE3XSB8fCAoZVsxN10gPSAodCkgPT4gRC5zID0gdCksXG4gICAgICAgICAgICBiZVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJIU1ZcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogOSxcbiAgICAgICAgICBsYWJlbDogXCJWXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEQudixcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxOF0gfHwgKGVbMThdID0gKHQpID0+IEQudiA9IHQpLFxuICAgICAgICAgICAgYmVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMCxcbiAgICAgICAgICBsYWJlbDogXCJDXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIuYyxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxOV0gfHwgKGVbMTldID0gKHQpID0+IEIuYyA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMSxcbiAgICAgICAgICBsYWJlbDogXCJNXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIubSxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyMF0gfHwgKGVbMjBdID0gKHQpID0+IEIubSA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMixcbiAgICAgICAgICBsYWJlbDogXCJZXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIueSxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyMV0gfHwgKGVbMjFdID0gKHQpID0+IEIueSA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMyxcbiAgICAgICAgICBsYWJlbDogXCJLXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIuayxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyMl0gfHwgKGVbMjJdID0gKHQpID0+IEIuayA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBuLnNob3dBbHBoYSA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMTQsXG4gICAgICAgICAgbGFiZWw6IFwiQVwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBzdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJweFwiIH0sXG4gICAgICAgICAgbW9kZWxWYWx1ZTogcy52YWx1ZS5maW5kKCh0KSA9PiB0LnNlbGVjdCA9PSAhMCkuYSxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyM10gfHwgKGVbMjNdID0gKHQpID0+IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApLmEgPSB0KSxcbiAgICAgICAgICAgIGVbMjRdIHx8IChlWzI0XSA9ICh0KSA9PiB1ZSh0LCBcImFcIikpXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKVxuICAgICAgXSkpIDogVihcIlwiLCAhMCksXG4gICAgICBiLnZhbHVlLmxlbmd0aCA+IDAgJiYgbi5zaG93Q29sb3JMaXN0ID8gKHkoKSwgSShcImRpdlwiLCB5bCwgW1xuICAgICAgICAoeSghMCksIEkoWGUsIG51bGwsIGF0KGIudmFsdWUsICh0KSA9PiAoeSgpLCBJKFwiZGl2XCIsIHtcbiAgICAgICAgICBrZXk6IGBjb2xvci0ke3R9YCxcbiAgICAgICAgICBjbGFzczogXCJjay1jcC1jb2xvci1pdGVtXCIsXG4gICAgICAgICAgc3R5bGU6IEcoeyBiYWNrZ3JvdW5kQ29sb3I6IHQgfSksXG4gICAgICAgICAgb25DbGljazogKHIpID0+IFFlKHQpXG4gICAgICAgIH0sIG51bGwsIDEyLCBibCkpKSwgMTI4KSlcbiAgICAgIF0pKSA6IFYoXCJcIiwgITApXG4gICAgXSwgMTAsIG1sKSk7XG4gIH1cbn0pO1xuZXhwb3J0IHtcbiAgJGwgYXMgVnVlM0NvbG9yUGlja2VyXG59O1xuIl0sIm5hbWVzIjpbIlZ1ZTNDb2xvclBpY2tlciIsIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbG9ycyIsImFjdGl2ZV9jb2xvciIsIm1vdW50ZWQiLCJsb2FkQ29sb3JzIiwibWV0aG9kcyIsImFkZE5ld0NvbG9yIiwicHVzaCIsImNvZGUiLCJfdGhpcyIsIktyaXRpIiwiYXBpIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwic2F2ZUNvbG9ycyIsInN1Y2Nlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsInNlbGVjdEFjdGl2ZUNvbG9yIiwiY29sb3IiLCJjbG9zZVBhbGV0dGUiLCJDb2xvclBhbGV0dGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfNSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCIkZGF0YSIsImluZGV4Iiwic3R5bGUiLCJfbm9ybWFsaXplU3R5bGUiLCJjb25jYXQiLCJ0eXBlIiwiJGV2ZW50Iiwib25DbGljayIsIiRvcHRpb25zIiwiX2NhY2hlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaG9pc3RlZF83IiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9WdWUzQ29sb3JQaWNrZXIiLCJtb2RlIiwic2hvd0NvbG9yTGlzdCIsInNob3dFeWVEcm9wIiwiX2NvbXBvbmVudF9Db2xvclBhbGV0dGUiXSwic291cmNlUm9vdCI6IiJ9