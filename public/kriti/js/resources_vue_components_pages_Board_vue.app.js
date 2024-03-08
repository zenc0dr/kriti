"use strict";
(self["webpackChunkkriti"] = self["webpackChunkkriti"] || []).push([["resources_vue_components_pages_Board_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Module */ "./resources/vue/components/types/Module.vue");
/*
Тут мы подключаем типы Point-ов и управляем позиционированием и общим поведением
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Node",
  components: {
    Module: _types_Module__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    node: Object
  },
  computed: {
    moduleStyle: function moduleStyle() {
      return {
        left: "".concat(this.node.point.x, "px"),
        top: "".concat(this.node.point.y, "px")
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PopUp",
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      "default": null
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./resources/vue/components/interface/Node.vue");
/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopUp */ "./resources/vue/components/interface/PopUp.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Workspace",
  components: {
    Node: _Node__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {},
  data: function data() {
    return {
      workspace_width: null,
      // Ширина рабочей области
      workspace_height: null,
      // Высота рабочей области
      hold_x_factor: null,
      // Поправка объекта по x
      hold_y_factor: null,
      // Поправка объекта по y
      workspace_size_is_defined: false,
      // Размер рабочей области определён
      plato_x: 0,
      // Смещение карты по оси Х
      plato_y: 0,
      // Смещение карты по оси Y
      nodes: null,
      // Загруженные ноды
      active_node: null,
      // Выделенный нод
      last_hold_x: 0,
      // Позиция нода перед перемещением по X
      last_hold_y: 0 // Позиция нода перед перемещением по Y
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.defineWorkspaceSize();
    window.addEventListener('resize', this.defineWorkspaceSize);
    this.loadNodes();
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('resize', this.defineWorkspaceSize);
  },
  methods: {
    // Определить размер рабочей области
    defineWorkspaceSize: function defineWorkspaceSize() {
      var _this = this;
      this.$nextTick(function () {
        var parentElement = _this.$el.parentNode;
        _this.workspace_width = parentElement.offsetWidth;
        _this.workspace_height = parentElement.offsetHeight;
        if (_this.workspace_width && _this.workspace_height) {
          _this.workspace_size_is_defined = true;
        }
      });
    },
    // Загрузить карту нодов
    loadNodes: function loadNodes() {
      var _this2 = this;
      Kriti.api({
        url: 'kriti.api.Nodes:getNodes',
        then: function then(response) {
          _this2.nodes = response.nodes;
        }
      });
    },
    // Двигать карту
    movePlato: function movePlato() {
      this.hold_x_factor = this.mouse_x - this.plato_x;
      this.hold_y_factor = this.mouse_y - this.plato_y;
      this.hold_plato = true;
    },
    // Оставить карту
    dropPlato: function dropPlato() {
      this.hold_plato = false;
      //this.saveWorkspace() // Сохранить состояние
    },
    // Фиксировать движение мыши
    mousemove: function mousemove(event) {
      this.mouse_x = event.pageX;
      this.mouse_y = event.pageY;
      this.moveNode(); // Двигать объект если он активен
    },
    moveNode: function moveNode() {
      if (this.active_node) {
        this.active_node.point.x = this.mouse_x - this.hold_x_factor;
        this.active_node.point.y = this.mouse_y - this.hold_y_factor;
      }

      // Если двигается карта
      if (this.hold_plato) {
        this.plato_x = this.mouse_x - this.hold_x_factor;
        this.plato_y = this.mouse_y - this.hold_y_factor;
        $('body').css({
          marginLeft: this.plato_x + this.body_x_factor,
          marginTop: this.plato_y + this.body_y_factor
        });
      }
      //this.quantizeObjects()
    },
    contextMenu: function contextMenu() {},
    // Захват нода
    nodeHold: function nodeHold(node, event) {
      if (event.button !== 0) {
        return;
      }
      this.saveHoldPosition();
      node.focus = true;
      this.hold_x_factor = this.mouse_x - node.point.x;
      this.hold_y_factor = this.mouse_y - node.point.y;
      this.active_node = node;
    },
    // Зафиксировать позицию нода
    saveHoldPosition: function saveHoldPosition() {
      this.last_hold_x = this.mouse_x;
      this.last_hold_y = this.mouse_y;
    },
    // Установить нод
    nodeDrop: function nodeDrop() {
      if (event.button !== 0) {
        return;
      }
      console.log('drop node');
      this.nodes.map(function (node) {
        node.focus = false;
      });
      this.active_node = null;

      // Сохранять только если был сдвинут объект
      if (this.last_hold_x !== this.mouse_x || this.last_hold_y !== this.mouse_y) {
        //this.saveWorkspace()
        console.log('saveWorkspace');
      }
    },
    nodeLoad: function nodeLoad(node) {
      console.log('load node', node);
    },
    createLink: function createLink() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interface_Workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface/Workspace */ "./resources/vue/components/interface/Workspace.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Board",
  components: {
    Workspace: _interface_Workspace__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Module",
  props: {
    node: Object
  },
  computed: {
    moduleStyle: function moduleStyle() {
      return {
        width: "".concat(this.node.style.width, "px"),
        height: "".concat(this.node.style.height, "px"),
        'background-color': "".concat(this.node.style['background-color'])
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=template&id=6a564500":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=template&id=6a564500 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Module = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Module");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "node",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.moduleStyle)
  }, [$props.node.type === 'Module' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Module, {
    key: 0,
    node: $props.node
  }, null, 8 /* PROPS */, ["node"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=template&id=1b4e483e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=template&id=1b4e483e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "kriti-popup"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "kriti-popup kriti-popup__title"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=template&id=7b59be87":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=template&id=7b59be87 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "workspace__preloader"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Node = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Node");
  return $data.workspace_size_is_defined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "workspace",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width:".concat($data.workspace_width, "px;height:").concat($data.workspace_height, "px")),
    onMousedown: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.movePlato && $options.movePlato.apply($options, arguments);
    }, ["ctrl", "self"])),
    onMouseup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.dropPlato && $options.dropPlato.apply($options, arguments);
    }, ["self"])),
    onMousemove: _cache[2] || (_cache[2] = function () {
      return $options.mousemove && $options.mousemove.apply($options, arguments);
    }),
    onDblclick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.contextMenu && $options.contextMenu.apply($options, arguments);
    }, ["self"]))
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "workspace__plato",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("margin-left:".concat($data.plato_x, "px;margin-top:").concat($data.plato_y, "px"))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.nodes, function (node) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Node, {
      node: node,
      ref_for: true,
      ref: node.id,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        focus: node === $data.active_node
      }),
      onMousedown: function onMousedown($event) {
        return $options.nodeHold(node, $event);
      },
      onMouseup: $options.nodeDrop,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.createLink(node);
      }, ["ctrl"]),
      onContextmenu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.nodeLoad(node);
      }, ["prevent"])
    }, null, 8 /* PROPS */, ["node", "class", "onMousedown", "onMouseup", "onClick", "onContextmenu"]);
  }), 256 /* UNKEYED_FRAGMENT */))], 4 /* STYLE */)], 36 /* STYLE, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=template&id=85a033ba":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=template&id=85a033ba ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "board"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Workspace = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Workspace");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Workspace)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=template&id=327d942a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=template&id=327d942a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "module",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.moduleStyle)
  }, " Модуль ", 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".node {\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: absolute;\n}\n.node.focus {\n  cursor: grabbing;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Node.vue"],"names":[],"mappings":"AACA;EACI,qBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,kBAAA;AAAJ;AAEI;EACI,gBAAA;AAAR","sourcesContent":["\n.node {\n    display: inline-block;\n    user-select: none;\n    position: absolute;\n\n    &.focus {\n        cursor: grabbing;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".kriti-popup {\n  overflow-y: auto;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/PopUp.vue"],"names":[],"mappings":"AACA;EACI,gBAAA;AAAJ","sourcesContent":["\n.kriti-popup {\n    overflow-y: auto;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".workspace {\n  padding: 10px;\n  background: #5794a9;\n  color: #000;\n}\n.workspace__plato {\n  width: 0;\n  height: 0;\n  position: relative;\n}\n.workspace .kriti-preloader {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4588235294);\n  transition: 300ms;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 100001;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Workspace.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;EACA,WAAA;AAAJ;AAEI;EACI,QAAA;EACA,SAAA;EACA,kBAAA;AAAR;AAGI;EACI,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,6CAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;AADR","sourcesContent":["\n.workspace {\n    padding: 10px;\n    background: #5794a9;\n    color: #000;\n\n    &__plato {\n        width: 0;\n        height: 0;\n        position: relative;\n    }\n\n    .kriti-preloader {\n        position: fixed;\n        display: flex;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #ffffff75;\n        transition: 300ms;\n        justify-content: center;\n        align-items: center;\n        user-select: none;\n        z-index: 100001;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".board {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  background: #80db80;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/pages/Board.vue"],"names":[],"mappings":"AACA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;AAAJ","sourcesContent":["\n.board {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    background: #80db80;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_6a564500_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=style&index=0&id=6a564500&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_6a564500_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_6a564500_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_style_index_0_id_1b4e483e_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_style_index_0_id_1b4e483e_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_style_index_0_id_1b4e483e_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_style_index_0_id_7b59be87_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_style_index_0_id_7b59be87_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_style_index_0_id_7b59be87_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_style_index_0_id_85a033ba_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_style_index_0_id_85a033ba_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_style_index_0_id_85a033ba_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_style_index_0_id_327d942a_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Module.vue?vue&type=style&index=0&id=327d942a&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_style_index_0_id_327d942a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_style_index_0_id_327d942a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/vue/components/interface/Node.vue":
/*!*****************************************************!*\
  !*** ./resources/vue/components/interface/Node.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node_vue_vue_type_template_id_6a564500__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.vue?vue&type=template&id=6a564500 */ "./resources/vue/components/interface/Node.vue?vue&type=template&id=6a564500");
