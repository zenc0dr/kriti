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
/* harmony import */ var _Dwarf_forms_ControlPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dwarf/forms/ControlPanel */ "./resources/vue/components/interface/Dwarf/forms/ControlPanel.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NodeModal",
  components: {
    ControlPanel: _Dwarf_forms_ControlPanel__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  emits: ['close', 'update'],
  props: {
    node: Object
  },
  data: function data() {
    var _this = this;
    return {
      node_menu: null,
      active_method: 'style',
      data: null,
      buttons: [{
        name: 'Сохранить',
        icon: 'bi bi-cloud-upload',
        click: function click() {
          _this.setData();
        }
      }]
    };
  },
  watch: {
    node: function node(_node) {
      var _this2 = this;
      if (!_node) {
        this.node_menu = null;
        return;
      }
      this.getData({
        method: 'menu',
        variable: 'node_menu',
        then: function then() {
          _this2.getData({
            method: _this2.active_method
          });
        }
      });
    }
  },
  methods: {
    // Чтение из нода
    getData: function getData(props) {
      var _this3 = this;
      if (!props.variable) {
        props.variable = 'data';
      }
      Kriti.api({
        url: 'kriti.api.Node:getData',
        data: {
          uuid: this.node.uuid,
          method: this.transformMethod('get', props.method)
        },
        then: function then(response) {
          _this3[props.variable] = response.data;
          if (props.then) {
            props.then();
          }
        }
      });
    },
    // Запись в нод
    setData: function setData() {
      var _this4 = this;
      Kriti.api({
        url: 'kriti.api.Node:setData',
        data: {
          uuid: this.node.uuid,
          method: this.transformMethod('set', this.active_method),
          values: this.data.values
        },
        then: function then(response) {
          _this4.$emit('update', response); // Посылается для обновления схемы
        }
      });
    },
    getContent: function getContent(method) {
      this.active_method = method;
      this.getData({
        method: this.active_method
      });
    },
    // Преобразует "prefix, method" в "prefixMethod"
    transformMethod: function transformMethod(prefix, method) {
      return prefix + method.charAt(0).toUpperCase() + method.slice(1);
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
      return this.node.style;
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
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "node-modal__title"
}, " Тут заголовок модуля ", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "node-modal__close"
};
var _hoisted_6 = {
  "class": "node-modal__content"
};
var _hoisted_7 = {
  "class": "node-modal__menu"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = {
  "class": "node-modal__form"
};
var _hoisted_10 = {
  "class": "node-modal__control"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FormFitter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormFitter");
  var _component_ControlPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ControlPanel");
  return $data.node_menu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-x-square-fill",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('close');
    })
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.node_menu, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["node-modal__menu__item", {
        active: item.method === $data.active_method
      }]),
      onClick: function onClick($event) {
        return $options.getContent(item.method);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 11 /* TEXT, CLASS, PROPS */, _hoisted_8);
  }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$data.data !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormFitter, {
    key: 0,
    scheme: $data.data.scheme,
    modelValue: $data.data.values,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.data.values = $event;
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({
    _: 2 /* DYNAMIC */
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$slots, function (_, name) {
    return {
      name: name,
      fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, name)];
      })
    };
  })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["scheme", "modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ControlPanel, {
    buttons: $data.buttons
  }, null, 8 /* PROPS */, ["buttons"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
    onMousedown: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.movePlato && $options.movePlato.apply($options, arguments);
    }, ["ctrl", "self"])),
    onMouseup: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.dropPlato && $options.dropPlato.apply($options, arguments);
    }, ["self"])),
    onMousemove: _cache[3] || (_cache[3] = function () {
      return $options.mousemove && $options.mousemove.apply($options, arguments);
    }),
    onDblclick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
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
    node: $data.node,
    onClose: _cache[0] || (_cache[0] = function ($event) {
      return $data.node = null;
    }),
    onUpdate: $options.loadNodes
  }, null, 8 /* PROPS */, ["node", "onUpdate"])], 36 /* STYLE, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
___CSS_LOADER_EXPORT___.push([module.id, ".node-modal {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6117647059);\n  overflow-y: auto;\n}\n.node-modal__body {\n  background: #fff;\n  width: 80%;\n  min-height: 300px;\n  margin-top: 30px;\n  padding: 15px;\n  border-radius: 10px;\n  padding-top: 10px;\n  margin-bottom: 100px;\n}\n.node-modal__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.node-modal__close i {\n  color: #a0a0a0;\n  cursor: pointer;\n  transition: 200ms;\n  font-size: 25px;\n}\n.node-modal__close i:hover {\n  color: #ff4f4f;\n}\n.node-modal__content {\n  display: flex;\n  justify-content: space-between;\n}\n.node-modal__menu {\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n  background: #f6f6f6;\n  border-radius: 5px;\n  padding: 10px;\n  margin-right: 15px;\n}\n.node-modal__menu__item {\n  background: #a5b0bd;\n  padding: 3px 8px;\n  margin: 3px;\n  cursor: pointer;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 15px;\n}\n.node-modal__menu__item.active {\n  background: #7aa4d0;\n}\n.node-modal__form {\n  flex: 1 0 0;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/NodeModal.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,uCAAA;EACA,gBAAA;AAAJ;AAEI;EACI,gBAAA;EACA,UAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AAAR;AAGI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AADR;AASQ;EACI,cAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;AAPZ;AASY;EACI,cAAA;AAPhB;AAYI;EACI,aAAA;EACA,8BAAA;AAVR;AAaI;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;AAXR;AAaQ;EACI,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;AAXZ;AAaY;EACI,mBAAA;AAXhB;AAgBI;EACI,WAAA;AAdR","sourcesContent":["\n.node-modal {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #0000009c;\n    overflow-y: auto;\n\n    &__body {\n        background: #fff;\n        width: 80%;\n        min-height: 300px;\n        margin-top: 30px;\n        padding: 15px;\n        border-radius: 10px;\n        padding-top: 10px;\n        margin-bottom: 100px;\n    }\n\n    &__header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 15px;\n    }\n\n    &__title {\n\n    }\n\n    &__close {\n        i {\n            color: #a0a0a0;\n            cursor: pointer;\n            transition: 200ms;\n            font-size: 25px;\n\n            &:hover {\n                color: #ff4f4f;\n            }\n        }\n    }\n\n    &__content {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    &__menu {\n        display: flex;\n        flex-direction: column;\n        width: 150px;\n        background: #f6f6f6;\n        border-radius: 5px;\n        padding: 10px;\n        margin-right: 15px;\n\n        &__item {\n            background: #a5b0bd;\n            padding: 3px 8px;\n            margin: 3px;\n            cursor: pointer;\n            border-radius: 5px;\n            color: #fff;\n            font-size: 15px;\n\n            &.active {\n                background: #7aa4d0;\n            }\n        }\n    }\n\n    &__form {\n        flex: 1 0 0;\n    }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".workspace {\n  padding: 10px;\n  background: #3e684e;\n  color: #000;\n}\n.workspace__plato {\n  width: 0;\n  height: 0;\n  position: relative;\n}\n.workspace .kriti-preloader {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4588235294);\n  transition: 300ms;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 100001;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Workspace.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;EACA,WAAA;AAAJ;AAEI;EACI,QAAA;EACA,SAAA;EACA,kBAAA;AAAR;AAGI;EACI,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,6CAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;AADR","sourcesContent":["\n.workspace {\n    padding: 10px;\n    background: #3e684e;\n    color: #000;\n\n    &__plato {\n        width: 0;\n        height: 0;\n        position: relative;\n    }\n\n    .kriti-preloader {\n        position: fixed;\n        display: flex;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #ffffff75;\n        transition: 300ms;\n        justify-content: center;\n        align-items: center;\n        user-select: none;\n        z-index: 100001;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOztBQUVxQztBQUVyQyxpRUFBZTtFQUNYQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxVQUFVLEVBQUU7SUFDUkYsTUFBSyxFQUFMQSxxREFBTUE7RUFDVixDQUFDO0VBQ0RHLEtBQUssRUFBRTtJQUNIQyxJQUFJLEVBQUVDO0VBQ1YsQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDTkMsV0FBVyxXQUFBQSxZQUFBLEVBQUc7TUFDVixPQUFPO1FBQ0hDLElBQUksS0FBQUMsTUFBQSxDQUFLLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUNDLENBQUMsT0FBSTtRQUM5QkMsR0FBRyxLQUFBSCxNQUFBLENBQUssSUFBSSxDQUFDTCxJQUFJLENBQUNNLEtBQUssQ0FBQ0csQ0FBQztNQUM3QjtJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNTcUQ7QUFDdEQsaUVBQWU7RUFDWFosSUFBSSxFQUFFLFdBQVc7RUFDakJDLFVBQVUsRUFBRTtJQUNSWSxZQUFXLEVBQVhBLGlFQUFZQTtFQUNoQixDQUFDO0VBQ0RDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7RUFDMUJaLEtBQUssRUFBRTtJQUNIQyxJQUFJLEVBQUVDO0VBQ1YsQ0FBQztFQUNEVyxJQUFJLFdBQUFBLEtBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDSCxPQUFPO01BQ0hDLFNBQVMsRUFBRSxJQUFJO01BQ2ZDLGFBQWEsRUFBRSxPQUFPO01BQ3RCSCxJQUFJLEVBQUUsSUFBSTtNQUNWSSxPQUFPLEVBQUUsQ0FDTDtRQUNJbkIsSUFBSSxFQUFFLFdBQVc7UUFDakJvQixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCQyxLQUFLLEVBQUUsU0FBQUEsTUFBQSxFQUFNO1VBQ1RMLEtBQUksQ0FBQ00sT0FBTyxDQUFDO1FBQ2pCO01B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Ozs7Ozs7Ozs7Ozs7OztBQzFCdUQ7QUFDVjtBQUNMOztBQUV2RCxDQUFxRTs7QUFFa0M7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsOEVBQU0sYUFBYSxnRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm1EO0FBQ1Y7QUFDTDs7QUFFbkQsQ0FBaUU7O0FBRXNDO0FBQ3ZHLGlDQUFpQyxxSEFBZSxDQUFDLDBFQUFNLGFBQWEsNEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJvRDtBQUNWO0FBQ0w7O0FBRXBELENBQWtFOztBQUVxQztBQUN2RyxpQ0FBaUMscUhBQWUsQ0FBQywyRUFBTSxhQUFhLDZFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCZ007Ozs7Ozs7Ozs7Ozs7OztBQ0FLOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7OztBQ0FDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9mMDJmIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlP2UwZTQiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/YjlmMSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/N2Q4MiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlPzQ1NmMiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2M2ZjciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/NmZmMiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT8yZDlkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT80OWJiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MmYyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/NTE0OCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT8wMDMwIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2QwNWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzYwYWIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8xYzgzIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9mOTNkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlPzEwMWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/ZGVmOSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/ZjNjNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlPzA0NTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJub2RlXCIgIDpzdHlsZT1cIm1vZHVsZVN0eWxlXCI+XG4gICAgICAgIDxNb2R1bGUgdi1pZj1cIm5vZGUudHlwZSA9PT0gJ01vZHVsZSdcIiA6bm9kZT1cIm5vZGVcIiAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qXG7QotGD0YIg0LzRiyDQv9C+0LTQutC70Y7Rh9Cw0LXQvCDRgtC40L/RiyBQb2ludC3QvtCyINC4INGD0L/RgNCw0LLQu9GP0LXQvCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtdC8INC4INC+0LHRidC40Lwg0L/QvtCy0LXQtNC10L3QuNC10LxcbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vdHlwZXMvTW9kdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vZHVsZVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2R1bGVTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5ub2RlLnBvaW50Lnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy5ub2RlLnBvaW50Lnl9cHhgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmLmZvY3VzIHtcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1pZj1cIm5vZGVfbWVudVwiIGNsYXNzPVwibm9kZS1tb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQotGD0YIg0LfQsNCz0L7Qu9C+0LLQvtC6INC80L7QtNGD0LvRj1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19jbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXgtc3F1YXJlLWZpbGxcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBub2RlX21lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm9kZS1tb2RhbF9fbWVudV9faXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie2FjdGl2ZTppdGVtLm1ldGhvZCA9PT0gYWN0aXZlX21ldGhvZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldENvbnRlbnQoaXRlbS5tZXRob2QpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpdHRlciB2LWlmPVwiZGF0YSAhPT0gbnVsbFwiIDpzY2hlbWU9XCJkYXRhLnNjaGVtZVwiIHYtbW9kZWw9XCJkYXRhLnZhbHVlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKF8sIG5hbWUpIGluICRzbG90c1wiIHYtc2xvdDpbbmFtZV0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XCJuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRml0dGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxDb250cm9sUGFuZWwgOmJ1dHRvbnM9XCJidXR0b25zXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuL0R3YXJmL2Zvcm1zL0NvbnRyb2xQYW5lbFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTm9kZU1vZGFsXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBDb250cm9sUGFuZWxcbiAgICB9LFxuICAgIGVtaXRzOiBbJ2Nsb3NlJywgJ3VwZGF0ZSddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGVfbWVudTogbnVsbCxcbiAgICAgICAgICAgIGFjdGl2ZV9tZXRob2Q6ICdzdHlsZScsXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC40YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdiaSBiaS1jbG91ZC11cGxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgbm9kZShub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVfbWVudSA9IG51bGxcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnbWVudScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGU6J25vZGVfbWVudScsXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmFjdGl2ZV9tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQp9GC0LXQvdC40LUg0LjQtyDQvdC+0LTQsFxuICAgICAgICBnZXREYXRhKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzLnZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMudmFyaWFibGUgPSAnZGF0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Z2V0RGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLm5vZGUudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnRyYW5zZm9ybU1ldGhvZCgnZ2V0JywgcHJvcHMubWV0aG9kKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BzLnZhcmlhYmxlXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnRoZW4oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g0JfQsNC/0LjRgdGMINCyINC90L7QtFxuICAgICAgICBzZXREYXRhKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpzZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMubm9kZS51dWlkLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMudHJhbnNmb3JtTWV0aG9kKCdzZXQnLCB0aGlzLmFjdGl2ZV9tZXRob2QpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHRoaXMuZGF0YS52YWx1ZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UpIC8vINCf0L7RgdGL0LvQsNC10YLRgdGPINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdGF0LXQvNGLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb250ZW50KG1ldGhvZCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbWV0aG9kID0gbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5hY3RpdmVfbWV0aG9kLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9GA0LXQvtCx0YDQsNC30YPQtdGCIFwicHJlZml4LCBtZXRob2RcIiDQsiBcInByZWZpeE1ldGhvZFwiXG4gICAgICAgIHRyYW5zZm9ybU1ldGhvZChwcmVmaXgsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIG1ldGhvZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1ldGhvZC5zbGljZSgxKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICZfX2JvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG5cbiAgICB9XG5cbiAgICAmX19jbG9zZSB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjRmNGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICZfX21lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2E1YjBiZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzdhYTRkMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZFwiXG4gICAgIGNsYXNzPVwid29ya3NwYWNlXCJcbiAgICAgOnN0eWxlPVwiYHdpZHRoOiR7d29ya3NwYWNlX3dpZHRofXB4O2hlaWdodDoke3dvcmtzcGFjZV9oZWlnaHR9cHhgXCJcbiAgICAgQG1vdXNlZG93bi5jdHJsLnNlbGY9XCJtb3ZlUGxhdG9cIlxuICAgICBAbW91c2V1cC5zZWxmPVwiZHJvcFBsYXRvXCJcbiAgICAgQG1vdXNlbW92ZT1cIm1vdXNlbW92ZVwiXG4gICAgIEBkYmxjbGljay5zZWxmPVwiY29udGV4dE1lbnVcIlxuPlxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc3BhY2VfX3ByZWxvYWRlclwiPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIndvcmtzcGFjZV9fcGxhdG9cIiA6c3R5bGU9XCJgbWFyZ2luLWxlZnQ6JHsgcGxhdG9feCB9cHg7bWFyZ2luLXRvcDokeyBwbGF0b195IH1weGBcIj5cbiAgICAgICAgPE5vZGUgdi1mb3I9XCJub2RlIGluIG5vZGVzXCIgOm5vZGU9XCJub2RlXCJcbiAgICAgICAgICAgICA6cmVmPVwibm9kZS5pZFwiIDpjbGFzcz1cInsgZm9jdXM6bm9kZSA9PT0gYWN0aXZlX25vZGUgfVwiXG4gICAgICAgICAgICAgQG1vdXNlZG93bj1cIm5vZGVIb2xkKG5vZGUsICRldmVudClcIlxuICAgICAgICAgICAgIEBtb3VzZXVwPVwibm9kZURyb3BcIlxuICAgICAgICAgICAgIEBjbGljay5jdHJsPVwiY3JlYXRlTGluayhub2RlKVwiXG4gICAgICAgICAgICAgQGNvbnRleHRtZW51LnByZXZlbnQ9XCJub2RlTG9hZChub2RlKVwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPE5vZGVNb2RhbCA6bm9kZT1cIm5vZGVcIiBAY2xvc2U9XCJub2RlID0gbnVsbFwiIEB1cGRhdGU9XCJsb2FkTm9kZXNcIi8+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgTm9kZU1vZGFsIGZyb20gXCIuL05vZGVNb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJXb3Jrc3BhY2VcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5vZGUsIE5vZGVNb2RhbFxuICAgIH0sXG4gICAgcHJvcHM6IHtcblxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdvcmtzcGFjZV93aWR0aDogbnVsbCwgLy8g0KjQuNGA0LjQvdCwINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgICAgICB3b3Jrc3BhY2VfaGVpZ2h0OiBudWxsLCAvLyDQktGL0YHQvtGC0LAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgICAgIGhvbGRfeF9mYWN0b3I6IG51bGwsIC8vINCf0L7Qv9GA0LDQstC60LAg0L7QsdGK0LXQutGC0LAg0L/QviB4XG4gICAgICAgICAgICBob2xkX3lfZmFjdG9yOiBudWxsLCAvLyDQn9C+0L/RgNCw0LLQutCwINC+0LHRitC10LrRgtCwINC/0L4geVxuICAgICAgICAgICAgd29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZDogZmFsc2UsIC8vINCg0LDQt9C80LXRgCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuCDQvtC/0YDQtdC00LXQu9GR0L1cbiAgICAgICAgICAgIHBsYXRvX3g6IDAsIC8vINCh0LzQtdGJ0LXQvdC40LUg0LrQsNGA0YLRiyDQv9C+INC+0YHQuCDQpVxuICAgICAgICAgICAgcGxhdG9feTogMCwgLy8g0KHQvNC10YnQtdC90LjQtSDQutCw0YDRgtGLINC/0L4g0L7RgdC4IFlcbiAgICAgICAgICAgIG5vZGVzOiBudWxsLCAvLyDQl9Cw0LPRgNGD0LbQtdC90L3Ri9C1INC90L7QtNGLXG4gICAgICAgICAgICBub2RlOiBudWxsLCAvLyDQlNCw0L3QvdGL0LUg0L3QvtC00LBcbiAgICAgICAgICAgIGFjdGl2ZV9ub2RlOiBudWxsLCAvLyDQktGL0LTQtdC70LXQvdC90YvQuSDQvdC+0LRcbiAgICAgICAgICAgIGxhc3RfaG9sZF94OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFhcbiAgICAgICAgICAgIGxhc3RfaG9sZF95OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSgpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUpXG4gICAgICAgIHRoaXMubG9hZE5vZGVzKClcbiAgICB9LFxuICAgIGJlZm9yZVVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCe0L/RgNC10LTQtdC70LjRgtGMINGA0LDQt9C80LXRgCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICBkZWZpbmVXb3Jrc3BhY2VTaXplKCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy4kZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmtzcGFjZV93aWR0aCA9IHBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgICAgICB0aGlzLndvcmtzcGFjZV9oZWlnaHQgPSBwYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndvcmtzcGFjZV93aWR0aCAmJiB0aGlzLndvcmtzcGFjZV9oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQs9GA0YPQt9C40YLRjCDQvdC+0LTRi1xuICAgICAgICBsb2FkTm9kZXMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Ob2RlczpnZXROb2RlcycsXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzID0gcmVzcG9uc2Uubm9kZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIHNhbml0aXplTm9kZXMoKSB7XG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBfLmNsb25lRGVlcCh0aGlzLm5vZGVzKVxuICAgICAgICAgICAgbm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUuZm9jdXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbm9kZXNcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0L3QvtC00YtcbiAgICAgICAgc2F2ZU5vZGVzKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZXM6c2V0Tm9kZXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IHRoaXMuc2FuaXRpemVOb2RlcygpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub2RlcyBzYXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0LLQuNCz0LDRgtGMINC60LDRgNGC0YNcbiAgICAgICAgbW92ZVBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gdGhpcy5wbGF0b194XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLnBsYXRvX3lcbiAgICAgICAgICAgIHRoaXMuaG9sZF9wbGF0byA9IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGB0YLQsNCy0LjRgtGMINC60LDRgNGC0YNcbiAgICAgICAgZHJvcFBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3BsYXRvID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuc2F2ZU5vZGVzKCkgLy8g0KHQvtGF0YDQsNC90LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCk0LjQutGB0LjRgNC+0LLQsNGC0Ywg0LTQstC40LbQtdC90LjQtSDQvNGL0YjQuFxuICAgICAgICBtb3VzZW1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VfeCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICB0aGlzLm1vdXNlX3kgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9kZSgpIC8vINCU0LLQuNCz0LDRgtGMINC+0LHRitC10LrRgiDQtdGB0LvQuCDQvtC9INCw0LrRgtC40LLQtdC9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW92ZU5vZGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVfbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LrQsNGA0YLQsFxuICAgICAgICAgICAgaWYgKHRoaXMuaG9sZF9wbGF0bykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnBsYXRvX3ggKyB0aGlzLmJvZHlfeF9mYWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5wbGF0b195ICsgdGhpcy5ib2R5X3lfZmFjdG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5xdWFudGl6ZU9iamVjdHMoKVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRleHRNZW51KCl7fSxcblxuICAgICAgICAvLyDQl9Cw0YXQstCw0YIg0L3QvtC00LBcbiAgICAgICAgbm9kZUhvbGQobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZUhvbGRQb3NpdGlvbigpXG4gICAgICAgICAgICBub2RlLmZvY3VzID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gbm9kZS5wb2ludC54XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSBub2RlLnBvaW50LnlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNGE0LjQutGB0LjRgNC+0LLQsNGC0Ywg0L/QvtC30LjRhtC40Y4g0L3QvtC00LBcbiAgICAgICAgc2F2ZUhvbGRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3ggPSB0aGlzLm1vdXNlX3hcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3kgPSB0aGlzLm1vdXNlX3lcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40YLRjCDQvdC+0LRcbiAgICAgICAgbm9kZURyb3AoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5mb2N1cyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlID0gbnVsbFxuXG4gICAgICAgICAgICAvLyDQodC+0YXRgNCw0L3Rj9GC0Ywg0YLQvtC70YzQutC+INC10YHQu9C4INCx0YvQuyDRgdC00LLQuNC90YPRgiDQvtCx0YrQtdC60YJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RfaG9sZF94ICE9PSB0aGlzLm1vdXNlX3ggfHwgdGhpcy5sYXN0X2hvbGRfeSAhPT0gdGhpcy5tb3VzZV95KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlTm9kZXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQs9GA0YPQt9C40YLRjCDQtNCw0L3QvdGL0LUg0L3QvtC00LBcbiAgICAgICAgbm9kZUxvYWQobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlID0gbm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUxpbmsoKXt9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi53b3Jrc3BhY2Uge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzNlNjg0ZTtcbiAgICBjb2xvcjogIzAwMDtcblxuICAgICZfX3BsYXRvIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYm9hcmRcIj5cbiAgICAgICAgPFdvcmtzcGFjZSAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBXb3Jrc3BhY2UgZnJvbSBcIi4uL2ludGVyZmFjZS9Xb3Jrc3BhY2VcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkJvYXJkXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBXb3Jrc3BhY2VcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYm9hcmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibW9kdWxlXCIgOnN0eWxlPVwibW9kdWxlU3R5bGVcIj5cbiAgICAgICAg0JzQvtC00YPQu9GMXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTW9kdWxlXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2R1bGVTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuc3R5bGVcbiAgICAgICAgfVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubW9kdWxlIHtcblxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9kZS5mb2N1cyB7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxnQkFBQTtBQUFSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICAmLmZvY3VzIHtcXG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjExNzY0NzA1OSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubm9kZS1tb2RhbF9fYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuLm5vZGUtbW9kYWxfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19jbG9zZSBpIHtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19jbG9zZSBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0ZjRmO1xcbn1cXG4ubm9kZS1tb2RhbF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudV9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiAjYTViMGJkO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19tZW51X19pdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjN2FhNGQwO1xcbn1cXG4ubm9kZS1tb2RhbF9fZm9ybSB7XFxuICBmbGV4OiAxIDAgMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQVNRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQWjtBQVNZO0VBQ0ksY0FBQTtBQVBoQjtBQVlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBVlI7QUFhSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBWFI7QUFhUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFYWjtBQWFZO0VBQ0ksbUJBQUE7QUFYaEI7QUFnQkk7RUFDSSxXQUFBO0FBZFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9faGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuXFxuICAgIH1cXG5cXG4gICAgJl9fY2xvc2Uge1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjRmNGY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAmX19tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuXFxuICAgICAgICAmX19pdGVtIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTViMGJkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuXFxuICAgICAgICAgICAgJi5hY3RpdmUge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2FhNGQwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19mb3JtIHtcXG4gICAgICAgIGZsZXg6IDEgMCAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53b3Jrc3BhY2Uge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICMzZTY4NGU7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLndvcmtzcGFjZV9fcGxhdG8ge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi53b3Jrc3BhY2UgLmtyaXRpLXByZWxvYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1ODgyMzUyOTQpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAxMDAwMDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ud29ya3NwYWNlIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzNlNjg0ZTtcXG4gICAgY29sb3I6ICMwMDA7XFxuXFxuICAgICZfX3BsYXRvIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3NTtcXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvYXJkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6ICM4MGRiODA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YTU2NDUwMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I1OWJlODcmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE1NjQ1MDBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YTU2NDUwMCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZhNTY0NTAwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmE1NjQ1MDAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc2YTU2NDUwMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE1NjQ1MDBcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNmE1NjQ1MDAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMyNjE0YmRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YzI2MTRiZCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmMyNjE0YmRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YzI2MTRiZCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzZjMjYxNGJkJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMjYxNGJkXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzZjMjYxNGJkJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiNTliZTg3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I1OWJlODcmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjdiNTliZTg3XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnN2I1OWJlODcnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc3YjU5YmU4NycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjU5YmU4N1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc3YjU5YmU4NycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1YTAzM2JhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODVhMDMzYmEmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI4NWEwMzNiYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzg1YTAzM2JhJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnODVhMDMzYmEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NWEwMzNiYVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc4NWEwMzNiYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjdkOTQyYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyN2Q5NDJhJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjMyN2Q5NDJhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMzI3ZDk0MmEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCczMjdkOTQyYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjdkOTQyYVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCczMjdkOTQyYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiTW9kdWxlIiwibmFtZSIsImNvbXBvbmVudHMiLCJwcm9wcyIsIm5vZGUiLCJPYmplY3QiLCJjb21wdXRlZCIsIm1vZHVsZVN0eWxlIiwibGVmdCIsImNvbmNhdCIsInBvaW50IiwieCIsInRvcCIsInkiLCJDb250cm9sUGFuZWwiLCJlbWl0cyIsImRhdGEiLCJfdGhpcyIsIm5vZGVfbWVudSIsImFjdGl2ZV9tZXRob2QiLCJidXR0b25zIiwiaWNvbiIsImNsaWNrIiwic2V0RGF0YSIsIndhdGNoIiwiX3RoaXMyIiwiZ2V0RGF0YSIsIm1ldGhvZCIsInZhcmlhYmxlIiwidGhlbiIsIm1ldGhvZHMiLCJfdGhpczMiLCJLcml0aSIsImFwaSIsInVybCIsInV1aWQiLCJ0cmFuc2Zvcm1NZXRob2QiLCJyZXNwb25zZSIsIl90aGlzNCIsInZhbHVlcyIsIiRlbWl0IiwiZ2V0Q29udGVudCIsInByZWZpeCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJOb2RlIiwiTm9kZU1vZGFsIiwid29ya3NwYWNlX3dpZHRoIiwid29ya3NwYWNlX2hlaWdodCIsImhvbGRfeF9mYWN0b3IiLCJob2xkX3lfZmFjdG9yIiwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZCIsInBsYXRvX3giLCJwbGF0b195Iiwibm9kZXMiLCJhY3RpdmVfbm9kZSIsImxhc3RfaG9sZF94IiwibGFzdF9ob2xkX3kiLCJjcmVhdGVkIiwibW91bnRlZCIsImRlZmluZVdvcmtzcGFjZVNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZE5vZGVzIiwiYmVmb3JlVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCIkbmV4dFRpY2siLCJwYXJlbnRFbGVtZW50IiwiJGVsIiwicGFyZW50Tm9kZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic2FuaXRpemVOb2RlcyIsIl8iLCJjbG9uZURlZXAiLCJtYXAiLCJmb2N1cyIsInNhdmVOb2RlcyIsImNvbnNvbGUiLCJsb2ciLCJtb3ZlUGxhdG8iLCJtb3VzZV94IiwibW91c2VfeSIsImhvbGRfcGxhdG8iLCJkcm9wUGxhdG8iLCJtb3VzZW1vdmUiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlTm9kZSIsIiQiLCJjc3MiLCJtYXJnaW5MZWZ0IiwiYm9keV94X2ZhY3RvciIsIm1hcmdpblRvcCIsImJvZHlfeV9mYWN0b3IiLCJjb250ZXh0TWVudSIsIm5vZGVIb2xkIiwiYnV0dG9uIiwic2F2ZUhvbGRQb3NpdGlvbiIsIm5vZGVEcm9wIiwibm9kZUxvYWQiLCJjcmVhdGVMaW5rIiwiV29ya3NwYWNlIiwic3R5bGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZVN0eWxlIiwiJG9wdGlvbnMiLCIkcHJvcHMiLCJ0eXBlIiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9Nb2R1bGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiJGRhdGEiLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsIm9uQ2xpY2siLCJfY2FjaGUiLCIkZXZlbnQiLCJfY3R4IiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzciLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIml0ZW0iLCJfbm9ybWFsaXplQ2xhc3MiLCJhY3RpdmUiLCJ0aXRsZSIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2NvbXBvbmVudF9Gb3JtRml0dGVyIiwic2NoZW1lIiwiJHNsb3RzIiwiX3JlbmRlclNsb3QiLCJfaG9pc3RlZF8xMCIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfQ29udHJvbFBhbmVsIiwib25Nb3VzZWRvd24iLCJfd2l0aE1vZGlmaWVycyIsImFwcGx5IiwiYXJndW1lbnRzIiwib25Nb3VzZXVwIiwib25Nb3VzZW1vdmUiLCJvbkRibGNsaWNrIiwiX2NvbXBvbmVudF9Ob2RlIiwicmVmIiwiaWQiLCJvbkNvbnRleHRtZW51IiwiX2NvbXBvbmVudF9Ob2RlTW9kYWwiLCJvbkNsb3NlIiwib25VcGRhdGUiLCJfY29tcG9uZW50X1dvcmtzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=