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
    scheme_code: String,
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
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenu */ "./resources/vue/components/interface/ContextMenu.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Workspace",
  components: {
    Node: _Node__WEBPACK_IMPORTED_MODULE_0__["default"],
    // Компонент реализующий ноду
    NodeModal: _NodeModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    // Компонент рабочее окно нода
    ContextMenu: _ContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"] // Контекстное меню
  },
  props: {},
  data: function data() {
    return {
      active_scheme_code: 'calculator',
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
          'scheme_code': this.active_scheme_code
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
          scheme_code: this.active_scheme_code,
          scheme_data: {
            name: this.scheme.name,
            description: this.scheme.description,
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
      if (code === 'cloneNode') {
        // this.createUUID((uuid) => {
        //     context.uuid = uuid
        //     context.point.x += 100
        //     context.point.y += 100
        //     this.scheme.nodes.push(context)
        // })
        Kriti.api({
          data: {
            node: context
          },
          url: 'kriti.api.Node:cloneNode',
          then: function then(response) {
            var node = response.node;
            node.point.x += 100;
            node.point.y += 100;
            _this3.scheme.nodes.push(node);
          }
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
    style_module: function style_module() {
      return this.node["static"].style.module;
    },
    style_module_title: function style_module_title() {
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
    node: $data.node,
    onClose: _cache[0] || (_cache[0] = function ($event) {
      return $data.node = null;
    }),
    onUpdate: $options.getScheme
  }, null, 8 /* PROPS */, ["node", "onUpdate"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ContextMenu, {
    context: $data.context_menu_object,
    context_type: "node",
    scheme_code: $data.active_scheme_code,
    mouse_x: $data.mouse_x,
    mouse_y: $data.mouse_y,
    onClose: $options.closeContextMenu,
    onClick_item: $options.clickContextMenuItem
  }, null, 8 /* PROPS */, ["context", "scheme_code", "mouse_x", "mouse_y", "onClose", "onClick_item"])], 36 /* STYLE, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
  return $props.node ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "module",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.style_module)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "module__title",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.style_module_title)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.node["static"].icon)
  }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.node["static"].settings.name), 1 /* TEXT */)], 4 /* STYLE */)], 4 /* STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
___CSS_LOADER_EXPORT___.push([module.id, ".kriti-context {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.1607843137);\n  padding: 18px 16px;\n  border-radius: 4px;\n}\n.kriti-context__item {\n  background: #d9d9d9;\n  color: #26551b;\n  border-radius: 4px;\n  margin: 5px 5px;\n  padding: 10px 21px;\n  cursor: pointer;\n  transition: 200ms;\n}\n.kriti-context__item i {\n  margin-right: 10px;\n}\n.kriti-context__item:hover {\n  background: #90ce82;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/ContextMenu.vue","webpack://./resources/scss/kriti.palette.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,6CAAA;EACA,kBAAA;EACA,kBAAA;AADJ;AAKI;EACI,mBCVG;EDWH,cCVA;EDWA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;AAHR;AAIQ;EACI,kBAAA;AAFZ;AAIQ;EACI,mBAAA;AAFZ","sourcesContent":["\n@import '../../../scss/kriti.palette.scss';\n.kriti-context {\n    position: absolute;\n    background: #ffffff29;\n    padding: 18px 16px;\n    border-radius: 4px;\n    &__items {\n\n    }\n    &__item {\n        background: $bg-light;\n        color: $f-def;\n        border-radius: 4px;\n        margin: 5px 5px;\n        padding: 10px 21px;\n        cursor: pointer;\n        transition: 200ms;\n        i {\n            margin-right: 10px;\n        }\n        &:hover {\n            background: #90ce82;\n        }\n    }\n}\n\n","$bg-dark: #e8e8e8;\n$bg-light: #d9d9d9;\n$f-def: #26551b;\n$b-def: #72bd8f;\n$f-dark: #1e241e;\n$color-100: #dc25cb;\n$color-100: #9b8d8d;\n$color-100: #144c60;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".node-modal {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6117647059);\n  overflow-y: auto;\n}\n.node-modal__body {\n  background: #fff;\n  width: 80%;\n  min-height: 300px;\n  margin-top: 30px;\n  padding: 15px;\n  border-radius: 10px;\n  padding-top: 10px;\n  margin-bottom: 100px;\n}\n.node-modal__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.node-modal__close i {\n  color: #a0a0a0;\n  cursor: pointer;\n  transition: 200ms;\n  font-size: 25px;\n}\n.node-modal__close i:hover {\n  color: #ff4f4f;\n}\n.node-modal__content {\n  display: flex;\n  justify-content: space-between;\n}\n.node-modal__menu {\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  margin-right: 15px;\n}\n.node-modal__menu__item {\n  padding: 0px 11px;\n  cursor: pointer;\n  color: #9d9d9d;\n  font-size: 17px;\n  margin-bottom: 4px;\n}\n.node-modal__menu__item.active {\n  color: #7284d6;\n}\n.node-modal__form {\n  flex: 1 0 0;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/NodeModal.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,uCAAA;EACA,gBAAA;AAAJ;AAEI;EACI,gBAAA;EACA,UAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AAAR;AAGI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AADR;AASQ;EACI,cAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;AAPZ;AASY;EACI,cAAA;AAPhB;AAYI;EACI,aAAA;EACA,8BAAA;AAVR;AAaI;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;AAXR;AAaQ;EACI,iBAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;AAXZ;AAaY;EACI,cAAA;AAXhB;AAgBI;EACI,WAAA;AAdR","sourcesContent":["\n.node-modal {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #0000009c;\n    overflow-y: auto;\n\n    &__body {\n        background: #fff;\n        width: 80%;\n        min-height: 300px;\n        margin-top: 30px;\n        padding: 15px;\n        border-radius: 10px;\n        padding-top: 10px;\n        margin-bottom: 100px;\n    }\n\n    &__header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 15px;\n    }\n\n    &__title {\n\n    }\n\n    &__close {\n        i {\n            color: #a0a0a0;\n            cursor: pointer;\n            transition: 200ms;\n            font-size: 25px;\n\n            &:hover {\n                color: #ff4f4f;\n            }\n        }\n    }\n\n    &__content {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    &__menu {\n        display: flex;\n        flex-direction: column;\n        border-radius: 5px;\n        margin-right: 15px;\n\n        &__item {\n            padding: 0px 11px;\n            cursor: pointer;\n            color: #9d9d9d;\n            font-size: 17px;\n            margin-bottom: 4px;\n\n            &.active {\n                color: #7284d6;\n            }\n        }\n    }\n\n    &__form {\n        flex: 1 0 0;\n    }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".workspace {\n  padding: 10px;\n  background: #e8e8e8;\n  color: #1e241e;\n}\n.workspace__plato {\n  width: 0;\n  height: 0;\n  position: relative;\n}\n.workspace .kriti-preloader {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4588235294);\n  transition: 300ms;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 100001;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Workspace.vue","webpack://./resources/scss/kriti.palette.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,mBCJM;EDKN,cCDK;ADAT;AAGI;EACI,QAAA;EACA,SAAA;EACA,kBAAA;AADR;AAII;EACI,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,6CAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;AAFR","sourcesContent":["\n@import '../../../scss/kriti.palette.scss';\n.workspace {\n    padding: 10px;\n    background: $bg-dark;\n    color: $f-dark;\n\n    &__plato {\n        width: 0;\n        height: 0;\n        position: relative;\n    }\n\n    .kriti-preloader {\n        position: fixed;\n        display: flex;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #ffffff75;\n        transition: 300ms;\n        justify-content: center;\n        align-items: center;\n        user-select: none;\n        z-index: 100001;\n    }\n}\n","$bg-dark: #e8e8e8;\n$bg-light: #d9d9d9;\n$f-def: #26551b;\n$b-def: #72bd8f;\n$f-dark: #1e241e;\n$color-100: #dc25cb;\n$color-100: #9b8d8d;\n$color-100: #144c60;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".module {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.module i {\n  margin-right: 3px;\n}\n.module .module__title i {\n  font-weight: bold;\n  font-size: 20px;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/types/Module.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,sBAAA;EACA,2BAAA;AAAJ;AACI;EACI,iBAAA;AACR;AAGA;EACI,iBAAA;EACA,eAAA;AAAJ","sourcesContent":["\n.module {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    i {\n        margin-right: 3px;\n    }\n}\n\n.module .module__title i {\n    font-weight: bold;\n    font-size: 20px;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Module_vue_vue_type_style_index_0_id_327d942a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Module.vue?vue&type=style&index=0&id=327d942a&lang=scss */ "./resources/vue/components/types/Module.vue?vue&type=style&index=0&id=327d942a&lang=scss");
/* harmony import */ var _var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_kriti_mog_app_Kriti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Module_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Module_vue_vue_type_template_id_327d942a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/vue/components/types/Module.vue"]])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLGlFQUFlO0VBQ1hBLElBQUksRUFBRSxhQUFhO0VBQ25CQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0VBQzlCQyxLQUFLLEVBQUU7SUFDSEMsV0FBVyxFQUFFQyxNQUFNO0lBQ25CQyxPQUFPLEVBQUVDLE1BQU07SUFDZkMsWUFBWSxFQUFFSCxNQUFNO0lBQ3BCSSxPQUFPLEVBQUVDLE1BQU07SUFDZkMsT0FBTyxFQUFFRDtFQUNiLENBQUM7RUFDREUsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLEtBQUssRUFBRSxFQUFFO01BQ1RDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNQO0VBQ0osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSFYsT0FBTyxXQUFBQSxRQUFDQSxRQUFPLEVBQUU7TUFDYixJQUFJQSxRQUFPLEVBQUU7UUFDVCxJQUFJLENBQUNXLFlBQVksQ0FBQztRQUNsQixJQUFJLENBQUNILENBQUEsR0FBSSxJQUFJLENBQUNMLE9BQU07UUFDcEIsSUFBSSxDQUFDTSxDQUFBLEdBQUksSUFBSSxDQUFDSixPQUFNO01BQ3hCO0lBQ0o7RUFDSixDQUFDO0VBQ0RPLFFBQVEsRUFBRTtJQUNOQyxXQUFXLFdBQUFBLFlBQUEsRUFBRztNQUNWLE9BQU87UUFDSEMsSUFBSSxLQUFBQyxNQUFBLENBQUssSUFBSSxDQUFDUCxDQUFDLE9BQUk7UUFDbkJRLEdBQUcsS0FBQUQsTUFBQSxDQUFLLElBQUksQ0FBQ04sQ0FBQztNQUNsQjtJQUNKO0VBQ0osQ0FBQztFQUNEUSxPQUFPLEVBQUU7SUFDTEMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7TUFDSixJQUFJLENBQUNYLEtBQUksR0FBSSxFQUFDO01BQ2QsSUFBSSxDQUFDWSxLQUFLLENBQUMsT0FBTztJQUN0QixDQUFD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Ozs7Ozs7OztBQzFCdU07Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7Ozs7Ozs7Ozs7Ozs7QUNBSzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7QUNBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/ZDAxYSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/ZjAyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT9lMGU0Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2I5ZjEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzdkODIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT80NTZjIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/NmRkOCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/YzZmNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT82ZmYyIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlPzJkOWQiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzQ5YmIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8yZjJmIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/NTVlNSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/NTE0OCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT8wMDMwIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2QwNWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzYwYWIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8xYzgzIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/YjZmNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/ZjkzZCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT8xMDFhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2RlZjkiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlP2YzYzciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8wNDUxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJpdGVtcy5sZW5ndGhcIiBjbGFzcz1cImtyaXRpLWNvbnRleHRcIiA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiIHYtY2xpY2stb3V0c2lkZS1lbGVtZW50PVwiY2xvc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImtyaXRpLWNvbnRleHRfX2l0ZW1zXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIGNsYXNzPVwia3JpdGktY29udGV4dF9faXRlbVwiIEBjbGljaz1cImNsaWNrSXRlbShpdGVtKVwiPlxuICAgICAgICAgICAgICAgIDxpIHYtaWY9XCJpdGVtLmljb25cIiA6Y2xhc3M9XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAge3sgaXRlbS50ZXh0IH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQ29udGV4dE1lbnVcIixcbiAgICBlbWl0czogWydjbG9zZScsICdjbGlja19pdGVtJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2NoZW1lX2NvZGU6IFN0cmluZyxcbiAgICAgICAgY29udGV4dDogT2JqZWN0LFxuICAgICAgICBjb250ZXh0X3R5cGU6IFN0cmluZyxcbiAgICAgICAgbW91c2VfeDogTnVtYmVyLFxuICAgICAgICBtb3VzZV95OiBOdW1iZXIsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgY29udGV4dChjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVudUl0ZW1zKClcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1vdXNlX3hcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLm1vdXNlX3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMueH1weGAsXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnl9cHhgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgIH0sXG4gICAgICAgIGdldE1lbnVJdGVtcygpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLkNvbnRleHQ6Z2V0Q29udGV4dEl0ZW1zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuY29udGV4dF90eXBlLFxuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLmNvbnRleHQudXVpZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuaXRlbXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjbGlja0l0ZW0oaXRlbSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2tfaXRlbScsIGl0ZW0uY29kZSwgXy5jbG9uZURlZXAodGhpcy5jb250ZXh0KSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xuLmtyaXRpLWNvbnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMjk7XG4gICAgcGFkZGluZzogMThweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAmX19pdGVtcyB7XG5cbiAgICB9XG4gICAgJl9faXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiZy1saWdodDtcbiAgICAgICAgY29sb3I6ICRmLWRlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW46IDVweCA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjFweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTBjZTgyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJub2RlXCIgIDpzdHlsZT1cIm1vZHVsZVN0eWxlXCI+XG4gICAgICAgIDxNb2R1bGUgdi1pZj1cIm5vZGUudHlwZSA9PT0gJ01vZHVsZSdcIiA6bm9kZT1cIm5vZGVcIiAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qXG7QotGD0YIg0LzRiyDQv9C+0LTQutC70Y7Rh9Cw0LXQvCDRgtC40L/RiyBQb2ludC3QvtCyINC4INGD0L/RgNCw0LLQu9GP0LXQvCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtdC8INC4INC+0LHRidC40Lwg0L/QvtCy0LXQtNC10L3QuNC10LxcbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vdHlwZXMvTW9kdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vZHVsZVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2R1bGVTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5ub2RlLnBvaW50Lnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy5ub2RlLnBvaW50Lnl9cHhgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJi5mb2N1cyB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJub2RlX21lbnVcIiBjbGFzcz1cIm5vZGUtbW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2JvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0KLRg9GCINC30LDQs9C+0LvQvtCy0L7QuiDQvNC+0LTRg9C70Y9cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS14LXNxdWFyZS1maWxsXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX21lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gbm9kZV9tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vZGUtbW9kYWxfX21lbnVfX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInthY3RpdmU6aXRlbS5tZXRob2QgPT09IGFjdGl2ZV9tZXRob2R9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRDb250ZW50KGl0ZW0ubWV0aG9kKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaXR0ZXIgdi1pZj1cImRhdGEgIT09IG51bGxcIiA6c2NoZW1lPVwiZGF0YS5zY2hlbWVcIiB2LW1vZGVsPVwiZGF0YS52YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihfLCBuYW1lKSBpbiAkc2xvdHNcIiB2LXNsb3Q6W25hbWVdPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwibmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpdHRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2NvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbFBhbmVsIDpidXR0b25zPVwiYnV0dG9uc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi9Ed2FyZi9mb3Jtcy9Db250cm9sUGFuZWxcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVNb2RhbFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQ29udHJvbFBhbmVsXG4gICAgfSxcbiAgICBlbWl0czogWydjbG9zZScsICd1cGRhdGUnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBPYmplY3QsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZV9tZW51OiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlX21ldGhvZDogJ3N0eWxlJyxcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn0KHQvtGF0YDQsNC90LjRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2JpIGJpLWNsb3VkLXVwbG9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBub2RlKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZV9tZW51ID0gbnVsbFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdtZW51JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZTonbm9kZV9tZW51JyxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuYWN0aXZlX21ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCn0YLQtdC90LjQtSDQuNC3INC90L7QtNCwXG4gICAgICAgIGdldERhdGEocHJvcHMpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMudmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy52YXJpYWJsZSA9ICdkYXRhJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpnZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMubm9kZS51dWlkLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMudHJhbnNmb3JtTWV0aG9kKCdnZXQnLCBwcm9wcy5tZXRob2QpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcHMudmFyaWFibGVdID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMudGhlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMudGhlbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDQl9Cw0L/QuNGB0Ywg0LIg0L3QvtC0XG4gICAgICAgIHNldERhdGEoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Ob2RlOnNldERhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogdGhpcy5ub2RlLnV1aWQsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy50cmFuc2Zvcm1NZXRob2QoJ3NldCcsIHRoaXMuYWN0aXZlX21ldGhvZCksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogdGhpcy5kYXRhLnZhbHVlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLCByZXNwb25zZSkgLy8g0J/QvtGB0YvQu9Cw0LXRgtGB0Y8g0LTQu9GPINC+0LHQvdC+0LLQu9C10L3QuNGPINGB0YXQtdC80YtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldENvbnRlbnQobWV0aG9kKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9tZXRob2QgPSBtZXRob2RcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmFjdGl2ZV9tZXRob2QsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCf0YDQtdC+0LHRgNCw0LfRg9C10YIgXCJwcmVmaXgsIG1ldGhvZFwiINCyIFwicHJlZml4TWV0aG9kXCJcbiAgICAgICAgdHJhbnNmb3JtTWV0aG9kKHByZWZpeCwgbWV0aG9kKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgbWV0aG9kLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWV0aG9kLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubm9kZS1tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5YztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgJl9fYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcblxuICAgIH1cblxuICAgICZfX2Nsb3NlIHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNGY0ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgJl9fbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDExcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzlkOWQ5ZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzI4NGQ2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIGZsZXg6IDEgMCAwO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJ3b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkXCJcbiAgICAgY2xhc3M9XCJ3b3Jrc3BhY2VcIlxuICAgICA6c3R5bGU9XCJgd2lkdGg6JHt3b3Jrc3BhY2Vfd2lkdGh9cHg7aGVpZ2h0OiR7d29ya3NwYWNlX2hlaWdodH1weGBcIlxuICAgICBAbW91c2Vkb3duLmN0cmwuc2VsZj1cIm1vdmVQbGF0b1wiXG4gICAgIEBtb3VzZXVwLnNlbGY9XCJkcm9wUGxhdG9cIlxuICAgICBAbW91c2Vtb3ZlPVwibW91c2Vtb3ZlXCJcbiAgICAgQGRibGNsaWNrLnNlbGY9XCJ3b3Jrc3BhY2VDb250ZXh0TWVudVwiXG4+XG4gICAgPGRpdiBjbGFzcz1cIndvcmtzcGFjZV9fcHJlbG9hZGVyXCI+PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwid29ya3NwYWNlX19wbGF0b1wiIDpzdHlsZT1cImBtYXJnaW4tbGVmdDokeyBwbGF0b194IH1weDttYXJnaW4tdG9wOiR7IHBsYXRvX3kgfXB4YFwiPlxuICAgICAgICA8Tm9kZSB2LWZvcj1cIm5vZGUgaW4gbm9kZXNcIiA6bm9kZT1cIm5vZGVcIlxuICAgICAgICAgICAgIDpyZWY9XCJub2RlLmlkXCIgOmNsYXNzPVwieyBmb2N1czpub2RlID09PSBhY3RpdmVfbm9kZSB9XCJcbiAgICAgICAgICAgICBAbW91c2Vkb3duPVwibm9kZUhvbGQobm9kZSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgQG1vdXNldXA9XCJub2RlRHJvcFwiXG4gICAgICAgICAgICAgQGNsaWNrLmN0cmw9XCJjcmVhdGVMaW5rKG5vZGUpXCJcbiAgICAgICAgICAgICBAY29udGV4dG1lbnUucHJldmVudD1cIm9wZW5Db250ZXh0TWVudShub2RlKVwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPE5vZGVNb2RhbCA6bm9kZT1cIm5vZGVcIiBAY2xvc2U9XCJub2RlID0gbnVsbFwiIEB1cGRhdGU9XCJnZXRTY2hlbWVcIi8+XG4gICAgPENvbnRleHRNZW51XG4gICAgICAgIDpjb250ZXh0PVwiY29udGV4dF9tZW51X29iamVjdFwiXG4gICAgICAgIGNvbnRleHRfdHlwZT1cIm5vZGVcIlxuICAgICAgICA6c2NoZW1lX2NvZGU9XCJhY3RpdmVfc2NoZW1lX2NvZGVcIlxuICAgICAgICA6bW91c2VfeD1cIm1vdXNlX3hcIlxuICAgICAgICA6bW91c2VfeT1cIm1vdXNlX3lcIlxuICAgICAgICBAY2xvc2U9XCJjbG9zZUNvbnRleHRNZW51XCJcbiAgICAgICAgQGNsaWNrX2l0ZW09XCJjbGlja0NvbnRleHRNZW51SXRlbVwiXG4gICAgLz5cblxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IE5vZGVNb2RhbCBmcm9tIFwiLi9Ob2RlTW9kYWxcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJXb3Jrc3BhY2VcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5vZGUsIC8vINCa0L7QvNC/0L7QvdC10L3RgiDRgNC10LDQu9C40LfRg9GO0YnQuNC5INC90L7QtNGDXG4gICAgICAgIE5vZGVNb2RhbCwgLy8g0JrQvtC80L/QvtC90LXQvdGCINGA0LDQsdC+0YfQtdC1INC+0LrQvdC+INC90L7QtNCwXG4gICAgICAgIENvbnRleHRNZW51LCAvLyDQmtC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgfSxcbiAgICBwcm9wczoge1xuXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlX3NjaGVtZV9jb2RlOiAnY2FsY3VsYXRvcicsIC8vINCY0LzRjyDQsNC60YLQuNCy0L3QvtC5INGC0LXQvNGLXG4gICAgICAgICAgICBzY2hlbWU6IHt9LCAvLyDQkNC60YLQuNCy0L3QsNGPINGB0YXQtdC80LBcbiAgICAgICAgICAgIGNvbnRleHRfbWVudV9vYmplY3Q6IG51bGwsIC8vINCe0LHRitC10LrRgiDQutC+0L3RgtC10LrRgdGC0L3QvtCz0L4g0LzQtdC90Y5cblxuICAgICAgICAgICAgbW91c2VfeDogMCxcbiAgICAgICAgICAgIG1vdXNlX3k6IDAsXG4gICAgICAgICAgICB3b3Jrc3BhY2Vfd2lkdGg6IG51bGwsIC8vINCo0LjRgNC40L3QsCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICAgICAgd29ya3NwYWNlX2hlaWdodDogbnVsbCwgLy8g0JLRi9GB0L7RgtCwINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgICAgICBob2xkX3hfZmFjdG9yOiBudWxsLCAvLyDQn9C+0L/RgNCw0LLQutCwINC+0LHRitC10LrRgtCwINC/0L4geFxuICAgICAgICAgICAgaG9sZF95X2ZhY3RvcjogbnVsbCwgLy8g0J/QvtC/0YDQsNCy0LrQsCDQvtCx0YrQtdC60YLQsCDQv9C+IHlcbiAgICAgICAgICAgIHdvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQ6IGZhbHNlLCAvLyDQoNCw0LfQvNC10YAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0Lgg0L7Qv9GA0LXQtNC10LvRkdC9XG4gICAgICAgICAgICBwbGF0b194OiAwLCAvLyDQodC80LXRidC10L3QuNC1INC60LDRgNGC0Ysg0L/QviDQvtGB0Lgg0KVcbiAgICAgICAgICAgIHBsYXRvX3k6IDAsIC8vINCh0LzQtdGJ0LXQvdC40LUg0LrQsNGA0YLRiyDQv9C+INC+0YHQuCBZXG4gICAgICAgICAgICBub2RlOiBudWxsLCAvLyDQlNCw0L3QvdGL0LUg0L3QvtC00LBcbiAgICAgICAgICAgIGFjdGl2ZV9ub2RlOiBudWxsLCAvLyDQktGL0LTQtdC70LXQvdC90YvQuSDQvdC+0LRcbiAgICAgICAgICAgIGxhc3RfaG9sZF94OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFhcbiAgICAgICAgICAgIGxhc3RfaG9sZF95OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbm9kZXMoKSB7IC8vINCd0L7QtNGLINGB0YXQtdC80YtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtZT8ubm9kZXNcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5kZWZpbmVXb3Jrc3BhY2VTaXplKCkgLy8g0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0YDQsNC30LzQtdGA0Ysg0L7QutC90LBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSlcbiAgICAgICAgdGhpcy5nZXRTY2hlbWUoKVxuICAgIH0sXG4gICAgYmVmb3JlVW5tb3VudCgpIHsgLy8g0J/QtdGA0LXQtCDRgNCw0LfQvNC+0L3RgtC40YDQvtCy0LDQvdC40LXQvCDRg9C00LDQu9C40YLRjCDRgdC70YPRiNCw0YLQtdC70Ywg0YDQsNC30LzQtdGA0L7QsiDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kZWZpbmVXb3Jrc3BhY2VTaXplKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQntC/0YDQtdC00LXQu9C40YLRjCDRgNCw0LfQvNC10YAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgZGVmaW5lV29ya3NwYWNlU2l6ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50RWxlbWVudCA9IHRoaXMuJGVsLnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICAvLyDQl9Cw0L/QuNGB0YvQstCw0LXQvCDRjdGC0Lgg0LTQsNC90L3Ri9C1INCyINCz0LvQvtCx0LDQu9GM0L3Ri9C1INC/0LXRgNC10LzQtdC90L3Ri9C1IEtyaXRpXG4gICAgICAgICAgICAgICAgS3JpdGkuZ2xvYmFsLndvcmtzcGFjZV93aWR0aCA9IHRoaXMud29ya3NwYWNlX3dpZHRoID0gcGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgIEtyaXRpLmdsb2JhbC53b3Jrc3BhY2VfaGVpZ2h0ID0gdGhpcy53b3Jrc3BhY2VfaGVpZ2h0ID0gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53b3Jrc3BhY2Vfd2lkdGggJiYgdGhpcy53b3Jrc3BhY2VfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0LPRgNGD0LfQuNGC0Ywg0YHRhdC10LzRg1xuICAgICAgICBnZXRTY2hlbWUoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5TY2hlbWU6Z2V0U2NoZW1lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdzY2hlbWVfY29kZSc6IHRoaXMuYWN0aXZlX3NjaGVtZV9jb2RlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1lID0gcmVzcG9uc2Uuc2NoZW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGH0LjRgdGC0LjRgtGMINC90L7QtNGLINC+0YIg0LvQuNGI0L3QuNGFINC00LDQvdC90YvRhVxuICAgICAgICBzYW5pdGl6ZU5vZGVzKCkge1xuICAgICAgICAgICAgbGV0IG5vZGVzID0gXy5jbG9uZURlZXAodGhpcy5zY2hlbWUubm9kZXMpXG4gICAgICAgICAgICBub2Rlcy5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbm9kZS5zdGF0aWNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbm9kZXNcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0L3QvtC00YtcbiAgICAgICAgc2F2ZVNjaGVtZSgpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLlNjaGVtZTpzZXRTY2hlbWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lX2NvZGU6IHRoaXMuYWN0aXZlX3NjaGVtZV9jb2RlLFxuICAgICAgICAgICAgICAgICAgICBzY2hlbWVfZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zY2hlbWUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnNjaGVtZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzOiB0aGlzLnNhbml0aXplTm9kZXMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub2RlcyBzYXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0LLQuNCz0LDRgtGMINC60LDRgNGC0YNcbiAgICAgICAgbW92ZVBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gdGhpcy5wbGF0b194XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLnBsYXRvX3lcbiAgICAgICAgICAgIHRoaXMuaG9sZF9wbGF0byA9IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGB0YLQsNCy0LjRgtGMINC60LDRgNGC0YNcbiAgICAgICAgZHJvcFBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3BsYXRvID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuc2F2ZVNjaGVtZSgpIC8vINCh0L7RhdGA0LDQvdC40YLRjCDRgdC+0YHRgtC+0Y/QvdC40LVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQpNC40LrRgdC40YDQvtCy0LDRgtGMINC00LLQuNC20LXQvdC40LUg0LzRi9GI0LhcbiAgICAgICAgbW91c2Vtb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX3ggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgdGhpcy5tb3VzZV95ID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgIHRoaXMubW92ZU5vZGUoKSAvLyDQlNCy0LjQs9Cw0YLRjCDQvtCx0YrQtdC60YIg0LXRgdC70Lgg0L7QvSDQsNC60YLQuNCy0LXQvVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCf0LXRgNC10LzQtdGJ0LXQvdC40LUg0L3QvtC00LBcbiAgICAgICAgbW92ZU5vZGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVfbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LrQsNGA0YLQsFxuICAgICAgICAgICAgaWYgKHRoaXMuaG9sZF9wbGF0bykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnBsYXRvX3ggKyB0aGlzLmJvZHlfeF9mYWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5wbGF0b195ICsgdGhpcy5ib2R5X3lfZmFjdG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5xdWFudGl6ZU9iamVjdHMoKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDRhdCy0LDRgiDQvdC+0LTQsFxuICAgICAgICBub2RlSG9sZChub2RlLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlSG9sZFBvc2l0aW9uKClcbiAgICAgICAgICAgIG5vZGUuc3RhdGljLmZvY3VzID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gbm9kZS5wb2ludC54XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSBub2RlLnBvaW50LnlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNGE0LjQutGB0LjRgNC+0LLQsNGC0Ywg0L/QvtC30LjRhtC40Y4g0L3QvtC00LBcbiAgICAgICAgc2F2ZUhvbGRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3ggPSB0aGlzLm1vdXNlX3hcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3kgPSB0aGlzLm1vdXNlX3lcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40YLRjCDQvdC+0LRcbiAgICAgICAgbm9kZURyb3AoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdGF0aWMuZm9jdXMgPSBmYWxzZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZSA9IG51bGxcblxuICAgICAgICAgICAgLy8g0KHQvtGF0YDQsNC90Y/RgtGMINGC0L7Qu9GM0LrQviDQtdGB0LvQuCDQsdGL0Lsg0YHQtNCy0LjQvdGD0YIg0L7QsdGK0LXQutGCXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0X2hvbGRfeCAhPT0gdGhpcy5tb3VzZV94IHx8IHRoaXMubGFzdF9ob2xkX3kgIT09IHRoaXMubW91c2VfeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVNjaGVtZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4g0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgd29ya3NwYWNlQ29udGV4dE1lbnUoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0JrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjiDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuCcpXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgtC60YDRi9GC0Ywg0LrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjlxuICAgICAgICBvcGVuQ29udGV4dE1lbnUobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0X21lbnVfb2JqZWN0ID0gbm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQutGA0YvRgtGMINC60L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y5cbiAgICAgICAgY2xvc2VDb250ZXh0TWVudSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF9tZW51X29iamVjdCA9IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQutC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOINC90L7QtNCwXG4gICAgICAgIGNsaWNrQ29udGV4dE1lbnVJdGVtKGNvZGUsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAnb3Blbk5vZGVTZXR0aW5ncycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSBjb250ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gJ2Nsb25lTm9kZScpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZVVVSUQoKHV1aWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC51dWlkID0gdXVpZFxuICAgICAgICAgICAgICAgIC8vICAgICBjb250ZXh0LnBvaW50LnggKz0gMTAwXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQucG9pbnQueSArPSAxMDBcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlbWUubm9kZXMucHVzaChjb250ZXh0KVxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogY29udGV4dFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpjbG9uZU5vZGUnLFxuICAgICAgICAgICAgICAgICAgICB0aGVuOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gcmVzcG9uc2Uubm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wb2ludC54ICs9IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wb2ludC55ICs9IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlbWUubm9kZXMucHVzaChub2RlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LPQtdC90LXRgNCw0YbQuNGOIHV1aWRcbiAgICAgICAgY3JlYXRlVVVJRChmbikge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpjcmVhdGVVVUlEJyxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZuKHJlc3BvbnNlLnV1aWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVMaW5rKCl7fSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzcyc7XG4ud29ya3NwYWNlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICRiZy1kYXJrO1xuICAgIGNvbG9yOiAkZi1kYXJrO1xuXG4gICAgJl9fcGxhdG8ge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmtyaXRpLXByZWxvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzU7XG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwMTtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiPlxuICAgICAgICA8V29ya3NwYWNlIC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFdvcmtzcGFjZSBmcm9tIFwiLi4vaW50ZXJmYWNlL1dvcmtzcGFjZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQm9hcmRcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFdvcmtzcGFjZVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ib2FyZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICM4MGRiODA7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1pZj1cIm5vZGVcIiBjbGFzcz1cIm1vZHVsZVwiIDpzdHlsZT1cInN0eWxlX21vZHVsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kdWxlX190aXRsZVwiIDpzdHlsZT1cInN0eWxlX21vZHVsZV90aXRsZVwiPlxuICAgICAgICAgICAgPGkgOmNsYXNzPVwibm9kZS5zdGF0aWMuaWNvblwiPjwvaT5cbiAgICAgICAgICAgIHt7IG5vZGUuc3RhdGljLnNldHRpbmdzLm5hbWUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTW9kdWxlXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzdHlsZV9tb2R1bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnN0YXRpYy5zdHlsZS5tb2R1bGVcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVfbW9kdWxlX3RpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdGF0aWMuc3R5bGUubW9kdWxlX3RpdGxlXG4gICAgICAgIH1cbiAgICB9LFxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5tb2R1bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIH1cbn1cblxuLm1vZHVsZSAubW9kdWxlX190aXRsZSBpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIua3JpdGktY29udGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYwNzg0MzEzNyk7XFxuICBwYWRkaW5nOiAxOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5rcml0aS1jb250ZXh0X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBjb2xvcjogIzI2NTUxYjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogNXB4IDVweDtcXG4gIHBhZGRpbmc6IDEwcHggMjFweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4ua3JpdGktY29udGV4dF9faXRlbSBpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmtyaXRpLWNvbnRleHRfX2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzkwY2U4MjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWVcIixcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFLSTtFQUNJLG1CQ1ZHO0VEV0gsY0NWQTtFRFdBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSFI7QUFJUTtFQUNJLGtCQUFBO0FBRlo7QUFJUTtFQUNJLG1CQUFBO0FBRlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xcbi5rcml0aS1jb250ZXh0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMjk7XFxuICAgIHBhZGRpbmc6IDE4cHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAmX19pdGVtcyB7XFxuXFxuICAgIH1cXG4gICAgJl9faXRlbSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmctbGlnaHQ7XFxuICAgICAgICBjb2xvcjogJGYtZGVmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgbWFyZ2luOiA1cHggNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweCAyMXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICBpIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTBjZTgyO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblwiLFwiJGJnLWRhcms6ICNlOGU4ZTg7XFxuJGJnLWxpZ2h0OiAjZDlkOWQ5O1xcbiRmLWRlZjogIzI2NTUxYjtcXG4kYi1kZWY6ICM3MmJkOGY7XFxuJGYtZGFyazogIzFlMjQxZTtcXG4kY29sb3ItMTAwOiAjZGMyNWNiO1xcbiRjb2xvci0xMDA6ICM5YjhkOGQ7XFxuJGNvbG9yLTEwMDogIzE0NGM2MDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub2RlLmZvY3VzIHtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLGdCQUFBO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICYuZm9jdXMge1xcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9kZS1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MTE3NjQ3MDU5KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5ub2RlLW1vZGFsX19ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG4ubm9kZS1tb2RhbF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLm5vZGUtbW9kYWxfX2Nsb3NlIGkge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLm5vZGUtbW9kYWxfX2Nsb3NlIGk6aG92ZXIge1xcbiAgY29sb3I6ICNmZjRmNGY7XFxufVxcbi5ub2RlLW1vZGFsX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5ub2RlLW1vZGFsX19tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudV9faXRlbSB7XFxuICBwYWRkaW5nOiAwcHggMTFweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjOWQ5ZDlkO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudV9faXRlbS5hY3RpdmUge1xcbiAgY29sb3I6ICM3Mjg0ZDY7XFxufVxcbi5ub2RlLW1vZGFsX19mb3JtIHtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBU1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVBaO0FBU1k7RUFDSSxjQUFBO0FBUGhCO0FBWUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFWUjtBQWFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVhSO0FBYVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWFo7QUFhWTtFQUNJLGNBQUE7QUFYaEI7QUFnQkk7RUFDSSxXQUFBO0FBZFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9faGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuXFxuICAgIH1cXG5cXG4gICAgJl9fY2xvc2Uge1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjRmNGY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAmX19tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcblxcbiAgICAgICAgJl9faXRlbSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDExcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuXFxuICAgICAgICAgICAgJi5hY3RpdmUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcyODRkNjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fZm9ybSB7XFxuICAgICAgICBmbGV4OiAxIDAgMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud29ya3NwYWNlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbiAgY29sb3I6ICMxZTI0MWU7XFxufVxcbi53b3Jrc3BhY2VfX3BsYXRvIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ud29ya3NwYWNlIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTg4MjM1Mjk0KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMTAwMDAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIixcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGFBQUE7RUFDQSxtQkNKTTtFREtOLGNDREs7QURBVDtBQUdJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFGUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzcyc7XFxuLndvcmtzcGFjZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICRiZy1kYXJrO1xcbiAgICBjb2xvcjogJGYtZGFyaztcXG5cXG4gICAgJl9fcGxhdG8ge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLmtyaXRpLXByZWxvYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwMTtcXG4gICAgfVxcbn1cXG5cIixcIiRiZy1kYXJrOiAjZThlOGU4O1xcbiRiZy1saWdodDogI2Q5ZDlkOTtcXG4kZi1kZWY6ICMyNjU1MWI7XFxuJGItZGVmOiAjNzJiZDhmO1xcbiRmLWRhcms6ICMxZTI0MWU7XFxuJGNvbG9yLTEwMDogI2RjMjVjYjtcXG4kY29sb3ItMTAwOiAjOWI4ZDhkO1xcbiRjb2xvci0xMDA6ICMxNDRjNjA7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvYXJkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6ICM4MGRiODA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2R1bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2R1bGUgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuLm1vZHVsZSAubW9kdWxlX190aXRsZSBpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFDSTtFQUNJLGlCQUFBO0FBQ1I7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5tb2R1bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgIH1cXG59XFxuXFxuLm1vZHVsZSAubW9kdWxlX190aXRsZSBpIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZjAyNDJjMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YTU2NDUwMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I1OWJlODcmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMDI0MmMwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGYwMjQyYzAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZGYwMjQyYzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdkZjAyNDJjMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJ2RmMDI0MmMwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGYwMjQyYzBcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignZGYwMjQyYzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTY0NTAwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmE1NjQ1MDAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YTU2NDUwMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNmE1NjQ1MDAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTY0NTAwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzZhNTY0NTAwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMjYxNGJkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmMyNjE0YmQmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZjMjYxNGJkXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmMyNjE0YmQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc2YzI2MTRiZCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzI2MTRiZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YzI2MTRiZCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjU5YmU4N1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiNTliZTg3Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3YjU5YmU4N1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzdiNTliZTg3JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnN2I1OWJlODcnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignN2I1OWJlODcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NWEwMzNiYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiODVhMDMzYmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzg1YTAzM2JhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignODVhMDMzYmEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI3ZDk0MmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjdkOTQyYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzMjdkOTQyYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMzI3ZDk0MmEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI3ZDk0MmFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMzI3ZDk0MmEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJzY2hlbWVfY29kZSIsIlN0cmluZyIsImNvbnRleHQiLCJPYmplY3QiLCJjb250ZXh0X3R5cGUiLCJtb3VzZV94IiwiTnVtYmVyIiwibW91c2VfeSIsImRhdGEiLCJpdGVtcyIsIngiLCJ5Iiwid2F0Y2giLCJnZXRNZW51SXRlbXMiLCJjb21wdXRlZCIsIm1vZHVsZVN0eWxlIiwibGVmdCIsImNvbmNhdCIsInRvcCIsIm1ldGhvZHMiLCJjbG9zZSIsIiRlbWl0IiwiX3RoaXMiLCJLcml0aSIsImFwaSIsInVybCIsInR5cGUiLCJ1dWlkIiwidGhlbiIsInJlc3BvbnNlIiwiY2xpY2tJdGVtIiwiaXRlbSIsImNvZGUiLCJfIiwiY2xvbmVEZWVwIiwiTW9kdWxlIiwiY29tcG9uZW50cyIsIm5vZGUiLCJwb2ludCIsIkNvbnRyb2xQYW5lbCIsIm5vZGVfbWVudSIsImFjdGl2ZV9tZXRob2QiLCJidXR0b25zIiwiaWNvbiIsImNsaWNrIiwic2V0RGF0YSIsIl90aGlzMiIsImdldERhdGEiLCJtZXRob2QiLCJ2YXJpYWJsZSIsIl90aGlzMyIsInRyYW5zZm9ybU1ldGhvZCIsIl90aGlzNCIsInZhbHVlcyIsImdldENvbnRlbnQiLCJwcmVmaXgiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiTm9kZSIsIk5vZGVNb2RhbCIsIkNvbnRleHRNZW51IiwiYWN0aXZlX3NjaGVtZV9jb2RlIiwic2NoZW1lIiwiY29udGV4dF9tZW51X29iamVjdCIsIndvcmtzcGFjZV93aWR0aCIsIndvcmtzcGFjZV9oZWlnaHQiLCJob2xkX3hfZmFjdG9yIiwiaG9sZF95X2ZhY3RvciIsIndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQiLCJwbGF0b194IiwicGxhdG9feSIsImFjdGl2ZV9ub2RlIiwibGFzdF9ob2xkX3giLCJsYXN0X2hvbGRfeSIsIm5vZGVzIiwiX3RoaXMkc2NoZW1lIiwibW91bnRlZCIsImRlZmluZVdvcmtzcGFjZVNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0U2NoZW1lIiwiYmVmb3JlVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCIkbmV4dFRpY2siLCJwYXJlbnRFbGVtZW50IiwiJGVsIiwicGFyZW50Tm9kZSIsImdsb2JhbCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic2FuaXRpemVOb2RlcyIsIm1hcCIsInNhdmVTY2hlbWUiLCJzY2hlbWVfZGF0YSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIm1vdmVQbGF0byIsImhvbGRfcGxhdG8iLCJkcm9wUGxhdG8iLCJtb3VzZW1vdmUiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlTm9kZSIsIiQiLCJjc3MiLCJtYXJnaW5MZWZ0IiwiYm9keV94X2ZhY3RvciIsIm1hcmdpblRvcCIsImJvZHlfeV9mYWN0b3IiLCJub2RlSG9sZCIsImJ1dHRvbiIsInNhdmVIb2xkUG9zaXRpb24iLCJmb2N1cyIsIm5vZGVEcm9wIiwid29ya3NwYWNlQ29udGV4dE1lbnUiLCJvcGVuQ29udGV4dE1lbnUiLCJjbG9zZUNvbnRleHRNZW51IiwiY2xpY2tDb250ZXh0TWVudUl0ZW0iLCJwdXNoIiwiY3JlYXRlVVVJRCIsImZuIiwiY3JlYXRlTGluayIsIldvcmtzcGFjZSIsInN0eWxlX21vZHVsZSIsInN0eWxlIiwibW9kdWxlIiwic3R5bGVfbW9kdWxlX3RpdGxlIiwibW9kdWxlX3RpdGxlIiwiJGRhdGEiLCJsZW5ndGgiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZVN0eWxlIiwiJG9wdGlvbnMiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfMSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Iiwib25DbGljayIsIiRldmVudCIsIl9ub3JtYWxpemVDbGFzcyIsIl90b0Rpc3BsYXlTdHJpbmciLCJ0ZXh0IiwiJHByb3BzIiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9Nb2R1bGUiLCJfaG9pc3RlZF8yIiwiX2hvaXN0ZWRfMyIsIl9ob2lzdGVkXzQiLCJfaG9pc3RlZF81IiwiX2NhY2hlIiwiX2N0eCIsIl9ob2lzdGVkXzYiLCJfaG9pc3RlZF83IiwiYWN0aXZlIiwidGl0bGUiLCJfaG9pc3RlZF84IiwiX2hvaXN0ZWRfOSIsIl9jb21wb25lbnRfRm9ybUZpdHRlciIsIiRzbG90cyIsIl9yZW5kZXJTbG90IiwiX2hvaXN0ZWRfMTAiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0NvbnRyb2xQYW5lbCIsIm9uTW91c2Vkb3duIiwiX3dpdGhNb2RpZmllcnMiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9uTW91c2V1cCIsIm9uTW91c2Vtb3ZlIiwib25EYmxjbGljayIsIl9jb21wb25lbnRfTm9kZSIsInJlZiIsImlkIiwib25Db250ZXh0bWVudSIsIl9jb21wb25lbnRfTm9kZU1vZGFsIiwib25DbG9zZSIsIm9uVXBkYXRlIiwiX2NvbXBvbmVudF9Db250ZXh0TWVudSIsIm9uQ2xpY2tfaXRlbSIsIl9jb21wb25lbnRfV29ya3NwYWNlIiwic2V0dGluZ3MiXSwic291cmNlUm9vdCI6IiJ9