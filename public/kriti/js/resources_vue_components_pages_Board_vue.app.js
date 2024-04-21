"use strict";
(self["webpackChunkkriti"] = self["webpackChunkkriti"] || []).push([["resources_vue_components_pages_Board_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContextMenu",
  emits: ['close', 'click_item'],
  props: {
    scheme_name: String,
    context: Object,
    context_type: String,
    mouse_x: Number,
    mouse_y: Number
  },
  data: function data() {
    return {
      items: [],
      x: 0,
      y: 0
    };
  },
  watch: {
    context: function context(_context) {
      if (_context) {
        this.getMenuItems();
        this.x = this.mouse_x;
        this.y = this.mouse_y;
      }
    }
  },
  computed: {
    moduleStyle: function moduleStyle() {
      return {
        left: "".concat(this.x, "px"),
        top: "".concat(this.y, "px")
      };
    }
  },
  methods: {
    close: function close() {
      this.items = [];
      this.$emit('close');
    },
    getMenuItems: function getMenuItems() {
      var _this = this;
      Kriti.api({
        url: 'kriti.api.Context:getContextItems',
        data: {
          scheme_name: this.scheme_name,
          type: this.context_type,
          uuid: this.context.uuid
        },
        then: function then(response) {
          _this.items = response.items;
        }
      });
    },
    clickItem: function clickItem(item) {
      this.$emit('click_item', item.code, _.cloneDeep(this.context));
      this.close();
    }
  }
});

/***/ }),

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
    node: Object,
    scheme_name: String
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
          scheme_name: this.scheme_name,
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
          scheme_name: this.scheme_name,
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
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenu */ "./resources/vue/components/interface/ContextMenu.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Workspace",
  components: {
    Node: _Node__WEBPACK_IMPORTED_MODULE_0__["default"],
    // Компонент реализующий ноду
    NodeModal: _NodeModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    // Компонент рабочее окно нода
    ContextMenu: _ContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {},
  data: function data() {
    return {
      active_scheme_name: 'calculator',
      // Имя активной темы
      scheme: {},
      // Активная схема
      context_menu_object: null,
      // Объект контекстного меню

      mouse_x: 0,
      mouse_y: 0,
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
      node: null,
      // Данные нода
      active_node: null,
      // Выделенный нод
      last_hold_x: 0,
      // Позиция нода перед перемещением по X
      last_hold_y: 0 // Позиция нода перед перемещением по Y
    };
  },
  computed: {
    nodes: function nodes() {
      var _this$scheme;
      // Ноды схемы
      return (_this$scheme = this.scheme) === null || _this$scheme === void 0 ? void 0 : _this$scheme.nodes;
    }
  },
  mounted: function mounted() {
    this.defineWorkspaceSize(); // Установить размеры окна
    window.addEventListener('resize', this.defineWorkspaceSize);
    this.getScheme();
  },
  beforeUnmount: function beforeUnmount() {
    // Перед размонтированием удалить слушатель размеров рабочей области
    window.removeEventListener('resize', this.defineWorkspaceSize);
  },
  methods: {
    // Определить размер рабочей области
    defineWorkspaceSize: function defineWorkspaceSize() {
      var _this = this;
      this.$nextTick(function () {
        var parentElement = _this.$el.parentNode;
        // Записываем эти данные в глобальные переменные Kriti
        Kriti.global.workspace_width = _this.workspace_width = parentElement.offsetWidth;
        Kriti.global.workspace_height = _this.workspace_height = parentElement.offsetHeight;
        if (_this.workspace_width && _this.workspace_height) {
          _this.workspace_size_is_defined = true;
        }
      });
    },
    // Загрузить схему
    getScheme: function getScheme() {
      var _this2 = this;
      Kriti.api({
        url: 'kriti.api.Scheme:getScheme',
        data: {
          'scheme_code': this.active_scheme_name
        },
        then: function then(response) {
          _this2.scheme = response.scheme;
        }
      });
    },
    // Очистить ноды от лишних данных
    sanitizeNodes: function sanitizeNodes() {
      var nodes = _.cloneDeep(this.scheme.nodes);
      nodes.map(function (node) {
        delete node["static"];
      });
      return nodes;
    },
    // Сохранить ноды
    saveScheme: function saveScheme() {
      Kriti.api({
        url: 'kriti.api.Scheme:setScheme',
        data: {
          scheme_name: this.active_scheme_name,
          scheme_data: {
            name: this.scheme.name,
            nodes: this.sanitizeNodes()
          }
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
      this.saveScheme(); // Сохранить состояние
    },
    // Фиксировать движение мыши
    mousemove: function mousemove(event) {
      this.mouse_x = event.pageX;
      this.mouse_y = event.pageY;
      this.moveNode(); // Двигать объект если он активен
    },
    // Перемещение нода
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
    // Захват нода
    nodeHold: function nodeHold(node, event) {
      if (event.button !== 0) {
        return;
      }
      this.saveHoldPosition();
      node["static"].focus = true;
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
        node["static"].focus = false;
      });
      this.active_node = null;

      // Сохранять только если был сдвинут объект
      if (this.last_hold_x !== this.mouse_x || this.last_hold_y !== this.mouse_y) {
        this.saveScheme();
      }
    },
    // Открыть меню рабочей области
    workspaceContextMenu: function workspaceContextMenu() {
      console.log('Контекстное меню рабочей области');
    },
    // Открыть контекстное меню
    openContextMenu: function openContextMenu(node) {
      this.context_menu_object = node;
    },
    // Закрыть контекстное меню
    closeContextMenu: function closeContextMenu() {
      this.context_menu_object = null;
    },
    // Открыть контекстное меню нода
    clickContextMenuItem: function clickContextMenuItem(code, context) {
      var _this3 = this;
      if (code === 'openNodeSettings') {
        this.node = context;
      }
      if (code === 'cloneModule') {
        this.createUUID(function (uuid) {
          context.uuid = uuid;
          context.point.x += 100;
          context.point.y += 100;
          _this3.scheme.nodes.push(context);
        });
      }
    },
    // Запросить генерацию uuid
    createUUID: function createUUID(fn) {
      Kriti.api({
        url: 'kriti.api.Node:createUUID',
        then: function then(response) {
          fn(response.uuid);
        }
      });
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
    module: function module() {
      return this.node["static"].style.module;
    },
    module_title: function module_title() {
      return this.node["static"].style.module_title;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=template&id=df0242c0":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=template&id=df0242c0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "kriti-context__items"
};
var _hoisted_2 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_click_outside_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("click-outside-element");
  return $data.items.length ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "kriti-context",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.moduleStyle)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "kriti-context__item",
      onClick: function onClick($event) {
        return $options.clickItem(item);
      }
    }, [item.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(item.icon)
    }, null, 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_2);
  }), 256 /* UNKEYED_FRAGMENT */))])], 4 /* STYLE */)), [[_directive_click_outside_element, $options.close]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

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
  var _component_ContextMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ContextMenu");
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
      return $options.workspaceContextMenu && $options.workspaceContextMenu.apply($options, arguments);
    }, ["self"]))
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "workspace__plato",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("margin-left:".concat($data.plato_x, "px;margin-top:").concat($data.plato_y, "px"))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.nodes, function (node) {
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
        return $options.openContextMenu(node);
      }, ["prevent"])
    }, null, 8 /* PROPS */, ["node", "class", "onMousedown", "onMouseup", "onClick", "onContextmenu"]);
  }), 256 /* UNKEYED_FRAGMENT */))], 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NodeModal, {
    scheme_name: $data.active_scheme_name,
    node: $data.node,
    onClose: _cache[0] || (_cache[0] = function ($event) {
      return $data.node = null;
    }),
    onUpdate: $options.getScheme
  }, null, 8 /* PROPS */, ["scheme_name", "node", "onUpdate"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ContextMenu, {
    context: $data.context_menu_object,
    context_type: "node",
    scheme_name: $data.active_scheme_name,
    mouse_x: $data.mouse_x,
    mouse_y: $data.mouse_y,
    onClose: $options.closeContextMenu,
    onClick_item: $options.clickContextMenuItem
  }, null, 8 /* PROPS */, ["context", "scheme_name", "mouse_x", "mouse_y", "onClose", "onClick_item"])], 36 /* STYLE, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.module)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "module__title",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.module_title)
  }, " Модуль ", 4 /* STYLE */)], 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".kriti-context {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.1607843137);\n  padding: 18px 16px;\n  border-radius: 4px;\n}\n.kriti-context__item {\n  background: #d2ffc8;\n  color: #26551b;\n  border-radius: 4px;\n  margin: 5px 5px;\n  padding: 10px 21px;\n  cursor: pointer;\n  transition: 200ms;\n}\n.kriti-context__item i {\n  margin-right: 10px;\n}\n.kriti-context__item:hover {\n  background: #90ce82;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/ContextMenu.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,6CAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;AAII;EACI,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;AAFR;AAGQ;EACI,kBAAA;AADZ;AAGQ;EACI,mBAAA;AADZ","sourcesContent":["\n.kriti-context {\n    position: absolute;\n    background: #ffffff29;\n    padding: 18px 16px;\n    border-radius: 4px;\n    &__items {\n\n    }\n    &__item {\n        background: #d2ffc8;\n        color: #26551b;\n        border-radius: 4px;\n        margin: 5px 5px;\n        padding: 10px 21px;\n        cursor: pointer;\n        transition: 200ms;\n        i {\n            margin-right: 10px;\n        }\n        &:hover {\n            background: #90ce82;\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".node {\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: absolute;\n}\n.node.focus {\n  cursor: grabbing;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Node.vue"],"names":[],"mappings":"AACA;EACI,qBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,kBAAA;AAAJ;AACI;EACI,gBAAA;AACR","sourcesContent":["\n.node {\n    display: inline-block;\n    user-select: none;\n    position: absolute;\n    &.focus {\n        cursor: grabbing;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_style_index_0_id_df0242c0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_style_index_0_id_df0242c0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_style_index_0_id_df0242c0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/vue/components/interface/ContextMenu.vue":
/*!************************************************************!*\
  !*** ./resources/vue/components/interface/ContextMenu.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_df0242c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=template&id=df0242c0 */ "./resources/vue/components/interface/ContextMenu.vue?vue&type=template&id=df0242c0");
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=script&lang=js */ "./resources/vue/components/interface/ContextMenu.vue?vue&type=script&lang=js");
/* harmony import */ var _ContextMenu_vue_vue_type_style_index_0_id_df0242c0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss */ "./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ContextMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ContextMenu_vue_vue_type_template_id_df0242c0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/interface/ContextMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Module_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Module_vue_vue_type_template_id_327d942a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/types/Module.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/interface/ContextMenu.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/vue/components/interface/ContextMenu.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContextMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/vue/components/interface/ContextMenu.vue?vue&type=template&id=df0242c0":
/*!******************************************************************************************!*\
  !*** ./resources/vue/components/interface/ContextMenu.vue?vue&type=template&id=df0242c0 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_template_id_df0242c0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_template_id_df0242c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContextMenu.vue?vue&type=template&id=df0242c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=template&id=df0242c0");


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

/***/ "./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContextMenu_vue_vue_type_style_index_0_id_df0242c0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ContextMenu.vue?vue&type=style&index=0&id=df0242c0&lang=scss");


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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLGlFQUFlO0VBQ1hBLElBQUksRUFBRSxhQUFhO0VBQ25CQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0VBQzlCQyxLQUFLLEVBQUU7SUFDSEMsV0FBVyxFQUFFQyxNQUFNO0lBQ25CQyxPQUFPLEVBQUVDLE1BQU07SUFDZkMsWUFBWSxFQUFFSCxNQUFNO0lBQ3BCSSxPQUFPLEVBQUVDLE1BQU07SUFDZkMsT0FBTyxFQUFFRDtFQUNiLENBQUM7RUFDREUsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLEtBQUssRUFBRSxFQUFFO01BQ1RDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNQO0VBQ0osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSFYsT0FBTyxXQUFBQSxRQUFDQSxRQUFPLEVBQUU7TUFDYixJQUFJQSxRQUFPLEVBQUU7UUFDVCxJQUFJLENBQUNXLFlBQVksQ0FBQztRQUNsQixJQUFJLENBQUNILENBQUEsR0FBSSxJQUFJLENBQUNMLE9BQU07UUFDcEIsSUFBSSxDQUFDTSxDQUFBLEdBQUksSUFBSSxDQUFDSixPQUFNO01BQ3hCO0lBQ0o7RUFDSixDQUFDO0VBQ0RPLFFBQVEsRUFBRTtJQUNOQyxXQUFXLFdBQUFBLFlBQUEsRUFBRztNQUNWLE9BQU87UUFDSEMsSUFBSSxLQUFBQyxNQUFBLENBQUssSUFBSSxDQUFDUCxDQUFDLE9BQUk7UUFDbkJRLEdBQUcsS0FBQUQsTUFBQSxDQUFLLElBQUksQ0FBQ04sQ0FBQztNQUNsQjtJQUNKO0VBQ0osQ0FBQztFQUNEUSxPQUFPLEVBQUU7SUFDTEMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7TUFDSixJQUFJLENBQUNYLEtBQUksR0FBSSxFQUFDO01BQ2QsSUFBSSxDQUFDWSxLQUFLLENBQUMsT0FBTztJQUN0QixDQUFD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QUFFc0M7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsMEVBQU0sYUFBYSw0RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCb0Q7QUFDVjtBQUNMOztBQUVwRCxDQUF1RztBQUN2RyxpQ0FBaUMscUhBQWUsQ0FBQywyRUFBTSxhQUFhLDZFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3hCdU07Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7Ozs7Ozs7Ozs7Ozs7QUNBSzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7QUNBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/ZDAxYSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/ZjAyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT9lMGU0Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2I5ZjEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzdkODIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbnRleHRNZW51LnZ1ZT82ZGQ4Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9jNmY3Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlPzZmZjIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/MmQ5ZCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/NDliYiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlPzU1ZTUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlPzUxNDgiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/MDAzMCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9kMDVhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT82MGFiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MWM4MyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlP2I2ZjciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2Y5M2QiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/MTAxYSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9kZWY5Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT9mM2M3Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MDQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwiaXRlbXMubGVuZ3RoXCIgY2xhc3M9XCJrcml0aS1jb250ZXh0XCIgOnN0eWxlPVwibW9kdWxlU3R5bGVcIiB2LWNsaWNrLW91dHNpZGUtZWxlbWVudD1cImNsb3NlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcml0aS1jb250ZXh0X19pdGVtc1wiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiBjbGFzcz1cImtyaXRpLWNvbnRleHRfX2l0ZW1cIiBAY2xpY2s9XCJjbGlja0l0ZW0oaXRlbSlcIj5cbiAgICAgICAgICAgICAgICA8aSB2LWlmPVwiaXRlbS5pY29uXCIgOmNsYXNzPVwiaXRlbS5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW0udGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkNvbnRleHRNZW51XCIsXG4gICAgZW1pdHM6IFsnY2xvc2UnLCAnY2xpY2tfaXRlbSddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNjaGVtZV9uYW1lOiBTdHJpbmcsXG4gICAgICAgIGNvbnRleHQ6IE9iamVjdCxcbiAgICAgICAgY29udGV4dF90eXBlOiBTdHJpbmcsXG4gICAgICAgIG1vdXNlX3g6IE51bWJlcixcbiAgICAgICAgbW91c2VfeTogTnVtYmVyLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGNvbnRleHQoY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lbnVJdGVtcygpXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tb3VzZV94XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5tb3VzZV95XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1vZHVsZVN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHt0aGlzLnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICB9LFxuICAgICAgICBnZXRNZW51SXRlbXMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Db250ZXh0OmdldENvbnRleHRJdGVtcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWVfbmFtZTogdGhpcy5zY2hlbWVfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5jb250ZXh0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMuY29udGV4dC51dWlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZS5pdGVtc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrSXRlbShpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGlja19pdGVtJywgaXRlbS5jb2RlLCBfLmNsb25lRGVlcCh0aGlzLmNvbnRleHQpKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ua3JpdGktY29udGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYyOTtcbiAgICBwYWRkaW5nOiAxOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICZfX2l0ZW1zIHtcblxuICAgIH1cbiAgICAmX19pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2QyZmZjODtcbiAgICAgICAgY29sb3I6ICMyNjU1MWI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luOiA1cHggNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIxcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzkwY2U4MjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibm9kZVwiICA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiPlxuICAgICAgICA8TW9kdWxlIHYtaWY9XCJub2RlLnR5cGUgPT09ICdNb2R1bGUnXCIgOm5vZGU9XCJub2RlXCIgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKlxu0KLRg9GCINC80Ysg0L/QvtC00LrQu9GO0YfQsNC10Lwg0YLQuNC/0YsgUG9pbnQt0L7QsiDQuCDRg9C/0YDQsNCy0LvRj9C10Lwg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LXQvCDQuCDQvtCx0YnQuNC8INC/0L7QstC10LTQtdC90LjQtdC8XG4gKi9cbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uL3R5cGVzL01vZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2R1bGVcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubm9kZS5wb2ludC54fXB4YCxcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMubm9kZS5wb2ludC55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICYuZm9jdXMge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwibm9kZV9tZW51XCIgY2xhc3M9XCJub2RlLW1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCi0YPRgiDQt9Cw0LPQvtC70L7QstC+0Log0LzQvtC00YPQu9GPXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2Nsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmkteC1zcXVhcmUtZmlsbFwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIG5vZGVfbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51X19pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7YWN0aXZlOml0ZW0ubWV0aG9kID09PSBhY3RpdmVfbWV0aG9kfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0Q29udGVudChpdGVtLm1ldGhvZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRml0dGVyIHYtaWY9XCJkYXRhICE9PSBudWxsXCIgOnNjaGVtZT1cImRhdGEuc2NoZW1lXCIgdi1tb2RlbD1cImRhdGEudmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoXywgbmFtZSkgaW4gJHNsb3RzXCIgdi1zbG90OltuYW1lXT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cIm5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaXR0ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xQYW5lbCA6YnV0dG9ucz1cImJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4vRHdhcmYvZm9ybXMvQ29udHJvbFBhbmVsXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlTW9kYWxcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIENvbnRyb2xQYW5lbFxuICAgIH0sXG4gICAgZW1pdHM6IFsnY2xvc2UnLCAndXBkYXRlJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0LFxuICAgICAgICBzY2hlbWVfbmFtZTogU3RyaW5nXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZV9tZW51OiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlX21ldGhvZDogJ3N0eWxlJyxcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn0KHQvtGF0YDQsNC90LjRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2JpIGJpLWNsb3VkLXVwbG9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBub2RlKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZV9tZW51ID0gbnVsbFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdtZW51JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZTonbm9kZV9tZW51JyxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuYWN0aXZlX21ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCn0YLQtdC90LjQtSDQuNC3INC90L7QtNCwXG4gICAgICAgIGdldERhdGEocHJvcHMpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMudmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy52YXJpYWJsZSA9ICdkYXRhJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpnZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZV9uYW1lOiB0aGlzLnNjaGVtZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLm5vZGUudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnRyYW5zZm9ybU1ldGhvZCgnZ2V0JywgcHJvcHMubWV0aG9kKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BzLnZhcmlhYmxlXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnRoZW4oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g0JfQsNC/0LjRgdGMINCyINC90L7QtFxuICAgICAgICBzZXREYXRhKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpzZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZV9uYW1lOiB0aGlzLnNjaGVtZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLm5vZGUudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnRyYW5zZm9ybU1ldGhvZCgnc2V0JywgdGhpcy5hY3RpdmVfbWV0aG9kKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB0aGlzLmRhdGEudmFsdWVzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHJlc3BvbnNlKSAvLyDQn9C+0YHRi9C70LDQtdGC0YHRjyDQtNC70Y8g0L7QsdC90L7QstC70LXQvdC40Y8g0YHRhdC10LzRi1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Q29udGVudChtZXRob2QpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX21ldGhvZCA9IG1ldGhvZFxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuYWN0aXZlX21ldGhvZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J/RgNC10L7QsdGA0LDQt9GD0LXRgiBcInByZWZpeCwgbWV0aG9kXCIg0LIgXCJwcmVmaXhNZXRob2RcIlxuICAgICAgICB0cmFuc2Zvcm1NZXRob2QocHJlZml4LCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyBtZXRob2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtZXRob2Quc2xpY2UoMSlcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2RlLW1vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDljO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB9XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuXG4gICAgfVxuXG4gICAgJl9fY2xvc2Uge1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYTBhMGEwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0ZjRmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX19tZW51IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNWIwYmQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3YWE0ZDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgZmxleDogMSAwIDA7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgdi1pZj1cIndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWRcIlxuICAgICBjbGFzcz1cIndvcmtzcGFjZVwiXG4gICAgIDpzdHlsZT1cImB3aWR0aDoke3dvcmtzcGFjZV93aWR0aH1weDtoZWlnaHQ6JHt3b3Jrc3BhY2VfaGVpZ2h0fXB4YFwiXG4gICAgIEBtb3VzZWRvd24uY3RybC5zZWxmPVwibW92ZVBsYXRvXCJcbiAgICAgQG1vdXNldXAuc2VsZj1cImRyb3BQbGF0b1wiXG4gICAgIEBtb3VzZW1vdmU9XCJtb3VzZW1vdmVcIlxuICAgICBAZGJsY2xpY2suc2VsZj1cIndvcmtzcGFjZUNvbnRleHRNZW51XCJcbj5cbiAgICA8ZGl2IGNsYXNzPVwid29ya3NwYWNlX19wcmVsb2FkZXJcIj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc3BhY2VfX3BsYXRvXCIgOnN0eWxlPVwiYG1hcmdpbi1sZWZ0OiR7IHBsYXRvX3ggfXB4O21hcmdpbi10b3A6JHsgcGxhdG9feSB9cHhgXCI+XG4gICAgICAgIDxOb2RlIHYtZm9yPVwibm9kZSBpbiBub2Rlc1wiIDpub2RlPVwibm9kZVwiXG4gICAgICAgICAgICAgOnJlZj1cIm5vZGUuaWRcIiA6Y2xhc3M9XCJ7IGZvY3VzOm5vZGUgPT09IGFjdGl2ZV9ub2RlIH1cIlxuICAgICAgICAgICAgIEBtb3VzZWRvd249XCJub2RlSG9sZChub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICBAbW91c2V1cD1cIm5vZGVEcm9wXCJcbiAgICAgICAgICAgICBAY2xpY2suY3RybD1cImNyZWF0ZUxpbmsobm9kZSlcIlxuICAgICAgICAgICAgIEBjb250ZXh0bWVudS5wcmV2ZW50PVwib3BlbkNvbnRleHRNZW51KG5vZGUpXCJcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8Tm9kZU1vZGFsIDpzY2hlbWVfbmFtZT1cImFjdGl2ZV9zY2hlbWVfbmFtZVwiIDpub2RlPVwibm9kZVwiIEBjbG9zZT1cIm5vZGUgPSBudWxsXCIgQHVwZGF0ZT1cImdldFNjaGVtZVwiLz5cbiAgICA8Q29udGV4dE1lbnVcbiAgICAgICAgOmNvbnRleHQ9XCJjb250ZXh0X21lbnVfb2JqZWN0XCJcbiAgICAgICAgY29udGV4dF90eXBlPVwibm9kZVwiXG4gICAgICAgIDpzY2hlbWVfbmFtZT1cImFjdGl2ZV9zY2hlbWVfbmFtZVwiXG4gICAgICAgIDptb3VzZV94PVwibW91c2VfeFwiXG4gICAgICAgIDptb3VzZV95PVwibW91c2VfeVwiXG4gICAgICAgIEBjbG9zZT1cImNsb3NlQ29udGV4dE1lbnVcIlxuICAgICAgICBAY2xpY2tfaXRlbT1cImNsaWNrQ29udGV4dE1lbnVJdGVtXCJcbiAgICAvPlxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgTm9kZU1vZGFsIGZyb20gXCIuL05vZGVNb2RhbFwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIldvcmtzcGFjZVwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTm9kZSwgLy8g0JrQvtC80L/QvtC90LXQvdGCINGA0LXQsNC70LjQt9GD0Y7RidC40Lkg0L3QvtC00YNcbiAgICAgICAgTm9kZU1vZGFsLCAvLyDQmtC+0LzQv9C+0L3QtdC90YIg0YDQsNCx0L7Rh9C10LUg0L7QutC90L4g0L3QvtC00LBcbiAgICAgICAgQ29udGV4dE1lbnVcbiAgICB9LFxuICAgIHByb3BzOiB7XG5cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmVfc2NoZW1lX25hbWU6ICdjYWxjdWxhdG9yJywgLy8g0JjQvNGPINCw0LrRgtC40LLQvdC+0Lkg0YLQtdC80YtcbiAgICAgICAgICAgIHNjaGVtZToge30sIC8vINCQ0LrRgtC40LLQvdCw0Y8g0YHRhdC10LzQsFxuICAgICAgICAgICAgY29udGV4dF9tZW51X29iamVjdDogbnVsbCwgLy8g0J7QsdGK0LXQutGCINC60L7QvdGC0LXQutGB0YLQvdC+0LPQviDQvNC10L3RjlxuXG4gICAgICAgICAgICBtb3VzZV94OiAwLFxuICAgICAgICAgICAgbW91c2VfeTogMCxcbiAgICAgICAgICAgIHdvcmtzcGFjZV93aWR0aDogbnVsbCwgLy8g0KjQuNGA0LjQvdCwINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgICAgICB3b3Jrc3BhY2VfaGVpZ2h0OiBudWxsLCAvLyDQktGL0YHQvtGC0LAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgICAgIGhvbGRfeF9mYWN0b3I6IG51bGwsIC8vINCf0L7Qv9GA0LDQstC60LAg0L7QsdGK0LXQutGC0LAg0L/QviB4XG4gICAgICAgICAgICBob2xkX3lfZmFjdG9yOiBudWxsLCAvLyDQn9C+0L/RgNCw0LLQutCwINC+0LHRitC10LrRgtCwINC/0L4geVxuICAgICAgICAgICAgd29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZDogZmFsc2UsIC8vINCg0LDQt9C80LXRgCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuCDQvtC/0YDQtdC00LXQu9GR0L1cbiAgICAgICAgICAgIHBsYXRvX3g6IDAsIC8vINCh0LzQtdGJ0LXQvdC40LUg0LrQsNGA0YLRiyDQv9C+INC+0YHQuCDQpVxuICAgICAgICAgICAgcGxhdG9feTogMCwgLy8g0KHQvNC10YnQtdC90LjQtSDQutCw0YDRgtGLINC/0L4g0L7RgdC4IFlcbiAgICAgICAgICAgIG5vZGU6IG51bGwsIC8vINCU0LDQvdC90YvQtSDQvdC+0LTQsFxuICAgICAgICAgICAgYWN0aXZlX25vZGU6IG51bGwsIC8vINCS0YvQtNC10LvQtdC90L3Ri9C5INC90L7QtFxuICAgICAgICAgICAgbGFzdF9ob2xkX3g6IDAsIC8vINCf0L7Qt9C40YbQuNGPINC90L7QtNCwINC/0LXRgNC10LQg0L/QtdGA0LXQvNC10YnQtdC90LjQtdC8INC/0L4gWFxuICAgICAgICAgICAgbGFzdF9ob2xkX3k6IDAsIC8vINCf0L7Qt9C40YbQuNGPINC90L7QtNCwINC/0LXRgNC10LQg0L/QtdGA0LXQvNC10YnQtdC90LjQtdC8INC/0L4gWVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBub2RlcygpIHsgLy8g0J3QvtC00Ysg0YHRhdC10LzRi1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lPy5ub2Rlc1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUoKSAvLyDQo9GB0YLQsNC90L7QstC40YLRjCDRgNCw0LfQvNC10YDRiyDQvtC60L3QsFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kZWZpbmVXb3Jrc3BhY2VTaXplKVxuICAgICAgICB0aGlzLmdldFNjaGVtZSgpXG4gICAgfSxcbiAgICBiZWZvcmVVbm1vdW50KCkgeyAvLyDQn9C10YDQtdC0INGA0LDQt9C80L7QvdGC0LjRgNC+0LLQsNC90LjQtdC8INGD0LTQsNC70LjRgtGMINGB0LvRg9GI0LDRgtC10LvRjCDRgNCw0LfQvNC10YDQvtCyINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCe0L/RgNC10LTQtdC70LjRgtGMINGA0LDQt9C80LXRgCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICBkZWZpbmVXb3Jrc3BhY2VTaXplKCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy4kZWwucGFyZW50Tm9kZVxuICAgICAgICAgICAgICAgIC8vINCX0LDQv9C40YHRi9Cy0LDQtdC8INGN0YLQuCDQtNCw0L3QvdGL0LUg0LIg0LPQu9C+0LHQsNC70YzQvdGL0LUg0L/QtdGA0LXQvNC10L3QvdGL0LUgS3JpdGlcbiAgICAgICAgICAgICAgICBLcml0aS5nbG9iYWwud29ya3NwYWNlX3dpZHRoID0gdGhpcy53b3Jrc3BhY2Vfd2lkdGggPSBwYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgICAgICAgICAgS3JpdGkuZ2xvYmFsLndvcmtzcGFjZV9oZWlnaHQgPSB0aGlzLndvcmtzcGFjZV9oZWlnaHQgPSBwYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndvcmtzcGFjZV93aWR0aCAmJiB0aGlzLndvcmtzcGFjZV9oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQs9GA0YPQt9C40YLRjCDRgdGF0LXQvNGDXG4gICAgICAgIGdldFNjaGVtZSgpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLlNjaGVtZTpnZXRTY2hlbWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3NjaGVtZV9jb2RlJzogdGhpcy5hY3RpdmVfc2NoZW1lX25hbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlbWUgPSByZXNwb25zZS5zY2hlbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YfQuNGB0YLQuNGC0Ywg0L3QvtC00Ysg0L7RgiDQu9C40YjQvdC40YUg0LTQsNC90L3Ri9GFXG4gICAgICAgIHNhbml0aXplTm9kZXMoKSB7XG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBfLmNsb25lRGVlcCh0aGlzLnNjaGVtZS5ub2RlcylcbiAgICAgICAgICAgIG5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlLnN0YXRpY1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBub2Rlc1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDQvdC+0LTRi1xuICAgICAgICBzYXZlU2NoZW1lKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuU2NoZW1lOnNldFNjaGVtZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWVfbmFtZTogdGhpcy5hY3RpdmVfc2NoZW1lX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNjaGVtZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM6IHRoaXMuc2FuaXRpemVOb2RlcygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vZGVzIHNhdmUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JTQstC40LPQsNGC0Ywg0LrQsNGA0YLRg1xuICAgICAgICBtb3ZlUGxhdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRfeF9mYWN0b3IgPSB0aGlzLm1vdXNlX3ggLSB0aGlzLnBsYXRvX3hcbiAgICAgICAgICAgIHRoaXMuaG9sZF95X2ZhY3RvciA9IHRoaXMubW91c2VfeSAtIHRoaXMucGxhdG9feVxuICAgICAgICAgICAgdGhpcy5ob2xkX3BsYXRvID0gdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YHRgtCw0LLQuNGC0Ywg0LrQsNGA0YLRg1xuICAgICAgICBkcm9wUGxhdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRfcGxhdG8gPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5zYXZlU2NoZW1lKCkgLy8g0KHQvtGF0YDQsNC90LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCk0LjQutGB0LjRgNC+0LLQsNGC0Ywg0LTQstC40LbQtdC90LjQtSDQvNGL0YjQuFxuICAgICAgICBtb3VzZW1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VfeCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICB0aGlzLm1vdXNlX3kgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9kZSgpIC8vINCU0LLQuNCz0LDRgtGMINC+0LHRitC10LrRgiDQtdGB0LvQuCDQvtC9INCw0LrRgtC40LLQtdC9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J/QtdGA0LXQvNC10YnQtdC90LjQtSDQvdC+0LTQsFxuICAgICAgICBtb3ZlTm9kZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZV9ub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZS5wb2ludC54ID0gdGhpcy5tb3VzZV94IC0gdGhpcy5ob2xkX3hfZmFjdG9yXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZS5wb2ludC55ID0gdGhpcy5tb3VzZV95IC0gdGhpcy5ob2xkX3lfZmFjdG9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC00LLQuNCz0LDQtdGC0YHRjyDQutCw0YDRgtCwXG4gICAgICAgICAgICBpZiAodGhpcy5ob2xkX3BsYXRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0b194ID0gdGhpcy5tb3VzZV94IC0gdGhpcy5ob2xkX3hfZmFjdG9yXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF0b195ID0gdGhpcy5tb3VzZV95IC0gdGhpcy5ob2xkX3lfZmFjdG9yXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucGxhdG9feCArIHRoaXMuYm9keV94X2ZhY3RvcixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnBsYXRvX3kgKyB0aGlzLmJvZHlfeV9mYWN0b3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGlzLnF1YW50aXplT2JqZWN0cygpXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNGF0LLQsNGCINC90L7QtNCwXG4gICAgICAgIG5vZGVIb2xkKG5vZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNhdmVIb2xkUG9zaXRpb24oKVxuICAgICAgICAgICAgbm9kZS5zdGF0aWMuZm9jdXMgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhvbGRfeF9mYWN0b3IgPSB0aGlzLm1vdXNlX3ggLSBub2RlLnBvaW50LnhcbiAgICAgICAgICAgIHRoaXMuaG9sZF95X2ZhY3RvciA9IHRoaXMubW91c2VfeSAtIG5vZGUucG9pbnQueVxuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZSA9IG5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0YTQuNC60YHQuNGA0L7QstCw0YLRjCDQv9C+0LfQuNGG0LjRjiDQvdC+0LTQsFxuICAgICAgICBzYXZlSG9sZFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0X2hvbGRfeCA9IHRoaXMubW91c2VfeFxuICAgICAgICAgICAgdGhpcy5sYXN0X2hvbGRfeSA9IHRoaXMubW91c2VfeVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjRgtGMINC90L7QtFxuICAgICAgICBub2RlRHJvcCgpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ub2Rlcy5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0YXRpYy5mb2N1cyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlID0gbnVsbFxuXG4gICAgICAgICAgICAvLyDQodC+0YXRgNCw0L3Rj9GC0Ywg0YLQvtC70YzQutC+INC10YHQu9C4INCx0YvQuyDRgdC00LLQuNC90YPRgiDQvtCx0YrQtdC60YJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RfaG9sZF94ICE9PSB0aGlzLm1vdXNlX3ggfHwgdGhpcy5sYXN0X2hvbGRfeSAhPT0gdGhpcy5tb3VzZV95KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU2NoZW1lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQvNC10L3RjiDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICB3b3Jrc3BhY2VDb250ZXh0TWVudSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQmtC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4JylcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQutC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgICAgIG9wZW5Db250ZXh0TWVudShub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfbWVudV9vYmplY3QgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNC60YDRi9GC0Ywg0LrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjlxuICAgICAgICBjbG9zZUNvbnRleHRNZW51KClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0X21lbnVfb2JqZWN0ID0gbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YLQutGA0YvRgtGMINC60L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y4g0L3QvtC00LBcbiAgICAgICAgY2xpY2tDb250ZXh0TWVudUl0ZW0oY29kZSwgY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvZGUgPT09ICdvcGVuTm9kZVNldHRpbmdzJykge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZSA9IGNvbnRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlID09PSAnY2xvbmVNb2R1bGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVVVUlEKCh1dWlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQudXVpZCA9IHV1aWRcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wb2ludC54ICs9IDEwMFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnBvaW50LnkgKz0gMTAwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1lLm5vZGVzLnB1c2goY29udGV4dClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQv9GA0L7RgdC40YLRjCDQs9C10L3QtdGA0LDRhtC40Y4gdXVpZFxuICAgICAgICBjcmVhdGVVVUlEKGZuKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Ob2RlOmNyZWF0ZVVVSUQnLFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm4ocmVzcG9uc2UudXVpZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUxpbmsoKXt9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi53b3Jrc3BhY2Uge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzNlNjg0ZTtcbiAgICBjb2xvcjogIzAwMDtcblxuICAgICZfX3BsYXRvIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYm9hcmRcIj5cbiAgICAgICAgPFdvcmtzcGFjZSAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBXb3Jrc3BhY2UgZnJvbSBcIi4uL2ludGVyZmFjZS9Xb3Jrc3BhY2VcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkJvYXJkXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBXb3Jrc3BhY2VcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYm9hcmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibW9kdWxlXCIgOnN0eWxlPVwibW9kdWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2R1bGVfX3RpdGxlXCIgOnN0eWxlPVwibW9kdWxlX3RpdGxlXCI+XG4gICAgICAgICAgICDQnNC+0LTRg9C70YxcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTW9kdWxlXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2R1bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnN0YXRpYy5zdHlsZS5tb2R1bGVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kdWxlX3RpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdGF0aWMuc3R5bGUubW9kdWxlX3RpdGxlXG4gICAgICAgIH1cbiAgICB9LFxufVxuPC9zY3JpcHQ+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5rcml0aS1jb250ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjA3ODQzMTM3KTtcXG4gIHBhZGRpbmc6IDE4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmtyaXRpLWNvbnRleHRfX2l0ZW0ge1xcbiAgYmFja2dyb3VuZDogI2QyZmZjODtcXG4gIGNvbG9yOiAjMjY1NTFiO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiA1cHggNXB4O1xcbiAgcGFkZGluZzogMTBweCAyMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcbi5rcml0aS1jb250ZXh0X19pdGVtIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ua3JpdGktY29udGV4dF9faXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjOTBjZTgyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbnRleHRNZW51LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFJSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHUTtFQUNJLGtCQUFBO0FBRFo7QUFHUTtFQUNJLG1CQUFBO0FBRFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmtyaXRpLWNvbnRleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYyOTtcXG4gICAgcGFkZGluZzogMThweCAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICZfX2l0ZW1zIHtcXG5cXG4gICAgfVxcbiAgICAmX19pdGVtIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNkMmZmYzg7XFxuICAgICAgICBjb2xvcjogIzI2NTUxYjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIG1hcmdpbjogNXB4IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjFweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzkwY2U4MjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub2RlLmZvY3VzIHtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLGdCQUFBO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICYuZm9jdXMge1xcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9kZS1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MTE3NjQ3MDU5KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5ub2RlLW1vZGFsX19ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG4ubm9kZS1tb2RhbF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLm5vZGUtbW9kYWxfX2Nsb3NlIGkge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLm5vZGUtbW9kYWxfX2Nsb3NlIGk6aG92ZXIge1xcbiAgY29sb3I6ICNmZjRmNGY7XFxufVxcbi5ub2RlLW1vZGFsX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5ub2RlLW1vZGFsX19tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19tZW51X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6ICNhNWIwYmQ7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLm5vZGUtbW9kYWxfX21lbnVfX2l0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM3YWE0ZDA7XFxufVxcbi5ub2RlLW1vZGFsX19mb3JtIHtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBU1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVBaO0FBU1k7RUFDSSxjQUFBO0FBUGhCO0FBWUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFWUjtBQWFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWFRO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVhaO0FBYVk7RUFDSSxtQkFBQTtBQVhoQjtBQWdCSTtFQUNJLFdBQUE7QUFkUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubm9kZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5YztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAmX19oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG5cXG4gICAgfVxcblxcbiAgICAmX19jbG9zZSB7XFxuICAgICAgICBpIHtcXG4gICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNGY0ZjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgICZfX21lbnUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG5cXG4gICAgICAgICZfX2l0ZW0ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNWIwYmQ7XFxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcXG4gICAgICAgICAgICBtYXJnaW46IDNweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG5cXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3YWE0ZDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2Zvcm0ge1xcbiAgICAgICAgZmxleDogMSAwIDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndvcmtzcGFjZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogIzNlNjg0ZTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ud29ya3NwYWNlX19wbGF0byB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLndvcmtzcGFjZSAua3JpdGktcHJlbG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDU4ODIzNTI5NCk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDEwMDAwMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFHSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQURSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi53b3Jrc3BhY2Uge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjM2U2ODRlO1xcbiAgICBjb2xvcjogIzAwMDtcXG5cXG4gICAgJl9fcGxhdG8ge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLmtyaXRpLXByZWxvYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwMTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYm9hcmQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICM4MGRiODA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uYm9hcmQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogIzgwZGI4MDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZjAyNDJjMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YTU2NDUwMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I1OWJlODcmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjAyNDJjMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmMDI0MmMwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImRmMDI0MmMwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZGYwMjQyYzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdkZjAyNDJjMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMDI0MmMwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJ2RmMDI0MmMwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhNTY0NTAwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmE1NjQ1MDBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YTU2NDUwMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YTU2NDUwMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzI2MTRiZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YzI2MTRiZFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZjMjYxNGJkJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNmMyNjE0YmQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMyNjE0YmRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNmMyNjE0YmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjU5YmU4NyZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiN2I1OWJlODdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3YjU5YmU4NycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzdiNTliZTg3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiNTliZTg3XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzdiNTliZTg3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjg1YTAzM2JhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnODVhMDMzYmEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1YTAzM2JhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzg1YTAzM2JhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzI3ZDk0MmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczMjdkOTQyYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzMyN2Q5NDJhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIm5hbWUiLCJlbWl0cyIsInByb3BzIiwic2NoZW1lX25hbWUiLCJTdHJpbmciLCJjb250ZXh0IiwiT2JqZWN0IiwiY29udGV4dF90eXBlIiwibW91c2VfeCIsIk51bWJlciIsIm1vdXNlX3kiLCJkYXRhIiwiaXRlbXMiLCJ4IiwieSIsIndhdGNoIiwiZ2V0TWVudUl0ZW1zIiwiY29tcHV0ZWQiLCJtb2R1bGVTdHlsZSIsImxlZnQiLCJjb25jYXQiLCJ0b3AiLCJtZXRob2RzIiwiY2xvc2UiLCIkZW1pdCIsIl90aGlzIiwiS3JpdGkiLCJhcGkiLCJ1cmwiLCJ0eXBlIiwidXVpZCIsInRoZW4iLCJyZXNwb25zZSIsImNsaWNrSXRlbSIsIml0ZW0iLCJjb2RlIiwiXyIsImNsb25lRGVlcCIsIk1vZHVsZSIsImNvbXBvbmVudHMiLCJub2RlIiwicG9pbnQiLCJDb250cm9sUGFuZWwiLCJub2RlX21lbnUiLCJhY3RpdmVfbWV0aG9kIiwiYnV0dG9ucyIsImljb24iLCJjbGljayIsInNldERhdGEiLCJfdGhpczIiLCJnZXREYXRhIiwibWV0aG9kIiwidmFyaWFibGUiLCJfdGhpczMiLCJ0cmFuc2Zvcm1NZXRob2QiLCJfdGhpczQiLCJ2YWx1ZXMiLCJnZXRDb250ZW50IiwicHJlZml4IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIk5vZGUiLCJOb2RlTW9kYWwiLCJDb250ZXh0TWVudSIsImFjdGl2ZV9zY2hlbWVfbmFtZSIsInNjaGVtZSIsImNvbnRleHRfbWVudV9vYmplY3QiLCJ3b3Jrc3BhY2Vfd2lkdGgiLCJ3b3Jrc3BhY2VfaGVpZ2h0IiwiaG9sZF94X2ZhY3RvciIsImhvbGRfeV9mYWN0b3IiLCJ3b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkIiwicGxhdG9feCIsInBsYXRvX3kiLCJhY3RpdmVfbm9kZSIsImxhc3RfaG9sZF94IiwibGFzdF9ob2xkX3kiLCJub2RlcyIsIl90aGlzJHNjaGVtZSIsIm1vdW50ZWQiLCJkZWZpbmVXb3Jrc3BhY2VTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFNjaGVtZSIsImJlZm9yZVVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiJG5leHRUaWNrIiwicGFyZW50RWxlbWVudCIsIiRlbCIsInBhcmVudE5vZGUiLCJnbG9iYWwiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNhbml0aXplTm9kZXMiLCJtYXAiLCJzYXZlU2NoZW1lIiwic2NoZW1lX2RhdGEiLCJjb25zb2xlIiwibG9nIiwibW92ZVBsYXRvIiwiaG9sZF9wbGF0byIsImRyb3BQbGF0byIsIm1vdXNlbW92ZSIsImV2ZW50IiwicGFnZVgiLCJwYWdlWSIsIm1vdmVOb2RlIiwiJCIsImNzcyIsIm1hcmdpbkxlZnQiLCJib2R5X3hfZmFjdG9yIiwibWFyZ2luVG9wIiwiYm9keV95X2ZhY3RvciIsIm5vZGVIb2xkIiwiYnV0dG9uIiwic2F2ZUhvbGRQb3NpdGlvbiIsImZvY3VzIiwibm9kZURyb3AiLCJ3b3Jrc3BhY2VDb250ZXh0TWVudSIsIm9wZW5Db250ZXh0TWVudSIsImNsb3NlQ29udGV4dE1lbnUiLCJjbGlja0NvbnRleHRNZW51SXRlbSIsImNyZWF0ZVVVSUQiLCJwdXNoIiwiZm4iLCJjcmVhdGVMaW5rIiwiV29ya3NwYWNlIiwibW9kdWxlIiwic3R5bGUiLCJtb2R1bGVfdGl0bGUiLCIkZGF0YSIsImxlbmd0aCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCIkb3B0aW9ucyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJvbkNsaWNrIiwiJGV2ZW50IiwiX25vcm1hbGl6ZUNsYXNzIiwiX3RvRGlzcGxheVN0cmluZyIsInRleHQiLCIkcHJvcHMiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X01vZHVsZSIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfY2FjaGUiLCJfY3R4IiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzciLCJhY3RpdmUiLCJ0aXRsZSIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2NvbXBvbmVudF9Gb3JtRml0dGVyIiwiJHNsb3RzIiwiX3JlbmRlclNsb3QiLCJfaG9pc3RlZF8xMCIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfQ29udHJvbFBhbmVsIiwib25Nb3VzZWRvd24iLCJfd2l0aE1vZGlmaWVycyIsImFwcGx5IiwiYXJndW1lbnRzIiwib25Nb3VzZXVwIiwib25Nb3VzZW1vdmUiLCJvbkRibGNsaWNrIiwiX2NvbXBvbmVudF9Ob2RlIiwicmVmIiwiaWQiLCJvbkNvbnRleHRtZW51IiwiX2NvbXBvbmVudF9Ob2RlTW9kYWwiLCJvbkNsb3NlIiwib25VcGRhdGUiLCJfY29tcG9uZW50X0NvbnRleHRNZW51Iiwib25DbGlja19pdGVtIiwiX2NvbXBvbmVudF9Xb3Jrc3BhY2UiXSwic291cmNlUm9vdCI6IiJ9