/* harmony import */ var _Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.vue?vue&type=script&lang=js */ "./resources/vue/components/interface/Node.vue?vue&type=script&lang=js");
/* harmony import */ var _Node_vue_vue_type_style_index_0_id_6a564500_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node.vue?vue&type=style&index=0&id=6a564500&lang=scss */ "./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Node_vue_vue_type_template_id_6a564500__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/interface/Node.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/interface/PopUp.vue":
/*!******************************************************!*\
  !*** ./resources/vue/components/interface/PopUp.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopUp_vue_vue_type_template_id_1b4e483e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopUp.vue?vue&type=template&id=1b4e483e */ "./resources/vue/components/interface/PopUp.vue?vue&type=template&id=1b4e483e");
/* harmony import */ var _PopUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopUp.vue?vue&type=script&lang=js */ "./resources/vue/components/interface/PopUp.vue?vue&type=script&lang=js");
/* harmony import */ var _PopUp_vue_vue_type_style_index_0_id_1b4e483e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss */ "./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PopUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PopUp_vue_vue_type_template_id_1b4e483e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/interface/PopUp.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/interface/Workspace.vue":
/*!**********************************************************!*\
  !*** ./resources/vue/components/interface/Workspace.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Workspace_vue_vue_type_template_id_7b59be87__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Workspace.vue?vue&type=template&id=7b59be87 */ "./resources/vue/components/interface/Workspace.vue?vue&type=template&id=7b59be87");
