"use strict";
(self["webpackChunkkriti"] = self["webpackChunkkriti"] || []).push([["resources_vue_components_pages_ColorPalette_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interface_ColorPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface/ColorPalette */ "./resources/vue/components/interface/ColorPalette.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ColorPalette",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=template&id=3ba2f62a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=template&id=3ba2f62a ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
  var _component_ColorPalette = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ColorPalette", true);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".playground {\n  padding: 15px;\n  background-color: #777;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/pages/ColorPalette.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,sBAAA;AAAJ","sourcesContent":["\n.playground {\n    padding: 15px;\n    background-color: #777;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_3ba2f62a_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_3ba2f62a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_3ba2f62a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/vue/components/pages/ColorPalette.vue":
/*!*********************************************************!*\
  !*** ./resources/vue/components/pages/ColorPalette.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorPalette_vue_vue_type_template_id_3ba2f62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPalette.vue?vue&type=template&id=3ba2f62a */ "./resources/vue/components/pages/ColorPalette.vue?vue&type=template&id=3ba2f62a");
/* harmony import */ var _ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPalette.vue?vue&type=script&lang=js */ "./resources/vue/components/pages/ColorPalette.vue?vue&type=script&lang=js");
/* harmony import */ var _ColorPalette_vue_vue_type_style_index_0_id_3ba2f62a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss */ "./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ColorPalette_vue_vue_type_template_id_3ba2f62a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/pages/ColorPalette.vue"]])
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

/***/ "./resources/vue/components/pages/ColorPalette.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/vue/components/pages/ColorPalette.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/vue/components/pages/ColorPalette.vue?vue&type=template&id=3ba2f62a":
/*!***************************************************************************************!*\
  !*** ./resources/vue/components/pages/ColorPalette.vue?vue&type=template&id=3ba2f62a ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_template_id_3ba2f62a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_template_id_3ba2f62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=template&id=3ba2f62a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=template&id=3ba2f62a");


/***/ }),

/***/ "./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss":
/*!**********************************************************************************************************!*\
  !*** ./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_44c8a816_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss");


/***/ }),

