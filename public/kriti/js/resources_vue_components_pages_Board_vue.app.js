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
/* harmony import */ var leader_line_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leader-line-vue */ "./node_modules/leader-line-vue/leader-line-vue.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./resources/vue/components/interface/Node.vue");
/* harmony import */ var _NodeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeModal */ "./resources/vue/components/interface/NodeModal.vue");
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ "./resources/vue/components/interface/ContextMenu.vue");
/* harmony import */ var linkerline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linkerline */ "./node_modules/linkerline/src/index.js");
 // https://github.com/anseki/leader-line




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Workspace",
  components: {
    Node: _Node__WEBPACK_IMPORTED_MODULE_1__["default"],
    // Компонент реализующий ноду
    NodeModal: _NodeModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    // Компонент рабочее окно нода
    ContextMenu: _ContextMenu__WEBPACK_IMPORTED_MODULE_3__["default"] // Контекстное меню
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
      last_hold_y: 0,
      // Позиция нода перед перемещением по Y

      lines: [],
      // Линии - связи
      lines_objects: []
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
    var _this = this;
    this.defineWorkspaceSize(); // Установить размеры окна
    window.addEventListener('resize', this.defineWorkspaceSize);
    this.getScheme(function () {
      _this.addLinks();
    });
  },
  beforeUnmount: function beforeUnmount() {
    // Перед размонтированием удалить слушатель размеров рабочей области
    window.removeEventListener('resize', this.defineWorkspaceSize);
  },
  methods: {
    // Определить размер рабочей области
    defineWorkspaceSize: function defineWorkspaceSize() {
      var _this2 = this;
      this.$nextTick(function () {
        var parentElement = _this2.$el.parentNode;
        // Записываем эти данные в глобальные переменные Kriti
        Kriti.global.workspace_width = _this2.workspace_width = parentElement.offsetWidth;
        Kriti.global.workspace_height = _this2.workspace_height = parentElement.offsetHeight;
        if (_this2.workspace_width && _this2.workspace_height) {
          _this2.workspace_size_is_defined = true;
        }
      });
    },
    // Загрузить схему
    getScheme: function getScheme(fn) {
      var _this3 = this;
      Kriti.api({
        url: 'kriti.api.Scheme:getScheme',
        data: {
          'scheme_code': this.active_scheme_code
        },
        then: function then(response) {
          _this3.scheme = response.scheme;
          if (fn) {
            fn();
          }
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
    setScheme: function setScheme() {
      var scheme = _.cloneDeep(this.scheme);
      scheme.nodes = this.sanitizeNodes();
      Kriti.api({
        url: 'kriti.api.Scheme:setScheme',
        data: {
          scheme_code: this.active_scheme_code,
          scheme_data: scheme
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
      this.setScheme(); // Сохранить состояние
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
        console.log('ok?');
        this.plato_x = this.mouse_x - this.hold_x_factor;
        this.plato_y = this.mouse_y - this.hold_y_factor;
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
        this.setScheme();
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
      var _this4 = this;
      if (code === 'openNodeSettings') {
        this.node = context;
      }
      if (code === 'cloneNode') {
        Kriti.api({
          data: {
            node: context
          },
          url: 'kriti.api.Node:cloneNode',
          then: function then(response) {
            var node = response.node;
            node.point.x += 100;
            node.point.y += 100;
            _this4.scheme.nodes.push(node);
          }
        });
      }
    },
    // Запросить генерацию uuid todo: Зачем???
    createUUID: function createUUID(fn) {
      Kriti.api({
        url: 'kriti.api.Node:createUUID',
        then: function then(response) {
          fn(response.uuid);
        }
      });
    },
    // Отобразить сцепки
    addLinks: function addLinks() {
      var _this5 = this;
      this.$nextTick(function () {
        _this5.scheme.links.map(function (link) {
          _this5.addLink(link);
        });
      });
    },
    // Добавить ссылку
    addLink: function addLink(link, save) {
      var plato = this.$refs['plato']; // Получить .workspace__plato DOM элемент
      var element_a = this.$refs[link[0]][0].$el;
      var element_b = this.$refs[link[1]][0].$el;
      var options = {
        parent: plato,
        start: element_a,
        end: element_b,
        startPlug: 'disc',
        endPlug: 'arrow1'
      };
      var line = new linkerline__WEBPACK_IMPORTED_MODULE_4__["default"](options);
      this.lines_objects.push({
        link: link,
        object: line
      });
    },
    correctLines: function correctLines() {
      this.lines_objects.map(function (item) {
        item.object.position();
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
    ref: "plato",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("margin-left:".concat($data.plato_x, "px;margin-top:").concat($data.plato_y, "px"))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.nodes, function (node) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Node, {
      node: node,
      ref_for: true,
      ref: node.uuid,
      id: node.uuid,
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
    }, null, 8 /* PROPS */, ["node", "id", "class", "onMousedown", "onMouseup", "onClick", "onContextmenu"]);
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

/***/ "./node_modules/leader-line-vue/leader-line-vue.js":
/*!*********************************************************!*\
  !*** ./node_modules/leader-line-vue/leader-line-vue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! LeaderLine v1.0.5 (c) anseki https://anseki.github.io/leader-line/ */
var LeaderLine = function () {
  "use strict";
  var te, g, y, S, _, o, t, h, f, p, a, i, l, v = "leader-line",
    M = 1,
    I = 2,
    C = 3,
    L = 4,
    n = {
      top: M,
      right: I,
      bottom: C,
      left: L
    },
    A = 1,
    V = 2,
    P = 3,
    N = 4,
    T = 5,
    m = {
      straight: A,
      arc: V,
      fluid: P,
      magnet: N,
      grid: T
    },
    ne = "behind",
    r = v + "-defs",
    s = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="leader-line-defs"><style><![CDATA[.leader-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:16px}#leader-line-defs{width:0;height:0;position:absolute;left:0;top:0}.leader-line-line-path{fill:none}.leader-line-mask-bg-rect{fill:#fff}.leader-line-caps-mask-anchor,.leader-line-caps-mask-marker-shape{fill:#000}.leader-line-caps-mask-anchor{stroke:#000}.leader-line-caps-mask-line,.leader-line-plugs-face{stroke:transparent}.leader-line-line-mask-shape{stroke:#fff}.leader-line-line-outline-mask-shape{stroke:#000}.leader-line-plug-mask-shape{fill:#fff;stroke:#000}.leader-line-plug-outline-mask-shape{fill:#000;stroke:#fff}.leader-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id="leader-line-disc" cx="0" cy="0" r="5"/><rect id="leader-line-square" x="-5" y="-5" width="10" height="10"/><polygon id="leader-line-arrow1" points="-8,-8 8,0 -8,8 -5,0"/><polygon id="leader-line-arrow2" points="-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5"/><polygon id="leader-line-arrow3" points="-4,-5 8,0 -4,5"/><g id="leader-line-hand"><path style="fill: #fcfcfc" d="M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z"/><path style="fill: black" d="M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z"/></g><g id="leader-line-crosshair"><path d="M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z"/><path d="M0 83.58-7.1 96 7.1 96Z"/><path d="M0-83.58 7.1-96-7.1-96"/><path d="M83.58 0 96 7.1 96-7.1Z"/><path d="M-83.58 0-96-7.1-96 7.1Z"/></g></defs></svg>',
    ae = {
      disc: {
        elmId: "leader-line-disc",
        noRotate: !0,
        bBox: {
          left: -5,
          top: -5,
          width: 10,
          height: 10,
          right: 5,
          bottom: 5
        },
        widthR: 2.5,
        heightR: 2.5,
        bCircle: 5,
        sideLen: 5,
        backLen: 5,
        overhead: 0,
        outlineBase: 1,
        outlineMax: 4
      },
      square: {
        elmId: "leader-line-square",
        noRotate: !0,
        bBox: {
          left: -5,
          top: -5,
          width: 10,
          height: 10,
          right: 5,
          bottom: 5
        },
        widthR: 2.5,
        heightR: 2.5,
        bCircle: 5,
        sideLen: 5,
        backLen: 5,
        overhead: 0,
        outlineBase: 1,
        outlineMax: 4
      },
      arrow1: {
        elmId: "leader-line-arrow1",
        bBox: {
          left: -8,
          top: -8,
          width: 16,
          height: 16,
          right: 8,
          bottom: 8
        },
        widthR: 4,
        heightR: 4,
        bCircle: 8,
        sideLen: 8,
        backLen: 8,
        overhead: 8,
        outlineBase: 2,
        outlineMax: 1.5
      },
      arrow2: {
        elmId: "leader-line-arrow2",
        bBox: {
          left: -7,
          top: -8,
          width: 11,
          height: 16,
          right: 4,
          bottom: 8
        },
        widthR: 2.75,
        heightR: 4,
        bCircle: 8,
        sideLen: 8,
        backLen: 7,
        overhead: 4,
        outlineBase: 1,
        outlineMax: 1.75
      },
      arrow3: {
        elmId: "leader-line-arrow3",
        bBox: {
          left: -4,
          top: -5,
          width: 12,
          height: 10,
          right: 8,
          bottom: 5
        },
        widthR: 3,
        heightR: 2.5,
        bCircle: 8,
        sideLen: 5,
        backLen: 4,
        overhead: 8,
        outlineBase: 1,
        outlineMax: 2.5
      },
      hand: {
        elmId: "leader-line-hand",
        bBox: {
          left: -3,
          top: -12,
          width: 40,
          height: 24,
          right: 37,
          bottom: 12
        },
        widthR: 10,
        heightR: 6,
        bCircle: 37,
        sideLen: 12,
        backLen: 3,
        overhead: 37
      },
      crosshair: {
        elmId: "leader-line-crosshair",
        noRotate: !0,
        bBox: {
          left: -96,
          top: -96,
          width: 192,
          height: 192,
          right: 96,
          bottom: 96
        },
        widthR: 48,
        heightR: 48,
        bCircle: 96,
        sideLen: 96,
        backLen: 96,
        overhead: 0
      }
    },
    E = {
      behind: ne,
      disc: "disc",
      square: "square",
      arrow1: "arrow1",
      arrow2: "arrow2",
      arrow3: "arrow3",
      hand: "hand",
      crosshair: "crosshair"
    },
    ie = {
      disc: "disc",
      square: "square",
      arrow1: "arrow1",
      arrow2: "arrow2",
      arrow3: "arrow3",
      hand: "hand",
      crosshair: "crosshair"
    },
    W = [M, I, C, L],
    x = "auto",
    oe = {
      x: "left",
      y: "top",
      width: "width",
      height: "height"
    },
    B = 80,
    R = 4,
    F = 5,
    G = 120,
    D = 8,
    z = 3.75,
    j = 10,
    H = 30,
    U = .5522847,
    Z = .25 * Math.PI,
    u = /^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,
    b = "http://www.w3.org/2000/svg",
    e = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style && !window.navigator.msPointerEnabled,
    le = !e && !!document.uniqueID,
    re = "MozAppearance" in document.documentElement.style,
    se = !(e || re || !window.chrome || !window.CSS),
    ue = !e && !le && !re && !se && !window.chrome && "WebkitAppearance" in document.documentElement.style,
    he = le || e ? .2 : .1,
    pe = {
      path: P,
      lineColor: "coral",
      lineSize: 4,
      plugSE: [ne, "arrow1"],
      plugSizeSE: [1, 1],
      lineOutlineEnabled: !1,
      lineOutlineColor: "indianred",
      lineOutlineSize: .25,
      plugOutlineEnabledSE: [!1, !1],
      plugOutlineSizeSE: [1, 1]
    },
    k = (a = {}.toString, i = {}.hasOwnProperty.toString, l = i.call(Object), function (e) {
      var t, n;
      return e && "[object Object]" === a.call(e) && (!(t = Object.getPrototypeOf(e)) || (n = t.hasOwnProperty("constructor") && t.constructor) && "function" == typeof n && i.call(n) === l)
    }),
    w = Number.isFinite || function (e) {
      return "number" == typeof e && window.isFinite(e)
    },
    c = function () {
      var e, x = {
          ease: [.25, .1, .25, 1],
          linear: [0, 0, 1, 1],
          "ease-in": [.42, 0, 1, 1],
          "ease-out": [0, 0, .58, 1],
          "ease-in-out": [.42, 0, .58, 1]
        },
        b = 1e3 / 60 / 2,
        t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
          setTimeout(e, b)
        },
        n = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
          clearTimeout(e)
        },
        a = Number.isFinite || function (e) {
          return "number" == typeof e && window.isFinite(e)
        },
        k = [],
        w = 0;

      function l() {
        var i = Date.now(),
          o = !1;
        e && (n.call(window, e), e = null), k.forEach(function (e) {
          var t, n, a;
          if (e.framesStart) {
            if ((t = i - e.framesStart) >= e.duration && e.count && e.loopsLeft <= 1) return a = e.frames[e.lastFrame = e.reverse ? 0 : e.frames.length - 1], e.frameCallback(a.value, !0, a.timeRatio, a.outputRatio), void(e.framesStart = null);
            if (t > e.duration) {
              if (n = Math.floor(t / e.duration), e.count) {
                if (n >= e.loopsLeft) return a = e.frames[e.lastFrame = e.reverse ? 0 : e.frames.length - 1], e.frameCallback(a.value, !0, a.timeRatio, a.outputRatio), void(e.framesStart = null);
                e.loopsLeft -= n
              }
              e.framesStart += e.duration * n, t = i - e.framesStart
            }
            e.reverse && (t = e.duration - t), a = e.frames[e.lastFrame = Math.round(t / b)], !1 !== e.frameCallback(a.value, !1, a.timeRatio, a.outputRatio) ? o = !0 : e.framesStart = null
          }
        }), o && (e = t.call(window, l))
      }

      function O(e, t) {
        e.framesStart = Date.now(), null != t && (e.framesStart -= e.duration * (e.reverse ? 1 - t : t)), e.loopsLeft = e.count, e.lastFrame = null, l()
      }
      return {
        add: function (n, e, t, a, i, o, l) {
          var r, s, u, h, p, c, d, f, y, S, m, g, _, v = ++w;

          function E(e, t) {
            return {
              value: n(t),
              timeRatio: e,
              outputRatio: t
            }
          }
          if ("string" == typeof i && (i = x[i]), n = n || function () {}, t < b) s = [E(0, 0), E(1, 1)];
          else {
            if (u = b / t, s = [E(0, 0)], 0 === i[0] && 0 === i[1] && 1 === i[2] && 1 === i[3])
              for (p = u; p <= 1; p += u) s.push(E(p, p));
            else
              for (c = h = (p = u) / 10; c <= 1; c += h) void 0, S = (y = (f = c) * f) * f, _ = 3 * (m = 1 - f) * y, p <= (d = {
                x: (g = 3 * (m * m) * f) * i[0] + _ * i[2] + S,
                y: g * i[1] + _ * i[3] + S
              }).x && (s.push(E(d.x, d.y)), p += u);
            s.push(E(1, 1))
          }
          return r = {
            animId: v,
            frameCallback: e,
            duration: t,
            count: a,
            frames: s,
            reverse: !!o
          }, k.push(r), !1 !== l && O(r, l), v
        },
        remove: function (n) {
          var a;
          k.some(function (e, t) {
            return e.animId === n && (a = t, !(e.framesStart = null))
          }) && k.splice(a, 1)
        },
        start: function (t, n, a) {
          k.some(function (e) {
            return e.animId === t && (e.reverse = !!n, O(e, a), !0)
          })
        },
        stop: function (t, n) {
          var a;
          return k.some(function (e) {
            return e.animId === t && (n ? null != e.lastFrame && (a = e.frames[e.lastFrame].timeRatio) : (a = (Date.now() - e.framesStart) / e.duration, e.reverse && (a = 1 - a), a < 0 ? a = 0 : 1 < a && (a = 1)), !(e.framesStart = null))
          }), a
        },
        validTiming: function (t) {
          return "string" == typeof t ? x[t] : Array.isArray(t) && [0, 1, 2, 3].every(function (e) {
            return a(t[e]) && 0 <= t[e] && t[e] <= 1
          }) ? [t[0], t[1], t[2], t[3]] : null
        }
      }
    }(),
    d = function (e) {
      e.SVGPathElement.prototype.getPathData && e.SVGPathElement.prototype.setPathData || function () {
        var i = {
            Z: "Z",
            M: "M",
            L: "L",
            C: "C",
            Q: "Q",
            A: "A",
            H: "H",
            V: "V",
            S: "S",
            T: "T",
            z: "Z",
            m: "m",
            l: "l",
            c: "c",
            q: "q",
            a: "a",
            h: "h",
            v: "v",
            s: "s",
            t: "t"
          },
          o = function (e) {
            this._string = e, this._currentIndex = 0, this._endIndex = this._string.length, this._prevCommand = null, this._skipOptionalSpaces()
          },
          l = -1 !== e.navigator.userAgent.indexOf("MSIE ");
        o.prototype = {
          parseSegment: function () {
            var e = this._string[this._currentIndex],
              t = i[e] ? i[e] : null;
            if (null === t) {
              if (null === this._prevCommand) return null;
              if (null === (t = ("+" === e || "-" === e || "." === e || "0" <= e && e <= "9") && "Z" !== this._prevCommand ? "M" === this._prevCommand ? "L" : "m" === this._prevCommand ? "l" : this._prevCommand : null)) return null
            } else this._currentIndex += 1;
            var n = null,
              a = (this._prevCommand = t).toUpperCase();
            return "H" === a || "V" === a ? n = [this._parseNumber()] : "M" === a || "L" === a || "T" === a ? n = [this._parseNumber(), this._parseNumber()] : "S" === a || "Q" === a ? n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()] : "C" === a ? n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()] : "A" === a ? n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseArcFlag(), this._parseArcFlag(), this._parseNumber(), this._parseNumber()] : "Z" === a && (this._skipOptionalSpaces(), n = []), null === n || 0 <= n.indexOf(null) ? null : {
              type: t,
              values: n
            }
          },
          hasMoreData: function () {
            return this._currentIndex < this._endIndex
          },
          peekSegmentType: function () {
            var e = this._string[this._currentIndex];
            return i[e] ? i[e] : null
          },
          initialCommandIsMoveTo: function () {
            if (!this.hasMoreData()) return !0;
            var e = this.peekSegmentType();
            return "M" === e || "m" === e
          },
          _isCurrentSpace: function () {
            var e = this._string[this._currentIndex];
            return e <= " " && (" " === e || "\n" === e || "\t" === e || "\r" === e || "\f" === e)
          },
          _skipOptionalSpaces: function () {
            for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex += 1;
            return this._currentIndex < this._endIndex
          },
          _skipOptionalSpacesOrDelimiter: function () {
            return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," !== this._string[this._currentIndex]) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," === this._string[this._currentIndex] && (this._currentIndex += 1, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
          },
          _parseNumber: function () {
            var e = 0,
              t = 0,
              n = 1,
              a = 0,
              i = 1,
              o = 1,
              l = this._currentIndex;
            if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" === this._string[this._currentIndex] ? this._currentIndex += 1 : this._currentIndex < this._endIndex && "-" === this._string[this._currentIndex] && (this._currentIndex += 1, i = -1), this._currentIndex === this._endIndex || (this._string[this._currentIndex] < "0" || "9" < this._string[this._currentIndex]) && "." !== this._string[this._currentIndex]) return null;
            for (var r = this._currentIndex; this._currentIndex < this._endIndex && "0" <= this._string[this._currentIndex] && this._string[this._currentIndex] <= "9";) this._currentIndex += 1;
            if (this._currentIndex !== r)
              for (var s = this._currentIndex - 1, u = 1; r <= s;) t += u * (this._string[s] - "0"), s -= 1, u *= 10;
            if (this._currentIndex < this._endIndex && "." === this._string[this._currentIndex]) {
              if (this._currentIndex += 1, this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || "9" < this._string[this._currentIndex]) return null;
              for (; this._currentIndex < this._endIndex && "0" <= this._string[this._currentIndex] && this._string[this._currentIndex] <= "9";) n *= 10, a += (this._string.charAt(this._currentIndex) - "0") / n, this._currentIndex += 1
            }
            if (this._currentIndex !== l && this._currentIndex + 1 < this._endIndex && ("e" === this._string[this._currentIndex] || "E" === this._string[this._currentIndex]) && "x" !== this._string[this._currentIndex + 1] && "m" !== this._string[this._currentIndex + 1]) {
              if (this._currentIndex += 1, "+" === this._string[this._currentIndex] ? this._currentIndex += 1 : "-" === this._string[this._currentIndex] && (this._currentIndex += 1, o = -1), this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || "9" < this._string[this._currentIndex]) return null;
              for (; this._currentIndex < this._endIndex && "0" <= this._string[this._currentIndex] && this._string[this._currentIndex] <= "9";) e *= 10, e += this._string[this._currentIndex] - "0", this._currentIndex += 1
            }
            var h = t + a;
            return h *= i, e && (h *= Math.pow(10, o * e)), l === this._currentIndex ? null : (this._skipOptionalSpacesOrDelimiter(), h)
          },
          _parseArcFlag: function () {
            if (this._currentIndex >= this._endIndex) return null;
            var e = null,
              t = this._string[this._currentIndex];
            if (this._currentIndex += 1, "0" === t) e = 0;
            else {
              if ("1" !== t) return null;
              e = 1
            }
            return this._skipOptionalSpacesOrDelimiter(), e
          }
        };
        var a = function (e) {
            if (!e || 0 === e.length) return [];
            var t = new o(e),
              n = [];
            if (t.initialCommandIsMoveTo())
              for (; t.hasMoreData();) {
                var a = t.parseSegment();
                if (null === a) break;
                n.push(a)
              }
            return n
          },
          n = e.SVGPathElement.prototype.setAttribute,
          r = e.SVGPathElement.prototype.removeAttribute,
          d = e.Symbol ? e.Symbol() : "__cachedPathData",
          f = e.Symbol ? e.Symbol() : "__cachedNormalizedPathData",
          U = function (e, t, n, a, i, o, l, r, s, u) {
            var h, p, c, d, f, y = function (e, t, n) {
                return {
                  x: e * Math.cos(n) - t * Math.sin(n),
                  y: e * Math.sin(n) + t * Math.cos(n)
                }
              },
              S = (h = l, Math.PI * h / 180),
              m = [];
            if (u) p = u[0], c = u[1], d = u[2], f = u[3];
            else {
              var g = y(e, t, -S);
              e = g.x, t = g.y;
              var _ = y(n, a, -S),
                v = (e - (n = _.x)) / 2,
                E = (t - (a = _.y)) / 2,
                x = v * v / (i * i) + E * E / (o * o);
              1 < x && (i *= x = Math.sqrt(x), o *= x);
              var b = i * i,
                k = o * o,
                w = b * k - b * E * E - k * v * v,
                O = b * E * E + k * v * v,
                M = (r === s ? -1 : 1) * Math.sqrt(Math.abs(w / O));
              d = M * i * E / o + (e + n) / 2, f = M * -o * v / i + (t + a) / 2, p = Math.asin(parseFloat(((t - f) / o).toFixed(9))), c = Math.asin(parseFloat(((a - f) / o).toFixed(9))), e < d && (p = Math.PI - p), n < d && (c = Math.PI - c), p < 0 && (p = 2 * Math.PI + p), c < 0 && (c = 2 * Math.PI + c), s && c < p && (p -= 2 * Math.PI), !s && p < c && (c -= 2 * Math.PI)
            }
            var I = c - p;
            if (Math.abs(I) > 120 * Math.PI / 180) {
              var C = c,
                L = n,
                A = a;
              c = s && p < c ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, n = d + i * Math.cos(c), a = f + o * Math.sin(c), m = U(n, a, L, A, i, o, l, 0, s, [c, C, d, f])
            }
            I = c - p;
            var V = Math.cos(p),
              P = Math.sin(p),
              N = Math.cos(c),
              T = Math.sin(c),
              W = Math.tan(I / 4),
              B = 4 / 3 * i * W,
              R = 4 / 3 * o * W,
              F = [e, t],
              G = [e + B * P, t - R * V],
              D = [n + B * T, a - R * N],
              z = [n, a];
            if (G[0] = 2 * F[0] - G[0], G[1] = 2 * F[1] - G[1], u) return [G, D, z].concat(m);
            m = [G, D, z].concat(m).join().split(",");
            var j = [],
              H = [];
            return m.forEach(function (e, t) {
              t % 2 ? H.push(y(m[t - 1], m[t], S).y) : H.push(y(m[t], m[t + 1], S).x), 6 === H.length && (j.push(H), H = [])
            }), j
          },
          y = function (e) {
            return e.map(function (e) {
              return {
                type: e.type,
                values: Array.prototype.slice.call(e.values)
              }
            })
          },
          S = function (e) {
            var S = [],
              m = null,
              g = null,
              _ = null,
              v = null,
              E = null,
              x = null,
              b = null;
            return e.forEach(function (e) {
              if ("M" === e.type) {
                var t = e.values[0],
                  n = e.values[1];
                S.push({
                  type: "M",
                  values: [t, n]
                }), v = x = t, E = b = n
              } else if ("C" === e.type) {
                var a = e.values[0],
                  i = e.values[1],
                  o = e.values[2],
                  l = e.values[3];
                t = e.values[4], n = e.values[5];
                S.push({
                  type: "C",
                  values: [a, i, o, l, t, n]
                }), g = o, _ = l, v = t, E = n
              } else if ("L" === e.type) {
                t = e.values[0], n = e.values[1];
                S.push({
                  type: "L",
                  values: [t, n]
                }), v = t, E = n
              } else if ("H" === e.type) {
                t = e.values[0];
                S.push({
                  type: "L",
                  values: [t, E]
                }), v = t
              } else if ("V" === e.type) {
                n = e.values[0];
                S.push({
                  type: "L",
                  values: [v, n]
                }), E = n
              } else if ("S" === e.type) {
                o = e.values[0], l = e.values[1], t = e.values[2], n = e.values[3];
                "C" === m || "S" === m ? (r = v + (v - g), s = E + (E - _)) : (r = v, s = E), S.push({
                  type: "C",
                  values: [r, s, o, l, t, n]
                }), g = o, _ = l, v = t, E = n
              } else if ("T" === e.type) {
                t = e.values[0], n = e.values[1];
                "Q" === m || "T" === m ? (a = v + (v - g), i = E + (E - _)) : (a = v, i = E);
                var r = v + 2 * (a - v) / 3,
                  s = E + 2 * (i - E) / 3,
                  u = t + 2 * (a - t) / 3,
                  h = n + 2 * (i - n) / 3;
                S.push({
                  type: "C",
                  values: [r, s, u, h, t, n]
                }), g = a, _ = i, v = t, E = n
              } else if ("Q" === e.type) {
                a = e.values[0], i = e.values[1], t = e.values[2], n = e.values[3], r = v + 2 * (a - v) / 3, s = E + 2 * (i - E) / 3, u = t + 2 * (a - t) / 3, h = n + 2 * (i - n) / 3;
                S.push({
                  type: "C",
                  values: [r, s, u, h, t, n]
                }), g = a, _ = i, v = t, E = n
              } else if ("A" === e.type) {
                var p = e.values[0],
                  c = e.values[1],
                  d = e.values[2],
                  f = e.values[3],
                  y = e.values[4];
                t = e.values[5], n = e.values[6];
                if (0 === p || 0 === c) S.push({
                  type: "C",
                  values: [v, E, t, n, t, n]
                }), v = t, E = n;
                else if (v !== t || E !== n) U(v, E, t, n, p, c, d, f, y).forEach(function (e) {
                  S.push({
                    type: "C",
                    values: e
                  }), v = t, E = n
                })
              } else "Z" === e.type && (S.push(e), v = x, E = b);
              m = e.type
            }), S
          };
        e.SVGPathElement.prototype.setAttribute = function (e, t) {
          "d" === e && (this[d] = null, this[f] = null), n.call(this, e, t)
        }, e.SVGPathElement.prototype.removeAttribute = function (e, t) {
          "d" === e && (this[d] = null, this[f] = null), r.call(this, e)
        }, e.SVGPathElement.prototype.getPathData = function (e) {
          if (e && e.normalize) {
            if (this[f]) return y(this[f]);
            this[d] ? n = y(this[d]) : (n = a(this.getAttribute("d") || ""), this[d] = y(n));
            var t = S((s = [], c = p = h = u = null, n.forEach(function (e) {
              var t = e.type;
              if ("M" === t) {
                var n = e.values[0],
                  a = e.values[1];
                s.push({
                  type: "M",
                  values: [n, a]
                }), u = p = n, h = c = a
              } else if ("m" === t) n = u + e.values[0], a = h + e.values[1], s.push({
                type: "M",
                values: [n, a]
              }), u = p = n, h = c = a;
              else if ("L" === t) n = e.values[0], a = e.values[1], s.push({
                type: "L",
                values: [n, a]
              }), u = n, h = a;
              else if ("l" === t) n = u + e.values[0], a = h + e.values[1], s.push({
                type: "L",
                values: [n, a]
              }), u = n, h = a;
              else if ("C" === t) {
                var i = e.values[0],
                  o = e.values[1],
                  l = e.values[2],
                  r = e.values[3];
                n = e.values[4], a = e.values[5], s.push({
                  type: "C",
                  values: [i, o, l, r, n, a]
                }), u = n, h = a
              } else "c" === t ? (i = u + e.values[0], o = h + e.values[1], l = u + e.values[2], r = h + e.values[3], n = u + e.values[4], a = h + e.values[5], s.push({
                type: "C",
                values: [i, o, l, r, n, a]
              }), u = n, h = a) : "Q" === t ? (i = e.values[0], o = e.values[1], n = e.values[2], a = e.values[3], s.push({
                type: "Q",
                values: [i, o, n, a]
              }), u = n, h = a) : "q" === t ? (i = u + e.values[0], o = h + e.values[1], n = u + e.values[2], a = h + e.values[3], s.push({
                type: "Q",
                values: [i, o, n, a]
              }), u = n, h = a) : "A" === t ? (n = e.values[5], a = e.values[6], s.push({
                type: "A",
                values: [e.values[0], e.values[1], e.values[2], e.values[3], e.values[4], n, a]
              }), u = n, h = a) : "a" === t ? (n = u + e.values[5], a = h + e.values[6], s.push({
                type: "A",
                values: [e.values[0], e.values[1], e.values[2], e.values[3], e.values[4], n, a]
              }), u = n, h = a) : "H" === t ? (n = e.values[0], s.push({
                type: "H",
                values: [n]
              }), u = n) : "h" === t ? (n = u + e.values[0], s.push({
                type: "H",
                values: [n]
              }), u = n) : "V" === t ? (a = e.values[0], s.push({
                type: "V",
                values: [a]
              }), h = a) : "v" === t ? (a = h + e.values[0], s.push({
                type: "V",
                values: [a]
              }), h = a) : "S" === t ? (l = e.values[0], r = e.values[1], n = e.values[2], a = e.values[3], s.push({
                type: "S",
                values: [l, r, n, a]
              }), u = n, h = a) : "s" === t ? (l = u + e.values[0], r = h + e.values[1], n = u + e.values[2], a = h + e.values[3], s.push({
                type: "S",
                values: [l, r, n, a]
              }), u = n, h = a) : "T" === t ? (n = e.values[0], a = e.values[1], s.push({
                type: "T",
                values: [n, a]
              }), u = n, h = a) : "t" === t ? (n = u + e.values[0], a = h + e.values[1], s.push({
                type: "T",
                values: [n, a]
              }), u = n, h = a) : "Z" !== t && "z" !== t || (s.push({
                type: "Z",
                values: []
              }), u = p, h = c)
            }), s));
            return this[f] = y(t), t
          }
          if (this[d]) return y(this[d]);
          var s, u, h, p, c, n = a(this.getAttribute("d") || "");
          return this[d] = y(n), n
        }, e.SVGPathElement.prototype.setPathData = function (e) {
          if (0 === e.length) l ? this.setAttribute("d", "") : this.removeAttribute("d");
          else {
            for (var t = "", n = 0, a = e.length; n < a; n += 1) {
              var i = e[n];
              0 < n && (t += " "), t += i.type, i.values && 0 < i.values.length && (t += " " + i.values.join(" "))
            }
            this.setAttribute("d", t)
          }
        }, e.SVGRectElement.prototype.getPathData = function (e) {
          var t = this.x.baseVal.value,
            n = this.y.baseVal.value,
            a = this.width.baseVal.value,
            i = this.height.baseVal.value,
            o = this.hasAttribute("rx") ? this.rx.baseVal.value : this.ry.baseVal.value,
            l = this.hasAttribute("ry") ? this.ry.baseVal.value : this.rx.baseVal.value;
          a / 2 < o && (o = a / 2), i / 2 < l && (l = i / 2);
          var r = [{
            type: "M",
            values: [t + o, n]
          }, {
            type: "H",
            values: [t + a - o]
          }, {
            type: "A",
            values: [o, l, 0, 0, 1, t + a, n + l]
          }, {
            type: "V",
            values: [n + i - l]
          }, {
            type: "A",
            values: [o, l, 0, 0, 1, t + a - o, n + i]
          }, {
            type: "H",
            values: [t + o]
          }, {
            type: "A",
            values: [o, l, 0, 0, 1, t, n + i - l]
          }, {
            type: "V",
            values: [n + l]
          }, {
            type: "A",
            values: [o, l, 0, 0, 1, t + o, n]
          }, {
            type: "Z",
            values: []
          }];
          return r = r.filter(function (e) {
            return "A" !== e.type || 0 !== e.values[0] && 0 !== e.values[1]
          }), e && !0 === e.normalize && (r = S(r)), r
        }, e.SVGCircleElement.prototype.getPathData = function (e) {
          var t = this.cx.baseVal.value,
            n = this.cy.baseVal.value,
            a = this.r.baseVal.value,
            i = [{
              type: "M",
              values: [t + a, n]
            }, {
              type: "A",
              values: [a, a, 0, 0, 1, t, n + a]
            }, {
              type: "A",
              values: [a, a, 0, 0, 1, t - a, n]
            }, {
              type: "A",
              values: [a, a, 0, 0, 1, t, n - a]
            }, {
              type: "A",
              values: [a, a, 0, 0, 1, t + a, n]
            }, {
              type: "Z",
              values: []
            }];
          return e && !0 === e.normalize && (i = S(i)), i
        }, e.SVGEllipseElement.prototype.getPathData = function (e) {
          var t = this.cx.baseVal.value,
            n = this.cy.baseVal.value,
            a = this.rx.baseVal.value,
            i = this.ry.baseVal.value,
            o = [{
              type: "M",
              values: [t + a, n]
            }, {
              type: "A",
              values: [a, i, 0, 0, 1, t, n + i]
            }, {
              type: "A",
              values: [a, i, 0, 0, 1, t - a, n]
            }, {
              type: "A",
              values: [a, i, 0, 0, 1, t, n - i]
            }, {
              type: "A",
              values: [a, i, 0, 0, 1, t + a, n]
            }, {
              type: "Z",
              values: []
            }];
          return e && !0 === e.normalize && (o = S(o)), o
        }, e.SVGLineElement.prototype.getPathData = function () {
          return [{
            type: "M",
            values: [this.x1.baseVal.value, this.y1.baseVal.value]
          }, {
            type: "L",
            values: [this.x2.baseVal.value, this.y2.baseVal.value]
          }]
        }, e.SVGPolylineElement.prototype.getPathData = function () {
          for (var e = [], t = 0; t < this.points.numberOfItems; t += 1) {
            var n = this.points.getItem(t);
            e.push({
              type: 0 === t ? "M" : "L",
              values: [n.x, n.y]
            })
          }
          return e
        }, e.SVGPolygonElement.prototype.getPathData = function () {
          for (var e = [], t = 0; t < this.points.numberOfItems; t += 1) {
            var n = this.points.getItem(t);
            e.push({
              type: 0 === t ? "M" : "L",
              values: [n.x, n.y]
            })
          }
          return e.push({
            type: "Z",
            values: []
          }), e
        }
      }()
    },
    O = function (n) {
      var a = {};

      function i(e) {
        if (a[e]) return a[e].exports;
        var t = a[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
      }
      return i.m = n, i.c = a, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n
        })
      }, i.r = function (e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default
        } : function () {
          return e
        };
        return i.d(t, "a", t), t
      }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, i.p = "", i(i.s = 0)
    }([function (e, t, n) {
      n.r(t);
      var a = 500,
        i = [],
        o = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
          return setTimeout(e, 1e3 / 60)
        },
        l = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
          return clearTimeout(e)
        },
        r = void 0,
        s = Date.now();

      function u() {
        var t = void 0,
          e = void 0;
        r && (l.call(window, r), r = null), i.forEach(function (e) {
          e.event && (e.listener(e.event), e.event = null, t = !0)
        }), t ? (s = Date.now(), e = !0) : Date.now() - s < a && (e = !0), e && (r = o.call(window, u))
      }

      function h(n) {
        var a = -1;
        return i.some(function (e, t) {
          return e.listener === n && (a = t, !0)
        }), a
      }
      var p = {
        add: function (e) {
          var t = void 0;
          return -1 === h(e) ? (i.push(t = {
            listener: e
          }), function (e) {
            t.event = e, r || u()
          }) : null
        },
        remove: function (e) {
          var t; - 1 < (t = h(e)) && (i.splice(t, 1), !i.length && r && (l.call(window, r), r = null))
        }
      };
      t.default = p
    }]).default,
    Y = {
      line_altColor: {
        iniValue: !1
      },
      line_color: {},
      line_colorTra: {
        iniValue: !1
      },
      line_strokeWidth: {},
      plug_enabled: {
        iniValue: !1
      },
      plug_enabledSE: {
        hasSE: !0,
        iniValue: !1
      },
      plug_plugSE: {
        hasSE: !0,
        iniValue: ne
      },
      plug_colorSE: {
        hasSE: !0
      },
      plug_colorTraSE: {
        hasSE: !0,
        iniValue: !1
      },
      plug_markerWidthSE: {
        hasSE: !0
      },
      plug_markerHeightSE: {
        hasSE: !0
      },
      lineOutline_enabled: {
        iniValue: !1
      },
      lineOutline_color: {},
      lineOutline_colorTra: {
        iniValue: !1
      },
      lineOutline_strokeWidth: {},
      lineOutline_inStrokeWidth: {},
      plugOutline_enabledSE: {
        hasSE: !0,
        iniValue: !1
      },
      plugOutline_plugSE: {
        hasSE: !0,
        iniValue: ne
      },
      plugOutline_colorSE: {
        hasSE: !0
      },
      plugOutline_colorTraSE: {
        hasSE: !0,
        iniValue: !1
      },
      plugOutline_strokeWidthSE: {
        hasSE: !0
      },
      plugOutline_inStrokeWidthSE: {
        hasSE: !0
      },
      position_socketXYSE: {
        hasSE: !0,
        hasProps: !0
      },
      position_plugOverheadSE: {
        hasSE: !0
      },
      position_path: {},
      position_lineStrokeWidth: {},
      position_socketGravitySE: {
        hasSE: !0
      },
      path_pathData: {},
      path_edge: {
        hasProps: !0
      },
      viewBox_bBox: {
        hasProps: !0
      },
      viewBox_plugBCircleSE: {
        hasSE: !0
      },
      lineMask_enabled: {
        iniValue: !1
      },
      lineMask_outlineMode: {
        iniValue: !1
      },
      lineMask_x: {},
      lineMask_y: {},
      lineOutlineMask_x: {},
      lineOutlineMask_y: {},
      maskBGRect_x: {},
      maskBGRect_y: {},
      capsMaskAnchor_enabledSE: {
        hasSE: !0,
        iniValue: !1
      },
      capsMaskAnchor_pathDataSE: {
        hasSE: !0
      },
      capsMaskAnchor_strokeWidthSE: {
        hasSE: !0
      },
      capsMaskMarker_enabled: {
        iniValue: !1
      },
      capsMaskMarker_enabledSE: {
        hasSE: !0,
        iniValue: !1
      },
      capsMaskMarker_plugSE: {
        hasSE: !0,
        iniValue: ne
      },
      capsMaskMarker_markerWidthSE: {
        hasSE: !0
      },
      capsMaskMarker_markerHeightSE: {
        hasSE: !0
      },
      caps_enabled: {
        iniValue: !1
      },
      attach_plugSideLenSE: {
        hasSE: !0
      },
      attach_plugBackLenSE: {
        hasSE: !0
      }
    },
    X = {
      show_on: {},
      show_effect: {},
      show_animOptions: {},
      show_animId: {},
      show_inAnim: {}
    },
    q = "fade",
    Q = [],
    K = {},
    J = 0,
    $ = {},
    ee = 0;

  function ce(t, n) {
    var e, a;
    return typeof t != typeof n || (e = k(t) ? "obj" : Array.isArray(t) ? "array" : "") != (k(n) ? "obj" : Array.isArray(n) ? "array" : "") || ("obj" === e ? ce(a = Object.keys(t).sort(), Object.keys(n).sort()) || a.some(function (e) {
      return ce(t[e], n[e])
    }) : "array" === e ? t.length !== n.length || t.some(function (e, t) {
      return ce(e, n[t])
    }) : t !== n)
  }

  function de(n) {
    return n ? k(n) ? Object.keys(n).reduce(function (e, t) {
      return e[t] = de(n[t]), e
    }, {}) : Array.isArray(n) ? n.map(de) : n : n
  }

  function fe(e) {
    var t, n, a, i = 1,
      o = e = (e + "").trim();

    function l(e) {
      var t = 1,
        n = u.exec(e);
      return n && (t = parseFloat(n[1]), n[2] ? t = 0 <= t && t <= 100 ? t / 100 : 1 : (t < 0 || 1 < t) && (t = 1)), t
    }
    return (t = /^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e)) ? (n = t[1].toLowerCase(), a = t[2].trim().split(/\s*,\s*/), "rgba" === n && 4 === a.length ? (i = l(a[3]), o = "rgb(" + a.slice(0, 3).join(", ") + ")") : "hsla" === n && 4 === a.length ? (i = l(a[3]), o = "hsl(" + a.slice(0, 3).join(", ") + ")") : "hwb" === n && 4 === a.length ? (i = l(a[3]), o = "hwb(" + a.slice(0, 3).join(", ") + ")") : "gray" === n && 2 === a.length ? (i = l(a[1]), o = "gray(" + a[0] + ")") : "device-cmyk" === n && 5 <= a.length && (i = l(a[4]), o = "device-cmyk(" + a.slice(0, 4).join(", ") + ")")) : (t = /^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e)) ? t[1] ? (i = parseInt(t[2], 16) / 255, o = "#" + t[1]) : (i = parseInt(t[4] + t[4], 16) / 255, o = "#" + t[3]) : "transparent" === e.toLocaleLowerCase() && (i = 0), [i, o]
  }

  function ye(e) {
    return !(!e || e.nodeType !== Node.ELEMENT_NODE || "function" != typeof e.getBoundingClientRect)
  }

  function Se(e, t) {
    var n, a, i, o, l = {};
    if (!(i = e.ownerDocument)) return console.error("Cannot get document that contains the element."), null;
    if (e.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_DISCONNECTED) return console.error("A disconnected element was passed."), null;
    for (a in n = e.getBoundingClientRect()) l[a] = n[a];
    if (!t) {
      if (!(o = i.defaultView)) return console.error("Cannot get window that contains the element."), null;
      l.left += o.pageXOffset, l.right += o.pageXOffset, l.top += o.pageYOffset, l.bottom += o.pageYOffset
    }
    return l
  }

  function me(e, t) {
    var n, a, i = [],
      o = e;
    for (t = t || window;;) {
      if (!(n = o.ownerDocument)) return console.error("Cannot get document that contains the element."), null;
      if (!(a = n.defaultView)) return console.error("Cannot get window that contains the element."), null;
      if (a === t) break;
      if (!(o = a.frameElement)) return console.error("`baseWindow` was not found."), null;
      i.unshift(o)
    }
    return i
  }

  function ge(e, t) {
    var n, a, o = 0,
      l = 0;
    return (a = me(e, t = t || window)) ? a.length ? (a.forEach(function (e, t) {
      var n, a, i = Se(e, 0 < t);
      o += i.left, l += i.top, a = (n = e).ownerDocument.defaultView.getComputedStyle(n, ""), i = {
        left: n.clientLeft + parseFloat(a.paddingLeft),
        top: n.clientTop + parseFloat(a.paddingTop)
      }, o += i.left, l += i.top
    }), (n = Se(e, !0)).left += o, n.right += o, n.top += l, n.bottom += l, n) : Se(e) : null
  }

  function _e(e, t) {
    var n = e.x - t.x,
      a = e.y - t.y;
    return Math.sqrt(n * n + a * a)
  }

  function ve(e, t, n) {
    var a = t.x - e.x,
      i = t.y - e.y;
    return {
      x: e.x + a * n,
      y: e.y + i * n,
      angle: Math.atan2(i, a) / (Math.PI / 180)
    }
  }

  function Ee(e, t, n) {
    var a = Math.atan2(e.y - t.y, t.x - e.x);
    return {
      x: t.x + Math.cos(a) * n,
      y: t.y + Math.sin(a) * n * -1
    }
  }

  function xe(e, t, n, a, i) {
    var o = i * i,
      l = o * i,
      r = 1 - i,
      s = r * r,
      u = s * r,
      h = u * e.x + 3 * s * i * t.x + 3 * r * o * n.x + l * a.x,
      p = u * e.y + 3 * s * i * t.y + 3 * r * o * n.y + l * a.y,
      c = e.x + 2 * i * (t.x - e.x) + o * (n.x - 2 * t.x + e.x),
      d = e.y + 2 * i * (t.y - e.y) + o * (n.y - 2 * t.y + e.y),
      f = t.x + 2 * i * (n.x - t.x) + o * (a.x - 2 * n.x + t.x),
      y = t.y + 2 * i * (n.y - t.y) + o * (a.y - 2 * n.y + t.y),
      S = r * e.x + i * t.x,
      m = r * e.y + i * t.y,
      g = r * n.x + i * a.x,
      _ = r * n.y + i * a.y,
      v = 90 - 180 * Math.atan2(c - f, d - y) / Math.PI;
    return {
      x: h,
      y: p,
      fromP2: {
        x: c,
        y: d
      },
      toP1: {
        x: f,
        y: y
      },
      fromP1: {
        x: S,
        y: m
      },
      toP2: {
        x: g,
        y: _
      },
      angle: v += 180 < v ? -180 : 180
    }
  }

  function be(n, a, i, o, e) {
    function l(e, t, n, a, i) {
      return e * (e * (-3 * t + 9 * n - 9 * a + 3 * i) + 6 * t - 12 * n + 6 * a) - 3 * t + 3 * n
    }
    var r, s, u, h, p, c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
      d = 0;
    return r = (e = null == e || 1 < e ? 1 : e < 0 ? 0 : e) / 2, [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816].forEach(function (e, t) {
      u = l(s = r * e + r, n.x, a.x, i.x, o.x), h = l(s, n.y, a.y, i.y, o.y), p = u * u + h * h, d += c[t] * Math.sqrt(p)
    }), r * d
  }

  function ke(e, t, n, a, i) {
    for (var o, l = .5, r = 1 - l; o = be(e, t, n, a, r), !(Math.abs(o - i) <= .01);) r += (o < i ? 1 : -1) * (l /= 2);
    return r
  }

  function we(e, n) {
    var a;
    return e.forEach(function (e) {
      var t = n ? e.map(function (e) {
        var t = {
          x: e.x,
          y: e.y
        };
        return n(t), t
      }) : e;
      a || (a = [{
        type: "M",
        values: [t[0].x, t[0].y]
      }]), a.push(t.length ? 2 === t.length ? {
        type: "L",
        values: [t[1].x, t[1].y]
      } : {
        type: "C",
        values: [t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]
      } : {
        type: "Z",
        values: []
      })
    }), a
  }

  function Oe(e) {
    var n = [],
      a = 0;
    return e.forEach(function (e) {
      var t = (2 === e.length ? _e : be).apply(null, e);
      n.push(t), a += t
    }), {
      segsLen: n,
      lenAll: a
    }
  }

  function Me(e, a) {
    return null == e || null == a || e.length !== a.length || e.some(function (e, t) {
      var n = a[t];
      return e.type !== n.type || e.values.some(function (e, t) {
        return e !== n.values[t]
      })
    })
  }

  function Ie(e, t, n) {
    e.events[t] ? e.events[t].indexOf(n) < 0 && e.events[t].push(n) : e.events[t] = [n]
  }

  function Ce(e, t, n) {
    var a;
    e.events[t] && -1 < (a = e.events[t].indexOf(n)) && e.events[t].splice(a, 1)
  }

  function Le(e) {
    t && clearTimeout(t), Q.push(e), t = setTimeout(function () {
      Q.forEach(function (e) {
        e()
      }), Q = []
    }, 0)
  }

  function Ae(e, t) {
    e.reflowTargets.indexOf(t) < 0 && e.reflowTargets.push(t)
  }

  function Ve(e) {
    e.reflowTargets.forEach(function (e) {
      var n;
      n = e, setTimeout(function () {
        var e = n.parentNode,
          t = n.nextSibling;
        e.insertBefore(e.removeChild(n), t)
      }, 0)
    }), e.reflowTargets = []
  }

  function Pe(e, t, n, a, i, o, l) {
    var r, s, u;
    "auto-start-reverse" === n ? ("boolean" != typeof h && (t.setAttribute("orient", "auto-start-reverse"), h = t.orientType.baseVal === SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN), h ? t.setAttribute("orient", n) : ((r = i.createSVGTransform()).setRotate(180, 0, 0), o.transform.baseVal.appendItem(r), t.setAttribute("orient", "auto"), u = !0)) : (t.setAttribute("orient", n), !1 === h && o.transform.baseVal.clear()), s = t.viewBox.baseVal, u ? (s.x = -a.right, s.y = -a.bottom) : (s.x = a.left, s.y = a.top), s.width = a.width, s.height = a.height, le && Ae(e, l)
  }

  function Ne(e, t) {
    return {
      prop: e ? "markerEnd" : "markerStart",
      orient: t ? t.noRotate ? "0" : e ? "auto" : "auto-start-reverse" : null
    }
  }

  function Te(n, a) {
    Object.keys(a).forEach(function (e) {
      var t = a[e];
      n[e] = null != t.iniValue ? t.hasSE ? [t.iniValue, t.iniValue] : t.iniValue : t.hasSE ? t.hasProps ? [{}, {}] : [] : t.hasProps ? {} : null
    })
  }

  function We(t, e, n, a, i) {
    return a !== e[n] && (e[n] = a, i && i.forEach(function (e) {
      e(t, a, n)
    }), !0)
  }

  function Be(e) {
    function t(e, t) {
      return e + parseFloat(t)
    }
    var n = e.document,
      a = e.getComputedStyle(n.documentElement, ""),
      i = e.getComputedStyle(n.body, ""),
      o = {
        x: 0,
        y: 0
      };
    return "static" !== i.position ? (o.x -= [a.marginLeft, a.borderLeftWidth, a.paddingLeft, i.marginLeft, i.borderLeftWidth].reduce(t, 0), o.y -= [a.marginTop, a.borderTopWidth, a.paddingTop, i.marginTop, i.borderTopWidth].reduce(t, 0)) : "static" !== a.position && (o.x -= [a.marginLeft, a.borderLeftWidth].reduce(t, 0), o.y -= [a.marginTop, a.borderTopWidth].reduce(t, 0)), o
  }

  function Re(e) {
    var t, n = e.document;
    n.getElementById(r) || (t = (new e.DOMParser).parseFromString(s, "image/svg+xml"), n.body.appendChild(t.documentElement), d(e))
  }

  function Fe(u) {
    var _, f, v, e, n, a, i, y, s, h, p, t, o, l, r, c, d, S, m, g = u.options,
      E = u.curStats,
      x = u.aplStats,
      b = E.position_socketXYSE,
      k = !1;

    function w(e, t) {
      var n = t === M ? {
        x: e.left + e.width / 2,
        y: e.top
      } : t === I ? {
        x: e.right,
        y: e.top + e.height / 2
      } : t === C ? {
        x: e.left + e.width / 2,
        y: e.bottom
      } : {
        x: e.left,
        y: e.top + e.height / 2
      };
      return n.socketId = t, n
    }

    function O(e) {
      return {
        x: e.x,
        y: e.y
      }
    }
    if (E.position_path = g.path, E.position_lineStrokeWidth = E.line_strokeWidth, E.position_socketGravitySE = _ = de(g.socketGravitySE), f = [0, 1].map(function (e) {
        var t, n, a, i = g.anchorSE[e],
          o = u.optionIsAttach.anchorSE[e],
          l = !1 !== o ? $[i._id] : null,
          r = !1 !== o && l.conf.getStrokeWidth ? l.conf.getStrokeWidth(l, u) : 0,
          s = !1 !== o && l.conf.getBBoxNest ? l.conf.getBBoxNest(l, u, r) : ge(i, u.baseWindow);
        return E.capsMaskAnchor_pathDataSE[e] = !1 !== o && l.conf.getPathData ? l.conf.getPathData(l, u, r) : (n = null != (t = s).right ? t.right : t.left + t.width, a = null != t.bottom ? t.bottom : t.top + t.height, [{
          type: "M",
          values: [t.left, t.top]
        }, {
          type: "L",
          values: [n, t.top]
        }, {
          type: "L",
          values: [n, a]
        }, {
          type: "L",
          values: [t.left, a]
        }, {
          type: "Z",
          values: []
        }]), E.capsMaskAnchor_strokeWidthSE[e] = r, s
      }), i = -1, g.socketSE[0] && g.socketSE[1] ? (b[0] = w(f[0], g.socketSE[0]), b[1] = w(f[1], g.socketSE[1])) : (g.socketSE[0] || g.socketSE[1] ? (g.socketSE[0] ? (n = 0, a = 1) : (n = 1, a = 0), b[n] = w(f[n], g.socketSE[n]), (e = W.map(function (e) {
        return w(f[a], e)
      })).forEach(function (e) {
        var t = _e(e, b[n]);
        (t < i || -1 === i) && (b[a] = e, i = t)
      })) : (e = W.map(function (e) {
        return w(f[1], e)
      }), W.map(function (e) {
        return w(f[0], e)
      }).forEach(function (n) {
        e.forEach(function (e) {
          var t = _e(n, e);
          (t < i || -1 === i) && (b[0] = n, b[1] = e, i = t)
        })
      })), [0, 1].forEach(function (e) {
        var t, n;
        g.socketSE[e] || (f[e].width || f[e].height ? f[e].width || b[e].socketId !== L && b[e].socketId !== I ? f[e].height || b[e].socketId !== M && b[e].socketId !== C || (b[e].socketId = 0 <= b[e ? 0 : 1].y - f[e].top ? C : M) : b[e].socketId = 0 <= b[e ? 0 : 1].x - f[e].left ? I : L : (t = b[e ? 0 : 1].x - f[e].left, n = b[e ? 0 : 1].y - f[e].top, b[e].socketId = Math.abs(t) >= Math.abs(n) ? 0 <= t ? I : L : 0 <= n ? C : M))
      })), E.position_path !== x.position_path || E.position_lineStrokeWidth !== x.position_lineStrokeWidth || [0, 1].some(function (e) {
        return E.position_plugOverheadSE[e] !== x.position_plugOverheadSE[e] || (i = b[e], o = x.position_socketXYSE[e], i.x !== o.x || i.y !== o.y || i.socketId !== o.socketId) || (t = _[e], n = x.position_socketGravitySE[e], (a = null == t ? "auto" : Array.isArray(t) ? "array" : "number") !== (null == n ? "auto" : Array.isArray(n) ? "array" : "number") || ("array" === a ? t[0] !== n[0] || t[1] !== n[1] : t !== n));
        var t, n, a, i, o
      })) {
      switch (u.pathList.baseVal = v = [], u.pathList.animVal = null, E.position_path) {
      case A:
        v.push([O(b[0]), O(b[1])]);
        break;
      case V:
        t = "number" == typeof _[0] && 0 < _[0] || "number" == typeof _[1] && 0 < _[1], o = Z * (t ? -1 : 1), l = Math.atan2(b[1].y - b[0].y, b[1].x - b[0].x), r = -l + o, c = Math.PI - l - o, d = _e(b[0], b[1]) / Math.sqrt(2) * U, S = {
          x: b[0].x + Math.cos(r) * d,
          y: b[0].y + Math.sin(r) * d * -1
        }, m = {
          x: b[1].x + Math.cos(c) * d,
          y: b[1].y + Math.sin(c) * d * -1
        }, v.push([O(b[0]), S, m, O(b[1])]);
        break;
      case P:
      case N:
        s = [_[0], E.position_path === N ? 0 : _[1]], h = [], p = [], b.forEach(function (e, t) {
          var n, a, i, o, l, r = s[t];
          Array.isArray(r) ? n = {
            x: r[0],
            y: r[1]
          } : "number" == typeof r ? n = e.socketId === M ? {
            x: 0,
            y: -r
          } : e.socketId === I ? {
            x: r,
            y: 0
          } : e.socketId === C ? {
            x: 0,
            y: r
          } : {
            x: -r,
            y: 0
          } : (a = b[t ? 0 : 1], o = 0 < (i = E.position_plugOverheadSE[t]) ? G + (D < i ? (i - D) * z : 0) : B + (E.position_lineStrokeWidth > R ? (E.position_lineStrokeWidth - R) * F : 0), e.socketId === M ? ((l = (e.y - a.y) / 2) < o && (l = o), n = {
            x: 0,
            y: -l
          }) : e.socketId === I ? ((l = (a.x - e.x) / 2) < o && (l = o), n = {
            x: l,
            y: 0
          }) : e.socketId === C ? ((l = (a.y - e.y) / 2) < o && (l = o), n = {
            x: 0,
            y: l
          }) : ((l = (e.x - a.x) / 2) < o && (l = o), n = {
            x: -l,
            y: 0
          })), h[t] = e.x + n.x, p[t] = e.y + n.y
        }), v.push([O(b[0]), {
          x: h[0],
          y: p[0]
        }, {
          x: h[1],
          y: p[1]
        }, O(b[1])]);
        break;
      case T:
        ! function () {
          var a, o = 1,
            l = 2,
            r = 3,
            s = 4,
            u = [
              [],
              []
            ],
            h = [];

          function p(e) {
            return e === o ? r : e === l ? s : e === r ? o : l
          }

          function c(e) {
            return e === l || e === s ? "x" : "y"
          }

          function d(e, t, n) {
            var a = {
              x: e.x,
              y: e.y
            };
            if (n) {
              if (n === p(e.dirId)) throw new Error("Invalid dirId: " + n);
              a.dirId = n
            } else a.dirId = e.dirId;
            return a.dirId === o ? a.y -= t : a.dirId === l ? a.x += t : a.dirId === r ? a.y += t : a.x -= t, a
          }

          function f(e, t) {
            return t.dirId === o ? e.y <= t.y : t.dirId === l ? e.x >= t.x : t.dirId === r ? e.y >= t.y : e.x <= t.x
          }

          function y(e, t) {
            return t.dirId === o || t.dirId === r ? e.x === t.x : e.y === t.y
          }

          function S(e) {
            return e[0] ? {
              contain: 0,
              notContain: 1
            } : {
              contain: 1,
              notContain: 0
            }
          }

          function m(e, t, n) {
            return Math.abs(t[n] - e[n])
          }

          function g(e, t, n) {
            return "x" === n ? e.x < t.x ? l : s : e.y < t.y ? r : o
          }

          function e() {
            var e, t, a, i, n = [f(h[1], h[0]), f(h[0], h[1])],
              o = [c(h[0].dirId), c(h[1].dirId)];
            if (o[0] === o[1]) {
              if (n[0] && n[1]) return y(h[1], h[0]) || (h[0][o[0]] === h[1][o[1]] ? (u[0].push(h[0]), u[1].push(h[1])) : (e = h[0][o[0]] + (h[1][o[1]] - h[0][o[0]]) / 2, u[0].push(d(h[0], Math.abs(e - h[0][o[0]]))), u[1].push(d(h[1], Math.abs(e - h[1][o[1]]))))), !1;
              n[0] !== n[1] ? (t = S(n), (a = m(h[t.notContain], h[t.contain], o[t.notContain])) < H && (h[t.notContain] = d(h[t.notContain], H - a)), u[t.notContain].push(h[t.notContain]), h[t.notContain] = d(h[t.notContain], H, y(h[t.contain], h[t.notContain]) ? "x" === o[t.notContain] ? r : l : g(h[t.notContain], h[t.contain], "x" === o[t.notContain] ? "y" : "x"))) : (a = m(h[0], h[1], "x" === o[0] ? "y" : "x"), u.forEach(function (e, t) {
                var n = 0 === t ? 1 : 0;
                e.push(h[t]), h[t] = d(h[t], H, 2 * H <= a ? g(h[t], h[n], "x" === o[t] ? "y" : "x") : "x" === o[t] ? r : l)
              }))
            } else {
              if (n[0] && n[1]) return y(h[1], h[0]) ? u[1].push(h[1]) : y(h[0], h[1]) ? u[0].push(h[0]) : u[0].push("x" === o[0] ? {
                x: h[1].x,
                y: h[0].y
              } : {
                x: h[0].x,
                y: h[1].y
              }), !1;
              n[0] !== n[1] ? (t = S(n), u[t.notContain].push(h[t.notContain]), h[t.notContain] = d(h[t.notContain], H, m(h[t.notContain], h[t.contain], o[t.contain]) >= H ? g(h[t.notContain], h[t.contain], o[t.contain]) : h[t.contain].dirId)) : (i = [{
                x: h[0].x,
                y: h[0].y
              }, {
                x: h[1].x,
                y: h[1].y
              }], u.forEach(function (e, t) {
                var n = 0 === t ? 1 : 0,
                  a = m(i[t], i[n], o[t]);
                a < H && (h[t] = d(h[t], H - a)), e.push(h[t]), h[t] = d(h[t], H, g(h[t], h[n], o[n]))
              }))
            }
            return !0
          }
          for (b.forEach(function (e, t) {
              var n, a = O(e),
                i = _[t];
              n = Array.isArray(i) ? i[0] < 0 ? [s, -i[0]] : 0 < i[0] ? [l, i[0]] : i[1] < 0 ? [o, -i[1]] : 0 < i[1] ? [r, i[1]] : [e.socketId, 0] : "number" != typeof i ? [e.socketId, H] : 0 <= i ? [e.socketId, i] : [p(e.socketId), -i], a.dirId = n[0], i = n[1], u[t].push(a), h[t] = d(a, i)
            }); e(););
          u[1].reverse(), u[0].concat(u[1]).forEach(function (e, t) {
            var n = {
              x: e.x,
              y: e.y
            };
            0 < t && v.push([a, n]), a = n
          })
        }()
      }
      y = [], E.position_plugOverheadSE.forEach(function (e, t) {
        var n, a, i, o, l, r, s, u, h, p, c, d = !t;
        0 < e ? 2 === (n = v[a = d ? 0 : v.length - 1]).length ? (y[a] = y[a] || _e.apply(null, n), y[a] > j && (y[a] - e < j && (e = y[a] - j), i = ve(n[0], n[1], (d ? e : y[a] - e) / y[a]), v[a] = d ? [i, n[1]] : [n[0], i], y[a] -= e)) : (y[a] = y[a] || be.apply(null, n), y[a] > j && (y[a] - e < j && (e = y[a] - j), i = xe(n[0], n[1], n[2], n[3], ke(n[0], n[1], n[2], n[3], d ? e : y[a] - e)), d ? (o = n[0], l = i.toP1) : (o = n[3], l = i.fromP2), r = Math.atan2(o.y - i.y, i.x - o.x), s = _e(i, l), i.x = o.x + Math.cos(r) * e, i.y = o.y + Math.sin(r) * e * -1, l.x = i.x + Math.cos(r) * s, l.y = i.y + Math.sin(r) * s * -1, v[a] = d ? [i, i.toP1, i.toP2, n[3]] : [n[0], i.fromP1, i.fromP2, i], y[a] = null)) : e < 0 && (n = v[a = d ? 0 : v.length - 1], u = b[t].socketId, h = u === L || u === I ? "x" : "y", e < (c = -f[t]["x" === h ? "width" : "height"]) && (e = c), p = e * (u === L || u === M ? -1 : 1), 2 === n.length ? n[d ? 0 : n.length - 1][h] += p : (d ? [0, 1] : [n.length - 2, n.length - 1]).forEach(function (e) {
          n[e][h] += p
        }), y[a] = null)
      }), x.position_socketXYSE = de(b), x.position_plugOverheadSE = de(E.position_plugOverheadSE), x.position_path = E.position_path, x.position_lineStrokeWidth = E.position_lineStrokeWidth, x.position_socketGravitySE = de(_), k = !0, u.events.apl_position && u.events.apl_position.forEach(function (e) {
        e(u, v)
      })
    }
    return k
  }

  function Ge(t, n) {
    n !== t.isShown && (!!n != !!t.isShown && (t.svg.style.visibility = n ? "" : "hidden"), t.isShown = n, t.events && t.events.svgShow && t.events.svgShow.forEach(function (e) {
      e(t, n)
    }))
  }

  function De(e, t) {
    var n, a, i, o, l, h, p, c, d, f, r, s, u, y, S, m, g, _, v, E, x, b, k, w, O, M, I, C, L, A, V, P, N, T, W, B, R, F, G, D, z, j, H, U, Z, Y, X, q, Q, K, J, $, ee = {};
    t.line && (ee.line = (a = (n = e).options, i = n.curStats, o = n.events, l = !1, l = We(n, i, "line_color", a.lineColor, o.cur_line_color) || l, l = We(n, i, "line_colorTra", fe(i.line_color)[0] < 1) || l, l = We(n, i, "line_strokeWidth", a.lineSize, o.cur_line_strokeWidth) || l)), (t.plug || ee.line) && (ee.plug = (p = (h = e).options, c = h.curStats, d = h.events, f = !1, [0, 1].forEach(function (e) {
      var t, n, a, i, o, l, r, s, u = p.plugSE[e];
      f = We(h, c.plug_enabledSE, e, u !== ne) || f, f = We(h, c.plug_plugSE, e, u) || f, f = We(h, c.plug_colorSE, e, s = p.plugColorSE[e] || c.line_color, d.cur_plug_colorSE) || f, f = We(h, c.plug_colorTraSE, e, fe(s)[0] < 1) || f, u !== ne && (i = n = (t = ae[ie[u]]).widthR * p.plugSizeSE[e], o = a = t.heightR * p.plugSizeSE[e], ue && (i *= c.line_strokeWidth, o *= c.line_strokeWidth), f = We(h, c.plug_markerWidthSE, e, i) || f, f = We(h, c.plug_markerHeightSE, e, o) || f, c.capsMaskMarker_markerWidthSE[e] = n, c.capsMaskMarker_markerHeightSE[e] = a), c.plugOutline_plugSE[e] = c.capsMaskMarker_plugSE[e] = u, c.plug_enabledSE[e] ? (s = c.line_strokeWidth / pe.lineSize * p.plugSizeSE[e], c.position_plugOverheadSE[e] = t.overhead * s, c.viewBox_plugBCircleSE[e] = t.bCircle * s, l = t.sideLen * s, r = t.backLen * s) : (c.position_plugOverheadSE[e] = -c.line_strokeWidth / 2, c.viewBox_plugBCircleSE[e] = l = r = 0), We(h, c.attach_plugSideLenSE, e, l, d.cur_attach_plugSideLenSE), We(h, c.attach_plugBackLenSE, e, r, d.cur_attach_plugBackLenSE), c.capsMaskAnchor_enabledSE[e] = !c.plug_enabledSE[e]
    }), f = We(h, c, "plug_enabled", c.plug_enabledSE[0] || c.plug_enabledSE[1]) || f)), (t.lineOutline || ee.line) && (ee.lineOutline = (u = (r = e).options, y = r.curStats, S = !1, S = We(r, y, "lineOutline_enabled", u.lineOutlineEnabled) || S, S = We(r, y, "lineOutline_color", u.lineOutlineColor) || S, S = We(r, y, "lineOutline_colorTra", fe(y.lineOutline_color)[0] < 1) || S, s = y.line_strokeWidth * u.lineOutlineSize, S = We(r, y, "lineOutline_strokeWidth", y.line_strokeWidth - 2 * s) || S, S = We(r, y, "lineOutline_inStrokeWidth", y.lineOutline_colorTra ? y.lineOutline_strokeWidth + 2 * he : y.line_strokeWidth - s) || S)), (t.plugOutline || ee.line || ee.plug || ee.lineOutline) && (ee.plugOutline = (g = (m = e).options, _ = m.curStats, v = !1, [0, 1].forEach(function (e) {
      var t, n = _.plugOutline_plugSE[e],
        a = n !== ne ? ae[ie[n]] : null;
      v = We(m, _.plugOutline_enabledSE, e, g.plugOutlineEnabledSE[e] && _.plug_enabled && _.plug_enabledSE[e] && !!a && !!a.outlineBase) || v, v = We(m, _.plugOutline_colorSE, e, t = g.plugOutlineColorSE[e] || _.lineOutline_color) || v, v = We(m, _.plugOutline_colorTraSE, e, fe(t)[0] < 1) || v, a && a.outlineBase && ((t = g.plugOutlineSizeSE[e]) > a.outlineMax && (t = a.outlineMax), t *= 2 * a.outlineBase, v = We(m, _.plugOutline_strokeWidthSE, e, t) || v, v = We(m, _.plugOutline_inStrokeWidthSE, e, _.plugOutline_colorTraSE[e] ? t - he / (_.line_strokeWidth / pe.lineSize) / g.plugSizeSE[e] * 2 : t / 2) || v)
    }), v)), (t.faces || ee.line || ee.plug || ee.lineOutline || ee.plugOutline) && (ee.faces = (b = (E = e).curStats, k = E.aplStats, w = E.events, O = !1, !b.line_altColor && We(E, k, "line_color", x = b.line_color, w.apl_line_color) && (E.lineFace.style.stroke = x, O = !0), We(E, k, "line_strokeWidth", x = b.line_strokeWidth, w.apl_line_strokeWidth) && (E.lineShape.style.strokeWidth = x + "px", O = !0, (re || le) && (Ae(E, E.lineShape), le && (Ae(E, E.lineFace), Ae(E, E.lineMaskCaps)))), We(E, k, "lineOutline_enabled", x = b.lineOutline_enabled, w.apl_lineOutline_enabled) && (E.lineOutlineFace.style.display = x ? "inline" : "none", O = !0), b.lineOutline_enabled && (We(E, k, "lineOutline_color", x = b.lineOutline_color, w.apl_lineOutline_color) && (E.lineOutlineFace.style.stroke = x, O = !0), We(E, k, "lineOutline_strokeWidth", x = b.lineOutline_strokeWidth, w.apl_lineOutline_strokeWidth) && (E.lineOutlineMaskShape.style.strokeWidth = x + "px", O = !0, le && (Ae(E, E.lineOutlineMaskCaps), Ae(E, E.lineOutlineFace))), We(E, k, "lineOutline_inStrokeWidth", x = b.lineOutline_inStrokeWidth, w.apl_lineOutline_inStrokeWidth) && (E.lineMaskShape.style.strokeWidth = x + "px", O = !0, le && (Ae(E, E.lineOutlineMaskCaps), Ae(E, E.lineOutlineFace)))), We(E, k, "plug_enabled", x = b.plug_enabled, w.apl_plug_enabled) && (E.plugsFace.style.display = x ? "inline" : "none", O = !0), b.plug_enabled && [0, 1].forEach(function (n) {
      var e = b.plug_plugSE[n],
        t = e !== ne ? ae[ie[e]] : null,
        a = Ne(n, t);
      We(E, k.plug_enabledSE, n, x = b.plug_enabledSE[n], w.apl_plug_enabledSE) && (E.plugsFace.style[a.prop] = x ? "url(#" + E.plugMarkerIdSE[n] + ")" : "none", O = !0), b.plug_enabledSE[n] && (We(E, k.plug_plugSE, n, e, w.apl_plug_plugSE) && (E.plugFaceSE[n].href.baseVal = "#" + t.elmId, Pe(E, E.plugMarkerSE[n], a.orient, t.bBox, E.svg, E.plugMarkerShapeSE[n], E.plugsFace), O = !0, re && Ae(E, E.plugsFace)), We(E, k.plug_colorSE, n, x = b.plug_colorSE[n], w.apl_plug_colorSE) && (E.plugFaceSE[n].style.fill = x, O = !0, (se || ue || le) && !b.line_colorTra && Ae(E, le ? E.lineMaskCaps : E.capsMaskLine)), ["markerWidth", "markerHeight"].forEach(function (e) {
        var t = "plug_" + e + "SE";
        We(E, k[t], n, x = b[t][n], w["apl_" + t]) && (E.plugMarkerSE[n][e].baseVal.value = x, O = !0)
      }), We(E, k.plugOutline_enabledSE, n, x = b.plugOutline_enabledSE[n], w.apl_plugOutline_enabledSE) && (x ? (E.plugFaceSE[n].style.mask = "url(#" + E.plugMaskIdSE[n] + ")", E.plugOutlineFaceSE[n].style.display = "inline") : (E.plugFaceSE[n].style.mask = "none", E.plugOutlineFaceSE[n].style.display = "none"), O = !0), b.plugOutline_enabledSE[n] && (We(E, k.plugOutline_plugSE, n, e, w.apl_plugOutline_plugSE) && (E.plugOutlineFaceSE[n].href.baseVal = E.plugMaskShapeSE[n].href.baseVal = E.plugOutlineMaskShapeSE[n].href.baseVal = "#" + t.elmId, [E.plugMaskSE[n], E.plugOutlineMaskSE[n]].forEach(function (e) {
        e.x.baseVal.value = t.bBox.left, e.y.baseVal.value = t.bBox.top, e.width.baseVal.value = t.bBox.width, e.height.baseVal.value = t.bBox.height
      }), O = !0), We(E, k.plugOutline_colorSE, n, x = b.plugOutline_colorSE[n], w.apl_plugOutline_colorSE) && (E.plugOutlineFaceSE[n].style.fill = x, O = !0, le && (Ae(E, E.lineMaskCaps), Ae(E, E.lineOutlineMaskCaps))), We(E, k.plugOutline_strokeWidthSE, n, x = b.plugOutline_strokeWidthSE[n], w.apl_plugOutline_strokeWidthSE) && (E.plugOutlineMaskShapeSE[n].style.strokeWidth = x + "px", O = !0), We(E, k.plugOutline_inStrokeWidthSE, n, x = b.plugOutline_inStrokeWidthSE[n], w.apl_plugOutline_inStrokeWidthSE) && (E.plugMaskShapeSE[n].style.strokeWidth = x + "px", O = !0)))
    }), O)), (t.position || ee.line || ee.plug) && (ee.position = Fe(e)), (t.path || ee.position) && (ee.path = (C = (M = e).curStats, L = M.aplStats, A = M.pathList.animVal || M.pathList.baseVal, V = C.path_edge, P = !1, A && (V.x1 = V.x2 = A[0][0].x, V.y1 = V.y2 = A[0][0].y, C.path_pathData = I = we(A, function (e) {
      e.x < V.x1 && (V.x1 = e.x), e.y < V.y1 && (V.y1 = e.y), e.x > V.x2 && (V.x2 = e.x), e.y > V.y2 && (V.y2 = e.y)
    }), Me(I, L.path_pathData) && (M.linePath.setPathData(I), L.path_pathData = I, P = !0, le ? (Ae(M, M.plugsFace), Ae(M, M.lineMaskCaps)) : re && Ae(M, M.linePath), M.events.apl_path && M.events.apl_path.forEach(function (e) {
      e(M, I)
    }))), P)), ee.viewBox = (B = (N = e).curStats, R = N.aplStats, F = B.path_edge, G = B.viewBox_bBox, D = R.viewBox_bBox, z = N.svg.viewBox.baseVal, j = N.svg.style, H = !1, T = Math.max(B.line_strokeWidth / 2, B.viewBox_plugBCircleSE[0] || 0, B.viewBox_plugBCircleSE[1] || 0), W = {
      x1: F.x1 - T,
      y1: F.y1 - T,
      x2: F.x2 + T,
      y2: F.y2 + T
    }, N.events.new_edge4viewBox && N.events.new_edge4viewBox.forEach(function (e) {
      e(N, W)
    }), G.x = B.lineMask_x = B.lineOutlineMask_x = B.maskBGRect_x = W.x1, G.y = B.lineMask_y = B.lineOutlineMask_y = B.maskBGRect_y = W.y1, G.width = W.x2 - W.x1, G.height = W.y2 - W.y1, ["x", "y", "width", "height"].forEach(function (e) {
      var t;
      (t = G[e]) !== D[e] && (z[e] = D[e] = t, j[oe[e]] = t + ("x" === e || "y" === e ? N.bodyOffset[e] : 0) + "px", H = !0)
    }), H), ee.mask = (Y = (U = e).curStats, X = U.aplStats, q = !1, Y.plug_enabled ? [0, 1].forEach(function (e) {
      Y.capsMaskMarker_enabledSE[e] = Y.plug_enabledSE[e] && Y.plug_colorTraSE[e] || Y.plugOutline_enabledSE[e] && Y.plugOutline_colorTraSE[e]
    }) : Y.capsMaskMarker_enabledSE[0] = Y.capsMaskMarker_enabledSE[1] = !1, Y.capsMaskMarker_enabled = Y.capsMaskMarker_enabledSE[0] || Y.capsMaskMarker_enabledSE[1], Y.lineMask_outlineMode = Y.lineOutline_enabled, Y.caps_enabled = Y.capsMaskMarker_enabled || Y.capsMaskAnchor_enabledSE[0] || Y.capsMaskAnchor_enabledSE[1], Y.lineMask_enabled = Y.caps_enabled || Y.lineMask_outlineMode, (Y.lineMask_enabled && !Y.lineMask_outlineMode || Y.lineOutline_enabled) && ["x", "y"].forEach(function (e) {
      var t = "maskBGRect_" + e;
      We(U, X, t, Z = Y[t]) && (U.maskBGRect[e].baseVal.value = Z, q = !0)
    }), We(U, X, "lineMask_enabled", Z = Y.lineMask_enabled) && (U.lineFace.style.mask = Z ? "url(#" + U.lineMaskId + ")" : "none", q = !0, ue && Ae(U, U.lineMask)), Y.lineMask_enabled && (We(U, X, "lineMask_outlineMode", Z = Y.lineMask_outlineMode) && (Z ? (U.lineMaskBG.style.display = "none", U.lineMaskShape.style.display = "inline") : (U.lineMaskBG.style.display = "inline", U.lineMaskShape.style.display = "none"), q = !0), ["x", "y"].forEach(function (e) {
      var t = "lineMask_" + e;
      We(U, X, t, Z = Y[t]) && (U.lineMask[e].baseVal.value = Z, q = !0)
    }), We(U, X, "caps_enabled", Z = Y.caps_enabled) && (U.lineMaskCaps.style.display = U.lineOutlineMaskCaps.style.display = Z ? "inline" : "none", q = !0, ue && Ae(U, U.capsMaskLine)), Y.caps_enabled && ([0, 1].forEach(function (e) {
      var t;
      We(U, X.capsMaskAnchor_enabledSE, e, Z = Y.capsMaskAnchor_enabledSE[e]) && (U.capsMaskAnchorSE[e].style.display = Z ? "inline" : "none", q = !0, ue && Ae(U, U.lineMask)), Y.capsMaskAnchor_enabledSE[e] && (Me(t = Y.capsMaskAnchor_pathDataSE[e], X.capsMaskAnchor_pathDataSE[e]) && (U.capsMaskAnchorSE[e].setPathData(t), X.capsMaskAnchor_pathDataSE[e] = t, q = !0), We(U, X.capsMaskAnchor_strokeWidthSE, e, Z = Y.capsMaskAnchor_strokeWidthSE[e]) && (U.capsMaskAnchorSE[e].style.strokeWidth = Z + "px", q = !0))
    }), We(U, X, "capsMaskMarker_enabled", Z = Y.capsMaskMarker_enabled) && (U.capsMaskLine.style.display = Z ? "inline" : "none", q = !0), Y.capsMaskMarker_enabled && [0, 1].forEach(function (n) {
      var e = Y.capsMaskMarker_plugSE[n],
        t = e !== ne ? ae[ie[e]] : null,
        a = Ne(n, t);
      We(U, X.capsMaskMarker_enabledSE, n, Z = Y.capsMaskMarker_enabledSE[n]) && (U.capsMaskLine.style[a.prop] = Z ? "url(#" + U.lineMaskMarkerIdSE[n] + ")" : "none", q = !0), Y.capsMaskMarker_enabledSE[n] && (We(U, X.capsMaskMarker_plugSE, n, e) && (U.capsMaskMarkerShapeSE[n].href.baseVal = "#" + t.elmId, Pe(U, U.capsMaskMarkerSE[n], a.orient, t.bBox, U.svg, U.capsMaskMarkerShapeSE[n], U.capsMaskLine), q = !0, re && (Ae(U, U.capsMaskLine), Ae(U, U.lineFace))), ["markerWidth", "markerHeight"].forEach(function (e) {
        var t = "capsMaskMarker_" + e + "SE";
        We(U, X[t], n, Z = Y[t][n]) && (U.capsMaskMarkerSE[n][e].baseVal.value = Z, q = !0)
      }))
    }))), Y.lineOutline_enabled && ["x", "y"].forEach(function (e) {
      var t = "lineOutlineMask_" + e;
      We(U, X, t, Z = Y[t]) && (U.lineOutlineMask[e].baseVal.value = Z, q = !0)
    }), q), t.effect && (J = (Q = e).curStats, $ = Q.aplStats, Object.keys(te).forEach(function (e) {
      var t = te[e],
        n = e + "_enabled",
        a = e + "_options",
        i = J[a];
      We(Q, $, n, K = J[n]) ? (K && ($[a] = de(i)), t[K ? "init" : "remove"](Q)) : K && ce(i, $[a]) && (t.remove(Q), $[n] = !0, $[a] = de(i), t.init(Q))
    })), (se || ue) && ee.line && !ee.path && Ae(e, e.lineShape), se && ee.plug && !ee.line && Ae(e, e.plugsFace), Ve(e)
  }

  function ze(e, t) {
    return {
      duration: w(e.duration) && 0 < e.duration ? e.duration : t.duration,
      timing: c.validTiming(e.timing) ? e.timing : de(t.timing)
    }
  }

  function je(e, t, n, a) {
    var i, o = e.curStats,
      l = e.aplStats,
      r = {};

    function s() {
      ["show_on", "show_effect", "show_animOptions"].forEach(function (e) {
        l[e] = o[e]
      })
    }
    o.show_on = t, n && g[n] && (o.show_effect = n, o.show_animOptions = ze(k(a) ? a : {}, g[n].defaultAnimOptions)), r.show_on = o.show_on !== l.show_on, r.show_effect = o.show_effect !== l.show_effect, r.show_animOptions = ce(o.show_animOptions, l.show_animOptions), r.show_effect || r.show_animOptions ? o.show_inAnim ? (i = r.show_effect ? g[l.show_effect].stop(e, !0, !0) : g[l.show_effect].stop(e), s(), g[l.show_effect].init(e, i)) : r.show_on && (l.show_effect && r.show_effect && g[l.show_effect].stop(e, !0, !0), s(), g[l.show_effect].init(e)) : r.show_on && (s(), g[l.show_effect].start(e))
  }

  function He(e, t, n) {
    var a = {
      props: e,
      optionName: n
    };
    return !(!(e.attachments.indexOf(t) < 0) || t.conf.bind && !t.conf.bind(t, a)) && (e.attachments.push(t), t.boundTargets.push(a), !0)
  }

  function Ue(n, a, e) {
    var i = n.attachments.indexOf(a); - 1 < i && n.attachments.splice(i, 1), a.boundTargets.some(function (e, t) {
      return e.props === n && (a.conf.unbind && a.conf.unbind(a, e), i = t, !0)
    }) && (a.boundTargets.splice(i, 1), e || Le(function () {
      a.boundTargets.length || o(a)
    }))
  }

  function Ze(s, u) {
    var e, i, h = s.options,
      p = {};

    function f(e, t, n, a, i) {
      var o = {};
      return n ? null != a ? (o.container = e[n], o.key = a) : (o.container = e, o.key = n) : (o.container = e, o.key = t), o.default = i, o.acceptsAuto = null == o.default, o
    }

    function c(e, t, n, a, i, o, l) {
      var r, s, u, h = f(e, n, i, o, l);
      return null != t[n] && (s = (t[n] + "").toLowerCase()) && (h.acceptsAuto && s === x || (u = a[s])) && u !== h.container[h.key] && (h.container[h.key] = u, r = !0), null != h.container[h.key] || h.acceptsAuto || (h.container[h.key] = h.default, r = !0), r
    }

    function d(e, t, n, a, i, o, l, r, s) {
      var u, h, p, c, d = f(e, n, i, o, l);
      if (!a) {
        if (null == d.default) throw new Error("Invalid `type`: " + n);
        a = typeof d.default
      }
      return null != t[n] && (d.acceptsAuto && (t[n] + "").toLowerCase() === x || (p = h = t[n], ("number" === (c = a) ? w(p) : typeof p === c) && (h = s && "string" === a && h ? h.trim() : h, 1) && (!r || r(h)))) && h !== d.container[d.key] && (d.container[d.key] = h, u = !0), null != d.container[d.key] || d.acceptsAuto || (d.container[d.key] = d.default, u = !0), u
    }
    if (u = u || {}, ["start", "end"].forEach(function (e, t) {
        var n = u[e],
          a = !1;
        if (n && (ye(n) || (a = _(n, "anchor"))) && n !== h.anchorSE[t]) {
          if (!1 !== s.optionIsAttach.anchorSE[t] && Ue(s, $[h.anchorSE[t]._id]), a && !He(s, $[n._id], e)) throw new Error("Can't bind attachment");
          h.anchorSE[t] = n, s.optionIsAttach.anchorSE[t] = a, i = p.position = !0
        }
      }), !h.anchorSE[0] || !h.anchorSE[1] || h.anchorSE[0] === h.anchorSE[1]) throw new Error("`start` and `end` are required.");
    i && (e = function (e, t) {
      var n, a, i;
      if (!(n = me(e)) || !(a = me(t))) throw new Error("Cannot get frames.");
      return n.length && a.length && (n.reverse(), a.reverse(), n.some(function (t) {
        return a.some(function (e) {
          return e === t && (i = e.contentWindow, !0)
        })
      })), i || window
    }(!1 !== s.optionIsAttach.anchorSE[0] ? $[h.anchorSE[0]._id].element : h.anchorSE[0], !1 !== s.optionIsAttach.anchorSE[1] ? $[h.anchorSE[1]._id].element : h.anchorSE[1])) !== s.baseWindow && (! function (a, e) {
      var t, n, i, o, l, r, s, u, h, p, c = a.aplStats,
        d = e.document,
        f = v + "-" + a._id;

      function y(e) {
        var t = n.appendChild(d.createElementNS(b, "mask"));
        return t.id = e, t.maskUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE, [t.x, t.y, t.width, t.height].forEach(function (e) {
          e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0)
        }), t
      }

      function S(e) {
        var t = n.appendChild(d.createElementNS(b, "marker"));
        return t.id = e, t.markerUnits.baseVal = SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH, t.viewBox.baseVal || t.setAttribute("viewBox", "0 0 0 0"), t
      }

      function m(e) {
        return [e.width, e.height].forEach(function (e) {
          e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100)
        }), e
      }
      a.pathList = {}, Te(c, Y), Object.keys(te).forEach(function (e) {
        var t = e + "_enabled";
        c[t] && (te[e].remove(a), c[t] = !1)
      }), a.baseWindow && a.svg && a.baseWindow.document.body.removeChild(a.svg), Re(a.baseWindow = e), a.bodyOffset = Be(e), a.svg = t = d.createElementNS(b, "svg"), t.className.baseVal = v, t.viewBox.baseVal || t.setAttribute("viewBox", "0 0 0 0"), a.defs = n = t.appendChild(d.createElementNS(b, "defs")), a.linePath = o = n.appendChild(d.createElementNS(b, "path")), o.id = l = f + "-line-path", o.className.baseVal = v + "-line-path", ue && (o.style.fill = "none"), a.lineShape = o = n.appendChild(d.createElementNS(b, "use")), o.id = r = f + "-line-shape", o.href.baseVal = "#" + l, (i = n.appendChild(d.createElementNS(b, "g"))).id = s = f + "-caps", a.capsMaskAnchorSE = [0, 1].map(function () {
        var e = i.appendChild(d.createElementNS(b, "path"));
        return e.className.baseVal = v + "-caps-mask-anchor", e
      }), a.lineMaskMarkerIdSE = [f + "-caps-mask-marker-0", f + "-caps-mask-marker-1"], a.capsMaskMarkerSE = [0, 1].map(function (e) {
        return S(a.lineMaskMarkerIdSE[e])
      }), a.capsMaskMarkerShapeSE = [0, 1].map(function (e) {
        var t = a.capsMaskMarkerSE[e].appendChild(d.createElementNS(b, "use"));
        return t.className.baseVal = v + "-caps-mask-marker-shape", t
      }), a.capsMaskLine = o = i.appendChild(d.createElementNS(b, "use")), o.className.baseVal = v + "-caps-mask-line", o.href.baseVal = "#" + r, a.maskBGRect = o = m(n.appendChild(d.createElementNS(b, "rect"))), o.id = u = f + "-mask-bg-rect", o.className.baseVal = v + "-mask-bg-rect", ue && (o.style.fill = "white"), a.lineMask = m(y(a.lineMaskId = f + "-line-mask")), a.lineMaskBG = o = a.lineMask.appendChild(d.createElementNS(b, "use")), o.href.baseVal = "#" + u, a.lineMaskShape = o = a.lineMask.appendChild(d.createElementNS(b, "use")), o.className.baseVal = v + "-line-mask-shape", o.href.baseVal = "#" + l, o.style.display = "none", a.lineMaskCaps = o = a.lineMask.appendChild(d.createElementNS(b, "use")), o.href.baseVal = "#" + s, a.lineOutlineMask = m(y(h = f + "-line-outline-mask")), (o = a.lineOutlineMask.appendChild(d.createElementNS(b, "use"))).href.baseVal = "#" + u, a.lineOutlineMaskShape = o = a.lineOutlineMask.appendChild(d.createElementNS(b, "use")), o.className.baseVal = v + "-line-outline-mask-shape", o.href.baseVal = "#" + l, a.lineOutlineMaskCaps = o = a.lineOutlineMask.appendChild(d.createElementNS(b, "use")), o.href.baseVal = "#" + s, a.face = t.appendChild(d.createElementNS(b, "g")), a.lineFace = o = a.face.appendChild(d.createElementNS(b, "use")), o.href.baseVal = "#" + r, a.lineOutlineFace = o = a.face.appendChild(d.createElementNS(b, "use")), o.href.baseVal = "#" + r, o.style.mask = "url(#" + h + ")", o.style.display = "none", a.plugMaskIdSE = [f + "-plug-mask-0", f + "-plug-mask-1"], a.plugMaskSE = [0, 1].map(function (e) {
        return y(a.plugMaskIdSE[e])
      }), a.plugMaskShapeSE = [0, 1].map(function (e) {
        var t = a.plugMaskSE[e].appendChild(d.createElementNS(b, "use"));
        return t.className.baseVal = v + "-plug-mask-shape", t
      }), p = [], a.plugOutlineMaskSE = [0, 1].map(function (e) {
        return y(p[e] = f + "-plug-outline-mask-" + e)
      }), a.plugOutlineMaskShapeSE = [0, 1].map(function (e) {
        var t = a.plugOutlineMaskSE[e].appendChild(d.createElementNS(b, "use"));
        return t.className.baseVal = v + "-plug-outline-mask-shape", t
      }), a.plugMarkerIdSE = [f + "-plug-marker-0", f + "-plug-marker-1"], a.plugMarkerSE = [0, 1].map(function (e) {
        var t = S(a.plugMarkerIdSE[e]);
        return ue && (t.markerUnits.baseVal = SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE), t
      }), a.plugMarkerShapeSE = [0, 1].map(function (e) {
        return a.plugMarkerSE[e].appendChild(d.createElementNS(b, "g"))
      }), a.plugFaceSE = [0, 1].map(function (e) {
        return a.plugMarkerShapeSE[e].appendChild(d.createElementNS(b, "use"))
      }), a.plugOutlineFaceSE = [0, 1].map(function (e) {
        var t = a.plugMarkerShapeSE[e].appendChild(d.createElementNS(b, "use"));
        return t.style.mask = "url(#" + p[e] + ")", t.style.display = "none", t
      }), a.plugsFace = o = a.face.appendChild(d.createElementNS(b, "use")), o.className.baseVal = v + "-plugs-face", o.href.baseVal = "#" + r, o.style.display = "none", a.curStats.show_inAnim ? (a.isShown = 1, g[c.show_effect].stop(a, !0)) : a.isShown || (t.style.visibility = "hidden"), d.body.appendChild(t), [0, 1, 2].forEach(function (e) {
        var t, n = a.options.labelSEM[e];
        n && _(n, "label") && (t = $[n._id]).conf.initSvg && t.conf.initSvg(t, a)
      })
    }(s, e), p.line = p.plug = p.lineOutline = p.plugOutline = p.faces = p.effect = !0), p.position = c(h, u, "path", m, null, null, pe.path) || p.position, p.position = c(h, u, "startSocket", n, "socketSE", 0) || p.position, p.position = c(h, u, "endSocket", n, "socketSE", 1) || p.position, [u.startSocketGravity, u.endSocketGravity].forEach(function (e, t) {
      var n, a, i = !1;
      null != e && (Array.isArray(e) ? w(e[0]) && w(e[1]) && (i = [e[0], e[1]], Array.isArray(h.socketGravitySE[t]) && (n = i, a = h.socketGravitySE[t], n.length === a.length && n.every(function (e, t) {
        return e === a[t]
      })) && (i = !1)) : ((e + "").toLowerCase() === x ? i = null : w(e) && 0 <= e && (i = e), i === h.socketGravitySE[t] && (i = !1)), !1 !== i && (h.socketGravitySE[t] = i, p.position = !0))
    }), p.line = d(h, u, "color", null, "lineColor", null, pe.lineColor, null, !0) || p.line, p.line = d(h, u, "size", null, "lineSize", null, pe.lineSize, function (e) {
      return 0 < e
    }) || p.line, ["startPlug", "endPlug"].forEach(function (e, t) {
      p.plug = c(h, u, e, E, "plugSE", t, pe.plugSE[t]) || p.plug, p.plug = d(h, u, e + "Color", "string", "plugColorSE", t, null, null, !0) || p.plug, p.plug = d(h, u, e + "Size", null, "plugSizeSE", t, pe.plugSizeSE[t], function (e) {
        return 0 < e
      }) || p.plug
    }), p.lineOutline = d(h, u, "outline", null, "lineOutlineEnabled", null, pe.lineOutlineEnabled) || p.lineOutline, p.lineOutline = d(h, u, "outlineColor", null, "lineOutlineColor", null, pe.lineOutlineColor, null, !0) || p.lineOutline, p.lineOutline = d(h, u, "outlineSize", null, "lineOutlineSize", null, pe.lineOutlineSize, function (e) {
      return 0 < e && e <= .48
    }) || p.lineOutline, ["startPlugOutline", "endPlugOutline"].forEach(function (e, t) {
      p.plugOutline = d(h, u, e, null, "plugOutlineEnabledSE", t, pe.plugOutlineEnabledSE[t]) || p.plugOutline, p.plugOutline = d(h, u, e + "Color", "string", "plugOutlineColorSE", t, null, null, !0) || p.plugOutline, p.plugOutline = d(h, u, e + "Size", null, "plugOutlineSizeSE", t, pe.plugOutlineSizeSE[t], function (e) {
        return 1 <= e
      }) || p.plugOutline
    }), ["startLabel", "endLabel", "middleLabel"].forEach(function (e, t) {
      var n, a, i, o = u[e],
        l = h.labelSEM[t] && !s.optionIsAttach.labelSEM[t] ? $[h.labelSEM[t]._id].text : h.labelSEM[t],
        r = !1;
      if ((n = "string" == typeof o) && (o = o.trim()), (n || o && (r = _(o, "label"))) && o !== l) {
        if (h.labelSEM[t] && (Ue(s, $[h.labelSEM[t]._id]), h.labelSEM[t] = ""), o) {
          if (r ? (a = $[(i = o)._id]).boundTargets.slice().forEach(function (e) {
              a.conf.removeOption(a, e)
            }) : i = new S(y.captionLabel, [o]), !He(s, $[i._id], e)) throw new Error("Can't bind attachment");
          h.labelSEM[t] = i
        }
        s.optionIsAttach.labelSEM[t] = r
      }
    }), Object.keys(te).forEach(function (a) {
      var e, t, o = te[a],
        n = a + "_enabled",
        i = a + "_options";

      function l(a) {
        var i = {};
        return o.optionsConf.forEach(function (e) {
          var t = e[0],
            n = e[3];
          null == e[4] || i[n] || (i[n] = []), ("function" == typeof t ? t : "id" === t ? c : d).apply(null, [i, a].concat(e.slice(1)))
        }), i
      }

      function r(e) {
        var t, n = a + "_animOptions";
        return e.hasOwnProperty("animation") ? k(e.animation) ? t = s.curStats[n] = ze(e.animation, o.defaultAnimOptions) : (t = !!e.animation, s.curStats[n] = t ? ze({}, o.defaultAnimOptions) : null) : (t = !!o.defaultEnabled, s.curStats[n] = t ? ze({}, o.defaultAnimOptions) : null), t
      }
      u.hasOwnProperty(a) && (e = u[a], k(e) ? (s.curStats[n] = !0, t = s.curStats[i] = l(e), o.anim && (s.curStats[i].animation = r(e))) : (t = s.curStats[n] = !!e) && (s.curStats[i] = l({}), o.anim && (s.curStats[i].animation = r({}))), ce(t, h[a]) && (h[a] = t, p.effect = !0))
    }), De(s, p)
  }

  function Ye(e, t, n) {
    var a = {
      options: {
        anchorSE: [],
        socketSE: [],
        socketGravitySE: [],
        plugSE: [],
        plugColorSE: [],
        plugSizeSE: [],
        plugOutlineEnabledSE: [],
        plugOutlineColorSE: [],
        plugOutlineSizeSE: [],
        labelSEM: ["", "", ""]
      },
      optionIsAttach: {
        anchorSE: [!1, !1],
        labelSEM: [!1, !1, !1]
      },
      curStats: {},
      aplStats: {},
      attachments: [],
      events: {},
      reflowTargets: []
    };
    Te(a.curStats, Y), Te(a.aplStats, Y), Object.keys(te).forEach(function (e) {
      var t = te[e].stats;
      Te(a.curStats, t), Te(a.aplStats, t), a.options[e] = !1
    }), Te(a.curStats, X), Te(a.aplStats, X), a.curStats.show_effect = q, a.curStats.show_animOptions = de(g[q].defaultAnimOptions), Object.defineProperty(this, "_id", {
      value: ++J
    }), a._id = this._id, K[this._id] = a, 1 === arguments.length && (n = e, e = null), n = n || {}, (e || t) && (n = de(n), e && (n.start = e), t && (n.end = t)), a.isShown = a.aplStats.show_on = !n.hide, this.setOptions(n)
  }
  return te = {
      dash: {
        stats: {
          dash_len: {},
          dash_gap: {},
          dash_maxOffset: {}
        },
        anim: !0,
        defaultAnimOptions: {
          duration: 1e3,
          timing: "linear"
        },
        optionsConf: [
          ["type", "len", "number", null, null, null, function (e) {
            return 0 < e
          }],
          ["type", "gap", "number", null, null, null, function (e) {
            return 0 < e
          }]
        ],
        init: function (e) {
          Ie(e, "apl_line_strokeWidth", te.dash.update), e.lineFace.style.strokeDashoffset = 0, te.dash.update(e)
        },
        remove: function (e) {
          var t = e.curStats;
          Ce(e, "apl_line_strokeWidth", te.dash.update), t.dash_animId && (c.remove(t.dash_animId), t.dash_animId = null), e.lineFace.style.strokeDasharray = "none", e.lineFace.style.strokeDashoffset = 0, Te(e.aplStats, te.dash.stats)
        },
        update: function (t) {
          var e, n = t.curStats,
            a = t.aplStats,
            i = a.dash_options,
            o = !1;
          n.dash_len = i.len || 2 * a.line_strokeWidth, n.dash_gap = i.gap || a.line_strokeWidth, n.dash_maxOffset = n.dash_len + n.dash_gap, o = We(t, a, "dash_len", n.dash_len) || o, (o = We(t, a, "dash_gap", n.dash_gap) || o) && (t.lineFace.style.strokeDasharray = a.dash_len + "," + a.dash_gap), n.dash_animOptions ? (o = We(t, a, "dash_maxOffset", n.dash_maxOffset), a.dash_animOptions && (o || ce(n.dash_animOptions, a.dash_animOptions)) && (n.dash_animId && (e = c.stop(n.dash_animId), c.remove(n.dash_animId)), a.dash_animOptions = null), a.dash_animOptions || (n.dash_animId = c.add(function (e) {
            return (1 - e) * a.dash_maxOffset + "px"
          }, function (e) {
            t.lineFace.style.strokeDashoffset = e
          }, n.dash_animOptions.duration, 0, n.dash_animOptions.timing, !1, e), a.dash_animOptions = de(n.dash_animOptions))) : a.dash_animOptions && (n.dash_animId && (c.remove(n.dash_animId), n.dash_animId = null), t.lineFace.style.strokeDashoffset = 0, a.dash_animOptions = null)
        }
      },
      gradient: {
        stats: {
          gradient_colorSE: {
            hasSE: !0
          },
          gradient_pointSE: {
            hasSE: !0,
            hasProps: !0
          }
        },
        optionsConf: [
          ["type", "startColor", "string", "colorSE", 0, null, null, !0],
          ["type", "endColor", "string", "colorSE", 1, null, null, !0]
        ],
        init: function (e) {
          var t, a = e.baseWindow.document,
            n = e.defs,
            i = v + "-" + e._id + "-gradient";
          e.efc_gradient_gradient = t = n.appendChild(a.createElementNS(b, "linearGradient")), t.id = i, t.gradientUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE, [t.x1, t.y1, t.x2, t.y2].forEach(function (e) {
            e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0)
          }), e.efc_gradient_stopSE = [0, 1].map(function (t) {
            var n = e.efc_gradient_gradient.appendChild(a.createElementNS(b, "stop"));
            try {
              n.offset.baseVal = t
            } catch (e) {
              if (e.code !== DOMException.NO_MODIFICATION_ALLOWED_ERR) throw e;
              n.setAttribute("offset", t)
            }
            return n
          }), Ie(e, "cur_plug_colorSE", te.gradient.update), Ie(e, "apl_path", te.gradient.update), e.curStats.line_altColor = !0, e.lineFace.style.stroke = "url(#" + i + ")", te.gradient.update(e)
        },
        remove: function (e) {
          e.efc_gradient_gradient && (e.defs.removeChild(e.efc_gradient_gradient), e.efc_gradient_gradient = e.efc_gradient_stopSE = null), Ce(e, "cur_plug_colorSE", te.gradient.update), Ce(e, "apl_path", te.gradient.update), e.curStats.line_altColor = !1, e.lineFace.style.stroke = e.curStats.line_color, Te(e.aplStats, te.gradient.stats)
        },
        update: function (a) {
          var e, t, i = a.curStats,
            o = a.aplStats,
            n = o.gradient_options,
            l = a.pathList.animVal || a.pathList.baseVal;
          [0, 1].forEach(function (e) {
            i.gradient_colorSE[e] = n.colorSE[e] || i.plug_colorSE[e]
          }), t = l[0][0], i.gradient_pointSE[0] = {
            x: t.x,
            y: t.y
          }, t = (e = l[l.length - 1])[e.length - 1], i.gradient_pointSE[1] = {
            x: t.x,
            y: t.y
          }, [0, 1].forEach(function (t) {
            var n;
            We(a, o.gradient_colorSE, t, n = i.gradient_colorSE[t]) && (ue ? (n = fe(n), a.efc_gradient_stopSE[t].style.stopColor = n[1], a.efc_gradient_stopSE[t].style.stopOpacity = n[0]) : a.efc_gradient_stopSE[t].style.stopColor = n), ["x", "y"].forEach(function (e) {
              (n = i.gradient_pointSE[t][e]) !== o.gradient_pointSE[t][e] && (a.efc_gradient_gradient[e + (t + 1)].baseVal.value = o.gradient_pointSE[t][e] = n)
            })
          })
        }
      },
      dropShadow: {
        stats: {
          dropShadow_dx: {},
          dropShadow_dy: {},
          dropShadow_blur: {},
          dropShadow_color: {},
          dropShadow_opacity: {},
          dropShadow_x: {},
          dropShadow_y: {}
        },
        optionsConf: [
          ["type", "dx", null, null, null, 2],
          ["type", "dy", null, null, null, 4],
          ["type", "blur", null, null, null, 3, function (e) {
            return 0 <= e
          }],
          ["type", "color", null, null, null, "#000", null, !0],
          ["type", "opacity", null, null, null, .8, function (e) {
            return 0 <= e && e <= 1
          }]
        ],
        init: function (t) {
          var e, n, a, i, o, l = t.baseWindow.document,
            r = t.defs,
            s = v + "-" + t._id + "-dropShadow",
            u = (e = l, n = s, o = {}, "boolean" != typeof p && (p = !!window.SVGFEDropShadowElement && !ue), o.elmsAppend = [o.elmFilter = a = e.createElementNS(b, "filter")], a.filterUnits.baseVal = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE, a.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), a.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), a.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100), a.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100), a.id = n, p ? (o.elmOffset = o.elmBlur = i = a.appendChild(e.createElementNS(b, "feDropShadow")), o.styleFlood = i.style) : (o.elmBlur = a.appendChild(e.createElementNS(b, "feGaussianBlur")), o.elmOffset = i = a.appendChild(e.createElementNS(b, "feOffset")), i.result.baseVal = "offsetblur", i = a.appendChild(e.createElementNS(b, "feFlood")), o.styleFlood = i.style, (i = a.appendChild(e.createElementNS(b, "feComposite"))).in2.baseVal = "offsetblur", i.operator.baseVal = SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN, (i = a.appendChild(e.createElementNS(b, "feMerge"))).appendChild(e.createElementNS(b, "feMergeNode")), i.appendChild(e.createElementNS(b, "feMergeNode")).in1.baseVal = "SourceGraphic"), o);
          ["elmFilter", "elmOffset", "elmBlur", "styleFlood", "elmsAppend"].forEach(function (e) {
            t["efc_dropShadow_" + e] = u[e]
          }), u.elmsAppend.forEach(function (e) {
            r.appendChild(e)
          }), t.face.setAttribute("filter", "url(#" + s + ")"), Ie(t, "new_edge4viewBox", te.dropShadow.adjustEdge), te.dropShadow.update(t)
        },
        remove: function (e) {
          var t = e.defs;
          e.efc_dropShadow_elmsAppend && (e.efc_dropShadow_elmsAppend.forEach(function (e) {
            t.removeChild(e)
          }), e.efc_dropShadow_elmFilter = e.efc_dropShadow_elmOffset = e.efc_dropShadow_elmBlur = e.efc_dropShadow_styleFlood = e.efc_dropShadow_elmsAppend = null), Ce(e, "new_edge4viewBox", te.dropShadow.adjustEdge), De(e, {}), e.face.removeAttribute("filter"), Te(e.aplStats, te.dropShadow.stats)
        },
        update: function (e) {
          var t, n, a = e.curStats,
            i = e.aplStats,
            o = i.dropShadow_options;
          a.dropShadow_dx = t = o.dx, We(e, i, "dropShadow_dx", t) && (e.efc_dropShadow_elmOffset.dx.baseVal = t, n = !0), a.dropShadow_dy = t = o.dy, We(e, i, "dropShadow_dy", t) && (e.efc_dropShadow_elmOffset.dy.baseVal = t, n = !0), a.dropShadow_blur = t = o.blur, We(e, i, "dropShadow_blur", t) && (e.efc_dropShadow_elmBlur.setStdDeviation(t, t), n = !0), n && De(e, {}), a.dropShadow_color = t = o.color, We(e, i, "dropShadow_color", t) && (e.efc_dropShadow_styleFlood.floodColor = t), a.dropShadow_opacity = t = o.opacity, We(e, i, "dropShadow_opacity", t) && (e.efc_dropShadow_styleFlood.floodOpacity = t)
        },
        adjustEdge: function (a, i) {
          var e, t, o = a.curStats,
            l = a.aplStats;
          null != o.dropShadow_dx && (e = 3 * o.dropShadow_blur, (t = {
            x1: i.x1 - e + o.dropShadow_dx,
            y1: i.y1 - e + o.dropShadow_dy,
            x2: i.x2 + e + o.dropShadow_dx,
            y2: i.y2 + e + o.dropShadow_dy
          }).x1 < i.x1 && (i.x1 = t.x1), t.y1 < i.y1 && (i.y1 = t.y1), t.x2 > i.x2 && (i.x2 = t.x2), t.y2 > i.y2 && (i.y2 = t.y2), ["x", "y"].forEach(function (e) {
            var t, n = "dropShadow_" + e;
            o[n] = t = i[e + "1"], We(a, l, n, t) && (a.efc_dropShadow_elmFilter[e].baseVal.value = t)
          }))
        }
      }
    }, Object.keys(te).forEach(function (e) {
      var t = te[e],
        n = t.stats;
      n[e + "_enabled"] = {
        iniValue: !1
      }, n[e + "_options"] = {
        hasProps: !0
      }, t.anim && (n[e + "_animOptions"] = {}, n[e + "_animId"] = {})
    }), g = {
      none: {
        defaultAnimOptions: {},
        init: function (e, t) {
          var n = e.curStats;
          n.show_animId && (c.remove(n.show_animId), n.show_animId = null), g.none.start(e, t)
        },
        start: function (e, t) {
          g.none.stop(e, !0)
        },
        stop: function (e, t, n) {
          var a = e.curStats;
          return n = null != n ? n : e.aplStats.show_on, a.show_inAnim = !1, t && Ge(e, n), n ? 1 : 0
        }
      },
      fade: {
        defaultAnimOptions: {
          duration: 300,
          timing: "linear"
        },
        init: function (n, e) {
          var t = n.curStats,
            a = n.aplStats;
          t.show_animId && c.remove(t.show_animId), t.show_animId = c.add(function (e) {
            return e
          }, function (e, t) {
            t ? g.fade.stop(n, !0) : (n.svg.style.opacity = e + "", le && (Ae(n, n.svg), Ve(n)))
          }, a.show_animOptions.duration, 1, a.show_animOptions.timing, null, !1), g.fade.start(n, e)
        },
        start: function (e, t) {
          var n, a = e.curStats;
          a.show_inAnim && (n = c.stop(a.show_animId)), Ge(e, 1), a.show_inAnim = !0, c.start(a.show_animId, !e.aplStats.show_on, null != t ? t : n)
        },
        stop: function (e, t, n) {
          var a, i = e.curStats;
          return n = null != n ? n : e.aplStats.show_on, a = i.show_inAnim ? c.stop(i.show_animId) : n ? 1 : 0, i.show_inAnim = !1, t && (e.svg.style.opacity = n ? "" : "0", Ge(e, n)), a
        }
      },
      draw: {
        defaultAnimOptions: {
          duration: 500,
          timing: [.58, 0, .42, 1]
        },
        init: function (n, e) {
          var t = n.curStats,
            a = n.aplStats,
            l = n.pathList.baseVal,
            i = Oe(l),
            r = i.segsLen,
            s = i.lenAll;
          t.show_animId && c.remove(t.show_animId), t.show_animId = c.add(function (e) {
            var t, n, a, i, o = -1;
            if (0 === e) n = [
              [l[0][0], l[0][0]]
            ];
            else if (1 === e) n = l;
            else {
              for (t = s * e, n = []; t >= r[++o];) n.push(l[o]), t -= r[o];
              t && (2 === (a = l[o]).length ? n.push([a[0], ve(a[0], a[1], t / r[o])]) : (i = xe(a[0], a[1], a[2], a[3], ke(a[0], a[1], a[2], a[3], t)), n.push([a[0], i.fromP1, i.fromP2, i])))
            }
            return n
          }, function (e, t) {
            t ? g.draw.stop(n, !0) : (n.pathList.animVal = e, De(n, {
              path: !0
            }))
          }, a.show_animOptions.duration, 1, a.show_animOptions.timing, null, !1), g.draw.start(n, e)
        },
        start: function (e, t) {
          var n, a = e.curStats;
          a.show_inAnim && (n = c.stop(a.show_animId)), Ge(e, 1), a.show_inAnim = !0, Ie(e, "apl_position", g.draw.update), c.start(a.show_animId, !e.aplStats.show_on, null != t ? t : n)
        },
        stop: function (e, t, n) {
          var a, i = e.curStats;
          return n = null != n ? n : e.aplStats.show_on, a = i.show_inAnim ? c.stop(i.show_animId) : n ? 1 : 0, i.show_inAnim = !1, t && (e.pathList.animVal = n ? null : [
            [e.pathList.baseVal[0][0], e.pathList.baseVal[0][0]]
          ], De(e, {
            path: !0
          }), Ge(e, n)), a
        },
        update: function (e) {
          Ce(e, "apl_position", g.draw.update), e.curStats.show_inAnim ? g.draw.init(e, g.draw.stop(e)) : e.aplStats.show_animOptions = {}
        }
      }
    },
    function () {
      function r(n) {
        return function (e) {
          var t = {};
          t[n] = e, this.setOptions(t)
        }
      } [
        ["start", "anchorSE", 0],
        ["end", "anchorSE", 1],
        ["color", "lineColor"],
        ["size", "lineSize"],
        ["startSocketGravity", "socketGravitySE", 0],
        ["endSocketGravity", "socketGravitySE", 1],
        ["startPlugColor", "plugColorSE", 0],
        ["endPlugColor", "plugColorSE", 1],
        ["startPlugSize", "plugSizeSE", 0],
        ["endPlugSize", "plugSizeSE", 1],
        ["outline", "lineOutlineEnabled"],
        ["outlineColor", "lineOutlineColor"],
        ["outlineSize", "lineOutlineSize"],
        ["startPlugOutline", "plugOutlineEnabledSE", 0],
        ["endPlugOutline", "plugOutlineEnabledSE", 1],
        ["startPlugOutlineColor", "plugOutlineColorSE", 0],
        ["endPlugOutlineColor", "plugOutlineColorSE", 1],
        ["startPlugOutlineSize", "plugOutlineSizeSE", 0],
        ["endPlugOutlineSize", "plugOutlineSizeSE", 1]
      ].forEach(function (e) {
        var t = e[0],
          n = e[1],
          a = e[2];
        Object.defineProperty(Ye.prototype, t, {
          get: function () {
            var e = null != a ? K[this._id].options[n][a] : n ? K[this._id].options[n] : K[this._id].options[t];
            return null == e ? x : de(e)
          },
          set: r(t),
          enumerable: !0
        })
      }), [
        ["path", m],
        ["startSocket", n, "socketSE", 0],
        ["endSocket", n, "socketSE", 1],
        ["startPlug", E, "plugSE", 0],
        ["endPlug", E, "plugSE", 1]
      ].forEach(function (e) {
        var a = e[0],
          i = e[1],
          o = e[2],
          l = e[3];
        Object.defineProperty(Ye.prototype, a, {
          get: function () {
            var t, n = null != l ? K[this._id].options[o][l] : o ? K[this._id].options[o] : K[this._id].options[a];
            return n ? Object.keys(i).some(function (e) {
              return i[e] === n && (t = e, !0)
            }) ? t : new Error("It's broken") : x
          },
          set: r(a),
          enumerable: !0
        })
      }), Object.keys(te).forEach(function (n) {
        var a = te[n];
        Object.defineProperty(Ye.prototype, n, {
          get: function () {
            var u, e, t = K[this._id].options[n];
            return k(t) ? (u = t, e = a.optionsConf.reduce(function (e, t) {
              var n, a = t[0],
                i = t[1],
                o = t[2],
                l = t[3],
                r = t[4],
                s = null != r ? u[l][r] : l ? u[l] : u[i];
              return e[i] = "id" === a ? s ? Object.keys(o).some(function (e) {
                return o[e] === s && (n = e, !0)
              }) ? n : new Error("It's broken") : x : null == s ? x : de(s), e
            }, {}), a.anim && (e.animation = de(u.animation)), e) : t
          },
          set: r(n),
          enumerable: !0
        })
      }), ["startLabel", "endLabel", "middleLabel"].forEach(function (e, n) {
        Object.defineProperty(Ye.prototype, e, {
          get: function () {
            var e = K[this._id],
              t = e.options;
            return t.labelSEM[n] && !e.optionIsAttach.labelSEM[n] ? $[t.labelSEM[n]._id].text : t.labelSEM[n] || ""
          },
          set: r(e),
          enumerable: !0
        })
      })
    }(), Ye.prototype.setOptions = function (e) {
      return Ze(K[this._id], e), this
    }, Ye.prototype.position = function () {
      return De(K[this._id], {
        position: !0
      }), this
    }, Ye.prototype.remove = function () {
      var t = K[this._id],
        n = t.curStats;
      Object.keys(te).forEach(function (e) {
        var t = e + "_animId";
        n[t] && c.remove(n[t])
      }), n.show_animId && c.remove(n.show_animId), t.attachments.slice().forEach(function (e) {
        Ue(t, e)
      }), t.baseWindow && t.svg && t.baseWindow.document.body.removeChild(t.svg), delete K[this._id]
    }, Ye.prototype.show = function (e, t) {
      return je(K[this._id], !0, e, t), this
    }, Ye.prototype.hide = function (e, t) {
      return je(K[this._id], !1, e, t), this
    }, o = function (t) {
      t && $[t._id] && (t.boundTargets.slice().forEach(function (e) {
        Ue(e.props, t, !0)
      }), t.conf.remove && t.conf.remove(t), delete $[t._id])
    }, S = function () {
      function e(e, t) {
        var n, a = {
            conf: e,
            curStats: {},
            aplStats: {},
            boundTargets: []
          },
          i = {};
        e.argOptions.every(function (e) {
          return !(!t.length || ("string" == typeof e.type ? typeof t[0] !== e.type : "function" != typeof e.type || !e.type(t[0]))) && (i[e.optionName] = t.shift(), !0)
        }), n = t.length && k(t[0]) ? de(t[0]) : {}, Object.keys(i).forEach(function (e) {
          n[e] = i[e]
        }), e.stats && (Te(a.curStats, e.stats), Te(a.aplStats, e.stats)), Object.defineProperty(this, "_id", {
          value: ++ee
        }), Object.defineProperty(this, "isRemoved", {
          get: function () {
            return !$[this._id]
          }
        }), a._id = this._id, e.init && !e.init(a, n) || ($[this._id] = a)
      }
      return e.prototype.remove = function () {
        var t = this,
          n = $[t._id];
        n && (n.boundTargets.slice().forEach(function (e) {
          n.conf.removeOption(n, e)
        }), Le(function () {
          var e = $[t._id];
          e && (console.error("LeaderLineAttachment was not removed by removeOption"), o(e))
        }))
      }, e
    }(), window.LeaderLineAttachment = S, _ = function (e, t) {
      return e instanceof S && (!(e.isRemoved || t && $[e._id].conf.type !== t) || null)
    }, y = {
      pointAnchor: {
        type: "anchor",
        argOptions: [{
          optionName: "element",
          type: ye
        }],
        init: function (e, t) {
          return e.element = y.pointAnchor.checkElement(t.element), e.x = y.pointAnchor.parsePercent(t.x, !0) || [.5, !0], e.y = y.pointAnchor.parsePercent(t.y, !0) || [.5, !0], !0
        },
        removeOption: function (e, t) {
          var n = t.props,
            a = {},
            i = e.element,
            o = n.options.anchorSE["start" === t.optionName ? 1 : 0];
          i === o && (i = o === document.body ? new S(y.pointAnchor, [i]) : document.body), a[t.optionName] = i, Ze(n, a)
        },
        getBBoxNest: function (e, t) {
          var n = ge(e.element, t.baseWindow),
            a = n.width,
            i = n.height;
          return n.width = n.height = 0, n.left = n.right = n.left + e.x[0] * (e.x[1] ? a : 1), n.top = n.bottom = n.top + e.y[0] * (e.y[1] ? i : 1), n
        },
        parsePercent: function (e, t) {
          var n, a, i = !1;
          return w(e) ? a = e : "string" == typeof e && (n = u.exec(e)) && n[2] && (i = 0 !== (a = parseFloat(n[1]) / 100)), null != a && (t || 0 <= a) ? [a, i] : null
        },
        checkElement: function (e) {
          if (null == e) e = document.body;
          else if (!ye(e)) throw new Error("`element` must be Element");
          return e
        }
      },
      areaAnchor: {
        type: "anchor",
        argOptions: [{
          optionName: "element",
          type: ye
        }, {
          optionName: "shape",
          type: "string"
        }],
        stats: {
          color: {},
          strokeWidth: {},
          elementWidth: {},
          elementHeight: {},
          elementLeft: {},
          elementTop: {},
          pathListRel: {},
          bBoxRel: {},
          pathData: {},
          viewBoxBBox: {
            hasProps: !0
          },
          dashLen: {},
          dashGap: {}
        },
        init: function (i, e) {
          var t, n, a, o = [];
          return i.element = y.pointAnchor.checkElement(e.element), "string" == typeof e.color && (i.color = e.color.trim()), "string" == typeof e.fillColor && (i.fill = e.fillColor.trim()), w(e.size) && 0 <= e.size && (i.size = e.size), e.dash && (i.dash = !0, w(e.dash.len) && 0 < e.dash.len && (i.dashLen = e.dash.len), w(e.dash.gap) && 0 < e.dash.gap && (i.dashGap = e.dash.gap)), "circle" === e.shape ? i.shape = e.shape : "polygon" === e.shape && Array.isArray(e.points) && 3 <= e.points.length && e.points.every(function (e) {
            var t = {};
            return !(!(t.x = y.pointAnchor.parsePercent(e[0], !0)) || !(t.y = y.pointAnchor.parsePercent(e[1], !0))) && (o.push(t), (t.x[1] || t.y[1]) && (i.hasRatio = !0), !0)
          }) ? (i.shape = e.shape, i.points = o) : (i.shape = "rect", i.radius = w(e.radius) && 0 <= e.radius ? e.radius : 0), "rect" !== i.shape && "circle" !== i.shape || (i.x = y.pointAnchor.parsePercent(e.x, !0) || [-.05, !0], i.y = y.pointAnchor.parsePercent(e.y, !0) || [-.05, !0], i.width = y.pointAnchor.parsePercent(e.width) || [1.1, !0], i.height = y.pointAnchor.parsePercent(e.height) || [1.1, !0], (i.x[1] || i.y[1] || i.width[1] || i.height[1]) && (i.hasRatio = !0)), t = i.element.ownerDocument, i.svg = n = t.createElementNS(b, "svg"), n.className.baseVal = v + "-areaAnchor", n.viewBox.baseVal || n.setAttribute("viewBox", "0 0 0 0"), i.path = n.appendChild(t.createElementNS(b, "path")), i.path.style.fill = i.fill || "none", i.isShown = !1, n.style.visibility = "hidden", t.body.appendChild(n), Re(a = t.defaultView), i.bodyOffset = Be(a), i.updateColor = function () {
            var e, t = i.curStats,
              n = i.aplStats,
              a = i.boundTargets.length ? i.boundTargets[0].props.curStats : null;
            t.color = e = i.color || (a ? a.line_color : pe.lineColor), We(i, n, "color", e) && (i.path.style.stroke = e)
          }, i.updateShow = function () {
            Ge(i, i.boundTargets.some(function (e) {
              return !0 === e.props.isShown
            }))
          }, !0
        },
        bind: function (e, t) {
          var n = t.props;
          return e.color || Ie(n, "cur_line_color", e.updateColor), Ie(n, "svgShow", e.updateShow), Le(function () {
            e.updateColor(), e.updateShow()
          }), !0
        },
        unbind: function (e, t) {
          var n = t.props;
          e.color || Ce(n, "cur_line_color", e.updateColor), Ce(n, "svgShow", e.updateShow), 1 < e.boundTargets.length && Le(function () {
            e.updateColor(), e.updateShow(), y.areaAnchor.update(e) && e.boundTargets.forEach(function (e) {
              De(e.props, {
                position: !0
              })
            })
          })
        },
        removeOption: function (e, t) {
          y.pointAnchor.removeOption(e, t)
        },
        remove: function (t) {
          t.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), t.boundTargets.forEach(function (e) {
            y.areaAnchor.unbind(t, e)
          })), t.svg.parentNode.removeChild(t.svg)
        },
        getStrokeWidth: function (e, t) {
          return y.areaAnchor.update(e) && 1 < e.boundTargets.length && Le(function () {
            e.boundTargets.forEach(function (e) {
              e.props !== t && De(e.props, {
                position: !0
              })
            })
          }), e.curStats.strokeWidth
        },
        getPathData: function (e, t) {
          var n = ge(e.element, t.baseWindow);
          return we(e.curStats.pathListRel, function (e) {
            e.x += n.left, e.y += n.top
          })
        },
        getBBoxNest: function (e, t) {
          var n = ge(e.element, t.baseWindow),
            a = e.curStats.bBoxRel;
          return {
            left: a.left + n.left,
            top: a.top + n.top,
            right: a.right + n.left,
            bottom: a.bottom + n.top,
            width: a.width,
            height: a.height
          }
        },
        update: function (t) {
          var a, n, i, o, e, l, r, s, u, h, p, c, d, f, y, S, m, g, _, v, E, x, b, k, w, O, M, I, C, L, A, V, P = t.curStats,
            N = t.aplStats,
            T = t.boundTargets.length ? t.boundTargets[0].props.curStats : null,
            W = {};
          if (W.strokeWidth = We(t, P, "strokeWidth", null != t.size ? t.size : T ? T.line_strokeWidth : pe.lineSize), a = Se(t.element), W.elementWidth = We(t, P, "elementWidth", a.width), W.elementHeight = We(t, P, "elementHeight", a.height), W.elementLeft = We(t, P, "elementLeft", a.left), W.elementTop = We(t, P, "elementTop", a.top), W.strokeWidth || t.hasRatio && (W.elementWidth || W.elementHeight)) {
            switch (t.shape) {
            case "rect":
              (v = {
                left: t.x[0] * (t.x[1] ? a.width : 1),
                top: t.y[0] * (t.y[1] ? a.height : 1),
                width: t.width[0] * (t.width[1] ? a.width : 1),
                height: t.height[0] * (t.height[1] ? a.height : 1)
              }).right = v.left + v.width, v.bottom = v.top + v.height, k = P.strokeWidth / 2, x = (b = Math.min(v.width, v.height)) ? b / 2 * Math.SQRT2 + k : 0, (E = t.radius ? t.radius <= x ? t.radius : x : 0) ? (O = E - (w = (E - k) / Math.SQRT2), I = E * U, M = [{
                x: v.left - O,
                y: v.top + w
              }, {
                x: v.left + w,
                y: v.top - O
              }, {
                x: v.right - w,
                y: v.top - O
              }, {
                x: v.right + O,
                y: v.top + w
              }, {
                x: v.right + O,
                y: v.bottom - w
              }, {
                x: v.right - w,
                y: v.bottom + O
              }, {
                x: v.left + w,
                y: v.bottom + O
              }, {
                x: v.left - O,
                y: v.bottom - w
              }], P.pathListRel = [
                [M[0], {
                  x: M[0].x,
                  y: M[0].y - I
                }, {
                  x: M[1].x - I,
                  y: M[1].y
                }, M[1]]
              ], M[1].x !== M[2].x && P.pathListRel.push([M[1], M[2]]), P.pathListRel.push([M[2], {
                x: M[2].x + I,
                y: M[2].y
              }, {
                x: M[3].x,
                y: M[3].y - I
              }, M[3]]), M[3].y !== M[4].y && P.pathListRel.push([M[3], M[4]]), P.pathListRel.push([M[4], {
                x: M[4].x,
                y: M[4].y + I
              }, {
                x: M[5].x + I,
                y: M[5].y
              }, M[5]]), M[5].x !== M[6].x && P.pathListRel.push([M[5], M[6]]), P.pathListRel.push([M[6], {
                x: M[6].x - I,
                y: M[6].y
              }, {
                x: M[7].x,
                y: M[7].y + I
              }, M[7]]), M[7].y !== M[0].y && P.pathListRel.push([M[7], M[0]]), P.pathListRel.push([]), O = E - w + P.strokeWidth / 2, M = [{
                x: v.left - O,
                y: v.top - O
              }, {
                x: v.right + O,
                y: v.bottom + O
              }]) : (O = P.strokeWidth / 2, M = [{
                x: v.left - O,
                y: v.top - O
              }, {
                x: v.right + O,
                y: v.bottom + O
              }], P.pathListRel = [
                [M[0], {
                  x: M[1].x,
                  y: M[0].y
                }],
                [{
                  x: M[1].x,
                  y: M[0].y
                }, M[1]],
                [M[1], {
                  x: M[0].x,
                  y: M[1].y
                }],
                []
              ], M = [{
                x: v.left - P.strokeWidth,
                y: v.top - P.strokeWidth
              }, {
                x: v.right + P.strokeWidth,
                y: v.bottom + P.strokeWidth
              }]), P.bBoxRel = {
                left: M[0].x,
                top: M[0].y,
                right: M[1].x,
                bottom: M[1].y,
                width: M[1].x - M[0].x,
                height: M[1].y - M[0].y
              };
              break;
            case "circle":
              (r = {
                left: t.x[0] * (t.x[1] ? a.width : 1),
                top: t.y[0] * (t.y[1] ? a.height : 1),
                width: t.width[0] * (t.width[1] ? a.width : 1),
                height: t.height[0] * (t.height[1] ? a.height : 1)
              }).width || r.height || (r.width = r.height = 10), r.width || (r.width = r.height), r.height || (r.height = r.width), r.right = r.left + r.width, r.bottom = r.top + r.height, s = r.left + r.width / 2, u = r.top + r.height / 2, f = P.strokeWidth / 2, y = r.width / 2, S = r.height / 2, h = y * Math.SQRT2 + f, p = S * Math.SQRT2 + f, c = h * U, d = p * U, _ = [{
                x: s - h,
                y: u
              }, {
                x: s,
                y: u - p
              }, {
                x: s + h,
                y: u
              }, {
                x: s,
                y: u + p
              }], P.pathListRel = [
                [_[0], {
                  x: _[0].x,
                  y: _[0].y - d
                }, {
                  x: _[1].x - c,
                  y: _[1].y
                }, _[1]],
                [_[1], {
                  x: _[1].x + c,
                  y: _[1].y
                }, {
                  x: _[2].x,
                  y: _[2].y - d
                }, _[2]],
                [_[2], {
                  x: _[2].x,
                  y: _[2].y + d
                }, {
                  x: _[3].x + c,
                  y: _[3].y
                }, _[3]],
                [_[3], {
                  x: _[3].x - c,
                  y: _[3].y
                }, {
                  x: _[0].x,
                  y: _[0].y + d
                }, _[0]],
                []
              ], m = h - y + P.strokeWidth / 2, g = p - S + P.strokeWidth / 2, _ = [{
                x: r.left - m,
                y: r.top - g
              }, {
                x: r.right + m,
                y: r.bottom + g
              }], P.bBoxRel = {
                left: _[0].x,
                top: _[0].y,
                right: _[1].x,
                bottom: _[1].y,
                width: _[1].x - _[0].x,
                height: _[1].y - _[0].y
              };
              break;
            case "polygon":
              t.points.forEach(function (e) {
                var t = e.x[0] * (e.x[1] ? a.width : 1),
                  n = e.y[0] * (e.y[1] ? a.height : 1);
                i ? (t < i.left && (i.left = t), t > i.right && (i.right = t), n < i.top && (i.top = n), n > i.bottom && (i.bottom = n)) : i = {
                  left: t,
                  right: t,
                  top: n,
                  bottom: n
                }, o ? P.pathListRel.push([o, {
                  x: t,
                  y: n
                }]) : P.pathListRel = [], o = {
                  x: t,
                  y: n
                }
              }), P.pathListRel.push([]), e = P.strokeWidth / 2, l = [{
                x: i.left - e,
                y: i.top - e
              }, {
                x: i.right + e,
                y: i.bottom + e
              }], P.bBoxRel = {
                left: l[0].x,
                top: l[0].y,
                right: l[1].x,
                bottom: l[1].y,
                width: l[1].x - l[0].x,
                height: l[1].y - l[0].y
              }
            }
            W.pathListRel = W.bBoxRel = !0
          }
          return (W.pathListRel || W.elementLeft || W.elementTop) && (P.pathData = we(P.pathListRel, function (e) {
            e.x += a.left, e.y += a.top
          })), We(t, N, "strokeWidth", n = P.strokeWidth) && (t.path.style.strokeWidth = n + "px"), Me(n = P.pathData, N.pathData) && (t.path.setPathData(n), N.pathData = n, W.pathData = !0), t.dash && (!W.pathData && (!W.strokeWidth || t.dashLen && t.dashGap) || (P.dashLen = t.dashLen || 2 * P.strokeWidth, P.dashGap = t.dashGap || P.strokeWidth), W.dash = We(t, N, "dashLen", P.dashLen) || W.dash, W.dash = We(t, N, "dashGap", P.dashGap) || W.dash, W.dash && (t.path.style.strokeDasharray = N.dashLen + "," + N.dashGap)), C = P.viewBoxBBox, L = N.viewBoxBBox, A = t.svg.viewBox.baseVal, V = t.svg.style, C.x = P.bBoxRel.left + a.left, C.y = P.bBoxRel.top + a.top, C.width = P.bBoxRel.width, C.height = P.bBoxRel.height, ["x", "y", "width", "height"].forEach(function (e) {
            (n = C[e]) !== L[e] && (A[e] = L[e] = n, V[oe[e]] = n + ("x" === e || "y" === e ? t.bodyOffset[e] : 0) + "px")
          }), W.strokeWidth || W.pathListRel || W.bBoxRel
        }
      },
      mouseHoverAnchor: {
        type: "anchor",
        argOptions: [{
          optionName: "element",
          type: ye
        }, {
          optionName: "showEffectName",
          type: "string"
        }],
        style: {
          backgroundImage: "url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f8f881",
          cursor: "default"
        },
        hoverStyle: {
          backgroundImage: "none",
          backgroundColor: "#fadf8f"
        },
        padding: {
          top: 1,
          right: 15,
          bottom: 1,
          left: 2
        },
        minHeight: 15,
        backgroundPosition: {
          right: 2,
          top: 2
        },
        backgroundSize: {
          width: 12,
          height: 12
        },
        dirKeys: [
          ["top", "Top"],
          ["right", "Right"],
          ["bottom", "Bottom"],
          ["left", "Left"]
        ],
        init: function (a, i) {
          var o, t, e, n, l, r, s, u, h, p, c, d = y.mouseHoverAnchor,
            f = {};
          if (a.element = y.pointAnchor.checkElement(i.element), u = a.element, !((p = u.ownerDocument) && (h = p.defaultView) && h.HTMLElement && u instanceof h.HTMLElement)) throw new Error("`element` must be HTML element");
          return d.style.backgroundSize = d.backgroundSize.width + "px " + d.backgroundSize.height + "px", ["style", "hoverStyle"].forEach(function (e) {
            var n = d[e];
            a[e] = Object.keys(n).reduce(function (e, t) {
              return e[t] = n[t], e
            }, {})
          }), "inline" === (o = a.element.ownerDocument.defaultView.getComputedStyle(a.element, "")).display ? a.style.display = "inline-block" : "none" === o.display && (a.style.display = "block"), y.mouseHoverAnchor.dirKeys.forEach(function (e) {
            var t = e[0],
              n = "padding" + e[1];
            parseFloat(o[n]) < d.padding[t] && (a.style[n] = d.padding[t] + "px")
          }), a.style.display && (n = a.element.style.display, a.element.style.display = a.style.display), y.mouseHoverAnchor.dirKeys.forEach(function (e) {
            var t = "padding" + e[1];
            a.style[t] && (f[t] = a.element.style[t], a.element.style[t] = a.style[t])
          }), (e = a.element.getBoundingClientRect()).height < d.minHeight && (le ? (c = d.minHeight, "content-box" === o.boxSizing ? c -= parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth) + parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) : "padding-box" === o.boxSizing && (c -= parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth)), a.style.height = c + "px") : a.style.height = parseFloat(o.height) + (d.minHeight - e.height) + "px"), a.style.backgroundPosition = ue ? e.width - d.backgroundSize.width - d.backgroundPosition.right + "px " + d.backgroundPosition.top + "px" : "right " + d.backgroundPosition.right + "px top " + d.backgroundPosition.top + "px", a.style.display && (a.element.style.display = n), y.mouseHoverAnchor.dirKeys.forEach(function (e) {
            var t = "padding" + e[1];
            a.style[t] && (a.element.style[t] = f[t])
          }), ["style", "hoverStyle"].forEach(function (e) {
            var t = a[e],
              n = i[e];
            k(n) && Object.keys(n).forEach(function (e) {
              "string" == typeof n[e] || w(n[e]) ? t[e] = n[e] : null == n[e] && delete t[e]
            })
          }), "function" == typeof i.onSwitch && (s = i.onSwitch), i.showEffectName && g[i.showEffectName] && (a.showEffectName = l = i.showEffectName), r = i.animOptions, a.elmStyle = t = a.element.style, a.mouseenter = function (e) {
            a.hoverStyleSave = d.getStyles(t, Object.keys(a.hoverStyle)), d.setStyles(t, a.hoverStyle), a.boundTargets.forEach(function (e) {
              je(e.props, !0, l, r)
            }), s && s(e)
          }, a.mouseleave = function (e) {
            d.setStyles(t, a.hoverStyleSave), a.boundTargets.forEach(function (e) {
              je(e.props, !1, l, r)
            }), s && s(e)
          }, !0
        },
        bind: function (e, t) {
          var n, a, i, o, l;
          return t.props.svg ? y.mouseHoverAnchor.llShow(t.props, !1, e.showEffectName) : Le(function () {
            y.mouseHoverAnchor.llShow(t.props, !1, e.showEffectName)
          }), e.enabled || (e.styleSave = y.mouseHoverAnchor.getStyles(e.elmStyle, Object.keys(e.style)), y.mouseHoverAnchor.setStyles(e.elmStyle, e.style), e.removeEventListener = (n = e.element, a = e.mouseenter, i = e.mouseleave, "onmouseenter" in n && "onmouseleave" in n ? (n.addEventListener("mouseenter", a, !1), n.addEventListener("mouseleave", i, !1), function () {
            n.removeEventListener("mouseenter", a, !1), n.removeEventListener("mouseleave", i, !1)
          }) : (console.warn("mouseenter and mouseleave events polyfill is enabled."), o = function (e) {
            e.relatedTarget && (e.relatedTarget === this || this.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY) || a.apply(this, arguments)
          }, n.addEventListener("mouseover", o), l = function (e) {
            e.relatedTarget && (e.relatedTarget === this || this.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY) || i.apply(this, arguments)
          }, n.addEventListener("mouseout", l), function () {
            n.removeEventListener("mouseover", o, !1), n.removeEventListener("mouseout", l, !1)
          })), e.enabled = !0), !0
        },
        unbind: function (e, t) {
          e.enabled && e.boundTargets.length <= 1 && (e.removeEventListener(), y.mouseHoverAnchor.setStyles(e.elmStyle, e.styleSave), e.enabled = !1), y.mouseHoverAnchor.llShow(t.props, !0, e.showEffectName)
        },
        removeOption: function (e, t) {
          y.pointAnchor.removeOption(e, t)
        },
        remove: function (t) {
          t.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), t.boundTargets.forEach(function (e) {
            y.mouseHoverAnchor.unbind(t, e)
          }))
        },
        getBBoxNest: function (e, t) {
          return ge(e.element, t.baseWindow)
        },
        llShow: function (e, t, n) {
          g[n || e.curStats.show_effect].stop(e, !0, t), e.aplStats.show_on = t
        },
        getStyles: function (n, e) {
          return e.reduce(function (e, t) {
            return e[t] = n[t], e
          }, {})
        },
        setStyles: function (t, n) {
          Object.keys(n).forEach(function (e) {
            t[e] = n[e]
          })
        }
      },
      captionLabel: {
        type: "label",
        argOptions: [{
          optionName: "text",
          type: "string"
        }],
        stats: {
          color: {},
          x: {},
          y: {}
        },
        textStyleProps: ["fontFamily", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "kerning", "letterSpacing", "wordSpacing", "textDecoration"],
        init: function (u, t) {
          return "string" == typeof t.text && (u.text = t.text.trim()), !!u.text && ("string" == typeof t.color && (u.color = t.color.trim()), u.outlineColor = "string" == typeof t.outlineColor ? t.outlineColor.trim() : "#fff", Array.isArray(t.offset) && w(t.offset[0]) && w(t.offset[1]) && (u.offset = {
            x: t.offset[0],
            y: t.offset[1]
          }), w(t.lineOffset) && (u.lineOffset = t.lineOffset), y.captionLabel.textStyleProps.forEach(function (e) {
            null != t[e] && (u[e] = t[e])
          }), u.updateColor = function (e) {
            y.captionLabel.updateColor(u, e)
          }, u.updateSocketXY = function (e) {
            var t, n, a, i, o = u.curStats,
              l = u.aplStats,
              r = e.curStats,
              s = r.position_socketXYSE[u.socketIndex];
            null != s.x && (u.offset ? (o.x = s.x + u.offset.x, o.y = s.y + u.offset.y) : (t = u.height / 2, n = Math.max(r.attach_plugSideLenSE[u.socketIndex] || 0, r.line_strokeWidth / 2), a = r.position_socketXYSE[u.socketIndex ? 0 : 1], s.socketId === L || s.socketId === I ? (o.x = s.socketId === L ? s.x - t - u.width : s.x + t, o.y = a.y < s.y ? s.y + n + t : s.y - n - t - u.height) : (o.x = a.x < s.x ? s.x + n + t : s.x - n - t - u.width, o.y = s.socketId === M ? s.y - t - u.height : s.y + t)), We(u, l, "x", i = o.x) && (u.elmPosition.x.baseVal.getItem(0).value = i), We(u, l, "y", i = o.y) && (u.elmPosition.y.baseVal.getItem(0).value = i + u.height))
          }, u.updatePath = function (e) {
            var t, n, a = u.curStats,
              i = u.aplStats,
              o = e.pathList.animVal || e.pathList.baseVal;
            o && (t = y.captionLabel.getMidPoint(o, u.lineOffset), a.x = t.x - u.width / 2, a.y = t.y - u.height / 2, We(u, i, "x", n = a.x) && (u.elmPosition.x.baseVal.getItem(0).value = n), We(u, i, "y", n = a.y) && (u.elmPosition.y.baseVal.getItem(0).value = n + u.height))
          }, u.updateShow = function (e) {
            y.captionLabel.updateShow(u, e)
          }, ue && (u.adjustEdge = function (e, t) {
            var n = u.curStats;
            null != n.x && y.captionLabel.adjustEdge(t, {
              x: n.x,
              y: n.y,
              width: u.width,
              height: u.height
            }, u.strokeWidth / 2)
          }), !0)
        },
        updateColor: function (e, t) {
          var n, a = e.curStats,
            i = e.aplStats,
            o = t.curStats;
          a.color = n = e.color || o.line_color, We(e, i, "color", n) && (e.styleFill.fill = n)
        },
        updateShow: function (e, t) {
          var n = !0 === t.isShown;
          n !== e.isShown && (e.styleShow.visibility = n ? "" : "hidden", e.isShown = n)
        },
        adjustEdge: function (e, t, n) {
          var a = {
            x1: t.x - n,
            y1: t.y - n,
            x2: t.x + t.width + n,
            y2: t.y + t.height + n
          };
          a.x1 < e.x1 && (e.x1 = a.x1), a.y1 < e.y1 && (e.y1 = a.y1), a.x2 > e.x2 && (e.x2 = a.x2), a.y2 > e.y2 && (e.y2 = a.y2)
        },
        newText: function (e, t, n, a, i) {
          var o, l, r, s, u, h;
          return (o = t.createElementNS(b, "text")).textContent = e, [o.x, o.y].forEach(function (e) {
            var t = n.createSVGLength();
            t.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), e.baseVal.initialize(t)
          }), "boolean" != typeof f && (f = "paintOrder" in o.style), i && !f ? (r = t.createElementNS(b, "defs"), o.id = a, r.appendChild(o), (u = (l = t.createElementNS(b, "g")).appendChild(t.createElementNS(b, "use"))).href.baseVal = "#" + a, (s = l.appendChild(t.createElementNS(b, "use"))).href.baseVal = "#" + a, (h = u.style).strokeLinejoin = "round", {
            elmPosition: o,
            styleText: o.style,
            styleFill: s.style,
            styleStroke: h,
            styleShow: l.style,
            elmsAppend: [r, l]
          }) : (h = o.style, i && (h.strokeLinejoin = "round", h.paintOrder = "stroke"), {
            elmPosition: o,
            styleText: h,
            styleFill: h,
            styleStroke: i ? h : null,
            styleShow: h,
            elmsAppend: [o]
          })
        },
        getMidPoint: function (e, t) {
          var n, a, i, o = Oe(e),
            l = o.segsLen,
            r = o.lenAll,
            s = -1;
          if ((n = r / 2 + (t || 0)) <= 0) return 2 === (a = e[0]).length ? ve(a[0], a[1], 0) : xe(a[0], a[1], a[2], a[3], 0);
          if (r <= n) return 2 === (a = e[e.length - 1]).length ? ve(a[0], a[1], 1) : xe(a[0], a[1], a[2], a[3], 1);
          for (i = []; n > l[++s];) i.push(e[s]), n -= l[s];
          return 2 === (a = e[s]).length ? ve(a[0], a[1], n / l[s]) : xe(a[0], a[1], a[2], a[3], ke(a[0], a[1], a[2], a[3], n))
        },
        initSvg: function (t, n) {
          var e, a, i = y.captionLabel.newText(t.text, n.baseWindow.document, n.svg, v + "-captionLabel-" + t._id, t.outlineColor);
          ["elmPosition", "styleFill", "styleShow", "elmsAppend"].forEach(function (e) {
            t[e] = i[e]
          }), t.isShown = !1, t.styleShow.visibility = "hidden", y.captionLabel.textStyleProps.forEach(function (e) {
            null != t[e] && (i.styleText[e] = t[e])
          }), i.elmsAppend.forEach(function (e) {
            n.svg.appendChild(e)
          }), e = i.elmPosition.getBBox(), t.width = e.width, t.height = e.height, t.outlineColor && (a = 10 < (a = e.height / 9) ? 10 : a < 2 ? 2 : a, i.styleStroke.strokeWidth = a + "px", i.styleStroke.stroke = t.outlineColor), t.strokeWidth = a || 0, Te(t.aplStats, y.captionLabel.stats), t.updateColor(n), t.refSocketXY ? t.updateSocketXY(n) : t.updatePath(n), ue && De(n, {}), t.updateShow(n)
        },
        bind: function (e, t) {
          var n = t.props;
          return e.color || Ie(n, "cur_line_color", e.updateColor), (e.refSocketXY = "startLabel" === t.optionName || "endLabel" === t.optionName) ? (e.socketIndex = "startLabel" === t.optionName ? 0 : 1, Ie(n, "apl_position", e.updateSocketXY), e.offset || (Ie(n, "cur_attach_plugSideLenSE", e.updateSocketXY), Ie(n, "cur_line_strokeWidth", e.updateSocketXY))) : Ie(n, "apl_path", e.updatePath), Ie(n, "svgShow", e.updateShow), ue && Ie(n, "new_edge4viewBox", e.adjustEdge), y.captionLabel.initSvg(e, n), !0
        },
        unbind: function (e, t) {
          var n = t.props;
          e.elmsAppend && (e.elmsAppend.forEach(function (e) {
            n.svg.removeChild(e)
          }), e.elmPosition = e.styleFill = e.styleShow = e.elmsAppend = null), Te(e.curStats, y.captionLabel.stats), Te(e.aplStats, y.captionLabel.stats), e.color || Ce(n, "cur_line_color", e.updateColor), e.refSocketXY ? (Ce(n, "apl_position", e.updateSocketXY), e.offset || (Ce(n, "cur_attach_plugSideLenSE", e.updateSocketXY), Ce(n, "cur_line_strokeWidth", e.updateSocketXY))) : Ce(n, "apl_path", e.updatePath), Ce(n, "svgShow", e.updateShow), ue && (Ce(n, "new_edge4viewBox", e.adjustEdge), De(n, {}))
        },
        removeOption: function (e, t) {
          var n = t.props,
            a = {};
          a[t.optionName] = "", Ze(n, a)
        },
        remove: function (t) {
          t.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), t.boundTargets.forEach(function (e) {
            y.captionLabel.unbind(t, e)
          }))
        }
      },
      pathLabel: {
        type: "label",
        argOptions: [{
          optionName: "text",
          type: "string"
        }],
        stats: {
          color: {},
          startOffset: {},
          pathData: {}
        },
        init: function (s, t) {
          return "string" == typeof t.text && (s.text = t.text.trim()), !!s.text && ("string" == typeof t.color && (s.color = t.color.trim()), s.outlineColor = "string" == typeof t.outlineColor ? t.outlineColor.trim() : "#fff", w(t.lineOffset) && (s.lineOffset = t.lineOffset), y.captionLabel.textStyleProps.forEach(function (e) {
            null != t[e] && (s[e] = t[e])
          }), s.updateColor = function (e) {
            y.captionLabel.updateColor(s, e)
          }, s.updatePath = function (e) {
            var t, n = s.curStats,
              a = s.aplStats,
              i = e.curStats,
              o = e.pathList.animVal || e.pathList.baseVal;
            o && (n.pathData = t = y.pathLabel.getOffsetPathData(o, i.line_strokeWidth / 2 + s.strokeWidth / 2 + s.height / 4, 1.25 * s.height), Me(t, a.pathData) && (s.elmPath.setPathData(t), a.pathData = t, s.bBox = s.elmPosition.getBBox(), s.updateStartOffset(e)))
          }, s.updateStartOffset = function (e) {
            var t, n, a, i, o = s.curStats,
              l = s.aplStats,
              r = e.curStats;
            o.pathData && ((2 !== s.semIndex || s.lineOffset) && (t = o.pathData.reduce(function (e, t) {
              var n, a = t.values;
              switch (t.type) {
              case "M":
                i = {
                  x: a[0],
                  y: a[1]
                };
                break;
              case "L":
                n = {
                  x: a[0],
                  y: a[1]
                }, i && (e += _e(i, n)), i = n;
                break;
              case "C":
                n = {
                  x: a[4],
                  y: a[5]
                }, i && (e += be(i, {
                  x: a[0],
                  y: a[1]
                }, {
                  x: a[2],
                  y: a[3]
                }, n)), i = n
              }
              return e
            }, 0), a = 0 === s.semIndex ? 0 : 1 === s.semIndex ? t : t / 2, 2 !== s.semIndex && (n = Math.max(r.attach_plugBackLenSE[s.semIndex] || 0, r.line_strokeWidth / 2) + s.strokeWidth / 2 + s.height / 4, a = (a += 0 === s.semIndex ? n : -n) < 0 ? 0 : t < a ? t : a), s.lineOffset && (a = (a += s.lineOffset) < 0 ? 0 : t < a ? t : a), o.startOffset = a, We(s, l, "startOffset", a) && (s.elmOffset.startOffset.baseVal.value = a)))
          }, s.updateShow = function (e) {
            y.captionLabel.updateShow(s, e)
          }, ue && (s.adjustEdge = function (e, t) {
            s.bBox && y.captionLabel.adjustEdge(t, s.bBox, s.strokeWidth / 2)
          }), !0)
        },
        getOffsetPathData: function (e, x, n) {
          var b, a, i = 3,
            k = [];

          function w(e, t) {
            return Math.abs(e.x - t.x) < i && Math.abs(e.y - t.y) < i
          }
          return e.forEach(function (e) {
            var t, n, a, i, o, l, r, s, u, h, p, c, d, f, y, S, m, g, _, v, E;
            2 === e.length ? (g = e[0], _ = e[1], v = x, E = Math.atan2(g.y - _.y, _.x - g.x) + .5 * Math.PI, t = [{
              x: g.x + Math.cos(E) * v,
              y: g.y + Math.sin(E) * v * -1
            }, {
              x: _.x + Math.cos(E) * v,
              y: _.y + Math.sin(E) * v * -1
            }], b ? (a = b.points, 0 <= (i = Math.atan2(a[1].y - a[0].y, a[0].x - a[1].x) - Math.atan2(e[0].y - e[1].y, e[1].x - e[0].x)) && i <= Math.PI ? n = {
              type: "line",
              points: t,
              inside: !0
            } : (l = Ee(a[0], a[1], x), o = Ee(t[1], t[0], x), s = a[0], h = o, p = t[1], c = (u = l).x - s.x, d = u.y - s.y, f = p.x - h.x, y = p.y - h.y, S = (-d * (s.x - h.x) + c * (s.y - h.y)) / (-f * d + c * y), m = (f * (s.y - h.y) - y * (s.x - h.x)) / (-f * d + c * y), (r = 0 <= S && S <= 1 && 0 <= m && m <= 1 ? {
              x: s.x + m * c,
              y: s.y + m * d
            } : null) ? n = {
              type: "line",
              points: [a[1] = r, t[1]]
            } : (a[1] = w(o, l) ? o : l, n = {
              type: "line",
              points: [o, t[1]]
            }), b.len = _e(a[0], a[1]))) : n = {
              type: "line",
              points: t
            }, n.len = _e(n.points[0], n.points[1]), k.push(b = n)) : (k.push({
              type: "cubic",
              points: function (e, t, n, a, i, o) {
                for (var l, r, s = be(e, t, n, a) / o, u = 1 / (o < i ? s * (i / o) : s), h = [], p = 0; r = (90 - (l = xe(e, t, n, a, p)).angle) * (Math.PI / 180), h.push({
                    x: l.x + Math.cos(r) * i,
                    y: l.y + Math.sin(r) * i * -1
                  }), !(1 <= p);) 1 < (p += u) && (p = 1);
                return h
              }(e[0], e[1], e[2], e[3], x, 16)
            }), b = null)
          }), b = null, k.forEach(function (e) {
            var t;
            "line" === e.type ? (e.inside && (b.len > x ? ((t = b.points)[1] = Ee(t[0], t[1], -x), b.len = _e(t[0], t[1])) : (b.points = null, b.len = 0), e.len > x + n ? ((t = e.points)[0] = Ee(t[1], t[0], -(x + n)), e.len = _e(t[0], t[1])) : (e.points = null, e.len = 0)), b = e) : b = null
          }), k.reduce(function (t, e) {
            var n = e.points;
            return n && (a && w(n[0], a) || t.push({
              type: "M",
              values: [n[0].x, n[0].y]
            }), "line" === e.type ? t.push({
              type: "L",
              values: [n[1].x, n[1].y]
            }) : (n.shift(), n.forEach(function (e) {
              t.push({
                type: "L",
                values: [e.x, e.y]
              })
            })), a = n[n.length - 1]), t
          }, [])
        },
        newText: function (e, t, n, a) {
          var i, o, l, r, s, u, h, p, c, d;
          return (r = (l = t.createElementNS(b, "defs")).appendChild(t.createElementNS(b, "path"))).id = i = n + "-path", (u = (s = t.createElementNS(b, "text")).appendChild(t.createElementNS(b, "textPath"))).href.baseVal = "#" + i, u.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 0), u.textContent = e, "boolean" != typeof f && (f = "paintOrder" in s.style), a && !f ? (s.id = o = n + "-text", l.appendChild(s), (c = (h = t.createElementNS(b, "g")).appendChild(t.createElementNS(b, "use"))).href.baseVal = "#" + o, (p = h.appendChild(t.createElementNS(b, "use"))).href.baseVal = "#" + o, (d = c.style).strokeLinejoin = "round", {
            elmPosition: s,
            elmPath: r,
            elmOffset: u,
            styleText: s.style,
            styleFill: p.style,
            styleStroke: d,
            styleShow: h.style,
            elmsAppend: [l, h]
          }) : (d = s.style, a && (d.strokeLinejoin = "round", d.paintOrder = "stroke"), {
            elmPosition: s,
            elmPath: r,
            elmOffset: u,
            styleText: d,
            styleFill: d,
            styleStroke: a ? d : null,
            styleShow: d,
            elmsAppend: [l, s]
          })
        },
        initSvg: function (t, n) {
          var e, a, i = y.pathLabel.newText(t.text, n.baseWindow.document, v + "-pathLabel-" + t._id, t.outlineColor);
          ["elmPosition", "elmPath", "elmOffset", "styleFill", "styleShow", "elmsAppend"].forEach(function (e) {
            t[e] = i[e]
          }), t.isShown = !1, t.styleShow.visibility = "hidden", y.captionLabel.textStyleProps.forEach(function (e) {
            null != t[e] && (i.styleText[e] = t[e])
          }), i.elmsAppend.forEach(function (e) {
            n.svg.appendChild(e)
          }), i.elmPath.setPathData([{
            type: "M",
            values: [0, 100]
          }, {
            type: "h",
            values: [100]
          }]), e = i.elmPosition.getBBox(), i.styleText.textAnchor = ["start", "end", "middle"][t.semIndex], 2 !== t.semIndex || t.lineOffset || i.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 50), t.height = e.height, t.outlineColor && (a = 10 < (a = e.height / 9) ? 10 : a < 2 ? 2 : a, i.styleStroke.strokeWidth = a + "px", i.styleStroke.stroke = t.outlineColor), t.strokeWidth = a || 0, Te(t.aplStats, y.pathLabel.stats), t.updateColor(n), t.updatePath(n), t.updateStartOffset(n), ue && De(n, {}), t.updateShow(n)
        },
        bind: function (e, t) {
          var n = t.props;
          return e.color || Ie(n, "cur_line_color", e.updateColor), Ie(n, "cur_line_strokeWidth", e.updatePath), Ie(n, "apl_path", e.updatePath), e.semIndex = "startLabel" === t.optionName ? 0 : "endLabel" === t.optionName ? 1 : 2, (2 !== e.semIndex || e.lineOffset) && Ie(n, "cur_attach_plugBackLenSE", e.updateStartOffset), Ie(n, "svgShow", e.updateShow), ue && Ie(n, "new_edge4viewBox", e.adjustEdge), y.pathLabel.initSvg(e, n), !0
        },
        unbind: function (e, t) {
          var n = t.props;
          e.elmsAppend && (e.elmsAppend.forEach(function (e) {
            n.svg.removeChild(e)
          }), e.elmPosition = e.elmPath = e.elmOffset = e.styleFill = e.styleShow = e.elmsAppend = null), Te(e.curStats, y.pathLabel.stats), Te(e.aplStats, y.pathLabel.stats), e.color || Ce(n, "cur_line_color", e.updateColor), Ce(n, "cur_line_strokeWidth", e.updatePath), Ce(n, "apl_path", e.updatePath), (2 !== e.semIndex || e.lineOffset) && Ce(n, "cur_attach_plugBackLenSE", e.updateStartOffset), Ce(n, "svgShow", e.updateShow), ue && (Ce(n, "new_edge4viewBox", e.adjustEdge), De(n, {}))
        },
        removeOption: function (e, t) {
          var n = t.props,
            a = {};
          a[t.optionName] = "", Ze(n, a)
        },
        remove: function (t) {
          t.boundTargets.length && (console.error("LeaderLineAttachment was not unbound by remove"), t.boundTargets.forEach(function (e) {
            y.pathLabel.unbind(t, e)
          }))
        }
      }
    }, Object.keys(y).forEach(function (e) {
      Ye[e] = function () {
        return new S(y[e], Array.prototype.slice.call(arguments))
      }
    }), Ye.positionByWindowResize = !0, window.addEventListener("resize", O.add(function () {
      Ye.positionByWindowResize && Object.keys(K).forEach(function (e) {
        De(K[e], {
          position: !0
        })
      })
    }), !1), Ye
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setLine: function (start, end, config = {}) {
    return new LeaderLine(start, end, config)
  },
  obj: LeaderLine
});


/***/ }),

/***/ "./node_modules/linkerline/src/DefinePlug.js":
/*!***************************************************!*\
  !*** ./node_modules/linkerline/src/DefinePlug.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setLinePlugStyle: () => (/* binding */ setLinePlugStyle)
/* harmony export */ });
/* harmony import */ var _LeaderLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaderLine */ "./node_modules/linkerline/src/LeaderLine.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(options){
    const {name}=options;
    if(!name) throw new Error("Plug name is required");
    else if(_LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].names[name]) throw new Error(`Plug "${name}" already defined`);
    else{
        let defroot=document.body.querySelector(":scope>#linker-line-defs");
        if(!defroot){
            const start=document.body.appendChild(document.createElement("div"));
            const end=document.body.appendChild(document.createElement("div"));
            new _LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"]({start,end}).remove();
            start.remove();
            end.remove();
            defroot=document.body.querySelector(":scope>#linker-line-defs");
        }
        const defsEl=defroot.querySelector(":scope>defs");
        if("shape" in options) defineShapePlug(defsEl,options);
        else if("svg" in options) defineSvgPlug(defsEl,options);
        else if("src" in options) defineSrcPlug(defsEl,options);
        else throw new Error("invalid custom plug definition object");
    }
}

const statics={
    shapes:["rect","ellipse"],
}

const setLinePlugStyle=(linkerline)=>{
    const {element}=linkerline,{plugs}=_LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"];
    [linkerline.startPlug,linkerline.endPlug].forEach((plugname,i)=>{
        const definition=plugs[plugname];
        if(definition?.withsvg){
            const useEl=element.querySelector(`[id$=plug-marker-${i}] use[href]`);
            if(useEl){
                useEl.style.stroke=useEl.style.fill||linkerline[(i?"end":"start")+"PlugColor"]||linkerline.color||"black";
                useEl.style.strokeWidth=(linkerline.size||4)/2;
            }
        }
    });
}

const defineSrcPlug=(defsEl,options)=>{
    const {src}=options;
    if(typeof(src)==="string"){
        const groupEl=document.createElementNS("http://www.w3.org/2000/svg","g");
        const imageEl=document.createElementNS("http://www.w3.org/2000/svg","image");
        const {width=24,height=24}=options;
        imageEl.setAttribute("width",width);
        imageEl.setAttribute("height",height);
        imageEl.setAttribute("href",src);
        groupEl.appendChild(imageEl);
        defsEl.appendChild(groupEl);
        groupEl.setAttribute("transform",`translate(-${width/2},-${height/2})`);
        const {elmId}=registerPlug({
            ...options,
            width,height,
            withsvg:true,
        });
        groupEl.id=elmId;
    }
    else throw new Error(`Property "src" should be of type string`);
}

const defineSvgPlug=(defsEl,options)=>{
    let {svg}=options;
    if(typeof(svg)==="function") svg=svg("inherit","inherit");
    if(typeof(svg)==="string"){
        const groupEl=document.createElementNS("http://www.w3.org/2000/svg","g");
        groupEl.innerHTML=svg;
        defsEl.appendChild(groupEl);
        const svgEl=groupEl.querySelector(":scope>svg");
        const width=options.width||svgEl.width.baseVal.value;
        const height=options.height||svgEl.height.baseVal.value;
        svgEl.setAttribute("width",width);
        svgEl.setAttribute("height",height);
        groupEl.setAttribute("transform",`translate(-${width/2},-${height/2})`);
        const {elmId}=registerPlug({
            ...options,
            width,height,
            withsvg:true,
        });
        groupEl.id=elmId;
    }
    else throw new Error(`Property "svg" should be of type string or a function that returns a string`);
}

const defineShapePlug=(defsEl,options)=>{
    const {shape}=options;
    if(statics.shapes.includes(shape)){
        const {width=0,height=0}=options;
        options.width=width;
        options.height=height;
        const {elmId}=registerPlug(options);
        const element=document.createElementNS("http://www.w3.org/2000/svg",shape);
        element.id=elmId;
        defsEl.appendChild(element);
        if(shape==="rect"){
            element.setAttribute("x",-width/2);
            element.setAttribute("y",-height/2);
            element.setAttribute("width",width);
            element.setAttribute("height",height);
        }
        else if(shape==="ellipse"){
            element.setAttribute("cx",0);
            element.setAttribute("cy",0);
            element.setAttribute("rx",width/2);
            element.setAttribute("ry",height/2);
        } 
    }
    else throw new Error(`shape should be one of: ${statics.shapes.toString()}`);
}

const registerPlug=(options)=>{
    const {name,width,height,margin,rotatable=true}=options;
    const innerRadius=Math.max(width,height)/2;
    const plugProps={
        elmId:`linker-line-${name}`,
        bBox:{
            width,height,
            top:-height/2,
            left:-width/2,
            right:width/2,
            bottom:height/2,
        },
        widthR:width/4,
        heightR:height/4,
        bCircle:innerRadius,
        sideLen:innerRadius,
        backLen:innerRadius,
        overhead:(typeof(margin)==="number")&&margin,
        outlineBase:2,
        outlineMax:1.5,
        noRotate:!rotatable,
        withsvg:options.withsvg,
    }
    _LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].plugs[name]=plugProps;
    _LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].names[name]=name;
    return plugProps;
}

/***/ }),

/***/ "./node_modules/linkerline/src/LeaderLine.js":
/*!***************************************************!*\
  !*** ./node_modules/linkerline/src/LeaderLine.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! LeaderLine v1.0.7 (c) anseki https://anseki.github.io/leader-line/ */
var LeaderLine=function(){"use strict";var Z,w,O,M,I,o,t,s,h,u,n,a,e,_,v,l,r,i,E,x,p,c,d,C="linker-line",b=1,k=2,L=3,A=4,V={top:b,right:k,bottom:L,left:A},P=1,N=2,T=3,W=4,B=5,R={straight:P,arc:N,fluid:T,magnet:W,grid:B},Y="behind",f=C+"-defs",y='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="linker-line-defs"><style><![CDATA[.linker-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:1em}#linker-line-defs{width:0;height:0;position:absolute;left:0;top:0}.linker-line-line-path{fill:none}.linker-line-mask-bg-rect{fill:white}.linker-line-caps-mask-anchor,.linker-line-caps-mask-marker-shape{fill:black}.linker-line-caps-mask-anchor{stroke:black}.linker-line-caps-mask-line,.linker-line-plugs-face{stroke:rgba(0,0,0,0)}.linker-line-line-mask-shape{stroke:white}.linker-line-line-outline-mask-shape{stroke:black}.linker-line-plug-mask-shape{fill:white;stroke:black}.linker-line-plug-outline-mask-shape{fill:black;stroke:white}.linker-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id="linker-line-disc" cx="0" cy="0" r="5"/><rect id="linker-line-square" x="-5" y="-5" width="10" height="10"/><polygon id="linker-line-arrow1" points="-8,-8 8,0 -8,8 -5,0"/><polygon id="linker-line-arrow2" points="-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5"/><polygon id="linker-line-arrow3" points="-4,-5 8,0 -4,5"/><g id="linker-line-hand"><path style="fill: #fcfcfc" d="M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z"/><path style="fill: black" d="M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z"/></g><g id="linker-line-crosshair"><path d="M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z"/><path d="M0 83.58-7.1 96 7.1 96Z"/><path d="M0-83.58 7.1-96-7.1-96"/><path d="M83.58 0 96 7.1 96-7.1Z"/><path d="M-83.58 0-96-7.1-96 7.1Z"/></g></defs></svg>',X=ot.plugs={disc:{elmId:"linker-line-disc",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},square:{elmId:"linker-line-square",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},arrow1:{elmId:"linker-line-arrow1",bBox:{left:-8,top:-8,width:16,height:16,right:8,bottom:8},widthR:4,heightR:4,bCircle:8,sideLen:8,backLen:8,overhead:8,outlineBase:2,outlineMax:1.5},arrow2:{elmId:"linker-line-arrow2",bBox:{left:-7,top:-8,width:11,height:16,right:4,bottom:8},widthR:2.75,heightR:4,bCircle:8,sideLen:8,backLen:7,overhead:4,outlineBase:1,outlineMax:1.75},arrow3:{elmId:"linker-line-arrow3",bBox:{left:-4,top:-5,width:12,height:10,right:8,bottom:5},widthR:3,heightR:2.5,bCircle:8,sideLen:5,backLen:4,overhead:8,outlineBase:1,outlineMax:2.5},hand:{elmId:"linker-line-hand",bBox:{left:-3,top:-12,width:40,height:24,right:37,bottom:12},widthR:10,heightR:6,bCircle:37,sideLen:12,backLen:3,overhead:37},crosshair:{elmId:"linker-line-crosshair",noRotate:!0,bBox:{left:-96,top:-96,width:192,height:192,right:96,bottom:96},widthR:48,heightR:48,bCircle:96,sideLen:96,backLen:96,overhead:0}},F=ot.names={behind:Y,disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},q=F,G=[b,k,L,A],D="auto",Q={x:"left",y:"top",width:"width",height:"height"},z=80,j=4,H=5,U=120,K=8,J=3.75,$=10,ee=30,te=.5522847,ne=.25*Math.PI,m=/^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,ae="http://www.w3.org/2000/svg",S="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&!window.navigator.msPointerEnabled,ie=!S&&!!document.uniqueID,oe="MozAppearance"in document.documentElement.style,le=!(S||oe||!window.chrome||!window.CSS),re=!S&&!ie&&!oe&&!le&&!window.chrome&&"WebkitAppearance"in document.documentElement.style,se=ie||S?.2:.1,ue={path:T,lineColor:"coral",lineSize:4,plugSE:[Y,"arrow1"],plugSizeSE:[1,1],lineOutlineEnabled:!1,lineOutlineColor:"indianred",lineOutlineSize:.25,plugOutlineEnabledSE:[!1,!1],plugOutlineSizeSE:[1,1]},he=(p={}.toString,c={}.hasOwnProperty.toString,d=c.call(Object),function(e){return e&&"[object Object]"===p.call(e)&&(!(e=Object.getPrototypeOf(e))||(e=e.hasOwnProperty("constructor")&&e.constructor)&&"function"==typeof e&&c.call(e)===d)}),pe=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},g=(_={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},v=1e3/60/2,l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,v)},r=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){clearTimeout(e)},i=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},E=[],x=0,{add:function(n,e,t,a,i,o,l){var r,s,u,h,p,c,d,f,y,m,S=++x;function g(e,t){return{value:n(t),timeRatio:e,outputRatio:t}}if("string"==typeof i&&(i=_[i]),n=n||function(){},t<v)r=[g(0,0),g(1,1)];else{if(s=v/t,r=[g(0,0)],0===i[0]&&0===i[1]&&1===i[2]&&1===i[3])for(h=s;h<=1;h+=s)r.push(g(h,h));else for(p=u=(h=s)/10;p<=1;p+=u)d=p,m=y=f=void 0,f=(m=p*p)*p,m*=3*(y=1-p),h<=(c={x:(d=3*(y*y)*p)*i[0]+m*i[2]+f,y:d*i[1]+m*i[3]+f}).x&&(r.push(g(c.x,c.y)),h+=s);r.push(g(1,1))}return E.push(o={animId:S,frameCallback:e,duration:t,count:a,frames:r,reverse:!!o}),!1!==l&&be(o,l),S},remove:function(n){var a;E.some(function(e,t){return e.animId===n&&(a=t,!(e.framesStart=null))})&&E.splice(a,1)},start:function(t,n,a){E.some(function(e){return e.animId===t&&(e.reverse=!!n,be(e,a),!0)})},stop:function(t,n){var a;return E.some(function(e){return e.animId===t&&(n?null!=e.lastFrame&&(a=e.frames[e.lastFrame].timeRatio):(a=(Date.now()-e.framesStart)/e.duration,(a=e.reverse?1-a:a)<0?a=0:1<a&&(a=1)),!(e.framesStart=null))}),a},validTiming:function(t){return"string"==typeof t?_[t]:Array.isArray(t)&&[0,1,2,3].every(function(e){return i(t[e])&&0<=t[e]&&t[e]<=1})?[t[0],t[1],t[2],t[3]]:null}}),ce=function(e){e.SVGPathElement.prototype.getPathData&&e.SVGPathElement.prototype.setPathData||function(){function i(e){this._string=e,this._currentIndex=0,this._endIndex=this._string.length,this._prevCommand=null,this._skipOptionalSpaces()}var a={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},o=-1!==e.navigator.userAgent.indexOf("MSIE ");i.prototype={parseSegment:function(){var e=this._string[this._currentIndex],t=a[e]||null;if(null===t){if(null===this._prevCommand)return null;if(null===(t=("+"===e||"-"===e||"."===e||"0"<=e&&e<="9")&&"Z"!==this._prevCommand?"M"===this._prevCommand?"L":"m"===this._prevCommand?"l":this._prevCommand:null))return null}else this._currentIndex+=1;var n=null,e=(this._prevCommand=t).toUpperCase();return"H"===e||"V"===e?n=[this._parseNumber()]:"M"===e||"L"===e||"T"===e?n=[this._parseNumber(),this._parseNumber()]:"S"===e||"Q"===e?n=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"C"===e?n=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"A"===e?n=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:"Z"===e&&(this._skipOptionalSpaces(),n=[]),null===n||0<=n.indexOf(null)?null:{type:t,values:n}},hasMoreData:function(){return this._currentIndex<this._endIndex},peekSegmentType:function(){var e=this._string[this._currentIndex];return a[e]||null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return!0;var e=this.peekSegmentType();return"M"===e||"m"===e},_isCurrentSpace:function(){var e=this._string[this._currentIndex];return e<=" "&&(" "===e||"\n"===e||"\t"===e||"\r"===e||"\f"===e)},_skipOptionalSpaces:function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!==this._string[this._currentIndex])&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","===this._string[this._currentIndex]&&(this._currentIndex+=1,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},_parseNumber:function(){var e=0,t=0,n=1,a=0,i=1,o=1,l=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"===this._string[this._currentIndex]?this._currentIndex+=1:this._currentIndex<this._endIndex&&"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,i=-1),this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])&&"."!==this._string[this._currentIndex])return null;for(var r=this._currentIndex;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;if(this._currentIndex!==r)for(var s=this._currentIndex-1,u=1;r<=s;)t+=u*(this._string[s]-"0"),--s,u*=10;if(this._currentIndex<this._endIndex&&"."===this._string[this._currentIndex]){if(this._currentIndex+=1,this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])return null;for(;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)n*=10,a+=(this._string.charAt(this._currentIndex)-"0")/n,this._currentIndex+=1}if(this._currentIndex!==l&&this._currentIndex+1<this._endIndex&&("e"===this._string[this._currentIndex]||"E"===this._string[this._currentIndex])&&"x"!==this._string[this._currentIndex+1]&&"m"!==this._string[this._currentIndex+1]){if(this._currentIndex+=1,"+"===this._string[this._currentIndex]?this._currentIndex+=1:"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,o=-1),this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])return null;for(;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)e*=10,e+=this._string[this._currentIndex]-"0",this._currentIndex+=1}var h=t+a;return h*=i,e&&(h*=Math.pow(10,o*e)),l===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),h)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var e=null,t=this._string[this._currentIndex];if(this._currentIndex+=1,"0"===t)e=0;else{if("1"!==t)return null;e=1}return this._skipOptionalSpacesOrDelimiter(),e}};function n(e){if(!e||0===e.length)return[];var t=new i(e),n=[];if(t.initialCommandIsMoveTo())for(;t.hasMoreData();){var a=t.parseSegment();if(null===a)break;n.push(a)}return n}function l(e){return e.map(function(e){return{type:e.type,values:Array.prototype.slice.call(e.values)}})}function r(e){var u=[],h=null,p=null,c=null,d=null,f=null,y=null,m=null;return e.forEach(function(e){var t,n,a,i,o,l,r,s;"M"===e.type?(r=e.values[0],s=e.values[1],u.push({type:"M",values:[r,s]}),d=y=r,f=m=s):"C"===e.type?(o=e.values[0],l=e.values[1],t=e.values[2],n=e.values[3],r=e.values[4],s=e.values[5],u.push({type:"C",values:[o,l,t,n,r,s]}),p=t,c=n,d=r,f=s):"L"===e.type?(r=e.values[0],s=e.values[1],u.push({type:"L",values:[r,s]}),d=r,f=s):"H"===e.type?(r=e.values[0],u.push({type:"L",values:[r,f]}),d=r):"V"===e.type?(s=e.values[0],u.push({type:"L",values:[d,s]}),f=s):"S"===e.type?(t=e.values[0],n=e.values[1],r=e.values[2],s=e.values[3],i="C"===h||"S"===h?(a=d+(d-p),f+(f-c)):(a=d,f),u.push({type:"C",values:[a,i,t,n,r,s]}),p=t,c=n,d=r,f=s):"T"===e.type?(r=e.values[0],s=e.values[1],l="Q"===h||"T"===h?(o=d+(d-p),f+(f-c)):(o=d,f),u.push({type:"C",values:[a=d+2*(o-d)/3,i=f+2*(l-f)/3,r+2*(o-r)/3,s+2*(l-s)/3,r,s]}),p=o,c=l,d=r,f=s):"Q"===e.type?(o=e.values[0],l=e.values[1],r=e.values[2],s=e.values[3],u.push({type:"C",values:[a=d+2*(o-d)/3,i=f+2*(l-f)/3,r+2*(o-r)/3,s+2*(l-s)/3,r,s]}),p=o,c=l,d=r,f=s):"A"===e.type?(n=e.values[0],a=e.values[1],i=e.values[2],o=e.values[3],l=e.values[4],r=e.values[5],s=e.values[6],0===n||0===a?(u.push({type:"C",values:[d,f,r,s,r,s]}),d=r,f=s):d===r&&f===s||b(d,f,r,s,n,a,i,o,l).forEach(function(e){u.push({type:"C",values:e}),d=r,f=s})):"Z"===e.type&&(u.push(e),d=y,f=m),h=e.type}),u}var s=e.SVGPathElement.prototype.setAttribute,u=e.SVGPathElement.prototype.removeAttribute,d=e.Symbol?e.Symbol():"__cachedPathData",f=e.Symbol?e.Symbol():"__cachedNormalizedPathData",b=function(e,t,n,a,i,o,l,r,s,u){function h(e,t,n){return{x:e*Math.cos(n)-t*Math.sin(n),y:e*Math.sin(n)+t*Math.cos(n)}}var p=Math.PI*l/180,c=[];u?(_=u[0],v=u[1],S=u[2],g=u[3]):(e=(m=h(e,t,-p)).x,t=m.y,1<(m=(y=(e-(n=(f=h(n,a,-p)).x))/2)*y/(i*i)+(d=(t-(a=f.y))/2)*d/(o*o))&&(i*=m=Math.sqrt(m),o*=m),f=i*i,m=o*o,S=(f=(r===s?-1:1)*Math.sqrt(Math.abs((f*m-f*d*d-m*y*y)/(f*d*d+m*y*y))))*i*d/o+(e+n)/2,g=f*-o*y/i+(t+a)/2,_=Math.asin(parseFloat(((t-g)/o).toFixed(9))),v=Math.asin(parseFloat(((a-g)/o).toFixed(9))),e<S&&(_=Math.PI-_),n<S&&(v=Math.PI-v),_<0&&(_=2*Math.PI+_),v<0&&(v=2*Math.PI+v),s&&v<_&&(_-=2*Math.PI),!s&&_<v&&(v-=2*Math.PI));var d,f,y,m=v-_;Math.abs(m)>120*Math.PI/180&&(d=v,f=n,y=a,v=s&&_<v?_+120*Math.PI/180*1:_+120*Math.PI/180*-1,n=S+i*Math.cos(v),a=g+o*Math.sin(v),c=b(n,a,f,y,i,o,l,0,s,[v,d,S,g]));var m=v-_,S=Math.cos(_),g=Math.sin(_),_=Math.cos(v),v=Math.sin(v),m=Math.tan(m/4),i=4/3*i*m,o=4/3*o*m,m=[e,t],S=[e+i*g,t-o*S],_=[n+i*v,a-o*_],a=[n,a];if(S[0]=2*m[0]-S[0],S[1]=2*m[1]-S[1],u)return[S,_,a].concat(c);var c=[S,_,a].concat(c).join().split(","),E=[],x=[];return c.forEach(function(e,t){t%2?x.push(h(c[t-1],c[t],p).y):x.push(h(c[t],c[t+1],p).x),6===x.length&&(E.push(x),x=[])}),E};e.SVGPathElement.prototype.setAttribute=function(e,t){"d"===e&&(this[d]=null,this[f]=null),s.call(this,e,t)},e.SVGPathElement.prototype.removeAttribute=function(e,t){"d"===e&&(this[d]=null,this[f]=null),u.call(this,e)},e.SVGPathElement.prototype.getPathData=function(e){if(e&&e.normalize){if(this[f])return l(this[f]);this[d]?t=l(this[d]):(t=n(this.getAttribute("d")||""),this[d]=l(t));e=r((s=[],c=p=h=u=null,t.forEach(function(e){var t,n,a,i,o,l,r=e.type;"M"===r?(o=e.values[0],l=e.values[1],s.push({type:"M",values:[o,l]}),u=p=o,h=c=l):"m"===r?(o=u+e.values[0],l=h+e.values[1],s.push({type:"M",values:[o,l]}),u=p=o,h=c=l):"L"===r?(o=e.values[0],l=e.values[1],s.push({type:"L",values:[o,l]}),u=o,h=l):"l"===r?(o=u+e.values[0],l=h+e.values[1],s.push({type:"L",values:[o,l]}),u=o,h=l):"C"===r?(t=e.values[0],n=e.values[1],a=e.values[2],i=e.values[3],o=e.values[4],l=e.values[5],s.push({type:"C",values:[t,n,a,i,o,l]}),u=o,h=l):"c"===r?(t=u+e.values[0],n=h+e.values[1],a=u+e.values[2],i=h+e.values[3],o=u+e.values[4],l=h+e.values[5],s.push({type:"C",values:[t,n,a,i,o,l]}),u=o,h=l):"Q"===r?(t=e.values[0],n=e.values[1],o=e.values[2],l=e.values[3],s.push({type:"Q",values:[t,n,o,l]}),u=o,h=l):"q"===r?(t=u+e.values[0],n=h+e.values[1],o=u+e.values[2],l=h+e.values[3],s.push({type:"Q",values:[t,n,o,l]}),u=o,h=l):"A"===r?(o=e.values[5],l=e.values[6],s.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],o,l]}),u=o,h=l):"a"===r?(o=u+e.values[5],l=h+e.values[6],s.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],o,l]}),u=o,h=l):"H"===r?(o=e.values[0],s.push({type:"H",values:[o]}),u=o):"h"===r?(o=u+e.values[0],s.push({type:"H",values:[o]}),u=o):"V"===r?(l=e.values[0],s.push({type:"V",values:[l]}),h=l):"v"===r?(l=h+e.values[0],s.push({type:"V",values:[l]}),h=l):"S"===r?(a=e.values[0],i=e.values[1],o=e.values[2],l=e.values[3],s.push({type:"S",values:[a,i,o,l]}),u=o,h=l):"s"===r?(a=u+e.values[0],i=h+e.values[1],o=u+e.values[2],l=h+e.values[3],s.push({type:"S",values:[a,i,o,l]}),u=o,h=l):"T"===r?(o=e.values[0],l=e.values[1],s.push({type:"T",values:[o,l]}),u=o,h=l):"t"===r?(o=u+e.values[0],l=h+e.values[1],s.push({type:"T",values:[o,l]}),u=o,h=l):"Z"!==r&&"z"!==r||(s.push({type:"Z",values:[]}),u=p,h=c)}),s));return this[f]=l(e),e}if(this[d])return l(this[d]);var s,u,h,p,c,t=n(this.getAttribute("d")||"");return this[d]=l(t),t},e.SVGPathElement.prototype.setPathData=function(e){if(0===e.length)o?this.setAttribute("d",""):this.removeAttribute("d");else{for(var t="",n=0,a=e.length;n<a;n+=1){var i=e[n];0<n&&(t+=" "),t+=i.type,i.values&&0<i.values.length&&(t+=" "+i.values.join(" "))}this.setAttribute("d",t)}},e.SVGRectElement.prototype.getPathData=function(e){var t=this.x.baseVal.value,n=this.y.baseVal.value,a=this.width.baseVal.value,i=this.height.baseVal.value,o=(this.hasAttribute("rx")?this.rx:this.ry).baseVal.value,l=(this.hasAttribute("ry")?this.ry:this.rx).baseVal.value,n=(n=[{type:"M",values:[t+(o=a/2<o?a/2:o),n]},{type:"H",values:[t+a-o]},{type:"A",values:[o,l=i/2<l?i/2:l,0,0,1,t+a,n+l]},{type:"V",values:[n+i-l]},{type:"A",values:[o,l,0,0,1,t+a-o,n+i]},{type:"H",values:[t+o]},{type:"A",values:[o,l,0,0,1,t,n+i-l]},{type:"V",values:[n+l]},{type:"A",values:[o,l,0,0,1,t+o,n]},{type:"Z",values:[]}]).filter(function(e){return"A"!==e.type||0!==e.values[0]&&0!==e.values[1]});return n=e&&!0===e.normalize?r(n):n},e.SVGCircleElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.r.baseVal.value,n=[{type:"M",values:[t+a,n]},{type:"A",values:[a,a,0,0,1,t,n+a]},{type:"A",values:[a,a,0,0,1,t-a,n]},{type:"A",values:[a,a,0,0,1,t,n-a]},{type:"A",values:[a,a,0,0,1,t+a,n]},{type:"Z",values:[]}];return n=e&&!0===e.normalize?r(n):n},e.SVGEllipseElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.rx.baseVal.value,i=this.ry.baseVal.value,n=[{type:"M",values:[t+a,n]},{type:"A",values:[a,i,0,0,1,t,n+i]},{type:"A",values:[a,i,0,0,1,t-a,n]},{type:"A",values:[a,i,0,0,1,t,n-i]},{type:"A",values:[a,i,0,0,1,t+a,n]},{type:"Z",values:[]}];return n=e&&!0===e.normalize?r(n):n},e.SVGLineElement.prototype.getPathData=function(){return[{type:"M",values:[this.x1.baseVal.value,this.y1.baseVal.value]},{type:"L",values:[this.x2.baseVal.value,this.y2.baseVal.value]}]},e.SVGPolylineElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]})}return e},e.SVGPolygonElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]})}return e.push({type:"Z",values:[]}),e}}()},S=(a={},Ee.m=n=[function(e,t,n){n.r(t);var a=500,i=[],o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},l=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return clearTimeout(e)},r=Date.now(),s=void 0;function u(){var n=void 0,e=void 0;s&&(l.call(window,s),s=null),i.forEach(function(e){var t;(t=e.event)&&(e.event=null,e.listener(t),n=!0)}),n?(r=Date.now(),e=!0):Date.now()-r<a&&(e=!0),e&&(s=o.call(window,u))}function h(n){var a=-1;return i.some(function(e,t){return e.listener===n&&(a=t,!0)}),a}t.default={add:function(e){var t=void 0;return-1===h(e)?(i.push(t={listener:e}),function(e){t.event=e,s||u()}):null},remove:function(e){-1<(e=h(e))&&(i.splice(e,1),!i.length&&s&&(l.call(window,s),s=null))}}}],Ee.c=a,Ee.d=function(e,t,n){Ee.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},Ee.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Ee.t=function(t,e){if(1&e&&(t=Ee(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(Ee.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)Ee.d(n,a,function(e){return t[e]}.bind(null,a));return n},Ee.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return Ee.d(t,"a",t),t},Ee.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},Ee.p="",Ee(Ee.s=0).default),de={line_altColor:{iniValue:!1},line_color:{},line_colorTra:{iniValue:!1},line_strokeWidth:{},plug_enabled:{iniValue:!1},plug_enabledSE:{hasSE:!0,iniValue:!1},plug_plugSE:{hasSE:!0,iniValue:Y},plug_colorSE:{hasSE:!0},plug_colorTraSE:{hasSE:!0,iniValue:!1},plug_markerWidthSE:{hasSE:!0},plug_markerHeightSE:{hasSE:!0},lineOutline_enabled:{iniValue:!1},lineOutline_color:{},lineOutline_colorTra:{iniValue:!1},lineOutline_strokeWidth:{},lineOutline_inStrokeWidth:{},plugOutline_enabledSE:{hasSE:!0,iniValue:!1},plugOutline_plugSE:{hasSE:!0,iniValue:Y},plugOutline_colorSE:{hasSE:!0},plugOutline_colorTraSE:{hasSE:!0,iniValue:!1},plugOutline_strokeWidthSE:{hasSE:!0},plugOutline_inStrokeWidthSE:{hasSE:!0},position_socketXYSE:{hasSE:!0,hasProps:!0},position_plugOverheadSE:{hasSE:!0},position_path:{},position_lineStrokeWidth:{},position_socketGravitySE:{hasSE:!0},path_pathData:{},path_edge:{hasProps:!0},viewBox_bBox:{hasProps:!0},viewBox_plugBCircleSE:{hasSE:!0},lineMask_enabled:{iniValue:!1},lineMask_outlineMode:{iniValue:!1},lineMask_x:{},lineMask_y:{},lineOutlineMask_x:{},lineOutlineMask_y:{},maskBGRect_x:{},maskBGRect_y:{},capsMaskAnchor_enabledSE:{hasSE:!0,iniValue:!1},capsMaskAnchor_pathDataSE:{hasSE:!0},capsMaskAnchor_strokeWidthSE:{hasSE:!0},capsMaskMarker_enabled:{iniValue:!1},capsMaskMarker_enabledSE:{hasSE:!0,iniValue:!1},capsMaskMarker_plugSE:{hasSE:!0,iniValue:Y},capsMaskMarker_markerWidthSE:{hasSE:!0},capsMaskMarker_markerHeightSE:{hasSE:!0},caps_enabled:{iniValue:!1},attach_plugSideLenSE:{hasSE:!0},attach_plugBackLenSE:{hasSE:!0}},fe={show_on:{},show_effect:{},show_animOptions:{},show_animId:{},show_inAnim:{}},ye="fade",me=[],Se={},ge=0,_e={},ve=0;function Ee(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,Ee),t.l=!0,t.exports}function xe(){var i=Date.now(),o=!1;e&&(r.call(window,e),e=null),E.forEach(function(e){var t,n,a;if(e.framesStart){if((t=i-e.framesStart)>=e.duration&&e.count&&e.loopsLeft<=1)return a=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(a.value,!0,a.timeRatio,a.outputRatio),void(e.framesStart=null);if(t>e.duration){if(n=Math.floor(t/e.duration),e.count){if(n>=e.loopsLeft)return a=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(a.value,!0,a.timeRatio,a.outputRatio),void(e.framesStart=null);e.loopsLeft-=n}e.framesStart+=e.duration*n,t=i-e.framesStart}e.reverse&&(t=e.duration-t),a=e.frames[e.lastFrame=Math.round(t/v)],!1!==e.frameCallback(a.value,!1,a.timeRatio,a.outputRatio)?o=!0:e.framesStart=null}}),o&&(e=l.call(window,xe))}function be(e,t){e.framesStart=Date.now(),null!=t&&(e.framesStart-=e.duration*(e.reverse?1-t:t)),e.loopsLeft=e.count,e.lastFrame=null,xe()}function ke(t,n){var e,a;return typeof t!=typeof n||(e=he(t)?"obj":Array.isArray(t)?"array":"")!=(he(n)?"obj":Array.isArray(n)?"array":"")||("obj"===e?ke(a=Object.keys(t).sort(),Object.keys(n).sort())||a.some(function(e){return ke(t[e],n[e])}):"array"===e?t.length!==n.length||t.some(function(e,t){return ke(e,n[t])}):t!==n)}function we(n){return n&&(he(n)?Object.keys(n).reduce(function(e,t){return e[t]=we(n[t]),e},{}):Array.isArray(n)?n.map(we):n)}function Oe(e){var t,n,a,i=1,o=e=(e+"").trim();function l(e){var t=1,e=m.exec(e);return e&&(t=parseFloat(e[1]),e[2]?t=0<=t&&t<=100?t/100:1:(t<0||1<t)&&(t=1)),t}return(t=/^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e))?(n=t[1].toLowerCase(),a=t[2].trim().split(/\s*,\s*/),"rgba"===n&&4===a.length?(i=l(a[3]),o="rgb("+a.slice(0,3).join(", ")+")"):"hsla"===n&&4===a.length?(i=l(a[3]),o="hsl("+a.slice(0,3).join(", ")+")"):"hwb"===n&&4===a.length?(i=l(a[3]),o="hwb("+a.slice(0,3).join(", ")+")"):"gray"===n&&2===a.length?(i=l(a[1]),o="gray("+a[0]+")"):"device-cmyk"===n&&5<=a.length&&(i=l(a[4]),o="device-cmyk("+a.slice(0,4).join(", ")+")")):(t=/^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e))?o=t[1]?(i=parseInt(t[2],16)/255,"#"+t[1]):(i=parseInt(t[4]+t[4],16)/255,"#"+t[3]):"transparent"===e.toLocaleLowerCase()&&(i=0),[i,o]}function Me(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE||"function"!=typeof e.getBoundingClientRect)}function Ie(e,t){var n,a,i,o={};if(!(i=e.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_DISCONNECTED)return console.error("A disconnected element was passed."),null;for(a in n=e.getBoundingClientRect())o[a]=n[a];if(!t){if(!(i=i.defaultView))return console.error("Cannot get window that contains the element."),null;o.left+=i.pageXOffset,o.right+=i.pageXOffset,o.top+=i.pageYOffset,o.bottom+=i.pageYOffset}return o}function Ce(e,t){var n,a=[],i=e;for(t=t||window;;){if(!(n=i.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(!(n=n.defaultView))return console.error("Cannot get window that contains the element."),null;if(n===t)break;if(!(i=n.frameElement))return console.error("`baseWindow` was not found."),null;a.unshift(i)}return a}function Le(e,t){var a=0,i=0;return(t=Ce(e,t=t||window))?t.length?(t.forEach(function(e,t){var n=Ie(e,0<t);a+=n.left,i+=n.top,e=(t=e).ownerDocument.defaultView.getComputedStyle(t,""),n={left:t.clientLeft+parseFloat(e.paddingLeft),top:t.clientTop+parseFloat(e.paddingTop)},a+=n.left,i+=n.top}),(t=Ie(e,!0)).left+=a,t.right+=a,t.top+=i,t.bottom+=i,t):Ie(e):null}function Ae(e,t){var n=e.x-t.x,t=e.y-t.y;return Math.sqrt(n*n+t*t)}function Ve(e,t,n){var a=t.x-e.x,t=t.y-e.y;return{x:e.x+a*n,y:e.y+t*n,angle:Math.atan2(t,a)/(Math.PI/180)}}function Pe(e,t,n){e=Math.atan2(e.y-t.y,t.x-e.x);return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n*-1}}function Ne(e,t,n,a,i){var o=i*i,l=o*i,r=1-i,s=r*r,u=s*r,h=u*e.x+3*s*i*t.x+3*r*o*n.x+l*a.x,p=u*e.y+3*s*i*t.y+3*r*o*n.y+l*a.y,c=e.x+2*i*(t.x-e.x)+o*(n.x-2*t.x+e.x),u=e.y+2*i*(t.y-e.y)+o*(n.y-2*t.y+e.y),s=t.x+2*i*(n.x-t.x)+o*(a.x-2*n.x+t.x),l=t.y+2*i*(n.y-t.y)+o*(a.y-2*n.y+t.y),o=r*e.x+i*t.x,e=r*e.y+i*t.y,t=r*n.x+i*a.x,i=r*n.y+i*a.y,a=90-180*Math.atan2(c-s,u-l)/Math.PI;return{x:h,y:p,fromP2:{x:c,y:u},toP1:{x:s,y:l},fromP1:{x:o,y:e},toP2:{x:t,y:i},angle:a+=180<a?-180:180}}function Te(n,a,i,o,e){function l(e,t,n,a,i){return e*(e*(-3*t+9*n-9*a+3*i)+6*t-12*n+6*a)-3*t+3*n}var r,s,u=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],h=0,p=(e=null==e||1<e?1:e<0?0:e)/2;return[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816].forEach(function(e,t){r=l(s=p*e+p,n.x,a.x,i.x,o.x),s=l(s,n.y,a.y,i.y,o.y),s=r*r+s*s,h+=u[t]*Math.sqrt(s)}),p*h}function We(e,t,n,a,i){for(var o,l=.5,r=1-l;o=Te(e,t,n,a,r),!(Math.abs(o-i)<=.01);)r+=(o<i?1:-1)*(l/=2);return r}function Be(e,t){var n;return e.forEach(function(e){e=t?e.map(function(e){e={x:e.x,y:e.y};return t(e),e}):e;(n=n||[{type:"M",values:[e[0].x,e[0].y]}]).push(e.length?2===e.length?{type:"L",values:[e[1].x,e[1].y]}:{type:"C",values:[e[1].x,e[1].y,e[2].x,e[2].y,e[3].x,e[3].y]}:{type:"Z",values:[]})}),n}function Re(e){var t=[],n=0;return e.forEach(function(e){e=(2===e.length?Ae:Te).apply(null,e);t.push(e),n+=e}),{segsLen:t,lenAll:n}}function Fe(e,a){return null==e||null==a||e.length!==a.length||e.some(function(e,t){var n=a[t];return e.type!==n.type||e.values.some(function(e,t){return e!==n.values[t]})})}function Ge(e,t,n){e.events[t]?e.events[t].indexOf(n)<0&&e.events[t].push(n):e.events[t]=[n]}function De(e,t,n){var a;e.events[t]&&-1<(a=e.events[t].indexOf(n))&&e.events[t].splice(a,1)}function ze(e){t&&clearTimeout(t),me.push(e),t=setTimeout(function(){me.forEach(function(e){e()}),me=[]},0)}function je(e,t){e.reflowTargets.indexOf(t)<0&&e.reflowTargets.push(t)}function He(e){e.reflowTargets.forEach(function(e){var n;n=e,setTimeout(function(){var e=n.parentNode,t=n.nextSibling;e.insertBefore(e.removeChild(n),t)},0)}),e.reflowTargets=[]}function Ue(e,t,n,a,i,o,l){var r;"auto-start-reverse"===n?("boolean"!=typeof s&&(t.setAttribute("orient","auto-start-reverse"),s=t.orientType.baseVal===SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN),s?t.setAttribute("orient",n):((r=i.createSVGTransform()).setRotate(180,0,0),o.transform.baseVal.appendItem(r),t.setAttribute("orient","auto"),r=!0)):(t.setAttribute("orient",n),!1===s&&o.transform.baseVal.clear()),t=t.viewBox.baseVal,r?(t.x=-a.right,t.y=-a.bottom):(t.x=a.left,t.y=a.top),t.width=a.width,t.height=a.height,ie&&je(e,l)}function Ze(e,t){return{prop:e?"markerEnd":"markerStart",orient:t?t.noRotate?"0":e?"auto":"auto-start-reverse":null}}function Ye(n,a){Object.keys(a).forEach(function(e){var t=a[e];n[e]=null!=t.iniValue?t.hasSE?[t.iniValue,t.iniValue]:t.iniValue:t.hasSE?t.hasProps?[{},{}]:[]:t.hasProps?{}:null})}function Xe(t,e,n,a,i){return a!==e[n]&&(e[n]=a,i&&i.forEach(function(e){e(t,a,n)}),!0)}function qe(e){function t(e,t){return e+parseFloat(t)}var n=e.document,a=e.getComputedStyle(n.documentElement,""),e=e.getComputedStyle(n.body,""),n={x:0,y:0};return"static"!==e.position?(n.x-=[a.marginLeft,a.borderLeftWidth,a.paddingLeft,e.marginLeft,e.borderLeftWidth].reduce(t,0),n.y-=[a.marginTop,a.borderTopWidth,a.paddingTop,e.marginTop,e.borderTopWidth].reduce(t,0)):"static"!==a.position&&(n.x-=[a.marginLeft,a.borderLeftWidth].reduce(t,0),n.y-=[a.marginTop,a.borderTopWidth].reduce(t,0)),n}function Qe(e){var t,n=e.document;n.getElementById(f)||(t=(new e.DOMParser).parseFromString(y,"image/svg+xml"),n.body.appendChild(t.documentElement),ce(e))}function Ke(l){var g,c,_,e,n,a,i,d,o,r,s,t,u,h,p=l.options,f=l.curStats,y=l.aplStats,v=f.position_socketXYSE,m=!1;function S(e,t){e=t===b?{x:e.left+e.width/2,y:e.top}:t===k?{x:e.right,y:e.top+e.height/2}:t===L?{x:e.left+e.width/2,y:e.bottom}:{x:e.left,y:e.top+e.height/2};return e.socketId=t,e}function E(e){return{x:e.x,y:e.y}}if(f.position_path=p.path,f.position_lineStrokeWidth=f.line_strokeWidth,f.position_socketGravitySE=g=we(p.socketGravitySE),c=[0,1].map(function(e){var t=p.anchorSE[e],n=l.optionIsAttach.anchorSE[e],a=!1!==n?_e[t._id]:null,i=!1!==n&&a.conf.getStrokeWidth?a.conf.getStrokeWidth(a,l):0,o=!1!==n&&a.conf.getBBoxNest?a.conf.getBBoxNest(a,l,i):Le(t,l.baseWindow);return f.capsMaskAnchor_pathDataSE[e]=!1!==n&&a.conf.getPathData?a.conf.getPathData(a,l,i):(n=null!=(t=o).right?t.right:t.left+t.width,a=null!=t.bottom?t.bottom:t.top+t.height,[{type:"M",values:[t.left,t.top]},{type:"L",values:[n,t.top]},{type:"L",values:[n,a]},{type:"L",values:[t.left,a]},{type:"Z",values:[]}]),f.capsMaskAnchor_strokeWidthSE[e]=i,o}),i=-1,p.socketSE[0]&&p.socketSE[1]?(v[0]=S(c[0],p.socketSE[0]),v[1]=S(c[1],p.socketSE[1])):(p.socketSE[0]||p.socketSE[1]?(a=p.socketSE[0]?(n=0,1):(n=1,0),v[n]=S(c[n],p.socketSE[n]),(e=G.map(function(e){return S(c[a],e)})).forEach(function(e){var t=Ae(e,v[n]);(t<i||-1===i)&&(v[a]=e,i=t)})):(e=G.map(function(e){return S(c[1],e)}),G.map(function(e){return S(c[0],e)}).forEach(function(n){e.forEach(function(e){var t=Ae(n,e);(t<i||-1===i)&&(v[0]=n,v[1]=e,i=t)})})),[0,1].forEach(function(e){var t,n;p.socketSE[e]||(c[e].width||c[e].height?c[e].width||v[e].socketId!==A&&v[e].socketId!==k?c[e].height||v[e].socketId!==b&&v[e].socketId!==L||(v[e].socketId=0<=v[e?0:1].y-c[e].top?L:b):v[e].socketId=0<=v[e?0:1].x-c[e].left?k:A:(t=v[e?0:1].x-c[e].left,n=v[e?0:1].y-c[e].top,v[e].socketId=Math.abs(t)>=Math.abs(n)?0<=t?k:A:0<=n?L:b))})),f.position_path!==y.position_path||f.position_lineStrokeWidth!==y.position_lineStrokeWidth||[0,1].some(function(e){return f.position_plugOverheadSE[e]!==y.position_plugOverheadSE[e]||(t=v[e],n=y.position_socketXYSE[e],t.x!==n.x||t.y!==n.y||t.socketId!==n.socketId)||(t=g[e],n=y.position_socketGravitySE[e],(e=null==t?"auto":Array.isArray(t)?"array":"number")!=(null==n?"auto":Array.isArray(n)?"array":"number")||("array"==e?t[0]!==n[0]||t[1]!==n[1]:t!==n));var t,n})){switch(l.pathList.baseVal=_=[],l.pathList.animVal=null,f.position_path){case P:_.push([E(v[0]),E(v[1])]);break;case N:t="number"==typeof g[0]&&0<g[0]||"number"==typeof g[1]&&0<g[1],u=ne*(t?-1:1),h=Math.atan2(v[1].y-v[0].y,v[1].x-v[0].x),t=u-h,h=Math.PI-h-u,u=Ae(v[0],v[1])/Math.sqrt(2)*te,t={x:v[0].x+Math.cos(t)*u,y:v[0].y+Math.sin(t)*u*-1},u={x:v[1].x+Math.cos(h)*u,y:v[1].y+Math.sin(h)*u*-1},_.push([E(v[0]),t,u,E(v[1])]);break;case T:case W:o=[g[0],f.position_path===W?0:g[1]],r=[],s=[],v.forEach(function(e,t){var n,a=o[t],i=Array.isArray(a)?{x:a[0],y:a[1]}:"number"==typeof a?e.socketId===b?{x:0,y:-a}:e.socketId===k?{x:a,y:0}:e.socketId===L?{x:0,y:a}:{x:-a,y:0}:(n=v[t?0:1],a=0<(a=f.position_plugOverheadSE[t])?U+(K<a?(a-K)*J:0):z+(f.position_lineStrokeWidth>j?(f.position_lineStrokeWidth-j)*H:0),e.socketId===b?{x:0,y:-(i=(i=(e.y-n.y)/2)<a?a:i)}:e.socketId===k?{x:i=(i=(n.x-e.x)/2)<a?a:i,y:0}:e.socketId===L?{x:0,y:i=(i=(n.y-e.y)/2)<a?a:i}:{x:-(i=(i=(e.x-n.x)/2)<a?a:i),y:0});r[t]=e.x+i.x,s[t]=e.y+i.y}),_.push([E(v[0]),{x:r[0],y:s[0]},{x:r[1],y:s[1]},E(v[1])]);break;case B:!function(){var n,i=1,l=2,r=3,o=4,s=[[],[]],u=[];function h(e){return e===i?r:e===l?o:e===r?i:l}function p(e){return e===l||e===o?"x":"y"}function c(e,t,n){var a={x:e.x,y:e.y};if(n){if(n===h(e.dirId))throw new Error("Invalid dirId: "+n);a.dirId=n}else a.dirId=e.dirId;return a.dirId===i?a.y-=t:a.dirId===l?a.x+=t:a.dirId===r?a.y+=t:a.x-=t,a}function d(e,t){return t.dirId===i?e.y<=t.y:t.dirId===l?e.x>=t.x:t.dirId===r?e.y>=t.y:e.x<=t.x}function f(e,t){return t.dirId===i||t.dirId===r?e.x===t.x:e.y===t.y}function y(e){return e[0]?{contain:0,notContain:1}:{contain:1,notContain:0}}function m(e,t,n){return Math.abs(t[n]-e[n])}function S(e,t,n){return"x"===n?e.x<t.x?l:o:e.y<t.y?r:i}for(v.forEach(function(e,t){var n=E(e),a=g[t];e=Array.isArray(a)?a[0]<0?[o,-a[0]]:0<a[0]?[l,a[0]]:a[1]<0?[i,-a[1]]:0<a[1]?[r,a[1]]:[e.socketId,0]:"number"!=typeof a?[e.socketId,ee]:0<=a?[e.socketId,a]:[h(e.socketId),-a],n.dirId=e[0],a=e[1],s[t].push(n),u[t]=c(n,a)});function(){var e,t,a,i,n=[d(u[1],u[0]),d(u[0],u[1])],o=[p(u[0].dirId),p(u[1].dirId)];if(o[0]===o[1]){if(n[0]&&n[1])return void(f(u[1],u[0])||(u[0][o[0]]===u[1][o[1]]?(s[0].push(u[0]),s[1].push(u[1])):(e=u[0][o[0]]+(u[1][o[1]]-u[0][o[0]])/2,s[0].push(c(u[0],Math.abs(e-u[0][o[0]]))),s[1].push(c(u[1],Math.abs(e-u[1][o[1]]))))));n[0]!==n[1]?(t=y(n),(a=m(u[t.notContain],u[t.contain],o[t.notContain]))<ee&&(u[t.notContain]=c(u[t.notContain],ee-a)),s[t.notContain].push(u[t.notContain]),u[t.notContain]=c(u[t.notContain],ee,f(u[t.contain],u[t.notContain])?"x"===o[t.notContain]?r:l:S(u[t.notContain],u[t.contain],"x"===o[t.notContain]?"y":"x"))):(a=m(u[0],u[1],"x"===o[0]?"y":"x"),s.forEach(function(e,t){var n=0===t?1:0;e.push(u[t]),u[t]=c(u[t],ee,2*ee<=a?S(u[t],u[n],"x"===o[t]?"y":"x"):"x"===o[t]?r:l)}))}else{if(n[0]&&n[1])return void(f(u[1],u[0])?s[1].push(u[1]):f(u[0],u[1])?s[0].push(u[0]):s[0].push("x"===o[0]?{x:u[1].x,y:u[0].y}:{x:u[0].x,y:u[1].y}));n[0]!==n[1]?(t=y(n),s[t.notContain].push(u[t.notContain]),u[t.notContain]=c(u[t.notContain],ee,m(u[t.notContain],u[t.contain],o[t.contain])>=ee?S(u[t.notContain],u[t.contain],o[t.contain]):u[t.contain].dirId)):(i=[{x:u[0].x,y:u[0].y},{x:u[1].x,y:u[1].y}],s.forEach(function(e,t){var n=0===t?1:0,a=m(i[t],i[n],o[t]);a<ee&&(u[t]=c(u[t],ee-a)),e.push(u[t]),u[t]=c(u[t],ee,S(u[t],u[n],o[n]))}))}return 1}(););s[1].reverse(),s[0].concat(s[1]).forEach(function(e,t){e={x:e.x,y:e.y};0<t&&_.push([n,e]),n=e})}()}d=[],f.position_plugOverheadSE.forEach(function(e,t){var n,a,i,o,l,r,s,u,h,p=!t;0<e?2===(n=_[a=p?0:_.length-1]).length?(d[a]=d[a]||Ae.apply(null,n),d[a]>$&&(d[a]-e<$&&(e=d[a]-$),s=Ve(n[0],n[1],(p?e:d[a]-e)/d[a]),_[a]=p?[s,n[1]]:[n[0],s],d[a]-=e)):(d[a]=d[a]||Te.apply(null,n),d[a]>$&&(d[a]-e<$&&(e=d[a]-$),s=Ne(n[0],n[1],n[2],n[3],We(n[0],n[1],n[2],n[3],p?e:d[a]-e)),o=p?(i=n[0],s.toP1):(i=n[3],s.fromP2),l=Math.atan2(i.y-s.y,s.x-i.x),r=Ae(s,o),s.x=i.x+Math.cos(l)*e,s.y=i.y+Math.sin(l)*e*-1,o.x=s.x+Math.cos(l)*r,o.y=s.y+Math.sin(l)*r*-1,_[a]=p?[s,s.toP1,s.toP2,n[3]]:[n[0],s.fromP1,s.fromP2,s],d[a]=null)):e<0&&(n=_[a=p?0:_.length-1],s=v[t].socketId,t=-c[t]["x"==(u=s===A||s===k?"x":"y")?"width":"height"],h=(e=e<t?t:e)*(s===A||s===b?-1:1),2===n.length?n[p?0:n.length-1][u]+=h:(p?[0,1]:[n.length-2,n.length-1]).forEach(function(e){n[e][u]+=h}),d[a]=null)}),y.position_socketXYSE=we(v),y.position_plugOverheadSE=we(f.position_plugOverheadSE),y.position_path=f.position_path,y.position_lineStrokeWidth=f.position_lineStrokeWidth,y.position_socketGravitySE=we(g),m=!0,l.events.apl_position&&l.events.apl_position.forEach(function(e){e(l,_)})}return m}function Je(t,n){n!==t.isShown&&(!!n!=!!t.isShown&&(t.svg.style.visibility=n?"":"hidden"),t.isShown=n,t.events&&t.events.svgShow&&t.events.svgShow.forEach(function(e){e(t,n)}))}function $e(e,t){var n,a,h,p,c,d,f,i,o,l,r,s,u,y,m,S,g,_,v,E,x,b,k,w,O,M,I,C,L,A,V,P,N,T,W,B,R,F,G,D,z,j,H,U={};t.line&&(U.line=(i=(n=e).options,a=n.curStats,o=n.events,l=!1,l=Xe(n,a,"line_color",i.lineColor,o.cur_line_color)||l,l=Xe(n,a,"line_colorTra",Oe(a.line_color)[0]<1)||l,l=Xe(n,a,"line_strokeWidth",i.lineSize,o.cur_line_strokeWidth)||l)),(t.plug||U.line)&&(U.plug=(p=(h=e).options,c=h.curStats,d=h.events,f=!1,[0,1].forEach(function(e){var t,n,a,i,o,l,r,s,u=p.plugSE[e];f=Xe(h,c.plug_enabledSE,e,u!==Y)||f,f=Xe(h,c.plug_plugSE,e,u)||f,f=Xe(h,c.plug_colorSE,e,s=p.plugColorSE[e]||c.line_color,d.cur_plug_colorSE)||f,f=Xe(h,c.plug_colorTraSE,e,Oe(s)[0]<1)||f,u!==Y&&(i=n=(t=X[q[u]]).widthR*p.plugSizeSE[e],o=a=t.heightR*p.plugSizeSE[e],re&&(i*=c.line_strokeWidth,o*=c.line_strokeWidth),f=Xe(h,c.plug_markerWidthSE,e,i)||f,f=Xe(h,c.plug_markerHeightSE,e,o)||f,c.capsMaskMarker_markerWidthSE[e]=n,c.capsMaskMarker_markerHeightSE[e]=a),c.plugOutline_plugSE[e]=c.capsMaskMarker_plugSE[e]=u,c.plug_enabledSE[e]?(s=c.line_strokeWidth/ue.lineSize*p.plugSizeSE[e],c.position_plugOverheadSE[e]=t.overhead*s,c.viewBox_plugBCircleSE[e]=t.bCircle*s,l=t.sideLen*s,r=t.backLen*s):(c.position_plugOverheadSE[e]=-c.line_strokeWidth/2,c.viewBox_plugBCircleSE[e]=l=r=0),Xe(h,c.attach_plugSideLenSE,e,l,d.cur_attach_plugSideLenSE),Xe(h,c.attach_plugBackLenSE,e,r,d.cur_attach_plugBackLenSE),c.capsMaskAnchor_enabledSE[e]=!c.plug_enabledSE[e]}),f=Xe(h,c,"plug_enabled",c.plug_enabledSE[0]||c.plug_enabledSE[1])||f)),(t.lineOutline||U.line)&&(U.lineOutline=(o=(i=e).options,l=i.curStats,k=!1,k=Xe(i,l,"lineOutline_enabled",o.lineOutlineEnabled)||k,k=Xe(i,l,"lineOutline_color",o.lineOutlineColor)||k,k=Xe(i,l,"lineOutline_colorTra",Oe(l.lineOutline_color)[0]<1)||k,o=l.line_strokeWidth*o.lineOutlineSize,k=Xe(i,l,"lineOutline_strokeWidth",l.line_strokeWidth-2*o)||k,k=Xe(i,l,"lineOutline_inStrokeWidth",l.lineOutline_colorTra?l.lineOutline_strokeWidth+2*se:l.line_strokeWidth-o)||k)),(t.plugOutline||U.line||U.plug||U.lineOutline)&&(U.plugOutline=(s=(r=e).options,u=r.curStats,y=!1,[0,1].forEach(function(e){var t=u.plugOutline_plugSE[e],n=t!==Y?X[q[t]]:null;y=Xe(r,u.plugOutline_enabledSE,e,s.plugOutlineEnabledSE[e]&&u.plug_enabled&&u.plug_enabledSE[e]&&!!n&&!!n.outlineBase)||y,y=Xe(r,u.plugOutline_colorSE,e,t=s.plugOutlineColorSE[e]||u.lineOutline_color)||y,y=Xe(r,u.plugOutline_colorTraSE,e,Oe(t)[0]<1)||y,n&&n.outlineBase&&((t=s.plugOutlineSizeSE[e])>n.outlineMax&&(t=n.outlineMax),t*=2*n.outlineBase,y=Xe(r,u.plugOutline_strokeWidthSE,e,t)||y,y=Xe(r,u.plugOutline_inStrokeWidthSE,e,u.plugOutline_colorTraSE[e]?t-se/(u.line_strokeWidth/ue.lineSize)/s.plugSizeSE[e]*2:t/2)||y)}),y)),(t.faces||U.line||U.plug||U.lineOutline||U.plugOutline)&&(U.faces=(g=(m=e).curStats,_=m.aplStats,v=m.events,E=!1,!g.line_altColor&&Xe(m,_,"line_color",S=g.line_color,v.apl_line_color)&&(m.lineFace.style.stroke=S,E=!0),Xe(m,_,"line_strokeWidth",S=g.line_strokeWidth,v.apl_line_strokeWidth)&&(m.lineShape.style.strokeWidth=S+"px",E=!0,(oe||ie)&&(je(m,m.lineShape),ie&&(je(m,m.lineFace),je(m,m.lineMaskCaps)))),Xe(m,_,"lineOutline_enabled",S=g.lineOutline_enabled,v.apl_lineOutline_enabled)&&(m.lineOutlineFace.style.display=S?"inline":"none",E=!0),g.lineOutline_enabled&&(Xe(m,_,"lineOutline_color",S=g.lineOutline_color,v.apl_lineOutline_color)&&(m.lineOutlineFace.style.stroke=S,E=!0),Xe(m,_,"lineOutline_strokeWidth",S=g.lineOutline_strokeWidth,v.apl_lineOutline_strokeWidth)&&(m.lineOutlineMaskShape.style.strokeWidth=S+"px",E=!0,ie&&(je(m,m.lineOutlineMaskCaps),je(m,m.lineOutlineFace))),Xe(m,_,"lineOutline_inStrokeWidth",S=g.lineOutline_inStrokeWidth,v.apl_lineOutline_inStrokeWidth)&&(m.lineMaskShape.style.strokeWidth=S+"px",E=!0,ie&&(je(m,m.lineOutlineMaskCaps),je(m,m.lineOutlineFace)))),Xe(m,_,"plug_enabled",S=g.plug_enabled,v.apl_plug_enabled)&&(m.plugsFace.style.display=S?"inline":"none",E=!0),g.plug_enabled&&[0,1].forEach(function(n){var e=g.plug_plugSE[n],t=e!==Y?X[q[e]]:null,a=Ze(n,t);Xe(m,_.plug_enabledSE,n,S=g.plug_enabledSE[n],v.apl_plug_enabledSE)&&(m.plugsFace.style[a.prop]=S?"url(#"+m.plugMarkerIdSE[n]+")":"none",E=!0),g.plug_enabledSE[n]&&(Xe(m,_.plug_plugSE,n,e,v.apl_plug_plugSE)&&(m.plugFaceSE[n].href.baseVal="#"+t.elmId,Ue(m,m.plugMarkerSE[n],a.orient,t.bBox,m.svg,m.plugMarkerShapeSE[n],m.plugsFace),E=!0,oe&&je(m,m.plugsFace)),Xe(m,_.plug_colorSE,n,S=g.plug_colorSE[n],v.apl_plug_colorSE)&&(m.plugFaceSE[n].style.fill=S,E=!0,(le||re||ie)&&!g.line_colorTra&&je(m,ie?m.lineMaskCaps:m.capsMaskLine)),["markerWidth","markerHeight"].forEach(function(e){var t="plug_"+e+"SE";Xe(m,_[t],n,S=g[t][n],v["apl_"+t])&&(m.plugMarkerSE[n][e].baseVal.value=S,E=!0)}),Xe(m,_.plugOutline_enabledSE,n,S=g.plugOutline_enabledSE[n],v.apl_plugOutline_enabledSE)&&(S?(m.plugFaceSE[n].style.mask="url(#"+m.plugMaskIdSE[n]+")",m.plugOutlineFaceSE[n].style.display="inline"):(m.plugFaceSE[n].style.mask="none",m.plugOutlineFaceSE[n].style.display="none"),E=!0),g.plugOutline_enabledSE[n]&&(Xe(m,_.plugOutline_plugSE,n,e,v.apl_plugOutline_plugSE)&&(m.plugOutlineFaceSE[n].href.baseVal=m.plugMaskShapeSE[n].href.baseVal=m.plugOutlineMaskShapeSE[n].href.baseVal="#"+t.elmId,[m.plugMaskSE[n],m.plugOutlineMaskSE[n]].forEach(function(e){e.x.baseVal.value=t.bBox.left,e.y.baseVal.value=t.bBox.top,e.width.baseVal.value=t.bBox.width,e.height.baseVal.value=t.bBox.height}),E=!0),Xe(m,_.plugOutline_colorSE,n,S=g.plugOutline_colorSE[n],v.apl_plugOutline_colorSE)&&(m.plugOutlineFaceSE[n].style.fill=S,E=!0,ie&&(je(m,m.lineMaskCaps),je(m,m.lineOutlineMaskCaps))),Xe(m,_.plugOutline_strokeWidthSE,n,S=g.plugOutline_strokeWidthSE[n],v.apl_plugOutline_strokeWidthSE)&&(m.plugOutlineMaskShapeSE[n].style.strokeWidth=S+"px",E=!0),Xe(m,_.plugOutline_inStrokeWidthSE,n,S=g.plugOutline_inStrokeWidthSE[n],v.apl_plugOutline_inStrokeWidthSE)&&(m.plugMaskShapeSE[n].style.strokeWidth=S+"px",E=!0)))}),E)),(t.position||U.line||U.plug)&&(U.position=Ke(e)),(t.path||U.position)&&(U.path=(k=(x=e).curStats,I=x.aplStats,M=x.pathList.animVal||x.pathList.baseVal,w=k.path_edge,C=!1,M&&(w.x1=w.x2=M[0][0].x,w.y1=w.y2=M[0][0].y,k.path_pathData=b=Be(M,function(e){e.x<w.x1&&(w.x1=e.x),e.y<w.y1&&(w.y1=e.y),e.x>w.x2&&(w.x2=e.x),e.y>w.y2&&(w.y2=e.y)}),Fe(b,I.path_pathData)&&(x.linePath.setPathData(b),I.path_pathData=b,C=!0,ie?(je(x,x.plugsFace),je(x,x.lineMaskCaps)):oe&&je(x,x.linePath),x.events.apl_path&&x.events.apl_path.forEach(function(e){e(x,b)}))),C)),U.viewBox=(M=(O=e).curStats,I=O.aplStats,C=M.path_edge,L=M.viewBox_bBox,A=I.viewBox_bBox,V=O.svg.viewBox.baseVal,P=O.svg.style,N=!1,I=Math.max(M.line_strokeWidth/2,M.viewBox_plugBCircleSE[0]||0,M.viewBox_plugBCircleSE[1]||0),T={x1:C.x1-I,y1:C.y1-I,x2:C.x2+I,y2:C.y2+I},O.events.new_edge4viewBox&&O.events.new_edge4viewBox.forEach(function(e){e(O,T)}),L.x=M.lineMask_x=M.lineOutlineMask_x=M.maskBGRect_x=T.x1,L.y=M.lineMask_y=M.lineOutlineMask_y=M.maskBGRect_y=T.y1,L.width=T.x2-T.x1,L.height=T.y2-T.y1,["x","y","width","height"].forEach(function(e){var t;(t=L[e])!==A[e]&&(V[e]=A[e]=t,P[Q[e]]=t+("x"===e||"y"===e?O.bodyOffset[e]:0)+"px",N=!0)}),N),U.mask=(R=(W=e).curStats,F=W.aplStats,G=!1,R.plug_enabled?[0,1].forEach(function(e){R.capsMaskMarker_enabledSE[e]=R.plug_enabledSE[e]&&R.plug_colorTraSE[e]||R.plugOutline_enabledSE[e]&&R.plugOutline_colorTraSE[e]}):R.capsMaskMarker_enabledSE[0]=R.capsMaskMarker_enabledSE[1]=!1,R.capsMaskMarker_enabled=R.capsMaskMarker_enabledSE[0]||R.capsMaskMarker_enabledSE[1],R.lineMask_outlineMode=R.lineOutline_enabled,R.caps_enabled=R.capsMaskMarker_enabled||R.capsMaskAnchor_enabledSE[0]||R.capsMaskAnchor_enabledSE[1],R.lineMask_enabled=R.caps_enabled||R.lineMask_outlineMode,(R.lineMask_enabled&&!R.lineMask_outlineMode||R.lineOutline_enabled)&&["x","y"].forEach(function(e){var t="maskBGRect_"+e;Xe(W,F,t,B=R[t])&&(W.maskBGRect[e].baseVal.value=B,G=!0)}),Xe(W,F,"lineMask_enabled",B=R.lineMask_enabled)&&(W.lineFace.style.mask=B?"url(#"+W.lineMaskId+")":"none",G=!0,re&&je(W,W.lineMask)),R.lineMask_enabled&&(Xe(W,F,"lineMask_outlineMode",B=R.lineMask_outlineMode)&&(B?(W.lineMaskBG.style.display="none",W.lineMaskShape.style.display="inline"):(W.lineMaskBG.style.display="inline",W.lineMaskShape.style.display="none"),G=!0),["x","y"].forEach(function(e){var t="lineMask_"+e;Xe(W,F,t,B=R[t])&&(W.lineMask[e].baseVal.value=B,G=!0)}),Xe(W,F,"caps_enabled",B=R.caps_enabled)&&(W.lineMaskCaps.style.display=W.lineOutlineMaskCaps.style.display=B?"inline":"none",G=!0,re&&je(W,W.capsMaskLine)),R.caps_enabled&&([0,1].forEach(function(e){var t;Xe(W,F.capsMaskAnchor_enabledSE,e,B=R.capsMaskAnchor_enabledSE[e])&&(W.capsMaskAnchorSE[e].style.display=B?"inline":"none",G=!0,re&&je(W,W.lineMask)),R.capsMaskAnchor_enabledSE[e]&&(Fe(t=R.capsMaskAnchor_pathDataSE[e],F.capsMaskAnchor_pathDataSE[e])&&(W.capsMaskAnchorSE[e].setPathData(t),F.capsMaskAnchor_pathDataSE[e]=t,G=!0),Xe(W,F.capsMaskAnchor_strokeWidthSE,e,B=R.capsMaskAnchor_strokeWidthSE[e])&&(W.capsMaskAnchorSE[e].style.strokeWidth=B+"px",G=!0))}),Xe(W,F,"capsMaskMarker_enabled",B=R.capsMaskMarker_enabled)&&(W.capsMaskLine.style.display=B?"inline":"none",G=!0),R.capsMaskMarker_enabled&&[0,1].forEach(function(n){var e=R.capsMaskMarker_plugSE[n],t=e!==Y?X[q[e]]:null,a=Ze(n,t);Xe(W,F.capsMaskMarker_enabledSE,n,B=R.capsMaskMarker_enabledSE[n])&&(W.capsMaskLine.style[a.prop]=B?"url(#"+W.lineMaskMarkerIdSE[n]+")":"none",G=!0),R.capsMaskMarker_enabledSE[n]&&(Xe(W,F.capsMaskMarker_plugSE,n,e)&&(W.capsMaskMarkerShapeSE[n].href.baseVal="#"+t.elmId,Ue(W,W.capsMaskMarkerSE[n],a.orient,t.bBox,W.svg,W.capsMaskMarkerShapeSE[n],W.capsMaskLine),G=!0,oe&&(je(W,W.capsMaskLine),je(W,W.lineFace))),["markerWidth","markerHeight"].forEach(function(e){var t="capsMaskMarker_"+e+"SE";Xe(W,F[t],n,B=R[t][n])&&(W.capsMaskMarkerSE[n][e].baseVal.value=B,G=!0)}))}))),R.lineOutline_enabled&&["x","y"].forEach(function(e){var t="lineOutlineMask_"+e;Xe(W,F,t,B=R[t])&&(W.lineOutlineMask[e].baseVal.value=B,G=!0)}),G),t.effect&&(j=(D=e).curStats,H=D.aplStats,Object.keys(Z).forEach(function(e){var t=Z[e],n=e+"_enabled",a=e+"_options",e=j[a];Xe(D,H,n,z=j[n])?(z&&(H[a]=we(e)),t[z?"init":"remove"](D)):z&&ke(e,H[a])&&(t.remove(D),H[n]=!0,H[a]=we(e),t.init(D))})),(le||re)&&U.line&&!U.path&&je(e,e.lineShape),le&&U.plug&&!U.line&&je(e,e.plugsFace),He(e)}function et(e,t){return{duration:(pe(e.duration)&&0<e.duration?e:t).duration,timing:g.validTiming(e.timing)?e.timing:we(t.timing)}}function tt(e,t,n,a){var i=e.curStats,o=e.aplStats,l={};function r(){["show_on","show_effect","show_animOptions"].forEach(function(e){o[e]=i[e]})}i.show_on=t,n&&w[n]&&(i.show_effect=n,i.show_animOptions=et(he(a)?a:{},w[n].defaultAnimOptions)),l.show_on=i.show_on!==o.show_on,l.show_effect=i.show_effect!==o.show_effect,l.show_animOptions=ke(i.show_animOptions,o.show_animOptions),l.show_effect||l.show_animOptions?i.show_inAnim?(n=l.show_effect?w[o.show_effect].stop(e,!0,!0):w[o.show_effect].stop(e),r(),w[o.show_effect].init(e,n)):l.show_on&&(o.show_effect&&l.show_effect&&w[o.show_effect].stop(e,!0,!0),r(),w[o.show_effect].init(e)):l.show_on&&(r(),w[o.show_effect].start(e))}function nt(e,t,n){n={props:e,optionName:n};return e.attachments.indexOf(t)<0&&(!t.conf.bind||t.conf.bind(t,n))&&(e.attachments.push(t),t.boundTargets.push(n),1)}function at(n,a,e){var i=n.attachments.indexOf(a);-1<i&&n.attachments.splice(i,1),a.boundTargets.some(function(e,t){return e.props===n&&(a.conf.unbind&&a.conf.unbind(a,e),i=t,!0)})&&(a.boundTargets.splice(i,1),e||ze(function(){a.boundTargets.length||o(a)}))}function it(s,u){var i,n,e,t,a,o,l,r,h,p,c,d,f,y,m,S=s.options,g={};function _(e,t,n,a,i){var o={};return n?null!=a?(o.container=e[n],o.key=a):(o.container=e,o.key=n):(o.container=e,o.key=t),o.default=i,o.acceptsAuto=null==o.default,o}function v(e,t,n,a,i,o,l){var r,s,u,l=_(e,n,i,o,l);return null!=t[n]&&(s=(t[n]+"").toLowerCase())&&(l.acceptsAuto&&s===D||(u=a[s]))&&u!==l.container[l.key]&&(l.container[l.key]=u,r=!0),null!=l.container[l.key]||l.acceptsAuto||(l.container[l.key]=l.default,r=!0),r}function E(e,t,n,a,i,o,l,r,s){var u,h,p,c,l=_(e,n,i,o,l);if(!a){if(null==l.default)throw new Error("Invalid `type`: "+n);a=typeof l.default}return null!=t[n]&&(l.acceptsAuto&&(t[n]+"").toLowerCase()===D||(p=h=t[n],("number"===(c=a)?pe(p):typeof p===c)&&(h=s&&"string"===a&&h?h.trim():h,1)&&(!r||r(h))))&&h!==l.container[l.key]&&(l.container[l.key]=h,u=!0),null!=l.container[l.key]||l.acceptsAuto||(l.container[l.key]=l.default,u=!0),u}if(u=u||{},["start","end"].forEach(function(e,t){var n=u[e],a=!1;if(n&&(Me(n)||(a=I(n,"anchor")))&&n!==S.anchorSE[t]){if(!1!==s.optionIsAttach.anchorSE[t]&&at(s,_e[S.anchorSE[t]._id]),a&&!nt(s,_e[n._id],e))throw new Error("Can't bind attachment");S.anchorSE[t]=n,s.optionIsAttach.anchorSE[t]=a,i=g.position=!0}}),!S.anchorSE[0]||!S.anchorSE[1]||S.anchorSE[0]===S.anchorSE[1])throw new Error("`start` and `end` are required.");function x(e){var t=a.appendChild(y.createElementNS(ae,"mask"));return t.id=e,t.maskUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[t.x,t.y,t.width,t.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0)}),t}function b(e){var t=a.appendChild(y.createElementNS(ae,"marker"));return t.id=e,t.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH,t.viewBox.baseVal||t.setAttribute("viewBox","0 0 0 0"),t}function k(e){return[e.width,e.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100)}),e}i&&(c=function(e,t){var n,a;if(!(e=Ce(e))||!(n=Ce(t)))throw new Error("Cannot get frames.");return e.length&&n.length&&(e.reverse(),n.reverse(),e.some(function(t){return n.some(function(e){return e===t&&(a=e.contentWindow,!0)})})),a||window}(!1!==s.optionIsAttach.anchorSE[0]?_e[S.anchorSE[0]._id].element:S.anchorSE[0],!1!==s.optionIsAttach.anchorSE[1]?_e[S.anchorSE[1]._id].element:S.anchorSE[1]))!==s.baseWindow&&(e=c,f=(n=s).aplStats,y=e.document,m=C+"-"+n._id,n.pathList={},Ye(f,de),Object.keys(Z).forEach(function(e){var t=e+"_enabled";f[t]&&(Z[e].remove(n),f[t]=!1)}),n.baseWindow&&n.svg&&n.baseWindow.document.body.removeChild(n.svg),Qe(n.baseWindow=e),n.bodyOffset=qe(e),n.svg=t=y.createElementNS(ae,"svg"),t.className.baseVal=C,t.viewBox.baseVal||t.setAttribute("viewBox","0 0 0 0"),n.defs=a=t.appendChild(y.createElementNS(ae,"defs")),n.linePath=l=a.appendChild(y.createElementNS(ae,"path")),l.id=r=m+"-line-path",l.className.baseVal=C+"-line-path",re&&(l.style.fill="none"),n.lineShape=l=a.appendChild(y.createElementNS(ae,"use")),l.id=h=m+"-line-shape",l.href.baseVal="#"+r,(o=a.appendChild(y.createElementNS(ae,"g"))).id=p=m+"-caps",n.capsMaskAnchorSE=[0,1].map(function(){var e=o.appendChild(y.createElementNS(ae,"path"));return e.className.baseVal=C+"-caps-mask-anchor",e}),n.lineMaskMarkerIdSE=[m+"-caps-mask-marker-0",m+"-caps-mask-marker-1"],n.capsMaskMarkerSE=[0,1].map(function(e){return b(n.lineMaskMarkerIdSE[e])}),n.capsMaskMarkerShapeSE=[0,1].map(function(e){e=n.capsMaskMarkerSE[e].appendChild(y.createElementNS(ae,"use"));return e.className.baseVal=C+"-caps-mask-marker-shape",e}),n.capsMaskLine=l=o.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-caps-mask-line",l.href.baseVal="#"+h,n.maskBGRect=l=k(a.appendChild(y.createElementNS(ae,"rect"))),l.id=c=m+"-mask-bg-rect",l.className.baseVal=C+"-mask-bg-rect",re&&(l.style.fill="white"),n.lineMask=k(x(n.lineMaskId=m+"-line-mask")),n.lineMaskBG=l=n.lineMask.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+c,n.lineMaskShape=l=n.lineMask.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-line-mask-shape",l.href.baseVal="#"+r,l.style.display="none",n.lineMaskCaps=l=n.lineMask.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+p,n.lineOutlineMask=k(x(e=m+"-line-outline-mask")),(l=n.lineOutlineMask.appendChild(y.createElementNS(ae,"use"))).href.baseVal="#"+c,n.lineOutlineMaskShape=l=n.lineOutlineMask.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-line-outline-mask-shape",l.href.baseVal="#"+r,n.lineOutlineMaskCaps=l=n.lineOutlineMask.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+p,n.face=t.appendChild(y.createElementNS(ae,"g")),n.lineFace=l=n.face.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+h,n.lineOutlineFace=l=n.face.appendChild(y.createElementNS(ae,"use")),l.href.baseVal="#"+h,l.style.mask="url(#"+e+")",l.style.display="none",n.plugMaskIdSE=[m+"-plug-mask-0",m+"-plug-mask-1"],n.plugMaskSE=[0,1].map(function(e){return x(n.plugMaskIdSE[e])}),n.plugMaskShapeSE=[0,1].map(function(e){e=n.plugMaskSE[e].appendChild(y.createElementNS(ae,"use"));return e.className.baseVal=C+"-plug-mask-shape",e}),d=[],n.plugOutlineMaskSE=[0,1].map(function(e){return x(d[e]=m+"-plug-outline-mask-"+e)}),n.plugOutlineMaskShapeSE=[0,1].map(function(e){e=n.plugOutlineMaskSE[e].appendChild(y.createElementNS(ae,"use"));return e.className.baseVal=C+"-plug-outline-mask-shape",e}),n.plugMarkerIdSE=[m+"-plug-marker-0",m+"-plug-marker-1"],n.plugMarkerSE=[0,1].map(function(e){e=b(n.plugMarkerIdSE[e]);return re&&(e.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE),e}),n.plugMarkerShapeSE=[0,1].map(function(e){return n.plugMarkerSE[e].appendChild(y.createElementNS(ae,"g"))}),n.plugFaceSE=[0,1].map(function(e){return n.plugMarkerShapeSE[e].appendChild(y.createElementNS(ae,"use"))}),n.plugOutlineFaceSE=[0,1].map(function(e){var t=n.plugMarkerShapeSE[e].appendChild(y.createElementNS(ae,"use"));return t.style.mask="url(#"+d[e]+")",t.style.display="none",t}),n.plugsFace=l=n.face.appendChild(y.createElementNS(ae,"use")),l.className.baseVal=C+"-plugs-face",l.href.baseVal="#"+h,l.style.display="none",n.curStats.show_inAnim?(n.isShown=1,w[f.show_effect].stop(n,!0)):n.isShown||(t.style.visibility="hidden"),y.body.appendChild(t),[0,1,2].forEach(function(e){var t,e=n.options.labelSEM[e];e&&I(e,"label")&&(t=_e[e._id]).conf.initSvg&&t.conf.initSvg(t,n)}),g.line=g.plug=g.lineOutline=g.plugOutline=g.faces=g.effect=!0),g.position=v(S,u,"path",R,null,null,ue.path)||g.position,g.position=v(S,u,"startSocket",V,"socketSE",0)||g.position,g.position=v(S,u,"endSocket",V,"socketSE",1)||g.position,[u.startSocketGravity,u.endSocketGravity].forEach(function(e,t){var n,a,i=!1;null!=e&&(Array.isArray(e)?pe(e[0])&&pe(e[1])&&(i=[e[0],e[1]],Array.isArray(S.socketGravitySE[t])&&(n=i,a=S.socketGravitySE[t],n.length===a.length&&n.every(function(e,t){return e===a[t]}))&&(i=!1)):((e+"").toLowerCase()===D?i=null:pe(e)&&0<=e&&(i=e),i===S.socketGravitySE[t]&&(i=!1)),!1!==i&&(S.socketGravitySE[t]=i,g.position=!0))}),g.line=E(S,u,"color",null,"lineColor",null,ue.lineColor,null,!0)||g.line,g.line=E(S,u,"size",null,"lineSize",null,ue.lineSize,function(e){return 0<e})||g.line,["startPlug","endPlug"].forEach(function(e,t){g.plug=v(S,u,e,F,"plugSE",t,ue.plugSE[t])||g.plug,g.plug=E(S,u,e+"Color","string","plugColorSE",t,null,null,!0)||g.plug,g.plug=E(S,u,e+"Size",null,"plugSizeSE",t,ue.plugSizeSE[t],function(e){return 0<e})||g.plug}),g.lineOutline=E(S,u,"outline",null,"lineOutlineEnabled",null,ue.lineOutlineEnabled)||g.lineOutline,g.lineOutline=E(S,u,"outlineColor",null,"lineOutlineColor",null,ue.lineOutlineColor,null,!0)||g.lineOutline,g.lineOutline=E(S,u,"outlineSize",null,"lineOutlineSize",null,ue.lineOutlineSize,function(e){return 0<e&&e<=.48})||g.lineOutline,["startPlugOutline","endPlugOutline"].forEach(function(e,t){g.plugOutline=E(S,u,e,null,"plugOutlineEnabledSE",t,ue.plugOutlineEnabledSE[t])||g.plugOutline,g.plugOutline=E(S,u,e+"Color","string","plugOutlineColorSE",t,null,null,!0)||g.plugOutline,g.plugOutline=E(S,u,e+"Size",null,"plugOutlineSizeSE",t,ue.plugOutlineSizeSE[t],function(e){return 1<=e})||g.plugOutline}),["startLabel","endLabel","middleLabel"].forEach(function(e,t){var n,a,i,o=u[e],l=S.labelSEM[t]&&!s.optionIsAttach.labelSEM[t]?_e[S.labelSEM[t]._id].text:S.labelSEM[t],r=!1;if((n="string"==typeof o)&&(o=o.trim()),(n||o&&(r=I(o,"label")))&&o!==l){if(S.labelSEM[t]&&(at(s,_e[S.labelSEM[t]._id]),S.labelSEM[t]=""),o){if(r?(a=_e[(i=o)._id]).boundTargets.slice().forEach(function(e){a.conf.removeOption(a,e)}):i=new M(O.captionLabel,[o]),!nt(s,_e[i._id],e))throw new Error("Can't bind attachment");S.labelSEM[t]=i}s.optionIsAttach.labelSEM[t]=r}}),Object.keys(Z).forEach(function(a){var e,t,o=Z[a],n=a+"_enabled",i=a+"_options";function l(a){var i={};return o.optionsConf.forEach(function(e){var t=e[0],n=e[3];null==e[4]||i[n]||(i[n]=[]),("function"==typeof t?t:"id"===t?v:E).apply(null,[i,a].concat(e.slice(1)))}),i}function r(e){var t,n=a+"_animOptions";return e.hasOwnProperty("animation")?he(e.animation)?t=s.curStats[n]=et(e.animation,o.defaultAnimOptions):(t=!!e.animation,s.curStats[n]=t?et({},o.defaultAnimOptions):null):(t=!!o.defaultEnabled,s.curStats[n]=t?et({},o.defaultAnimOptions):null),t}u.hasOwnProperty(a)&&(e=u[a],he(e)?(s.curStats[n]=!0,t=s.curStats[i]=l(e),o.anim&&(s.curStats[i].animation=r(e))):(t=s.curStats[n]=!!e)&&(s.curStats[i]=l({}),o.anim&&(s.curStats[i].animation=r({}))),ke(t,S[a])&&(S[a]=t,g.effect=!0))}),$e(s,g)}function ot(e,t,n){var a={options:{anchorSE:[],socketSE:[],socketGravitySE:[],plugSE:[],plugColorSE:[],plugSizeSE:[],plugOutlineEnabledSE:[],plugOutlineColorSE:[],plugOutlineSizeSE:[],labelSEM:["","",""]},optionIsAttach:{anchorSE:[!1,!1],labelSEM:[!1,!1,!1]},curStats:{},aplStats:{},attachments:[],events:{},reflowTargets:[]};Ye(a.curStats,de),Ye(a.aplStats,de),Object.keys(Z).forEach(function(e){var t=Z[e].stats;Ye(a.curStats,t),Ye(a.aplStats,t),a.options[e]=!1}),Ye(a.curStats,fe),Ye(a.aplStats,fe),a.curStats.show_effect=ye,a.curStats.show_animOptions=we(w[ye].defaultAnimOptions),Object.defineProperty(this,"_id",{value:++ge}),a._id=this._id,Se[this._id]=a,1===arguments.length&&(n=e,e=null),n=n||{},(e||t)&&(n=we(n),e&&(n.start=e),t&&(n.end=t)),a.isShown=a.aplStats.show_on=!n.hide,this.setOptions(n)}function lt(n){return function(e){var t={};t[n]=e,this.setOptions(t)}}function rt(e,t){var n,a={conf:e,curStats:{},aplStats:{},boundTargets:[]},i={};e.argOptions.every(function(e){return!(!t.length||("string"==typeof e.type?typeof t[0]!==e.type:"function"!=typeof e.type||!e.type(t[0])))&&(i[e.optionName]=t.shift(),!0)}),n=t.length&&he(t[0])?we(t[0]):{},Object.keys(i).forEach(function(e){n[e]=i[e]}),e.stats&&(Ye(a.curStats,e.stats),Ye(a.aplStats,e.stats)),Object.defineProperty(this,"_id",{value:++ve}),Object.defineProperty(this,"isRemoved",{get:function(){return!_e[this._id]}}),a._id=this._id,e.init&&!e.init(a,n)||(_e[this._id]=a)}return Z={dash:{stats:{dash_len:{},dash_gap:{},dash_maxOffset:{}},anim:!0,defaultAnimOptions:{duration:1e3,timing:"linear"},optionsConf:[["type","len","number",null,null,null,function(e){return 0<e}],["type","gap","number",null,null,null,function(e){return 0<e}]],init:function(e){Ge(e,"apl_line_strokeWidth",Z.dash.update),e.lineFace.style.strokeDashoffset=0,Z.dash.update(e)},remove:function(e){var t=e.curStats;De(e,"apl_line_strokeWidth",Z.dash.update),t.dash_animId&&(g.remove(t.dash_animId),t.dash_animId=null),e.lineFace.style.strokeDasharray="none",e.lineFace.style.strokeDashoffset=0,Ye(e.aplStats,Z.dash.stats)},update:function(t){var e,n=t.curStats,a=t.aplStats,i=a.dash_options,o=!1;n.dash_len=i.len||2*a.line_strokeWidth,n.dash_gap=i.gap||a.line_strokeWidth,n.dash_maxOffset=n.dash_len+n.dash_gap,o=Xe(t,a,"dash_len",n.dash_len)||o,(o=Xe(t,a,"dash_gap",n.dash_gap)||o)&&(t.lineFace.style.strokeDasharray=a.dash_len+","+a.dash_gap),n.dash_animOptions?(o=Xe(t,a,"dash_maxOffset",n.dash_maxOffset),a.dash_animOptions&&(o||ke(n.dash_animOptions,a.dash_animOptions))&&(n.dash_animId&&(e=g.stop(n.dash_animId),g.remove(n.dash_animId)),a.dash_animOptions=null),a.dash_animOptions||(n.dash_animId=g.add(function(e){return(1-e)*a.dash_maxOffset+"px"},function(e){t.lineFace.style.strokeDashoffset=e},n.dash_animOptions.duration,0,n.dash_animOptions.timing,!1,e),a.dash_animOptions=we(n.dash_animOptions))):a.dash_animOptions&&(n.dash_animId&&(g.remove(n.dash_animId),n.dash_animId=null),t.lineFace.style.strokeDashoffset=0,a.dash_animOptions=null)}},gradient:{stats:{gradient_colorSE:{hasSE:!0},gradient_pointSE:{hasSE:!0,hasProps:!0}},optionsConf:[["type","startColor","string","colorSE",0,null,null,!0],["type","endColor","string","colorSE",1,null,null,!0]],init:function(e){var a=e.baseWindow.document,t=e.defs,n=C+"-"+e._id+"-gradient";e.efc_gradient_gradient=t=t.appendChild(a.createElementNS(ae,"linearGradient")),t.id=n,t.gradientUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[t.x1,t.y1,t.x2,t.y2].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0)}),e.efc_gradient_stopSE=[0,1].map(function(t){var n=e.efc_gradient_gradient.appendChild(a.createElementNS(ae,"stop"));try{n.offset.baseVal=t}catch(e){if(e.code!==DOMException.NO_MODIFICATION_ALLOWED_ERR)throw e;n.setAttribute("offset",t)}return n}),Ge(e,"cur_plug_colorSE",Z.gradient.update),Ge(e,"apl_path",Z.gradient.update),e.curStats.line_altColor=!0,e.lineFace.style.stroke="url(#"+n+")",Z.gradient.update(e)},remove:function(e){e.efc_gradient_gradient&&(e.defs.removeChild(e.efc_gradient_gradient),e.efc_gradient_gradient=e.efc_gradient_stopSE=null),De(e,"cur_plug_colorSE",Z.gradient.update),De(e,"apl_path",Z.gradient.update),e.curStats.line_altColor=!1,e.lineFace.style.stroke=e.curStats.line_color,Ye(e.aplStats,Z.gradient.stats)},update:function(a){var e,i=a.curStats,o=a.aplStats,t=o.gradient_options,n=a.pathList.animVal||a.pathList.baseVal;[0,1].forEach(function(e){i.gradient_colorSE[e]=t.colorSE[e]||i.plug_colorSE[e]}),e=n[0][0],i.gradient_pointSE[0]={x:e.x,y:e.y},e=(n=n[n.length-1])[n.length-1],i.gradient_pointSE[1]={x:e.x,y:e.y},[0,1].forEach(function(t){var n;Xe(a,o.gradient_colorSE,t,n=i.gradient_colorSE[t])&&(re?(n=Oe(n),a.efc_gradient_stopSE[t].style.stopColor=n[1],a.efc_gradient_stopSE[t].style.stopOpacity=n[0]):a.efc_gradient_stopSE[t].style.stopColor=n),["x","y"].forEach(function(e){(n=i.gradient_pointSE[t][e])!==o.gradient_pointSE[t][e]&&(a.efc_gradient_gradient[e+(t+1)].baseVal.value=o.gradient_pointSE[t][e]=n)})})}},dropShadow:{stats:{dropShadow_dx:{},dropShadow_dy:{},dropShadow_blur:{},dropShadow_color:{},dropShadow_opacity:{},dropShadow_x:{},dropShadow_y:{}},optionsConf:[["type","dx",null,null,null,2],["type","dy",null,null,null,4],["type","blur",null,null,null,3,function(e){return 0<=e}],["type","color",null,null,null,"#000",null,!0],["type","opacity",null,null,null,.8,function(e){return 0<=e&&e<=1}]],init:function(t){var e,n,a,i,o=t.baseWindow.document,l=t.defs,r=C+"-"+t._id+"-dropShadow",s=(e=o,n=r,i={},"boolean"!=typeof u&&(u=!!window.SVGFEDropShadowElement&&!re),i.elmsAppend=[i.elmFilter=o=e.createElementNS(ae,"filter")],o.filterUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,o.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),o.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),o.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),o.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),o.id=n,u?(i.elmOffset=i.elmBlur=a=o.appendChild(e.createElementNS(ae,"feDropShadow")),i.styleFlood=a.style):(i.elmBlur=o.appendChild(e.createElementNS(ae,"feGaussianBlur")),i.elmOffset=a=o.appendChild(e.createElementNS(ae,"feOffset")),a.result.baseVal="offsetblur",a=o.appendChild(e.createElementNS(ae,"feFlood")),i.styleFlood=a.style,(a=o.appendChild(e.createElementNS(ae,"feComposite"))).in2.baseVal="offsetblur",a.operator.baseVal=SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN,(a=o.appendChild(e.createElementNS(ae,"feMerge"))).appendChild(e.createElementNS(ae,"feMergeNode")),a.appendChild(e.createElementNS(ae,"feMergeNode")).in1.baseVal="SourceGraphic"),i);["elmFilter","elmOffset","elmBlur","styleFlood","elmsAppend"].forEach(function(e){t["efc_dropShadow_"+e]=s[e]}),s.elmsAppend.forEach(function(e){l.appendChild(e)}),t.face.setAttribute("filter","url(#"+r+")"),Ge(t,"new_edge4viewBox",Z.dropShadow.adjustEdge),Z.dropShadow.update(t)},remove:function(e){var t=e.defs;e.efc_dropShadow_elmsAppend&&(e.efc_dropShadow_elmsAppend.forEach(function(e){t.removeChild(e)}),e.efc_dropShadow_elmFilter=e.efc_dropShadow_elmOffset=e.efc_dropShadow_elmBlur=e.efc_dropShadow_styleFlood=e.efc_dropShadow_elmsAppend=null),De(e,"new_edge4viewBox",Z.dropShadow.adjustEdge),$e(e,{}),e.face.removeAttribute("filter"),Ye(e.aplStats,Z.dropShadow.stats)},update:function(e){var t,n,a=e.curStats,i=e.aplStats,o=i.dropShadow_options;a.dropShadow_dx=t=o.dx,Xe(e,i,"dropShadow_dx",t)&&(e.efc_dropShadow_elmOffset.dx.baseVal=t,n=!0),a.dropShadow_dy=t=o.dy,Xe(e,i,"dropShadow_dy",t)&&(e.efc_dropShadow_elmOffset.dy.baseVal=t,n=!0),a.dropShadow_blur=t=o.blur,Xe(e,i,"dropShadow_blur",t)&&(e.efc_dropShadow_elmBlur.setStdDeviation(t,t),n=!0),n&&$e(e,{}),a.dropShadow_color=t=o.color,Xe(e,i,"dropShadow_color",t)&&(e.efc_dropShadow_styleFlood.floodColor=t),a.dropShadow_opacity=t=o.opacity,Xe(e,i,"dropShadow_opacity",t)&&(e.efc_dropShadow_styleFlood.floodOpacity=t)},adjustEdge:function(a,i){var e,o=a.curStats,l=a.aplStats;null!=o.dropShadow_dx&&(e=3*o.dropShadow_blur,(e={x1:i.x1-e+o.dropShadow_dx,y1:i.y1-e+o.dropShadow_dy,x2:i.x2+e+o.dropShadow_dx,y2:i.y2+e+o.dropShadow_dy}).x1<i.x1&&(i.x1=e.x1),e.y1<i.y1&&(i.y1=e.y1),e.x2>i.x2&&(i.x2=e.x2),e.y2>i.y2&&(i.y2=e.y2),["x","y"].forEach(function(e){var t,n="dropShadow_"+e;o[n]=t=i[e+"1"],Xe(a,l,n,t)&&(a.efc_dropShadow_elmFilter[e].baseVal.value=t)}))}}},Object.keys(Z).forEach(function(e){var t=Z[e],n=t.stats;n[e+"_enabled"]={iniValue:!1},n[e+"_options"]={hasProps:!0},t.anim&&(n[e+"_animOptions"]={},n[e+"_animId"]={})}),w={none:{defaultAnimOptions:{},init:function(e,t){var n=e.curStats;n.show_animId&&(g.remove(n.show_animId),n.show_animId=null),w.none.start(e,t)},start:function(e,t){w.none.stop(e,!0)},stop:function(e,t,n){var a=e.curStats;return n=null!=n?n:e.aplStats.show_on,a.show_inAnim=!1,t&&Je(e,n),n?1:0}},fade:{defaultAnimOptions:{duration:300,timing:"linear"},init:function(n,e){var t=n.curStats,a=n.aplStats;t.show_animId&&g.remove(t.show_animId),t.show_animId=g.add(function(e){return e},function(e,t){t?w.fade.stop(n,!0):(n.svg.style.opacity=e+"",ie&&(je(n,n.svg),He(n)))},a.show_animOptions.duration,1,a.show_animOptions.timing,null,!1),w.fade.start(n,e)},start:function(e,t){var n,a=e.curStats;a.show_inAnim&&(n=g.stop(a.show_animId)),Je(e,1),a.show_inAnim=!0,g.start(a.show_animId,!e.aplStats.show_on,null!=t?t:n)},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?g.stop(i.show_animId):n?1:0,i.show_inAnim=!1,t&&(e.svg.style.opacity=n?"":"0",Je(e,n)),a}},draw:{defaultAnimOptions:{duration:500,timing:[.58,0,.42,1]},init:function(n,e){var t=n.curStats,a=n.aplStats,o=n.pathList.baseVal,i=Re(o),l=i.segsLen,r=i.lenAll;t.show_animId&&g.remove(t.show_animId),t.show_animId=g.add(function(e){var t,n,a,i=-1;if(0===e)n=[[o[0][0],o[0][0]]];else if(1===e)n=o;else{for(t=r*e,n=[];t>=l[++i];)n.push(o[i]),t-=l[i];t&&(2===(a=o[i]).length?n.push([a[0],Ve(a[0],a[1],t/l[i])]):(e=Ne(a[0],a[1],a[2],a[3],We(a[0],a[1],a[2],a[3],t)),n.push([a[0],e.fromP1,e.fromP2,e])))}return n},function(e,t){t?w.draw.stop(n,!0):(n.pathList.animVal=e,$e(n,{path:!0}))},a.show_animOptions.duration,1,a.show_animOptions.timing,null,!1),w.draw.start(n,e)},start:function(e,t){var n,a=e.curStats;a.show_inAnim&&(n=g.stop(a.show_animId)),Je(e,1),a.show_inAnim=!0,Ge(e,"apl_position",w.draw.update),g.start(a.show_animId,!e.aplStats.show_on,null!=t?t:n)},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?g.stop(i.show_animId):n?1:0,i.show_inAnim=!1,t&&(e.pathList.animVal=n?null:[[e.pathList.baseVal[0][0],e.pathList.baseVal[0][0]]],$e(e,{path:!0}),Je(e,n)),a},update:function(e){De(e,"apl_position",w.draw.update),e.curStats.show_inAnim?w.draw.init(e,w.draw.stop(e)):e.aplStats.show_animOptions={}}}},[["start","anchorSE",0],["end","anchorSE",1],["color","lineColor"],["size","lineSize"],["startSocketGravity","socketGravitySE",0],["endSocketGravity","socketGravitySE",1],["startPlugColor","plugColorSE",0],["endPlugColor","plugColorSE",1],["startPlugSize","plugSizeSE",0],["endPlugSize","plugSizeSE",1],["outline","lineOutlineEnabled"],["outlineColor","lineOutlineColor"],["outlineSize","lineOutlineSize"],["startPlugOutline","plugOutlineEnabledSE",0],["endPlugOutline","plugOutlineEnabledSE",1],["startPlugOutlineColor","plugOutlineColorSE",0],["endPlugOutlineColor","plugOutlineColorSE",1],["startPlugOutlineSize","plugOutlineSizeSE",0],["endPlugOutlineSize","plugOutlineSizeSE",1]].forEach(function(e){var t=e[0],n=e[1],a=e[2];Object.defineProperty(ot.prototype,t,{get:function(){var e=null!=a?Se[this._id].options[n][a]:n?Se[this._id].options[n]:Se[this._id].options[t];return null==e?D:we(e)},set:lt(t),enumerable:!0})}),[["path",R],["startSocket",V,"socketSE",0],["endSocket",V,"socketSE",1],["startPlug",F,"plugSE",0],["endPlug",F,"plugSE",1]].forEach(function(e){var a=e[0],i=e[1],o=e[2],l=e[3];Object.defineProperty(ot.prototype,a,{get:function(){var t,n=null!=l?Se[this._id].options[o][l]:o?Se[this._id].options[o]:Se[this._id].options[a];return n?Object.keys(i).some(function(e){return i[e]===n&&(t=e,!0)})?t:new Error("It's broken"):D},set:lt(a),enumerable:!0})}),Object.keys(Z).forEach(function(n){var a=Z[n];Object.defineProperty(ot.prototype,n,{get:function(){var s,e,t=Se[this._id].options[n];return he(t)?(s=t,e=a.optionsConf.reduce(function(e,t){var n,a=t[0],i=t[1],o=t[2],l=t[3],t=t[4],r=null!=t?s[l][t]:l?s[l]:s[i];return e[i]="id"===a?r?Object.keys(o).some(function(e){return o[e]===r&&(n=e,!0)})?n:new Error("It's broken"):D:null==r?D:we(r),e},{}),a.anim&&(e.animation=we(s.animation)),e):t},set:lt(n),enumerable:!0})}),["startLabel","endLabel","middleLabel"].forEach(function(e,n){Object.defineProperty(ot.prototype,e,{get:function(){var e=Se[this._id],t=e.options;return t.labelSEM[n]&&!e.optionIsAttach.labelSEM[n]?_e[t.labelSEM[n]._id].text:t.labelSEM[n]||""},set:lt(e),enumerable:!0})}),ot.prototype.setOptions=function(e){return it(Se[this._id],e),this},ot.prototype.position=function(){return $e(Se[this._id],{position:!0}),this},ot.prototype.remove=function(){var t=Se[this._id],n=t.curStats;Object.keys(Z).forEach(function(e){e+="_animId";n[e]&&g.remove(n[e])}),n.show_animId&&g.remove(n.show_animId),t.attachments.slice().forEach(function(e){at(t,e)}),t.baseWindow&&t.svg&&t.baseWindow.document.body.removeChild(t.svg),delete Se[this._id]},ot.prototype.show=function(e,t){return tt(Se[this._id],!0,e,t),this},ot.prototype.hide=function(e,t){return tt(Se[this._id],!1,e,t),this},o=function(t){t&&_e[t._id]&&(t.boundTargets.slice().forEach(function(e){at(e.props,t,!0)}),t.conf.remove&&t.conf.remove(t),delete _e[t._id])},rt.prototype.remove=function(){var t=this,n=_e[t._id];n&&(n.boundTargets.slice().forEach(function(e){n.conf.removeOption(n,e)}),ze(function(){var e=_e[t._id];e&&(console.error("LeaderLineAttachment was not removed by removeOption"),o(e))}))},M=rt,window.LeaderLineAttachment=M,I=function(e,t){return e instanceof M&&(!(e.isRemoved||t&&_e[e._id].conf.type!==t)||null)},O={pointAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Me}],init:function(e,t){return e.element=O.pointAnchor.checkElement(t.element),e.x=O.pointAnchor.parsePercent(t.x,!0)||[.5,!0],e.y=O.pointAnchor.parsePercent(t.y,!0)||[.5,!0],!0},removeOption:function(e,t){var n=t.props,a={},i=e.element,e=n.options.anchorSE["start"===t.optionName?1:0];i===e&&(i=e===document.body?new M(O.pointAnchor,[i]):document.body),a[t.optionName]=i,it(n,a)},getBBoxNest:function(e,t){var n=Le(e.element,t.baseWindow),a=n.width,t=n.height;return n.width=n.height=0,n.left=n.right=n.left+e.x[0]*(e.x[1]?a:1),n.top=n.bottom=n.top+e.y[0]*(e.y[1]?t:1),n},parsePercent:function(e,t){var n,a,i=!1;return pe(e)?a=e:"string"==typeof e&&(n=m.exec(e))&&n[2]&&(i=0!==(a=parseFloat(n[1])/100)),null!=a&&(t||0<=a)?[a,i]:null},checkElement:function(e){if(null==e)e=document.body;else if(!Me(e))throw new Error("`element` must be Element");return e}},areaAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Me},{optionName:"shape",type:"string"}],stats:{color:{},strokeWidth:{},elementWidth:{},elementHeight:{},elementLeft:{},elementTop:{},pathListRel:{},bBoxRel:{},pathData:{},viewBoxBBox:{hasProps:!0},dashLen:{},dashGap:{}},init:function(a,e){var t,n=[];return a.element=O.pointAnchor.checkElement(e.element),"string"==typeof e.color&&(a.color=e.color.trim()),"string"==typeof e.fillColor&&(a.fill=e.fillColor.trim()),pe(e.size)&&0<=e.size&&(a.size=e.size),e.dash&&(a.dash=!0,pe(e.dash.len)&&0<e.dash.len&&(a.dashLen=e.dash.len),pe(e.dash.gap)&&0<e.dash.gap&&(a.dashGap=e.dash.gap)),"circle"===e.shape?a.shape=e.shape:"polygon"===e.shape&&Array.isArray(e.points)&&3<=e.points.length&&e.points.every(function(e){var t={};return!(!(t.x=O.pointAnchor.parsePercent(e[0],!0))||!(t.y=O.pointAnchor.parsePercent(e[1],!0)))&&(n.push(t),(t.x[1]||t.y[1])&&(a.hasRatio=!0),!0)})?(a.shape=e.shape,a.points=n):(a.shape="rect",a.radius=pe(e.radius)&&0<=e.radius?e.radius:0),"rect"!==a.shape&&"circle"!==a.shape||(a.x=O.pointAnchor.parsePercent(e.x,!0)||[-.05,!0],a.y=O.pointAnchor.parsePercent(e.y,!0)||[-.05,!0],a.width=O.pointAnchor.parsePercent(e.width)||[1.1,!0],a.height=O.pointAnchor.parsePercent(e.height)||[1.1,!0],(a.x[1]||a.y[1]||a.width[1]||a.height[1])&&(a.hasRatio=!0)),t=a.element.ownerDocument,a.svg=e=t.createElementNS(ae,"svg"),e.className.baseVal=C+"-areaAnchor",e.viewBox.baseVal||e.setAttribute("viewBox","0 0 0 0"),a.path=e.appendChild(t.createElementNS(ae,"path")),a.path.style.fill=a.fill||"none",a.isShown=!1,e.style.visibility="hidden",t.body.appendChild(e),Qe(t=t.defaultView),a.bodyOffset=qe(t),a.updateColor=function(){var e=a.curStats,t=a.aplStats,n=a.boundTargets.length?a.boundTargets[0].props.curStats:null;e.color=n=a.color||(n?n.line_color:ue.lineColor),Xe(a,t,"color",n)&&(a.path.style.stroke=n)},a.updateShow=function(){Je(a,a.boundTargets.some(function(e){return!0===e.props.isShown}))},!0},bind:function(e,t){t=t.props;return e.color||Ge(t,"cur_line_color",e.updateColor),Ge(t,"svgShow",e.updateShow),ze(function(){e.updateColor(),e.updateShow()}),!0},unbind:function(e,t){t=t.props;e.color||De(t,"cur_line_color",e.updateColor),De(t,"svgShow",e.updateShow),1<e.boundTargets.length&&ze(function(){e.updateColor(),e.updateShow(),O.areaAnchor.update(e)&&e.boundTargets.forEach(function(e){$e(e.props,{position:!0})})})},removeOption:function(e,t){O.pointAnchor.removeOption(e,t)},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.areaAnchor.unbind(t,e)})),t.svg.parentNode.removeChild(t.svg)},getStrokeWidth:function(e,t){return O.areaAnchor.update(e)&&1<e.boundTargets.length&&ze(function(){e.boundTargets.forEach(function(e){e.props!==t&&$e(e.props,{position:!0})})}),e.curStats.strokeWidth},getPathData:function(e,t){var n=Le(e.element,t.baseWindow);return Be(e.curStats.pathListRel,function(e){e.x+=n.left,e.y+=n.top})},getBBoxNest:function(e,t){t=Le(e.element,t.baseWindow),e=e.curStats.bBoxRel;return{left:e.left+t.left,top:e.top+t.top,right:e.right+t.left,bottom:e.bottom+t.top,width:e.width,height:e.height}},update:function(t){var n,a,i,o,e,l,r,s,u,h,p,c,d,f,y,m,S=t.curStats,g=t.aplStats,_=t.boundTargets.length?t.boundTargets[0].props.curStats:null,v={};if(v.strokeWidth=Xe(t,S,"strokeWidth",null!=t.size?t.size:_?_.line_strokeWidth:ue.lineSize),n=Ie(t.element),v.elementWidth=Xe(t,S,"elementWidth",n.width),v.elementHeight=Xe(t,S,"elementHeight",n.height),v.elementLeft=Xe(t,S,"elementLeft",n.left),v.elementTop=Xe(t,S,"elementTop",n.top),v.strokeWidth||t.hasRatio&&(v.elementWidth||v.elementHeight)){switch(t.shape){case"rect":(c={left:t.x[0]*(t.x[1]?n.width:1),top:t.y[0]*(t.y[1]?n.height:1),width:t.width[0]*(t.width[1]?n.width:1),height:t.height[0]*(t.height[1]?n.height:1)}).right=c.left+c.width,c.bottom=c.top+c.height,p=S.strokeWidth/2,s=(r=Math.min(c.width,c.height))?r/2*Math.SQRT2+p:0,h=(r=t.radius?t.radius<=s?t.radius:s:0)?(s=(r-p)/Math.SQRT2,h=[{x:c.left-(u=r-s),y:c.top+s},{x:c.left+s,y:c.top-u},{x:c.right-s,y:c.top-u},{x:c.right+u,y:c.top+s},{x:c.right+u,y:c.bottom-s},{x:c.right-s,y:c.bottom+u},{x:c.left+s,y:c.bottom+u},{x:c.left-u,y:c.bottom-s}],S.pathListRel=[[h[0],{x:h[0].x,y:h[0].y-(p=r*te)},{x:h[1].x-p,y:h[1].y},h[1]]],h[1].x!==h[2].x&&S.pathListRel.push([h[1],h[2]]),S.pathListRel.push([h[2],{x:h[2].x+p,y:h[2].y},{x:h[3].x,y:h[3].y-p},h[3]]),h[3].y!==h[4].y&&S.pathListRel.push([h[3],h[4]]),S.pathListRel.push([h[4],{x:h[4].x,y:h[4].y+p},{x:h[5].x+p,y:h[5].y},h[5]]),h[5].x!==h[6].x&&S.pathListRel.push([h[5],h[6]]),S.pathListRel.push([h[6],{x:h[6].x-p,y:h[6].y},{x:h[7].x,y:h[7].y+p},h[7]]),h[7].y!==h[0].y&&S.pathListRel.push([h[7],h[0]]),S.pathListRel.push([]),u=r-s+S.strokeWidth/2,[{x:c.left-u,y:c.top-u},{x:c.right+u,y:c.bottom+u}]):(u=S.strokeWidth/2,h=[{x:c.left-u,y:c.top-u},{x:c.right+u,y:c.bottom+u}],S.pathListRel=[[h[0],{x:h[1].x,y:h[0].y}],[{x:h[1].x,y:h[0].y},h[1]],[h[1],{x:h[0].x,y:h[1].y}],[]],[{x:c.left-S.strokeWidth,y:c.top-S.strokeWidth},{x:c.right+S.strokeWidth,y:c.bottom+S.strokeWidth}]),S.bBoxRel={left:h[0].x,top:h[0].y,right:h[1].x,bottom:h[1].y,width:h[1].x-h[0].x,height:h[1].y-h[0].y};break;case"circle":(l={left:t.x[0]*(t.x[1]?n.width:1),top:t.y[0]*(t.y[1]?n.height:1),width:t.width[0]*(t.width[1]?n.width:1),height:t.height[0]*(t.height[1]?n.height:1)}).width||l.height||(l.width=l.height=10),l.width||(l.width=l.height),l.height||(l.height=l.width),l.right=l.left+l.width,l.bottom=l.top+l.height,p=l.left+l.width/2,r=l.top+l.height/2,e=S.strokeWidth/2,s=l.width/2,u=l.height/2,c=s*Math.SQRT2+e,h=u*Math.SQRT2+e,S.pathListRel=[[(e=[{x:p-c,y:r},{x:p,y:r-h},{x:p+c,y:r},{x:p,y:r+h}])[0],{x:e[0].x,y:e[0].y-(p=h*te)},{x:e[1].x-(r=c*te),y:e[1].y},e[1]],[e[1],{x:e[1].x+r,y:e[1].y},{x:e[2].x,y:e[2].y-p},e[2]],[e[2],{x:e[2].x,y:e[2].y+p},{x:e[3].x+r,y:e[3].y},e[3]],[e[3],{x:e[3].x-r,y:e[3].y},{x:e[0].x,y:e[0].y+p},e[0]],[]],s=c-s+S.strokeWidth/2,u=h-u+S.strokeWidth/2,e=[{x:l.left-s,y:l.top-u},{x:l.right+s,y:l.bottom+u}],S.bBoxRel={left:e[0].x,top:e[0].y,right:e[1].x,bottom:e[1].y,width:e[1].x-e[0].x,height:e[1].y-e[0].y};break;case"polygon":t.points.forEach(function(e){var t=e.x[0]*(e.x[1]?n.width:1),e=e.y[0]*(e.y[1]?n.height:1);i?(t<i.left&&(i.left=t),t>i.right&&(i.right=t),e<i.top&&(i.top=e),e>i.bottom&&(i.bottom=e)):i={left:t,right:t,top:e,bottom:e},o?S.pathListRel.push([o,{x:t,y:e}]):S.pathListRel=[],o={x:t,y:e}}),S.pathListRel.push([]),e=S.strokeWidth/2,e=[{x:i.left-e,y:i.top-e},{x:i.right+e,y:i.bottom+e}],S.bBoxRel={left:e[0].x,top:e[0].y,right:e[1].x,bottom:e[1].y,width:e[1].x-e[0].x,height:e[1].y-e[0].y}}v.pathListRel=v.bBoxRel=!0}return(v.pathListRel||v.elementLeft||v.elementTop)&&(S.pathData=Be(S.pathListRel,function(e){e.x+=n.left,e.y+=n.top})),Xe(t,g,"strokeWidth",a=S.strokeWidth)&&(t.path.style.strokeWidth=a+"px"),Fe(a=S.pathData,g.pathData)&&(t.path.setPathData(a),g.pathData=a,v.pathData=!0),t.dash&&(!v.pathData&&(!v.strokeWidth||t.dashLen&&t.dashGap)||(S.dashLen=t.dashLen||2*S.strokeWidth,S.dashGap=t.dashGap||S.strokeWidth),v.dash=Xe(t,g,"dashLen",S.dashLen)||v.dash,v.dash=Xe(t,g,"dashGap",S.dashGap)||v.dash,v.dash&&(t.path.style.strokeDasharray=g.dashLen+","+g.dashGap)),d=S.viewBoxBBox,f=g.viewBoxBBox,y=t.svg.viewBox.baseVal,m=t.svg.style,d.x=S.bBoxRel.left+n.left,d.y=S.bBoxRel.top+n.top,d.width=S.bBoxRel.width,d.height=S.bBoxRel.height,["x","y","width","height"].forEach(function(e){(a=d[e])!==f[e]&&(y[e]=f[e]=a,m[Q[e]]=a+("x"===e||"y"===e?t.bodyOffset[e]:0)+"px")}),v.strokeWidth||v.pathListRel||v.bBoxRel}},mouseHoverAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Me},{optionName:"showEffectName",type:"string"}],style:{backgroundImage:"url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",backgroundSize:"",backgroundRepeat:"no-repeat",backgroundColor:"#f8f881",cursor:"default"},hoverStyle:{backgroundImage:"none",backgroundColor:"#fadf8f"},padding:{top:1,right:15,bottom:1,left:2},minHeight:15,backgroundPosition:{right:2,top:2},backgroundSize:{width:12,height:12},dirKeys:[["top","Top"],["right","Right"],["bottom","Bottom"],["left","Left"]],init:function(a,i){var n,t,e,o,l,r,s,u,h,p=O.mouseHoverAnchor,c={};if(a.element=O.pointAnchor.checkElement(i.element),s=a.element,!((u=s.ownerDocument)&&(h=u.defaultView)&&h.HTMLElement&&s instanceof h.HTMLElement))throw new Error("`element` must be HTML element");return p.style.backgroundSize=p.backgroundSize.width+"px "+p.backgroundSize.height+"px",["style","hoverStyle"].forEach(function(e){var n=p[e];a[e]=Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}),"inline"===(n=a.element.ownerDocument.defaultView.getComputedStyle(a.element,"")).display?a.style.display="inline-block":"none"===n.display&&(a.style.display="block"),O.mouseHoverAnchor.dirKeys.forEach(function(e){var t=e[0],e="padding"+e[1];parseFloat(n[e])<p.padding[t]&&(a.style[e]=p.padding[t]+"px")}),a.style.display&&(e=a.element.style.display,a.element.style.display=a.style.display),O.mouseHoverAnchor.dirKeys.forEach(function(e){e="padding"+e[1];a.style[e]&&(c[e]=a.element.style[e],a.element.style[e]=a.style[e])}),(s=a.element.getBoundingClientRect()).height<p.minHeight&&(ie?(h=p.minHeight,"content-box"===n.boxSizing?h-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)+parseFloat(n.paddingTop)+parseFloat(n.paddingBottom):"padding-box"===n.boxSizing&&(h-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)),a.style.height=h+"px"):a.style.height=parseFloat(n.height)+(p.minHeight-s.height)+"px"),a.style.backgroundPosition=re?s.width-p.backgroundSize.width-p.backgroundPosition.right+"px "+p.backgroundPosition.top+"px":"right "+p.backgroundPosition.right+"px top "+p.backgroundPosition.top+"px",a.style.display&&(a.element.style.display=e),O.mouseHoverAnchor.dirKeys.forEach(function(e){e="padding"+e[1];a.style[e]&&(a.element.style[e]=c[e])}),["style","hoverStyle"].forEach(function(e){var t=a[e],n=i[e];he(n)&&Object.keys(n).forEach(function(e){"string"==typeof n[e]||pe(n[e])?t[e]=n[e]:null==n[e]&&delete t[e]})}),"function"==typeof i.onSwitch&&(r=i.onSwitch),i.showEffectName&&w[i.showEffectName]&&(a.showEffectName=o=i.showEffectName),l=i.animOptions,a.elmStyle=t=a.element.style,a.mouseenter=function(e){a.hoverStyleSave=p.getStyles(t,Object.keys(a.hoverStyle)),p.setStyles(t,a.hoverStyle),a.boundTargets.forEach(function(e){tt(e.props,!0,o,l)}),r&&r(e)},a.mouseleave=function(e){p.setStyles(t,a.hoverStyleSave),a.boundTargets.forEach(function(e){tt(e.props,!1,o,l)}),r&&r(e)},!0},bind:function(e,t){var n,a,i,o,l;return t.props.svg?O.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName):ze(function(){O.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName)}),e.enabled||(e.styleSave=O.mouseHoverAnchor.getStyles(e.elmStyle,Object.keys(e.style)),O.mouseHoverAnchor.setStyles(e.elmStyle,e.style),e.removeEventListener=(n=e.element,a=e.mouseenter,i=e.mouseleave,"onmouseenter"in n&&"onmouseleave"in n?(n.addEventListener("mouseenter",a,!1),n.addEventListener("mouseleave",i,!1),function(){n.removeEventListener("mouseenter",a,!1),n.removeEventListener("mouseleave",i,!1)}):(console.warn("mouseenter and mouseleave events polyfill is enabled."),n.addEventListener("mouseover",o=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||a.apply(this,arguments)}),n.addEventListener("mouseout",l=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||i.apply(this,arguments)}),function(){n.removeEventListener("mouseover",o,!1),n.removeEventListener("mouseout",l,!1)})),e.enabled=!0),!0},unbind:function(e,t){e.enabled&&e.boundTargets.length<=1&&(e.removeEventListener(),O.mouseHoverAnchor.setStyles(e.elmStyle,e.styleSave),e.enabled=!1),O.mouseHoverAnchor.llShow(t.props,!0,e.showEffectName)},removeOption:function(e,t){O.pointAnchor.removeOption(e,t)},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.mouseHoverAnchor.unbind(t,e)}))},getBBoxNest:function(e,t){return Le(e.element,t.baseWindow)},llShow:function(e,t,n){w[n||e.curStats.show_effect].stop(e,!0,t),e.aplStats.show_on=t},getStyles:function(n,e){return e.reduce(function(e,t){return e[t]=n[t],e},{})},setStyles:function(t,n){Object.keys(n).forEach(function(e){t[e]=n[e]})}},captionLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},x:{},y:{}},textStyleProps:["fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","kerning","letterSpacing","wordSpacing","textDecoration"],init:function(l,t){return"string"==typeof t.text&&(l.text=t.text.trim()),!!l.text&&("string"==typeof t.color&&(l.color=t.color.trim()),l.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",Array.isArray(t.offset)&&pe(t.offset[0])&&pe(t.offset[1])&&(l.offset={x:t.offset[0],y:t.offset[1]}),pe(t.lineOffset)&&(l.lineOffset=t.lineOffset),O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(l[e]=t[e])}),l.updateColor=function(e){O.captionLabel.updateColor(l,e)},l.updateSocketXY=function(e){var t,n=l.curStats,a=l.aplStats,i=e.curStats,o=i.position_socketXYSE[l.socketIndex];null!=o.x&&(l.offset?(n.x=o.x+l.offset.x,n.y=o.y+l.offset.y):(t=l.height/2,e=Math.max(i.attach_plugSideLenSE[l.socketIndex]||0,i.line_strokeWidth/2),i=i.position_socketXYSE[l.socketIndex?0:1],o.socketId===A||o.socketId===k?(n.x=o.socketId===A?o.x-t-l.width:o.x+t,n.y=i.y<o.y?o.y+e+t:o.y-e-t-l.height):(n.x=i.x<o.x?o.x+e+t:o.x-e-t-l.width,n.y=o.socketId===b?o.y-t-l.height:o.y+t)),Xe(l,a,"x",t=n.x)&&(l.elmPosition.x.baseVal.getItem(0).value=t),Xe(l,a,"y",t=n.y)&&(l.elmPosition.y.baseVal.getItem(0).value=t+l.height))},l.updatePath=function(e){var t=l.curStats,n=l.aplStats,e=e.pathList.animVal||e.pathList.baseVal;e&&(e=O.captionLabel.getMidPoint(e,l.lineOffset),t.x=e.x-l.width/2,t.y=e.y-l.height/2,Xe(l,n,"x",e=t.x)&&(l.elmPosition.x.baseVal.getItem(0).value=e),Xe(l,n,"y",e=t.y)&&(l.elmPosition.y.baseVal.getItem(0).value=e+l.height))},l.updateShow=function(e){O.captionLabel.updateShow(l,e)},re&&(l.adjustEdge=function(e,t){var n=l.curStats;null!=n.x&&O.captionLabel.adjustEdge(t,{x:n.x,y:n.y,width:l.width,height:l.height},l.strokeWidth/2)}),!0)},updateColor:function(e,t){var n=e.curStats,a=e.aplStats,t=t.curStats;n.color=t=e.color||t.line_color,Xe(e,a,"color",t)&&(e.styleFill.fill=t)},updateShow:function(e,t){t=!0===t.isShown;t!==e.isShown&&(e.styleShow.visibility=t?"":"hidden",e.isShown=t)},adjustEdge:function(e,t,n){n={x1:t.x-n,y1:t.y-n,x2:t.x+t.width+n,y2:t.y+t.height+n};n.x1<e.x1&&(e.x1=n.x1),n.y1<e.y1&&(e.y1=n.y1),n.x2>e.x2&&(e.x2=n.x2),n.y2>e.y2&&(e.y2=n.y2)},newText:function(e,t,n,a,i){var o,l,r=t.createElementNS(ae,"text");return r.textContent=e,[r.x,r.y].forEach(function(e){var t=n.createSVGLength();t.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),e.baseVal.initialize(t)}),"boolean"!=typeof h&&(h="paintOrder"in r.style),i&&!h?(o=t.createElementNS(ae,"defs"),r.id=a,o.appendChild(r),(l=(e=t.createElementNS(ae,"g")).appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+a,(t=e.appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+a,(l=l.style).strokeLinejoin="round",{elmPosition:r,styleText:r.style,styleFill:t.style,styleStroke:l,styleShow:e.style,elmsAppend:[o,e]}):(l=r.style,i&&(l.strokeLinejoin="round",l.paintOrder="stroke"),{elmPosition:r,styleText:l,styleFill:l,styleStroke:i?l:null,styleShow:l,elmsAppend:[r]})},getMidPoint:function(e,t){var n,a,i=Re(e),o=i.segsLen,i=i.lenAll,l=-1,r=i/2+(t||0);if(r<=0)return 2===(n=e[0]).length?Ve(n[0],n[1],0):Ne(n[0],n[1],n[2],n[3],0);if(i<=r)return 2===(n=e[e.length-1]).length?Ve(n[0],n[1],1):Ne(n[0],n[1],n[2],n[3],1);for(a=[];r>o[++l];)a.push(e[l]),r-=o[l];return 2===(n=e[l]).length?Ve(n[0],n[1],r/o[l]):Ne(n[0],n[1],n[2],n[3],We(n[0],n[1],n[2],n[3],r))},initSvg:function(t,n){var e,a,i=O.captionLabel.newText(t.text,n.baseWindow.document,n.svg,C+"-captionLabel-"+t._id,t.outlineColor);["elmPosition","styleFill","styleShow","elmsAppend"].forEach(function(e){t[e]=i[e]}),t.isShown=!1,t.styleShow.visibility="hidden",O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(i.styleText[e]=t[e])}),i.elmsAppend.forEach(function(e){n.svg.appendChild(e)}),e=i.elmPosition.getBBox(),t.width=e.width,t.height=e.height,t.outlineColor&&(a=e.height/9,i.styleStroke.strokeWidth=(a=10<a?10:a<2?2:a)+"px",i.styleStroke.stroke=t.outlineColor),t.strokeWidth=a||0,Ye(t.aplStats,O.captionLabel.stats),t.updateColor(n),t.refSocketXY?t.updateSocketXY(n):t.updatePath(n),re&&$e(n,{}),t.updateShow(n)},bind:function(e,t){var n=t.props;return e.color||Ge(n,"cur_line_color",e.updateColor),(e.refSocketXY="startLabel"===t.optionName||"endLabel"===t.optionName)?(e.socketIndex="startLabel"===t.optionName?0:1,Ge(n,"apl_position",e.updateSocketXY),e.offset||(Ge(n,"cur_attach_plugSideLenSE",e.updateSocketXY),Ge(n,"cur_line_strokeWidth",e.updateSocketXY))):Ge(n,"apl_path",e.updatePath),Ge(n,"svgShow",e.updateShow),re&&Ge(n,"new_edge4viewBox",e.adjustEdge),O.captionLabel.initSvg(e,n),!0},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){n.svg.removeChild(e)}),e.elmPosition=e.styleFill=e.styleShow=e.elmsAppend=null),Ye(e.curStats,O.captionLabel.stats),Ye(e.aplStats,O.captionLabel.stats),e.color||De(n,"cur_line_color",e.updateColor),e.refSocketXY?(De(n,"apl_position",e.updateSocketXY),e.offset||(De(n,"cur_attach_plugSideLenSE",e.updateSocketXY),De(n,"cur_line_strokeWidth",e.updateSocketXY))):De(n,"apl_path",e.updatePath),De(n,"svgShow",e.updateShow),re&&(De(n,"new_edge4viewBox",e.adjustEdge),$e(n,{}))},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",it(n,a)},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.captionLabel.unbind(t,e)}))}},pathLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},startOffset:{},pathData:{}},init:function(l,t){return"string"==typeof t.text&&(l.text=t.text.trim()),!!l.text&&("string"==typeof t.color&&(l.color=t.color.trim()),l.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",pe(t.lineOffset)&&(l.lineOffset=t.lineOffset),O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(l[e]=t[e])}),l.updateColor=function(e){O.captionLabel.updateColor(l,e)},l.updatePath=function(e){var t=l.curStats,n=l.aplStats,a=e.curStats,i=e.pathList.animVal||e.pathList.baseVal;i&&(t.pathData=a=O.pathLabel.getOffsetPathData(i,a.line_strokeWidth/2+l.strokeWidth/2+l.height/4,1.25*l.height),Fe(a,n.pathData)&&(l.elmPath.setPathData(a),n.pathData=a,l.bBox=l.elmPosition.getBBox(),l.updateStartOffset(e)))},l.updateStartOffset=function(e){var i,t,n=l.curStats,a=l.aplStats,o=e.curStats;n.pathData&&(2===l.semIndex&&!l.lineOffset||(t=n.pathData.reduce(function(e,t){var n,a=t.values;switch(t.type){case"M":i={x:a[0],y:a[1]};break;case"L":n={x:a[0],y:a[1]},i&&(e+=Ae(i,n)),i=n;break;case"C":n={x:a[4],y:a[5]},i&&(e+=Te(i,{x:a[0],y:a[1]},{x:a[2],y:a[3]},n)),i=n}return e},0),e=0===l.semIndex?0:1===l.semIndex?t:t/2,2!==l.semIndex&&(o=Math.max(o.attach_plugBackLenSE[l.semIndex]||0,o.line_strokeWidth/2)+l.strokeWidth/2+l.height/4,e=(e+=0===l.semIndex?o:-o)<0?0:t<e?t:e),l.lineOffset&&(e=(e+=l.lineOffset)<0?0:t<e?t:e),n.startOffset=e,Xe(l,a,"startOffset",e)&&(l.elmOffset.startOffset.baseVal.value=e)))},l.updateShow=function(e){O.captionLabel.updateShow(l,e)},re&&(l.adjustEdge=function(e,t){l.bBox&&O.captionLabel.adjustEdge(t,l.bBox,l.strokeWidth/2)}),!0)},getOffsetPathData:function(e,c,n){var d,a,f=[];function y(e,t){return Math.abs(e.x-t.x)<3&&Math.abs(e.y-t.y)<3}return e.forEach(function(e){var t,n,a,i,o,l,r,s,u,h,p;2===e.length?(s=e[0],u=e[1],h=c,p=Math.atan2(s.y-u.y,u.x-s.x)+.5*Math.PI,t=[{x:s.x+Math.cos(p)*h,y:s.y+Math.sin(p)*h*-1},{x:u.x+Math.cos(p)*h,y:u.y+Math.sin(p)*h*-1}],d?(a=d.points,0<=(r=Math.atan2(a[1].y-a[0].y,a[0].x-a[1].x)-Math.atan2(e[0].y-e[1].y,e[1].x-e[0].x))&&r<=Math.PI?n={type:"line",points:t,inside:!0}:(o=Pe(a[0],a[1],c),i=Pe(t[1],t[0],c),l=a[0],s=t[1],p=(u=o).x-l.x,h=u.y-l.y,r=s.x-i.x,u=s.y-i.y,s=(-h*(l.x-i.x)+p*(l.y-i.y))/(-r*h+p*u),u=(r*(l.y-i.y)-u*(l.x-i.x))/(-r*h+p*u),n=(h=0<=s&&s<=1&&0<=u&&u<=1?{x:l.x+u*p,y:l.y+u*h}:null)?{type:"line",points:[a[1]=h,t[1]]}:(a[1]=y(i,o)?i:o,{type:"line",points:[i,t[1]]}),d.len=Ae(a[0],a[1]))):n={type:"line",points:t},n.len=Ae(n.points[0],n.points[1]),f.push(d=n)):(f.push({type:"cubic",points:function(e,t,n,a,i,o){for(var l,r,s=Te(e,t,n,a)/o,u=1/(o<i?i/o*s:s),h=[],p=0;r=(90-(l=Ne(e,t,n,a,p)).angle)*(Math.PI/180),h.push({x:l.x+Math.cos(r)*i,y:l.y+Math.sin(r)*i*-1}),!(1<=p);)1<(p+=u)&&(p=1);return h}(e[0],e[1],e[2],e[3],c,16)}),d=null)}),d=null,f.forEach(function(e){var t;d="line"===e.type?(e.inside&&(d.len>c?((t=d.points)[1]=Pe(t[0],t[1],-c),d.len=Ae(t[0],t[1])):(d.points=null,d.len=0),e.len>c+n?((t=e.points)[0]=Pe(t[1],t[0],-(c+n)),e.len=Ae(t[0],t[1])):(e.points=null,e.len=0)),e):null}),f.reduce(function(t,e){var n=e.points;return n&&(a&&y(n[0],a)||t.push({type:"M",values:[n[0].x,n[0].y]}),"line"===e.type?t.push({type:"L",values:[n[1].x,n[1].y]}):(n.shift(),n.forEach(function(e){t.push({type:"L",values:[e.x,e.y]})})),a=n[n.length-1]),t},[])},newText:function(e,t,n,a){var i,o,l,r,s=t.createElementNS(ae,"defs"),u=s.appendChild(t.createElementNS(ae,"path"));return u.id=i=n+"-path",(l=(o=t.createElementNS(ae,"text")).appendChild(t.createElementNS(ae,"textPath"))).href.baseVal="#"+i,l.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),l.textContent=e,"boolean"!=typeof h&&(h="paintOrder"in o.style),a&&!h?(o.id=e=n+"-text",s.appendChild(o),(r=(n=t.createElementNS(ae,"g")).appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+e,(t=n.appendChild(t.createElementNS(ae,"use"))).href.baseVal="#"+e,(r=r.style).strokeLinejoin="round",{elmPosition:o,elmPath:u,elmOffset:l,styleText:o.style,styleFill:t.style,styleStroke:r,styleShow:n.style,elmsAppend:[s,n]}):(r=o.style,a&&(r.strokeLinejoin="round",r.paintOrder="stroke"),{elmPosition:o,elmPath:u,elmOffset:l,styleText:r,styleFill:r,styleStroke:a?r:null,styleShow:r,elmsAppend:[s,o]})},initSvg:function(t,n){var e,a,i,o=O.pathLabel.newText(t.text,n.baseWindow.document,C+"-pathLabel-"+t._id,t.outlineColor);["elmPosition","elmPath","elmOffset","styleFill","styleShow","elmsAppend"].forEach(function(e){t[e]=o[e]}),t.isShown=!1,t.styleShow.visibility="hidden",O.captionLabel.textStyleProps.forEach(function(e){null!=t[e]&&(o.styleText[e]=t[e])}),o.elmsAppend.forEach(function(e){n.svg.appendChild(e)}),o.elmPath.setPathData([{type:"M",values:[0,100]},{type:"h",values:[100]}]),le&&(i=o.elmOffset.href.baseVal,o.elmOffset.href.baseVal=""),e=o.elmPosition.getBBox(),le&&(o.elmOffset.href.baseVal=i),o.styleText.textAnchor=["start","end","middle"][t.semIndex],2!==t.semIndex||t.lineOffset||o.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,50),t.height=e.height,t.outlineColor&&(a=e.height/9,o.styleStroke.strokeWidth=(a=10<a?10:a<2?2:a)+"px",o.styleStroke.stroke=t.outlineColor),t.strokeWidth=a||0,Ye(t.aplStats,O.pathLabel.stats),t.updateColor(n),t.updatePath(n),t.updateStartOffset(n),re&&$e(n,{}),t.updateShow(n)},bind:function(e,t){var n=t.props;return e.color||Ge(n,"cur_line_color",e.updateColor),Ge(n,"cur_line_strokeWidth",e.updatePath),Ge(n,"apl_path",e.updatePath),e.semIndex="startLabel"===t.optionName?0:"endLabel"===t.optionName?1:2,2===e.semIndex&&!e.lineOffset||Ge(n,"cur_attach_plugBackLenSE",e.updateStartOffset),Ge(n,"svgShow",e.updateShow),re&&Ge(n,"new_edge4viewBox",e.adjustEdge),O.pathLabel.initSvg(e,n),!0},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){n.svg.removeChild(e)}),e.elmPosition=e.elmPath=e.elmOffset=e.styleFill=e.styleShow=e.elmsAppend=null),Ye(e.curStats,O.pathLabel.stats),Ye(e.aplStats,O.pathLabel.stats),e.color||De(n,"cur_line_color",e.updateColor),De(n,"cur_line_strokeWidth",e.updatePath),De(n,"apl_path",e.updatePath),2===e.semIndex&&!e.lineOffset||De(n,"cur_attach_plugBackLenSE",e.updateStartOffset),De(n,"svgShow",e.updateShow),re&&(De(n,"new_edge4viewBox",e.adjustEdge),$e(n,{}))},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",it(n,a)},remove:function(t){t.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),t.boundTargets.forEach(function(e){O.pathLabel.unbind(t,e)}))}}},Object.keys(O).forEach(function(e){ot[e]=function(){return new M(O[e],Array.prototype.slice.call(arguments))}}),ot.S=S,ot.Se=Se,ot.$e=$e,ot}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaderLine);


/***/ }),

/***/ "./node_modules/linkerline/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/linkerline/src/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkerLine)
/* harmony export */ });
/* harmony import */ var _LeaderLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaderLine */ "./node_modules/linkerline/src/LeaderLine.js");
/* harmony import */ var _DefinePlug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefinePlug */ "./node_modules/linkerline/src/DefinePlug.js");




class LinkerLine extends _LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"] { 
    #element;
    constructor(props){
        props.hide=props.hidden;
        super(props);
        const {id}=this;
        statics.linemap[id]=this;
        this.#element=_LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].Se[id].svg;
        const {parent=this.end.parentNode}=props;
        if(parent instanceof HTMLElement){
            if(getComputedStyle(parent).position==="static"){
                parent.style.position="relative";
            }
            parent.appendChild(this.element);
            this.position();
            (0,_DefinePlug__WEBPACK_IMPORTED_MODULE_1__.setLinePlugStyle)(this);
        }
    }

    set dash(value){
        toLeaderLineDash(value);
        super.dash=value;
    }

    position(){
        super.position();
        const {element}=this,parent=element.parentNode;
        const {left,top}=parent.getBoundingClientRect();
        element.style.transform=`translate(${parent.scrollLeft-left}px,${parent.scrollTop-top}px)`;
    }

    show(effectName,options){
        toLeaderLineAnimationOptions(options);
        super.show(effectName,options);
        this.position();
    }

    hide(effectName,options){
        toLeaderLineAnimationOptions(options);
        super.hide(effectName,options);
    }

    remove(){
        delete statics.linemap[this.id];
        document.body.appendChild(this.element);
        super.remove();
    }

    setOptions(options){
        toLeaderLineDash(options.dash);
        super.setOptions(options);
    }

    get element(){return this.#element};

    get id(){return this._id};

    get start(){return super.start};
    get end(){return super.end};

    get color(){return super.color};
    get size(){return super.size};

    static definePlug(options){
        (0,_DefinePlug__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
    }

    static positionAll(){
        const {linemap}=statics;
        for(const lineId in linemap){
            const line=linemap[lineId];
            line.start.isConnected&&line.end.isConnected&&line.position();
        }
    }

    static PointAnchor(element,options){
        return _LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].pointAnchor(element,options);
    }

    static AreaAnchor(element,options){
        return _LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].areaAnchor(element,options);
    }

    static MouseHoverAnchor(element,options){
        if(options){
            const {onToggle}=options;
            if(onToggle){options.onSwitch=onToggle};
            options.animOptions=toLeaderLineAnimationOptions(options.animation);
        }
        return _LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].mouseHoverAnchor(element,options);
    }

    static Label(text,options){
        const {on="path"}=options||{};
        if(options){
            const {offset}=options;
            if(typeof(offset)==="number"){
                options.offset=[offset,offset];
            }
            if(!options.outlineColor){options.outlineColor="transparent"};
        }
        const LeaderLineEntity=_LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"][on==="path"?"pathLabel":"captionLabel"];
        return LeaderLineEntity(text,options);
        
    }

    static get plugs(){return Object.keys(_LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].plugs)};

    static get names(){return Object.keys(_LeaderLine__WEBPACK_IMPORTED_MODULE_0__["default"].names)};
}

const statics={
    linemap:{},
}

window.addEventListener("resize",()=>{
    requestAnimationFrame(LinkerLine.positionAll);
},false);

const toLeaderLineDash=(dash)=>{
    if(dash&&(typeof(dash)==="object")){
        toLeaderLineAnimationOptions(dash.animation);
        dash.len=dash.length;
        delete dash.length;
    }
}

const toLeaderLineAnimationOptions=(options)=>{
    if(options&&(typeof(options)==="object")){
        options.timing=options.easing;
        delete options.easing;
    };
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLGlFQUFlO0VBQ1hBLElBQUksRUFBRSxhQUFhO0VBQ25CQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0VBQzlCQyxLQUFLLEVBQUU7SUFDSEMsV0FBVyxFQUFFQyxNQUFNO0lBQ25CQyxPQUFPLEVBQUVDLE1BQU07SUFDZkMsWUFBWSxFQUFFSCxNQUFNO0lBQ3BCSSxPQUFPLEVBQUVDLE1BQU07SUFDZkMsT0FBTyxFQUFFRDtFQUNiLENBQUM7RUFDREUsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLEtBQUssRUFBRSxFQUFFO01BQ1RDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNQO0VBQ0osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSFYsT0FBTyxXQUFBQSxRQUFDQSxRQUFPLEVBQUU7TUFDYixJQUFJQSxRQUFPLEVBQUU7UUFDVCxJQUFJLENBQUNXLFlBQVksQ0FBQztRQUNsQixJQUFJLENBQUNILENBQUEsR0FBSSxJQUFJLENBQUNMLE9BQU07UUFDcEIsSUFBSSxDQUFDTSxDQUFBLEdBQUksSUFBSSxDQUFDSixPQUFNO01BQ3hCO0lBQ0o7RUFDSixDQUFDO0VBQ0RPLFFBQVEsRUFBRTtJQUNOQyxXQUFXLFdBQUFBLFlBQUEsRUFBRztNQUNWLE9BQU87UUFDSEMsSUFBSSxLQUFBQyxNQUFBLENBQUssSUFBSSxDQUFDUCxDQUFDLE9BQUk7UUFDbkJRLEdBQUcsS0FBQUQsTUFBQSxDQUFLLElBQUksQ0FBQ04sQ0FBQztNQUNsQjtJQUNKO0VBQ0osQ0FBQztFQUNEUSxPQUFPLEVBQUU7SUFDTEMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7TUFDSixJQUFJLENBQUNYLEtBQUksR0FBSSxFQUFDO01BQ2QsSUFBSSxDQUFDWSxLQUFLLENBQUMsT0FBTztJQUN0QixDQUFD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QUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBLDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNB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QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEdBQThHLElBQUkseUJBQXlCO0FBQzNJLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx5RkFBeUY7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNB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QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXLElBQUk7QUFDZixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFD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QUFFcUM7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsMkVBQU0sYUFBYSw2RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnVNOzs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7Ozs7Ozs7O0FDQUs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBSjs7Ozs7Ozs7Ozs7Ozs7O0FDQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlP2QwMWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2YwMmYiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/ZTBlNCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9iOWYxIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT83ZDgyIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/NDU2YyIsIndlYnBhY2s6Ly9rcml0aS8uL25vZGVfbW9kdWxlcy9sZWFkZXItbGluZS12dWUvbGVhZGVyLWxpbmUtdnVlLmpzIiwid2VicGFjazovL2tyaXRpLy4vbm9kZV9tb2R1bGVzL2xpbmtlcmxpbmUvc3JjL0RlZmluZVBsdWcuanMiLCJ3ZWJwYWNrOi8va3JpdGkvLi9ub2RlX21vZHVsZXMvbGlua2VybGluZS9zcmMvTGVhZGVyTGluZS5qcyIsIndlYnBhY2s6Ly9rcml0aS8uL25vZGVfbW9kdWxlcy9saW5rZXJsaW5lL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlPzZkZDgiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2M2ZjciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/NmZmMiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT8yZDlkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT80OWJiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MmYyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlPzU1ZTUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlPzUxNDgiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/MDAzMCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9kMDVhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT82MGFiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MWM4MyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlP2I2ZjciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2Y5M2QiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/MTAxYSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9kZWY5Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT9mM2M3Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MDQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwiaXRlbXMubGVuZ3RoXCIgY2xhc3M9XCJrcml0aS1jb250ZXh0XCIgOnN0eWxlPVwibW9kdWxlU3R5bGVcIiB2LWNsaWNrLW91dHNpZGUtZWxlbWVudD1cImNsb3NlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcml0aS1jb250ZXh0X19pdGVtc1wiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiBjbGFzcz1cImtyaXRpLWNvbnRleHRfX2l0ZW1cIiBAY2xpY2s9XCJjbGlja0l0ZW0oaXRlbSlcIj5cbiAgICAgICAgICAgICAgICA8aSB2LWlmPVwiaXRlbS5pY29uXCIgOmNsYXNzPVwiaXRlbS5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW0udGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkNvbnRleHRNZW51XCIsXG4gICAgZW1pdHM6IFsnY2xvc2UnLCAnY2xpY2tfaXRlbSddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNjaGVtZV9jb2RlOiBTdHJpbmcsXG4gICAgICAgIGNvbnRleHQ6IE9iamVjdCxcbiAgICAgICAgY29udGV4dF90eXBlOiBTdHJpbmcsXG4gICAgICAgIG1vdXNlX3g6IE51bWJlcixcbiAgICAgICAgbW91c2VfeTogTnVtYmVyLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGNvbnRleHQoY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lbnVJdGVtcygpXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tb3VzZV94XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5tb3VzZV95XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1vZHVsZVN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHt0aGlzLnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICB9LFxuICAgICAgICBnZXRNZW51SXRlbXMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Db250ZXh0OmdldENvbnRleHRJdGVtcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmNvbnRleHRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogdGhpcy5jb250ZXh0LnV1aWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLml0ZW1zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2tJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrX2l0ZW0nLCBpdGVtLmNvZGUsIF8uY2xvbmVEZWVwKHRoaXMuY29udGV4dCkpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mva3JpdGkucGFsZXR0ZS5zY3NzJztcbi5rcml0aS1jb250ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjI5O1xuICAgIHBhZGRpbmc6IDE4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJl9faXRlbXMge1xuXG4gICAgfVxuICAgICZfX2l0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmctbGlnaHQ7XG4gICAgICAgIGNvbG9yOiAkZi1kZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luOiA1cHggNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIxcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzkwY2U4MjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibm9kZVwiICA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiPlxuICAgICAgICA8TW9kdWxlIHYtaWY9XCJub2RlLnR5cGUgPT09ICdNb2R1bGUnXCIgOm5vZGU9XCJub2RlXCIgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKlxu0KLRg9GCINC80Ysg0L/QvtC00LrQu9GO0YfQsNC10Lwg0YLQuNC/0YsgUG9pbnQt0L7QsiDQuCDRg9C/0YDQsNCy0LvRj9C10Lwg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LXQvCDQuCDQvtCx0YnQuNC8INC/0L7QstC10LTQtdC90LjQtdC8XG4gKi9cbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uL3R5cGVzL01vZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2R1bGVcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubm9kZS5wb2ludC54fXB4YCxcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMubm9kZS5wb2ludC55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICYuZm9jdXMge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwibm9kZV9tZW51XCIgY2xhc3M9XCJub2RlLW1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCi0YPRgiDQt9Cw0LPQvtC70L7QstC+0Log0LzQvtC00YPQu9GPXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2Nsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmkteC1zcXVhcmUtZmlsbFwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIG5vZGVfbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51X19pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7YWN0aXZlOml0ZW0ubWV0aG9kID09PSBhY3RpdmVfbWV0aG9kfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0Q29udGVudChpdGVtLm1ldGhvZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRml0dGVyIHYtaWY9XCJkYXRhICE9PSBudWxsXCIgOnNjaGVtZT1cImRhdGEuc2NoZW1lXCIgdi1tb2RlbD1cImRhdGEudmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoXywgbmFtZSkgaW4gJHNsb3RzXCIgdi1zbG90OltuYW1lXT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cIm5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaXR0ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xQYW5lbCA6YnV0dG9ucz1cImJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4vRHdhcmYvZm9ybXMvQ29udHJvbFBhbmVsXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlTW9kYWxcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIENvbnRyb2xQYW5lbFxuICAgIH0sXG4gICAgZW1pdHM6IFsnY2xvc2UnLCAndXBkYXRlJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0LFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGVfbWVudTogbnVsbCxcbiAgICAgICAgICAgIGFjdGl2ZV9tZXRob2Q6ICdzdHlsZScsXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC40YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdiaSBiaS1jbG91ZC11cGxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgbm9kZShub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVfbWVudSA9IG51bGxcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnbWVudScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGU6J25vZGVfbWVudScsXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmFjdGl2ZV9tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQp9GC0LXQvdC40LUg0LjQtyDQvdC+0LTQsFxuICAgICAgICBnZXREYXRhKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzLnZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMudmFyaWFibGUgPSAnZGF0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Z2V0RGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLm5vZGUudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnRyYW5zZm9ybU1ldGhvZCgnZ2V0JywgcHJvcHMubWV0aG9kKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BzLnZhcmlhYmxlXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnRoZW4oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g0JfQsNC/0LjRgdGMINCyINC90L7QtFxuICAgICAgICBzZXREYXRhKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpzZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMubm9kZS51dWlkLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMudHJhbnNmb3JtTWV0aG9kKCdzZXQnLCB0aGlzLmFjdGl2ZV9tZXRob2QpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHRoaXMuZGF0YS52YWx1ZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UpIC8vINCf0L7RgdGL0LvQsNC10YLRgdGPINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdGF0LXQvNGLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb250ZW50KG1ldGhvZCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbWV0aG9kID0gbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5hY3RpdmVfbWV0aG9kLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9GA0LXQvtCx0YDQsNC30YPQtdGCIFwicHJlZml4LCBtZXRob2RcIiDQsiBcInByZWZpeE1ldGhvZFwiXG4gICAgICAgIHRyYW5zZm9ybU1ldGhvZChwcmVmaXgsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIG1ldGhvZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1ldGhvZC5zbGljZSgxKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICZfX2JvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG5cbiAgICB9XG5cbiAgICAmX19jbG9zZSB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjRmNGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICZfX21lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICM5ZDlkOWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcyODRkNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZFwiXG4gICAgIGNsYXNzPVwid29ya3NwYWNlXCJcbiAgICAgOnN0eWxlPVwiYHdpZHRoOiR7d29ya3NwYWNlX3dpZHRofXB4O2hlaWdodDoke3dvcmtzcGFjZV9oZWlnaHR9cHhgXCJcbiAgICAgQG1vdXNlZG93bi5jdHJsLnNlbGY9XCJtb3ZlUGxhdG9cIlxuICAgICBAbW91c2V1cC5zZWxmPVwiZHJvcFBsYXRvXCJcbiAgICAgQG1vdXNlbW92ZT1cIm1vdXNlbW92ZVwiXG4gICAgIEBkYmxjbGljay5zZWxmPVwid29ya3NwYWNlQ29udGV4dE1lbnVcIlxuPlxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc3BhY2VfX3ByZWxvYWRlclwiPjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIndvcmtzcGFjZV9fcGxhdG9cIiByZWY9XCJwbGF0b1wiIDpzdHlsZT1cImBtYXJnaW4tbGVmdDokeyBwbGF0b194IH1weDttYXJnaW4tdG9wOiR7IHBsYXRvX3kgfXB4YFwiPlxuICAgICAgICA8Tm9kZSB2LWZvcj1cIm5vZGUgaW4gbm9kZXNcIiA6bm9kZT1cIm5vZGVcIlxuICAgICAgICAgICAgIDpyZWY9XCJub2RlLnV1aWRcIiA6aWQ9XCJub2RlLnV1aWRcIiA6Y2xhc3M9XCJ7IGZvY3VzOm5vZGUgPT09IGFjdGl2ZV9ub2RlIH1cIlxuICAgICAgICAgICAgIEBtb3VzZWRvd249XCJub2RlSG9sZChub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICBAbW91c2V1cD1cIm5vZGVEcm9wXCJcbiAgICAgICAgICAgICBAY2xpY2suY3RybD1cImNyZWF0ZUxpbmsobm9kZSlcIlxuICAgICAgICAgICAgIEBjb250ZXh0bWVudS5wcmV2ZW50PVwib3BlbkNvbnRleHRNZW51KG5vZGUpXCJcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8Tm9kZU1vZGFsIDpub2RlPVwibm9kZVwiIEBjbG9zZT1cIm5vZGUgPSBudWxsXCIgQHVwZGF0ZT1cImdldFNjaGVtZVwiLz5cbiAgICA8Q29udGV4dE1lbnVcbiAgICAgICAgOmNvbnRleHQ9XCJjb250ZXh0X21lbnVfb2JqZWN0XCJcbiAgICAgICAgY29udGV4dF90eXBlPVwibm9kZVwiXG4gICAgICAgIDpzY2hlbWVfY29kZT1cImFjdGl2ZV9zY2hlbWVfY29kZVwiXG4gICAgICAgIDptb3VzZV94PVwibW91c2VfeFwiXG4gICAgICAgIDptb3VzZV95PVwibW91c2VfeVwiXG4gICAgICAgIEBjbG9zZT1cImNsb3NlQ29udGV4dE1lbnVcIlxuICAgICAgICBAY2xpY2tfaXRlbT1cImNsaWNrQ29udGV4dE1lbnVJdGVtXCJcbiAgICAvPlxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTGVhZGVyTGluZSBmcm9tIFwibGVhZGVyLWxpbmUtdnVlXCIgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Fuc2VraS9sZWFkZXItbGluZVxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IE5vZGVNb2RhbCBmcm9tIFwiLi9Ob2RlTW9kYWxcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuaW1wb3J0IExpbmtlckxpbmUgZnJvbSAnbGlua2VybGluZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiV29ya3NwYWNlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBOb2RlLCAvLyDQmtC+0LzQv9C+0L3QtdC90YIg0YDQtdCw0LvQuNC30YPRjtGJ0LjQuSDQvdC+0LTRg1xuICAgICAgICBOb2RlTW9kYWwsIC8vINCa0L7QvNC/0L7QvdC10L3RgiDRgNCw0LHQvtGH0LXQtSDQvtC60L3QviDQvdC+0LTQsFxuICAgICAgICBDb250ZXh0TWVudSAvLyDQmtC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgfSxcbiAgICBwcm9wczoge1xuXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlX3NjaGVtZV9jb2RlOiAnY2FsY3VsYXRvcicsIC8vINCY0LzRjyDQsNC60YLQuNCy0L3QvtC5INGC0LXQvNGLXG4gICAgICAgICAgICBzY2hlbWU6IHt9LCAvLyDQkNC60YLQuNCy0L3QsNGPINGB0YXQtdC80LBcbiAgICAgICAgICAgIGNvbnRleHRfbWVudV9vYmplY3Q6IG51bGwsIC8vINCe0LHRitC10LrRgiDQutC+0L3RgtC10LrRgdGC0L3QvtCz0L4g0LzQtdC90Y5cblxuICAgICAgICAgICAgbW91c2VfeDogMCxcbiAgICAgICAgICAgIG1vdXNlX3k6IDAsXG4gICAgICAgICAgICB3b3Jrc3BhY2Vfd2lkdGg6IG51bGwsIC8vINCo0LjRgNC40L3QsCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICAgICAgd29ya3NwYWNlX2hlaWdodDogbnVsbCwgLy8g0JLRi9GB0L7RgtCwINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgICAgICBob2xkX3hfZmFjdG9yOiBudWxsLCAvLyDQn9C+0L/RgNCw0LLQutCwINC+0LHRitC10LrRgtCwINC/0L4geFxuICAgICAgICAgICAgaG9sZF95X2ZhY3RvcjogbnVsbCwgLy8g0J/QvtC/0YDQsNCy0LrQsCDQvtCx0YrQtdC60YLQsCDQv9C+IHlcbiAgICAgICAgICAgIHdvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQ6IGZhbHNlLCAvLyDQoNCw0LfQvNC10YAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0Lgg0L7Qv9GA0LXQtNC10LvRkdC9XG4gICAgICAgICAgICBwbGF0b194OiAwLCAvLyDQodC80LXRidC10L3QuNC1INC60LDRgNGC0Ysg0L/QviDQvtGB0Lgg0KVcbiAgICAgICAgICAgIHBsYXRvX3k6IDAsIC8vINCh0LzQtdGJ0LXQvdC40LUg0LrQsNGA0YLRiyDQv9C+INC+0YHQuCBZXG4gICAgICAgICAgICBub2RlOiBudWxsLCAvLyDQlNCw0L3QvdGL0LUg0L3QvtC00LBcbiAgICAgICAgICAgIGFjdGl2ZV9ub2RlOiBudWxsLCAvLyDQktGL0LTQtdC70LXQvdC90YvQuSDQvdC+0LRcbiAgICAgICAgICAgIGxhc3RfaG9sZF94OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFhcbiAgICAgICAgICAgIGxhc3RfaG9sZF95OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFlcblxuICAgICAgICAgICAgbGluZXM6IFtdLCAvLyDQm9C40L3QuNC4IC0g0YHQstGP0LfQuFxuICAgICAgICAgICAgbGluZXNfb2JqZWN0czogW10sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG5vZGVzKCkgeyAvLyDQndC+0LTRiyDRgdGF0LXQvNGLXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWU/Lm5vZGVzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSgpIC8vINCj0YHRgtCw0L3QvtCy0LjRgtGMINGA0LDQt9C80LXRgNGLINC+0LrQvdCwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUpXG4gICAgICAgIHRoaXMuZ2V0U2NoZW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlua3MoKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgYmVmb3JlVW5tb3VudCgpIHsgLy8g0J/QtdGA0LXQtCDRgNCw0LfQvNC+0L3RgtC40YDQvtCy0LDQvdC40LXQvCDRg9C00LDQu9C40YLRjCDRgdC70YPRiNCw0YLQtdC70Ywg0YDQsNC30LzQtdGA0L7QsiDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kZWZpbmVXb3Jrc3BhY2VTaXplKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQntC/0YDQtdC00LXQu9C40YLRjCDRgNCw0LfQvNC10YAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgZGVmaW5lV29ya3NwYWNlU2l6ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50RWxlbWVudCA9IHRoaXMuJGVsLnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICAvLyDQl9Cw0L/QuNGB0YvQstCw0LXQvCDRjdGC0Lgg0LTQsNC90L3Ri9C1INCyINCz0LvQvtCx0LDQu9GM0L3Ri9C1INC/0LXRgNC10LzQtdC90L3Ri9C1IEtyaXRpXG4gICAgICAgICAgICAgICAgS3JpdGkuZ2xvYmFsLndvcmtzcGFjZV93aWR0aCA9IHRoaXMud29ya3NwYWNlX3dpZHRoID0gcGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgIEtyaXRpLmdsb2JhbC53b3Jrc3BhY2VfaGVpZ2h0ID0gdGhpcy53b3Jrc3BhY2VfaGVpZ2h0ID0gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53b3Jrc3BhY2Vfd2lkdGggJiYgdGhpcy53b3Jrc3BhY2VfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0LPRgNGD0LfQuNGC0Ywg0YHRhdC10LzRg1xuICAgICAgICBnZXRTY2hlbWUoZm4pIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLlNjaGVtZTpnZXRTY2hlbWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3NjaGVtZV9jb2RlJzogdGhpcy5hY3RpdmVfc2NoZW1lX2NvZGVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlbWUgPSByZXNwb25zZS5zY2hlbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YfQuNGB0YLQuNGC0Ywg0L3QvtC00Ysg0L7RgiDQu9C40YjQvdC40YUg0LTQsNC90L3Ri9GFXG4gICAgICAgIHNhbml0aXplTm9kZXMoKSB7XG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBfLmNsb25lRGVlcCh0aGlzLnNjaGVtZS5ub2RlcylcbiAgICAgICAgICAgIG5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlLnN0YXRpY1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBub2Rlc1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDQvdC+0LTRi1xuICAgICAgICBzZXRTY2hlbWUoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjaGVtZSA9IF8uY2xvbmVEZWVwKHRoaXMuc2NoZW1lKVxuICAgICAgICAgICAgc2NoZW1lLm5vZGVzID0gdGhpcy5zYW5pdGl6ZU5vZGVzKClcblxuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuU2NoZW1lOnNldFNjaGVtZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWVfY29kZTogdGhpcy5hY3RpdmVfc2NoZW1lX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZV9kYXRhOiBzY2hlbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vZGVzIHNhdmUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JTQstC40LPQsNGC0Ywg0LrQsNGA0YLRg1xuICAgICAgICBtb3ZlUGxhdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRfeF9mYWN0b3IgPSB0aGlzLm1vdXNlX3ggLSB0aGlzLnBsYXRvX3hcbiAgICAgICAgICAgIHRoaXMuaG9sZF95X2ZhY3RvciA9IHRoaXMubW91c2VfeSAtIHRoaXMucGxhdG9feVxuICAgICAgICAgICAgdGhpcy5ob2xkX3BsYXRvID0gdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YHRgtCw0LLQuNGC0Ywg0LrQsNGA0YLRg1xuICAgICAgICBkcm9wUGxhdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRfcGxhdG8gPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRTY2hlbWUoKSAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KTQuNC60YHQuNGA0L7QstCw0YLRjCDQtNCy0LjQttC10L3QuNC1INC80YvRiNC4XG4gICAgICAgIG1vdXNlbW92ZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZV94ID0gZXZlbnQucGFnZVhcbiAgICAgICAgICAgIHRoaXMubW91c2VfeSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICB0aGlzLm1vdmVOb2RlKCkgLy8g0JTQstC40LPQsNGC0Ywg0L7QsdGK0LXQutGCINC10YHQu9C4INC+0L0g0LDQutGC0LjQstC10L1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9C10YDQtdC80LXRidC10L3QuNC1INC90L7QtNCwXG4gICAgICAgIG1vdmVOb2RlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlX25vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlLnBvaW50LnggPSB0aGlzLm1vdXNlX3ggLSB0aGlzLmhvbGRfeF9mYWN0b3JcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlLnBvaW50LnkgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLmhvbGRfeV9mYWN0b3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LTQstC40LPQsNC10YLRgdGPINC60LDRgNGC0LBcbiAgICAgICAgICAgIGlmICh0aGlzLmhvbGRfcGxhdG8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb2s/JylcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRvX3ggPSB0aGlzLm1vdXNlX3ggLSB0aGlzLmhvbGRfeF9mYWN0b3JcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRvX3kgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLmhvbGRfeV9mYWN0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5xdWFudGl6ZU9iamVjdHMoKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDRhdCy0LDRgiDQvdC+0LTQsFxuICAgICAgICBub2RlSG9sZChub2RlLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlSG9sZFBvc2l0aW9uKClcbiAgICAgICAgICAgIG5vZGUuc3RhdGljLmZvY3VzID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gbm9kZS5wb2ludC54XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSBub2RlLnBvaW50LnlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNGE0LjQutGB0LjRgNC+0LLQsNGC0Ywg0L/QvtC30LjRhtC40Y4g0L3QvtC00LBcbiAgICAgICAgc2F2ZUhvbGRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3ggPSB0aGlzLm1vdXNlX3hcbiAgICAgICAgICAgIHRoaXMubGFzdF9ob2xkX3kgPSB0aGlzLm1vdXNlX3lcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40YLRjCDQvdC+0LRcbiAgICAgICAgbm9kZURyb3AoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdGF0aWMuZm9jdXMgPSBmYWxzZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZSA9IG51bGxcblxuICAgICAgICAgICAgLy8g0KHQvtGF0YDQsNC90Y/RgtGMINGC0L7Qu9GM0LrQviDQtdGB0LvQuCDQsdGL0Lsg0YHQtNCy0LjQvdGD0YIg0L7QsdGK0LXQutGCXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0X2hvbGRfeCAhPT0gdGhpcy5tb3VzZV94IHx8IHRoaXMubGFzdF9ob2xkX3kgIT09IHRoaXMubW91c2VfeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NoZW1lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQvNC10L3RjiDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICB3b3Jrc3BhY2VDb250ZXh0TWVudSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQmtC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4JylcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQutC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgICAgIG9wZW5Db250ZXh0TWVudShub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfbWVudV9vYmplY3QgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNC60YDRi9GC0Ywg0LrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjlxuICAgICAgICBjbG9zZUNvbnRleHRNZW51KClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0X21lbnVfb2JqZWN0ID0gbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YLQutGA0YvRgtGMINC60L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y4g0L3QvtC00LBcbiAgICAgICAgY2xpY2tDb250ZXh0TWVudUl0ZW0oY29kZSwgY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvZGUgPT09ICdvcGVuTm9kZVNldHRpbmdzJykge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZSA9IGNvbnRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlID09PSAnY2xvbmVOb2RlJykge1xuICAgICAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Y2xvbmVOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgdGhlbjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHJlc3BvbnNlLm5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucG9pbnQueCArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucG9pbnQueSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1lLm5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNC/0YDQvtGB0LjRgtGMINCz0LXQvdC10YDQsNGG0LjRjiB1dWlkIHRvZG86INCX0LDRh9C10Lw/Pz9cbiAgICAgICAgY3JlYXRlVVVJRChmbikge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpjcmVhdGVVVUlEJyxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZuKHJlc3BvbnNlLnV1aWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGC0L7QsdGA0LDQt9C40YLRjCDRgdGG0LXQv9C60LhcbiAgICAgICAgYWRkTGlua3MoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlbWUubGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExpbmsobGluaylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINGB0YHRi9C70LrRg1xuICAgICAgICBhZGRMaW5rKGxpbmssIHNhdmUpIHtcbiAgICAgICAgICAgIGxldCBwbGF0byA9IHRoaXMuJHJlZnNbJ3BsYXRvJ10gLy8g0J/QvtC70YPRh9C40YLRjCAud29ya3NwYWNlX19wbGF0byBET00g0Y3Qu9C10LzQtdC90YJcbiAgICAgICAgICAgIGxldCBlbGVtZW50X2EgPSB0aGlzLiRyZWZzW2xpbmtbMF1dWzBdLiRlbFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRfYiA9IHRoaXMuJHJlZnNbbGlua1sxXV1bMF0uJGVsXG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHBhcmVudDogcGxhdG8sXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGVsZW1lbnRfYSxcbiAgICAgICAgICAgICAgICBlbmQ6IGVsZW1lbnRfYixcbiAgICAgICAgICAgICAgICBzdGFydFBsdWc6ICdkaXNjJyxcbiAgICAgICAgICAgICAgICBlbmRQbHVnOiAnYXJyb3cxJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGluZSA9IG5ldyBMaW5rZXJMaW5lKG9wdGlvbnMpXG5cbiAgICAgICAgICAgIHRoaXMubGluZXNfb2JqZWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgICAgIG9iamVjdDogbGluZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjb3JyZWN0TGluZXMoKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVzX29iamVjdHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ub2JqZWN0LnBvc2l0aW9uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlTGluaygpe30sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xuLndvcmtzcGFjZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAkYmctZGFyaztcbiAgICBjb2xvcjogJGYtZGFyaztcblxuICAgICZfX3BsYXRvIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYm9hcmRcIj5cbiAgICAgICAgPFdvcmtzcGFjZSAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBXb3Jrc3BhY2UgZnJvbSBcIi4uL2ludGVyZmFjZS9Xb3Jrc3BhY2VcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkJvYXJkXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBXb3Jrc3BhY2VcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYm9hcmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJub2RlXCIgY2xhc3M9XCJtb2R1bGVcIiA6c3R5bGU9XCJzdHlsZV9tb2R1bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZHVsZV9fdGl0bGVcIiA6c3R5bGU9XCJzdHlsZV9tb2R1bGVfdGl0bGVcIj5cbiAgICAgICAgICAgIDxpIDpjbGFzcz1cIm5vZGUuc3RhdGljLmljb25cIj48L2k+XG4gICAgICAgICAgICB7eyBub2RlLnN0YXRpYy5zZXR0aW5ncy5uYW1lIH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk1vZHVsZVwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc3R5bGVfbW9kdWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdGF0aWMuc3R5bGUubW9kdWxlXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlX21vZHVsZV90aXRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuc3RhdGljLnN0eWxlLm1vZHVsZV90aXRsZVxuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubW9kdWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICB9XG59XG5cbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmtyaXRpLWNvbnRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2MDc4NDMxMzcpO1xcbiAgcGFkZGluZzogMThweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ua3JpdGktY29udGV4dF9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcbiAgY29sb3I6ICMyNjU1MWI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDVweCA1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLmtyaXRpLWNvbnRleHRfX2l0ZW0gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5rcml0aS1jb250ZXh0X19pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM5MGNlODI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvc2Nzcy9rcml0aS5wYWxldHRlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBS0k7RUFDSSxtQkNWRztFRFdILGNDVkE7RURXQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhSO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBSVE7RUFDSSxtQkFBQTtBQUZaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mva3JpdGkucGFsZXR0ZS5zY3NzJztcXG4ua3JpdGktY29udGV4dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjI5O1xcbiAgICBwYWRkaW5nOiAxOHB4IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgJl9faXRlbXMge1xcblxcbiAgICB9XFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGJnLWxpZ2h0O1xcbiAgICAgICAgY29sb3I6ICRmLWRlZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIG1hcmdpbjogNXB4IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjFweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzkwY2U4MjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIiRiZy1kYXJrOiAjZThlOGU4O1xcbiRiZy1saWdodDogI2Q5ZDlkOTtcXG4kZi1kZWY6ICMyNjU1MWI7XFxuJGItZGVmOiAjNzJiZDhmO1xcbiRmLWRhcms6ICMxZTI0MWU7XFxuJGNvbG9yLTEwMDogI2RjMjVjYjtcXG4kY29sb3ItMTAwOiAjOWI4ZDhkO1xcbiRjb2xvci0xMDA6ICMxNDRjNjA7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9kZS5mb2N1cyB7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtBQUNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAmLmZvY3VzIHtcXG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjExNzY0NzA1OSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubm9kZS1tb2RhbF9fYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuLm5vZGUtbW9kYWxfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19jbG9zZSBpIHtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19jbG9zZSBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0ZjRmO1xcbn1cXG4ubm9kZS1tb2RhbF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLm5vZGUtbW9kYWxfX21lbnVfX2l0ZW0ge1xcbiAgcGFkZGluZzogMHB4IDExcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzlkOWQ5ZDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuLm5vZGUtbW9kYWxfX21lbnVfX2l0ZW0uYWN0aXZlIHtcXG4gIGNvbG9yOiAjNzI4NGQ2O1xcbn1cXG4ubm9kZS1tb2RhbF9fZm9ybSB7XFxuICBmbGV4OiAxIDAgMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQVNRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQWjtBQVNZO0VBQ0ksY0FBQTtBQVBoQjtBQVlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBVlI7QUFhSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVhaO0FBYVk7RUFDSSxjQUFBO0FBWGhCO0FBZ0JJO0VBQ0ksV0FBQTtBQWRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDljO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgICAmX19ib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcblxcbiAgICB9XFxuXFxuICAgICZfX2Nsb3NlIHtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICAgIGNvbG9yOiAjYTBhMGEwO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0ZjRmO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgJl9fbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG5cXG4gICAgICAgICZfX2l0ZW0ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMXB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogIzlkOWQ5ZDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcblxcbiAgICAgICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Mjg0ZDY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2Zvcm0ge1xcbiAgICAgICAgZmxleDogMSAwIDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndvcmtzcGFjZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcXG4gIGNvbG9yOiAjMWUyNDFlO1xcbn1cXG4ud29ya3NwYWNlX19wbGF0byB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLndvcmtzcGFjZSAua3JpdGktcHJlbG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDU4ODIzNTI5NCk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDEwMDAwMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvc2Nzcy9rcml0aS5wYWxldHRlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxhQUFBO0VBQ0EsbUJDSk07RURLTixjQ0RLO0FEQVQ7QUFHSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FBRlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xcbi53b3Jrc3BhY2Uge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAkYmctZGFyaztcXG4gICAgY29sb3I6ICRmLWRhcms7XFxuXFxuICAgICZfX3BsYXRvIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3NTtcXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XFxuICAgIH1cXG59XFxuXCIsXCIkYmctZGFyazogI2U4ZThlODtcXG4kYmctbGlnaHQ6ICNkOWQ5ZDk7XFxuJGYtZGVmOiAjMjY1NTFiO1xcbiRiLWRlZjogIzcyYmQ4ZjtcXG4kZi1kYXJrOiAjMWUyNDFlO1xcbiRjb2xvci0xMDA6ICNkYzI1Y2I7XFxuJGNvbG9yLTEwMDogIzliOGQ4ZDtcXG4kY29sb3ItMTAwOiAjMTQ0YzYwO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzgwZGI4MDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kdWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kdWxlIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubW9kdWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICB9XFxufVxcblxcbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvKiEgTGVhZGVyTGluZSB2MS4wLjUgKGMpIGFuc2VraSBodHRwczovL2Fuc2VraS5naXRodWIuaW8vbGVhZGVyLWxpbmUvICovXHJcbnZhciBMZWFkZXJMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG4gIHZhciB0ZSwgZywgeSwgUywgXywgbywgdCwgaCwgZiwgcCwgYSwgaSwgbCwgdiA9IFwibGVhZGVyLWxpbmVcIixcclxuICAgIE0gPSAxLFxyXG4gICAgSSA9IDIsXHJcbiAgICBDID0gMyxcclxuICAgIEwgPSA0LFxyXG4gICAgbiA9IHtcclxuICAgICAgdG9wOiBNLFxyXG4gICAgICByaWdodDogSSxcclxuICAgICAgYm90dG9tOiBDLFxyXG4gICAgICBsZWZ0OiBMXHJcbiAgICB9LFxyXG4gICAgQSA9IDEsXHJcbiAgICBWID0gMixcclxuICAgIFAgPSAzLFxyXG4gICAgTiA9IDQsXHJcbiAgICBUID0gNSxcclxuICAgIG0gPSB7XHJcbiAgICAgIHN0cmFpZ2h0OiBBLFxyXG4gICAgICBhcmM6IFYsXHJcbiAgICAgIGZsdWlkOiBQLFxyXG4gICAgICBtYWduZXQ6IE4sXHJcbiAgICAgIGdyaWQ6IFRcclxuICAgIH0sXHJcbiAgICBuZSA9IFwiYmVoaW5kXCIsXHJcbiAgICByID0gdiArIFwiLWRlZnNcIixcclxuICAgIHMgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwibGVhZGVyLWxpbmUtZGVmc1wiPjxzdHlsZT48IVtDREFUQVsubGVhZGVyLWxpbmV7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6dmlzaWJsZSFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZSFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHh9I2xlYWRlci1saW5lLWRlZnN7d2lkdGg6MDtoZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LmxlYWRlci1saW5lLWxpbmUtcGF0aHtmaWxsOm5vbmV9LmxlYWRlci1saW5lLW1hc2stYmctcmVjdHtmaWxsOiNmZmZ9LmxlYWRlci1saW5lLWNhcHMtbWFzay1hbmNob3IsLmxlYWRlci1saW5lLWNhcHMtbWFzay1tYXJrZXItc2hhcGV7ZmlsbDojMDAwfS5sZWFkZXItbGluZS1jYXBzLW1hc2stYW5jaG9ye3N0cm9rZTojMDAwfS5sZWFkZXItbGluZS1jYXBzLW1hc2stbGluZSwubGVhZGVyLWxpbmUtcGx1Z3MtZmFjZXtzdHJva2U6dHJhbnNwYXJlbnR9LmxlYWRlci1saW5lLWxpbmUtbWFzay1zaGFwZXtzdHJva2U6I2ZmZn0ubGVhZGVyLWxpbmUtbGluZS1vdXRsaW5lLW1hc2stc2hhcGV7c3Ryb2tlOiMwMDB9LmxlYWRlci1saW5lLXBsdWctbWFzay1zaGFwZXtmaWxsOiNmZmY7c3Ryb2tlOiMwMDB9LmxlYWRlci1saW5lLXBsdWctb3V0bGluZS1tYXNrLXNoYXBle2ZpbGw6IzAwMDtzdHJva2U6I2ZmZn0ubGVhZGVyLWxpbmUtYXJlYUFuY2hvcntwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzp2aXNpYmxlIWltcG9ydGFudH1dXT48L3N0eWxlPjxkZWZzPjxjaXJjbGUgaWQ9XCJsZWFkZXItbGluZS1kaXNjXCIgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjVcIi8+PHJlY3QgaWQ9XCJsZWFkZXItbGluZS1zcXVhcmVcIiB4PVwiLTVcIiB5PVwiLTVcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIi8+PHBvbHlnb24gaWQ9XCJsZWFkZXItbGluZS1hcnJvdzFcIiBwb2ludHM9XCItOCwtOCA4LDAgLTgsOCAtNSwwXCIvPjxwb2x5Z29uIGlkPVwibGVhZGVyLWxpbmUtYXJyb3cyXCIgcG9pbnRzPVwiLTQsLTggNCwwIC00LDggLTcsNSAtMiwwIC03LC01XCIvPjxwb2x5Z29uIGlkPVwibGVhZGVyLWxpbmUtYXJyb3czXCIgcG9pbnRzPVwiLTQsLTUgOCwwIC00LDVcIi8+PGcgaWQ9XCJsZWFkZXItbGluZS1oYW5kXCI+PHBhdGggc3R5bGU9XCJmaWxsOiAjZmNmY2ZjXCIgZD1cIk05LjE5IDExLjE0aDQuNzVjMS4zOCAwIDIuNDktMS4xMSAyLjQ5LTIuNDkgMC0uNTEtLjE1LS45OC0uNDEtMS4zN2gxLjNjMS4zOCAwIDIuNDktMS4xMSAyLjQ5LTIuNDlzLTEuMTEtMi41My0yLjQ5LTIuNTNoMS4wMmMxLjM4IDAgMi40OS0xLjExIDIuNDktMi40OXMtMS4xMS0yLjQ5LTIuNDktMi40OWgxNC45NmMxLjM3IDAgMi40OS0xLjExIDIuNDktMi40OXMtMS4xMS0yLjQ5LTIuNDktMi40OUgxNi41OEMxNi05Ljg2IDE0LjI4LTExLjE0IDkuNy0xMS4xNGMtNC43OSAwLTYuNTUgMy40Mi03Ljg3IDQuNzNILTIuMTR2MTMuMjNoMy42OEMzLjI5IDkuOTcgNS40NyAxMS4xNCA5LjE5IDExLjE0TDkuMTkgMTEuMTRaXCIvPjxwYXRoIHN0eWxlPVwiZmlsbDogYmxhY2tcIiBkPVwiTTEzLjk1IDEyYzEuODUgMCAzLjM1LTEuNSAzLjM1LTMuMzUgMC0uMTctLjAyLS4zNC0uMDQtLjUxaC4wN2MxLjg1IDAgMy4zNS0xLjUgMy4zNS0zLjM1IDAtLjc5LS4yNy0xLjUxLS43Mi0yLjA4IDEuMDMtLjU3IDEuNzQtMS42NyAxLjc0LTIuOTMgMC0uNTktLjE2LTEuMTUtLjQzLTEuNjNoMTIuMDRjMS44NSAwIDMuMzUtMS41IDMuMzUtMy4zNSAwLTEuODUtMS41LTMuMzUtMy4zNS0zLjM1SDE3LjJDMTYuMjYtMTAuOTMgMTMuOTEtMTIgOS43LTEyIDUuMzYtMTIgMy4yMi05LjQgMS45NC03Ljg0YzAgMC0uMjkuMzMtLjUuNTctLjYzIDAtMy41OCAwLTMuNTggMEMtMi42MS03LjI3LTMtNi44OC0zLTYuNDF2MTMuMjNjMCAuNDcuMzkuODYuODYuODYgMCAwIDIuNDggMCAzLjIgMEMyLjkgMTAuNzMgNS4yOSAxMiA5LjE5IDEyTDEzLjk1IDEyWk05LjE5IDEwLjI4Yy0zLjQ2IDAtNS4zMy0xLjA1LTYuOS0zLjg3LS4xNS0uMjctLjQ0LS40NC0uNzUtLjQ0IDAgMC0xLjgxIDAtMi44MiAwVi01LjU1YzEuMDYgMCAzLjExIDAgMy4xMSAwIC4yNSAwIC40NC0uMDYuNjEtLjI1bC44My0uOTVjMS4yMy0xLjQ5IDIuOTEtMy41MyA2LjQzLTMuNTMgMy40NSAwIDQuOS43NCA1LjU3IDEuNzJoLTQuM2MtLjQ4IDAtLjg2LjM4LS44Ni44NnMuMzkuODYuODYuODZoMjIuMzRjLjkgMCAxLjYzLjczIDEuNjMgMS42MyAwIC45LS43MyAxLjYzLTEuNjMgMS42M0gxNS44M2MtLjQ4IDAtLjg2LjM4LS44Ni44NiAwIC40Ny4zOS44Ni44Ni44NmgyLjUyYy45IDAgMS42My43MyAxLjYzIDEuNjNzLS43MyAxLjYzLTEuNjMgMS42M2gtMy4xMmMtLjQ4IDAtLjg2LjM4LS44Ni44NiAwIC40Ny4zOS44Ni44Ni44NmgyLjExYy44OCAwIDEuNjMuNzYgMS42MyAxLjY3IDAgLjktLjczIDEuNjMtMS42MyAxLjYzaC0zLjJjLS40OCAwLS44Ni4zOS0uODYuODYgMCAuNDcuMzkuODYuODYuODZoMS4zNmMuMDUuMTYuMDkuMzQuMDkuNTEgMCAuOS0uNzMgMS42My0xLjYzIDEuNjNDMTMuOTUgMTAuMjggOS4xOSAxMC4yOCA5LjE5IDEwLjI4WlwiLz48L2c+PGcgaWQ9XCJsZWFkZXItbGluZS1jcm9zc2hhaXJcIj48cGF0aCBkPVwiTTAtNzguOTdjLTQzLjU0IDAtNzguOTcgMzUuNDMtNzguOTcgNzguOTcgMCA0My41NCAzNS40MyA3OC45NyA3OC45NyA3OC45N3M3OC45Ny0zNS40MyA3OC45Ny03OC45N0M3OC45Ny00My41NCA0My41NS03OC45NyAwLTc4Ljk3Wk03Ni41MS0xLjIxaC05Ljkxdi05LjExaC0yLjQzdjkuMTFoLTExLjQ1Yy0uNjQtMjguMTItMjMuMzgtNTAuODYtNTEuNS01MS41Vi02NC4xN2g5LjExVi02Ni42aC05LjExdi05LjkxQzQyLjQ2LTc1Ljg2IDc1Ljg2LTQyLjQ1IDc2LjUxLTEuMjFaTS0xLjIxLTMwLjc2aC05LjExdjIuNDNoOS4xMVYtNC4yYy0xLjQ0LjQyLTIuNTcgMS41NC0yLjk4IDIuOThILTI4LjMzdi05LjExaC0yLjQzdjkuMTFILTUwLjI5Qy00OS42NS0yOC0yNy45OS00OS42NS0xLjIxLTUwLjI5Vi0zMC43NlpNLTMwLjc2IDEuMjF2OS4xMWgyLjQzdi05LjExSC00LjJjLjQyIDEuNDQgMS41NCAyLjU3IDIuOTggMi45OHYyNC4xM2gtOS4xMXYyLjQzaDkuMTF2MTkuNTNDLTI3Ljk5IDQ5LjY1LTQ5LjY1IDI4LTUwLjI5IDEuMjFILTMwLjc2Wk0xLjIyIDMwLjc1aDkuMTF2LTIuNDNoLTkuMTFWNC4yYzEuNDQtLjQyIDIuNTYtMS41NCAyLjk4LTIuOThoMjQuMTN2OS4xMWgyLjQzdi05LjExaDE5LjUzQzQ5LjY1IDI4IDI4IDQ5LjY1IDEuMjIgNTAuMjlWMzAuNzVaTTMwLjc2LTEuMjF2LTkuMTFoLTIuNDN2OS4xMUg0LjJjLS40Mi0xLjQ0LTEuNTQtMi41Ni0yLjk4LTIuOThWLTI4LjMzaDkuMTF2LTIuNDNoLTkuMTFWLTUwLjI5QzI4LTQ5LjY1IDQ5LjY1LTI4IDUwLjI5LTEuMjFIMzAuNzZaTS0xLjIxLTc2LjUxdjkuOTFoLTkuMTF2Mi40M2g5LjExdjExLjQ1Yy0yOC4xMi42NC01MC44NiAyMy4zOC01MS41IDUxLjVILTY0LjE3di05LjExSC02Ni42djkuMTFoLTkuOTFDLTc1Ljg2LTQyLjQ1LTQyLjQ1LTc1Ljg2LTEuMjEtNzYuNTFaTS03Ni41MSAxLjIxaDkuOTF2OS4xMWgyLjQzdi05LjExaDExLjQ1Yy42NCAyOC4xMiAyMy4zOCA1MC44NiA1MS41IDUxLjV2MTEuNDVoLTkuMTF2Mi40M2g5LjExdjkuOTFDLTQyLjQ1IDc1Ljg2LTc1Ljg2IDQyLjQ1LTc2LjUxIDEuMjFaTTEuMjIgNzYuNTF2LTkuOTFoOS4xMXYtMi40M2gtOS4xMXYtMTEuNDVjMjguMTItLjY0IDUwLjg2LTIzLjM4IDUxLjUtNTEuNWgxMS40NXY5LjExaDIuNDN2LTkuMTFoOS45MUM3NS44NiA0Mi40NSA0Mi40NSA3NS44NiAxLjIyIDc2LjUxWlwiLz48cGF0aCBkPVwiTTAgODMuNTgtNy4xIDk2IDcuMSA5NlpcIi8+PHBhdGggZD1cIk0wLTgzLjU4IDcuMS05Ni03LjEtOTZcIi8+PHBhdGggZD1cIk04My41OCAwIDk2IDcuMSA5Ni03LjFaXCIvPjxwYXRoIGQ9XCJNLTgzLjU4IDAtOTYtNy4xLTk2IDcuMVpcIi8+PC9nPjwvZGVmcz48L3N2Zz4nLFxyXG4gICAgYWUgPSB7XHJcbiAgICAgIGRpc2M6IHtcclxuICAgICAgICBlbG1JZDogXCJsZWFkZXItbGluZS1kaXNjXCIsXHJcbiAgICAgICAgbm9Sb3RhdGU6ICEwLFxyXG4gICAgICAgIGJCb3g6IHtcclxuICAgICAgICAgIGxlZnQ6IC01LFxyXG4gICAgICAgICAgdG9wOiAtNSxcclxuICAgICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICByaWdodDogNSxcclxuICAgICAgICAgIGJvdHRvbTogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGhSOiAyLjUsXHJcbiAgICAgICAgaGVpZ2h0UjogMi41LFxyXG4gICAgICAgIGJDaXJjbGU6IDUsXHJcbiAgICAgICAgc2lkZUxlbjogNSxcclxuICAgICAgICBiYWNrTGVuOiA1LFxyXG4gICAgICAgIG92ZXJoZWFkOiAwLFxyXG4gICAgICAgIG91dGxpbmVCYXNlOiAxLFxyXG4gICAgICAgIG91dGxpbmVNYXg6IDRcclxuICAgICAgfSxcclxuICAgICAgc3F1YXJlOiB7XHJcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtc3F1YXJlXCIsXHJcbiAgICAgICAgbm9Sb3RhdGU6ICEwLFxyXG4gICAgICAgIGJCb3g6IHtcclxuICAgICAgICAgIGxlZnQ6IC01LFxyXG4gICAgICAgICAgdG9wOiAtNSxcclxuICAgICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICByaWdodDogNSxcclxuICAgICAgICAgIGJvdHRvbTogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGhSOiAyLjUsXHJcbiAgICAgICAgaGVpZ2h0UjogMi41LFxyXG4gICAgICAgIGJDaXJjbGU6IDUsXHJcbiAgICAgICAgc2lkZUxlbjogNSxcclxuICAgICAgICBiYWNrTGVuOiA1LFxyXG4gICAgICAgIG92ZXJoZWFkOiAwLFxyXG4gICAgICAgIG91dGxpbmVCYXNlOiAxLFxyXG4gICAgICAgIG91dGxpbmVNYXg6IDRcclxuICAgICAgfSxcclxuICAgICAgYXJyb3cxOiB7XHJcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtYXJyb3cxXCIsXHJcbiAgICAgICAgYkJveDoge1xyXG4gICAgICAgICAgbGVmdDogLTgsXHJcbiAgICAgICAgICB0b3A6IC04LFxyXG4gICAgICAgICAgd2lkdGg6IDE2LFxyXG4gICAgICAgICAgaGVpZ2h0OiAxNixcclxuICAgICAgICAgIHJpZ2h0OiA4LFxyXG4gICAgICAgICAgYm90dG9tOiA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aFI6IDQsXHJcbiAgICAgICAgaGVpZ2h0UjogNCxcclxuICAgICAgICBiQ2lyY2xlOiA4LFxyXG4gICAgICAgIHNpZGVMZW46IDgsXHJcbiAgICAgICAgYmFja0xlbjogOCxcclxuICAgICAgICBvdmVyaGVhZDogOCxcclxuICAgICAgICBvdXRsaW5lQmFzZTogMixcclxuICAgICAgICBvdXRsaW5lTWF4OiAxLjVcclxuICAgICAgfSxcclxuICAgICAgYXJyb3cyOiB7XHJcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtYXJyb3cyXCIsXHJcbiAgICAgICAgYkJveDoge1xyXG4gICAgICAgICAgbGVmdDogLTcsXHJcbiAgICAgICAgICB0b3A6IC04LFxyXG4gICAgICAgICAgd2lkdGg6IDExLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxNixcclxuICAgICAgICAgIHJpZ2h0OiA0LFxyXG4gICAgICAgICAgYm90dG9tOiA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aFI6IDIuNzUsXHJcbiAgICAgICAgaGVpZ2h0UjogNCxcclxuICAgICAgICBiQ2lyY2xlOiA4LFxyXG4gICAgICAgIHNpZGVMZW46IDgsXHJcbiAgICAgICAgYmFja0xlbjogNyxcclxuICAgICAgICBvdmVyaGVhZDogNCxcclxuICAgICAgICBvdXRsaW5lQmFzZTogMSxcclxuICAgICAgICBvdXRsaW5lTWF4OiAxLjc1XHJcbiAgICAgIH0sXHJcbiAgICAgIGFycm93Mzoge1xyXG4gICAgICAgIGVsbUlkOiBcImxlYWRlci1saW5lLWFycm93M1wiLFxyXG4gICAgICAgIGJCb3g6IHtcclxuICAgICAgICAgIGxlZnQ6IC00LFxyXG4gICAgICAgICAgdG9wOiAtNSxcclxuICAgICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICByaWdodDogOCxcclxuICAgICAgICAgIGJvdHRvbTogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGhSOiAzLFxyXG4gICAgICAgIGhlaWdodFI6IDIuNSxcclxuICAgICAgICBiQ2lyY2xlOiA4LFxyXG4gICAgICAgIHNpZGVMZW46IDUsXHJcbiAgICAgICAgYmFja0xlbjogNCxcclxuICAgICAgICBvdmVyaGVhZDogOCxcclxuICAgICAgICBvdXRsaW5lQmFzZTogMSxcclxuICAgICAgICBvdXRsaW5lTWF4OiAyLjVcclxuICAgICAgfSxcclxuICAgICAgaGFuZDoge1xyXG4gICAgICAgIGVsbUlkOiBcImxlYWRlci1saW5lLWhhbmRcIixcclxuICAgICAgICBiQm94OiB7XHJcbiAgICAgICAgICBsZWZ0OiAtMyxcclxuICAgICAgICAgIHRvcDogLTEyLFxyXG4gICAgICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAyNCxcclxuICAgICAgICAgIHJpZ2h0OiAzNyxcclxuICAgICAgICAgIGJvdHRvbTogMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoUjogMTAsXHJcbiAgICAgICAgaGVpZ2h0UjogNixcclxuICAgICAgICBiQ2lyY2xlOiAzNyxcclxuICAgICAgICBzaWRlTGVuOiAxMixcclxuICAgICAgICBiYWNrTGVuOiAzLFxyXG4gICAgICAgIG92ZXJoZWFkOiAzN1xyXG4gICAgICB9LFxyXG4gICAgICBjcm9zc2hhaXI6IHtcclxuICAgICAgICBlbG1JZDogXCJsZWFkZXItbGluZS1jcm9zc2hhaXJcIixcclxuICAgICAgICBub1JvdGF0ZTogITAsXHJcbiAgICAgICAgYkJveDoge1xyXG4gICAgICAgICAgbGVmdDogLTk2LFxyXG4gICAgICAgICAgdG9wOiAtOTYsXHJcbiAgICAgICAgICB3aWR0aDogMTkyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxOTIsXHJcbiAgICAgICAgICByaWdodDogOTYsXHJcbiAgICAgICAgICBib3R0b206IDk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aFI6IDQ4LFxyXG4gICAgICAgIGhlaWdodFI6IDQ4LFxyXG4gICAgICAgIGJDaXJjbGU6IDk2LFxyXG4gICAgICAgIHNpZGVMZW46IDk2LFxyXG4gICAgICAgIGJhY2tMZW46IDk2LFxyXG4gICAgICAgIG92ZXJoZWFkOiAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBFID0ge1xyXG4gICAgICBiZWhpbmQ6IG5lLFxyXG4gICAgICBkaXNjOiBcImRpc2NcIixcclxuICAgICAgc3F1YXJlOiBcInNxdWFyZVwiLFxyXG4gICAgICBhcnJvdzE6IFwiYXJyb3cxXCIsXHJcbiAgICAgIGFycm93MjogXCJhcnJvdzJcIixcclxuICAgICAgYXJyb3czOiBcImFycm93M1wiLFxyXG4gICAgICBoYW5kOiBcImhhbmRcIixcclxuICAgICAgY3Jvc3NoYWlyOiBcImNyb3NzaGFpclwiXHJcbiAgICB9LFxyXG4gICAgaWUgPSB7XHJcbiAgICAgIGRpc2M6IFwiZGlzY1wiLFxyXG4gICAgICBzcXVhcmU6IFwic3F1YXJlXCIsXHJcbiAgICAgIGFycm93MTogXCJhcnJvdzFcIixcclxuICAgICAgYXJyb3cyOiBcImFycm93MlwiLFxyXG4gICAgICBhcnJvdzM6IFwiYXJyb3czXCIsXHJcbiAgICAgIGhhbmQ6IFwiaGFuZFwiLFxyXG4gICAgICBjcm9zc2hhaXI6IFwiY3Jvc3NoYWlyXCJcclxuICAgIH0sXHJcbiAgICBXID0gW00sIEksIEMsIExdLFxyXG4gICAgeCA9IFwiYXV0b1wiLFxyXG4gICAgb2UgPSB7XHJcbiAgICAgIHg6IFwibGVmdFwiLFxyXG4gICAgICB5OiBcInRvcFwiLFxyXG4gICAgICB3aWR0aDogXCJ3aWR0aFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiaGVpZ2h0XCJcclxuICAgIH0sXHJcbiAgICBCID0gODAsXHJcbiAgICBSID0gNCxcclxuICAgIEYgPSA1LFxyXG4gICAgRyA9IDEyMCxcclxuICAgIEQgPSA4LFxyXG4gICAgeiA9IDMuNzUsXHJcbiAgICBqID0gMTAsXHJcbiAgICBIID0gMzAsXHJcbiAgICBVID0gLjU1MjI4NDcsXHJcbiAgICBaID0gLjI1ICogTWF0aC5QSSxcclxuICAgIHUgPSAvXlxccyooXFwtP1tcXGRcXC5dKylcXHMqKFxcJSk/XFxzKiQvLFxyXG4gICAgYiA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgIGUgPSBcIi1tcy1zY3JvbGwtbGltaXRcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgXCItbXMtaW1lLWFsaWduXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmICF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXHJcbiAgICBsZSA9ICFlICYmICEhZG9jdW1lbnQudW5pcXVlSUQsXHJcbiAgICByZSA9IFwiTW96QXBwZWFyYW5jZVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgIHNlID0gIShlIHx8IHJlIHx8ICF3aW5kb3cuY2hyb21lIHx8ICF3aW5kb3cuQ1NTKSxcclxuICAgIHVlID0gIWUgJiYgIWxlICYmICFyZSAmJiAhc2UgJiYgIXdpbmRvdy5jaHJvbWUgJiYgXCJXZWJraXRBcHBlYXJhbmNlXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgaGUgPSBsZSB8fCBlID8gLjIgOiAuMSxcclxuICAgIHBlID0ge1xyXG4gICAgICBwYXRoOiBQLFxyXG4gICAgICBsaW5lQ29sb3I6IFwiY29yYWxcIixcclxuICAgICAgbGluZVNpemU6IDQsXHJcbiAgICAgIHBsdWdTRTogW25lLCBcImFycm93MVwiXSxcclxuICAgICAgcGx1Z1NpemVTRTogWzEsIDFdLFxyXG4gICAgICBsaW5lT3V0bGluZUVuYWJsZWQ6ICExLFxyXG4gICAgICBsaW5lT3V0bGluZUNvbG9yOiBcImluZGlhbnJlZFwiLFxyXG4gICAgICBsaW5lT3V0bGluZVNpemU6IC4yNSxcclxuICAgICAgcGx1Z091dGxpbmVFbmFibGVkU0U6IFshMSwgITFdLFxyXG4gICAgICBwbHVnT3V0bGluZVNpemVTRTogWzEsIDFdXHJcbiAgICB9LFxyXG4gICAgayA9IChhID0ge30udG9TdHJpbmcsIGkgPSB7fS5oYXNPd25Qcm9wZXJ0eS50b1N0cmluZywgbCA9IGkuY2FsbChPYmplY3QpLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdCwgbjtcclxuICAgICAgcmV0dXJuIGUgJiYgXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gYS5jYWxsKGUpICYmICghKHQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkpIHx8IChuID0gdC5oYXNPd25Qcm9wZXJ0eShcImNvbnN0cnVjdG9yXCIpICYmIHQuY29uc3RydWN0b3IpICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbiAmJiBpLmNhbGwobikgPT09IGwpXHJcbiAgICB9KSxcclxuICAgIHcgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgJiYgd2luZG93LmlzRmluaXRlKGUpXHJcbiAgICB9LFxyXG4gICAgYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGUsIHggPSB7XHJcbiAgICAgICAgICBlYXNlOiBbLjI1LCAuMSwgLjI1LCAxXSxcclxuICAgICAgICAgIGxpbmVhcjogWzAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgXCJlYXNlLWluXCI6IFsuNDIsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgXCJlYXNlLW91dFwiOiBbMCwgMCwgLjU4LCAxXSxcclxuICAgICAgICAgIFwiZWFzZS1pbi1vdXRcIjogWy40MiwgMCwgLjU4LCAxXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYiA9IDFlMyAvIDYwIC8gMixcclxuICAgICAgICB0ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGUsIGIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYSA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgJiYgd2luZG93LmlzRmluaXRlKGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrID0gW10sXHJcbiAgICAgICAgdyA9IDA7XHJcblxyXG4gICAgICBmdW5jdGlvbiBsKCkge1xyXG4gICAgICAgIHZhciBpID0gRGF0ZS5ub3coKSxcclxuICAgICAgICAgIG8gPSAhMTtcclxuICAgICAgICBlICYmIChuLmNhbGwod2luZG93LCBlKSwgZSA9IG51bGwpLCBrLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0LCBuLCBhO1xyXG4gICAgICAgICAgaWYgKGUuZnJhbWVzU3RhcnQpIHtcclxuICAgICAgICAgICAgaWYgKCh0ID0gaSAtIGUuZnJhbWVzU3RhcnQpID49IGUuZHVyYXRpb24gJiYgZS5jb3VudCAmJiBlLmxvb3BzTGVmdCA8PSAxKSByZXR1cm4gYSA9IGUuZnJhbWVzW2UubGFzdEZyYW1lID0gZS5yZXZlcnNlID8gMCA6IGUuZnJhbWVzLmxlbmd0aCAtIDFdLCBlLmZyYW1lQ2FsbGJhY2soYS52YWx1ZSwgITAsIGEudGltZVJhdGlvLCBhLm91dHB1dFJhdGlvKSwgdm9pZChlLmZyYW1lc1N0YXJ0ID0gbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh0ID4gZS5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgIGlmIChuID0gTWF0aC5mbG9vcih0IC8gZS5kdXJhdGlvbiksIGUuY291bnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuID49IGUubG9vcHNMZWZ0KSByZXR1cm4gYSA9IGUuZnJhbWVzW2UubGFzdEZyYW1lID0gZS5yZXZlcnNlID8gMCA6IGUuZnJhbWVzLmxlbmd0aCAtIDFdLCBlLmZyYW1lQ2FsbGJhY2soYS52YWx1ZSwgITAsIGEudGltZVJhdGlvLCBhLm91dHB1dFJhdGlvKSwgdm9pZChlLmZyYW1lc1N0YXJ0ID0gbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBlLmxvb3BzTGVmdCAtPSBuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGUuZnJhbWVzU3RhcnQgKz0gZS5kdXJhdGlvbiAqIG4sIHQgPSBpIC0gZS5mcmFtZXNTdGFydFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGUucmV2ZXJzZSAmJiAodCA9IGUuZHVyYXRpb24gLSB0KSwgYSA9IGUuZnJhbWVzW2UubGFzdEZyYW1lID0gTWF0aC5yb3VuZCh0IC8gYildLCAhMSAhPT0gZS5mcmFtZUNhbGxiYWNrKGEudmFsdWUsICExLCBhLnRpbWVSYXRpbywgYS5vdXRwdXRSYXRpbykgPyBvID0gITAgOiBlLmZyYW1lc1N0YXJ0ID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBvICYmIChlID0gdC5jYWxsKHdpbmRvdywgbCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIE8oZSwgdCkge1xyXG4gICAgICAgIGUuZnJhbWVzU3RhcnQgPSBEYXRlLm5vdygpLCBudWxsICE9IHQgJiYgKGUuZnJhbWVzU3RhcnQgLT0gZS5kdXJhdGlvbiAqIChlLnJldmVyc2UgPyAxIC0gdCA6IHQpKSwgZS5sb29wc0xlZnQgPSBlLmNvdW50LCBlLmxhc3RGcmFtZSA9IG51bGwsIGwoKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAobiwgZSwgdCwgYSwgaSwgbywgbCkge1xyXG4gICAgICAgICAgdmFyIHIsIHMsIHUsIGgsIHAsIGMsIGQsIGYsIHksIFMsIG0sIGcsIF8sIHYgPSArK3c7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gRShlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IG4odCksXHJcbiAgICAgICAgICAgICAgdGltZVJhdGlvOiBlLFxyXG4gICAgICAgICAgICAgIG91dHB1dFJhdGlvOiB0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBpICYmIChpID0geFtpXSksIG4gPSBuIHx8IGZ1bmN0aW9uICgpIHt9LCB0IDwgYikgcyA9IFtFKDAsIDApLCBFKDEsIDEpXTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodSA9IGIgLyB0LCBzID0gW0UoMCwgMCldLCAwID09PSBpWzBdICYmIDAgPT09IGlbMV0gJiYgMSA9PT0gaVsyXSAmJiAxID09PSBpWzNdKVxyXG4gICAgICAgICAgICAgIGZvciAocCA9IHU7IHAgPD0gMTsgcCArPSB1KSBzLnB1c2goRShwLCBwKSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBmb3IgKGMgPSBoID0gKHAgPSB1KSAvIDEwOyBjIDw9IDE7IGMgKz0gaCkgdm9pZCAwLCBTID0gKHkgPSAoZiA9IGMpICogZikgKiBmLCBfID0gMyAqIChtID0gMSAtIGYpICogeSwgcCA8PSAoZCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IChnID0gMyAqIChtICogbSkgKiBmKSAqIGlbMF0gKyBfICogaVsyXSArIFMsXHJcbiAgICAgICAgICAgICAgICB5OiBnICogaVsxXSArIF8gKiBpWzNdICsgU1xyXG4gICAgICAgICAgICAgIH0pLnggJiYgKHMucHVzaChFKGQueCwgZC55KSksIHAgKz0gdSk7XHJcbiAgICAgICAgICAgIHMucHVzaChFKDEsIDEpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHIgPSB7XHJcbiAgICAgICAgICAgIGFuaW1JZDogdixcclxuICAgICAgICAgICAgZnJhbWVDYWxsYmFjazogZSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHQsXHJcbiAgICAgICAgICAgIGNvdW50OiBhLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHMsXHJcbiAgICAgICAgICAgIHJldmVyc2U6ICEhb1xyXG4gICAgICAgICAgfSwgay5wdXNoKHIpLCAhMSAhPT0gbCAmJiBPKHIsIGwpLCB2XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICB2YXIgYTtcclxuICAgICAgICAgIGsuc29tZShmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5hbmltSWQgPT09IG4gJiYgKGEgPSB0LCAhKGUuZnJhbWVzU3RhcnQgPSBudWxsKSlcclxuICAgICAgICAgIH0pICYmIGsuc3BsaWNlKGEsIDEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKHQsIG4sIGEpIHtcclxuICAgICAgICAgIGsuc29tZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5hbmltSWQgPT09IHQgJiYgKGUucmV2ZXJzZSA9ICEhbiwgTyhlLCBhKSwgITApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKHQsIG4pIHtcclxuICAgICAgICAgIHZhciBhO1xyXG4gICAgICAgICAgcmV0dXJuIGsuc29tZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5hbmltSWQgPT09IHQgJiYgKG4gPyBudWxsICE9IGUubGFzdEZyYW1lICYmIChhID0gZS5mcmFtZXNbZS5sYXN0RnJhbWVdLnRpbWVSYXRpbykgOiAoYSA9IChEYXRlLm5vdygpIC0gZS5mcmFtZXNTdGFydCkgLyBlLmR1cmF0aW9uLCBlLnJldmVyc2UgJiYgKGEgPSAxIC0gYSksIGEgPCAwID8gYSA9IDAgOiAxIDwgYSAmJiAoYSA9IDEpKSwgIShlLmZyYW1lc1N0YXJ0ID0gbnVsbCkpXHJcbiAgICAgICAgICB9KSwgYVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRUaW1pbmc6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCA/IHhbdF0gOiBBcnJheS5pc0FycmF5KHQpICYmIFswLCAxLCAyLCAzXS5ldmVyeShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYSh0W2VdKSAmJiAwIDw9IHRbZV0gJiYgdFtlXSA8PSAxXHJcbiAgICAgICAgICB9KSA/IFt0WzBdLCB0WzFdLCB0WzJdLCB0WzNdXSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0oKSxcclxuICAgIGQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSAmJiBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5zZXRQYXRoRGF0YSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGkgPSB7XHJcbiAgICAgICAgICAgIFo6IFwiWlwiLFxyXG4gICAgICAgICAgICBNOiBcIk1cIixcclxuICAgICAgICAgICAgTDogXCJMXCIsXHJcbiAgICAgICAgICAgIEM6IFwiQ1wiLFxyXG4gICAgICAgICAgICBROiBcIlFcIixcclxuICAgICAgICAgICAgQTogXCJBXCIsXHJcbiAgICAgICAgICAgIEg6IFwiSFwiLFxyXG4gICAgICAgICAgICBWOiBcIlZcIixcclxuICAgICAgICAgICAgUzogXCJTXCIsXHJcbiAgICAgICAgICAgIFQ6IFwiVFwiLFxyXG4gICAgICAgICAgICB6OiBcIlpcIixcclxuICAgICAgICAgICAgbTogXCJtXCIsXHJcbiAgICAgICAgICAgIGw6IFwibFwiLFxyXG4gICAgICAgICAgICBjOiBcImNcIixcclxuICAgICAgICAgICAgcTogXCJxXCIsXHJcbiAgICAgICAgICAgIGE6IFwiYVwiLFxyXG4gICAgICAgICAgICBoOiBcImhcIixcclxuICAgICAgICAgICAgdjogXCJ2XCIsXHJcbiAgICAgICAgICAgIHM6IFwic1wiLFxyXG4gICAgICAgICAgICB0OiBcInRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG8gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmcgPSBlLCB0aGlzLl9jdXJyZW50SW5kZXggPSAwLCB0aGlzLl9lbmRJbmRleCA9IHRoaXMuX3N0cmluZy5sZW5ndGgsIHRoaXMuX3ByZXZDb21tYW5kID0gbnVsbCwgdGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsID0gLTEgIT09IGUubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSBcIik7XHJcbiAgICAgICAgby5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICBwYXJzZVNlZ21lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSxcclxuICAgICAgICAgICAgICB0ID0gaVtlXSA/IGlbZV0gOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAobnVsbCA9PT0gdCkge1xyXG4gICAgICAgICAgICAgIGlmIChudWxsID09PSB0aGlzLl9wcmV2Q29tbWFuZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgaWYgKG51bGwgPT09ICh0ID0gKFwiK1wiID09PSBlIHx8IFwiLVwiID09PSBlIHx8IFwiLlwiID09PSBlIHx8IFwiMFwiIDw9IGUgJiYgZSA8PSBcIjlcIikgJiYgXCJaXCIgIT09IHRoaXMuX3ByZXZDb21tYW5kID8gXCJNXCIgPT09IHRoaXMuX3ByZXZDb21tYW5kID8gXCJMXCIgOiBcIm1cIiA9PT0gdGhpcy5fcHJldkNvbW1hbmQgPyBcImxcIiA6IHRoaXMuX3ByZXZDb21tYW5kIDogbnVsbCkpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLl9jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgdmFyIG4gPSBudWxsLFxyXG4gICAgICAgICAgICAgIGEgPSAodGhpcy5fcHJldkNvbW1hbmQgPSB0KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJIXCIgPT09IGEgfHwgXCJWXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJNXCIgPT09IGEgfHwgXCJMXCIgPT09IGEgfHwgXCJUXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJTXCIgPT09IGEgfHwgXCJRXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJDXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJBXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlQXJjRmxhZygpLCB0aGlzLl9wYXJzZUFyY0ZsYWcoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKV0gOiBcIlpcIiA9PT0gYSAmJiAodGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzKCksIG4gPSBbXSksIG51bGwgPT09IG4gfHwgMCA8PSBuLmluZGV4T2YobnVsbCkgPyBudWxsIDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IHQsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoYXNNb3JlRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwZWVrU2VnbWVudFR5cGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIGlbZV0gPyBpW2VdIDogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGluaXRpYWxDb21tYW5kSXNNb3ZlVG86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc01vcmVEYXRhKCkpIHJldHVybiAhMDtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnBlZWtTZWdtZW50VHlwZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJNXCIgPT09IGUgfHwgXCJtXCIgPT09IGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBfaXNDdXJyZW50U3BhY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIGUgPD0gXCIgXCIgJiYgKFwiIFwiID09PSBlIHx8IFwiXFxuXCIgPT09IGUgfHwgXCJcXHRcIiA9PT0gZSB8fCBcIlxcclwiID09PSBlIHx8IFwiXFxmXCIgPT09IGUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgX3NraXBPcHRpb25hbFNwYWNlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKDsgdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgdGhpcy5faXNDdXJyZW50U3BhY2UoKTspIHRoaXMuX2N1cnJlbnRJbmRleCArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBfc2tpcE9wdGlvbmFsU3BhY2VzT3JEZWxpbWl0ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgIXRoaXMuX2lzQ3VycmVudFNwYWNlKCkgJiYgXCIsXCIgIT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKSAmJiAodGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzKCkgJiYgdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgXCIsXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdICYmICh0aGlzLl9jdXJyZW50SW5kZXggKz0gMSwgdGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzKCkpLCB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBfcGFyc2VOdW1iZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAwLFxyXG4gICAgICAgICAgICAgIHQgPSAwLFxyXG4gICAgICAgICAgICAgIG4gPSAxLFxyXG4gICAgICAgICAgICAgIGEgPSAwLFxyXG4gICAgICAgICAgICAgIGkgPSAxLFxyXG4gICAgICAgICAgICAgIG8gPSAxLFxyXG4gICAgICAgICAgICAgIGwgPSB0aGlzLl9jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSwgdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgXCIrXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdID8gdGhpcy5fY3VycmVudEluZGV4ICs9IDEgOiB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIi1cIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCBpID0gLTEpLCB0aGlzLl9jdXJyZW50SW5kZXggPT09IHRoaXMuX2VuZEluZGV4IHx8ICh0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8IFwiMFwiIHx8IFwiOVwiIDwgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pICYmIFwiLlwiICE9PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSB0aGlzLl9jdXJyZW50SW5kZXg7IHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4ICYmIFwiMFwiIDw9IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdICYmIHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIDw9IFwiOVwiOykgdGhpcy5fY3VycmVudEluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggIT09IHIpXHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IHRoaXMuX2N1cnJlbnRJbmRleCAtIDEsIHUgPSAxOyByIDw9IHM7KSB0ICs9IHUgKiAodGhpcy5fc3RyaW5nW3NdIC0gXCIwXCIpLCBzIC09IDEsIHUgKj0gMTA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIi5cIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICs9IDEsIHRoaXMuX2N1cnJlbnRJbmRleCA+PSB0aGlzLl9lbmRJbmRleCB8fCB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8IFwiMFwiIHx8IFwiOVwiIDwgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIGZvciAoOyB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIjBcIiA8PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSAmJiB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8PSBcIjlcIjspIG4gKj0gMTAsIGEgKz0gKHRoaXMuX3N0cmluZy5jaGFyQXQodGhpcy5fY3VycmVudEluZGV4KSAtIFwiMFwiKSAvIG4sIHRoaXMuX2N1cnJlbnRJbmRleCArPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCAhPT0gbCAmJiB0aGlzLl9jdXJyZW50SW5kZXggKyAxIDwgdGhpcy5fZW5kSW5kZXggJiYgKFwiZVwiID09PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSB8fCBcIkVcIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pICYmIFwieFwiICE9PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4ICsgMV0gJiYgXCJtXCIgIT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXggKyAxXSkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggKz0gMSwgXCIrXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdID8gdGhpcy5fY3VycmVudEluZGV4ICs9IDEgOiBcIi1cIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCBvID0gLTEpLCB0aGlzLl9jdXJyZW50SW5kZXggPj0gdGhpcy5fZW5kSW5kZXggfHwgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gPCBcIjBcIiB8fCBcIjlcIiA8IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICBmb3IgKDsgdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgXCIwXCIgPD0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gPD0gXCI5XCI7KSBlICo9IDEwLCBlICs9IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIC0gXCIwXCIsIHRoaXMuX2N1cnJlbnRJbmRleCArPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGggPSB0ICsgYTtcclxuICAgICAgICAgICAgcmV0dXJuIGggKj0gaSwgZSAmJiAoaCAqPSBNYXRoLnBvdygxMCwgbyAqIGUpKSwgbCA9PT0gdGhpcy5fY3VycmVudEluZGV4ID8gbnVsbCA6ICh0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXNPckRlbGltaXRlcigpLCBoKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIF9wYXJzZUFyY0ZsYWc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA+PSB0aGlzLl9lbmRJbmRleCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHZhciBlID0gbnVsbCxcclxuICAgICAgICAgICAgICB0ID0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggKz0gMSwgXCIwXCIgPT09IHQpIGUgPSAwO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoXCIxXCIgIT09IHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIGUgPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NraXBPcHRpb25hbFNwYWNlc09yRGVsaW1pdGVyKCksIGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlIHx8IDAgPT09IGUubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIHZhciB0ID0gbmV3IG8oZSksXHJcbiAgICAgICAgICAgICAgbiA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodC5pbml0aWFsQ29tbWFuZElzTW92ZVRvKCkpXHJcbiAgICAgICAgICAgICAgZm9yICg7IHQuaGFzTW9yZURhdGEoKTspIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gdC5wYXJzZVNlZ21lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBhKSBicmVhaztcclxuICAgICAgICAgICAgICAgIG4ucHVzaChhKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBuID0gZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLFxyXG4gICAgICAgICAgciA9IGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxcclxuICAgICAgICAgIGQgPSBlLlN5bWJvbCA/IGUuU3ltYm9sKCkgOiBcIl9fY2FjaGVkUGF0aERhdGFcIixcclxuICAgICAgICAgIGYgPSBlLlN5bWJvbCA/IGUuU3ltYm9sKCkgOiBcIl9fY2FjaGVkTm9ybWFsaXplZFBhdGhEYXRhXCIsXHJcbiAgICAgICAgICBVID0gZnVuY3Rpb24gKGUsIHQsIG4sIGEsIGksIG8sIGwsIHIsIHMsIHUpIHtcclxuICAgICAgICAgICAgdmFyIGgsIHAsIGMsIGQsIGYsIHkgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgeDogZSAqIE1hdGguY29zKG4pIC0gdCAqIE1hdGguc2luKG4pLFxyXG4gICAgICAgICAgICAgICAgICB5OiBlICogTWF0aC5zaW4obikgKyB0ICogTWF0aC5jb3MobilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFMgPSAoaCA9IGwsIE1hdGguUEkgKiBoIC8gMTgwKSxcclxuICAgICAgICAgICAgICBtID0gW107XHJcbiAgICAgICAgICAgIGlmICh1KSBwID0gdVswXSwgYyA9IHVbMV0sIGQgPSB1WzJdLCBmID0gdVszXTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgdmFyIGcgPSB5KGUsIHQsIC1TKTtcclxuICAgICAgICAgICAgICBlID0gZy54LCB0ID0gZy55O1xyXG4gICAgICAgICAgICAgIHZhciBfID0geShuLCBhLCAtUyksXHJcbiAgICAgICAgICAgICAgICB2ID0gKGUgLSAobiA9IF8ueCkpIC8gMixcclxuICAgICAgICAgICAgICAgIEUgPSAodCAtIChhID0gXy55KSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgeCA9IHYgKiB2IC8gKGkgKiBpKSArIEUgKiBFIC8gKG8gKiBvKTtcclxuICAgICAgICAgICAgICAxIDwgeCAmJiAoaSAqPSB4ID0gTWF0aC5zcXJ0KHgpLCBvICo9IHgpO1xyXG4gICAgICAgICAgICAgIHZhciBiID0gaSAqIGksXHJcbiAgICAgICAgICAgICAgICBrID0gbyAqIG8sXHJcbiAgICAgICAgICAgICAgICB3ID0gYiAqIGsgLSBiICogRSAqIEUgLSBrICogdiAqIHYsXHJcbiAgICAgICAgICAgICAgICBPID0gYiAqIEUgKiBFICsgayAqIHYgKiB2LFxyXG4gICAgICAgICAgICAgICAgTSA9IChyID09PSBzID8gLTEgOiAxKSAqIE1hdGguc3FydChNYXRoLmFicyh3IC8gTykpO1xyXG4gICAgICAgICAgICAgIGQgPSBNICogaSAqIEUgLyBvICsgKGUgKyBuKSAvIDIsIGYgPSBNICogLW8gKiB2IC8gaSArICh0ICsgYSkgLyAyLCBwID0gTWF0aC5hc2luKHBhcnNlRmxvYXQoKCh0IC0gZikgLyBvKS50b0ZpeGVkKDkpKSksIGMgPSBNYXRoLmFzaW4ocGFyc2VGbG9hdCgoKGEgLSBmKSAvIG8pLnRvRml4ZWQoOSkpKSwgZSA8IGQgJiYgKHAgPSBNYXRoLlBJIC0gcCksIG4gPCBkICYmIChjID0gTWF0aC5QSSAtIGMpLCBwIDwgMCAmJiAocCA9IDIgKiBNYXRoLlBJICsgcCksIGMgPCAwICYmIChjID0gMiAqIE1hdGguUEkgKyBjKSwgcyAmJiBjIDwgcCAmJiAocCAtPSAyICogTWF0aC5QSSksICFzICYmIHAgPCBjICYmIChjIC09IDIgKiBNYXRoLlBJKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBJID0gYyAtIHA7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhJKSA+IDEyMCAqIE1hdGguUEkgLyAxODApIHtcclxuICAgICAgICAgICAgICB2YXIgQyA9IGMsXHJcbiAgICAgICAgICAgICAgICBMID0gbixcclxuICAgICAgICAgICAgICAgIEEgPSBhO1xyXG4gICAgICAgICAgICAgIGMgPSBzICYmIHAgPCBjID8gcCArIDEyMCAqIE1hdGguUEkgLyAxODAgKiAxIDogcCArIDEyMCAqIE1hdGguUEkgLyAxODAgKiAtMSwgbiA9IGQgKyBpICogTWF0aC5jb3MoYyksIGEgPSBmICsgbyAqIE1hdGguc2luKGMpLCBtID0gVShuLCBhLCBMLCBBLCBpLCBvLCBsLCAwLCBzLCBbYywgQywgZCwgZl0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSSA9IGMgLSBwO1xyXG4gICAgICAgICAgICB2YXIgViA9IE1hdGguY29zKHApLFxyXG4gICAgICAgICAgICAgIFAgPSBNYXRoLnNpbihwKSxcclxuICAgICAgICAgICAgICBOID0gTWF0aC5jb3MoYyksXHJcbiAgICAgICAgICAgICAgVCA9IE1hdGguc2luKGMpLFxyXG4gICAgICAgICAgICAgIFcgPSBNYXRoLnRhbihJIC8gNCksXHJcbiAgICAgICAgICAgICAgQiA9IDQgLyAzICogaSAqIFcsXHJcbiAgICAgICAgICAgICAgUiA9IDQgLyAzICogbyAqIFcsXHJcbiAgICAgICAgICAgICAgRiA9IFtlLCB0XSxcclxuICAgICAgICAgICAgICBHID0gW2UgKyBCICogUCwgdCAtIFIgKiBWXSxcclxuICAgICAgICAgICAgICBEID0gW24gKyBCICogVCwgYSAtIFIgKiBOXSxcclxuICAgICAgICAgICAgICB6ID0gW24sIGFdO1xyXG4gICAgICAgICAgICBpZiAoR1swXSA9IDIgKiBGWzBdIC0gR1swXSwgR1sxXSA9IDIgKiBGWzFdIC0gR1sxXSwgdSkgcmV0dXJuIFtHLCBELCB6XS5jb25jYXQobSk7XHJcbiAgICAgICAgICAgIG0gPSBbRywgRCwgel0uY29uY2F0KG0pLmpvaW4oKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHZhciBqID0gW10sXHJcbiAgICAgICAgICAgICAgSCA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgdCAlIDIgPyBILnB1c2goeShtW3QgLSAxXSwgbVt0XSwgUykueSkgOiBILnB1c2goeShtW3RdLCBtW3QgKyAxXSwgUykueCksIDYgPT09IEgubGVuZ3RoICYmIChqLnB1c2goSCksIEggPSBbXSlcclxuICAgICAgICAgICAgfSksIGpcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB5ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlczogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgUyA9IFtdLFxyXG4gICAgICAgICAgICAgIG0gPSBudWxsLFxyXG4gICAgICAgICAgICAgIGcgPSBudWxsLFxyXG4gICAgICAgICAgICAgIF8gPSBudWxsLFxyXG4gICAgICAgICAgICAgIHYgPSBudWxsLFxyXG4gICAgICAgICAgICAgIEUgPSBudWxsLFxyXG4gICAgICAgICAgICAgIHggPSBudWxsLFxyXG4gICAgICAgICAgICAgIGIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKFwiTVwiID09PSBlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gZS52YWx1ZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgIG4gPSBlLnZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFt0LCBuXVxyXG4gICAgICAgICAgICAgICAgfSksIHYgPSB4ID0gdCwgRSA9IGIgPSBuXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIkNcIiA9PT0gZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGUudmFsdWVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICBpID0gZS52YWx1ZXNbMV0sXHJcbiAgICAgICAgICAgICAgICAgIG8gPSBlLnZhbHVlc1syXSxcclxuICAgICAgICAgICAgICAgICAgbCA9IGUudmFsdWVzWzNdO1xyXG4gICAgICAgICAgICAgICAgdCA9IGUudmFsdWVzWzRdLCBuID0gZS52YWx1ZXNbNV07XHJcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgaSwgbywgbCwgdCwgbl1cclxuICAgICAgICAgICAgICAgIH0pLCBnID0gbywgXyA9IGwsIHYgPSB0LCBFID0gblxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJMXCIgPT09IGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IGUudmFsdWVzWzBdLCBuID0gZS52YWx1ZXNbMV07XHJcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbdCwgbl1cclxuICAgICAgICAgICAgICAgIH0pLCB2ID0gdCwgRSA9IG5cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiSFwiID09PSBlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHQgPSBlLnZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFt0LCBFXVxyXG4gICAgICAgICAgICAgICAgfSksIHYgPSB0XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIlZcIiA9PT0gZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBuID0gZS52YWx1ZXNbMF07XHJcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbdiwgbl1cclxuICAgICAgICAgICAgICAgIH0pLCBFID0gblxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJTXCIgPT09IGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbyA9IGUudmFsdWVzWzBdLCBsID0gZS52YWx1ZXNbMV0sIHQgPSBlLnZhbHVlc1syXSwgbiA9IGUudmFsdWVzWzNdO1xyXG4gICAgICAgICAgICAgICAgXCJDXCIgPT09IG0gfHwgXCJTXCIgPT09IG0gPyAociA9IHYgKyAodiAtIGcpLCBzID0gRSArIChFIC0gXykpIDogKHIgPSB2LCBzID0gRSksIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFtyLCBzLCBvLCBsLCB0LCBuXVxyXG4gICAgICAgICAgICAgICAgfSksIGcgPSBvLCBfID0gbCwgdiA9IHQsIEUgPSBuXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIlRcIiA9PT0gZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gZS52YWx1ZXNbMF0sIG4gPSBlLnZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgIFwiUVwiID09PSBtIHx8IFwiVFwiID09PSBtID8gKGEgPSB2ICsgKHYgLSBnKSwgaSA9IEUgKyAoRSAtIF8pKSA6IChhID0gdiwgaSA9IEUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHIgPSB2ICsgMiAqIChhIC0gdikgLyAzLFxyXG4gICAgICAgICAgICAgICAgICBzID0gRSArIDIgKiAoaSAtIEUpIC8gMyxcclxuICAgICAgICAgICAgICAgICAgdSA9IHQgKyAyICogKGEgLSB0KSAvIDMsXHJcbiAgICAgICAgICAgICAgICAgIGggPSBuICsgMiAqIChpIC0gbikgLyAzO1xyXG4gICAgICAgICAgICAgICAgUy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW3IsIHMsIHUsIGgsIHQsIG5dXHJcbiAgICAgICAgICAgICAgICB9KSwgZyA9IGEsIF8gPSBpLCB2ID0gdCwgRSA9IG5cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiUVwiID09PSBlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBlLnZhbHVlc1swXSwgaSA9IGUudmFsdWVzWzFdLCB0ID0gZS52YWx1ZXNbMl0sIG4gPSBlLnZhbHVlc1szXSwgciA9IHYgKyAyICogKGEgLSB2KSAvIDMsIHMgPSBFICsgMiAqIChpIC0gRSkgLyAzLCB1ID0gdCArIDIgKiAoYSAtIHQpIC8gMywgaCA9IG4gKyAyICogKGkgLSBuKSAvIDM7XHJcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbciwgcywgdSwgaCwgdCwgbl1cclxuICAgICAgICAgICAgICAgIH0pLCBnID0gYSwgXyA9IGksIHYgPSB0LCBFID0gblxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJBXCIgPT09IGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHAgPSBlLnZhbHVlc1swXSxcclxuICAgICAgICAgICAgICAgICAgYyA9IGUudmFsdWVzWzFdLFxyXG4gICAgICAgICAgICAgICAgICBkID0gZS52YWx1ZXNbMl0sXHJcbiAgICAgICAgICAgICAgICAgIGYgPSBlLnZhbHVlc1szXSxcclxuICAgICAgICAgICAgICAgICAgeSA9IGUudmFsdWVzWzRdO1xyXG4gICAgICAgICAgICAgICAgdCA9IGUudmFsdWVzWzVdLCBuID0gZS52YWx1ZXNbNl07XHJcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcCB8fCAwID09PSBjKSBTLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbdiwgRSwgdCwgbiwgdCwgbl1cclxuICAgICAgICAgICAgICAgIH0pLCB2ID0gdCwgRSA9IG47XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2ICE9PSB0IHx8IEUgIT09IG4pIFUodiwgRSwgdCwgbiwgcCwgYywgZCwgZiwgeSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICBTLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZVxyXG4gICAgICAgICAgICAgICAgICB9KSwgdiA9IHQsIEUgPSBuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBcIlpcIiA9PT0gZS50eXBlICYmIChTLnB1c2goZSksIHYgPSB4LCBFID0gYik7XHJcbiAgICAgICAgICAgICAgbSA9IGUudHlwZVxyXG4gICAgICAgICAgICB9KSwgU1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgXCJkXCIgPT09IGUgJiYgKHRoaXNbZF0gPSBudWxsLCB0aGlzW2ZdID0gbnVsbCksIG4uY2FsbCh0aGlzLCBlLCB0KVxyXG4gICAgICAgIH0sIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICBcImRcIiA9PT0gZSAmJiAodGhpc1tkXSA9IG51bGwsIHRoaXNbZl0gPSBudWxsKSwgci5jYWxsKHRoaXMsIGUpXHJcbiAgICAgICAgfSwgZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGEgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKGUgJiYgZS5ub3JtYWxpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbZl0pIHJldHVybiB5KHRoaXNbZl0pO1xyXG4gICAgICAgICAgICB0aGlzW2RdID8gbiA9IHkodGhpc1tkXSkgOiAobiA9IGEodGhpcy5nZXRBdHRyaWJ1dGUoXCJkXCIpIHx8IFwiXCIpLCB0aGlzW2RdID0geShuKSk7XHJcbiAgICAgICAgICAgIHZhciB0ID0gUygocyA9IFtdLCBjID0gcCA9IGggPSB1ID0gbnVsbCwgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHQgPSBlLnR5cGU7XHJcbiAgICAgICAgICAgICAgaWYgKFwiTVwiID09PSB0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGUudmFsdWVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICBhID0gZS52YWx1ZXNbMV07XHJcbiAgICAgICAgICAgICAgICBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbbiwgYV1cclxuICAgICAgICAgICAgICAgIH0pLCB1ID0gcCA9IG4sIGggPSBjID0gYVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJtXCIgPT09IHQpIG4gPSB1ICsgZS52YWx1ZXNbMF0sIGEgPSBoICsgZS52YWx1ZXNbMV0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW24sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBwID0gbiwgaCA9IGMgPSBhO1xyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKFwiTFwiID09PSB0KSBuID0gZS52YWx1ZXNbMF0sIGEgPSBlLnZhbHVlc1sxXSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhO1xyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKFwibFwiID09PSB0KSBuID0gdSArIGUudmFsdWVzWzBdLCBhID0gaCArIGUudmFsdWVzWzFdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGE7XHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAoXCJDXCIgPT09IHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gZS52YWx1ZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgIG8gPSBlLnZhbHVlc1sxXSxcclxuICAgICAgICAgICAgICAgICAgbCA9IGUudmFsdWVzWzJdLFxyXG4gICAgICAgICAgICAgICAgICByID0gZS52YWx1ZXNbM107XHJcbiAgICAgICAgICAgICAgICBuID0gZS52YWx1ZXNbNF0sIGEgPSBlLnZhbHVlc1s1XSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW2ksIG8sIGwsIHIsIG4sIGFdXHJcbiAgICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhXHJcbiAgICAgICAgICAgICAgfSBlbHNlIFwiY1wiID09PSB0ID8gKGkgPSB1ICsgZS52YWx1ZXNbMF0sIG8gPSBoICsgZS52YWx1ZXNbMV0sIGwgPSB1ICsgZS52YWx1ZXNbMl0sIHIgPSBoICsgZS52YWx1ZXNbM10sIG4gPSB1ICsgZS52YWx1ZXNbNF0sIGEgPSBoICsgZS52YWx1ZXNbNV0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2ksIG8sIGwsIHIsIG4sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcIlFcIiA9PT0gdCA/IChpID0gZS52YWx1ZXNbMF0sIG8gPSBlLnZhbHVlc1sxXSwgbiA9IGUudmFsdWVzWzJdLCBhID0gZS52YWx1ZXNbM10sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2ksIG8sIG4sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcInFcIiA9PT0gdCA/IChpID0gdSArIGUudmFsdWVzWzBdLCBvID0gaCArIGUudmFsdWVzWzFdLCBuID0gdSArIGUudmFsdWVzWzJdLCBhID0gaCArIGUudmFsdWVzWzNdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJRXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtpLCBvLCBuLCBhXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGEpIDogXCJBXCIgPT09IHQgPyAobiA9IGUudmFsdWVzWzVdLCBhID0gZS52YWx1ZXNbNl0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2UudmFsdWVzWzBdLCBlLnZhbHVlc1sxXSwgZS52YWx1ZXNbMl0sIGUudmFsdWVzWzNdLCBlLnZhbHVlc1s0XSwgbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwiYVwiID09PSB0ID8gKG4gPSB1ICsgZS52YWx1ZXNbNV0sIGEgPSBoICsgZS52YWx1ZXNbNl0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2UudmFsdWVzWzBdLCBlLnZhbHVlc1sxXSwgZS52YWx1ZXNbMl0sIGUudmFsdWVzWzNdLCBlLnZhbHVlc1s0XSwgbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwiSFwiID09PSB0ID8gKG4gPSBlLnZhbHVlc1swXSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbl1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4pIDogXCJoXCIgPT09IHQgPyAobiA9IHUgKyBlLnZhbHVlc1swXSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbl1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4pIDogXCJWXCIgPT09IHQgPyAoYSA9IGUudmFsdWVzWzBdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJWXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFthXVxyXG4gICAgICAgICAgICAgIH0pLCBoID0gYSkgOiBcInZcIiA9PT0gdCA/IChhID0gaCArIGUudmFsdWVzWzBdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJWXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFthXVxyXG4gICAgICAgICAgICAgIH0pLCBoID0gYSkgOiBcIlNcIiA9PT0gdCA/IChsID0gZS52YWx1ZXNbMF0sIHIgPSBlLnZhbHVlc1sxXSwgbiA9IGUudmFsdWVzWzJdLCBhID0gZS52YWx1ZXNbM10sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2wsIHIsIG4sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcInNcIiA9PT0gdCA/IChsID0gdSArIGUudmFsdWVzWzBdLCByID0gaCArIGUudmFsdWVzWzFdLCBuID0gdSArIGUudmFsdWVzWzJdLCBhID0gaCArIGUudmFsdWVzWzNdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtsLCByLCBuLCBhXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGEpIDogXCJUXCIgPT09IHQgPyAobiA9IGUudmFsdWVzWzBdLCBhID0gZS52YWx1ZXNbMV0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlRcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW24sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcInRcIiA9PT0gdCA/IChuID0gdSArIGUudmFsdWVzWzBdLCBhID0gaCArIGUudmFsdWVzWzFdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJUXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGEpIDogXCJaXCIgIT09IHQgJiYgXCJ6XCIgIT09IHQgfHwgKHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlpcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW11cclxuICAgICAgICAgICAgICB9KSwgdSA9IHAsIGggPSBjKVxyXG4gICAgICAgICAgICB9KSwgcykpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tmXSA9IHkodCksIHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzW2RdKSByZXR1cm4geSh0aGlzW2RdKTtcclxuICAgICAgICAgIHZhciBzLCB1LCBoLCBwLCBjLCBuID0gYSh0aGlzLmdldEF0dHJpYnV0ZShcImRcIikgfHwgXCJcIik7XHJcbiAgICAgICAgICByZXR1cm4gdGhpc1tkXSA9IHkobiksIG5cclxuICAgICAgICB9LCBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5zZXRQYXRoRGF0YSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIGwgPyB0aGlzLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIikgOiB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcImRcIik7XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgdCA9IFwiXCIsIG4gPSAwLCBhID0gZS5sZW5ndGg7IG4gPCBhOyBuICs9IDEpIHtcclxuICAgICAgICAgICAgICB2YXIgaSA9IGVbbl07XHJcbiAgICAgICAgICAgICAgMCA8IG4gJiYgKHQgKz0gXCIgXCIpLCB0ICs9IGkudHlwZSwgaS52YWx1ZXMgJiYgMCA8IGkudmFsdWVzLmxlbmd0aCAmJiAodCArPSBcIiBcIiArIGkudmFsdWVzLmpvaW4oXCIgXCIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZFwiLCB0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGUuU1ZHUmVjdEVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gdGhpcy54LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnkuYmFzZVZhbC52YWx1ZSxcclxuICAgICAgICAgICAgYSA9IHRoaXMud2lkdGguYmFzZVZhbC52YWx1ZSxcclxuICAgICAgICAgICAgaSA9IHRoaXMuaGVpZ2h0LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIG8gPSB0aGlzLmhhc0F0dHJpYnV0ZShcInJ4XCIpID8gdGhpcy5yeC5iYXNlVmFsLnZhbHVlIDogdGhpcy5yeS5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBsID0gdGhpcy5oYXNBdHRyaWJ1dGUoXCJyeVwiKSA/IHRoaXMucnkuYmFzZVZhbC52YWx1ZSA6IHRoaXMucnguYmFzZVZhbC52YWx1ZTtcclxuICAgICAgICAgIGEgLyAyIDwgbyAmJiAobyA9IGEgLyAyKSwgaSAvIDIgPCBsICYmIChsID0gaSAvIDIpO1xyXG4gICAgICAgICAgdmFyIHIgPSBbe1xyXG4gICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgdmFsdWVzOiBbdCArIG8sIG5dXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiSFwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFt0ICsgYSAtIG9dXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtvLCBsLCAwLCAwLCAxLCB0ICsgYSwgbiArIGxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiVlwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtuICsgaSAtIGxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtvLCBsLCAwLCAwLCAxLCB0ICsgYSAtIG8sIG4gKyBpXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkhcIixcclxuICAgICAgICAgICAgdmFsdWVzOiBbdCArIG9dXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtvLCBsLCAwLCAwLCAxLCB0LCBuICsgaSAtIGxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiVlwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtuICsgbF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW28sIGwsIDAsIDAsIDEsIHQgKyBvLCBuXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcIlpcIixcclxuICAgICAgICAgICAgdmFsdWVzOiBbXVxyXG4gICAgICAgICAgfV07XHJcbiAgICAgICAgICByZXR1cm4gciA9IHIuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkFcIiAhPT0gZS50eXBlIHx8IDAgIT09IGUudmFsdWVzWzBdICYmIDAgIT09IGUudmFsdWVzWzFdXHJcbiAgICAgICAgICB9KSwgZSAmJiAhMCA9PT0gZS5ub3JtYWxpemUgJiYgKHIgPSBTKHIpKSwgclxyXG4gICAgICAgIH0sIGUuU1ZHQ2lyY2xlRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGEgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSB0aGlzLmN4LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLmN5LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnIuYmFzZVZhbC52YWx1ZSxcclxuICAgICAgICAgICAgaSA9IFt7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbdCArIGEsIG5dXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBhLCAwLCAwLCAxLCB0LCBuICsgYV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGEsIDAsIDAsIDEsIHQgLSBhLCBuXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgYSwgMCwgMCwgMSwgdCwgbiAtIGFdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBhLCAwLCAwLCAxLCB0ICsgYSwgbl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiWlwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW11cclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICByZXR1cm4gZSAmJiAhMCA9PT0gZS5ub3JtYWxpemUgJiYgKGkgPSBTKGkpKSwgaVxyXG4gICAgICAgIH0sIGUuU1ZHRWxsaXBzZUVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gdGhpcy5jeC5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBuID0gdGhpcy5jeS5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBhID0gdGhpcy5yeC5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBpID0gdGhpcy5yeS5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBvID0gW3tcclxuICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFt0ICsgYSwgbl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGksIDAsIDAsIDEsIHQsIG4gKyBpXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgaSwgMCwgMCwgMSwgdCAtIGEsIG5dXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBpLCAwLCAwLCAxLCB0LCBuIC0gaV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGksIDAsIDAsIDEsIHQgKyBhLCBuXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJaXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbXVxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICAgIHJldHVybiBlICYmICEwID09PSBlLm5vcm1hbGl6ZSAmJiAobyA9IFMobykpLCBvXHJcbiAgICAgICAgfSwgZS5TVkdMaW5lRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW3RoaXMueDEuYmFzZVZhbC52YWx1ZSwgdGhpcy55MS5iYXNlVmFsLnZhbHVlXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgdmFsdWVzOiBbdGhpcy54Mi5iYXNlVmFsLnZhbHVlLCB0aGlzLnkyLmJhc2VWYWwudmFsdWVdXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sIGUuU1ZHUG9seWxpbmVFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IDA7IHQgPCB0aGlzLnBvaW50cy5udW1iZXJPZkl0ZW1zOyB0ICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnBvaW50cy5nZXRJdGVtKHQpO1xyXG4gICAgICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IDAgPT09IHQgPyBcIk1cIiA6IFwiTFwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW24ueCwgbi55XVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICB9LCBlLlNWR1BvbHlnb25FbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IDA7IHQgPCB0aGlzLnBvaW50cy5udW1iZXJPZkl0ZW1zOyB0ICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnBvaW50cy5nZXRJdGVtKHQpO1xyXG4gICAgICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IDAgPT09IHQgPyBcIk1cIiA6IFwiTFwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW24ueCwgbi55XVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGUucHVzaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiWlwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgICAgICB9KSwgZVxyXG4gICAgICAgIH1cclxuICAgICAgfSgpXHJcbiAgICB9LFxyXG4gICAgTyA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgIHZhciBhID0ge307XHJcblxyXG4gICAgICBmdW5jdGlvbiBpKGUpIHtcclxuICAgICAgICBpZiAoYVtlXSkgcmV0dXJuIGFbZV0uZXhwb3J0cztcclxuICAgICAgICB2YXIgdCA9IGFbZV0gPSB7XHJcbiAgICAgICAgICBpOiBlLFxyXG4gICAgICAgICAgbDogITEsXHJcbiAgICAgICAgICBleHBvcnRzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5bZV0uY2FsbCh0LmV4cG9ydHMsIHQsIHQuZXhwb3J0cywgaSksIHQubCA9ICEwLCB0LmV4cG9ydHNcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaS5tID0gbiwgaS5jID0gYSwgaS5kID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICBpLm8oZSwgdCkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcclxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXHJcbiAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcclxuICAgICAgICAgIGdldDogblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIGkuciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICAgICAgICB2YWx1ZTogITBcclxuICAgICAgICB9KVxyXG4gICAgICB9LCBpLm4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZS5kZWZhdWx0XHJcbiAgICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaS5kKHQsIFwiYVwiLCB0KSwgdFxyXG4gICAgICB9LCBpLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdClcclxuICAgICAgfSwgaS5wID0gXCJcIiwgaShpLnMgPSAwKVxyXG4gICAgfShbZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgbi5yKHQpO1xyXG4gICAgICB2YXIgYSA9IDUwMCxcclxuICAgICAgICBpID0gW10sXHJcbiAgICAgICAgbyA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZSwgMWUzIC8gNjApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHIgPSB2b2lkIDAsXHJcbiAgICAgICAgcyA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICBmdW5jdGlvbiB1KCkge1xyXG4gICAgICAgIHZhciB0ID0gdm9pZCAwLFxyXG4gICAgICAgICAgZSA9IHZvaWQgMDtcclxuICAgICAgICByICYmIChsLmNhbGwod2luZG93LCByKSwgciA9IG51bGwpLCBpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuZXZlbnQgJiYgKGUubGlzdGVuZXIoZS5ldmVudCksIGUuZXZlbnQgPSBudWxsLCB0ID0gITApXHJcbiAgICAgICAgfSksIHQgPyAocyA9IERhdGUubm93KCksIGUgPSAhMCkgOiBEYXRlLm5vdygpIC0gcyA8IGEgJiYgKGUgPSAhMCksIGUgJiYgKHIgPSBvLmNhbGwod2luZG93LCB1KSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gaChuKSB7XHJcbiAgICAgICAgdmFyIGEgPSAtMTtcclxuICAgICAgICByZXR1cm4gaS5zb21lKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZS5saXN0ZW5lciA9PT0gbiAmJiAoYSA9IHQsICEwKVxyXG4gICAgICAgIH0pLCBhXHJcbiAgICAgIH1cclxuICAgICAgdmFyIHAgPSB7XHJcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSB2b2lkIDA7XHJcbiAgICAgICAgICByZXR1cm4gLTEgPT09IGgoZSkgPyAoaS5wdXNoKHQgPSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyOiBlXHJcbiAgICAgICAgICB9KSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5ldmVudCA9IGUsIHIgfHwgdSgpXHJcbiAgICAgICAgICB9KSA6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0OyAtIDEgPCAodCA9IGgoZSkpICYmIChpLnNwbGljZSh0LCAxKSwgIWkubGVuZ3RoICYmIHIgJiYgKGwuY2FsbCh3aW5kb3csIHIpLCByID0gbnVsbCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0LmRlZmF1bHQgPSBwXHJcbiAgICB9XSkuZGVmYXVsdCxcclxuICAgIFkgPSB7XHJcbiAgICAgIGxpbmVfYWx0Q29sb3I6IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgbGluZV9jb2xvcjoge30sXHJcbiAgICAgIGxpbmVfY29sb3JUcmE6IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgbGluZV9zdHJva2VXaWR0aDoge30sXHJcbiAgICAgIHBsdWdfZW5hYmxlZDoge1xyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnX2VuYWJsZWRTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMCxcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgcGx1Z19wbHVnU0U6IHtcclxuICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgaW5pVmFsdWU6IG5lXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdfY29sb3JTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnX2NvbG9yVHJhU0U6IHtcclxuICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdfbWFya2VyV2lkdGhTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnX21hcmtlckhlaWdodFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbmVPdXRsaW5lX2VuYWJsZWQ6IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgbGluZU91dGxpbmVfY29sb3I6IHt9LFxyXG4gICAgICBsaW5lT3V0bGluZV9jb2xvclRyYToge1xyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lT3V0bGluZV9zdHJva2VXaWR0aDoge30sXHJcbiAgICAgIGxpbmVPdXRsaW5lX2luU3Ryb2tlV2lkdGg6IHt9LFxyXG4gICAgICBwbHVnT3V0bGluZV9lbmFibGVkU0U6IHtcclxuICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdPdXRsaW5lX3BsdWdTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMCxcclxuICAgICAgICBpbmlWYWx1ZTogbmVcclxuICAgICAgfSxcclxuICAgICAgcGx1Z091dGxpbmVfY29sb3JTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnT3V0bGluZV9jb2xvclRyYVNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwLFxyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbl9zb2NrZXRYWVNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwLFxyXG4gICAgICAgIGhhc1Byb3BzOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbl9wYXRoOiB7fSxcclxuICAgICAgcG9zaXRpb25fbGluZVN0cm9rZVdpZHRoOiB7fSxcclxuICAgICAgcG9zaXRpb25fc29ja2V0R3Jhdml0eVNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhdGhfcGF0aERhdGE6IHt9LFxyXG4gICAgICBwYXRoX2VkZ2U6IHtcclxuICAgICAgICBoYXNQcm9wczogITBcclxuICAgICAgfSxcclxuICAgICAgdmlld0JveF9iQm94OiB7XHJcbiAgICAgICAgaGFzUHJvcHM6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpZXdCb3hfcGx1Z0JDaXJjbGVTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lTWFza19lbmFibGVkOiB7XHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbmVNYXNrX291dGxpbmVNb2RlOiB7XHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbmVNYXNrX3g6IHt9LFxyXG4gICAgICBsaW5lTWFza195OiB7fSxcclxuICAgICAgbGluZU91dGxpbmVNYXNrX3g6IHt9LFxyXG4gICAgICBsaW5lT3V0bGluZU1hc2tfeToge30sXHJcbiAgICAgIG1hc2tCR1JlY3RfeDoge30sXHJcbiAgICAgIG1hc2tCR1JlY3RfeToge30sXHJcbiAgICAgIGNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMCxcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBjYXBzTWFza0FuY2hvcl9zdHJva2VXaWR0aFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcHNNYXNrTWFya2VyX2VuYWJsZWQ6IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwLFxyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBjYXBzTWFza01hcmtlcl9wbHVnU0U6IHtcclxuICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgaW5pVmFsdWU6IG5lXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcHNNYXNrTWFya2VyX21hcmtlcldpZHRoU0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfSxcclxuICAgICAgY2Fwc01hc2tNYXJrZXJfbWFya2VySGVpZ2h0U0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfSxcclxuICAgICAgY2Fwc19lbmFibGVkOiB7XHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIGF0dGFjaF9wbHVnU2lkZUxlblNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIGF0dGFjaF9wbHVnQmFja0xlblNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBYID0ge1xyXG4gICAgICBzaG93X29uOiB7fSxcclxuICAgICAgc2hvd19lZmZlY3Q6IHt9LFxyXG4gICAgICBzaG93X2FuaW1PcHRpb25zOiB7fSxcclxuICAgICAgc2hvd19hbmltSWQ6IHt9LFxyXG4gICAgICBzaG93X2luQW5pbToge31cclxuICAgIH0sXHJcbiAgICBxID0gXCJmYWRlXCIsXHJcbiAgICBRID0gW10sXHJcbiAgICBLID0ge30sXHJcbiAgICBKID0gMCxcclxuICAgICQgPSB7fSxcclxuICAgIGVlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gY2UodCwgbikge1xyXG4gICAgdmFyIGUsIGE7XHJcbiAgICByZXR1cm4gdHlwZW9mIHQgIT0gdHlwZW9mIG4gfHwgKGUgPSBrKHQpID8gXCJvYmpcIiA6IEFycmF5LmlzQXJyYXkodCkgPyBcImFycmF5XCIgOiBcIlwiKSAhPSAoayhuKSA/IFwib2JqXCIgOiBBcnJheS5pc0FycmF5KG4pID8gXCJhcnJheVwiIDogXCJcIikgfHwgKFwib2JqXCIgPT09IGUgPyBjZShhID0gT2JqZWN0LmtleXModCkuc29ydCgpLCBPYmplY3Qua2V5cyhuKS5zb3J0KCkpIHx8IGEuc29tZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICByZXR1cm4gY2UodFtlXSwgbltlXSlcclxuICAgIH0pIDogXCJhcnJheVwiID09PSBlID8gdC5sZW5ndGggIT09IG4ubGVuZ3RoIHx8IHQuc29tZShmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICByZXR1cm4gY2UoZSwgblt0XSlcclxuICAgIH0pIDogdCAhPT0gbilcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlKG4pIHtcclxuICAgIHJldHVybiBuID8gayhuKSA/IE9iamVjdC5rZXlzKG4pLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICByZXR1cm4gZVt0XSA9IGRlKG5bdF0pLCBlXHJcbiAgICB9LCB7fSkgOiBBcnJheS5pc0FycmF5KG4pID8gbi5tYXAoZGUpIDogbiA6IG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZlKGUpIHtcclxuICAgIHZhciB0LCBuLCBhLCBpID0gMSxcclxuICAgICAgbyA9IGUgPSAoZSArIFwiXCIpLnRyaW0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsKGUpIHtcclxuICAgICAgdmFyIHQgPSAxLFxyXG4gICAgICAgIG4gPSB1LmV4ZWMoZSk7XHJcbiAgICAgIHJldHVybiBuICYmICh0ID0gcGFyc2VGbG9hdChuWzFdKSwgblsyXSA/IHQgPSAwIDw9IHQgJiYgdCA8PSAxMDAgPyB0IC8gMTAwIDogMSA6ICh0IDwgMCB8fCAxIDwgdCkgJiYgKHQgPSAxKSksIHRcclxuICAgIH1cclxuICAgIHJldHVybiAodCA9IC9eKHJnYmF8aHNsYXxod2J8Z3JheXxkZXZpY2VcXC1jbXlrKVxccypcXCgoW1xcc1xcU10rKVxcKSQvaS5leGVjKGUpKSA/IChuID0gdFsxXS50b0xvd2VyQ2FzZSgpLCBhID0gdFsyXS50cmltKCkuc3BsaXQoL1xccyosXFxzKi8pLCBcInJnYmFcIiA9PT0gbiAmJiA0ID09PSBhLmxlbmd0aCA/IChpID0gbChhWzNdKSwgbyA9IFwicmdiKFwiICsgYS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIilcIikgOiBcImhzbGFcIiA9PT0gbiAmJiA0ID09PSBhLmxlbmd0aCA/IChpID0gbChhWzNdKSwgbyA9IFwiaHNsKFwiICsgYS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIilcIikgOiBcImh3YlwiID09PSBuICYmIDQgPT09IGEubGVuZ3RoID8gKGkgPSBsKGFbM10pLCBvID0gXCJod2IoXCIgKyBhLnNsaWNlKDAsIDMpLmpvaW4oXCIsIFwiKSArIFwiKVwiKSA6IFwiZ3JheVwiID09PSBuICYmIDIgPT09IGEubGVuZ3RoID8gKGkgPSBsKGFbMV0pLCBvID0gXCJncmF5KFwiICsgYVswXSArIFwiKVwiKSA6IFwiZGV2aWNlLWNteWtcIiA9PT0gbiAmJiA1IDw9IGEubGVuZ3RoICYmIChpID0gbChhWzRdKSwgbyA9IFwiZGV2aWNlLWNteWsoXCIgKyBhLnNsaWNlKDAsIDQpLmpvaW4oXCIsIFwiKSArIFwiKVwiKSkgOiAodCA9IC9eXFwjKD86KFtcXGRhLWZdezZ9KShbXFxkYS1mXXsyfSl8KFtcXGRhLWZdezN9KShbXFxkYS1mXSkpJC9pLmV4ZWMoZSkpID8gdFsxXSA/IChpID0gcGFyc2VJbnQodFsyXSwgMTYpIC8gMjU1LCBvID0gXCIjXCIgKyB0WzFdKSA6IChpID0gcGFyc2VJbnQodFs0XSArIHRbNF0sIDE2KSAvIDI1NSwgbyA9IFwiI1wiICsgdFszXSkgOiBcInRyYW5zcGFyZW50XCIgPT09IGUudG9Mb2NhbGVMb3dlckNhc2UoKSAmJiAoaSA9IDApLCBbaSwgb11cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHllKGUpIHtcclxuICAgIHJldHVybiAhKCFlIHx8IGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTZShlLCB0KSB7XHJcbiAgICB2YXIgbiwgYSwgaSwgbywgbCA9IHt9O1xyXG4gICAgaWYgKCEoaSA9IGUub3duZXJEb2N1bWVudCkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGdldCBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSwgbnVsbDtcclxuICAgIGlmIChlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGkpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9ESVNDT05ORUNURUQpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQSBkaXNjb25uZWN0ZWQgZWxlbWVudCB3YXMgcGFzc2VkLlwiKSwgbnVsbDtcclxuICAgIGZvciAoYSBpbiBuID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkgbFthXSA9IG5bYV07XHJcbiAgICBpZiAoIXQpIHtcclxuICAgICAgaWYgKCEobyA9IGkuZGVmYXVsdFZpZXcpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkNhbm5vdCBnZXQgd2luZG93IHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXCIpLCBudWxsO1xyXG4gICAgICBsLmxlZnQgKz0gby5wYWdlWE9mZnNldCwgbC5yaWdodCArPSBvLnBhZ2VYT2Zmc2V0LCBsLnRvcCArPSBvLnBhZ2VZT2Zmc2V0LCBsLmJvdHRvbSArPSBvLnBhZ2VZT2Zmc2V0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWUoZSwgdCkge1xyXG4gICAgdmFyIG4sIGEsIGkgPSBbXSxcclxuICAgICAgbyA9IGU7XHJcbiAgICBmb3IgKHQgPSB0IHx8IHdpbmRvdzs7KSB7XHJcbiAgICAgIGlmICghKG4gPSBvLm93bmVyRG9jdW1lbnQpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkNhbm5vdCBnZXQgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudC5cIiksIG51bGw7XHJcbiAgICAgIGlmICghKGEgPSBuLmRlZmF1bHRWaWV3KSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgZ2V0IHdpbmRvdyB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSwgbnVsbDtcclxuICAgICAgaWYgKGEgPT09IHQpIGJyZWFrO1xyXG4gICAgICBpZiAoIShvID0gYS5mcmFtZUVsZW1lbnQpKSByZXR1cm4gY29uc29sZS5lcnJvcihcImBiYXNlV2luZG93YCB3YXMgbm90IGZvdW5kLlwiKSwgbnVsbDtcclxuICAgICAgaS51bnNoaWZ0KG8pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2UoZSwgdCkge1xyXG4gICAgdmFyIG4sIGEsIG8gPSAwLFxyXG4gICAgICBsID0gMDtcclxuICAgIHJldHVybiAoYSA9IG1lKGUsIHQgPSB0IHx8IHdpbmRvdykpID8gYS5sZW5ndGggPyAoYS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHZhciBuLCBhLCBpID0gU2UoZSwgMCA8IHQpO1xyXG4gICAgICBvICs9IGkubGVmdCwgbCArPSBpLnRvcCwgYSA9IChuID0gZSkub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG4sIFwiXCIpLCBpID0ge1xyXG4gICAgICAgIGxlZnQ6IG4uY2xpZW50TGVmdCArIHBhcnNlRmxvYXQoYS5wYWRkaW5nTGVmdCksXHJcbiAgICAgICAgdG9wOiBuLmNsaWVudFRvcCArIHBhcnNlRmxvYXQoYS5wYWRkaW5nVG9wKVxyXG4gICAgICB9LCBvICs9IGkubGVmdCwgbCArPSBpLnRvcFxyXG4gICAgfSksIChuID0gU2UoZSwgITApKS5sZWZ0ICs9IG8sIG4ucmlnaHQgKz0gbywgbi50b3AgKz0gbCwgbi5ib3R0b20gKz0gbCwgbikgOiBTZShlKSA6IG51bGxcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9lKGUsIHQpIHtcclxuICAgIHZhciBuID0gZS54IC0gdC54LFxyXG4gICAgICBhID0gZS55IC0gdC55O1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChuICogbiArIGEgKiBhKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmUoZSwgdCwgbikge1xyXG4gICAgdmFyIGEgPSB0LnggLSBlLngsXHJcbiAgICAgIGkgPSB0LnkgLSBlLnk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBlLnggKyBhICogbixcclxuICAgICAgeTogZS55ICsgaSAqIG4sXHJcbiAgICAgIGFuZ2xlOiBNYXRoLmF0YW4yKGksIGEpIC8gKE1hdGguUEkgLyAxODApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFZShlLCB0LCBuKSB7XHJcbiAgICB2YXIgYSA9IE1hdGguYXRhbjIoZS55IC0gdC55LCB0LnggLSBlLngpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogdC54ICsgTWF0aC5jb3MoYSkgKiBuLFxyXG4gICAgICB5OiB0LnkgKyBNYXRoLnNpbihhKSAqIG4gKiAtMVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24geGUoZSwgdCwgbiwgYSwgaSkge1xyXG4gICAgdmFyIG8gPSBpICogaSxcclxuICAgICAgbCA9IG8gKiBpLFxyXG4gICAgICByID0gMSAtIGksXHJcbiAgICAgIHMgPSByICogcixcclxuICAgICAgdSA9IHMgKiByLFxyXG4gICAgICBoID0gdSAqIGUueCArIDMgKiBzICogaSAqIHQueCArIDMgKiByICogbyAqIG4ueCArIGwgKiBhLngsXHJcbiAgICAgIHAgPSB1ICogZS55ICsgMyAqIHMgKiBpICogdC55ICsgMyAqIHIgKiBvICogbi55ICsgbCAqIGEueSxcclxuICAgICAgYyA9IGUueCArIDIgKiBpICogKHQueCAtIGUueCkgKyBvICogKG4ueCAtIDIgKiB0LnggKyBlLngpLFxyXG4gICAgICBkID0gZS55ICsgMiAqIGkgKiAodC55IC0gZS55KSArIG8gKiAobi55IC0gMiAqIHQueSArIGUueSksXHJcbiAgICAgIGYgPSB0LnggKyAyICogaSAqIChuLnggLSB0LngpICsgbyAqIChhLnggLSAyICogbi54ICsgdC54KSxcclxuICAgICAgeSA9IHQueSArIDIgKiBpICogKG4ueSAtIHQueSkgKyBvICogKGEueSAtIDIgKiBuLnkgKyB0LnkpLFxyXG4gICAgICBTID0gciAqIGUueCArIGkgKiB0LngsXHJcbiAgICAgIG0gPSByICogZS55ICsgaSAqIHQueSxcclxuICAgICAgZyA9IHIgKiBuLnggKyBpICogYS54LFxyXG4gICAgICBfID0gciAqIG4ueSArIGkgKiBhLnksXHJcbiAgICAgIHYgPSA5MCAtIDE4MCAqIE1hdGguYXRhbjIoYyAtIGYsIGQgLSB5KSAvIE1hdGguUEk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBoLFxyXG4gICAgICB5OiBwLFxyXG4gICAgICBmcm9tUDI6IHtcclxuICAgICAgICB4OiBjLFxyXG4gICAgICAgIHk6IGRcclxuICAgICAgfSxcclxuICAgICAgdG9QMToge1xyXG4gICAgICAgIHg6IGYsXHJcbiAgICAgICAgeTogeVxyXG4gICAgICB9LFxyXG4gICAgICBmcm9tUDE6IHtcclxuICAgICAgICB4OiBTLFxyXG4gICAgICAgIHk6IG1cclxuICAgICAgfSxcclxuICAgICAgdG9QMjoge1xyXG4gICAgICAgIHg6IGcsXHJcbiAgICAgICAgeTogX1xyXG4gICAgICB9LFxyXG4gICAgICBhbmdsZTogdiArPSAxODAgPCB2ID8gLTE4MCA6IDE4MFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYmUobiwgYSwgaSwgbywgZSkge1xyXG4gICAgZnVuY3Rpb24gbChlLCB0LCBuLCBhLCBpKSB7XHJcbiAgICAgIHJldHVybiBlICogKGUgKiAoLTMgKiB0ICsgOSAqIG4gLSA5ICogYSArIDMgKiBpKSArIDYgKiB0IC0gMTIgKiBuICsgNiAqIGEpIC0gMyAqIHQgKyAzICogblxyXG4gICAgfVxyXG4gICAgdmFyIHIsIHMsIHUsIGgsIHAsIGMgPSBbLjI0OTEsIC4yNDkxLCAuMjMzNSwgLjIzMzUsIC4yMDMyLCAuMjAzMiwgLjE2MDEsIC4xNjAxLCAuMTA2OSwgLjEwNjksIC4wNDcyLCAuMDQ3Ml0sXHJcbiAgICAgIGQgPSAwO1xyXG4gICAgcmV0dXJuIHIgPSAoZSA9IG51bGwgPT0gZSB8fCAxIDwgZSA/IDEgOiBlIDwgMCA/IDAgOiBlKSAvIDIsIFstLjEyNTIsIC4xMjUyLCAtLjM2NzgsIC4zNjc4LCAtLjU4NzMsIC41ODczLCAtLjc2OTksIC43Njk5LCAtLjkwNDEsIC45MDQxLCAtLjk4MTYsIC45ODE2XS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHUgPSBsKHMgPSByICogZSArIHIsIG4ueCwgYS54LCBpLngsIG8ueCksIGggPSBsKHMsIG4ueSwgYS55LCBpLnksIG8ueSksIHAgPSB1ICogdSArIGggKiBoLCBkICs9IGNbdF0gKiBNYXRoLnNxcnQocClcclxuICAgIH0pLCByICogZFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24ga2UoZSwgdCwgbiwgYSwgaSkge1xyXG4gICAgZm9yICh2YXIgbywgbCA9IC41LCByID0gMSAtIGw7IG8gPSBiZShlLCB0LCBuLCBhLCByKSwgIShNYXRoLmFicyhvIC0gaSkgPD0gLjAxKTspIHIgKz0gKG8gPCBpID8gMSA6IC0xKSAqIChsIC89IDIpO1xyXG4gICAgcmV0dXJuIHJcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdlKGUsIG4pIHtcclxuICAgIHZhciBhO1xyXG4gICAgcmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdCA9IG4gPyBlLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0ge1xyXG4gICAgICAgICAgeDogZS54LFxyXG4gICAgICAgICAgeTogZS55XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbih0KSwgdFxyXG4gICAgICB9KSA6IGU7XHJcbiAgICAgIGEgfHwgKGEgPSBbe1xyXG4gICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgIHZhbHVlczogW3RbMF0ueCwgdFswXS55XVxyXG4gICAgICB9XSksIGEucHVzaCh0Lmxlbmd0aCA/IDIgPT09IHQubGVuZ3RoID8ge1xyXG4gICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgIHZhbHVlczogW3RbMV0ueCwgdFsxXS55XVxyXG4gICAgICB9IDoge1xyXG4gICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgIHZhbHVlczogW3RbMV0ueCwgdFsxXS55LCB0WzJdLngsIHRbMl0ueSwgdFszXS54LCB0WzNdLnldXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgdHlwZTogXCJaXCIsXHJcbiAgICAgICAgdmFsdWVzOiBbXVxyXG4gICAgICB9KVxyXG4gICAgfSksIGFcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE9lKGUpIHtcclxuICAgIHZhciBuID0gW10sXHJcbiAgICAgIGEgPSAwO1xyXG4gICAgcmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdCA9ICgyID09PSBlLmxlbmd0aCA/IF9lIDogYmUpLmFwcGx5KG51bGwsIGUpO1xyXG4gICAgICBuLnB1c2godCksIGEgKz0gdFxyXG4gICAgfSksIHtcclxuICAgICAgc2Vnc0xlbjogbixcclxuICAgICAgbGVuQWxsOiBhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBNZShlLCBhKSB7XHJcbiAgICByZXR1cm4gbnVsbCA9PSBlIHx8IG51bGwgPT0gYSB8fCBlLmxlbmd0aCAhPT0gYS5sZW5ndGggfHwgZS5zb21lKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHZhciBuID0gYVt0XTtcclxuICAgICAgcmV0dXJuIGUudHlwZSAhPT0gbi50eXBlIHx8IGUudmFsdWVzLnNvbWUoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICByZXR1cm4gZSAhPT0gbi52YWx1ZXNbdF1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBJZShlLCB0LCBuKSB7XHJcbiAgICBlLmV2ZW50c1t0XSA/IGUuZXZlbnRzW3RdLmluZGV4T2YobikgPCAwICYmIGUuZXZlbnRzW3RdLnB1c2gobikgOiBlLmV2ZW50c1t0XSA9IFtuXVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ2UoZSwgdCwgbikge1xyXG4gICAgdmFyIGE7XHJcbiAgICBlLmV2ZW50c1t0XSAmJiAtMSA8IChhID0gZS5ldmVudHNbdF0uaW5kZXhPZihuKSkgJiYgZS5ldmVudHNbdF0uc3BsaWNlKGEsIDEpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBMZShlKSB7XHJcbiAgICB0ICYmIGNsZWFyVGltZW91dCh0KSwgUS5wdXNoKGUpLCB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUoKVxyXG4gICAgICB9KSwgUSA9IFtdXHJcbiAgICB9LCAwKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQWUoZSwgdCkge1xyXG4gICAgZS5yZWZsb3dUYXJnZXRzLmluZGV4T2YodCkgPCAwICYmIGUucmVmbG93VGFyZ2V0cy5wdXNoKHQpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBWZShlKSB7XHJcbiAgICBlLnJlZmxvd1RhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgbjtcclxuICAgICAgbiA9IGUsIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlID0gbi5wYXJlbnROb2RlLFxyXG4gICAgICAgICAgdCA9IG4ubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgZS5pbnNlcnRCZWZvcmUoZS5yZW1vdmVDaGlsZChuKSwgdClcclxuICAgICAgfSwgMClcclxuICAgIH0pLCBlLnJlZmxvd1RhcmdldHMgPSBbXVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUGUoZSwgdCwgbiwgYSwgaSwgbywgbCkge1xyXG4gICAgdmFyIHIsIHMsIHU7XHJcbiAgICBcImF1dG8tc3RhcnQtcmV2ZXJzZVwiID09PSBuID8gKFwiYm9vbGVhblwiICE9IHR5cGVvZiBoICYmICh0LnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBcImF1dG8tc3RhcnQtcmV2ZXJzZVwiKSwgaCA9IHQub3JpZW50VHlwZS5iYXNlVmFsID09PSBTVkdNYXJrZXJFbGVtZW50LlNWR19NQVJLRVJfT1JJRU5UX1VOS05PV04pLCBoID8gdC5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgbikgOiAoKHIgPSBpLmNyZWF0ZVNWR1RyYW5zZm9ybSgpKS5zZXRSb3RhdGUoMTgwLCAwLCAwKSwgby50cmFuc2Zvcm0uYmFzZVZhbC5hcHBlbmRJdGVtKHIpLCB0LnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBcImF1dG9cIiksIHUgPSAhMCkpIDogKHQuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIG4pLCAhMSA9PT0gaCAmJiBvLnRyYW5zZm9ybS5iYXNlVmFsLmNsZWFyKCkpLCBzID0gdC52aWV3Qm94LmJhc2VWYWwsIHUgPyAocy54ID0gLWEucmlnaHQsIHMueSA9IC1hLmJvdHRvbSkgOiAocy54ID0gYS5sZWZ0LCBzLnkgPSBhLnRvcCksIHMud2lkdGggPSBhLndpZHRoLCBzLmhlaWdodCA9IGEuaGVpZ2h0LCBsZSAmJiBBZShlLCBsKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmUoZSwgdCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcDogZSA/IFwibWFya2VyRW5kXCIgOiBcIm1hcmtlclN0YXJ0XCIsXHJcbiAgICAgIG9yaWVudDogdCA/IHQubm9Sb3RhdGUgPyBcIjBcIiA6IGUgPyBcImF1dG9cIiA6IFwiYXV0by1zdGFydC1yZXZlcnNlXCIgOiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBUZShuLCBhKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0ID0gYVtlXTtcclxuICAgICAgbltlXSA9IG51bGwgIT0gdC5pbmlWYWx1ZSA/IHQuaGFzU0UgPyBbdC5pbmlWYWx1ZSwgdC5pbmlWYWx1ZV0gOiB0LmluaVZhbHVlIDogdC5oYXNTRSA/IHQuaGFzUHJvcHMgPyBbe30sIHt9XSA6IFtdIDogdC5oYXNQcm9wcyA/IHt9IDogbnVsbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFdlKHQsIGUsIG4sIGEsIGkpIHtcclxuICAgIHJldHVybiBhICE9PSBlW25dICYmIChlW25dID0gYSwgaSAmJiBpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZSh0LCBhLCBuKVxyXG4gICAgfSksICEwKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQmUoZSkge1xyXG4gICAgZnVuY3Rpb24gdChlLCB0KSB7XHJcbiAgICAgIHJldHVybiBlICsgcGFyc2VGbG9hdCh0KVxyXG4gICAgfVxyXG4gICAgdmFyIG4gPSBlLmRvY3VtZW50LFxyXG4gICAgICBhID0gZS5nZXRDb21wdXRlZFN0eWxlKG4uZG9jdW1lbnRFbGVtZW50LCBcIlwiKSxcclxuICAgICAgaSA9IGUuZ2V0Q29tcHV0ZWRTdHlsZShuLmJvZHksIFwiXCIpLFxyXG4gICAgICBvID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIFwic3RhdGljXCIgIT09IGkucG9zaXRpb24gPyAoby54IC09IFthLm1hcmdpbkxlZnQsIGEuYm9yZGVyTGVmdFdpZHRoLCBhLnBhZGRpbmdMZWZ0LCBpLm1hcmdpbkxlZnQsIGkuYm9yZGVyTGVmdFdpZHRoXS5yZWR1Y2UodCwgMCksIG8ueSAtPSBbYS5tYXJnaW5Ub3AsIGEuYm9yZGVyVG9wV2lkdGgsIGEucGFkZGluZ1RvcCwgaS5tYXJnaW5Ub3AsIGkuYm9yZGVyVG9wV2lkdGhdLnJlZHVjZSh0LCAwKSkgOiBcInN0YXRpY1wiICE9PSBhLnBvc2l0aW9uICYmIChvLnggLT0gW2EubWFyZ2luTGVmdCwgYS5ib3JkZXJMZWZ0V2lkdGhdLnJlZHVjZSh0LCAwKSwgby55IC09IFthLm1hcmdpblRvcCwgYS5ib3JkZXJUb3BXaWR0aF0ucmVkdWNlKHQsIDApKSwgb1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUmUoZSkge1xyXG4gICAgdmFyIHQsIG4gPSBlLmRvY3VtZW50O1xyXG4gICAgbi5nZXRFbGVtZW50QnlJZChyKSB8fCAodCA9IChuZXcgZS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhzLCBcImltYWdlL3N2Zyt4bWxcIiksIG4uYm9keS5hcHBlbmRDaGlsZCh0LmRvY3VtZW50RWxlbWVudCksIGQoZSkpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBGZSh1KSB7XHJcbiAgICB2YXIgXywgZiwgdiwgZSwgbiwgYSwgaSwgeSwgcywgaCwgcCwgdCwgbywgbCwgciwgYywgZCwgUywgbSwgZyA9IHUub3B0aW9ucyxcclxuICAgICAgRSA9IHUuY3VyU3RhdHMsXHJcbiAgICAgIHggPSB1LmFwbFN0YXRzLFxyXG4gICAgICBiID0gRS5wb3NpdGlvbl9zb2NrZXRYWVNFLFxyXG4gICAgICBrID0gITE7XHJcblxyXG4gICAgZnVuY3Rpb24gdyhlLCB0KSB7XHJcbiAgICAgIHZhciBuID0gdCA9PT0gTSA/IHtcclxuICAgICAgICB4OiBlLmxlZnQgKyBlLndpZHRoIC8gMixcclxuICAgICAgICB5OiBlLnRvcFxyXG4gICAgICB9IDogdCA9PT0gSSA/IHtcclxuICAgICAgICB4OiBlLnJpZ2h0LFxyXG4gICAgICAgIHk6IGUudG9wICsgZS5oZWlnaHQgLyAyXHJcbiAgICAgIH0gOiB0ID09PSBDID8ge1xyXG4gICAgICAgIHg6IGUubGVmdCArIGUud2lkdGggLyAyLFxyXG4gICAgICAgIHk6IGUuYm90dG9tXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgeDogZS5sZWZ0LFxyXG4gICAgICAgIHk6IGUudG9wICsgZS5oZWlnaHQgLyAyXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBuLnNvY2tldElkID0gdCwgblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE8oZSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IGUueCxcclxuICAgICAgICB5OiBlLnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKEUucG9zaXRpb25fcGF0aCA9IGcucGF0aCwgRS5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGggPSBFLmxpbmVfc3Ryb2tlV2lkdGgsIEUucG9zaXRpb25fc29ja2V0R3Jhdml0eVNFID0gXyA9IGRlKGcuc29ja2V0R3Jhdml0eVNFKSwgZiA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCwgbiwgYSwgaSA9IGcuYW5jaG9yU0VbZV0sXHJcbiAgICAgICAgICBvID0gdS5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVtlXSxcclxuICAgICAgICAgIGwgPSAhMSAhPT0gbyA/ICRbaS5faWRdIDogbnVsbCxcclxuICAgICAgICAgIHIgPSAhMSAhPT0gbyAmJiBsLmNvbmYuZ2V0U3Ryb2tlV2lkdGggPyBsLmNvbmYuZ2V0U3Ryb2tlV2lkdGgobCwgdSkgOiAwLFxyXG4gICAgICAgICAgcyA9ICExICE9PSBvICYmIGwuY29uZi5nZXRCQm94TmVzdCA/IGwuY29uZi5nZXRCQm94TmVzdChsLCB1LCByKSA6IGdlKGksIHUuYmFzZVdpbmRvdyk7XHJcbiAgICAgICAgcmV0dXJuIEUuY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRVtlXSA9ICExICE9PSBvICYmIGwuY29uZi5nZXRQYXRoRGF0YSA/IGwuY29uZi5nZXRQYXRoRGF0YShsLCB1LCByKSA6IChuID0gbnVsbCAhPSAodCA9IHMpLnJpZ2h0ID8gdC5yaWdodCA6IHQubGVmdCArIHQud2lkdGgsIGEgPSBudWxsICE9IHQuYm90dG9tID8gdC5ib3R0b20gOiB0LnRvcCArIHQuaGVpZ2h0LCBbe1xyXG4gICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICB2YWx1ZXM6IFt0LmxlZnQsIHQudG9wXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgdmFsdWVzOiBbbiwgdC50b3BdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgdmFsdWVzOiBbdC5sZWZ0LCBhXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHR5cGU6IFwiWlwiLFxyXG4gICAgICAgICAgdmFsdWVzOiBbXVxyXG4gICAgICAgIH1dKSwgRS5jYXBzTWFza0FuY2hvcl9zdHJva2VXaWR0aFNFW2VdID0gciwgc1xyXG4gICAgICB9KSwgaSA9IC0xLCBnLnNvY2tldFNFWzBdICYmIGcuc29ja2V0U0VbMV0gPyAoYlswXSA9IHcoZlswXSwgZy5zb2NrZXRTRVswXSksIGJbMV0gPSB3KGZbMV0sIGcuc29ja2V0U0VbMV0pKSA6IChnLnNvY2tldFNFWzBdIHx8IGcuc29ja2V0U0VbMV0gPyAoZy5zb2NrZXRTRVswXSA/IChuID0gMCwgYSA9IDEpIDogKG4gPSAxLCBhID0gMCksIGJbbl0gPSB3KGZbbl0sIGcuc29ja2V0U0Vbbl0pLCAoZSA9IFcubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHcoZlthXSwgZSlcclxuICAgICAgfSkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCA9IF9lKGUsIGJbbl0pO1xyXG4gICAgICAgICh0IDwgaSB8fCAtMSA9PT0gaSkgJiYgKGJbYV0gPSBlLCBpID0gdClcclxuICAgICAgfSkpIDogKGUgPSBXLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB3KGZbMV0sIGUpXHJcbiAgICAgIH0pLCBXLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB3KGZbMF0sIGUpXHJcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gX2UobiwgZSk7XHJcbiAgICAgICAgICAodCA8IGkgfHwgLTEgPT09IGkpICYmIChiWzBdID0gbiwgYlsxXSA9IGUsIGkgPSB0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pKSwgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCwgbjtcclxuICAgICAgICBnLnNvY2tldFNFW2VdIHx8IChmW2VdLndpZHRoIHx8IGZbZV0uaGVpZ2h0ID8gZltlXS53aWR0aCB8fCBiW2VdLnNvY2tldElkICE9PSBMICYmIGJbZV0uc29ja2V0SWQgIT09IEkgPyBmW2VdLmhlaWdodCB8fCBiW2VdLnNvY2tldElkICE9PSBNICYmIGJbZV0uc29ja2V0SWQgIT09IEMgfHwgKGJbZV0uc29ja2V0SWQgPSAwIDw9IGJbZSA/IDAgOiAxXS55IC0gZltlXS50b3AgPyBDIDogTSkgOiBiW2VdLnNvY2tldElkID0gMCA8PSBiW2UgPyAwIDogMV0ueCAtIGZbZV0ubGVmdCA/IEkgOiBMIDogKHQgPSBiW2UgPyAwIDogMV0ueCAtIGZbZV0ubGVmdCwgbiA9IGJbZSA/IDAgOiAxXS55IC0gZltlXS50b3AsIGJbZV0uc29ja2V0SWQgPSBNYXRoLmFicyh0KSA+PSBNYXRoLmFicyhuKSA/IDAgPD0gdCA/IEkgOiBMIDogMCA8PSBuID8gQyA6IE0pKVxyXG4gICAgICB9KSksIEUucG9zaXRpb25fcGF0aCAhPT0geC5wb3NpdGlvbl9wYXRoIHx8IEUucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoICE9PSB4LnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCB8fCBbMCwgMV0uc29tZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiBFLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFW2VdICE9PSB4LnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFW2VdIHx8IChpID0gYltlXSwgbyA9IHgucG9zaXRpb25fc29ja2V0WFlTRVtlXSwgaS54ICE9PSBvLnggfHwgaS55ICE9PSBvLnkgfHwgaS5zb2NrZXRJZCAhPT0gby5zb2NrZXRJZCkgfHwgKHQgPSBfW2VdLCBuID0geC5wb3NpdGlvbl9zb2NrZXRHcmF2aXR5U0VbZV0sIChhID0gbnVsbCA9PSB0ID8gXCJhdXRvXCIgOiBBcnJheS5pc0FycmF5KHQpID8gXCJhcnJheVwiIDogXCJudW1iZXJcIikgIT09IChudWxsID09IG4gPyBcImF1dG9cIiA6IEFycmF5LmlzQXJyYXkobikgPyBcImFycmF5XCIgOiBcIm51bWJlclwiKSB8fCAoXCJhcnJheVwiID09PSBhID8gdFswXSAhPT0gblswXSB8fCB0WzFdICE9PSBuWzFdIDogdCAhPT0gbikpO1xyXG4gICAgICAgIHZhciB0LCBuLCBhLCBpLCBvXHJcbiAgICAgIH0pKSB7XHJcbiAgICAgIHN3aXRjaCAodS5wYXRoTGlzdC5iYXNlVmFsID0gdiA9IFtdLCB1LnBhdGhMaXN0LmFuaW1WYWwgPSBudWxsLCBFLnBvc2l0aW9uX3BhdGgpIHtcclxuICAgICAgY2FzZSBBOlxyXG4gICAgICAgIHYucHVzaChbTyhiWzBdKSwgTyhiWzFdKV0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFY6XHJcbiAgICAgICAgdCA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIF9bMF0gJiYgMCA8IF9bMF0gfHwgXCJudW1iZXJcIiA9PSB0eXBlb2YgX1sxXSAmJiAwIDwgX1sxXSwgbyA9IFogKiAodCA/IC0xIDogMSksIGwgPSBNYXRoLmF0YW4yKGJbMV0ueSAtIGJbMF0ueSwgYlsxXS54IC0gYlswXS54KSwgciA9IC1sICsgbywgYyA9IE1hdGguUEkgLSBsIC0gbywgZCA9IF9lKGJbMF0sIGJbMV0pIC8gTWF0aC5zcXJ0KDIpICogVSwgUyA9IHtcclxuICAgICAgICAgIHg6IGJbMF0ueCArIE1hdGguY29zKHIpICogZCxcclxuICAgICAgICAgIHk6IGJbMF0ueSArIE1hdGguc2luKHIpICogZCAqIC0xXHJcbiAgICAgICAgfSwgbSA9IHtcclxuICAgICAgICAgIHg6IGJbMV0ueCArIE1hdGguY29zKGMpICogZCxcclxuICAgICAgICAgIHk6IGJbMV0ueSArIE1hdGguc2luKGMpICogZCAqIC0xXHJcbiAgICAgICAgfSwgdi5wdXNoKFtPKGJbMF0pLCBTLCBtLCBPKGJbMV0pXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUDpcclxuICAgICAgY2FzZSBOOlxyXG4gICAgICAgIHMgPSBbX1swXSwgRS5wb3NpdGlvbl9wYXRoID09PSBOID8gMCA6IF9bMV1dLCBoID0gW10sIHAgPSBbXSwgYi5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiwgYSwgaSwgbywgbCwgciA9IHNbdF07XHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHIpID8gbiA9IHtcclxuICAgICAgICAgICAgeDogclswXSxcclxuICAgICAgICAgICAgeTogclsxXVxyXG4gICAgICAgICAgfSA6IFwibnVtYmVyXCIgPT0gdHlwZW9mIHIgPyBuID0gZS5zb2NrZXRJZCA9PT0gTSA/IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogLXJcclxuICAgICAgICAgIH0gOiBlLnNvY2tldElkID09PSBJID8ge1xyXG4gICAgICAgICAgICB4OiByLFxyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICB9IDogZS5zb2NrZXRJZCA9PT0gQyA/IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogclxyXG4gICAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgeDogLXIsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgIH0gOiAoYSA9IGJbdCA/IDAgOiAxXSwgbyA9IDAgPCAoaSA9IEUucG9zaXRpb25fcGx1Z092ZXJoZWFkU0VbdF0pID8gRyArIChEIDwgaSA/IChpIC0gRCkgKiB6IDogMCkgOiBCICsgKEUucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoID4gUiA/IChFLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCAtIFIpICogRiA6IDApLCBlLnNvY2tldElkID09PSBNID8gKChsID0gKGUueSAtIGEueSkgLyAyKSA8IG8gJiYgKGwgPSBvKSwgbiA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogLWxcclxuICAgICAgICAgIH0pIDogZS5zb2NrZXRJZCA9PT0gSSA/ICgobCA9IChhLnggLSBlLngpIC8gMikgPCBvICYmIChsID0gbyksIG4gPSB7XHJcbiAgICAgICAgICAgIHg6IGwsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgIH0pIDogZS5zb2NrZXRJZCA9PT0gQyA/ICgobCA9IChhLnkgLSBlLnkpIC8gMikgPCBvICYmIChsID0gbyksIG4gPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IGxcclxuICAgICAgICAgIH0pIDogKChsID0gKGUueCAtIGEueCkgLyAyKSA8IG8gJiYgKGwgPSBvKSwgbiA9IHtcclxuICAgICAgICAgICAgeDogLWwsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgIH0pKSwgaFt0XSA9IGUueCArIG4ueCwgcFt0XSA9IGUueSArIG4ueVxyXG4gICAgICAgIH0pLCB2LnB1c2goW08oYlswXSksIHtcclxuICAgICAgICAgIHg6IGhbMF0sXHJcbiAgICAgICAgICB5OiBwWzBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgeDogaFsxXSxcclxuICAgICAgICAgIHk6IHBbMV1cclxuICAgICAgICB9LCBPKGJbMV0pXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVDpcclxuICAgICAgICAhIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBhLCBvID0gMSxcclxuICAgICAgICAgICAgbCA9IDIsXHJcbiAgICAgICAgICAgIHIgPSAzLFxyXG4gICAgICAgICAgICBzID0gNCxcclxuICAgICAgICAgICAgdSA9IFtcclxuICAgICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgICBbXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBoID0gW107XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gcChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlID09PSBvID8gciA6IGUgPT09IGwgPyBzIDogZSA9PT0gciA/IG8gOiBsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlID09PSBsIHx8IGUgPT09IHMgPyBcInhcIiA6IFwieVwiXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gZChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHZhciBhID0ge1xyXG4gICAgICAgICAgICAgIHg6IGUueCxcclxuICAgICAgICAgICAgICB5OiBlLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICBpZiAobiA9PT0gcChlLmRpcklkKSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkaXJJZDogXCIgKyBuKTtcclxuICAgICAgICAgICAgICBhLmRpcklkID0gblxyXG4gICAgICAgICAgICB9IGVsc2UgYS5kaXJJZCA9IGUuZGlySWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmRpcklkID09PSBvID8gYS55IC09IHQgOiBhLmRpcklkID09PSBsID8gYS54ICs9IHQgOiBhLmRpcklkID09PSByID8gYS55ICs9IHQgOiBhLnggLT0gdCwgYVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5kaXJJZCA9PT0gbyA/IGUueSA8PSB0LnkgOiB0LmRpcklkID09PSBsID8gZS54ID49IHQueCA6IHQuZGlySWQgPT09IHIgPyBlLnkgPj0gdC55IDogZS54IDw9IHQueFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIHkoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5kaXJJZCA9PT0gbyB8fCB0LmRpcklkID09PSByID8gZS54ID09PSB0LnggOiBlLnkgPT09IHQueVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIFMoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZVswXSA/IHtcclxuICAgICAgICAgICAgICBjb250YWluOiAwLFxyXG4gICAgICAgICAgICAgIG5vdENvbnRhaW46IDFcclxuICAgICAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgICBjb250YWluOiAxLFxyXG4gICAgICAgICAgICAgIG5vdENvbnRhaW46IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIG0oZSwgdCwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnModFtuXSAtIGVbbl0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gZyhlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInhcIiA9PT0gbiA/IGUueCA8IHQueCA/IGwgOiBzIDogZS55IDwgdC55ID8gciA6IG9cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSwgdCwgYSwgaSwgbiA9IFtmKGhbMV0sIGhbMF0pLCBmKGhbMF0sIGhbMV0pXSxcclxuICAgICAgICAgICAgICBvID0gW2MoaFswXS5kaXJJZCksIGMoaFsxXS5kaXJJZCldO1xyXG4gICAgICAgICAgICBpZiAob1swXSA9PT0gb1sxXSkge1xyXG4gICAgICAgICAgICAgIGlmIChuWzBdICYmIG5bMV0pIHJldHVybiB5KGhbMV0sIGhbMF0pIHx8IChoWzBdW29bMF1dID09PSBoWzFdW29bMV1dID8gKHVbMF0ucHVzaChoWzBdKSwgdVsxXS5wdXNoKGhbMV0pKSA6IChlID0gaFswXVtvWzBdXSArIChoWzFdW29bMV1dIC0gaFswXVtvWzBdXSkgLyAyLCB1WzBdLnB1c2goZChoWzBdLCBNYXRoLmFicyhlIC0gaFswXVtvWzBdXSkpKSwgdVsxXS5wdXNoKGQoaFsxXSwgTWF0aC5hYnMoZSAtIGhbMV1bb1sxXV0pKSkpKSwgITE7XHJcbiAgICAgICAgICAgICAgblswXSAhPT0gblsxXSA/ICh0ID0gUyhuKSwgKGEgPSBtKGhbdC5ub3RDb250YWluXSwgaFt0LmNvbnRhaW5dLCBvW3Qubm90Q29udGFpbl0pKSA8IEggJiYgKGhbdC5ub3RDb250YWluXSA9IGQoaFt0Lm5vdENvbnRhaW5dLCBIIC0gYSkpLCB1W3Qubm90Q29udGFpbl0ucHVzaChoW3Qubm90Q29udGFpbl0pLCBoW3Qubm90Q29udGFpbl0gPSBkKGhbdC5ub3RDb250YWluXSwgSCwgeShoW3QuY29udGFpbl0sIGhbdC5ub3RDb250YWluXSkgPyBcInhcIiA9PT0gb1t0Lm5vdENvbnRhaW5dID8gciA6IGwgOiBnKGhbdC5ub3RDb250YWluXSwgaFt0LmNvbnRhaW5dLCBcInhcIiA9PT0gb1t0Lm5vdENvbnRhaW5dID8gXCJ5XCIgOiBcInhcIikpKSA6IChhID0gbShoWzBdLCBoWzFdLCBcInhcIiA9PT0gb1swXSA/IFwieVwiIDogXCJ4XCIpLCB1LmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gMCA9PT0gdCA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgZS5wdXNoKGhbdF0pLCBoW3RdID0gZChoW3RdLCBILCAyICogSCA8PSBhID8gZyhoW3RdLCBoW25dLCBcInhcIiA9PT0gb1t0XSA/IFwieVwiIDogXCJ4XCIpIDogXCJ4XCIgPT09IG9bdF0gPyByIDogbClcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoblswXSAmJiBuWzFdKSByZXR1cm4geShoWzFdLCBoWzBdKSA/IHVbMV0ucHVzaChoWzFdKSA6IHkoaFswXSwgaFsxXSkgPyB1WzBdLnB1c2goaFswXSkgOiB1WzBdLnB1c2goXCJ4XCIgPT09IG9bMF0gPyB7XHJcbiAgICAgICAgICAgICAgICB4OiBoWzFdLngsXHJcbiAgICAgICAgICAgICAgICB5OiBoWzBdLnlcclxuICAgICAgICAgICAgICB9IDoge1xyXG4gICAgICAgICAgICAgICAgeDogaFswXS54LFxyXG4gICAgICAgICAgICAgICAgeTogaFsxXS55XHJcbiAgICAgICAgICAgICAgfSksICExO1xyXG4gICAgICAgICAgICAgIG5bMF0gIT09IG5bMV0gPyAodCA9IFMobiksIHVbdC5ub3RDb250YWluXS5wdXNoKGhbdC5ub3RDb250YWluXSksIGhbdC5ub3RDb250YWluXSA9IGQoaFt0Lm5vdENvbnRhaW5dLCBILCBtKGhbdC5ub3RDb250YWluXSwgaFt0LmNvbnRhaW5dLCBvW3QuY29udGFpbl0pID49IEggPyBnKGhbdC5ub3RDb250YWluXSwgaFt0LmNvbnRhaW5dLCBvW3QuY29udGFpbl0pIDogaFt0LmNvbnRhaW5dLmRpcklkKSkgOiAoaSA9IFt7XHJcbiAgICAgICAgICAgICAgICB4OiBoWzBdLngsXHJcbiAgICAgICAgICAgICAgICB5OiBoWzBdLnlcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBoWzFdLngsXHJcbiAgICAgICAgICAgICAgICB5OiBoWzFdLnlcclxuICAgICAgICAgICAgICB9XSwgdS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IDAgPT09IHQgPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgYSA9IG0oaVt0XSwgaVtuXSwgb1t0XSk7XHJcbiAgICAgICAgICAgICAgICBhIDwgSCAmJiAoaFt0XSA9IGQoaFt0XSwgSCAtIGEpKSwgZS5wdXNoKGhbdF0pLCBoW3RdID0gZChoW3RdLCBILCBnKGhbdF0sIGhbbl0sIG9bbl0pKVxyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAhMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yIChiLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICB2YXIgbiwgYSA9IE8oZSksXHJcbiAgICAgICAgICAgICAgICBpID0gX1t0XTtcclxuICAgICAgICAgICAgICBuID0gQXJyYXkuaXNBcnJheShpKSA/IGlbMF0gPCAwID8gW3MsIC1pWzBdXSA6IDAgPCBpWzBdID8gW2wsIGlbMF1dIDogaVsxXSA8IDAgPyBbbywgLWlbMV1dIDogMCA8IGlbMV0gPyBbciwgaVsxXV0gOiBbZS5zb2NrZXRJZCwgMF0gOiBcIm51bWJlclwiICE9IHR5cGVvZiBpID8gW2Uuc29ja2V0SWQsIEhdIDogMCA8PSBpID8gW2Uuc29ja2V0SWQsIGldIDogW3AoZS5zb2NrZXRJZCksIC1pXSwgYS5kaXJJZCA9IG5bMF0sIGkgPSBuWzFdLCB1W3RdLnB1c2goYSksIGhbdF0gPSBkKGEsIGkpXHJcbiAgICAgICAgICAgIH0pOyBlKCk7KTtcclxuICAgICAgICAgIHVbMV0ucmV2ZXJzZSgpLCB1WzBdLmNvbmNhdCh1WzFdKS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuID0ge1xyXG4gICAgICAgICAgICAgIHg6IGUueCxcclxuICAgICAgICAgICAgICB5OiBlLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgMCA8IHQgJiYgdi5wdXNoKFthLCBuXSksIGEgPSBuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0oKVxyXG4gICAgICB9XHJcbiAgICAgIHkgPSBbXSwgRS5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdmFyIG4sIGEsIGksIG8sIGwsIHIsIHMsIHUsIGgsIHAsIGMsIGQgPSAhdDtcclxuICAgICAgICAwIDwgZSA/IDIgPT09IChuID0gdlthID0gZCA/IDAgOiB2Lmxlbmd0aCAtIDFdKS5sZW5ndGggPyAoeVthXSA9IHlbYV0gfHwgX2UuYXBwbHkobnVsbCwgbiksIHlbYV0gPiBqICYmICh5W2FdIC0gZSA8IGogJiYgKGUgPSB5W2FdIC0gaiksIGkgPSB2ZShuWzBdLCBuWzFdLCAoZCA/IGUgOiB5W2FdIC0gZSkgLyB5W2FdKSwgdlthXSA9IGQgPyBbaSwgblsxXV0gOiBbblswXSwgaV0sIHlbYV0gLT0gZSkpIDogKHlbYV0gPSB5W2FdIHx8IGJlLmFwcGx5KG51bGwsIG4pLCB5W2FdID4gaiAmJiAoeVthXSAtIGUgPCBqICYmIChlID0geVthXSAtIGopLCBpID0geGUoblswXSwgblsxXSwgblsyXSwgblszXSwga2UoblswXSwgblsxXSwgblsyXSwgblszXSwgZCA/IGUgOiB5W2FdIC0gZSkpLCBkID8gKG8gPSBuWzBdLCBsID0gaS50b1AxKSA6IChvID0gblszXSwgbCA9IGkuZnJvbVAyKSwgciA9IE1hdGguYXRhbjIoby55IC0gaS55LCBpLnggLSBvLngpLCBzID0gX2UoaSwgbCksIGkueCA9IG8ueCArIE1hdGguY29zKHIpICogZSwgaS55ID0gby55ICsgTWF0aC5zaW4ocikgKiBlICogLTEsIGwueCA9IGkueCArIE1hdGguY29zKHIpICogcywgbC55ID0gaS55ICsgTWF0aC5zaW4ocikgKiBzICogLTEsIHZbYV0gPSBkID8gW2ksIGkudG9QMSwgaS50b1AyLCBuWzNdXSA6IFtuWzBdLCBpLmZyb21QMSwgaS5mcm9tUDIsIGldLCB5W2FdID0gbnVsbCkpIDogZSA8IDAgJiYgKG4gPSB2W2EgPSBkID8gMCA6IHYubGVuZ3RoIC0gMV0sIHUgPSBiW3RdLnNvY2tldElkLCBoID0gdSA9PT0gTCB8fCB1ID09PSBJID8gXCJ4XCIgOiBcInlcIiwgZSA8IChjID0gLWZbdF1bXCJ4XCIgPT09IGggPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSkgJiYgKGUgPSBjKSwgcCA9IGUgKiAodSA9PT0gTCB8fCB1ID09PSBNID8gLTEgOiAxKSwgMiA9PT0gbi5sZW5ndGggPyBuW2QgPyAwIDogbi5sZW5ndGggLSAxXVtoXSArPSBwIDogKGQgPyBbMCwgMV0gOiBbbi5sZW5ndGggLSAyLCBuLmxlbmd0aCAtIDFdKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBuW2VdW2hdICs9IHBcclxuICAgICAgICB9KSwgeVthXSA9IG51bGwpXHJcbiAgICAgIH0pLCB4LnBvc2l0aW9uX3NvY2tldFhZU0UgPSBkZShiKSwgeC5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRSA9IGRlKEUucG9zaXRpb25fcGx1Z092ZXJoZWFkU0UpLCB4LnBvc2l0aW9uX3BhdGggPSBFLnBvc2l0aW9uX3BhdGgsIHgucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoID0gRS5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGgsIHgucG9zaXRpb25fc29ja2V0R3Jhdml0eVNFID0gZGUoXyksIGsgPSAhMCwgdS5ldmVudHMuYXBsX3Bvc2l0aW9uICYmIHUuZXZlbnRzLmFwbF9wb3NpdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSh1LCB2KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEdlKHQsIG4pIHtcclxuICAgIG4gIT09IHQuaXNTaG93biAmJiAoISFuICE9ICEhdC5pc1Nob3duICYmICh0LnN2Zy5zdHlsZS52aXNpYmlsaXR5ID0gbiA/IFwiXCIgOiBcImhpZGRlblwiKSwgdC5pc1Nob3duID0gbiwgdC5ldmVudHMgJiYgdC5ldmVudHMuc3ZnU2hvdyAmJiB0LmV2ZW50cy5zdmdTaG93LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZSh0LCBuKVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEZShlLCB0KSB7XHJcbiAgICB2YXIgbiwgYSwgaSwgbywgbCwgaCwgcCwgYywgZCwgZiwgciwgcywgdSwgeSwgUywgbSwgZywgXywgdiwgRSwgeCwgYiwgaywgdywgTywgTSwgSSwgQywgTCwgQSwgViwgUCwgTiwgVCwgVywgQiwgUiwgRiwgRywgRCwgeiwgaiwgSCwgVSwgWiwgWSwgWCwgcSwgUSwgSywgSiwgJCwgZWUgPSB7fTtcclxuICAgIHQubGluZSAmJiAoZWUubGluZSA9IChhID0gKG4gPSBlKS5vcHRpb25zLCBpID0gbi5jdXJTdGF0cywgbyA9IG4uZXZlbnRzLCBsID0gITEsIGwgPSBXZShuLCBpLCBcImxpbmVfY29sb3JcIiwgYS5saW5lQ29sb3IsIG8uY3VyX2xpbmVfY29sb3IpIHx8IGwsIGwgPSBXZShuLCBpLCBcImxpbmVfY29sb3JUcmFcIiwgZmUoaS5saW5lX2NvbG9yKVswXSA8IDEpIHx8IGwsIGwgPSBXZShuLCBpLCBcImxpbmVfc3Ryb2tlV2lkdGhcIiwgYS5saW5lU2l6ZSwgby5jdXJfbGluZV9zdHJva2VXaWR0aCkgfHwgbCkpLCAodC5wbHVnIHx8IGVlLmxpbmUpICYmIChlZS5wbHVnID0gKHAgPSAoaCA9IGUpLm9wdGlvbnMsIGMgPSBoLmN1clN0YXRzLCBkID0gaC5ldmVudHMsIGYgPSAhMSwgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQsIG4sIGEsIGksIG8sIGwsIHIsIHMsIHUgPSBwLnBsdWdTRVtlXTtcclxuICAgICAgZiA9IFdlKGgsIGMucGx1Z19lbmFibGVkU0UsIGUsIHUgIT09IG5lKSB8fCBmLCBmID0gV2UoaCwgYy5wbHVnX3BsdWdTRSwgZSwgdSkgfHwgZiwgZiA9IFdlKGgsIGMucGx1Z19jb2xvclNFLCBlLCBzID0gcC5wbHVnQ29sb3JTRVtlXSB8fCBjLmxpbmVfY29sb3IsIGQuY3VyX3BsdWdfY29sb3JTRSkgfHwgZiwgZiA9IFdlKGgsIGMucGx1Z19jb2xvclRyYVNFLCBlLCBmZShzKVswXSA8IDEpIHx8IGYsIHUgIT09IG5lICYmIChpID0gbiA9ICh0ID0gYWVbaWVbdV1dKS53aWR0aFIgKiBwLnBsdWdTaXplU0VbZV0sIG8gPSBhID0gdC5oZWlnaHRSICogcC5wbHVnU2l6ZVNFW2VdLCB1ZSAmJiAoaSAqPSBjLmxpbmVfc3Ryb2tlV2lkdGgsIG8gKj0gYy5saW5lX3N0cm9rZVdpZHRoKSwgZiA9IFdlKGgsIGMucGx1Z19tYXJrZXJXaWR0aFNFLCBlLCBpKSB8fCBmLCBmID0gV2UoaCwgYy5wbHVnX21hcmtlckhlaWdodFNFLCBlLCBvKSB8fCBmLCBjLmNhcHNNYXNrTWFya2VyX21hcmtlcldpZHRoU0VbZV0gPSBuLCBjLmNhcHNNYXNrTWFya2VyX21hcmtlckhlaWdodFNFW2VdID0gYSksIGMucGx1Z091dGxpbmVfcGx1Z1NFW2VdID0gYy5jYXBzTWFza01hcmtlcl9wbHVnU0VbZV0gPSB1LCBjLnBsdWdfZW5hYmxlZFNFW2VdID8gKHMgPSBjLmxpbmVfc3Ryb2tlV2lkdGggLyBwZS5saW5lU2l6ZSAqIHAucGx1Z1NpemVTRVtlXSwgYy5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRVtlXSA9IHQub3ZlcmhlYWQgKiBzLCBjLnZpZXdCb3hfcGx1Z0JDaXJjbGVTRVtlXSA9IHQuYkNpcmNsZSAqIHMsIGwgPSB0LnNpZGVMZW4gKiBzLCByID0gdC5iYWNrTGVuICogcykgOiAoYy5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRVtlXSA9IC1jLmxpbmVfc3Ryb2tlV2lkdGggLyAyLCBjLnZpZXdCb3hfcGx1Z0JDaXJjbGVTRVtlXSA9IGwgPSByID0gMCksIFdlKGgsIGMuYXR0YWNoX3BsdWdTaWRlTGVuU0UsIGUsIGwsIGQuY3VyX2F0dGFjaF9wbHVnU2lkZUxlblNFKSwgV2UoaCwgYy5hdHRhY2hfcGx1Z0JhY2tMZW5TRSwgZSwgciwgZC5jdXJfYXR0YWNoX3BsdWdCYWNrTGVuU0UpLCBjLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVtlXSA9ICFjLnBsdWdfZW5hYmxlZFNFW2VdXHJcbiAgICB9KSwgZiA9IFdlKGgsIGMsIFwicGx1Z19lbmFibGVkXCIsIGMucGx1Z19lbmFibGVkU0VbMF0gfHwgYy5wbHVnX2VuYWJsZWRTRVsxXSkgfHwgZikpLCAodC5saW5lT3V0bGluZSB8fCBlZS5saW5lKSAmJiAoZWUubGluZU91dGxpbmUgPSAodSA9IChyID0gZSkub3B0aW9ucywgeSA9IHIuY3VyU3RhdHMsIFMgPSAhMSwgUyA9IFdlKHIsIHksIFwibGluZU91dGxpbmVfZW5hYmxlZFwiLCB1LmxpbmVPdXRsaW5lRW5hYmxlZCkgfHwgUywgUyA9IFdlKHIsIHksIFwibGluZU91dGxpbmVfY29sb3JcIiwgdS5saW5lT3V0bGluZUNvbG9yKSB8fCBTLCBTID0gV2UociwgeSwgXCJsaW5lT3V0bGluZV9jb2xvclRyYVwiLCBmZSh5LmxpbmVPdXRsaW5lX2NvbG9yKVswXSA8IDEpIHx8IFMsIHMgPSB5LmxpbmVfc3Ryb2tlV2lkdGggKiB1LmxpbmVPdXRsaW5lU2l6ZSwgUyA9IFdlKHIsIHksIFwibGluZU91dGxpbmVfc3Ryb2tlV2lkdGhcIiwgeS5saW5lX3N0cm9rZVdpZHRoIC0gMiAqIHMpIHx8IFMsIFMgPSBXZShyLCB5LCBcImxpbmVPdXRsaW5lX2luU3Ryb2tlV2lkdGhcIiwgeS5saW5lT3V0bGluZV9jb2xvclRyYSA/IHkubGluZU91dGxpbmVfc3Ryb2tlV2lkdGggKyAyICogaGUgOiB5LmxpbmVfc3Ryb2tlV2lkdGggLSBzKSB8fCBTKSksICh0LnBsdWdPdXRsaW5lIHx8IGVlLmxpbmUgfHwgZWUucGx1ZyB8fCBlZS5saW5lT3V0bGluZSkgJiYgKGVlLnBsdWdPdXRsaW5lID0gKGcgPSAobSA9IGUpLm9wdGlvbnMsIF8gPSBtLmN1clN0YXRzLCB2ID0gITEsIFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0LCBuID0gXy5wbHVnT3V0bGluZV9wbHVnU0VbZV0sXHJcbiAgICAgICAgYSA9IG4gIT09IG5lID8gYWVbaWVbbl1dIDogbnVsbDtcclxuICAgICAgdiA9IFdlKG0sIF8ucGx1Z091dGxpbmVfZW5hYmxlZFNFLCBlLCBnLnBsdWdPdXRsaW5lRW5hYmxlZFNFW2VdICYmIF8ucGx1Z19lbmFibGVkICYmIF8ucGx1Z19lbmFibGVkU0VbZV0gJiYgISFhICYmICEhYS5vdXRsaW5lQmFzZSkgfHwgdiwgdiA9IFdlKG0sIF8ucGx1Z091dGxpbmVfY29sb3JTRSwgZSwgdCA9IGcucGx1Z091dGxpbmVDb2xvclNFW2VdIHx8IF8ubGluZU91dGxpbmVfY29sb3IpIHx8IHYsIHYgPSBXZShtLCBfLnBsdWdPdXRsaW5lX2NvbG9yVHJhU0UsIGUsIGZlKHQpWzBdIDwgMSkgfHwgdiwgYSAmJiBhLm91dGxpbmVCYXNlICYmICgodCA9IGcucGx1Z091dGxpbmVTaXplU0VbZV0pID4gYS5vdXRsaW5lTWF4ICYmICh0ID0gYS5vdXRsaW5lTWF4KSwgdCAqPSAyICogYS5vdXRsaW5lQmFzZSwgdiA9IFdlKG0sIF8ucGx1Z091dGxpbmVfc3Ryb2tlV2lkdGhTRSwgZSwgdCkgfHwgdiwgdiA9IFdlKG0sIF8ucGx1Z091dGxpbmVfaW5TdHJva2VXaWR0aFNFLCBlLCBfLnBsdWdPdXRsaW5lX2NvbG9yVHJhU0VbZV0gPyB0IC0gaGUgLyAoXy5saW5lX3N0cm9rZVdpZHRoIC8gcGUubGluZVNpemUpIC8gZy5wbHVnU2l6ZVNFW2VdICogMiA6IHQgLyAyKSB8fCB2KVxyXG4gICAgfSksIHYpKSwgKHQuZmFjZXMgfHwgZWUubGluZSB8fCBlZS5wbHVnIHx8IGVlLmxpbmVPdXRsaW5lIHx8IGVlLnBsdWdPdXRsaW5lKSAmJiAoZWUuZmFjZXMgPSAoYiA9IChFID0gZSkuY3VyU3RhdHMsIGsgPSBFLmFwbFN0YXRzLCB3ID0gRS5ldmVudHMsIE8gPSAhMSwgIWIubGluZV9hbHRDb2xvciAmJiBXZShFLCBrLCBcImxpbmVfY29sb3JcIiwgeCA9IGIubGluZV9jb2xvciwgdy5hcGxfbGluZV9jb2xvcikgJiYgKEUubGluZUZhY2Uuc3R5bGUuc3Ryb2tlID0geCwgTyA9ICEwKSwgV2UoRSwgaywgXCJsaW5lX3N0cm9rZVdpZHRoXCIsIHggPSBiLmxpbmVfc3Ryb2tlV2lkdGgsIHcuYXBsX2xpbmVfc3Ryb2tlV2lkdGgpICYmIChFLmxpbmVTaGFwZS5zdHlsZS5zdHJva2VXaWR0aCA9IHggKyBcInB4XCIsIE8gPSAhMCwgKHJlIHx8IGxlKSAmJiAoQWUoRSwgRS5saW5lU2hhcGUpLCBsZSAmJiAoQWUoRSwgRS5saW5lRmFjZSksIEFlKEUsIEUubGluZU1hc2tDYXBzKSkpKSwgV2UoRSwgaywgXCJsaW5lT3V0bGluZV9lbmFibGVkXCIsIHggPSBiLmxpbmVPdXRsaW5lX2VuYWJsZWQsIHcuYXBsX2xpbmVPdXRsaW5lX2VuYWJsZWQpICYmIChFLmxpbmVPdXRsaW5lRmFjZS5zdHlsZS5kaXNwbGF5ID0geCA/IFwiaW5saW5lXCIgOiBcIm5vbmVcIiwgTyA9ICEwKSwgYi5saW5lT3V0bGluZV9lbmFibGVkICYmIChXZShFLCBrLCBcImxpbmVPdXRsaW5lX2NvbG9yXCIsIHggPSBiLmxpbmVPdXRsaW5lX2NvbG9yLCB3LmFwbF9saW5lT3V0bGluZV9jb2xvcikgJiYgKEUubGluZU91dGxpbmVGYWNlLnN0eWxlLnN0cm9rZSA9IHgsIE8gPSAhMCksIFdlKEUsIGssIFwibGluZU91dGxpbmVfc3Ryb2tlV2lkdGhcIiwgeCA9IGIubGluZU91dGxpbmVfc3Ryb2tlV2lkdGgsIHcuYXBsX2xpbmVPdXRsaW5lX3N0cm9rZVdpZHRoKSAmJiAoRS5saW5lT3V0bGluZU1hc2tTaGFwZS5zdHlsZS5zdHJva2VXaWR0aCA9IHggKyBcInB4XCIsIE8gPSAhMCwgbGUgJiYgKEFlKEUsIEUubGluZU91dGxpbmVNYXNrQ2FwcyksIEFlKEUsIEUubGluZU91dGxpbmVGYWNlKSkpLCBXZShFLCBrLCBcImxpbmVPdXRsaW5lX2luU3Ryb2tlV2lkdGhcIiwgeCA9IGIubGluZU91dGxpbmVfaW5TdHJva2VXaWR0aCwgdy5hcGxfbGluZU91dGxpbmVfaW5TdHJva2VXaWR0aCkgJiYgKEUubGluZU1hc2tTaGFwZS5zdHlsZS5zdHJva2VXaWR0aCA9IHggKyBcInB4XCIsIE8gPSAhMCwgbGUgJiYgKEFlKEUsIEUubGluZU91dGxpbmVNYXNrQ2FwcyksIEFlKEUsIEUubGluZU91dGxpbmVGYWNlKSkpKSwgV2UoRSwgaywgXCJwbHVnX2VuYWJsZWRcIiwgeCA9IGIucGx1Z19lbmFibGVkLCB3LmFwbF9wbHVnX2VuYWJsZWQpICYmIChFLnBsdWdzRmFjZS5zdHlsZS5kaXNwbGF5ID0geCA/IFwiaW5saW5lXCIgOiBcIm5vbmVcIiwgTyA9ICEwKSwgYi5wbHVnX2VuYWJsZWQgJiYgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgdmFyIGUgPSBiLnBsdWdfcGx1Z1NFW25dLFxyXG4gICAgICAgIHQgPSBlICE9PSBuZSA/IGFlW2llW2VdXSA6IG51bGwsXHJcbiAgICAgICAgYSA9IE5lKG4sIHQpO1xyXG4gICAgICBXZShFLCBrLnBsdWdfZW5hYmxlZFNFLCBuLCB4ID0gYi5wbHVnX2VuYWJsZWRTRVtuXSwgdy5hcGxfcGx1Z19lbmFibGVkU0UpICYmIChFLnBsdWdzRmFjZS5zdHlsZVthLnByb3BdID0geCA/IFwidXJsKCNcIiArIEUucGx1Z01hcmtlcklkU0Vbbl0gKyBcIilcIiA6IFwibm9uZVwiLCBPID0gITApLCBiLnBsdWdfZW5hYmxlZFNFW25dICYmIChXZShFLCBrLnBsdWdfcGx1Z1NFLCBuLCBlLCB3LmFwbF9wbHVnX3BsdWdTRSkgJiYgKEUucGx1Z0ZhY2VTRVtuXS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHQuZWxtSWQsIFBlKEUsIEUucGx1Z01hcmtlclNFW25dLCBhLm9yaWVudCwgdC5iQm94LCBFLnN2ZywgRS5wbHVnTWFya2VyU2hhcGVTRVtuXSwgRS5wbHVnc0ZhY2UpLCBPID0gITAsIHJlICYmIEFlKEUsIEUucGx1Z3NGYWNlKSksIFdlKEUsIGsucGx1Z19jb2xvclNFLCBuLCB4ID0gYi5wbHVnX2NvbG9yU0Vbbl0sIHcuYXBsX3BsdWdfY29sb3JTRSkgJiYgKEUucGx1Z0ZhY2VTRVtuXS5zdHlsZS5maWxsID0geCwgTyA9ICEwLCAoc2UgfHwgdWUgfHwgbGUpICYmICFiLmxpbmVfY29sb3JUcmEgJiYgQWUoRSwgbGUgPyBFLmxpbmVNYXNrQ2FwcyA6IEUuY2Fwc01hc2tMaW5lKSksIFtcIm1hcmtlcldpZHRoXCIsIFwibWFya2VySGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCA9IFwicGx1Z19cIiArIGUgKyBcIlNFXCI7XHJcbiAgICAgICAgV2UoRSwga1t0XSwgbiwgeCA9IGJbdF1bbl0sIHdbXCJhcGxfXCIgKyB0XSkgJiYgKEUucGx1Z01hcmtlclNFW25dW2VdLmJhc2VWYWwudmFsdWUgPSB4LCBPID0gITApXHJcbiAgICAgIH0pLCBXZShFLCBrLnBsdWdPdXRsaW5lX2VuYWJsZWRTRSwgbiwgeCA9IGIucGx1Z091dGxpbmVfZW5hYmxlZFNFW25dLCB3LmFwbF9wbHVnT3V0bGluZV9lbmFibGVkU0UpICYmICh4ID8gKEUucGx1Z0ZhY2VTRVtuXS5zdHlsZS5tYXNrID0gXCJ1cmwoI1wiICsgRS5wbHVnTWFza0lkU0Vbbl0gKyBcIilcIiwgRS5wbHVnT3V0bGluZUZhY2VTRVtuXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIikgOiAoRS5wbHVnRmFjZVNFW25dLnN0eWxlLm1hc2sgPSBcIm5vbmVcIiwgRS5wbHVnT3V0bGluZUZhY2VTRVtuXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpLCBPID0gITApLCBiLnBsdWdPdXRsaW5lX2VuYWJsZWRTRVtuXSAmJiAoV2UoRSwgay5wbHVnT3V0bGluZV9wbHVnU0UsIG4sIGUsIHcuYXBsX3BsdWdPdXRsaW5lX3BsdWdTRSkgJiYgKEUucGx1Z091dGxpbmVGYWNlU0Vbbl0uaHJlZi5iYXNlVmFsID0gRS5wbHVnTWFza1NoYXBlU0Vbbl0uaHJlZi5iYXNlVmFsID0gRS5wbHVnT3V0bGluZU1hc2tTaGFwZVNFW25dLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgdC5lbG1JZCwgW0UucGx1Z01hc2tTRVtuXSwgRS5wbHVnT3V0bGluZU1hc2tTRVtuXV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUueC5iYXNlVmFsLnZhbHVlID0gdC5iQm94LmxlZnQsIGUueS5iYXNlVmFsLnZhbHVlID0gdC5iQm94LnRvcCwgZS53aWR0aC5iYXNlVmFsLnZhbHVlID0gdC5iQm94LndpZHRoLCBlLmhlaWdodC5iYXNlVmFsLnZhbHVlID0gdC5iQm94LmhlaWdodFxyXG4gICAgICB9KSwgTyA9ICEwKSwgV2UoRSwgay5wbHVnT3V0bGluZV9jb2xvclNFLCBuLCB4ID0gYi5wbHVnT3V0bGluZV9jb2xvclNFW25dLCB3LmFwbF9wbHVnT3V0bGluZV9jb2xvclNFKSAmJiAoRS5wbHVnT3V0bGluZUZhY2VTRVtuXS5zdHlsZS5maWxsID0geCwgTyA9ICEwLCBsZSAmJiAoQWUoRSwgRS5saW5lTWFza0NhcHMpLCBBZShFLCBFLmxpbmVPdXRsaW5lTWFza0NhcHMpKSksIFdlKEUsIGsucGx1Z091dGxpbmVfc3Ryb2tlV2lkdGhTRSwgbiwgeCA9IGIucGx1Z091dGxpbmVfc3Ryb2tlV2lkdGhTRVtuXSwgdy5hcGxfcGx1Z091dGxpbmVfc3Ryb2tlV2lkdGhTRSkgJiYgKEUucGx1Z091dGxpbmVNYXNrU2hhcGVTRVtuXS5zdHlsZS5zdHJva2VXaWR0aCA9IHggKyBcInB4XCIsIE8gPSAhMCksIFdlKEUsIGsucGx1Z091dGxpbmVfaW5TdHJva2VXaWR0aFNFLCBuLCB4ID0gYi5wbHVnT3V0bGluZV9pblN0cm9rZVdpZHRoU0Vbbl0sIHcuYXBsX3BsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRSkgJiYgKEUucGx1Z01hc2tTaGFwZVNFW25dLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwKSkpXHJcbiAgICB9KSwgTykpLCAodC5wb3NpdGlvbiB8fCBlZS5saW5lIHx8IGVlLnBsdWcpICYmIChlZS5wb3NpdGlvbiA9IEZlKGUpKSwgKHQucGF0aCB8fCBlZS5wb3NpdGlvbikgJiYgKGVlLnBhdGggPSAoQyA9IChNID0gZSkuY3VyU3RhdHMsIEwgPSBNLmFwbFN0YXRzLCBBID0gTS5wYXRoTGlzdC5hbmltVmFsIHx8IE0ucGF0aExpc3QuYmFzZVZhbCwgViA9IEMucGF0aF9lZGdlLCBQID0gITEsIEEgJiYgKFYueDEgPSBWLngyID0gQVswXVswXS54LCBWLnkxID0gVi55MiA9IEFbMF1bMF0ueSwgQy5wYXRoX3BhdGhEYXRhID0gSSA9IHdlKEEsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUueCA8IFYueDEgJiYgKFYueDEgPSBlLngpLCBlLnkgPCBWLnkxICYmIChWLnkxID0gZS55KSwgZS54ID4gVi54MiAmJiAoVi54MiA9IGUueCksIGUueSA+IFYueTIgJiYgKFYueTIgPSBlLnkpXHJcbiAgICB9KSwgTWUoSSwgTC5wYXRoX3BhdGhEYXRhKSAmJiAoTS5saW5lUGF0aC5zZXRQYXRoRGF0YShJKSwgTC5wYXRoX3BhdGhEYXRhID0gSSwgUCA9ICEwLCBsZSA/IChBZShNLCBNLnBsdWdzRmFjZSksIEFlKE0sIE0ubGluZU1hc2tDYXBzKSkgOiByZSAmJiBBZShNLCBNLmxpbmVQYXRoKSwgTS5ldmVudHMuYXBsX3BhdGggJiYgTS5ldmVudHMuYXBsX3BhdGguZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlKE0sIEkpXHJcbiAgICB9KSkpLCBQKSksIGVlLnZpZXdCb3ggPSAoQiA9IChOID0gZSkuY3VyU3RhdHMsIFIgPSBOLmFwbFN0YXRzLCBGID0gQi5wYXRoX2VkZ2UsIEcgPSBCLnZpZXdCb3hfYkJveCwgRCA9IFIudmlld0JveF9iQm94LCB6ID0gTi5zdmcudmlld0JveC5iYXNlVmFsLCBqID0gTi5zdmcuc3R5bGUsIEggPSAhMSwgVCA9IE1hdGgubWF4KEIubGluZV9zdHJva2VXaWR0aCAvIDIsIEIudmlld0JveF9wbHVnQkNpcmNsZVNFWzBdIHx8IDAsIEIudmlld0JveF9wbHVnQkNpcmNsZVNFWzFdIHx8IDApLCBXID0ge1xyXG4gICAgICB4MTogRi54MSAtIFQsXHJcbiAgICAgIHkxOiBGLnkxIC0gVCxcclxuICAgICAgeDI6IEYueDIgKyBULFxyXG4gICAgICB5MjogRi55MiArIFRcclxuICAgIH0sIE4uZXZlbnRzLm5ld19lZGdlNHZpZXdCb3ggJiYgTi5ldmVudHMubmV3X2VkZ2U0dmlld0JveC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUoTiwgVylcclxuICAgIH0pLCBHLnggPSBCLmxpbmVNYXNrX3ggPSBCLmxpbmVPdXRsaW5lTWFza194ID0gQi5tYXNrQkdSZWN0X3ggPSBXLngxLCBHLnkgPSBCLmxpbmVNYXNrX3kgPSBCLmxpbmVPdXRsaW5lTWFza195ID0gQi5tYXNrQkdSZWN0X3kgPSBXLnkxLCBHLndpZHRoID0gVy54MiAtIFcueDEsIEcuaGVpZ2h0ID0gVy55MiAtIFcueTEsIFtcInhcIiwgXCJ5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdDtcclxuICAgICAgKHQgPSBHW2VdKSAhPT0gRFtlXSAmJiAoeltlXSA9IERbZV0gPSB0LCBqW29lW2VdXSA9IHQgKyAoXCJ4XCIgPT09IGUgfHwgXCJ5XCIgPT09IGUgPyBOLmJvZHlPZmZzZXRbZV0gOiAwKSArIFwicHhcIiwgSCA9ICEwKVxyXG4gICAgfSksIEgpLCBlZS5tYXNrID0gKFkgPSAoVSA9IGUpLmN1clN0YXRzLCBYID0gVS5hcGxTdGF0cywgcSA9ICExLCBZLnBsdWdfZW5hYmxlZCA/IFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFW2VdID0gWS5wbHVnX2VuYWJsZWRTRVtlXSAmJiBZLnBsdWdfY29sb3JUcmFTRVtlXSB8fCBZLnBsdWdPdXRsaW5lX2VuYWJsZWRTRVtlXSAmJiBZLnBsdWdPdXRsaW5lX2NvbG9yVHJhU0VbZV1cclxuICAgIH0pIDogWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0VbMF0gPSBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRVsxXSA9ICExLCBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWQgPSBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRVswXSB8fCBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRVsxXSwgWS5saW5lTWFza19vdXRsaW5lTW9kZSA9IFkubGluZU91dGxpbmVfZW5hYmxlZCwgWS5jYXBzX2VuYWJsZWQgPSBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWQgfHwgWS5jYXBzTWFza0FuY2hvcl9lbmFibGVkU0VbMF0gfHwgWS5jYXBzTWFza0FuY2hvcl9lbmFibGVkU0VbMV0sIFkubGluZU1hc2tfZW5hYmxlZCA9IFkuY2Fwc19lbmFibGVkIHx8IFkubGluZU1hc2tfb3V0bGluZU1vZGUsIChZLmxpbmVNYXNrX2VuYWJsZWQgJiYgIVkubGluZU1hc2tfb3V0bGluZU1vZGUgfHwgWS5saW5lT3V0bGluZV9lbmFibGVkKSAmJiBbXCJ4XCIsIFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0ID0gXCJtYXNrQkdSZWN0X1wiICsgZTtcclxuICAgICAgV2UoVSwgWCwgdCwgWiA9IFlbdF0pICYmIChVLm1hc2tCR1JlY3RbZV0uYmFzZVZhbC52YWx1ZSA9IFosIHEgPSAhMClcclxuICAgIH0pLCBXZShVLCBYLCBcImxpbmVNYXNrX2VuYWJsZWRcIiwgWiA9IFkubGluZU1hc2tfZW5hYmxlZCkgJiYgKFUubGluZUZhY2Uuc3R5bGUubWFzayA9IFogPyBcInVybCgjXCIgKyBVLmxpbmVNYXNrSWQgKyBcIilcIiA6IFwibm9uZVwiLCBxID0gITAsIHVlICYmIEFlKFUsIFUubGluZU1hc2spKSwgWS5saW5lTWFza19lbmFibGVkICYmIChXZShVLCBYLCBcImxpbmVNYXNrX291dGxpbmVNb2RlXCIsIFogPSBZLmxpbmVNYXNrX291dGxpbmVNb2RlKSAmJiAoWiA/IChVLmxpbmVNYXNrQkcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLCBVLmxpbmVNYXNrU2hhcGUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIpIDogKFUubGluZU1hc2tCRy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIiwgVS5saW5lTWFza1NoYXBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiksIHEgPSAhMCksIFtcInhcIiwgXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSBcImxpbmVNYXNrX1wiICsgZTtcclxuICAgICAgV2UoVSwgWCwgdCwgWiA9IFlbdF0pICYmIChVLmxpbmVNYXNrW2VdLmJhc2VWYWwudmFsdWUgPSBaLCBxID0gITApXHJcbiAgICB9KSwgV2UoVSwgWCwgXCJjYXBzX2VuYWJsZWRcIiwgWiA9IFkuY2Fwc19lbmFibGVkKSAmJiAoVS5saW5lTWFza0NhcHMuc3R5bGUuZGlzcGxheSA9IFUubGluZU91dGxpbmVNYXNrQ2Fwcy5zdHlsZS5kaXNwbGF5ID0gWiA/IFwiaW5saW5lXCIgOiBcIm5vbmVcIiwgcSA9ICEwLCB1ZSAmJiBBZShVLCBVLmNhcHNNYXNrTGluZSkpLCBZLmNhcHNfZW5hYmxlZCAmJiAoWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQ7XHJcbiAgICAgIFdlKFUsIFguY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFLCBlLCBaID0gWS5jYXBzTWFza0FuY2hvcl9lbmFibGVkU0VbZV0pICYmIChVLmNhcHNNYXNrQW5jaG9yU0VbZV0uc3R5bGUuZGlzcGxheSA9IFogPyBcImlubGluZVwiIDogXCJub25lXCIsIHEgPSAhMCwgdWUgJiYgQWUoVSwgVS5saW5lTWFzaykpLCBZLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVtlXSAmJiAoTWUodCA9IFkuY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRVtlXSwgWC5jYXBzTWFza0FuY2hvcl9wYXRoRGF0YVNFW2VdKSAmJiAoVS5jYXBzTWFza0FuY2hvclNFW2VdLnNldFBhdGhEYXRhKHQpLCBYLmNhcHNNYXNrQW5jaG9yX3BhdGhEYXRhU0VbZV0gPSB0LCBxID0gITApLCBXZShVLCBYLmNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0UsIGUsIFogPSBZLmNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0VbZV0pICYmIChVLmNhcHNNYXNrQW5jaG9yU0VbZV0uc3R5bGUuc3Ryb2tlV2lkdGggPSBaICsgXCJweFwiLCBxID0gITApKVxyXG4gICAgfSksIFdlKFUsIFgsIFwiY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFwiLCBaID0gWS5jYXBzTWFza01hcmtlcl9lbmFibGVkKSAmJiAoVS5jYXBzTWFza0xpbmUuc3R5bGUuZGlzcGxheSA9IFogPyBcImlubGluZVwiIDogXCJub25lXCIsIHEgPSAhMCksIFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZCAmJiBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAobikge1xyXG4gICAgICB2YXIgZSA9IFkuY2Fwc01hc2tNYXJrZXJfcGx1Z1NFW25dLFxyXG4gICAgICAgIHQgPSBlICE9PSBuZSA/IGFlW2llW2VdXSA6IG51bGwsXHJcbiAgICAgICAgYSA9IE5lKG4sIHQpO1xyXG4gICAgICBXZShVLCBYLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRSwgbiwgWiA9IFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFW25dKSAmJiAoVS5jYXBzTWFza0xpbmUuc3R5bGVbYS5wcm9wXSA9IFogPyBcInVybCgjXCIgKyBVLmxpbmVNYXNrTWFya2VySWRTRVtuXSArIFwiKVwiIDogXCJub25lXCIsIHEgPSAhMCksIFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFW25dICYmIChXZShVLCBYLmNhcHNNYXNrTWFya2VyX3BsdWdTRSwgbiwgZSkgJiYgKFUuY2Fwc01hc2tNYXJrZXJTaGFwZVNFW25dLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgdC5lbG1JZCwgUGUoVSwgVS5jYXBzTWFza01hcmtlclNFW25dLCBhLm9yaWVudCwgdC5iQm94LCBVLnN2ZywgVS5jYXBzTWFza01hcmtlclNoYXBlU0Vbbl0sIFUuY2Fwc01hc2tMaW5lKSwgcSA9ICEwLCByZSAmJiAoQWUoVSwgVS5jYXBzTWFza0xpbmUpLCBBZShVLCBVLmxpbmVGYWNlKSkpLCBbXCJtYXJrZXJXaWR0aFwiLCBcIm1hcmtlckhlaWdodFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBcImNhcHNNYXNrTWFya2VyX1wiICsgZSArIFwiU0VcIjtcclxuICAgICAgICBXZShVLCBYW3RdLCBuLCBaID0gWVt0XVtuXSkgJiYgKFUuY2Fwc01hc2tNYXJrZXJTRVtuXVtlXS5iYXNlVmFsLnZhbHVlID0gWiwgcSA9ICEwKVxyXG4gICAgICB9KSlcclxuICAgIH0pKSksIFkubGluZU91dGxpbmVfZW5hYmxlZCAmJiBbXCJ4XCIsIFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0ID0gXCJsaW5lT3V0bGluZU1hc2tfXCIgKyBlO1xyXG4gICAgICBXZShVLCBYLCB0LCBaID0gWVt0XSkgJiYgKFUubGluZU91dGxpbmVNYXNrW2VdLmJhc2VWYWwudmFsdWUgPSBaLCBxID0gITApXHJcbiAgICB9KSwgcSksIHQuZWZmZWN0ICYmIChKID0gKFEgPSBlKS5jdXJTdGF0cywgJCA9IFEuYXBsU3RhdHMsIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0ID0gdGVbZV0sXHJcbiAgICAgICAgbiA9IGUgKyBcIl9lbmFibGVkXCIsXHJcbiAgICAgICAgYSA9IGUgKyBcIl9vcHRpb25zXCIsXHJcbiAgICAgICAgaSA9IEpbYV07XHJcbiAgICAgIFdlKFEsICQsIG4sIEsgPSBKW25dKSA/IChLICYmICgkW2FdID0gZGUoaSkpLCB0W0sgPyBcImluaXRcIiA6IFwicmVtb3ZlXCJdKFEpKSA6IEsgJiYgY2UoaSwgJFthXSkgJiYgKHQucmVtb3ZlKFEpLCAkW25dID0gITAsICRbYV0gPSBkZShpKSwgdC5pbml0KFEpKVxyXG4gICAgfSkpLCAoc2UgfHwgdWUpICYmIGVlLmxpbmUgJiYgIWVlLnBhdGggJiYgQWUoZSwgZS5saW5lU2hhcGUpLCBzZSAmJiBlZS5wbHVnICYmICFlZS5saW5lICYmIEFlKGUsIGUucGx1Z3NGYWNlKSwgVmUoZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHplKGUsIHQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGR1cmF0aW9uOiB3KGUuZHVyYXRpb24pICYmIDAgPCBlLmR1cmF0aW9uID8gZS5kdXJhdGlvbiA6IHQuZHVyYXRpb24sXHJcbiAgICAgIHRpbWluZzogYy52YWxpZFRpbWluZyhlLnRpbWluZykgPyBlLnRpbWluZyA6IGRlKHQudGltaW5nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gamUoZSwgdCwgbiwgYSkge1xyXG4gICAgdmFyIGksIG8gPSBlLmN1clN0YXRzLFxyXG4gICAgICBsID0gZS5hcGxTdGF0cyxcclxuICAgICAgciA9IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHMoKSB7XHJcbiAgICAgIFtcInNob3dfb25cIiwgXCJzaG93X2VmZmVjdFwiLCBcInNob3dfYW5pbU9wdGlvbnNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxbZV0gPSBvW2VdXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvLnNob3dfb24gPSB0LCBuICYmIGdbbl0gJiYgKG8uc2hvd19lZmZlY3QgPSBuLCBvLnNob3dfYW5pbU9wdGlvbnMgPSB6ZShrKGEpID8gYSA6IHt9LCBnW25dLmRlZmF1bHRBbmltT3B0aW9ucykpLCByLnNob3dfb24gPSBvLnNob3dfb24gIT09IGwuc2hvd19vbiwgci5zaG93X2VmZmVjdCA9IG8uc2hvd19lZmZlY3QgIT09IGwuc2hvd19lZmZlY3QsIHIuc2hvd19hbmltT3B0aW9ucyA9IGNlKG8uc2hvd19hbmltT3B0aW9ucywgbC5zaG93X2FuaW1PcHRpb25zKSwgci5zaG93X2VmZmVjdCB8fCByLnNob3dfYW5pbU9wdGlvbnMgPyBvLnNob3dfaW5BbmltID8gKGkgPSByLnNob3dfZWZmZWN0ID8gZ1tsLnNob3dfZWZmZWN0XS5zdG9wKGUsICEwLCAhMCkgOiBnW2wuc2hvd19lZmZlY3RdLnN0b3AoZSksIHMoKSwgZ1tsLnNob3dfZWZmZWN0XS5pbml0KGUsIGkpKSA6IHIuc2hvd19vbiAmJiAobC5zaG93X2VmZmVjdCAmJiByLnNob3dfZWZmZWN0ICYmIGdbbC5zaG93X2VmZmVjdF0uc3RvcChlLCAhMCwgITApLCBzKCksIGdbbC5zaG93X2VmZmVjdF0uaW5pdChlKSkgOiByLnNob3dfb24gJiYgKHMoKSwgZ1tsLnNob3dfZWZmZWN0XS5zdGFydChlKSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhlKGUsIHQsIG4pIHtcclxuICAgIHZhciBhID0ge1xyXG4gICAgICBwcm9wczogZSxcclxuICAgICAgb3B0aW9uTmFtZTogblxyXG4gICAgfTtcclxuICAgIHJldHVybiAhKCEoZS5hdHRhY2htZW50cy5pbmRleE9mKHQpIDwgMCkgfHwgdC5jb25mLmJpbmQgJiYgIXQuY29uZi5iaW5kKHQsIGEpKSAmJiAoZS5hdHRhY2htZW50cy5wdXNoKHQpLCB0LmJvdW5kVGFyZ2V0cy5wdXNoKGEpLCAhMClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFVlKG4sIGEsIGUpIHtcclxuICAgIHZhciBpID0gbi5hdHRhY2htZW50cy5pbmRleE9mKGEpOyAtIDEgPCBpICYmIG4uYXR0YWNobWVudHMuc3BsaWNlKGksIDEpLCBhLmJvdW5kVGFyZ2V0cy5zb21lKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHJldHVybiBlLnByb3BzID09PSBuICYmIChhLmNvbmYudW5iaW5kICYmIGEuY29uZi51bmJpbmQoYSwgZSksIGkgPSB0LCAhMClcclxuICAgIH0pICYmIChhLmJvdW5kVGFyZ2V0cy5zcGxpY2UoaSwgMSksIGUgfHwgTGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICBhLmJvdW5kVGFyZ2V0cy5sZW5ndGggfHwgbyhhKVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBaZShzLCB1KSB7XHJcbiAgICB2YXIgZSwgaSwgaCA9IHMub3B0aW9ucyxcclxuICAgICAgcCA9IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGYoZSwgdCwgbiwgYSwgaSkge1xyXG4gICAgICB2YXIgbyA9IHt9O1xyXG4gICAgICByZXR1cm4gbiA/IG51bGwgIT0gYSA/IChvLmNvbnRhaW5lciA9IGVbbl0sIG8ua2V5ID0gYSkgOiAoby5jb250YWluZXIgPSBlLCBvLmtleSA9IG4pIDogKG8uY29udGFpbmVyID0gZSwgby5rZXkgPSB0KSwgby5kZWZhdWx0ID0gaSwgby5hY2NlcHRzQXV0byA9IG51bGwgPT0gby5kZWZhdWx0LCBvXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYyhlLCB0LCBuLCBhLCBpLCBvLCBsKSB7XHJcbiAgICAgIHZhciByLCBzLCB1LCBoID0gZihlLCBuLCBpLCBvLCBsKTtcclxuICAgICAgcmV0dXJuIG51bGwgIT0gdFtuXSAmJiAocyA9ICh0W25dICsgXCJcIikudG9Mb3dlckNhc2UoKSkgJiYgKGguYWNjZXB0c0F1dG8gJiYgcyA9PT0geCB8fCAodSA9IGFbc10pKSAmJiB1ICE9PSBoLmNvbnRhaW5lcltoLmtleV0gJiYgKGguY29udGFpbmVyW2gua2V5XSA9IHUsIHIgPSAhMCksIG51bGwgIT0gaC5jb250YWluZXJbaC5rZXldIHx8IGguYWNjZXB0c0F1dG8gfHwgKGguY29udGFpbmVyW2gua2V5XSA9IGguZGVmYXVsdCwgciA9ICEwKSwgclxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGQoZSwgdCwgbiwgYSwgaSwgbywgbCwgciwgcykge1xyXG4gICAgICB2YXIgdSwgaCwgcCwgYywgZCA9IGYoZSwgbiwgaSwgbywgbCk7XHJcbiAgICAgIGlmICghYSkge1xyXG4gICAgICAgIGlmIChudWxsID09IGQuZGVmYXVsdCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBgdHlwZWA6IFwiICsgbik7XHJcbiAgICAgICAgYSA9IHR5cGVvZiBkLmRlZmF1bHRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbCAhPSB0W25dICYmIChkLmFjY2VwdHNBdXRvICYmICh0W25dICsgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0geCB8fCAocCA9IGggPSB0W25dLCAoXCJudW1iZXJcIiA9PT0gKGMgPSBhKSA/IHcocCkgOiB0eXBlb2YgcCA9PT0gYykgJiYgKGggPSBzICYmIFwic3RyaW5nXCIgPT09IGEgJiYgaCA/IGgudHJpbSgpIDogaCwgMSkgJiYgKCFyIHx8IHIoaCkpKSkgJiYgaCAhPT0gZC5jb250YWluZXJbZC5rZXldICYmIChkLmNvbnRhaW5lcltkLmtleV0gPSBoLCB1ID0gITApLCBudWxsICE9IGQuY29udGFpbmVyW2Qua2V5XSB8fCBkLmFjY2VwdHNBdXRvIHx8IChkLmNvbnRhaW5lcltkLmtleV0gPSBkLmRlZmF1bHQsIHUgPSAhMCksIHVcclxuICAgIH1cclxuICAgIGlmICh1ID0gdSB8fCB7fSwgW1wic3RhcnRcIiwgXCJlbmRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgIHZhciBuID0gdVtlXSxcclxuICAgICAgICAgIGEgPSAhMTtcclxuICAgICAgICBpZiAobiAmJiAoeWUobikgfHwgKGEgPSBfKG4sIFwiYW5jaG9yXCIpKSkgJiYgbiAhPT0gaC5hbmNob3JTRVt0XSkge1xyXG4gICAgICAgICAgaWYgKCExICE9PSBzLm9wdGlvbklzQXR0YWNoLmFuY2hvclNFW3RdICYmIFVlKHMsICRbaC5hbmNob3JTRVt0XS5faWRdKSwgYSAmJiAhSGUocywgJFtuLl9pZF0sIGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBiaW5kIGF0dGFjaG1lbnRcIik7XHJcbiAgICAgICAgICBoLmFuY2hvclNFW3RdID0gbiwgcy5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVt0XSA9IGEsIGkgPSBwLnBvc2l0aW9uID0gITBcclxuICAgICAgICB9XHJcbiAgICAgIH0pLCAhaC5hbmNob3JTRVswXSB8fCAhaC5hbmNob3JTRVsxXSB8fCBoLmFuY2hvclNFWzBdID09PSBoLmFuY2hvclNFWzFdKSB0aHJvdyBuZXcgRXJyb3IoXCJgc3RhcnRgIGFuZCBgZW5kYCBhcmUgcmVxdWlyZWQuXCIpO1xyXG4gICAgaSAmJiAoZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHZhciBuLCBhLCBpO1xyXG4gICAgICBpZiAoIShuID0gbWUoZSkpIHx8ICEoYSA9IG1lKHQpKSkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBmcmFtZXMuXCIpO1xyXG4gICAgICByZXR1cm4gbi5sZW5ndGggJiYgYS5sZW5ndGggJiYgKG4ucmV2ZXJzZSgpLCBhLnJldmVyc2UoKSwgbi5zb21lKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGEuc29tZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGUgPT09IHQgJiYgKGkgPSBlLmNvbnRlbnRXaW5kb3csICEwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pKSwgaSB8fCB3aW5kb3dcclxuICAgIH0oITEgIT09IHMub3B0aW9uSXNBdHRhY2guYW5jaG9yU0VbMF0gPyAkW2guYW5jaG9yU0VbMF0uX2lkXS5lbGVtZW50IDogaC5hbmNob3JTRVswXSwgITEgIT09IHMub3B0aW9uSXNBdHRhY2guYW5jaG9yU0VbMV0gPyAkW2guYW5jaG9yU0VbMV0uX2lkXS5lbGVtZW50IDogaC5hbmNob3JTRVsxXSkpICE9PSBzLmJhc2VXaW5kb3cgJiYgKCEgZnVuY3Rpb24gKGEsIGUpIHtcclxuICAgICAgdmFyIHQsIG4sIGksIG8sIGwsIHIsIHMsIHUsIGgsIHAsIGMgPSBhLmFwbFN0YXRzLFxyXG4gICAgICAgIGQgPSBlLmRvY3VtZW50LFxyXG4gICAgICAgIGYgPSB2ICsgXCItXCIgKyBhLl9pZDtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHkoZSkge1xyXG4gICAgICAgIHZhciB0ID0gbi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcIm1hc2tcIikpO1xyXG4gICAgICAgIHJldHVybiB0LmlkID0gZSwgdC5tYXNrVW5pdHMuYmFzZVZhbCA9IFNWR1VuaXRUeXBlcy5TVkdfVU5JVF9UWVBFX1VTRVJTUEFDRU9OVVNFLCBbdC54LCB0LnksIHQud2lkdGgsIHQuaGVpZ2h0XS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBlLmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgsIDApXHJcbiAgICAgICAgfSksIHRcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gUyhlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBuLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwibWFya2VyXCIpKTtcclxuICAgICAgICByZXR1cm4gdC5pZCA9IGUsIHQubWFya2VyVW5pdHMuYmFzZVZhbCA9IFNWR01hcmtlckVsZW1lbnQuU1ZHX01BUktFUlVOSVRTX1NUUk9LRVdJRFRILCB0LnZpZXdCb3guYmFzZVZhbCB8fCB0LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMCAwXCIpLCB0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG0oZSkge1xyXG4gICAgICAgIHJldHVybiBbZS53aWR0aCwgZS5oZWlnaHRdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFLCAxMDApXHJcbiAgICAgICAgfSksIGVcclxuICAgICAgfVxyXG4gICAgICBhLnBhdGhMaXN0ID0ge30sIFRlKGMsIFkpLCBPYmplY3Qua2V5cyh0ZSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gZSArIFwiX2VuYWJsZWRcIjtcclxuICAgICAgICBjW3RdICYmICh0ZVtlXS5yZW1vdmUoYSksIGNbdF0gPSAhMSlcclxuICAgICAgfSksIGEuYmFzZVdpbmRvdyAmJiBhLnN2ZyAmJiBhLmJhc2VXaW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhLnN2ZyksIFJlKGEuYmFzZVdpbmRvdyA9IGUpLCBhLmJvZHlPZmZzZXQgPSBCZShlKSwgYS5zdmcgPSB0ID0gZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJzdmdcIiksIHQuY2xhc3NOYW1lLmJhc2VWYWwgPSB2LCB0LnZpZXdCb3guYmFzZVZhbCB8fCB0LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMCAwXCIpLCBhLmRlZnMgPSBuID0gdC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcImRlZnNcIikpLCBhLmxpbmVQYXRoID0gbyA9IG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJwYXRoXCIpKSwgby5pZCA9IGwgPSBmICsgXCItbGluZS1wYXRoXCIsIG8uY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItbGluZS1wYXRoXCIsIHVlICYmIChvLnN0eWxlLmZpbGwgPSBcIm5vbmVcIiksIGEubGluZVNoYXBlID0gbyA9IG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmlkID0gciA9IGYgKyBcIi1saW5lLXNoYXBlXCIsIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyBsLCAoaSA9IG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJnXCIpKSkuaWQgPSBzID0gZiArIFwiLWNhcHNcIiwgYS5jYXBzTWFza0FuY2hvclNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSBpLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwicGF0aFwiKSk7XHJcbiAgICAgICAgcmV0dXJuIGUuY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItY2Fwcy1tYXNrLWFuY2hvclwiLCBlXHJcbiAgICAgIH0pLCBhLmxpbmVNYXNrTWFya2VySWRTRSA9IFtmICsgXCItY2Fwcy1tYXNrLW1hcmtlci0wXCIsIGYgKyBcIi1jYXBzLW1hc2stbWFya2VyLTFcIl0sIGEuY2Fwc01hc2tNYXJrZXJTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gUyhhLmxpbmVNYXNrTWFya2VySWRTRVtlXSlcclxuICAgICAgfSksIGEuY2Fwc01hc2tNYXJrZXJTaGFwZVNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gYS5jYXBzTWFza01hcmtlclNFW2VdLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKTtcclxuICAgICAgICByZXR1cm4gdC5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1jYXBzLW1hc2stbWFya2VyLXNoYXBlXCIsIHRcclxuICAgICAgfSksIGEuY2Fwc01hc2tMaW5lID0gbyA9IGkuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLWNhcHMtbWFzay1saW5lXCIsIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyByLCBhLm1hc2tCR1JlY3QgPSBvID0gbShuLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwicmVjdFwiKSkpLCBvLmlkID0gdSA9IGYgKyBcIi1tYXNrLWJnLXJlY3RcIiwgby5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1tYXNrLWJnLXJlY3RcIiwgdWUgJiYgKG8uc3R5bGUuZmlsbCA9IFwid2hpdGVcIiksIGEubGluZU1hc2sgPSBtKHkoYS5saW5lTWFza0lkID0gZiArIFwiLWxpbmUtbWFza1wiKSksIGEubGluZU1hc2tCRyA9IG8gPSBhLmxpbmVNYXNrLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHUsIGEubGluZU1hc2tTaGFwZSA9IG8gPSBhLmxpbmVNYXNrLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSwgby5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1saW5lLW1hc2stc2hhcGVcIiwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIGwsIG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLCBhLmxpbmVNYXNrQ2FwcyA9IG8gPSBhLmxpbmVNYXNrLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHMsIGEubGluZU91dGxpbmVNYXNrID0gbSh5KGggPSBmICsgXCItbGluZS1vdXRsaW5lLW1hc2tcIikpLCAobyA9IGEubGluZU91dGxpbmVNYXNrLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSkuaHJlZi5iYXNlVmFsID0gXCIjXCIgKyB1LCBhLmxpbmVPdXRsaW5lTWFza1NoYXBlID0gbyA9IGEubGluZU91dGxpbmVNYXNrLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSwgby5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1saW5lLW91dGxpbmUtbWFzay1zaGFwZVwiLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgbCwgYS5saW5lT3V0bGluZU1hc2tDYXBzID0gbyA9IGEubGluZU91dGxpbmVNYXNrLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHMsIGEuZmFjZSA9IHQuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJnXCIpKSwgYS5saW5lRmFjZSA9IG8gPSBhLmZhY2UuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgciwgYS5saW5lT3V0bGluZUZhY2UgPSBvID0gYS5mYWNlLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHIsIG8uc3R5bGUubWFzayA9IFwidXJsKCNcIiArIGggKyBcIilcIiwgby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIGEucGx1Z01hc2tJZFNFID0gW2YgKyBcIi1wbHVnLW1hc2stMFwiLCBmICsgXCItcGx1Zy1tYXNrLTFcIl0sIGEucGx1Z01hc2tTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4geShhLnBsdWdNYXNrSWRTRVtlXSlcclxuICAgICAgfSksIGEucGx1Z01hc2tTaGFwZVNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gYS5wbHVnTWFza1NFW2VdLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKTtcclxuICAgICAgICByZXR1cm4gdC5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1wbHVnLW1hc2stc2hhcGVcIiwgdFxyXG4gICAgICB9KSwgcCA9IFtdLCBhLnBsdWdPdXRsaW5lTWFza1NFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB5KHBbZV0gPSBmICsgXCItcGx1Zy1vdXRsaW5lLW1hc2stXCIgKyBlKVxyXG4gICAgICB9KSwgYS5wbHVnT3V0bGluZU1hc2tTaGFwZVNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gYS5wbHVnT3V0bGluZU1hc2tTRVtlXS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHQuY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItcGx1Zy1vdXRsaW5lLW1hc2stc2hhcGVcIiwgdFxyXG4gICAgICB9KSwgYS5wbHVnTWFya2VySWRTRSA9IFtmICsgXCItcGx1Zy1tYXJrZXItMFwiLCBmICsgXCItcGx1Zy1tYXJrZXItMVwiXSwgYS5wbHVnTWFya2VyU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBTKGEucGx1Z01hcmtlcklkU0VbZV0pO1xyXG4gICAgICAgIHJldHVybiB1ZSAmJiAodC5tYXJrZXJVbml0cy5iYXNlVmFsID0gU1ZHTWFya2VyRWxlbWVudC5TVkdfTUFSS0VSVU5JVFNfVVNFUlNQQUNFT05VU0UpLCB0XHJcbiAgICAgIH0pLCBhLnBsdWdNYXJrZXJTaGFwZVNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiBhLnBsdWdNYXJrZXJTRVtlXS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcImdcIikpXHJcbiAgICAgIH0pLCBhLnBsdWdGYWNlU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGEucGx1Z01hcmtlclNoYXBlU0VbZV0uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpXHJcbiAgICAgIH0pLCBhLnBsdWdPdXRsaW5lRmFjZVNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gYS5wbHVnTWFya2VyU2hhcGVTRVtlXS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHQuc3R5bGUubWFzayA9IFwidXJsKCNcIiArIHBbZV0gKyBcIilcIiwgdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIHRcclxuICAgICAgfSksIGEucGx1Z3NGYWNlID0gbyA9IGEuZmFjZS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSksIG8uY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItcGx1Z3MtZmFjZVwiLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgciwgby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIGEuY3VyU3RhdHMuc2hvd19pbkFuaW0gPyAoYS5pc1Nob3duID0gMSwgZ1tjLnNob3dfZWZmZWN0XS5zdG9wKGEsICEwKSkgOiBhLmlzU2hvd24gfHwgKHQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIpLCBkLmJvZHkuYXBwZW5kQ2hpbGQodCksIFswLCAxLCAyXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQsIG4gPSBhLm9wdGlvbnMubGFiZWxTRU1bZV07XHJcbiAgICAgICAgbiAmJiBfKG4sIFwibGFiZWxcIikgJiYgKHQgPSAkW24uX2lkXSkuY29uZi5pbml0U3ZnICYmIHQuY29uZi5pbml0U3ZnKHQsIGEpXHJcbiAgICAgIH0pXHJcbiAgICB9KHMsIGUpLCBwLmxpbmUgPSBwLnBsdWcgPSBwLmxpbmVPdXRsaW5lID0gcC5wbHVnT3V0bGluZSA9IHAuZmFjZXMgPSBwLmVmZmVjdCA9ICEwKSwgcC5wb3NpdGlvbiA9IGMoaCwgdSwgXCJwYXRoXCIsIG0sIG51bGwsIG51bGwsIHBlLnBhdGgpIHx8IHAucG9zaXRpb24sIHAucG9zaXRpb24gPSBjKGgsIHUsIFwic3RhcnRTb2NrZXRcIiwgbiwgXCJzb2NrZXRTRVwiLCAwKSB8fCBwLnBvc2l0aW9uLCBwLnBvc2l0aW9uID0gYyhoLCB1LCBcImVuZFNvY2tldFwiLCBuLCBcInNvY2tldFNFXCIsIDEpIHx8IHAucG9zaXRpb24sIFt1LnN0YXJ0U29ja2V0R3Jhdml0eSwgdS5lbmRTb2NrZXRHcmF2aXR5XS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHZhciBuLCBhLCBpID0gITE7XHJcbiAgICAgIG51bGwgIT0gZSAmJiAoQXJyYXkuaXNBcnJheShlKSA/IHcoZVswXSkgJiYgdyhlWzFdKSAmJiAoaSA9IFtlWzBdLCBlWzFdXSwgQXJyYXkuaXNBcnJheShoLnNvY2tldEdyYXZpdHlTRVt0XSkgJiYgKG4gPSBpLCBhID0gaC5zb2NrZXRHcmF2aXR5U0VbdF0sIG4ubGVuZ3RoID09PSBhLmxlbmd0aCAmJiBuLmV2ZXJ5KGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIGUgPT09IGFbdF1cclxuICAgICAgfSkpICYmIChpID0gITEpKSA6ICgoZSArIFwiXCIpLnRvTG93ZXJDYXNlKCkgPT09IHggPyBpID0gbnVsbCA6IHcoZSkgJiYgMCA8PSBlICYmIChpID0gZSksIGkgPT09IGguc29ja2V0R3Jhdml0eVNFW3RdICYmIChpID0gITEpKSwgITEgIT09IGkgJiYgKGguc29ja2V0R3Jhdml0eVNFW3RdID0gaSwgcC5wb3NpdGlvbiA9ICEwKSlcclxuICAgIH0pLCBwLmxpbmUgPSBkKGgsIHUsIFwiY29sb3JcIiwgbnVsbCwgXCJsaW5lQ29sb3JcIiwgbnVsbCwgcGUubGluZUNvbG9yLCBudWxsLCAhMCkgfHwgcC5saW5lLCBwLmxpbmUgPSBkKGgsIHUsIFwic2l6ZVwiLCBudWxsLCBcImxpbmVTaXplXCIsIG51bGwsIHBlLmxpbmVTaXplLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICByZXR1cm4gMCA8IGVcclxuICAgIH0pIHx8IHAubGluZSwgW1wic3RhcnRQbHVnXCIsIFwiZW5kUGx1Z1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHAucGx1ZyA9IGMoaCwgdSwgZSwgRSwgXCJwbHVnU0VcIiwgdCwgcGUucGx1Z1NFW3RdKSB8fCBwLnBsdWcsIHAucGx1ZyA9IGQoaCwgdSwgZSArIFwiQ29sb3JcIiwgXCJzdHJpbmdcIiwgXCJwbHVnQ29sb3JTRVwiLCB0LCBudWxsLCBudWxsLCAhMCkgfHwgcC5wbHVnLCBwLnBsdWcgPSBkKGgsIHUsIGUgKyBcIlNpemVcIiwgbnVsbCwgXCJwbHVnU2l6ZVNFXCIsIHQsIHBlLnBsdWdTaXplU0VbdF0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIDAgPCBlXHJcbiAgICAgIH0pIHx8IHAucGx1Z1xyXG4gICAgfSksIHAubGluZU91dGxpbmUgPSBkKGgsIHUsIFwib3V0bGluZVwiLCBudWxsLCBcImxpbmVPdXRsaW5lRW5hYmxlZFwiLCBudWxsLCBwZS5saW5lT3V0bGluZUVuYWJsZWQpIHx8IHAubGluZU91dGxpbmUsIHAubGluZU91dGxpbmUgPSBkKGgsIHUsIFwib3V0bGluZUNvbG9yXCIsIG51bGwsIFwibGluZU91dGxpbmVDb2xvclwiLCBudWxsLCBwZS5saW5lT3V0bGluZUNvbG9yLCBudWxsLCAhMCkgfHwgcC5saW5lT3V0bGluZSwgcC5saW5lT3V0bGluZSA9IGQoaCwgdSwgXCJvdXRsaW5lU2l6ZVwiLCBudWxsLCBcImxpbmVPdXRsaW5lU2l6ZVwiLCBudWxsLCBwZS5saW5lT3V0bGluZVNpemUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHJldHVybiAwIDwgZSAmJiBlIDw9IC40OFxyXG4gICAgfSkgfHwgcC5saW5lT3V0bGluZSwgW1wic3RhcnRQbHVnT3V0bGluZVwiLCBcImVuZFBsdWdPdXRsaW5lXCJdLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgcC5wbHVnT3V0bGluZSA9IGQoaCwgdSwgZSwgbnVsbCwgXCJwbHVnT3V0bGluZUVuYWJsZWRTRVwiLCB0LCBwZS5wbHVnT3V0bGluZUVuYWJsZWRTRVt0XSkgfHwgcC5wbHVnT3V0bGluZSwgcC5wbHVnT3V0bGluZSA9IGQoaCwgdSwgZSArIFwiQ29sb3JcIiwgXCJzdHJpbmdcIiwgXCJwbHVnT3V0bGluZUNvbG9yU0VcIiwgdCwgbnVsbCwgbnVsbCwgITApIHx8IHAucGx1Z091dGxpbmUsIHAucGx1Z091dGxpbmUgPSBkKGgsIHUsIGUgKyBcIlNpemVcIiwgbnVsbCwgXCJwbHVnT3V0bGluZVNpemVTRVwiLCB0LCBwZS5wbHVnT3V0bGluZVNpemVTRVt0XSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gMSA8PSBlXHJcbiAgICAgIH0pIHx8IHAucGx1Z091dGxpbmVcclxuICAgIH0pLCBbXCJzdGFydExhYmVsXCIsIFwiZW5kTGFiZWxcIiwgXCJtaWRkbGVMYWJlbFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHZhciBuLCBhLCBpLCBvID0gdVtlXSxcclxuICAgICAgICBsID0gaC5sYWJlbFNFTVt0XSAmJiAhcy5vcHRpb25Jc0F0dGFjaC5sYWJlbFNFTVt0XSA/ICRbaC5sYWJlbFNFTVt0XS5faWRdLnRleHQgOiBoLmxhYmVsU0VNW3RdLFxyXG4gICAgICAgIHIgPSAhMTtcclxuICAgICAgaWYgKChuID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbykgJiYgKG8gPSBvLnRyaW0oKSksIChuIHx8IG8gJiYgKHIgPSBfKG8sIFwibGFiZWxcIikpKSAmJiBvICE9PSBsKSB7XHJcbiAgICAgICAgaWYgKGgubGFiZWxTRU1bdF0gJiYgKFVlKHMsICRbaC5sYWJlbFNFTVt0XS5faWRdKSwgaC5sYWJlbFNFTVt0XSA9IFwiXCIpLCBvKSB7XHJcbiAgICAgICAgICBpZiAociA/IChhID0gJFsoaSA9IG8pLl9pZF0pLmJvdW5kVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBhLmNvbmYucmVtb3ZlT3B0aW9uKGEsIGUpXHJcbiAgICAgICAgICAgIH0pIDogaSA9IG5ldyBTKHkuY2FwdGlvbkxhYmVsLCBbb10pLCAhSGUocywgJFtpLl9pZF0sIGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBiaW5kIGF0dGFjaG1lbnRcIik7XHJcbiAgICAgICAgICBoLmxhYmVsU0VNW3RdID0gaVxyXG4gICAgICAgIH1cclxuICAgICAgICBzLm9wdGlvbklzQXR0YWNoLmxhYmVsU0VNW3RdID0gclxyXG4gICAgICB9XHJcbiAgICB9KSwgT2JqZWN0LmtleXModGUpLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcclxuICAgICAgdmFyIGUsIHQsIG8gPSB0ZVthXSxcclxuICAgICAgICBuID0gYSArIFwiX2VuYWJsZWRcIixcclxuICAgICAgICBpID0gYSArIFwiX29wdGlvbnNcIjtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGwoYSkge1xyXG4gICAgICAgIHZhciBpID0ge307XHJcbiAgICAgICAgcmV0dXJuIG8ub3B0aW9uc0NvbmYuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSBlWzBdLFxyXG4gICAgICAgICAgICBuID0gZVszXTtcclxuICAgICAgICAgIG51bGwgPT0gZVs0XSB8fCBpW25dIHx8IChpW25dID0gW10pLCAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ID8gdCA6IFwiaWRcIiA9PT0gdCA/IGMgOiBkKS5hcHBseShudWxsLCBbaSwgYV0uY29uY2F0KGUuc2xpY2UoMSkpKVxyXG4gICAgICAgIH0pLCBpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHIoZSkge1xyXG4gICAgICAgIHZhciB0LCBuID0gYSArIFwiX2FuaW1PcHRpb25zXCI7XHJcbiAgICAgICAgcmV0dXJuIGUuaGFzT3duUHJvcGVydHkoXCJhbmltYXRpb25cIikgPyBrKGUuYW5pbWF0aW9uKSA/IHQgPSBzLmN1clN0YXRzW25dID0gemUoZS5hbmltYXRpb24sIG8uZGVmYXVsdEFuaW1PcHRpb25zKSA6ICh0ID0gISFlLmFuaW1hdGlvbiwgcy5jdXJTdGF0c1tuXSA9IHQgPyB6ZSh7fSwgby5kZWZhdWx0QW5pbU9wdGlvbnMpIDogbnVsbCkgOiAodCA9ICEhby5kZWZhdWx0RW5hYmxlZCwgcy5jdXJTdGF0c1tuXSA9IHQgPyB6ZSh7fSwgby5kZWZhdWx0QW5pbU9wdGlvbnMpIDogbnVsbCksIHRcclxuICAgICAgfVxyXG4gICAgICB1Lmhhc093blByb3BlcnR5KGEpICYmIChlID0gdVthXSwgayhlKSA/IChzLmN1clN0YXRzW25dID0gITAsIHQgPSBzLmN1clN0YXRzW2ldID0gbChlKSwgby5hbmltICYmIChzLmN1clN0YXRzW2ldLmFuaW1hdGlvbiA9IHIoZSkpKSA6ICh0ID0gcy5jdXJTdGF0c1tuXSA9ICEhZSkgJiYgKHMuY3VyU3RhdHNbaV0gPSBsKHt9KSwgby5hbmltICYmIChzLmN1clN0YXRzW2ldLmFuaW1hdGlvbiA9IHIoe30pKSksIGNlKHQsIGhbYV0pICYmIChoW2FdID0gdCwgcC5lZmZlY3QgPSAhMCkpXHJcbiAgICB9KSwgRGUocywgcClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFllKGUsIHQsIG4pIHtcclxuICAgIHZhciBhID0ge1xyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYW5jaG9yU0U6IFtdLFxyXG4gICAgICAgIHNvY2tldFNFOiBbXSxcclxuICAgICAgICBzb2NrZXRHcmF2aXR5U0U6IFtdLFxyXG4gICAgICAgIHBsdWdTRTogW10sXHJcbiAgICAgICAgcGx1Z0NvbG9yU0U6IFtdLFxyXG4gICAgICAgIHBsdWdTaXplU0U6IFtdLFxyXG4gICAgICAgIHBsdWdPdXRsaW5lRW5hYmxlZFNFOiBbXSxcclxuICAgICAgICBwbHVnT3V0bGluZUNvbG9yU0U6IFtdLFxyXG4gICAgICAgIHBsdWdPdXRsaW5lU2l6ZVNFOiBbXSxcclxuICAgICAgICBsYWJlbFNFTTogW1wiXCIsIFwiXCIsIFwiXCJdXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbklzQXR0YWNoOiB7XHJcbiAgICAgICAgYW5jaG9yU0U6IFshMSwgITFdLFxyXG4gICAgICAgIGxhYmVsU0VNOiBbITEsICExLCAhMV1cclxuICAgICAgfSxcclxuICAgICAgY3VyU3RhdHM6IHt9LFxyXG4gICAgICBhcGxTdGF0czoge30sXHJcbiAgICAgIGF0dGFjaG1lbnRzOiBbXSxcclxuICAgICAgZXZlbnRzOiB7fSxcclxuICAgICAgcmVmbG93VGFyZ2V0czogW11cclxuICAgIH07XHJcbiAgICBUZShhLmN1clN0YXRzLCBZKSwgVGUoYS5hcGxTdGF0cywgWSksIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0ID0gdGVbZV0uc3RhdHM7XHJcbiAgICAgIFRlKGEuY3VyU3RhdHMsIHQpLCBUZShhLmFwbFN0YXRzLCB0KSwgYS5vcHRpb25zW2VdID0gITFcclxuICAgIH0pLCBUZShhLmN1clN0YXRzLCBYKSwgVGUoYS5hcGxTdGF0cywgWCksIGEuY3VyU3RhdHMuc2hvd19lZmZlY3QgPSBxLCBhLmN1clN0YXRzLnNob3dfYW5pbU9wdGlvbnMgPSBkZShnW3FdLmRlZmF1bHRBbmltT3B0aW9ucyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pZFwiLCB7XHJcbiAgICAgIHZhbHVlOiArK0pcclxuICAgIH0pLCBhLl9pZCA9IHRoaXMuX2lkLCBLW3RoaXMuX2lkXSA9IGEsIDEgPT09IGFyZ3VtZW50cy5sZW5ndGggJiYgKG4gPSBlLCBlID0gbnVsbCksIG4gPSBuIHx8IHt9LCAoZSB8fCB0KSAmJiAobiA9IGRlKG4pLCBlICYmIChuLnN0YXJ0ID0gZSksIHQgJiYgKG4uZW5kID0gdCkpLCBhLmlzU2hvd24gPSBhLmFwbFN0YXRzLnNob3dfb24gPSAhbi5oaWRlLCB0aGlzLnNldE9wdGlvbnMobilcclxuICB9XHJcbiAgcmV0dXJuIHRlID0ge1xyXG4gICAgICBkYXNoOiB7XHJcbiAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgIGRhc2hfbGVuOiB7fSxcclxuICAgICAgICAgIGRhc2hfZ2FwOiB7fSxcclxuICAgICAgICAgIGRhc2hfbWF4T2Zmc2V0OiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbTogITAsXHJcbiAgICAgICAgZGVmYXVsdEFuaW1PcHRpb25zOiB7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMWUzLFxyXG4gICAgICAgICAgdGltaW5nOiBcImxpbmVhclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zQ29uZjogW1xyXG4gICAgICAgICAgW1widHlwZVwiLCBcImxlblwiLCBcIm51bWJlclwiLCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMCA8IGVcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgW1widHlwZVwiLCBcImdhcFwiLCBcIm51bWJlclwiLCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMCA8IGVcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgSWUoZSwgXCJhcGxfbGluZV9zdHJva2VXaWR0aFwiLCB0ZS5kYXNoLnVwZGF0ZSksIGUubGluZUZhY2Uuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IDAsIHRlLmRhc2gudXBkYXRlKGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IGUuY3VyU3RhdHM7XHJcbiAgICAgICAgICBDZShlLCBcImFwbF9saW5lX3N0cm9rZVdpZHRoXCIsIHRlLmRhc2gudXBkYXRlKSwgdC5kYXNoX2FuaW1JZCAmJiAoYy5yZW1vdmUodC5kYXNoX2FuaW1JZCksIHQuZGFzaF9hbmltSWQgPSBudWxsKSwgZS5saW5lRmFjZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBcIm5vbmVcIiwgZS5saW5lRmFjZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gMCwgVGUoZS5hcGxTdGF0cywgdGUuZGFzaC5zdGF0cylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHZhciBlLCBuID0gdC5jdXJTdGF0cyxcclxuICAgICAgICAgICAgYSA9IHQuYXBsU3RhdHMsXHJcbiAgICAgICAgICAgIGkgPSBhLmRhc2hfb3B0aW9ucyxcclxuICAgICAgICAgICAgbyA9ICExO1xyXG4gICAgICAgICAgbi5kYXNoX2xlbiA9IGkubGVuIHx8IDIgKiBhLmxpbmVfc3Ryb2tlV2lkdGgsIG4uZGFzaF9nYXAgPSBpLmdhcCB8fCBhLmxpbmVfc3Ryb2tlV2lkdGgsIG4uZGFzaF9tYXhPZmZzZXQgPSBuLmRhc2hfbGVuICsgbi5kYXNoX2dhcCwgbyA9IFdlKHQsIGEsIFwiZGFzaF9sZW5cIiwgbi5kYXNoX2xlbikgfHwgbywgKG8gPSBXZSh0LCBhLCBcImRhc2hfZ2FwXCIsIG4uZGFzaF9nYXApIHx8IG8pICYmICh0LmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGEuZGFzaF9sZW4gKyBcIixcIiArIGEuZGFzaF9nYXApLCBuLmRhc2hfYW5pbU9wdGlvbnMgPyAobyA9IFdlKHQsIGEsIFwiZGFzaF9tYXhPZmZzZXRcIiwgbi5kYXNoX21heE9mZnNldCksIGEuZGFzaF9hbmltT3B0aW9ucyAmJiAobyB8fCBjZShuLmRhc2hfYW5pbU9wdGlvbnMsIGEuZGFzaF9hbmltT3B0aW9ucykpICYmIChuLmRhc2hfYW5pbUlkICYmIChlID0gYy5zdG9wKG4uZGFzaF9hbmltSWQpLCBjLnJlbW92ZShuLmRhc2hfYW5pbUlkKSksIGEuZGFzaF9hbmltT3B0aW9ucyA9IG51bGwpLCBhLmRhc2hfYW5pbU9wdGlvbnMgfHwgKG4uZGFzaF9hbmltSWQgPSBjLmFkZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDEgLSBlKSAqIGEuZGFzaF9tYXhPZmZzZXQgKyBcInB4XCJcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHQubGluZUZhY2Uuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGVcclxuICAgICAgICAgIH0sIG4uZGFzaF9hbmltT3B0aW9ucy5kdXJhdGlvbiwgMCwgbi5kYXNoX2FuaW1PcHRpb25zLnRpbWluZywgITEsIGUpLCBhLmRhc2hfYW5pbU9wdGlvbnMgPSBkZShuLmRhc2hfYW5pbU9wdGlvbnMpKSkgOiBhLmRhc2hfYW5pbU9wdGlvbnMgJiYgKG4uZGFzaF9hbmltSWQgJiYgKGMucmVtb3ZlKG4uZGFzaF9hbmltSWQpLCBuLmRhc2hfYW5pbUlkID0gbnVsbCksIHQubGluZUZhY2Uuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IDAsIGEuZGFzaF9hbmltT3B0aW9ucyA9IG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBncmFkaWVudDoge1xyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBncmFkaWVudF9jb2xvclNFOiB7XHJcbiAgICAgICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGdyYWRpZW50X3BvaW50U0U6IHtcclxuICAgICAgICAgICAgaGFzU0U6ICEwLFxyXG4gICAgICAgICAgICBoYXNQcm9wczogITBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnNDb25mOiBbXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwic3RhcnRDb2xvclwiLCBcInN0cmluZ1wiLCBcImNvbG9yU0VcIiwgMCwgbnVsbCwgbnVsbCwgITBdLFxyXG4gICAgICAgICAgW1widHlwZVwiLCBcImVuZENvbG9yXCIsIFwic3RyaW5nXCIsIFwiY29sb3JTRVwiLCAxLCBudWxsLCBudWxsLCAhMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCwgYSA9IGUuYmFzZVdpbmRvdy5kb2N1bWVudCxcclxuICAgICAgICAgICAgbiA9IGUuZGVmcyxcclxuICAgICAgICAgICAgaSA9IHYgKyBcIi1cIiArIGUuX2lkICsgXCItZ3JhZGllbnRcIjtcclxuICAgICAgICAgIGUuZWZjX2dyYWRpZW50X2dyYWRpZW50ID0gdCA9IG4uYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50TlMoYiwgXCJsaW5lYXJHcmFkaWVudFwiKSksIHQuaWQgPSBpLCB0LmdyYWRpZW50VW5pdHMuYmFzZVZhbCA9IFNWR1VuaXRUeXBlcy5TVkdfVU5JVF9UWVBFX1VTRVJTUEFDRU9OVVNFLCBbdC54MSwgdC55MSwgdC54MiwgdC55Ml0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgsIDApXHJcbiAgICAgICAgICB9KSwgZS5lZmNfZ3JhZGllbnRfc3RvcFNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IGUuZWZjX2dyYWRpZW50X2dyYWRpZW50LmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudE5TKGIsIFwic3RvcFwiKSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgbi5vZmZzZXQuYmFzZVZhbCA9IHRcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIGlmIChlLmNvZGUgIT09IERPTUV4Y2VwdGlvbi5OT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIpIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIiwgdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gblxyXG4gICAgICAgICAgfSksIEllKGUsIFwiY3VyX3BsdWdfY29sb3JTRVwiLCB0ZS5ncmFkaWVudC51cGRhdGUpLCBJZShlLCBcImFwbF9wYXRoXCIsIHRlLmdyYWRpZW50LnVwZGF0ZSksIGUuY3VyU3RhdHMubGluZV9hbHRDb2xvciA9ICEwLCBlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZSA9IFwidXJsKCNcIiArIGkgKyBcIilcIiwgdGUuZ3JhZGllbnQudXBkYXRlKGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBlLmVmY19ncmFkaWVudF9ncmFkaWVudCAmJiAoZS5kZWZzLnJlbW92ZUNoaWxkKGUuZWZjX2dyYWRpZW50X2dyYWRpZW50KSwgZS5lZmNfZ3JhZGllbnRfZ3JhZGllbnQgPSBlLmVmY19ncmFkaWVudF9zdG9wU0UgPSBudWxsKSwgQ2UoZSwgXCJjdXJfcGx1Z19jb2xvclNFXCIsIHRlLmdyYWRpZW50LnVwZGF0ZSksIENlKGUsIFwiYXBsX3BhdGhcIiwgdGUuZ3JhZGllbnQudXBkYXRlKSwgZS5jdXJTdGF0cy5saW5lX2FsdENvbG9yID0gITEsIGUubGluZUZhY2Uuc3R5bGUuc3Ryb2tlID0gZS5jdXJTdGF0cy5saW5lX2NvbG9yLCBUZShlLmFwbFN0YXRzLCB0ZS5ncmFkaWVudC5zdGF0cylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgIHZhciBlLCB0LCBpID0gYS5jdXJTdGF0cyxcclxuICAgICAgICAgICAgbyA9IGEuYXBsU3RhdHMsXHJcbiAgICAgICAgICAgIG4gPSBvLmdyYWRpZW50X29wdGlvbnMsXHJcbiAgICAgICAgICAgIGwgPSBhLnBhdGhMaXN0LmFuaW1WYWwgfHwgYS5wYXRoTGlzdC5iYXNlVmFsO1xyXG4gICAgICAgICAgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaS5ncmFkaWVudF9jb2xvclNFW2VdID0gbi5jb2xvclNFW2VdIHx8IGkucGx1Z19jb2xvclNFW2VdXHJcbiAgICAgICAgICB9KSwgdCA9IGxbMF1bMF0sIGkuZ3JhZGllbnRfcG9pbnRTRVswXSA9IHtcclxuICAgICAgICAgICAgeDogdC54LFxyXG4gICAgICAgICAgICB5OiB0LnlcclxuICAgICAgICAgIH0sIHQgPSAoZSA9IGxbbC5sZW5ndGggLSAxXSlbZS5sZW5ndGggLSAxXSwgaS5ncmFkaWVudF9wb2ludFNFWzFdID0ge1xyXG4gICAgICAgICAgICB4OiB0LngsXHJcbiAgICAgICAgICAgIHk6IHQueVxyXG4gICAgICAgICAgfSwgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdmFyIG47XHJcbiAgICAgICAgICAgIFdlKGEsIG8uZ3JhZGllbnRfY29sb3JTRSwgdCwgbiA9IGkuZ3JhZGllbnRfY29sb3JTRVt0XSkgJiYgKHVlID8gKG4gPSBmZShuKSwgYS5lZmNfZ3JhZGllbnRfc3RvcFNFW3RdLnN0eWxlLnN0b3BDb2xvciA9IG5bMV0sIGEuZWZjX2dyYWRpZW50X3N0b3BTRVt0XS5zdHlsZS5zdG9wT3BhY2l0eSA9IG5bMF0pIDogYS5lZmNfZ3JhZGllbnRfc3RvcFNFW3RdLnN0eWxlLnN0b3BDb2xvciA9IG4pLCBbXCJ4XCIsIFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgKG4gPSBpLmdyYWRpZW50X3BvaW50U0VbdF1bZV0pICE9PSBvLmdyYWRpZW50X3BvaW50U0VbdF1bZV0gJiYgKGEuZWZjX2dyYWRpZW50X2dyYWRpZW50W2UgKyAodCArIDEpXS5iYXNlVmFsLnZhbHVlID0gby5ncmFkaWVudF9wb2ludFNFW3RdW2VdID0gbilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkcm9wU2hhZG93OiB7XHJcbiAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgIGRyb3BTaGFkb3dfZHg6IHt9LFxyXG4gICAgICAgICAgZHJvcFNoYWRvd19keToge30sXHJcbiAgICAgICAgICBkcm9wU2hhZG93X2JsdXI6IHt9LFxyXG4gICAgICAgICAgZHJvcFNoYWRvd19jb2xvcjoge30sXHJcbiAgICAgICAgICBkcm9wU2hhZG93X29wYWNpdHk6IHt9LFxyXG4gICAgICAgICAgZHJvcFNoYWRvd194OiB7fSxcclxuICAgICAgICAgIGRyb3BTaGFkb3dfeToge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnNDb25mOiBbXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiZHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiZHlcIiwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiYmx1clwiLCBudWxsLCBudWxsLCBudWxsLCAzLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMCA8PSBlXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIFtcInR5cGVcIiwgXCJjb2xvclwiLCBudWxsLCBudWxsLCBudWxsLCBcIiMwMDBcIiwgbnVsbCwgITBdLFxyXG4gICAgICAgICAgW1widHlwZVwiLCBcIm9wYWNpdHlcIiwgbnVsbCwgbnVsbCwgbnVsbCwgLjgsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwIDw9IGUgJiYgZSA8PSAxXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHZhciBlLCBuLCBhLCBpLCBvLCBsID0gdC5iYXNlV2luZG93LmRvY3VtZW50LFxyXG4gICAgICAgICAgICByID0gdC5kZWZzLFxyXG4gICAgICAgICAgICBzID0gdiArIFwiLVwiICsgdC5faWQgKyBcIi1kcm9wU2hhZG93XCIsXHJcbiAgICAgICAgICAgIHUgPSAoZSA9IGwsIG4gPSBzLCBvID0ge30sIFwiYm9vbGVhblwiICE9IHR5cGVvZiBwICYmIChwID0gISF3aW5kb3cuU1ZHRkVEcm9wU2hhZG93RWxlbWVudCAmJiAhdWUpLCBvLmVsbXNBcHBlbmQgPSBbby5lbG1GaWx0ZXIgPSBhID0gZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmaWx0ZXJcIildLCBhLmZpbHRlclVuaXRzLmJhc2VWYWwgPSBTVkdVbml0VHlwZXMuU1ZHX1VOSVRfVFlQRV9VU0VSU1BBQ0VPTlVTRSwgYS54LmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgsIDApLCBhLnkuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMCksIGEud2lkdGguYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFLCAxMDApLCBhLmhlaWdodC5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsIDEwMCksIGEuaWQgPSBuLCBwID8gKG8uZWxtT2Zmc2V0ID0gby5lbG1CbHVyID0gaSA9IGEuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZURyb3BTaGFkb3dcIikpLCBvLnN0eWxlRmxvb2QgPSBpLnN0eWxlKSA6IChvLmVsbUJsdXIgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVHYXVzc2lhbkJsdXJcIikpLCBvLmVsbU9mZnNldCA9IGkgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVPZmZzZXRcIikpLCBpLnJlc3VsdC5iYXNlVmFsID0gXCJvZmZzZXRibHVyXCIsIGkgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVGbG9vZFwiKSksIG8uc3R5bGVGbG9vZCA9IGkuc3R5bGUsIChpID0gYS5hcHBlbmRDaGlsZChlLmNyZWF0ZUVsZW1lbnROUyhiLCBcImZlQ29tcG9zaXRlXCIpKSkuaW4yLmJhc2VWYWwgPSBcIm9mZnNldGJsdXJcIiwgaS5vcGVyYXRvci5iYXNlVmFsID0gU1ZHRkVDb21wb3NpdGVFbGVtZW50LlNWR19GRUNPTVBPU0lURV9PUEVSQVRPUl9JTiwgKGkgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVNZXJnZVwiKSkpLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVNZXJnZU5vZGVcIikpLCBpLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVNZXJnZU5vZGVcIikpLmluMS5iYXNlVmFsID0gXCJTb3VyY2VHcmFwaGljXCIpLCBvKTtcclxuICAgICAgICAgIFtcImVsbUZpbHRlclwiLCBcImVsbU9mZnNldFwiLCBcImVsbUJsdXJcIiwgXCJzdHlsZUZsb29kXCIsIFwiZWxtc0FwcGVuZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRbXCJlZmNfZHJvcFNoYWRvd19cIiArIGVdID0gdVtlXVxyXG4gICAgICAgICAgfSksIHUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHIuYXBwZW5kQ2hpbGQoZSlcclxuICAgICAgICAgIH0pLCB0LmZhY2Uuc2V0QXR0cmlidXRlKFwiZmlsdGVyXCIsIFwidXJsKCNcIiArIHMgKyBcIilcIiksIEllKHQsIFwibmV3X2VkZ2U0dmlld0JveFwiLCB0ZS5kcm9wU2hhZG93LmFkanVzdEVkZ2UpLCB0ZS5kcm9wU2hhZG93LnVwZGF0ZSh0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSBlLmRlZnM7XHJcbiAgICAgICAgICBlLmVmY19kcm9wU2hhZG93X2VsbXNBcHBlbmQgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHQucmVtb3ZlQ2hpbGQoZSlcclxuICAgICAgICAgIH0pLCBlLmVmY19kcm9wU2hhZG93X2VsbUZpbHRlciA9IGUuZWZjX2Ryb3BTaGFkb3dfZWxtT2Zmc2V0ID0gZS5lZmNfZHJvcFNoYWRvd19lbG1CbHVyID0gZS5lZmNfZHJvcFNoYWRvd19zdHlsZUZsb29kID0gZS5lZmNfZHJvcFNoYWRvd19lbG1zQXBwZW5kID0gbnVsbCksIENlKGUsIFwibmV3X2VkZ2U0dmlld0JveFwiLCB0ZS5kcm9wU2hhZG93LmFkanVzdEVkZ2UpLCBEZShlLCB7fSksIGUuZmFjZS5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksIFRlKGUuYXBsU3RhdHMsIHRlLmRyb3BTaGFkb3cuc3RhdHMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCwgbiwgYSA9IGUuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgIGkgPSBlLmFwbFN0YXRzLFxyXG4gICAgICAgICAgICBvID0gaS5kcm9wU2hhZG93X29wdGlvbnM7XHJcbiAgICAgICAgICBhLmRyb3BTaGFkb3dfZHggPSB0ID0gby5keCwgV2UoZSwgaSwgXCJkcm9wU2hhZG93X2R4XCIsIHQpICYmIChlLmVmY19kcm9wU2hhZG93X2VsbU9mZnNldC5keC5iYXNlVmFsID0gdCwgbiA9ICEwKSwgYS5kcm9wU2hhZG93X2R5ID0gdCA9IG8uZHksIFdlKGUsIGksIFwiZHJvcFNoYWRvd19keVwiLCB0KSAmJiAoZS5lZmNfZHJvcFNoYWRvd19lbG1PZmZzZXQuZHkuYmFzZVZhbCA9IHQsIG4gPSAhMCksIGEuZHJvcFNoYWRvd19ibHVyID0gdCA9IG8uYmx1ciwgV2UoZSwgaSwgXCJkcm9wU2hhZG93X2JsdXJcIiwgdCkgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfZWxtQmx1ci5zZXRTdGREZXZpYXRpb24odCwgdCksIG4gPSAhMCksIG4gJiYgRGUoZSwge30pLCBhLmRyb3BTaGFkb3dfY29sb3IgPSB0ID0gby5jb2xvciwgV2UoZSwgaSwgXCJkcm9wU2hhZG93X2NvbG9yXCIsIHQpICYmIChlLmVmY19kcm9wU2hhZG93X3N0eWxlRmxvb2QuZmxvb2RDb2xvciA9IHQpLCBhLmRyb3BTaGFkb3dfb3BhY2l0eSA9IHQgPSBvLm9wYWNpdHksIFdlKGUsIGksIFwiZHJvcFNoYWRvd19vcGFjaXR5XCIsIHQpICYmIChlLmVmY19kcm9wU2hhZG93X3N0eWxlRmxvb2QuZmxvb2RPcGFjaXR5ID0gdClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkanVzdEVkZ2U6IGZ1bmN0aW9uIChhLCBpKSB7XHJcbiAgICAgICAgICB2YXIgZSwgdCwgbyA9IGEuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgIGwgPSBhLmFwbFN0YXRzO1xyXG4gICAgICAgICAgbnVsbCAhPSBvLmRyb3BTaGFkb3dfZHggJiYgKGUgPSAzICogby5kcm9wU2hhZG93X2JsdXIsICh0ID0ge1xyXG4gICAgICAgICAgICB4MTogaS54MSAtIGUgKyBvLmRyb3BTaGFkb3dfZHgsXHJcbiAgICAgICAgICAgIHkxOiBpLnkxIC0gZSArIG8uZHJvcFNoYWRvd19keSxcclxuICAgICAgICAgICAgeDI6IGkueDIgKyBlICsgby5kcm9wU2hhZG93X2R4LFxyXG4gICAgICAgICAgICB5MjogaS55MiArIGUgKyBvLmRyb3BTaGFkb3dfZHlcclxuICAgICAgICAgIH0pLngxIDwgaS54MSAmJiAoaS54MSA9IHQueDEpLCB0LnkxIDwgaS55MSAmJiAoaS55MSA9IHQueTEpLCB0LngyID4gaS54MiAmJiAoaS54MiA9IHQueDIpLCB0LnkyID4gaS55MiAmJiAoaS55MiA9IHQueTIpLCBbXCJ4XCIsIFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuID0gXCJkcm9wU2hhZG93X1wiICsgZTtcclxuICAgICAgICAgICAgb1tuXSA9IHQgPSBpW2UgKyBcIjFcIl0sIFdlKGEsIGwsIG4sIHQpICYmIChhLmVmY19kcm9wU2hhZG93X2VsbUZpbHRlcltlXS5iYXNlVmFsLnZhbHVlID0gdClcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgT2JqZWN0LmtleXModGUpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSB0ZVtlXSxcclxuICAgICAgICBuID0gdC5zdGF0cztcclxuICAgICAgbltlICsgXCJfZW5hYmxlZFwiXSA9IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSwgbltlICsgXCJfb3B0aW9uc1wiXSA9IHtcclxuICAgICAgICBoYXNQcm9wczogITBcclxuICAgICAgfSwgdC5hbmltICYmIChuW2UgKyBcIl9hbmltT3B0aW9uc1wiXSA9IHt9LCBuW2UgKyBcIl9hbmltSWRcIl0gPSB7fSlcclxuICAgIH0pLCBnID0ge1xyXG4gICAgICBub25lOiB7XHJcbiAgICAgICAgZGVmYXVsdEFuaW1PcHRpb25zOiB7fSxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSBlLmN1clN0YXRzO1xyXG4gICAgICAgICAgbi5zaG93X2FuaW1JZCAmJiAoYy5yZW1vdmUobi5zaG93X2FuaW1JZCksIG4uc2hvd19hbmltSWQgPSBudWxsKSwgZy5ub25lLnN0YXJ0KGUsIHQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIGcubm9uZS5zdG9wKGUsICEwKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgIHZhciBhID0gZS5jdXJTdGF0cztcclxuICAgICAgICAgIHJldHVybiBuID0gbnVsbCAhPSBuID8gbiA6IGUuYXBsU3RhdHMuc2hvd19vbiwgYS5zaG93X2luQW5pbSA9ICExLCB0ICYmIEdlKGUsIG4pLCBuID8gMSA6IDBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhZGU6IHtcclxuICAgICAgICBkZWZhdWx0QW5pbU9wdGlvbnM6IHtcclxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICB0aW1pbmc6IFwibGluZWFyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChuLCBlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IG4uY3VyU3RhdHMsXHJcbiAgICAgICAgICAgIGEgPSBuLmFwbFN0YXRzO1xyXG4gICAgICAgICAgdC5zaG93X2FuaW1JZCAmJiBjLnJlbW92ZSh0LnNob3dfYW5pbUlkKSwgdC5zaG93X2FuaW1JZCA9IGMuYWRkKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB0ID8gZy5mYWRlLnN0b3AobiwgITApIDogKG4uc3ZnLnN0eWxlLm9wYWNpdHkgPSBlICsgXCJcIiwgbGUgJiYgKEFlKG4sIG4uc3ZnKSwgVmUobikpKVxyXG4gICAgICAgICAgfSwgYS5zaG93X2FuaW1PcHRpb25zLmR1cmF0aW9uLCAxLCBhLnNob3dfYW5pbU9wdGlvbnMudGltaW5nLCBudWxsLCAhMSksIGcuZmFkZS5zdGFydChuLCBlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiwgYSA9IGUuY3VyU3RhdHM7XHJcbiAgICAgICAgICBhLnNob3dfaW5BbmltICYmIChuID0gYy5zdG9wKGEuc2hvd19hbmltSWQpKSwgR2UoZSwgMSksIGEuc2hvd19pbkFuaW0gPSAhMCwgYy5zdGFydChhLnNob3dfYW5pbUlkLCAhZS5hcGxTdGF0cy5zaG93X29uLCBudWxsICE9IHQgPyB0IDogbilcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICB2YXIgYSwgaSA9IGUuY3VyU3RhdHM7XHJcbiAgICAgICAgICByZXR1cm4gbiA9IG51bGwgIT0gbiA/IG4gOiBlLmFwbFN0YXRzLnNob3dfb24sIGEgPSBpLnNob3dfaW5BbmltID8gYy5zdG9wKGkuc2hvd19hbmltSWQpIDogbiA/IDEgOiAwLCBpLnNob3dfaW5BbmltID0gITEsIHQgJiYgKGUuc3ZnLnN0eWxlLm9wYWNpdHkgPSBuID8gXCJcIiA6IFwiMFwiLCBHZShlLCBuKSksIGFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRyYXc6IHtcclxuICAgICAgICBkZWZhdWx0QW5pbU9wdGlvbnM6IHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICB0aW1pbmc6IFsuNTgsIDAsIC40MiwgMV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChuLCBlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IG4uY3VyU3RhdHMsXHJcbiAgICAgICAgICAgIGEgPSBuLmFwbFN0YXRzLFxyXG4gICAgICAgICAgICBsID0gbi5wYXRoTGlzdC5iYXNlVmFsLFxyXG4gICAgICAgICAgICBpID0gT2UobCksXHJcbiAgICAgICAgICAgIHIgPSBpLnNlZ3NMZW4sXHJcbiAgICAgICAgICAgIHMgPSBpLmxlbkFsbDtcclxuICAgICAgICAgIHQuc2hvd19hbmltSWQgJiYgYy5yZW1vdmUodC5zaG93X2FuaW1JZCksIHQuc2hvd19hbmltSWQgPSBjLmFkZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCwgbiwgYSwgaSwgbyA9IC0xO1xyXG4gICAgICAgICAgICBpZiAoMCA9PT0gZSkgbiA9IFtcclxuICAgICAgICAgICAgICBbbFswXVswXSwgbFswXVswXV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoMSA9PT0gZSkgbiA9IGw7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGZvciAodCA9IHMgKiBlLCBuID0gW107IHQgPj0gclsrK29dOykgbi5wdXNoKGxbb10pLCB0IC09IHJbb107XHJcbiAgICAgICAgICAgICAgdCAmJiAoMiA9PT0gKGEgPSBsW29dKS5sZW5ndGggPyBuLnB1c2goW2FbMF0sIHZlKGFbMF0sIGFbMV0sIHQgLyByW29dKV0pIDogKGkgPSB4ZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCBrZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCB0KSksIG4ucHVzaChbYVswXSwgaS5mcm9tUDEsIGkuZnJvbVAyLCBpXSkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuXHJcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB0ID8gZy5kcmF3LnN0b3AobiwgITApIDogKG4ucGF0aExpc3QuYW5pbVZhbCA9IGUsIERlKG4sIHtcclxuICAgICAgICAgICAgICBwYXRoOiAhMFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgIH0sIGEuc2hvd19hbmltT3B0aW9ucy5kdXJhdGlvbiwgMSwgYS5zaG93X2FuaW1PcHRpb25zLnRpbWluZywgbnVsbCwgITEpLCBnLmRyYXcuc3RhcnQobiwgZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4sIGEgPSBlLmN1clN0YXRzO1xyXG4gICAgICAgICAgYS5zaG93X2luQW5pbSAmJiAobiA9IGMuc3RvcChhLnNob3dfYW5pbUlkKSksIEdlKGUsIDEpLCBhLnNob3dfaW5BbmltID0gITAsIEllKGUsIFwiYXBsX3Bvc2l0aW9uXCIsIGcuZHJhdy51cGRhdGUpLCBjLnN0YXJ0KGEuc2hvd19hbmltSWQsICFlLmFwbFN0YXRzLnNob3dfb24sIG51bGwgIT0gdCA/IHQgOiBuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgIHZhciBhLCBpID0gZS5jdXJTdGF0cztcclxuICAgICAgICAgIHJldHVybiBuID0gbnVsbCAhPSBuID8gbiA6IGUuYXBsU3RhdHMuc2hvd19vbiwgYSA9IGkuc2hvd19pbkFuaW0gPyBjLnN0b3AoaS5zaG93X2FuaW1JZCkgOiBuID8gMSA6IDAsIGkuc2hvd19pbkFuaW0gPSAhMSwgdCAmJiAoZS5wYXRoTGlzdC5hbmltVmFsID0gbiA/IG51bGwgOiBbXHJcbiAgICAgICAgICAgIFtlLnBhdGhMaXN0LmJhc2VWYWxbMF1bMF0sIGUucGF0aExpc3QuYmFzZVZhbFswXVswXV1cclxuICAgICAgICAgIF0sIERlKGUsIHtcclxuICAgICAgICAgICAgcGF0aDogITBcclxuICAgICAgICAgIH0pLCBHZShlLCBuKSksIGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIENlKGUsIFwiYXBsX3Bvc2l0aW9uXCIsIGcuZHJhdy51cGRhdGUpLCBlLmN1clN0YXRzLnNob3dfaW5BbmltID8gZy5kcmF3LmluaXQoZSwgZy5kcmF3LnN0b3AoZSkpIDogZS5hcGxTdGF0cy5zaG93X2FuaW1PcHRpb25zID0ge31cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZ1bmN0aW9uIHIobikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSB7fTtcclxuICAgICAgICAgIHRbbl0gPSBlLCB0aGlzLnNldE9wdGlvbnModClcclxuICAgICAgICB9XHJcbiAgICAgIH0gW1xyXG4gICAgICAgIFtcInN0YXJ0XCIsIFwiYW5jaG9yU0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kXCIsIFwiYW5jaG9yU0VcIiwgMV0sXHJcbiAgICAgICAgW1wiY29sb3JcIiwgXCJsaW5lQ29sb3JcIl0sXHJcbiAgICAgICAgW1wic2l6ZVwiLCBcImxpbmVTaXplXCJdLFxyXG4gICAgICAgIFtcInN0YXJ0U29ja2V0R3Jhdml0eVwiLCBcInNvY2tldEdyYXZpdHlTRVwiLCAwXSxcclxuICAgICAgICBbXCJlbmRTb2NrZXRHcmF2aXR5XCIsIFwic29ja2V0R3Jhdml0eVNFXCIsIDFdLFxyXG4gICAgICAgIFtcInN0YXJ0UGx1Z0NvbG9yXCIsIFwicGx1Z0NvbG9yU0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kUGx1Z0NvbG9yXCIsIFwicGx1Z0NvbG9yU0VcIiwgMV0sXHJcbiAgICAgICAgW1wic3RhcnRQbHVnU2l6ZVwiLCBcInBsdWdTaXplU0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kUGx1Z1NpemVcIiwgXCJwbHVnU2l6ZVNFXCIsIDFdLFxyXG4gICAgICAgIFtcIm91dGxpbmVcIiwgXCJsaW5lT3V0bGluZUVuYWJsZWRcIl0sXHJcbiAgICAgICAgW1wib3V0bGluZUNvbG9yXCIsIFwibGluZU91dGxpbmVDb2xvclwiXSxcclxuICAgICAgICBbXCJvdXRsaW5lU2l6ZVwiLCBcImxpbmVPdXRsaW5lU2l6ZVwiXSxcclxuICAgICAgICBbXCJzdGFydFBsdWdPdXRsaW5lXCIsIFwicGx1Z091dGxpbmVFbmFibGVkU0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kUGx1Z091dGxpbmVcIiwgXCJwbHVnT3V0bGluZUVuYWJsZWRTRVwiLCAxXSxcclxuICAgICAgICBbXCJzdGFydFBsdWdPdXRsaW5lQ29sb3JcIiwgXCJwbHVnT3V0bGluZUNvbG9yU0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kUGx1Z091dGxpbmVDb2xvclwiLCBcInBsdWdPdXRsaW5lQ29sb3JTRVwiLCAxXSxcclxuICAgICAgICBbXCJzdGFydFBsdWdPdXRsaW5lU2l6ZVwiLCBcInBsdWdPdXRsaW5lU2l6ZVNFXCIsIDBdLFxyXG4gICAgICAgIFtcImVuZFBsdWdPdXRsaW5lU2l6ZVwiLCBcInBsdWdPdXRsaW5lU2l6ZVNFXCIsIDFdXHJcbiAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gZVswXSxcclxuICAgICAgICAgIG4gPSBlWzFdLFxyXG4gICAgICAgICAgYSA9IGVbMl07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFllLnByb3RvdHlwZSwgdCwge1xyXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gbnVsbCAhPSBhID8gS1t0aGlzLl9pZF0ub3B0aW9uc1tuXVthXSA6IG4gPyBLW3RoaXMuX2lkXS5vcHRpb25zW25dIDogS1t0aGlzLl9pZF0ub3B0aW9uc1t0XTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGwgPT0gZSA/IHggOiBkZShlKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNldDogcih0KSxcclxuICAgICAgICAgIGVudW1lcmFibGU6ICEwXHJcbiAgICAgICAgfSlcclxuICAgICAgfSksIFtcclxuICAgICAgICBbXCJwYXRoXCIsIG1dLFxyXG4gICAgICAgIFtcInN0YXJ0U29ja2V0XCIsIG4sIFwic29ja2V0U0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kU29ja2V0XCIsIG4sIFwic29ja2V0U0VcIiwgMV0sXHJcbiAgICAgICAgW1wic3RhcnRQbHVnXCIsIEUsIFwicGx1Z1NFXCIsIDBdLFxyXG4gICAgICAgIFtcImVuZFBsdWdcIiwgRSwgXCJwbHVnU0VcIiwgMV1cclxuICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGEgPSBlWzBdLFxyXG4gICAgICAgICAgaSA9IGVbMV0sXHJcbiAgICAgICAgICBvID0gZVsyXSxcclxuICAgICAgICAgIGwgPSBlWzNdO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShZZS5wcm90b3R5cGUsIGEsIHtcclxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdCwgbiA9IG51bGwgIT0gbCA/IEtbdGhpcy5faWRdLm9wdGlvbnNbb11bbF0gOiBvID8gS1t0aGlzLl9pZF0ub3B0aW9uc1tvXSA6IEtbdGhpcy5faWRdLm9wdGlvbnNbYV07XHJcbiAgICAgICAgICAgIHJldHVybiBuID8gT2JqZWN0LmtleXMoaSkuc29tZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpW2VdID09PSBuICYmICh0ID0gZSwgITApXHJcbiAgICAgICAgICAgIH0pID8gdCA6IG5ldyBFcnJvcihcIkl0J3MgYnJva2VuXCIpIDogeFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNldDogcihhKSxcclxuICAgICAgICAgIGVudW1lcmFibGU6ICEwXHJcbiAgICAgICAgfSlcclxuICAgICAgfSksIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0ZVtuXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWWUucHJvdG90eXBlLCBuLCB7XHJcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHUsIGUsIHQgPSBLW3RoaXMuX2lkXS5vcHRpb25zW25dO1xyXG4gICAgICAgICAgICByZXR1cm4gayh0KSA/ICh1ID0gdCwgZSA9IGEub3B0aW9uc0NvbmYucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgdmFyIG4sIGEgPSB0WzBdLFxyXG4gICAgICAgICAgICAgICAgaSA9IHRbMV0sXHJcbiAgICAgICAgICAgICAgICBvID0gdFsyXSxcclxuICAgICAgICAgICAgICAgIGwgPSB0WzNdLFxyXG4gICAgICAgICAgICAgICAgciA9IHRbNF0sXHJcbiAgICAgICAgICAgICAgICBzID0gbnVsbCAhPSByID8gdVtsXVtyXSA6IGwgPyB1W2xdIDogdVtpXTtcclxuICAgICAgICAgICAgICByZXR1cm4gZVtpXSA9IFwiaWRcIiA9PT0gYSA/IHMgPyBPYmplY3Qua2V5cyhvKS5zb21lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb1tlXSA9PT0gcyAmJiAobiA9IGUsICEwKVxyXG4gICAgICAgICAgICAgIH0pID8gbiA6IG5ldyBFcnJvcihcIkl0J3MgYnJva2VuXCIpIDogeCA6IG51bGwgPT0gcyA/IHggOiBkZShzKSwgZVxyXG4gICAgICAgICAgICB9LCB7fSksIGEuYW5pbSAmJiAoZS5hbmltYXRpb24gPSBkZSh1LmFuaW1hdGlvbikpLCBlKSA6IHRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXQ6IHIobiksXHJcbiAgICAgICAgICBlbnVtZXJhYmxlOiAhMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pLCBbXCJzdGFydExhYmVsXCIsIFwiZW5kTGFiZWxcIiwgXCJtaWRkbGVMYWJlbFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlLCBuKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFllLnByb3RvdHlwZSwgZSwge1xyXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gS1t0aGlzLl9pZF0sXHJcbiAgICAgICAgICAgICAgdCA9IGUub3B0aW9ucztcclxuICAgICAgICAgICAgcmV0dXJuIHQubGFiZWxTRU1bbl0gJiYgIWUub3B0aW9uSXNBdHRhY2gubGFiZWxTRU1bbl0gPyAkW3QubGFiZWxTRU1bbl0uX2lkXS50ZXh0IDogdC5sYWJlbFNFTVtuXSB8fCBcIlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2V0OiByKGUpLFxyXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSgpLCBZZS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHJldHVybiBaZShLW3RoaXMuX2lkXSwgZSksIHRoaXNcclxuICAgIH0sIFllLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIERlKEtbdGhpcy5faWRdLCB7XHJcbiAgICAgICAgcG9zaXRpb246ICEwXHJcbiAgICAgIH0pLCB0aGlzXHJcbiAgICB9LCBZZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdCA9IEtbdGhpcy5faWRdLFxyXG4gICAgICAgIG4gPSB0LmN1clN0YXRzO1xyXG4gICAgICBPYmplY3Qua2V5cyh0ZSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gZSArIFwiX2FuaW1JZFwiO1xyXG4gICAgICAgIG5bdF0gJiYgYy5yZW1vdmUoblt0XSlcclxuICAgICAgfSksIG4uc2hvd19hbmltSWQgJiYgYy5yZW1vdmUobi5zaG93X2FuaW1JZCksIHQuYXR0YWNobWVudHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgVWUodCwgZSlcclxuICAgICAgfSksIHQuYmFzZVdpbmRvdyAmJiB0LnN2ZyAmJiB0LmJhc2VXaW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0LnN2ZyksIGRlbGV0ZSBLW3RoaXMuX2lkXVxyXG4gICAgfSwgWWUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICByZXR1cm4gamUoS1t0aGlzLl9pZF0sICEwLCBlLCB0KSwgdGhpc1xyXG4gICAgfSwgWWUucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICByZXR1cm4gamUoS1t0aGlzLl9pZF0sICExLCBlLCB0KSwgdGhpc1xyXG4gICAgfSwgbyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgIHQgJiYgJFt0Ll9pZF0gJiYgKHQuYm91bmRUYXJnZXRzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIFVlKGUucHJvcHMsIHQsICEwKVxyXG4gICAgICB9KSwgdC5jb25mLnJlbW92ZSAmJiB0LmNvbmYucmVtb3ZlKHQpLCBkZWxldGUgJFt0Ll9pZF0pXHJcbiAgICB9LCBTID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcclxuICAgICAgICB2YXIgbiwgYSA9IHtcclxuICAgICAgICAgICAgY29uZjogZSxcclxuICAgICAgICAgICAgY3VyU3RhdHM6IHt9LFxyXG4gICAgICAgICAgICBhcGxTdGF0czoge30sXHJcbiAgICAgICAgICAgIGJvdW5kVGFyZ2V0czogW11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpID0ge307XHJcbiAgICAgICAgZS5hcmdPcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gISghdC5sZW5ndGggfHwgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUudHlwZSA/IHR5cGVvZiB0WzBdICE9PSBlLnR5cGUgOiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUudHlwZSB8fCAhZS50eXBlKHRbMF0pKSkgJiYgKGlbZS5vcHRpb25OYW1lXSA9IHQuc2hpZnQoKSwgITApXHJcbiAgICAgICAgfSksIG4gPSB0Lmxlbmd0aCAmJiBrKHRbMF0pID8gZGUodFswXSkgOiB7fSwgT2JqZWN0LmtleXMoaSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgbltlXSA9IGlbZV1cclxuICAgICAgICB9KSwgZS5zdGF0cyAmJiAoVGUoYS5jdXJTdGF0cywgZS5zdGF0cyksIFRlKGEuYXBsU3RhdHMsIGUuc3RhdHMpKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2lkXCIsIHtcclxuICAgICAgICAgIHZhbHVlOiArK2VlXHJcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzUmVtb3ZlZFwiLCB7XHJcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEkW3RoaXMuX2lkXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBhLl9pZCA9IHRoaXMuX2lkLCBlLmluaXQgJiYgIWUuaW5pdChhLCBuKSB8fCAoJFt0aGlzLl9pZF0gPSBhKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzLFxyXG4gICAgICAgICAgbiA9ICRbdC5faWRdO1xyXG4gICAgICAgIG4gJiYgKG4uYm91bmRUYXJnZXRzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgbi5jb25mLnJlbW92ZU9wdGlvbihuLCBlKVxyXG4gICAgICAgIH0pLCBMZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgZSA9ICRbdC5faWRdO1xyXG4gICAgICAgICAgZSAmJiAoY29uc29sZS5lcnJvcihcIkxlYWRlckxpbmVBdHRhY2htZW50IHdhcyBub3QgcmVtb3ZlZCBieSByZW1vdmVPcHRpb25cIiksIG8oZSkpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIH0sIGVcclxuICAgIH0oKSwgd2luZG93LkxlYWRlckxpbmVBdHRhY2htZW50ID0gUywgXyA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgUyAmJiAoIShlLmlzUmVtb3ZlZCB8fCB0ICYmICRbZS5faWRdLmNvbmYudHlwZSAhPT0gdCkgfHwgbnVsbClcclxuICAgIH0sIHkgPSB7XHJcbiAgICAgIHBvaW50QW5jaG9yOiB7XHJcbiAgICAgICAgdHlwZTogXCJhbmNob3JcIixcclxuICAgICAgICBhcmdPcHRpb25zOiBbe1xyXG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJlbGVtZW50XCIsXHJcbiAgICAgICAgICB0eXBlOiB5ZVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZS5lbGVtZW50ID0geS5wb2ludEFuY2hvci5jaGVja0VsZW1lbnQodC5lbGVtZW50KSwgZS54ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQodC54LCAhMCkgfHwgWy41LCAhMF0sIGUueSA9IHkucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KHQueSwgITApIHx8IFsuNSwgITBdLCAhMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlT3B0aW9uOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzLFxyXG4gICAgICAgICAgICBhID0ge30sXHJcbiAgICAgICAgICAgIGkgPSBlLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIG8gPSBuLm9wdGlvbnMuYW5jaG9yU0VbXCJzdGFydFwiID09PSB0Lm9wdGlvbk5hbWUgPyAxIDogMF07XHJcbiAgICAgICAgICBpID09PSBvICYmIChpID0gbyA9PT0gZG9jdW1lbnQuYm9keSA/IG5ldyBTKHkucG9pbnRBbmNob3IsIFtpXSkgOiBkb2N1bWVudC5ib2R5KSwgYVt0Lm9wdGlvbk5hbWVdID0gaSwgWmUobiwgYSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEJCb3hOZXN0OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSBnZShlLmVsZW1lbnQsIHQuYmFzZVdpbmRvdyksXHJcbiAgICAgICAgICAgIGEgPSBuLndpZHRoLFxyXG4gICAgICAgICAgICBpID0gbi5oZWlnaHQ7XHJcbiAgICAgICAgICByZXR1cm4gbi53aWR0aCA9IG4uaGVpZ2h0ID0gMCwgbi5sZWZ0ID0gbi5yaWdodCA9IG4ubGVmdCArIGUueFswXSAqIChlLnhbMV0gPyBhIDogMSksIG4udG9wID0gbi5ib3R0b20gPSBuLnRvcCArIGUueVswXSAqIChlLnlbMV0gPyBpIDogMSksIG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcnNlUGVyY2VudDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuLCBhLCBpID0gITE7XHJcbiAgICAgICAgICByZXR1cm4gdyhlKSA/IGEgPSBlIDogXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAobiA9IHUuZXhlYyhlKSkgJiYgblsyXSAmJiAoaSA9IDAgIT09IChhID0gcGFyc2VGbG9hdChuWzFdKSAvIDEwMCkpLCBudWxsICE9IGEgJiYgKHQgfHwgMCA8PSBhKSA/IFthLCBpXSA6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrRWxlbWVudDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChudWxsID09IGUpIGUgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgZWxzZSBpZiAoIXllKGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJgZWxlbWVudGAgbXVzdCBiZSBFbGVtZW50XCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFyZWFBbmNob3I6IHtcclxuICAgICAgICB0eXBlOiBcImFuY2hvclwiLFxyXG4gICAgICAgIGFyZ09wdGlvbnM6IFt7XHJcbiAgICAgICAgICBvcHRpb25OYW1lOiBcImVsZW1lbnRcIixcclxuICAgICAgICAgIHR5cGU6IHllXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJzaGFwZVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgICBzdHJva2VXaWR0aDoge30sXHJcbiAgICAgICAgICBlbGVtZW50V2lkdGg6IHt9LFxyXG4gICAgICAgICAgZWxlbWVudEhlaWdodDoge30sXHJcbiAgICAgICAgICBlbGVtZW50TGVmdDoge30sXHJcbiAgICAgICAgICBlbGVtZW50VG9wOiB7fSxcclxuICAgICAgICAgIHBhdGhMaXN0UmVsOiB7fSxcclxuICAgICAgICAgIGJCb3hSZWw6IHt9LFxyXG4gICAgICAgICAgcGF0aERhdGE6IHt9LFxyXG4gICAgICAgICAgdmlld0JveEJCb3g6IHtcclxuICAgICAgICAgICAgaGFzUHJvcHM6ICEwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGFzaExlbjoge30sXHJcbiAgICAgICAgICBkYXNoR2FwOiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGksIGUpIHtcclxuICAgICAgICAgIHZhciB0LCBuLCBhLCBvID0gW107XHJcbiAgICAgICAgICByZXR1cm4gaS5lbGVtZW50ID0geS5wb2ludEFuY2hvci5jaGVja0VsZW1lbnQoZS5lbGVtZW50KSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS5jb2xvciAmJiAoaS5jb2xvciA9IGUuY29sb3IudHJpbSgpKSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS5maWxsQ29sb3IgJiYgKGkuZmlsbCA9IGUuZmlsbENvbG9yLnRyaW0oKSksIHcoZS5zaXplKSAmJiAwIDw9IGUuc2l6ZSAmJiAoaS5zaXplID0gZS5zaXplKSwgZS5kYXNoICYmIChpLmRhc2ggPSAhMCwgdyhlLmRhc2gubGVuKSAmJiAwIDwgZS5kYXNoLmxlbiAmJiAoaS5kYXNoTGVuID0gZS5kYXNoLmxlbiksIHcoZS5kYXNoLmdhcCkgJiYgMCA8IGUuZGFzaC5nYXAgJiYgKGkuZGFzaEdhcCA9IGUuZGFzaC5nYXApKSwgXCJjaXJjbGVcIiA9PT0gZS5zaGFwZSA/IGkuc2hhcGUgPSBlLnNoYXBlIDogXCJwb2x5Z29uXCIgPT09IGUuc2hhcGUgJiYgQXJyYXkuaXNBcnJheShlLnBvaW50cykgJiYgMyA8PSBlLnBvaW50cy5sZW5ndGggJiYgZS5wb2ludHMuZXZlcnkoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuICEoISh0LnggPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlWzBdLCAhMCkpIHx8ICEodC55ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZVsxXSwgITApKSkgJiYgKG8ucHVzaCh0KSwgKHQueFsxXSB8fCB0LnlbMV0pICYmIChpLmhhc1JhdGlvID0gITApLCAhMClcclxuICAgICAgICAgIH0pID8gKGkuc2hhcGUgPSBlLnNoYXBlLCBpLnBvaW50cyA9IG8pIDogKGkuc2hhcGUgPSBcInJlY3RcIiwgaS5yYWRpdXMgPSB3KGUucmFkaXVzKSAmJiAwIDw9IGUucmFkaXVzID8gZS5yYWRpdXMgOiAwKSwgXCJyZWN0XCIgIT09IGkuc2hhcGUgJiYgXCJjaXJjbGVcIiAhPT0gaS5zaGFwZSB8fCAoaS54ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZS54LCAhMCkgfHwgWy0uMDUsICEwXSwgaS55ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZS55LCAhMCkgfHwgWy0uMDUsICEwXSwgaS53aWR0aCA9IHkucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KGUud2lkdGgpIHx8IFsxLjEsICEwXSwgaS5oZWlnaHQgPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlLmhlaWdodCkgfHwgWzEuMSwgITBdLCAoaS54WzFdIHx8IGkueVsxXSB8fCBpLndpZHRoWzFdIHx8IGkuaGVpZ2h0WzFdKSAmJiAoaS5oYXNSYXRpbyA9ICEwKSksIHQgPSBpLmVsZW1lbnQub3duZXJEb2N1bWVudCwgaS5zdmcgPSBuID0gdC5jcmVhdGVFbGVtZW50TlMoYiwgXCJzdmdcIiksIG4uY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItYXJlYUFuY2hvclwiLCBuLnZpZXdCb3guYmFzZVZhbCB8fCBuLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMCAwXCIpLCBpLnBhdGggPSBuLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGIsIFwicGF0aFwiKSksIGkucGF0aC5zdHlsZS5maWxsID0gaS5maWxsIHx8IFwibm9uZVwiLCBpLmlzU2hvd24gPSAhMSwgbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiwgdC5ib2R5LmFwcGVuZENoaWxkKG4pLCBSZShhID0gdC5kZWZhdWx0VmlldyksIGkuYm9keU9mZnNldCA9IEJlKGEpLCBpLnVwZGF0ZUNvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSwgdCA9IGkuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgICAgbiA9IGkuYXBsU3RhdHMsXHJcbiAgICAgICAgICAgICAgYSA9IGkuYm91bmRUYXJnZXRzLmxlbmd0aCA/IGkuYm91bmRUYXJnZXRzWzBdLnByb3BzLmN1clN0YXRzIDogbnVsbDtcclxuICAgICAgICAgICAgdC5jb2xvciA9IGUgPSBpLmNvbG9yIHx8IChhID8gYS5saW5lX2NvbG9yIDogcGUubGluZUNvbG9yKSwgV2UoaSwgbiwgXCJjb2xvclwiLCBlKSAmJiAoaS5wYXRoLnN0eWxlLnN0cm9rZSA9IGUpXHJcbiAgICAgICAgICB9LCBpLnVwZGF0ZVNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEdlKGksIGkuYm91bmRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gITAgPT09IGUucHJvcHMuaXNTaG93blxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgIH0sICEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzO1xyXG4gICAgICAgICAgcmV0dXJuIGUuY29sb3IgfHwgSWUobiwgXCJjdXJfbGluZV9jb2xvclwiLCBlLnVwZGF0ZUNvbG9yKSwgSWUobiwgXCJzdmdTaG93XCIsIGUudXBkYXRlU2hvdyksIExlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZS51cGRhdGVDb2xvcigpLCBlLnVwZGF0ZVNob3coKVxyXG4gICAgICAgICAgfSksICEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XHJcbiAgICAgICAgICBlLmNvbG9yIHx8IENlKG4sIFwiY3VyX2xpbmVfY29sb3JcIiwgZS51cGRhdGVDb2xvciksIENlKG4sIFwic3ZnU2hvd1wiLCBlLnVwZGF0ZVNob3cpLCAxIDwgZS5ib3VuZFRhcmdldHMubGVuZ3RoICYmIExlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZS51cGRhdGVDb2xvcigpLCBlLnVwZGF0ZVNob3coKSwgeS5hcmVhQW5jaG9yLnVwZGF0ZShlKSAmJiBlLmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgRGUoZS5wcm9wcywge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICEwXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVPcHRpb246IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB5LnBvaW50QW5jaG9yLnJlbW92ZU9wdGlvbihlLCB0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdC5ib3VuZFRhcmdldHMubGVuZ3RoICYmIChjb25zb2xlLmVycm9yKFwiTGVhZGVyTGluZUF0dGFjaG1lbnQgd2FzIG5vdCB1bmJvdW5kIGJ5IHJlbW92ZVwiKSwgdC5ib3VuZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB5LmFyZWFBbmNob3IudW5iaW5kKHQsIGUpXHJcbiAgICAgICAgICB9KSksIHQuc3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5zdmcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdHJva2VXaWR0aDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHJldHVybiB5LmFyZWFBbmNob3IudXBkYXRlKGUpICYmIDEgPCBlLmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgTGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlLmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgZS5wcm9wcyAhPT0gdCAmJiBEZShlLnByb3BzLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogITBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSksIGUuY3VyU3RhdHMuc3Ryb2tlV2lkdGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFBhdGhEYXRhOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSBnZShlLmVsZW1lbnQsIHQuYmFzZVdpbmRvdyk7XHJcbiAgICAgICAgICByZXR1cm4gd2UoZS5jdXJTdGF0cy5wYXRoTGlzdFJlbCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS54ICs9IG4ubGVmdCwgZS55ICs9IG4udG9wXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QkJveE5lc3Q6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IGdlKGUuZWxlbWVudCwgdC5iYXNlV2luZG93KSxcclxuICAgICAgICAgICAgYSA9IGUuY3VyU3RhdHMuYkJveFJlbDtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGEubGVmdCArIG4ubGVmdCxcclxuICAgICAgICAgICAgdG9wOiBhLnRvcCArIG4udG9wLFxyXG4gICAgICAgICAgICByaWdodDogYS5yaWdodCArIG4ubGVmdCxcclxuICAgICAgICAgICAgYm90dG9tOiBhLmJvdHRvbSArIG4udG9wLFxyXG4gICAgICAgICAgICB3aWR0aDogYS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBhLmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdmFyIGEsIG4sIGksIG8sIGUsIGwsIHIsIHMsIHUsIGgsIHAsIGMsIGQsIGYsIHksIFMsIG0sIGcsIF8sIHYsIEUsIHgsIGIsIGssIHcsIE8sIE0sIEksIEMsIEwsIEEsIFYsIFAgPSB0LmN1clN0YXRzLFxyXG4gICAgICAgICAgICBOID0gdC5hcGxTdGF0cyxcclxuICAgICAgICAgICAgVCA9IHQuYm91bmRUYXJnZXRzLmxlbmd0aCA/IHQuYm91bmRUYXJnZXRzWzBdLnByb3BzLmN1clN0YXRzIDogbnVsbCxcclxuICAgICAgICAgICAgVyA9IHt9O1xyXG4gICAgICAgICAgaWYgKFcuc3Ryb2tlV2lkdGggPSBXZSh0LCBQLCBcInN0cm9rZVdpZHRoXCIsIG51bGwgIT0gdC5zaXplID8gdC5zaXplIDogVCA/IFQubGluZV9zdHJva2VXaWR0aCA6IHBlLmxpbmVTaXplKSwgYSA9IFNlKHQuZWxlbWVudCksIFcuZWxlbWVudFdpZHRoID0gV2UodCwgUCwgXCJlbGVtZW50V2lkdGhcIiwgYS53aWR0aCksIFcuZWxlbWVudEhlaWdodCA9IFdlKHQsIFAsIFwiZWxlbWVudEhlaWdodFwiLCBhLmhlaWdodCksIFcuZWxlbWVudExlZnQgPSBXZSh0LCBQLCBcImVsZW1lbnRMZWZ0XCIsIGEubGVmdCksIFcuZWxlbWVudFRvcCA9IFdlKHQsIFAsIFwiZWxlbWVudFRvcFwiLCBhLnRvcCksIFcuc3Ryb2tlV2lkdGggfHwgdC5oYXNSYXRpbyAmJiAoVy5lbGVtZW50V2lkdGggfHwgVy5lbGVtZW50SGVpZ2h0KSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHQuc2hhcGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJlY3RcIjpcclxuICAgICAgICAgICAgICAodiA9IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHQueFswXSAqICh0LnhbMV0gPyBhLndpZHRoIDogMSksXHJcbiAgICAgICAgICAgICAgICB0b3A6IHQueVswXSAqICh0LnlbMV0gPyBhLmhlaWdodCA6IDEpLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHQud2lkdGhbMF0gKiAodC53aWR0aFsxXSA/IGEud2lkdGggOiAxKSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdC5oZWlnaHRbMF0gKiAodC5oZWlnaHRbMV0gPyBhLmhlaWdodCA6IDEpXHJcbiAgICAgICAgICAgICAgfSkucmlnaHQgPSB2LmxlZnQgKyB2LndpZHRoLCB2LmJvdHRvbSA9IHYudG9wICsgdi5oZWlnaHQsIGsgPSBQLnN0cm9rZVdpZHRoIC8gMiwgeCA9IChiID0gTWF0aC5taW4odi53aWR0aCwgdi5oZWlnaHQpKSA/IGIgLyAyICogTWF0aC5TUVJUMiArIGsgOiAwLCAoRSA9IHQucmFkaXVzID8gdC5yYWRpdXMgPD0geCA/IHQucmFkaXVzIDogeCA6IDApID8gKE8gPSBFIC0gKHcgPSAoRSAtIGspIC8gTWF0aC5TUVJUMiksIEkgPSBFICogVSwgTSA9IFt7XHJcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgLSBPLFxyXG4gICAgICAgICAgICAgICAgeTogdi50b3AgKyB3XHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0ICsgdyxcclxuICAgICAgICAgICAgICAgIHk6IHYudG9wIC0gT1xyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgLSB3LFxyXG4gICAgICAgICAgICAgICAgeTogdi50b3AgLSBPXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCArIE8sXHJcbiAgICAgICAgICAgICAgICB5OiB2LnRvcCArIHdcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiB2LnJpZ2h0ICsgTyxcclxuICAgICAgICAgICAgICAgIHk6IHYuYm90dG9tIC0gd1xyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgLSB3LFxyXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gKyBPXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0ICsgdyxcclxuICAgICAgICAgICAgICAgIHk6IHYuYm90dG9tICsgT1xyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHYubGVmdCAtIE8sXHJcbiAgICAgICAgICAgICAgICB5OiB2LmJvdHRvbSAtIHdcclxuICAgICAgICAgICAgICB9XSwgUC5wYXRoTGlzdFJlbCA9IFtcclxuICAgICAgICAgICAgICAgIFtNWzBdLCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IE1bMF0ueCxcclxuICAgICAgICAgICAgICAgICAgeTogTVswXS55IC0gSVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBNWzFdLnggLSBJLFxyXG4gICAgICAgICAgICAgICAgICB5OiBNWzFdLnlcclxuICAgICAgICAgICAgICAgIH0sIE1bMV1dXHJcbiAgICAgICAgICAgICAgXSwgTVsxXS54ICE9PSBNWzJdLnggJiYgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzFdLCBNWzJdXSksIFAucGF0aExpc3RSZWwucHVzaChbTVsyXSwge1xyXG4gICAgICAgICAgICAgICAgeDogTVsyXS54ICsgSSxcclxuICAgICAgICAgICAgICAgIHk6IE1bMl0ueVxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IE1bM10ueCxcclxuICAgICAgICAgICAgICAgIHk6IE1bM10ueSAtIElcclxuICAgICAgICAgICAgICB9LCBNWzNdXSksIE1bM10ueSAhPT0gTVs0XS55ICYmIFAucGF0aExpc3RSZWwucHVzaChbTVszXSwgTVs0XV0pLCBQLnBhdGhMaXN0UmVsLnB1c2goW01bNF0sIHtcclxuICAgICAgICAgICAgICAgIHg6IE1bNF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IE1bNF0ueSArIElcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBNWzVdLnggKyBJLFxyXG4gICAgICAgICAgICAgICAgeTogTVs1XS55XHJcbiAgICAgICAgICAgICAgfSwgTVs1XV0pLCBNWzVdLnggIT09IE1bNl0ueCAmJiBQLnBhdGhMaXN0UmVsLnB1c2goW01bNV0sIE1bNl1dKSwgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzZdLCB7XHJcbiAgICAgICAgICAgICAgICB4OiBNWzZdLnggLSBJLFxyXG4gICAgICAgICAgICAgICAgeTogTVs2XS55XHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogTVs3XS54LFxyXG4gICAgICAgICAgICAgICAgeTogTVs3XS55ICsgSVxyXG4gICAgICAgICAgICAgIH0sIE1bN11dKSwgTVs3XS55ICE9PSBNWzBdLnkgJiYgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzddLCBNWzBdXSksIFAucGF0aExpc3RSZWwucHVzaChbXSksIE8gPSBFIC0gdyArIFAuc3Ryb2tlV2lkdGggLyAyLCBNID0gW3tcclxuICAgICAgICAgICAgICAgIHg6IHYubGVmdCAtIE8sXHJcbiAgICAgICAgICAgICAgICB5OiB2LnRvcCAtIE9cclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiB2LnJpZ2h0ICsgTyxcclxuICAgICAgICAgICAgICAgIHk6IHYuYm90dG9tICsgT1xyXG4gICAgICAgICAgICAgIH1dKSA6IChPID0gUC5zdHJva2VXaWR0aCAvIDIsIE0gPSBbe1xyXG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0IC0gTyxcclxuICAgICAgICAgICAgICAgIHk6IHYudG9wIC0gT1xyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgKyBPLFxyXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gKyBPXHJcbiAgICAgICAgICAgICAgfV0sIFAucGF0aExpc3RSZWwgPSBbXHJcbiAgICAgICAgICAgICAgICBbTVswXSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBNWzFdLngsXHJcbiAgICAgICAgICAgICAgICAgIHk6IE1bMF0ueVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICB4OiBNWzFdLngsXHJcbiAgICAgICAgICAgICAgICAgIHk6IE1bMF0ueVxyXG4gICAgICAgICAgICAgICAgfSwgTVsxXV0sXHJcbiAgICAgICAgICAgICAgICBbTVsxXSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBNWzBdLngsXHJcbiAgICAgICAgICAgICAgICAgIHk6IE1bMV0ueVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBbXVxyXG4gICAgICAgICAgICAgIF0sIE0gPSBbe1xyXG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0IC0gUC5zdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIHk6IHYudG9wIC0gUC5zdHJva2VXaWR0aFxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgKyBQLnN0cm9rZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gKyBQLnN0cm9rZVdpZHRoXHJcbiAgICAgICAgICAgICAgfV0pLCBQLmJCb3hSZWwgPSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBNWzBdLngsXHJcbiAgICAgICAgICAgICAgICB0b3A6IE1bMF0ueSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBNWzFdLngsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IE1bMV0ueSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBNWzFdLnggLSBNWzBdLngsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IE1bMV0ueSAtIE1bMF0ueVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcclxuICAgICAgICAgICAgICAociA9IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHQueFswXSAqICh0LnhbMV0gPyBhLndpZHRoIDogMSksXHJcbiAgICAgICAgICAgICAgICB0b3A6IHQueVswXSAqICh0LnlbMV0gPyBhLmhlaWdodCA6IDEpLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHQud2lkdGhbMF0gKiAodC53aWR0aFsxXSA/IGEud2lkdGggOiAxKSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdC5oZWlnaHRbMF0gKiAodC5oZWlnaHRbMV0gPyBhLmhlaWdodCA6IDEpXHJcbiAgICAgICAgICAgICAgfSkud2lkdGggfHwgci5oZWlnaHQgfHwgKHIud2lkdGggPSByLmhlaWdodCA9IDEwKSwgci53aWR0aCB8fCAoci53aWR0aCA9IHIuaGVpZ2h0KSwgci5oZWlnaHQgfHwgKHIuaGVpZ2h0ID0gci53aWR0aCksIHIucmlnaHQgPSByLmxlZnQgKyByLndpZHRoLCByLmJvdHRvbSA9IHIudG9wICsgci5oZWlnaHQsIHMgPSByLmxlZnQgKyByLndpZHRoIC8gMiwgdSA9IHIudG9wICsgci5oZWlnaHQgLyAyLCBmID0gUC5zdHJva2VXaWR0aCAvIDIsIHkgPSByLndpZHRoIC8gMiwgUyA9IHIuaGVpZ2h0IC8gMiwgaCA9IHkgKiBNYXRoLlNRUlQyICsgZiwgcCA9IFMgKiBNYXRoLlNRUlQyICsgZiwgYyA9IGggKiBVLCBkID0gcCAqIFUsIF8gPSBbe1xyXG4gICAgICAgICAgICAgICAgeDogcyAtIGgsXHJcbiAgICAgICAgICAgICAgICB5OiB1XHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogcyxcclxuICAgICAgICAgICAgICAgIHk6IHUgLSBwXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogcyArIGgsXHJcbiAgICAgICAgICAgICAgICB5OiB1XHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogcyxcclxuICAgICAgICAgICAgICAgIHk6IHUgKyBwXHJcbiAgICAgICAgICAgICAgfV0sIFAucGF0aExpc3RSZWwgPSBbXHJcbiAgICAgICAgICAgICAgICBbX1swXSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBfWzBdLngsXHJcbiAgICAgICAgICAgICAgICAgIHk6IF9bMF0ueSAtIGRcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgeDogX1sxXS54IC0gYyxcclxuICAgICAgICAgICAgICAgICAgeTogX1sxXS55XHJcbiAgICAgICAgICAgICAgICB9LCBfWzFdXSxcclxuICAgICAgICAgICAgICAgIFtfWzFdLCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IF9bMV0ueCArIGMsXHJcbiAgICAgICAgICAgICAgICAgIHk6IF9bMV0ueVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBfWzJdLngsXHJcbiAgICAgICAgICAgICAgICAgIHk6IF9bMl0ueSAtIGRcclxuICAgICAgICAgICAgICAgIH0sIF9bMl1dLFxyXG4gICAgICAgICAgICAgICAgW19bMl0sIHtcclxuICAgICAgICAgICAgICAgICAgeDogX1syXS54LFxyXG4gICAgICAgICAgICAgICAgICB5OiBfWzJdLnkgKyBkXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IF9bM10ueCArIGMsXHJcbiAgICAgICAgICAgICAgICAgIHk6IF9bM10ueVxyXG4gICAgICAgICAgICAgICAgfSwgX1szXV0sXHJcbiAgICAgICAgICAgICAgICBbX1szXSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBfWzNdLnggLSBjLFxyXG4gICAgICAgICAgICAgICAgICB5OiBfWzNdLnlcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgeDogX1swXS54LFxyXG4gICAgICAgICAgICAgICAgICB5OiBfWzBdLnkgKyBkXHJcbiAgICAgICAgICAgICAgICB9LCBfWzBdXSxcclxuICAgICAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICAgICAgXSwgbSA9IGggLSB5ICsgUC5zdHJva2VXaWR0aCAvIDIsIGcgPSBwIC0gUyArIFAuc3Ryb2tlV2lkdGggLyAyLCBfID0gW3tcclxuICAgICAgICAgICAgICAgIHg6IHIubGVmdCAtIG0sXHJcbiAgICAgICAgICAgICAgICB5OiByLnRvcCAtIGdcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiByLnJpZ2h0ICsgbSxcclxuICAgICAgICAgICAgICAgIHk6IHIuYm90dG9tICsgZ1xyXG4gICAgICAgICAgICAgIH1dLCBQLmJCb3hSZWwgPSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBfWzBdLngsXHJcbiAgICAgICAgICAgICAgICB0b3A6IF9bMF0ueSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBfWzFdLngsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IF9bMV0ueSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBfWzFdLnggLSBfWzBdLngsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF9bMV0ueSAtIF9bMF0ueVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XHJcbiAgICAgICAgICAgICAgdC5wb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBlLnhbMF0gKiAoZS54WzFdID8gYS53aWR0aCA6IDEpLFxyXG4gICAgICAgICAgICAgICAgICBuID0gZS55WzBdICogKGUueVsxXSA/IGEuaGVpZ2h0IDogMSk7XHJcbiAgICAgICAgICAgICAgICBpID8gKHQgPCBpLmxlZnQgJiYgKGkubGVmdCA9IHQpLCB0ID4gaS5yaWdodCAmJiAoaS5yaWdodCA9IHQpLCBuIDwgaS50b3AgJiYgKGkudG9wID0gbiksIG4gPiBpLmJvdHRvbSAmJiAoaS5ib3R0b20gPSBuKSkgOiBpID0ge1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB0LFxyXG4gICAgICAgICAgICAgICAgICByaWdodDogdCxcclxuICAgICAgICAgICAgICAgICAgdG9wOiBuLFxyXG4gICAgICAgICAgICAgICAgICBib3R0b206IG5cclxuICAgICAgICAgICAgICAgIH0sIG8gPyBQLnBhdGhMaXN0UmVsLnB1c2goW28sIHtcclxuICAgICAgICAgICAgICAgICAgeDogdCxcclxuICAgICAgICAgICAgICAgICAgeTogblxyXG4gICAgICAgICAgICAgICAgfV0pIDogUC5wYXRoTGlzdFJlbCA9IFtdLCBvID0ge1xyXG4gICAgICAgICAgICAgICAgICB4OiB0LFxyXG4gICAgICAgICAgICAgICAgICB5OiBuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSksIFAucGF0aExpc3RSZWwucHVzaChbXSksIGUgPSBQLnN0cm9rZVdpZHRoIC8gMiwgbCA9IFt7XHJcbiAgICAgICAgICAgICAgICB4OiBpLmxlZnQgLSBlLFxyXG4gICAgICAgICAgICAgICAgeTogaS50b3AgLSBlXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogaS5yaWdodCArIGUsXHJcbiAgICAgICAgICAgICAgICB5OiBpLmJvdHRvbSArIGVcclxuICAgICAgICAgICAgICB9XSwgUC5iQm94UmVsID0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogbFswXS54LFxyXG4gICAgICAgICAgICAgICAgdG9wOiBsWzBdLnksXHJcbiAgICAgICAgICAgICAgICByaWdodDogbFsxXS54LFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBsWzFdLnksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogbFsxXS54IC0gbFswXS54LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBsWzFdLnkgLSBsWzBdLnlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVy5wYXRoTGlzdFJlbCA9IFcuYkJveFJlbCA9ICEwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKFcucGF0aExpc3RSZWwgfHwgVy5lbGVtZW50TGVmdCB8fCBXLmVsZW1lbnRUb3ApICYmIChQLnBhdGhEYXRhID0gd2UoUC5wYXRoTGlzdFJlbCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS54ICs9IGEubGVmdCwgZS55ICs9IGEudG9wXHJcbiAgICAgICAgICB9KSksIFdlKHQsIE4sIFwic3Ryb2tlV2lkdGhcIiwgbiA9IFAuc3Ryb2tlV2lkdGgpICYmICh0LnBhdGguc3R5bGUuc3Ryb2tlV2lkdGggPSBuICsgXCJweFwiKSwgTWUobiA9IFAucGF0aERhdGEsIE4ucGF0aERhdGEpICYmICh0LnBhdGguc2V0UGF0aERhdGEobiksIE4ucGF0aERhdGEgPSBuLCBXLnBhdGhEYXRhID0gITApLCB0LmRhc2ggJiYgKCFXLnBhdGhEYXRhICYmICghVy5zdHJva2VXaWR0aCB8fCB0LmRhc2hMZW4gJiYgdC5kYXNoR2FwKSB8fCAoUC5kYXNoTGVuID0gdC5kYXNoTGVuIHx8IDIgKiBQLnN0cm9rZVdpZHRoLCBQLmRhc2hHYXAgPSB0LmRhc2hHYXAgfHwgUC5zdHJva2VXaWR0aCksIFcuZGFzaCA9IFdlKHQsIE4sIFwiZGFzaExlblwiLCBQLmRhc2hMZW4pIHx8IFcuZGFzaCwgVy5kYXNoID0gV2UodCwgTiwgXCJkYXNoR2FwXCIsIFAuZGFzaEdhcCkgfHwgVy5kYXNoLCBXLmRhc2ggJiYgKHQucGF0aC5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBOLmRhc2hMZW4gKyBcIixcIiArIE4uZGFzaEdhcCkpLCBDID0gUC52aWV3Qm94QkJveCwgTCA9IE4udmlld0JveEJCb3gsIEEgPSB0LnN2Zy52aWV3Qm94LmJhc2VWYWwsIFYgPSB0LnN2Zy5zdHlsZSwgQy54ID0gUC5iQm94UmVsLmxlZnQgKyBhLmxlZnQsIEMueSA9IFAuYkJveFJlbC50b3AgKyBhLnRvcCwgQy53aWR0aCA9IFAuYkJveFJlbC53aWR0aCwgQy5oZWlnaHQgPSBQLmJCb3hSZWwuaGVpZ2h0LCBbXCJ4XCIsIFwieVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgKG4gPSBDW2VdKSAhPT0gTFtlXSAmJiAoQVtlXSA9IExbZV0gPSBuLCBWW29lW2VdXSA9IG4gKyAoXCJ4XCIgPT09IGUgfHwgXCJ5XCIgPT09IGUgPyB0LmJvZHlPZmZzZXRbZV0gOiAwKSArIFwicHhcIilcclxuICAgICAgICAgIH0pLCBXLnN0cm9rZVdpZHRoIHx8IFcucGF0aExpc3RSZWwgfHwgVy5iQm94UmVsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VzZUhvdmVyQW5jaG9yOiB7XHJcbiAgICAgICAgdHlwZTogXCJhbmNob3JcIixcclxuICAgICAgICBhcmdPcHRpb25zOiBbe1xyXG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJlbGVtZW50XCIsXHJcbiAgICAgICAgICB0eXBlOiB5ZVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIG9wdGlvbk5hbWU6IFwic2hvd0VmZmVjdE5hbWVcIixcclxuICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgICAgICB9XSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2QybGtkR2c5SWpJMElpQm9aV2xuYUhROUlqSTBJajQ4Y0c5c2VXZHZiaUJ3YjJsdWRITTlJakkwTERBZ01DdzRJRGdzTVRFZ01Dd3hPU0ExTERJMElERXpMREUySURFMkxESTBJaUJtYVd4c1BTSmpiM0poYkNJdlBqd3ZjM1puUGc9PScpXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJcIixcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4Zjg4MVwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaG92ZXJTdHlsZToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcIm5vbmVcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmFkZjhmXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgIHRvcDogMSxcclxuICAgICAgICAgIHJpZ2h0OiAxNSxcclxuICAgICAgICAgIGJvdHRvbTogMSxcclxuICAgICAgICAgIGxlZnQ6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1pbkhlaWdodDogMTUsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XHJcbiAgICAgICAgICByaWdodDogMixcclxuICAgICAgICAgIHRvcDogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IHtcclxuICAgICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICAgIGhlaWdodDogMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpcktleXM6IFtcclxuICAgICAgICAgIFtcInRvcFwiLCBcIlRvcFwiXSxcclxuICAgICAgICAgIFtcInJpZ2h0XCIsIFwiUmlnaHRcIl0sXHJcbiAgICAgICAgICBbXCJib3R0b21cIiwgXCJCb3R0b21cIl0sXHJcbiAgICAgICAgICBbXCJsZWZ0XCIsIFwiTGVmdFwiXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGEsIGkpIHtcclxuICAgICAgICAgIHZhciBvLCB0LCBlLCBuLCBsLCByLCBzLCB1LCBoLCBwLCBjLCBkID0geS5tb3VzZUhvdmVyQW5jaG9yLFxyXG4gICAgICAgICAgICBmID0ge307XHJcbiAgICAgICAgICBpZiAoYS5lbGVtZW50ID0geS5wb2ludEFuY2hvci5jaGVja0VsZW1lbnQoaS5lbGVtZW50KSwgdSA9IGEuZWxlbWVudCwgISgocCA9IHUub3duZXJEb2N1bWVudCkgJiYgKGggPSBwLmRlZmF1bHRWaWV3KSAmJiBoLkhUTUxFbGVtZW50ICYmIHUgaW5zdGFuY2VvZiBoLkhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiYGVsZW1lbnRgIG11c3QgYmUgSFRNTCBlbGVtZW50XCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBkLmJhY2tncm91bmRTaXplLndpZHRoICsgXCJweCBcIiArIGQuYmFja2dyb3VuZFNpemUuaGVpZ2h0ICsgXCJweFwiLCBbXCJzdHlsZVwiLCBcImhvdmVyU3R5bGVcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IGRbZV07XHJcbiAgICAgICAgICAgIGFbZV0gPSBPYmplY3Qua2V5cyhuKS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZVt0XSA9IG5bdF0sIGVcclxuICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgICB9KSwgXCJpbmxpbmVcIiA9PT0gKG8gPSBhLmVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGEuZWxlbWVudCwgXCJcIikpLmRpc3BsYXkgPyBhLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiIDogXCJub25lXCIgPT09IG8uZGlzcGxheSAmJiAoYS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKSwgeS5tb3VzZUhvdmVyQW5jaG9yLmRpcktleXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGVbMF0sXHJcbiAgICAgICAgICAgICAgbiA9IFwicGFkZGluZ1wiICsgZVsxXTtcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChvW25dKSA8IGQucGFkZGluZ1t0XSAmJiAoYS5zdHlsZVtuXSA9IGQucGFkZGluZ1t0XSArIFwicHhcIilcclxuICAgICAgICAgIH0pLCBhLnN0eWxlLmRpc3BsYXkgJiYgKG4gPSBhLmVsZW1lbnQuc3R5bGUuZGlzcGxheSwgYS5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBhLnN0eWxlLmRpc3BsYXkpLCB5Lm1vdXNlSG92ZXJBbmNob3IuZGlyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gXCJwYWRkaW5nXCIgKyBlWzFdO1xyXG4gICAgICAgICAgICBhLnN0eWxlW3RdICYmIChmW3RdID0gYS5lbGVtZW50LnN0eWxlW3RdLCBhLmVsZW1lbnQuc3R5bGVbdF0gPSBhLnN0eWxlW3RdKVxyXG4gICAgICAgICAgfSksIChlID0gYS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS5oZWlnaHQgPCBkLm1pbkhlaWdodCAmJiAobGUgPyAoYyA9IGQubWluSGVpZ2h0LCBcImNvbnRlbnQtYm94XCIgPT09IG8uYm94U2l6aW5nID8gYyAtPSBwYXJzZUZsb2F0KG8uYm9yZGVyVG9wV2lkdGgpICsgcGFyc2VGbG9hdChvLmJvcmRlckJvdHRvbVdpZHRoKSArIHBhcnNlRmxvYXQoby5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoby5wYWRkaW5nQm90dG9tKSA6IFwicGFkZGluZy1ib3hcIiA9PT0gby5ib3hTaXppbmcgJiYgKGMgLT0gcGFyc2VGbG9hdChvLmJvcmRlclRvcFdpZHRoKSArIHBhcnNlRmxvYXQoby5ib3JkZXJCb3R0b21XaWR0aCkpLCBhLnN0eWxlLmhlaWdodCA9IGMgKyBcInB4XCIpIDogYS5zdHlsZS5oZWlnaHQgPSBwYXJzZUZsb2F0KG8uaGVpZ2h0KSArIChkLm1pbkhlaWdodCAtIGUuaGVpZ2h0KSArIFwicHhcIiksIGEuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gdWUgPyBlLndpZHRoIC0gZC5iYWNrZ3JvdW5kU2l6ZS53aWR0aCAtIGQuYmFja2dyb3VuZFBvc2l0aW9uLnJpZ2h0ICsgXCJweCBcIiArIGQuYmFja2dyb3VuZFBvc2l0aW9uLnRvcCArIFwicHhcIiA6IFwicmlnaHQgXCIgKyBkLmJhY2tncm91bmRQb3NpdGlvbi5yaWdodCArIFwicHggdG9wIFwiICsgZC5iYWNrZ3JvdW5kUG9zaXRpb24udG9wICsgXCJweFwiLCBhLnN0eWxlLmRpc3BsYXkgJiYgKGEuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbiksIHkubW91c2VIb3ZlckFuY2hvci5kaXJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBcInBhZGRpbmdcIiArIGVbMV07XHJcbiAgICAgICAgICAgIGEuc3R5bGVbdF0gJiYgKGEuZWxlbWVudC5zdHlsZVt0XSA9IGZbdF0pXHJcbiAgICAgICAgICB9KSwgW1wic3R5bGVcIiwgXCJob3ZlclN0eWxlXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBhW2VdLFxyXG4gICAgICAgICAgICAgIG4gPSBpW2VdO1xyXG4gICAgICAgICAgICBrKG4pICYmIE9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBuW2VdIHx8IHcobltlXSkgPyB0W2VdID0gbltlXSA6IG51bGwgPT0gbltlXSAmJiBkZWxldGUgdFtlXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaS5vblN3aXRjaCAmJiAocyA9IGkub25Td2l0Y2gpLCBpLnNob3dFZmZlY3ROYW1lICYmIGdbaS5zaG93RWZmZWN0TmFtZV0gJiYgKGEuc2hvd0VmZmVjdE5hbWUgPSBsID0gaS5zaG93RWZmZWN0TmFtZSksIHIgPSBpLmFuaW1PcHRpb25zLCBhLmVsbVN0eWxlID0gdCA9IGEuZWxlbWVudC5zdHlsZSwgYS5tb3VzZWVudGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgYS5ob3ZlclN0eWxlU2F2ZSA9IGQuZ2V0U3R5bGVzKHQsIE9iamVjdC5rZXlzKGEuaG92ZXJTdHlsZSkpLCBkLnNldFN0eWxlcyh0LCBhLmhvdmVyU3R5bGUpLCBhLmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgamUoZS5wcm9wcywgITAsIGwsIHIpXHJcbiAgICAgICAgICAgIH0pLCBzICYmIHMoZSlcclxuICAgICAgICAgIH0sIGEubW91c2VsZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGQuc2V0U3R5bGVzKHQsIGEuaG92ZXJTdHlsZVNhdmUpLCBhLmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgamUoZS5wcm9wcywgITEsIGwsIHIpXHJcbiAgICAgICAgICAgIH0pLCBzICYmIHMoZSlcclxuICAgICAgICAgIH0sICEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4sIGEsIGksIG8sIGw7XHJcbiAgICAgICAgICByZXR1cm4gdC5wcm9wcy5zdmcgPyB5Lm1vdXNlSG92ZXJBbmNob3IubGxTaG93KHQucHJvcHMsICExLCBlLnNob3dFZmZlY3ROYW1lKSA6IExlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgeS5tb3VzZUhvdmVyQW5jaG9yLmxsU2hvdyh0LnByb3BzLCAhMSwgZS5zaG93RWZmZWN0TmFtZSlcclxuICAgICAgICAgIH0pLCBlLmVuYWJsZWQgfHwgKGUuc3R5bGVTYXZlID0geS5tb3VzZUhvdmVyQW5jaG9yLmdldFN0eWxlcyhlLmVsbVN0eWxlLCBPYmplY3Qua2V5cyhlLnN0eWxlKSksIHkubW91c2VIb3ZlckFuY2hvci5zZXRTdHlsZXMoZS5lbG1TdHlsZSwgZS5zdHlsZSksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IChuID0gZS5lbGVtZW50LCBhID0gZS5tb3VzZWVudGVyLCBpID0gZS5tb3VzZWxlYXZlLCBcIm9ubW91c2VlbnRlclwiIGluIG4gJiYgXCJvbm1vdXNlbGVhdmVcIiBpbiBuID8gKG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgYSwgITEpLCBuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGksICExKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGEsICExKSwgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBpLCAhMSlcclxuICAgICAgICAgIH0pIDogKGNvbnNvbGUud2FybihcIm1vdXNlZW50ZXIgYW5kIG1vdXNlbGVhdmUgZXZlbnRzIHBvbHlmaWxsIGlzIGVuYWJsZWQuXCIpLCBvID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5yZWxhdGVkVGFyZ2V0ICYmIChlLnJlbGF0ZWRUYXJnZXQgPT09IHRoaXMgfHwgdGhpcy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlLnJlbGF0ZWRUYXJnZXQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpIHx8IGEuYXBwbHkodGhpcywgYXJndW1lbnRzKVxyXG4gICAgICAgICAgfSwgbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG8pLCBsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5yZWxhdGVkVGFyZ2V0ICYmIChlLnJlbGF0ZWRUYXJnZXQgPT09IHRoaXMgfHwgdGhpcy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlLnJlbGF0ZWRUYXJnZXQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpIHx8IGkuYXBwbHkodGhpcywgYXJndW1lbnRzKVxyXG4gICAgICAgICAgfSwgbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG8sICExKSwgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbCwgITEpXHJcbiAgICAgICAgICB9KSksIGUuZW5hYmxlZCA9ICEwKSwgITBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVuYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIGUuZW5hYmxlZCAmJiBlLmJvdW5kVGFyZ2V0cy5sZW5ndGggPD0gMSAmJiAoZS5yZW1vdmVFdmVudExpc3RlbmVyKCksIHkubW91c2VIb3ZlckFuY2hvci5zZXRTdHlsZXMoZS5lbG1TdHlsZSwgZS5zdHlsZVNhdmUpLCBlLmVuYWJsZWQgPSAhMSksIHkubW91c2VIb3ZlckFuY2hvci5sbFNob3codC5wcm9wcywgITAsIGUuc2hvd0VmZmVjdE5hbWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVPcHRpb246IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB5LnBvaW50QW5jaG9yLnJlbW92ZU9wdGlvbihlLCB0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdC5ib3VuZFRhcmdldHMubGVuZ3RoICYmIChjb25zb2xlLmVycm9yKFwiTGVhZGVyTGluZUF0dGFjaG1lbnQgd2FzIG5vdCB1bmJvdW5kIGJ5IHJlbW92ZVwiKSwgdC5ib3VuZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB5Lm1vdXNlSG92ZXJBbmNob3IudW5iaW5kKHQsIGUpXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEJCb3hOZXN0OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgcmV0dXJuIGdlKGUuZWxlbWVudCwgdC5iYXNlV2luZG93KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGxTaG93OiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgZ1tuIHx8IGUuY3VyU3RhdHMuc2hvd19lZmZlY3RdLnN0b3AoZSwgITAsIHQpLCBlLmFwbFN0YXRzLnNob3dfb24gPSB0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdHlsZXM6IGZ1bmN0aW9uIChuLCBlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVbdF0gPSBuW3RdLCBlXHJcbiAgICAgICAgICB9LCB7fSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFN0eWxlczogZnVuY3Rpb24gKHQsIG4pIHtcclxuICAgICAgICAgIE9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdFtlXSA9IG5bZV1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjYXB0aW9uTGFiZWw6IHtcclxuICAgICAgICB0eXBlOiBcImxhYmVsXCIsXHJcbiAgICAgICAgYXJnT3B0aW9uczogW3tcclxuICAgICAgICAgIG9wdGlvbk5hbWU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgICB4OiB7fSxcclxuICAgICAgICAgIHk6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXh0U3R5bGVQcm9wczogW1wiZm9udEZhbWlseVwiLCBcImZvbnRTdHlsZVwiLCBcImZvbnRWYXJpYW50XCIsIFwiZm9udFdlaWdodFwiLCBcImZvbnRTdHJldGNoXCIsIFwiZm9udFNpemVcIiwgXCJmb250U2l6ZUFkanVzdFwiLCBcImtlcm5pbmdcIiwgXCJsZXR0ZXJTcGFjaW5nXCIsIFwid29yZFNwYWNpbmdcIiwgXCJ0ZXh0RGVjb3JhdGlvblwiXSxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAodSwgdCkge1xyXG4gICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQudGV4dCAmJiAodS50ZXh0ID0gdC50ZXh0LnRyaW0oKSksICEhdS50ZXh0ICYmIChcInN0cmluZ1wiID09IHR5cGVvZiB0LmNvbG9yICYmICh1LmNvbG9yID0gdC5jb2xvci50cmltKCkpLCB1Lm91dGxpbmVDb2xvciA9IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQub3V0bGluZUNvbG9yID8gdC5vdXRsaW5lQ29sb3IudHJpbSgpIDogXCIjZmZmXCIsIEFycmF5LmlzQXJyYXkodC5vZmZzZXQpICYmIHcodC5vZmZzZXRbMF0pICYmIHcodC5vZmZzZXRbMV0pICYmICh1Lm9mZnNldCA9IHtcclxuICAgICAgICAgICAgeDogdC5vZmZzZXRbMF0sXHJcbiAgICAgICAgICAgIHk6IHQub2Zmc2V0WzFdXHJcbiAgICAgICAgICB9KSwgdyh0LmxpbmVPZmZzZXQpICYmICh1LmxpbmVPZmZzZXQgPSB0LmxpbmVPZmZzZXQpLCB5LmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG51bGwgIT0gdFtlXSAmJiAodVtlXSA9IHRbZV0pXHJcbiAgICAgICAgICB9KSwgdS51cGRhdGVDb2xvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHkuY2FwdGlvbkxhYmVsLnVwZGF0ZUNvbG9yKHUsIGUpXHJcbiAgICAgICAgICB9LCB1LnVwZGF0ZVNvY2tldFhZID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQsIG4sIGEsIGksIG8gPSB1LmN1clN0YXRzLFxyXG4gICAgICAgICAgICAgIGwgPSB1LmFwbFN0YXRzLFxyXG4gICAgICAgICAgICAgIHIgPSBlLmN1clN0YXRzLFxyXG4gICAgICAgICAgICAgIHMgPSByLnBvc2l0aW9uX3NvY2tldFhZU0VbdS5zb2NrZXRJbmRleF07XHJcbiAgICAgICAgICAgIG51bGwgIT0gcy54ICYmICh1Lm9mZnNldCA/IChvLnggPSBzLnggKyB1Lm9mZnNldC54LCBvLnkgPSBzLnkgKyB1Lm9mZnNldC55KSA6ICh0ID0gdS5oZWlnaHQgLyAyLCBuID0gTWF0aC5tYXgoci5hdHRhY2hfcGx1Z1NpZGVMZW5TRVt1LnNvY2tldEluZGV4XSB8fCAwLCByLmxpbmVfc3Ryb2tlV2lkdGggLyAyKSwgYSA9IHIucG9zaXRpb25fc29ja2V0WFlTRVt1LnNvY2tldEluZGV4ID8gMCA6IDFdLCBzLnNvY2tldElkID09PSBMIHx8IHMuc29ja2V0SWQgPT09IEkgPyAoby54ID0gcy5zb2NrZXRJZCA9PT0gTCA/IHMueCAtIHQgLSB1LndpZHRoIDogcy54ICsgdCwgby55ID0gYS55IDwgcy55ID8gcy55ICsgbiArIHQgOiBzLnkgLSBuIC0gdCAtIHUuaGVpZ2h0KSA6IChvLnggPSBhLnggPCBzLnggPyBzLnggKyBuICsgdCA6IHMueCAtIG4gLSB0IC0gdS53aWR0aCwgby55ID0gcy5zb2NrZXRJZCA9PT0gTSA/IHMueSAtIHQgLSB1LmhlaWdodCA6IHMueSArIHQpKSwgV2UodSwgbCwgXCJ4XCIsIGkgPSBvLngpICYmICh1LmVsbVBvc2l0aW9uLnguYmFzZVZhbC5nZXRJdGVtKDApLnZhbHVlID0gaSksIFdlKHUsIGwsIFwieVwiLCBpID0gby55KSAmJiAodS5lbG1Qb3NpdGlvbi55LmJhc2VWYWwuZ2V0SXRlbSgwKS52YWx1ZSA9IGkgKyB1LmhlaWdodCkpXHJcbiAgICAgICAgICB9LCB1LnVwZGF0ZVBhdGggPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCwgbiwgYSA9IHUuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgICAgaSA9IHUuYXBsU3RhdHMsXHJcbiAgICAgICAgICAgICAgbyA9IGUucGF0aExpc3QuYW5pbVZhbCB8fCBlLnBhdGhMaXN0LmJhc2VWYWw7XHJcbiAgICAgICAgICAgIG8gJiYgKHQgPSB5LmNhcHRpb25MYWJlbC5nZXRNaWRQb2ludChvLCB1LmxpbmVPZmZzZXQpLCBhLnggPSB0LnggLSB1LndpZHRoIC8gMiwgYS55ID0gdC55IC0gdS5oZWlnaHQgLyAyLCBXZSh1LCBpLCBcInhcIiwgbiA9IGEueCkgJiYgKHUuZWxtUG9zaXRpb24ueC5iYXNlVmFsLmdldEl0ZW0oMCkudmFsdWUgPSBuKSwgV2UodSwgaSwgXCJ5XCIsIG4gPSBhLnkpICYmICh1LmVsbVBvc2l0aW9uLnkuYmFzZVZhbC5nZXRJdGVtKDApLnZhbHVlID0gbiArIHUuaGVpZ2h0KSlcclxuICAgICAgICAgIH0sIHUudXBkYXRlU2hvdyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHkuY2FwdGlvbkxhYmVsLnVwZGF0ZVNob3codSwgZSlcclxuICAgICAgICAgIH0sIHVlICYmICh1LmFkanVzdEVkZ2UgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IHUuY3VyU3RhdHM7XHJcbiAgICAgICAgICAgIG51bGwgIT0gbi54ICYmIHkuY2FwdGlvbkxhYmVsLmFkanVzdEVkZ2UodCwge1xyXG4gICAgICAgICAgICAgIHg6IG4ueCxcclxuICAgICAgICAgICAgICB5OiBuLnksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IHUud2lkdGgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiB1LmhlaWdodFxyXG4gICAgICAgICAgICB9LCB1LnN0cm9rZVdpZHRoIC8gMilcclxuICAgICAgICAgIH0pLCAhMClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZUNvbG9yOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4sIGEgPSBlLmN1clN0YXRzLFxyXG4gICAgICAgICAgICBpID0gZS5hcGxTdGF0cyxcclxuICAgICAgICAgICAgbyA9IHQuY3VyU3RhdHM7XHJcbiAgICAgICAgICBhLmNvbG9yID0gbiA9IGUuY29sb3IgfHwgby5saW5lX2NvbG9yLCBXZShlLCBpLCBcImNvbG9yXCIsIG4pICYmIChlLnN0eWxlRmlsbC5maWxsID0gbilcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVNob3c6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9ICEwID09PSB0LmlzU2hvd247XHJcbiAgICAgICAgICBuICE9PSBlLmlzU2hvd24gJiYgKGUuc3R5bGVTaG93LnZpc2liaWxpdHkgPSBuID8gXCJcIiA6IFwiaGlkZGVuXCIsIGUuaXNTaG93biA9IG4pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGp1c3RFZGdlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgdmFyIGEgPSB7XHJcbiAgICAgICAgICAgIHgxOiB0LnggLSBuLFxyXG4gICAgICAgICAgICB5MTogdC55IC0gbixcclxuICAgICAgICAgICAgeDI6IHQueCArIHQud2lkdGggKyBuLFxyXG4gICAgICAgICAgICB5MjogdC55ICsgdC5oZWlnaHQgKyBuXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYS54MSA8IGUueDEgJiYgKGUueDEgPSBhLngxKSwgYS55MSA8IGUueTEgJiYgKGUueTEgPSBhLnkxKSwgYS54MiA+IGUueDIgJiYgKGUueDIgPSBhLngyKSwgYS55MiA+IGUueTIgJiYgKGUueTIgPSBhLnkyKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV3VGV4dDogZnVuY3Rpb24gKGUsIHQsIG4sIGEsIGkpIHtcclxuICAgICAgICAgIHZhciBvLCBsLCByLCBzLCB1LCBoO1xyXG4gICAgICAgICAgcmV0dXJuIChvID0gdC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ0ZXh0XCIpKS50ZXh0Q29udGVudCA9IGUsIFtvLngsIG8ueV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IG4uY3JlYXRlU1ZHTGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIHQubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgsIDApLCBlLmJhc2VWYWwuaW5pdGlhbGl6ZSh0KVxyXG4gICAgICAgICAgfSksIFwiYm9vbGVhblwiICE9IHR5cGVvZiBmICYmIChmID0gXCJwYWludE9yZGVyXCIgaW4gby5zdHlsZSksIGkgJiYgIWYgPyAociA9IHQuY3JlYXRlRWxlbWVudE5TKGIsIFwiZGVmc1wiKSwgby5pZCA9IGEsIHIuYXBwZW5kQ2hpbGQobyksICh1ID0gKGwgPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcImdcIikpLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSkuaHJlZi5iYXNlVmFsID0gXCIjXCIgKyBhLCAocyA9IGwuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIGEsIChoID0gdS5zdHlsZSkuc3Ryb2tlTGluZWpvaW4gPSBcInJvdW5kXCIsIHtcclxuICAgICAgICAgICAgZWxtUG9zaXRpb246IG8sXHJcbiAgICAgICAgICAgIHN0eWxlVGV4dDogby5zdHlsZSxcclxuICAgICAgICAgICAgc3R5bGVGaWxsOiBzLnN0eWxlLFxyXG4gICAgICAgICAgICBzdHlsZVN0cm9rZTogaCxcclxuICAgICAgICAgICAgc3R5bGVTaG93OiBsLnN0eWxlLFxyXG4gICAgICAgICAgICBlbG1zQXBwZW5kOiBbciwgbF1cclxuICAgICAgICAgIH0pIDogKGggPSBvLnN0eWxlLCBpICYmIChoLnN0cm9rZUxpbmVqb2luID0gXCJyb3VuZFwiLCBoLnBhaW50T3JkZXIgPSBcInN0cm9rZVwiKSwge1xyXG4gICAgICAgICAgICBlbG1Qb3NpdGlvbjogbyxcclxuICAgICAgICAgICAgc3R5bGVUZXh0OiBoLFxyXG4gICAgICAgICAgICBzdHlsZUZpbGw6IGgsXHJcbiAgICAgICAgICAgIHN0eWxlU3Ryb2tlOiBpID8gaCA6IG51bGwsXHJcbiAgICAgICAgICAgIHN0eWxlU2hvdzogaCxcclxuICAgICAgICAgICAgZWxtc0FwcGVuZDogW29dXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TWlkUG9pbnQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiwgYSwgaSwgbyA9IE9lKGUpLFxyXG4gICAgICAgICAgICBsID0gby5zZWdzTGVuLFxyXG4gICAgICAgICAgICByID0gby5sZW5BbGwsXHJcbiAgICAgICAgICAgIHMgPSAtMTtcclxuICAgICAgICAgIGlmICgobiA9IHIgLyAyICsgKHQgfHwgMCkpIDw9IDApIHJldHVybiAyID09PSAoYSA9IGVbMF0pLmxlbmd0aCA/IHZlKGFbMF0sIGFbMV0sIDApIDogeGUoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgMCk7XHJcbiAgICAgICAgICBpZiAociA8PSBuKSByZXR1cm4gMiA9PT0gKGEgPSBlW2UubGVuZ3RoIC0gMV0pLmxlbmd0aCA/IHZlKGFbMF0sIGFbMV0sIDEpIDogeGUoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgMSk7XHJcbiAgICAgICAgICBmb3IgKGkgPSBbXTsgbiA+IGxbKytzXTspIGkucHVzaChlW3NdKSwgbiAtPSBsW3NdO1xyXG4gICAgICAgICAgcmV0dXJuIDIgPT09IChhID0gZVtzXSkubGVuZ3RoID8gdmUoYVswXSwgYVsxXSwgbiAvIGxbc10pIDogeGUoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwga2UoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgbikpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbml0U3ZnOiBmdW5jdGlvbiAodCwgbikge1xyXG4gICAgICAgICAgdmFyIGUsIGEsIGkgPSB5LmNhcHRpb25MYWJlbC5uZXdUZXh0KHQudGV4dCwgbi5iYXNlV2luZG93LmRvY3VtZW50LCBuLnN2ZywgdiArIFwiLWNhcHRpb25MYWJlbC1cIiArIHQuX2lkLCB0Lm91dGxpbmVDb2xvcik7XHJcbiAgICAgICAgICBbXCJlbG1Qb3NpdGlvblwiLCBcInN0eWxlRmlsbFwiLCBcInN0eWxlU2hvd1wiLCBcImVsbXNBcHBlbmRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0W2VdID0gaVtlXVxyXG4gICAgICAgICAgfSksIHQuaXNTaG93biA9ICExLCB0LnN0eWxlU2hvdy52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiwgeS5jYXB0aW9uTGFiZWwudGV4dFN0eWxlUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBudWxsICE9IHRbZV0gJiYgKGkuc3R5bGVUZXh0W2VdID0gdFtlXSlcclxuICAgICAgICAgIH0pLCBpLmVsbXNBcHBlbmQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBuLnN2Zy5hcHBlbmRDaGlsZChlKVxyXG4gICAgICAgICAgfSksIGUgPSBpLmVsbVBvc2l0aW9uLmdldEJCb3goKSwgdC53aWR0aCA9IGUud2lkdGgsIHQuaGVpZ2h0ID0gZS5oZWlnaHQsIHQub3V0bGluZUNvbG9yICYmIChhID0gMTAgPCAoYSA9IGUuaGVpZ2h0IC8gOSkgPyAxMCA6IGEgPCAyID8gMiA6IGEsIGkuc3R5bGVTdHJva2Uuc3Ryb2tlV2lkdGggPSBhICsgXCJweFwiLCBpLnN0eWxlU3Ryb2tlLnN0cm9rZSA9IHQub3V0bGluZUNvbG9yKSwgdC5zdHJva2VXaWR0aCA9IGEgfHwgMCwgVGUodC5hcGxTdGF0cywgeS5jYXB0aW9uTGFiZWwuc3RhdHMpLCB0LnVwZGF0ZUNvbG9yKG4pLCB0LnJlZlNvY2tldFhZID8gdC51cGRhdGVTb2NrZXRYWShuKSA6IHQudXBkYXRlUGF0aChuKSwgdWUgJiYgRGUobiwge30pLCB0LnVwZGF0ZVNob3cobilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XHJcbiAgICAgICAgICByZXR1cm4gZS5jb2xvciB8fCBJZShuLCBcImN1cl9saW5lX2NvbG9yXCIsIGUudXBkYXRlQ29sb3IpLCAoZS5yZWZTb2NrZXRYWSA9IFwic3RhcnRMYWJlbFwiID09PSB0Lm9wdGlvbk5hbWUgfHwgXCJlbmRMYWJlbFwiID09PSB0Lm9wdGlvbk5hbWUpID8gKGUuc29ja2V0SW5kZXggPSBcInN0YXJ0TGFiZWxcIiA9PT0gdC5vcHRpb25OYW1lID8gMCA6IDEsIEllKG4sIFwiYXBsX3Bvc2l0aW9uXCIsIGUudXBkYXRlU29ja2V0WFkpLCBlLm9mZnNldCB8fCAoSWUobiwgXCJjdXJfYXR0YWNoX3BsdWdTaWRlTGVuU0VcIiwgZS51cGRhdGVTb2NrZXRYWSksIEllKG4sIFwiY3VyX2xpbmVfc3Ryb2tlV2lkdGhcIiwgZS51cGRhdGVTb2NrZXRYWSkpKSA6IEllKG4sIFwiYXBsX3BhdGhcIiwgZS51cGRhdGVQYXRoKSwgSWUobiwgXCJzdmdTaG93XCIsIGUudXBkYXRlU2hvdyksIHVlICYmIEllKG4sIFwibmV3X2VkZ2U0dmlld0JveFwiLCBlLmFkanVzdEVkZ2UpLCB5LmNhcHRpb25MYWJlbC5pbml0U3ZnKGUsIG4pLCAhMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzO1xyXG4gICAgICAgICAgZS5lbG1zQXBwZW5kICYmIChlLmVsbXNBcHBlbmQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBuLnN2Zy5yZW1vdmVDaGlsZChlKVxyXG4gICAgICAgICAgfSksIGUuZWxtUG9zaXRpb24gPSBlLnN0eWxlRmlsbCA9IGUuc3R5bGVTaG93ID0gZS5lbG1zQXBwZW5kID0gbnVsbCksIFRlKGUuY3VyU3RhdHMsIHkuY2FwdGlvbkxhYmVsLnN0YXRzKSwgVGUoZS5hcGxTdGF0cywgeS5jYXB0aW9uTGFiZWwuc3RhdHMpLCBlLmNvbG9yIHx8IENlKG4sIFwiY3VyX2xpbmVfY29sb3JcIiwgZS51cGRhdGVDb2xvciksIGUucmVmU29ja2V0WFkgPyAoQ2UobiwgXCJhcGxfcG9zaXRpb25cIiwgZS51cGRhdGVTb2NrZXRYWSksIGUub2Zmc2V0IHx8IChDZShuLCBcImN1cl9hdHRhY2hfcGx1Z1NpZGVMZW5TRVwiLCBlLnVwZGF0ZVNvY2tldFhZKSwgQ2UobiwgXCJjdXJfbGluZV9zdHJva2VXaWR0aFwiLCBlLnVwZGF0ZVNvY2tldFhZKSkpIDogQ2UobiwgXCJhcGxfcGF0aFwiLCBlLnVwZGF0ZVBhdGgpLCBDZShuLCBcInN2Z1Nob3dcIiwgZS51cGRhdGVTaG93KSwgdWUgJiYgKENlKG4sIFwibmV3X2VkZ2U0dmlld0JveFwiLCBlLmFkanVzdEVkZ2UpLCBEZShuLCB7fSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVPcHRpb246IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHMsXHJcbiAgICAgICAgICAgIGEgPSB7fTtcclxuICAgICAgICAgIGFbdC5vcHRpb25OYW1lXSA9IFwiXCIsIFplKG4sIGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICB0LmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgKGNvbnNvbGUuZXJyb3IoXCJMZWFkZXJMaW5lQXR0YWNobWVudCB3YXMgbm90IHVuYm91bmQgYnkgcmVtb3ZlXCIpLCB0LmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHkuY2FwdGlvbkxhYmVsLnVuYmluZCh0LCBlKVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwYXRoTGFiZWw6IHtcclxuICAgICAgICB0eXBlOiBcImxhYmVsXCIsXHJcbiAgICAgICAgYXJnT3B0aW9uczogW3tcclxuICAgICAgICAgIG9wdGlvbk5hbWU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgICBzdGFydE9mZnNldDoge30sXHJcbiAgICAgICAgICBwYXRoRGF0YToge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChzLCB0KSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC50ZXh0ICYmIChzLnRleHQgPSB0LnRleHQudHJpbSgpKSwgISFzLnRleHQgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQuY29sb3IgJiYgKHMuY29sb3IgPSB0LmNvbG9yLnRyaW0oKSksIHMub3V0bGluZUNvbG9yID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5vdXRsaW5lQ29sb3IgPyB0Lm91dGxpbmVDb2xvci50cmltKCkgOiBcIiNmZmZcIiwgdyh0LmxpbmVPZmZzZXQpICYmIChzLmxpbmVPZmZzZXQgPSB0LmxpbmVPZmZzZXQpLCB5LmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG51bGwgIT0gdFtlXSAmJiAoc1tlXSA9IHRbZV0pXHJcbiAgICAgICAgICB9KSwgcy51cGRhdGVDb2xvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHkuY2FwdGlvbkxhYmVsLnVwZGF0ZUNvbG9yKHMsIGUpXHJcbiAgICAgICAgICB9LCBzLnVwZGF0ZVBhdGggPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCwgbiA9IHMuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgICAgYSA9IHMuYXBsU3RhdHMsXHJcbiAgICAgICAgICAgICAgaSA9IGUuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgICAgbyA9IGUucGF0aExpc3QuYW5pbVZhbCB8fCBlLnBhdGhMaXN0LmJhc2VWYWw7XHJcbiAgICAgICAgICAgIG8gJiYgKG4ucGF0aERhdGEgPSB0ID0geS5wYXRoTGFiZWwuZ2V0T2Zmc2V0UGF0aERhdGEobywgaS5saW5lX3N0cm9rZVdpZHRoIC8gMiArIHMuc3Ryb2tlV2lkdGggLyAyICsgcy5oZWlnaHQgLyA0LCAxLjI1ICogcy5oZWlnaHQpLCBNZSh0LCBhLnBhdGhEYXRhKSAmJiAocy5lbG1QYXRoLnNldFBhdGhEYXRhKHQpLCBhLnBhdGhEYXRhID0gdCwgcy5iQm94ID0gcy5lbG1Qb3NpdGlvbi5nZXRCQm94KCksIHMudXBkYXRlU3RhcnRPZmZzZXQoZSkpKVxyXG4gICAgICAgICAgfSwgcy51cGRhdGVTdGFydE9mZnNldCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuLCBhLCBpLCBvID0gcy5jdXJTdGF0cyxcclxuICAgICAgICAgICAgICBsID0gcy5hcGxTdGF0cyxcclxuICAgICAgICAgICAgICByID0gZS5jdXJTdGF0cztcclxuICAgICAgICAgICAgby5wYXRoRGF0YSAmJiAoKDIgIT09IHMuc2VtSW5kZXggfHwgcy5saW5lT2Zmc2V0KSAmJiAodCA9IG8ucGF0aERhdGEucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgdmFyIG4sIGEgPSB0LnZhbHVlcztcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHQudHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJNXCI6XHJcbiAgICAgICAgICAgICAgICBpID0ge1xyXG4gICAgICAgICAgICAgICAgICB4OiBhWzBdLFxyXG4gICAgICAgICAgICAgICAgICB5OiBhWzFdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgIG4gPSB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IGFbMF0sXHJcbiAgICAgICAgICAgICAgICAgIHk6IGFbMV1cclxuICAgICAgICAgICAgICAgIH0sIGkgJiYgKGUgKz0gX2UoaSwgbikpLCBpID0gbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICBuID0ge1xyXG4gICAgICAgICAgICAgICAgICB4OiBhWzRdLFxyXG4gICAgICAgICAgICAgICAgICB5OiBhWzVdXHJcbiAgICAgICAgICAgICAgICB9LCBpICYmIChlICs9IGJlKGksIHtcclxuICAgICAgICAgICAgICAgICAgeDogYVswXSxcclxuICAgICAgICAgICAgICAgICAgeTogYVsxXVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBhWzJdLFxyXG4gICAgICAgICAgICAgICAgICB5OiBhWzNdXHJcbiAgICAgICAgICAgICAgICB9LCBuKSksIGkgPSBuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgICAgIH0sIDApLCBhID0gMCA9PT0gcy5zZW1JbmRleCA/IDAgOiAxID09PSBzLnNlbUluZGV4ID8gdCA6IHQgLyAyLCAyICE9PSBzLnNlbUluZGV4ICYmIChuID0gTWF0aC5tYXgoci5hdHRhY2hfcGx1Z0JhY2tMZW5TRVtzLnNlbUluZGV4XSB8fCAwLCByLmxpbmVfc3Ryb2tlV2lkdGggLyAyKSArIHMuc3Ryb2tlV2lkdGggLyAyICsgcy5oZWlnaHQgLyA0LCBhID0gKGEgKz0gMCA9PT0gcy5zZW1JbmRleCA/IG4gOiAtbikgPCAwID8gMCA6IHQgPCBhID8gdCA6IGEpLCBzLmxpbmVPZmZzZXQgJiYgKGEgPSAoYSArPSBzLmxpbmVPZmZzZXQpIDwgMCA/IDAgOiB0IDwgYSA/IHQgOiBhKSwgby5zdGFydE9mZnNldCA9IGEsIFdlKHMsIGwsIFwic3RhcnRPZmZzZXRcIiwgYSkgJiYgKHMuZWxtT2Zmc2V0LnN0YXJ0T2Zmc2V0LmJhc2VWYWwudmFsdWUgPSBhKSkpXHJcbiAgICAgICAgICB9LCBzLnVwZGF0ZVNob3cgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB5LmNhcHRpb25MYWJlbC51cGRhdGVTaG93KHMsIGUpXHJcbiAgICAgICAgICB9LCB1ZSAmJiAocy5hZGp1c3RFZGdlID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgcy5iQm94ICYmIHkuY2FwdGlvbkxhYmVsLmFkanVzdEVkZ2UodCwgcy5iQm94LCBzLnN0cm9rZVdpZHRoIC8gMilcclxuICAgICAgICAgIH0pLCAhMClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldE9mZnNldFBhdGhEYXRhOiBmdW5jdGlvbiAoZSwgeCwgbikge1xyXG4gICAgICAgICAgdmFyIGIsIGEsIGkgPSAzLFxyXG4gICAgICAgICAgICBrID0gW107XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gdyhlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhlLnggLSB0LngpIDwgaSAmJiBNYXRoLmFicyhlLnkgLSB0LnkpIDwgaVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCwgbiwgYSwgaSwgbywgbCwgciwgcywgdSwgaCwgcCwgYywgZCwgZiwgeSwgUywgbSwgZywgXywgdiwgRTtcclxuICAgICAgICAgICAgMiA9PT0gZS5sZW5ndGggPyAoZyA9IGVbMF0sIF8gPSBlWzFdLCB2ID0geCwgRSA9IE1hdGguYXRhbjIoZy55IC0gXy55LCBfLnggLSBnLngpICsgLjUgKiBNYXRoLlBJLCB0ID0gW3tcclxuICAgICAgICAgICAgICB4OiBnLnggKyBNYXRoLmNvcyhFKSAqIHYsXHJcbiAgICAgICAgICAgICAgeTogZy55ICsgTWF0aC5zaW4oRSkgKiB2ICogLTFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHg6IF8ueCArIE1hdGguY29zKEUpICogdixcclxuICAgICAgICAgICAgICB5OiBfLnkgKyBNYXRoLnNpbihFKSAqIHYgKiAtMVxyXG4gICAgICAgICAgICB9XSwgYiA/IChhID0gYi5wb2ludHMsIDAgPD0gKGkgPSBNYXRoLmF0YW4yKGFbMV0ueSAtIGFbMF0ueSwgYVswXS54IC0gYVsxXS54KSAtIE1hdGguYXRhbjIoZVswXS55IC0gZVsxXS55LCBlWzFdLnggLSBlWzBdLngpKSAmJiBpIDw9IE1hdGguUEkgPyBuID0ge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICAgICAgICAgIHBvaW50czogdCxcclxuICAgICAgICAgICAgICBpbnNpZGU6ICEwXHJcbiAgICAgICAgICAgIH0gOiAobCA9IEVlKGFbMF0sIGFbMV0sIHgpLCBvID0gRWUodFsxXSwgdFswXSwgeCksIHMgPSBhWzBdLCBoID0gbywgcCA9IHRbMV0sIGMgPSAodSA9IGwpLnggLSBzLngsIGQgPSB1LnkgLSBzLnksIGYgPSBwLnggLSBoLngsIHkgPSBwLnkgLSBoLnksIFMgPSAoLWQgKiAocy54IC0gaC54KSArIGMgKiAocy55IC0gaC55KSkgLyAoLWYgKiBkICsgYyAqIHkpLCBtID0gKGYgKiAocy55IC0gaC55KSAtIHkgKiAocy54IC0gaC54KSkgLyAoLWYgKiBkICsgYyAqIHkpLCAociA9IDAgPD0gUyAmJiBTIDw9IDEgJiYgMCA8PSBtICYmIG0gPD0gMSA/IHtcclxuICAgICAgICAgICAgICB4OiBzLnggKyBtICogYyxcclxuICAgICAgICAgICAgICB5OiBzLnkgKyBtICogZFxyXG4gICAgICAgICAgICB9IDogbnVsbCkgPyBuID0ge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICAgICAgICAgIHBvaW50czogW2FbMV0gPSByLCB0WzFdXVxyXG4gICAgICAgICAgICB9IDogKGFbMV0gPSB3KG8sIGwpID8gbyA6IGwsIG4gPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgcG9pbnRzOiBbbywgdFsxXV1cclxuICAgICAgICAgICAgfSksIGIubGVuID0gX2UoYVswXSwgYVsxXSkpKSA6IG4gPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgcG9pbnRzOiB0XHJcbiAgICAgICAgICAgIH0sIG4ubGVuID0gX2Uobi5wb2ludHNbMF0sIG4ucG9pbnRzWzFdKSwgay5wdXNoKGIgPSBuKSkgOiAoay5wdXNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImN1YmljXCIsXHJcbiAgICAgICAgICAgICAgcG9pbnRzOiBmdW5jdGlvbiAoZSwgdCwgbiwgYSwgaSwgbykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCwgciwgcyA9IGJlKGUsIHQsIG4sIGEpIC8gbywgdSA9IDEgLyAobyA8IGkgPyBzICogKGkgLyBvKSA6IHMpLCBoID0gW10sIHAgPSAwOyByID0gKDkwIC0gKGwgPSB4ZShlLCB0LCBuLCBhLCBwKSkuYW5nbGUpICogKE1hdGguUEkgLyAxODApLCBoLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGwueCArIE1hdGguY29zKHIpICogaSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBsLnkgKyBNYXRoLnNpbihyKSAqIGkgKiAtMVxyXG4gICAgICAgICAgICAgICAgICB9KSwgISgxIDw9IHApOykgMSA8IChwICs9IHUpICYmIChwID0gMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgIH0oZVswXSwgZVsxXSwgZVsyXSwgZVszXSwgeCwgMTYpXHJcbiAgICAgICAgICAgIH0pLCBiID0gbnVsbClcclxuICAgICAgICAgIH0pLCBiID0gbnVsbCwgay5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0O1xyXG4gICAgICAgICAgICBcImxpbmVcIiA9PT0gZS50eXBlID8gKGUuaW5zaWRlICYmIChiLmxlbiA+IHggPyAoKHQgPSBiLnBvaW50cylbMV0gPSBFZSh0WzBdLCB0WzFdLCAteCksIGIubGVuID0gX2UodFswXSwgdFsxXSkpIDogKGIucG9pbnRzID0gbnVsbCwgYi5sZW4gPSAwKSwgZS5sZW4gPiB4ICsgbiA/ICgodCA9IGUucG9pbnRzKVswXSA9IEVlKHRbMV0sIHRbMF0sIC0oeCArIG4pKSwgZS5sZW4gPSBfZSh0WzBdLCB0WzFdKSkgOiAoZS5wb2ludHMgPSBudWxsLCBlLmxlbiA9IDApKSwgYiA9IGUpIDogYiA9IG51bGxcclxuICAgICAgICAgIH0pLCBrLnJlZHVjZShmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IGUucG9pbnRzO1xyXG4gICAgICAgICAgICByZXR1cm4gbiAmJiAoYSAmJiB3KG5bMF0sIGEpIHx8IHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbblswXS54LCBuWzBdLnldXHJcbiAgICAgICAgICAgIH0pLCBcImxpbmVcIiA9PT0gZS50eXBlID8gdC5wdXNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFtuWzFdLngsIG5bMV0ueV1cclxuICAgICAgICAgICAgfSkgOiAobi5zaGlmdCgpLCBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICB0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtlLngsIGUueV1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KSksIGEgPSBuW24ubGVuZ3RoIC0gMV0pLCB0XHJcbiAgICAgICAgICB9LCBbXSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5ld1RleHQ6IGZ1bmN0aW9uIChlLCB0LCBuLCBhKSB7XHJcbiAgICAgICAgICB2YXIgaSwgbywgbCwgciwgcywgdSwgaCwgcCwgYywgZDtcclxuICAgICAgICAgIHJldHVybiAociA9IChsID0gdC5jcmVhdGVFbGVtZW50TlMoYiwgXCJkZWZzXCIpKS5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInBhdGhcIikpKS5pZCA9IGkgPSBuICsgXCItcGF0aFwiLCAodSA9IChzID0gdC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ0ZXh0XCIpKS5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInRleHRQYXRoXCIpKSkuaHJlZi5iYXNlVmFsID0gXCIjXCIgKyBpLCB1LnN0YXJ0T2Zmc2V0LmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgsIDApLCB1LnRleHRDb250ZW50ID0gZSwgXCJib29sZWFuXCIgIT0gdHlwZW9mIGYgJiYgKGYgPSBcInBhaW50T3JkZXJcIiBpbiBzLnN0eWxlKSwgYSAmJiAhZiA/IChzLmlkID0gbyA9IG4gKyBcIi10ZXh0XCIsIGwuYXBwZW5kQ2hpbGQocyksIChjID0gKGggPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcImdcIikpLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSkuaHJlZi5iYXNlVmFsID0gXCIjXCIgKyBvLCAocCA9IGguYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIG8sIChkID0gYy5zdHlsZSkuc3Ryb2tlTGluZWpvaW4gPSBcInJvdW5kXCIsIHtcclxuICAgICAgICAgICAgZWxtUG9zaXRpb246IHMsXHJcbiAgICAgICAgICAgIGVsbVBhdGg6IHIsXHJcbiAgICAgICAgICAgIGVsbU9mZnNldDogdSxcclxuICAgICAgICAgICAgc3R5bGVUZXh0OiBzLnN0eWxlLFxyXG4gICAgICAgICAgICBzdHlsZUZpbGw6IHAuc3R5bGUsXHJcbiAgICAgICAgICAgIHN0eWxlU3Ryb2tlOiBkLFxyXG4gICAgICAgICAgICBzdHlsZVNob3c6IGguc3R5bGUsXHJcbiAgICAgICAgICAgIGVsbXNBcHBlbmQ6IFtsLCBoXVxyXG4gICAgICAgICAgfSkgOiAoZCA9IHMuc3R5bGUsIGEgJiYgKGQuc3Ryb2tlTGluZWpvaW4gPSBcInJvdW5kXCIsIGQucGFpbnRPcmRlciA9IFwic3Ryb2tlXCIpLCB7XHJcbiAgICAgICAgICAgIGVsbVBvc2l0aW9uOiBzLFxyXG4gICAgICAgICAgICBlbG1QYXRoOiByLFxyXG4gICAgICAgICAgICBlbG1PZmZzZXQ6IHUsXHJcbiAgICAgICAgICAgIHN0eWxlVGV4dDogZCxcclxuICAgICAgICAgICAgc3R5bGVGaWxsOiBkLFxyXG4gICAgICAgICAgICBzdHlsZVN0cm9rZTogYSA/IGQgOiBudWxsLFxyXG4gICAgICAgICAgICBzdHlsZVNob3c6IGQsXHJcbiAgICAgICAgICAgIGVsbXNBcHBlbmQ6IFtsLCBzXVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXRTdmc6IGZ1bmN0aW9uICh0LCBuKSB7XHJcbiAgICAgICAgICB2YXIgZSwgYSwgaSA9IHkucGF0aExhYmVsLm5ld1RleHQodC50ZXh0LCBuLmJhc2VXaW5kb3cuZG9jdW1lbnQsIHYgKyBcIi1wYXRoTGFiZWwtXCIgKyB0Ll9pZCwgdC5vdXRsaW5lQ29sb3IpO1xyXG4gICAgICAgICAgW1wiZWxtUG9zaXRpb25cIiwgXCJlbG1QYXRoXCIsIFwiZWxtT2Zmc2V0XCIsIFwic3R5bGVGaWxsXCIsIFwic3R5bGVTaG93XCIsIFwiZWxtc0FwcGVuZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRbZV0gPSBpW2VdXHJcbiAgICAgICAgICB9KSwgdC5pc1Nob3duID0gITEsIHQuc3R5bGVTaG93LnZpc2liaWxpdHkgPSBcImhpZGRlblwiLCB5LmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG51bGwgIT0gdFtlXSAmJiAoaS5zdHlsZVRleHRbZV0gPSB0W2VdKVxyXG4gICAgICAgICAgfSksIGkuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG4uc3ZnLmFwcGVuZENoaWxkKGUpXHJcbiAgICAgICAgICB9KSwgaS5lbG1QYXRoLnNldFBhdGhEYXRhKFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFswLCAxMDBdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaFwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFsxMDBdXHJcbiAgICAgICAgICB9XSksIGUgPSBpLmVsbVBvc2l0aW9uLmdldEJCb3goKSwgaS5zdHlsZVRleHQudGV4dEFuY2hvciA9IFtcInN0YXJ0XCIsIFwiZW5kXCIsIFwibWlkZGxlXCJdW3Quc2VtSW5kZXhdLCAyICE9PSB0LnNlbUluZGV4IHx8IHQubGluZU9mZnNldCB8fCBpLmVsbU9mZnNldC5zdGFydE9mZnNldC5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsIDUwKSwgdC5oZWlnaHQgPSBlLmhlaWdodCwgdC5vdXRsaW5lQ29sb3IgJiYgKGEgPSAxMCA8IChhID0gZS5oZWlnaHQgLyA5KSA/IDEwIDogYSA8IDIgPyAyIDogYSwgaS5zdHlsZVN0cm9rZS5zdHJva2VXaWR0aCA9IGEgKyBcInB4XCIsIGkuc3R5bGVTdHJva2Uuc3Ryb2tlID0gdC5vdXRsaW5lQ29sb3IpLCB0LnN0cm9rZVdpZHRoID0gYSB8fCAwLCBUZSh0LmFwbFN0YXRzLCB5LnBhdGhMYWJlbC5zdGF0cyksIHQudXBkYXRlQ29sb3IobiksIHQudXBkYXRlUGF0aChuKSwgdC51cGRhdGVTdGFydE9mZnNldChuKSwgdWUgJiYgRGUobiwge30pLCB0LnVwZGF0ZVNob3cobilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XHJcbiAgICAgICAgICByZXR1cm4gZS5jb2xvciB8fCBJZShuLCBcImN1cl9saW5lX2NvbG9yXCIsIGUudXBkYXRlQ29sb3IpLCBJZShuLCBcImN1cl9saW5lX3N0cm9rZVdpZHRoXCIsIGUudXBkYXRlUGF0aCksIEllKG4sIFwiYXBsX3BhdGhcIiwgZS51cGRhdGVQYXRoKSwgZS5zZW1JbmRleCA9IFwic3RhcnRMYWJlbFwiID09PSB0Lm9wdGlvbk5hbWUgPyAwIDogXCJlbmRMYWJlbFwiID09PSB0Lm9wdGlvbk5hbWUgPyAxIDogMiwgKDIgIT09IGUuc2VtSW5kZXggfHwgZS5saW5lT2Zmc2V0KSAmJiBJZShuLCBcImN1cl9hdHRhY2hfcGx1Z0JhY2tMZW5TRVwiLCBlLnVwZGF0ZVN0YXJ0T2Zmc2V0KSwgSWUobiwgXCJzdmdTaG93XCIsIGUudXBkYXRlU2hvdyksIHVlICYmIEllKG4sIFwibmV3X2VkZ2U0dmlld0JveFwiLCBlLmFkanVzdEVkZ2UpLCB5LnBhdGhMYWJlbC5pbml0U3ZnKGUsIG4pLCAhMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzO1xyXG4gICAgICAgICAgZS5lbG1zQXBwZW5kICYmIChlLmVsbXNBcHBlbmQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBuLnN2Zy5yZW1vdmVDaGlsZChlKVxyXG4gICAgICAgICAgfSksIGUuZWxtUG9zaXRpb24gPSBlLmVsbVBhdGggPSBlLmVsbU9mZnNldCA9IGUuc3R5bGVGaWxsID0gZS5zdHlsZVNob3cgPSBlLmVsbXNBcHBlbmQgPSBudWxsKSwgVGUoZS5jdXJTdGF0cywgeS5wYXRoTGFiZWwuc3RhdHMpLCBUZShlLmFwbFN0YXRzLCB5LnBhdGhMYWJlbC5zdGF0cyksIGUuY29sb3IgfHwgQ2UobiwgXCJjdXJfbGluZV9jb2xvclwiLCBlLnVwZGF0ZUNvbG9yKSwgQ2UobiwgXCJjdXJfbGluZV9zdHJva2VXaWR0aFwiLCBlLnVwZGF0ZVBhdGgpLCBDZShuLCBcImFwbF9wYXRoXCIsIGUudXBkYXRlUGF0aCksICgyICE9PSBlLnNlbUluZGV4IHx8IGUubGluZU9mZnNldCkgJiYgQ2UobiwgXCJjdXJfYXR0YWNoX3BsdWdCYWNrTGVuU0VcIiwgZS51cGRhdGVTdGFydE9mZnNldCksIENlKG4sIFwic3ZnU2hvd1wiLCBlLnVwZGF0ZVNob3cpLCB1ZSAmJiAoQ2UobiwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIGUuYWRqdXN0RWRnZSksIERlKG4sIHt9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZU9wdGlvbjogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuID0gdC5wcm9wcyxcclxuICAgICAgICAgICAgYSA9IHt9O1xyXG4gICAgICAgICAgYVt0Lm9wdGlvbk5hbWVdID0gXCJcIiwgWmUobiwgYSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHQuYm91bmRUYXJnZXRzLmxlbmd0aCAmJiAoY29uc29sZS5lcnJvcihcIkxlYWRlckxpbmVBdHRhY2htZW50IHdhcyBub3QgdW5ib3VuZCBieSByZW1vdmVcIiksIHQuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgeS5wYXRoTGFiZWwudW5iaW5kKHQsIGUpXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIE9iamVjdC5rZXlzKHkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgWWVbZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTKHlbZV0sIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcbiAgICAgIH1cclxuICAgIH0pLCBZZS5wb3NpdGlvbkJ5V2luZG93UmVzaXplID0gITAsIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIE8uYWRkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgWWUucG9zaXRpb25CeVdpbmRvd1Jlc2l6ZSAmJiBPYmplY3Qua2V5cyhLKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgRGUoS1tlXSwge1xyXG4gICAgICAgICAgcG9zaXRpb246ICEwXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pLCAhMSksIFllXHJcbn0oKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzZXRMaW5lOiBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgY29uZmlnID0ge30pIHtcclxuICAgIHJldHVybiBuZXcgTGVhZGVyTGluZShzdGFydCwgZW5kLCBjb25maWcpXHJcbiAgfSxcclxuICBvYmo6IExlYWRlckxpbmVcclxufVxyXG4iLCJpbXBvcnQgTGVhZGVyTGluZSBmcm9tIFwiLi9MZWFkZXJMaW5lXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICBjb25zdCB7bmFtZX09b3B0aW9ucztcclxuICAgIGlmKCFuYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJQbHVnIG5hbWUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICBlbHNlIGlmKExlYWRlckxpbmUubmFtZXNbbmFtZV0pIHRocm93IG5ldyBFcnJvcihgUGx1ZyBcIiR7bmFtZX1cIiBhbHJlYWR5IGRlZmluZWRgKTtcclxuICAgIGVsc2V7XHJcbiAgICAgICAgbGV0IGRlZnJvb3Q9ZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlPiNsaW5rZXItbGluZS1kZWZzXCIpO1xyXG4gICAgICAgIGlmKCFkZWZyb290KXtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQ9ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICAgICAgY29uc3QgZW5kPWRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgICAgICAgIG5ldyBMZWFkZXJMaW5lKHtzdGFydCxlbmR9KS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgc3RhcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGVuZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZGVmcm9vdD1kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGU+I2xpbmtlci1saW5lLWRlZnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlZnNFbD1kZWZyb290LnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGU+ZGVmc1wiKTtcclxuICAgICAgICBpZihcInNoYXBlXCIgaW4gb3B0aW9ucykgZGVmaW5lU2hhcGVQbHVnKGRlZnNFbCxvcHRpb25zKTtcclxuICAgICAgICBlbHNlIGlmKFwic3ZnXCIgaW4gb3B0aW9ucykgZGVmaW5lU3ZnUGx1ZyhkZWZzRWwsb3B0aW9ucyk7XHJcbiAgICAgICAgZWxzZSBpZihcInNyY1wiIGluIG9wdGlvbnMpIGRlZmluZVNyY1BsdWcoZGVmc0VsLG9wdGlvbnMpO1xyXG4gICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjdXN0b20gcGx1ZyBkZWZpbml0aW9uIG9iamVjdFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGljcz17XHJcbiAgICBzaGFwZXM6W1wicmVjdFwiLFwiZWxsaXBzZVwiXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldExpbmVQbHVnU3R5bGU9KGxpbmtlcmxpbmUpPT57XHJcbiAgICBjb25zdCB7ZWxlbWVudH09bGlua2VybGluZSx7cGx1Z3N9PUxlYWRlckxpbmU7XHJcbiAgICBbbGlua2VybGluZS5zdGFydFBsdWcsbGlua2VybGluZS5lbmRQbHVnXS5mb3JFYWNoKChwbHVnbmFtZSxpKT0+e1xyXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb249cGx1Z3NbcGx1Z25hbWVdO1xyXG4gICAgICAgIGlmKGRlZmluaXRpb24/LndpdGhzdmcpe1xyXG4gICAgICAgICAgICBjb25zdCB1c2VFbD1lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZCQ9cGx1Zy1tYXJrZXItJHtpfV0gdXNlW2hyZWZdYCk7XHJcbiAgICAgICAgICAgIGlmKHVzZUVsKXtcclxuICAgICAgICAgICAgICAgIHVzZUVsLnN0eWxlLnN0cm9rZT11c2VFbC5zdHlsZS5maWxsfHxsaW5rZXJsaW5lWyhpP1wiZW5kXCI6XCJzdGFydFwiKStcIlBsdWdDb2xvclwiXXx8bGlua2VybGluZS5jb2xvcnx8XCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgdXNlRWwuc3R5bGUuc3Ryb2tlV2lkdGg9KGxpbmtlcmxpbmUuc2l6ZXx8NCkvMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBkZWZpbmVTcmNQbHVnPShkZWZzRWwsb3B0aW9ucyk9PntcclxuICAgIGNvbnN0IHtzcmN9PW9wdGlvbnM7XHJcbiAgICBpZih0eXBlb2Yoc3JjKT09PVwic3RyaW5nXCIpe1xyXG4gICAgICAgIGNvbnN0IGdyb3VwRWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIik7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VFbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwiaW1hZ2VcIik7XHJcbiAgICAgICAgY29uc3Qge3dpZHRoPTI0LGhlaWdodD0yNH09b3B0aW9ucztcclxuICAgICAgICBpbWFnZUVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsd2lkdGgpO1xyXG4gICAgICAgIGltYWdlRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsaGVpZ2h0KTtcclxuICAgICAgICBpbWFnZUVsLnNldEF0dHJpYnV0ZShcImhyZWZcIixzcmMpO1xyXG4gICAgICAgIGdyb3VwRWwuYXBwZW5kQ2hpbGQoaW1hZ2VFbCk7XHJcbiAgICAgICAgZGVmc0VsLmFwcGVuZENoaWxkKGdyb3VwRWwpO1xyXG4gICAgICAgIGdyb3VwRWwuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsYHRyYW5zbGF0ZSgtJHt3aWR0aC8yfSwtJHtoZWlnaHQvMn0pYCk7XHJcbiAgICAgICAgY29uc3Qge2VsbUlkfT1yZWdpc3RlclBsdWcoe1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICB3aWR0aCxoZWlnaHQsXHJcbiAgICAgICAgICAgIHdpdGhzdmc6dHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBncm91cEVsLmlkPWVsbUlkO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoYFByb3BlcnR5IFwic3JjXCIgc2hvdWxkIGJlIG9mIHR5cGUgc3RyaW5nYCk7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmluZVN2Z1BsdWc9KGRlZnNFbCxvcHRpb25zKT0+e1xyXG4gICAgbGV0IHtzdmd9PW9wdGlvbnM7XHJcbiAgICBpZih0eXBlb2Yoc3ZnKT09PVwiZnVuY3Rpb25cIikgc3ZnPXN2ZyhcImluaGVyaXRcIixcImluaGVyaXRcIik7XHJcbiAgICBpZih0eXBlb2Yoc3ZnKT09PVwic3RyaW5nXCIpe1xyXG4gICAgICAgIGNvbnN0IGdyb3VwRWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIik7XHJcbiAgICAgICAgZ3JvdXBFbC5pbm5lckhUTUw9c3ZnO1xyXG4gICAgICAgIGRlZnNFbC5hcHBlbmRDaGlsZChncm91cEVsKTtcclxuICAgICAgICBjb25zdCBzdmdFbD1ncm91cEVsLnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGU+c3ZnXCIpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoPW9wdGlvbnMud2lkdGh8fHN2Z0VsLndpZHRoLmJhc2VWYWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0PW9wdGlvbnMuaGVpZ2h0fHxzdmdFbC5oZWlnaHQuYmFzZVZhbC52YWx1ZTtcclxuICAgICAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHdpZHRoKTtcclxuICAgICAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIixoZWlnaHQpO1xyXG4gICAgICAgIGdyb3VwRWwuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsYHRyYW5zbGF0ZSgtJHt3aWR0aC8yfSwtJHtoZWlnaHQvMn0pYCk7XHJcbiAgICAgICAgY29uc3Qge2VsbUlkfT1yZWdpc3RlclBsdWcoe1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICB3aWR0aCxoZWlnaHQsXHJcbiAgICAgICAgICAgIHdpdGhzdmc6dHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBncm91cEVsLmlkPWVsbUlkO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoYFByb3BlcnR5IFwic3ZnXCIgc2hvdWxkIGJlIG9mIHR5cGUgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nYCk7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmluZVNoYXBlUGx1Zz0oZGVmc0VsLG9wdGlvbnMpPT57XHJcbiAgICBjb25zdCB7c2hhcGV9PW9wdGlvbnM7XHJcbiAgICBpZihzdGF0aWNzLnNoYXBlcy5pbmNsdWRlcyhzaGFwZSkpe1xyXG4gICAgICAgIGNvbnN0IHt3aWR0aD0wLGhlaWdodD0wfT1vcHRpb25zO1xyXG4gICAgICAgIG9wdGlvbnMud2lkdGg9d2lkdGg7XHJcbiAgICAgICAgb3B0aW9ucy5oZWlnaHQ9aGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHtlbG1JZH09cmVnaXN0ZXJQbHVnKG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixzaGFwZSk7XHJcbiAgICAgICAgZWxlbWVudC5pZD1lbG1JZDtcclxuICAgICAgICBkZWZzRWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYoc2hhcGU9PT1cInJlY3RcIil7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwieFwiLC13aWR0aC8yKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5XCIsLWhlaWdodC8yKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHdpZHRoKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIixoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHNoYXBlPT09XCJlbGxpcHNlXCIpe1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImN4XCIsMCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY3lcIiwwKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyeFwiLHdpZHRoLzIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInJ5XCIsaGVpZ2h0LzIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBlbHNlIHRocm93IG5ldyBFcnJvcihgc2hhcGUgc2hvdWxkIGJlIG9uZSBvZjogJHtzdGF0aWNzLnNoYXBlcy50b1N0cmluZygpfWApO1xyXG59XHJcblxyXG5jb25zdCByZWdpc3RlclBsdWc9KG9wdGlvbnMpPT57XHJcbiAgICBjb25zdCB7bmFtZSx3aWR0aCxoZWlnaHQsbWFyZ2luLHJvdGF0YWJsZT10cnVlfT1vcHRpb25zO1xyXG4gICAgY29uc3QgaW5uZXJSYWRpdXM9TWF0aC5tYXgod2lkdGgsaGVpZ2h0KS8yO1xyXG4gICAgY29uc3QgcGx1Z1Byb3BzPXtcclxuICAgICAgICBlbG1JZDpgbGlua2VyLWxpbmUtJHtuYW1lfWAsXHJcbiAgICAgICAgYkJveDp7XHJcbiAgICAgICAgICAgIHdpZHRoLGhlaWdodCxcclxuICAgICAgICAgICAgdG9wOi1oZWlnaHQvMixcclxuICAgICAgICAgICAgbGVmdDotd2lkdGgvMixcclxuICAgICAgICAgICAgcmlnaHQ6d2lkdGgvMixcclxuICAgICAgICAgICAgYm90dG9tOmhlaWdodC8yLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGhSOndpZHRoLzQsXHJcbiAgICAgICAgaGVpZ2h0UjpoZWlnaHQvNCxcclxuICAgICAgICBiQ2lyY2xlOmlubmVyUmFkaXVzLFxyXG4gICAgICAgIHNpZGVMZW46aW5uZXJSYWRpdXMsXHJcbiAgICAgICAgYmFja0xlbjppbm5lclJhZGl1cyxcclxuICAgICAgICBvdmVyaGVhZDoodHlwZW9mKG1hcmdpbik9PT1cIm51bWJlclwiKSYmbWFyZ2luLFxyXG4gICAgICAgIG91dGxpbmVCYXNlOjIsXHJcbiAgICAgICAgb3V0bGluZU1heDoxLjUsXHJcbiAgICAgICAgbm9Sb3RhdGU6IXJvdGF0YWJsZSxcclxuICAgICAgICB3aXRoc3ZnOm9wdGlvbnMud2l0aHN2ZyxcclxuICAgIH1cclxuICAgIExlYWRlckxpbmUucGx1Z3NbbmFtZV09cGx1Z1Byb3BzO1xyXG4gICAgTGVhZGVyTGluZS5uYW1lc1tuYW1lXT1uYW1lO1xyXG4gICAgcmV0dXJuIHBsdWdQcm9wcztcclxufSIsIi8qISBMZWFkZXJMaW5lIHYxLjAuNyAoYykgYW5zZWtpIGh0dHBzOi8vYW5zZWtpLmdpdGh1Yi5pby9sZWFkZXItbGluZS8gKi9cclxudmFyIExlYWRlckxpbmU9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgWix3LE8sTSxJLG8sdCxzLGgsdSxuLGEsZSxfLHYsbCxyLGksRSx4LHAsYyxkLEM9XCJsaW5rZXItbGluZVwiLGI9MSxrPTIsTD0zLEE9NCxWPXt0b3A6YixyaWdodDprLGJvdHRvbTpMLGxlZnQ6QX0sUD0xLE49MixUPTMsVz00LEI9NSxSPXtzdHJhaWdodDpQLGFyYzpOLGZsdWlkOlQsbWFnbmV0OlcsZ3JpZDpCfSxZPVwiYmVoaW5kXCIsZj1DK1wiLWRlZnNcIix5PSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJsaW5rZXItbGluZS1kZWZzXCI+PHN0eWxlPjwhW0NEQVRBWy5saW5rZXItbGluZXtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzp2aXNpYmxlIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lIWltcG9ydGFudDtmb250LXNpemU6MWVtfSNsaW5rZXItbGluZS1kZWZze3dpZHRoOjA7aGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfS5saW5rZXItbGluZS1saW5lLXBhdGh7ZmlsbDpub25lfS5saW5rZXItbGluZS1tYXNrLWJnLXJlY3R7ZmlsbDp3aGl0ZX0ubGlua2VyLWxpbmUtY2Fwcy1tYXNrLWFuY2hvciwubGlua2VyLWxpbmUtY2Fwcy1tYXNrLW1hcmtlci1zaGFwZXtmaWxsOmJsYWNrfS5saW5rZXItbGluZS1jYXBzLW1hc2stYW5jaG9ye3N0cm9rZTpibGFja30ubGlua2VyLWxpbmUtY2Fwcy1tYXNrLWxpbmUsLmxpbmtlci1saW5lLXBsdWdzLWZhY2V7c3Ryb2tlOnJnYmEoMCwwLDAsMCl9Lmxpbmtlci1saW5lLWxpbmUtbWFzay1zaGFwZXtzdHJva2U6d2hpdGV9Lmxpbmtlci1saW5lLWxpbmUtb3V0bGluZS1tYXNrLXNoYXBle3N0cm9rZTpibGFja30ubGlua2VyLWxpbmUtcGx1Zy1tYXNrLXNoYXBle2ZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrfS5saW5rZXItbGluZS1wbHVnLW91dGxpbmUtbWFzay1zaGFwZXtmaWxsOmJsYWNrO3N0cm9rZTp3aGl0ZX0ubGlua2VyLWxpbmUtYXJlYUFuY2hvcntwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzp2aXNpYmxlIWltcG9ydGFudH1dXT48L3N0eWxlPjxkZWZzPjxjaXJjbGUgaWQ9XCJsaW5rZXItbGluZS1kaXNjXCIgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjVcIi8+PHJlY3QgaWQ9XCJsaW5rZXItbGluZS1zcXVhcmVcIiB4PVwiLTVcIiB5PVwiLTVcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIi8+PHBvbHlnb24gaWQ9XCJsaW5rZXItbGluZS1hcnJvdzFcIiBwb2ludHM9XCItOCwtOCA4LDAgLTgsOCAtNSwwXCIvPjxwb2x5Z29uIGlkPVwibGlua2VyLWxpbmUtYXJyb3cyXCIgcG9pbnRzPVwiLTQsLTggNCwwIC00LDggLTcsNSAtMiwwIC03LC01XCIvPjxwb2x5Z29uIGlkPVwibGlua2VyLWxpbmUtYXJyb3czXCIgcG9pbnRzPVwiLTQsLTUgOCwwIC00LDVcIi8+PGcgaWQ9XCJsaW5rZXItbGluZS1oYW5kXCI+PHBhdGggc3R5bGU9XCJmaWxsOiAjZmNmY2ZjXCIgZD1cIk05LjE5IDExLjE0aDQuNzVjMS4zOCAwIDIuNDktMS4xMSAyLjQ5LTIuNDkgMC0uNTEtLjE1LS45OC0uNDEtMS4zN2gxLjNjMS4zOCAwIDIuNDktMS4xMSAyLjQ5LTIuNDlzLTEuMTEtMi41My0yLjQ5LTIuNTNoMS4wMmMxLjM4IDAgMi40OS0xLjExIDIuNDktMi40OXMtMS4xMS0yLjQ5LTIuNDktMi40OWgxNC45NmMxLjM3IDAgMi40OS0xLjExIDIuNDktMi40OXMtMS4xMS0yLjQ5LTIuNDktMi40OUgxNi41OEMxNi05Ljg2IDE0LjI4LTExLjE0IDkuNy0xMS4xNGMtNC43OSAwLTYuNTUgMy40Mi03Ljg3IDQuNzNILTIuMTR2MTMuMjNoMy42OEMzLjI5IDkuOTcgNS40NyAxMS4xNCA5LjE5IDExLjE0TDkuMTkgMTEuMTRaXCIvPjxwYXRoIHN0eWxlPVwiZmlsbDogYmxhY2tcIiBkPVwiTTEzLjk1IDEyYzEuODUgMCAzLjM1LTEuNSAzLjM1LTMuMzUgMC0uMTctLjAyLS4zNC0uMDQtLjUxaC4wN2MxLjg1IDAgMy4zNS0xLjUgMy4zNS0zLjM1IDAtLjc5LS4yNy0xLjUxLS43Mi0yLjA4IDEuMDMtLjU3IDEuNzQtMS42NyAxLjc0LTIuOTMgMC0uNTktLjE2LTEuMTUtLjQzLTEuNjNoMTIuMDRjMS44NSAwIDMuMzUtMS41IDMuMzUtMy4zNSAwLTEuODUtMS41LTMuMzUtMy4zNS0zLjM1SDE3LjJDMTYuMjYtMTAuOTMgMTMuOTEtMTIgOS43LTEyIDUuMzYtMTIgMy4yMi05LjQgMS45NC03Ljg0YzAgMC0uMjkuMzMtLjUuNTctLjYzIDAtMy41OCAwLTMuNTggMEMtMi42MS03LjI3LTMtNi44OC0zLTYuNDF2MTMuMjNjMCAuNDcuMzkuODYuODYuODYgMCAwIDIuNDggMCAzLjIgMEMyLjkgMTAuNzMgNS4yOSAxMiA5LjE5IDEyTDEzLjk1IDEyWk05LjE5IDEwLjI4Yy0zLjQ2IDAtNS4zMy0xLjA1LTYuOS0zLjg3LS4xNS0uMjctLjQ0LS40NC0uNzUtLjQ0IDAgMC0xLjgxIDAtMi44MiAwVi01LjU1YzEuMDYgMCAzLjExIDAgMy4xMSAwIC4yNSAwIC40NC0uMDYuNjEtLjI1bC44My0uOTVjMS4yMy0xLjQ5IDIuOTEtMy41MyA2LjQzLTMuNTMgMy40NSAwIDQuOS43NCA1LjU3IDEuNzJoLTQuM2MtLjQ4IDAtLjg2LjM4LS44Ni44NnMuMzkuODYuODYuODZoMjIuMzRjLjkgMCAxLjYzLjczIDEuNjMgMS42MyAwIC45LS43MyAxLjYzLTEuNjMgMS42M0gxNS44M2MtLjQ4IDAtLjg2LjM4LS44Ni44NiAwIC40Ny4zOS44Ni44Ni44NmgyLjUyYy45IDAgMS42My43MyAxLjYzIDEuNjNzLS43MyAxLjYzLTEuNjMgMS42M2gtMy4xMmMtLjQ4IDAtLjg2LjM4LS44Ni44NiAwIC40Ny4zOS44Ni44Ni44NmgyLjExYy44OCAwIDEuNjMuNzYgMS42MyAxLjY3IDAgLjktLjczIDEuNjMtMS42MyAxLjYzaC0zLjJjLS40OCAwLS44Ni4zOS0uODYuODYgMCAuNDcuMzkuODYuODYuODZoMS4zNmMuMDUuMTYuMDkuMzQuMDkuNTEgMCAuOS0uNzMgMS42My0xLjYzIDEuNjNDMTMuOTUgMTAuMjggOS4xOSAxMC4yOCA5LjE5IDEwLjI4WlwiLz48L2c+PGcgaWQ9XCJsaW5rZXItbGluZS1jcm9zc2hhaXJcIj48cGF0aCBkPVwiTTAtNzguOTdjLTQzLjU0IDAtNzguOTcgMzUuNDMtNzguOTcgNzguOTcgMCA0My41NCAzNS40MyA3OC45NyA3OC45NyA3OC45N3M3OC45Ny0zNS40MyA3OC45Ny03OC45N0M3OC45Ny00My41NCA0My41NS03OC45NyAwLTc4Ljk3Wk03Ni41MS0xLjIxaC05Ljkxdi05LjExaC0yLjQzdjkuMTFoLTExLjQ1Yy0uNjQtMjguMTItMjMuMzgtNTAuODYtNTEuNS01MS41Vi02NC4xN2g5LjExVi02Ni42aC05LjExdi05LjkxQzQyLjQ2LTc1Ljg2IDc1Ljg2LTQyLjQ1IDc2LjUxLTEuMjFaTS0xLjIxLTMwLjc2aC05LjExdjIuNDNoOS4xMVYtNC4yYy0xLjQ0LjQyLTIuNTcgMS41NC0yLjk4IDIuOThILTI4LjMzdi05LjExaC0yLjQzdjkuMTFILTUwLjI5Qy00OS42NS0yOC0yNy45OS00OS42NS0xLjIxLTUwLjI5Vi0zMC43NlpNLTMwLjc2IDEuMjF2OS4xMWgyLjQzdi05LjExSC00LjJjLjQyIDEuNDQgMS41NCAyLjU3IDIuOTggMi45OHYyNC4xM2gtOS4xMXYyLjQzaDkuMTF2MTkuNTNDLTI3Ljk5IDQ5LjY1LTQ5LjY1IDI4LTUwLjI5IDEuMjFILTMwLjc2Wk0xLjIyIDMwLjc1aDkuMTF2LTIuNDNoLTkuMTFWNC4yYzEuNDQtLjQyIDIuNTYtMS41NCAyLjk4LTIuOThoMjQuMTN2OS4xMWgyLjQzdi05LjExaDE5LjUzQzQ5LjY1IDI4IDI4IDQ5LjY1IDEuMjIgNTAuMjlWMzAuNzVaTTMwLjc2LTEuMjF2LTkuMTFoLTIuNDN2OS4xMUg0LjJjLS40Mi0xLjQ0LTEuNTQtMi41Ni0yLjk4LTIuOThWLTI4LjMzaDkuMTF2LTIuNDNoLTkuMTFWLTUwLjI5QzI4LTQ5LjY1IDQ5LjY1LTI4IDUwLjI5LTEuMjFIMzAuNzZaTS0xLjIxLTc2LjUxdjkuOTFoLTkuMTF2Mi40M2g5LjExdjExLjQ1Yy0yOC4xMi42NC01MC44NiAyMy4zOC01MS41IDUxLjVILTY0LjE3di05LjExSC02Ni42djkuMTFoLTkuOTFDLTc1Ljg2LTQyLjQ1LTQyLjQ1LTc1Ljg2LTEuMjEtNzYuNTFaTS03Ni41MSAxLjIxaDkuOTF2OS4xMWgyLjQzdi05LjExaDExLjQ1Yy42NCAyOC4xMiAyMy4zOCA1MC44NiA1MS41IDUxLjV2MTEuNDVoLTkuMTF2Mi40M2g5LjExdjkuOTFDLTQyLjQ1IDc1Ljg2LTc1Ljg2IDQyLjQ1LTc2LjUxIDEuMjFaTTEuMjIgNzYuNTF2LTkuOTFoOS4xMXYtMi40M2gtOS4xMXYtMTEuNDVjMjguMTItLjY0IDUwLjg2LTIzLjM4IDUxLjUtNTEuNWgxMS40NXY5LjExaDIuNDN2LTkuMTFoOS45MUM3NS44NiA0Mi40NSA0Mi40NSA3NS44NiAxLjIyIDc2LjUxWlwiLz48cGF0aCBkPVwiTTAgODMuNTgtNy4xIDk2IDcuMSA5NlpcIi8+PHBhdGggZD1cIk0wLTgzLjU4IDcuMS05Ni03LjEtOTZcIi8+PHBhdGggZD1cIk04My41OCAwIDk2IDcuMSA5Ni03LjFaXCIvPjxwYXRoIGQ9XCJNLTgzLjU4IDAtOTYtNy4xLTk2IDcuMVpcIi8+PC9nPjwvZGVmcz48L3N2Zz4nLFg9b3QucGx1Z3M9e2Rpc2M6e2VsbUlkOlwibGlua2VyLWxpbmUtZGlzY1wiLG5vUm90YXRlOiEwLGJCb3g6e2xlZnQ6LTUsdG9wOi01LHdpZHRoOjEwLGhlaWdodDoxMCxyaWdodDo1LGJvdHRvbTo1fSx3aWR0aFI6Mi41LGhlaWdodFI6Mi41LGJDaXJjbGU6NSxzaWRlTGVuOjUsYmFja0xlbjo1LG92ZXJoZWFkOjAsb3V0bGluZUJhc2U6MSxvdXRsaW5lTWF4OjR9LHNxdWFyZTp7ZWxtSWQ6XCJsaW5rZXItbGluZS1zcXVhcmVcIixub1JvdGF0ZTohMCxiQm94OntsZWZ0Oi01LHRvcDotNSx3aWR0aDoxMCxoZWlnaHQ6MTAscmlnaHQ6NSxib3R0b206NX0sd2lkdGhSOjIuNSxoZWlnaHRSOjIuNSxiQ2lyY2xlOjUsc2lkZUxlbjo1LGJhY2tMZW46NSxvdmVyaGVhZDowLG91dGxpbmVCYXNlOjEsb3V0bGluZU1heDo0fSxhcnJvdzE6e2VsbUlkOlwibGlua2VyLWxpbmUtYXJyb3cxXCIsYkJveDp7bGVmdDotOCx0b3A6LTgsd2lkdGg6MTYsaGVpZ2h0OjE2LHJpZ2h0OjgsYm90dG9tOjh9LHdpZHRoUjo0LGhlaWdodFI6NCxiQ2lyY2xlOjgsc2lkZUxlbjo4LGJhY2tMZW46OCxvdmVyaGVhZDo4LG91dGxpbmVCYXNlOjIsb3V0bGluZU1heDoxLjV9LGFycm93Mjp7ZWxtSWQ6XCJsaW5rZXItbGluZS1hcnJvdzJcIixiQm94OntsZWZ0Oi03LHRvcDotOCx3aWR0aDoxMSxoZWlnaHQ6MTYscmlnaHQ6NCxib3R0b206OH0sd2lkdGhSOjIuNzUsaGVpZ2h0Ujo0LGJDaXJjbGU6OCxzaWRlTGVuOjgsYmFja0xlbjo3LG92ZXJoZWFkOjQsb3V0bGluZUJhc2U6MSxvdXRsaW5lTWF4OjEuNzV9LGFycm93Mzp7ZWxtSWQ6XCJsaW5rZXItbGluZS1hcnJvdzNcIixiQm94OntsZWZ0Oi00LHRvcDotNSx3aWR0aDoxMixoZWlnaHQ6MTAscmlnaHQ6OCxib3R0b206NX0sd2lkdGhSOjMsaGVpZ2h0UjoyLjUsYkNpcmNsZTo4LHNpZGVMZW46NSxiYWNrTGVuOjQsb3ZlcmhlYWQ6OCxvdXRsaW5lQmFzZToxLG91dGxpbmVNYXg6Mi41fSxoYW5kOntlbG1JZDpcImxpbmtlci1saW5lLWhhbmRcIixiQm94OntsZWZ0Oi0zLHRvcDotMTIsd2lkdGg6NDAsaGVpZ2h0OjI0LHJpZ2h0OjM3LGJvdHRvbToxMn0sd2lkdGhSOjEwLGhlaWdodFI6NixiQ2lyY2xlOjM3LHNpZGVMZW46MTIsYmFja0xlbjozLG92ZXJoZWFkOjM3fSxjcm9zc2hhaXI6e2VsbUlkOlwibGlua2VyLWxpbmUtY3Jvc3NoYWlyXCIsbm9Sb3RhdGU6ITAsYkJveDp7bGVmdDotOTYsdG9wOi05Nix3aWR0aDoxOTIsaGVpZ2h0OjE5MixyaWdodDo5Nixib3R0b206OTZ9LHdpZHRoUjo0OCxoZWlnaHRSOjQ4LGJDaXJjbGU6OTYsc2lkZUxlbjo5NixiYWNrTGVuOjk2LG92ZXJoZWFkOjB9fSxGPW90Lm5hbWVzPXtiZWhpbmQ6WSxkaXNjOlwiZGlzY1wiLHNxdWFyZTpcInNxdWFyZVwiLGFycm93MTpcImFycm93MVwiLGFycm93MjpcImFycm93MlwiLGFycm93MzpcImFycm93M1wiLGhhbmQ6XCJoYW5kXCIsY3Jvc3NoYWlyOlwiY3Jvc3NoYWlyXCJ9LHE9RixHPVtiLGssTCxBXSxEPVwiYXV0b1wiLFE9e3g6XCJsZWZ0XCIseTpcInRvcFwiLHdpZHRoOlwid2lkdGhcIixoZWlnaHQ6XCJoZWlnaHRcIn0sej04MCxqPTQsSD01LFU9MTIwLEs9OCxKPTMuNzUsJD0xMCxlZT0zMCx0ZT0uNTUyMjg0NyxuZT0uMjUqTWF0aC5QSSxtPS9eXFxzKihcXC0/W1xcZFxcLl0rKVxccyooXFwlKT9cXHMqJC8sYWU9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFM9XCItbXMtc2Nyb2xsLWxpbWl0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUmJlwiLW1zLWltZS1hbGlnblwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlJiYhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLGllPSFTJiYhIWRvY3VtZW50LnVuaXF1ZUlELG9lPVwiTW96QXBwZWFyYW5jZVwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLGxlPSEoU3x8b2V8fCF3aW5kb3cuY2hyb21lfHwhd2luZG93LkNTUykscmU9IVMmJiFpZSYmIW9lJiYhbGUmJiF3aW5kb3cuY2hyb21lJiZcIldlYmtpdEFwcGVhcmFuY2VcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxzZT1pZXx8Uz8uMjouMSx1ZT17cGF0aDpULGxpbmVDb2xvcjpcImNvcmFsXCIsbGluZVNpemU6NCxwbHVnU0U6W1ksXCJhcnJvdzFcIl0scGx1Z1NpemVTRTpbMSwxXSxsaW5lT3V0bGluZUVuYWJsZWQ6ITEsbGluZU91dGxpbmVDb2xvcjpcImluZGlhbnJlZFwiLGxpbmVPdXRsaW5lU2l6ZTouMjUscGx1Z091dGxpbmVFbmFibGVkU0U6WyExLCExXSxwbHVnT3V0bGluZVNpemVTRTpbMSwxXX0saGU9KHA9e30udG9TdHJpbmcsYz17fS5oYXNPd25Qcm9wZXJ0eS50b1N0cmluZyxkPWMuY2FsbChPYmplY3QpLGZ1bmN0aW9uKGUpe3JldHVybiBlJiZcIltvYmplY3QgT2JqZWN0XVwiPT09cC5jYWxsKGUpJiYoIShlPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKSl8fChlPWUuaGFzT3duUHJvcGVydHkoXCJjb25zdHJ1Y3RvclwiKSYmZS5jb25zdHJ1Y3RvcikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmMuY2FsbChlKT09PWQpfSkscGU9TnVtYmVyLmlzRmluaXRlfHxmdW5jdGlvbihlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmd2luZG93LmlzRmluaXRlKGUpfSxnPShfPXtlYXNlOlsuMjUsLjEsLjI1LDFdLGxpbmVhcjpbMCwwLDEsMV0sXCJlYXNlLWluXCI6Wy40MiwwLDEsMV0sXCJlYXNlLW91dFwiOlswLDAsLjU4LDFdLFwiZWFzZS1pbi1vdXRcIjpbLjQyLDAsLjU4LDFdfSx2PTFlMy82MC8yLGw9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXtzZXRUaW1lb3V0KGUsdil9LHI9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlKX0saT1OdW1iZXIuaXNGaW5pdGV8fGZ1bmN0aW9uKGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlJiZ3aW5kb3cuaXNGaW5pdGUoZSl9LEU9W10seD0wLHthZGQ6ZnVuY3Rpb24obixlLHQsYSxpLG8sbCl7dmFyIHIscyx1LGgscCxjLGQsZix5LG0sUz0rK3g7ZnVuY3Rpb24gZyhlLHQpe3JldHVybnt2YWx1ZTpuKHQpLHRpbWVSYXRpbzplLG91dHB1dFJhdGlvOnR9fWlmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYoaT1fW2ldKSxuPW58fGZ1bmN0aW9uKCl7fSx0PHYpcj1bZygwLDApLGcoMSwxKV07ZWxzZXtpZihzPXYvdCxyPVtnKDAsMCldLDA9PT1pWzBdJiYwPT09aVsxXSYmMT09PWlbMl0mJjE9PT1pWzNdKWZvcihoPXM7aDw9MTtoKz1zKXIucHVzaChnKGgsaCkpO2Vsc2UgZm9yKHA9dT0oaD1zKS8xMDtwPD0xO3ArPXUpZD1wLG09eT1mPXZvaWQgMCxmPShtPXAqcCkqcCxtKj0zKih5PTEtcCksaDw9KGM9e3g6KGQ9MyooeSp5KSpwKSppWzBdK20qaVsyXStmLHk6ZCppWzFdK20qaVszXStmfSkueCYmKHIucHVzaChnKGMueCxjLnkpKSxoKz1zKTtyLnB1c2goZygxLDEpKX1yZXR1cm4gRS5wdXNoKG89e2FuaW1JZDpTLGZyYW1lQ2FsbGJhY2s6ZSxkdXJhdGlvbjp0LGNvdW50OmEsZnJhbWVzOnIscmV2ZXJzZTohIW99KSwhMSE9PWwmJmJlKG8sbCksU30scmVtb3ZlOmZ1bmN0aW9uKG4pe3ZhciBhO0Uuc29tZShmdW5jdGlvbihlLHQpe3JldHVybiBlLmFuaW1JZD09PW4mJihhPXQsIShlLmZyYW1lc1N0YXJ0PW51bGwpKX0pJiZFLnNwbGljZShhLDEpfSxzdGFydDpmdW5jdGlvbih0LG4sYSl7RS5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFuaW1JZD09PXQmJihlLnJldmVyc2U9ISFuLGJlKGUsYSksITApfSl9LHN0b3A6ZnVuY3Rpb24odCxuKXt2YXIgYTtyZXR1cm4gRS5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFuaW1JZD09PXQmJihuP251bGwhPWUubGFzdEZyYW1lJiYoYT1lLmZyYW1lc1tlLmxhc3RGcmFtZV0udGltZVJhdGlvKTooYT0oRGF0ZS5ub3coKS1lLmZyYW1lc1N0YXJ0KS9lLmR1cmF0aW9uLChhPWUucmV2ZXJzZT8xLWE6YSk8MD9hPTA6MTxhJiYoYT0xKSksIShlLmZyYW1lc1N0YXJ0PW51bGwpKX0pLGF9LHZhbGlkVGltaW5nOmZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P19bdF06QXJyYXkuaXNBcnJheSh0KSYmWzAsMSwyLDNdLmV2ZXJ5KGZ1bmN0aW9uKGUpe3JldHVybiBpKHRbZV0pJiYwPD10W2VdJiZ0W2VdPD0xfSk/W3RbMF0sdFsxXSx0WzJdLHRbM11dOm51bGx9fSksY2U9ZnVuY3Rpb24oZSl7ZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGEmJmUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnNldFBhdGhEYXRhfHxmdW5jdGlvbigpe2Z1bmN0aW9uIGkoZSl7dGhpcy5fc3RyaW5nPWUsdGhpcy5fY3VycmVudEluZGV4PTAsdGhpcy5fZW5kSW5kZXg9dGhpcy5fc3RyaW5nLmxlbmd0aCx0aGlzLl9wcmV2Q29tbWFuZD1udWxsLHRoaXMuX3NraXBPcHRpb25hbFNwYWNlcygpfXZhciBhPXtaOlwiWlwiLE06XCJNXCIsTDpcIkxcIixDOlwiQ1wiLFE6XCJRXCIsQTpcIkFcIixIOlwiSFwiLFY6XCJWXCIsUzpcIlNcIixUOlwiVFwiLHo6XCJaXCIsbTpcIm1cIixsOlwibFwiLGM6XCJjXCIscTpcInFcIixhOlwiYVwiLGg6XCJoXCIsdjpcInZcIixzOlwic1wiLHQ6XCJ0XCJ9LG89LTEhPT1lLm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpO2kucHJvdG90eXBlPXtwYXJzZVNlZ21lbnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSx0PWFbZV18fG51bGw7aWYobnVsbD09PXQpe2lmKG51bGw9PT10aGlzLl9wcmV2Q29tbWFuZClyZXR1cm4gbnVsbDtpZihudWxsPT09KHQ9KFwiK1wiPT09ZXx8XCItXCI9PT1lfHxcIi5cIj09PWV8fFwiMFwiPD1lJiZlPD1cIjlcIikmJlwiWlwiIT09dGhpcy5fcHJldkNvbW1hbmQ/XCJNXCI9PT10aGlzLl9wcmV2Q29tbWFuZD9cIkxcIjpcIm1cIj09PXRoaXMuX3ByZXZDb21tYW5kP1wibFwiOnRoaXMuX3ByZXZDb21tYW5kOm51bGwpKXJldHVybiBudWxsfWVsc2UgdGhpcy5fY3VycmVudEluZGV4Kz0xO3ZhciBuPW51bGwsZT0odGhpcy5fcHJldkNvbW1hbmQ9dCkudG9VcHBlckNhc2UoKTtyZXR1cm5cIkhcIj09PWV8fFwiVlwiPT09ZT9uPVt0aGlzLl9wYXJzZU51bWJlcigpXTpcIk1cIj09PWV8fFwiTFwiPT09ZXx8XCJUXCI9PT1lP249W3RoaXMuX3BhcnNlTnVtYmVyKCksdGhpcy5fcGFyc2VOdW1iZXIoKV06XCJTXCI9PT1lfHxcIlFcIj09PWU/bj1bdGhpcy5fcGFyc2VOdW1iZXIoKSx0aGlzLl9wYXJzZU51bWJlcigpLHRoaXMuX3BhcnNlTnVtYmVyKCksdGhpcy5fcGFyc2VOdW1iZXIoKV06XCJDXCI9PT1lP249W3RoaXMuX3BhcnNlTnVtYmVyKCksdGhpcy5fcGFyc2VOdW1iZXIoKSx0aGlzLl9wYXJzZU51bWJlcigpLHRoaXMuX3BhcnNlTnVtYmVyKCksdGhpcy5fcGFyc2VOdW1iZXIoKSx0aGlzLl9wYXJzZU51bWJlcigpXTpcIkFcIj09PWU/bj1bdGhpcy5fcGFyc2VOdW1iZXIoKSx0aGlzLl9wYXJzZU51bWJlcigpLHRoaXMuX3BhcnNlTnVtYmVyKCksdGhpcy5fcGFyc2VBcmNGbGFnKCksdGhpcy5fcGFyc2VBcmNGbGFnKCksdGhpcy5fcGFyc2VOdW1iZXIoKSx0aGlzLl9wYXJzZU51bWJlcigpXTpcIlpcIj09PWUmJih0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSxuPVtdKSxudWxsPT09bnx8MDw9bi5pbmRleE9mKG51bGwpP251bGw6e3R5cGU6dCx2YWx1ZXM6bn19LGhhc01vcmVEYXRhOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDx0aGlzLl9lbmRJbmRleH0scGVla1NlZ21lbnRUeXBlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF07cmV0dXJuIGFbZV18fG51bGx9LGluaXRpYWxDb21tYW5kSXNNb3ZlVG86ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNNb3JlRGF0YSgpKXJldHVybiEwO3ZhciBlPXRoaXMucGVla1NlZ21lbnRUeXBlKCk7cmV0dXJuXCJNXCI9PT1lfHxcIm1cIj09PWV9LF9pc0N1cnJlbnRTcGFjZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdO3JldHVybiBlPD1cIiBcIiYmKFwiIFwiPT09ZXx8XCJcXG5cIj09PWV8fFwiXFx0XCI9PT1lfHxcIlxcclwiPT09ZXx8XCJcXGZcIj09PWUpfSxfc2tpcE9wdGlvbmFsU3BhY2VzOmZ1bmN0aW9uKCl7Zm9yKDt0aGlzLl9jdXJyZW50SW5kZXg8dGhpcy5fZW5kSW5kZXgmJnRoaXMuX2lzQ3VycmVudFNwYWNlKCk7KXRoaXMuX2N1cnJlbnRJbmRleCs9MTtyZXR1cm4gdGhpcy5fY3VycmVudEluZGV4PHRoaXMuX2VuZEluZGV4fSxfc2tpcE9wdGlvbmFsU3BhY2VzT3JEZWxpbWl0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuX2N1cnJlbnRJbmRleDx0aGlzLl9lbmRJbmRleCYmIXRoaXMuX2lzQ3VycmVudFNwYWNlKCkmJlwiLFwiIT09dGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pJiYodGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzKCkmJnRoaXMuX2N1cnJlbnRJbmRleDx0aGlzLl9lbmRJbmRleCYmXCIsXCI9PT10aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSYmKHRoaXMuX2N1cnJlbnRJbmRleCs9MSx0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSksdGhpcy5fY3VycmVudEluZGV4PHRoaXMuX2VuZEluZGV4KX0sX3BhcnNlTnVtYmVyOmZ1bmN0aW9uKCl7dmFyIGU9MCx0PTAsbj0xLGE9MCxpPTEsbz0xLGw9dGhpcy5fY3VycmVudEluZGV4O2lmKHRoaXMuX3NraXBPcHRpb25hbFNwYWNlcygpLHRoaXMuX2N1cnJlbnRJbmRleDx0aGlzLl9lbmRJbmRleCYmXCIrXCI9PT10aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XT90aGlzLl9jdXJyZW50SW5kZXgrPTE6dGhpcy5fY3VycmVudEluZGV4PHRoaXMuX2VuZEluZGV4JiZcIi1cIj09PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdJiYodGhpcy5fY3VycmVudEluZGV4Kz0xLGk9LTEpLHRoaXMuX2N1cnJlbnRJbmRleD09PXRoaXMuX2VuZEluZGV4fHwodGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF08XCIwXCJ8fFwiOVwiPHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKSYmXCIuXCIhPT10aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSlyZXR1cm4gbnVsbDtmb3IodmFyIHI9dGhpcy5fY3VycmVudEluZGV4O3RoaXMuX2N1cnJlbnRJbmRleDx0aGlzLl9lbmRJbmRleCYmXCIwXCI8PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdJiZ0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XTw9XCI5XCI7KXRoaXMuX2N1cnJlbnRJbmRleCs9MTtpZih0aGlzLl9jdXJyZW50SW5kZXghPT1yKWZvcih2YXIgcz10aGlzLl9jdXJyZW50SW5kZXgtMSx1PTE7cjw9czspdCs9dSoodGhpcy5fc3RyaW5nW3NdLVwiMFwiKSwtLXMsdSo9MTA7aWYodGhpcy5fY3VycmVudEluZGV4PHRoaXMuX2VuZEluZGV4JiZcIi5cIj09PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKXtpZih0aGlzLl9jdXJyZW50SW5kZXgrPTEsdGhpcy5fY3VycmVudEluZGV4Pj10aGlzLl9lbmRJbmRleHx8dGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF08XCIwXCJ8fFwiOVwiPHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKXJldHVybiBudWxsO2Zvcig7dGhpcy5fY3VycmVudEluZGV4PHRoaXMuX2VuZEluZGV4JiZcIjBcIjw9dGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0mJnRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdPD1cIjlcIjspbio9MTAsYSs9KHRoaXMuX3N0cmluZy5jaGFyQXQodGhpcy5fY3VycmVudEluZGV4KS1cIjBcIikvbix0aGlzLl9jdXJyZW50SW5kZXgrPTF9aWYodGhpcy5fY3VycmVudEluZGV4IT09bCYmdGhpcy5fY3VycmVudEluZGV4KzE8dGhpcy5fZW5kSW5kZXgmJihcImVcIj09PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdfHxcIkVcIj09PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKSYmXCJ4XCIhPT10aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4KzFdJiZcIm1cIiE9PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXgrMV0pe2lmKHRoaXMuX2N1cnJlbnRJbmRleCs9MSxcIitcIj09PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdP3RoaXMuX2N1cnJlbnRJbmRleCs9MTpcIi1cIj09PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdJiYodGhpcy5fY3VycmVudEluZGV4Kz0xLG89LTEpLHRoaXMuX2N1cnJlbnRJbmRleD49dGhpcy5fZW5kSW5kZXh8fHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdPFwiMFwifHxcIjlcIjx0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSlyZXR1cm4gbnVsbDtmb3IoO3RoaXMuX2N1cnJlbnRJbmRleDx0aGlzLl9lbmRJbmRleCYmXCIwXCI8PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdJiZ0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XTw9XCI5XCI7KWUqPTEwLGUrPXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdLVwiMFwiLHRoaXMuX2N1cnJlbnRJbmRleCs9MX12YXIgaD10K2E7cmV0dXJuIGgqPWksZSYmKGgqPU1hdGgucG93KDEwLG8qZSkpLGw9PT10aGlzLl9jdXJyZW50SW5kZXg/bnVsbDoodGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzT3JEZWxpbWl0ZXIoKSxoKX0sX3BhcnNlQXJjRmxhZzpmdW5jdGlvbigpe2lmKHRoaXMuX2N1cnJlbnRJbmRleD49dGhpcy5fZW5kSW5kZXgpcmV0dXJuIG51bGw7dmFyIGU9bnVsbCx0PXRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdO2lmKHRoaXMuX2N1cnJlbnRJbmRleCs9MSxcIjBcIj09PXQpZT0wO2Vsc2V7aWYoXCIxXCIhPT10KXJldHVybiBudWxsO2U9MX1yZXR1cm4gdGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzT3JEZWxpbWl0ZXIoKSxlfX07ZnVuY3Rpb24gbihlKXtpZighZXx8MD09PWUubGVuZ3RoKXJldHVybltdO3ZhciB0PW5ldyBpKGUpLG49W107aWYodC5pbml0aWFsQ29tbWFuZElzTW92ZVRvKCkpZm9yKDt0Lmhhc01vcmVEYXRhKCk7KXt2YXIgYT10LnBhcnNlU2VnbWVudCgpO2lmKG51bGw9PT1hKWJyZWFrO24ucHVzaChhKX1yZXR1cm4gbn1mdW5jdGlvbiBsKGUpe3JldHVybiBlLm1hcChmdW5jdGlvbihlKXtyZXR1cm57dHlwZTplLnR5cGUsdmFsdWVzOkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUudmFsdWVzKX19KX1mdW5jdGlvbiByKGUpe3ZhciB1PVtdLGg9bnVsbCxwPW51bGwsYz1udWxsLGQ9bnVsbCxmPW51bGwseT1udWxsLG09bnVsbDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0LG4sYSxpLG8sbCxyLHM7XCJNXCI9PT1lLnR5cGU/KHI9ZS52YWx1ZXNbMF0scz1lLnZhbHVlc1sxXSx1LnB1c2goe3R5cGU6XCJNXCIsdmFsdWVzOltyLHNdfSksZD15PXIsZj1tPXMpOlwiQ1wiPT09ZS50eXBlPyhvPWUudmFsdWVzWzBdLGw9ZS52YWx1ZXNbMV0sdD1lLnZhbHVlc1syXSxuPWUudmFsdWVzWzNdLHI9ZS52YWx1ZXNbNF0scz1lLnZhbHVlc1s1XSx1LnB1c2goe3R5cGU6XCJDXCIsdmFsdWVzOltvLGwsdCxuLHIsc119KSxwPXQsYz1uLGQ9cixmPXMpOlwiTFwiPT09ZS50eXBlPyhyPWUudmFsdWVzWzBdLHM9ZS52YWx1ZXNbMV0sdS5wdXNoKHt0eXBlOlwiTFwiLHZhbHVlczpbcixzXX0pLGQ9cixmPXMpOlwiSFwiPT09ZS50eXBlPyhyPWUudmFsdWVzWzBdLHUucHVzaCh7dHlwZTpcIkxcIix2YWx1ZXM6W3IsZl19KSxkPXIpOlwiVlwiPT09ZS50eXBlPyhzPWUudmFsdWVzWzBdLHUucHVzaCh7dHlwZTpcIkxcIix2YWx1ZXM6W2Qsc119KSxmPXMpOlwiU1wiPT09ZS50eXBlPyh0PWUudmFsdWVzWzBdLG49ZS52YWx1ZXNbMV0scj1lLnZhbHVlc1syXSxzPWUudmFsdWVzWzNdLGk9XCJDXCI9PT1ofHxcIlNcIj09PWg/KGE9ZCsoZC1wKSxmKyhmLWMpKTooYT1kLGYpLHUucHVzaCh7dHlwZTpcIkNcIix2YWx1ZXM6W2EsaSx0LG4scixzXX0pLHA9dCxjPW4sZD1yLGY9cyk6XCJUXCI9PT1lLnR5cGU/KHI9ZS52YWx1ZXNbMF0scz1lLnZhbHVlc1sxXSxsPVwiUVwiPT09aHx8XCJUXCI9PT1oPyhvPWQrKGQtcCksZisoZi1jKSk6KG89ZCxmKSx1LnB1c2goe3R5cGU6XCJDXCIsdmFsdWVzOlthPWQrMiooby1kKS8zLGk9ZisyKihsLWYpLzMscisyKihvLXIpLzMscysyKihsLXMpLzMscixzXX0pLHA9byxjPWwsZD1yLGY9cyk6XCJRXCI9PT1lLnR5cGU/KG89ZS52YWx1ZXNbMF0sbD1lLnZhbHVlc1sxXSxyPWUudmFsdWVzWzJdLHM9ZS52YWx1ZXNbM10sdS5wdXNoKHt0eXBlOlwiQ1wiLHZhbHVlczpbYT1kKzIqKG8tZCkvMyxpPWYrMioobC1mKS8zLHIrMiooby1yKS8zLHMrMioobC1zKS8zLHIsc119KSxwPW8sYz1sLGQ9cixmPXMpOlwiQVwiPT09ZS50eXBlPyhuPWUudmFsdWVzWzBdLGE9ZS52YWx1ZXNbMV0saT1lLnZhbHVlc1syXSxvPWUudmFsdWVzWzNdLGw9ZS52YWx1ZXNbNF0scj1lLnZhbHVlc1s1XSxzPWUudmFsdWVzWzZdLDA9PT1ufHwwPT09YT8odS5wdXNoKHt0eXBlOlwiQ1wiLHZhbHVlczpbZCxmLHIscyxyLHNdfSksZD1yLGY9cyk6ZD09PXImJmY9PT1zfHxiKGQsZixyLHMsbixhLGksbyxsKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3UucHVzaCh7dHlwZTpcIkNcIix2YWx1ZXM6ZX0pLGQ9cixmPXN9KSk6XCJaXCI9PT1lLnR5cGUmJih1LnB1c2goZSksZD15LGY9bSksaD1lLnR5cGV9KSx1fXZhciBzPWUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSx1PWUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxkPWUuU3ltYm9sP2UuU3ltYm9sKCk6XCJfX2NhY2hlZFBhdGhEYXRhXCIsZj1lLlN5bWJvbD9lLlN5bWJvbCgpOlwiX19jYWNoZWROb3JtYWxpemVkUGF0aERhdGFcIixiPWZ1bmN0aW9uKGUsdCxuLGEsaSxvLGwscixzLHUpe2Z1bmN0aW9uIGgoZSx0LG4pe3JldHVybnt4OmUqTWF0aC5jb3MobiktdCpNYXRoLnNpbihuKSx5OmUqTWF0aC5zaW4obikrdCpNYXRoLmNvcyhuKX19dmFyIHA9TWF0aC5QSSpsLzE4MCxjPVtdO3U/KF89dVswXSx2PXVbMV0sUz11WzJdLGc9dVszXSk6KGU9KG09aChlLHQsLXApKS54LHQ9bS55LDE8KG09KHk9KGUtKG49KGY9aChuLGEsLXApKS54KSkvMikqeS8oaSppKSsoZD0odC0oYT1mLnkpKS8yKSpkLyhvKm8pKSYmKGkqPW09TWF0aC5zcXJ0KG0pLG8qPW0pLGY9aSppLG09bypvLFM9KGY9KHI9PT1zPy0xOjEpKk1hdGguc3FydChNYXRoLmFicygoZiptLWYqZCpkLW0qeSp5KS8oZipkKmQrbSp5KnkpKSkpKmkqZC9vKyhlK24pLzIsZz1mKi1vKnkvaSsodCthKS8yLF89TWF0aC5hc2luKHBhcnNlRmxvYXQoKCh0LWcpL28pLnRvRml4ZWQoOSkpKSx2PU1hdGguYXNpbihwYXJzZUZsb2F0KCgoYS1nKS9vKS50b0ZpeGVkKDkpKSksZTxTJiYoXz1NYXRoLlBJLV8pLG48UyYmKHY9TWF0aC5QSS12KSxfPDAmJihfPTIqTWF0aC5QSStfKSx2PDAmJih2PTIqTWF0aC5QSSt2KSxzJiZ2PF8mJihfLT0yKk1hdGguUEkpLCFzJiZfPHYmJih2LT0yKk1hdGguUEkpKTt2YXIgZCxmLHksbT12LV87TWF0aC5hYnMobSk+MTIwKk1hdGguUEkvMTgwJiYoZD12LGY9bix5PWEsdj1zJiZfPHY/XysxMjAqTWF0aC5QSS8xODAqMTpfKzEyMCpNYXRoLlBJLzE4MCotMSxuPVMraSpNYXRoLmNvcyh2KSxhPWcrbypNYXRoLnNpbih2KSxjPWIobixhLGYseSxpLG8sbCwwLHMsW3YsZCxTLGddKSk7dmFyIG09di1fLFM9TWF0aC5jb3MoXyksZz1NYXRoLnNpbihfKSxfPU1hdGguY29zKHYpLHY9TWF0aC5zaW4odiksbT1NYXRoLnRhbihtLzQpLGk9NC8zKmkqbSxvPTQvMypvKm0sbT1bZSx0XSxTPVtlK2kqZyx0LW8qU10sXz1bbitpKnYsYS1vKl9dLGE9W24sYV07aWYoU1swXT0yKm1bMF0tU1swXSxTWzFdPTIqbVsxXS1TWzFdLHUpcmV0dXJuW1MsXyxhXS5jb25jYXQoYyk7dmFyIGM9W1MsXyxhXS5jb25jYXQoYykuam9pbigpLnNwbGl0KFwiLFwiKSxFPVtdLHg9W107cmV0dXJuIGMuZm9yRWFjaChmdW5jdGlvbihlLHQpe3QlMj94LnB1c2goaChjW3QtMV0sY1t0XSxwKS55KTp4LnB1c2goaChjW3RdLGNbdCsxXSxwKS54KSw2PT09eC5sZW5ndGgmJihFLnB1c2goeCkseD1bXSl9KSxFfTtlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGU9ZnVuY3Rpb24oZSx0KXtcImRcIj09PWUmJih0aGlzW2RdPW51bGwsdGhpc1tmXT1udWxsKSxzLmNhbGwodGhpcyxlLHQpfSxlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGU9ZnVuY3Rpb24oZSx0KXtcImRcIj09PWUmJih0aGlzW2RdPW51bGwsdGhpc1tmXT1udWxsKSx1LmNhbGwodGhpcyxlKX0sZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGE9ZnVuY3Rpb24oZSl7aWYoZSYmZS5ub3JtYWxpemUpe2lmKHRoaXNbZl0pcmV0dXJuIGwodGhpc1tmXSk7dGhpc1tkXT90PWwodGhpc1tkXSk6KHQ9bih0aGlzLmdldEF0dHJpYnV0ZShcImRcIil8fFwiXCIpLHRoaXNbZF09bCh0KSk7ZT1yKChzPVtdLGM9cD1oPXU9bnVsbCx0LmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbixhLGksbyxsLHI9ZS50eXBlO1wiTVwiPT09cj8obz1lLnZhbHVlc1swXSxsPWUudmFsdWVzWzFdLHMucHVzaCh7dHlwZTpcIk1cIix2YWx1ZXM6W28sbF19KSx1PXA9byxoPWM9bCk6XCJtXCI9PT1yPyhvPXUrZS52YWx1ZXNbMF0sbD1oK2UudmFsdWVzWzFdLHMucHVzaCh7dHlwZTpcIk1cIix2YWx1ZXM6W28sbF19KSx1PXA9byxoPWM9bCk6XCJMXCI9PT1yPyhvPWUudmFsdWVzWzBdLGw9ZS52YWx1ZXNbMV0scy5wdXNoKHt0eXBlOlwiTFwiLHZhbHVlczpbbyxsXX0pLHU9byxoPWwpOlwibFwiPT09cj8obz11K2UudmFsdWVzWzBdLGw9aCtlLnZhbHVlc1sxXSxzLnB1c2goe3R5cGU6XCJMXCIsdmFsdWVzOltvLGxdfSksdT1vLGg9bCk6XCJDXCI9PT1yPyh0PWUudmFsdWVzWzBdLG49ZS52YWx1ZXNbMV0sYT1lLnZhbHVlc1syXSxpPWUudmFsdWVzWzNdLG89ZS52YWx1ZXNbNF0sbD1lLnZhbHVlc1s1XSxzLnB1c2goe3R5cGU6XCJDXCIsdmFsdWVzOlt0LG4sYSxpLG8sbF19KSx1PW8saD1sKTpcImNcIj09PXI/KHQ9dStlLnZhbHVlc1swXSxuPWgrZS52YWx1ZXNbMV0sYT11K2UudmFsdWVzWzJdLGk9aCtlLnZhbHVlc1szXSxvPXUrZS52YWx1ZXNbNF0sbD1oK2UudmFsdWVzWzVdLHMucHVzaCh7dHlwZTpcIkNcIix2YWx1ZXM6W3QsbixhLGksbyxsXX0pLHU9byxoPWwpOlwiUVwiPT09cj8odD1lLnZhbHVlc1swXSxuPWUudmFsdWVzWzFdLG89ZS52YWx1ZXNbMl0sbD1lLnZhbHVlc1szXSxzLnB1c2goe3R5cGU6XCJRXCIsdmFsdWVzOlt0LG4sbyxsXX0pLHU9byxoPWwpOlwicVwiPT09cj8odD11K2UudmFsdWVzWzBdLG49aCtlLnZhbHVlc1sxXSxvPXUrZS52YWx1ZXNbMl0sbD1oK2UudmFsdWVzWzNdLHMucHVzaCh7dHlwZTpcIlFcIix2YWx1ZXM6W3QsbixvLGxdfSksdT1vLGg9bCk6XCJBXCI9PT1yPyhvPWUudmFsdWVzWzVdLGw9ZS52YWx1ZXNbNl0scy5wdXNoKHt0eXBlOlwiQVwiLHZhbHVlczpbZS52YWx1ZXNbMF0sZS52YWx1ZXNbMV0sZS52YWx1ZXNbMl0sZS52YWx1ZXNbM10sZS52YWx1ZXNbNF0sbyxsXX0pLHU9byxoPWwpOlwiYVwiPT09cj8obz11K2UudmFsdWVzWzVdLGw9aCtlLnZhbHVlc1s2XSxzLnB1c2goe3R5cGU6XCJBXCIsdmFsdWVzOltlLnZhbHVlc1swXSxlLnZhbHVlc1sxXSxlLnZhbHVlc1syXSxlLnZhbHVlc1szXSxlLnZhbHVlc1s0XSxvLGxdfSksdT1vLGg9bCk6XCJIXCI9PT1yPyhvPWUudmFsdWVzWzBdLHMucHVzaCh7dHlwZTpcIkhcIix2YWx1ZXM6W29dfSksdT1vKTpcImhcIj09PXI/KG89dStlLnZhbHVlc1swXSxzLnB1c2goe3R5cGU6XCJIXCIsdmFsdWVzOltvXX0pLHU9byk6XCJWXCI9PT1yPyhsPWUudmFsdWVzWzBdLHMucHVzaCh7dHlwZTpcIlZcIix2YWx1ZXM6W2xdfSksaD1sKTpcInZcIj09PXI/KGw9aCtlLnZhbHVlc1swXSxzLnB1c2goe3R5cGU6XCJWXCIsdmFsdWVzOltsXX0pLGg9bCk6XCJTXCI9PT1yPyhhPWUudmFsdWVzWzBdLGk9ZS52YWx1ZXNbMV0sbz1lLnZhbHVlc1syXSxsPWUudmFsdWVzWzNdLHMucHVzaCh7dHlwZTpcIlNcIix2YWx1ZXM6W2EsaSxvLGxdfSksdT1vLGg9bCk6XCJzXCI9PT1yPyhhPXUrZS52YWx1ZXNbMF0saT1oK2UudmFsdWVzWzFdLG89dStlLnZhbHVlc1syXSxsPWgrZS52YWx1ZXNbM10scy5wdXNoKHt0eXBlOlwiU1wiLHZhbHVlczpbYSxpLG8sbF19KSx1PW8saD1sKTpcIlRcIj09PXI/KG89ZS52YWx1ZXNbMF0sbD1lLnZhbHVlc1sxXSxzLnB1c2goe3R5cGU6XCJUXCIsdmFsdWVzOltvLGxdfSksdT1vLGg9bCk6XCJ0XCI9PT1yPyhvPXUrZS52YWx1ZXNbMF0sbD1oK2UudmFsdWVzWzFdLHMucHVzaCh7dHlwZTpcIlRcIix2YWx1ZXM6W28sbF19KSx1PW8saD1sKTpcIlpcIiE9PXImJlwielwiIT09cnx8KHMucHVzaCh7dHlwZTpcIlpcIix2YWx1ZXM6W119KSx1PXAsaD1jKX0pLHMpKTtyZXR1cm4gdGhpc1tmXT1sKGUpLGV9aWYodGhpc1tkXSlyZXR1cm4gbCh0aGlzW2RdKTt2YXIgcyx1LGgscCxjLHQ9bih0aGlzLmdldEF0dHJpYnV0ZShcImRcIil8fFwiXCIpO3JldHVybiB0aGlzW2RdPWwodCksdH0sZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUuc2V0UGF0aERhdGE9ZnVuY3Rpb24oZSl7aWYoMD09PWUubGVuZ3RoKW8/dGhpcy5zZXRBdHRyaWJ1dGUoXCJkXCIsXCJcIik6dGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJkXCIpO2Vsc2V7Zm9yKHZhciB0PVwiXCIsbj0wLGE9ZS5sZW5ndGg7bjxhO24rPTEpe3ZhciBpPWVbbl07MDxuJiYodCs9XCIgXCIpLHQrPWkudHlwZSxpLnZhbHVlcyYmMDxpLnZhbHVlcy5sZW5ndGgmJih0Kz1cIiBcIitpLnZhbHVlcy5qb2luKFwiIFwiKSl9dGhpcy5zZXRBdHRyaWJ1dGUoXCJkXCIsdCl9fSxlLlNWR1JlY3RFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnguYmFzZVZhbC52YWx1ZSxuPXRoaXMueS5iYXNlVmFsLnZhbHVlLGE9dGhpcy53aWR0aC5iYXNlVmFsLnZhbHVlLGk9dGhpcy5oZWlnaHQuYmFzZVZhbC52YWx1ZSxvPSh0aGlzLmhhc0F0dHJpYnV0ZShcInJ4XCIpP3RoaXMucng6dGhpcy5yeSkuYmFzZVZhbC52YWx1ZSxsPSh0aGlzLmhhc0F0dHJpYnV0ZShcInJ5XCIpP3RoaXMucnk6dGhpcy5yeCkuYmFzZVZhbC52YWx1ZSxuPShuPVt7dHlwZTpcIk1cIix2YWx1ZXM6W3QrKG89YS8yPG8/YS8yOm8pLG5dfSx7dHlwZTpcIkhcIix2YWx1ZXM6W3QrYS1vXX0se3R5cGU6XCJBXCIsdmFsdWVzOltvLGw9aS8yPGw/aS8yOmwsMCwwLDEsdCthLG4rbF19LHt0eXBlOlwiVlwiLHZhbHVlczpbbitpLWxdfSx7dHlwZTpcIkFcIix2YWx1ZXM6W28sbCwwLDAsMSx0K2EtbyxuK2ldfSx7dHlwZTpcIkhcIix2YWx1ZXM6W3Qrb119LHt0eXBlOlwiQVwiLHZhbHVlczpbbyxsLDAsMCwxLHQsbitpLWxdfSx7dHlwZTpcIlZcIix2YWx1ZXM6W24rbF19LHt0eXBlOlwiQVwiLHZhbHVlczpbbyxsLDAsMCwxLHQrbyxuXX0se3R5cGU6XCJaXCIsdmFsdWVzOltdfV0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm5cIkFcIiE9PWUudHlwZXx8MCE9PWUudmFsdWVzWzBdJiYwIT09ZS52YWx1ZXNbMV19KTtyZXR1cm4gbj1lJiYhMD09PWUubm9ybWFsaXplP3Iobik6bn0sZS5TVkdDaXJjbGVFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmN4LmJhc2VWYWwudmFsdWUsbj10aGlzLmN5LmJhc2VWYWwudmFsdWUsYT10aGlzLnIuYmFzZVZhbC52YWx1ZSxuPVt7dHlwZTpcIk1cIix2YWx1ZXM6W3QrYSxuXX0se3R5cGU6XCJBXCIsdmFsdWVzOlthLGEsMCwwLDEsdCxuK2FdfSx7dHlwZTpcIkFcIix2YWx1ZXM6W2EsYSwwLDAsMSx0LWEsbl19LHt0eXBlOlwiQVwiLHZhbHVlczpbYSxhLDAsMCwxLHQsbi1hXX0se3R5cGU6XCJBXCIsdmFsdWVzOlthLGEsMCwwLDEsdCthLG5dfSx7dHlwZTpcIlpcIix2YWx1ZXM6W119XTtyZXR1cm4gbj1lJiYhMD09PWUubm9ybWFsaXplP3Iobik6bn0sZS5TVkdFbGxpcHNlRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGE9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jeC5iYXNlVmFsLnZhbHVlLG49dGhpcy5jeS5iYXNlVmFsLnZhbHVlLGE9dGhpcy5yeC5iYXNlVmFsLnZhbHVlLGk9dGhpcy5yeS5iYXNlVmFsLnZhbHVlLG49W3t0eXBlOlwiTVwiLHZhbHVlczpbdCthLG5dfSx7dHlwZTpcIkFcIix2YWx1ZXM6W2EsaSwwLDAsMSx0LG4raV19LHt0eXBlOlwiQVwiLHZhbHVlczpbYSxpLDAsMCwxLHQtYSxuXX0se3R5cGU6XCJBXCIsdmFsdWVzOlthLGksMCwwLDEsdCxuLWldfSx7dHlwZTpcIkFcIix2YWx1ZXM6W2EsaSwwLDAsMSx0K2Esbl19LHt0eXBlOlwiWlwiLHZhbHVlczpbXX1dO3JldHVybiBuPWUmJiEwPT09ZS5ub3JtYWxpemU/cihuKTpufSxlLlNWR0xpbmVFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YT1mdW5jdGlvbigpe3JldHVyblt7dHlwZTpcIk1cIix2YWx1ZXM6W3RoaXMueDEuYmFzZVZhbC52YWx1ZSx0aGlzLnkxLmJhc2VWYWwudmFsdWVdfSx7dHlwZTpcIkxcIix2YWx1ZXM6W3RoaXMueDIuYmFzZVZhbC52YWx1ZSx0aGlzLnkyLmJhc2VWYWwudmFsdWVdfV19LGUuU1ZHUG9seWxpbmVFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YT1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDx0aGlzLnBvaW50cy5udW1iZXJPZkl0ZW1zO3QrPTEpe3ZhciBuPXRoaXMucG9pbnRzLmdldEl0ZW0odCk7ZS5wdXNoKHt0eXBlOjA9PT10P1wiTVwiOlwiTFwiLHZhbHVlczpbbi54LG4ueV19KX1yZXR1cm4gZX0sZS5TVkdQb2x5Z29uRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGE9ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8dGhpcy5wb2ludHMubnVtYmVyT2ZJdGVtczt0Kz0xKXt2YXIgbj10aGlzLnBvaW50cy5nZXRJdGVtKHQpO2UucHVzaCh7dHlwZTowPT09dD9cIk1cIjpcIkxcIix2YWx1ZXM6W24ueCxuLnldfSl9cmV0dXJuIGUucHVzaCh7dHlwZTpcIlpcIix2YWx1ZXM6W119KSxlfX0oKX0sUz0oYT17fSxFZS5tPW49W2Z1bmN0aW9uKGUsdCxuKXtuLnIodCk7dmFyIGE9NTAwLGk9W10sbz13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe3JldHVybiBzZXRUaW1lb3V0KGUsMWUzLzYwKX0sbD13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7cmV0dXJuIGNsZWFyVGltZW91dChlKX0scj1EYXRlLm5vdygpLHM9dm9pZCAwO2Z1bmN0aW9uIHUoKXt2YXIgbj12b2lkIDAsZT12b2lkIDA7cyYmKGwuY2FsbCh3aW5kb3cscykscz1udWxsKSxpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7KHQ9ZS5ldmVudCkmJihlLmV2ZW50PW51bGwsZS5saXN0ZW5lcih0KSxuPSEwKX0pLG4/KHI9RGF0ZS5ub3coKSxlPSEwKTpEYXRlLm5vdygpLXI8YSYmKGU9ITApLGUmJihzPW8uY2FsbCh3aW5kb3csdSkpfWZ1bmN0aW9uIGgobil7dmFyIGE9LTE7cmV0dXJuIGkuc29tZShmdW5jdGlvbihlLHQpe3JldHVybiBlLmxpc3RlbmVyPT09biYmKGE9dCwhMCl9KSxhfXQuZGVmYXVsdD17YWRkOmZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm4tMT09PWgoZSk/KGkucHVzaCh0PXtsaXN0ZW5lcjplfSksZnVuY3Rpb24oZSl7dC5ldmVudD1lLHN8fHUoKX0pOm51bGx9LHJlbW92ZTpmdW5jdGlvbihlKXstMTwoZT1oKGUpKSYmKGkuc3BsaWNlKGUsMSksIWkubGVuZ3RoJiZzJiYobC5jYWxsKHdpbmRvdyxzKSxzPW51bGwpKX19fV0sRWUuYz1hLEVlLmQ9ZnVuY3Rpb24oZSx0LG4pe0VlLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxFZS5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LEVlLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PUVlKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoRWUucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIGEgaW4gdClFZS5kKG4sYSxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLGEpKTtyZXR1cm4gbn0sRWUubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gRWUuZCh0LFwiYVwiLHQpLHR9LEVlLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LEVlLnA9XCJcIixFZShFZS5zPTApLmRlZmF1bHQpLGRlPXtsaW5lX2FsdENvbG9yOntpbmlWYWx1ZTohMX0sbGluZV9jb2xvcjp7fSxsaW5lX2NvbG9yVHJhOntpbmlWYWx1ZTohMX0sbGluZV9zdHJva2VXaWR0aDp7fSxwbHVnX2VuYWJsZWQ6e2luaVZhbHVlOiExfSxwbHVnX2VuYWJsZWRTRTp7aGFzU0U6ITAsaW5pVmFsdWU6ITF9LHBsdWdfcGx1Z1NFOntoYXNTRTohMCxpbmlWYWx1ZTpZfSxwbHVnX2NvbG9yU0U6e2hhc1NFOiEwfSxwbHVnX2NvbG9yVHJhU0U6e2hhc1NFOiEwLGluaVZhbHVlOiExfSxwbHVnX21hcmtlcldpZHRoU0U6e2hhc1NFOiEwfSxwbHVnX21hcmtlckhlaWdodFNFOntoYXNTRTohMH0sbGluZU91dGxpbmVfZW5hYmxlZDp7aW5pVmFsdWU6ITF9LGxpbmVPdXRsaW5lX2NvbG9yOnt9LGxpbmVPdXRsaW5lX2NvbG9yVHJhOntpbmlWYWx1ZTohMX0sbGluZU91dGxpbmVfc3Ryb2tlV2lkdGg6e30sbGluZU91dGxpbmVfaW5TdHJva2VXaWR0aDp7fSxwbHVnT3V0bGluZV9lbmFibGVkU0U6e2hhc1NFOiEwLGluaVZhbHVlOiExfSxwbHVnT3V0bGluZV9wbHVnU0U6e2hhc1NFOiEwLGluaVZhbHVlOll9LHBsdWdPdXRsaW5lX2NvbG9yU0U6e2hhc1NFOiEwfSxwbHVnT3V0bGluZV9jb2xvclRyYVNFOntoYXNTRTohMCxpbmlWYWx1ZTohMX0scGx1Z091dGxpbmVfc3Ryb2tlV2lkdGhTRTp7aGFzU0U6ITB9LHBsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRTp7aGFzU0U6ITB9LHBvc2l0aW9uX3NvY2tldFhZU0U6e2hhc1NFOiEwLGhhc1Byb3BzOiEwfSxwb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRTp7aGFzU0U6ITB9LHBvc2l0aW9uX3BhdGg6e30scG9zaXRpb25fbGluZVN0cm9rZVdpZHRoOnt9LHBvc2l0aW9uX3NvY2tldEdyYXZpdHlTRTp7aGFzU0U6ITB9LHBhdGhfcGF0aERhdGE6e30scGF0aF9lZGdlOntoYXNQcm9wczohMH0sdmlld0JveF9iQm94OntoYXNQcm9wczohMH0sdmlld0JveF9wbHVnQkNpcmNsZVNFOntoYXNTRTohMH0sbGluZU1hc2tfZW5hYmxlZDp7aW5pVmFsdWU6ITF9LGxpbmVNYXNrX291dGxpbmVNb2RlOntpbmlWYWx1ZTohMX0sbGluZU1hc2tfeDp7fSxsaW5lTWFza195Ont9LGxpbmVPdXRsaW5lTWFza194Ont9LGxpbmVPdXRsaW5lTWFza195Ont9LG1hc2tCR1JlY3RfeDp7fSxtYXNrQkdSZWN0X3k6e30sY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFOntoYXNTRTohMCxpbmlWYWx1ZTohMX0sY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRTp7aGFzU0U6ITB9LGNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0U6e2hhc1NFOiEwfSxjYXBzTWFza01hcmtlcl9lbmFibGVkOntpbmlWYWx1ZTohMX0sY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFOntoYXNTRTohMCxpbmlWYWx1ZTohMX0sY2Fwc01hc2tNYXJrZXJfcGx1Z1NFOntoYXNTRTohMCxpbmlWYWx1ZTpZfSxjYXBzTWFza01hcmtlcl9tYXJrZXJXaWR0aFNFOntoYXNTRTohMH0sY2Fwc01hc2tNYXJrZXJfbWFya2VySGVpZ2h0U0U6e2hhc1NFOiEwfSxjYXBzX2VuYWJsZWQ6e2luaVZhbHVlOiExfSxhdHRhY2hfcGx1Z1NpZGVMZW5TRTp7aGFzU0U6ITB9LGF0dGFjaF9wbHVnQmFja0xlblNFOntoYXNTRTohMH19LGZlPXtzaG93X29uOnt9LHNob3dfZWZmZWN0Ont9LHNob3dfYW5pbU9wdGlvbnM6e30sc2hvd19hbmltSWQ6e30sc2hvd19pbkFuaW06e319LHllPVwiZmFkZVwiLG1lPVtdLFNlPXt9LGdlPTAsX2U9e30sdmU9MDtmdW5jdGlvbiBFZShlKXtpZihhW2VdKXJldHVybiBhW2VdLmV4cG9ydHM7dmFyIHQ9YVtlXT17aTplLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIG5bZV0uY2FsbCh0LmV4cG9ydHMsdCx0LmV4cG9ydHMsRWUpLHQubD0hMCx0LmV4cG9ydHN9ZnVuY3Rpb24geGUoKXt2YXIgaT1EYXRlLm5vdygpLG89ITE7ZSYmKHIuY2FsbCh3aW5kb3csZSksZT1udWxsKSxFLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbixhO2lmKGUuZnJhbWVzU3RhcnQpe2lmKCh0PWktZS5mcmFtZXNTdGFydCk+PWUuZHVyYXRpb24mJmUuY291bnQmJmUubG9vcHNMZWZ0PD0xKXJldHVybiBhPWUuZnJhbWVzW2UubGFzdEZyYW1lPWUucmV2ZXJzZT8wOmUuZnJhbWVzLmxlbmd0aC0xXSxlLmZyYW1lQ2FsbGJhY2soYS52YWx1ZSwhMCxhLnRpbWVSYXRpbyxhLm91dHB1dFJhdGlvKSx2b2lkKGUuZnJhbWVzU3RhcnQ9bnVsbCk7aWYodD5lLmR1cmF0aW9uKXtpZihuPU1hdGguZmxvb3IodC9lLmR1cmF0aW9uKSxlLmNvdW50KXtpZihuPj1lLmxvb3BzTGVmdClyZXR1cm4gYT1lLmZyYW1lc1tlLmxhc3RGcmFtZT1lLnJldmVyc2U/MDplLmZyYW1lcy5sZW5ndGgtMV0sZS5mcmFtZUNhbGxiYWNrKGEudmFsdWUsITAsYS50aW1lUmF0aW8sYS5vdXRwdXRSYXRpbyksdm9pZChlLmZyYW1lc1N0YXJ0PW51bGwpO2UubG9vcHNMZWZ0LT1ufWUuZnJhbWVzU3RhcnQrPWUuZHVyYXRpb24qbix0PWktZS5mcmFtZXNTdGFydH1lLnJldmVyc2UmJih0PWUuZHVyYXRpb24tdCksYT1lLmZyYW1lc1tlLmxhc3RGcmFtZT1NYXRoLnJvdW5kKHQvdildLCExIT09ZS5mcmFtZUNhbGxiYWNrKGEudmFsdWUsITEsYS50aW1lUmF0aW8sYS5vdXRwdXRSYXRpbyk/bz0hMDplLmZyYW1lc1N0YXJ0PW51bGx9fSksbyYmKGU9bC5jYWxsKHdpbmRvdyx4ZSkpfWZ1bmN0aW9uIGJlKGUsdCl7ZS5mcmFtZXNTdGFydD1EYXRlLm5vdygpLG51bGwhPXQmJihlLmZyYW1lc1N0YXJ0LT1lLmR1cmF0aW9uKihlLnJldmVyc2U/MS10OnQpKSxlLmxvb3BzTGVmdD1lLmNvdW50LGUubGFzdEZyYW1lPW51bGwseGUoKX1mdW5jdGlvbiBrZSh0LG4pe3ZhciBlLGE7cmV0dXJuIHR5cGVvZiB0IT10eXBlb2Ygbnx8KGU9aGUodCk/XCJvYmpcIjpBcnJheS5pc0FycmF5KHQpP1wiYXJyYXlcIjpcIlwiKSE9KGhlKG4pP1wib2JqXCI6QXJyYXkuaXNBcnJheShuKT9cImFycmF5XCI6XCJcIil8fChcIm9ialwiPT09ZT9rZShhPU9iamVjdC5rZXlzKHQpLnNvcnQoKSxPYmplY3Qua2V5cyhuKS5zb3J0KCkpfHxhLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIGtlKHRbZV0sbltlXSl9KTpcImFycmF5XCI9PT1lP3QubGVuZ3RoIT09bi5sZW5ndGh8fHQuc29tZShmdW5jdGlvbihlLHQpe3JldHVybiBrZShlLG5bdF0pfSk6dCE9PW4pfWZ1bmN0aW9uIHdlKG4pe3JldHVybiBuJiYoaGUobik/T2JqZWN0LmtleXMobikucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGVbdF09d2Uoblt0XSksZX0se30pOkFycmF5LmlzQXJyYXkobik/bi5tYXAod2UpOm4pfWZ1bmN0aW9uIE9lKGUpe3ZhciB0LG4sYSxpPTEsbz1lPShlK1wiXCIpLnRyaW0oKTtmdW5jdGlvbiBsKGUpe3ZhciB0PTEsZT1tLmV4ZWMoZSk7cmV0dXJuIGUmJih0PXBhcnNlRmxvYXQoZVsxXSksZVsyXT90PTA8PXQmJnQ8PTEwMD90LzEwMDoxOih0PDB8fDE8dCkmJih0PTEpKSx0fXJldHVybih0PS9eKHJnYmF8aHNsYXxod2J8Z3JheXxkZXZpY2VcXC1jbXlrKVxccypcXCgoW1xcc1xcU10rKVxcKSQvaS5leGVjKGUpKT8obj10WzFdLnRvTG93ZXJDYXNlKCksYT10WzJdLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqLyksXCJyZ2JhXCI9PT1uJiY0PT09YS5sZW5ndGg/KGk9bChhWzNdKSxvPVwicmdiKFwiK2Euc2xpY2UoMCwzKS5qb2luKFwiLCBcIikrXCIpXCIpOlwiaHNsYVwiPT09biYmND09PWEubGVuZ3RoPyhpPWwoYVszXSksbz1cImhzbChcIithLnNsaWNlKDAsMykuam9pbihcIiwgXCIpK1wiKVwiKTpcImh3YlwiPT09biYmND09PWEubGVuZ3RoPyhpPWwoYVszXSksbz1cImh3YihcIithLnNsaWNlKDAsMykuam9pbihcIiwgXCIpK1wiKVwiKTpcImdyYXlcIj09PW4mJjI9PT1hLmxlbmd0aD8oaT1sKGFbMV0pLG89XCJncmF5KFwiK2FbMF0rXCIpXCIpOlwiZGV2aWNlLWNteWtcIj09PW4mJjU8PWEubGVuZ3RoJiYoaT1sKGFbNF0pLG89XCJkZXZpY2UtY215ayhcIithLnNsaWNlKDAsNCkuam9pbihcIiwgXCIpK1wiKVwiKSk6KHQ9L15cXCMoPzooW1xcZGEtZl17Nn0pKFtcXGRhLWZdezJ9KXwoW1xcZGEtZl17M30pKFtcXGRhLWZdKSkkL2kuZXhlYyhlKSk/bz10WzFdPyhpPXBhcnNlSW50KHRbMl0sMTYpLzI1NSxcIiNcIit0WzFdKTooaT1wYXJzZUludCh0WzRdK3RbNF0sMTYpLzI1NSxcIiNcIit0WzNdKTpcInRyYW5zcGFyZW50XCI9PT1lLnRvTG9jYWxlTG93ZXJDYXNlKCkmJihpPTApLFtpLG9dfWZ1bmN0aW9uIE1lKGUpe3JldHVybiEoIWV8fGUubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERXx8XCJmdW5jdGlvblwiIT10eXBlb2YgZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpfWZ1bmN0aW9uIEllKGUsdCl7dmFyIG4sYSxpLG89e307aWYoIShpPWUub3duZXJEb2N1bWVudCkpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgZ2V0IGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXCIpLG51bGw7aWYoZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihpKSZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0RJU0NPTk5FQ1RFRClyZXR1cm4gY29uc29sZS5lcnJvcihcIkEgZGlzY29ubmVjdGVkIGVsZW1lbnQgd2FzIHBhc3NlZC5cIiksbnVsbDtmb3IoYSBpbiBuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpb1thXT1uW2FdO2lmKCF0KXtpZighKGk9aS5kZWZhdWx0VmlldykpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgZ2V0IHdpbmRvdyB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSxudWxsO28ubGVmdCs9aS5wYWdlWE9mZnNldCxvLnJpZ2h0Kz1pLnBhZ2VYT2Zmc2V0LG8udG9wKz1pLnBhZ2VZT2Zmc2V0LG8uYm90dG9tKz1pLnBhZ2VZT2Zmc2V0fXJldHVybiBvfWZ1bmN0aW9uIENlKGUsdCl7dmFyIG4sYT1bXSxpPWU7Zm9yKHQ9dHx8d2luZG93Ozspe2lmKCEobj1pLm93bmVyRG9jdW1lbnQpKXJldHVybiBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGdldCBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSxudWxsO2lmKCEobj1uLmRlZmF1bHRWaWV3KSlyZXR1cm4gY29uc29sZS5lcnJvcihcIkNhbm5vdCBnZXQgd2luZG93IHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXCIpLG51bGw7aWYobj09PXQpYnJlYWs7aWYoIShpPW4uZnJhbWVFbGVtZW50KSlyZXR1cm4gY29uc29sZS5lcnJvcihcImBiYXNlV2luZG93YCB3YXMgbm90IGZvdW5kLlwiKSxudWxsO2EudW5zaGlmdChpKX1yZXR1cm4gYX1mdW5jdGlvbiBMZShlLHQpe3ZhciBhPTAsaT0wO3JldHVybih0PUNlKGUsdD10fHx3aW5kb3cpKT90Lmxlbmd0aD8odC5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIG49SWUoZSwwPHQpO2ErPW4ubGVmdCxpKz1uLnRvcCxlPSh0PWUpLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0LFwiXCIpLG49e2xlZnQ6dC5jbGllbnRMZWZ0K3BhcnNlRmxvYXQoZS5wYWRkaW5nTGVmdCksdG9wOnQuY2xpZW50VG9wK3BhcnNlRmxvYXQoZS5wYWRkaW5nVG9wKX0sYSs9bi5sZWZ0LGkrPW4udG9wfSksKHQ9SWUoZSwhMCkpLmxlZnQrPWEsdC5yaWdodCs9YSx0LnRvcCs9aSx0LmJvdHRvbSs9aSx0KTpJZShlKTpudWxsfWZ1bmN0aW9uIEFlKGUsdCl7dmFyIG49ZS54LXQueCx0PWUueS10Lnk7cmV0dXJuIE1hdGguc3FydChuKm4rdCp0KX1mdW5jdGlvbiBWZShlLHQsbil7dmFyIGE9dC54LWUueCx0PXQueS1lLnk7cmV0dXJue3g6ZS54K2Eqbix5OmUueSt0Km4sYW5nbGU6TWF0aC5hdGFuMih0LGEpLyhNYXRoLlBJLzE4MCl9fWZ1bmN0aW9uIFBlKGUsdCxuKXtlPU1hdGguYXRhbjIoZS55LXQueSx0LngtZS54KTtyZXR1cm57eDp0LngrTWF0aC5jb3MoZSkqbix5OnQueStNYXRoLnNpbihlKSpuKi0xfX1mdW5jdGlvbiBOZShlLHQsbixhLGkpe3ZhciBvPWkqaSxsPW8qaSxyPTEtaSxzPXIqcix1PXMqcixoPXUqZS54KzMqcyppKnQueCszKnIqbypuLngrbCphLngscD11KmUueSszKnMqaSp0LnkrMypyKm8qbi55K2wqYS55LGM9ZS54KzIqaSoodC54LWUueCkrbyoobi54LTIqdC54K2UueCksdT1lLnkrMippKih0LnktZS55KStvKihuLnktMip0LnkrZS55KSxzPXQueCsyKmkqKG4ueC10LngpK28qKGEueC0yKm4ueCt0LngpLGw9dC55KzIqaSoobi55LXQueSkrbyooYS55LTIqbi55K3QueSksbz1yKmUueCtpKnQueCxlPXIqZS55K2kqdC55LHQ9cipuLngraSphLngsaT1yKm4ueStpKmEueSxhPTkwLTE4MCpNYXRoLmF0YW4yKGMtcyx1LWwpL01hdGguUEk7cmV0dXJue3g6aCx5OnAsZnJvbVAyOnt4OmMseTp1fSx0b1AxOnt4OnMseTpsfSxmcm9tUDE6e3g6byx5OmV9LHRvUDI6e3g6dCx5Oml9LGFuZ2xlOmErPTE4MDxhPy0xODA6MTgwfX1mdW5jdGlvbiBUZShuLGEsaSxvLGUpe2Z1bmN0aW9uIGwoZSx0LG4sYSxpKXtyZXR1cm4gZSooZSooLTMqdCs5Km4tOSphKzMqaSkrNip0LTEyKm4rNiphKS0zKnQrMypufXZhciByLHMsdT1bLjI0OTEsLjI0OTEsLjIzMzUsLjIzMzUsLjIwMzIsLjIwMzIsLjE2MDEsLjE2MDEsLjEwNjksLjEwNjksLjA0NzIsLjA0NzJdLGg9MCxwPShlPW51bGw9PWV8fDE8ZT8xOmU8MD8wOmUpLzI7cmV0dXJuWy0uMTI1MiwuMTI1MiwtLjM2NzgsLjM2NzgsLS41ODczLC41ODczLC0uNzY5OSwuNzY5OSwtLjkwNDEsLjkwNDEsLS45ODE2LC45ODE2XS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cj1sKHM9cCplK3Asbi54LGEueCxpLngsby54KSxzPWwocyxuLnksYS55LGkueSxvLnkpLHM9cipyK3MqcyxoKz11W3RdKk1hdGguc3FydChzKX0pLHAqaH1mdW5jdGlvbiBXZShlLHQsbixhLGkpe2Zvcih2YXIgbyxsPS41LHI9MS1sO289VGUoZSx0LG4sYSxyKSwhKE1hdGguYWJzKG8taSk8PS4wMSk7KXIrPShvPGk/MTotMSkqKGwvPTIpO3JldHVybiByfWZ1bmN0aW9uIEJlKGUsdCl7dmFyIG47cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXtlPXQ/ZS5tYXAoZnVuY3Rpb24oZSl7ZT17eDplLngseTplLnl9O3JldHVybiB0KGUpLGV9KTplOyhuPW58fFt7dHlwZTpcIk1cIix2YWx1ZXM6W2VbMF0ueCxlWzBdLnldfV0pLnB1c2goZS5sZW5ndGg/Mj09PWUubGVuZ3RoP3t0eXBlOlwiTFwiLHZhbHVlczpbZVsxXS54LGVbMV0ueV19Ont0eXBlOlwiQ1wiLHZhbHVlczpbZVsxXS54LGVbMV0ueSxlWzJdLngsZVsyXS55LGVbM10ueCxlWzNdLnldfTp7dHlwZTpcIlpcIix2YWx1ZXM6W119KX0pLG59ZnVuY3Rpb24gUmUoZSl7dmFyIHQ9W10sbj0wO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSl7ZT0oMj09PWUubGVuZ3RoP0FlOlRlKS5hcHBseShudWxsLGUpO3QucHVzaChlKSxuKz1lfSkse3NlZ3NMZW46dCxsZW5BbGw6bn19ZnVuY3Rpb24gRmUoZSxhKXtyZXR1cm4gbnVsbD09ZXx8bnVsbD09YXx8ZS5sZW5ndGghPT1hLmxlbmd0aHx8ZS5zb21lKGZ1bmN0aW9uKGUsdCl7dmFyIG49YVt0XTtyZXR1cm4gZS50eXBlIT09bi50eXBlfHxlLnZhbHVlcy5zb21lKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUhPT1uLnZhbHVlc1t0XX0pfSl9ZnVuY3Rpb24gR2UoZSx0LG4pe2UuZXZlbnRzW3RdP2UuZXZlbnRzW3RdLmluZGV4T2Yobik8MCYmZS5ldmVudHNbdF0ucHVzaChuKTplLmV2ZW50c1t0XT1bbl19ZnVuY3Rpb24gRGUoZSx0LG4pe3ZhciBhO2UuZXZlbnRzW3RdJiYtMTwoYT1lLmV2ZW50c1t0XS5pbmRleE9mKG4pKSYmZS5ldmVudHNbdF0uc3BsaWNlKGEsMSl9ZnVuY3Rpb24gemUoZSl7dCYmY2xlYXJUaW1lb3V0KHQpLG1lLnB1c2goZSksdD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bWUuZm9yRWFjaChmdW5jdGlvbihlKXtlKCl9KSxtZT1bXX0sMCl9ZnVuY3Rpb24gamUoZSx0KXtlLnJlZmxvd1RhcmdldHMuaW5kZXhPZih0KTwwJiZlLnJlZmxvd1RhcmdldHMucHVzaCh0KX1mdW5jdGlvbiBIZShlKXtlLnJlZmxvd1RhcmdldHMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbjtuPWUsc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPW4ucGFyZW50Tm9kZSx0PW4ubmV4dFNpYmxpbmc7ZS5pbnNlcnRCZWZvcmUoZS5yZW1vdmVDaGlsZChuKSx0KX0sMCl9KSxlLnJlZmxvd1RhcmdldHM9W119ZnVuY3Rpb24gVWUoZSx0LG4sYSxpLG8sbCl7dmFyIHI7XCJhdXRvLXN0YXJ0LXJldmVyc2VcIj09PW4/KFwiYm9vbGVhblwiIT10eXBlb2YgcyYmKHQuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsXCJhdXRvLXN0YXJ0LXJldmVyc2VcIikscz10Lm9yaWVudFR5cGUuYmFzZVZhbD09PVNWR01hcmtlckVsZW1lbnQuU1ZHX01BUktFUl9PUklFTlRfVU5LTk9XTikscz90LnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLG4pOigocj1pLmNyZWF0ZVNWR1RyYW5zZm9ybSgpKS5zZXRSb3RhdGUoMTgwLDAsMCksby50cmFuc2Zvcm0uYmFzZVZhbC5hcHBlbmRJdGVtKHIpLHQuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsXCJhdXRvXCIpLHI9ITApKToodC5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIixuKSwhMT09PXMmJm8udHJhbnNmb3JtLmJhc2VWYWwuY2xlYXIoKSksdD10LnZpZXdCb3guYmFzZVZhbCxyPyh0Lng9LWEucmlnaHQsdC55PS1hLmJvdHRvbSk6KHQueD1hLmxlZnQsdC55PWEudG9wKSx0LndpZHRoPWEud2lkdGgsdC5oZWlnaHQ9YS5oZWlnaHQsaWUmJmplKGUsbCl9ZnVuY3Rpb24gWmUoZSx0KXtyZXR1cm57cHJvcDplP1wibWFya2VyRW5kXCI6XCJtYXJrZXJTdGFydFwiLG9yaWVudDp0P3Qubm9Sb3RhdGU/XCIwXCI6ZT9cImF1dG9cIjpcImF1dG8tc3RhcnQtcmV2ZXJzZVwiOm51bGx9fWZ1bmN0aW9uIFllKG4sYSl7T2JqZWN0LmtleXMoYSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1hW2VdO25bZV09bnVsbCE9dC5pbmlWYWx1ZT90Lmhhc1NFP1t0LmluaVZhbHVlLHQuaW5pVmFsdWVdOnQuaW5pVmFsdWU6dC5oYXNTRT90Lmhhc1Byb3BzP1t7fSx7fV06W106dC5oYXNQcm9wcz97fTpudWxsfSl9ZnVuY3Rpb24gWGUodCxlLG4sYSxpKXtyZXR1cm4gYSE9PWVbbl0mJihlW25dPWEsaSYmaS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UodCxhLG4pfSksITApfWZ1bmN0aW9uIHFlKGUpe2Z1bmN0aW9uIHQoZSx0KXtyZXR1cm4gZStwYXJzZUZsb2F0KHQpfXZhciBuPWUuZG9jdW1lbnQsYT1lLmdldENvbXB1dGVkU3R5bGUobi5kb2N1bWVudEVsZW1lbnQsXCJcIiksZT1lLmdldENvbXB1dGVkU3R5bGUobi5ib2R5LFwiXCIpLG49e3g6MCx5OjB9O3JldHVyblwic3RhdGljXCIhPT1lLnBvc2l0aW9uPyhuLngtPVthLm1hcmdpbkxlZnQsYS5ib3JkZXJMZWZ0V2lkdGgsYS5wYWRkaW5nTGVmdCxlLm1hcmdpbkxlZnQsZS5ib3JkZXJMZWZ0V2lkdGhdLnJlZHVjZSh0LDApLG4ueS09W2EubWFyZ2luVG9wLGEuYm9yZGVyVG9wV2lkdGgsYS5wYWRkaW5nVG9wLGUubWFyZ2luVG9wLGUuYm9yZGVyVG9wV2lkdGhdLnJlZHVjZSh0LDApKTpcInN0YXRpY1wiIT09YS5wb3NpdGlvbiYmKG4ueC09W2EubWFyZ2luTGVmdCxhLmJvcmRlckxlZnRXaWR0aF0ucmVkdWNlKHQsMCksbi55LT1bYS5tYXJnaW5Ub3AsYS5ib3JkZXJUb3BXaWR0aF0ucmVkdWNlKHQsMCkpLG59ZnVuY3Rpb24gUWUoZSl7dmFyIHQsbj1lLmRvY3VtZW50O24uZ2V0RWxlbWVudEJ5SWQoZil8fCh0PShuZXcgZS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh5LFwiaW1hZ2Uvc3ZnK3htbFwiKSxuLmJvZHkuYXBwZW5kQ2hpbGQodC5kb2N1bWVudEVsZW1lbnQpLGNlKGUpKX1mdW5jdGlvbiBLZShsKXt2YXIgZyxjLF8sZSxuLGEsaSxkLG8scixzLHQsdSxoLHA9bC5vcHRpb25zLGY9bC5jdXJTdGF0cyx5PWwuYXBsU3RhdHMsdj1mLnBvc2l0aW9uX3NvY2tldFhZU0UsbT0hMTtmdW5jdGlvbiBTKGUsdCl7ZT10PT09Yj97eDplLmxlZnQrZS53aWR0aC8yLHk6ZS50b3B9OnQ9PT1rP3t4OmUucmlnaHQseTplLnRvcCtlLmhlaWdodC8yfTp0PT09TD97eDplLmxlZnQrZS53aWR0aC8yLHk6ZS5ib3R0b219Ont4OmUubGVmdCx5OmUudG9wK2UuaGVpZ2h0LzJ9O3JldHVybiBlLnNvY2tldElkPXQsZX1mdW5jdGlvbiBFKGUpe3JldHVybnt4OmUueCx5OmUueX19aWYoZi5wb3NpdGlvbl9wYXRoPXAucGF0aCxmLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aD1mLmxpbmVfc3Ryb2tlV2lkdGgsZi5wb3NpdGlvbl9zb2NrZXRHcmF2aXR5U0U9Zz13ZShwLnNvY2tldEdyYXZpdHlTRSksYz1bMCwxXS5tYXAoZnVuY3Rpb24oZSl7dmFyIHQ9cC5hbmNob3JTRVtlXSxuPWwub3B0aW9uSXNBdHRhY2guYW5jaG9yU0VbZV0sYT0hMSE9PW4/X2VbdC5faWRdOm51bGwsaT0hMSE9PW4mJmEuY29uZi5nZXRTdHJva2VXaWR0aD9hLmNvbmYuZ2V0U3Ryb2tlV2lkdGgoYSxsKTowLG89ITEhPT1uJiZhLmNvbmYuZ2V0QkJveE5lc3Q/YS5jb25mLmdldEJCb3hOZXN0KGEsbCxpKTpMZSh0LGwuYmFzZVdpbmRvdyk7cmV0dXJuIGYuY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRVtlXT0hMSE9PW4mJmEuY29uZi5nZXRQYXRoRGF0YT9hLmNvbmYuZ2V0UGF0aERhdGEoYSxsLGkpOihuPW51bGwhPSh0PW8pLnJpZ2h0P3QucmlnaHQ6dC5sZWZ0K3Qud2lkdGgsYT1udWxsIT10LmJvdHRvbT90LmJvdHRvbTp0LnRvcCt0LmhlaWdodCxbe3R5cGU6XCJNXCIsdmFsdWVzOlt0LmxlZnQsdC50b3BdfSx7dHlwZTpcIkxcIix2YWx1ZXM6W24sdC50b3BdfSx7dHlwZTpcIkxcIix2YWx1ZXM6W24sYV19LHt0eXBlOlwiTFwiLHZhbHVlczpbdC5sZWZ0LGFdfSx7dHlwZTpcIlpcIix2YWx1ZXM6W119XSksZi5jYXBzTWFza0FuY2hvcl9zdHJva2VXaWR0aFNFW2VdPWksb30pLGk9LTEscC5zb2NrZXRTRVswXSYmcC5zb2NrZXRTRVsxXT8odlswXT1TKGNbMF0scC5zb2NrZXRTRVswXSksdlsxXT1TKGNbMV0scC5zb2NrZXRTRVsxXSkpOihwLnNvY2tldFNFWzBdfHxwLnNvY2tldFNFWzFdPyhhPXAuc29ja2V0U0VbMF0/KG49MCwxKToobj0xLDApLHZbbl09UyhjW25dLHAuc29ja2V0U0Vbbl0pLChlPUcubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBTKGNbYV0sZSl9KSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1BZShlLHZbbl0pOyh0PGl8fC0xPT09aSkmJih2W2FdPWUsaT10KX0pKTooZT1HLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gUyhjWzFdLGUpfSksRy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIFMoY1swXSxlKX0pLmZvckVhY2goZnVuY3Rpb24obil7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PUFlKG4sZSk7KHQ8aXx8LTE9PT1pKSYmKHZbMF09bix2WzFdPWUsaT10KX0pfSkpLFswLDFdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbjtwLnNvY2tldFNFW2VdfHwoY1tlXS53aWR0aHx8Y1tlXS5oZWlnaHQ/Y1tlXS53aWR0aHx8dltlXS5zb2NrZXRJZCE9PUEmJnZbZV0uc29ja2V0SWQhPT1rP2NbZV0uaGVpZ2h0fHx2W2VdLnNvY2tldElkIT09YiYmdltlXS5zb2NrZXRJZCE9PUx8fCh2W2VdLnNvY2tldElkPTA8PXZbZT8wOjFdLnktY1tlXS50b3A/TDpiKTp2W2VdLnNvY2tldElkPTA8PXZbZT8wOjFdLngtY1tlXS5sZWZ0P2s6QToodD12W2U/MDoxXS54LWNbZV0ubGVmdCxuPXZbZT8wOjFdLnktY1tlXS50b3AsdltlXS5zb2NrZXRJZD1NYXRoLmFicyh0KT49TWF0aC5hYnMobik/MDw9dD9rOkE6MDw9bj9MOmIpKX0pKSxmLnBvc2l0aW9uX3BhdGghPT15LnBvc2l0aW9uX3BhdGh8fGYucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoIT09eS5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGh8fFswLDFdLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIGYucG9zaXRpb25fcGx1Z092ZXJoZWFkU0VbZV0hPT15LnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFW2VdfHwodD12W2VdLG49eS5wb3NpdGlvbl9zb2NrZXRYWVNFW2VdLHQueCE9PW4ueHx8dC55IT09bi55fHx0LnNvY2tldElkIT09bi5zb2NrZXRJZCl8fCh0PWdbZV0sbj15LnBvc2l0aW9uX3NvY2tldEdyYXZpdHlTRVtlXSwoZT1udWxsPT10P1wiYXV0b1wiOkFycmF5LmlzQXJyYXkodCk/XCJhcnJheVwiOlwibnVtYmVyXCIpIT0obnVsbD09bj9cImF1dG9cIjpBcnJheS5pc0FycmF5KG4pP1wiYXJyYXlcIjpcIm51bWJlclwiKXx8KFwiYXJyYXlcIj09ZT90WzBdIT09blswXXx8dFsxXSE9PW5bMV06dCE9PW4pKTt2YXIgdCxufSkpe3N3aXRjaChsLnBhdGhMaXN0LmJhc2VWYWw9Xz1bXSxsLnBhdGhMaXN0LmFuaW1WYWw9bnVsbCxmLnBvc2l0aW9uX3BhdGgpe2Nhc2UgUDpfLnB1c2goW0UodlswXSksRSh2WzFdKV0pO2JyZWFrO2Nhc2UgTjp0PVwibnVtYmVyXCI9PXR5cGVvZiBnWzBdJiYwPGdbMF18fFwibnVtYmVyXCI9PXR5cGVvZiBnWzFdJiYwPGdbMV0sdT1uZSoodD8tMToxKSxoPU1hdGguYXRhbjIodlsxXS55LXZbMF0ueSx2WzFdLngtdlswXS54KSx0PXUtaCxoPU1hdGguUEktaC11LHU9QWUodlswXSx2WzFdKS9NYXRoLnNxcnQoMikqdGUsdD17eDp2WzBdLngrTWF0aC5jb3ModCkqdSx5OnZbMF0ueStNYXRoLnNpbih0KSp1Ki0xfSx1PXt4OnZbMV0ueCtNYXRoLmNvcyhoKSp1LHk6dlsxXS55K01hdGguc2luKGgpKnUqLTF9LF8ucHVzaChbRSh2WzBdKSx0LHUsRSh2WzFdKV0pO2JyZWFrO2Nhc2UgVDpjYXNlIFc6bz1bZ1swXSxmLnBvc2l0aW9uX3BhdGg9PT1XPzA6Z1sxXV0scj1bXSxzPVtdLHYuZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuLGE9b1t0XSxpPUFycmF5LmlzQXJyYXkoYSk/e3g6YVswXSx5OmFbMV19OlwibnVtYmVyXCI9PXR5cGVvZiBhP2Uuc29ja2V0SWQ9PT1iP3t4OjAseTotYX06ZS5zb2NrZXRJZD09PWs/e3g6YSx5OjB9OmUuc29ja2V0SWQ9PT1MP3t4OjAseTphfTp7eDotYSx5OjB9OihuPXZbdD8wOjFdLGE9MDwoYT1mLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFW3RdKT9VKyhLPGE/KGEtSykqSjowKTp6KyhmLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aD5qPyhmLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aC1qKSpIOjApLGUuc29ja2V0SWQ9PT1iP3t4OjAseTotKGk9KGk9KGUueS1uLnkpLzIpPGE/YTppKX06ZS5zb2NrZXRJZD09PWs/e3g6aT0oaT0obi54LWUueCkvMik8YT9hOmkseTowfTplLnNvY2tldElkPT09TD97eDowLHk6aT0oaT0obi55LWUueSkvMik8YT9hOml9Ont4Oi0oaT0oaT0oZS54LW4ueCkvMik8YT9hOmkpLHk6MH0pO3JbdF09ZS54K2kueCxzW3RdPWUueStpLnl9KSxfLnB1c2goW0UodlswXSkse3g6clswXSx5OnNbMF19LHt4OnJbMV0seTpzWzFdfSxFKHZbMV0pXSk7YnJlYWs7Y2FzZSBCOiFmdW5jdGlvbigpe3ZhciBuLGk9MSxsPTIscj0zLG89NCxzPVtbXSxbXV0sdT1bXTtmdW5jdGlvbiBoKGUpe3JldHVybiBlPT09aT9yOmU9PT1sP286ZT09PXI/aTpsfWZ1bmN0aW9uIHAoZSl7cmV0dXJuIGU9PT1sfHxlPT09bz9cInhcIjpcInlcIn1mdW5jdGlvbiBjKGUsdCxuKXt2YXIgYT17eDplLngseTplLnl9O2lmKG4pe2lmKG49PT1oKGUuZGlySWQpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGlySWQ6IFwiK24pO2EuZGlySWQ9bn1lbHNlIGEuZGlySWQ9ZS5kaXJJZDtyZXR1cm4gYS5kaXJJZD09PWk/YS55LT10OmEuZGlySWQ9PT1sP2EueCs9dDphLmRpcklkPT09cj9hLnkrPXQ6YS54LT10LGF9ZnVuY3Rpb24gZChlLHQpe3JldHVybiB0LmRpcklkPT09aT9lLnk8PXQueTp0LmRpcklkPT09bD9lLng+PXQueDp0LmRpcklkPT09cj9lLnk+PXQueTplLng8PXQueH1mdW5jdGlvbiBmKGUsdCl7cmV0dXJuIHQuZGlySWQ9PT1pfHx0LmRpcklkPT09cj9lLng9PT10Lng6ZS55PT09dC55fWZ1bmN0aW9uIHkoZSl7cmV0dXJuIGVbMF0/e2NvbnRhaW46MCxub3RDb250YWluOjF9Ontjb250YWluOjEsbm90Q29udGFpbjowfX1mdW5jdGlvbiBtKGUsdCxuKXtyZXR1cm4gTWF0aC5hYnModFtuXS1lW25dKX1mdW5jdGlvbiBTKGUsdCxuKXtyZXR1cm5cInhcIj09PW4/ZS54PHQueD9sOm86ZS55PHQueT9yOml9Zm9yKHYuZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuPUUoZSksYT1nW3RdO2U9QXJyYXkuaXNBcnJheShhKT9hWzBdPDA/W28sLWFbMF1dOjA8YVswXT9bbCxhWzBdXTphWzFdPDA/W2ksLWFbMV1dOjA8YVsxXT9bcixhWzFdXTpbZS5zb2NrZXRJZCwwXTpcIm51bWJlclwiIT10eXBlb2YgYT9bZS5zb2NrZXRJZCxlZV06MDw9YT9bZS5zb2NrZXRJZCxhXTpbaChlLnNvY2tldElkKSwtYV0sbi5kaXJJZD1lWzBdLGE9ZVsxXSxzW3RdLnB1c2gobiksdVt0XT1jKG4sYSl9KTtmdW5jdGlvbigpe3ZhciBlLHQsYSxpLG49W2QodVsxXSx1WzBdKSxkKHVbMF0sdVsxXSldLG89W3AodVswXS5kaXJJZCkscCh1WzFdLmRpcklkKV07aWYob1swXT09PW9bMV0pe2lmKG5bMF0mJm5bMV0pcmV0dXJuIHZvaWQoZih1WzFdLHVbMF0pfHwodVswXVtvWzBdXT09PXVbMV1bb1sxXV0/KHNbMF0ucHVzaCh1WzBdKSxzWzFdLnB1c2godVsxXSkpOihlPXVbMF1bb1swXV0rKHVbMV1bb1sxXV0tdVswXVtvWzBdXSkvMixzWzBdLnB1c2goYyh1WzBdLE1hdGguYWJzKGUtdVswXVtvWzBdXSkpKSxzWzFdLnB1c2goYyh1WzFdLE1hdGguYWJzKGUtdVsxXVtvWzFdXSkpKSkpKTtuWzBdIT09blsxXT8odD15KG4pLChhPW0odVt0Lm5vdENvbnRhaW5dLHVbdC5jb250YWluXSxvW3Qubm90Q29udGFpbl0pKTxlZSYmKHVbdC5ub3RDb250YWluXT1jKHVbdC5ub3RDb250YWluXSxlZS1hKSksc1t0Lm5vdENvbnRhaW5dLnB1c2godVt0Lm5vdENvbnRhaW5dKSx1W3Qubm90Q29udGFpbl09Yyh1W3Qubm90Q29udGFpbl0sZWUsZih1W3QuY29udGFpbl0sdVt0Lm5vdENvbnRhaW5dKT9cInhcIj09PW9bdC5ub3RDb250YWluXT9yOmw6Uyh1W3Qubm90Q29udGFpbl0sdVt0LmNvbnRhaW5dLFwieFwiPT09b1t0Lm5vdENvbnRhaW5dP1wieVwiOlwieFwiKSkpOihhPW0odVswXSx1WzFdLFwieFwiPT09b1swXT9cInlcIjpcInhcIikscy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIG49MD09PXQ/MTowO2UucHVzaCh1W3RdKSx1W3RdPWModVt0XSxlZSwyKmVlPD1hP1ModVt0XSx1W25dLFwieFwiPT09b1t0XT9cInlcIjpcInhcIik6XCJ4XCI9PT1vW3RdP3I6bCl9KSl9ZWxzZXtpZihuWzBdJiZuWzFdKXJldHVybiB2b2lkKGYodVsxXSx1WzBdKT9zWzFdLnB1c2godVsxXSk6Zih1WzBdLHVbMV0pP3NbMF0ucHVzaCh1WzBdKTpzWzBdLnB1c2goXCJ4XCI9PT1vWzBdP3t4OnVbMV0ueCx5OnVbMF0ueX06e3g6dVswXS54LHk6dVsxXS55fSkpO25bMF0hPT1uWzFdPyh0PXkobiksc1t0Lm5vdENvbnRhaW5dLnB1c2godVt0Lm5vdENvbnRhaW5dKSx1W3Qubm90Q29udGFpbl09Yyh1W3Qubm90Q29udGFpbl0sZWUsbSh1W3Qubm90Q29udGFpbl0sdVt0LmNvbnRhaW5dLG9bdC5jb250YWluXSk+PWVlP1ModVt0Lm5vdENvbnRhaW5dLHVbdC5jb250YWluXSxvW3QuY29udGFpbl0pOnVbdC5jb250YWluXS5kaXJJZCkpOihpPVt7eDp1WzBdLngseTp1WzBdLnl9LHt4OnVbMV0ueCx5OnVbMV0ueX1dLHMuZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuPTA9PT10PzE6MCxhPW0oaVt0XSxpW25dLG9bdF0pO2E8ZWUmJih1W3RdPWModVt0XSxlZS1hKSksZS5wdXNoKHVbdF0pLHVbdF09Yyh1W3RdLGVlLFModVt0XSx1W25dLG9bbl0pKX0pKX1yZXR1cm4gMX0oKTspO3NbMV0ucmV2ZXJzZSgpLHNbMF0uY29uY2F0KHNbMV0pLmZvckVhY2goZnVuY3Rpb24oZSx0KXtlPXt4OmUueCx5OmUueX07MDx0JiZfLnB1c2goW24sZV0pLG49ZX0pfSgpfWQ9W10sZi5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIG4sYSxpLG8sbCxyLHMsdSxoLHA9IXQ7MDxlPzI9PT0obj1fW2E9cD8wOl8ubGVuZ3RoLTFdKS5sZW5ndGg/KGRbYV09ZFthXXx8QWUuYXBwbHkobnVsbCxuKSxkW2FdPiQmJihkW2FdLWU8JCYmKGU9ZFthXS0kKSxzPVZlKG5bMF0sblsxXSwocD9lOmRbYV0tZSkvZFthXSksX1thXT1wP1tzLG5bMV1dOltuWzBdLHNdLGRbYV0tPWUpKTooZFthXT1kW2FdfHxUZS5hcHBseShudWxsLG4pLGRbYV0+JCYmKGRbYV0tZTwkJiYoZT1kW2FdLSQpLHM9TmUoblswXSxuWzFdLG5bMl0sblszXSxXZShuWzBdLG5bMV0sblsyXSxuWzNdLHA/ZTpkW2FdLWUpKSxvPXA/KGk9blswXSxzLnRvUDEpOihpPW5bM10scy5mcm9tUDIpLGw9TWF0aC5hdGFuMihpLnktcy55LHMueC1pLngpLHI9QWUocyxvKSxzLng9aS54K01hdGguY29zKGwpKmUscy55PWkueStNYXRoLnNpbihsKSplKi0xLG8ueD1zLngrTWF0aC5jb3MobCkqcixvLnk9cy55K01hdGguc2luKGwpKnIqLTEsX1thXT1wP1tzLHMudG9QMSxzLnRvUDIsblszXV06W25bMF0scy5mcm9tUDEscy5mcm9tUDIsc10sZFthXT1udWxsKSk6ZTwwJiYobj1fW2E9cD8wOl8ubGVuZ3RoLTFdLHM9dlt0XS5zb2NrZXRJZCx0PS1jW3RdW1wieFwiPT0odT1zPT09QXx8cz09PWs/XCJ4XCI6XCJ5XCIpP1wid2lkdGhcIjpcImhlaWdodFwiXSxoPShlPWU8dD90OmUpKihzPT09QXx8cz09PWI/LTE6MSksMj09PW4ubGVuZ3RoP25bcD8wOm4ubGVuZ3RoLTFdW3VdKz1oOihwP1swLDFdOltuLmxlbmd0aC0yLG4ubGVuZ3RoLTFdKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZV1bdV0rPWh9KSxkW2FdPW51bGwpfSkseS5wb3NpdGlvbl9zb2NrZXRYWVNFPXdlKHYpLHkucG9zaXRpb25fcGx1Z092ZXJoZWFkU0U9d2UoZi5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRSkseS5wb3NpdGlvbl9wYXRoPWYucG9zaXRpb25fcGF0aCx5LnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aD1mLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCx5LnBvc2l0aW9uX3NvY2tldEdyYXZpdHlTRT13ZShnKSxtPSEwLGwuZXZlbnRzLmFwbF9wb3NpdGlvbiYmbC5ldmVudHMuYXBsX3Bvc2l0aW9uLmZvckVhY2goZnVuY3Rpb24oZSl7ZShsLF8pfSl9cmV0dXJuIG19ZnVuY3Rpb24gSmUodCxuKXtuIT09dC5pc1Nob3duJiYoISFuIT0hIXQuaXNTaG93biYmKHQuc3ZnLnN0eWxlLnZpc2liaWxpdHk9bj9cIlwiOlwiaGlkZGVuXCIpLHQuaXNTaG93bj1uLHQuZXZlbnRzJiZ0LmV2ZW50cy5zdmdTaG93JiZ0LmV2ZW50cy5zdmdTaG93LmZvckVhY2goZnVuY3Rpb24oZSl7ZSh0LG4pfSkpfWZ1bmN0aW9uICRlKGUsdCl7dmFyIG4sYSxoLHAsYyxkLGYsaSxvLGwscixzLHUseSxtLFMsZyxfLHYsRSx4LGIsayx3LE8sTSxJLEMsTCxBLFYsUCxOLFQsVyxCLFIsRixHLEQseixqLEgsVT17fTt0LmxpbmUmJihVLmxpbmU9KGk9KG49ZSkub3B0aW9ucyxhPW4uY3VyU3RhdHMsbz1uLmV2ZW50cyxsPSExLGw9WGUobixhLFwibGluZV9jb2xvclwiLGkubGluZUNvbG9yLG8uY3VyX2xpbmVfY29sb3IpfHxsLGw9WGUobixhLFwibGluZV9jb2xvclRyYVwiLE9lKGEubGluZV9jb2xvcilbMF08MSl8fGwsbD1YZShuLGEsXCJsaW5lX3N0cm9rZVdpZHRoXCIsaS5saW5lU2l6ZSxvLmN1cl9saW5lX3N0cm9rZVdpZHRoKXx8bCkpLCh0LnBsdWd8fFUubGluZSkmJihVLnBsdWc9KHA9KGg9ZSkub3B0aW9ucyxjPWguY3VyU3RhdHMsZD1oLmV2ZW50cyxmPSExLFswLDFdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbixhLGksbyxsLHIscyx1PXAucGx1Z1NFW2VdO2Y9WGUoaCxjLnBsdWdfZW5hYmxlZFNFLGUsdSE9PVkpfHxmLGY9WGUoaCxjLnBsdWdfcGx1Z1NFLGUsdSl8fGYsZj1YZShoLGMucGx1Z19jb2xvclNFLGUscz1wLnBsdWdDb2xvclNFW2VdfHxjLmxpbmVfY29sb3IsZC5jdXJfcGx1Z19jb2xvclNFKXx8ZixmPVhlKGgsYy5wbHVnX2NvbG9yVHJhU0UsZSxPZShzKVswXTwxKXx8Zix1IT09WSYmKGk9bj0odD1YW3FbdV1dKS53aWR0aFIqcC5wbHVnU2l6ZVNFW2VdLG89YT10LmhlaWdodFIqcC5wbHVnU2l6ZVNFW2VdLHJlJiYoaSo9Yy5saW5lX3N0cm9rZVdpZHRoLG8qPWMubGluZV9zdHJva2VXaWR0aCksZj1YZShoLGMucGx1Z19tYXJrZXJXaWR0aFNFLGUsaSl8fGYsZj1YZShoLGMucGx1Z19tYXJrZXJIZWlnaHRTRSxlLG8pfHxmLGMuY2Fwc01hc2tNYXJrZXJfbWFya2VyV2lkdGhTRVtlXT1uLGMuY2Fwc01hc2tNYXJrZXJfbWFya2VySGVpZ2h0U0VbZV09YSksYy5wbHVnT3V0bGluZV9wbHVnU0VbZV09Yy5jYXBzTWFza01hcmtlcl9wbHVnU0VbZV09dSxjLnBsdWdfZW5hYmxlZFNFW2VdPyhzPWMubGluZV9zdHJva2VXaWR0aC91ZS5saW5lU2l6ZSpwLnBsdWdTaXplU0VbZV0sYy5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRVtlXT10Lm92ZXJoZWFkKnMsYy52aWV3Qm94X3BsdWdCQ2lyY2xlU0VbZV09dC5iQ2lyY2xlKnMsbD10LnNpZGVMZW4qcyxyPXQuYmFja0xlbipzKTooYy5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRVtlXT0tYy5saW5lX3N0cm9rZVdpZHRoLzIsYy52aWV3Qm94X3BsdWdCQ2lyY2xlU0VbZV09bD1yPTApLFhlKGgsYy5hdHRhY2hfcGx1Z1NpZGVMZW5TRSxlLGwsZC5jdXJfYXR0YWNoX3BsdWdTaWRlTGVuU0UpLFhlKGgsYy5hdHRhY2hfcGx1Z0JhY2tMZW5TRSxlLHIsZC5jdXJfYXR0YWNoX3BsdWdCYWNrTGVuU0UpLGMuY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFW2VdPSFjLnBsdWdfZW5hYmxlZFNFW2VdfSksZj1YZShoLGMsXCJwbHVnX2VuYWJsZWRcIixjLnBsdWdfZW5hYmxlZFNFWzBdfHxjLnBsdWdfZW5hYmxlZFNFWzFdKXx8ZikpLCh0LmxpbmVPdXRsaW5lfHxVLmxpbmUpJiYoVS5saW5lT3V0bGluZT0obz0oaT1lKS5vcHRpb25zLGw9aS5jdXJTdGF0cyxrPSExLGs9WGUoaSxsLFwibGluZU91dGxpbmVfZW5hYmxlZFwiLG8ubGluZU91dGxpbmVFbmFibGVkKXx8ayxrPVhlKGksbCxcImxpbmVPdXRsaW5lX2NvbG9yXCIsby5saW5lT3V0bGluZUNvbG9yKXx8ayxrPVhlKGksbCxcImxpbmVPdXRsaW5lX2NvbG9yVHJhXCIsT2UobC5saW5lT3V0bGluZV9jb2xvcilbMF08MSl8fGssbz1sLmxpbmVfc3Ryb2tlV2lkdGgqby5saW5lT3V0bGluZVNpemUsaz1YZShpLGwsXCJsaW5lT3V0bGluZV9zdHJva2VXaWR0aFwiLGwubGluZV9zdHJva2VXaWR0aC0yKm8pfHxrLGs9WGUoaSxsLFwibGluZU91dGxpbmVfaW5TdHJva2VXaWR0aFwiLGwubGluZU91dGxpbmVfY29sb3JUcmE/bC5saW5lT3V0bGluZV9zdHJva2VXaWR0aCsyKnNlOmwubGluZV9zdHJva2VXaWR0aC1vKXx8aykpLCh0LnBsdWdPdXRsaW5lfHxVLmxpbmV8fFUucGx1Z3x8VS5saW5lT3V0bGluZSkmJihVLnBsdWdPdXRsaW5lPShzPShyPWUpLm9wdGlvbnMsdT1yLmN1clN0YXRzLHk9ITEsWzAsMV0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD11LnBsdWdPdXRsaW5lX3BsdWdTRVtlXSxuPXQhPT1ZP1hbcVt0XV06bnVsbDt5PVhlKHIsdS5wbHVnT3V0bGluZV9lbmFibGVkU0UsZSxzLnBsdWdPdXRsaW5lRW5hYmxlZFNFW2VdJiZ1LnBsdWdfZW5hYmxlZCYmdS5wbHVnX2VuYWJsZWRTRVtlXSYmISFuJiYhIW4ub3V0bGluZUJhc2UpfHx5LHk9WGUocix1LnBsdWdPdXRsaW5lX2NvbG9yU0UsZSx0PXMucGx1Z091dGxpbmVDb2xvclNFW2VdfHx1LmxpbmVPdXRsaW5lX2NvbG9yKXx8eSx5PVhlKHIsdS5wbHVnT3V0bGluZV9jb2xvclRyYVNFLGUsT2UodClbMF08MSl8fHksbiYmbi5vdXRsaW5lQmFzZSYmKCh0PXMucGx1Z091dGxpbmVTaXplU0VbZV0pPm4ub3V0bGluZU1heCYmKHQ9bi5vdXRsaW5lTWF4KSx0Kj0yKm4ub3V0bGluZUJhc2UseT1YZShyLHUucGx1Z091dGxpbmVfc3Ryb2tlV2lkdGhTRSxlLHQpfHx5LHk9WGUocix1LnBsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRSxlLHUucGx1Z091dGxpbmVfY29sb3JUcmFTRVtlXT90LXNlLyh1LmxpbmVfc3Ryb2tlV2lkdGgvdWUubGluZVNpemUpL3MucGx1Z1NpemVTRVtlXSoyOnQvMil8fHkpfSkseSkpLCh0LmZhY2VzfHxVLmxpbmV8fFUucGx1Z3x8VS5saW5lT3V0bGluZXx8VS5wbHVnT3V0bGluZSkmJihVLmZhY2VzPShnPShtPWUpLmN1clN0YXRzLF89bS5hcGxTdGF0cyx2PW0uZXZlbnRzLEU9ITEsIWcubGluZV9hbHRDb2xvciYmWGUobSxfLFwibGluZV9jb2xvclwiLFM9Zy5saW5lX2NvbG9yLHYuYXBsX2xpbmVfY29sb3IpJiYobS5saW5lRmFjZS5zdHlsZS5zdHJva2U9UyxFPSEwKSxYZShtLF8sXCJsaW5lX3N0cm9rZVdpZHRoXCIsUz1nLmxpbmVfc3Ryb2tlV2lkdGgsdi5hcGxfbGluZV9zdHJva2VXaWR0aCkmJihtLmxpbmVTaGFwZS5zdHlsZS5zdHJva2VXaWR0aD1TK1wicHhcIixFPSEwLChvZXx8aWUpJiYoamUobSxtLmxpbmVTaGFwZSksaWUmJihqZShtLG0ubGluZUZhY2UpLGplKG0sbS5saW5lTWFza0NhcHMpKSkpLFhlKG0sXyxcImxpbmVPdXRsaW5lX2VuYWJsZWRcIixTPWcubGluZU91dGxpbmVfZW5hYmxlZCx2LmFwbF9saW5lT3V0bGluZV9lbmFibGVkKSYmKG0ubGluZU91dGxpbmVGYWNlLnN0eWxlLmRpc3BsYXk9Uz9cImlubGluZVwiOlwibm9uZVwiLEU9ITApLGcubGluZU91dGxpbmVfZW5hYmxlZCYmKFhlKG0sXyxcImxpbmVPdXRsaW5lX2NvbG9yXCIsUz1nLmxpbmVPdXRsaW5lX2NvbG9yLHYuYXBsX2xpbmVPdXRsaW5lX2NvbG9yKSYmKG0ubGluZU91dGxpbmVGYWNlLnN0eWxlLnN0cm9rZT1TLEU9ITApLFhlKG0sXyxcImxpbmVPdXRsaW5lX3N0cm9rZVdpZHRoXCIsUz1nLmxpbmVPdXRsaW5lX3N0cm9rZVdpZHRoLHYuYXBsX2xpbmVPdXRsaW5lX3N0cm9rZVdpZHRoKSYmKG0ubGluZU91dGxpbmVNYXNrU2hhcGUuc3R5bGUuc3Ryb2tlV2lkdGg9UytcInB4XCIsRT0hMCxpZSYmKGplKG0sbS5saW5lT3V0bGluZU1hc2tDYXBzKSxqZShtLG0ubGluZU91dGxpbmVGYWNlKSkpLFhlKG0sXyxcImxpbmVPdXRsaW5lX2luU3Ryb2tlV2lkdGhcIixTPWcubGluZU91dGxpbmVfaW5TdHJva2VXaWR0aCx2LmFwbF9saW5lT3V0bGluZV9pblN0cm9rZVdpZHRoKSYmKG0ubGluZU1hc2tTaGFwZS5zdHlsZS5zdHJva2VXaWR0aD1TK1wicHhcIixFPSEwLGllJiYoamUobSxtLmxpbmVPdXRsaW5lTWFza0NhcHMpLGplKG0sbS5saW5lT3V0bGluZUZhY2UpKSkpLFhlKG0sXyxcInBsdWdfZW5hYmxlZFwiLFM9Zy5wbHVnX2VuYWJsZWQsdi5hcGxfcGx1Z19lbmFibGVkKSYmKG0ucGx1Z3NGYWNlLnN0eWxlLmRpc3BsYXk9Uz9cImlubGluZVwiOlwibm9uZVwiLEU9ITApLGcucGx1Z19lbmFibGVkJiZbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciBlPWcucGx1Z19wbHVnU0Vbbl0sdD1lIT09WT9YW3FbZV1dOm51bGwsYT1aZShuLHQpO1hlKG0sXy5wbHVnX2VuYWJsZWRTRSxuLFM9Zy5wbHVnX2VuYWJsZWRTRVtuXSx2LmFwbF9wbHVnX2VuYWJsZWRTRSkmJihtLnBsdWdzRmFjZS5zdHlsZVthLnByb3BdPVM/XCJ1cmwoI1wiK20ucGx1Z01hcmtlcklkU0Vbbl0rXCIpXCI6XCJub25lXCIsRT0hMCksZy5wbHVnX2VuYWJsZWRTRVtuXSYmKFhlKG0sXy5wbHVnX3BsdWdTRSxuLGUsdi5hcGxfcGx1Z19wbHVnU0UpJiYobS5wbHVnRmFjZVNFW25dLmhyZWYuYmFzZVZhbD1cIiNcIit0LmVsbUlkLFVlKG0sbS5wbHVnTWFya2VyU0Vbbl0sYS5vcmllbnQsdC5iQm94LG0uc3ZnLG0ucGx1Z01hcmtlclNoYXBlU0Vbbl0sbS5wbHVnc0ZhY2UpLEU9ITAsb2UmJmplKG0sbS5wbHVnc0ZhY2UpKSxYZShtLF8ucGx1Z19jb2xvclNFLG4sUz1nLnBsdWdfY29sb3JTRVtuXSx2LmFwbF9wbHVnX2NvbG9yU0UpJiYobS5wbHVnRmFjZVNFW25dLnN0eWxlLmZpbGw9UyxFPSEwLChsZXx8cmV8fGllKSYmIWcubGluZV9jb2xvclRyYSYmamUobSxpZT9tLmxpbmVNYXNrQ2FwczptLmNhcHNNYXNrTGluZSkpLFtcIm1hcmtlcldpZHRoXCIsXCJtYXJrZXJIZWlnaHRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1cInBsdWdfXCIrZStcIlNFXCI7WGUobSxfW3RdLG4sUz1nW3RdW25dLHZbXCJhcGxfXCIrdF0pJiYobS5wbHVnTWFya2VyU0Vbbl1bZV0uYmFzZVZhbC52YWx1ZT1TLEU9ITApfSksWGUobSxfLnBsdWdPdXRsaW5lX2VuYWJsZWRTRSxuLFM9Zy5wbHVnT3V0bGluZV9lbmFibGVkU0Vbbl0sdi5hcGxfcGx1Z091dGxpbmVfZW5hYmxlZFNFKSYmKFM/KG0ucGx1Z0ZhY2VTRVtuXS5zdHlsZS5tYXNrPVwidXJsKCNcIittLnBsdWdNYXNrSWRTRVtuXStcIilcIixtLnBsdWdPdXRsaW5lRmFjZVNFW25dLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmVcIik6KG0ucGx1Z0ZhY2VTRVtuXS5zdHlsZS5tYXNrPVwibm9uZVwiLG0ucGx1Z091dGxpbmVGYWNlU0Vbbl0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksRT0hMCksZy5wbHVnT3V0bGluZV9lbmFibGVkU0Vbbl0mJihYZShtLF8ucGx1Z091dGxpbmVfcGx1Z1NFLG4sZSx2LmFwbF9wbHVnT3V0bGluZV9wbHVnU0UpJiYobS5wbHVnT3V0bGluZUZhY2VTRVtuXS5ocmVmLmJhc2VWYWw9bS5wbHVnTWFza1NoYXBlU0Vbbl0uaHJlZi5iYXNlVmFsPW0ucGx1Z091dGxpbmVNYXNrU2hhcGVTRVtuXS5ocmVmLmJhc2VWYWw9XCIjXCIrdC5lbG1JZCxbbS5wbHVnTWFza1NFW25dLG0ucGx1Z091dGxpbmVNYXNrU0Vbbl1dLmZvckVhY2goZnVuY3Rpb24oZSl7ZS54LmJhc2VWYWwudmFsdWU9dC5iQm94LmxlZnQsZS55LmJhc2VWYWwudmFsdWU9dC5iQm94LnRvcCxlLndpZHRoLmJhc2VWYWwudmFsdWU9dC5iQm94LndpZHRoLGUuaGVpZ2h0LmJhc2VWYWwudmFsdWU9dC5iQm94LmhlaWdodH0pLEU9ITApLFhlKG0sXy5wbHVnT3V0bGluZV9jb2xvclNFLG4sUz1nLnBsdWdPdXRsaW5lX2NvbG9yU0Vbbl0sdi5hcGxfcGx1Z091dGxpbmVfY29sb3JTRSkmJihtLnBsdWdPdXRsaW5lRmFjZVNFW25dLnN0eWxlLmZpbGw9UyxFPSEwLGllJiYoamUobSxtLmxpbmVNYXNrQ2FwcyksamUobSxtLmxpbmVPdXRsaW5lTWFza0NhcHMpKSksWGUobSxfLnBsdWdPdXRsaW5lX3N0cm9rZVdpZHRoU0UsbixTPWcucGx1Z091dGxpbmVfc3Ryb2tlV2lkdGhTRVtuXSx2LmFwbF9wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFKSYmKG0ucGx1Z091dGxpbmVNYXNrU2hhcGVTRVtuXS5zdHlsZS5zdHJva2VXaWR0aD1TK1wicHhcIixFPSEwKSxYZShtLF8ucGx1Z091dGxpbmVfaW5TdHJva2VXaWR0aFNFLG4sUz1nLnBsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRVtuXSx2LmFwbF9wbHVnT3V0bGluZV9pblN0cm9rZVdpZHRoU0UpJiYobS5wbHVnTWFza1NoYXBlU0Vbbl0uc3R5bGUuc3Ryb2tlV2lkdGg9UytcInB4XCIsRT0hMCkpKX0pLEUpKSwodC5wb3NpdGlvbnx8VS5saW5lfHxVLnBsdWcpJiYoVS5wb3NpdGlvbj1LZShlKSksKHQucGF0aHx8VS5wb3NpdGlvbikmJihVLnBhdGg9KGs9KHg9ZSkuY3VyU3RhdHMsST14LmFwbFN0YXRzLE09eC5wYXRoTGlzdC5hbmltVmFsfHx4LnBhdGhMaXN0LmJhc2VWYWwsdz1rLnBhdGhfZWRnZSxDPSExLE0mJih3LngxPXcueDI9TVswXVswXS54LHcueTE9dy55Mj1NWzBdWzBdLnksay5wYXRoX3BhdGhEYXRhPWI9QmUoTSxmdW5jdGlvbihlKXtlLng8dy54MSYmKHcueDE9ZS54KSxlLnk8dy55MSYmKHcueTE9ZS55KSxlLng+dy54MiYmKHcueDI9ZS54KSxlLnk+dy55MiYmKHcueTI9ZS55KX0pLEZlKGIsSS5wYXRoX3BhdGhEYXRhKSYmKHgubGluZVBhdGguc2V0UGF0aERhdGEoYiksSS5wYXRoX3BhdGhEYXRhPWIsQz0hMCxpZT8oamUoeCx4LnBsdWdzRmFjZSksamUoeCx4LmxpbmVNYXNrQ2FwcykpOm9lJiZqZSh4LHgubGluZVBhdGgpLHguZXZlbnRzLmFwbF9wYXRoJiZ4LmV2ZW50cy5hcGxfcGF0aC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UoeCxiKX0pKSksQykpLFUudmlld0JveD0oTT0oTz1lKS5jdXJTdGF0cyxJPU8uYXBsU3RhdHMsQz1NLnBhdGhfZWRnZSxMPU0udmlld0JveF9iQm94LEE9SS52aWV3Qm94X2JCb3gsVj1PLnN2Zy52aWV3Qm94LmJhc2VWYWwsUD1PLnN2Zy5zdHlsZSxOPSExLEk9TWF0aC5tYXgoTS5saW5lX3N0cm9rZVdpZHRoLzIsTS52aWV3Qm94X3BsdWdCQ2lyY2xlU0VbMF18fDAsTS52aWV3Qm94X3BsdWdCQ2lyY2xlU0VbMV18fDApLFQ9e3gxOkMueDEtSSx5MTpDLnkxLUkseDI6Qy54MitJLHkyOkMueTIrSX0sTy5ldmVudHMubmV3X2VkZ2U0dmlld0JveCYmTy5ldmVudHMubmV3X2VkZ2U0dmlld0JveC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UoTyxUKX0pLEwueD1NLmxpbmVNYXNrX3g9TS5saW5lT3V0bGluZU1hc2tfeD1NLm1hc2tCR1JlY3RfeD1ULngxLEwueT1NLmxpbmVNYXNrX3k9TS5saW5lT3V0bGluZU1hc2tfeT1NLm1hc2tCR1JlY3RfeT1ULnkxLEwud2lkdGg9VC54Mi1ULngxLEwuaGVpZ2h0PVQueTItVC55MSxbXCJ4XCIsXCJ5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7KHQ9TFtlXSkhPT1BW2VdJiYoVltlXT1BW2VdPXQsUFtRW2VdXT10KyhcInhcIj09PWV8fFwieVwiPT09ZT9PLmJvZHlPZmZzZXRbZV06MCkrXCJweFwiLE49ITApfSksTiksVS5tYXNrPShSPShXPWUpLmN1clN0YXRzLEY9Vy5hcGxTdGF0cyxHPSExLFIucGx1Z19lbmFibGVkP1swLDFdLmZvckVhY2goZnVuY3Rpb24oZSl7Ui5jYXBzTWFza01hcmtlcl9lbmFibGVkU0VbZV09Ui5wbHVnX2VuYWJsZWRTRVtlXSYmUi5wbHVnX2NvbG9yVHJhU0VbZV18fFIucGx1Z091dGxpbmVfZW5hYmxlZFNFW2VdJiZSLnBsdWdPdXRsaW5lX2NvbG9yVHJhU0VbZV19KTpSLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRVswXT1SLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRVsxXT0hMSxSLmNhcHNNYXNrTWFya2VyX2VuYWJsZWQ9Ui5jYXBzTWFza01hcmtlcl9lbmFibGVkU0VbMF18fFIuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFWzFdLFIubGluZU1hc2tfb3V0bGluZU1vZGU9Ui5saW5lT3V0bGluZV9lbmFibGVkLFIuY2Fwc19lbmFibGVkPVIuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZHx8Ui5jYXBzTWFza0FuY2hvcl9lbmFibGVkU0VbMF18fFIuY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFWzFdLFIubGluZU1hc2tfZW5hYmxlZD1SLmNhcHNfZW5hYmxlZHx8Ui5saW5lTWFza19vdXRsaW5lTW9kZSwoUi5saW5lTWFza19lbmFibGVkJiYhUi5saW5lTWFza19vdXRsaW5lTW9kZXx8Ui5saW5lT3V0bGluZV9lbmFibGVkKSYmW1wieFwiLFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PVwibWFza0JHUmVjdF9cIitlO1hlKFcsRix0LEI9Ult0XSkmJihXLm1hc2tCR1JlY3RbZV0uYmFzZVZhbC52YWx1ZT1CLEc9ITApfSksWGUoVyxGLFwibGluZU1hc2tfZW5hYmxlZFwiLEI9Ui5saW5lTWFza19lbmFibGVkKSYmKFcubGluZUZhY2Uuc3R5bGUubWFzaz1CP1widXJsKCNcIitXLmxpbmVNYXNrSWQrXCIpXCI6XCJub25lXCIsRz0hMCxyZSYmamUoVyxXLmxpbmVNYXNrKSksUi5saW5lTWFza19lbmFibGVkJiYoWGUoVyxGLFwibGluZU1hc2tfb3V0bGluZU1vZGVcIixCPVIubGluZU1hc2tfb3V0bGluZU1vZGUpJiYoQj8oVy5saW5lTWFza0JHLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsVy5saW5lTWFza1NoYXBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmVcIik6KFcubGluZU1hc2tCRy5zdHlsZS5kaXNwbGF5PVwiaW5saW5lXCIsVy5saW5lTWFza1NoYXBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpLEc9ITApLFtcInhcIixcInlcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1cImxpbmVNYXNrX1wiK2U7WGUoVyxGLHQsQj1SW3RdKSYmKFcubGluZU1hc2tbZV0uYmFzZVZhbC52YWx1ZT1CLEc9ITApfSksWGUoVyxGLFwiY2Fwc19lbmFibGVkXCIsQj1SLmNhcHNfZW5hYmxlZCkmJihXLmxpbmVNYXNrQ2Fwcy5zdHlsZS5kaXNwbGF5PVcubGluZU91dGxpbmVNYXNrQ2Fwcy5zdHlsZS5kaXNwbGF5PUI/XCJpbmxpbmVcIjpcIm5vbmVcIixHPSEwLHJlJiZqZShXLFcuY2Fwc01hc2tMaW5lKSksUi5jYXBzX2VuYWJsZWQmJihbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0O1hlKFcsRi5jYXBzTWFza0FuY2hvcl9lbmFibGVkU0UsZSxCPVIuY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFW2VdKSYmKFcuY2Fwc01hc2tBbmNob3JTRVtlXS5zdHlsZS5kaXNwbGF5PUI/XCJpbmxpbmVcIjpcIm5vbmVcIixHPSEwLHJlJiZqZShXLFcubGluZU1hc2spKSxSLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVtlXSYmKEZlKHQ9Ui5jYXBzTWFza0FuY2hvcl9wYXRoRGF0YVNFW2VdLEYuY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRVtlXSkmJihXLmNhcHNNYXNrQW5jaG9yU0VbZV0uc2V0UGF0aERhdGEodCksRi5jYXBzTWFza0FuY2hvcl9wYXRoRGF0YVNFW2VdPXQsRz0hMCksWGUoVyxGLmNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0UsZSxCPVIuY2Fwc01hc2tBbmNob3Jfc3Ryb2tlV2lkdGhTRVtlXSkmJihXLmNhcHNNYXNrQW5jaG9yU0VbZV0uc3R5bGUuc3Ryb2tlV2lkdGg9QitcInB4XCIsRz0hMCkpfSksWGUoVyxGLFwiY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFwiLEI9Ui5jYXBzTWFza01hcmtlcl9lbmFibGVkKSYmKFcuY2Fwc01hc2tMaW5lLnN0eWxlLmRpc3BsYXk9Qj9cImlubGluZVwiOlwibm9uZVwiLEc9ITApLFIuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZCYmWzAsMV0uZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgZT1SLmNhcHNNYXNrTWFya2VyX3BsdWdTRVtuXSx0PWUhPT1ZP1hbcVtlXV06bnVsbCxhPVplKG4sdCk7WGUoVyxGLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRSxuLEI9Ui5jYXBzTWFza01hcmtlcl9lbmFibGVkU0Vbbl0pJiYoVy5jYXBzTWFza0xpbmUuc3R5bGVbYS5wcm9wXT1CP1widXJsKCNcIitXLmxpbmVNYXNrTWFya2VySWRTRVtuXStcIilcIjpcIm5vbmVcIixHPSEwKSxSLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRVtuXSYmKFhlKFcsRi5jYXBzTWFza01hcmtlcl9wbHVnU0UsbixlKSYmKFcuY2Fwc01hc2tNYXJrZXJTaGFwZVNFW25dLmhyZWYuYmFzZVZhbD1cIiNcIit0LmVsbUlkLFVlKFcsVy5jYXBzTWFza01hcmtlclNFW25dLGEub3JpZW50LHQuYkJveCxXLnN2ZyxXLmNhcHNNYXNrTWFya2VyU2hhcGVTRVtuXSxXLmNhcHNNYXNrTGluZSksRz0hMCxvZSYmKGplKFcsVy5jYXBzTWFza0xpbmUpLGplKFcsVy5saW5lRmFjZSkpKSxbXCJtYXJrZXJXaWR0aFwiLFwibWFya2VySGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9XCJjYXBzTWFza01hcmtlcl9cIitlK1wiU0VcIjtYZShXLEZbdF0sbixCPVJbdF1bbl0pJiYoVy5jYXBzTWFza01hcmtlclNFW25dW2VdLmJhc2VWYWwudmFsdWU9QixHPSEwKX0pKX0pKSksUi5saW5lT3V0bGluZV9lbmFibGVkJiZbXCJ4XCIsXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9XCJsaW5lT3V0bGluZU1hc2tfXCIrZTtYZShXLEYsdCxCPVJbdF0pJiYoVy5saW5lT3V0bGluZU1hc2tbZV0uYmFzZVZhbC52YWx1ZT1CLEc9ITApfSksRyksdC5lZmZlY3QmJihqPShEPWUpLmN1clN0YXRzLEg9RC5hcGxTdGF0cyxPYmplY3Qua2V5cyhaKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PVpbZV0sbj1lK1wiX2VuYWJsZWRcIixhPWUrXCJfb3B0aW9uc1wiLGU9althXTtYZShELEgsbix6PWpbbl0pPyh6JiYoSFthXT13ZShlKSksdFt6P1wiaW5pdFwiOlwicmVtb3ZlXCJdKEQpKTp6JiZrZShlLEhbYV0pJiYodC5yZW1vdmUoRCksSFtuXT0hMCxIW2FdPXdlKGUpLHQuaW5pdChEKSl9KSksKGxlfHxyZSkmJlUubGluZSYmIVUucGF0aCYmamUoZSxlLmxpbmVTaGFwZSksbGUmJlUucGx1ZyYmIVUubGluZSYmamUoZSxlLnBsdWdzRmFjZSksSGUoZSl9ZnVuY3Rpb24gZXQoZSx0KXtyZXR1cm57ZHVyYXRpb246KHBlKGUuZHVyYXRpb24pJiYwPGUuZHVyYXRpb24/ZTp0KS5kdXJhdGlvbix0aW1pbmc6Zy52YWxpZFRpbWluZyhlLnRpbWluZyk/ZS50aW1pbmc6d2UodC50aW1pbmcpfX1mdW5jdGlvbiB0dChlLHQsbixhKXt2YXIgaT1lLmN1clN0YXRzLG89ZS5hcGxTdGF0cyxsPXt9O2Z1bmN0aW9uIHIoKXtbXCJzaG93X29uXCIsXCJzaG93X2VmZmVjdFwiLFwic2hvd19hbmltT3B0aW9uc1wiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe29bZV09aVtlXX0pfWkuc2hvd19vbj10LG4mJndbbl0mJihpLnNob3dfZWZmZWN0PW4saS5zaG93X2FuaW1PcHRpb25zPWV0KGhlKGEpP2E6e30sd1tuXS5kZWZhdWx0QW5pbU9wdGlvbnMpKSxsLnNob3dfb249aS5zaG93X29uIT09by5zaG93X29uLGwuc2hvd19lZmZlY3Q9aS5zaG93X2VmZmVjdCE9PW8uc2hvd19lZmZlY3QsbC5zaG93X2FuaW1PcHRpb25zPWtlKGkuc2hvd19hbmltT3B0aW9ucyxvLnNob3dfYW5pbU9wdGlvbnMpLGwuc2hvd19lZmZlY3R8fGwuc2hvd19hbmltT3B0aW9ucz9pLnNob3dfaW5BbmltPyhuPWwuc2hvd19lZmZlY3Q/d1tvLnNob3dfZWZmZWN0XS5zdG9wKGUsITAsITApOndbby5zaG93X2VmZmVjdF0uc3RvcChlKSxyKCksd1tvLnNob3dfZWZmZWN0XS5pbml0KGUsbikpOmwuc2hvd19vbiYmKG8uc2hvd19lZmZlY3QmJmwuc2hvd19lZmZlY3QmJndbby5zaG93X2VmZmVjdF0uc3RvcChlLCEwLCEwKSxyKCksd1tvLnNob3dfZWZmZWN0XS5pbml0KGUpKTpsLnNob3dfb24mJihyKCksd1tvLnNob3dfZWZmZWN0XS5zdGFydChlKSl9ZnVuY3Rpb24gbnQoZSx0LG4pe249e3Byb3BzOmUsb3B0aW9uTmFtZTpufTtyZXR1cm4gZS5hdHRhY2htZW50cy5pbmRleE9mKHQpPDAmJighdC5jb25mLmJpbmR8fHQuY29uZi5iaW5kKHQsbikpJiYoZS5hdHRhY2htZW50cy5wdXNoKHQpLHQuYm91bmRUYXJnZXRzLnB1c2gobiksMSl9ZnVuY3Rpb24gYXQobixhLGUpe3ZhciBpPW4uYXR0YWNobWVudHMuaW5kZXhPZihhKTstMTxpJiZuLmF0dGFjaG1lbnRzLnNwbGljZShpLDEpLGEuYm91bmRUYXJnZXRzLnNvbWUoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5wcm9wcz09PW4mJihhLmNvbmYudW5iaW5kJiZhLmNvbmYudW5iaW5kKGEsZSksaT10LCEwKX0pJiYoYS5ib3VuZFRhcmdldHMuc3BsaWNlKGksMSksZXx8emUoZnVuY3Rpb24oKXthLmJvdW5kVGFyZ2V0cy5sZW5ndGh8fG8oYSl9KSl9ZnVuY3Rpb24gaXQocyx1KXt2YXIgaSxuLGUsdCxhLG8sbCxyLGgscCxjLGQsZix5LG0sUz1zLm9wdGlvbnMsZz17fTtmdW5jdGlvbiBfKGUsdCxuLGEsaSl7dmFyIG89e307cmV0dXJuIG4/bnVsbCE9YT8oby5jb250YWluZXI9ZVtuXSxvLmtleT1hKTooby5jb250YWluZXI9ZSxvLmtleT1uKTooby5jb250YWluZXI9ZSxvLmtleT10KSxvLmRlZmF1bHQ9aSxvLmFjY2VwdHNBdXRvPW51bGw9PW8uZGVmYXVsdCxvfWZ1bmN0aW9uIHYoZSx0LG4sYSxpLG8sbCl7dmFyIHIscyx1LGw9XyhlLG4saSxvLGwpO3JldHVybiBudWxsIT10W25dJiYocz0odFtuXStcIlwiKS50b0xvd2VyQ2FzZSgpKSYmKGwuYWNjZXB0c0F1dG8mJnM9PT1EfHwodT1hW3NdKSkmJnUhPT1sLmNvbnRhaW5lcltsLmtleV0mJihsLmNvbnRhaW5lcltsLmtleV09dSxyPSEwKSxudWxsIT1sLmNvbnRhaW5lcltsLmtleV18fGwuYWNjZXB0c0F1dG98fChsLmNvbnRhaW5lcltsLmtleV09bC5kZWZhdWx0LHI9ITApLHJ9ZnVuY3Rpb24gRShlLHQsbixhLGksbyxsLHIscyl7dmFyIHUsaCxwLGMsbD1fKGUsbixpLG8sbCk7aWYoIWEpe2lmKG51bGw9PWwuZGVmYXVsdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGB0eXBlYDogXCIrbik7YT10eXBlb2YgbC5kZWZhdWx0fXJldHVybiBudWxsIT10W25dJiYobC5hY2NlcHRzQXV0byYmKHRbbl0rXCJcIikudG9Mb3dlckNhc2UoKT09PUR8fChwPWg9dFtuXSwoXCJudW1iZXJcIj09PShjPWEpP3BlKHApOnR5cGVvZiBwPT09YykmJihoPXMmJlwic3RyaW5nXCI9PT1hJiZoP2gudHJpbSgpOmgsMSkmJighcnx8cihoKSkpKSYmaCE9PWwuY29udGFpbmVyW2wua2V5XSYmKGwuY29udGFpbmVyW2wua2V5XT1oLHU9ITApLG51bGwhPWwuY29udGFpbmVyW2wua2V5XXx8bC5hY2NlcHRzQXV0b3x8KGwuY29udGFpbmVyW2wua2V5XT1sLmRlZmF1bHQsdT0hMCksdX1pZih1PXV8fHt9LFtcInN0YXJ0XCIsXCJlbmRcIl0uZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuPXVbZV0sYT0hMTtpZihuJiYoTWUobil8fChhPUkobixcImFuY2hvclwiKSkpJiZuIT09Uy5hbmNob3JTRVt0XSl7aWYoITEhPT1zLm9wdGlvbklzQXR0YWNoLmFuY2hvclNFW3RdJiZhdChzLF9lW1MuYW5jaG9yU0VbdF0uX2lkXSksYSYmIW50KHMsX2Vbbi5faWRdLGUpKXRocm93IG5ldyBFcnJvcihcIkNhbid0IGJpbmQgYXR0YWNobWVudFwiKTtTLmFuY2hvclNFW3RdPW4scy5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVt0XT1hLGk9Zy5wb3NpdGlvbj0hMH19KSwhUy5hbmNob3JTRVswXXx8IVMuYW5jaG9yU0VbMV18fFMuYW5jaG9yU0VbMF09PT1TLmFuY2hvclNFWzFdKXRocm93IG5ldyBFcnJvcihcImBzdGFydGAgYW5kIGBlbmRgIGFyZSByZXF1aXJlZC5cIik7ZnVuY3Rpb24geChlKXt2YXIgdD1hLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudE5TKGFlLFwibWFza1wiKSk7cmV0dXJuIHQuaWQ9ZSx0Lm1hc2tVbml0cy5iYXNlVmFsPVNWR1VuaXRUeXBlcy5TVkdfVU5JVF9UWVBFX1VTRVJTUEFDRU9OVVNFLFt0LngsdC55LHQud2lkdGgsdC5oZWlnaHRdLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYLDApfSksdH1mdW5jdGlvbiBiKGUpe3ZhciB0PWEuYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJtYXJrZXJcIikpO3JldHVybiB0LmlkPWUsdC5tYXJrZXJVbml0cy5iYXNlVmFsPVNWR01hcmtlckVsZW1lbnQuU1ZHX01BUktFUlVOSVRTX1NUUk9LRVdJRFRILHQudmlld0JveC5iYXNlVmFsfHx0LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIixcIjAgMCAwIDBcIiksdH1mdW5jdGlvbiBrKGUpe3JldHVybltlLndpZHRoLGUuaGVpZ2h0XS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFLDEwMCl9KSxlfWkmJihjPWZ1bmN0aW9uKGUsdCl7dmFyIG4sYTtpZighKGU9Q2UoZSkpfHwhKG49Q2UodCkpKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgZnJhbWVzLlwiKTtyZXR1cm4gZS5sZW5ndGgmJm4ubGVuZ3RoJiYoZS5yZXZlcnNlKCksbi5yZXZlcnNlKCksZS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiBuLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10JiYoYT1lLmNvbnRlbnRXaW5kb3csITApfSl9KSksYXx8d2luZG93fSghMSE9PXMub3B0aW9uSXNBdHRhY2guYW5jaG9yU0VbMF0/X2VbUy5hbmNob3JTRVswXS5faWRdLmVsZW1lbnQ6Uy5hbmNob3JTRVswXSwhMSE9PXMub3B0aW9uSXNBdHRhY2guYW5jaG9yU0VbMV0/X2VbUy5hbmNob3JTRVsxXS5faWRdLmVsZW1lbnQ6Uy5hbmNob3JTRVsxXSkpIT09cy5iYXNlV2luZG93JiYoZT1jLGY9KG49cykuYXBsU3RhdHMseT1lLmRvY3VtZW50LG09QytcIi1cIituLl9pZCxuLnBhdGhMaXN0PXt9LFllKGYsZGUpLE9iamVjdC5rZXlzKFopLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZStcIl9lbmFibGVkXCI7Zlt0XSYmKFpbZV0ucmVtb3ZlKG4pLGZbdF09ITEpfSksbi5iYXNlV2luZG93JiZuLnN2ZyYmbi5iYXNlV2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobi5zdmcpLFFlKG4uYmFzZVdpbmRvdz1lKSxuLmJvZHlPZmZzZXQ9cWUoZSksbi5zdmc9dD15LmNyZWF0ZUVsZW1lbnROUyhhZSxcInN2Z1wiKSx0LmNsYXNzTmFtZS5iYXNlVmFsPUMsdC52aWV3Qm94LmJhc2VWYWx8fHQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLFwiMCAwIDAgMFwiKSxuLmRlZnM9YT10LmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudE5TKGFlLFwiZGVmc1wiKSksbi5saW5lUGF0aD1sPWEuYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJwYXRoXCIpKSxsLmlkPXI9bStcIi1saW5lLXBhdGhcIixsLmNsYXNzTmFtZS5iYXNlVmFsPUMrXCItbGluZS1wYXRoXCIscmUmJihsLnN0eWxlLmZpbGw9XCJub25lXCIpLG4ubGluZVNoYXBlPWw9YS5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSksbC5pZD1oPW0rXCItbGluZS1zaGFwZVwiLGwuaHJlZi5iYXNlVmFsPVwiI1wiK3IsKG89YS5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcImdcIikpKS5pZD1wPW0rXCItY2Fwc1wiLG4uY2Fwc01hc2tBbmNob3JTRT1bMCwxXS5tYXAoZnVuY3Rpb24oKXt2YXIgZT1vLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudE5TKGFlLFwicGF0aFwiKSk7cmV0dXJuIGUuY2xhc3NOYW1lLmJhc2VWYWw9QytcIi1jYXBzLW1hc2stYW5jaG9yXCIsZX0pLG4ubGluZU1hc2tNYXJrZXJJZFNFPVttK1wiLWNhcHMtbWFzay1tYXJrZXItMFwiLG0rXCItY2Fwcy1tYXNrLW1hcmtlci0xXCJdLG4uY2Fwc01hc2tNYXJrZXJTRT1bMCwxXS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGIobi5saW5lTWFza01hcmtlcklkU0VbZV0pfSksbi5jYXBzTWFza01hcmtlclNoYXBlU0U9WzAsMV0ubWFwKGZ1bmN0aW9uKGUpe2U9bi5jYXBzTWFza01hcmtlclNFW2VdLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudE5TKGFlLFwidXNlXCIpKTtyZXR1cm4gZS5jbGFzc05hbWUuYmFzZVZhbD1DK1wiLWNhcHMtbWFzay1tYXJrZXItc2hhcGVcIixlfSksbi5jYXBzTWFza0xpbmU9bD1vLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudE5TKGFlLFwidXNlXCIpKSxsLmNsYXNzTmFtZS5iYXNlVmFsPUMrXCItY2Fwcy1tYXNrLWxpbmVcIixsLmhyZWYuYmFzZVZhbD1cIiNcIitoLG4ubWFza0JHUmVjdD1sPWsoYS5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInJlY3RcIikpKSxsLmlkPWM9bStcIi1tYXNrLWJnLXJlY3RcIixsLmNsYXNzTmFtZS5iYXNlVmFsPUMrXCItbWFzay1iZy1yZWN0XCIscmUmJihsLnN0eWxlLmZpbGw9XCJ3aGl0ZVwiKSxuLmxpbmVNYXNrPWsoeChuLmxpbmVNYXNrSWQ9bStcIi1saW5lLW1hc2tcIikpLG4ubGluZU1hc2tCRz1sPW4ubGluZU1hc2suYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJ1c2VcIikpLGwuaHJlZi5iYXNlVmFsPVwiI1wiK2Msbi5saW5lTWFza1NoYXBlPWw9bi5saW5lTWFzay5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSksbC5jbGFzc05hbWUuYmFzZVZhbD1DK1wiLWxpbmUtbWFzay1zaGFwZVwiLGwuaHJlZi5iYXNlVmFsPVwiI1wiK3IsbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLG4ubGluZU1hc2tDYXBzPWw9bi5saW5lTWFzay5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSksbC5ocmVmLmJhc2VWYWw9XCIjXCIrcCxuLmxpbmVPdXRsaW5lTWFzaz1rKHgoZT1tK1wiLWxpbmUtb3V0bGluZS1tYXNrXCIpKSwobD1uLmxpbmVPdXRsaW5lTWFzay5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSkpLmhyZWYuYmFzZVZhbD1cIiNcIitjLG4ubGluZU91dGxpbmVNYXNrU2hhcGU9bD1uLmxpbmVPdXRsaW5lTWFzay5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSksbC5jbGFzc05hbWUuYmFzZVZhbD1DK1wiLWxpbmUtb3V0bGluZS1tYXNrLXNoYXBlXCIsbC5ocmVmLmJhc2VWYWw9XCIjXCIrcixuLmxpbmVPdXRsaW5lTWFza0NhcHM9bD1uLmxpbmVPdXRsaW5lTWFzay5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSksbC5ocmVmLmJhc2VWYWw9XCIjXCIrcCxuLmZhY2U9dC5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcImdcIikpLG4ubGluZUZhY2U9bD1uLmZhY2UuYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJ1c2VcIikpLGwuaHJlZi5iYXNlVmFsPVwiI1wiK2gsbi5saW5lT3V0bGluZUZhY2U9bD1uLmZhY2UuYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJ1c2VcIikpLGwuaHJlZi5iYXNlVmFsPVwiI1wiK2gsbC5zdHlsZS5tYXNrPVwidXJsKCNcIitlK1wiKVwiLGwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixuLnBsdWdNYXNrSWRTRT1bbStcIi1wbHVnLW1hc2stMFwiLG0rXCItcGx1Zy1tYXNrLTFcIl0sbi5wbHVnTWFza1NFPVswLDFdLm1hcChmdW5jdGlvbihlKXtyZXR1cm4geChuLnBsdWdNYXNrSWRTRVtlXSl9KSxuLnBsdWdNYXNrU2hhcGVTRT1bMCwxXS5tYXAoZnVuY3Rpb24oZSl7ZT1uLnBsdWdNYXNrU0VbZV0uYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJ1c2VcIikpO3JldHVybiBlLmNsYXNzTmFtZS5iYXNlVmFsPUMrXCItcGx1Zy1tYXNrLXNoYXBlXCIsZX0pLGQ9W10sbi5wbHVnT3V0bGluZU1hc2tTRT1bMCwxXS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHgoZFtlXT1tK1wiLXBsdWctb3V0bGluZS1tYXNrLVwiK2UpfSksbi5wbHVnT3V0bGluZU1hc2tTaGFwZVNFPVswLDFdLm1hcChmdW5jdGlvbihlKXtlPW4ucGx1Z091dGxpbmVNYXNrU0VbZV0uYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJ1c2VcIikpO3JldHVybiBlLmNsYXNzTmFtZS5iYXNlVmFsPUMrXCItcGx1Zy1vdXRsaW5lLW1hc2stc2hhcGVcIixlfSksbi5wbHVnTWFya2VySWRTRT1bbStcIi1wbHVnLW1hcmtlci0wXCIsbStcIi1wbHVnLW1hcmtlci0xXCJdLG4ucGx1Z01hcmtlclNFPVswLDFdLm1hcChmdW5jdGlvbihlKXtlPWIobi5wbHVnTWFya2VySWRTRVtlXSk7cmV0dXJuIHJlJiYoZS5tYXJrZXJVbml0cy5iYXNlVmFsPVNWR01hcmtlckVsZW1lbnQuU1ZHX01BUktFUlVOSVRTX1VTRVJTUEFDRU9OVVNFKSxlfSksbi5wbHVnTWFya2VyU2hhcGVTRT1bMCwxXS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG4ucGx1Z01hcmtlclNFW2VdLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudE5TKGFlLFwiZ1wiKSl9KSxuLnBsdWdGYWNlU0U9WzAsMV0ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBuLnBsdWdNYXJrZXJTaGFwZVNFW2VdLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudE5TKGFlLFwidXNlXCIpKX0pLG4ucGx1Z091dGxpbmVGYWNlU0U9WzAsMV0ubWFwKGZ1bmN0aW9uKGUpe3ZhciB0PW4ucGx1Z01hcmtlclNoYXBlU0VbZV0uYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50TlMoYWUsXCJ1c2VcIikpO3JldHVybiB0LnN0eWxlLm1hc2s9XCJ1cmwoI1wiK2RbZV0rXCIpXCIsdC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHR9KSxuLnBsdWdzRmFjZT1sPW4uZmFjZS5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSksbC5jbGFzc05hbWUuYmFzZVZhbD1DK1wiLXBsdWdzLWZhY2VcIixsLmhyZWYuYmFzZVZhbD1cIiNcIitoLGwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixuLmN1clN0YXRzLnNob3dfaW5BbmltPyhuLmlzU2hvd249MSx3W2Yuc2hvd19lZmZlY3RdLnN0b3AobiwhMCkpOm4uaXNTaG93bnx8KHQuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiKSx5LmJvZHkuYXBwZW5kQ2hpbGQodCksWzAsMSwyXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0LGU9bi5vcHRpb25zLmxhYmVsU0VNW2VdO2UmJkkoZSxcImxhYmVsXCIpJiYodD1fZVtlLl9pZF0pLmNvbmYuaW5pdFN2ZyYmdC5jb25mLmluaXRTdmcodCxuKX0pLGcubGluZT1nLnBsdWc9Zy5saW5lT3V0bGluZT1nLnBsdWdPdXRsaW5lPWcuZmFjZXM9Zy5lZmZlY3Q9ITApLGcucG9zaXRpb249dihTLHUsXCJwYXRoXCIsUixudWxsLG51bGwsdWUucGF0aCl8fGcucG9zaXRpb24sZy5wb3NpdGlvbj12KFMsdSxcInN0YXJ0U29ja2V0XCIsVixcInNvY2tldFNFXCIsMCl8fGcucG9zaXRpb24sZy5wb3NpdGlvbj12KFMsdSxcImVuZFNvY2tldFwiLFYsXCJzb2NrZXRTRVwiLDEpfHxnLnBvc2l0aW9uLFt1LnN0YXJ0U29ja2V0R3Jhdml0eSx1LmVuZFNvY2tldEdyYXZpdHldLmZvckVhY2goZnVuY3Rpb24oZSx0KXt2YXIgbixhLGk9ITE7bnVsbCE9ZSYmKEFycmF5LmlzQXJyYXkoZSk/cGUoZVswXSkmJnBlKGVbMV0pJiYoaT1bZVswXSxlWzFdXSxBcnJheS5pc0FycmF5KFMuc29ja2V0R3Jhdml0eVNFW3RdKSYmKG49aSxhPVMuc29ja2V0R3Jhdml0eVNFW3RdLG4ubGVuZ3RoPT09YS5sZW5ndGgmJm4uZXZlcnkoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PWFbdF19KSkmJihpPSExKSk6KChlK1wiXCIpLnRvTG93ZXJDYXNlKCk9PT1EP2k9bnVsbDpwZShlKSYmMDw9ZSYmKGk9ZSksaT09PVMuc29ja2V0R3Jhdml0eVNFW3RdJiYoaT0hMSkpLCExIT09aSYmKFMuc29ja2V0R3Jhdml0eVNFW3RdPWksZy5wb3NpdGlvbj0hMCkpfSksZy5saW5lPUUoUyx1LFwiY29sb3JcIixudWxsLFwibGluZUNvbG9yXCIsbnVsbCx1ZS5saW5lQ29sb3IsbnVsbCwhMCl8fGcubGluZSxnLmxpbmU9RShTLHUsXCJzaXplXCIsbnVsbCxcImxpbmVTaXplXCIsbnVsbCx1ZS5saW5lU2l6ZSxmdW5jdGlvbihlKXtyZXR1cm4gMDxlfSl8fGcubGluZSxbXCJzdGFydFBsdWdcIixcImVuZFBsdWdcIl0uZm9yRWFjaChmdW5jdGlvbihlLHQpe2cucGx1Zz12KFMsdSxlLEYsXCJwbHVnU0VcIix0LHVlLnBsdWdTRVt0XSl8fGcucGx1ZyxnLnBsdWc9RShTLHUsZStcIkNvbG9yXCIsXCJzdHJpbmdcIixcInBsdWdDb2xvclNFXCIsdCxudWxsLG51bGwsITApfHxnLnBsdWcsZy5wbHVnPUUoUyx1LGUrXCJTaXplXCIsbnVsbCxcInBsdWdTaXplU0VcIix0LHVlLnBsdWdTaXplU0VbdF0sZnVuY3Rpb24oZSl7cmV0dXJuIDA8ZX0pfHxnLnBsdWd9KSxnLmxpbmVPdXRsaW5lPUUoUyx1LFwib3V0bGluZVwiLG51bGwsXCJsaW5lT3V0bGluZUVuYWJsZWRcIixudWxsLHVlLmxpbmVPdXRsaW5lRW5hYmxlZCl8fGcubGluZU91dGxpbmUsZy5saW5lT3V0bGluZT1FKFMsdSxcIm91dGxpbmVDb2xvclwiLG51bGwsXCJsaW5lT3V0bGluZUNvbG9yXCIsbnVsbCx1ZS5saW5lT3V0bGluZUNvbG9yLG51bGwsITApfHxnLmxpbmVPdXRsaW5lLGcubGluZU91dGxpbmU9RShTLHUsXCJvdXRsaW5lU2l6ZVwiLG51bGwsXCJsaW5lT3V0bGluZVNpemVcIixudWxsLHVlLmxpbmVPdXRsaW5lU2l6ZSxmdW5jdGlvbihlKXtyZXR1cm4gMDxlJiZlPD0uNDh9KXx8Zy5saW5lT3V0bGluZSxbXCJzdGFydFBsdWdPdXRsaW5lXCIsXCJlbmRQbHVnT3V0bGluZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7Zy5wbHVnT3V0bGluZT1FKFMsdSxlLG51bGwsXCJwbHVnT3V0bGluZUVuYWJsZWRTRVwiLHQsdWUucGx1Z091dGxpbmVFbmFibGVkU0VbdF0pfHxnLnBsdWdPdXRsaW5lLGcucGx1Z091dGxpbmU9RShTLHUsZStcIkNvbG9yXCIsXCJzdHJpbmdcIixcInBsdWdPdXRsaW5lQ29sb3JTRVwiLHQsbnVsbCxudWxsLCEwKXx8Zy5wbHVnT3V0bGluZSxnLnBsdWdPdXRsaW5lPUUoUyx1LGUrXCJTaXplXCIsbnVsbCxcInBsdWdPdXRsaW5lU2l6ZVNFXCIsdCx1ZS5wbHVnT3V0bGluZVNpemVTRVt0XSxmdW5jdGlvbihlKXtyZXR1cm4gMTw9ZX0pfHxnLnBsdWdPdXRsaW5lfSksW1wic3RhcnRMYWJlbFwiLFwiZW5kTGFiZWxcIixcIm1pZGRsZUxhYmVsXCJdLmZvckVhY2goZnVuY3Rpb24oZSx0KXt2YXIgbixhLGksbz11W2VdLGw9Uy5sYWJlbFNFTVt0XSYmIXMub3B0aW9uSXNBdHRhY2gubGFiZWxTRU1bdF0/X2VbUy5sYWJlbFNFTVt0XS5faWRdLnRleHQ6Uy5sYWJlbFNFTVt0XSxyPSExO2lmKChuPVwic3RyaW5nXCI9PXR5cGVvZiBvKSYmKG89by50cmltKCkpLChufHxvJiYocj1JKG8sXCJsYWJlbFwiKSkpJiZvIT09bCl7aWYoUy5sYWJlbFNFTVt0XSYmKGF0KHMsX2VbUy5sYWJlbFNFTVt0XS5faWRdKSxTLmxhYmVsU0VNW3RdPVwiXCIpLG8pe2lmKHI/KGE9X2VbKGk9bykuX2lkXSkuYm91bmRUYXJnZXRzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbihlKXthLmNvbmYucmVtb3ZlT3B0aW9uKGEsZSl9KTppPW5ldyBNKE8uY2FwdGlvbkxhYmVsLFtvXSksIW50KHMsX2VbaS5faWRdLGUpKXRocm93IG5ldyBFcnJvcihcIkNhbid0IGJpbmQgYXR0YWNobWVudFwiKTtTLmxhYmVsU0VNW3RdPWl9cy5vcHRpb25Jc0F0dGFjaC5sYWJlbFNFTVt0XT1yfX0pLE9iamVjdC5rZXlzKFopLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGUsdCxvPVpbYV0sbj1hK1wiX2VuYWJsZWRcIixpPWErXCJfb3B0aW9uc1wiO2Z1bmN0aW9uIGwoYSl7dmFyIGk9e307cmV0dXJuIG8ub3B0aW9uc0NvbmYuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1lWzBdLG49ZVszXTtudWxsPT1lWzRdfHxpW25dfHwoaVtuXT1bXSksKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpcImlkXCI9PT10P3Y6RSkuYXBwbHkobnVsbCxbaSxhXS5jb25jYXQoZS5zbGljZSgxKSkpfSksaX1mdW5jdGlvbiByKGUpe3ZhciB0LG49YStcIl9hbmltT3B0aW9uc1wiO3JldHVybiBlLmhhc093blByb3BlcnR5KFwiYW5pbWF0aW9uXCIpP2hlKGUuYW5pbWF0aW9uKT90PXMuY3VyU3RhdHNbbl09ZXQoZS5hbmltYXRpb24sby5kZWZhdWx0QW5pbU9wdGlvbnMpOih0PSEhZS5hbmltYXRpb24scy5jdXJTdGF0c1tuXT10P2V0KHt9LG8uZGVmYXVsdEFuaW1PcHRpb25zKTpudWxsKToodD0hIW8uZGVmYXVsdEVuYWJsZWQscy5jdXJTdGF0c1tuXT10P2V0KHt9LG8uZGVmYXVsdEFuaW1PcHRpb25zKTpudWxsKSx0fXUuaGFzT3duUHJvcGVydHkoYSkmJihlPXVbYV0saGUoZSk/KHMuY3VyU3RhdHNbbl09ITAsdD1zLmN1clN0YXRzW2ldPWwoZSksby5hbmltJiYocy5jdXJTdGF0c1tpXS5hbmltYXRpb249cihlKSkpOih0PXMuY3VyU3RhdHNbbl09ISFlKSYmKHMuY3VyU3RhdHNbaV09bCh7fSksby5hbmltJiYocy5jdXJTdGF0c1tpXS5hbmltYXRpb249cih7fSkpKSxrZSh0LFNbYV0pJiYoU1thXT10LGcuZWZmZWN0PSEwKSl9KSwkZShzLGcpfWZ1bmN0aW9uIG90KGUsdCxuKXt2YXIgYT17b3B0aW9uczp7YW5jaG9yU0U6W10sc29ja2V0U0U6W10sc29ja2V0R3Jhdml0eVNFOltdLHBsdWdTRTpbXSxwbHVnQ29sb3JTRTpbXSxwbHVnU2l6ZVNFOltdLHBsdWdPdXRsaW5lRW5hYmxlZFNFOltdLHBsdWdPdXRsaW5lQ29sb3JTRTpbXSxwbHVnT3V0bGluZVNpemVTRTpbXSxsYWJlbFNFTTpbXCJcIixcIlwiLFwiXCJdfSxvcHRpb25Jc0F0dGFjaDp7YW5jaG9yU0U6WyExLCExXSxsYWJlbFNFTTpbITEsITEsITFdfSxjdXJTdGF0czp7fSxhcGxTdGF0czp7fSxhdHRhY2htZW50czpbXSxldmVudHM6e30scmVmbG93VGFyZ2V0czpbXX07WWUoYS5jdXJTdGF0cyxkZSksWWUoYS5hcGxTdGF0cyxkZSksT2JqZWN0LmtleXMoWikuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1aW2VdLnN0YXRzO1llKGEuY3VyU3RhdHMsdCksWWUoYS5hcGxTdGF0cyx0KSxhLm9wdGlvbnNbZV09ITF9KSxZZShhLmN1clN0YXRzLGZlKSxZZShhLmFwbFN0YXRzLGZlKSxhLmN1clN0YXRzLnNob3dfZWZmZWN0PXllLGEuY3VyU3RhdHMuc2hvd19hbmltT3B0aW9ucz13ZSh3W3llXS5kZWZhdWx0QW5pbU9wdGlvbnMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX2lkXCIse3ZhbHVlOisrZ2V9KSxhLl9pZD10aGlzLl9pZCxTZVt0aGlzLl9pZF09YSwxPT09YXJndW1lbnRzLmxlbmd0aCYmKG49ZSxlPW51bGwpLG49bnx8e30sKGV8fHQpJiYobj13ZShuKSxlJiYobi5zdGFydD1lKSx0JiYobi5lbmQ9dCkpLGEuaXNTaG93bj1hLmFwbFN0YXRzLnNob3dfb249IW4uaGlkZSx0aGlzLnNldE9wdGlvbnMobil9ZnVuY3Rpb24gbHQobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O3Rbbl09ZSx0aGlzLnNldE9wdGlvbnModCl9fWZ1bmN0aW9uIHJ0KGUsdCl7dmFyIG4sYT17Y29uZjplLGN1clN0YXRzOnt9LGFwbFN0YXRzOnt9LGJvdW5kVGFyZ2V0czpbXX0saT17fTtlLmFyZ09wdGlvbnMuZXZlcnkoZnVuY3Rpb24oZSl7cmV0dXJuISghdC5sZW5ndGh8fChcInN0cmluZ1wiPT10eXBlb2YgZS50eXBlP3R5cGVvZiB0WzBdIT09ZS50eXBlOlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUudHlwZXx8IWUudHlwZSh0WzBdKSkpJiYoaVtlLm9wdGlvbk5hbWVdPXQuc2hpZnQoKSwhMCl9KSxuPXQubGVuZ3RoJiZoZSh0WzBdKT93ZSh0WzBdKTp7fSxPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZV09aVtlXX0pLGUuc3RhdHMmJihZZShhLmN1clN0YXRzLGUuc3RhdHMpLFllKGEuYXBsU3RhdHMsZS5zdGF0cykpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX2lkXCIse3ZhbHVlOisrdmV9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImlzUmVtb3ZlZFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4hX2VbdGhpcy5faWRdfX0pLGEuX2lkPXRoaXMuX2lkLGUuaW5pdCYmIWUuaW5pdChhLG4pfHwoX2VbdGhpcy5faWRdPWEpfXJldHVybiBaPXtkYXNoOntzdGF0czp7ZGFzaF9sZW46e30sZGFzaF9nYXA6e30sZGFzaF9tYXhPZmZzZXQ6e319LGFuaW06ITAsZGVmYXVsdEFuaW1PcHRpb25zOntkdXJhdGlvbjoxZTMsdGltaW5nOlwibGluZWFyXCJ9LG9wdGlvbnNDb25mOltbXCJ0eXBlXCIsXCJsZW5cIixcIm51bWJlclwiLG51bGwsbnVsbCxudWxsLGZ1bmN0aW9uKGUpe3JldHVybiAwPGV9XSxbXCJ0eXBlXCIsXCJnYXBcIixcIm51bWJlclwiLG51bGwsbnVsbCxudWxsLGZ1bmN0aW9uKGUpe3JldHVybiAwPGV9XV0saW5pdDpmdW5jdGlvbihlKXtHZShlLFwiYXBsX2xpbmVfc3Ryb2tlV2lkdGhcIixaLmRhc2gudXBkYXRlKSxlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQ9MCxaLmRhc2gudXBkYXRlKGUpfSxyZW1vdmU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jdXJTdGF0cztEZShlLFwiYXBsX2xpbmVfc3Ryb2tlV2lkdGhcIixaLmRhc2gudXBkYXRlKSx0LmRhc2hfYW5pbUlkJiYoZy5yZW1vdmUodC5kYXNoX2FuaW1JZCksdC5kYXNoX2FuaW1JZD1udWxsKSxlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hhcnJheT1cIm5vbmVcIixlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQ9MCxZZShlLmFwbFN0YXRzLFouZGFzaC5zdGF0cyl9LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgZSxuPXQuY3VyU3RhdHMsYT10LmFwbFN0YXRzLGk9YS5kYXNoX29wdGlvbnMsbz0hMTtuLmRhc2hfbGVuPWkubGVufHwyKmEubGluZV9zdHJva2VXaWR0aCxuLmRhc2hfZ2FwPWkuZ2FwfHxhLmxpbmVfc3Ryb2tlV2lkdGgsbi5kYXNoX21heE9mZnNldD1uLmRhc2hfbGVuK24uZGFzaF9nYXAsbz1YZSh0LGEsXCJkYXNoX2xlblwiLG4uZGFzaF9sZW4pfHxvLChvPVhlKHQsYSxcImRhc2hfZ2FwXCIsbi5kYXNoX2dhcCl8fG8pJiYodC5saW5lRmFjZS5zdHlsZS5zdHJva2VEYXNoYXJyYXk9YS5kYXNoX2xlbitcIixcIithLmRhc2hfZ2FwKSxuLmRhc2hfYW5pbU9wdGlvbnM/KG89WGUodCxhLFwiZGFzaF9tYXhPZmZzZXRcIixuLmRhc2hfbWF4T2Zmc2V0KSxhLmRhc2hfYW5pbU9wdGlvbnMmJihvfHxrZShuLmRhc2hfYW5pbU9wdGlvbnMsYS5kYXNoX2FuaW1PcHRpb25zKSkmJihuLmRhc2hfYW5pbUlkJiYoZT1nLnN0b3Aobi5kYXNoX2FuaW1JZCksZy5yZW1vdmUobi5kYXNoX2FuaW1JZCkpLGEuZGFzaF9hbmltT3B0aW9ucz1udWxsKSxhLmRhc2hfYW5pbU9wdGlvbnN8fChuLmRhc2hfYW5pbUlkPWcuYWRkKGZ1bmN0aW9uKGUpe3JldHVybigxLWUpKmEuZGFzaF9tYXhPZmZzZXQrXCJweFwifSxmdW5jdGlvbihlKXt0LmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQ9ZX0sbi5kYXNoX2FuaW1PcHRpb25zLmR1cmF0aW9uLDAsbi5kYXNoX2FuaW1PcHRpb25zLnRpbWluZywhMSxlKSxhLmRhc2hfYW5pbU9wdGlvbnM9d2Uobi5kYXNoX2FuaW1PcHRpb25zKSkpOmEuZGFzaF9hbmltT3B0aW9ucyYmKG4uZGFzaF9hbmltSWQmJihnLnJlbW92ZShuLmRhc2hfYW5pbUlkKSxuLmRhc2hfYW5pbUlkPW51bGwpLHQubGluZUZhY2Uuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldD0wLGEuZGFzaF9hbmltT3B0aW9ucz1udWxsKX19LGdyYWRpZW50OntzdGF0czp7Z3JhZGllbnRfY29sb3JTRTp7aGFzU0U6ITB9LGdyYWRpZW50X3BvaW50U0U6e2hhc1NFOiEwLGhhc1Byb3BzOiEwfX0sb3B0aW9uc0NvbmY6W1tcInR5cGVcIixcInN0YXJ0Q29sb3JcIixcInN0cmluZ1wiLFwiY29sb3JTRVwiLDAsbnVsbCxudWxsLCEwXSxbXCJ0eXBlXCIsXCJlbmRDb2xvclwiLFwic3RyaW5nXCIsXCJjb2xvclNFXCIsMSxudWxsLG51bGwsITBdXSxpbml0OmZ1bmN0aW9uKGUpe3ZhciBhPWUuYmFzZVdpbmRvdy5kb2N1bWVudCx0PWUuZGVmcyxuPUMrXCItXCIrZS5faWQrXCItZ3JhZGllbnRcIjtlLmVmY19ncmFkaWVudF9ncmFkaWVudD10PXQuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50TlMoYWUsXCJsaW5lYXJHcmFkaWVudFwiKSksdC5pZD1uLHQuZ3JhZGllbnRVbml0cy5iYXNlVmFsPVNWR1VuaXRUeXBlcy5TVkdfVU5JVF9UWVBFX1VTRVJTUEFDRU9OVVNFLFt0LngxLHQueTEsdC54Mix0LnkyXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwwKX0pLGUuZWZjX2dyYWRpZW50X3N0b3BTRT1bMCwxXS5tYXAoZnVuY3Rpb24odCl7dmFyIG49ZS5lZmNfZ3JhZGllbnRfZ3JhZGllbnQuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50TlMoYWUsXCJzdG9wXCIpKTt0cnl7bi5vZmZzZXQuYmFzZVZhbD10fWNhdGNoKGUpe2lmKGUuY29kZSE9PURPTUV4Y2VwdGlvbi5OT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIpdGhyb3cgZTtuLnNldEF0dHJpYnV0ZShcIm9mZnNldFwiLHQpfXJldHVybiBufSksR2UoZSxcImN1cl9wbHVnX2NvbG9yU0VcIixaLmdyYWRpZW50LnVwZGF0ZSksR2UoZSxcImFwbF9wYXRoXCIsWi5ncmFkaWVudC51cGRhdGUpLGUuY3VyU3RhdHMubGluZV9hbHRDb2xvcj0hMCxlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZT1cInVybCgjXCIrbitcIilcIixaLmdyYWRpZW50LnVwZGF0ZShlKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe2UuZWZjX2dyYWRpZW50X2dyYWRpZW50JiYoZS5kZWZzLnJlbW92ZUNoaWxkKGUuZWZjX2dyYWRpZW50X2dyYWRpZW50KSxlLmVmY19ncmFkaWVudF9ncmFkaWVudD1lLmVmY19ncmFkaWVudF9zdG9wU0U9bnVsbCksRGUoZSxcImN1cl9wbHVnX2NvbG9yU0VcIixaLmdyYWRpZW50LnVwZGF0ZSksRGUoZSxcImFwbF9wYXRoXCIsWi5ncmFkaWVudC51cGRhdGUpLGUuY3VyU3RhdHMubGluZV9hbHRDb2xvcj0hMSxlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZT1lLmN1clN0YXRzLmxpbmVfY29sb3IsWWUoZS5hcGxTdGF0cyxaLmdyYWRpZW50LnN0YXRzKX0sdXBkYXRlOmZ1bmN0aW9uKGEpe3ZhciBlLGk9YS5jdXJTdGF0cyxvPWEuYXBsU3RhdHMsdD1vLmdyYWRpZW50X29wdGlvbnMsbj1hLnBhdGhMaXN0LmFuaW1WYWx8fGEucGF0aExpc3QuYmFzZVZhbDtbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuZ3JhZGllbnRfY29sb3JTRVtlXT10LmNvbG9yU0VbZV18fGkucGx1Z19jb2xvclNFW2VdfSksZT1uWzBdWzBdLGkuZ3JhZGllbnRfcG9pbnRTRVswXT17eDplLngseTplLnl9LGU9KG49bltuLmxlbmd0aC0xXSlbbi5sZW5ndGgtMV0saS5ncmFkaWVudF9wb2ludFNFWzFdPXt4OmUueCx5OmUueX0sWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgbjtYZShhLG8uZ3JhZGllbnRfY29sb3JTRSx0LG49aS5ncmFkaWVudF9jb2xvclNFW3RdKSYmKHJlPyhuPU9lKG4pLGEuZWZjX2dyYWRpZW50X3N0b3BTRVt0XS5zdHlsZS5zdG9wQ29sb3I9blsxXSxhLmVmY19ncmFkaWVudF9zdG9wU0VbdF0uc3R5bGUuc3RvcE9wYWNpdHk9blswXSk6YS5lZmNfZ3JhZGllbnRfc3RvcFNFW3RdLnN0eWxlLnN0b3BDb2xvcj1uKSxbXCJ4XCIsXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7KG49aS5ncmFkaWVudF9wb2ludFNFW3RdW2VdKSE9PW8uZ3JhZGllbnRfcG9pbnRTRVt0XVtlXSYmKGEuZWZjX2dyYWRpZW50X2dyYWRpZW50W2UrKHQrMSldLmJhc2VWYWwudmFsdWU9by5ncmFkaWVudF9wb2ludFNFW3RdW2VdPW4pfSl9KX19LGRyb3BTaGFkb3c6e3N0YXRzOntkcm9wU2hhZG93X2R4Ont9LGRyb3BTaGFkb3dfZHk6e30sZHJvcFNoYWRvd19ibHVyOnt9LGRyb3BTaGFkb3dfY29sb3I6e30sZHJvcFNoYWRvd19vcGFjaXR5Ont9LGRyb3BTaGFkb3dfeDp7fSxkcm9wU2hhZG93X3k6e319LG9wdGlvbnNDb25mOltbXCJ0eXBlXCIsXCJkeFwiLG51bGwsbnVsbCxudWxsLDJdLFtcInR5cGVcIixcImR5XCIsbnVsbCxudWxsLG51bGwsNF0sW1widHlwZVwiLFwiYmx1clwiLG51bGwsbnVsbCxudWxsLDMsZnVuY3Rpb24oZSl7cmV0dXJuIDA8PWV9XSxbXCJ0eXBlXCIsXCJjb2xvclwiLG51bGwsbnVsbCxudWxsLFwiIzAwMFwiLG51bGwsITBdLFtcInR5cGVcIixcIm9wYWNpdHlcIixudWxsLG51bGwsbnVsbCwuOCxmdW5jdGlvbihlKXtyZXR1cm4gMDw9ZSYmZTw9MX1dXSxpbml0OmZ1bmN0aW9uKHQpe3ZhciBlLG4sYSxpLG89dC5iYXNlV2luZG93LmRvY3VtZW50LGw9dC5kZWZzLHI9QytcIi1cIit0Ll9pZCtcIi1kcm9wU2hhZG93XCIscz0oZT1vLG49cixpPXt9LFwiYm9vbGVhblwiIT10eXBlb2YgdSYmKHU9ISF3aW5kb3cuU1ZHRkVEcm9wU2hhZG93RWxlbWVudCYmIXJlKSxpLmVsbXNBcHBlbmQ9W2kuZWxtRmlsdGVyPW89ZS5jcmVhdGVFbGVtZW50TlMoYWUsXCJmaWx0ZXJcIildLG8uZmlsdGVyVW5pdHMuYmFzZVZhbD1TVkdVbml0VHlwZXMuU1ZHX1VOSVRfVFlQRV9VU0VSU1BBQ0VPTlVTRSxvLnguYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwwKSxvLnkuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwwKSxvLndpZHRoLmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUEVSQ0VOVEFHRSwxMDApLG8uaGVpZ2h0LmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUEVSQ0VOVEFHRSwxMDApLG8uaWQ9bix1PyhpLmVsbU9mZnNldD1pLmVsbUJsdXI9YT1vLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGFlLFwiZmVEcm9wU2hhZG93XCIpKSxpLnN0eWxlRmxvb2Q9YS5zdHlsZSk6KGkuZWxtQmx1cj1vLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGFlLFwiZmVHYXVzc2lhbkJsdXJcIikpLGkuZWxtT2Zmc2V0PWE9by5hcHBlbmRDaGlsZChlLmNyZWF0ZUVsZW1lbnROUyhhZSxcImZlT2Zmc2V0XCIpKSxhLnJlc3VsdC5iYXNlVmFsPVwib2Zmc2V0Ymx1clwiLGE9by5hcHBlbmRDaGlsZChlLmNyZWF0ZUVsZW1lbnROUyhhZSxcImZlRmxvb2RcIikpLGkuc3R5bGVGbG9vZD1hLnN0eWxlLChhPW8uYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYWUsXCJmZUNvbXBvc2l0ZVwiKSkpLmluMi5iYXNlVmFsPVwib2Zmc2V0Ymx1clwiLGEub3BlcmF0b3IuYmFzZVZhbD1TVkdGRUNvbXBvc2l0ZUVsZW1lbnQuU1ZHX0ZFQ09NUE9TSVRFX09QRVJBVE9SX0lOLChhPW8uYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYWUsXCJmZU1lcmdlXCIpKSkuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYWUsXCJmZU1lcmdlTm9kZVwiKSksYS5hcHBlbmRDaGlsZChlLmNyZWF0ZUVsZW1lbnROUyhhZSxcImZlTWVyZ2VOb2RlXCIpKS5pbjEuYmFzZVZhbD1cIlNvdXJjZUdyYXBoaWNcIiksaSk7W1wiZWxtRmlsdGVyXCIsXCJlbG1PZmZzZXRcIixcImVsbUJsdXJcIixcInN0eWxlRmxvb2RcIixcImVsbXNBcHBlbmRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt0W1wiZWZjX2Ryb3BTaGFkb3dfXCIrZV09c1tlXX0pLHMuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2wuYXBwZW5kQ2hpbGQoZSl9KSx0LmZhY2Uuc2V0QXR0cmlidXRlKFwiZmlsdGVyXCIsXCJ1cmwoI1wiK3IrXCIpXCIpLEdlKHQsXCJuZXdfZWRnZTR2aWV3Qm94XCIsWi5kcm9wU2hhZG93LmFkanVzdEVkZ2UpLFouZHJvcFNoYWRvdy51cGRhdGUodCl9LHJlbW92ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmRlZnM7ZS5lZmNfZHJvcFNoYWRvd19lbG1zQXBwZW5kJiYoZS5lZmNfZHJvcFNoYWRvd19lbG1zQXBwZW5kLmZvckVhY2goZnVuY3Rpb24oZSl7dC5yZW1vdmVDaGlsZChlKX0pLGUuZWZjX2Ryb3BTaGFkb3dfZWxtRmlsdGVyPWUuZWZjX2Ryb3BTaGFkb3dfZWxtT2Zmc2V0PWUuZWZjX2Ryb3BTaGFkb3dfZWxtQmx1cj1lLmVmY19kcm9wU2hhZG93X3N0eWxlRmxvb2Q9ZS5lZmNfZHJvcFNoYWRvd19lbG1zQXBwZW5kPW51bGwpLERlKGUsXCJuZXdfZWRnZTR2aWV3Qm94XCIsWi5kcm9wU2hhZG93LmFkanVzdEVkZ2UpLCRlKGUse30pLGUuZmFjZS5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksWWUoZS5hcGxTdGF0cyxaLmRyb3BTaGFkb3cuc3RhdHMpfSx1cGRhdGU6ZnVuY3Rpb24oZSl7dmFyIHQsbixhPWUuY3VyU3RhdHMsaT1lLmFwbFN0YXRzLG89aS5kcm9wU2hhZG93X29wdGlvbnM7YS5kcm9wU2hhZG93X2R4PXQ9by5keCxYZShlLGksXCJkcm9wU2hhZG93X2R4XCIsdCkmJihlLmVmY19kcm9wU2hhZG93X2VsbU9mZnNldC5keC5iYXNlVmFsPXQsbj0hMCksYS5kcm9wU2hhZG93X2R5PXQ9by5keSxYZShlLGksXCJkcm9wU2hhZG93X2R5XCIsdCkmJihlLmVmY19kcm9wU2hhZG93X2VsbU9mZnNldC5keS5iYXNlVmFsPXQsbj0hMCksYS5kcm9wU2hhZG93X2JsdXI9dD1vLmJsdXIsWGUoZSxpLFwiZHJvcFNoYWRvd19ibHVyXCIsdCkmJihlLmVmY19kcm9wU2hhZG93X2VsbUJsdXIuc2V0U3RkRGV2aWF0aW9uKHQsdCksbj0hMCksbiYmJGUoZSx7fSksYS5kcm9wU2hhZG93X2NvbG9yPXQ9by5jb2xvcixYZShlLGksXCJkcm9wU2hhZG93X2NvbG9yXCIsdCkmJihlLmVmY19kcm9wU2hhZG93X3N0eWxlRmxvb2QuZmxvb2RDb2xvcj10KSxhLmRyb3BTaGFkb3dfb3BhY2l0eT10PW8ub3BhY2l0eSxYZShlLGksXCJkcm9wU2hhZG93X29wYWNpdHlcIix0KSYmKGUuZWZjX2Ryb3BTaGFkb3dfc3R5bGVGbG9vZC5mbG9vZE9wYWNpdHk9dCl9LGFkanVzdEVkZ2U6ZnVuY3Rpb24oYSxpKXt2YXIgZSxvPWEuY3VyU3RhdHMsbD1hLmFwbFN0YXRzO251bGwhPW8uZHJvcFNoYWRvd19keCYmKGU9MypvLmRyb3BTaGFkb3dfYmx1ciwoZT17eDE6aS54MS1lK28uZHJvcFNoYWRvd19keCx5MTppLnkxLWUrby5kcm9wU2hhZG93X2R5LHgyOmkueDIrZStvLmRyb3BTaGFkb3dfZHgseTI6aS55MitlK28uZHJvcFNoYWRvd19keX0pLngxPGkueDEmJihpLngxPWUueDEpLGUueTE8aS55MSYmKGkueTE9ZS55MSksZS54Mj5pLngyJiYoaS54Mj1lLngyKSxlLnkyPmkueTImJihpLnkyPWUueTIpLFtcInhcIixcInlcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdCxuPVwiZHJvcFNoYWRvd19cIitlO29bbl09dD1pW2UrXCIxXCJdLFhlKGEsbCxuLHQpJiYoYS5lZmNfZHJvcFNoYWRvd19lbG1GaWx0ZXJbZV0uYmFzZVZhbC52YWx1ZT10KX0pKX19fSxPYmplY3Qua2V5cyhaKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PVpbZV0sbj10LnN0YXRzO25bZStcIl9lbmFibGVkXCJdPXtpbmlWYWx1ZTohMX0sbltlK1wiX29wdGlvbnNcIl09e2hhc1Byb3BzOiEwfSx0LmFuaW0mJihuW2UrXCJfYW5pbU9wdGlvbnNcIl09e30sbltlK1wiX2FuaW1JZFwiXT17fSl9KSx3PXtub25lOntkZWZhdWx0QW5pbU9wdGlvbnM6e30saW5pdDpmdW5jdGlvbihlLHQpe3ZhciBuPWUuY3VyU3RhdHM7bi5zaG93X2FuaW1JZCYmKGcucmVtb3ZlKG4uc2hvd19hbmltSWQpLG4uc2hvd19hbmltSWQ9bnVsbCksdy5ub25lLnN0YXJ0KGUsdCl9LHN0YXJ0OmZ1bmN0aW9uKGUsdCl7dy5ub25lLnN0b3AoZSwhMCl9LHN0b3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciBhPWUuY3VyU3RhdHM7cmV0dXJuIG49bnVsbCE9bj9uOmUuYXBsU3RhdHMuc2hvd19vbixhLnNob3dfaW5BbmltPSExLHQmJkplKGUsbiksbj8xOjB9fSxmYWRlOntkZWZhdWx0QW5pbU9wdGlvbnM6e2R1cmF0aW9uOjMwMCx0aW1pbmc6XCJsaW5lYXJcIn0saW5pdDpmdW5jdGlvbihuLGUpe3ZhciB0PW4uY3VyU3RhdHMsYT1uLmFwbFN0YXRzO3Quc2hvd19hbmltSWQmJmcucmVtb3ZlKHQuc2hvd19hbmltSWQpLHQuc2hvd19hbmltSWQ9Zy5hZGQoZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGZ1bmN0aW9uKGUsdCl7dD93LmZhZGUuc3RvcChuLCEwKToobi5zdmcuc3R5bGUub3BhY2l0eT1lK1wiXCIsaWUmJihqZShuLG4uc3ZnKSxIZShuKSkpfSxhLnNob3dfYW5pbU9wdGlvbnMuZHVyYXRpb24sMSxhLnNob3dfYW5pbU9wdGlvbnMudGltaW5nLG51bGwsITEpLHcuZmFkZS5zdGFydChuLGUpfSxzdGFydDpmdW5jdGlvbihlLHQpe3ZhciBuLGE9ZS5jdXJTdGF0czthLnNob3dfaW5BbmltJiYobj1nLnN0b3AoYS5zaG93X2FuaW1JZCkpLEplKGUsMSksYS5zaG93X2luQW5pbT0hMCxnLnN0YXJ0KGEuc2hvd19hbmltSWQsIWUuYXBsU3RhdHMuc2hvd19vbixudWxsIT10P3Q6bil9LHN0b3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciBhLGk9ZS5jdXJTdGF0cztyZXR1cm4gbj1udWxsIT1uP246ZS5hcGxTdGF0cy5zaG93X29uLGE9aS5zaG93X2luQW5pbT9nLnN0b3AoaS5zaG93X2FuaW1JZCk6bj8xOjAsaS5zaG93X2luQW5pbT0hMSx0JiYoZS5zdmcuc3R5bGUub3BhY2l0eT1uP1wiXCI6XCIwXCIsSmUoZSxuKSksYX19LGRyYXc6e2RlZmF1bHRBbmltT3B0aW9uczp7ZHVyYXRpb246NTAwLHRpbWluZzpbLjU4LDAsLjQyLDFdfSxpbml0OmZ1bmN0aW9uKG4sZSl7dmFyIHQ9bi5jdXJTdGF0cyxhPW4uYXBsU3RhdHMsbz1uLnBhdGhMaXN0LmJhc2VWYWwsaT1SZShvKSxsPWkuc2Vnc0xlbixyPWkubGVuQWxsO3Quc2hvd19hbmltSWQmJmcucmVtb3ZlKHQuc2hvd19hbmltSWQpLHQuc2hvd19hbmltSWQ9Zy5hZGQoZnVuY3Rpb24oZSl7dmFyIHQsbixhLGk9LTE7aWYoMD09PWUpbj1bW29bMF1bMF0sb1swXVswXV1dO2Vsc2UgaWYoMT09PWUpbj1vO2Vsc2V7Zm9yKHQ9ciplLG49W107dD49bFsrK2ldOyluLnB1c2gob1tpXSksdC09bFtpXTt0JiYoMj09PShhPW9baV0pLmxlbmd0aD9uLnB1c2goW2FbMF0sVmUoYVswXSxhWzFdLHQvbFtpXSldKTooZT1OZShhWzBdLGFbMV0sYVsyXSxhWzNdLFdlKGFbMF0sYVsxXSxhWzJdLGFbM10sdCkpLG4ucHVzaChbYVswXSxlLmZyb21QMSxlLmZyb21QMixlXSkpKX1yZXR1cm4gbn0sZnVuY3Rpb24oZSx0KXt0P3cuZHJhdy5zdG9wKG4sITApOihuLnBhdGhMaXN0LmFuaW1WYWw9ZSwkZShuLHtwYXRoOiEwfSkpfSxhLnNob3dfYW5pbU9wdGlvbnMuZHVyYXRpb24sMSxhLnNob3dfYW5pbU9wdGlvbnMudGltaW5nLG51bGwsITEpLHcuZHJhdy5zdGFydChuLGUpfSxzdGFydDpmdW5jdGlvbihlLHQpe3ZhciBuLGE9ZS5jdXJTdGF0czthLnNob3dfaW5BbmltJiYobj1nLnN0b3AoYS5zaG93X2FuaW1JZCkpLEplKGUsMSksYS5zaG93X2luQW5pbT0hMCxHZShlLFwiYXBsX3Bvc2l0aW9uXCIsdy5kcmF3LnVwZGF0ZSksZy5zdGFydChhLnNob3dfYW5pbUlkLCFlLmFwbFN0YXRzLnNob3dfb24sbnVsbCE9dD90Om4pfSxzdG9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgYSxpPWUuY3VyU3RhdHM7cmV0dXJuIG49bnVsbCE9bj9uOmUuYXBsU3RhdHMuc2hvd19vbixhPWkuc2hvd19pbkFuaW0/Zy5zdG9wKGkuc2hvd19hbmltSWQpOm4/MTowLGkuc2hvd19pbkFuaW09ITEsdCYmKGUucGF0aExpc3QuYW5pbVZhbD1uP251bGw6W1tlLnBhdGhMaXN0LmJhc2VWYWxbMF1bMF0sZS5wYXRoTGlzdC5iYXNlVmFsWzBdWzBdXV0sJGUoZSx7cGF0aDohMH0pLEplKGUsbikpLGF9LHVwZGF0ZTpmdW5jdGlvbihlKXtEZShlLFwiYXBsX3Bvc2l0aW9uXCIsdy5kcmF3LnVwZGF0ZSksZS5jdXJTdGF0cy5zaG93X2luQW5pbT93LmRyYXcuaW5pdChlLHcuZHJhdy5zdG9wKGUpKTplLmFwbFN0YXRzLnNob3dfYW5pbU9wdGlvbnM9e319fX0sW1tcInN0YXJ0XCIsXCJhbmNob3JTRVwiLDBdLFtcImVuZFwiLFwiYW5jaG9yU0VcIiwxXSxbXCJjb2xvclwiLFwibGluZUNvbG9yXCJdLFtcInNpemVcIixcImxpbmVTaXplXCJdLFtcInN0YXJ0U29ja2V0R3Jhdml0eVwiLFwic29ja2V0R3Jhdml0eVNFXCIsMF0sW1wiZW5kU29ja2V0R3Jhdml0eVwiLFwic29ja2V0R3Jhdml0eVNFXCIsMV0sW1wic3RhcnRQbHVnQ29sb3JcIixcInBsdWdDb2xvclNFXCIsMF0sW1wiZW5kUGx1Z0NvbG9yXCIsXCJwbHVnQ29sb3JTRVwiLDFdLFtcInN0YXJ0UGx1Z1NpemVcIixcInBsdWdTaXplU0VcIiwwXSxbXCJlbmRQbHVnU2l6ZVwiLFwicGx1Z1NpemVTRVwiLDFdLFtcIm91dGxpbmVcIixcImxpbmVPdXRsaW5lRW5hYmxlZFwiXSxbXCJvdXRsaW5lQ29sb3JcIixcImxpbmVPdXRsaW5lQ29sb3JcIl0sW1wib3V0bGluZVNpemVcIixcImxpbmVPdXRsaW5lU2l6ZVwiXSxbXCJzdGFydFBsdWdPdXRsaW5lXCIsXCJwbHVnT3V0bGluZUVuYWJsZWRTRVwiLDBdLFtcImVuZFBsdWdPdXRsaW5lXCIsXCJwbHVnT3V0bGluZUVuYWJsZWRTRVwiLDFdLFtcInN0YXJ0UGx1Z091dGxpbmVDb2xvclwiLFwicGx1Z091dGxpbmVDb2xvclNFXCIsMF0sW1wiZW5kUGx1Z091dGxpbmVDb2xvclwiLFwicGx1Z091dGxpbmVDb2xvclNFXCIsMV0sW1wic3RhcnRQbHVnT3V0bGluZVNpemVcIixcInBsdWdPdXRsaW5lU2l6ZVNFXCIsMF0sW1wiZW5kUGx1Z091dGxpbmVTaXplXCIsXCJwbHVnT3V0bGluZVNpemVTRVwiLDFdXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0sbj1lWzFdLGE9ZVsyXTtPYmplY3QuZGVmaW5lUHJvcGVydHkob3QucHJvdG90eXBlLHQse2dldDpmdW5jdGlvbigpe3ZhciBlPW51bGwhPWE/U2VbdGhpcy5faWRdLm9wdGlvbnNbbl1bYV06bj9TZVt0aGlzLl9pZF0ub3B0aW9uc1tuXTpTZVt0aGlzLl9pZF0ub3B0aW9uc1t0XTtyZXR1cm4gbnVsbD09ZT9EOndlKGUpfSxzZXQ6bHQodCksZW51bWVyYWJsZTohMH0pfSksW1tcInBhdGhcIixSXSxbXCJzdGFydFNvY2tldFwiLFYsXCJzb2NrZXRTRVwiLDBdLFtcImVuZFNvY2tldFwiLFYsXCJzb2NrZXRTRVwiLDFdLFtcInN0YXJ0UGx1Z1wiLEYsXCJwbHVnU0VcIiwwXSxbXCJlbmRQbHVnXCIsRixcInBsdWdTRVwiLDFdXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBhPWVbMF0saT1lWzFdLG89ZVsyXSxsPWVbM107T2JqZWN0LmRlZmluZVByb3BlcnR5KG90LnByb3RvdHlwZSxhLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdCxuPW51bGwhPWw/U2VbdGhpcy5faWRdLm9wdGlvbnNbb11bbF06bz9TZVt0aGlzLl9pZF0ub3B0aW9uc1tvXTpTZVt0aGlzLl9pZF0ub3B0aW9uc1thXTtyZXR1cm4gbj9PYmplY3Qua2V5cyhpKS5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBpW2VdPT09biYmKHQ9ZSwhMCl9KT90Om5ldyBFcnJvcihcIkl0J3MgYnJva2VuXCIpOkR9LHNldDpsdChhKSxlbnVtZXJhYmxlOiEwfSl9KSxPYmplY3Qua2V5cyhaKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciBhPVpbbl07T2JqZWN0LmRlZmluZVByb3BlcnR5KG90LnByb3RvdHlwZSxuLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgcyxlLHQ9U2VbdGhpcy5faWRdLm9wdGlvbnNbbl07cmV0dXJuIGhlKHQpPyhzPXQsZT1hLm9wdGlvbnNDb25mLnJlZHVjZShmdW5jdGlvbihlLHQpe3ZhciBuLGE9dFswXSxpPXRbMV0sbz10WzJdLGw9dFszXSx0PXRbNF0scj1udWxsIT10P3NbbF1bdF06bD9zW2xdOnNbaV07cmV0dXJuIGVbaV09XCJpZFwiPT09YT9yP09iamVjdC5rZXlzKG8pLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIG9bZV09PT1yJiYobj1lLCEwKX0pP246bmV3IEVycm9yKFwiSXQncyBicm9rZW5cIik6RDpudWxsPT1yP0Q6d2UociksZX0se30pLGEuYW5pbSYmKGUuYW5pbWF0aW9uPXdlKHMuYW5pbWF0aW9uKSksZSk6dH0sc2V0Omx0KG4pLGVudW1lcmFibGU6ITB9KX0pLFtcInN0YXJ0TGFiZWxcIixcImVuZExhYmVsXCIsXCJtaWRkbGVMYWJlbFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7T2JqZWN0LmRlZmluZVByb3BlcnR5KG90LnByb3RvdHlwZSxlLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT1TZVt0aGlzLl9pZF0sdD1lLm9wdGlvbnM7cmV0dXJuIHQubGFiZWxTRU1bbl0mJiFlLm9wdGlvbklzQXR0YWNoLmxhYmVsU0VNW25dP19lW3QubGFiZWxTRU1bbl0uX2lkXS50ZXh0OnQubGFiZWxTRU1bbl18fFwiXCJ9LHNldDpsdChlKSxlbnVtZXJhYmxlOiEwfSl9KSxvdC5wcm90b3R5cGUuc2V0T3B0aW9ucz1mdW5jdGlvbihlKXtyZXR1cm4gaXQoU2VbdGhpcy5faWRdLGUpLHRoaXN9LG90LnByb3RvdHlwZS5wb3NpdGlvbj1mdW5jdGlvbigpe3JldHVybiAkZShTZVt0aGlzLl9pZF0se3Bvc2l0aW9uOiEwfSksdGhpc30sb3QucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3ZhciB0PVNlW3RoaXMuX2lkXSxuPXQuY3VyU3RhdHM7T2JqZWN0LmtleXMoWikuZm9yRWFjaChmdW5jdGlvbihlKXtlKz1cIl9hbmltSWRcIjtuW2VdJiZnLnJlbW92ZShuW2VdKX0pLG4uc2hvd19hbmltSWQmJmcucmVtb3ZlKG4uc2hvd19hbmltSWQpLHQuYXR0YWNobWVudHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2F0KHQsZSl9KSx0LmJhc2VXaW5kb3cmJnQuc3ZnJiZ0LmJhc2VXaW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0LnN2ZyksZGVsZXRlIFNlW3RoaXMuX2lkXX0sb3QucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHQoU2VbdGhpcy5faWRdLCEwLGUsdCksdGhpc30sb3QucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHQoU2VbdGhpcy5faWRdLCExLGUsdCksdGhpc30sbz1mdW5jdGlvbih0KXt0JiZfZVt0Ll9pZF0mJih0LmJvdW5kVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24oZSl7YXQoZS5wcm9wcyx0LCEwKX0pLHQuY29uZi5yZW1vdmUmJnQuY29uZi5yZW1vdmUodCksZGVsZXRlIF9lW3QuX2lkXSl9LHJ0LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLG49X2VbdC5faWRdO24mJihuLmJvdW5kVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24oZSl7bi5jb25mLnJlbW92ZU9wdGlvbihuLGUpfSksemUoZnVuY3Rpb24oKXt2YXIgZT1fZVt0Ll9pZF07ZSYmKGNvbnNvbGUuZXJyb3IoXCJMZWFkZXJMaW5lQXR0YWNobWVudCB3YXMgbm90IHJlbW92ZWQgYnkgcmVtb3ZlT3B0aW9uXCIpLG8oZSkpfSkpfSxNPXJ0LHdpbmRvdy5MZWFkZXJMaW5lQXR0YWNobWVudD1NLEk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSBpbnN0YW5jZW9mIE0mJighKGUuaXNSZW1vdmVkfHx0JiZfZVtlLl9pZF0uY29uZi50eXBlIT09dCl8fG51bGwpfSxPPXtwb2ludEFuY2hvcjp7dHlwZTpcImFuY2hvclwiLGFyZ09wdGlvbnM6W3tvcHRpb25OYW1lOlwiZWxlbWVudFwiLHR5cGU6TWV9XSxpbml0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZWxlbWVudD1PLnBvaW50QW5jaG9yLmNoZWNrRWxlbWVudCh0LmVsZW1lbnQpLGUueD1PLnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudCh0LngsITApfHxbLjUsITBdLGUueT1PLnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudCh0LnksITApfHxbLjUsITBdLCEwfSxyZW1vdmVPcHRpb246ZnVuY3Rpb24oZSx0KXt2YXIgbj10LnByb3BzLGE9e30saT1lLmVsZW1lbnQsZT1uLm9wdGlvbnMuYW5jaG9yU0VbXCJzdGFydFwiPT09dC5vcHRpb25OYW1lPzE6MF07aT09PWUmJihpPWU9PT1kb2N1bWVudC5ib2R5P25ldyBNKE8ucG9pbnRBbmNob3IsW2ldKTpkb2N1bWVudC5ib2R5KSxhW3Qub3B0aW9uTmFtZV09aSxpdChuLGEpfSxnZXRCQm94TmVzdDpmdW5jdGlvbihlLHQpe3ZhciBuPUxlKGUuZWxlbWVudCx0LmJhc2VXaW5kb3cpLGE9bi53aWR0aCx0PW4uaGVpZ2h0O3JldHVybiBuLndpZHRoPW4uaGVpZ2h0PTAsbi5sZWZ0PW4ucmlnaHQ9bi5sZWZ0K2UueFswXSooZS54WzFdP2E6MSksbi50b3A9bi5ib3R0b209bi50b3ArZS55WzBdKihlLnlbMV0/dDoxKSxufSxwYXJzZVBlcmNlbnQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixhLGk9ITE7cmV0dXJuIHBlKGUpP2E9ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmKG49bS5leGVjKGUpKSYmblsyXSYmKGk9MCE9PShhPXBhcnNlRmxvYXQoblsxXSkvMTAwKSksbnVsbCE9YSYmKHR8fDA8PWEpP1thLGldOm51bGx9LGNoZWNrRWxlbWVudDpmdW5jdGlvbihlKXtpZihudWxsPT1lKWU9ZG9jdW1lbnQuYm9keTtlbHNlIGlmKCFNZShlKSl0aHJvdyBuZXcgRXJyb3IoXCJgZWxlbWVudGAgbXVzdCBiZSBFbGVtZW50XCIpO3JldHVybiBlfX0sYXJlYUFuY2hvcjp7dHlwZTpcImFuY2hvclwiLGFyZ09wdGlvbnM6W3tvcHRpb25OYW1lOlwiZWxlbWVudFwiLHR5cGU6TWV9LHtvcHRpb25OYW1lOlwic2hhcGVcIix0eXBlOlwic3RyaW5nXCJ9XSxzdGF0czp7Y29sb3I6e30sc3Ryb2tlV2lkdGg6e30sZWxlbWVudFdpZHRoOnt9LGVsZW1lbnRIZWlnaHQ6e30sZWxlbWVudExlZnQ6e30sZWxlbWVudFRvcDp7fSxwYXRoTGlzdFJlbDp7fSxiQm94UmVsOnt9LHBhdGhEYXRhOnt9LHZpZXdCb3hCQm94OntoYXNQcm9wczohMH0sZGFzaExlbjp7fSxkYXNoR2FwOnt9fSxpbml0OmZ1bmN0aW9uKGEsZSl7dmFyIHQsbj1bXTtyZXR1cm4gYS5lbGVtZW50PU8ucG9pbnRBbmNob3IuY2hlY2tFbGVtZW50KGUuZWxlbWVudCksXCJzdHJpbmdcIj09dHlwZW9mIGUuY29sb3ImJihhLmNvbG9yPWUuY29sb3IudHJpbSgpKSxcInN0cmluZ1wiPT10eXBlb2YgZS5maWxsQ29sb3ImJihhLmZpbGw9ZS5maWxsQ29sb3IudHJpbSgpKSxwZShlLnNpemUpJiYwPD1lLnNpemUmJihhLnNpemU9ZS5zaXplKSxlLmRhc2gmJihhLmRhc2g9ITAscGUoZS5kYXNoLmxlbikmJjA8ZS5kYXNoLmxlbiYmKGEuZGFzaExlbj1lLmRhc2gubGVuKSxwZShlLmRhc2guZ2FwKSYmMDxlLmRhc2guZ2FwJiYoYS5kYXNoR2FwPWUuZGFzaC5nYXApKSxcImNpcmNsZVwiPT09ZS5zaGFwZT9hLnNoYXBlPWUuc2hhcGU6XCJwb2x5Z29uXCI9PT1lLnNoYXBlJiZBcnJheS5pc0FycmF5KGUucG9pbnRzKSYmMzw9ZS5wb2ludHMubGVuZ3RoJiZlLnBvaW50cy5ldmVyeShmdW5jdGlvbihlKXt2YXIgdD17fTtyZXR1cm4hKCEodC54PU8ucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KGVbMF0sITApKXx8ISh0Lnk9Ty5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZVsxXSwhMCkpKSYmKG4ucHVzaCh0KSwodC54WzFdfHx0LnlbMV0pJiYoYS5oYXNSYXRpbz0hMCksITApfSk/KGEuc2hhcGU9ZS5zaGFwZSxhLnBvaW50cz1uKTooYS5zaGFwZT1cInJlY3RcIixhLnJhZGl1cz1wZShlLnJhZGl1cykmJjA8PWUucmFkaXVzP2UucmFkaXVzOjApLFwicmVjdFwiIT09YS5zaGFwZSYmXCJjaXJjbGVcIiE9PWEuc2hhcGV8fChhLng9Ty5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZS54LCEwKXx8Wy0uMDUsITBdLGEueT1PLnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlLnksITApfHxbLS4wNSwhMF0sYS53aWR0aD1PLnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlLndpZHRoKXx8WzEuMSwhMF0sYS5oZWlnaHQ9Ty5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZS5oZWlnaHQpfHxbMS4xLCEwXSwoYS54WzFdfHxhLnlbMV18fGEud2lkdGhbMV18fGEuaGVpZ2h0WzFdKSYmKGEuaGFzUmF0aW89ITApKSx0PWEuZWxlbWVudC5vd25lckRvY3VtZW50LGEuc3ZnPWU9dC5jcmVhdGVFbGVtZW50TlMoYWUsXCJzdmdcIiksZS5jbGFzc05hbWUuYmFzZVZhbD1DK1wiLWFyZWFBbmNob3JcIixlLnZpZXdCb3guYmFzZVZhbHx8ZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsXCIwIDAgMCAwXCIpLGEucGF0aD1lLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGFlLFwicGF0aFwiKSksYS5wYXRoLnN0eWxlLmZpbGw9YS5maWxsfHxcIm5vbmVcIixhLmlzU2hvd249ITEsZS5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIsdC5ib2R5LmFwcGVuZENoaWxkKGUpLFFlKHQ9dC5kZWZhdWx0VmlldyksYS5ib2R5T2Zmc2V0PXFlKHQpLGEudXBkYXRlQ29sb3I9ZnVuY3Rpb24oKXt2YXIgZT1hLmN1clN0YXRzLHQ9YS5hcGxTdGF0cyxuPWEuYm91bmRUYXJnZXRzLmxlbmd0aD9hLmJvdW5kVGFyZ2V0c1swXS5wcm9wcy5jdXJTdGF0czpudWxsO2UuY29sb3I9bj1hLmNvbG9yfHwobj9uLmxpbmVfY29sb3I6dWUubGluZUNvbG9yKSxYZShhLHQsXCJjb2xvclwiLG4pJiYoYS5wYXRoLnN0eWxlLnN0cm9rZT1uKX0sYS51cGRhdGVTaG93PWZ1bmN0aW9uKCl7SmUoYSxhLmJvdW5kVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5wcm9wcy5pc1Nob3dufSkpfSwhMH0sYmluZDpmdW5jdGlvbihlLHQpe3Q9dC5wcm9wcztyZXR1cm4gZS5jb2xvcnx8R2UodCxcImN1cl9saW5lX2NvbG9yXCIsZS51cGRhdGVDb2xvciksR2UodCxcInN2Z1Nob3dcIixlLnVwZGF0ZVNob3cpLHplKGZ1bmN0aW9uKCl7ZS51cGRhdGVDb2xvcigpLGUudXBkYXRlU2hvdygpfSksITB9LHVuYmluZDpmdW5jdGlvbihlLHQpe3Q9dC5wcm9wcztlLmNvbG9yfHxEZSh0LFwiY3VyX2xpbmVfY29sb3JcIixlLnVwZGF0ZUNvbG9yKSxEZSh0LFwic3ZnU2hvd1wiLGUudXBkYXRlU2hvdyksMTxlLmJvdW5kVGFyZ2V0cy5sZW5ndGgmJnplKGZ1bmN0aW9uKCl7ZS51cGRhdGVDb2xvcigpLGUudXBkYXRlU2hvdygpLE8uYXJlYUFuY2hvci51cGRhdGUoZSkmJmUuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oZSl7JGUoZS5wcm9wcyx7cG9zaXRpb246ITB9KX0pfSl9LHJlbW92ZU9wdGlvbjpmdW5jdGlvbihlLHQpe08ucG9pbnRBbmNob3IucmVtb3ZlT3B0aW9uKGUsdCl9LHJlbW92ZTpmdW5jdGlvbih0KXt0LmJvdW5kVGFyZ2V0cy5sZW5ndGgmJihjb25zb2xlLmVycm9yKFwiTGVhZGVyTGluZUF0dGFjaG1lbnQgd2FzIG5vdCB1bmJvdW5kIGJ5IHJlbW92ZVwiKSx0LmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe08uYXJlYUFuY2hvci51bmJpbmQodCxlKX0pKSx0LnN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQuc3ZnKX0sZ2V0U3Ryb2tlV2lkdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gTy5hcmVhQW5jaG9yLnVwZGF0ZShlKSYmMTxlLmJvdW5kVGFyZ2V0cy5sZW5ndGgmJnplKGZ1bmN0aW9uKCl7ZS5ib3VuZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbihlKXtlLnByb3BzIT09dCYmJGUoZS5wcm9wcyx7cG9zaXRpb246ITB9KX0pfSksZS5jdXJTdGF0cy5zdHJva2VXaWR0aH0sZ2V0UGF0aERhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbj1MZShlLmVsZW1lbnQsdC5iYXNlV2luZG93KTtyZXR1cm4gQmUoZS5jdXJTdGF0cy5wYXRoTGlzdFJlbCxmdW5jdGlvbihlKXtlLngrPW4ubGVmdCxlLnkrPW4udG9wfSl9LGdldEJCb3hOZXN0OmZ1bmN0aW9uKGUsdCl7dD1MZShlLmVsZW1lbnQsdC5iYXNlV2luZG93KSxlPWUuY3VyU3RhdHMuYkJveFJlbDtyZXR1cm57bGVmdDplLmxlZnQrdC5sZWZ0LHRvcDplLnRvcCt0LnRvcCxyaWdodDplLnJpZ2h0K3QubGVmdCxib3R0b206ZS5ib3R0b20rdC50b3Asd2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9fSx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIG4sYSxpLG8sZSxsLHIscyx1LGgscCxjLGQsZix5LG0sUz10LmN1clN0YXRzLGc9dC5hcGxTdGF0cyxfPXQuYm91bmRUYXJnZXRzLmxlbmd0aD90LmJvdW5kVGFyZ2V0c1swXS5wcm9wcy5jdXJTdGF0czpudWxsLHY9e307aWYodi5zdHJva2VXaWR0aD1YZSh0LFMsXCJzdHJva2VXaWR0aFwiLG51bGwhPXQuc2l6ZT90LnNpemU6Xz9fLmxpbmVfc3Ryb2tlV2lkdGg6dWUubGluZVNpemUpLG49SWUodC5lbGVtZW50KSx2LmVsZW1lbnRXaWR0aD1YZSh0LFMsXCJlbGVtZW50V2lkdGhcIixuLndpZHRoKSx2LmVsZW1lbnRIZWlnaHQ9WGUodCxTLFwiZWxlbWVudEhlaWdodFwiLG4uaGVpZ2h0KSx2LmVsZW1lbnRMZWZ0PVhlKHQsUyxcImVsZW1lbnRMZWZ0XCIsbi5sZWZ0KSx2LmVsZW1lbnRUb3A9WGUodCxTLFwiZWxlbWVudFRvcFwiLG4udG9wKSx2LnN0cm9rZVdpZHRofHx0Lmhhc1JhdGlvJiYodi5lbGVtZW50V2lkdGh8fHYuZWxlbWVudEhlaWdodCkpe3N3aXRjaCh0LnNoYXBlKXtjYXNlXCJyZWN0XCI6KGM9e2xlZnQ6dC54WzBdKih0LnhbMV0/bi53aWR0aDoxKSx0b3A6dC55WzBdKih0LnlbMV0/bi5oZWlnaHQ6MSksd2lkdGg6dC53aWR0aFswXSoodC53aWR0aFsxXT9uLndpZHRoOjEpLGhlaWdodDp0LmhlaWdodFswXSoodC5oZWlnaHRbMV0/bi5oZWlnaHQ6MSl9KS5yaWdodD1jLmxlZnQrYy53aWR0aCxjLmJvdHRvbT1jLnRvcCtjLmhlaWdodCxwPVMuc3Ryb2tlV2lkdGgvMixzPShyPU1hdGgubWluKGMud2lkdGgsYy5oZWlnaHQpKT9yLzIqTWF0aC5TUVJUMitwOjAsaD0ocj10LnJhZGl1cz90LnJhZGl1czw9cz90LnJhZGl1czpzOjApPyhzPShyLXApL01hdGguU1FSVDIsaD1be3g6Yy5sZWZ0LSh1PXItcykseTpjLnRvcCtzfSx7eDpjLmxlZnQrcyx5OmMudG9wLXV9LHt4OmMucmlnaHQtcyx5OmMudG9wLXV9LHt4OmMucmlnaHQrdSx5OmMudG9wK3N9LHt4OmMucmlnaHQrdSx5OmMuYm90dG9tLXN9LHt4OmMucmlnaHQtcyx5OmMuYm90dG9tK3V9LHt4OmMubGVmdCtzLHk6Yy5ib3R0b20rdX0se3g6Yy5sZWZ0LXUseTpjLmJvdHRvbS1zfV0sUy5wYXRoTGlzdFJlbD1bW2hbMF0se3g6aFswXS54LHk6aFswXS55LShwPXIqdGUpfSx7eDpoWzFdLngtcCx5OmhbMV0ueX0saFsxXV1dLGhbMV0ueCE9PWhbMl0ueCYmUy5wYXRoTGlzdFJlbC5wdXNoKFtoWzFdLGhbMl1dKSxTLnBhdGhMaXN0UmVsLnB1c2goW2hbMl0se3g6aFsyXS54K3AseTpoWzJdLnl9LHt4OmhbM10ueCx5OmhbM10ueS1wfSxoWzNdXSksaFszXS55IT09aFs0XS55JiZTLnBhdGhMaXN0UmVsLnB1c2goW2hbM10saFs0XV0pLFMucGF0aExpc3RSZWwucHVzaChbaFs0XSx7eDpoWzRdLngseTpoWzRdLnkrcH0se3g6aFs1XS54K3AseTpoWzVdLnl9LGhbNV1dKSxoWzVdLnghPT1oWzZdLngmJlMucGF0aExpc3RSZWwucHVzaChbaFs1XSxoWzZdXSksUy5wYXRoTGlzdFJlbC5wdXNoKFtoWzZdLHt4OmhbNl0ueC1wLHk6aFs2XS55fSx7eDpoWzddLngseTpoWzddLnkrcH0saFs3XV0pLGhbN10ueSE9PWhbMF0ueSYmUy5wYXRoTGlzdFJlbC5wdXNoKFtoWzddLGhbMF1dKSxTLnBhdGhMaXN0UmVsLnB1c2goW10pLHU9ci1zK1Muc3Ryb2tlV2lkdGgvMixbe3g6Yy5sZWZ0LXUseTpjLnRvcC11fSx7eDpjLnJpZ2h0K3UseTpjLmJvdHRvbSt1fV0pOih1PVMuc3Ryb2tlV2lkdGgvMixoPVt7eDpjLmxlZnQtdSx5OmMudG9wLXV9LHt4OmMucmlnaHQrdSx5OmMuYm90dG9tK3V9XSxTLnBhdGhMaXN0UmVsPVtbaFswXSx7eDpoWzFdLngseTpoWzBdLnl9XSxbe3g6aFsxXS54LHk6aFswXS55fSxoWzFdXSxbaFsxXSx7eDpoWzBdLngseTpoWzFdLnl9XSxbXV0sW3t4OmMubGVmdC1TLnN0cm9rZVdpZHRoLHk6Yy50b3AtUy5zdHJva2VXaWR0aH0se3g6Yy5yaWdodCtTLnN0cm9rZVdpZHRoLHk6Yy5ib3R0b20rUy5zdHJva2VXaWR0aH1dKSxTLmJCb3hSZWw9e2xlZnQ6aFswXS54LHRvcDpoWzBdLnkscmlnaHQ6aFsxXS54LGJvdHRvbTpoWzFdLnksd2lkdGg6aFsxXS54LWhbMF0ueCxoZWlnaHQ6aFsxXS55LWhbMF0ueX07YnJlYWs7Y2FzZVwiY2lyY2xlXCI6KGw9e2xlZnQ6dC54WzBdKih0LnhbMV0/bi53aWR0aDoxKSx0b3A6dC55WzBdKih0LnlbMV0/bi5oZWlnaHQ6MSksd2lkdGg6dC53aWR0aFswXSoodC53aWR0aFsxXT9uLndpZHRoOjEpLGhlaWdodDp0LmhlaWdodFswXSoodC5oZWlnaHRbMV0/bi5oZWlnaHQ6MSl9KS53aWR0aHx8bC5oZWlnaHR8fChsLndpZHRoPWwuaGVpZ2h0PTEwKSxsLndpZHRofHwobC53aWR0aD1sLmhlaWdodCksbC5oZWlnaHR8fChsLmhlaWdodD1sLndpZHRoKSxsLnJpZ2h0PWwubGVmdCtsLndpZHRoLGwuYm90dG9tPWwudG9wK2wuaGVpZ2h0LHA9bC5sZWZ0K2wud2lkdGgvMixyPWwudG9wK2wuaGVpZ2h0LzIsZT1TLnN0cm9rZVdpZHRoLzIscz1sLndpZHRoLzIsdT1sLmhlaWdodC8yLGM9cypNYXRoLlNRUlQyK2UsaD11Kk1hdGguU1FSVDIrZSxTLnBhdGhMaXN0UmVsPVtbKGU9W3t4OnAtYyx5OnJ9LHt4OnAseTpyLWh9LHt4OnArYyx5OnJ9LHt4OnAseTpyK2h9XSlbMF0se3g6ZVswXS54LHk6ZVswXS55LShwPWgqdGUpfSx7eDplWzFdLngtKHI9Yyp0ZSkseTplWzFdLnl9LGVbMV1dLFtlWzFdLHt4OmVbMV0ueCtyLHk6ZVsxXS55fSx7eDplWzJdLngseTplWzJdLnktcH0sZVsyXV0sW2VbMl0se3g6ZVsyXS54LHk6ZVsyXS55K3B9LHt4OmVbM10ueCtyLHk6ZVszXS55fSxlWzNdXSxbZVszXSx7eDplWzNdLngtcix5OmVbM10ueX0se3g6ZVswXS54LHk6ZVswXS55K3B9LGVbMF1dLFtdXSxzPWMtcytTLnN0cm9rZVdpZHRoLzIsdT1oLXUrUy5zdHJva2VXaWR0aC8yLGU9W3t4OmwubGVmdC1zLHk6bC50b3AtdX0se3g6bC5yaWdodCtzLHk6bC5ib3R0b20rdX1dLFMuYkJveFJlbD17bGVmdDplWzBdLngsdG9wOmVbMF0ueSxyaWdodDplWzFdLngsYm90dG9tOmVbMV0ueSx3aWR0aDplWzFdLngtZVswXS54LGhlaWdodDplWzFdLnktZVswXS55fTticmVhaztjYXNlXCJwb2x5Z29uXCI6dC5wb2ludHMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1lLnhbMF0qKGUueFsxXT9uLndpZHRoOjEpLGU9ZS55WzBdKihlLnlbMV0/bi5oZWlnaHQ6MSk7aT8odDxpLmxlZnQmJihpLmxlZnQ9dCksdD5pLnJpZ2h0JiYoaS5yaWdodD10KSxlPGkudG9wJiYoaS50b3A9ZSksZT5pLmJvdHRvbSYmKGkuYm90dG9tPWUpKTppPXtsZWZ0OnQscmlnaHQ6dCx0b3A6ZSxib3R0b206ZX0sbz9TLnBhdGhMaXN0UmVsLnB1c2goW28se3g6dCx5OmV9XSk6Uy5wYXRoTGlzdFJlbD1bXSxvPXt4OnQseTplfX0pLFMucGF0aExpc3RSZWwucHVzaChbXSksZT1TLnN0cm9rZVdpZHRoLzIsZT1be3g6aS5sZWZ0LWUseTppLnRvcC1lfSx7eDppLnJpZ2h0K2UseTppLmJvdHRvbStlfV0sUy5iQm94UmVsPXtsZWZ0OmVbMF0ueCx0b3A6ZVswXS55LHJpZ2h0OmVbMV0ueCxib3R0b206ZVsxXS55LHdpZHRoOmVbMV0ueC1lWzBdLngsaGVpZ2h0OmVbMV0ueS1lWzBdLnl9fXYucGF0aExpc3RSZWw9di5iQm94UmVsPSEwfXJldHVybih2LnBhdGhMaXN0UmVsfHx2LmVsZW1lbnRMZWZ0fHx2LmVsZW1lbnRUb3ApJiYoUy5wYXRoRGF0YT1CZShTLnBhdGhMaXN0UmVsLGZ1bmN0aW9uKGUpe2UueCs9bi5sZWZ0LGUueSs9bi50b3B9KSksWGUodCxnLFwic3Ryb2tlV2lkdGhcIixhPVMuc3Ryb2tlV2lkdGgpJiYodC5wYXRoLnN0eWxlLnN0cm9rZVdpZHRoPWErXCJweFwiKSxGZShhPVMucGF0aERhdGEsZy5wYXRoRGF0YSkmJih0LnBhdGguc2V0UGF0aERhdGEoYSksZy5wYXRoRGF0YT1hLHYucGF0aERhdGE9ITApLHQuZGFzaCYmKCF2LnBhdGhEYXRhJiYoIXYuc3Ryb2tlV2lkdGh8fHQuZGFzaExlbiYmdC5kYXNoR2FwKXx8KFMuZGFzaExlbj10LmRhc2hMZW58fDIqUy5zdHJva2VXaWR0aCxTLmRhc2hHYXA9dC5kYXNoR2FwfHxTLnN0cm9rZVdpZHRoKSx2LmRhc2g9WGUodCxnLFwiZGFzaExlblwiLFMuZGFzaExlbil8fHYuZGFzaCx2LmRhc2g9WGUodCxnLFwiZGFzaEdhcFwiLFMuZGFzaEdhcCl8fHYuZGFzaCx2LmRhc2gmJih0LnBhdGguc3R5bGUuc3Ryb2tlRGFzaGFycmF5PWcuZGFzaExlbitcIixcIitnLmRhc2hHYXApKSxkPVMudmlld0JveEJCb3gsZj1nLnZpZXdCb3hCQm94LHk9dC5zdmcudmlld0JveC5iYXNlVmFsLG09dC5zdmcuc3R5bGUsZC54PVMuYkJveFJlbC5sZWZ0K24ubGVmdCxkLnk9Uy5iQm94UmVsLnRvcCtuLnRvcCxkLndpZHRoPVMuYkJveFJlbC53aWR0aCxkLmhlaWdodD1TLmJCb3hSZWwuaGVpZ2h0LFtcInhcIixcInlcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXsoYT1kW2VdKSE9PWZbZV0mJih5W2VdPWZbZV09YSxtW1FbZV1dPWErKFwieFwiPT09ZXx8XCJ5XCI9PT1lP3QuYm9keU9mZnNldFtlXTowKStcInB4XCIpfSksdi5zdHJva2VXaWR0aHx8di5wYXRoTGlzdFJlbHx8di5iQm94UmVsfX0sbW91c2VIb3ZlckFuY2hvcjp7dHlwZTpcImFuY2hvclwiLGFyZ09wdGlvbnM6W3tvcHRpb25OYW1lOlwiZWxlbWVudFwiLHR5cGU6TWV9LHtvcHRpb25OYW1lOlwic2hvd0VmZmVjdE5hbWVcIix0eXBlOlwic3RyaW5nXCJ9XSxzdHlsZTp7YmFja2dyb3VuZEltYWdlOlwidXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtODtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJakkwSWlCb1pXbG5hSFE5SWpJMElqNDhjRzlzZVdkdmJpQndiMmx1ZEhNOUlqSTBMREFnTUN3NElEZ3NNVEVnTUN3eE9TQTFMREkwSURFekxERTJJREUyTERJMElpQm1hV3hzUFNKamIzSmhiQ0l2UGp3dmMzWm5QZz09JylcIixiYWNrZ3JvdW5kU2l6ZTpcIlwiLGJhY2tncm91bmRSZXBlYXQ6XCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZjhmODgxXCIsY3Vyc29yOlwiZGVmYXVsdFwifSxob3ZlclN0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6XCJub25lXCIsYmFja2dyb3VuZENvbG9yOlwiI2ZhZGY4ZlwifSxwYWRkaW5nOnt0b3A6MSxyaWdodDoxNSxib3R0b206MSxsZWZ0OjJ9LG1pbkhlaWdodDoxNSxiYWNrZ3JvdW5kUG9zaXRpb246e3JpZ2h0OjIsdG9wOjJ9LGJhY2tncm91bmRTaXplOnt3aWR0aDoxMixoZWlnaHQ6MTJ9LGRpcktleXM6W1tcInRvcFwiLFwiVG9wXCJdLFtcInJpZ2h0XCIsXCJSaWdodFwiXSxbXCJib3R0b21cIixcIkJvdHRvbVwiXSxbXCJsZWZ0XCIsXCJMZWZ0XCJdXSxpbml0OmZ1bmN0aW9uKGEsaSl7dmFyIG4sdCxlLG8sbCxyLHMsdSxoLHA9Ty5tb3VzZUhvdmVyQW5jaG9yLGM9e307aWYoYS5lbGVtZW50PU8ucG9pbnRBbmNob3IuY2hlY2tFbGVtZW50KGkuZWxlbWVudCkscz1hLmVsZW1lbnQsISgodT1zLm93bmVyRG9jdW1lbnQpJiYoaD11LmRlZmF1bHRWaWV3KSYmaC5IVE1MRWxlbWVudCYmcyBpbnN0YW5jZW9mIGguSFRNTEVsZW1lbnQpKXRocm93IG5ldyBFcnJvcihcImBlbGVtZW50YCBtdXN0IGJlIEhUTUwgZWxlbWVudFwiKTtyZXR1cm4gcC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1wLmJhY2tncm91bmRTaXplLndpZHRoK1wicHggXCIrcC5iYWNrZ3JvdW5kU2l6ZS5oZWlnaHQrXCJweFwiLFtcInN0eWxlXCIsXCJob3ZlclN0eWxlXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIG49cFtlXTthW2VdPU9iamVjdC5rZXlzKG4pLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlW3RdPW5bdF0sZX0se30pfSksXCJpbmxpbmVcIj09PShuPWEuZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYS5lbGVtZW50LFwiXCIpKS5kaXNwbGF5P2Euc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiOlwibm9uZVwiPT09bi5kaXNwbGF5JiYoYS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksTy5tb3VzZUhvdmVyQW5jaG9yLmRpcktleXMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1lWzBdLGU9XCJwYWRkaW5nXCIrZVsxXTtwYXJzZUZsb2F0KG5bZV0pPHAucGFkZGluZ1t0XSYmKGEuc3R5bGVbZV09cC5wYWRkaW5nW3RdK1wicHhcIil9KSxhLnN0eWxlLmRpc3BsYXkmJihlPWEuZWxlbWVudC5zdHlsZS5kaXNwbGF5LGEuZWxlbWVudC5zdHlsZS5kaXNwbGF5PWEuc3R5bGUuZGlzcGxheSksTy5tb3VzZUhvdmVyQW5jaG9yLmRpcktleXMuZm9yRWFjaChmdW5jdGlvbihlKXtlPVwicGFkZGluZ1wiK2VbMV07YS5zdHlsZVtlXSYmKGNbZV09YS5lbGVtZW50LnN0eWxlW2VdLGEuZWxlbWVudC5zdHlsZVtlXT1hLnN0eWxlW2VdKX0pLChzPWEuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkuaGVpZ2h0PHAubWluSGVpZ2h0JiYoaWU/KGg9cC5taW5IZWlnaHQsXCJjb250ZW50LWJveFwiPT09bi5ib3hTaXppbmc/aC09cGFyc2VGbG9hdChuLmJvcmRlclRvcFdpZHRoKStwYXJzZUZsb2F0KG4uYm9yZGVyQm90dG9tV2lkdGgpK3BhcnNlRmxvYXQobi5wYWRkaW5nVG9wKStwYXJzZUZsb2F0KG4ucGFkZGluZ0JvdHRvbSk6XCJwYWRkaW5nLWJveFwiPT09bi5ib3hTaXppbmcmJihoLT1wYXJzZUZsb2F0KG4uYm9yZGVyVG9wV2lkdGgpK3BhcnNlRmxvYXQobi5ib3JkZXJCb3R0b21XaWR0aCkpLGEuc3R5bGUuaGVpZ2h0PWgrXCJweFwiKTphLnN0eWxlLmhlaWdodD1wYXJzZUZsb2F0KG4uaGVpZ2h0KSsocC5taW5IZWlnaHQtcy5oZWlnaHQpK1wicHhcIiksYS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249cmU/cy53aWR0aC1wLmJhY2tncm91bmRTaXplLndpZHRoLXAuYmFja2dyb3VuZFBvc2l0aW9uLnJpZ2h0K1wicHggXCIrcC5iYWNrZ3JvdW5kUG9zaXRpb24udG9wK1wicHhcIjpcInJpZ2h0IFwiK3AuYmFja2dyb3VuZFBvc2l0aW9uLnJpZ2h0K1wicHggdG9wIFwiK3AuYmFja2dyb3VuZFBvc2l0aW9uLnRvcCtcInB4XCIsYS5zdHlsZS5kaXNwbGF5JiYoYS5lbGVtZW50LnN0eWxlLmRpc3BsYXk9ZSksTy5tb3VzZUhvdmVyQW5jaG9yLmRpcktleXMuZm9yRWFjaChmdW5jdGlvbihlKXtlPVwicGFkZGluZ1wiK2VbMV07YS5zdHlsZVtlXSYmKGEuZWxlbWVudC5zdHlsZVtlXT1jW2VdKX0pLFtcInN0eWxlXCIsXCJob3ZlclN0eWxlXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9YVtlXSxuPWlbZV07aGUobikmJk9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24oZSl7XCJzdHJpbmdcIj09dHlwZW9mIG5bZV18fHBlKG5bZV0pP3RbZV09bltlXTpudWxsPT1uW2VdJiZkZWxldGUgdFtlXX0pfSksXCJmdW5jdGlvblwiPT10eXBlb2YgaS5vblN3aXRjaCYmKHI9aS5vblN3aXRjaCksaS5zaG93RWZmZWN0TmFtZSYmd1tpLnNob3dFZmZlY3ROYW1lXSYmKGEuc2hvd0VmZmVjdE5hbWU9bz1pLnNob3dFZmZlY3ROYW1lKSxsPWkuYW5pbU9wdGlvbnMsYS5lbG1TdHlsZT10PWEuZWxlbWVudC5zdHlsZSxhLm1vdXNlZW50ZXI9ZnVuY3Rpb24oZSl7YS5ob3ZlclN0eWxlU2F2ZT1wLmdldFN0eWxlcyh0LE9iamVjdC5rZXlzKGEuaG92ZXJTdHlsZSkpLHAuc2V0U3R5bGVzKHQsYS5ob3ZlclN0eWxlKSxhLmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3R0KGUucHJvcHMsITAsbyxsKX0pLHImJnIoZSl9LGEubW91c2VsZWF2ZT1mdW5jdGlvbihlKXtwLnNldFN0eWxlcyh0LGEuaG92ZXJTdHlsZVNhdmUpLGEuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oZSl7dHQoZS5wcm9wcywhMSxvLGwpfSksciYmcihlKX0sITB9LGJpbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixhLGksbyxsO3JldHVybiB0LnByb3BzLnN2Zz9PLm1vdXNlSG92ZXJBbmNob3IubGxTaG93KHQucHJvcHMsITEsZS5zaG93RWZmZWN0TmFtZSk6emUoZnVuY3Rpb24oKXtPLm1vdXNlSG92ZXJBbmNob3IubGxTaG93KHQucHJvcHMsITEsZS5zaG93RWZmZWN0TmFtZSl9KSxlLmVuYWJsZWR8fChlLnN0eWxlU2F2ZT1PLm1vdXNlSG92ZXJBbmNob3IuZ2V0U3R5bGVzKGUuZWxtU3R5bGUsT2JqZWN0LmtleXMoZS5zdHlsZSkpLE8ubW91c2VIb3ZlckFuY2hvci5zZXRTdHlsZXMoZS5lbG1TdHlsZSxlLnN0eWxlKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXI9KG49ZS5lbGVtZW50LGE9ZS5tb3VzZWVudGVyLGk9ZS5tb3VzZWxlYXZlLFwib25tb3VzZWVudGVyXCJpbiBuJiZcIm9ubW91c2VsZWF2ZVwiaW4gbj8obi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLGEsITEpLG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixpLCExKSxmdW5jdGlvbigpe24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIixhLCExKSxuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsaSwhMSl9KTooY29uc29sZS53YXJuKFwibW91c2VlbnRlciBhbmQgbW91c2VsZWF2ZSBldmVudHMgcG9seWZpbGwgaXMgZW5hYmxlZC5cIiksbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsbz1mdW5jdGlvbihlKXtlLnJlbGF0ZWRUYXJnZXQmJihlLnJlbGF0ZWRUYXJnZXQ9PT10aGlzfHx0aGlzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUucmVsYXRlZFRhcmdldCkmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpfHxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsbD1mdW5jdGlvbihlKXtlLnJlbGF0ZWRUYXJnZXQmJihlLnJlbGF0ZWRUYXJnZXQ9PT10aGlzfHx0aGlzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUucmVsYXRlZFRhcmdldCkmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpfHxpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLGZ1bmN0aW9uKCl7bi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsbywhMSksbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIixsLCExKX0pKSxlLmVuYWJsZWQ9ITApLCEwfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtlLmVuYWJsZWQmJmUuYm91bmRUYXJnZXRzLmxlbmd0aDw9MSYmKGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigpLE8ubW91c2VIb3ZlckFuY2hvci5zZXRTdHlsZXMoZS5lbG1TdHlsZSxlLnN0eWxlU2F2ZSksZS5lbmFibGVkPSExKSxPLm1vdXNlSG92ZXJBbmNob3IubGxTaG93KHQucHJvcHMsITAsZS5zaG93RWZmZWN0TmFtZSl9LHJlbW92ZU9wdGlvbjpmdW5jdGlvbihlLHQpe08ucG9pbnRBbmNob3IucmVtb3ZlT3B0aW9uKGUsdCl9LHJlbW92ZTpmdW5jdGlvbih0KXt0LmJvdW5kVGFyZ2V0cy5sZW5ndGgmJihjb25zb2xlLmVycm9yKFwiTGVhZGVyTGluZUF0dGFjaG1lbnQgd2FzIG5vdCB1bmJvdW5kIGJ5IHJlbW92ZVwiKSx0LmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe08ubW91c2VIb3ZlckFuY2hvci51bmJpbmQodCxlKX0pKX0sZ2V0QkJveE5lc3Q6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gTGUoZS5lbGVtZW50LHQuYmFzZVdpbmRvdyl9LGxsU2hvdzpmdW5jdGlvbihlLHQsbil7d1tufHxlLmN1clN0YXRzLnNob3dfZWZmZWN0XS5zdG9wKGUsITAsdCksZS5hcGxTdGF0cy5zaG93X29uPXR9LGdldFN0eWxlczpmdW5jdGlvbihuLGUpe3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlW3RdPW5bdF0sZX0se30pfSxzZXRTdHlsZXM6ZnVuY3Rpb24odCxuKXtPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3RbZV09bltlXX0pfX0sY2FwdGlvbkxhYmVsOnt0eXBlOlwibGFiZWxcIixhcmdPcHRpb25zOlt7b3B0aW9uTmFtZTpcInRleHRcIix0eXBlOlwic3RyaW5nXCJ9XSxzdGF0czp7Y29sb3I6e30seDp7fSx5Ont9fSx0ZXh0U3R5bGVQcm9wczpbXCJmb250RmFtaWx5XCIsXCJmb250U3R5bGVcIixcImZvbnRWYXJpYW50XCIsXCJmb250V2VpZ2h0XCIsXCJmb250U3RyZXRjaFwiLFwiZm9udFNpemVcIixcImZvbnRTaXplQWRqdXN0XCIsXCJrZXJuaW5nXCIsXCJsZXR0ZXJTcGFjaW5nXCIsXCJ3b3JkU3BhY2luZ1wiLFwidGV4dERlY29yYXRpb25cIl0saW5pdDpmdW5jdGlvbihsLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0LnRleHQmJihsLnRleHQ9dC50ZXh0LnRyaW0oKSksISFsLnRleHQmJihcInN0cmluZ1wiPT10eXBlb2YgdC5jb2xvciYmKGwuY29sb3I9dC5jb2xvci50cmltKCkpLGwub3V0bGluZUNvbG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0Lm91dGxpbmVDb2xvcj90Lm91dGxpbmVDb2xvci50cmltKCk6XCIjZmZmXCIsQXJyYXkuaXNBcnJheSh0Lm9mZnNldCkmJnBlKHQub2Zmc2V0WzBdKSYmcGUodC5vZmZzZXRbMV0pJiYobC5vZmZzZXQ9e3g6dC5vZmZzZXRbMF0seTp0Lm9mZnNldFsxXX0pLHBlKHQubGluZU9mZnNldCkmJihsLmxpbmVPZmZzZXQ9dC5saW5lT2Zmc2V0KSxPLmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe251bGwhPXRbZV0mJihsW2VdPXRbZV0pfSksbC51cGRhdGVDb2xvcj1mdW5jdGlvbihlKXtPLmNhcHRpb25MYWJlbC51cGRhdGVDb2xvcihsLGUpfSxsLnVwZGF0ZVNvY2tldFhZPWZ1bmN0aW9uKGUpe3ZhciB0LG49bC5jdXJTdGF0cyxhPWwuYXBsU3RhdHMsaT1lLmN1clN0YXRzLG89aS5wb3NpdGlvbl9zb2NrZXRYWVNFW2wuc29ja2V0SW5kZXhdO251bGwhPW8ueCYmKGwub2Zmc2V0PyhuLng9by54K2wub2Zmc2V0Lngsbi55PW8ueStsLm9mZnNldC55KToodD1sLmhlaWdodC8yLGU9TWF0aC5tYXgoaS5hdHRhY2hfcGx1Z1NpZGVMZW5TRVtsLnNvY2tldEluZGV4XXx8MCxpLmxpbmVfc3Ryb2tlV2lkdGgvMiksaT1pLnBvc2l0aW9uX3NvY2tldFhZU0VbbC5zb2NrZXRJbmRleD8wOjFdLG8uc29ja2V0SWQ9PT1BfHxvLnNvY2tldElkPT09az8obi54PW8uc29ja2V0SWQ9PT1BP28ueC10LWwud2lkdGg6by54K3Qsbi55PWkueTxvLnk/by55K2UrdDpvLnktZS10LWwuaGVpZ2h0KToobi54PWkueDxvLng/by54K2UrdDpvLngtZS10LWwud2lkdGgsbi55PW8uc29ja2V0SWQ9PT1iP28ueS10LWwuaGVpZ2h0Om8ueSt0KSksWGUobCxhLFwieFwiLHQ9bi54KSYmKGwuZWxtUG9zaXRpb24ueC5iYXNlVmFsLmdldEl0ZW0oMCkudmFsdWU9dCksWGUobCxhLFwieVwiLHQ9bi55KSYmKGwuZWxtUG9zaXRpb24ueS5iYXNlVmFsLmdldEl0ZW0oMCkudmFsdWU9dCtsLmhlaWdodCkpfSxsLnVwZGF0ZVBhdGg9ZnVuY3Rpb24oZSl7dmFyIHQ9bC5jdXJTdGF0cyxuPWwuYXBsU3RhdHMsZT1lLnBhdGhMaXN0LmFuaW1WYWx8fGUucGF0aExpc3QuYmFzZVZhbDtlJiYoZT1PLmNhcHRpb25MYWJlbC5nZXRNaWRQb2ludChlLGwubGluZU9mZnNldCksdC54PWUueC1sLndpZHRoLzIsdC55PWUueS1sLmhlaWdodC8yLFhlKGwsbixcInhcIixlPXQueCkmJihsLmVsbVBvc2l0aW9uLnguYmFzZVZhbC5nZXRJdGVtKDApLnZhbHVlPWUpLFhlKGwsbixcInlcIixlPXQueSkmJihsLmVsbVBvc2l0aW9uLnkuYmFzZVZhbC5nZXRJdGVtKDApLnZhbHVlPWUrbC5oZWlnaHQpKX0sbC51cGRhdGVTaG93PWZ1bmN0aW9uKGUpe08uY2FwdGlvbkxhYmVsLnVwZGF0ZVNob3cobCxlKX0scmUmJihsLmFkanVzdEVkZ2U9ZnVuY3Rpb24oZSx0KXt2YXIgbj1sLmN1clN0YXRzO251bGwhPW4ueCYmTy5jYXB0aW9uTGFiZWwuYWRqdXN0RWRnZSh0LHt4Om4ueCx5Om4ueSx3aWR0aDpsLndpZHRoLGhlaWdodDpsLmhlaWdodH0sbC5zdHJva2VXaWR0aC8yKX0pLCEwKX0sdXBkYXRlQ29sb3I6ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmN1clN0YXRzLGE9ZS5hcGxTdGF0cyx0PXQuY3VyU3RhdHM7bi5jb2xvcj10PWUuY29sb3J8fHQubGluZV9jb2xvcixYZShlLGEsXCJjb2xvclwiLHQpJiYoZS5zdHlsZUZpbGwuZmlsbD10KX0sdXBkYXRlU2hvdzpmdW5jdGlvbihlLHQpe3Q9ITA9PT10LmlzU2hvd247dCE9PWUuaXNTaG93biYmKGUuc3R5bGVTaG93LnZpc2liaWxpdHk9dD9cIlwiOlwiaGlkZGVuXCIsZS5pc1Nob3duPXQpfSxhZGp1c3RFZGdlOmZ1bmN0aW9uKGUsdCxuKXtuPXt4MTp0Lngtbix5MTp0Lnktbix4Mjp0LngrdC53aWR0aCtuLHkyOnQueSt0LmhlaWdodCtufTtuLngxPGUueDEmJihlLngxPW4ueDEpLG4ueTE8ZS55MSYmKGUueTE9bi55MSksbi54Mj5lLngyJiYoZS54Mj1uLngyKSxuLnkyPmUueTImJihlLnkyPW4ueTIpfSxuZXdUZXh0OmZ1bmN0aW9uKGUsdCxuLGEsaSl7dmFyIG8sbCxyPXQuY3JlYXRlRWxlbWVudE5TKGFlLFwidGV4dFwiKTtyZXR1cm4gci50ZXh0Q29udGVudD1lLFtyLngsci55XS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PW4uY3JlYXRlU1ZHTGVuZ3RoKCk7dC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwwKSxlLmJhc2VWYWwuaW5pdGlhbGl6ZSh0KX0pLFwiYm9vbGVhblwiIT10eXBlb2YgaCYmKGg9XCJwYWludE9yZGVyXCJpbiByLnN0eWxlKSxpJiYhaD8obz10LmNyZWF0ZUVsZW1lbnROUyhhZSxcImRlZnNcIiksci5pZD1hLG8uYXBwZW5kQ2hpbGQociksKGw9KGU9dC5jcmVhdGVFbGVtZW50TlMoYWUsXCJnXCIpKS5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSkpLmhyZWYuYmFzZVZhbD1cIiNcIithLCh0PWUuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYWUsXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWw9XCIjXCIrYSwobD1sLnN0eWxlKS5zdHJva2VMaW5lam9pbj1cInJvdW5kXCIse2VsbVBvc2l0aW9uOnIsc3R5bGVUZXh0OnIuc3R5bGUsc3R5bGVGaWxsOnQuc3R5bGUsc3R5bGVTdHJva2U6bCxzdHlsZVNob3c6ZS5zdHlsZSxlbG1zQXBwZW5kOltvLGVdfSk6KGw9ci5zdHlsZSxpJiYobC5zdHJva2VMaW5lam9pbj1cInJvdW5kXCIsbC5wYWludE9yZGVyPVwic3Ryb2tlXCIpLHtlbG1Qb3NpdGlvbjpyLHN0eWxlVGV4dDpsLHN0eWxlRmlsbDpsLHN0eWxlU3Ryb2tlOmk/bDpudWxsLHN0eWxlU2hvdzpsLGVsbXNBcHBlbmQ6W3JdfSl9LGdldE1pZFBvaW50OmZ1bmN0aW9uKGUsdCl7dmFyIG4sYSxpPVJlKGUpLG89aS5zZWdzTGVuLGk9aS5sZW5BbGwsbD0tMSxyPWkvMisodHx8MCk7aWYocjw9MClyZXR1cm4gMj09PShuPWVbMF0pLmxlbmd0aD9WZShuWzBdLG5bMV0sMCk6TmUoblswXSxuWzFdLG5bMl0sblszXSwwKTtpZihpPD1yKXJldHVybiAyPT09KG49ZVtlLmxlbmd0aC0xXSkubGVuZ3RoP1ZlKG5bMF0sblsxXSwxKTpOZShuWzBdLG5bMV0sblsyXSxuWzNdLDEpO2ZvcihhPVtdO3I+b1srK2xdOylhLnB1c2goZVtsXSksci09b1tsXTtyZXR1cm4gMj09PShuPWVbbF0pLmxlbmd0aD9WZShuWzBdLG5bMV0sci9vW2xdKTpOZShuWzBdLG5bMV0sblsyXSxuWzNdLFdlKG5bMF0sblsxXSxuWzJdLG5bM10scikpfSxpbml0U3ZnOmZ1bmN0aW9uKHQsbil7dmFyIGUsYSxpPU8uY2FwdGlvbkxhYmVsLm5ld1RleHQodC50ZXh0LG4uYmFzZVdpbmRvdy5kb2N1bWVudCxuLnN2ZyxDK1wiLWNhcHRpb25MYWJlbC1cIit0Ll9pZCx0Lm91dGxpbmVDb2xvcik7W1wiZWxtUG9zaXRpb25cIixcInN0eWxlRmlsbFwiLFwic3R5bGVTaG93XCIsXCJlbG1zQXBwZW5kXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dFtlXT1pW2VdfSksdC5pc1Nob3duPSExLHQuc3R5bGVTaG93LnZpc2liaWxpdHk9XCJoaWRkZW5cIixPLmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe251bGwhPXRbZV0mJihpLnN0eWxlVGV4dFtlXT10W2VdKX0pLGkuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uKGUpe24uc3ZnLmFwcGVuZENoaWxkKGUpfSksZT1pLmVsbVBvc2l0aW9uLmdldEJCb3goKSx0LndpZHRoPWUud2lkdGgsdC5oZWlnaHQ9ZS5oZWlnaHQsdC5vdXRsaW5lQ29sb3ImJihhPWUuaGVpZ2h0LzksaS5zdHlsZVN0cm9rZS5zdHJva2VXaWR0aD0oYT0xMDxhPzEwOmE8Mj8yOmEpK1wicHhcIixpLnN0eWxlU3Ryb2tlLnN0cm9rZT10Lm91dGxpbmVDb2xvciksdC5zdHJva2VXaWR0aD1hfHwwLFllKHQuYXBsU3RhdHMsTy5jYXB0aW9uTGFiZWwuc3RhdHMpLHQudXBkYXRlQ29sb3IobiksdC5yZWZTb2NrZXRYWT90LnVwZGF0ZVNvY2tldFhZKG4pOnQudXBkYXRlUGF0aChuKSxyZSYmJGUobix7fSksdC51cGRhdGVTaG93KG4pfSxiaW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG49dC5wcm9wcztyZXR1cm4gZS5jb2xvcnx8R2UobixcImN1cl9saW5lX2NvbG9yXCIsZS51cGRhdGVDb2xvciksKGUucmVmU29ja2V0WFk9XCJzdGFydExhYmVsXCI9PT10Lm9wdGlvbk5hbWV8fFwiZW5kTGFiZWxcIj09PXQub3B0aW9uTmFtZSk/KGUuc29ja2V0SW5kZXg9XCJzdGFydExhYmVsXCI9PT10Lm9wdGlvbk5hbWU/MDoxLEdlKG4sXCJhcGxfcG9zaXRpb25cIixlLnVwZGF0ZVNvY2tldFhZKSxlLm9mZnNldHx8KEdlKG4sXCJjdXJfYXR0YWNoX3BsdWdTaWRlTGVuU0VcIixlLnVwZGF0ZVNvY2tldFhZKSxHZShuLFwiY3VyX2xpbmVfc3Ryb2tlV2lkdGhcIixlLnVwZGF0ZVNvY2tldFhZKSkpOkdlKG4sXCJhcGxfcGF0aFwiLGUudXBkYXRlUGF0aCksR2UobixcInN2Z1Nob3dcIixlLnVwZGF0ZVNob3cpLHJlJiZHZShuLFwibmV3X2VkZ2U0dmlld0JveFwiLGUuYWRqdXN0RWRnZSksTy5jYXB0aW9uTGFiZWwuaW5pdFN2ZyhlLG4pLCEwfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj10LnByb3BzO2UuZWxtc0FwcGVuZCYmKGUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uKGUpe24uc3ZnLnJlbW92ZUNoaWxkKGUpfSksZS5lbG1Qb3NpdGlvbj1lLnN0eWxlRmlsbD1lLnN0eWxlU2hvdz1lLmVsbXNBcHBlbmQ9bnVsbCksWWUoZS5jdXJTdGF0cyxPLmNhcHRpb25MYWJlbC5zdGF0cyksWWUoZS5hcGxTdGF0cyxPLmNhcHRpb25MYWJlbC5zdGF0cyksZS5jb2xvcnx8RGUobixcImN1cl9saW5lX2NvbG9yXCIsZS51cGRhdGVDb2xvciksZS5yZWZTb2NrZXRYWT8oRGUobixcImFwbF9wb3NpdGlvblwiLGUudXBkYXRlU29ja2V0WFkpLGUub2Zmc2V0fHwoRGUobixcImN1cl9hdHRhY2hfcGx1Z1NpZGVMZW5TRVwiLGUudXBkYXRlU29ja2V0WFkpLERlKG4sXCJjdXJfbGluZV9zdHJva2VXaWR0aFwiLGUudXBkYXRlU29ja2V0WFkpKSk6RGUobixcImFwbF9wYXRoXCIsZS51cGRhdGVQYXRoKSxEZShuLFwic3ZnU2hvd1wiLGUudXBkYXRlU2hvdykscmUmJihEZShuLFwibmV3X2VkZ2U0dmlld0JveFwiLGUuYWRqdXN0RWRnZSksJGUobix7fSkpfSxyZW1vdmVPcHRpb246ZnVuY3Rpb24oZSx0KXt2YXIgbj10LnByb3BzLGE9e307YVt0Lm9wdGlvbk5hbWVdPVwiXCIsaXQobixhKX0scmVtb3ZlOmZ1bmN0aW9uKHQpe3QuYm91bmRUYXJnZXRzLmxlbmd0aCYmKGNvbnNvbGUuZXJyb3IoXCJMZWFkZXJMaW5lQXR0YWNobWVudCB3YXMgbm90IHVuYm91bmQgYnkgcmVtb3ZlXCIpLHQuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oZSl7Ty5jYXB0aW9uTGFiZWwudW5iaW5kKHQsZSl9KSl9fSxwYXRoTGFiZWw6e3R5cGU6XCJsYWJlbFwiLGFyZ09wdGlvbnM6W3tvcHRpb25OYW1lOlwidGV4dFwiLHR5cGU6XCJzdHJpbmdcIn1dLHN0YXRzOntjb2xvcjp7fSxzdGFydE9mZnNldDp7fSxwYXRoRGF0YTp7fX0saW5pdDpmdW5jdGlvbihsLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0LnRleHQmJihsLnRleHQ9dC50ZXh0LnRyaW0oKSksISFsLnRleHQmJihcInN0cmluZ1wiPT10eXBlb2YgdC5jb2xvciYmKGwuY29sb3I9dC5jb2xvci50cmltKCkpLGwub3V0bGluZUNvbG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0Lm91dGxpbmVDb2xvcj90Lm91dGxpbmVDb2xvci50cmltKCk6XCIjZmZmXCIscGUodC5saW5lT2Zmc2V0KSYmKGwubGluZU9mZnNldD10LmxpbmVPZmZzZXQpLE8uY2FwdGlvbkxhYmVsLnRleHRTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24oZSl7bnVsbCE9dFtlXSYmKGxbZV09dFtlXSl9KSxsLnVwZGF0ZUNvbG9yPWZ1bmN0aW9uKGUpe08uY2FwdGlvbkxhYmVsLnVwZGF0ZUNvbG9yKGwsZSl9LGwudXBkYXRlUGF0aD1mdW5jdGlvbihlKXt2YXIgdD1sLmN1clN0YXRzLG49bC5hcGxTdGF0cyxhPWUuY3VyU3RhdHMsaT1lLnBhdGhMaXN0LmFuaW1WYWx8fGUucGF0aExpc3QuYmFzZVZhbDtpJiYodC5wYXRoRGF0YT1hPU8ucGF0aExhYmVsLmdldE9mZnNldFBhdGhEYXRhKGksYS5saW5lX3N0cm9rZVdpZHRoLzIrbC5zdHJva2VXaWR0aC8yK2wuaGVpZ2h0LzQsMS4yNSpsLmhlaWdodCksRmUoYSxuLnBhdGhEYXRhKSYmKGwuZWxtUGF0aC5zZXRQYXRoRGF0YShhKSxuLnBhdGhEYXRhPWEsbC5iQm94PWwuZWxtUG9zaXRpb24uZ2V0QkJveCgpLGwudXBkYXRlU3RhcnRPZmZzZXQoZSkpKX0sbC51cGRhdGVTdGFydE9mZnNldD1mdW5jdGlvbihlKXt2YXIgaSx0LG49bC5jdXJTdGF0cyxhPWwuYXBsU3RhdHMsbz1lLmN1clN0YXRzO24ucGF0aERhdGEmJigyPT09bC5zZW1JbmRleCYmIWwubGluZU9mZnNldHx8KHQ9bi5wYXRoRGF0YS5yZWR1Y2UoZnVuY3Rpb24oZSx0KXt2YXIgbixhPXQudmFsdWVzO3N3aXRjaCh0LnR5cGUpe2Nhc2VcIk1cIjppPXt4OmFbMF0seTphWzFdfTticmVhaztjYXNlXCJMXCI6bj17eDphWzBdLHk6YVsxXX0saSYmKGUrPUFlKGksbikpLGk9bjticmVhaztjYXNlXCJDXCI6bj17eDphWzRdLHk6YVs1XX0saSYmKGUrPVRlKGkse3g6YVswXSx5OmFbMV19LHt4OmFbMl0seTphWzNdfSxuKSksaT1ufXJldHVybiBlfSwwKSxlPTA9PT1sLnNlbUluZGV4PzA6MT09PWwuc2VtSW5kZXg/dDp0LzIsMiE9PWwuc2VtSW5kZXgmJihvPU1hdGgubWF4KG8uYXR0YWNoX3BsdWdCYWNrTGVuU0VbbC5zZW1JbmRleF18fDAsby5saW5lX3N0cm9rZVdpZHRoLzIpK2wuc3Ryb2tlV2lkdGgvMitsLmhlaWdodC80LGU9KGUrPTA9PT1sLnNlbUluZGV4P286LW8pPDA/MDp0PGU/dDplKSxsLmxpbmVPZmZzZXQmJihlPShlKz1sLmxpbmVPZmZzZXQpPDA/MDp0PGU/dDplKSxuLnN0YXJ0T2Zmc2V0PWUsWGUobCxhLFwic3RhcnRPZmZzZXRcIixlKSYmKGwuZWxtT2Zmc2V0LnN0YXJ0T2Zmc2V0LmJhc2VWYWwudmFsdWU9ZSkpKX0sbC51cGRhdGVTaG93PWZ1bmN0aW9uKGUpe08uY2FwdGlvbkxhYmVsLnVwZGF0ZVNob3cobCxlKX0scmUmJihsLmFkanVzdEVkZ2U9ZnVuY3Rpb24oZSx0KXtsLmJCb3gmJk8uY2FwdGlvbkxhYmVsLmFkanVzdEVkZ2UodCxsLmJCb3gsbC5zdHJva2VXaWR0aC8yKX0pLCEwKX0sZ2V0T2Zmc2V0UGF0aERhdGE6ZnVuY3Rpb24oZSxjLG4pe3ZhciBkLGEsZj1bXTtmdW5jdGlvbiB5KGUsdCl7cmV0dXJuIE1hdGguYWJzKGUueC10LngpPDMmJk1hdGguYWJzKGUueS10LnkpPDN9cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdCxuLGEsaSxvLGwscixzLHUsaCxwOzI9PT1lLmxlbmd0aD8ocz1lWzBdLHU9ZVsxXSxoPWMscD1NYXRoLmF0YW4yKHMueS11LnksdS54LXMueCkrLjUqTWF0aC5QSSx0PVt7eDpzLngrTWF0aC5jb3MocCkqaCx5OnMueStNYXRoLnNpbihwKSpoKi0xfSx7eDp1LngrTWF0aC5jb3MocCkqaCx5OnUueStNYXRoLnNpbihwKSpoKi0xfV0sZD8oYT1kLnBvaW50cywwPD0ocj1NYXRoLmF0YW4yKGFbMV0ueS1hWzBdLnksYVswXS54LWFbMV0ueCktTWF0aC5hdGFuMihlWzBdLnktZVsxXS55LGVbMV0ueC1lWzBdLngpKSYmcjw9TWF0aC5QST9uPXt0eXBlOlwibGluZVwiLHBvaW50czp0LGluc2lkZTohMH06KG89UGUoYVswXSxhWzFdLGMpLGk9UGUodFsxXSx0WzBdLGMpLGw9YVswXSxzPXRbMV0scD0odT1vKS54LWwueCxoPXUueS1sLnkscj1zLngtaS54LHU9cy55LWkueSxzPSgtaCoobC54LWkueCkrcCoobC55LWkueSkpLygtcipoK3AqdSksdT0ocioobC55LWkueSktdSoobC54LWkueCkpLygtcipoK3AqdSksbj0oaD0wPD1zJiZzPD0xJiYwPD11JiZ1PD0xP3t4OmwueCt1KnAseTpsLnkrdSpofTpudWxsKT97dHlwZTpcImxpbmVcIixwb2ludHM6W2FbMV09aCx0WzFdXX06KGFbMV09eShpLG8pP2k6byx7dHlwZTpcImxpbmVcIixwb2ludHM6W2ksdFsxXV19KSxkLmxlbj1BZShhWzBdLGFbMV0pKSk6bj17dHlwZTpcImxpbmVcIixwb2ludHM6dH0sbi5sZW49QWUobi5wb2ludHNbMF0sbi5wb2ludHNbMV0pLGYucHVzaChkPW4pKTooZi5wdXNoKHt0eXBlOlwiY3ViaWNcIixwb2ludHM6ZnVuY3Rpb24oZSx0LG4sYSxpLG8pe2Zvcih2YXIgbCxyLHM9VGUoZSx0LG4sYSkvbyx1PTEvKG88aT9pL28qczpzKSxoPVtdLHA9MDtyPSg5MC0obD1OZShlLHQsbixhLHApKS5hbmdsZSkqKE1hdGguUEkvMTgwKSxoLnB1c2goe3g6bC54K01hdGguY29zKHIpKmkseTpsLnkrTWF0aC5zaW4ocikqaSotMX0pLCEoMTw9cCk7KTE8KHArPXUpJiYocD0xKTtyZXR1cm4gaH0oZVswXSxlWzFdLGVbMl0sZVszXSxjLDE2KX0pLGQ9bnVsbCl9KSxkPW51bGwsZi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0O2Q9XCJsaW5lXCI9PT1lLnR5cGU/KGUuaW5zaWRlJiYoZC5sZW4+Yz8oKHQ9ZC5wb2ludHMpWzFdPVBlKHRbMF0sdFsxXSwtYyksZC5sZW49QWUodFswXSx0WzFdKSk6KGQucG9pbnRzPW51bGwsZC5sZW49MCksZS5sZW4+YytuPygodD1lLnBvaW50cylbMF09UGUodFsxXSx0WzBdLC0oYytuKSksZS5sZW49QWUodFswXSx0WzFdKSk6KGUucG9pbnRzPW51bGwsZS5sZW49MCkpLGUpOm51bGx9KSxmLnJlZHVjZShmdW5jdGlvbih0LGUpe3ZhciBuPWUucG9pbnRzO3JldHVybiBuJiYoYSYmeShuWzBdLGEpfHx0LnB1c2goe3R5cGU6XCJNXCIsdmFsdWVzOltuWzBdLngsblswXS55XX0pLFwibGluZVwiPT09ZS50eXBlP3QucHVzaCh7dHlwZTpcIkxcIix2YWx1ZXM6W25bMV0ueCxuWzFdLnldfSk6KG4uc2hpZnQoKSxuLmZvckVhY2goZnVuY3Rpb24oZSl7dC5wdXNoKHt0eXBlOlwiTFwiLHZhbHVlczpbZS54LGUueV19KX0pKSxhPW5bbi5sZW5ndGgtMV0pLHR9LFtdKX0sbmV3VGV4dDpmdW5jdGlvbihlLHQsbixhKXt2YXIgaSxvLGwscixzPXQuY3JlYXRlRWxlbWVudE5TKGFlLFwiZGVmc1wiKSx1PXMuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYWUsXCJwYXRoXCIpKTtyZXR1cm4gdS5pZD1pPW4rXCItcGF0aFwiLChsPShvPXQuY3JlYXRlRWxlbWVudE5TKGFlLFwidGV4dFwiKSkuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYWUsXCJ0ZXh0UGF0aFwiKSkpLmhyZWYuYmFzZVZhbD1cIiNcIitpLGwuc3RhcnRPZmZzZXQuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwwKSxsLnRleHRDb250ZW50PWUsXCJib29sZWFuXCIhPXR5cGVvZiBoJiYoaD1cInBhaW50T3JkZXJcImluIG8uc3R5bGUpLGEmJiFoPyhvLmlkPWU9bitcIi10ZXh0XCIscy5hcHBlbmRDaGlsZChvKSwocj0obj10LmNyZWF0ZUVsZW1lbnROUyhhZSxcImdcIikpLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGFlLFwidXNlXCIpKSkuaHJlZi5iYXNlVmFsPVwiI1wiK2UsKHQ9bi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhhZSxcInVzZVwiKSkpLmhyZWYuYmFzZVZhbD1cIiNcIitlLChyPXIuc3R5bGUpLnN0cm9rZUxpbmVqb2luPVwicm91bmRcIix7ZWxtUG9zaXRpb246byxlbG1QYXRoOnUsZWxtT2Zmc2V0Omwsc3R5bGVUZXh0Om8uc3R5bGUsc3R5bGVGaWxsOnQuc3R5bGUsc3R5bGVTdHJva2U6cixzdHlsZVNob3c6bi5zdHlsZSxlbG1zQXBwZW5kOltzLG5dfSk6KHI9by5zdHlsZSxhJiYoci5zdHJva2VMaW5lam9pbj1cInJvdW5kXCIsci5wYWludE9yZGVyPVwic3Ryb2tlXCIpLHtlbG1Qb3NpdGlvbjpvLGVsbVBhdGg6dSxlbG1PZmZzZXQ6bCxzdHlsZVRleHQ6cixzdHlsZUZpbGw6cixzdHlsZVN0cm9rZTphP3I6bnVsbCxzdHlsZVNob3c6cixlbG1zQXBwZW5kOltzLG9dfSl9LGluaXRTdmc6ZnVuY3Rpb24odCxuKXt2YXIgZSxhLGksbz1PLnBhdGhMYWJlbC5uZXdUZXh0KHQudGV4dCxuLmJhc2VXaW5kb3cuZG9jdW1lbnQsQytcIi1wYXRoTGFiZWwtXCIrdC5faWQsdC5vdXRsaW5lQ29sb3IpO1tcImVsbVBvc2l0aW9uXCIsXCJlbG1QYXRoXCIsXCJlbG1PZmZzZXRcIixcInN0eWxlRmlsbFwiLFwic3R5bGVTaG93XCIsXCJlbG1zQXBwZW5kXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dFtlXT1vW2VdfSksdC5pc1Nob3duPSExLHQuc3R5bGVTaG93LnZpc2liaWxpdHk9XCJoaWRkZW5cIixPLmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe251bGwhPXRbZV0mJihvLnN0eWxlVGV4dFtlXT10W2VdKX0pLG8uZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uKGUpe24uc3ZnLmFwcGVuZENoaWxkKGUpfSksby5lbG1QYXRoLnNldFBhdGhEYXRhKFt7dHlwZTpcIk1cIix2YWx1ZXM6WzAsMTAwXX0se3R5cGU6XCJoXCIsdmFsdWVzOlsxMDBdfV0pLGxlJiYoaT1vLmVsbU9mZnNldC5ocmVmLmJhc2VWYWwsby5lbG1PZmZzZXQuaHJlZi5iYXNlVmFsPVwiXCIpLGU9by5lbG1Qb3NpdGlvbi5nZXRCQm94KCksbGUmJihvLmVsbU9mZnNldC5ocmVmLmJhc2VWYWw9aSksby5zdHlsZVRleHQudGV4dEFuY2hvcj1bXCJzdGFydFwiLFwiZW5kXCIsXCJtaWRkbGVcIl1bdC5zZW1JbmRleF0sMiE9PXQuc2VtSW5kZXh8fHQubGluZU9mZnNldHx8by5lbG1PZmZzZXQuc3RhcnRPZmZzZXQuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFLDUwKSx0LmhlaWdodD1lLmhlaWdodCx0Lm91dGxpbmVDb2xvciYmKGE9ZS5oZWlnaHQvOSxvLnN0eWxlU3Ryb2tlLnN0cm9rZVdpZHRoPShhPTEwPGE/MTA6YTwyPzI6YSkrXCJweFwiLG8uc3R5bGVTdHJva2Uuc3Ryb2tlPXQub3V0bGluZUNvbG9yKSx0LnN0cm9rZVdpZHRoPWF8fDAsWWUodC5hcGxTdGF0cyxPLnBhdGhMYWJlbC5zdGF0cyksdC51cGRhdGVDb2xvcihuKSx0LnVwZGF0ZVBhdGgobiksdC51cGRhdGVTdGFydE9mZnNldChuKSxyZSYmJGUobix7fSksdC51cGRhdGVTaG93KG4pfSxiaW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG49dC5wcm9wcztyZXR1cm4gZS5jb2xvcnx8R2UobixcImN1cl9saW5lX2NvbG9yXCIsZS51cGRhdGVDb2xvciksR2UobixcImN1cl9saW5lX3N0cm9rZVdpZHRoXCIsZS51cGRhdGVQYXRoKSxHZShuLFwiYXBsX3BhdGhcIixlLnVwZGF0ZVBhdGgpLGUuc2VtSW5kZXg9XCJzdGFydExhYmVsXCI9PT10Lm9wdGlvbk5hbWU/MDpcImVuZExhYmVsXCI9PT10Lm9wdGlvbk5hbWU/MToyLDI9PT1lLnNlbUluZGV4JiYhZS5saW5lT2Zmc2V0fHxHZShuLFwiY3VyX2F0dGFjaF9wbHVnQmFja0xlblNFXCIsZS51cGRhdGVTdGFydE9mZnNldCksR2UobixcInN2Z1Nob3dcIixlLnVwZGF0ZVNob3cpLHJlJiZHZShuLFwibmV3X2VkZ2U0dmlld0JveFwiLGUuYWRqdXN0RWRnZSksTy5wYXRoTGFiZWwuaW5pdFN2ZyhlLG4pLCEwfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj10LnByb3BzO2UuZWxtc0FwcGVuZCYmKGUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uKGUpe24uc3ZnLnJlbW92ZUNoaWxkKGUpfSksZS5lbG1Qb3NpdGlvbj1lLmVsbVBhdGg9ZS5lbG1PZmZzZXQ9ZS5zdHlsZUZpbGw9ZS5zdHlsZVNob3c9ZS5lbG1zQXBwZW5kPW51bGwpLFllKGUuY3VyU3RhdHMsTy5wYXRoTGFiZWwuc3RhdHMpLFllKGUuYXBsU3RhdHMsTy5wYXRoTGFiZWwuc3RhdHMpLGUuY29sb3J8fERlKG4sXCJjdXJfbGluZV9jb2xvclwiLGUudXBkYXRlQ29sb3IpLERlKG4sXCJjdXJfbGluZV9zdHJva2VXaWR0aFwiLGUudXBkYXRlUGF0aCksRGUobixcImFwbF9wYXRoXCIsZS51cGRhdGVQYXRoKSwyPT09ZS5zZW1JbmRleCYmIWUubGluZU9mZnNldHx8RGUobixcImN1cl9hdHRhY2hfcGx1Z0JhY2tMZW5TRVwiLGUudXBkYXRlU3RhcnRPZmZzZXQpLERlKG4sXCJzdmdTaG93XCIsZS51cGRhdGVTaG93KSxyZSYmKERlKG4sXCJuZXdfZWRnZTR2aWV3Qm94XCIsZS5hZGp1c3RFZGdlKSwkZShuLHt9KSl9LHJlbW92ZU9wdGlvbjpmdW5jdGlvbihlLHQpe3ZhciBuPXQucHJvcHMsYT17fTthW3Qub3B0aW9uTmFtZV09XCJcIixpdChuLGEpfSxyZW1vdmU6ZnVuY3Rpb24odCl7dC5ib3VuZFRhcmdldHMubGVuZ3RoJiYoY29uc29sZS5lcnJvcihcIkxlYWRlckxpbmVBdHRhY2htZW50IHdhcyBub3QgdW5ib3VuZCBieSByZW1vdmVcIiksdC5ib3VuZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbihlKXtPLnBhdGhMYWJlbC51bmJpbmQodCxlKX0pKX19fSxPYmplY3Qua2V5cyhPKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe290W2VdPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBNKE9bZV0sQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9fSksb3QuUz1TLG90LlNlPVNlLG90LiRlPSRlLG90fSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyTGluZTtcclxuIiwiaW1wb3J0IExlYWRlckxpbmUgZnJvbSBcIi4vTGVhZGVyTGluZVwiO1xyXG5pbXBvcnQgZGVmaW5lUGx1Zyx7c2V0TGluZVBsdWdTdHlsZX0gZnJvbSBcIi4vRGVmaW5lUGx1Z1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtlckxpbmUgZXh0ZW5kcyBMZWFkZXJMaW5lIHsgXHJcbiAgICAjZWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBwcm9wcy5oaWRlPXByb3BzLmhpZGRlbjtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgY29uc3Qge2lkfT10aGlzO1xyXG4gICAgICAgIHN0YXRpY3MubGluZW1hcFtpZF09dGhpcztcclxuICAgICAgICB0aGlzLiNlbGVtZW50PUxlYWRlckxpbmUuU2VbaWRdLnN2ZztcclxuICAgICAgICBjb25zdCB7cGFyZW50PXRoaXMuZW5kLnBhcmVudE5vZGV9PXByb3BzO1xyXG4gICAgICAgIGlmKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuICAgICAgICAgICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uPT09XCJzdGF0aWNcIil7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHNldExpbmVQbHVnU3R5bGUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBkYXNoKHZhbHVlKXtcclxuICAgICAgICB0b0xlYWRlckxpbmVEYXNoKHZhbHVlKTtcclxuICAgICAgICBzdXBlci5kYXNoPXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uKCl7XHJcbiAgICAgICAgc3VwZXIucG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCB7ZWxlbWVudH09dGhpcyxwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IHtsZWZ0LHRvcH09cGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGUoJHtwYXJlbnQuc2Nyb2xsTGVmdC1sZWZ0fXB4LCR7cGFyZW50LnNjcm9sbFRvcC10b3B9cHgpYDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGVmZmVjdE5hbWUsb3B0aW9ucyl7XHJcbiAgICAgICAgdG9MZWFkZXJMaW5lQW5pbWF0aW9uT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBzdXBlci5zaG93KGVmZmVjdE5hbWUsb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoZWZmZWN0TmFtZSxvcHRpb25zKXtcclxuICAgICAgICB0b0xlYWRlckxpbmVBbmltYXRpb25PcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHN1cGVyLmhpZGUoZWZmZWN0TmFtZSxvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICBkZWxldGUgc3RhdGljcy5saW5lbWFwW3RoaXMuaWRdO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPcHRpb25zKG9wdGlvbnMpe1xyXG4gICAgICAgIHRvTGVhZGVyTGluZURhc2gob3B0aW9ucy5kYXNoKTtcclxuICAgICAgICBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50KCl7cmV0dXJuIHRoaXMuI2VsZW1lbnR9O1xyXG5cclxuICAgIGdldCBpZCgpe3JldHVybiB0aGlzLl9pZH07XHJcblxyXG4gICAgZ2V0IHN0YXJ0KCl7cmV0dXJuIHN1cGVyLnN0YXJ0fTtcclxuICAgIGdldCBlbmQoKXtyZXR1cm4gc3VwZXIuZW5kfTtcclxuXHJcbiAgICBnZXQgY29sb3IoKXtyZXR1cm4gc3VwZXIuY29sb3J9O1xyXG4gICAgZ2V0IHNpemUoKXtyZXR1cm4gc3VwZXIuc2l6ZX07XHJcblxyXG4gICAgc3RhdGljIGRlZmluZVBsdWcob3B0aW9ucyl7XHJcbiAgICAgICAgZGVmaW5lUGx1ZyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcG9zaXRpb25BbGwoKXtcclxuICAgICAgICBjb25zdCB7bGluZW1hcH09c3RhdGljcztcclxuICAgICAgICBmb3IoY29uc3QgbGluZUlkIGluIGxpbmVtYXApe1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lPWxpbmVtYXBbbGluZUlkXTtcclxuICAgICAgICAgICAgbGluZS5zdGFydC5pc0Nvbm5lY3RlZCYmbGluZS5lbmQuaXNDb25uZWN0ZWQmJmxpbmUucG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFBvaW50QW5jaG9yKGVsZW1lbnQsb3B0aW9ucyl7XHJcbiAgICAgICAgcmV0dXJuIExlYWRlckxpbmUucG9pbnRBbmNob3IoZWxlbWVudCxvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQXJlYUFuY2hvcihlbGVtZW50LG9wdGlvbnMpe1xyXG4gICAgICAgIHJldHVybiBMZWFkZXJMaW5lLmFyZWFBbmNob3IoZWxlbWVudCxvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgTW91c2VIb3ZlckFuY2hvcihlbGVtZW50LG9wdGlvbnMpe1xyXG4gICAgICAgIGlmKG9wdGlvbnMpe1xyXG4gICAgICAgICAgICBjb25zdCB7b25Ub2dnbGV9PW9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmKG9uVG9nZ2xlKXtvcHRpb25zLm9uU3dpdGNoPW9uVG9nZ2xlfTtcclxuICAgICAgICAgICAgb3B0aW9ucy5hbmltT3B0aW9ucz10b0xlYWRlckxpbmVBbmltYXRpb25PcHRpb25zKG9wdGlvbnMuYW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIExlYWRlckxpbmUubW91c2VIb3ZlckFuY2hvcihlbGVtZW50LG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBMYWJlbCh0ZXh0LG9wdGlvbnMpe1xyXG4gICAgICAgIGNvbnN0IHtvbj1cInBhdGhcIn09b3B0aW9uc3x8e307XHJcbiAgICAgICAgaWYob3B0aW9ucyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtvZmZzZXR9PW9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihvZmZzZXQpPT09XCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9mZnNldD1bb2Zmc2V0LG9mZnNldF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMub3V0bGluZUNvbG9yKXtvcHRpb25zLm91dGxpbmVDb2xvcj1cInRyYW5zcGFyZW50XCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBMZWFkZXJMaW5lRW50aXR5PUxlYWRlckxpbmVbb249PT1cInBhdGhcIj9cInBhdGhMYWJlbFwiOlwiY2FwdGlvbkxhYmVsXCJdO1xyXG4gICAgICAgIHJldHVybiBMZWFkZXJMaW5lRW50aXR5KHRleHQsb3B0aW9ucyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBwbHVncygpe3JldHVybiBPYmplY3Qua2V5cyhMZWFkZXJMaW5lLnBsdWdzKX07XHJcblxyXG4gICAgc3RhdGljIGdldCBuYW1lcygpe3JldHVybiBPYmplY3Qua2V5cyhMZWFkZXJMaW5lLm5hbWVzKX07XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRpY3M9e1xyXG4gICAgbGluZW1hcDp7fSxcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoKT0+e1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKExpbmtlckxpbmUucG9zaXRpb25BbGwpO1xyXG59LGZhbHNlKTtcclxuXHJcbmNvbnN0IHRvTGVhZGVyTGluZURhc2g9KGRhc2gpPT57XHJcbiAgICBpZihkYXNoJiYodHlwZW9mKGRhc2gpPT09XCJvYmplY3RcIikpe1xyXG4gICAgICAgIHRvTGVhZGVyTGluZUFuaW1hdGlvbk9wdGlvbnMoZGFzaC5hbmltYXRpb24pO1xyXG4gICAgICAgIGRhc2gubGVuPWRhc2gubGVuZ3RoO1xyXG4gICAgICAgIGRlbGV0ZSBkYXNoLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdG9MZWFkZXJMaW5lQW5pbWF0aW9uT3B0aW9ucz0ob3B0aW9ucyk9PntcclxuICAgIGlmKG9wdGlvbnMmJih0eXBlb2Yob3B0aW9ucyk9PT1cIm9iamVjdFwiKSl7XHJcbiAgICAgICAgb3B0aW9ucy50aW1pbmc9b3B0aW9ucy5lYXNpbmc7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWFzaW5nO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGYwMjQyYzAmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmE1NjQ1MDAmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YzI2MTRiZCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiNTliZTg3Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyN2Q5NDJhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjAyNDJjMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmMDI0MmMwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImRmMDI0MmMwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZGYwMjQyYzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdkZjAyNDJjMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMDI0MmMwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJ2RmMDI0MmMwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhNTY0NTAwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmE1NjQ1MDBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YTU2NDUwMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YTU2NDUwMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzI2MTRiZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YzI2MTRiZFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZjMjYxNGJkJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNmMyNjE0YmQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMyNjE0YmRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNmMyNjE0YmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjU5YmU4NyZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiN2I1OWJlODdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3YjU5YmU4NycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzdiNTliZTg3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiNTliZTg3XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzdiNTliZTg3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjg1YTAzM2JhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnODVhMDMzYmEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1YTAzM2JhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzg1YTAzM2JhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzI3ZDk0MmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczMjdkOTQyYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzMyN2Q5NDJhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIm5hbWUiLCJlbWl0cyIsInByb3BzIiwic2NoZW1lX2NvZGUiLCJTdHJpbmciLCJjb250ZXh0IiwiT2JqZWN0IiwiY29udGV4dF90eXBlIiwibW91c2VfeCIsIk51bWJlciIsIm1vdXNlX3kiLCJkYXRhIiwiaXRlbXMiLCJ4IiwieSIsIndhdGNoIiwiZ2V0TWVudUl0ZW1zIiwiY29tcHV0ZWQiLCJtb2R1bGVTdHlsZSIsImxlZnQiLCJjb25jYXQiLCJ0b3AiLCJtZXRob2RzIiwiY2xvc2UiLCIkZW1pdCIsIl90aGlzIiwiS3JpdGkiLCJhcGkiLCJ1cmwiLCJ0eXBlIiwidXVpZCIsInRoZW4iLCJyZXNwb25zZSIsImNsaWNrSXRlbSIsIml0ZW0iLCJjb2RlIiwiXyIsImNsb25lRGVlcCIsIk1vZHVsZSIsImNvbXBvbmVudHMiLCJub2RlIiwicG9pbnQiLCJDb250cm9sUGFuZWwiLCJub2RlX21lbnUiLCJhY3RpdmVfbWV0aG9kIiwiYnV0dG9ucyIsImljb24iLCJjbGljayIsInNldERhdGEiLCJfdGhpczIiLCJnZXREYXRhIiwibWV0aG9kIiwidmFyaWFibGUiLCJfdGhpczMiLCJ0cmFuc2Zvcm1NZXRob2QiLCJfdGhpczQiLCJ2YWx1ZXMiLCJnZXRDb250ZW50IiwicHJlZml4IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkxlYWRlckxpbmUiLCJOb2RlIiwiTm9kZU1vZGFsIiwiQ29udGV4dE1lbnUiLCJMaW5rZXJMaW5lIiwiYWN0aXZlX3NjaGVtZV9jb2RlIiwic2NoZW1lIiwiY29udGV4dF9tZW51X29iamVjdCIsIndvcmtzcGFjZV93aWR0aCIsIndvcmtzcGFjZV9oZWlnaHQiLCJob2xkX3hfZmFjdG9yIiwiaG9sZF95X2ZhY3RvciIsIndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQiLCJwbGF0b194IiwicGxhdG9feSIsImFjdGl2ZV9ub2RlIiwibGFzdF9ob2xkX3giLCJsYXN0X2hvbGRfeSIsImxpbmVzIiwibGluZXNfb2JqZWN0cyIsIm5vZGVzIiwiX3RoaXMkc2NoZW1lIiwibW91bnRlZCIsImRlZmluZVdvcmtzcGFjZVNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0U2NoZW1lIiwiYWRkTGlua3MiLCJiZWZvcmVVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiRuZXh0VGljayIsInBhcmVudEVsZW1lbnQiLCIkZWwiLCJwYXJlbnROb2RlIiwiZ2xvYmFsIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJmbiIsInNhbml0aXplTm9kZXMiLCJtYXAiLCJzZXRTY2hlbWUiLCJzY2hlbWVfZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtb3ZlUGxhdG8iLCJob2xkX3BsYXRvIiwiZHJvcFBsYXRvIiwibW91c2Vtb3ZlIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwibW92ZU5vZGUiLCJub2RlSG9sZCIsImJ1dHRvbiIsInNhdmVIb2xkUG9zaXRpb24iLCJmb2N1cyIsIm5vZGVEcm9wIiwid29ya3NwYWNlQ29udGV4dE1lbnUiLCJvcGVuQ29udGV4dE1lbnUiLCJjbG9zZUNvbnRleHRNZW51IiwiY2xpY2tDb250ZXh0TWVudUl0ZW0iLCJwdXNoIiwiY3JlYXRlVVVJRCIsIl90aGlzNSIsImxpbmtzIiwibGluayIsImFkZExpbmsiLCJzYXZlIiwicGxhdG8iLCIkcmVmcyIsImVsZW1lbnRfYSIsImVsZW1lbnRfYiIsIm9wdGlvbnMiLCJwYXJlbnQiLCJzdGFydCIsImVuZCIsInN0YXJ0UGx1ZyIsImVuZFBsdWciLCJsaW5lIiwib2JqZWN0IiwiY29ycmVjdExpbmVzIiwicG9zaXRpb24iLCJjcmVhdGVMaW5rIiwiV29ya3NwYWNlIiwic3R5bGVfbW9kdWxlIiwic3R5bGUiLCJtb2R1bGUiLCJzdHlsZV9tb2R1bGVfdGl0bGUiLCJtb2R1bGVfdGl0bGUiLCIkZGF0YSIsImxlbmd0aCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCIkb3B0aW9ucyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJvbkNsaWNrIiwiJGV2ZW50IiwiX25vcm1hbGl6ZUNsYXNzIiwiX3RvRGlzcGxheVN0cmluZyIsInRleHQiLCIkcHJvcHMiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X01vZHVsZSIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfY2FjaGUiLCJfY3R4IiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzciLCJhY3RpdmUiLCJ0aXRsZSIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2NvbXBvbmVudF9Gb3JtRml0dGVyIiwiJHNsb3RzIiwiX3JlbmRlclNsb3QiLCJfaG9pc3RlZF8xMCIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfQ29udHJvbFBhbmVsIiwib25Nb3VzZWRvd24iLCJfd2l0aE1vZGlmaWVycyIsImFwcGx5IiwiYXJndW1lbnRzIiwib25Nb3VzZXVwIiwib25Nb3VzZW1vdmUiLCJvbkRibGNsaWNrIiwicmVmIiwiX2NvbXBvbmVudF9Ob2RlIiwiaWQiLCJvbkNvbnRleHRtZW51IiwiX2NvbXBvbmVudF9Ob2RlTW9kYWwiLCJvbkNsb3NlIiwib25VcGRhdGUiLCJfY29tcG9uZW50X0NvbnRleHRNZW51Iiwib25DbGlja19pdGVtIiwiX2NvbXBvbmVudF9Xb3Jrc3BhY2UiLCJzZXR0aW5ncyJdLCJzb3VyY2VSb290IjoiIn0=