/* harmony import */ var _Workspace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workspace.vue?vue&type=script&lang=js */ "./resources/vue/components/interface/Workspace.vue?vue&type=script&lang=js");
/* harmony import */ var _Workspace_vue_vue_type_style_index_0_id_7b59be87_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss */ "./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Workspace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Workspace_vue_vue_type_template_id_7b59be87__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/interface/Workspace.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/pages/Board.vue":
/*!**************************************************!*\
  !*** ./resources/vue/components/pages/Board.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Board_vue_vue_type_template_id_85a033ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=85a033ba */ "./resources/vue/components/pages/Board.vue?vue&type=template&id=85a033ba");
/* harmony import */ var _Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js */ "./resources/vue/components/pages/Board.vue?vue&type=script&lang=js");
/* harmony import */ var _Board_vue_vue_type_style_index_0_id_85a033ba_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss */ "./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Board_vue_vue_type_template_id_85a033ba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/pages/Board.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/types/Module.vue":
/*!***************************************************!*\
  !*** ./resources/vue/components/types/Module.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Module_vue_vue_type_template_id_327d942a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module.vue?vue&type=template&id=327d942a */ "./resources/vue/components/types/Module.vue?vue&type=template&id=327d942a");
/* harmony import */ var _Module_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module.vue?vue&type=script&lang=js */ "./resources/vue/components/types/Module.vue?vue&type=script&lang=js");
/* harmony import */ var _Module_vue_vue_type_style_index_0_id_327d942a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Module.vue?vue&type=style&index=0&id=327d942a&lang=scss */ "./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Module_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Module_vue_vue_type_template_id_327d942a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/types/Module.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/interface/Node.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/vue/components/interface/Node.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/components/interface/PopUp.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/vue/components/interface/PopUp.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopUp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/components/interface/Workspace.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/vue/components/interface/Workspace.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Workspace.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/components/pages/Board.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/vue/components/pages/Board.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Board.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/components/types/Module.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/vue/components/types/Module.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Module.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/vue/components/interface/Node.vue?vue&type=template&id=6a564500":
/*!***********************************************************************************!*\
  !*** ./resources/vue/components/interface/Node.vue?vue&type=template&id=6a564500 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_template_id_6a564500__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_template_id_6a564500__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=template&id=6a564500 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=template&id=6a564500");


/***/ }),

