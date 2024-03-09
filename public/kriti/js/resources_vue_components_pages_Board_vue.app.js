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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NodeModal",
  props: {
    node: Object
  },
  data: function data() {
    return {
      node_data: null
    };
  },
  watch: {
    node: function node(_node) {
      this.node_data = _node.type;
    }
  },
  methods: {}
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
/* harmony import */ var _NodeModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeModal */ "./resources/vue/components/interface/NodeModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Workspace",
  components: {
    Node: _Node__WEBPACK_IMPORTED_MODULE_0__["default"],
    NodeModal: _NodeModal__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      node: null,
      // Данные нода
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
    // Загрузить ноды
    loadNodes: function loadNodes() {
      var _this2 = this;
      Kriti.api({
        url: 'kriti.api.Nodes:getNodes',
        then: function then(response) {
          _this2.nodes = response.nodes;
        }
      });
    },
    sanitizeNodes: function sanitizeNodes() {
      var nodes = _.cloneDeep(this.nodes);
      nodes.map(function (node) {
        delete node.focus;
      });
      return nodes;
    },
    // Сохранить ноды
    saveNodes: function saveNodes() {
      Kriti.api({
        url: 'kriti.api.Nodes:setNodes',
        data: {
          nodes: this.sanitizeNodes()
        },
        then: function then(response) {
          console.log('nodes save');
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
      this.saveNodes(); // Сохранить состояние
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
      this.nodes.map(function (node) {
        node.focus = false;
      });
      this.active_node = null;

      // Сохранять только если был сдвинут объект
      if (this.last_hold_x !== this.mouse_x || this.last_hold_y !== this.mouse_y) {
        this.saveNodes();
      }
    },
    // Загрузить данные нода
    nodeLoad: function nodeLoad(node) {
      this.node = node;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=template&id=6c2614bd":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=template&id=6c2614bd ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "node-modal"
};
var _hoisted_2 = {
  "class": "node-modal__body"
};
var _hoisted_3 = {
  "class": "node-modal__header"
};
var _hoisted_4 = {
  "class": "node-modal__title"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "node-modal__close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x-square-fill"
})], -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "node-modal__content"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.node_data ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, " Тут заголовок модуля " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.node_data), 1 /* TEXT */), _hoisted_5]), _hoisted_6])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
  var _component_NodeModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NodeModal");
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
  }), 256 /* UNKEYED_FRAGMENT */))], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NodeModal, {
    node: $data.node
  }, null, 8 /* PROPS */, ["node"])], 36 /* STYLE, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".node-modal {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6117647059);\n}\n.node-modal__body {\n  background: #fff;\n  width: 80%;\n  min-height: 300px;\n  margin-top: 30px;\n  padding: 15px;\n  border-radius: 10px;\n}\n.node-modal__header {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/NodeModal.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,uCAAA;AAAJ;AAEI;EACI,gBAAA;EACA,UAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AAAR;AAGI;EACI,aAAA;AADR","sourcesContent":["\n.node-modal {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #0000009c;\n\n    &__body {\n        background: #fff;\n        width: 80%;\n        min-height: 300px;\n        margin-top: 30px;\n        padding: 15px;\n        border-radius: 10px;\n    }\n\n    &__header {\n        display: flex;\n    }\n\n    &__title {\n\n    }\n\n    &__close {\n        i {\n            \n        }\n    }\n\n    &__content {\n\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_style_index_0_id_6c2614bd_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_style_index_0_id_6c2614bd_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_style_index_0_id_6c2614bd_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/vue/components/interface/NodeModal.vue":
/*!**********************************************************!*\
  !*** ./resources/vue/components/interface/NodeModal.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeModal_vue_vue_type_template_id_6c2614bd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeModal.vue?vue&type=template&id=6c2614bd */ "./resources/vue/components/interface/NodeModal.vue?vue&type=template&id=6c2614bd");
/* harmony import */ var _NodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeModal.vue?vue&type=script&lang=js */ "./resources/vue/components/interface/NodeModal.vue?vue&type=script&lang=js");
/* harmony import */ var _NodeModal_vue_vue_type_style_index_0_id_6c2614bd_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss */ "./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NodeModal_vue_vue_type_template_id_6c2614bd__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/interface/NodeModal.vue"]])
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