/***/ "./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss":
/*!******************************************************************************************************!*\
  !*** ./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_3ba2f62a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/ColorPalette.vue?vue&type=style&index=0&id=3ba2f62a&lang=scss");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0NvbG9yUGFsZXR0ZV92dWUuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBeUI4RDtBQUU5RCxpRUFBZTtFQUNYQyxJQUFJLEVBQUUsY0FBYztFQUNwQkMsVUFBVSxFQUFFO0lBQUVGLGVBQWMsRUFBZEEsMEVBQWVBO0VBQUMsQ0FBQztFQUMvQkcsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLE1BQU0sRUFBRSxFQUFFO01BQ1ZDLFlBQVksRUFBRTtJQUNsQjtFQUNKLENBQUM7RUFDREMsT0FBTyxXQUFBQSxRQUFBLEVBQUc7SUFDTixJQUFJLENBQUNDLFVBQVUsQ0FBQztFQUNwQixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNMQyxXQUFXLFdBQUFBLFlBQUEsRUFBRztNQUNWLElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxJQUFJLENBQUM7UUFDYlQsSUFBSSxFQUFFLFlBQVk7UUFDbEJVLElBQUksRUFBRTtNQUNWLENBQUM7SUFDTCxDQUFDO0lBQ0RKLFVBQVUsV0FBQUEsV0FBQSxFQUFHO01BQUEsSUFBQUssS0FBQTtNQUNUQyxLQUFLLENBQUNDLEdBQUcsQ0FBQztRQUNOQyxHQUFHLEVBQUUsNkJBQTZCO1FBQ2xDQyxJQUFJLEVBQUUsU0FBQUEsS0FBQ0MsUUFBUSxFQUFLO1VBQ2hCTCxLQUFJLENBQUNSLE1BQUssR0FBSWEsUUFBUSxDQUFDYixNQUFLO1FBQ2hDO01BQ0osQ0FBQztJQUNMLENBQUM7SUFDRGMsVUFBVSxXQUFBQSxXQUFBLEVBQUc7TUFDVEwsS0FBSyxDQUFDQyxHQUFHLENBQUM7UUFDTkMsR0FBRyxFQUFFLDZCQUE2QjtRQUNsQ1osSUFBSSxFQUFFO1VBQ0ZDLE1BQU0sRUFBRSxJQUFJLENBQUNBO1FBQ2pCLENBQUM7UUFDRFksSUFBSSxFQUFFLFNBQUFBLEtBQUNDLFFBQVEsRUFBSztVQUNoQixJQUFJQSxRQUFRLENBQUNFLE9BQU8sRUFBRTtZQUNs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REFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw0QkFBNEIsOENBQUMsSUFBSSxnREFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyw2QkFBNkIsOENBQUMsSUFBSSxnREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qix1REFBQztBQUN4Qyx1QkFBdUIsOENBQUMsSUFBSSxnREFBQztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLFlBQVksdURBQUM7QUFDYiwrQ0FBK0MsOENBQUMsSUFBSSx1REFBQztBQUNyRCxTQUFTLDhDQUFDLE1BQU0sdURBQUMsQ0FBQyx5Q0FBRSxRQUFRLCtDQUFFLGtCQUFrQiw4Q0FBQyxJQUFJLHVEQUFDO0FBQ3RELHdCQUF3QixFQUFFO0FBQzFCO0FBQ0EsaUJBQWlCLG1EQUFDLEdBQUcsb0JBQW9CO0FBQ3pDO0FBQ0EsU0FBUztBQUNULFlBQVksdURBQUM7QUFDYjtBQUNBO0FBQ0EsQ0FBQztBQUdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQ29sb3JQYWxldHRlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT9mNWVkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0NvbG9yUGFsZXR0ZS52dWU/MGZjMyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT84NzBmIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0NvbG9yUGFsZXR0ZS52dWU/ODkwZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT84Zjg4Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0NvbG9yUGFsZXR0ZS52dWU/ZDY5MiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT9iMWNjIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0NvbG9yUGFsZXR0ZS52dWU/NjIxYSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT85ODRjIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0NvbG9yUGFsZXR0ZS52dWU/ODQwNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT9iMTYxIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0NvbG9yUGFsZXR0ZS52dWU/MTVkYiIsIndlYnBhY2s6Ly9rcml0aS8uL25vZGVfbW9kdWxlcy9AY3lobmtja2FsaS92dWUzLWNvbG9yLXBpY2tlci9kaXN0L3Z1ZTMtY29sb3ItcGlja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJjb2xvci1wYWxldHRlXCI+XG4gICAgPGRpdiB2LWZvcj1cIihjb2xvciwgaW5kZXgpIGluIGNvbG9yc1wiIGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fY29sb3JcIiA6c3R5bGU9XCJgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5jb2RlfWBcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fY29kZVwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImNvbG9yc1tpbmRleF0ubmFtZVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJjb2xvci1wYWxldHRlX19uYW1lXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiY29sb3JzW2luZGV4XS5jb2RlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1wYWxldHRlX19zZWxlY3RcIiBAY2xpY2s9XCJzZWxlY3RBY3RpdmVDb2xvcihjb2xvcilcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGFsZXR0ZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX2J1dHRvblwiIEBjbGljaz1cImFkZE5ld0NvbG9yXCI+XG4gICAgICAgICtcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fYnV0dG9uXCIgQGNsaWNrPVwic2F2ZUNvbG9yc1wiPlxuICAgICAgICBTYXZlIGNvbG9yc1xuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cImFjdGl2ZV9jb2xvclwiIGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fcGFsZXR0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fcGFsZXR0ZV9fY2xvc2VcIiBAY2xpY2s9XCJjbG9zZVBhbGV0dGVcIj5cbiAgICAgICAgICAgINCX0LDQutGA0YvRgtGMXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VnVlM0NvbG9yUGlja2VyIHYtbW9kZWw9XCJhY3RpdmVfY29sb3IuY29kZVwiIG1vZGU9XCJzb2xpZFwiIDpzaG93Q29sb3JMaXN0PVwiZmFsc2VcIiA6c2hvd0V5ZURyb3A9XCJmYWxzZVwiIHR5cGU9XCJIRVhcIiAvPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtWdWUzQ29sb3JQaWNrZXJ9IGZyb20gJ0BjeWhua2NrYWxpL3Z1ZTMtY29sb3ItcGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQ29sb3JQYWxldHRlXCIsXG4gICAgY29tcG9uZW50czogeyBWdWUzQ29sb3JQaWNrZXIgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3JzOiBbXSxcbiAgICAgICAgICAgIGFjdGl2ZV9jb2xvcjogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRDb2xvcnMoKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhZGROZXdDb2xvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICckY29sb3ItMTAwJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnIzc3NydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRDb2xvcnMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Db2xvcnM6bG9hZENvbG9ycycsXG4gICAgICAgICAgICAgICAgdGhlbjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzID0gcmVzcG9uc2UuY29sb3JzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUNvbG9ycygpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLkNvbG9yczpzYXZlQ29sb3JzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogdGhpcy5jb2xvcnNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdEFjdGl2ZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9jb2xvciA9IG51bGxcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2NvbG9yID0gY29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VQYWxldHRlKCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfY29sb3IgPSBudWxsXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uY29sb3ItcGFsZXR0ZSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG5cbiAgICAmX19zZWxlY3Qge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG5cbiAgICAuY29sb3ItcGFsZXR0ZV9fY29sb3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMmI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgJl9fcGFsZXR0ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgICAgICAgJl9fY2xvc2Uge1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEzcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInBsYXlncm91bmRcIj5cbiAgICAgICAgPENvbG9yUGFsZXR0ZS8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQ29sb3JQYWxldHRlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBDb2xvclBhbGV0dGVcbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5wbGF5Z3JvdW5kIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29sb3ItcGFsZXR0ZSB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyMTU2ODYyNzUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuLmNvbG9yLXBhbGV0dGVfX3NlbGVjdCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuLmNvbG9yLXBhbGV0dGUgLmNvbG9yLXBhbGV0dGVfX2NvbG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY29sb3ItcGFsZXR0ZSAuY29sb3ItcGFsZXR0ZV9fY29sb3IgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2ODYyNzQ1MSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDBweCA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb2xvci1wYWxldHRlX19idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDExcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5jb2xvci1wYWxldHRlX19wYWxldHRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxODBweDtcXG4gIG1hcmdpbi10b3A6IC0zMnB4O1xcbn1cXG4uY29sb3ItcGFsZXR0ZV9fcGFsZXR0ZV9fY2xvc2Uge1xcbiAgcGFkZGluZzogNnB4IDEzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db2xvclBhbGV0dGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQURSO0FBRVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBRVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmNvbG9yLXBhbGV0dGUge1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAxZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG5cXG4gICAgJl9fc2VsZWN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICB9XFxuXFxuICAgIC5jb2xvci1wYWxldHRlX19jb2xvciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYyYjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmX19idXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEzcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG4gICAgJl9fcGFsZXR0ZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTgwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMzJweDtcXG4gICAgICAgICZfX2Nsb3NlIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTNweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGxheWdyb3VuZCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0NvbG9yUGFsZXR0ZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ucGxheWdyb3VuZCB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YzhhODE2Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2JhMmY2MmEmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGM4YTgxNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YzhhODE2Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI0NGM4YTgxNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzQ0YzhhODE2JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNDRjOGE4MTYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRjOGE4MTZcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNDRjOGE4MTYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2JhMmY2MmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYmEyZjYyYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQ29sb3JQYWxldHRlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzYmEyZjYyYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzNiYTJmNjJhJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnM2JhMmY2MmEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2JhMmY2MmFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignM2JhMmY2MmEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRjOGE4MTZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiYTJmNjJhXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRjOGE4MTYmbGFuZz1zY3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2JhMmY2MmEmbGFuZz1zY3NzXCIiLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgQSwgcmVmIGFzIFMsIG9wZW5CbG9jayBhcyB5LCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgSSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIHgsIG5vcm1hbGl6ZUNsYXNzIGFzIFIsIEZyYWdtZW50IGFzIFhlLCBub3JtYWxpemVTdHlsZSBhcyBHLCB3aXRoRGlyZWN0aXZlcyBhcyBaLCB2U2hvdyBhcyBfLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgViwgY3JlYXRlVk5vZGUgYXMgdmUsIGNyZWF0ZVRleHRWTm9kZSBhcyBrZSwgdG9EaXNwbGF5U3RyaW5nIGFzIHEsIGluamVjdCBhcyBvZSwgd2F0Y2ggYXMgd2UsIHVucmVmIGFzIG1lLCByZWFjdGl2ZSBhcyBwZSwgcHJvdmlkZSBhcyBzZSwgb25CZWZvcmVNb3VudCBhcyBsdCwgb25Nb3VudGVkIGFzIG50LCBjcmVhdGVCbG9jayBhcyBULCByZW5kZXJMaXN0IGFzIGF0IH0gZnJvbSBcInZ1ZVwiO1xuY29uc3Qgc3QgPSB7IGNsYXNzOiBcImNvbG9yLWlucHV0LW1lbnVcIiB9LCBvdCA9IC8qIEBfX1BVUkVfXyAqLyBBKHtcbiAgX19uYW1lOiBcIkNvbG9ySW5wdXRNZW51XCIsXG4gIHByb3BzOiB7XG4gICAgaW5wdXRUeXBlOiB7IGRlZmF1bHQ6IFwiUkdCXCIsIHR5cGU6IFN0cmluZyB9XG4gIH0sXG4gIGVtaXRzOiBbXCJvbkNoYW5nZUlucHV0TmFtZVwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBhID0gUyhuLmlucHV0VHlwZSksIGkgPSBkLCB1ID0gKGcpID0+IHtcbiAgICAgIGEudmFsdWUgPSBnLCBpKFwib25DaGFuZ2VJbnB1dE5hbWVcIiwgZyk7XG4gICAgfTtcbiAgICByZXR1cm4gKGcsIHMpID0+ICh5KCksIEkoXCJ1bFwiLCBzdCwgW1xuICAgICAgeChcImxpXCIsIHtcbiAgICAgICAgY2xhc3M6IFIoYS52YWx1ZSA9PSBcIlJHQlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpLFxuICAgICAgICBvbkNsaWNrOiBzWzBdIHx8IChzWzBdID0gKGIpID0+IHUoXCJSR0JcIikpXG4gICAgICB9LCBcIlJHQlwiLCAyKSxcbiAgICAgIHgoXCJsaVwiLCB7XG4gICAgICAgIGNsYXNzOiBSKGEudmFsdWUgPT0gXCJIU0xcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKSxcbiAgICAgICAgb25DbGljazogc1sxXSB8fCAoc1sxXSA9IChiKSA9PiB1KFwiSFNMXCIpKVxuICAgICAgfSwgXCJIU0xcIiwgMiksXG4gICAgICB4KFwibGlcIiwge1xuICAgICAgICBjbGFzczogUihhLnZhbHVlID09IFwiSFNWXCIgPyBcImFjdGl2ZVwiIDogXCJcIiksXG4gICAgICAgIG9uQ2xpY2s6IHNbMl0gfHwgKHNbMl0gPSAoYikgPT4gdShcIkhTVlwiKSlcbiAgICAgIH0sIFwiSFNWXCIsIDIpLFxuICAgICAgeChcImxpXCIsIHtcbiAgICAgICAgY2xhc3M6IFIoYS52YWx1ZSA9PSBcIkNNWUtcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKSxcbiAgICAgICAgb25DbGljazogc1szXSB8fCAoc1szXSA9IChiKSA9PiB1KFwiQ01ZS1wiKSlcbiAgICAgIH0sIFwiQ01ZS1wiLCAyKVxuICAgIF0pKTtcbiAgfVxufSksIHJ0ID0ge1xuICBrZXk6IDAsXG4gIGNsYXNzOiBcImNrLWNwLWNvbnRyb2xsZXItYmFyXCJcbn0sIGl0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjMyXCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiXG59LCB1dCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTIxLjUgMGg5YzAuODMxIDAgMS41IDAuNjY5IDEuNSAxLjV2OWMwIDAuNjA2LTAuMzYzIDEuMTU2LTAuOTI1IDEuMzg3cy0xLjIwNiAwLjEwNi0xLjYzNy0wLjMyNWwtMi40MzgtMi40MzgtNS40MzggNS40MzhjLTAuNTg3IDAuNTg4LTEuNTM4IDAuNTg4LTIuMTE5IDBsLTItMmMtMC41ODctMC41ODgtMC41ODctMS41MzcgMC0yLjExOWw1LjQzOC01LjQzOC0yLjQ0NC0yLjQ0NGMtMC40MzEtMC40MzEtMC41NTYtMS4wNzUtMC4zMjUtMS42MzdzMC43ODEtMC45MjUgMS4zODctMC45MjV6TTEwLjUgMzJoLTljLTAuODMxIDAtMS41LTAuNjY5LTEuNS0xLjV2LTljMC0wLjYwNiAwLjM2Mi0xLjE1NiAwLjkyNS0xLjM4N3MxLjIwNi0wLjEwNiAxLjYzNyAwLjMyNWwyLjQzOCAyLjQzOCA1LjQzOC01LjQzOGMwLjU4OC0wLjU4NyAxLjUzNy0wLjU4NyAyLjExOSAwbDIgMmMwLjU4OCAwLjU4NyAwLjU4OCAxLjUzOCAwIDIuMTE5bC01LjQzOCA1LjQzOCAyLjQzOCAyLjQzOGMwLjQzMSAwLjQzMSAwLjU1NiAxLjA3NSAwLjMyNSAxLjYzN3MtMC43ODEgMC45MjUtMS4zODcgMC45MjV6XCIgfSwgbnVsbCwgLTEpLCBjdCA9IFtcbiAgdXRcbl0sIGR0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjMyXCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiXG59LCBwdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTI5IDE2YzAtNy4xOC01LjgyLTEzLTEzLTEzcy0xMyA1LjgyLTEzIDEzdjBjMCA3LjE4IDUuODIgMTMgMTMgMTNzMTMtNS44MiAxMy0xM3Ywek0wIDE2YzAtOC44MzcgNy4xNjMtMTYgMTYtMTZzMTYgNy4xNjMgMTYgMTZ2MGMwIDguODM3LTcuMTYzIDE2LTE2IDE2cy0xNi03LjE2My0xNi0xNnYwelwiIH0sIG51bGwsIC0xKSwgZ3QgPSBbXG4gIHB0XG5dLCB2dCA9IHtcbiAga2V5OiAxLFxuICB2ZXJzaW9uOiBcIjEuMVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogXCIzMlwiLFxuICBoZWlnaHQ6IFwiMzJcIixcbiAgdmlld0JveDogXCIwIDAgMzIgMzJcIlxufSwgbXQgPSAvKiBAX19QVVJFX18gKi8geChcInBhdGhcIiwgeyBkOiBcIk0wLjAxMyAyOS4zMDZjMC4xNTYgMS41MTIgMS40MzEgMi42OTQgMi45ODcgMi42OTRoMjZjMS42NTYgMCAzLTEuMzQ0IDMtM3YtNmMwLTEuNjU2LTEuMzQ0LTMtMy0zaC0zdjVjMCAwLjU1LTAuNDUgMS0xIDFzLTEtMC40NS0xLTF2LTVoLTR2NWMwIDAuNTUtMC40NSAxLTEgMXMtMS0wLjQ1LTEtMXYtNWgtNHY1YzAgMC41NS0wLjQ1IDEtMSAxcy0xLTAuNDUtMS0xdi01aC01Yy0wLjU1IDAtMS0wLjQ1LTEtMXMwLjQ1LTEgMS0xaDV2LTRoLTVjLTAuNTUgMC0xLTAuNDUtMS0xczAuNDUtMSAxLTFoNXYtNGgtNWMtMC41NSAwLTEtMC40NS0xLTFzMC40NS0xIDEtMWg1di0zYzAtMS42NTYtMS4zNDQtMy0zLTNoLTZjLTEuNjU2IDAtMyAxLjM0NC0zIDN2MjZjMCAwLjEwNiAwLjAwNiAwLjIwNiAwLjAxMyAwLjMwNnpcIiB9LCBudWxsLCAtMSksIGZ0ID0gW1xuICBtdFxuXSwgaHQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sIHl0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMC4wMTMgMjkuMzA2YzAuMTU2IDEuNTEyIDEuNDMxIDIuNjk0IDIuOTg3IDIuNjk0aDI2YzEuNjU2IDAgMy0xLjM0NCAzLTN2LTZjMC0xLjY1Ni0xLjM0NC0zLTMtM2gtM3Y1YzAgMC41NS0wLjQ1IDEtMSAxcy0xLTAuNDUtMS0xdi01aC00djVjMCAwLjU1LTAuNDUgMS0xIDFzLTEtMC40NS0xLTF2LTVoLTR2NWMwIDAuNTUtMC40NSAxLTEgMXMtMS0wLjQ1LTEtMXYtNWgtNWMtMC41NSAwLTEtMC40NS0xLTFzMC40NS0xIDEtMWg1di00aC01Yy0wLjU1IDAtMS0wLjQ1LTEtMXMwLjQ1LTEgMS0xaDV2LTRoLTVjLTAuNTUgMC0xLTAuNDUtMS0xczAuNDUtMSAxLTFoNXYtM2MwLTEuNjU2LTEuMzQ0LTMtMy0zaC02Yy0xLjY1NiAwLTMgMS4zNDQtMyAzdjI2YzAgMC4xMDYgMC4wMDYgMC4yMDYgMC4wMTMgMC4zMDZ6XCIgfSwgbnVsbCwgLTEpLCBidCA9IFtcbiAgeXRcbl0sIGt0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjMyXCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiXG59LCAkdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTIxLjM1IDEuODI1bC02LjM0NCA2LjM1LTAuNTg4LTAuNTg4Yy0wLjc4MS0wLjc4MS0yLjA1MC0wLjc4MS0yLjgzMSAwcy0wLjc4MSAyLjA1MCAwIDIuODMxbDEwIDEwYzAuNzgxIDAuNzgxIDIuMDUwIDAuNzgxIDIuODMxIDBzMC43ODEtMi4wNTAgMC0yLjgzMWwtMC41ODctMC41ODcgNi4zNDQtNi4zNWMyLjQzOC0yLjQzOCAyLjQzOC02LjM4OCAwLTguODE5cy02LjM4Ny0yLjQzOC04LjgxOSAwek0zLjQ2MiAyMC4yMDZjLTAuOTM4IDAuOTM4LTEuNDYyIDIuMjEyLTEuNDYyIDMuNTM4djIuNjVsLTEuNjYzIDIuNDk0Yy0wLjUzMSAwLjc5NC0wLjQyNSAxLjg1IDAuMjUgMi41MjVzMS43MzEgMC43ODEgMi41MjUgMC4yNWwyLjQ5NC0xLjY2M2gyLjY1YzEuMzI1IDAgMi42LTAuNTI1IDMuNTM3LTEuNDYybDcuNTQ0LTcuNTQ0LTIuODMxLTIuODMxLTcuNTQ0IDcuNTQ0Yy0wLjE4OCAwLjE4OC0wLjQ0NCAwLjI5NC0wLjcwNiAwLjI5NGgtMi4yNTZ2LTIuMjU2YzAtMC4yNjIgMC4xMDYtMC41MTkgMC4yOTQtMC43MDZsNy41NDQtNy41NDQtMi44MzEtMi44MzEtNy41NDQgNy41NDR6XCIgfSwgbnVsbCwgLTEpLCB3dCA9IFtcbiAgJHRcbl0sIHh0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjMyXCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiXG59LCBDdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTMyIDE2YzAgMC4wNTYgMCAwLjExMyAwIDAuMTY5LTAuMDI1IDIuMjgxLTIuMSAzLjgzMS00LjM4MSAzLjgzMWgtNi4xMTljLTEuNjU2IDAtMyAxLjM0NC0zIDMgMCAwLjIxMiAwLjAyNSAwLjQxOSAwLjA2MyAwLjYxOSAwLjEzMSAwLjYzNyAwLjQwNiAxLjI1IDAuNjc1IDEuODY5IDAuMzgxIDAuODYzIDAuNzU2IDEuNzE5IDAuNzU2IDIuNjI1IDAgMS45ODgtMS4zNSAzLjc5NC0zLjMzNyAzLjg3NS0wLjIxOSAwLjAwNi0wLjQzOCAwLjAxMi0wLjY2MiAwLjAxMi04LjgzMSAwLTE1Ljk5NC03LjE2Mi0xNS45OTQtMTZzNy4xNjItMTYgMTYtMTYgMTYgNy4xNjIgMTYgMTZ6TTggMThjMC0xLjEwNS0wLjg5NS0yLTItMnMtMiAwLjg5NS0yIDJ2MGMwIDEuMTA1IDAuODk1IDIgMiAyczItMC44OTUgMi0ydjB6TTggMTJjMS4xMDUgMCAyLTAuODk1IDItMnMtMC44OTUtMi0yLTJ2MGMtMS4xMDUgMC0yIDAuODk1LTIgMnMwLjg5NSAyIDIgMnYwek0xOCA2YzAtMS4xMDUtMC44OTUtMi0yLTJzLTIgMC44OTUtMiAydjBjMCAxLjEwNSAwLjg5NSAyIDIgMnMyLTAuODk1IDItMnYwek0yNCAxMmMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMnYwYy0xLjEwNSAwLTIgMC44OTUtMiAyczAuODk1IDIgMiAydjB6XCIgfSwgbnVsbCwgLTEpLCBJdCA9IFtcbiAgQ3Rcbl0sIE10ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjI4XCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAyOCAzMlwiXG59LCBWdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTQgMmMtMi4yMDYgMC00IDEuNzk0LTQgNHYyMGMwIDIuMjA2IDEuNzk0IDQgNCA0aDIwYzIuMjA2IDAgNC0xLjc5NCA0LTR2LTE1LjE2OWMwLTEuMDYzLTAuNDE5LTIuMDgxLTEuMTY5LTIuODMxbC00LjgzMS00LjgzMWMtMC43NS0wLjc1LTEuNzY5LTEuMTY5LTIuODMxLTEuMTY5aC0xNS4xNjl6TTQgOGMwLTEuMTA2IDAuODk0LTIgMi0yaDEyYzEuMTA2IDAgMiAwLjg5NCAyIDJ2NGMwIDEuMTA2LTAuODk0IDItMiAyaC0xMmMtMS4xMDYgMC0yLTAuODk0LTItMnYtNHpNMTQgMThjMi4yMDkgMCA0IDEuNzkxIDQgNHMtMS43OTEgNC00IDR2MGMtMi4yMDkgMC00LTEuNzkxLTQtNHMxLjc5MS00IDQtNHYwelwiIH0sIG51bGwsIC0xKSwgTnQgPSBbXG4gIFZ0XG5dLCBTdCA9IHtcbiAga2V5OiAxLFxuICB2ZXJzaW9uOiBcIjEuMVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogXCIyOFwiLFxuICBoZWlnaHQ6IFwiMzJcIixcbiAgdmlld0JveDogXCIwIDAgMjggMzJcIlxufSwgQnQgPSAvKiBAX19QVVJFX18gKi8geChcInBhdGhcIiwgeyBkOiBcIk04LjQ1IDEuMTA2bC0wLjQ1IDAuODk0aC02Yy0xLjEwNiAwLTIgMC44OTQtMiAyczAuODk0IDIgMiAyaDI0YzEuMTA2IDAgMi0wLjg5NCAyLTJzLTAuODk0LTItMi0yaC02bC0wLjQ1LTAuODk0Yy0wLjMzNy0wLjY4MS0xLjAzMS0xLjEwNi0xLjc4OC0xLjEwNmgtNy41MjVjLTAuNzU2IDAtMS40NSAwLjQyNS0xLjc4NyAxLjEwNnpNMjYgOGgtMjRsMS4zMjUgMjEuMTg4YzAuMSAxLjU4MSAxLjQxMyAyLjgxMyAyLjk5NCAyLjgxM2gxNS4zNjJjMS41ODEgMCAyLjg5NC0xLjIzMSAyLjk5NC0yLjgxM2wxLjMyNS0yMS4xODh6XCIgfSwgbnVsbCwgLTEpLCBMdCA9IFtcbiAgQnRcbl0sIER0ID0ge1xuICBrZXk6IDAsXG4gIGNsYXNzOiBcImNrLWNwLWxpbmVhci1hbmdsZS1jb250YWluZXJcIlxufSwgUnQgPSB7IGNsYXNzOiBcImNrLWdyYWRpZW50LXNldC1sYWJlbFwiIH0sIFR0ID0gW1widmFsdWVcIl0sIEh0ID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcImNrLWNwLWxpbmVhci1hbmdsZS1jb250YWluZXJcIlxufSwgRXQgPSB7IGNsYXNzOiBcImNrLWdyYWRpZW50LXNldC1sYWJlbFwiIH0sIFl0ID0gW1widmFsdWVcIl0sIFh0ID0geyBzdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxcmVtXCIgfSB9LCBPdCA9IHsgY2xhc3M6IFwiY2stZ3JhZGllbnQtc2V0LWxhYmVsXCIgfSwgVXQgPSBbXCJ2YWx1ZVwiXSwgR3QgPSAvKiBAX19QVVJFX18gKi8gQSh7XG4gIF9fbmFtZTogXCJQaWNrZXJNZW51XCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZToge1xuICAgICAgZGVmYXVsdDogXCJncmFkaWVudFwiLFxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBpbnB1dFR5cGU6IHsgZGVmYXVsdDogXCJSR0JcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgZ3JhZGllbnRUeXBlOiB7IGRlZmF1bHQ6IFwibGluZWFyXCIsIHR5cGU6IFN0cmluZyB9LFxuICAgIGlzRXllRHJvcHBlclVzaW5nOiB7IGRlZmF1bHQ6ICExLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0NvbG9yTGlzdDogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIHNob3dFeWVEcm9wOiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0lucHV0TWVudTogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIGFuZ2xlOiB7IGRlZmF1bHQ6IDkwLCB0eXBlOiBOdW1iZXIgfSxcbiAgICBwZXJjZW50YWdlWDogeyBkZWZhdWx0OiA1MCwgdHlwZTogTnVtYmVyIH0sXG4gICAgcGVyY2VudGFnZVk6IHsgZGVmYXVsdDogNTAsIHR5cGU6IE51bWJlciB9LFxuICAgIGxvY2FsOiB7IGRlZmF1bHQ6IHsgYW5nbGU6IFwiXCIsIHBvc2l0aW9uWDogXCJcIiwgcG9zaXRpb25ZOiBcIlwiIH0sIHR5cGU6IE9iamVjdCB9LFxuICAgIGljb25DbGFzc2VzOiB7IGRlZmF1bHQ6IHsgbGluZWFyOiBcIlwiLCByYWRpYWw6IFwiXCIsIHJ1bGVyOiBcIlwiLCBleWVEcm9wZXI6IFwiXCIsIGlucHV0TWVudTogXCJcIiwgc2F2ZTogXCJcIiwgZGVsZXRlOiBcIlwiIH0sIHR5cGU6IE9iamVjdCB9XG4gIH0sXG4gIGVtaXRzOiBbXCJvblNhdmVDb2xvclwiLCBcIm9uQ2hhbmdlTW9kZVwiLCBcIm9uQ2hhbmdlSW5wdXRUeXBlXCIsIFwib25EZWxldGVDb2xvclwiLCBcIm9uQ2xpY2tFeWVEcm9wcGVyXCIsIFwidXBkYXRlOmFuZ2xlXCIsIFwidXBkYXRlOnBlcmNlbnRhZ2VYXCIsIFwidXBkYXRlOnBlcmNlbnRhZ2VZXCIsIFwib25JbnB1dFwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBvID0gUygpLCBhID0gUyghMSksIGkgPSBTKCExKSwgdSA9IFMoITEpLCBnID0gZCwgcyA9ICh2LCBtKSA9PiB7XG4gICAgICBzd2l0Y2ggKG0pIHtcbiAgICAgICAgY2FzZSBcImFuZ2xlXCI6XG4gICAgICAgICAgZyhcInVwZGF0ZTphbmdsZVwiLCBwYXJzZUludCh2LnRhcmdldC52YWx1ZSkpLCBnKFwib25JbnB1dFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBlcmNlbnRhZ2VYXCI6XG4gICAgICAgICAgZyhcInVwZGF0ZTpwZXJjZW50YWdlWFwiLCBwYXJzZUludCh2LnRhcmdldC52YWx1ZSkpLCBnKFwib25JbnB1dFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBlcmNlbnRhZ2VZXCI6XG4gICAgICAgICAgZyhcInVwZGF0ZTpwZXJjZW50YWdlWVwiLCBwYXJzZUludCh2LnRhcmdldC52YWx1ZSkpLCBnKFwib25JbnB1dFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBiID0gKHYpID0+IHtcbiAgICAgIHUudmFsdWUgPSAhMSwgZyhcIm9uQ2hhbmdlSW5wdXRUeXBlXCIsIHYpO1xuICAgIH0sIGYgPSAoKSA9PiB7XG4gICAgICB1LnZhbHVlID0gIXUudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gKHYsIG0pID0+ICh5KCksIEkoWGUsIG51bGwsIFtcbiAgICAgIHgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJjay1jcC1tZW51XCIsXG4gICAgICAgIHN0eWxlOiBHKG4ubW9kZSA9PSBcImdyYWRpZW50XCIgPyBcIlwiIDogXCJqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcIilcbiAgICAgIH0sIFtcbiAgICAgICAgbi5tb2RlID09IFwiZ3JhZGllbnRcIiA/ICh5KCksIEkoXCJkaXZcIiwgcnQsIFtcbiAgICAgICAgICB4KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogUihbXCJjcC1idG5cIiwgbi5ncmFkaWVudFR5cGUgPT0gXCJsaW5lYXJcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXSksXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzBdIHx8IChtWzBdID0gKE4pID0+IHYuJGVtaXQoXCJvbkNoYW5nZU1vZGVcIiwgXCJsaW5lYXJcIikpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5saW5lYXIgPyBcIlwiIDogXCJwYWRkaW5nOiA3cHg7XCJ9YClcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLmxpbmVhciA/ICh5KCksIEkoXCJpXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICBjbGFzczogUihuLmljb25DbGFzc2VzLmxpbmVhcilcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgaXQsIGN0KSlcbiAgICAgICAgICBdLCA2KSxcbiAgICAgICAgICB4KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogUihbXCJjcC1idG5cIiwgbi5ncmFkaWVudFR5cGUgPT0gXCJyYWRpYWxcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXSksXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzFdIHx8IChtWzFdID0gKE4pID0+IHYuJGVtaXQoXCJvbkNoYW5nZU1vZGVcIiwgXCJyYWRpYWxcIikpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5yYWRpYWwgPyBcIlwiIDogXCJwYWRkaW5nOiA2cHg7XCJ9YClcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLnJhZGlhbCA/ICh5KCksIEkoXCJpXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICBjbGFzczogUihuLmljb25DbGFzc2VzLnJhZGlhbClcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgZHQsIGd0KSlcbiAgICAgICAgICBdLCA2KSxcbiAgICAgICAgICBaKHgoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBSKFtcImNwLWJ0blwiLCBhLnZhbHVlID8gXCJhY3RpdmVcIiA6IFwiXCJdKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bMl0gfHwgKG1bMl0gPSAoTikgPT4gYS52YWx1ZSA9ICFhLnZhbHVlKSxcbiAgICAgICAgICAgIHN0eWxlOiBHKGAke24uaWNvbkNsYXNzZXMucnVsZXIgPyBcIlwiIDogXCJwYWRkaW5nOiA3cHg7XCJ9YClcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLnJ1bGVyID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMucnVsZXIpXG4gICAgICAgICAgICB9LCBudWxsLCAyKSkgOiAoeSgpLCBJKFwic3ZnXCIsIHZ0LCBmdCkpXG4gICAgICAgICAgXSwgNiksIFtcbiAgICAgICAgICAgIFtfLCBuLmdyYWRpZW50VHlwZSA9PSBcImxpbmVhclwiXVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIFooeChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IFIoW1wiY3AtYnRuXCIsIGkudmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIl0pLFxuICAgICAgICAgICAgb25DbGljazogbVszXSB8fCAobVszXSA9IChOKSA9PiBpLnZhbHVlID0gIWkudmFsdWUpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5ydWxlciA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMucnVsZXIgPyAoeSgpLCBJKFwiaVwiLCB7XG4gICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgY2xhc3M6IFIobi5pY29uQ2xhc3Nlcy5ydWxlcilcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgaHQsIGJ0KSlcbiAgICAgICAgICBdLCA2KSwgW1xuICAgICAgICAgICAgW18sIG4uZ3JhZGllbnRUeXBlID09IFwicmFkaWFsXCJdXG4gICAgICAgICAgXSlcbiAgICAgICAgXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIHgoXCJkaXZcIiwge1xuICAgICAgICAgIHJlZl9rZXk6IFwicmlnaHRDb250YWluZXJcIixcbiAgICAgICAgICByZWY6IG8sXG4gICAgICAgICAgY2xhc3M6IFwiY2stY3AtY29udHJvbGxlci1iYXJcIixcbiAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50XCI6IFwiZW5kXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfVxuICAgICAgICB9LCBbXG4gICAgICAgICAgbi5pc0V5ZURyb3BwZXJVc2luZyAmJiBuLnNob3dFeWVEcm9wID8gKHkoKSwgSShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgaWQ6IFwiY3AtYnRuLWV5ZWRyb3BwZXJcIixcbiAgICAgICAgICAgIGNsYXNzOiBcImNwLWJ0blwiLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5leWVEcm9wZXIgPyBcIlwiIDogXCJwYWRkaW5nOiA3cHg7XCJ9YCksXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzRdIHx8IChtWzRdID0gKE4pID0+IHYuJGVtaXQoXCJvbkNsaWNrRXllRHJvcHBlclwiKSlcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLmV5ZURyb3BlciA/ICh5KCksIEkoXCJpXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICBjbGFzczogUihuLmljb25DbGFzc2VzLmV5ZURyb3BlcilcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwga3QsIHd0KSlcbiAgICAgICAgICBdLCA0KSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgICBuLnNob3dJbnB1dE1lbnUgPyAoeSgpLCBJKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogUihbXCJjcC1idG5cIiwgdS52YWx1ZSA/IFwiYWN0aXZlXCIgOiBcIlwiXSksXG4gICAgICAgICAgICBvbkNsaWNrOiBmLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5pbnB1dE1lbnUgPyBcIlwiIDogXCJwYWRkaW5nOiA3cHg7XCJ9YClcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLmlucHV0TWVudSA/ICh5KCksIEkoXCJpXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICBjbGFzczogUihuLmljb25DbGFzc2VzLmlucHV0TWVudSlcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgeHQsIEl0KSlcbiAgICAgICAgICBdLCA2KSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgICBaKHZlKG90LCB7XG4gICAgICAgICAgICBpbnB1dFR5cGU6IG4uaW5wdXRUeXBlLFxuICAgICAgICAgICAgb25PbkNoYW5nZUlucHV0TmFtZTogYlxuICAgICAgICAgIH0sIG51bGwsIDgsIFtcImlucHV0VHlwZVwiXSksIFtcbiAgICAgICAgICAgIFtfLCB1LnZhbHVlXVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIG4uc2hvd0NvbG9yTGlzdCA/ICh5KCksIEkoXCJidXR0b25cIiwge1xuICAgICAgICAgICAga2V5OiAyLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBcImNwLWJ0blwiLFxuICAgICAgICAgICAgb25DbGljazogbVs1XSB8fCAobVs1XSA9IChOKSA9PiB2LiRlbWl0KFwib25TYXZlQ29sb3JcIikpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5zYXZlID8gXCJcIiA6IFwicGFkZGluZzogN3B4O1wifWApXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgbi5pY29uQ2xhc3Nlcy5zYXZlID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMuc2F2ZSlcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgTXQsIE50KSlcbiAgICAgICAgICBdLCA0KSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgICBuLm1vZGUgPT0gXCJncmFkaWVudFwiID8gKHkoKSwgSShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBrZXk6IDMsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IFwiY3AtYnRuXCIsXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzZdIHx8IChtWzZdID0gKE4pID0+IHYuJGVtaXQoXCJvbkRlbGV0ZUNvbG9yXCIpKSxcbiAgICAgICAgICAgIHN0eWxlOiBHKGAke24uaWNvbkNsYXNzZXMuZGVsZXRlID8gXCJcIiA6IFwicGFkZGluZzogNy41cHg7XCJ9YClcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLmRlbGV0ZSA/ICh5KCksIEkoXCJpXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICBjbGFzczogUihuLmljb25DbGFzc2VzLmRlbGV0ZSlcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgU3QsIEx0KSlcbiAgICAgICAgICBdLCA0KSkgOiBWKFwiXCIsICEwKVxuICAgICAgICBdLCA1MTIpXG4gICAgICBdLCA0KSxcbiAgICAgIG4ubW9kZSA9PSBcImdyYWRpZW50XCIgPyBaKCh5KCksIEkoXCJkaXZcIiwgRHQsIFtcbiAgICAgICAgeChcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgeChcInBcIiwgUnQsIFtcbiAgICAgICAgICAgIGtlKHEobi5sb2NhbC5hbmdsZSA/IG4ubG9jYWwuYW5nbGUgOiBcIkFuZ2xlXCIpICsgXCIgXCIsIDEpLFxuICAgICAgICAgICAgeChcInNwYW5cIiwgbnVsbCwgcShuLmFuZ2xlKSArIFwiwrBcIiwgMSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJyYW5nZVwiLFxuICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgIG1heDogXCIzNjBcIixcbiAgICAgICAgICAgIHZhbHVlOiBuLmFuZ2xlLFxuICAgICAgICAgICAgb25JbnB1dDogbVs3XSB8fCAobVs3XSA9IChOKSA9PiBzKE4sIFwiYW5nbGVcIikpXG4gICAgICAgICAgfSwgbnVsbCwgNDAsIFR0KVxuICAgICAgICBdKVxuICAgICAgXSwgNTEyKSksIFtcbiAgICAgICAgW18sIG4uZ3JhZGllbnRUeXBlID09IFwibGluZWFyXCIgJiYgYS52YWx1ZV1cbiAgICAgIF0pIDogVihcIlwiLCAhMCksXG4gICAgICBuLm1vZGUgPT0gXCJncmFkaWVudFwiID8gWigoeSgpLCBJKFwiZGl2XCIsIEh0LCBbXG4gICAgICAgIHgoXCJkaXZcIiwgbnVsbCwgW1xuICAgICAgICAgIHgoXCJwXCIsIEV0LCBbXG4gICAgICAgICAgICBrZShxKG4ubG9jYWwucG9zaXRpb25YID8gbi5sb2NhbC5wb3NpdGlvblggOiBcIlBvc2l0aW9uIFhcIikgKyBcIiBcIiwgMSksXG4gICAgICAgICAgICB4KFwic3BhblwiLCBudWxsLCBxKG4ucGVyY2VudGFnZVgpICsgXCIlXCIsIDEpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgeChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICBtYXg6IFwiMTAwXCIsXG4gICAgICAgICAgICB2YWx1ZTogbi5wZXJjZW50YWdlWCxcbiAgICAgICAgICAgIG9uSW5wdXQ6IG1bOF0gfHwgKG1bOF0gPSAoTikgPT4gcyhOLCBcInBlcmNlbnRhZ2VYXCIpKVxuICAgICAgICAgIH0sIG51bGwsIDQwLCBZdClcbiAgICAgICAgXSksXG4gICAgICAgIHgoXCJkaXZcIiwgWHQsIFtcbiAgICAgICAgICB4KFwicFwiLCBPdCwgW1xuICAgICAgICAgICAga2UocShuLmxvY2FsLnBvc2l0aW9uWSA/IG4ubG9jYWwucG9zaXRpb25ZIDogXCJQb3NpdGlvbiBZXCIpICsgXCIgXCIsIDEpLFxuICAgICAgICAgICAgeChcInNwYW5cIiwgbnVsbCwgcShuLnBlcmNlbnRhZ2VZKSArIFwiJVwiLCAxKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIHgoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcInJhbmdlXCIsXG4gICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgbWF4OiBcIjEwMFwiLFxuICAgICAgICAgICAgdmFsdWU6IG4ucGVyY2VudGFnZVksXG4gICAgICAgICAgICBvbklucHV0OiBtWzldIHx8IChtWzldID0gKE4pID0+IHMoTiwgXCJwZXJjZW50YWdlWVwiKSlcbiAgICAgICAgICB9LCBudWxsLCA0MCwgVXQpXG4gICAgICAgIF0pXG4gICAgICBdLCA1MTIpKSwgW1xuICAgICAgICBbXywgbi5ncmFkaWVudFR5cGUgPT0gXCJyYWRpYWxcIiAmJiBpLnZhbHVlXVxuICAgICAgXSkgOiBWKFwiXCIsICEwKVxuICAgIF0sIDY0KSk7XG4gIH1cbn0pLCBQdCA9IC8qIEBfX1BVUkVfXyAqLyBBKHtcbiAgX19uYW1lOiBcIkdyYWRpZW50QmFyXCIsXG4gIGVtaXRzOiBbXCJvbkFkZENvbG9yXCIsIFwib25Nb3VzZURvd25cIl0sXG4gIHNldHVwKG4sIHsgZW1pdDogZCB9KSB7XG4gICAgY29uc3QgbyA9IG9lKFwiZ3JhZGllbnRCYXJcIiksIGEgPSAoaSkgPT4ge1xuICAgICAgaS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgcmV0dXJuIChpLCB1KSA9PiAoeSgpLCBJKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImdyYWRpZW50LWJhclwiLFxuICAgICAgb25Nb3VzZWRvd246IHVbMV0gfHwgKHVbMV0gPSAoZykgPT4gaS4kZW1pdChcIm9uTW91c2VEb3duXCIsIGcpKSxcbiAgICAgIG9uRHJhZ3N0YXJ0OiBhXG4gICAgfSwgW1xuICAgICAgeChcImRpdlwiLCB7XG4gICAgICAgIHJlZl9rZXk6IFwiZ3JhZGllbnRCYXJcIixcbiAgICAgICAgcmVmOiBvLFxuICAgICAgICBjbGFzczogXCJncmFkaWVudC1jb250YWluZXJcIixcbiAgICAgICAgb25EYmxjbGljazogdVswXSB8fCAodVswXSA9IChnKSA9PiBpLiRlbWl0KFwib25BZGRDb2xvclwiLCBnKSlcbiAgICAgIH0sIG51bGwsIDU0NClcbiAgICBdLCAzMikpO1xuICB9XG59KSwgenQgPSAvKiBAX19QVVJFX18gKi8geChcImRpdlwiLCB7IGNsYXNzOiBcImNvbG91ci1hcmVhLW1hc2tcIiB9LCBudWxsLCAtMSksIEF0ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiUGlja2VyV3JhcFwiLFxuICBlbWl0czogW1wib25Nb3VzZURvd25cIl0sXG4gIHNldHVwKG4pIHtcbiAgICBjb25zdCBkID0gb2UoXCJjYW52YXNcIiksIG8gPSBvZShcInBpY2tlcldyYXBcIiksIGEgPSBvZShcInBpY2tlclBvaW50ZXJcIiksIGkgPSAodSkgPT4ge1xuICAgICAgdS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgcmV0dXJuICh1LCBnKSA9PiAoeSgpLCBJKFwiZGl2XCIsIHtcbiAgICAgIHJlZl9rZXk6IFwicGlja2VyV3JhcFwiLFxuICAgICAgcmVmOiBvLFxuICAgICAgY2xhc3M6IFwiY3AtcGlja2VyLXdyYXBcIixcbiAgICAgIG9uTW91c2Vkb3duOiBnWzBdIHx8IChnWzBdID0gKHMpID0+IHUuJGVtaXQoXCJvbk1vdXNlRG93blwiLCBzKSksXG4gICAgICBvbkRyYWdzdGFydDogaVxuICAgIH0sIFtcbiAgICAgIHgoXCJjYW52YXNcIiwge1xuICAgICAgICByZWZfa2V5OiBcImNhbnZhc1wiLFxuICAgICAgICByZWY6IGQsXG4gICAgICAgIGNsYXNzOiBcImNvbG91ci1hcmVhXCJcbiAgICAgIH0sIG51bGwsIDUxMiksXG4gICAgICB6dCxcbiAgICAgIHgoXCJkaXZcIiwge1xuICAgICAgICByZWZfa2V5OiBcInBpY2tlclBvaW50ZXJcIixcbiAgICAgICAgcmVmOiBhLFxuICAgICAgICBjbGFzczogXCJjb2xvdXItYXJlYS1wb2ludC1jaXJjbGVcIlxuICAgICAgfSwgbnVsbCwgNTEyKVxuICAgIF0sIDU0NCkpO1xuICB9XG59KSwgS3QgPSB7IGNsYXNzOiBcInBpY2tlci1odWVcIiB9LCBXdCA9IFtcInZhbHVlXCJdLCBGdCA9IC8qIEBfX1BVUkVfXyAqLyBBKHtcbiAgX19uYW1lOiBcIlBpY2tlckh1ZVwiLFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHsgZGVmYXVsdDogMCwgdHlwZTogTnVtYmVyIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTptb2RlbFZhbHVlXCIsIFwib25JbnB1dFwiLCBcIm9uQ2hhbmdlXCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBkLCBhID0gKGkpID0+IHtcbiAgICAgIG8oXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBwYXJzZUZsb2F0KGkudGFyZ2V0LnZhbHVlKSksIG8oXCJvbklucHV0XCIsIGkpO1xuICAgIH07XG4gICAgcmV0dXJuIChpLCB1KSA9PiAoeSgpLCBJKFwiZGl2XCIsIEt0LCBbXG4gICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICB2YWx1ZTogbi5tb2RlbFZhbHVlLFxuICAgICAgICBjbGFzczogXCJwaWNrZXItaHVlLXJhbmdlLXNsaWRlclwiLFxuICAgICAgICB0eXBlOiBcInJhbmdlXCIsXG4gICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgIG1heDogXCIzNjBcIixcbiAgICAgICAgc3RlcDogXCIwLjFcIixcbiAgICAgICAgb25JbnB1dDogYSxcbiAgICAgICAgb25DaGFuZ2U6IHVbMF0gfHwgKHVbMF0gPSAoZykgPT4gaS4kZW1pdChcIm9uQ2hhbmdlXCIsIGcpKVxuICAgICAgfSwgbnVsbCwgNDAsIFd0KVxuICAgIF0pKTtcbiAgfVxufSksIHF0ID0geyBjbGFzczogXCJvcGFjaXR5LWJhclwiIH0sIGp0ID0geyBjbGFzczogXCJwaWNrZXItb3BhY2l0eS1zbGlkZXIgb3BhY2l0eS1iYXItYmFja2dyb3VuZFwiIH0sIEp0ID0gW1widmFsdWVcIl0sIFF0ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiT3BhY2l0eUJhclwiLFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHsgZGVmYXVsdDogMCwgdHlwZTogTnVtYmVyIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTptb2RlbFZhbHVlXCIsIFwib25JbnB1dFwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBvID0gb2UoXCJvcGFjaXR5U2xpZGVyXCIpLCBhID0gZCwgaSA9ICh1KSA9PiB7XG4gICAgICBhKFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgcGFyc2VJbnQodS50YXJnZXQudmFsdWUpKSwgYShcIm9uSW5wdXRcIiwgdSk7XG4gICAgfTtcbiAgICByZXR1cm4gKHUsIGcpID0+ICh5KCksIEkoXCJkaXZcIiwgcXQsIFtcbiAgICAgIHgoXCJkaXZcIiwganQsIFtcbiAgICAgICAgeChcImlucHV0XCIsIHtcbiAgICAgICAgICByZWZfa2V5OiBcIm9wYWNpdHlTbGlkZXJcIixcbiAgICAgICAgICByZWY6IG8sXG4gICAgICAgICAgdmFsdWU6IG4ubW9kZWxWYWx1ZSxcbiAgICAgICAgICBjbGFzczogXCJvcGFjaXR5X19zbGlkZXJcIixcbiAgICAgICAgICB0eXBlOiBcInJhbmdlXCIsXG4gICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICBtYXg6IFwiMTAwXCIsXG4gICAgICAgICAgb25JbnB1dDogaVxuICAgICAgICB9LCBudWxsLCA0MCwgSnQpXG4gICAgICBdKVxuICAgIF0pKTtcbiAgfVxufSksIFp0ID0geyBjbGFzczogXCJjay1jcC1pbnB1dC1jb250ZW50XCIgfSwgX3QgPSB7IGNsYXNzOiBcImNrLWNwLWlucHV0LWxhYmVsXCIgfSwgZWwgPSBbXCJtaW5cIiwgXCJtYXhcIiwgXCJ2YWx1ZVwiXSwgWSA9IC8qIEBfX1BVUkVfXyAqLyBBKHtcbiAgX19uYW1lOiBcIklucHV0TnVtYmVyXCIsXG4gIHByb3BzOiB7XG4gICAgbGFiZWw6IHsgZGVmYXVsdDogXCJcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgbW9kZWxWYWx1ZTogeyBkZWZhdWx0OiAwLCB0eXBlOiBOdW1iZXIgfSxcbiAgICBtaW46IHsgZGVmYXVsdDogMCwgdHlwZTogTnVtYmVyIH0sXG4gICAgbWF4OiB7IGRlZmF1bHQ6IDEwMCwgdHlwZTogTnVtYmVyIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTptb2RlbFZhbHVlXCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBuLCBhID0gZCwgaSA9IFMoby5tb2RlbFZhbHVlKTtcbiAgICB3ZSgoKSA9PiBvLm1vZGVsVmFsdWUsIChmLCB2KSA9PiB7XG4gICAgICBmICE9PSB2ICYmIChpLnZhbHVlID0gZik7XG4gICAgfSwgeyBpbW1lZGlhdGU6ICEwIH0pO1xuICAgIGNvbnN0IHUgPSAoZikgPT4ge1xuICAgICAgY29uc3QgdiA9IChOKSA9PiB7XG4gICAgICAgIGkudmFsdWUgPSBOLCBhKFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgTik7XG4gICAgICB9LCBtID0gZi50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoIW0pXG4gICAgICAgIHJldHVybiB2KG8ubW9kZWxWYWx1ZSk7XG4gICAgICBpZiAocGFyc2VJbnQobSkgPiBvLm1heClcbiAgICAgICAgcmV0dXJuIHYoby5tYXgpO1xuICAgICAgYShcInVwZGF0ZTptb2RlbFZhbHVlXCIsIHBhcnNlSW50KG0pKTtcbiAgICB9LCBnID0gKGYpID0+IHtcbiAgICAgIGkudmFsdWUgPSBmLnRhcmdldC52YWx1ZTtcbiAgICB9LCBzID0gKGYpID0+IHtcbiAgICAgIGlmIChbXCJLZXlFXCIsIFwiRXF1YWxcIiwgXCJFcXVhbFwiLCBcIkJhY2tzbGFzaFwiLCBcIlNsYXNoXCIsIFwiTnVtcGFkRGVjaW1hbFwiLCBcIk51bXBhZEFkZFwiXS5pbmNsdWRlcyhmLmNvZGUpKVxuICAgICAgICByZXR1cm4gZi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZi5jb2RlID09PSBcIkVudGVyXCIgJiYgdShmKTtcbiAgICB9LCBiID0gdTtcbiAgICByZXR1cm4gKGYsIHYpID0+ICh5KCksIEkoXCJkaXZcIiwgWnQsIFtcbiAgICAgIHgoXCJzcGFuXCIsIF90LCBxKG4ubGFiZWwpLCAxKSxcbiAgICAgIHgoXCJpbnB1dFwiLCB7XG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgIG1pbjogbi5taW4sXG4gICAgICAgIG1heDogbi5tYXgsXG4gICAgICAgIHZhbHVlOiBpLnZhbHVlLFxuICAgICAgICBvbklucHV0OiBnLFxuICAgICAgICBvbktleWRvd246IHMsXG4gICAgICAgIG9uRm9jdXNvdXQ6IHZbMF0gfHwgKHZbMF0gPSAvL0B0cy1pZ25vcmVcbiAgICAgICAgKC4uLm0pID0+IG1lKGIpICYmIG1lKGIpKC4uLm0pKVxuICAgICAgfSwgbnVsbCwgNDAsIGVsKVxuICAgIF0pKTtcbiAgfVxufSksIHRsID0geyBjbGFzczogXCJjay1jcC1pbnB1dC1jb250ZW50IGNvbG9yLWhleFwiIH0sIGxsID0gLyogQF9fUFVSRV9fICovIHgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY2stY3AtaW5wdXQtbGFiZWxcIiB9LCBcIkhFWFwiLCAtMSksIG5sID0gW1widmFsdWVcIl0sIGFsID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiSW5wdXRIZXhcIixcbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7fVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIl0sXG4gIHNldHVwKG4sIHsgZW1pdDogZCB9KSB7XG4gICAgY29uc3QgbyA9IG4sIGEgPSBkLCBpID0gUyhcIlwiKSwgdSA9IChmKSA9PiB7XG4gICAgICBjb25zdCB2ID0gZi50YXJnZXQudmFsdWU7XG4gICAgICBpLnZhbHVlID0gdiwgaS52YWx1ZSA9IGAjJHt2LnJlcGxhY2UoLyMvZywgXCJcIil9YDtcbiAgICB9LCBnID0gKGYpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBmLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICh2ID09PSBvLm1vZGVsVmFsdWUpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmICghL14jWzAtOWEtZkEtRl0rJC8udGVzdCh2KSkge1xuICAgICAgICBpLnZhbHVlID0gby5tb2RlbFZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgbSA9IHYucmVwbGFjZSgvIy9nLCBcIlwiKTtcbiAgICAgIHN3aXRjaCAobS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIG0gPSBvLm1vZGVsVmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG0gPSBtLnJlcGVhdCgzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbSA9IG0uc2xpY2UoMCwgMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG0gPSBtLnNsaWNlKDAsIDYpO1xuICAgICAgfVxuICAgICAgaS52YWx1ZSA9IGAjJHttLnRvVXBwZXJDYXNlKCl9YCwgYShcInVwZGF0ZTptb2RlbFZhbHVlXCIsIGkudmFsdWUpO1xuICAgIH0sIHMgPSAoZikgPT4ge1xuICAgICAgZi5jb2RlID09PSBcIkVudGVyXCIgJiYgZyhmKTtcbiAgICB9LCBiID0gZztcbiAgICByZXR1cm4gd2UoKCkgPT4gby5tb2RlbFZhbHVlLCAoZiwgdikgPT4ge1xuICAgICAgZiAhPT0gdiAmJiAoaS52YWx1ZSA9IGYpO1xuICAgIH0sIHsgaW1tZWRpYXRlOiAhMCB9KSwgKGYsIHYpID0+ICh5KCksIEkoXCJkaXZcIiwgdGwsIFtcbiAgICAgIGxsLFxuICAgICAgeChcImlucHV0XCIsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHZhbHVlOiBpLnZhbHVlLFxuICAgICAgICBvbklucHV0OiB1LFxuICAgICAgICBvbktleWRvd246IHMsXG4gICAgICAgIG9uRm9jdXNvdXQ6IHZbMF0gfHwgKHZbMF0gPSAvL0B0cy1pZ25vcmVcbiAgICAgICAgKC4uLm0pID0+IG1lKGIpICYmIG1lKGIpKC4uLm0pKVxuICAgICAgfSwgbnVsbCwgNDAsIG5sKVxuICAgIF0pKTtcbiAgfVxufSksIHNsID0gKG4pID0+IHtcbiAgY29uc3QgZCA9IC9ecmdiXFwoKFxccypcXGQrXFxzKiksKFxccypcXGQrXFxzKiksKFxccypcXGQrXFxzKilcXCkkL2k7XG4gIGlmICghZC50ZXN0KG4pKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCBvID0gZC5leGVjKG4pO1xuICBpZiAoIW8pXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGEgPSBwYXJzZUludChvWzFdLnRyaW0oKSwgMTApLCBpID0gcGFyc2VJbnQob1syXS50cmltKCksIDEwKSwgdSA9IHBhcnNlSW50KG9bM10udHJpbSgpLCAxMCk7XG4gIHJldHVybiB7XG4gICAgcjogYSxcbiAgICBnOiBpLFxuICAgIGI6IHVcbiAgfTtcbn0sIG9sID0gKG4pID0+IHtcbiAgY29uc3QgZCA9IC9ecmdiYT9cXCgoXFxzKlxcZCtcXHMqKSwoXFxzKlxcZCtcXHMqKSwoXFxzKlxcZCtcXHMqKSwoXFxzKltcXGQuXStcXHMqKVxcKSQvaTtcbiAgaWYgKCFkLnRlc3QobikpXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG8gPSBkLmV4ZWMobik7XG4gIGlmICghbylcbiAgICByZXR1cm4gbnVsbDtcbiAgY29uc3QgYSA9IHBhcnNlSW50KG9bMV0udHJpbSgpLCAxMCksIGkgPSBwYXJzZUludChvWzJdLnRyaW0oKSwgMTApLCB1ID0gcGFyc2VJbnQob1szXS50cmltKCksIDEwKSwgZyA9IHBhcnNlRmxvYXQob1s0XS50cmltKCkpO1xuICByZXR1cm4ge1xuICAgIHI6IGEsXG4gICAgZzogaSxcbiAgICBiOiB1LFxuICAgIGE6IGdcbiAgfTtcbn0sIHJsID0gKG4pID0+IHtcbiAgY29uc3QgZCA9IC9eIz8oW2EtZlxcZF17OH0pJC9pO1xuICBpZiAoIWQudGVzdChuKSlcbiAgICByZXR1cm4gbnVsbDtcbiAgY29uc3QgbyA9IGQuZXhlYyhuKTtcbiAgaWYgKCFvKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCBhID0gb1sxXSwgaSA9IGEuc3Vic3RyaW5nKDYsIDgpLCB1ID0gcGFyc2VJbnQoYS5zdWJzdHJpbmcoMCwgMiksIDE2KSwgZyA9IHBhcnNlSW50KGEuc3Vic3RyaW5nKDIsIDQpLCAxNiksIHMgPSBwYXJzZUludChhLnN1YnN0cmluZyg0LCA2KSwgMTYpLCBiID0gcGFyc2VJbnQoaSwgMTYpIC8gMjU1O1xuICByZXR1cm4geyByOiB1LCBnLCBiOiBzLCBhOiBiIH07XG59LCBpbCA9IChuLCBkLCBvLCBhKSA9PiB7XG4gIGZ1bmN0aW9uIGkoZikge1xuICAgIGNvbnN0IHYgPSBmLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gdi5sZW5ndGggPT09IDEgPyBcIjBcIiArIHYgOiB2O1xuICB9XG4gIGNvbnN0IHUgPSBpKE1hdGgucm91bmQobikpLCBnID0gaShNYXRoLnJvdW5kKGQpKSwgcyA9IGkoTWF0aC5yb3VuZChvKSksIGIgPSBpKE1hdGgucm91bmQoYSAqIDI1NSkpO1xuICByZXR1cm4gYCMke3V9JHtnfSR7c30ke2J9YDtcbn0sIGdlID0gKG4pID0+IHtcbiAgdmFyIGQ7XG4gIHRyeSB7XG4gICAgbGV0IG8gPSAoZCA9IG4ucmVwbGFjZShcbiAgICAgIC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAoZywgcywgYiwgZikgPT4gXCIjXCIgKyBzICsgcyArIGIgKyBiICsgZiArIGZcbiAgICApLnN1YnN0cmluZygxKS5tYXRjaCgvLnsyfS9nKSkgPT0gbnVsbCA/IHZvaWQgMCA6IGQubWFwKChnKSA9PiBwYXJzZUludChnLCAxNikpLCBhID0gbyA9PSBudWxsID8gdm9pZCAwIDogb1swXSwgaSA9IG8gPT0gbnVsbCA/IHZvaWQgMCA6IG9bMV0sIHUgPSBvID09IG51bGwgPyB2b2lkIDAgOiBvWzJdO1xuICAgIHJldHVybiBOdW1iZXIuaXNOYU4oYSkgfHwgTnVtYmVyLmlzTmFOKGkpIHx8IE51bWJlci5pc05hTih1KSB8fCBhID09PSB2b2lkIDAgfHwgaSA9PT0gdm9pZCAwIHx8IHUgPT09IHZvaWQgMCA/IG51bGwgOiB7XG4gICAgICByOiBhLFxuICAgICAgZzogaSxcbiAgICAgIGI6IHVcbiAgICB9O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSwgUSA9IChuLCBkLCBvKSA9PiB7XG4gIG4gPSBuIC8gMjU1LCBkID0gZCAvIDI1NSwgbyA9IG8gLyAyNTU7XG4gIGNvbnN0IGEgPSBNYXRoLm1heChuLCBkLCBvKSwgaSA9IE1hdGgubWluKG4sIGQsIG8pO1xuICBsZXQgdTtcbiAgcmV0dXJuIGEgPT09IG4gPyB1ID0gKGQgLSBvKSAvIChhIC0gaSkgOiBhID09PSBkID8gdSA9IDIgKyAobyAtIG4pIC8gKGEgLSBpKSA6IHUgPSA0ICsgKG4gLSBkKSAvIChhIC0gaSksIHUgKj0gNjAsIHUgPCAwICYmICh1ICs9IDM2MCksIE51bWJlci5pc05hTih1KSAmJiAodSA9IDApLCB1O1xufSwgdWwgPSAobiwgZCwgbykgPT4ge1xuICBkID0gZCAvIDEwMCwgbyA9IG8gLyAxMDA7XG4gIGxldCBhLCBpLCB1LCBnID0gW107XG4gIHJldHVybiBhID0gKDEgLSBNYXRoLmFicygyICogbyAtIDEpKSAqIGQsIGkgPSBhICogKDEgLSBNYXRoLmFicyhuIC8gNjAgJSAyIC0gMSkpLCB1ID0gbyAtIGEgLyAyLCBuID49IDAgJiYgbiA8IDYwICYmIChnID0gW2EsIGksIDBdKSwgbiA+PSA2MCAmJiBuIDwgMTIwICYmIChnID0gW2ksIGEsIDBdKSwgbiA+PSAxMjAgJiYgbiA8IDE4MCAmJiAoZyA9IFswLCBhLCBpXSksIG4gPj0gMTgwICYmIG4gPCAyNDAgJiYgKGcgPSBbMCwgaSwgYV0pLCBuID49IDI0MCAmJiBuIDwgMzAwICYmIChnID0gW2ksIDAsIGFdKSwgbiA+PSAzMDAgJiYgbiA8PSAzNjAgJiYgKGcgPSBbYSwgMCwgaV0pLCBnLm1hcCgocykgPT4gTWF0aC5yb3VuZCgyNTUgKiAocyArIHUpKSk7XG59LCAkZSA9IChuLCBkLCBvKSA9PiBcIiNcIiArICgxNjc3NzIxNiArIChvIHwgZCA8PCA4IHwgbiA8PCAxNikpLnRvU3RyaW5nKDE2KS5zbGljZSgxKSwgSGUgPSAobiwgZCwgbykgPT4ge1xuICBsZXQgYSA9IHVsKG4sIGQsIG8pO1xuICByZXR1cm4geyByZ2I6IGEsIGhleEE6ICRlKGFbMF0sIGFbMV0sIGFbMl0pIH07XG59LCBFZSA9IChuLCBkLCBvKSA9PiB7XG4gIGxldCBhLCBpLCB1LCBnLCBzLCBiLCBmID0gMCwgdiA9IFtdO1xuICBmb3IgKHZbMF0gPSBuIC8gMjU1LCB2WzFdID0gZCAvIDI1NSwgdlsyXSA9IG8gLyAyNTUsIGEgPSB2WzBdLCBpID0gdlswXSwgYiA9IDAsIHUgPSAwOyB1IDwgdi5sZW5ndGggLSAxOyB1KyspXG4gICAgdlt1ICsgMV0gPD0gYSAmJiAoYSA9IHZbdSArIDFdKSwgdlt1ICsgMV0gPj0gaSAmJiAoaSA9IHZbdSArIDFdLCBiID0gdSArIDEpO1xuICByZXR1cm4gYiA9PT0gMCAmJiAoZiA9ICh2WzFdIC0gdlsyXSkgLyAoaSAtIGEpKSwgYiA9PT0gMSAmJiAoZiA9IDIgKyAodlsyXSAtIHZbMF0pIC8gKGkgLSBhKSksIGIgPT09IDIgJiYgKGYgPSA0ICsgKHZbMF0gLSB2WzFdKSAvIChpIC0gYSkpLCBpc05hTihmKSAmJiAoZiA9IDApLCBmID0gZiAqIDYwLCBmIDwgMCAmJiAoZiA9IGYgKyAzNjApLCBnID0gKGEgKyBpKSAvIDIsIGEgPT09IGkgPyBzID0gMCA6IGcgPCAwLjUgPyBzID0gKGkgLSBhKSAvIChpICsgYSkgOiBzID0gKGkgLSBhKSAvICgyIC0gaSAtIGEpLCBzID0gcywgeyBoOiBmLCBzLCBsOiBnIH07XG59LCBZZSA9IChuLCBkLCBvKSA9PiB7XG4gIG4gPSBuICUgMzYwIC8gMzYwLCBkID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgZCkpLCBvID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgbykpO1xuICBsZXQgYSwgaSwgdTtcbiAgaWYgKGQgPT09IDApXG4gICAgYSA9IGkgPSB1ID0gbztcbiAgZWxzZSB7XG4gICAgY29uc3QgZyA9IChmLCB2LCBtKSA9PiAobSA8IDAgJiYgKG0gKz0gMSksIG0gPiAxICYmIChtIC09IDEpLCBtIDwgMC4xNjY2NjY2NjY2NjY2NjY2NiA/IGYgKyAodiAtIGYpICogNiAqIG0gOiBtIDwgMC41ID8gdiA6IG0gPCAwLjY2NjY2NjY2NjY2NjY2NjYgPyBmICsgKHYgLSBmKSAqICgwLjY2NjY2NjY2NjY2NjY2NjYgLSBtKSAqIDYgOiBmKSwgcyA9IG8gPCAwLjUgPyBvICogKDEgKyBkKSA6IG8gKyBkIC0gbyAqIGQsIGIgPSAyICogbyAtIHM7XG4gICAgYSA9IGcoYiwgcywgbiArIDEgLyAzKSwgaSA9IGcoYiwgcywgbiksIHUgPSBnKGIsIHMsIG4gLSAxIC8gMyk7XG4gIH1cbiAgcmV0dXJuIGEgPSBNYXRoLnJvdW5kKGEgKiAyNTUpLCBpID0gTWF0aC5yb3VuZChpICogMjU1KSwgdSA9IE1hdGgucm91bmQodSAqIDI1NSksIHsgcjogYSwgZzogaSwgYjogdSB9O1xufSwgY2wgPSAobiwgZCwgbykgPT4ge1xuICBsZXQgYSA9IDAsIGkgPSAwLCB1ID0gMDtcbiAgY29uc3QgZyA9IG4gLyA2MCwgcyA9IG8gKiBkLCBiID0gcyAqICgxIC0gTWF0aC5hYnMoZyAlIDIgLSAxKSksIGYgPSBvIC0gcztcbiAgc3dpdGNoIChNYXRoLmZsb29yKGcpICUgNikge1xuICAgIGNhc2UgMDpcbiAgICAgIGEgPSBzLCBpID0gYiwgdSA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBhID0gYiwgaSA9IHMsIHUgPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgYSA9IDAsIGkgPSBzLCB1ID0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGEgPSAwLCBpID0gYiwgdSA9IHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBhID0gYiwgaSA9IDAsIHUgPSBzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgYSA9IHMsIGkgPSAwLCB1ID0gYjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB7XG4gICAgcjogTWF0aC5yb3VuZCgoYSArIGYpICogMjU1KSxcbiAgICBnOiBNYXRoLnJvdW5kKChpICsgZikgKiAyNTUpLFxuICAgIGI6IE1hdGgucm91bmQoKHUgKyBmKSAqIDI1NSlcbiAgfTtcbn0sIGRsID0gKG4sIGQsIG8pID0+IHtcbiAgbiAvPSAyNTUsIGQgLz0gMjU1LCBvIC89IDI1NTtcbiAgY29uc3QgYSA9IE1hdGgubWF4KG4sIGQsIG8pLCBpID0gTWF0aC5taW4obiwgZCwgbyk7XG4gIGxldCB1LCBnLCBzID0gYTtcbiAgY29uc3QgYiA9IGEgLSBpO1xuICBpZiAoYSAhPT0gMClcbiAgICBnID0gYiAvIGE7XG4gIGVsc2VcbiAgICByZXR1cm4geyBoOiAwLCBzOiAwLCB2OiAwIH07XG4gIHJldHVybiBiID09PSAwID8gdSA9IDAgOiBhID09PSBuID8gdSA9IDYwICogKChkIC0gbykgLyBiICUgNikgOiBhID09PSBkID8gdSA9IDYwICogKChvIC0gbikgLyBiICsgMikgOiB1ID0gNjAgKiAoKG4gLSBkKSAvIGIgKyA0KSwgdSA8IDAgJiYgKHUgKz0gMzYwKSwge1xuICAgIGg6IE1hdGgucm91bmQodSksXG4gICAgczogTWF0aC5yb3VuZChnICogMTAwKSAvIDEwMCxcbiAgICB2OiBNYXRoLnJvdW5kKHMgKiAxMDApIC8gMTAwXG4gIH07XG59LCBwbCA9IChuLCBkLCBvKSA9PiB7XG4gIGNvbnN0IGEgPSAoMiAtIGQpICogbyAvIDIsIGkgPSBhICYmIGEgPCAxID8gZCAqIG8gLyAoYSA8IDAuNSA/IGEgKiAyIDogMiAtIGEgKiAyKSA6IGQ7XG4gIHJldHVybiB7IGg6IG4sIHM6IGksIGw6IGEgfTtcbn0sIGdsID0gKG4sIGQsIG8sIGEpID0+IHtcbiAgY29uc3QgaSA9IE1hdGgucm91bmQoMjU1ICogKDEgLSBuKSAqICgxIC0gYSkpLCB1ID0gTWF0aC5yb3VuZCgyNTUgKiAoMSAtIGQpICogKDEgLSBhKSksIGcgPSBNYXRoLnJvdW5kKDI1NSAqICgxIC0gbykgKiAoMSAtIGEpKTtcbiAgcmV0dXJuIHtcbiAgICByOiBNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIGkpKSxcbiAgICBnOiBNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHUpKSxcbiAgICBiOiBNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIGcpKVxuICB9O1xufSwgdmwgPSAobiwgZCwgbykgPT4ge1xuICBuID0gbiAvIDI1NSwgZCA9IGQgLyAyNTUsIG8gPSBvIC8gMjU1O1xuICBjb25zdCBhID0gMSAtIE1hdGgubWF4KG4sIGQsIG8pLCBpID0gKDEgLSBuIC0gYSkgLyAoMSAtIGEpLCB1ID0gKDEgLSBkIC0gYSkgLyAoMSAtIGEpLCBnID0gKDEgLSBvIC0gYSkgLyAoMSAtIGEpO1xuICByZXR1cm4ge1xuICAgIGM6IGlzTmFOKGkpID8gMCA6IGksXG4gICAgbTogaXNOYU4odSkgPyAwIDogdSxcbiAgICB5OiBpc05hTihnKSA/IDAgOiBnLFxuICAgIGs6IGlzTmFOKGEpID8gMCA6IGFcbiAgfTtcbn0sIG1sID0gW1wiY3AtdGhlbWVcIl0sIGZsID0geyBpZDogXCJjay1jcC10YXJnZXQtYmFja2dyb3VuZFwiIH0sIGhsID0ge1xuICBrZXk6IDIsXG4gIGNsYXNzOiBcImNrLWNwLWlucHV0LWNvbnRhaW5lclwiXG59LCB5bCA9IHtcbiAga2V5OiAzLFxuICBjbGFzczogXCJjay1jcC1sb2NhbC1jb2xvci1jb25hdGluZXJcIlxufSwgYmwgPSBbXCJvbkNsaWNrXCJdLCAkbCA9IC8qIEBfX1BVUkVfXyAqLyBBKHtcbiAgX19uYW1lOiBcIlZ1ZTNDb2xvclBpY2tlclwiLFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHsgZGVmYXVsdDogXCJcIiB9LFxuICAgIG1vZGU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiZ3JhZGllbnRcIixcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgdHlwZTogeyBkZWZhdWx0OiBcIkhFWDhcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgaW5wdXRUeXBlOiB7IGRlZmF1bHQ6IFwiUkdCXCIsIHR5cGU6IFN0cmluZyB9LFxuICAgIHRoZW1lOiB7IGRlZmF1bHQ6IFwibGlnaHRcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgY29sb3JMaXN0Q291bnQ6IHsgZGVmYXVsdDogMTgsIHR5cGU6IE51bWJlciB9LFxuICAgIHNob3dDb2xvckxpc3Q6IHsgZGVmYXVsdDogITAsIHR5cGU6IEJvb2xlYW4gfSxcbiAgICBzaG93RXllRHJvcDogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIHNob3dBbHBoYTogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIHNob3dJbnB1dE1lbnU6IHsgZGVmYXVsdDogITAsIHR5cGU6IEJvb2xlYW4gfSxcbiAgICBzaG93SW5wdXRTZXQ6IHsgZGVmYXVsdDogITAsIHR5cGU6IEJvb2xlYW4gfSxcbiAgICBkaXNhYmxlZDogeyBkZWZhdWx0OiAhMSwgdHlwZTogQm9vbGVhbiB9LFxuICAgIGxvY2FsOiB7XG4gICAgICBkZWZhdWx0OiB7IGFuZ2xlOiBcIlwiLCBwb3NpdGlvblg6IFwiXCIsIHBvc2l0aW9uWTogXCJcIiB9LFxuICAgICAgdHlwZTogT2JqZWN0XG4gICAgfSxcbiAgICBpY29uQ2xhc3Nlczoge1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsaW5lYXI6IFwiXCIsXG4gICAgICAgIHJhZGlhbDogXCJcIixcbiAgICAgICAgcnVsZXI6IFwiXCIsXG4gICAgICAgIGV5ZURyb3BlcjogXCJcIixcbiAgICAgICAgaW5wdXRNZW51OiBcIlwiLFxuICAgICAgICBzYXZlOiBcIlwiLFxuICAgICAgICBkZWxldGU6IFwiXCJcbiAgICAgIH0sXG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBvID0gbiwgYSA9IFMobnVsbCksIGkgPSBkLCB1ID0gUyhvLm1vZGVsVmFsdWUpLCBnID0gKGwpID0+IHtcbiAgICAgIHUudmFsdWUgPSBsLCBpKFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgbCk7XG4gICAgfSwgcyA9IFMoW1xuICAgICAgeyBpZDogMSwgcjogNjgsIGc6IDcxLCBiOiAxMTksIGE6IDEwMCwgcGVyY2VudDogMCwgaHVlOiAwLCBzZWxlY3Q6ICEwIH0sXG4gICAgICB7IGlkOiAyLCByOiAwLCBnOiAwLCBiOiAyNTUsIGE6IDEwMCwgcGVyY2VudDogMTAwLCBodWU6IDAsIHNlbGVjdDogITEgfVxuICAgIF0pLCBiID0gUyhbXSksIGYgPSBTKCExKSwgdiA9IFMoXCJsaW5lYXJcIiksIG0gPSBwZSh7XG4gICAgICBhbmdsZTogOTAsXG4gICAgICBwZXJjZW50YWdlWDogNTAsXG4gICAgICBwZXJjZW50YWdlWTogNTBcbiAgICB9KSwgTiA9IFMoXCJcIiksIEwgPSBTKG8uaW5wdXRUeXBlKSwgcmUgPSBTKCExKSwgeGUgPSBTKCksIGllID0gUygpLCBGID0gUygpLCBQID0gUygpLCBNID0gUygpLCBIID0gcGUoe1xuICAgICAgaDogMCxcbiAgICAgIHM6IDAsXG4gICAgICBsOiAwXG4gICAgfSksIEQgPSBwZSh7XG4gICAgICBoOiAwLFxuICAgICAgczogMCxcbiAgICAgIHY6IDBcbiAgICB9KSwgQiA9IHBlKHtcbiAgICAgIGM6IDAsXG4gICAgICBtOiAwLFxuICAgICAgeTogMCxcbiAgICAgIGs6IDBcbiAgICB9KTtcbiAgICBzZShcImdyYWRpZW50QmFyXCIsIGllKSwgc2UoXCJjYW52YXNcIiwgRiksIHNlKFwicGlja2VyV3JhcFwiLCBQKSwgc2UoXCJwaWNrZXJQb2ludGVyXCIsIE0pLCBzZShcIm9wYWNpdHlTbGlkZXJcIiwgeGUpO1xuICAgIGxldCBlZSA9IDAsIHRlID0gMCwgQ2UgPSAwLCBJZSA9IDAsIGxlID0gMCwgbmUgPSAwO1xuICAgIGNvbnN0IE9lID0gKGwpID0+IHtcbiAgICAgICFQLnZhbHVlIHx8ICFNLnZhbHVlIHx8IChsZSA9IFAudmFsdWUub2Zmc2V0SGVpZ2h0IC0gTS52YWx1ZS5vZmZzZXRIZWlnaHQsIG5lID0gUC52YWx1ZS5vZmZzZXRXaWR0aCAtIE0udmFsdWUub2Zmc2V0V2lkdGgsIENlID0gbC5jbGllbnRYIC0gbC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCwgSWUgPSBsLmNsaWVudFkgLSBsLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsIGVlID0gQ2UgLSBNLnZhbHVlLm9mZnNldFdpZHRoIC8gMiwgdGUgPSBJZSAtIE0udmFsdWUub2Zmc2V0SGVpZ2h0IC8gMiwgTS52YWx1ZS5zdHlsZS5sZWZ0ID0gYCR7ZWV9cHhgLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAke3RlfXB4YCwgZmUoITEpLCBKKCksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIE1lKSwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIFZlKSk7XG4gICAgfSwgTWUgPSAobCkgPT4ge1xuICAgICAgbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZSA9IFAudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHQgPSBsLmNsaWVudFggLSBlLmxlZnQgLSBNLnZhbHVlLm9mZnNldFdpZHRoIC8gMiwgciA9IGwuY2xpZW50WSAtIGUudG9wIC0gTS52YWx1ZS5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgdCA+PSAwICYmIHQgPD0gbmUgPyAoZWUgPSB0LCBNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHt0fXB4YCkgOiAwID4gdCA/IChlZSA9IDAsIE0udmFsdWUuc3R5bGUubGVmdCA9IFwiMHB4XCIpIDogdCA+IG5lICYmIChlZSA9IG5lLCBNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtuZX1weGApLCByID49IDAgJiYgciA8PSBsZSA/ICh0ZSA9IHIsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7cn1weGApIDogMCA+IHIgPyAodGUgPSAwLCBNLnZhbHVlLnN0eWxlLnRvcCA9IFwiMHB4XCIpIDogciA+IGxlICYmICh0ZSA9IGxlLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAke2xlfXB4YCksIGZlKCExKSwgSigpO1xuICAgIH0sIFZlID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgTWUpLCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgVmUpO1xuICAgIH0sIGZlID0gKGwpID0+IHtcbiAgICAgIGlmICghbCkge1xuICAgICAgICBsZXQgZSA9IFVlKCk7XG4gICAgICAgIGNvbnN0IHQgPSBZZShLLnZhbHVlLCBlLnMsIGUubCk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgaWYgKHJlLnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgciA9IHMudmFsdWUuZmluZCgoYykgPT4gYy5zZWxlY3QgPT0gITApO1xuICAgICAgICAgICAgciAmJiAoci5yID0gdC5yLCByLmcgPSB0LmcsIHIuYiA9IHQuYik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFUoKSwgRSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgSyA9IFMoMCksIGhlID0gYXN5bmMgKGwpID0+IHtcbiAgICAgIGNvbnN0IHsgcmdiOiBlIH0gPSBIZShLLnZhbHVlLCAxMDAsIDUwKTtcbiAgICAgIFJlKGUpLCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmUobCksIEooKTtcbiAgICAgIH0sIDApO1xuICAgIH0sIFVlID0gKCkgPT4ge1xuICAgICAgbGV0IGwgPSB7IHM6IDAsIGw6IDAgfSwgZSA9IFAudmFsdWUub2Zmc2V0V2lkdGggLSBNLnZhbHVlLm9mZnNldFdpZHRoLCB0ID0gUC52YWx1ZS5vZmZzZXRIZWlnaHQgLSBNLnZhbHVlLm9mZnNldEhlaWdodCwgciA9IHBhcnNlSW50KE0udmFsdWUuc3R5bGUubGVmdCksIHAgPSAxIC0gcGFyc2VJbnQoTS52YWx1ZS5zdHlsZS50b3ApIC8gdCwgayA9IHIgLyBlO1xuICAgICAgcmV0dXJuIGwubCA9IHAgLyAyICogKDIgLSBrKSwgbC5zID0gcCAqIGsgLyAoMSAtIE1hdGguYWJzKDIgKiBsLmwgLSAxKSksIE51bWJlci5pc05hTihsLnMpICYmIChsLnMgPSBsLmwpLCBsLmwgPSBsLmwgPiAxID8gMSA6IGwubCwgbC5zID0gbC5zID4gMSA/IDEgOiBsLnMsIGw7XG4gICAgfSwgYWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsID0gcy52YWx1ZS5maW5kKChlKSA9PiBlLnNlbGVjdCA9PSAhMCk7XG4gICAgICBpZiAobCkge1xuICAgICAgICBjb25zdCB7IGw6IGUsIHM6IHQgfSA9IEVlKGwuciwgbC5nLCBsLmIpO1xuICAgICAgICBsZXQgciA9IGUsIGMgPSB0O1xuICAgICAgICBOdW1iZXIuaXNOYU4oYykgJiYgKGMgPSByKTtcbiAgICAgICAgbGV0IHAgPSB7IHg6IDAsIHk6IDAgfSwgayA9IFAudmFsdWUub2Zmc2V0V2lkdGggLSBNLnZhbHVlLm9mZnNldFdpZHRoLCBDID0gUC52YWx1ZS5vZmZzZXRIZWlnaHQgLSBNLnZhbHVlLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgWyQsIGhdID0gMiAqIHIgLSAxIDwgMCA/IFtcbiAgICAgICAgICBrICogMiAqIGMgLyAoMSArIGMpLFxuICAgICAgICAgIEMgKiAoMSAtIHIgKiAoMSArIGMpKVxuICAgICAgICBdIDogW1xuICAgICAgICAgIC1rICogMiAqIChyIC0gMSkgKiBjIC8gKHIgKyBjIC0gciAqIGMpLFxuICAgICAgICAgIEMgKiAociAtIDEpICogKGMgLSAxKVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gcC54ID0gJCwgcC55ID0gaCwgcDtcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBHZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGwgJiYgKGwuaHVlID0gSy52YWx1ZSk7XG4gICAgfSwgaiA9IFMoMTAwKSwgUGUgPSAobCkgPT4ge1xuICAgICAgaWYgKG8uc2hvd0FscGhhKSB7XG4gICAgICAgIGNvbnN0IGUgPSBsLnRhcmdldCwgdCA9IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApO1xuICAgICAgICB0ICYmICh0LmEgPSBwYXJzZUludChlLnZhbHVlKSwgRSgpKTtcbiAgICAgIH1cbiAgICB9LCB6ZSA9IChsKSA9PiB7XG4gICAgICB2YXIgdCwgciwgYywgcDtcbiAgICAgIGNvbnN0IGUgPSAociA9ICh0ID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IHQucXVlcnlTZWxlY3RvcihcIi5ncmFkaWVudC1oYW5kbGUtY29udGVudFwiKSkgPT0gbnVsbCA/IHZvaWQgMCA6IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXR1cm4gbCA9PT0gMCA/IFwiMHB4XCIgOiBsID09PSAxMDAgJiYgZSA/IGAkeygoKGMgPSBpZS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGMub2Zmc2V0V2lkdGgpIHx8IDApIC0gKGUud2lkdGggfHwgMCl9cHhgIDogYCR7KCgocCA9IGllLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogcC5vZmZzZXRXaWR0aCkgfHwgMCkgKiAobCAvIDEwMCkgLSAoKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUud2lkdGgpIHx8IDApIC8gMn1weGA7XG4gICAgfTtcbiAgICBsZXQgWCA9IG51bGwsIE8gPSBudWxsO1xuICAgIGNvbnN0IE5lID0gKGwpID0+IHtcbiAgICAgIHZhciByLCBjO1xuICAgICAgY29uc3QgdCA9IGwudGFyZ2V0Lm9mZnNldFBhcmVudDtcbiAgICAgIGlmICgociA9IHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuaWQpICE9IG51bGwgJiYgci5pbmNsdWRlcyhcImNsci1nYi1cIikpIHtcbiAgICAgICAgY29uc3QgcCA9IHQuaWQucmVwbGFjZShcImNsci1nYi1cIiwgXCJcIik7XG4gICAgICAgIE8gPSB0O1xuICAgICAgICBjb25zdCBrID0gcy52YWx1ZS5maW5kKChDKSA9PiBDLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgIGlmIChrICYmIGsuaWQgIT0gcCkge1xuICAgICAgICAgIGNvbnN0IEMgPSAoYyA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBjLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5ncmFkaWVudC1oYW5kbGUuc2VsZWN0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIEMgPT0gbnVsbCB8fCBDLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RcIiksIHQuY2xhc3NMaXN0LmFkZChcInNlbGVjdFwiKTtcbiAgICAgICAgICBjb25zdCAkID0gcy52YWx1ZS5maW5kSW5kZXgoXG4gICAgICAgICAgICAoaCkgPT4gaC5zZWxlY3QgPT0gITBcbiAgICAgICAgICApO1xuICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgcy52YWx1ZS5sZW5ndGg7IGgrKykge1xuICAgICAgICAgICAgY29uc3QgdyA9IHMudmFsdWVbaF07XG4gICAgICAgICAgICBpZiAody5pZCA9PSBwKSB7XG4gICAgICAgICAgICAgICQgIT0gLTEgJiYgKHMudmFsdWVbJF0uc2VsZWN0ID0gITEpLCBzLnZhbHVlW2hdLnNlbGVjdCA9ICEwLCBqLnZhbHVlID0gdy5hLCBXKHcuciwgdy5nLCB3LmIsIHcuaHVlLCAhMCksIFUoKSwgSigpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgU2UpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgQWUpO1xuICAgICAgfVxuICAgIH0sIEFlID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgU2UpLCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgTmUpO1xuICAgIH0sIFNlID0gKGwpID0+IHtcbiAgICAgIHZhciBwLCBrO1xuICAgICAgbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZSA9IChrID0gKHAgPSBhLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogcC5xdWVyeVNlbGVjdG9yKFwiLmdyYWRpZW50LWhhbmRsZS1jb250ZW50XCIpKSA9PSBudWxsID8gdm9pZCAwIDogay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdCA9IFggPT0gbnVsbCA/IHZvaWQgMCA6IFguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHIgPSAodCA9PSBudWxsID8gdm9pZCAwIDogdC53aWR0aCkgLSAoZSA9PSBudWxsID8gdm9pZCAwIDogZS53aWR0aCk7XG4gICAgICBsZXQgYyA9IGwuY2xpZW50WCAtICgodCA9PSBudWxsID8gdm9pZCAwIDogdC5sZWZ0KSB8fCAwKSAtICgoZSA9PSBudWxsID8gdm9pZCAwIDogZS53aWR0aCkgfHwgMCkgLyAyO1xuICAgICAgaWYgKGMgPCAwID8gYyA9IDAgOiBjID4gciAmJiAoYyA9IHIpLCBPKSB7XG4gICAgICAgIE8uc3R5bGUubGVmdCA9IGAke2N9cHhgO1xuICAgICAgICBjb25zdCBDID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAoYyAvICgodCA9PSBudWxsID8gdm9pZCAwIDogdC53aWR0aCkgLSAoZSA9PSBudWxsID8gdm9pZCAwIDogZS53aWR0aCkpICogMTAwKS50b0ZpeGVkKDApXG4gICAgICAgICksICQgPSBzLnZhbHVlLmZpbmQoXG4gICAgICAgICAgKGgpID0+IGguaWQgPT0gKE8gPT0gbnVsbCA/IHZvaWQgMCA6IE8uaWQucmVwbGFjZShcImNsci1nYi1cIiwgXCJcIikpXG4gICAgICAgICk7XG4gICAgICAgICQgJiYgKCQucGVyY2VudCA9IEMpLCBFKCk7XG4gICAgICB9XG4gICAgfSwgS2UgPSAobCkgPT4ge1xuICAgICAgdmFyIEMsICQ7XG4gICAgICBjb25zdCBlID0gWCA9PSBudWxsID8gdm9pZCAwIDogWC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdCA9IE1hdGgucm91bmQoXG4gICAgICAgIChsLmNsaWVudFggLSAoKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUubGVmdCkgfHwgMCkpIC8gKChlID09IG51bGwgPyB2b2lkIDAgOiBlLndpZHRoKSB8fCAxKSAqIDEwMFxuICAgICAgKSwgciA9IHMudmFsdWUuZmluZEluZGV4KChoKSA9PiBoLnNlbGVjdCA9PSAhMCksIGMgPSBzLnZhbHVlW3JdLCBwID0ge1xuICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgcjogYy5yLFxuICAgICAgICBnOiBjLmcsXG4gICAgICAgIGI6IGMuYixcbiAgICAgICAgYTogYy5hLFxuICAgICAgICBwZXJjZW50OiB0LFxuICAgICAgICBodWU6IGMuaHVlLFxuICAgICAgICBzZWxlY3Q6ICEwXG4gICAgICB9O1xuICAgICAgcy52YWx1ZVtyXS5zZWxlY3QgPSAhMTtcbiAgICAgIGNvbnN0IGsgPSAoQyA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBDLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmdyYWRpZW50LWhhbmRsZS5zZWxlY3RcIlxuICAgICAgKTtcbiAgICAgIGsgPT0gbnVsbCB8fCBrLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RcIiksIHMudmFsdWUgPSBbLi4ucy52YWx1ZSwgcF0sIERlKHApLCBPID0gKCQgPSBhLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogJC5xdWVyeVNlbGVjdG9yKGAjY2xyLWdiLSR7cC5pZH1gKSwgRSgpO1xuICAgIH0sIEJlID0gKGwpID0+IHtcbiAgICAgIGlmIChsLnIgPT0gMCAmJiBsLmcgPT0gMCAmJiBsLmIgPT0gMClcbiAgICAgICAgcmV0dXJuICEwO1xuICAgICAgaWYgKGwuciA9PSAyNTUgJiYgbC5nID09IDI1NSAmJiBsLmIgPT0gMjU1KVxuICAgICAgICByZXR1cm4gITA7XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGUgPSBGLnZhbHVlLmdldENvbnRleHQoXCIyZFwiLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogITAgfSksIHQgPSBGLnZhbHVlLndpZHRoLCByID0gRi52YWx1ZS5oZWlnaHQsIGMgPSBlLmdldEltYWdlRGF0YSgwLCAwLCB0LCByKS5kYXRhLCBwID0gbC5yLCBrID0gbC5nLCBDID0gbC5iO1xuICAgICAgICBmb3IgKGxldCAkID0gMDsgJCA8IHI7ICQrKylcbiAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHQ7IGgrKykge1xuICAgICAgICAgICAgY29uc3QgdyA9ICgkICogdCArIGgpICogNCwgeiA9IGNbd10sIGV0ID0gY1t3ICsgMV0sIHR0ID0gY1t3ICsgMl07XG4gICAgICAgICAgICBpZiAoeiA9PT0gcCAmJiBldCA9PT0gayAmJiB0dCA9PT0gQylcbiAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgfVxuICAgIH0sIFcgPSAobCwgZSwgdCwgciwgYykgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChCZSh7IHI6IGwsIGc6IGUsIGI6IHQgfSkpIHtcbiAgICAgICAgICBsZXQgcCA9IGFlKCk7XG4gICAgICAgICAgcCAmJiAoTS52YWx1ZS5zdHlsZS5sZWZ0ID0gYCR7cC54fXB4YCwgTS52YWx1ZS5zdHlsZS50b3AgPSBgJHtwLnl9cHhgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcCA9IGFlKCk7XG4gICAgICAgICAgcCAmJiAoTS52YWx1ZS5zdHlsZS5sZWZ0ID0gYCR7cC54fXB4YCwgTS52YWx1ZS5zdHlsZS50b3AgPSBgJHtwLnl9cHhgKSwgSy52YWx1ZSA9IHIsIGhlKGMpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9LCBMZSA9ICgpID0+IHtcbiAgICAgIHMudmFsdWUuZm9yRWFjaCgodCkgPT4gRGUodCkpLCBXZSgpO1xuICAgICAgY29uc3QgbCA9IHMudmFsdWVbMF07XG4gICAgICBLLnZhbHVlID0gbC5odWUsIGhlKCEwKTtcbiAgICAgIGxldCBlID0gYWUoKTtcbiAgICAgIGUgJiYgKE0udmFsdWUuc3R5bGUubGVmdCA9IGAke2UueH1weGAsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7ZS55fXB4YCksIFUoKSwgRSgpO1xuICAgIH0sIERlID0gKGwpID0+IHtcbiAgICAgIGlmIChvLm1vZGUgPT0gXCJncmFkaWVudFwiKSB7XG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZS5pZCA9IGBjbHItZ2ItJHtsLmlkfWAsIGUuY2xhc3NMaXN0LmFkZChcImdyYWRpZW50LWhhbmRsZVwiKSwgZS5zdHlsZS5sZWZ0ID0gemUobC5wZXJjZW50KTtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0LmNsYXNzTGlzdC5hZGQoXCJncmFkaWVudC1oYW5kbGUtY29udGVudFwiKSwgbC5zZWxlY3QgPT0gITAgJiYgZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0XCIpLCBlLmFwcGVuZENoaWxkKHQpLCBYICYmIFguYXBwZW5kQ2hpbGQoZSk7XG4gICAgICB9XG4gICAgfSwgUmUgPSAobCkgPT4ge1xuICAgICAgY29uc3QgZSA9IEYudmFsdWUuZ2V0Q29udGV4dChcIjJkXCIsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiAhMCB9KSwgdCA9IEYudmFsdWUud2lkdGgsIHIgPSBGLnZhbHVlLmhlaWdodDtcbiAgICAgIGUuZmlsbFN0eWxlID0gYHJnYigke2xbMF19LCR7bFsxXX0sJHtsWzJdfSlgLCBlLmZpbGxSZWN0KDAsIDAsIHQsIHIpO1xuICAgICAgbGV0IGMgPSBlLmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHQgLSAxMiwgMCk7XG4gICAgICBjLmFkZENvbG9yU3RvcCgwLCBcInJnYigyNTUsMjU1LDI1NSlcIiksIGMuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiKSwgZS5maWxsU3R5bGUgPSBjLCBlLmZpbGxSZWN0KDAsIDAsIHQsIHIpO1xuICAgICAgbGV0IHAgPSBlLmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIHIpO1xuICAgICAgcC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDAsMCwwLDApXCIpLCBwLmFkZENvbG9yU3RvcCgxLCBcInJnYigwLDAsMClcIiksIGUuZmlsbFN0eWxlID0gcCwgZS5maWxsUmVjdCgwLCAwLCB0LCByKTtcbiAgICB9LCBVID0gKCkgPT4ge1xuICAgICAgaWYgKG8uc2hvd0FscGhhKSB7XG4gICAgICAgIGxldCBsID0gcy52YWx1ZS5maW5kKChlKSA9PiBlLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgIGwgJiYgKHhlLnZhbHVlLnN0eWxlLmJhY2tncm91bmQgPSBgIGxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKCR7bC5yfSwgJHtsLmd9LCAke2wuYn0sIDEwMCkgOTclKWApO1xuICAgICAgfVxuICAgIH0sIEUgPSAoKSA9PiB7XG4gICAgICB2YXIgbDtcbiAgICAgIGlmIChvLm1vZGUgPT0gXCJncmFkaWVudFwiKSB7XG4gICAgICAgIHMudmFsdWUuc29ydCgoYywgcCkgPT4gYy5wZXJjZW50IC0gcC5wZXJjZW50KTtcbiAgICAgICAgbGV0IGUgPSBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgXCIsIHQ7XG4gICAgICAgIGlmICh2LnZhbHVlID09IFwibGluZWFyXCIpIHtcbiAgICAgICAgICB0ID0gYGxpbmVhci1ncmFkaWVudCgke20uYW5nbGV9ZGVnLCBgO1xuICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcy52YWx1ZS5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgY29uc3QgeyByOiBwLCBnOiBrLCBiOiBDLCBhOiAkLCBwZXJjZW50OiBoIH0gPSBzLnZhbHVlW2NdO1xuICAgICAgICAgICAgcy52YWx1ZS5sZW5ndGggLSAxID09IGMgPyAoZSA9IGUgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSlgLCB0ID0gdCArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lKWApIDogKGUgPSBlICsgYHJnYmEoJHtwfSwke2t9LCR7Q30sJHskIC8gMTAwfSkgJHtofSUsIGAsIHQgPSB0ICsgYHJnYmEoJHtwfSwke2t9LCR7Q30sJHskIC8gMTAwfSkgJHtofSUsIGApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ID0gYHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJHttLnBlcmNlbnRhZ2VYfSUgJHttLnBlcmNlbnRhZ2VZfSUsIGA7XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBzLnZhbHVlLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBjb25zdCB7IHI6IHAsIGc6IGssIGI6IEMsIGE6ICQsIHBlcmNlbnQ6IGggfSA9IHMudmFsdWVbY107XG4gICAgICAgICAgICBzLnZhbHVlLmxlbmd0aCAtIDEgPT0gYyA/IChlID0gZSArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lKWAsIHQgPSB0ICsgYHJnYmEoJHtwfSwke2t9LCR7Q30sJHskIC8gMTAwfSkgJHtofSUpYCkgOiAoZSA9IGUgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSwgYCwgdCA9IHQgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSwgYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGllLnZhbHVlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGU7XG4gICAgICAgIGxldCByID0gKGwgPSBhLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogbC5xdWVyeVNlbGVjdG9yKFwiI2NrLWNwLXRhcmdldC1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICByICYmIChyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHQsIHJlLnZhbHVlICYmIGcoci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgcjogZSwgZzogdCwgYjogciwgYTogYyB9ID0gcy52YWx1ZVswXTtcbiAgICAgICAgbGV0IHAgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKG8udHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJIRVg4XCI6XG4gICAgICAgICAgICBwID0gaWwoZSwgdCwgciwgYyAvIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiUkdCQVwiOlxuICAgICAgICAgICAgcCA9IGByZ2JhKCR7ZX0sJHt0fSwke3J9LCR7YyAvIDEwMH0pYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSR0JcIjpcbiAgICAgICAgICAgIHAgPSBgcmdiKCR7ZX0sJHt0fSwke3J9KWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiSEVYXCI6XG4gICAgICAgICAgICBwID0gJGUoZSwgdCwgcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBnKHApO1xuICAgICAgfVxuICAgIH0sIFdlID0gKCkgPT4ge1xuICAgICAgcy52YWx1ZS5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgIGwuaHVlID0gUShsLnIsIGwuZywgbC5iKTtcbiAgICAgIH0pO1xuICAgIH0sIEZlID0gKGwpID0+IHtcbiAgICAgIHYudmFsdWUgPSBsLCBFKCk7XG4gICAgfSwgcWUgPSAoKSA9PiB7XG4gICAgICB2YXIgbCwgZTtcbiAgICAgIGlmIChzLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgY29uc3QgdCA9IHMudmFsdWUuZmluZEluZGV4KChyKSA9PiByLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgIGlmICh0ICE9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHIgPSBzLnZhbHVlW3RdLmlkO1xuICAgICAgICAgIHMudmFsdWUuc3BsaWNlKHQsIDEpO1xuICAgICAgICAgIGNvbnN0IGMgPSAobCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBsLnF1ZXJ5U2VsZWN0b3IoYCNjbHItZ2ItJHtyfWApO1xuICAgICAgICAgIGMgPT0gbnVsbCB8fCBjLnJlbW92ZSgpO1xuICAgICAgICAgIGNvbnN0IHAgPSBzLnZhbHVlWzBdO1xuICAgICAgICAgIHAgJiYgKHAuc2VsZWN0ID0gITAsIE8gPSAoZSA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBlLnF1ZXJ5U2VsZWN0b3IoYCNjbHItZ2ItJHtwLmlkfWApLCBPID09IG51bGwgfHwgTy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0XCIpLCBXKHAuciwgcC5nLCBwLmIsIHAuaHVlLCAhMSksIEooKSwgRSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGplID0gKCkgPT4ge1xuICAgICAgdmFyIHQ7XG4gICAgICBjb25zdCBsID0gKHQgPSBhLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogdC5xdWVyeVNlbGVjdG9yKFwiI2NwLWJ0bi1leWVkcm9wcGVyXCIpO1xuICAgICAgbCA9PSBudWxsIHx8IGwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSwgbmV3IEV5ZURyb3BwZXIoKS5vcGVuKCkudGhlbigocikgPT4ge1xuICAgICAgICBjb25zdCB7IHNSR0JIZXg6IGMgfSA9IHIsIHAgPSBzLnZhbHVlLmZpbmQoKEMpID0+IEMuc2VsZWN0ID09ICEwKSwgayA9IGdlKGMpO1xuICAgICAgICBpZiAoaykge1xuICAgICAgICAgIGNvbnN0IEMgPSBRKGsuciwgay5nLCBrLmIpO1xuICAgICAgICAgIGlmIChwICYmIChwLmh1ZSA9IEMsIHAuciA9IGsuciwgcC5nID0gay5nLCBwLmIgPSBrLmIpLCBCZShrKSkge1xuICAgICAgICAgICAgY29uc3QgJCA9IGFlKCk7XG4gICAgICAgICAgICAkICYmIChNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHskLnh9cHhgLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAkeyQueX1weGApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBLLnZhbHVlID0gQztcbiAgICAgICAgICAgIGNvbnN0IHsgcmdiOiAkIH0gPSBIZShDLCAxMDAsIDUwKTtcbiAgICAgICAgICAgIFJlKCQpO1xuICAgICAgICAgICAgY29uc3QgaCA9IGFlKCk7XG4gICAgICAgICAgICBoICYmIChNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtoLnh9cHhgLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAke2gueX1weGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBKKCksIFUoKSwgRSgpLCBsID09IG51bGwgfHwgbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGwgPT0gbnVsbCB8fCBsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICB9LCB1ZSA9IChsLCBlKSA9PiB7XG4gICAgICBpZiAoZSAhPSBcImFcIikge1xuICAgICAgICBjb25zdCB0ID0gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgY29uc3QgciA9IFEodC5yLCB0LmcsIHQuYik7XG4gICAgICAgICAgdC5odWUgPSByLCBXKFxuICAgICAgICAgICAgdC5yLFxuICAgICAgICAgICAgdC5nLFxuICAgICAgICAgICAgdC5iLFxuICAgICAgICAgICAgdC5odWUsXG4gICAgICAgICAgICAhMFxuICAgICAgICAgICksIEUoKSwgVSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2VcbiAgICAgICAgai52YWx1ZSA9IGwsIEUoKSwgVSgpO1xuICAgIH0sIHllID0gKCkgPT4ge1xuICAgICAgY29uc3QgbCA9IHMudmFsdWUuZmluZCgoZSkgPT4gZS5zZWxlY3QgPT0gITApO1xuICAgICAgaWYgKGwgJiYgIU51bWJlci5pc05hTihILmgpICYmICFOdW1iZXIuaXNOYU4oSC5zKSAmJiAhTnVtYmVyLmlzTmFOKEgubCkpIHtcbiAgICAgICAgY29uc3QgeyByOiBlLCBnOiB0LCBiOiByIH0gPSBZZShILmgsIEgucyAvIDEwMCwgSC5sIC8gMTAwKTtcbiAgICAgICAgbC5odWUgPSBILmgsIGwuciA9IGUsIGwuZyA9IHQsIGwuYiA9IHIsIFcoXG4gICAgICAgICAgbC5yLFxuICAgICAgICAgIGwuZyxcbiAgICAgICAgICBsLmIsXG4gICAgICAgICAgbC5odWUsXG4gICAgICAgICAgITBcbiAgICAgICAgKSwgRSgpLCBVKCk7XG4gICAgICB9XG4gICAgfSwgYmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsID0gcy52YWx1ZS5maW5kKChlKSA9PiBlLnNlbGVjdCA9PSAhMCk7XG4gICAgICBpZiAobCAmJiAhTnVtYmVyLmlzTmFOKEQuaCkgJiYgIU51bWJlci5pc05hTihELnMpICYmICFOdW1iZXIuaXNOYU4oRC52KSkge1xuICAgICAgICBjb25zdCB7IHI6IGUsIGc6IHQsIGI6IHIgfSA9IGNsKEQuaCwgRC5zIC8gMTAwLCBELnYgLyAxMDApLCB7IGg6IGMgfSA9IHBsKEQuaCwgRC5zIC8gMTAwLCBELnYgLyAxMDApO1xuICAgICAgICBsLmh1ZSA9IGMsIGwuciA9IGUsIGwuZyA9IHQsIGwuYiA9IHIsIFcoXG4gICAgICAgICAgbC5yLFxuICAgICAgICAgIGwuZyxcbiAgICAgICAgICBsLmIsXG4gICAgICAgICAgbC5odWUsXG4gICAgICAgICAgITBcbiAgICAgICAgKSwgRSgpLCBVKCk7XG4gICAgICB9XG4gICAgfSwgY2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsID0gcy52YWx1ZS5maW5kKChlKSA9PiBlLnNlbGVjdCA9PSAhMCk7XG4gICAgICBpZiAobCAmJiAhTnVtYmVyLmlzTmFOKEIuYykgJiYgIU51bWJlci5pc05hTihCLm0pICYmICFOdW1iZXIuaXNOYU4oQi55KSAmJiAhTnVtYmVyLmlzTmFOKEIuaykpIHtcbiAgICAgICAgY29uc3QgeyByOiBlLCBnOiB0LCBiOiByIH0gPSBnbChcbiAgICAgICAgICBCLmMgLyAxMDAsXG4gICAgICAgICAgQi5tIC8gMTAwLFxuICAgICAgICAgIEIueSAvIDEwMCxcbiAgICAgICAgICBCLmsgLyAxMDBcbiAgICAgICAgKSwgYyA9IFEoZSwgdCwgcik7XG4gICAgICAgIGwuaHVlID0gYywgbC5yID0gZSwgbC5nID0gdCwgbC5iID0gciwgVyhcbiAgICAgICAgICBsLnIsXG4gICAgICAgICAgbC5nLFxuICAgICAgICAgIGwuYixcbiAgICAgICAgICBsLmh1ZSxcbiAgICAgICAgICAhMFxuICAgICAgICApLCBFKCksIFUoKTtcbiAgICAgIH1cbiAgICB9LCBKZSA9ICgpID0+IHtcbiAgICAgIGlmIChOLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGwgPSBnZShOLnZhbHVlKTtcbiAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICBjb25zdCBlID0gUShsLnIsIGwuZywgbC5iKSwgdCA9IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApO1xuICAgICAgICAgIHQgJiYgKHQuciA9IGwuciwgdC5nID0gbC5nLCB0LmIgPSBsLmIsIHQuaHVlID0gZSwgVyhsLnIsIGwuZywgbC5iLCB0Lmh1ZSwgITApLCBFKCksIFUoKSwgZGUoTC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgSiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGwgJiYgKE4udmFsdWUgPSAkZShsLnIsIGwuZywgbC5iKS50b1VwcGVyQ2FzZSgpKSwgZGUoTC52YWx1ZSk7XG4gICAgfSwgUWUgPSAobCkgPT4ge1xuICAgICAgTi52YWx1ZSA9IGw7XG4gICAgICBsZXQgZSA9IGdlKE4udmFsdWUpO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgdCA9IFEoZS5yLCBlLmcsIGUuYiksIHIgPSBzLnZhbHVlLmZpbmQoKGMpID0+IGMuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgciAmJiAoci5yID0gZS5yLCByLmcgPSBlLmcsIHIuYiA9IGUuYiwgci5odWUgPSB0LCBXKGUuciwgZS5nLCBlLmIsIHIuaHVlLCAhMCksIEUoKSwgVSgpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5FeWVEcm9wcGVyICYmIChmLnZhbHVlID0gITApO1xuICAgIGNvbnN0IFplID0gKCkgPT4ge1xuICAgICAgaWYgKCFiLnZhbHVlLmZpbmQoKGUpID0+IGUgPT09IE4udmFsdWUpKSB7XG4gICAgICAgIGIudmFsdWUubGVuZ3RoID09PSBvLmNvbG9yTGlzdENvdW50ICYmIGIudmFsdWUucG9wKCk7XG4gICAgICAgIGxldCBlID0gTi52YWx1ZTtcbiAgICAgICAgYi52YWx1ZS51bnNoaWZ0KGUpLCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICBcImNrLWNwLWxvY2FsLWNvbG9yLWxpc3RcIixcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShiLnZhbHVlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sIF9lID0gKGwgPSBcIlwiKSA9PiB7XG4gICAgICBpZiAoby5tb2RlID09IFwiZ3JhZGllbnRcIikge1xuICAgICAgICBsZXQgZSA9IGwuaW5jbHVkZXMoXCJsaW5lYXJcIikgPyBcImxpbmVhclwiIDogXCJyYWRpYWxcIiwgdCA9IFtdO1xuICAgICAgICBpZiAodi52YWx1ZSA9IGUsIGUgPT0gXCJsaW5lYXJcIikge1xuICAgICAgICAgIGxldCByID0gL15saW5lYXItZ3JhZGllbnRcXCgoLiopXFwpJC8sIGMgPSBsLnJlcGxhY2UoXCI7XCIsIFwiXCIpLnRyaW0oKS5tYXRjaChyKSwgcCA9IC8sXFxzKig/IVteKCldKlxcKSkvO1xuICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICBsZXQgayA9IGNbMV0uc3BsaXQocCk7XG4gICAgICAgICAgICBmb3IgKGxldCBDID0gMDsgQyA8IGsubGVuZ3RoOyBDKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgJCA9IGtbQ107XG4gICAgICAgICAgICAgIGxldCBoID0ge1xuICAgICAgICAgICAgICAgIGlkOiBDLFxuICAgICAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICAgICAgZzogMCxcbiAgICAgICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgICAgIGE6IDEwMCxcbiAgICAgICAgICAgICAgICBwZXJjZW50OiAxMDAsXG4gICAgICAgICAgICAgICAgaHVlOiAwLFxuICAgICAgICAgICAgICAgIHNlbGVjdDogITFcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKCQuaW5jbHVkZXMoXCJkZWdcIikpXG4gICAgICAgICAgICAgICAgbS5hbmdsZSA9IHBhcnNlSW50KCQucmVwbGFjZShcImRlZ1wiLCBcIlwiKSk7XG4gICAgICAgICAgICAgIGVsc2UgaWYgKCQuaW5jbHVkZXMoXCJyZ2JhXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAkLnRyaW0oKS5yZXBsYWNlKC9yZ2JhfFxcKHxcXCl8JS9nLCBcIlwiKS5yZXBsYWNlKC8sL2csIFwiIFwiKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgdyA9IHcuZmlsdGVyKCh6KSA9PiB6LnRyaW0oKSAhPT0gXCJcIiksIGguciA9IHBhcnNlSW50KHdbMF0pLCBoLmcgPSBwYXJzZUludCh3WzFdKSwgaC5iID0gcGFyc2VJbnQod1syXSksIGguYSA9IHBhcnNlRmxvYXQod1szXSkgKiAxMDAsIGgucGVyY2VudCA9IHBhcnNlSW50KHdbNF0pLCB0LnB1c2goaCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5pbmNsdWRlcyhcInJnYlwiKSkge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gJC50cmltKCkucmVwbGFjZSgvcmdifFxcKHxcXCl8JS9nLCBcIlwiKS5yZXBsYWNlKC8sL2csIFwiIFwiKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgdyA9IHcuZmlsdGVyKCh6KSA9PiB6LnRyaW0oKSAhPT0gXCJcIiksIGguciA9IHBhcnNlSW50KHdbMF0pLCBoLmcgPSBwYXJzZUludCh3WzFdKSwgaC5iID0gcGFyc2VJbnQod1syXSksIGgucGVyY2VudCA9IHBhcnNlSW50KHdbM10pLCB0LnB1c2goaCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHIgPSAvXnJhZGlhbC1ncmFkaWVudFxcKCguKilcXCkkLywgYyA9IGwucmVwbGFjZShcIjtcIiwgXCJcIikudHJpbSgpLm1hdGNoKHIpLCBwID0gLyxcXHMqKD8hW14oKV0qXFwpKS87XG4gICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgIGxldCBrID0gY1sxXS5zcGxpdChwKTtcbiAgICAgICAgICAgIGZvciAobGV0IEMgPSAwOyBDIDwgay5sZW5ndGg7IEMrKykge1xuICAgICAgICAgICAgICBjb25zdCAkID0ga1tDXTtcbiAgICAgICAgICAgICAgbGV0IGggPSB7XG4gICAgICAgICAgICAgICAgaWQ6IEMsXG4gICAgICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgICAgICBnOiAwLFxuICAgICAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICAgICAgYTogMTAwLFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IDEwMCxcbiAgICAgICAgICAgICAgICBodWU6IDAsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoJC5pbmNsdWRlcyhcImNpcmNsZSBhdFwiKSkge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gJC5yZXBsYWNlKFwiY2lyY2xlIGF0IFwiLCBcIlwiKS5yZXBsYWNlKFwiIFwiLCBcIlwiKS5yZXBsYWNlKC8lL2csIFwiIFwiKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIG0ucGVyY2VudGFnZVggPSBwYXJzZUludCh3WzBdKSwgbS5wZXJjZW50YWdlWSA9IHBhcnNlSW50KHdbMV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQuaW5jbHVkZXMoXCJyZ2JhXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAkLnJlcGxhY2UoL3JnYmF8XFwofFxcKXwlL2csIFwiXCIpLnJlcGxhY2UoLywvZywgXCIgXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICB3ID0gdy5maWx0ZXIoKHopID0+IHoudHJpbSgpICE9PSBcIlwiKSwgaC5yID0gcGFyc2VJbnQod1swXSksIGguZyA9IHBhcnNlSW50KHdbMV0pLCBoLmIgPSBwYXJzZUludCh3WzJdKSwgaC5hID0gcGFyc2VGbG9hdCh3WzNdKSAqIDEwMCwgaC5wZXJjZW50ID0gcGFyc2VJbnQod1s0XSksIHQucHVzaChoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgkLmluY2x1ZGVzKFwicmdiXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAkLnJlcGxhY2UoL3JnYnxcXCh8XFwpfCUvZywgXCJcIikucmVwbGFjZSgvLC9nLCBcIiBcIikuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIHcgPSB3LmZpbHRlcigoeikgPT4gei50cmltKCkgIT09IFwiXCIpLCBoLnIgPSBwYXJzZUludCh3WzBdKSwgaC5nID0gcGFyc2VJbnQod1sxXSksIGguYiA9IHBhcnNlSW50KHdbMl0pLCBoLnBlcmNlbnQgPSBwYXJzZUludCh3WzNdKSwgdC5wdXNoKGgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHQubGVuZ3RoID4gMSAmJiAocy52YWx1ZSA9IHQsIHMudmFsdWVbMF0uc2VsZWN0ID0gITAsIGoudmFsdWUgPSBzLnZhbHVlWzBdLmEpO1xuICAgICAgfSBlbHNlIGlmIChsKSB7XG4gICAgICAgIGxldCBlID0ge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMCxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGwuaW5jbHVkZXMoXCIjXCIpKVxuICAgICAgICAgIGlmIChsLmxlbmd0aCA+PSA4KVxuICAgICAgICAgICAgZSA9IHJsKGwpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHQgPSBnZShsKTtcbiAgICAgICAgICAgIHQgPyAoZS5hID0gMSwgZS5yID0gdC5yLCBlLmcgPSB0LmcsIGUuYiA9IHQuYikgOiBlID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGwuaW5jbHVkZXMoXCJyZ2JcIikpXG4gICAgICAgICAgaWYgKGwuaW5jbHVkZXMoXCJyZ2JhXCIpKVxuICAgICAgICAgICAgZSA9IG9sKGwpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHQgPSBzbChsKTtcbiAgICAgICAgICAgIHQgPyAoZS5hID0gMSwgZS5yID0gdC5yLCBlLmcgPSB0LmcsIGUuYiA9IHQuYikgOiBlID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIGUgJiYgKHMudmFsdWVbMF0uciA9IGUuciwgcy52YWx1ZVswXS5iID0gZS5iLCBzLnZhbHVlWzBdLmcgPSBlLmcsIHMudmFsdWVbMF0uYSA9IHBhcnNlSW50KChlLmEgKiAxMDApLnRvRml4ZWQoMCkpLCBqLnZhbHVlID0gcy52YWx1ZVswXS5hLCBzLnZhbHVlWzBdLmh1ZSA9IDApO1xuICAgICAgfVxuICAgIH0sIGRlID0gKGwpID0+IHtcbiAgICAgIGNvbnN0IGUgPSBzLnZhbHVlLmZpbmQoKHQpID0+IHQuc2VsZWN0ID09ICEwKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHN3aXRjaCAobCkge1xuICAgICAgICAgIGNhc2UgXCJSR0JcIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJIU0xcIjoge1xuICAgICAgICAgICAgY29uc3QgeyBoOiB0LCBzOiByLCBsOiBjIH0gPSBFZShcbiAgICAgICAgICAgICAgZS5yLFxuICAgICAgICAgICAgICBlLmcsXG4gICAgICAgICAgICAgIGUuYlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIEguaCA9IE1hdGgucm91bmQodCksIEgucyA9IE1hdGgucm91bmQociAqIDEwMCksIEgubCA9IE1hdGgucm91bmQoYyAqIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBcIkhTVlwiOiB7XG4gICAgICAgICAgICBjb25zdCB7IGg6IHQsIHM6IHIsIHY6IGMgfSA9IGRsKFxuICAgICAgICAgICAgICBlLnIsXG4gICAgICAgICAgICAgIGUuZyxcbiAgICAgICAgICAgICAgZS5iXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgRC5oID0gTWF0aC5yb3VuZCh0KSwgRC5zID0gTWF0aC5yb3VuZChyICogMTAwKSwgRC52ID0gTWF0aC5yb3VuZChjICogMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiQ01ZS1wiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb25zdCB7IGM6IHQsIG06IHIsIHk6IGMsIGs6IHAgfSA9IHZsKFxuICAgICAgICAgICAgICAgIGUucixcbiAgICAgICAgICAgICAgICBlLmcsXG4gICAgICAgICAgICAgICAgZS5iXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIEIuYyA9IE1hdGgucm91bmQodCAqIDEwMCksIEIubSA9IE1hdGgucm91bmQociAqIDEwMCksIEIueSA9IE1hdGgucm91bmQoYyAqIDEwMCksIEIuayA9IE1hdGgucm91bmQocCAqIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBMLnZhbHVlID0gbDtcbiAgICAgIH1cbiAgICB9LCBUZSA9IChsKSA9PiB7XG4gICAgICBsICYmIF9lKGwpLCBMZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHdlKCgpID0+IG8ubW9kZWxWYWx1ZSwgKGwsIGUpID0+IHtcbiAgICAgIGwgIT09IGUgJiYgbCAhPT0gdS52YWx1ZSAmJiAocy52YWx1ZS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSBYID09IG51bGwgPyB2b2lkIDAgOiBYLnF1ZXJ5U2VsZWN0b3IoYCNjbHItZ2ItJHt0LmlkfWApO1xuICAgICAgICByID09IG51bGwgfHwgci5yZW1vdmUoKTtcbiAgICAgIH0pLCBUZShsKSk7XG4gICAgfSksIGx0KCgpID0+IHtcbiAgICAgIGxldCBsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjay1jcC1sb2NhbC1jb2xvci1saXN0XCIpO1xuICAgICAgbCAmJiAoYi52YWx1ZSA9IEpTT04ucGFyc2UobCkpO1xuICAgIH0pLCBudCgoKSA9PiB7XG4gICAgICB2YXIgbDtcbiAgICAgIG8ubW9kZSA9PSBcImdyYWRpZW50XCIgJiYgKFggPSAobCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBsLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JhZGllbnQtYmFyXCIpKSwgVGUoby5tb2RlbFZhbHVlKSwgZGUoTC52YWx1ZSksIHJlLnZhbHVlID0gITA7XG4gICAgfSksIChsLCBlKSA9PiAoeSgpLCBJKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBSKFtcImNrLWNwLWNvbnRhaW5lclwiLCBuLmRpc2FibGVkID8gXCJjay1jcC1kaXNhYmxlZCBcIiA6IFwiXCJdKSxcbiAgICAgIHJlZl9rZXk6IFwicGlja2VyVGVtcGxhdGVSZWZcIixcbiAgICAgIHJlZjogYSxcbiAgICAgIFwiY3AtdGhlbWVcIjogbi50aGVtZVxuICAgIH0sIFtcbiAgICAgIHZlKEF0LCB7IG9uT25Nb3VzZURvd246IE9lIH0pLFxuICAgICAgdmUoR3QsIHtcbiAgICAgICAgYW5nbGU6IG0uYW5nbGUsXG4gICAgICAgIFwib25VcGRhdGU6YW5nbGVcIjogZVswXSB8fCAoZVswXSA9ICh0KSA9PiBtLmFuZ2xlID0gdCksXG4gICAgICAgIHBlcmNlbnRhZ2VYOiBtLnBlcmNlbnRhZ2VYLFxuICAgICAgICBcIm9uVXBkYXRlOnBlcmNlbnRhZ2VYXCI6IGVbMV0gfHwgKGVbMV0gPSAodCkgPT4gbS5wZXJjZW50YWdlWCA9IHQpLFxuICAgICAgICBsb2NhbDogbi5sb2NhbCxcbiAgICAgICAgaWNvbkNsYXNzZXM6IG4uaWNvbkNsYXNzZXMsXG4gICAgICAgIGlucHV0VHlwZTogTC52YWx1ZSxcbiAgICAgICAgcGVyY2VudGFnZVk6IG0ucGVyY2VudGFnZVksXG4gICAgICAgIFwib25VcGRhdGU6cGVyY2VudGFnZVlcIjogZVsyXSB8fCAoZVsyXSA9ICh0KSA9PiBtLnBlcmNlbnRhZ2VZID0gdCksXG4gICAgICAgIG1vZGU6IG4ubW9kZSxcbiAgICAgICAgc2hvd0NvbG9yTGlzdDogbi5zaG93Q29sb3JMaXN0LFxuICAgICAgICBzaG93SW5wdXRNZW51OiBuLnNob3dJbnB1dE1lbnUsXG4gICAgICAgIHNob3dFeWVEcm9wOiBuLnNob3dFeWVEcm9wLFxuICAgICAgICBpc0V5ZURyb3BwZXJVc2luZzogZi52YWx1ZSxcbiAgICAgICAgZ3JhZGllbnRUeXBlOiB2LnZhbHVlLFxuICAgICAgICBvbk9uQ2hhbmdlTW9kZTogRmUsXG4gICAgICAgIG9uT25JbnB1dDogRSxcbiAgICAgICAgb25PbkNsaWNrRXllRHJvcHBlcjogamUsXG4gICAgICAgIG9uT25EZWxldGVDb2xvcjogcWUsXG4gICAgICAgIG9uT25TYXZlQ29sb3I6IFplLFxuICAgICAgICBvbk9uQ2hhbmdlSW5wdXRUeXBlOiBkZVxuICAgICAgfSwgbnVsbCwgOCwgW1wiYW5nbGVcIiwgXCJwZXJjZW50YWdlWFwiLCBcImxvY2FsXCIsIFwiaWNvbkNsYXNzZXNcIiwgXCJpbnB1dFR5cGVcIiwgXCJwZXJjZW50YWdlWVwiLCBcIm1vZGVcIiwgXCJzaG93Q29sb3JMaXN0XCIsIFwic2hvd0lucHV0TWVudVwiLCBcInNob3dFeWVEcm9wXCIsIFwiaXNFeWVEcm9wcGVyVXNpbmdcIiwgXCJncmFkaWVudFR5cGVcIl0pLFxuICAgICAgbi5tb2RlID09IFwiZ3JhZGllbnRcIiA/ICh5KCksIFQoUHQsIHtcbiAgICAgICAga2V5OiAwLFxuICAgICAgICBvbk9uQWRkQ29sb3I6IEtlLFxuICAgICAgICBvbk9uTW91c2VEb3duOiBOZVxuICAgICAgfSkpIDogVihcIlwiLCAhMCksXG4gICAgICB2ZShGdCwge1xuICAgICAgICBtb2RlbFZhbHVlOiBLLnZhbHVlLFxuICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogZVszXSB8fCAoZVszXSA9ICh0KSA9PiBLLnZhbHVlID0gdCksXG4gICAgICAgIG9uT25JbnB1dDogZVs0XSB8fCAoZVs0XSA9ICh0KSA9PiBoZSghMSkpLFxuICAgICAgICBvbk9uQ2hhbmdlOiBHZVxuICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICBuLnNob3dBbHBoYSA/ICh5KCksIFQoUXQsIHtcbiAgICAgICAga2V5OiAxLFxuICAgICAgICBtb2RlbFZhbHVlOiBqLnZhbHVlLFxuICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogZVs1XSB8fCAoZVs1XSA9ICh0KSA9PiBqLnZhbHVlID0gdCksXG4gICAgICAgIG9uT25JbnB1dDogUGVcbiAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgWih4KFwiZGl2XCIsIGZsLCBudWxsLCA1MTIpLCBbXG4gICAgICAgIFtfLCAhMV1cbiAgICAgIF0pLFxuICAgICAgcmUudmFsdWUgJiYgbi5zaG93SW5wdXRTZXQgPyAoeSgpLCBJKFwiZGl2XCIsIGhsLCBbXG4gICAgICAgIEwudmFsdWUgIT09IFwiQ01ZS1wiID8gKHkoKSwgVChhbCwge1xuICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBOLnZhbHVlLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzZdIHx8IChlWzZdID0gKHQpID0+IE4udmFsdWUgPSB0KSxcbiAgICAgICAgICAgIEplXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIlJHQlwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxLFxuICAgICAgICAgIGxhYmVsOiBcIlJcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogcy52YWx1ZS5maW5kKCh0KSA9PiB0LnNlbGVjdCA9PSAhMCkucixcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVs3XSB8fCAoZVs3XSA9ICh0KSA9PiBzLnZhbHVlLmZpbmQoKHIpID0+IHIuc2VsZWN0ID09ICEwKS5yID0gdCksXG4gICAgICAgICAgICBlWzhdIHx8IChlWzhdID0gKHQpID0+IHVlKHQsIFwiclwiKSlcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiUkdCXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDIsXG4gICAgICAgICAgbGFiZWw6IFwiR1wiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBzLnZhbHVlLmZpbmQoKHQpID0+IHQuc2VsZWN0ID09ICEwKS5nLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzldIHx8IChlWzldID0gKHQpID0+IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApLmcgPSB0KSxcbiAgICAgICAgICAgIGVbMTBdIHx8IChlWzEwXSA9ICh0KSA9PiB1ZSh0LCBcImdcIikpXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIlJHQlwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAzLFxuICAgICAgICAgIGxhYmVsOiBcIkJcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogcy52YWx1ZS5maW5kKCh0KSA9PiB0LnNlbGVjdCA9PSAhMCkuYixcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxMV0gfHwgKGVbMTFdID0gKHQpID0+IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApLmIgPSB0KSxcbiAgICAgICAgICAgIGVbMTJdIHx8IChlWzEyXSA9ICh0KSA9PiB1ZSh0LCBcImJcIikpXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkhTTFwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiA0LFxuICAgICAgICAgIGxhYmVsOiBcIkhcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAzNjAsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogSC5oLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzEzXSB8fCAoZVsxM10gPSAodCkgPT4gSC5oID0gdCksXG4gICAgICAgICAgICB5ZVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJIU0xcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogNSxcbiAgICAgICAgICBsYWJlbDogXCJTXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEgucyxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxNF0gfHwgKGVbMTRdID0gKHQpID0+IEgucyA9IHQpLFxuICAgICAgICAgICAgeWVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiSFNMXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDYsXG4gICAgICAgICAgbGFiZWw6IFwiTFwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBILmwsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMTVdIHx8IChlWzE1XSA9ICh0KSA9PiBILmwgPSB0KSxcbiAgICAgICAgICAgIHllXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkhTVlwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiA3LFxuICAgICAgICAgIGxhYmVsOiBcIkhcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAzNjAsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogRC5oLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzE2XSB8fCAoZVsxNl0gPSAodCkgPT4gRC5oID0gdCksXG4gICAgICAgICAgICBiZVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJIU1ZcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogOCxcbiAgICAgICAgICBsYWJlbDogXCJTXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEQucyxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxN10gfHwgKGVbMTddID0gKHQpID0+IEQucyA9IHQpLFxuICAgICAgICAgICAgYmVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiSFNWXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDksXG4gICAgICAgICAgbGFiZWw6IFwiVlwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBELnYsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMThdIHx8IChlWzE4XSA9ICh0KSA9PiBELnYgPSB0KSxcbiAgICAgICAgICAgIGJlXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkNNWUtcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMTAsXG4gICAgICAgICAgbGFiZWw6IFwiQ1wiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBCLmMsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMTldIHx8IChlWzE5XSA9ICh0KSA9PiBCLmMgPSB0KSxcbiAgICAgICAgICAgIGNlXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkNNWUtcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMTEsXG4gICAgICAgICAgbGFiZWw6IFwiTVwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBCLm0sXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMjBdIHx8IChlWzIwXSA9ICh0KSA9PiBCLm0gPSB0KSxcbiAgICAgICAgICAgIGNlXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkNNWUtcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMTIsXG4gICAgICAgICAgbGFiZWw6IFwiWVwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBCLnksXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMjFdIHx8IChlWzIxXSA9ICh0KSA9PiBCLnkgPSB0KSxcbiAgICAgICAgICAgIGNlXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkNNWUtcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMTMsXG4gICAgICAgICAgbGFiZWw6IFwiS1wiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBCLmssXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMjJdIHx8IChlWzIyXSA9ICh0KSA9PiBCLmsgPSB0KSxcbiAgICAgICAgICAgIGNlXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgbi5zaG93QWxwaGEgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDE0LFxuICAgICAgICAgIGxhYmVsOiBcIkFcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgc3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycHhcIiB9LFxuICAgICAgICAgIG1vZGVsVmFsdWU6IHMudmFsdWUuZmluZCgodCkgPT4gdC5zZWxlY3QgPT0gITApLmEsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMjNdIHx8IChlWzIzXSA9ICh0KSA9PiBzLnZhbHVlLmZpbmQoKHIpID0+IHIuc2VsZWN0ID09ICEwKS5hID0gdCksXG4gICAgICAgICAgICBlWzI0XSB8fCAoZVsyNF0gPSAodCkgPT4gdWUodCwgXCJhXCIpKVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMClcbiAgICAgIF0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgYi52YWx1ZS5sZW5ndGggPiAwICYmIG4uc2hvd0NvbG9yTGlzdCA/ICh5KCksIEkoXCJkaXZcIiwgeWwsIFtcbiAgICAgICAgKHkoITApLCBJKFhlLCBudWxsLCBhdChiLnZhbHVlLCAodCkgPT4gKHkoKSwgSShcImRpdlwiLCB7XG4gICAgICAgICAga2V5OiBgY29sb3ItJHt0fWAsXG4gICAgICAgICAgY2xhc3M6IFwiY2stY3AtY29sb3ItaXRlbVwiLFxuICAgICAgICAgIHN0eWxlOiBHKHsgYmFja2dyb3VuZENvbG9yOiB0IH0pLFxuICAgICAgICAgIG9uQ2xpY2s6IChyKSA9PiBRZSh0KVxuICAgICAgICB9LCBudWxsLCAxMiwgYmwpKSksIDEyOCkpXG4gICAgICBdKSkgOiBWKFwiXCIsICEwKVxuICAgIF0sIDEwLCBtbCkpO1xuICB9XG59KTtcbmV4cG9ydCB7XG4gICRsIGFzIFZ1ZTNDb2xvclBpY2tlclxufTtcbiJdLCJuYW1lcyI6WyJWdWUzQ29sb3JQaWNrZXIiLCJuYW1lIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb2xvcnMiLCJhY3RpdmVfY29sb3IiLCJtb3VudGVkIiwibG9hZENvbG9ycyIsIm1ldGhvZHMiLCJhZGROZXdDb2xvciIsInB1c2giLCJjb2RlIiwiX3RoaXMiLCJLcml0aSIsImFwaSIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInNhdmVDb2xvcnMiLCJzdWNjZXNzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZWxlY3RBY3RpdmVDb2xvciIsImNvbG9yIiwiY2xvc2VQYWxldHRlIiwiQ29sb3JQYWxldHRlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiJGRhdGEiLCJpbmRleCIsInN0eWxlIiwiX25vcm1hbGl6ZVN0eWxlIiwiY29uY2F0IiwidHlwZSIsIiRldmVudCIsIm9uQ2xpY2siLCIkb3B0aW9ucyIsIl9jYWNoZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2hvaXN0ZWRfNyIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfVnVlM0NvbG9yUGlja2VyIiwibW9kZSIsInNob3dDb2xvckxpc3QiLCJzaG93RXllRHJvcCIsIl9jb21wb25lbnRfQ29sb3JQYWxldHRlIl0sInNvdXJjZVJvb3QiOiIifQ==