/***/ "./resources/vue/components/interface/PopUp.vue?vue&type=template&id=1b4e483e":
/*!************************************************************************************!*\
  !*** ./resources/vue/components/interface/PopUp.vue?vue&type=template&id=1b4e483e ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_template_id_1b4e483e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_template_id_1b4e483e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopUp.vue?vue&type=template&id=1b4e483e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=template&id=1b4e483e");


/***/ }),

/***/ "./resources/vue/components/interface/Workspace.vue?vue&type=template&id=7b59be87":
/*!****************************************************************************************!*\
  !*** ./resources/vue/components/interface/Workspace.vue?vue&type=template&id=7b59be87 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_template_id_7b59be87__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_template_id_7b59be87__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Workspace.vue?vue&type=template&id=7b59be87 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=template&id=7b59be87");


/***/ }),

/***/ "./resources/vue/components/pages/Board.vue?vue&type=template&id=85a033ba":
/*!********************************************************************************!*\
  !*** ./resources/vue/components/pages/Board.vue?vue&type=template&id=85a033ba ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_template_id_85a033ba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_template_id_85a033ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Board.vue?vue&type=template&id=85a033ba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=template&id=85a033ba");


/***/ }),

/***/ "./resources/vue/components/types/Module.vue?vue&type=template&id=327d942a":
/*!*********************************************************************************!*\
  !*** ./resources/vue/components/types/Module.vue?vue&type=template&id=327d942a ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_template_id_327d942a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_template_id_327d942a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Module.vue?vue&type=template&id=327d942a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=template&id=327d942a");


/***/ }),

/***/ "./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss":
/*!**************************************************************************************************!*\
  !*** ./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_6a564500_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=style&index=0&id=6a564500&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Node.vue?vue&type=style&index=0&id=6a564500&lang=scss");


/***/ }),

/***/ "./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopUp_vue_vue_type_style_index_0_id_1b4e483e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/PopUp.vue?vue&type=style&index=0&id=1b4e483e&lang=scss");


/***/ }),

/***/ "./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss":
/*!*******************************************************************************************************!*\
  !*** ./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Workspace_vue_vue_type_style_index_0_id_7b59be87_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/Workspace.vue?vue&type=style&index=0&id=7b59be87&lang=scss");


/***/ }),

/***/ "./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss":
/*!***********************************************************************************************!*\
  !*** ./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Board_vue_vue_type_style_index_0_id_85a033ba_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/pages/Board.vue?vue&type=style&index=0&id=85a033ba&lang=scss");


/***/ }),