/***/ "./resources/vue/components/interface/NodeModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/vue/components/interface/NodeModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/vue/components/interface/NodeModal.vue?vue&type=template&id=6c2614bd":
/*!****************************************************************************************!*\
  !*** ./resources/vue/components/interface/NodeModal.vue?vue&type=template&id=6c2614bd ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_template_id_6c2614bd__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_template_id_6c2614bd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeModal.vue?vue&type=template&id=6c2614bd */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=template&id=6c2614bd");


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

/***/ "./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss":
/*!*******************************************************************************************************!*\
  !*** ./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeModal_vue_vue_type_style_index_0_id_6c2614bd_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/NodeModal.vue?vue&type=style&index=0&id=6c2614bd&lang=scss");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOztBQUVxQztBQUVyQyxpRUFBZTtFQUNYQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxVQUFVLEVBQUU7SUFDUkYsTUFBSyxFQUFMQSxxREFBTUE7RUFDVixDQUFDO0VBQ0RHLEtBQUssRUFBRTtJQUNIQyxJQUFJLEVBQUVDO0VBQ1YsQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDTkMsV0FBVyxXQUFBQSxZQUFBLEVBQUc7TUFDVixPQUFPO1FBQ0hDLElBQUksS0FBQUMsTUFBQSxDQUFLLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUNDLENBQUMsT0FBSTtRQUM5QkMsR0FBRyxLQUFBSCxNQUFBLENBQUssSUFBSSxDQUFDTCxJQUFJLENBQUNNLEtBQUssQ0FBQ0csQ0FBQztNQUM3QjtJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1RELGlFQUFlO0VBQ1haLElBQUksRUFBRSxXQUFXO0VBQ2pCRSxLQUFLLEVBQUU7SUFDSEMsSUFBSSxFQUFFQztFQUNWLENBQUM7RUFDRFMsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLFNBQVMsRUFBRTtJQUNmO0VBQ0osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSFosSUFBSSxXQUFBQSxLQUFDQSxLQUFJLEVBQUU7TUFDUCxJQUFJLENBQUNXLFNBQVEsR0FBSVgsS0FBSSxDQUFDYSxJQUFHO0lBQzdCO0VBQ0osQ0FBQztFQUNEQyxPQUFPLEVBQUUsQ0FFVDtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeUI7QUFDVTtBQUVwQyxpRUFBZTtFQUNYakIsSUFBSSxFQUFFLFdBQVc7RUFDakJDLFVBQVUsRUFBRTtJQUNSaUIsSUFBSSxFQUFKQSw2Q0FBSTtJQUFFQyxTQUFRLEVBQVJBLGtEQUFTQTtFQUNuQixDQUFDO0VBQ0RqQixLQUFL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QUFFbEQsQ0FBZ0U7O0FBRXVDO0FBQ3ZHLGlDQUFpQyxxSEFBZSxDQUFDLHlFQUFNLGFBQWEsMkVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ1RDtBQUNWO0FBQ0w7O0FBRXZELENBQXFFOztBQUVrQztBQUN2RyxpQ0FBaUMscUhBQWUsQ0FBQyw4RUFBTSxhQUFhLGdGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdUQ7QUFDVjtBQUNMOztBQUV2RCxDQUFxRTs7QUFFa0M7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsOEVBQU0sYUFBYSxnRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm1EO0FBQ1Y7QUFDTDs7QUFFbkQsQ0FBaUU7O0FBRXNDO0FBQ3ZHLGlDQUFpQyxxSEFBZSxDQUFDLDBFQUFNLGFBQWEsNEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJvRDtBQUNWO0FBQ0w7O0FBRXBELENBQWtFOztBQUVxQztBQUN2RyxpQ0FBaUMscUhBQWUsQ0FBQywyRUFBTSxhQUFhLDZFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCZ007Ozs7Ozs7Ozs7Ozs7OztBQ0FLOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7OztBQ0FDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9mMDJmIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlP2UwZTQiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/YjlmMSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/N2Q4MiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlPzQ1NmMiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2M2ZjciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/NmZmMiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT8yZDlkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT80OWJiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MmYyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/NTE0OCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT8wMDMwIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2QwNWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzYwYWIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8xYzgzIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9mOTNkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlPzEwMWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/ZGVmOSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/ZjNjNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlPzA0NTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJub2RlXCIgIDpzdHlsZT1cIm1vZHVsZVN0eWxlXCI+XG4gICAgICAgIDxNb2R1bGUgdi1pZj1cIm5vZGUudHlwZSA9PT0gJ01vZHVsZSdcIiA6bm9kZT1cIm5vZGVcIiAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qXG7QotGD0YIg0LzRiyDQv9C+0LTQutC70Y7Rh9Cw0LXQvCDRgtC40L/RiyBQb2ludC3QvtCyINC4INGD0L/RgNCw0LLQu9GP0LXQvCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtdC8INC4INC+0LHRidC40Lwg0L/QvtCy0LXQtNC10L3QuNC10LxcbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vdHlwZXMvTW9kdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vZHVsZVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2R1bGVTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5ub2RlLnBvaW50Lnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy5ub2RlLnBvaW50Lnl9cHhgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmLmZvY3VzIHtcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1pZj1cIm5vZGVfZGF0YVwiIGNsYXNzPVwibm9kZS1tb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQotGD0YIg0LfQsNCz0L7Qu9C+0LLQvtC6INC80L7QtNGD0LvRjyB7eyBub2RlX2RhdGEgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS14LXNxdWFyZS1maWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY29udGVudFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTm9kZU1vZGFsXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZV9kYXRhOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIG5vZGUobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlX2RhdGEgPSBub2RlLnR5cGVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG5cbiAgICB9XG5cbiAgICAmX19jbG9zZSB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcblxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJ3b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkXCJcbiAgICAgY2xhc3M9XCJ3b3Jrc3BhY2VcIlxuICAgICA6c3R5bGU9XCJgd2lkdGg6JHt3b3Jrc3BhY2Vfd2lkdGh9cHg7aGVpZ2h0OiR7d29ya3NwYWNlX2hlaWdodH1weGBcIlxuICAgICBAbW91c2Vkb3duLmN0cmwuc2VsZj1cIm1vdmVQbGF0b1wiXG4gICAgIEBtb3VzZXVwLnNlbGY9XCJkcm9wUGxhdG9cIlxuICAgICBAbW91c2Vtb3ZlPVwibW91c2Vtb3ZlXCJcbiAgICAgQGRibGNsaWNrLnNlbGY9XCJjb250ZXh0TWVudVwiXG4+XG4gICAgPGRpdiBjbGFzcz1cIndvcmtzcGFjZV9fcHJlbG9hZGVyXCI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwid29ya3NwYWNlX19wbGF0b1wiIDpzdHlsZT1cImBtYXJnaW4tbGVmdDokeyBwbGF0b194IH1weDttYXJnaW4tdG9wOiR7IHBsYXRvX3kgfXB4YFwiPlxuICAgICAgICA8Tm9kZSB2LWZvcj1cIm5vZGUgaW4gbm9kZXNcIiA6bm9kZT1cIm5vZGVcIlxuICAgICAgICAgICAgIDpyZWY9XCJub2RlLmlkXCIgOmNsYXNzPVwieyBmb2N1czpub2RlID09PSBhY3RpdmVfbm9kZSB9XCJcbiAgICAgICAgICAgICBAbW91c2Vkb3duPVwibm9kZUhvbGQobm9kZSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgQG1vdXNldXA9XCJub2RlRHJvcFwiXG4gICAgICAgICAgICAgQGNsaWNrLmN0cmw9XCJjcmVhdGVMaW5rKG5vZGUpXCJcbiAgICAgICAgICAgICBAY29udGV4dG1lbnUucHJldmVudD1cIm5vZGVMb2FkKG5vZGUpXCJcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8Tm9kZU1vZGFsIDpub2RlPVwibm9kZVwiLz5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCBOb2RlTW9kYWwgZnJvbSBcIi4vTm9kZU1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIldvcmtzcGFjZVwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTm9kZSwgTm9kZU1vZGFsXG4gICAgfSxcbiAgICBwcm9wczoge1xuXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd29ya3NwYWNlX3dpZHRoOiBudWxsLCAvLyDQqNC40YDQuNC90LAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgICAgIHdvcmtzcGFjZV9oZWlnaHQ6IG51bGwsIC8vINCS0YvRgdC+0YLQsCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICAgICAgaG9sZF94X2ZhY3RvcjogbnVsbCwgLy8g0J/QvtC/0YDQsNCy0LrQsCDQvtCx0YrQtdC60YLQsCDQv9C+IHhcbiAgICAgICAgICAgIGhvbGRfeV9mYWN0b3I6IG51bGwsIC8vINCf0L7Qv9GA0LDQstC60LAg0L7QsdGK0LXQutGC0LAg0L/QviB5XG4gICAgICAgICAgICB3b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkOiBmYWxzZSwgLy8g0KDQsNC30LzQtdGAINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4INC+0L/RgNC10LTQtdC70ZHQvVxuICAgICAgICAgICAgcGxhdG9feDogMCwgLy8g0KHQvNC10YnQtdC90LjQtSDQutCw0YDRgtGLINC/0L4g0L7RgdC4INClXG4gICAgICAgICAgICBwbGF0b195OiAwLCAvLyDQodC80LXRidC10L3QuNC1INC60LDRgNGC0Ysg0L/QviDQvtGB0LggWVxuICAgICAgICAgICAgbm9kZXM6IG51bGwsIC8vINCX0LDQs9GA0YPQttC10L3QvdGL0LUg0L3QvtC00YtcbiAgICAgICAgICAgIG5vZGU6IG51bGwsIC8vINCU0LDQvdC90YvQtSDQvdC+0LTQsFxuICAgICAgICAgICAgYWN0aXZlX25vZGU6IG51bGwsIC8vINCS0YvQtNC10LvQtdC90L3Ri9C5INC90L7QtFxuICAgICAgICAgICAgbGFzdF9ob2xkX3g6IDAsIC8vINCf0L7Qt9C40YbQuNGPINC90L7QtNCwINC/0LXRgNC10LQg0L/QtdGA0LXQvNC10YnQtdC90LjQtdC8INC/0L4gWFxuICAgICAgICAgICAgbGFzdF9ob2xkX3k6IDAsIC8vINCf0L7Qt9C40YbQuNGPINC90L7QtNCwINC/0LXRgNC10LQg0L/QtdGA0LXQvNC10YnQtdC90LjQtdC8INC/0L4gWVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5kZWZpbmVXb3Jrc3BhY2VTaXplKClcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSlcbiAgICAgICAgdGhpcy5sb2FkTm9kZXMoKVxuICAgIH0sXG4gICAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvQuNGC0Ywg0YDQsNC30LzQtdGAINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIGRlZmluZVdvcmtzcGFjZVNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSB0aGlzLiRlbC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMud29ya3NwYWNlX3dpZHRoID0gcGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgIHRoaXMud29ya3NwYWNlX2hlaWdodCA9IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud29ya3NwYWNlX3dpZHRoICYmIHRoaXMud29ya3NwYWNlX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINC90L7QtNGLXG4gICAgICAgIGxvYWROb2RlcygpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGVzOmdldE5vZGVzJyxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXMgPSByZXNwb25zZS5ub2Rlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2FuaXRpemVOb2RlcygpIHtcbiAgICAgICAgICAgIGxldCBub2RlcyA9IF8uY2xvbmVEZWVwKHRoaXMubm9kZXMpXG4gICAgICAgICAgICBub2Rlcy5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbm9kZS5mb2N1c1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBub2Rlc1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDQvdC+0LTRi1xuICAgICAgICBzYXZlTm9kZXMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Ob2RlczpzZXROb2RlcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBub2RlczogdGhpcy5zYW5pdGl6ZU5vZGVzKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vZGVzIHNhdmUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JTQstC40LPQsNGC0Ywg0LrQsNGA0YLRg1xuICAgICAgICBtb3ZlUGxhdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRfeF9mYWN0b3IgPSB0aGlzLm1vdXNlX3ggLSB0aGlzLnBsYXRvX3hcbiAgICAgICAgICAgIHRoaXMuaG9sZF95X2ZhY3RvciA9IHRoaXMubW91c2VfeSAtIHRoaXMucGxhdG9feVxuICAgICAgICAgICAgdGhpcy5ob2xkX3BsYXRvID0gdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YHRgtCw0LLQuNGC0Ywg0LrQsNGA0YLRg1xuICAgICAgICBkcm9wUGxhdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRfcGxhdG8gPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5zYXZlTm9kZXMoKSAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KTQuNC60YHQuNGA0L7QstCw0YLRjCDQtNCy0LjQttC10L3QuNC1INC80YvRiNC4XG4gICAgICAgIG1vdXNlbW92ZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZV94ID0gZXZlbnQucGFnZVhcbiAgICAgICAgICAgIHRoaXMubW91c2VfeSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICB0aGlzLm1vdmVOb2RlKCkgLy8g0JTQstC40LPQsNGC0Ywg0L7QsdGK0LXQutGCINC10YHQu9C4INC+0L0g0LDQutGC0LjQstC10L1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3ZlTm9kZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZV9ub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZS5wb2ludC54ID0gdGhpcy5tb3VzZV94IC0gdGhpcy5ob2xkX3hfZmFjdG9yXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZS5wb2ludC55ID0gdGhpcy5tb3VzZV95IC0gdGhpcy5ob2xkX3lfZmFjdG9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC00LLQuNCz0LDQtdGC0YHRjyDQutCw0YDRgtCwXG4gICAgICAgICAgICBpZiAodGhpcy5ob2xkX3BsYXRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0b194ID0gdGhpcy5tb3VzZV94IC0gdGhpcy5ob2xkX3hfZmFjdG9yXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0b195ID0gdGhpcy5tb3VzZV95IC0gdGhpcy5ob2xkX3lfZmFjdG9yXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucGxhdG9feCArIHRoaXMuYm9keV94X2ZhY3RvcixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnBsYXRvX3kgKyB0aGlzLmJvZHlfeV9mYWN0b3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGlzLnF1YW50aXplT2JqZWN0cygpXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udGV4dE1lbnUoKXt9LFxuXG4gICAgICAgIC8vINCX0LDRhdCy0LDRgiDQvdC+0LTQsFxuICAgICAgICBub2RlSG9sZChub2RlLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlSG9sZFBvc2l0aW9uKClcbiAgICAgICAgICAgIG5vZGUuZm9jdXMgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhvbGRfeF9mYWN0b3IgPSB0aGlzLm1vdXNlX3ggLSBub2RlLnBvaW50LnhcbiAgICAgICAgICAgIHRoaXMuaG9sZF95X2ZhY3RvciA9IHRoaXMubW91c2VfeSAtIG5vZGUucG9pbnQueVxuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZSA9IG5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0YTQuNC60YHQuNGA0L7QstCw0YLRjCDQv9C+0LfQuNGG0LjRjiDQvdC+0LTQsFxuICAgICAgICBzYXZlSG9sZFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0X2hvbGRfeCA9IHRoaXMubW91c2VfeFxuICAgICAgICAgICAgdGhpcy5sYXN0X2hvbGRfeSA9IHRoaXMubW91c2VfeVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjRgtGMINC90L7QtFxuICAgICAgICBub2RlRHJvcCgpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ub2Rlcy5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUgPSBudWxsXG5cbiAgICAgICAgICAgIC8vINCh0L7RhdGA0LDQvdGP0YLRjCDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0LHRi9C7INGB0LTQstC40L3Rg9GCINC+0LHRitC10LrRglxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdF9ob2xkX3ggIT09IHRoaXMubW91c2VfeCB8fCB0aGlzLmxhc3RfaG9sZF95ICE9PSB0aGlzLm1vdXNlX3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVOb2RlcygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINC00LDQvdC90YvQtSDQvdC+0LTQsFxuICAgICAgICBub2RlTG9hZChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlTGluaygpe30sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLndvcmtzcGFjZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTc5NGE5O1xuICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgJl9fcGxhdG8ge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmtyaXRpLXByZWxvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzU7XG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwMTtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiPlxuICAgICAgICA8V29ya3NwYWNlIC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFdvcmtzcGFjZSBmcm9tIFwiLi4vaW50ZXJmYWNlL1dvcmtzcGFjZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQm9hcmRcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFdvcmtzcGFjZVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ib2FyZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICM4MGRiODA7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtb2R1bGVcIiA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiPlxuICAgICAgICDQnNC+0LTRg9C70YxcbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJNb2R1bGVcIixcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBPYmplY3RcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1vZHVsZVN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7dGhpcy5ub2RlLnN0eWxlLndpZHRofXB4YCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMubm9kZS5zdHlsZS5oZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogYCR7dGhpcy5ub2RlLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ119YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubW9kdWxlIHtcblxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9kZS5mb2N1cyB7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxnQkFBQTtBQUFSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICAmLmZvY3VzIHtcXG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjExNzY0NzA1OSk7XFxufVxcbi5ub2RlLW1vZGFsX19ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5ub2RlLW1vZGFsX19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtBQUFKO0FBRUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7QUFEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubm9kZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5YztcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG5cXG4gICAgfVxcblxcbiAgICAmX19jbG9zZSB7XFxuICAgICAgICBpIHtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG5cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud29ya3NwYWNlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNTc5NGE5O1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi53b3Jrc3BhY2VfX3BsYXRvIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ud29ya3NwYWNlIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTg4MjM1Mjk0KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMTAwMDAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7QUFFSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FBRFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLndvcmtzcGFjZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICM1Nzk0YTk7XFxuICAgIGNvbG9yOiAjMDAwO1xcblxcbiAgICAmX19wbGF0byB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAua3JpdGktcHJlbG9hZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzU7XFxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMTAwMDAxO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzgwZGI4MDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmE1NjQ1MDAmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YzI2MTRiZCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiNTliZTg3Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyN2Q5NDJhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTY0NTAwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmE1NjQ1MDAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YTU2NDUwMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNmE1NjQ1MDAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTY0NTAwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzZhNTY0NTAwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMjYxNGJkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmMyNjE0YmQmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZjMjYxNGJkXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmMyNjE0YmQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc2YzI2MTRiZCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzI2MTRiZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YzI2MTRiZCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjU5YmU4N1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiNTliZTg3Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3YjU5YmU4N1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzdiNTliZTg3JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnN2I1OWJlODcnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignN2I1OWJlODcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NWEwMzNiYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiODVhMDMzYmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzg1YTAzM2JhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignODVhMDMzYmEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI3ZDk0MmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjdkOTQyYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzMjdkOTQyYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMzI3ZDk0MmEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI3ZDk0MmFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMzI3ZDk0MmEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIk1vZHVsZSIsIm5hbWUiLCJjb21wb25lbnRzIiwicHJvcHMiLCJub2RlIiwiT2JqZWN0IiwiY29tcHV0ZWQiLCJtb2R1bGVTdHlsZSIsImxlZnQiLCJjb25jYXQiLCJwb2ludCIsIngiLCJ0b3AiLCJ5IiwiZGF0YSIsIm5vZGVfZGF0YSIsIndhdGNoIiwidHlwZSIsIm1ldGhvZHMiLCJOb2RlIiwiTm9kZU1vZGFsIiwid29ya3NwYWNlX3dpZHRoIiwid29ya3NwYWNlX2hlaWdodCIsImhvbGRfeF9mYWN0b3IiLCJob2xkX3lfZmFjdG9yIiwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZCIsInBsYXRvX3giLCJwbGF0b195Iiwibm9kZXMiLCJhY3RpdmVfbm9kZSIsImxhc3RfaG9sZF94IiwibGFzdF9ob2xkX3kiLCJjcmVhdGVkIiwibW91bnRlZCIsImRlZmluZVdvcmtzcGFjZVNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZE5vZGVzIiwiYmVmb3JlVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsIiRuZXh0VGljayIsInBhcmVudEVsZW1lbnQiLCIkZWwiLCJwYXJlbnROb2RlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJfdGhpczIiLCJLcml0aSIsImFwaSIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInNhbml0aXplTm9kZXMiLCJfIiwiY2xvbmVEZWVwIiwibWFwIiwiZm9jdXMiLCJzYXZlTm9kZXMiLCJjb25zb2xlIiwibG9nIiwibW92ZVBsYXRvIiwibW91c2VfeCIsIm1vdXNlX3kiLCJob2xkX3BsYXRvIiwiZHJvcFBsYXRvIiwibW91c2Vtb3ZlIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwibW92ZU5vZGUiLCIkIiwiY3NzIiwibWFyZ2luTGVmdCIsImJvZHlfeF9mYWN0b3IiLCJtYXJnaW5Ub3AiLCJib2R5X3lfZmFjdG9yIiwiY29udGV4dE1lbnUiLCJub2RlSG9sZCIsImJ1dHRvbiIsInNhdmVIb2xkUG9zaXRpb24iLCJub2RlRHJvcCIsIm5vZGVMb2FkIiwiY3JlYXRlTGluayIsIldvcmtzcGFjZSIsIndpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZVN0eWxlIiwiJG9wdGlvbnMiLCIkcHJvcHMiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X01vZHVsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCIkZGF0YSIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX2hvaXN0ZWRfMyIsIl9ob2lzdGVkXzQiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJvbk1vdXNlZG93biIsIl9jYWNoZSIsIl93aXRoTW9kaWZpZXJzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvbk1vdXNldXAiLCJvbk1vdXNlbW92ZSIsIm9uRGJsY2xpY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jb21wb25lbnRfTm9kZSIsInJlZiIsImlkIiwiX25vcm1hbGl6ZUNsYXNzIiwiJGV2ZW50Iiwib25DbGljayIsIm9uQ29udGV4dG1lbnUiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X05vZGVNb2RhbCIsIl9jb21wb25lbnRfV29ya3NwYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==