/***/ "./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss":
/*!************************************************************************************************!*\
  !*** ./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Module_vue_vue_type_style_index_0_id_327d942a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Module.vue?vue&type=style&index=0&id=327d942a&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOztBQUVxQztBQUVyQyxpRUFBZTtFQUNYQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxVQUFVLEVBQUU7SUFDUkYsTUFBSyxFQUFMQSxxREFBTUE7RUFDVixDQUFDO0VBQ0RHLEtBQUssRUFBRTtJQUNIQyxJQUFJLEVBQUVDO0VBQ1YsQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDTkMsV0FBVyxXQUFBQSxZQUFBLEVBQUc7TUFDVixPQUFPO1FBQ0hDLElBQUksS0FBQUMsTUFBQSxDQUFLLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUNDLENBQUMsT0FBSTtRQUM5QkMsR0FBRyxLQUFBSCxNQUFBLENBQUssSUFBSSxDQUFDTCxJQUFJLENBQUNNLEtBQUssQ0FBQ0csQ0FBQztNQUM3QjtJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2xCRCxpRUFBZTtFQUNYWixJQUFJLEVBQUUsT0FBTztFQUNiRSxLQUFLLEVBQUU7SUFDSFcsSUFBSSxFQUFFO01BQ0ZDLElBQUksRUFBRUMsT0FBTztNQUNiQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0RDLEtBQUssRUFBRTtNQUNISCxJQUFJLEVBQUVJLE1BQU07TUFDWixXQUFTO0lBQ2I7RUFDSjtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFeUI7QUFDRTtBQUM1QixpRUFBZTtFQUNYbEIsSUFBSSxFQUFFLFdBQVc7RUFDakJDLFVBQVUsRUFBRTtJQUNSa0IsSUFBRyxFQUFIQSw2Q0FBSUE7RUFDUixDQUFDO0VBQ0RqQixLQUFLLEVBQUUsQ0FFUCxDQUFDO0VBQ0RtQixJQUFJLFdBQUFBLEtBQUEsRUFBRztJQUNILE9BQU87TUFDSEMsZUFBZSxFQUFFLElBQUk7TUFBRTtNQUN2QkMsZ0JBQWdCLEVBQUUsSUFBSTtNQUFFO01BQ3hCQyxhQUFhLEVBQUUs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Ozs7Ozs7Ozs7QUMxQm1EO0FBQ1Y7QUFDTDs7QUFFbkQsQ0FBaUU7O0FBRXNDO0FBQ3ZHLGlDQUFpQyxxSEFBZSxDQUFDLDBFQUFNLGFBQWEsNEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJvRDtBQUNWO0FBQ0w7O0FBRXBELENBQWtFOztBQUVxQztBQUN2RyxpQ0FBaUMscUhBQWUsQ0FBQywyRUFBTSxhQUFhLDZFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCZ007Ozs7Ozs7Ozs7Ozs7OztBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7QUNBSTs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7OztBQ0FDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Qb3BVcC52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2YwMmYiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1BvcFVwLnZ1ZT80NzVkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2I5ZjEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzdkODIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT80NTZjIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9jNmY3Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Qb3BVcC52dWU/MDEzMCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT8yZDlkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT80OWJiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MmYyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/NTE0OCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvUG9wVXAudnVlP2IzZDIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/ZDA1YSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/NjBhYiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlPzFjODMiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2Y5M2QiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1BvcFVwLnZ1ZT85ZGU5Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2RlZjkiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlP2YzYzciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8wNDUxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibm9kZVwiICA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiPlxuICAgICAgICA8TW9kdWxlIHYtaWY9XCJub2RlLnR5cGUgPT09ICdNb2R1bGUnXCIgOm5vZGU9XCJub2RlXCIgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKlxu0KLRg9GCINC80Ysg0L/QvtC00LrQu9GO0YfQsNC10Lwg0YLQuNC/0YsgUG9pbnQt0L7QsiDQuCDRg9C/0YDQsNCy0LvRj9C10Lwg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LXQvCDQuCDQvtCx0YnQuNC8INC/0L7QstC10LTQtdC90LjQtdC8XG4gKi9cbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uL3R5cGVzL01vZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2R1bGVcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubm9kZS5wb2ludC54fXB4YCxcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMubm9kZS5wb2ludC55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgJi5mb2N1cyB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwia3JpdGktcG9wdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImtyaXRpLXBvcHVwIGtyaXRpLXBvcHVwX190aXRsZVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiUG9wVXBcIixcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmtyaXRpLXBvcHVwIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZFwiXG4gICAgIGNsYXNzPVwid29ya3NwYWNlXCJcbiAgICAgOnN0eWxlPVwiYHdpZHRoOiR7d29ya3NwYWNlX3dpZHRofXB4O2hlaWdodDoke3dvcmtzcGFjZV9oZWlnaHR9cHhgXCJcbiAgICAgQG1vdXNlZG93bi5jdHJsLnNlbGY9XCJtb3ZlUGxhdG9cIlxuICAgICBAbW91c2V1cC5zZWxmPVwiZHJvcFBsYXRvXCJcbiAgICAgQG1vdXNlbW92ZT1cIm1vdXNlbW92ZVwiXG4gICAgIEBkYmxjbGljay5zZWxmPVwiY29udGV4dE1lbnVcIlxuPlxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc3BhY2VfX3ByZWxvYWRlclwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc3BhY2VfX3BsYXRvXCIgOnN0eWxlPVwiYG1hcmdpbi1sZWZ0OiR7IHBsYXRvX3ggfXB4O21hcmdpbi10b3A6JHsgcGxhdG9feSB9cHhgXCI+XG4gICAgICAgIDxOb2RlIHYtZm9yPVwibm9kZSBpbiBub2Rlc1wiIDpub2RlPVwibm9kZVwiXG4gICAgICAgICAgICAgOnJlZj1cIm5vZGUuaWRcIiA6Y2xhc3M9XCJ7IGZvY3VzOm5vZGUgPT09IGFjdGl2ZV9ub2RlIH1cIlxuICAgICAgICAgICAgIEBtb3VzZWRvd249XCJub2RlSG9sZChub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICBAbW91c2V1cD1cIm5vZGVEcm9wXCJcbiAgICAgICAgICAgICBAY2xpY2suY3RybD1cImNyZWF0ZUxpbmsobm9kZSlcIlxuICAgICAgICAgICAgIEBjb250ZXh0bWVudS5wcmV2ZW50PVwibm9kZUxvYWQobm9kZSlcIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IFBvcFVwIGZyb20gXCIuL1BvcFVwXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJXb3Jrc3BhY2VcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5vZGVcbiAgICB9LFxuICAgIHByb3BzOiB7XG5cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3b3Jrc3BhY2Vfd2lkdGg6IG51bGwsIC8vINCo0LjRgNC40L3QsCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICAgICAgd29ya3NwYWNlX2hlaWdodDogbnVsbCwgLy8g0JLRi9GB0L7RgtCwINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgICAgICBob2xkX3hfZmFjdG9yOiBudWxsLCAvLyDQn9C+0L/RgNCw0LLQutCwINC+0LHRitC10LrRgtCwINC/0L4geFxuICAgICAgICAgICAgaG9sZF95X2ZhY3RvcjogbnVsbCwgLy8g0J/QvtC/0YDQsNCy0LrQsCDQvtCx0YrQtdC60YLQsCDQv9C+IHlcbiAgICAgICAgICAgIHdvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQ6IGZhbHNlLCAvLyDQoNCw0LfQvNC10YAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0Lgg0L7Qv9GA0LXQtNC10LvRkdC9XG4gICAgICAgICAgICBwbGF0b194OiAwLCAvLyDQodC80LXRidC10L3QuNC1INC60LDRgNGC0Ysg0L/QviDQvtGB0Lgg0KVcbiAgICAgICAgICAgIHBsYXRvX3k6IDAsIC8vINCh0LzQtdGJ0LXQvdC40LUg0LrQsNGA0YLRiyDQv9C+INC+0YHQuCBZXG4gICAgICAgICAgICBub2RlczogbnVsbCwgLy8g0JfQsNCz0YDRg9C20LXQvdC90YvQtSDQvdC+0LTRi1xuICAgICAgICAgICAgYWN0aXZlX25vZGU6IG51bGwsIC8vINCS0YvQtNC10LvQtdC90L3Ri9C5INC90L7QtFxuICAgICAgICAgICAgbGFzdF9ob2xkX3g6IDAsIC8vINCf0L7Qt9C40YbQuNGPINC90L7QtNCwINC/0LXRgNC10LQg0L/QtdGA0LXQvNC10YnQtdC90LjQtdC8INC/0L4gWFxuICAgICAgICAgICAgbGFzdF9ob2xkX3k6IDAsIC8vINCf0L7Qt9C40YbQuNGPINC90L7QtNCwINC/0LXRgNC10LQg0L/QtdGA0LXQvNC10YnQtdC90LjQtdC8INC/0L4gWVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5kZWZpbmVXb3Jrc3BhY2VTaXplKClcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSlcbiAgICAgICAgdGhpcy5sb2FkTm9kZXMoKVxuICAgIH0sXG4gICAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvQuNGC0Ywg0YDQsNC30LzQtdGAINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIGRlZmluZVdvcmtzcGFjZVNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSB0aGlzLiRlbC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMud29ya3NwYWNlX3dpZHRoID0gcGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgIHRoaXMud29ya3NwYWNlX2hlaWdodCA9IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud29ya3NwYWNlX3dpZHRoICYmIHRoaXMud29ya3NwYWNlX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINC60LDRgNGC0YMg0L3QvtC00L7QslxuICAgICAgICBsb2FkTm9kZXMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Ob2RlczpnZXROb2RlcycsXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzID0gcmVzcG9uc2Uubm9kZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0LLQuNCz0LDRgtGMINC60LDRgNGC0YNcbiAgICAgICAgbW92ZVBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gdGhpcy5wbGF0b194XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLnBsYXRvX3lcbiAgICAgICAgICAgIHRoaXMuaG9sZF9wbGF0byA9IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGB0YLQsNCy0LjRgtGMINC60LDRgNGC0YNcbiAgICAgICAgZHJvcFBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3BsYXRvID0gZmFsc2VcbiAgICAgICAgICAgIC8vdGhpcy5zYXZlV29ya3NwYWNlKCkgLy8g0KHQvtGF0YDQsNC90LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCk0LjQutGB0LjRgNC+0LLQsNGC0Ywg0LTQstC40LbQtdC90LjQtSDQvNGL0YjQuFxuICAgICAgICBtb3VzZW1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VfeCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICB0aGlzLm1vdXNlX3kgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9kZSgpIC8vINCU0LLQuNCz0LDRgtGMINC+0LHRitC10LrRgiDQtdGB0LvQuCDQvtC9INCw0LrRgtC40LLQtdC9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW92ZU5vZGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVfbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LrQsNGA0YLQsFxuICAgICAgICAgICAgaWYgKHRoaXMuaG9sZF9wbGF0bykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnBsYXRvX3ggKyB0aGlzLmJvZHlfeF9mYWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5wbGF0b195ICsgdGhpcy5ib2R5X3lfZmFjdG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5xdWFudGl6ZU9iamVjdHMoKVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRleHRNZW51KCl7fSxcblxuICAgICAgICAvLyDQl9Cw0YXQstCw0YIg0L3QvtC00LBcbiAgICAgICAgbm9kZUhvbGQobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZUhvbGRQb3NpdGlvbigpXG4gICAgICAgICAgICBub2RlLmZvY3VzID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gbm9kZS5wb2ludC54XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSBub2RlLnBvaW50LnlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNGE0LjQutGB0LjRgNC+0LLQsNGC0Ywg0L/QvtC30LjRhtC40Y4g0L3QvtC00LBcbiAgICAgICAgc2F2ZUhvbGRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3ggPSB0aGlzLm1vdXNlX3hcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3kgPSB0aGlzLm1vdXNlX3lcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40YLRjCDQvdC+0LRcbiAgICAgICAgbm9kZURyb3AoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcCBub2RlJylcbiAgICAgICAgICAgIHRoaXMubm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5mb2N1cyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlID0gbnVsbFxuXG4gICAgICAgICAgICAvLyDQodC+0YXRgNCw0L3Rj9GC0Ywg0YLQvtC70YzQutC+INC10YHQu9C4INCx0YvQuyDRgdC00LLQuNC90YPRgiDQvtCx0YrQtdC60YJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RfaG9sZF94ICE9PSB0aGlzLm1vdXNlX3ggfHwgdGhpcy5sYXN0X2hvbGRfeSAhPT0gdGhpcy5tb3VzZV95KSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnNhdmVXb3Jrc3BhY2UoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlV29ya3NwYWNlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBub2RlTG9hZChub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZCBub2RlJywgbm9kZSlcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVMaW5rKCl7fSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ud29ya3NwYWNlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICM1Nzk0YTk7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmX19wbGF0byB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAua3JpdGktcHJlbG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3NTtcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgei1pbmRleDogMTAwMDAxO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJvYXJkXCI+XG4gICAgICAgIDxXb3Jrc3BhY2UgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgV29ya3NwYWNlIGZyb20gXCIuLi9pbnRlcmZhY2UvV29ya3NwYWNlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJCb2FyZFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgV29ya3NwYWNlXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmJvYXJkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogIzgwZGI4MDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1vZHVsZVwiIDpzdHlsZT1cIm1vZHVsZVN0eWxlXCI+XG4gICAgICAgINCc0L7QtNGD0LvRjFxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk1vZHVsZVwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLm5vZGUuc3R5bGUud2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5ub2RlLnN0eWxlLmhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBgJHt0aGlzLm5vZGUuc3R5bGVbJ2JhY2tncm91bmQtY29sb3InXX1gLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5tb2R1bGUge1xuXG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub2RlLmZvY3VzIHtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0FBQVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgICYuZm9jdXMge1xcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIua3JpdGktcG9wdXAge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Qb3BVcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxnQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5rcml0aS1wb3B1cCB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53b3Jrc3BhY2Uge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICM1Nzk0YTk7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLndvcmtzcGFjZV9fcGxhdG8ge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi53b3Jrc3BhY2UgLmtyaXRpLXByZWxvYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1ODgyMzUyOTQpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAxMDAwMDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ud29ya3NwYWNlIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzU3OTRhOTtcXG4gICAgY29sb3I6ICMwMDA7XFxuXFxuICAgICZfX3BsYXRvIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3NTtcXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvYXJkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6ICM4MGRiODA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YTU2NDUwMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUG9wVXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWI0ZTQ4M2UmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjU5YmU4NyZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODVhMDMzYmEmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZHVsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjdkOTQyYSZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhNTY0NTAwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmE1NjQ1MDBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YTU2NDUwMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YTU2NDUwMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUG9wVXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNGU0ODNlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9wVXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BvcFVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vUG9wVXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWI0ZTQ4M2UmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Qb3BVcC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMWI0ZTQ4M2VcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxYjRlNDgzZScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzFiNGU0ODNlJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qb3BVcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI0ZTQ4M2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMWI0ZTQ4M2UnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjU5YmU4NyZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiN2I1OWJlODdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3YjU5YmU4NycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzdiNTliZTg3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiNTliZTg3XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzdiNTliZTg3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjg1YTAzM2JhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnODVhMDMzYmEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1YTAzM2JhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzg1YTAzM2JhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzI3ZDk0MmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczMjdkOTQyYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzMyN2Q5NDJhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Qb3BVcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Qb3BVcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiTW9kdWxlIiwibmFtZSIsImNvbXBvbmVudHMiLCJwcm9wcyIsIm5vZGUiLCJPYmplY3QiLCJjb21wdXRlZCIsIm1vZHVsZVN0eWxlIiwibGVmdCIsImNvbmNhdCIsInBvaW50IiwieCIsInRvcCIsInkiLCJzaG93IiwidHlwZSIsIkJvb2xlYW4iLCJyZXF1aXJlZCIsInRpdGxlIiwiU3RyaW5nIiwiTm9kZSIsIlBvcFVwIiwiZGF0YSIsIndvcmtzcGFjZV93aWR0aCIsIndvcmtzcGFjZV9oZWlnaHQiLCJob2xkX3hfZmFjdG9yIiwiaG9sZF95X2ZhY3RvciIsIndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQiLCJwbGF0b194IiwicGxhdG9feSIsIm5vZGVzIiwiYWN0aXZlX25vZGUiLCJsYXN0X2hvbGRfeCIsImxhc3RfaG9sZF95IiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJkZWZpbmVXb3Jrc3BhY2VTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWROb2RlcyIsImJlZm9yZVVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWV0aG9kcyIsIl90aGlzIiwiJG5leHRUaWNrIiwicGFyZW50RWxlbWVudCIsIiRlbCIsInBhcmVudE5vZGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIl90aGlzMiIsIktyaXRpIiwiYXBpIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwibW92ZVBsYXRvIiwibW91c2VfeCIsIm1vdXNlX3kiLCJob2xkX3BsYXRvIiwiZHJvcFBsYXRvIiwibW91c2Vtb3ZlIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwibW92ZU5vZGUiLCIkIiwiY3NzIiwibWFyZ2luTGVmdCIsImJvZHlfeF9mYWN0b3IiLCJtYXJnaW5Ub3AiLCJib2R5X3lfZmFjdG9yIiwiY29udGV4dE1lbnUiLCJub2RlSG9sZCIsImJ1dHRvbiIsInNhdmVIb2xkUG9zaXRpb24iLCJmb2N1cyIsIm5vZGVEcm9wIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm5vZGVMb2FkIiwiY3JlYXRlTGluayIsIldvcmtzcGFjZSIsIndpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZVN0eWxlIiwiJG9wdGlvbnMiLCIkcHJvcHMiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X01vZHVsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl9yZW5kZXJTbG90IiwiX2N0eCIsIiRzbG90cyIsIiRkYXRhIiwib25Nb3VzZWRvd24iLCJfY2FjaGUiLCJfd2l0aE1vZGlmaWVycyIsImFwcGx5IiwiYXJndW1lbnRzIiwib25Nb3VzZXVwIiwib25Nb3VzZW1vdmUiLCJvbkRibGNsaWNrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY29tcG9uZW50X05vZGUiLCJyZWYiLCJpZCIsIl9ub3JtYWxpemVDbGFzcyIsIiRldmVudCIsIm9uQ2xpY2siLCJvbkNvbnRleHRtZW51IiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9Xb3Jrc3BhY2UiXSwic291cmNlUm9vdCI6IiJ9