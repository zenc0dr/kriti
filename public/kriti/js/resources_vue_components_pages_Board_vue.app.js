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
      plato_x_start: 0,
      // Фиксация начальных координат по оси Х
      plato_y_start: 0,
      // Фиксация начальных координат по оси Y

      body_x_factor: 0,
      // Коэффициент
      body_y_factor: 0,
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
      jQuery('body').css({
        marginLeft: _this.plato_x,
        marginTop: _this.plato_y
      });
      _this.plato_x_start = _this.plato_x;
      _this.plato_y_start = _this.plato_y;
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
        this.correctLines();
      }

      // Если двигается карта
      if (this.hold_plato) {
        this.plato_x = this.mouse_x - this.hold_x_factor;
        this.plato_y = this.mouse_y - this.hold_y_factor;
        jQuery('body').css({
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
    // Добавить сцепку
    addLink: function addLink(link) {
      var element_a = this.$refs[link[0]][0].$el;
      var element_b = this.$refs[link[1]][0].$el;
      var options = {
        startPlug: 'disc',
        endPlug: 'arrow1',
        size: 3,
        path: 'straight',
        middleLabel: ''
      };
      var line_object = leader_line_vue__WEBPACK_IMPORTED_MODULE_0__["default"].setLine(element_a, element_b, options);
      this.lines_objects.push({
        link: link,
        object: line_object
      });
    },
    correctLines: function correctLines() {
      this.body_x_factor = this.plato_x_start - this.plato_x;
      this.body_y_factor = this.plato_y_start - this.plato_y;

      // console.log('plato_x_start', this.plato_x_start)
      // console.log('plato_x', this.plato_x)
      // console.log('plato_x_start', this.plato_x_start)

      jQuery('body').css({
        marginLeft: this.plato_x + this.plato_x_start - this.plato_x,
        marginTop: this.plato_y + this.plato_y_start - this.plato_y
      });
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
___CSS_LOADER_EXPORT___.push([module.id, ".kriti-context {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.9019607843);\n  padding: 18px 16px;\n  border-radius: 4px;\n}\n.kriti-context__item {\n  background: #009eff;\n  color: #fff;\n  border-radius: 4px;\n  margin: 5px 5px;\n  padding: 10px 21px;\n  cursor: pointer;\n  transition: 200ms;\n}\n.kriti-context__item i {\n  margin-right: 10px;\n}\n.kriti-context__item:hover {\n  background: #00708e;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/ContextMenu.vue"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,6CAAA;EACA,kBAAA;EACA,kBAAA;AADJ;AAMI;EACI,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;AAJR;AAKQ;EACI,kBAAA;AAHZ;AAKQ;EACI,mBAAA;AAHZ","sourcesContent":["\n@import '../../../scss/kriti.palette.scss';\n.kriti-context {\n    position: absolute;\n    background: #ffffffe6;\n    padding: 18px 16px;\n    border-radius: 4px;\n\n    &__items {\n\n    }\n    &__item {\n        background: #009eff;\n        color: #fff;\n        border-radius: 4px;\n        margin: 5px 5px;\n        padding: 10px 21px;\n        cursor: pointer;\n        transition: 200ms;\n        i {\n            margin-right: 10px;\n        }\n        &:hover {\n            background: #00708e;\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  position: absolute;\n}\nbody > svg {\n  z-index: 1;\n}\n.workspace {\n  padding: 10px;\n  background: #e8e8e8;\n  color: #1e241e;\n}\n.workspace__plato {\n  width: 0;\n  height: 0;\n  position: relative;\n}\n.workspace .kriti-preloader {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4588235294);\n  transition: 300ms;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 100001;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Workspace.vue","webpack://./resources/scss/kriti.palette.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;AADJ;AAGI;EACI,UAAA;AADR;AAKA;EACI,aAAA;EACA,mBCZM;EDaN,cCTK;ADOT;AAII;EACI,QAAA;EACA,SAAA;EACA,kBAAA;AAFR;AAKI;EACI,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,6CAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;AAHR","sourcesContent":["\n@import '../../../scss/kriti.palette.scss';\nbody {\n    position: absolute;\n\n    > svg {\n        z-index: 1;\n    }\n}\n\n.workspace {\n    padding: 10px;\n    background: $bg-dark;\n    color: $f-dark;\n\n    &__plato {\n        width: 0;\n        height: 0;\n        position: relative;\n    }\n\n    .kriti-preloader {\n        position: fixed;\n        display: flex;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #ffffff75;\n        transition: 300ms;\n        justify-content: center;\n        align-items: center;\n        user-select: none;\n        z-index: 100001;\n    }\n}\n","$bg-dark: #e8e8e8;\n$bg-light: #d9d9d9;\n$f-def: #26551b;\n$b-def: #72bd8f;\n$f-dark: #1e241e;\n$color-100: #dc25cb;\n$color-100: #9b8d8d;\n$color-100: #144c60;\n"],"sourceRoot":""}]);
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
            return t.labelSEM[n] && !e.optionIsAttach.labelSEM[n] ? $[t.labelSEM[n]._id].html : t.labelSEM[n] || ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLGlFQUFlO0VBQ1hBLElBQUksRUFBRSxhQUFhO0VBQ25CQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0VBQzlCQyxLQUFLLEVBQUU7SUFDSEMsV0FBVyxFQUFFQyxNQUFNO0lBQ25CQyxPQUFPLEVBQUVDLE1BQU07SUFDZkMsWUFBWSxFQUFFSCxNQUFNO0lBQ3BCSSxPQUFPLEVBQUVDLE1BQU07SUFDZkMsT0FBTyxFQUFFRDtFQUNiLENBQUM7RUFDREUsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLEtBQUssRUFBRSxFQUFFO01BQ1RDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNQO0VBQ0osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSFYsT0FBTyxXQUFBQSxRQUFDQSxRQUFPLEVBQUU7TUFDYixJQUFJQSxRQUFPLEVBQUU7UUFDVCxJQUFJLENBQUNXLFlBQVksQ0FBQztRQUNsQixJQUFJLENBQUNILENBQUEsR0FBSSxJQUFJLENBQUNMLE9BQU07UUFDcEIsSUFBSSxDQUFDTSxDQUFBLEdBQUksSUFBSSxDQUFDSixPQUFNO01BQ3hCO0lBQ0o7RUFDSixDQUFDO0VBQ0RPLFFBQVEsRUFBRTtJQUNOQyxXQUFXLFdBQUFBLFlBQUEsRUFBRztNQUNWLE9BQU87UUFDSEMsSUFBSSxLQUFBQyxNQUFBLENBQUssSUFBSSxDQUFDUCxDQUFDLE9BQUk7UUFDbkJRLEdBQUcsS0FBQUQsTUFBQSxDQUFLLElBQUksQ0FBQ04sQ0FBQztNQUNsQjtJQUNKO0VBQ0osQ0FBQztFQUNEUSxPQUFPLEVBQUU7SUFDTEMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7TUFDSixJQUFJLENBQUNYLEtBQUksR0FBSSxFQUFDO01BQ2QsSUFBSSxDQUFDWSxLQUFLLENBQUMsT0FBTztJQUN0QixDQUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEdBQThHLElBQUkseUJBQXlCO0FBQzNJLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNB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QSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCb0Q7QUFDVjtBQUNMOztBQUVwRCxDQUFrRTs7QUFFcUM7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsMkVBQU0sYUFBYSw2RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnVNOzs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7Ozs7Ozs7O0FDQUs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBSjs7Ozs7Ozs7Ozs7Ozs7O0FDQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlP2QwMWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2YwMmYiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/ZTBlNCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9iOWYxIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT83ZDgyIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/NDU2YyIsIndlYnBhY2s6Ly9rcml0aS8uL25vZGVfbW9kdWxlcy9sZWFkZXItbGluZS12dWUvbGVhZGVyLWxpbmUtdnVlLmpzIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/NmRkOCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/YzZmNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT82ZmYyIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlPzJkOWQiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzQ5YmIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8yZjJmIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/NTVlNSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/NTE0OCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT8wMDMwIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2QwNWEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzYwYWIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8xYzgzIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/YjZmNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/ZjkzZCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT8xMDFhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2RlZjkiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlP2YzYzciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8wNDUxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJpdGVtcy5sZW5ndGhcIiBjbGFzcz1cImtyaXRpLWNvbnRleHRcIiA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiIHYtY2xpY2stb3V0c2lkZS1lbGVtZW50PVwiY2xvc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImtyaXRpLWNvbnRleHRfX2l0ZW1zXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIGNsYXNzPVwia3JpdGktY29udGV4dF9faXRlbVwiIEBjbGljaz1cImNsaWNrSXRlbShpdGVtKVwiPlxuICAgICAgICAgICAgICAgIDxpIHYtaWY9XCJpdGVtLmljb25cIiA6Y2xhc3M9XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAge3sgaXRlbS50ZXh0IH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQ29udGV4dE1lbnVcIixcbiAgICBlbWl0czogWydjbG9zZScsICdjbGlja19pdGVtJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2NoZW1lX2NvZGU6IFN0cmluZyxcbiAgICAgICAgY29udGV4dDogT2JqZWN0LFxuICAgICAgICBjb250ZXh0X3R5cGU6IFN0cmluZyxcbiAgICAgICAgbW91c2VfeDogTnVtYmVyLFxuICAgICAgICBtb3VzZV95OiBOdW1iZXIsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgY29udGV4dChjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVudUl0ZW1zKClcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1vdXNlX3hcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLm1vdXNlX3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMueH1weGAsXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnl9cHhgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgIH0sXG4gICAgICAgIGdldE1lbnVJdGVtcygpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLkNvbnRleHQ6Z2V0Q29udGV4dEl0ZW1zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuY29udGV4dF90eXBlLFxuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLmNvbnRleHQudXVpZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuaXRlbXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjbGlja0l0ZW0oaXRlbSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2tfaXRlbScsIGl0ZW0uY29kZSwgXy5jbG9uZURlZXAodGhpcy5jb250ZXh0KSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xuLmtyaXRpLWNvbnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZTY7XG4gICAgcGFkZGluZzogMThweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICZfX2l0ZW1zIHtcblxuICAgIH1cbiAgICAmX19pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwOWVmZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luOiA1cHggNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIxcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNzA4ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibm9kZVwiICA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiPlxuICAgICAgICA8TW9kdWxlIHYtaWY9XCJub2RlLnR5cGUgPT09ICdNb2R1bGUnXCIgOm5vZGU9XCJub2RlXCIgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKlxu0KLRg9GCINC80Ysg0L/QvtC00LrQu9GO0YfQsNC10Lwg0YLQuNC/0YsgUG9pbnQt0L7QsiDQuCDRg9C/0YDQsNCy0LvRj9C10Lwg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LXQvCDQuCDQvtCx0YnQuNC8INC/0L7QstC10LTQtdC90LjQtdC8XG4gKi9cbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uL3R5cGVzL01vZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2R1bGVcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubm9kZS5wb2ludC54fXB4YCxcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMubm9kZS5wb2ludC55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICYuZm9jdXMge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwibm9kZV9tZW51XCIgY2xhc3M9XCJub2RlLW1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCi0YPRgiDQt9Cw0LPQvtC70L7QstC+0Log0LzQvtC00YPQu9GPXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2Nsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmkteC1zcXVhcmUtZmlsbFwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIG5vZGVfbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51X19pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7YWN0aXZlOml0ZW0ubWV0aG9kID09PSBhY3RpdmVfbWV0aG9kfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0Q29udGVudChpdGVtLm1ldGhvZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRml0dGVyIHYtaWY9XCJkYXRhICE9PSBudWxsXCIgOnNjaGVtZT1cImRhdGEuc2NoZW1lXCIgdi1tb2RlbD1cImRhdGEudmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoXywgbmFtZSkgaW4gJHNsb3RzXCIgdi1zbG90OltuYW1lXT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cIm5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaXR0ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xQYW5lbCA6YnV0dG9ucz1cImJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4vRHdhcmYvZm9ybXMvQ29udHJvbFBhbmVsXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlTW9kYWxcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIENvbnRyb2xQYW5lbFxuICAgIH0sXG4gICAgZW1pdHM6IFsnY2xvc2UnLCAndXBkYXRlJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0LFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGVfbWVudTogbnVsbCxcbiAgICAgICAgICAgIGFjdGl2ZV9tZXRob2Q6ICdzdHlsZScsXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC40YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdiaSBiaS1jbG91ZC11cGxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgbm9kZShub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVfbWVudSA9IG51bGxcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnbWVudScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGU6J25vZGVfbWVudScsXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmFjdGl2ZV9tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQp9GC0LXQvdC40LUg0LjQtyDQvdC+0LTQsFxuICAgICAgICBnZXREYXRhKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzLnZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMudmFyaWFibGUgPSAnZGF0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Z2V0RGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLm5vZGUudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnRyYW5zZm9ybU1ldGhvZCgnZ2V0JywgcHJvcHMubWV0aG9kKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BzLnZhcmlhYmxlXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnRoZW4oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g0JfQsNC/0LjRgdGMINCyINC90L7QtFxuICAgICAgICBzZXREYXRhKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpzZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMubm9kZS51dWlkLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMudHJhbnNmb3JtTWV0aG9kKCdzZXQnLCB0aGlzLmFjdGl2ZV9tZXRob2QpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHRoaXMuZGF0YS52YWx1ZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UpIC8vINCf0L7RgdGL0LvQsNC10YLRgdGPINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdGF0LXQvNGLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb250ZW50KG1ldGhvZCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbWV0aG9kID0gbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5hY3RpdmVfbWV0aG9kLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9GA0LXQvtCx0YDQsNC30YPQtdGCIFwicHJlZml4LCBtZXRob2RcIiDQsiBcInByZWZpeE1ldGhvZFwiXG4gICAgICAgIHRyYW5zZm9ybU1ldGhvZChwcmVmaXgsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIG1ldGhvZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1ldGhvZC5zbGljZSgxKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICZfX2JvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG5cbiAgICB9XG5cbiAgICAmX19jbG9zZSB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjRmNGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICZfX21lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICM5ZDlkOWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcyODRkNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZFwiXG4gICAgIGNsYXNzPVwid29ya3NwYWNlXCJcbiAgICAgOnN0eWxlPVwiYHdpZHRoOiR7d29ya3NwYWNlX3dpZHRofXB4O2hlaWdodDoke3dvcmtzcGFjZV9oZWlnaHR9cHhgXCJcbiAgICAgQG1vdXNlZG93bi5jdHJsLnNlbGY9XCJtb3ZlUGxhdG9cIlxuICAgICBAbW91c2V1cC5zZWxmPVwiZHJvcFBsYXRvXCJcbiAgICAgQG1vdXNlbW92ZT1cIm1vdXNlbW92ZVwiXG4gICAgIEBkYmxjbGljay5zZWxmPVwid29ya3NwYWNlQ29udGV4dE1lbnVcIlxuPlxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc3BhY2VfX3ByZWxvYWRlclwiPjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIndvcmtzcGFjZV9fcGxhdG9cIiByZWY9XCJwbGF0b1wiIDpzdHlsZT1cImBtYXJnaW4tbGVmdDokeyBwbGF0b194IH1weDttYXJnaW4tdG9wOiR7IHBsYXRvX3kgfXB4YFwiPlxuICAgICAgICA8Tm9kZSB2LWZvcj1cIm5vZGUgaW4gbm9kZXNcIiA6bm9kZT1cIm5vZGVcIlxuICAgICAgICAgICAgIDpyZWY9XCJub2RlLnV1aWRcIiA6aWQ9XCJub2RlLnV1aWRcIiA6Y2xhc3M9XCJ7IGZvY3VzOm5vZGUgPT09IGFjdGl2ZV9ub2RlIH1cIlxuICAgICAgICAgICAgIEBtb3VzZWRvd249XCJub2RlSG9sZChub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICBAbW91c2V1cD1cIm5vZGVEcm9wXCJcbiAgICAgICAgICAgICBAY2xpY2suY3RybD1cImNyZWF0ZUxpbmsobm9kZSlcIlxuICAgICAgICAgICAgIEBjb250ZXh0bWVudS5wcmV2ZW50PVwib3BlbkNvbnRleHRNZW51KG5vZGUpXCJcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8Tm9kZU1vZGFsIDpub2RlPVwibm9kZVwiIEBjbG9zZT1cIm5vZGUgPSBudWxsXCIgQHVwZGF0ZT1cImdldFNjaGVtZVwiLz5cbiAgICA8Q29udGV4dE1lbnVcbiAgICAgICAgOmNvbnRleHQ9XCJjb250ZXh0X21lbnVfb2JqZWN0XCJcbiAgICAgICAgY29udGV4dF90eXBlPVwibm9kZVwiXG4gICAgICAgIDpzY2hlbWVfY29kZT1cImFjdGl2ZV9zY2hlbWVfY29kZVwiXG4gICAgICAgIDptb3VzZV94PVwibW91c2VfeFwiXG4gICAgICAgIDptb3VzZV95PVwibW91c2VfeVwiXG4gICAgICAgIEBjbG9zZT1cImNsb3NlQ29udGV4dE1lbnVcIlxuICAgICAgICBAY2xpY2tfaXRlbT1cImNsaWNrQ29udGV4dE1lbnVJdGVtXCJcbiAgICAvPlxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTGVhZGVyTGluZSBmcm9tIFwibGVhZGVyLWxpbmUtdnVlXCIgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Fuc2VraS9sZWFkZXItbGluZVxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IE5vZGVNb2RhbCBmcm9tIFwiLi9Ob2RlTW9kYWxcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi9Db250ZXh0TWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJXb3Jrc3BhY2VcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5vZGUsIC8vINCa0L7QvNC/0L7QvdC10L3RgiDRgNC10LDQu9C40LfRg9GO0YnQuNC5INC90L7QtNGDXG4gICAgICAgIE5vZGVNb2RhbCwgLy8g0JrQvtC80L/QvtC90LXQvdGCINGA0LDQsdC+0YfQtdC1INC+0LrQvdC+INC90L7QtNCwXG4gICAgICAgIENvbnRleHRNZW51IC8vINCa0L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y5cbiAgICB9LFxuICAgIHByb3BzOiB7XG5cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmVfc2NoZW1lX2NvZGU6ICdjYWxjdWxhdG9yJywgLy8g0JjQvNGPINCw0LrRgtC40LLQvdC+0Lkg0YLQtdC80YtcbiAgICAgICAgICAgIHNjaGVtZToge30sIC8vINCQ0LrRgtC40LLQvdCw0Y8g0YHRhdC10LzQsFxuICAgICAgICAgICAgY29udGV4dF9tZW51X29iamVjdDogbnVsbCwgLy8g0J7QsdGK0LXQutGCINC60L7QvdGC0LXQutGB0YLQvdC+0LPQviDQvNC10L3RjlxuXG4gICAgICAgICAgICBtb3VzZV94OiAwLFxuICAgICAgICAgICAgbW91c2VfeTogMCxcbiAgICAgICAgICAgIHdvcmtzcGFjZV93aWR0aDogbnVsbCwgLy8g0KjQuNGA0LjQvdCwINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgICAgICB3b3Jrc3BhY2VfaGVpZ2h0OiBudWxsLCAvLyDQktGL0YHQvtGC0LAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgICAgIGhvbGRfeF9mYWN0b3I6IG51bGwsIC8vINCf0L7Qv9GA0LDQstC60LAg0L7QsdGK0LXQutGC0LAg0L/QviB4XG4gICAgICAgICAgICBob2xkX3lfZmFjdG9yOiBudWxsLCAvLyDQn9C+0L/RgNCw0LLQutCwINC+0LHRitC10LrRgtCwINC/0L4geVxuICAgICAgICAgICAgd29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZDogZmFsc2UsIC8vINCg0LDQt9C80LXRgCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuCDQvtC/0YDQtdC00LXQu9GR0L1cblxuICAgICAgICAgICAgcGxhdG9feDogMCwgLy8g0KHQvNC10YnQtdC90LjQtSDQutCw0YDRgtGLINC/0L4g0L7RgdC4INClXG4gICAgICAgICAgICBwbGF0b195OiAwLCAvLyDQodC80LXRidC10L3QuNC1INC60LDRgNGC0Ysg0L/QviDQvtGB0LggWVxuICAgICAgICAgICAgcGxhdG9feF9zdGFydDogMCwgLy8g0KTQuNC60YHQsNGG0LjRjyDQvdCw0YfQsNC70YzQvdGL0YUg0LrQvtC+0YDQtNC40L3QsNGCINC/0L4g0L7RgdC4INClXG4gICAgICAgICAgICBwbGF0b195X3N0YXJ0OiAwLCAvLyDQpNC40LrRgdCw0YbQuNGPINC90LDRh9Cw0LvRjNC90YvRhSDQutC+0L7RgNC00LjQvdCw0YIg0L/QviDQvtGB0LggWVxuXG4gICAgICAgICAgICBib2R5X3hfZmFjdG9yOiAwLCAvLyDQmtC+0Y3RhNGE0LjRhtC40LXQvdGCXG4gICAgICAgICAgICBib2R5X3lfZmFjdG9yOiAwLFxuXG4gICAgICAgICAgICBub2RlOiBudWxsLCAvLyDQlNCw0L3QvdGL0LUg0L3QvtC00LBcbiAgICAgICAgICAgIGFjdGl2ZV9ub2RlOiBudWxsLCAvLyDQktGL0LTQtdC70LXQvdC90YvQuSDQvdC+0LRcbiAgICAgICAgICAgIGxhc3RfaG9sZF94OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFhcbiAgICAgICAgICAgIGxhc3RfaG9sZF95OiAwLCAvLyDQn9C+0LfQuNGG0LjRjyDQvdC+0LTQsCDQv9C10YDQtdC0INC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCDQv9C+IFlcblxuICAgICAgICAgICAgbGluZXM6IFtdLCAvLyDQm9C40L3QuNC4IC0g0YHQstGP0LfQuFxuICAgICAgICAgICAgbGluZXNfb2JqZWN0czogW10sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG5vZGVzKCkgeyAvLyDQndC+0LTRiyDRgdGF0LXQvNGLXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWU/Lm5vZGVzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSgpIC8vINCj0YHRgtCw0L3QvtCy0LjRgtGMINGA0LDQt9C80LXRgNGLINC+0LrQvdCwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUpXG4gICAgICAgIHRoaXMuZ2V0U2NoZW1lKCgpID0+IHtcbiAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhpcy5wbGF0b194LFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5wbGF0b195LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucGxhdG9feF9zdGFydCA9IHRoaXMucGxhdG9feFxuICAgICAgICAgICAgdGhpcy5wbGF0b195X3N0YXJ0ID0gdGhpcy5wbGF0b195XG4gICAgICAgICAgICB0aGlzLmFkZExpbmtzKClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGJlZm9yZVVubW91bnQoKSB7IC8vINCf0LXRgNC10LQg0YDQsNC30LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0YPQtNCw0LvQuNGC0Ywg0YHQu9GD0YjQsNGC0LXQu9GMINGA0LDQt9C80LXRgNC+0LIg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvQuNGC0Ywg0YDQsNC30LzQtdGAINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIGRlZmluZVdvcmtzcGFjZVNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSB0aGlzLiRlbC5wYXJlbnROb2RlXG4gICAgICAgICAgICAgICAgLy8g0JfQsNC/0LjRgdGL0LLQsNC10Lwg0Y3RgtC4INC00LDQvdC90YvQtSDQsiDQs9C70L7QsdCw0LvRjNC90YvQtSDQv9C10YDQtdC80LXQvdC90YvQtSBLcml0aVxuICAgICAgICAgICAgICAgIEtyaXRpLmdsb2JhbC53b3Jrc3BhY2Vfd2lkdGggPSB0aGlzLndvcmtzcGFjZV93aWR0aCA9IHBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgICAgICBLcml0aS5nbG9iYWwud29ya3NwYWNlX2hlaWdodCA9IHRoaXMud29ya3NwYWNlX2hlaWdodCA9IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud29ya3NwYWNlX3dpZHRoICYmIHRoaXMud29ya3NwYWNlX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINGB0YXQtdC80YNcbiAgICAgICAgZ2V0U2NoZW1lKGZuKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5TY2hlbWU6Z2V0U2NoZW1lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdzY2hlbWVfY29kZSc6IHRoaXMuYWN0aXZlX3NjaGVtZV9jb2RlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1lID0gcmVzcG9uc2Uuc2NoZW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGH0LjRgdGC0LjRgtGMINC90L7QtNGLINC+0YIg0LvQuNGI0L3QuNGFINC00LDQvdC90YvRhVxuICAgICAgICBzYW5pdGl6ZU5vZGVzKCkge1xuICAgICAgICAgICAgbGV0IG5vZGVzID0gXy5jbG9uZURlZXAodGhpcy5zY2hlbWUubm9kZXMpXG4gICAgICAgICAgICBub2Rlcy5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbm9kZS5zdGF0aWNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbm9kZXNcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0L3QvtC00YtcbiAgICAgICAgc2V0U2NoZW1lKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzY2hlbWUgPSBfLmNsb25lRGVlcCh0aGlzLnNjaGVtZSlcbiAgICAgICAgICAgIHNjaGVtZS5ub2RlcyA9IHRoaXMuc2FuaXRpemVOb2RlcygpXG5cbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLlNjaGVtZTpzZXRTY2hlbWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lX2NvZGU6IHRoaXMuYWN0aXZlX3NjaGVtZV9jb2RlLFxuICAgICAgICAgICAgICAgICAgICBzY2hlbWVfZGF0YTogc2NoZW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub2RlcyBzYXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0LLQuNCz0LDRgtGMINC60LDRgNGC0YNcbiAgICAgICAgbW92ZVBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3hfZmFjdG9yID0gdGhpcy5tb3VzZV94IC0gdGhpcy5wbGF0b194XG4gICAgICAgICAgICB0aGlzLmhvbGRfeV9mYWN0b3IgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLnBsYXRvX3lcbiAgICAgICAgICAgIHRoaXMuaG9sZF9wbGF0byA9IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGB0YLQsNCy0LjRgtGMINC60LDRgNGC0YNcbiAgICAgICAgZHJvcFBsYXRvKCkge1xuICAgICAgICAgICAgdGhpcy5ob2xkX3BsYXRvID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuc2V0U2NoZW1lKCkgLy8g0KHQvtGF0YDQsNC90LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCk0LjQutGB0LjRgNC+0LLQsNGC0Ywg0LTQstC40LbQtdC90LjQtSDQvNGL0YjQuFxuICAgICAgICBtb3VzZW1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VfeCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICB0aGlzLm1vdXNlX3kgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9kZSgpIC8vINCU0LLQuNCz0LDRgtGMINC+0LHRitC10LrRgiDQtdGB0LvQuCDQvtC9INCw0LrRgtC40LLQtdC9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J/QtdGA0LXQvNC10YnQtdC90LjQtSDQvdC+0LTQsFxuICAgICAgICBtb3ZlTm9kZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZV9ub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZS5wb2ludC54ID0gdGhpcy5tb3VzZV94IC0gdGhpcy5ob2xkX3hfZmFjdG9yXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZS5wb2ludC55ID0gdGhpcy5tb3VzZV95IC0gdGhpcy5ob2xkX3lfZmFjdG9yXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGluZXMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LrQsNGA0YLQsFxuICAgICAgICAgICAgaWYgKHRoaXMuaG9sZF9wbGF0bykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdG9feSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhpcy5wbGF0b194ICsgdGhpcy5ib2R5X3hfZmFjdG9yLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRoaXMucGxhdG9feSArIHRoaXMuYm9keV95X2ZhY3RvclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RoaXMucXVhbnRpemVPYmplY3RzKClcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0YXQstCw0YIg0L3QvtC00LBcbiAgICAgICAgbm9kZUhvbGQobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZUhvbGRQb3NpdGlvbigpXG4gICAgICAgICAgICBub2RlLnN0YXRpYy5mb2N1cyA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaG9sZF94X2ZhY3RvciA9IHRoaXMubW91c2VfeCAtIG5vZGUucG9pbnQueFxuICAgICAgICAgICAgdGhpcy5ob2xkX3lfZmFjdG9yID0gdGhpcy5tb3VzZV95IC0gbm9kZS5wb2ludC55XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlID0gbm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDRhNC40LrRgdC40YDQvtCy0LDRgtGMINC/0L7Qt9C40YbQuNGOINC90L7QtNCwXG4gICAgICAgIHNhdmVIb2xkUG9zaXRpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RfaG9sZF94ID0gdGhpcy5tb3VzZV94XG4gICAgICAgICAgICB0aGlzLmxhc3RfaG9sZF95ID0gdGhpcy5tb3VzZV95XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0L3QvtC0XG4gICAgICAgIG5vZGVEcm9wKCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3RhdGljLmZvY3VzID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUgPSBudWxsXG5cbiAgICAgICAgICAgIC8vINCh0L7RhdGA0LDQvdGP0YLRjCDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0LHRi9C7INGB0LTQstC40L3Rg9GCINC+0LHRitC10LrRglxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdF9ob2xkX3ggIT09IHRoaXMubW91c2VfeCB8fCB0aGlzLmxhc3RfaG9sZF95ICE9PSB0aGlzLm1vdXNlX3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjaGVtZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4g0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgd29ya3NwYWNlQ29udGV4dE1lbnUoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0JrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjiDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuCcpXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgtC60YDRi9GC0Ywg0LrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjlxuICAgICAgICBvcGVuQ29udGV4dE1lbnUobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0X21lbnVfb2JqZWN0ID0gbm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQutGA0YvRgtGMINC60L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y5cbiAgICAgICAgY2xvc2VDb250ZXh0TWVudSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF9tZW51X29iamVjdCA9IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQutC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOINC90L7QtNCwXG4gICAgICAgIGNsaWNrQ29udGV4dE1lbnVJdGVtKGNvZGUsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAnb3Blbk5vZGVTZXR0aW5ncycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSBjb250ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gJ2Nsb25lTm9kZScpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZVVVSUQoKHV1aWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC51dWlkID0gdXVpZFxuICAgICAgICAgICAgICAgIC8vICAgICBjb250ZXh0LnBvaW50LnggKz0gMTAwXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQucG9pbnQueSArPSAxMDBcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlbWUubm9kZXMucHVzaChjb250ZXh0KVxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogY29udGV4dFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpjbG9uZU5vZGUnLFxuICAgICAgICAgICAgICAgICAgICB0aGVuOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gcmVzcG9uc2Uubm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wb2ludC54ICs9IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wb2ludC55ICs9IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlbWUubm9kZXMucHVzaChub2RlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LPQtdC90LXRgNCw0YbQuNGOIHV1aWQgdG9kbzog0JfQsNGH0LXQvD8/P1xuICAgICAgICBjcmVhdGVVVUlEKGZuKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Ob2RlOmNyZWF0ZVVVSUQnLFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm4ocmVzcG9uc2UudXVpZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YLQvtCx0YDQsNC30LjRgtGMINGB0YbQtdC/0LrQuFxuICAgICAgICBhZGRMaW5rcygpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVtZS5saW5rcy5tYXAobGluayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTGluayhsaW5rKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0YHRhtC10L/QutGDXG4gICAgICAgIGFkZExpbmsobGluaykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRfYSA9IHRoaXMuJHJlZnNbbGlua1swXV1bMF0uJGVsXG4gICAgICAgICAgICBsZXQgZWxlbWVudF9iID0gdGhpcy4kcmVmc1tsaW5rWzFdXVswXS4kZWxcblxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc3RhcnRQbHVnOiAnZGlzYycsXG4gICAgICAgICAgICAgICAgZW5kUGx1ZzogJ2Fycm93MScsXG4gICAgICAgICAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnc3RyYWlnaHQnLFxuICAgICAgICAgICAgICAgIG1pZGRsZUxhYmVsOiAnJyxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxpbmVfb2JqZWN0ID0gTGVhZGVyTGluZS5zZXRMaW5lKGVsZW1lbnRfYSwgZWxlbWVudF9iLCBvcHRpb25zKVxuICAgICAgICAgICAgdGhpcy5saW5lc19vYmplY3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICAgICAgb2JqZWN0OiBsaW5lX29iamVjdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjb3JyZWN0TGluZXMoKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlfeF9mYWN0b3IgPSB0aGlzLnBsYXRvX3hfc3RhcnQgLSB0aGlzLnBsYXRvX3hcbiAgICAgICAgICAgIHRoaXMuYm9keV95X2ZhY3RvciA9IHRoaXMucGxhdG9feV9zdGFydCAtIHRoaXMucGxhdG9feVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncGxhdG9feF9zdGFydCcsIHRoaXMucGxhdG9feF9zdGFydClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwbGF0b194JywgdGhpcy5wbGF0b194KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BsYXRvX3hfc3RhcnQnLCB0aGlzLnBsYXRvX3hfc3RhcnQpXG5cbiAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhpcy5wbGF0b194ICsgdGhpcy5wbGF0b194X3N0YXJ0IC0gdGhpcy5wbGF0b194LFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5wbGF0b195ICsgdGhpcy5wbGF0b195X3N0YXJ0IC0gdGhpcy5wbGF0b195XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmxpbmVzX29iamVjdHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ub2JqZWN0LnBvc2l0aW9uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlTGluaygpe30sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xuYm9keSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgPiBzdmcge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbn1cblxuLndvcmtzcGFjZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAkYmctZGFyaztcbiAgICBjb2xvcjogJGYtZGFyaztcblxuICAgICZfX3BsYXRvIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYm9hcmRcIj5cbiAgICAgICAgPFdvcmtzcGFjZSAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBXb3Jrc3BhY2UgZnJvbSBcIi4uL2ludGVyZmFjZS9Xb3Jrc3BhY2VcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkJvYXJkXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBXb3Jrc3BhY2VcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYm9hcmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJub2RlXCIgY2xhc3M9XCJtb2R1bGVcIiA6c3R5bGU9XCJzdHlsZV9tb2R1bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZHVsZV9fdGl0bGVcIiA6c3R5bGU9XCJzdHlsZV9tb2R1bGVfdGl0bGVcIj5cbiAgICAgICAgICAgIDxpIDpjbGFzcz1cIm5vZGUuc3RhdGljLmljb25cIj48L2k+XG4gICAgICAgICAgICB7eyBub2RlLnN0YXRpYy5zZXR0aW5ncy5uYW1lIH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk1vZHVsZVwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc3R5bGVfbW9kdWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdGF0aWMuc3R5bGUubW9kdWxlXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlX21vZHVsZV90aXRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuc3RhdGljLnN0eWxlLm1vZHVsZV90aXRsZVxuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubW9kdWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICB9XG59XG5cbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmtyaXRpLWNvbnRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwMTk2MDc4NDMpO1xcbiAgcGFkZGluZzogMThweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ua3JpdGktY29udGV4dF9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA5ZWZmO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDVweCA1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLmtyaXRpLWNvbnRleHRfX2l0ZW0gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5rcml0aS1jb250ZXh0X19pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDcwOGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQU1JO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQUtRO0VBQ0ksbUJBQUE7QUFIWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzcyc7XFxuLmtyaXRpLWNvbnRleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZlNjtcXG4gICAgcGFkZGluZzogMThweCAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAgICZfX2l0ZW1zIHtcXG5cXG4gICAgfVxcbiAgICAmX19pdGVtIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDllZmY7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIG1hcmdpbjogNXB4IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjFweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNzA4ZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub2RlLmZvY3VzIHtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLGdCQUFBO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICYuZm9jdXMge1xcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm9kZS1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MTE3NjQ3MDU5KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5ub2RlLW1vZGFsX19ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG4ubm9kZS1tb2RhbF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLm5vZGUtbW9kYWxfX2Nsb3NlIGkge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLm5vZGUtbW9kYWxfX2Nsb3NlIGk6aG92ZXIge1xcbiAgY29sb3I6ICNmZjRmNGY7XFxufVxcbi5ub2RlLW1vZGFsX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5ub2RlLW1vZGFsX19tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudV9faXRlbSB7XFxuICBwYWRkaW5nOiAwcHggMTFweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjOWQ5ZDlkO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudV9faXRlbS5hY3RpdmUge1xcbiAgY29sb3I6ICM3Mjg0ZDY7XFxufVxcbi5ub2RlLW1vZGFsX19mb3JtIHtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBU1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVBaO0FBU1k7RUFDSSxjQUFBO0FBUGhCO0FBWUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFWUjtBQWFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVhSO0FBYVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWFo7QUFhWTtFQUNJLGNBQUE7QUFYaEI7QUFnQkk7RUFDSSxXQUFBO0FBZFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9faGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuXFxuICAgIH1cXG5cXG4gICAgJl9fY2xvc2Uge1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjRmNGY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAmX19tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcblxcbiAgICAgICAgJl9faXRlbSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDExcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuXFxuICAgICAgICAgICAgJi5hY3RpdmUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcyODRkNjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fZm9ybSB7XFxuICAgICAgICBmbGV4OiAxIDAgMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuYm9keSA+IHN2ZyB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ud29ya3NwYWNlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbiAgY29sb3I6ICMxZTI0MWU7XFxufVxcbi53b3Jrc3BhY2VfX3BsYXRvIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ud29ya3NwYWNlIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTg4MjM1Mjk0KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMTAwMDAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIixcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGtCQUFBO0FBREo7QUFHSTtFQUNJLFVBQUE7QUFEUjtBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQ1pNO0VEYU4sY0NUSztBRE9UO0FBSUk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRlI7QUFLSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQUhSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mva3JpdGkucGFsZXR0ZS5zY3NzJztcXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICA+IHN2ZyB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAkYmctZGFyaztcXG4gICAgY29sb3I6ICRmLWRhcms7XFxuXFxuICAgICZfX3BsYXRvIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3NTtcXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XFxuICAgIH1cXG59XFxuXCIsXCIkYmctZGFyazogI2U4ZThlODtcXG4kYmctbGlnaHQ6ICNkOWQ5ZDk7XFxuJGYtZGVmOiAjMjY1NTFiO1xcbiRiLWRlZjogIzcyYmQ4ZjtcXG4kZi1kYXJrOiAjMWUyNDFlO1xcbiRjb2xvci0xMDA6ICNkYzI1Y2I7XFxuJGNvbG9yLTEwMDogIzliOGQ4ZDtcXG4kY29sb3ItMTAwOiAjMTQ0YzYwO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzgwZGI4MDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kdWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kdWxlIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubW9kdWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICB9XFxufVxcblxcbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvKiEgTGVhZGVyTGluZSB2MS4wLjUgKGMpIGFuc2VraSBodHRwczovL2Fuc2VraS5naXRodWIuaW8vbGVhZGVyLWxpbmUvICovXG52YXIgTGVhZGVyTGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciB0ZSwgZywgeSwgUywgXywgbywgdCwgaCwgZiwgcCwgYSwgaSwgbCwgdiA9IFwibGVhZGVyLWxpbmVcIixcbiAgICBNID0gMSxcbiAgICBJID0gMixcbiAgICBDID0gMyxcbiAgICBMID0gNCxcbiAgICBuID0ge1xuICAgICAgdG9wOiBNLFxuICAgICAgcmlnaHQ6IEksXG4gICAgICBib3R0b206IEMsXG4gICAgICBsZWZ0OiBMXG4gICAgfSxcbiAgICBBID0gMSxcbiAgICBWID0gMixcbiAgICBQID0gMyxcbiAgICBOID0gNCxcbiAgICBUID0gNSxcbiAgICBtID0ge1xuICAgICAgc3RyYWlnaHQ6IEEsXG4gICAgICBhcmM6IFYsXG4gICAgICBmbHVpZDogUCxcbiAgICAgIG1hZ25ldDogTixcbiAgICAgIGdyaWQ6IFRcbiAgICB9LFxuICAgIG5lID0gXCJiZWhpbmRcIixcbiAgICByID0gdiArIFwiLWRlZnNcIixcbiAgICBzID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBpZD1cImxlYWRlci1saW5lLWRlZnNcIj48c3R5bGU+PCFbQ0RBVEFbLmxlYWRlci1saW5le3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OnZpc2libGUhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmUhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4fSNsZWFkZXItbGluZS1kZWZze3dpZHRoOjA7aGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfS5sZWFkZXItbGluZS1saW5lLXBhdGh7ZmlsbDpub25lfS5sZWFkZXItbGluZS1tYXNrLWJnLXJlY3R7ZmlsbDojZmZmfS5sZWFkZXItbGluZS1jYXBzLW1hc2stYW5jaG9yLC5sZWFkZXItbGluZS1jYXBzLW1hc2stbWFya2VyLXNoYXBle2ZpbGw6IzAwMH0ubGVhZGVyLWxpbmUtY2Fwcy1tYXNrLWFuY2hvcntzdHJva2U6IzAwMH0ubGVhZGVyLWxpbmUtY2Fwcy1tYXNrLWxpbmUsLmxlYWRlci1saW5lLXBsdWdzLWZhY2V7c3Ryb2tlOnRyYW5zcGFyZW50fS5sZWFkZXItbGluZS1saW5lLW1hc2stc2hhcGV7c3Ryb2tlOiNmZmZ9LmxlYWRlci1saW5lLWxpbmUtb3V0bGluZS1tYXNrLXNoYXBle3N0cm9rZTojMDAwfS5sZWFkZXItbGluZS1wbHVnLW1hc2stc2hhcGV7ZmlsbDojZmZmO3N0cm9rZTojMDAwfS5sZWFkZXItbGluZS1wbHVnLW91dGxpbmUtbWFzay1zaGFwZXtmaWxsOiMwMDA7c3Ryb2tlOiNmZmZ9LmxlYWRlci1saW5lLWFyZWFBbmNob3J7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6dmlzaWJsZSFpbXBvcnRhbnR9XV0+PC9zdHlsZT48ZGVmcz48Y2lyY2xlIGlkPVwibGVhZGVyLWxpbmUtZGlzY1wiIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCI1XCIvPjxyZWN0IGlkPVwibGVhZGVyLWxpbmUtc3F1YXJlXCIgeD1cIi01XCIgeT1cIi01XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIvPjxwb2x5Z29uIGlkPVwibGVhZGVyLWxpbmUtYXJyb3cxXCIgcG9pbnRzPVwiLTgsLTggOCwwIC04LDggLTUsMFwiLz48cG9seWdvbiBpZD1cImxlYWRlci1saW5lLWFycm93MlwiIHBvaW50cz1cIi00LC04IDQsMCAtNCw4IC03LDUgLTIsMCAtNywtNVwiLz48cG9seWdvbiBpZD1cImxlYWRlci1saW5lLWFycm93M1wiIHBvaW50cz1cIi00LC01IDgsMCAtNCw1XCIvPjxnIGlkPVwibGVhZGVyLWxpbmUtaGFuZFwiPjxwYXRoIHN0eWxlPVwiZmlsbDogI2ZjZmNmY1wiIGQ9XCJNOS4xOSAxMS4xNGg0Ljc1YzEuMzggMCAyLjQ5LTEuMTEgMi40OS0yLjQ5IDAtLjUxLS4xNS0uOTgtLjQxLTEuMzdoMS4zYzEuMzggMCAyLjQ5LTEuMTEgMi40OS0yLjQ5cy0xLjExLTIuNTMtMi40OS0yLjUzaDEuMDJjMS4zOCAwIDIuNDktMS4xMSAyLjQ5LTIuNDlzLTEuMTEtMi40OS0yLjQ5LTIuNDloMTQuOTZjMS4zNyAwIDIuNDktMS4xMSAyLjQ5LTIuNDlzLTEuMTEtMi40OS0yLjQ5LTIuNDlIMTYuNThDMTYtOS44NiAxNC4yOC0xMS4xNCA5LjctMTEuMTRjLTQuNzkgMC02LjU1IDMuNDItNy44NyA0LjczSC0yLjE0djEzLjIzaDMuNjhDMy4yOSA5Ljk3IDUuNDcgMTEuMTQgOS4xOSAxMS4xNEw5LjE5IDExLjE0WlwiLz48cGF0aCBzdHlsZT1cImZpbGw6IGJsYWNrXCIgZD1cIk0xMy45NSAxMmMxLjg1IDAgMy4zNS0xLjUgMy4zNS0zLjM1IDAtLjE3LS4wMi0uMzQtLjA0LS41MWguMDdjMS44NSAwIDMuMzUtMS41IDMuMzUtMy4zNSAwLS43OS0uMjctMS41MS0uNzItMi4wOCAxLjAzLS41NyAxLjc0LTEuNjcgMS43NC0yLjkzIDAtLjU5LS4xNi0xLjE1LS40My0xLjYzaDEyLjA0YzEuODUgMCAzLjM1LTEuNSAzLjM1LTMuMzUgMC0xLjg1LTEuNS0zLjM1LTMuMzUtMy4zNUgxNy4yQzE2LjI2LTEwLjkzIDEzLjkxLTEyIDkuNy0xMiA1LjM2LTEyIDMuMjItOS40IDEuOTQtNy44NGMwIDAtLjI5LjMzLS41LjU3LS42MyAwLTMuNTggMC0zLjU4IDBDLTIuNjEtNy4yNy0zLTYuODgtMy02LjQxdjEzLjIzYzAgLjQ3LjM5Ljg2Ljg2Ljg2IDAgMCAyLjQ4IDAgMy4yIDBDMi45IDEwLjczIDUuMjkgMTIgOS4xOSAxMkwxMy45NSAxMlpNOS4xOSAxMC4yOGMtMy40NiAwLTUuMzMtMS4wNS02LjktMy44Ny0uMTUtLjI3LS40NC0uNDQtLjc1LS40NCAwIDAtMS44MSAwLTIuODIgMFYtNS41NWMxLjA2IDAgMy4xMSAwIDMuMTEgMCAuMjUgMCAuNDQtLjA2LjYxLS4yNWwuODMtLjk1YzEuMjMtMS40OSAyLjkxLTMuNTMgNi40My0zLjUzIDMuNDUgMCA0LjkuNzQgNS41NyAxLjcyaC00LjNjLS40OCAwLS44Ni4zOC0uODYuODZzLjM5Ljg2Ljg2Ljg2aDIyLjM0Yy45IDAgMS42My43MyAxLjYzIDEuNjMgMCAuOS0uNzMgMS42My0xLjYzIDEuNjNIMTUuODNjLS40OCAwLS44Ni4zOC0uODYuODYgMCAuNDcuMzkuODYuODYuODZoMi41MmMuOSAwIDEuNjMuNzMgMS42MyAxLjYzcy0uNzMgMS42My0xLjYzIDEuNjNoLTMuMTJjLS40OCAwLS44Ni4zOC0uODYuODYgMCAuNDcuMzkuODYuODYuODZoMi4xMWMuODggMCAxLjYzLjc2IDEuNjMgMS42NyAwIC45LS43MyAxLjYzLTEuNjMgMS42M2gtMy4yYy0uNDggMC0uODYuMzktLjg2Ljg2IDAgLjQ3LjM5Ljg2Ljg2Ljg2aDEuMzZjLjA1LjE2LjA5LjM0LjA5LjUxIDAgLjktLjczIDEuNjMtMS42MyAxLjYzQzEzLjk1IDEwLjI4IDkuMTkgMTAuMjggOS4xOSAxMC4yOFpcIi8+PC9nPjxnIGlkPVwibGVhZGVyLWxpbmUtY3Jvc3NoYWlyXCI+PHBhdGggZD1cIk0wLTc4Ljk3Yy00My41NCAwLTc4Ljk3IDM1LjQzLTc4Ljk3IDc4Ljk3IDAgNDMuNTQgMzUuNDMgNzguOTcgNzguOTcgNzguOTdzNzguOTctMzUuNDMgNzguOTctNzguOTdDNzguOTctNDMuNTQgNDMuNTUtNzguOTcgMC03OC45N1pNNzYuNTEtMS4yMWgtOS45MXYtOS4xMWgtMi40M3Y5LjExaC0xMS40NWMtLjY0LTI4LjEyLTIzLjM4LTUwLjg2LTUxLjUtNTEuNVYtNjQuMTdoOS4xMVYtNjYuNmgtOS4xMXYtOS45MUM0Mi40Ni03NS44NiA3NS44Ni00Mi40NSA3Ni41MS0xLjIxWk0tMS4yMS0zMC43NmgtOS4xMXYyLjQzaDkuMTFWLTQuMmMtMS40NC40Mi0yLjU3IDEuNTQtMi45OCAyLjk4SC0yOC4zM3YtOS4xMWgtMi40M3Y5LjExSC01MC4yOUMtNDkuNjUtMjgtMjcuOTktNDkuNjUtMS4yMS01MC4yOVYtMzAuNzZaTS0zMC43NiAxLjIxdjkuMTFoMi40M3YtOS4xMUgtNC4yYy40MiAxLjQ0IDEuNTQgMi41NyAyLjk4IDIuOTh2MjQuMTNoLTkuMTF2Mi40M2g5LjExdjE5LjUzQy0yNy45OSA0OS42NS00OS42NSAyOC01MC4yOSAxLjIxSC0zMC43NlpNMS4yMiAzMC43NWg5LjExdi0yLjQzaC05LjExVjQuMmMxLjQ0LS40MiAyLjU2LTEuNTQgMi45OC0yLjk4aDI0LjEzdjkuMTFoMi40M3YtOS4xMWgxOS41M0M0OS42NSAyOCAyOCA0OS42NSAxLjIyIDUwLjI5VjMwLjc1Wk0zMC43Ni0xLjIxdi05LjExaC0yLjQzdjkuMTFINC4yYy0uNDItMS40NC0xLjU0LTIuNTYtMi45OC0yLjk4Vi0yOC4zM2g5LjExdi0yLjQzaC05LjExVi01MC4yOUMyOC00OS42NSA0OS42NS0yOCA1MC4yOS0xLjIxSDMwLjc2Wk0tMS4yMS03Ni41MXY5LjkxaC05LjExdjIuNDNoOS4xMXYxMS40NWMtMjguMTIuNjQtNTAuODYgMjMuMzgtNTEuNSA1MS41SC02NC4xN3YtOS4xMUgtNjYuNnY5LjExaC05LjkxQy03NS44Ni00Mi40NS00Mi40NS03NS44Ni0xLjIxLTc2LjUxWk0tNzYuNTEgMS4yMWg5LjkxdjkuMTFoMi40M3YtOS4xMWgxMS40NWMuNjQgMjguMTIgMjMuMzggNTAuODYgNTEuNSA1MS41djExLjQ1aC05LjExdjIuNDNoOS4xMXY5LjkxQy00Mi40NSA3NS44Ni03NS44NiA0Mi40NS03Ni41MSAxLjIxWk0xLjIyIDc2LjUxdi05LjkxaDkuMTF2LTIuNDNoLTkuMTF2LTExLjQ1YzI4LjEyLS42NCA1MC44Ni0yMy4zOCA1MS41LTUxLjVoMTEuNDV2OS4xMWgyLjQzdi05LjExaDkuOTFDNzUuODYgNDIuNDUgNDIuNDUgNzUuODYgMS4yMiA3Ni41MVpcIi8+PHBhdGggZD1cIk0wIDgzLjU4LTcuMSA5NiA3LjEgOTZaXCIvPjxwYXRoIGQ9XCJNMC04My41OCA3LjEtOTYtNy4xLTk2XCIvPjxwYXRoIGQ9XCJNODMuNTggMCA5NiA3LjEgOTYtNy4xWlwiLz48cGF0aCBkPVwiTS04My41OCAwLTk2LTcuMS05NiA3LjFaXCIvPjwvZz48L2RlZnM+PC9zdmc+JyxcbiAgICBhZSA9IHtcbiAgICAgIGRpc2M6IHtcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtZGlzY1wiLFxuICAgICAgICBub1JvdGF0ZTogITAsXG4gICAgICAgIGJCb3g6IHtcbiAgICAgICAgICBsZWZ0OiAtNSxcbiAgICAgICAgICB0b3A6IC01LFxuICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICAgIHJpZ2h0OiA1LFxuICAgICAgICAgIGJvdHRvbTogNVxuICAgICAgICB9LFxuICAgICAgICB3aWR0aFI6IDIuNSxcbiAgICAgICAgaGVpZ2h0UjogMi41LFxuICAgICAgICBiQ2lyY2xlOiA1LFxuICAgICAgICBzaWRlTGVuOiA1LFxuICAgICAgICBiYWNrTGVuOiA1LFxuICAgICAgICBvdmVyaGVhZDogMCxcbiAgICAgICAgb3V0bGluZUJhc2U6IDEsXG4gICAgICAgIG91dGxpbmVNYXg6IDRcbiAgICAgIH0sXG4gICAgICBzcXVhcmU6IHtcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtc3F1YXJlXCIsXG4gICAgICAgIG5vUm90YXRlOiAhMCxcbiAgICAgICAgYkJveDoge1xuICAgICAgICAgIGxlZnQ6IC01LFxuICAgICAgICAgIHRvcDogLTUsXG4gICAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgICAgcmlnaHQ6IDUsXG4gICAgICAgICAgYm90dG9tOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoUjogMi41LFxuICAgICAgICBoZWlnaHRSOiAyLjUsXG4gICAgICAgIGJDaXJjbGU6IDUsXG4gICAgICAgIHNpZGVMZW46IDUsXG4gICAgICAgIGJhY2tMZW46IDUsXG4gICAgICAgIG92ZXJoZWFkOiAwLFxuICAgICAgICBvdXRsaW5lQmFzZTogMSxcbiAgICAgICAgb3V0bGluZU1heDogNFxuICAgICAgfSxcbiAgICAgIGFycm93MToge1xuICAgICAgICBlbG1JZDogXCJsZWFkZXItbGluZS1hcnJvdzFcIixcbiAgICAgICAgYkJveDoge1xuICAgICAgICAgIGxlZnQ6IC04LFxuICAgICAgICAgIHRvcDogLTgsXG4gICAgICAgICAgd2lkdGg6IDE2LFxuICAgICAgICAgIGhlaWdodDogMTYsXG4gICAgICAgICAgcmlnaHQ6IDgsXG4gICAgICAgICAgYm90dG9tOiA4XG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoUjogNCxcbiAgICAgICAgaGVpZ2h0UjogNCxcbiAgICAgICAgYkNpcmNsZTogOCxcbiAgICAgICAgc2lkZUxlbjogOCxcbiAgICAgICAgYmFja0xlbjogOCxcbiAgICAgICAgb3ZlcmhlYWQ6IDgsXG4gICAgICAgIG91dGxpbmVCYXNlOiAyLFxuICAgICAgICBvdXRsaW5lTWF4OiAxLjVcbiAgICAgIH0sXG4gICAgICBhcnJvdzI6IHtcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtYXJyb3cyXCIsXG4gICAgICAgIGJCb3g6IHtcbiAgICAgICAgICBsZWZ0OiAtNyxcbiAgICAgICAgICB0b3A6IC04LFxuICAgICAgICAgIHdpZHRoOiAxMSxcbiAgICAgICAgICBoZWlnaHQ6IDE2LFxuICAgICAgICAgIHJpZ2h0OiA0LFxuICAgICAgICAgIGJvdHRvbTogOFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aFI6IDIuNzUsXG4gICAgICAgIGhlaWdodFI6IDQsXG4gICAgICAgIGJDaXJjbGU6IDgsXG4gICAgICAgIHNpZGVMZW46IDgsXG4gICAgICAgIGJhY2tMZW46IDcsXG4gICAgICAgIG92ZXJoZWFkOiA0LFxuICAgICAgICBvdXRsaW5lQmFzZTogMSxcbiAgICAgICAgb3V0bGluZU1heDogMS43NVxuICAgICAgfSxcbiAgICAgIGFycm93Mzoge1xuICAgICAgICBlbG1JZDogXCJsZWFkZXItbGluZS1hcnJvdzNcIixcbiAgICAgICAgYkJveDoge1xuICAgICAgICAgIGxlZnQ6IC00LFxuICAgICAgICAgIHRvcDogLTUsXG4gICAgICAgICAgd2lkdGg6IDEyLFxuICAgICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgICAgcmlnaHQ6IDgsXG4gICAgICAgICAgYm90dG9tOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoUjogMyxcbiAgICAgICAgaGVpZ2h0UjogMi41LFxuICAgICAgICBiQ2lyY2xlOiA4LFxuICAgICAgICBzaWRlTGVuOiA1LFxuICAgICAgICBiYWNrTGVuOiA0LFxuICAgICAgICBvdmVyaGVhZDogOCxcbiAgICAgICAgb3V0bGluZUJhc2U6IDEsXG4gICAgICAgIG91dGxpbmVNYXg6IDIuNVxuICAgICAgfSxcbiAgICAgIGhhbmQ6IHtcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtaGFuZFwiLFxuICAgICAgICBiQm94OiB7XG4gICAgICAgICAgbGVmdDogLTMsXG4gICAgICAgICAgdG9wOiAtMTIsXG4gICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgIGhlaWdodDogMjQsXG4gICAgICAgICAgcmlnaHQ6IDM3LFxuICAgICAgICAgIGJvdHRvbTogMTJcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGhSOiAxMCxcbiAgICAgICAgaGVpZ2h0UjogNixcbiAgICAgICAgYkNpcmNsZTogMzcsXG4gICAgICAgIHNpZGVMZW46IDEyLFxuICAgICAgICBiYWNrTGVuOiAzLFxuICAgICAgICBvdmVyaGVhZDogMzdcbiAgICAgIH0sXG4gICAgICBjcm9zc2hhaXI6IHtcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtY3Jvc3NoYWlyXCIsXG4gICAgICAgIG5vUm90YXRlOiAhMCxcbiAgICAgICAgYkJveDoge1xuICAgICAgICAgIGxlZnQ6IC05NixcbiAgICAgICAgICB0b3A6IC05NixcbiAgICAgICAgICB3aWR0aDogMTkyLFxuICAgICAgICAgIGhlaWdodDogMTkyLFxuICAgICAgICAgIHJpZ2h0OiA5NixcbiAgICAgICAgICBib3R0b206IDk2XG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoUjogNDgsXG4gICAgICAgIGhlaWdodFI6IDQ4LFxuICAgICAgICBiQ2lyY2xlOiA5NixcbiAgICAgICAgc2lkZUxlbjogOTYsXG4gICAgICAgIGJhY2tMZW46IDk2LFxuICAgICAgICBvdmVyaGVhZDogMFxuICAgICAgfVxuICAgIH0sXG4gICAgRSA9IHtcbiAgICAgIGJlaGluZDogbmUsXG4gICAgICBkaXNjOiBcImRpc2NcIixcbiAgICAgIHNxdWFyZTogXCJzcXVhcmVcIixcbiAgICAgIGFycm93MTogXCJhcnJvdzFcIixcbiAgICAgIGFycm93MjogXCJhcnJvdzJcIixcbiAgICAgIGFycm93MzogXCJhcnJvdzNcIixcbiAgICAgIGhhbmQ6IFwiaGFuZFwiLFxuICAgICAgY3Jvc3NoYWlyOiBcImNyb3NzaGFpclwiXG4gICAgfSxcbiAgICBpZSA9IHtcbiAgICAgIGRpc2M6IFwiZGlzY1wiLFxuICAgICAgc3F1YXJlOiBcInNxdWFyZVwiLFxuICAgICAgYXJyb3cxOiBcImFycm93MVwiLFxuICAgICAgYXJyb3cyOiBcImFycm93MlwiLFxuICAgICAgYXJyb3czOiBcImFycm93M1wiLFxuICAgICAgaGFuZDogXCJoYW5kXCIsXG4gICAgICBjcm9zc2hhaXI6IFwiY3Jvc3NoYWlyXCJcbiAgICB9LFxuICAgIFcgPSBbTSwgSSwgQywgTF0sXG4gICAgeCA9IFwiYXV0b1wiLFxuICAgIG9lID0ge1xuICAgICAgeDogXCJsZWZ0XCIsXG4gICAgICB5OiBcInRvcFwiLFxuICAgICAgd2lkdGg6IFwid2lkdGhcIixcbiAgICAgIGhlaWdodDogXCJoZWlnaHRcIlxuICAgIH0sXG4gICAgQiA9IDgwLFxuICAgIFIgPSA0LFxuICAgIEYgPSA1LFxuICAgIEcgPSAxMjAsXG4gICAgRCA9IDgsXG4gICAgeiA9IDMuNzUsXG4gICAgaiA9IDEwLFxuICAgIEggPSAzMCxcbiAgICBVID0gLjU1MjI4NDcsXG4gICAgWiA9IC4yNSAqIE1hdGguUEksXG4gICAgdSA9IC9eXFxzKihcXC0/W1xcZFxcLl0rKVxccyooXFwlKT9cXHMqJC8sXG4gICAgYiA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBlID0gXCItbXMtc2Nyb2xsLWxpbWl0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIFwiLW1zLWltZS1hbGlnblwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiAhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgIGxlID0gIWUgJiYgISFkb2N1bWVudC51bmlxdWVJRCxcbiAgICByZSA9IFwiTW96QXBwZWFyYW5jZVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcbiAgICBzZSA9ICEoZSB8fCByZSB8fCAhd2luZG93LmNocm9tZSB8fCAhd2luZG93LkNTUyksXG4gICAgdWUgPSAhZSAmJiAhbGUgJiYgIXJlICYmICFzZSAmJiAhd2luZG93LmNocm9tZSAmJiBcIldlYmtpdEFwcGVhcmFuY2VcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gICAgaGUgPSBsZSB8fCBlID8gLjIgOiAuMSxcbiAgICBwZSA9IHtcbiAgICAgIHBhdGg6IFAsXG4gICAgICBsaW5lQ29sb3I6IFwiY29yYWxcIixcbiAgICAgIGxpbmVTaXplOiA0LFxuICAgICAgcGx1Z1NFOiBbbmUsIFwiYXJyb3cxXCJdLFxuICAgICAgcGx1Z1NpemVTRTogWzEsIDFdLFxuICAgICAgbGluZU91dGxpbmVFbmFibGVkOiAhMSxcbiAgICAgIGxpbmVPdXRsaW5lQ29sb3I6IFwiaW5kaWFucmVkXCIsXG4gICAgICBsaW5lT3V0bGluZVNpemU6IC4yNSxcbiAgICAgIHBsdWdPdXRsaW5lRW5hYmxlZFNFOiBbITEsICExXSxcbiAgICAgIHBsdWdPdXRsaW5lU2l6ZVNFOiBbMSwgMV1cbiAgICB9LFxuICAgIGsgPSAoYSA9IHt9LnRvU3RyaW5nLCBpID0ge30uaGFzT3duUHJvcGVydHkudG9TdHJpbmcsIGwgPSBpLmNhbGwoT2JqZWN0KSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0LCBuO1xuICAgICAgcmV0dXJuIGUgJiYgXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gYS5jYWxsKGUpICYmICghKHQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkpIHx8IChuID0gdC5oYXNPd25Qcm9wZXJ0eShcImNvbnN0cnVjdG9yXCIpICYmIHQuY29uc3RydWN0b3IpICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbiAmJiBpLmNhbGwobikgPT09IGwpXG4gICAgfSksXG4gICAgdyA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgJiYgd2luZG93LmlzRmluaXRlKGUpXG4gICAgfSxcbiAgICBjID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUsIHggPSB7XG4gICAgICAgICAgZWFzZTogWy4yNSwgLjEsIC4yNSwgMV0sXG4gICAgICAgICAgbGluZWFyOiBbMCwgMCwgMSwgMV0sXG4gICAgICAgICAgXCJlYXNlLWluXCI6IFsuNDIsIDAsIDEsIDFdLFxuICAgICAgICAgIFwiZWFzZS1vdXRcIjogWzAsIDAsIC41OCwgMV0sXG4gICAgICAgICAgXCJlYXNlLWluLW91dFwiOiBbLjQyLCAwLCAuNTgsIDFdXG4gICAgICAgIH0sXG4gICAgICAgIGIgPSAxZTMgLyA2MCAvIDIsXG4gICAgICAgIHQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGUsIGIpXG4gICAgICAgIH0sXG4gICAgICAgIG4gPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChlKVxuICAgICAgICB9LFxuICAgICAgICBhID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgJiYgd2luZG93LmlzRmluaXRlKGUpXG4gICAgICAgIH0sXG4gICAgICAgIGsgPSBbXSxcbiAgICAgICAgdyA9IDA7XG5cbiAgICAgIGZ1bmN0aW9uIGwoKSB7XG4gICAgICAgIHZhciBpID0gRGF0ZS5ub3coKSxcbiAgICAgICAgICBvID0gITE7XG4gICAgICAgIGUgJiYgKG4uY2FsbCh3aW5kb3csIGUpLCBlID0gbnVsbCksIGsuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0LCBuLCBhO1xuICAgICAgICAgIGlmIChlLmZyYW1lc1N0YXJ0KSB7XG4gICAgICAgICAgICBpZiAoKHQgPSBpIC0gZS5mcmFtZXNTdGFydCkgPj0gZS5kdXJhdGlvbiAmJiBlLmNvdW50ICYmIGUubG9vcHNMZWZ0IDw9IDEpIHJldHVybiBhID0gZS5mcmFtZXNbZS5sYXN0RnJhbWUgPSBlLnJldmVyc2UgPyAwIDogZS5mcmFtZXMubGVuZ3RoIC0gMV0sIGUuZnJhbWVDYWxsYmFjayhhLnZhbHVlLCAhMCwgYS50aW1lUmF0aW8sIGEub3V0cHV0UmF0aW8pLCB2b2lkKGUuZnJhbWVzU3RhcnQgPSBudWxsKTtcbiAgICAgICAgICAgIGlmICh0ID4gZS5kdXJhdGlvbikge1xuICAgICAgICAgICAgICBpZiAobiA9IE1hdGguZmxvb3IodCAvIGUuZHVyYXRpb24pLCBlLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG4gPj0gZS5sb29wc0xlZnQpIHJldHVybiBhID0gZS5mcmFtZXNbZS5sYXN0RnJhbWUgPSBlLnJldmVyc2UgPyAwIDogZS5mcmFtZXMubGVuZ3RoIC0gMV0sIGUuZnJhbWVDYWxsYmFjayhhLnZhbHVlLCAhMCwgYS50aW1lUmF0aW8sIGEub3V0cHV0UmF0aW8pLCB2b2lkKGUuZnJhbWVzU3RhcnQgPSBudWxsKTtcbiAgICAgICAgICAgICAgICBlLmxvb3BzTGVmdCAtPSBuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZS5mcmFtZXNTdGFydCArPSBlLmR1cmF0aW9uICogbiwgdCA9IGkgLSBlLmZyYW1lc1N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnJldmVyc2UgJiYgKHQgPSBlLmR1cmF0aW9uIC0gdCksIGEgPSBlLmZyYW1lc1tlLmxhc3RGcmFtZSA9IE1hdGgucm91bmQodCAvIGIpXSwgITEgIT09IGUuZnJhbWVDYWxsYmFjayhhLnZhbHVlLCAhMSwgYS50aW1lUmF0aW8sIGEub3V0cHV0UmF0aW8pID8gbyA9ICEwIDogZS5mcmFtZXNTdGFydCA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCBvICYmIChlID0gdC5jYWxsKHdpbmRvdywgbCkpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIE8oZSwgdCkge1xuICAgICAgICBlLmZyYW1lc1N0YXJ0ID0gRGF0ZS5ub3coKSwgbnVsbCAhPSB0ICYmIChlLmZyYW1lc1N0YXJ0IC09IGUuZHVyYXRpb24gKiAoZS5yZXZlcnNlID8gMSAtIHQgOiB0KSksIGUubG9vcHNMZWZ0ID0gZS5jb3VudCwgZS5sYXN0RnJhbWUgPSBudWxsLCBsKClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZDogZnVuY3Rpb24gKG4sIGUsIHQsIGEsIGksIG8sIGwpIHtcbiAgICAgICAgICB2YXIgciwgcywgdSwgaCwgcCwgYywgZCwgZiwgeSwgUywgbSwgZywgXywgdiA9ICsrdztcblxuICAgICAgICAgIGZ1bmN0aW9uIEUoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWU6IG4odCksXG4gICAgICAgICAgICAgIHRpbWVSYXRpbzogZSxcbiAgICAgICAgICAgICAgb3V0cHV0UmF0aW86IHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGkgJiYgKGkgPSB4W2ldKSwgbiA9IG4gfHwgZnVuY3Rpb24gKCkge30sIHQgPCBiKSBzID0gW0UoMCwgMCksIEUoMSwgMSldO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHUgPSBiIC8gdCwgcyA9IFtFKDAsIDApXSwgMCA9PT0gaVswXSAmJiAwID09PSBpWzFdICYmIDEgPT09IGlbMl0gJiYgMSA9PT0gaVszXSlcbiAgICAgICAgICAgICAgZm9yIChwID0gdTsgcCA8PSAxOyBwICs9IHUpIHMucHVzaChFKHAsIHApKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgZm9yIChjID0gaCA9IChwID0gdSkgLyAxMDsgYyA8PSAxOyBjICs9IGgpIHZvaWQgMCwgUyA9ICh5ID0gKGYgPSBjKSAqIGYpICogZiwgXyA9IDMgKiAobSA9IDEgLSBmKSAqIHksIHAgPD0gKGQgPSB7XG4gICAgICAgICAgICAgICAgeDogKGcgPSAzICogKG0gKiBtKSAqIGYpICogaVswXSArIF8gKiBpWzJdICsgUyxcbiAgICAgICAgICAgICAgICB5OiBnICogaVsxXSArIF8gKiBpWzNdICsgU1xuICAgICAgICAgICAgICB9KS54ICYmIChzLnB1c2goRShkLngsIGQueSkpLCBwICs9IHUpO1xuICAgICAgICAgICAgcy5wdXNoKEUoMSwgMSkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByID0ge1xuICAgICAgICAgICAgYW5pbUlkOiB2LFxuICAgICAgICAgICAgZnJhbWVDYWxsYmFjazogZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0LFxuICAgICAgICAgICAgY291bnQ6IGEsXG4gICAgICAgICAgICBmcmFtZXM6IHMsXG4gICAgICAgICAgICByZXZlcnNlOiAhIW9cbiAgICAgICAgICB9LCBrLnB1c2gociksICExICE9PSBsICYmIE8ociwgbCksIHZcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgIHZhciBhO1xuICAgICAgICAgIGsuc29tZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbUlkID09PSBuICYmIChhID0gdCwgIShlLmZyYW1lc1N0YXJ0ID0gbnVsbCkpXG4gICAgICAgICAgfSkgJiYgay5zcGxpY2UoYSwgMSlcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICh0LCBuLCBhKSB7XG4gICAgICAgICAgay5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltSWQgPT09IHQgJiYgKGUucmV2ZXJzZSA9ICEhbiwgTyhlLCBhKSwgITApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICByZXR1cm4gay5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltSWQgPT09IHQgJiYgKG4gPyBudWxsICE9IGUubGFzdEZyYW1lICYmIChhID0gZS5mcmFtZXNbZS5sYXN0RnJhbWVdLnRpbWVSYXRpbykgOiAoYSA9IChEYXRlLm5vdygpIC0gZS5mcmFtZXNTdGFydCkgLyBlLmR1cmF0aW9uLCBlLnJldmVyc2UgJiYgKGEgPSAxIC0gYSksIGEgPCAwID8gYSA9IDAgOiAxIDwgYSAmJiAoYSA9IDEpKSwgIShlLmZyYW1lc1N0YXJ0ID0gbnVsbCkpXG4gICAgICAgICAgfSksIGFcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRUaW1pbmc6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgPyB4W3RdIDogQXJyYXkuaXNBcnJheSh0KSAmJiBbMCwgMSwgMiwgM10uZXZlcnkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhKHRbZV0pICYmIDAgPD0gdFtlXSAmJiB0W2VdIDw9IDFcbiAgICAgICAgICB9KSA/IFt0WzBdLCB0WzFdLCB0WzJdLCB0WzNdXSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0oKSxcbiAgICBkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhICYmIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnNldFBhdGhEYXRhIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGkgPSB7XG4gICAgICAgICAgICBaOiBcIlpcIixcbiAgICAgICAgICAgIE06IFwiTVwiLFxuICAgICAgICAgICAgTDogXCJMXCIsXG4gICAgICAgICAgICBDOiBcIkNcIixcbiAgICAgICAgICAgIFE6IFwiUVwiLFxuICAgICAgICAgICAgQTogXCJBXCIsXG4gICAgICAgICAgICBIOiBcIkhcIixcbiAgICAgICAgICAgIFY6IFwiVlwiLFxuICAgICAgICAgICAgUzogXCJTXCIsXG4gICAgICAgICAgICBUOiBcIlRcIixcbiAgICAgICAgICAgIHo6IFwiWlwiLFxuICAgICAgICAgICAgbTogXCJtXCIsXG4gICAgICAgICAgICBsOiBcImxcIixcbiAgICAgICAgICAgIGM6IFwiY1wiLFxuICAgICAgICAgICAgcTogXCJxXCIsXG4gICAgICAgICAgICBhOiBcImFcIixcbiAgICAgICAgICAgIGg6IFwiaFwiLFxuICAgICAgICAgICAgdjogXCJ2XCIsXG4gICAgICAgICAgICBzOiBcInNcIixcbiAgICAgICAgICAgIHQ6IFwidFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZyA9IGUsIHRoaXMuX2N1cnJlbnRJbmRleCA9IDAsIHRoaXMuX2VuZEluZGV4ID0gdGhpcy5fc3RyaW5nLmxlbmd0aCwgdGhpcy5fcHJldkNvbW1hbmQgPSBudWxsLCB0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbCA9IC0xICE9PSBlLm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpO1xuICAgICAgICBvLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICBwYXJzZVNlZ21lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0sXG4gICAgICAgICAgICAgIHQgPSBpW2VdID8gaVtlXSA6IG51bGw7XG4gICAgICAgICAgICBpZiAobnVsbCA9PT0gdCkge1xuICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gdGhpcy5fcHJldkNvbW1hbmQpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gKHQgPSAoXCIrXCIgPT09IGUgfHwgXCItXCIgPT09IGUgfHwgXCIuXCIgPT09IGUgfHwgXCIwXCIgPD0gZSAmJiBlIDw9IFwiOVwiKSAmJiBcIlpcIiAhPT0gdGhpcy5fcHJldkNvbW1hbmQgPyBcIk1cIiA9PT0gdGhpcy5fcHJldkNvbW1hbmQgPyBcIkxcIiA6IFwibVwiID09PSB0aGlzLl9wcmV2Q29tbWFuZCA/IFwibFwiIDogdGhpcy5fcHJldkNvbW1hbmQgOiBudWxsKSkgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLl9jdXJyZW50SW5kZXggKz0gMTtcbiAgICAgICAgICAgIHZhciBuID0gbnVsbCxcbiAgICAgICAgICAgICAgYSA9ICh0aGlzLl9wcmV2Q29tbWFuZCA9IHQpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJIXCIgPT09IGEgfHwgXCJWXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJNXCIgPT09IGEgfHwgXCJMXCIgPT09IGEgfHwgXCJUXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJTXCIgPT09IGEgfHwgXCJRXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJDXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCldIDogXCJBXCIgPT09IGEgPyBuID0gW3RoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlTnVtYmVyKCksIHRoaXMuX3BhcnNlQXJjRmxhZygpLCB0aGlzLl9wYXJzZUFyY0ZsYWcoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKV0gOiBcIlpcIiA9PT0gYSAmJiAodGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzKCksIG4gPSBbXSksIG51bGwgPT09IG4gfHwgMCA8PSBuLmluZGV4T2YobnVsbCkgPyBudWxsIDoge1xuICAgICAgICAgICAgICB0eXBlOiB0LFxuICAgICAgICAgICAgICB2YWx1ZXM6IG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhc01vcmVEYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXhcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBlZWtTZWdtZW50VHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBpW2VdID8gaVtlXSA6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluaXRpYWxDb21tYW5kSXNNb3ZlVG86IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNNb3JlRGF0YSgpKSByZXR1cm4gITA7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMucGVla1NlZ21lbnRUeXBlKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJNXCIgPT09IGUgfHwgXCJtXCIgPT09IGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9pc0N1cnJlbnRTcGFjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBlIDw9IFwiIFwiICYmIChcIiBcIiA9PT0gZSB8fCBcIlxcblwiID09PSBlIHx8IFwiXFx0XCIgPT09IGUgfHwgXCJcXHJcIiA9PT0gZSB8fCBcIlxcZlwiID09PSBlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3NraXBPcHRpb25hbFNwYWNlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICg7IHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4ICYmIHRoaXMuX2lzQ3VycmVudFNwYWNlKCk7KSB0aGlzLl9jdXJyZW50SW5kZXggKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3NraXBPcHRpb25hbFNwYWNlc09yRGVsaW1pdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISh0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiAhdGhpcy5faXNDdXJyZW50U3BhY2UoKSAmJiBcIixcIiAhPT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pICYmICh0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSAmJiB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIixcIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCB0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSksIHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3BhcnNlTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IDAsXG4gICAgICAgICAgICAgIHQgPSAwLFxuICAgICAgICAgICAgICBuID0gMSxcbiAgICAgICAgICAgICAgYSA9IDAsXG4gICAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgICBvID0gMSxcbiAgICAgICAgICAgICAgbCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSwgdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgXCIrXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdID8gdGhpcy5fY3VycmVudEluZGV4ICs9IDEgOiB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIi1cIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCBpID0gLTEpLCB0aGlzLl9jdXJyZW50SW5kZXggPT09IHRoaXMuX2VuZEluZGV4IHx8ICh0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8IFwiMFwiIHx8IFwiOVwiIDwgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pICYmIFwiLlwiICE9PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gdGhpcy5fY3VycmVudEluZGV4OyB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIjBcIiA8PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSAmJiB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8PSBcIjlcIjspIHRoaXMuX2N1cnJlbnRJbmRleCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCAhPT0gcilcbiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IHRoaXMuX2N1cnJlbnRJbmRleCAtIDEsIHUgPSAxOyByIDw9IHM7KSB0ICs9IHUgKiAodGhpcy5fc3RyaW5nW3NdIC0gXCIwXCIpLCBzIC09IDEsIHUgKj0gMTA7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgXCIuXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggKz0gMSwgdGhpcy5fY3VycmVudEluZGV4ID49IHRoaXMuX2VuZEluZGV4IHx8IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIDwgXCIwXCIgfHwgXCI5XCIgPCB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIGZvciAoOyB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIjBcIiA8PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSAmJiB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8PSBcIjlcIjspIG4gKj0gMTAsIGEgKz0gKHRoaXMuX3N0cmluZy5jaGFyQXQodGhpcy5fY3VycmVudEluZGV4KSAtIFwiMFwiKSAvIG4sIHRoaXMuX2N1cnJlbnRJbmRleCArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICE9PSBsICYmIHRoaXMuX2N1cnJlbnRJbmRleCArIDEgPCB0aGlzLl9lbmRJbmRleCAmJiAoXCJlXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIHx8IFwiRVwiID09PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkgJiYgXCJ4XCIgIT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXggKyAxXSAmJiBcIm1cIiAhPT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggKz0gMSwgXCIrXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdID8gdGhpcy5fY3VycmVudEluZGV4ICs9IDEgOiBcIi1cIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCBvID0gLTEpLCB0aGlzLl9jdXJyZW50SW5kZXggPj0gdGhpcy5fZW5kSW5kZXggfHwgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gPCBcIjBcIiB8fCBcIjlcIiA8IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgZm9yICg7IHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4ICYmIFwiMFwiIDw9IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdICYmIHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIDw9IFwiOVwiOykgZSAqPSAxMCwgZSArPSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSAtIFwiMFwiLCB0aGlzLl9jdXJyZW50SW5kZXggKz0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGggPSB0ICsgYTtcbiAgICAgICAgICAgIHJldHVybiBoICo9IGksIGUgJiYgKGggKj0gTWF0aC5wb3coMTAsIG8gKiBlKSksIGwgPT09IHRoaXMuX2N1cnJlbnRJbmRleCA/IG51bGwgOiAodGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzT3JEZWxpbWl0ZXIoKSwgaClcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9wYXJzZUFyY0ZsYWc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPj0gdGhpcy5fZW5kSW5kZXgpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdmFyIGUgPSBudWxsLFxuICAgICAgICAgICAgICB0ID0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICs9IDEsIFwiMFwiID09PSB0KSBlID0gMDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoXCIxXCIgIT09IHQpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICBlID0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NraXBPcHRpb25hbFNwYWNlc09yRGVsaW1pdGVyKCksIGVcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICghZSB8fCAwID09PSBlLmxlbmd0aCkgcmV0dXJuIFtdO1xuICAgICAgICAgICAgdmFyIHQgPSBuZXcgbyhlKSxcbiAgICAgICAgICAgICAgbiA9IFtdO1xuICAgICAgICAgICAgaWYgKHQuaW5pdGlhbENvbW1hbmRJc01vdmVUbygpKVxuICAgICAgICAgICAgICBmb3IgKDsgdC5oYXNNb3JlRGF0YSgpOykge1xuICAgICAgICAgICAgICAgIHZhciBhID0gdC5wYXJzZVNlZ21lbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gYSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgbi5wdXNoKGEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuID0gZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLFxuICAgICAgICAgIHIgPSBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsXG4gICAgICAgICAgZCA9IGUuU3ltYm9sID8gZS5TeW1ib2woKSA6IFwiX19jYWNoZWRQYXRoRGF0YVwiLFxuICAgICAgICAgIGYgPSBlLlN5bWJvbCA/IGUuU3ltYm9sKCkgOiBcIl9fY2FjaGVkTm9ybWFsaXplZFBhdGhEYXRhXCIsXG4gICAgICAgICAgVSA9IGZ1bmN0aW9uIChlLCB0LCBuLCBhLCBpLCBvLCBsLCByLCBzLCB1KSB7XG4gICAgICAgICAgICB2YXIgaCwgcCwgYywgZCwgZiwgeSA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHg6IGUgKiBNYXRoLmNvcyhuKSAtIHQgKiBNYXRoLnNpbihuKSxcbiAgICAgICAgICAgICAgICAgIHk6IGUgKiBNYXRoLnNpbihuKSArIHQgKiBNYXRoLmNvcyhuKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUyA9IChoID0gbCwgTWF0aC5QSSAqIGggLyAxODApLFxuICAgICAgICAgICAgICBtID0gW107XG4gICAgICAgICAgICBpZiAodSkgcCA9IHVbMF0sIGMgPSB1WzFdLCBkID0gdVsyXSwgZiA9IHVbM107XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGcgPSB5KGUsIHQsIC1TKTtcbiAgICAgICAgICAgICAgZSA9IGcueCwgdCA9IGcueTtcbiAgICAgICAgICAgICAgdmFyIF8gPSB5KG4sIGEsIC1TKSxcbiAgICAgICAgICAgICAgICB2ID0gKGUgLSAobiA9IF8ueCkpIC8gMixcbiAgICAgICAgICAgICAgICBFID0gKHQgLSAoYSA9IF8ueSkpIC8gMixcbiAgICAgICAgICAgICAgICB4ID0gdiAqIHYgLyAoaSAqIGkpICsgRSAqIEUgLyAobyAqIG8pO1xuICAgICAgICAgICAgICAxIDwgeCAmJiAoaSAqPSB4ID0gTWF0aC5zcXJ0KHgpLCBvICo9IHgpO1xuICAgICAgICAgICAgICB2YXIgYiA9IGkgKiBpLFxuICAgICAgICAgICAgICAgIGsgPSBvICogbyxcbiAgICAgICAgICAgICAgICB3ID0gYiAqIGsgLSBiICogRSAqIEUgLSBrICogdiAqIHYsXG4gICAgICAgICAgICAgICAgTyA9IGIgKiBFICogRSArIGsgKiB2ICogdixcbiAgICAgICAgICAgICAgICBNID0gKHIgPT09IHMgPyAtMSA6IDEpICogTWF0aC5zcXJ0KE1hdGguYWJzKHcgLyBPKSk7XG4gICAgICAgICAgICAgIGQgPSBNICogaSAqIEUgLyBvICsgKGUgKyBuKSAvIDIsIGYgPSBNICogLW8gKiB2IC8gaSArICh0ICsgYSkgLyAyLCBwID0gTWF0aC5hc2luKHBhcnNlRmxvYXQoKCh0IC0gZikgLyBvKS50b0ZpeGVkKDkpKSksIGMgPSBNYXRoLmFzaW4ocGFyc2VGbG9hdCgoKGEgLSBmKSAvIG8pLnRvRml4ZWQoOSkpKSwgZSA8IGQgJiYgKHAgPSBNYXRoLlBJIC0gcCksIG4gPCBkICYmIChjID0gTWF0aC5QSSAtIGMpLCBwIDwgMCAmJiAocCA9IDIgKiBNYXRoLlBJICsgcCksIGMgPCAwICYmIChjID0gMiAqIE1hdGguUEkgKyBjKSwgcyAmJiBjIDwgcCAmJiAocCAtPSAyICogTWF0aC5QSSksICFzICYmIHAgPCBjICYmIChjIC09IDIgKiBNYXRoLlBJKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIEkgPSBjIC0gcDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhJKSA+IDEyMCAqIE1hdGguUEkgLyAxODApIHtcbiAgICAgICAgICAgICAgdmFyIEMgPSBjLFxuICAgICAgICAgICAgICAgIEwgPSBuLFxuICAgICAgICAgICAgICAgIEEgPSBhO1xuICAgICAgICAgICAgICBjID0gcyAmJiBwIDwgYyA/IHAgKyAxMjAgKiBNYXRoLlBJIC8gMTgwICogMSA6IHAgKyAxMjAgKiBNYXRoLlBJIC8gMTgwICogLTEsIG4gPSBkICsgaSAqIE1hdGguY29zKGMpLCBhID0gZiArIG8gKiBNYXRoLnNpbihjKSwgbSA9IFUobiwgYSwgTCwgQSwgaSwgbywgbCwgMCwgcywgW2MsIEMsIGQsIGZdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IGMgLSBwO1xuICAgICAgICAgICAgdmFyIFYgPSBNYXRoLmNvcyhwKSxcbiAgICAgICAgICAgICAgUCA9IE1hdGguc2luKHApLFxuICAgICAgICAgICAgICBOID0gTWF0aC5jb3MoYyksXG4gICAgICAgICAgICAgIFQgPSBNYXRoLnNpbihjKSxcbiAgICAgICAgICAgICAgVyA9IE1hdGgudGFuKEkgLyA0KSxcbiAgICAgICAgICAgICAgQiA9IDQgLyAzICogaSAqIFcsXG4gICAgICAgICAgICAgIFIgPSA0IC8gMyAqIG8gKiBXLFxuICAgICAgICAgICAgICBGID0gW2UsIHRdLFxuICAgICAgICAgICAgICBHID0gW2UgKyBCICogUCwgdCAtIFIgKiBWXSxcbiAgICAgICAgICAgICAgRCA9IFtuICsgQiAqIFQsIGEgLSBSICogTl0sXG4gICAgICAgICAgICAgIHogPSBbbiwgYV07XG4gICAgICAgICAgICBpZiAoR1swXSA9IDIgKiBGWzBdIC0gR1swXSwgR1sxXSA9IDIgKiBGWzFdIC0gR1sxXSwgdSkgcmV0dXJuIFtHLCBELCB6XS5jb25jYXQobSk7XG4gICAgICAgICAgICBtID0gW0csIEQsIHpdLmNvbmNhdChtKS5qb2luKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgdmFyIGogPSBbXSxcbiAgICAgICAgICAgICAgSCA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIG0uZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICB0ICUgMiA/IEgucHVzaCh5KG1bdCAtIDFdLCBtW3RdLCBTKS55KSA6IEgucHVzaCh5KG1bdF0sIG1bdCArIDFdLCBTKS54KSwgNiA9PT0gSC5sZW5ndGggJiYgKGoucHVzaChIKSwgSCA9IFtdKVxuICAgICAgICAgICAgfSksIGpcbiAgICAgICAgICB9LFxuICAgICAgICAgIHkgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxuICAgICAgICAgICAgICAgIHZhbHVlczogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS52YWx1ZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBTID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBTID0gW10sXG4gICAgICAgICAgICAgIG0gPSBudWxsLFxuICAgICAgICAgICAgICBnID0gbnVsbCxcbiAgICAgICAgICAgICAgXyA9IG51bGwsXG4gICAgICAgICAgICAgIHYgPSBudWxsLFxuICAgICAgICAgICAgICBFID0gbnVsbCxcbiAgICAgICAgICAgICAgeCA9IG51bGwsXG4gICAgICAgICAgICAgIGIgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBpZiAoXCJNXCIgPT09IGUudHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gZS52YWx1ZXNbMF0sXG4gICAgICAgICAgICAgICAgICBuID0gZS52YWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgUy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbdCwgbl1cbiAgICAgICAgICAgICAgICB9KSwgdiA9IHggPSB0LCBFID0gYiA9IG5cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIkNcIiA9PT0gZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBlLnZhbHVlc1swXSxcbiAgICAgICAgICAgICAgICAgIGkgPSBlLnZhbHVlc1sxXSxcbiAgICAgICAgICAgICAgICAgIG8gPSBlLnZhbHVlc1syXSxcbiAgICAgICAgICAgICAgICAgIGwgPSBlLnZhbHVlc1szXTtcbiAgICAgICAgICAgICAgICB0ID0gZS52YWx1ZXNbNF0sIG4gPSBlLnZhbHVlc1s1XTtcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBpLCBvLCBsLCB0LCBuXVxuICAgICAgICAgICAgICAgIH0pLCBnID0gbywgXyA9IGwsIHYgPSB0LCBFID0gblxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiTFwiID09PSBlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0ID0gZS52YWx1ZXNbMF0sIG4gPSBlLnZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFt0LCBuXVxuICAgICAgICAgICAgICAgIH0pLCB2ID0gdCwgRSA9IG5cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIkhcIiA9PT0gZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgdCA9IGUudmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgIFMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW3QsIEVdXG4gICAgICAgICAgICAgICAgfSksIHYgPSB0XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJWXCIgPT09IGUudHlwZSkge1xuICAgICAgICAgICAgICAgIG4gPSBlLnZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFt2LCBuXVxuICAgICAgICAgICAgICAgIH0pLCBFID0gblxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiU1wiID09PSBlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBvID0gZS52YWx1ZXNbMF0sIGwgPSBlLnZhbHVlc1sxXSwgdCA9IGUudmFsdWVzWzJdLCBuID0gZS52YWx1ZXNbM107XG4gICAgICAgICAgICAgICAgXCJDXCIgPT09IG0gfHwgXCJTXCIgPT09IG0gPyAociA9IHYgKyAodiAtIGcpLCBzID0gRSArIChFIC0gXykpIDogKHIgPSB2LCBzID0gRSksIFMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW3IsIHMsIG8sIGwsIHQsIG5dXG4gICAgICAgICAgICAgICAgfSksIGcgPSBvLCBfID0gbCwgdiA9IHQsIEUgPSBuXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJUXCIgPT09IGUudHlwZSkge1xuICAgICAgICAgICAgICAgIHQgPSBlLnZhbHVlc1swXSwgbiA9IGUudmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgIFwiUVwiID09PSBtIHx8IFwiVFwiID09PSBtID8gKGEgPSB2ICsgKHYgLSBnKSwgaSA9IEUgKyAoRSAtIF8pKSA6IChhID0gdiwgaSA9IEUpO1xuICAgICAgICAgICAgICAgIHZhciByID0gdiArIDIgKiAoYSAtIHYpIC8gMyxcbiAgICAgICAgICAgICAgICAgIHMgPSBFICsgMiAqIChpIC0gRSkgLyAzLFxuICAgICAgICAgICAgICAgICAgdSA9IHQgKyAyICogKGEgLSB0KSAvIDMsXG4gICAgICAgICAgICAgICAgICBoID0gbiArIDIgKiAoaSAtIG4pIC8gMztcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFtyLCBzLCB1LCBoLCB0LCBuXVxuICAgICAgICAgICAgICAgIH0pLCBnID0gYSwgXyA9IGksIHYgPSB0LCBFID0gblxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiUVwiID09PSBlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBhID0gZS52YWx1ZXNbMF0sIGkgPSBlLnZhbHVlc1sxXSwgdCA9IGUudmFsdWVzWzJdLCBuID0gZS52YWx1ZXNbM10sIHIgPSB2ICsgMiAqIChhIC0gdikgLyAzLCBzID0gRSArIDIgKiAoaSAtIEUpIC8gMywgdSA9IHQgKyAyICogKGEgLSB0KSAvIDMsIGggPSBuICsgMiAqIChpIC0gbikgLyAzO1xuICAgICAgICAgICAgICAgIFMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW3IsIHMsIHUsIGgsIHQsIG5dXG4gICAgICAgICAgICAgICAgfSksIGcgPSBhLCBfID0gaSwgdiA9IHQsIEUgPSBuXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJBXCIgPT09IGUudHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gZS52YWx1ZXNbMF0sXG4gICAgICAgICAgICAgICAgICBjID0gZS52YWx1ZXNbMV0sXG4gICAgICAgICAgICAgICAgICBkID0gZS52YWx1ZXNbMl0sXG4gICAgICAgICAgICAgICAgICBmID0gZS52YWx1ZXNbM10sXG4gICAgICAgICAgICAgICAgICB5ID0gZS52YWx1ZXNbNF07XG4gICAgICAgICAgICAgICAgdCA9IGUudmFsdWVzWzVdLCBuID0gZS52YWx1ZXNbNl07XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHAgfHwgMCA9PT0gYykgUy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbdiwgRSwgdCwgbiwgdCwgbl1cbiAgICAgICAgICAgICAgICB9KSwgdiA9IHQsIEUgPSBuO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgIT09IHQgfHwgRSAhPT0gbikgVSh2LCBFLCB0LCBuLCBwLCBjLCBkLCBmLCB5KS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICBTLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBlXG4gICAgICAgICAgICAgICAgICB9KSwgdiA9IHQsIEUgPSBuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBlbHNlIFwiWlwiID09PSBlLnR5cGUgJiYgKFMucHVzaChlKSwgdiA9IHgsIEUgPSBiKTtcbiAgICAgICAgICAgICAgbSA9IGUudHlwZVxuICAgICAgICAgICAgfSksIFNcbiAgICAgICAgICB9O1xuICAgICAgICBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIFwiZFwiID09PSBlICYmICh0aGlzW2RdID0gbnVsbCwgdGhpc1tmXSA9IG51bGwpLCBuLmNhbGwodGhpcywgZSwgdClcbiAgICAgICAgfSwgZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBcImRcIiA9PT0gZSAmJiAodGhpc1tkXSA9IG51bGwsIHRoaXNbZl0gPSBudWxsKSwgci5jYWxsKHRoaXMsIGUpXG4gICAgICAgIH0sIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZSAmJiBlLm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbZl0pIHJldHVybiB5KHRoaXNbZl0pO1xuICAgICAgICAgICAgdGhpc1tkXSA/IG4gPSB5KHRoaXNbZF0pIDogKG4gPSBhKHRoaXMuZ2V0QXR0cmlidXRlKFwiZFwiKSB8fCBcIlwiKSwgdGhpc1tkXSA9IHkobikpO1xuICAgICAgICAgICAgdmFyIHQgPSBTKChzID0gW10sIGMgPSBwID0gaCA9IHUgPSBudWxsLCBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBlLnR5cGU7XG4gICAgICAgICAgICAgIGlmIChcIk1cIiA9PT0gdCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gZS52YWx1ZXNbMF0sXG4gICAgICAgICAgICAgICAgICBhID0gZS52YWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbbiwgYV1cbiAgICAgICAgICAgICAgICB9KSwgdSA9IHAgPSBuLCBoID0gYyA9IGFcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIm1cIiA9PT0gdCkgbiA9IHUgKyBlLnZhbHVlc1swXSwgYSA9IGggKyBlLnZhbHVlc1sxXSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxuICAgICAgICAgICAgICB9KSwgdSA9IHAgPSBuLCBoID0gYyA9IGE7XG4gICAgICAgICAgICAgIGVsc2UgaWYgKFwiTFwiID09PSB0KSBuID0gZS52YWx1ZXNbMF0sIGEgPSBlLnZhbHVlc1sxXSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhO1xuICAgICAgICAgICAgICBlbHNlIGlmIChcImxcIiA9PT0gdCkgbiA9IHUgKyBlLnZhbHVlc1swXSwgYSA9IGggKyBlLnZhbHVlc1sxXSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhO1xuICAgICAgICAgICAgICBlbHNlIGlmIChcIkNcIiA9PT0gdCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gZS52YWx1ZXNbMF0sXG4gICAgICAgICAgICAgICAgICBvID0gZS52YWx1ZXNbMV0sXG4gICAgICAgICAgICAgICAgICBsID0gZS52YWx1ZXNbMl0sXG4gICAgICAgICAgICAgICAgICByID0gZS52YWx1ZXNbM107XG4gICAgICAgICAgICAgICAgbiA9IGUudmFsdWVzWzRdLCBhID0gZS52YWx1ZXNbNV0sIHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW2ksIG8sIGwsIHIsIG4sIGFdXG4gICAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYVxuICAgICAgICAgICAgICB9IGVsc2UgXCJjXCIgPT09IHQgPyAoaSA9IHUgKyBlLnZhbHVlc1swXSwgbyA9IGggKyBlLnZhbHVlc1sxXSwgbCA9IHUgKyBlLnZhbHVlc1syXSwgciA9IGggKyBlLnZhbHVlc1szXSwgbiA9IHUgKyBlLnZhbHVlc1s0XSwgYSA9IGggKyBlLnZhbHVlc1s1XSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtpLCBvLCBsLCByLCBuLCBhXVxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwiUVwiID09PSB0ID8gKGkgPSBlLnZhbHVlc1swXSwgbyA9IGUudmFsdWVzWzFdLCBuID0gZS52YWx1ZXNbMl0sIGEgPSBlLnZhbHVlc1szXSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlFcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtpLCBvLCBuLCBhXVxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwicVwiID09PSB0ID8gKGkgPSB1ICsgZS52YWx1ZXNbMF0sIG8gPSBoICsgZS52YWx1ZXNbMV0sIG4gPSB1ICsgZS52YWx1ZXNbMl0sIGEgPSBoICsgZS52YWx1ZXNbM10sIHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJRXCIsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbaSwgbywgbiwgYV1cbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcIkFcIiA9PT0gdCA/IChuID0gZS52YWx1ZXNbNV0sIGEgPSBlLnZhbHVlc1s2XSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtlLnZhbHVlc1swXSwgZS52YWx1ZXNbMV0sIGUudmFsdWVzWzJdLCBlLnZhbHVlc1szXSwgZS52YWx1ZXNbNF0sIG4sIGFdXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGEpIDogXCJhXCIgPT09IHQgPyAobiA9IHUgKyBlLnZhbHVlc1s1XSwgYSA9IGggKyBlLnZhbHVlc1s2XSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtlLnZhbHVlc1swXSwgZS52YWx1ZXNbMV0sIGUudmFsdWVzWzJdLCBlLnZhbHVlc1szXSwgZS52YWx1ZXNbNF0sIG4sIGFdXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGEpIDogXCJIXCIgPT09IHQgPyAobiA9IGUudmFsdWVzWzBdLCBzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiSFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW25dXG4gICAgICAgICAgICAgIH0pLCB1ID0gbikgOiBcImhcIiA9PT0gdCA/IChuID0gdSArIGUudmFsdWVzWzBdLCBzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiSFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW25dXG4gICAgICAgICAgICAgIH0pLCB1ID0gbikgOiBcIlZcIiA9PT0gdCA/IChhID0gZS52YWx1ZXNbMF0sIHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJWXCIsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbYV1cbiAgICAgICAgICAgICAgfSksIGggPSBhKSA6IFwidlwiID09PSB0ID8gKGEgPSBoICsgZS52YWx1ZXNbMF0sIHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJWXCIsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbYV1cbiAgICAgICAgICAgICAgfSksIGggPSBhKSA6IFwiU1wiID09PSB0ID8gKGwgPSBlLnZhbHVlc1swXSwgciA9IGUudmFsdWVzWzFdLCBuID0gZS52YWx1ZXNbMl0sIGEgPSBlLnZhbHVlc1szXSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtsLCByLCBuLCBhXVxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwic1wiID09PSB0ID8gKGwgPSB1ICsgZS52YWx1ZXNbMF0sIHIgPSBoICsgZS52YWx1ZXNbMV0sIG4gPSB1ICsgZS52YWx1ZXNbMl0sIGEgPSBoICsgZS52YWx1ZXNbM10sIHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTXCIsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbCwgciwgbiwgYV1cbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcIlRcIiA9PT0gdCA/IChuID0gZS52YWx1ZXNbMF0sIGEgPSBlLnZhbHVlc1sxXSwgcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwidFwiID09PSB0ID8gKG4gPSB1ICsgZS52YWx1ZXNbMF0sIGEgPSBoICsgZS52YWx1ZXNbMV0sIHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJUXCIsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbiwgYV1cbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcIlpcIiAhPT0gdCAmJiBcInpcIiAhPT0gdCB8fCAocy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlpcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdXG4gICAgICAgICAgICAgIH0pLCB1ID0gcCwgaCA9IGMpXG4gICAgICAgICAgICB9KSwgcykpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbZl0gPSB5KHQpLCB0XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzW2RdKSByZXR1cm4geSh0aGlzW2RdKTtcbiAgICAgICAgICB2YXIgcywgdSwgaCwgcCwgYywgbiA9IGEodGhpcy5nZXRBdHRyaWJ1dGUoXCJkXCIpIHx8IFwiXCIpO1xuICAgICAgICAgIHJldHVybiB0aGlzW2RdID0geShuKSwgblxuICAgICAgICB9LCBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5zZXRQYXRoRGF0YSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKDAgPT09IGUubGVuZ3RoKSBsID8gdGhpcy5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpIDogdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJkXCIpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgdCA9IFwiXCIsIG4gPSAwLCBhID0gZS5sZW5ndGg7IG4gPCBhOyBuICs9IDEpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSBlW25dO1xuICAgICAgICAgICAgICAwIDwgbiAmJiAodCArPSBcIiBcIiksIHQgKz0gaS50eXBlLCBpLnZhbHVlcyAmJiAwIDwgaS52YWx1ZXMubGVuZ3RoICYmICh0ICs9IFwiIFwiICsgaS52YWx1ZXMuam9pbihcIiBcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRcIiwgdClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGUuU1ZHUmVjdEVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMueC5iYXNlVmFsLnZhbHVlLFxuICAgICAgICAgICAgbiA9IHRoaXMueS5iYXNlVmFsLnZhbHVlLFxuICAgICAgICAgICAgYSA9IHRoaXMud2lkdGguYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIGkgPSB0aGlzLmhlaWdodC5iYXNlVmFsLnZhbHVlLFxuICAgICAgICAgICAgbyA9IHRoaXMuaGFzQXR0cmlidXRlKFwicnhcIikgPyB0aGlzLnJ4LmJhc2VWYWwudmFsdWUgOiB0aGlzLnJ5LmJhc2VWYWwudmFsdWUsXG4gICAgICAgICAgICBsID0gdGhpcy5oYXNBdHRyaWJ1dGUoXCJyeVwiKSA/IHRoaXMucnkuYmFzZVZhbC52YWx1ZSA6IHRoaXMucnguYmFzZVZhbC52YWx1ZTtcbiAgICAgICAgICBhIC8gMiA8IG8gJiYgKG8gPSBhIC8gMiksIGkgLyAyIDwgbCAmJiAobCA9IGkgLyAyKTtcbiAgICAgICAgICB2YXIgciA9IFt7XG4gICAgICAgICAgICB0eXBlOiBcIk1cIixcbiAgICAgICAgICAgIHZhbHVlczogW3QgKyBvLCBuXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiSFwiLFxuICAgICAgICAgICAgdmFsdWVzOiBbdCArIGEgLSBvXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBbbywgbCwgMCwgMCwgMSwgdCArIGEsIG4gKyBsXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiVlwiLFxuICAgICAgICAgICAgdmFsdWVzOiBbbiArIGkgLSBsXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBbbywgbCwgMCwgMCwgMSwgdCArIGEgLSBvLCBuICsgaV1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcIkhcIixcbiAgICAgICAgICAgIHZhbHVlczogW3QgKyBvXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBbbywgbCwgMCwgMCwgMSwgdCwgbiArIGkgLSBsXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiVlwiLFxuICAgICAgICAgICAgdmFsdWVzOiBbbiArIGxdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJBXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFtvLCBsLCAwLCAwLCAxLCB0ICsgbywgbl1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcIlpcIixcbiAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICB9XTtcbiAgICAgICAgICByZXR1cm4gciA9IHIuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBXCIgIT09IGUudHlwZSB8fCAwICE9PSBlLnZhbHVlc1swXSAmJiAwICE9PSBlLnZhbHVlc1sxXVxuICAgICAgICAgIH0pLCBlICYmICEwID09PSBlLm5vcm1hbGl6ZSAmJiAociA9IFMocikpLCByXG4gICAgICAgIH0sIGUuU1ZHQ2lyY2xlRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGEgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy5jeC5iYXNlVmFsLnZhbHVlLFxuICAgICAgICAgICAgbiA9IHRoaXMuY3kuYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIGEgPSB0aGlzLnIuYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIGkgPSBbe1xuICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBbdCArIGEsIG5dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBhLCAwLCAwLCAxLCB0LCBuICsgYV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJBXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGEsIDAsIDAsIDEsIHQgLSBhLCBuXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgYSwgMCwgMCwgMSwgdCwgbiAtIGFdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBhLCAwLCAwLCAxLCB0ICsgYSwgbl1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJaXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIHJldHVybiBlICYmICEwID09PSBlLm5vcm1hbGl6ZSAmJiAoaSA9IFMoaSkpLCBpXG4gICAgICAgIH0sIGUuU1ZHRWxsaXBzZUVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IHRoaXMuY3guYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIG4gPSB0aGlzLmN5LmJhc2VWYWwudmFsdWUsXG4gICAgICAgICAgICBhID0gdGhpcy5yeC5iYXNlVmFsLnZhbHVlLFxuICAgICAgICAgICAgaSA9IHRoaXMucnkuYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIG8gPSBbe1xuICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBbdCArIGEsIG5dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBpLCAwLCAwLCAxLCB0LCBuICsgaV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJBXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGksIDAsIDAsIDEsIHQgLSBhLCBuXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgaSwgMCwgMCwgMSwgdCwgbiAtIGldXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBpLCAwLCAwLCAxLCB0ICsgYSwgbl1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJaXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIHJldHVybiBlICYmICEwID09PSBlLm5vcm1hbGl6ZSAmJiAobyA9IFMobykpLCBvXG4gICAgICAgIH0sIGUuU1ZHTGluZUVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgdHlwZTogXCJNXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFt0aGlzLngxLmJhc2VWYWwudmFsdWUsIHRoaXMueTEuYmFzZVZhbC52YWx1ZV1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcIkxcIixcbiAgICAgICAgICAgIHZhbHVlczogW3RoaXMueDIuYmFzZVZhbC52YWx1ZSwgdGhpcy55Mi5iYXNlVmFsLnZhbHVlXVxuICAgICAgICAgIH1dXG4gICAgICAgIH0sIGUuU1ZHUG9seWxpbmVFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciBlID0gW10sIHQgPSAwOyB0IDwgdGhpcy5wb2ludHMubnVtYmVyT2ZJdGVtczsgdCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMucG9pbnRzLmdldEl0ZW0odCk7XG4gICAgICAgICAgICBlLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAwID09PSB0ID8gXCJNXCIgOiBcIkxcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBbbi54LCBuLnldXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZVxuICAgICAgICB9LCBlLlNWR1BvbHlnb25FbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciBlID0gW10sIHQgPSAwOyB0IDwgdGhpcy5wb2ludHMubnVtYmVyT2ZJdGVtczsgdCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMucG9pbnRzLmdldEl0ZW0odCk7XG4gICAgICAgICAgICBlLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAwID09PSB0ID8gXCJNXCIgOiBcIkxcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBbbi54LCBuLnldXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiWlwiLFxuICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICAgIH0pLCBlXG4gICAgICAgIH1cbiAgICAgIH0oKVxuICAgIH0sXG4gICAgTyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICB2YXIgYSA9IHt9O1xuXG4gICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgaWYgKGFbZV0pIHJldHVybiBhW2VdLmV4cG9ydHM7XG4gICAgICAgIHZhciB0ID0gYVtlXSA9IHtcbiAgICAgICAgICBpOiBlLFxuICAgICAgICAgIGw6ICExLFxuICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuW2VdLmNhbGwodC5leHBvcnRzLCB0LCB0LmV4cG9ydHMsIGkpLCB0LmwgPSAhMCwgdC5leHBvcnRzXG4gICAgICB9XG4gICAgICByZXR1cm4gaS5tID0gbiwgaS5jID0gYSwgaS5kID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgaS5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICBnZXQ6IG5cbiAgICAgICAgfSlcbiAgICAgIH0sIGkuciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KVxuICAgICAgfSwgaS5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZS5kZWZhdWx0XG4gICAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGkuZCh0LCBcImFcIiwgdCksIHRcbiAgICAgIH0sIGkubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdClcbiAgICAgIH0sIGkucCA9IFwiXCIsIGkoaS5zID0gMClcbiAgICB9KFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgbi5yKHQpO1xuICAgICAgdmFyIGEgPSA1MDAsXG4gICAgICAgIGkgPSBbXSxcbiAgICAgICAgbyA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGUsIDFlMyAvIDYwKVxuICAgICAgICB9LFxuICAgICAgICBsID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGUpXG4gICAgICAgIH0sXG4gICAgICAgIHIgPSB2b2lkIDAsXG4gICAgICAgIHMgPSBEYXRlLm5vdygpO1xuXG4gICAgICBmdW5jdGlvbiB1KCkge1xuICAgICAgICB2YXIgdCA9IHZvaWQgMCxcbiAgICAgICAgICBlID0gdm9pZCAwO1xuICAgICAgICByICYmIChsLmNhbGwod2luZG93LCByKSwgciA9IG51bGwpLCBpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLmV2ZW50ICYmIChlLmxpc3RlbmVyKGUuZXZlbnQpLCBlLmV2ZW50ID0gbnVsbCwgdCA9ICEwKVxuICAgICAgICB9KSwgdCA/IChzID0gRGF0ZS5ub3coKSwgZSA9ICEwKSA6IERhdGUubm93KCkgLSBzIDwgYSAmJiAoZSA9ICEwKSwgZSAmJiAociA9IG8uY2FsbCh3aW5kb3csIHUpKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoKG4pIHtcbiAgICAgICAgdmFyIGEgPSAtMTtcbiAgICAgICAgcmV0dXJuIGkuc29tZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiBlLmxpc3RlbmVyID09PSBuICYmIChhID0gdCwgITApXG4gICAgICAgIH0pLCBhXG4gICAgICB9XG4gICAgICB2YXIgcCA9IHtcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiAtMSA9PT0gaChlKSA/IChpLnB1c2godCA9IHtcbiAgICAgICAgICAgIGxpc3RlbmVyOiBlXG4gICAgICAgICAgfSksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0LmV2ZW50ID0gZSwgciB8fCB1KClcbiAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0OyAtIDEgPCAodCA9IGgoZSkpICYmIChpLnNwbGljZSh0LCAxKSwgIWkubGVuZ3RoICYmIHIgJiYgKGwuY2FsbCh3aW5kb3csIHIpLCByID0gbnVsbCkpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0LmRlZmF1bHQgPSBwXG4gICAgfV0pLmRlZmF1bHQsXG4gICAgWSA9IHtcbiAgICAgIGxpbmVfYWx0Q29sb3I6IHtcbiAgICAgICAgaW5pVmFsdWU6ICExXG4gICAgICB9LFxuICAgICAgbGluZV9jb2xvcjoge30sXG4gICAgICBsaW5lX2NvbG9yVHJhOiB7XG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIGxpbmVfc3Ryb2tlV2lkdGg6IHt9LFxuICAgICAgcGx1Z19lbmFibGVkOiB7XG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIHBsdWdfZW5hYmxlZFNFOiB7XG4gICAgICAgIGhhc1NFOiAhMCxcbiAgICAgICAgaW5pVmFsdWU6ICExXG4gICAgICB9LFxuICAgICAgcGx1Z19wbHVnU0U6IHtcbiAgICAgICAgaGFzU0U6ICEwLFxuICAgICAgICBpbmlWYWx1ZTogbmVcbiAgICAgIH0sXG4gICAgICBwbHVnX2NvbG9yU0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgcGx1Z19jb2xvclRyYVNFOiB7XG4gICAgICAgIGhhc1NFOiAhMCxcbiAgICAgICAgaW5pVmFsdWU6ICExXG4gICAgICB9LFxuICAgICAgcGx1Z19tYXJrZXJXaWR0aFNFOiB7XG4gICAgICAgIGhhc1NFOiAhMFxuICAgICAgfSxcbiAgICAgIHBsdWdfbWFya2VySGVpZ2h0U0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgbGluZU91dGxpbmVfZW5hYmxlZDoge1xuICAgICAgICBpbmlWYWx1ZTogITFcbiAgICAgIH0sXG4gICAgICBsaW5lT3V0bGluZV9jb2xvcjoge30sXG4gICAgICBsaW5lT3V0bGluZV9jb2xvclRyYToge1xuICAgICAgICBpbmlWYWx1ZTogITFcbiAgICAgIH0sXG4gICAgICBsaW5lT3V0bGluZV9zdHJva2VXaWR0aDoge30sXG4gICAgICBsaW5lT3V0bGluZV9pblN0cm9rZVdpZHRoOiB7fSxcbiAgICAgIHBsdWdPdXRsaW5lX2VuYWJsZWRTRToge1xuICAgICAgICBoYXNTRTogITAsXG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIHBsdWdPdXRsaW5lX3BsdWdTRToge1xuICAgICAgICBoYXNTRTogITAsXG4gICAgICAgIGluaVZhbHVlOiBuZVxuICAgICAgfSxcbiAgICAgIHBsdWdPdXRsaW5lX2NvbG9yU0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgcGx1Z091dGxpbmVfY29sb3JUcmFTRToge1xuICAgICAgICBoYXNTRTogITAsXG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIHBsdWdPdXRsaW5lX3N0cm9rZVdpZHRoU0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgcGx1Z091dGxpbmVfaW5TdHJva2VXaWR0aFNFOiB7XG4gICAgICAgIGhhc1NFOiAhMFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uX3NvY2tldFhZU0U6IHtcbiAgICAgICAgaGFzU0U6ICEwLFxuICAgICAgICBoYXNQcm9wczogITBcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRToge1xuICAgICAgICBoYXNTRTogITBcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbl9wYXRoOiB7fSxcbiAgICAgIHBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aDoge30sXG4gICAgICBwb3NpdGlvbl9zb2NrZXRHcmF2aXR5U0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgcGF0aF9wYXRoRGF0YToge30sXG4gICAgICBwYXRoX2VkZ2U6IHtcbiAgICAgICAgaGFzUHJvcHM6ICEwXG4gICAgICB9LFxuICAgICAgdmlld0JveF9iQm94OiB7XG4gICAgICAgIGhhc1Byb3BzOiAhMFxuICAgICAgfSxcbiAgICAgIHZpZXdCb3hfcGx1Z0JDaXJjbGVTRToge1xuICAgICAgICBoYXNTRTogITBcbiAgICAgIH0sXG4gICAgICBsaW5lTWFza19lbmFibGVkOiB7XG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIGxpbmVNYXNrX291dGxpbmVNb2RlOiB7XG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIGxpbmVNYXNrX3g6IHt9LFxuICAgICAgbGluZU1hc2tfeToge30sXG4gICAgICBsaW5lT3V0bGluZU1hc2tfeDoge30sXG4gICAgICBsaW5lT3V0bGluZU1hc2tfeToge30sXG4gICAgICBtYXNrQkdSZWN0X3g6IHt9LFxuICAgICAgbWFza0JHUmVjdF95OiB7fSxcbiAgICAgIGNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRToge1xuICAgICAgICBoYXNTRTogITAsXG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIGNhcHNNYXNrQW5jaG9yX3BhdGhEYXRhU0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgY2Fwc01hc2tBbmNob3Jfc3Ryb2tlV2lkdGhTRToge1xuICAgICAgICBoYXNTRTogITBcbiAgICAgIH0sXG4gICAgICBjYXBzTWFza01hcmtlcl9lbmFibGVkOiB7XG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIGNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRToge1xuICAgICAgICBoYXNTRTogITAsXG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIGNhcHNNYXNrTWFya2VyX3BsdWdTRToge1xuICAgICAgICBoYXNTRTogITAsXG4gICAgICAgIGluaVZhbHVlOiBuZVxuICAgICAgfSxcbiAgICAgIGNhcHNNYXNrTWFya2VyX21hcmtlcldpZHRoU0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgY2Fwc01hc2tNYXJrZXJfbWFya2VySGVpZ2h0U0U6IHtcbiAgICAgICAgaGFzU0U6ICEwXG4gICAgICB9LFxuICAgICAgY2Fwc19lbmFibGVkOiB7XG4gICAgICAgIGluaVZhbHVlOiAhMVxuICAgICAgfSxcbiAgICAgIGF0dGFjaF9wbHVnU2lkZUxlblNFOiB7XG4gICAgICAgIGhhc1NFOiAhMFxuICAgICAgfSxcbiAgICAgIGF0dGFjaF9wbHVnQmFja0xlblNFOiB7XG4gICAgICAgIGhhc1NFOiAhMFxuICAgICAgfVxuICAgIH0sXG4gICAgWCA9IHtcbiAgICAgIHNob3dfb246IHt9LFxuICAgICAgc2hvd19lZmZlY3Q6IHt9LFxuICAgICAgc2hvd19hbmltT3B0aW9uczoge30sXG4gICAgICBzaG93X2FuaW1JZDoge30sXG4gICAgICBzaG93X2luQW5pbToge31cbiAgICB9LFxuICAgIHEgPSBcImZhZGVcIixcbiAgICBRID0gW10sXG4gICAgSyA9IHt9LFxuICAgIEogPSAwLFxuICAgICQgPSB7fSxcbiAgICBlZSA9IDA7XG5cbiAgZnVuY3Rpb24gY2UodCwgbikge1xuICAgIHZhciBlLCBhO1xuICAgIHJldHVybiB0eXBlb2YgdCAhPSB0eXBlb2YgbiB8fCAoZSA9IGsodCkgPyBcIm9ialwiIDogQXJyYXkuaXNBcnJheSh0KSA/IFwiYXJyYXlcIiA6IFwiXCIpICE9IChrKG4pID8gXCJvYmpcIiA6IEFycmF5LmlzQXJyYXkobikgPyBcImFycmF5XCIgOiBcIlwiKSB8fCAoXCJvYmpcIiA9PT0gZSA/IGNlKGEgPSBPYmplY3Qua2V5cyh0KS5zb3J0KCksIE9iamVjdC5rZXlzKG4pLnNvcnQoKSkgfHwgYS5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gY2UodFtlXSwgbltlXSlcbiAgICB9KSA6IFwiYXJyYXlcIiA9PT0gZSA/IHQubGVuZ3RoICE9PSBuLmxlbmd0aCB8fCB0LnNvbWUoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBjZShlLCBuW3RdKVxuICAgIH0pIDogdCAhPT0gbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlKG4pIHtcbiAgICByZXR1cm4gbiA/IGsobikgPyBPYmplY3Qua2V5cyhuKS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlW3RdID0gZGUoblt0XSksIGVcbiAgICB9LCB7fSkgOiBBcnJheS5pc0FycmF5KG4pID8gbi5tYXAoZGUpIDogbiA6IG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGZlKGUpIHtcbiAgICB2YXIgdCwgbiwgYSwgaSA9IDEsXG4gICAgICBvID0gZSA9IChlICsgXCJcIikudHJpbSgpO1xuXG4gICAgZnVuY3Rpb24gbChlKSB7XG4gICAgICB2YXIgdCA9IDEsXG4gICAgICAgIG4gPSB1LmV4ZWMoZSk7XG4gICAgICByZXR1cm4gbiAmJiAodCA9IHBhcnNlRmxvYXQoblsxXSksIG5bMl0gPyB0ID0gMCA8PSB0ICYmIHQgPD0gMTAwID8gdCAvIDEwMCA6IDEgOiAodCA8IDAgfHwgMSA8IHQpICYmICh0ID0gMSkpLCB0XG4gICAgfVxuICAgIHJldHVybiAodCA9IC9eKHJnYmF8aHNsYXxod2J8Z3JheXxkZXZpY2VcXC1jbXlrKVxccypcXCgoW1xcc1xcU10rKVxcKSQvaS5leGVjKGUpKSA/IChuID0gdFsxXS50b0xvd2VyQ2FzZSgpLCBhID0gdFsyXS50cmltKCkuc3BsaXQoL1xccyosXFxzKi8pLCBcInJnYmFcIiA9PT0gbiAmJiA0ID09PSBhLmxlbmd0aCA/IChpID0gbChhWzNdKSwgbyA9IFwicmdiKFwiICsgYS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIilcIikgOiBcImhzbGFcIiA9PT0gbiAmJiA0ID09PSBhLmxlbmd0aCA/IChpID0gbChhWzNdKSwgbyA9IFwiaHNsKFwiICsgYS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIilcIikgOiBcImh3YlwiID09PSBuICYmIDQgPT09IGEubGVuZ3RoID8gKGkgPSBsKGFbM10pLCBvID0gXCJod2IoXCIgKyBhLnNsaWNlKDAsIDMpLmpvaW4oXCIsIFwiKSArIFwiKVwiKSA6IFwiZ3JheVwiID09PSBuICYmIDIgPT09IGEubGVuZ3RoID8gKGkgPSBsKGFbMV0pLCBvID0gXCJncmF5KFwiICsgYVswXSArIFwiKVwiKSA6IFwiZGV2aWNlLWNteWtcIiA9PT0gbiAmJiA1IDw9IGEubGVuZ3RoICYmIChpID0gbChhWzRdKSwgbyA9IFwiZGV2aWNlLWNteWsoXCIgKyBhLnNsaWNlKDAsIDQpLmpvaW4oXCIsIFwiKSArIFwiKVwiKSkgOiAodCA9IC9eXFwjKD86KFtcXGRhLWZdezZ9KShbXFxkYS1mXXsyfSl8KFtcXGRhLWZdezN9KShbXFxkYS1mXSkpJC9pLmV4ZWMoZSkpID8gdFsxXSA/IChpID0gcGFyc2VJbnQodFsyXSwgMTYpIC8gMjU1LCBvID0gXCIjXCIgKyB0WzFdKSA6IChpID0gcGFyc2VJbnQodFs0XSArIHRbNF0sIDE2KSAvIDI1NSwgbyA9IFwiI1wiICsgdFszXSkgOiBcInRyYW5zcGFyZW50XCIgPT09IGUudG9Mb2NhbGVMb3dlckNhc2UoKSAmJiAoaSA9IDApLCBbaSwgb11cbiAgfVxuXG4gIGZ1bmN0aW9uIHllKGUpIHtcbiAgICByZXR1cm4gISghZSB8fCBlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KVxuICB9XG5cbiAgZnVuY3Rpb24gU2UoZSwgdCkge1xuICAgIHZhciBuLCBhLCBpLCBvLCBsID0ge307XG4gICAgaWYgKCEoaSA9IGUub3duZXJEb2N1bWVudCkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGdldCBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSwgbnVsbDtcbiAgICBpZiAoZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihpKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkEgZGlzY29ubmVjdGVkIGVsZW1lbnQgd2FzIHBhc3NlZC5cIiksIG51bGw7XG4gICAgZm9yIChhIGluIG4gPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSBsW2FdID0gblthXTtcbiAgICBpZiAoIXQpIHtcbiAgICAgIGlmICghKG8gPSBpLmRlZmF1bHRWaWV3KSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgZ2V0IHdpbmRvdyB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSwgbnVsbDtcbiAgICAgIGwubGVmdCArPSBvLnBhZ2VYT2Zmc2V0LCBsLnJpZ2h0ICs9IG8ucGFnZVhPZmZzZXQsIGwudG9wICs9IG8ucGFnZVlPZmZzZXQsIGwuYm90dG9tICs9IG8ucGFnZVlPZmZzZXRcbiAgICB9XG4gICAgcmV0dXJuIGxcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lKGUsIHQpIHtcbiAgICB2YXIgbiwgYSwgaSA9IFtdLFxuICAgICAgbyA9IGU7XG4gICAgZm9yICh0ID0gdCB8fCB3aW5kb3c7Oykge1xuICAgICAgaWYgKCEobiA9IG8ub3duZXJEb2N1bWVudCkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGdldCBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSwgbnVsbDtcbiAgICAgIGlmICghKGEgPSBuLmRlZmF1bHRWaWV3KSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgZ2V0IHdpbmRvdyB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSwgbnVsbDtcbiAgICAgIGlmIChhID09PSB0KSBicmVhaztcbiAgICAgIGlmICghKG8gPSBhLmZyYW1lRWxlbWVudCkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiYGJhc2VXaW5kb3dgIHdhcyBub3QgZm91bmQuXCIpLCBudWxsO1xuICAgICAgaS51bnNoaWZ0KG8pXG4gICAgfVxuICAgIHJldHVybiBpXG4gIH1cblxuICBmdW5jdGlvbiBnZShlLCB0KSB7XG4gICAgdmFyIG4sIGEsIG8gPSAwLFxuICAgICAgbCA9IDA7XG4gICAgcmV0dXJuIChhID0gbWUoZSwgdCA9IHQgfHwgd2luZG93KSkgPyBhLmxlbmd0aCA/IChhLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBuLCBhLCBpID0gU2UoZSwgMCA8IHQpO1xuICAgICAgbyArPSBpLmxlZnQsIGwgKz0gaS50b3AsIGEgPSAobiA9IGUpLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShuLCBcIlwiKSwgaSA9IHtcbiAgICAgICAgbGVmdDogbi5jbGllbnRMZWZ0ICsgcGFyc2VGbG9hdChhLnBhZGRpbmdMZWZ0KSxcbiAgICAgICAgdG9wOiBuLmNsaWVudFRvcCArIHBhcnNlRmxvYXQoYS5wYWRkaW5nVG9wKVxuICAgICAgfSwgbyArPSBpLmxlZnQsIGwgKz0gaS50b3BcbiAgICB9KSwgKG4gPSBTZShlLCAhMCkpLmxlZnQgKz0gbywgbi5yaWdodCArPSBvLCBuLnRvcCArPSBsLCBuLmJvdHRvbSArPSBsLCBuKSA6IFNlKGUpIDogbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gX2UoZSwgdCkge1xuICAgIHZhciBuID0gZS54IC0gdC54LFxuICAgICAgYSA9IGUueSAtIHQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KG4gKiBuICsgYSAqIGEpXG4gIH1cblxuICBmdW5jdGlvbiB2ZShlLCB0LCBuKSB7XG4gICAgdmFyIGEgPSB0LnggLSBlLngsXG4gICAgICBpID0gdC55IC0gZS55O1xuICAgIHJldHVybiB7XG4gICAgICB4OiBlLnggKyBhICogbixcbiAgICAgIHk6IGUueSArIGkgKiBuLFxuICAgICAgYW5nbGU6IE1hdGguYXRhbjIoaSwgYSkgLyAoTWF0aC5QSSAvIDE4MClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBFZShlLCB0LCBuKSB7XG4gICAgdmFyIGEgPSBNYXRoLmF0YW4yKGUueSAtIHQueSwgdC54IC0gZS54KTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdC54ICsgTWF0aC5jb3MoYSkgKiBuLFxuICAgICAgeTogdC55ICsgTWF0aC5zaW4oYSkgKiBuICogLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB4ZShlLCB0LCBuLCBhLCBpKSB7XG4gICAgdmFyIG8gPSBpICogaSxcbiAgICAgIGwgPSBvICogaSxcbiAgICAgIHIgPSAxIC0gaSxcbiAgICAgIHMgPSByICogcixcbiAgICAgIHUgPSBzICogcixcbiAgICAgIGggPSB1ICogZS54ICsgMyAqIHMgKiBpICogdC54ICsgMyAqIHIgKiBvICogbi54ICsgbCAqIGEueCxcbiAgICAgIHAgPSB1ICogZS55ICsgMyAqIHMgKiBpICogdC55ICsgMyAqIHIgKiBvICogbi55ICsgbCAqIGEueSxcbiAgICAgIGMgPSBlLnggKyAyICogaSAqICh0LnggLSBlLngpICsgbyAqIChuLnggLSAyICogdC54ICsgZS54KSxcbiAgICAgIGQgPSBlLnkgKyAyICogaSAqICh0LnkgLSBlLnkpICsgbyAqIChuLnkgLSAyICogdC55ICsgZS55KSxcbiAgICAgIGYgPSB0LnggKyAyICogaSAqIChuLnggLSB0LngpICsgbyAqIChhLnggLSAyICogbi54ICsgdC54KSxcbiAgICAgIHkgPSB0LnkgKyAyICogaSAqIChuLnkgLSB0LnkpICsgbyAqIChhLnkgLSAyICogbi55ICsgdC55KSxcbiAgICAgIFMgPSByICogZS54ICsgaSAqIHQueCxcbiAgICAgIG0gPSByICogZS55ICsgaSAqIHQueSxcbiAgICAgIGcgPSByICogbi54ICsgaSAqIGEueCxcbiAgICAgIF8gPSByICogbi55ICsgaSAqIGEueSxcbiAgICAgIHYgPSA5MCAtIDE4MCAqIE1hdGguYXRhbjIoYyAtIGYsIGQgLSB5KSAvIE1hdGguUEk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGgsXG4gICAgICB5OiBwLFxuICAgICAgZnJvbVAyOiB7XG4gICAgICAgIHg6IGMsXG4gICAgICAgIHk6IGRcbiAgICAgIH0sXG4gICAgICB0b1AxOiB7XG4gICAgICAgIHg6IGYsXG4gICAgICAgIHk6IHlcbiAgICAgIH0sXG4gICAgICBmcm9tUDE6IHtcbiAgICAgICAgeDogUyxcbiAgICAgICAgeTogbVxuICAgICAgfSxcbiAgICAgIHRvUDI6IHtcbiAgICAgICAgeDogZyxcbiAgICAgICAgeTogX1xuICAgICAgfSxcbiAgICAgIGFuZ2xlOiB2ICs9IDE4MCA8IHYgPyAtMTgwIDogMTgwXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYmUobiwgYSwgaSwgbywgZSkge1xuICAgIGZ1bmN0aW9uIGwoZSwgdCwgbiwgYSwgaSkge1xuICAgICAgcmV0dXJuIGUgKiAoZSAqICgtMyAqIHQgKyA5ICogbiAtIDkgKiBhICsgMyAqIGkpICsgNiAqIHQgLSAxMiAqIG4gKyA2ICogYSkgLSAzICogdCArIDMgKiBuXG4gICAgfVxuICAgIHZhciByLCBzLCB1LCBoLCBwLCBjID0gWy4yNDkxLCAuMjQ5MSwgLjIzMzUsIC4yMzM1LCAuMjAzMiwgLjIwMzIsIC4xNjAxLCAuMTYwMSwgLjEwNjksIC4xMDY5LCAuMDQ3MiwgLjA0NzJdLFxuICAgICAgZCA9IDA7XG4gICAgcmV0dXJuIHIgPSAoZSA9IG51bGwgPT0gZSB8fCAxIDwgZSA/IDEgOiBlIDwgMCA/IDAgOiBlKSAvIDIsIFstLjEyNTIsIC4xMjUyLCAtLjM2NzgsIC4zNjc4LCAtLjU4NzMsIC41ODczLCAtLjc2OTksIC43Njk5LCAtLjkwNDEsIC45MDQxLCAtLjk4MTYsIC45ODE2XS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICB1ID0gbChzID0gciAqIGUgKyByLCBuLngsIGEueCwgaS54LCBvLngpLCBoID0gbChzLCBuLnksIGEueSwgaS55LCBvLnkpLCBwID0gdSAqIHUgKyBoICogaCwgZCArPSBjW3RdICogTWF0aC5zcXJ0KHApXG4gICAgfSksIHIgKiBkXG4gIH1cblxuICBmdW5jdGlvbiBrZShlLCB0LCBuLCBhLCBpKSB7XG4gICAgZm9yICh2YXIgbywgbCA9IC41LCByID0gMSAtIGw7IG8gPSBiZShlLCB0LCBuLCBhLCByKSwgIShNYXRoLmFicyhvIC0gaSkgPD0gLjAxKTspIHIgKz0gKG8gPCBpID8gMSA6IC0xKSAqIChsIC89IDIpO1xuICAgIHJldHVybiByXG4gIH1cblxuICBmdW5jdGlvbiB3ZShlLCBuKSB7XG4gICAgdmFyIGE7XG4gICAgcmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBuID8gZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgeDogZS54LFxuICAgICAgICAgIHk6IGUueVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbih0KSwgdFxuICAgICAgfSkgOiBlO1xuICAgICAgYSB8fCAoYSA9IFt7XG4gICAgICAgIHR5cGU6IFwiTVwiLFxuICAgICAgICB2YWx1ZXM6IFt0WzBdLngsIHRbMF0ueV1cbiAgICAgIH1dKSwgYS5wdXNoKHQubGVuZ3RoID8gMiA9PT0gdC5sZW5ndGggPyB7XG4gICAgICAgIHR5cGU6IFwiTFwiLFxuICAgICAgICB2YWx1ZXM6IFt0WzFdLngsIHRbMV0ueV1cbiAgICAgIH0gOiB7XG4gICAgICAgIHR5cGU6IFwiQ1wiLFxuICAgICAgICB2YWx1ZXM6IFt0WzFdLngsIHRbMV0ueSwgdFsyXS54LCB0WzJdLnksIHRbM10ueCwgdFszXS55XVxuICAgICAgfSA6IHtcbiAgICAgICAgdHlwZTogXCJaXCIsXG4gICAgICAgIHZhbHVlczogW11cbiAgICAgIH0pXG4gICAgfSksIGFcbiAgfVxuXG4gIGZ1bmN0aW9uIE9lKGUpIHtcbiAgICB2YXIgbiA9IFtdLFxuICAgICAgYSA9IDA7XG4gICAgcmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSAoMiA9PT0gZS5sZW5ndGggPyBfZSA6IGJlKS5hcHBseShudWxsLCBlKTtcbiAgICAgIG4ucHVzaCh0KSwgYSArPSB0XG4gICAgfSksIHtcbiAgICAgIHNlZ3NMZW46IG4sXG4gICAgICBsZW5BbGw6IGFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBNZShlLCBhKSB7XG4gICAgcmV0dXJuIG51bGwgPT0gZSB8fCBudWxsID09IGEgfHwgZS5sZW5ndGggIT09IGEubGVuZ3RoIHx8IGUuc29tZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgdmFyIG4gPSBhW3RdO1xuICAgICAgcmV0dXJuIGUudHlwZSAhPT0gbi50eXBlIHx8IGUudmFsdWVzLnNvbWUoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUgIT09IG4udmFsdWVzW3RdXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBJZShlLCB0LCBuKSB7XG4gICAgZS5ldmVudHNbdF0gPyBlLmV2ZW50c1t0XS5pbmRleE9mKG4pIDwgMCAmJiBlLmV2ZW50c1t0XS5wdXNoKG4pIDogZS5ldmVudHNbdF0gPSBbbl1cbiAgfVxuXG4gIGZ1bmN0aW9uIENlKGUsIHQsIG4pIHtcbiAgICB2YXIgYTtcbiAgICBlLmV2ZW50c1t0XSAmJiAtMSA8IChhID0gZS5ldmVudHNbdF0uaW5kZXhPZihuKSkgJiYgZS5ldmVudHNbdF0uc3BsaWNlKGEsIDEpXG4gIH1cblxuICBmdW5jdGlvbiBMZShlKSB7XG4gICAgdCAmJiBjbGVhclRpbWVvdXQodCksIFEucHVzaChlKSwgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgUS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUoKVxuICAgICAgfSksIFEgPSBbXVxuICAgIH0sIDApXG4gIH1cblxuICBmdW5jdGlvbiBBZShlLCB0KSB7XG4gICAgZS5yZWZsb3dUYXJnZXRzLmluZGV4T2YodCkgPCAwICYmIGUucmVmbG93VGFyZ2V0cy5wdXNoKHQpXG4gIH1cblxuICBmdW5jdGlvbiBWZShlKSB7XG4gICAgZS5yZWZsb3dUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBuO1xuICAgICAgbiA9IGUsIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IG4ucGFyZW50Tm9kZSxcbiAgICAgICAgICB0ID0gbi5uZXh0U2libGluZztcbiAgICAgICAgZS5pbnNlcnRCZWZvcmUoZS5yZW1vdmVDaGlsZChuKSwgdClcbiAgICAgIH0sIDApXG4gICAgfSksIGUucmVmbG93VGFyZ2V0cyA9IFtdXG4gIH1cblxuICBmdW5jdGlvbiBQZShlLCB0LCBuLCBhLCBpLCBvLCBsKSB7XG4gICAgdmFyIHIsIHMsIHU7XG4gICAgXCJhdXRvLXN0YXJ0LXJldmVyc2VcIiA9PT0gbiA/IChcImJvb2xlYW5cIiAhPSB0eXBlb2YgaCAmJiAodC5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgXCJhdXRvLXN0YXJ0LXJldmVyc2VcIiksIGggPSB0Lm9yaWVudFR5cGUuYmFzZVZhbCA9PT0gU1ZHTWFya2VyRWxlbWVudC5TVkdfTUFSS0VSX09SSUVOVF9VTktOT1dOKSwgaCA/IHQuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIG4pIDogKChyID0gaS5jcmVhdGVTVkdUcmFuc2Zvcm0oKSkuc2V0Um90YXRlKDE4MCwgMCwgMCksIG8udHJhbnNmb3JtLmJhc2VWYWwuYXBwZW5kSXRlbShyKSwgdC5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgXCJhdXRvXCIpLCB1ID0gITApKSA6ICh0LnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBuKSwgITEgPT09IGggJiYgby50cmFuc2Zvcm0uYmFzZVZhbC5jbGVhcigpKSwgcyA9IHQudmlld0JveC5iYXNlVmFsLCB1ID8gKHMueCA9IC1hLnJpZ2h0LCBzLnkgPSAtYS5ib3R0b20pIDogKHMueCA9IGEubGVmdCwgcy55ID0gYS50b3ApLCBzLndpZHRoID0gYS53aWR0aCwgcy5oZWlnaHQgPSBhLmhlaWdodCwgbGUgJiYgQWUoZSwgbClcbiAgfVxuXG4gIGZ1bmN0aW9uIE5lKGUsIHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcDogZSA/IFwibWFya2VyRW5kXCIgOiBcIm1hcmtlclN0YXJ0XCIsXG4gICAgICBvcmllbnQ6IHQgPyB0Lm5vUm90YXRlID8gXCIwXCIgOiBlID8gXCJhdXRvXCIgOiBcImF1dG8tc3RhcnQtcmV2ZXJzZVwiIDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIFRlKG4sIGEpIHtcbiAgICBPYmplY3Qua2V5cyhhKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGFbZV07XG4gICAgICBuW2VdID0gbnVsbCAhPSB0LmluaVZhbHVlID8gdC5oYXNTRSA/IFt0LmluaVZhbHVlLCB0LmluaVZhbHVlXSA6IHQuaW5pVmFsdWUgOiB0Lmhhc1NFID8gdC5oYXNQcm9wcyA/IFt7fSwge31dIDogW10gOiB0Lmhhc1Byb3BzID8ge30gOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIFdlKHQsIGUsIG4sIGEsIGkpIHtcbiAgICByZXR1cm4gYSAhPT0gZVtuXSAmJiAoZVtuXSA9IGEsIGkgJiYgaS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlKHQsIGEsIG4pXG4gICAgfSksICEwKVxuICB9XG5cbiAgZnVuY3Rpb24gQmUoZSkge1xuICAgIGZ1bmN0aW9uIHQoZSwgdCkge1xuICAgICAgcmV0dXJuIGUgKyBwYXJzZUZsb2F0KHQpXG4gICAgfVxuICAgIHZhciBuID0gZS5kb2N1bWVudCxcbiAgICAgIGEgPSBlLmdldENvbXB1dGVkU3R5bGUobi5kb2N1bWVudEVsZW1lbnQsIFwiXCIpLFxuICAgICAgaSA9IGUuZ2V0Q29tcHV0ZWRTdHlsZShuLmJvZHksIFwiXCIpLFxuICAgICAgbyA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcbiAgICByZXR1cm4gXCJzdGF0aWNcIiAhPT0gaS5wb3NpdGlvbiA/IChvLnggLT0gW2EubWFyZ2luTGVmdCwgYS5ib3JkZXJMZWZ0V2lkdGgsIGEucGFkZGluZ0xlZnQsIGkubWFyZ2luTGVmdCwgaS5ib3JkZXJMZWZ0V2lkdGhdLnJlZHVjZSh0LCAwKSwgby55IC09IFthLm1hcmdpblRvcCwgYS5ib3JkZXJUb3BXaWR0aCwgYS5wYWRkaW5nVG9wLCBpLm1hcmdpblRvcCwgaS5ib3JkZXJUb3BXaWR0aF0ucmVkdWNlKHQsIDApKSA6IFwic3RhdGljXCIgIT09IGEucG9zaXRpb24gJiYgKG8ueCAtPSBbYS5tYXJnaW5MZWZ0LCBhLmJvcmRlckxlZnRXaWR0aF0ucmVkdWNlKHQsIDApLCBvLnkgLT0gW2EubWFyZ2luVG9wLCBhLmJvcmRlclRvcFdpZHRoXS5yZWR1Y2UodCwgMCkpLCBvXG4gIH1cblxuICBmdW5jdGlvbiBSZShlKSB7XG4gICAgdmFyIHQsIG4gPSBlLmRvY3VtZW50O1xuICAgIG4uZ2V0RWxlbWVudEJ5SWQocikgfHwgKHQgPSAobmV3IGUuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcocywgXCJpbWFnZS9zdmcreG1sXCIpLCBuLmJvZHkuYXBwZW5kQ2hpbGQodC5kb2N1bWVudEVsZW1lbnQpLCBkKGUpKVxuICB9XG5cbiAgZnVuY3Rpb24gRmUodSkge1xuICAgIHZhciBfLCBmLCB2LCBlLCBuLCBhLCBpLCB5LCBzLCBoLCBwLCB0LCBvLCBsLCByLCBjLCBkLCBTLCBtLCBnID0gdS5vcHRpb25zLFxuICAgICAgRSA9IHUuY3VyU3RhdHMsXG4gICAgICB4ID0gdS5hcGxTdGF0cyxcbiAgICAgIGIgPSBFLnBvc2l0aW9uX3NvY2tldFhZU0UsXG4gICAgICBrID0gITE7XG5cbiAgICBmdW5jdGlvbiB3KGUsIHQpIHtcbiAgICAgIHZhciBuID0gdCA9PT0gTSA/IHtcbiAgICAgICAgeDogZS5sZWZ0ICsgZS53aWR0aCAvIDIsXG4gICAgICAgIHk6IGUudG9wXG4gICAgICB9IDogdCA9PT0gSSA/IHtcbiAgICAgICAgeDogZS5yaWdodCxcbiAgICAgICAgeTogZS50b3AgKyBlLmhlaWdodCAvIDJcbiAgICAgIH0gOiB0ID09PSBDID8ge1xuICAgICAgICB4OiBlLmxlZnQgKyBlLndpZHRoIC8gMixcbiAgICAgICAgeTogZS5ib3R0b21cbiAgICAgIH0gOiB7XG4gICAgICAgIHg6IGUubGVmdCxcbiAgICAgICAgeTogZS50b3AgKyBlLmhlaWdodCAvIDJcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5zb2NrZXRJZCA9IHQsIG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBPKGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGUueCxcbiAgICAgICAgeTogZS55XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChFLnBvc2l0aW9uX3BhdGggPSBnLnBhdGgsIEUucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoID0gRS5saW5lX3N0cm9rZVdpZHRoLCBFLnBvc2l0aW9uX3NvY2tldEdyYXZpdHlTRSA9IF8gPSBkZShnLnNvY2tldEdyYXZpdHlTRSksIGYgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LCBuLCBhLCBpID0gZy5hbmNob3JTRVtlXSxcbiAgICAgICAgICBvID0gdS5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVtlXSxcbiAgICAgICAgICBsID0gITEgIT09IG8gPyAkW2kuX2lkXSA6IG51bGwsXG4gICAgICAgICAgciA9ICExICE9PSBvICYmIGwuY29uZi5nZXRTdHJva2VXaWR0aCA/IGwuY29uZi5nZXRTdHJva2VXaWR0aChsLCB1KSA6IDAsXG4gICAgICAgICAgcyA9ICExICE9PSBvICYmIGwuY29uZi5nZXRCQm94TmVzdCA/IGwuY29uZi5nZXRCQm94TmVzdChsLCB1LCByKSA6IGdlKGksIHUuYmFzZVdpbmRvdyk7XG4gICAgICAgIHJldHVybiBFLmNhcHNNYXNrQW5jaG9yX3BhdGhEYXRhU0VbZV0gPSAhMSAhPT0gbyAmJiBsLmNvbmYuZ2V0UGF0aERhdGEgPyBsLmNvbmYuZ2V0UGF0aERhdGEobCwgdSwgcikgOiAobiA9IG51bGwgIT0gKHQgPSBzKS5yaWdodCA/IHQucmlnaHQgOiB0LmxlZnQgKyB0LndpZHRoLCBhID0gbnVsbCAhPSB0LmJvdHRvbSA/IHQuYm90dG9tIDogdC50b3AgKyB0LmhlaWdodCwgW3tcbiAgICAgICAgICB0eXBlOiBcIk1cIixcbiAgICAgICAgICB2YWx1ZXM6IFt0LmxlZnQsIHQudG9wXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogXCJMXCIsXG4gICAgICAgICAgdmFsdWVzOiBbbiwgdC50b3BdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiBcIkxcIixcbiAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogXCJMXCIsXG4gICAgICAgICAgdmFsdWVzOiBbdC5sZWZ0LCBhXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogXCJaXCIsXG4gICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICB9XSksIEUuY2Fwc01hc2tBbmNob3Jfc3Ryb2tlV2lkdGhTRVtlXSA9IHIsIHNcbiAgICAgIH0pLCBpID0gLTEsIGcuc29ja2V0U0VbMF0gJiYgZy5zb2NrZXRTRVsxXSA/IChiWzBdID0gdyhmWzBdLCBnLnNvY2tldFNFWzBdKSwgYlsxXSA9IHcoZlsxXSwgZy5zb2NrZXRTRVsxXSkpIDogKGcuc29ja2V0U0VbMF0gfHwgZy5zb2NrZXRTRVsxXSA/IChnLnNvY2tldFNFWzBdID8gKG4gPSAwLCBhID0gMSkgOiAobiA9IDEsIGEgPSAwKSwgYltuXSA9IHcoZltuXSwgZy5zb2NrZXRTRVtuXSksIChlID0gVy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHcoZlthXSwgZSlcbiAgICAgIH0pKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gX2UoZSwgYltuXSk7XG4gICAgICAgICh0IDwgaSB8fCAtMSA9PT0gaSkgJiYgKGJbYV0gPSBlLCBpID0gdClcbiAgICAgIH0pKSA6IChlID0gVy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHcoZlsxXSwgZSlcbiAgICAgIH0pLCBXLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdyhmWzBdLCBlKVxuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IF9lKG4sIGUpO1xuICAgICAgICAgICh0IDwgaSB8fCAtMSA9PT0gaSkgJiYgKGJbMF0gPSBuLCBiWzFdID0gZSwgaSA9IHQpXG4gICAgICAgIH0pXG4gICAgICB9KSksIFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LCBuO1xuICAgICAgICBnLnNvY2tldFNFW2VdIHx8IChmW2VdLndpZHRoIHx8IGZbZV0uaGVpZ2h0ID8gZltlXS53aWR0aCB8fCBiW2VdLnNvY2tldElkICE9PSBMICYmIGJbZV0uc29ja2V0SWQgIT09IEkgPyBmW2VdLmhlaWdodCB8fCBiW2VdLnNvY2tldElkICE9PSBNICYmIGJbZV0uc29ja2V0SWQgIT09IEMgfHwgKGJbZV0uc29ja2V0SWQgPSAwIDw9IGJbZSA/IDAgOiAxXS55IC0gZltlXS50b3AgPyBDIDogTSkgOiBiW2VdLnNvY2tldElkID0gMCA8PSBiW2UgPyAwIDogMV0ueCAtIGZbZV0ubGVmdCA/IEkgOiBMIDogKHQgPSBiW2UgPyAwIDogMV0ueCAtIGZbZV0ubGVmdCwgbiA9IGJbZSA/IDAgOiAxXS55IC0gZltlXS50b3AsIGJbZV0uc29ja2V0SWQgPSBNYXRoLmFicyh0KSA+PSBNYXRoLmFicyhuKSA/IDAgPD0gdCA/IEkgOiBMIDogMCA8PSBuID8gQyA6IE0pKVxuICAgICAgfSkpLCBFLnBvc2l0aW9uX3BhdGggIT09IHgucG9zaXRpb25fcGF0aCB8fCBFLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCAhPT0geC5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGggfHwgWzAsIDFdLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIEUucG9zaXRpb25fcGx1Z092ZXJoZWFkU0VbZV0gIT09IHgucG9zaXRpb25fcGx1Z092ZXJoZWFkU0VbZV0gfHwgKGkgPSBiW2VdLCBvID0geC5wb3NpdGlvbl9zb2NrZXRYWVNFW2VdLCBpLnggIT09IG8ueCB8fCBpLnkgIT09IG8ueSB8fCBpLnNvY2tldElkICE9PSBvLnNvY2tldElkKSB8fCAodCA9IF9bZV0sIG4gPSB4LnBvc2l0aW9uX3NvY2tldEdyYXZpdHlTRVtlXSwgKGEgPSBudWxsID09IHQgPyBcImF1dG9cIiA6IEFycmF5LmlzQXJyYXkodCkgPyBcImFycmF5XCIgOiBcIm51bWJlclwiKSAhPT0gKG51bGwgPT0gbiA/IFwiYXV0b1wiIDogQXJyYXkuaXNBcnJheShuKSA/IFwiYXJyYXlcIiA6IFwibnVtYmVyXCIpIHx8IChcImFycmF5XCIgPT09IGEgPyB0WzBdICE9PSBuWzBdIHx8IHRbMV0gIT09IG5bMV0gOiB0ICE9PSBuKSk7XG4gICAgICAgIHZhciB0LCBuLCBhLCBpLCBvXG4gICAgICB9KSkge1xuICAgICAgc3dpdGNoICh1LnBhdGhMaXN0LmJhc2VWYWwgPSB2ID0gW10sIHUucGF0aExpc3QuYW5pbVZhbCA9IG51bGwsIEUucG9zaXRpb25fcGF0aCkge1xuICAgICAgY2FzZSBBOlxuICAgICAgICB2LnB1c2goW08oYlswXSksIE8oYlsxXSldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFY6XG4gICAgICAgIHQgPSBcIm51bWJlclwiID09IHR5cGVvZiBfWzBdICYmIDAgPCBfWzBdIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIF9bMV0gJiYgMCA8IF9bMV0sIG8gPSBaICogKHQgPyAtMSA6IDEpLCBsID0gTWF0aC5hdGFuMihiWzFdLnkgLSBiWzBdLnksIGJbMV0ueCAtIGJbMF0ueCksIHIgPSAtbCArIG8sIGMgPSBNYXRoLlBJIC0gbCAtIG8sIGQgPSBfZShiWzBdLCBiWzFdKSAvIE1hdGguc3FydCgyKSAqIFUsIFMgPSB7XG4gICAgICAgICAgeDogYlswXS54ICsgTWF0aC5jb3MocikgKiBkLFxuICAgICAgICAgIHk6IGJbMF0ueSArIE1hdGguc2luKHIpICogZCAqIC0xXG4gICAgICAgIH0sIG0gPSB7XG4gICAgICAgICAgeDogYlsxXS54ICsgTWF0aC5jb3MoYykgKiBkLFxuICAgICAgICAgIHk6IGJbMV0ueSArIE1hdGguc2luKGMpICogZCAqIC0xXG4gICAgICAgIH0sIHYucHVzaChbTyhiWzBdKSwgUywgbSwgTyhiWzFdKV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUDpcbiAgICAgIGNhc2UgTjpcbiAgICAgICAgcyA9IFtfWzBdLCBFLnBvc2l0aW9uX3BhdGggPT09IE4gPyAwIDogX1sxXV0sIGggPSBbXSwgcCA9IFtdLCBiLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiwgYSwgaSwgbywgbCwgciA9IHNbdF07XG4gICAgICAgICAgQXJyYXkuaXNBcnJheShyKSA/IG4gPSB7XG4gICAgICAgICAgICB4OiByWzBdLFxuICAgICAgICAgICAgeTogclsxXVxuICAgICAgICAgIH0gOiBcIm51bWJlclwiID09IHR5cGVvZiByID8gbiA9IGUuc29ja2V0SWQgPT09IE0gPyB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogLXJcbiAgICAgICAgICB9IDogZS5zb2NrZXRJZCA9PT0gSSA/IHtcbiAgICAgICAgICAgIHg6IHIsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgICAgfSA6IGUuc29ja2V0SWQgPT09IEMgPyB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogclxuICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICB4OiAtcixcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICB9IDogKGEgPSBiW3QgPyAwIDogMV0sIG8gPSAwIDwgKGkgPSBFLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFW3RdKSA/IEcgKyAoRCA8IGkgPyAoaSAtIEQpICogeiA6IDApIDogQiArIChFLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCA+IFIgPyAoRS5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGggLSBSKSAqIEYgOiAwKSwgZS5zb2NrZXRJZCA9PT0gTSA/ICgobCA9IChlLnkgLSBhLnkpIC8gMikgPCBvICYmIChsID0gbyksIG4gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogLWxcbiAgICAgICAgICB9KSA6IGUuc29ja2V0SWQgPT09IEkgPyAoKGwgPSAoYS54IC0gZS54KSAvIDIpIDwgbyAmJiAobCA9IG8pLCBuID0ge1xuICAgICAgICAgICAgeDogbCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICB9KSA6IGUuc29ja2V0SWQgPT09IEMgPyAoKGwgPSAoYS55IC0gZS55KSAvIDIpIDwgbyAmJiAobCA9IG8pLCBuID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IGxcbiAgICAgICAgICB9KSA6ICgobCA9IChlLnggLSBhLngpIC8gMikgPCBvICYmIChsID0gbyksIG4gPSB7XG4gICAgICAgICAgICB4OiAtbCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICB9KSksIGhbdF0gPSBlLnggKyBuLngsIHBbdF0gPSBlLnkgKyBuLnlcbiAgICAgICAgfSksIHYucHVzaChbTyhiWzBdKSwge1xuICAgICAgICAgIHg6IGhbMF0sXG4gICAgICAgICAgeTogcFswXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgeDogaFsxXSxcbiAgICAgICAgICB5OiBwWzFdXG4gICAgICAgIH0sIE8oYlsxXSldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFQ6XG4gICAgICAgICEgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhLCBvID0gMSxcbiAgICAgICAgICAgIGwgPSAyLFxuICAgICAgICAgICAgciA9IDMsXG4gICAgICAgICAgICBzID0gNCxcbiAgICAgICAgICAgIHUgPSBbXG4gICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGggPSBbXTtcblxuICAgICAgICAgIGZ1bmN0aW9uIHAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgPT09IG8gPyByIDogZSA9PT0gbCA/IHMgOiBlID09PSByID8gbyA6IGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlID09PSBsIHx8IGUgPT09IHMgPyBcInhcIiA6IFwieVwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZChlLCB0LCBuKSB7XG4gICAgICAgICAgICB2YXIgYSA9IHtcbiAgICAgICAgICAgICAgeDogZS54LFxuICAgICAgICAgICAgICB5OiBlLnlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICBpZiAobiA9PT0gcChlLmRpcklkKSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkaXJJZDogXCIgKyBuKTtcbiAgICAgICAgICAgICAgYS5kaXJJZCA9IG5cbiAgICAgICAgICAgIH0gZWxzZSBhLmRpcklkID0gZS5kaXJJZDtcbiAgICAgICAgICAgIHJldHVybiBhLmRpcklkID09PSBvID8gYS55IC09IHQgOiBhLmRpcklkID09PSBsID8gYS54ICs9IHQgOiBhLmRpcklkID09PSByID8gYS55ICs9IHQgOiBhLnggLT0gdCwgYVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuZGlySWQgPT09IG8gPyBlLnkgPD0gdC55IDogdC5kaXJJZCA9PT0gbCA/IGUueCA+PSB0LnggOiB0LmRpcklkID09PSByID8gZS55ID49IHQueSA6IGUueCA8PSB0LnhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiB5KGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmRpcklkID09PSBvIHx8IHQuZGlySWQgPT09IHIgPyBlLnggPT09IHQueCA6IGUueSA9PT0gdC55XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gUyhlKSB7XG4gICAgICAgICAgICByZXR1cm4gZVswXSA/IHtcbiAgICAgICAgICAgICAgY29udGFpbjogMCxcbiAgICAgICAgICAgICAgbm90Q29udGFpbjogMVxuICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgY29udGFpbjogMSxcbiAgICAgICAgICAgICAgbm90Q29udGFpbjogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIG0oZSwgdCwgbikge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRbbl0gLSBlW25dKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGcoZSwgdCwgbikge1xuICAgICAgICAgICAgcmV0dXJuIFwieFwiID09PSBuID8gZS54IDwgdC54ID8gbCA6IHMgOiBlLnkgPCB0LnkgPyByIDogb1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICB2YXIgZSwgdCwgYSwgaSwgbiA9IFtmKGhbMV0sIGhbMF0pLCBmKGhbMF0sIGhbMV0pXSxcbiAgICAgICAgICAgICAgbyA9IFtjKGhbMF0uZGlySWQpLCBjKGhbMV0uZGlySWQpXTtcbiAgICAgICAgICAgIGlmIChvWzBdID09PSBvWzFdKSB7XG4gICAgICAgICAgICAgIGlmIChuWzBdICYmIG5bMV0pIHJldHVybiB5KGhbMV0sIGhbMF0pIHx8IChoWzBdW29bMF1dID09PSBoWzFdW29bMV1dID8gKHVbMF0ucHVzaChoWzBdKSwgdVsxXS5wdXNoKGhbMV0pKSA6IChlID0gaFswXVtvWzBdXSArIChoWzFdW29bMV1dIC0gaFswXVtvWzBdXSkgLyAyLCB1WzBdLnB1c2goZChoWzBdLCBNYXRoLmFicyhlIC0gaFswXVtvWzBdXSkpKSwgdVsxXS5wdXNoKGQoaFsxXSwgTWF0aC5hYnMoZSAtIGhbMV1bb1sxXV0pKSkpKSwgITE7XG4gICAgICAgICAgICAgIG5bMF0gIT09IG5bMV0gPyAodCA9IFMobiksIChhID0gbShoW3Qubm90Q29udGFpbl0sIGhbdC5jb250YWluXSwgb1t0Lm5vdENvbnRhaW5dKSkgPCBIICYmIChoW3Qubm90Q29udGFpbl0gPSBkKGhbdC5ub3RDb250YWluXSwgSCAtIGEpKSwgdVt0Lm5vdENvbnRhaW5dLnB1c2goaFt0Lm5vdENvbnRhaW5dKSwgaFt0Lm5vdENvbnRhaW5dID0gZChoW3Qubm90Q29udGFpbl0sIEgsIHkoaFt0LmNvbnRhaW5dLCBoW3Qubm90Q29udGFpbl0pID8gXCJ4XCIgPT09IG9bdC5ub3RDb250YWluXSA/IHIgOiBsIDogZyhoW3Qubm90Q29udGFpbl0sIGhbdC5jb250YWluXSwgXCJ4XCIgPT09IG9bdC5ub3RDb250YWluXSA/IFwieVwiIDogXCJ4XCIpKSkgOiAoYSA9IG0oaFswXSwgaFsxXSwgXCJ4XCIgPT09IG9bMF0gPyBcInlcIiA6IFwieFwiKSwgdS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSAwID09PSB0ID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgZS5wdXNoKGhbdF0pLCBoW3RdID0gZChoW3RdLCBILCAyICogSCA8PSBhID8gZyhoW3RdLCBoW25dLCBcInhcIiA9PT0gb1t0XSA/IFwieVwiIDogXCJ4XCIpIDogXCJ4XCIgPT09IG9bdF0gPyByIDogbClcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoblswXSAmJiBuWzFdKSByZXR1cm4geShoWzFdLCBoWzBdKSA/IHVbMV0ucHVzaChoWzFdKSA6IHkoaFswXSwgaFsxXSkgPyB1WzBdLnB1c2goaFswXSkgOiB1WzBdLnB1c2goXCJ4XCIgPT09IG9bMF0gPyB7XG4gICAgICAgICAgICAgICAgeDogaFsxXS54LFxuICAgICAgICAgICAgICAgIHk6IGhbMF0ueVxuICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgIHg6IGhbMF0ueCxcbiAgICAgICAgICAgICAgICB5OiBoWzFdLnlcbiAgICAgICAgICAgICAgfSksICExO1xuICAgICAgICAgICAgICBuWzBdICE9PSBuWzFdID8gKHQgPSBTKG4pLCB1W3Qubm90Q29udGFpbl0ucHVzaChoW3Qubm90Q29udGFpbl0pLCBoW3Qubm90Q29udGFpbl0gPSBkKGhbdC5ub3RDb250YWluXSwgSCwgbShoW3Qubm90Q29udGFpbl0sIGhbdC5jb250YWluXSwgb1t0LmNvbnRhaW5dKSA+PSBIID8gZyhoW3Qubm90Q29udGFpbl0sIGhbdC5jb250YWluXSwgb1t0LmNvbnRhaW5dKSA6IGhbdC5jb250YWluXS5kaXJJZCkpIDogKGkgPSBbe1xuICAgICAgICAgICAgICAgIHg6IGhbMF0ueCxcbiAgICAgICAgICAgICAgICB5OiBoWzBdLnlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHg6IGhbMV0ueCxcbiAgICAgICAgICAgICAgICB5OiBoWzFdLnlcbiAgICAgICAgICAgICAgfV0sIHUuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gMCA9PT0gdCA/IDEgOiAwLFxuICAgICAgICAgICAgICAgICAgYSA9IG0oaVt0XSwgaVtuXSwgb1t0XSk7XG4gICAgICAgICAgICAgICAgYSA8IEggJiYgKGhbdF0gPSBkKGhbdF0sIEggLSBhKSksIGUucHVzaChoW3RdKSwgaFt0XSA9IGQoaFt0XSwgSCwgZyhoW3RdLCBoW25dLCBvW25dKSlcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gITBcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChiLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgdmFyIG4sIGEgPSBPKGUpLFxuICAgICAgICAgICAgICAgIGkgPSBfW3RdO1xuICAgICAgICAgICAgICBuID0gQXJyYXkuaXNBcnJheShpKSA/IGlbMF0gPCAwID8gW3MsIC1pWzBdXSA6IDAgPCBpWzBdID8gW2wsIGlbMF1dIDogaVsxXSA8IDAgPyBbbywgLWlbMV1dIDogMCA8IGlbMV0gPyBbciwgaVsxXV0gOiBbZS5zb2NrZXRJZCwgMF0gOiBcIm51bWJlclwiICE9IHR5cGVvZiBpID8gW2Uuc29ja2V0SWQsIEhdIDogMCA8PSBpID8gW2Uuc29ja2V0SWQsIGldIDogW3AoZS5zb2NrZXRJZCksIC1pXSwgYS5kaXJJZCA9IG5bMF0sIGkgPSBuWzFdLCB1W3RdLnB1c2goYSksIGhbdF0gPSBkKGEsIGkpXG4gICAgICAgICAgICB9KTsgZSgpOyk7XG4gICAgICAgICAgdVsxXS5yZXZlcnNlKCksIHVbMF0uY29uY2F0KHVbMV0pLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuID0ge1xuICAgICAgICAgICAgICB4OiBlLngsXG4gICAgICAgICAgICAgIHk6IGUueVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIDAgPCB0ICYmIHYucHVzaChbYSwgbl0pLCBhID0gblxuICAgICAgICAgIH0pXG4gICAgICAgIH0oKVxuICAgICAgfVxuICAgICAgeSA9IFtdLCBFLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIG4sIGEsIGksIG8sIGwsIHIsIHMsIHUsIGgsIHAsIGMsIGQgPSAhdDtcbiAgICAgICAgMCA8IGUgPyAyID09PSAobiA9IHZbYSA9IGQgPyAwIDogdi5sZW5ndGggLSAxXSkubGVuZ3RoID8gKHlbYV0gPSB5W2FdIHx8IF9lLmFwcGx5KG51bGwsIG4pLCB5W2FdID4gaiAmJiAoeVthXSAtIGUgPCBqICYmIChlID0geVthXSAtIGopLCBpID0gdmUoblswXSwgblsxXSwgKGQgPyBlIDogeVthXSAtIGUpIC8geVthXSksIHZbYV0gPSBkID8gW2ksIG5bMV1dIDogW25bMF0sIGldLCB5W2FdIC09IGUpKSA6ICh5W2FdID0geVthXSB8fCBiZS5hcHBseShudWxsLCBuKSwgeVthXSA+IGogJiYgKHlbYV0gLSBlIDwgaiAmJiAoZSA9IHlbYV0gLSBqKSwgaSA9IHhlKG5bMF0sIG5bMV0sIG5bMl0sIG5bM10sIGtlKG5bMF0sIG5bMV0sIG5bMl0sIG5bM10sIGQgPyBlIDogeVthXSAtIGUpKSwgZCA/IChvID0gblswXSwgbCA9IGkudG9QMSkgOiAobyA9IG5bM10sIGwgPSBpLmZyb21QMiksIHIgPSBNYXRoLmF0YW4yKG8ueSAtIGkueSwgaS54IC0gby54KSwgcyA9IF9lKGksIGwpLCBpLnggPSBvLnggKyBNYXRoLmNvcyhyKSAqIGUsIGkueSA9IG8ueSArIE1hdGguc2luKHIpICogZSAqIC0xLCBsLnggPSBpLnggKyBNYXRoLmNvcyhyKSAqIHMsIGwueSA9IGkueSArIE1hdGguc2luKHIpICogcyAqIC0xLCB2W2FdID0gZCA/IFtpLCBpLnRvUDEsIGkudG9QMiwgblszXV0gOiBbblswXSwgaS5mcm9tUDEsIGkuZnJvbVAyLCBpXSwgeVthXSA9IG51bGwpKSA6IGUgPCAwICYmIChuID0gdlthID0gZCA/IDAgOiB2Lmxlbmd0aCAtIDFdLCB1ID0gYlt0XS5zb2NrZXRJZCwgaCA9IHUgPT09IEwgfHwgdSA9PT0gSSA/IFwieFwiIDogXCJ5XCIsIGUgPCAoYyA9IC1mW3RdW1wieFwiID09PSBoID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0pICYmIChlID0gYyksIHAgPSBlICogKHUgPT09IEwgfHwgdSA9PT0gTSA/IC0xIDogMSksIDIgPT09IG4ubGVuZ3RoID8gbltkID8gMCA6IG4ubGVuZ3RoIC0gMV1baF0gKz0gcCA6IChkID8gWzAsIDFdIDogW24ubGVuZ3RoIC0gMiwgbi5sZW5ndGggLSAxXSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5bZV1baF0gKz0gcFxuICAgICAgICB9KSwgeVthXSA9IG51bGwpXG4gICAgICB9KSwgeC5wb3NpdGlvbl9zb2NrZXRYWVNFID0gZGUoYiksIHgucG9zaXRpb25fcGx1Z092ZXJoZWFkU0UgPSBkZShFLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFKSwgeC5wb3NpdGlvbl9wYXRoID0gRS5wb3NpdGlvbl9wYXRoLCB4LnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCA9IEUucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoLCB4LnBvc2l0aW9uX3NvY2tldEdyYXZpdHlTRSA9IGRlKF8pLCBrID0gITAsIHUuZXZlbnRzLmFwbF9wb3NpdGlvbiAmJiB1LmV2ZW50cy5hcGxfcG9zaXRpb24uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlKHUsIHYpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4ga1xuICB9XG5cbiAgZnVuY3Rpb24gR2UodCwgbikge1xuICAgIG4gIT09IHQuaXNTaG93biAmJiAoISFuICE9ICEhdC5pc1Nob3duICYmICh0LnN2Zy5zdHlsZS52aXNpYmlsaXR5ID0gbiA/IFwiXCIgOiBcImhpZGRlblwiKSwgdC5pc1Nob3duID0gbiwgdC5ldmVudHMgJiYgdC5ldmVudHMuc3ZnU2hvdyAmJiB0LmV2ZW50cy5zdmdTaG93LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUodCwgbilcbiAgICB9KSlcbiAgfVxuXG4gIGZ1bmN0aW9uIERlKGUsIHQpIHtcbiAgICB2YXIgbiwgYSwgaSwgbywgbCwgaCwgcCwgYywgZCwgZiwgciwgcywgdSwgeSwgUywgbSwgZywgXywgdiwgRSwgeCwgYiwgaywgdywgTywgTSwgSSwgQywgTCwgQSwgViwgUCwgTiwgVCwgVywgQiwgUiwgRiwgRywgRCwgeiwgaiwgSCwgVSwgWiwgWSwgWCwgcSwgUSwgSywgSiwgJCwgZWUgPSB7fTtcbiAgICB0LmxpbmUgJiYgKGVlLmxpbmUgPSAoYSA9IChuID0gZSkub3B0aW9ucywgaSA9IG4uY3VyU3RhdHMsIG8gPSBuLmV2ZW50cywgbCA9ICExLCBsID0gV2UobiwgaSwgXCJsaW5lX2NvbG9yXCIsIGEubGluZUNvbG9yLCBvLmN1cl9saW5lX2NvbG9yKSB8fCBsLCBsID0gV2UobiwgaSwgXCJsaW5lX2NvbG9yVHJhXCIsIGZlKGkubGluZV9jb2xvcilbMF0gPCAxKSB8fCBsLCBsID0gV2UobiwgaSwgXCJsaW5lX3N0cm9rZVdpZHRoXCIsIGEubGluZVNpemUsIG8uY3VyX2xpbmVfc3Ryb2tlV2lkdGgpIHx8IGwpKSwgKHQucGx1ZyB8fCBlZS5saW5lKSAmJiAoZWUucGx1ZyA9IChwID0gKGggPSBlKS5vcHRpb25zLCBjID0gaC5jdXJTdGF0cywgZCA9IGguZXZlbnRzLCBmID0gITEsIFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCwgbiwgYSwgaSwgbywgbCwgciwgcywgdSA9IHAucGx1Z1NFW2VdO1xuICAgICAgZiA9IFdlKGgsIGMucGx1Z19lbmFibGVkU0UsIGUsIHUgIT09IG5lKSB8fCBmLCBmID0gV2UoaCwgYy5wbHVnX3BsdWdTRSwgZSwgdSkgfHwgZiwgZiA9IFdlKGgsIGMucGx1Z19jb2xvclNFLCBlLCBzID0gcC5wbHVnQ29sb3JTRVtlXSB8fCBjLmxpbmVfY29sb3IsIGQuY3VyX3BsdWdfY29sb3JTRSkgfHwgZiwgZiA9IFdlKGgsIGMucGx1Z19jb2xvclRyYVNFLCBlLCBmZShzKVswXSA8IDEpIHx8IGYsIHUgIT09IG5lICYmIChpID0gbiA9ICh0ID0gYWVbaWVbdV1dKS53aWR0aFIgKiBwLnBsdWdTaXplU0VbZV0sIG8gPSBhID0gdC5oZWlnaHRSICogcC5wbHVnU2l6ZVNFW2VdLCB1ZSAmJiAoaSAqPSBjLmxpbmVfc3Ryb2tlV2lkdGgsIG8gKj0gYy5saW5lX3N0cm9rZVdpZHRoKSwgZiA9IFdlKGgsIGMucGx1Z19tYXJrZXJXaWR0aFNFLCBlLCBpKSB8fCBmLCBmID0gV2UoaCwgYy5wbHVnX21hcmtlckhlaWdodFNFLCBlLCBvKSB8fCBmLCBjLmNhcHNNYXNrTWFya2VyX21hcmtlcldpZHRoU0VbZV0gPSBuLCBjLmNhcHNNYXNrTWFya2VyX21hcmtlckhlaWdodFNFW2VdID0gYSksIGMucGx1Z091dGxpbmVfcGx1Z1NFW2VdID0gYy5jYXBzTWFza01hcmtlcl9wbHVnU0VbZV0gPSB1LCBjLnBsdWdfZW5hYmxlZFNFW2VdID8gKHMgPSBjLmxpbmVfc3Ryb2tlV2lkdGggLyBwZS5saW5lU2l6ZSAqIHAucGx1Z1NpemVTRVtlXSwgYy5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRVtlXSA9IHQub3ZlcmhlYWQgKiBzLCBjLnZpZXdCb3hfcGx1Z0JDaXJjbGVTRVtlXSA9IHQuYkNpcmNsZSAqIHMsIGwgPSB0LnNpZGVMZW4gKiBzLCByID0gdC5iYWNrTGVuICogcykgOiAoYy5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRVtlXSA9IC1jLmxpbmVfc3Ryb2tlV2lkdGggLyAyLCBjLnZpZXdCb3hfcGx1Z0JDaXJjbGVTRVtlXSA9IGwgPSByID0gMCksIFdlKGgsIGMuYXR0YWNoX3BsdWdTaWRlTGVuU0UsIGUsIGwsIGQuY3VyX2F0dGFjaF9wbHVnU2lkZUxlblNFKSwgV2UoaCwgYy5hdHRhY2hfcGx1Z0JhY2tMZW5TRSwgZSwgciwgZC5jdXJfYXR0YWNoX3BsdWdCYWNrTGVuU0UpLCBjLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVtlXSA9ICFjLnBsdWdfZW5hYmxlZFNFW2VdXG4gICAgfSksIGYgPSBXZShoLCBjLCBcInBsdWdfZW5hYmxlZFwiLCBjLnBsdWdfZW5hYmxlZFNFWzBdIHx8IGMucGx1Z19lbmFibGVkU0VbMV0pIHx8IGYpKSwgKHQubGluZU91dGxpbmUgfHwgZWUubGluZSkgJiYgKGVlLmxpbmVPdXRsaW5lID0gKHUgPSAociA9IGUpLm9wdGlvbnMsIHkgPSByLmN1clN0YXRzLCBTID0gITEsIFMgPSBXZShyLCB5LCBcImxpbmVPdXRsaW5lX2VuYWJsZWRcIiwgdS5saW5lT3V0bGluZUVuYWJsZWQpIHx8IFMsIFMgPSBXZShyLCB5LCBcImxpbmVPdXRsaW5lX2NvbG9yXCIsIHUubGluZU91dGxpbmVDb2xvcikgfHwgUywgUyA9IFdlKHIsIHksIFwibGluZU91dGxpbmVfY29sb3JUcmFcIiwgZmUoeS5saW5lT3V0bGluZV9jb2xvcilbMF0gPCAxKSB8fCBTLCBzID0geS5saW5lX3N0cm9rZVdpZHRoICogdS5saW5lT3V0bGluZVNpemUsIFMgPSBXZShyLCB5LCBcImxpbmVPdXRsaW5lX3N0cm9rZVdpZHRoXCIsIHkubGluZV9zdHJva2VXaWR0aCAtIDIgKiBzKSB8fCBTLCBTID0gV2UociwgeSwgXCJsaW5lT3V0bGluZV9pblN0cm9rZVdpZHRoXCIsIHkubGluZU91dGxpbmVfY29sb3JUcmEgPyB5LmxpbmVPdXRsaW5lX3N0cm9rZVdpZHRoICsgMiAqIGhlIDogeS5saW5lX3N0cm9rZVdpZHRoIC0gcykgfHwgUykpLCAodC5wbHVnT3V0bGluZSB8fCBlZS5saW5lIHx8IGVlLnBsdWcgfHwgZWUubGluZU91dGxpbmUpICYmIChlZS5wbHVnT3V0bGluZSA9IChnID0gKG0gPSBlKS5vcHRpb25zLCBfID0gbS5jdXJTdGF0cywgdiA9ICExLCBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQsIG4gPSBfLnBsdWdPdXRsaW5lX3BsdWdTRVtlXSxcbiAgICAgICAgYSA9IG4gIT09IG5lID8gYWVbaWVbbl1dIDogbnVsbDtcbiAgICAgIHYgPSBXZShtLCBfLnBsdWdPdXRsaW5lX2VuYWJsZWRTRSwgZSwgZy5wbHVnT3V0bGluZUVuYWJsZWRTRVtlXSAmJiBfLnBsdWdfZW5hYmxlZCAmJiBfLnBsdWdfZW5hYmxlZFNFW2VdICYmICEhYSAmJiAhIWEub3V0bGluZUJhc2UpIHx8IHYsIHYgPSBXZShtLCBfLnBsdWdPdXRsaW5lX2NvbG9yU0UsIGUsIHQgPSBnLnBsdWdPdXRsaW5lQ29sb3JTRVtlXSB8fCBfLmxpbmVPdXRsaW5lX2NvbG9yKSB8fCB2LCB2ID0gV2UobSwgXy5wbHVnT3V0bGluZV9jb2xvclRyYVNFLCBlLCBmZSh0KVswXSA8IDEpIHx8IHYsIGEgJiYgYS5vdXRsaW5lQmFzZSAmJiAoKHQgPSBnLnBsdWdPdXRsaW5lU2l6ZVNFW2VdKSA+IGEub3V0bGluZU1heCAmJiAodCA9IGEub3V0bGluZU1heCksIHQgKj0gMiAqIGEub3V0bGluZUJhc2UsIHYgPSBXZShtLCBfLnBsdWdPdXRsaW5lX3N0cm9rZVdpZHRoU0UsIGUsIHQpIHx8IHYsIHYgPSBXZShtLCBfLnBsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRSwgZSwgXy5wbHVnT3V0bGluZV9jb2xvclRyYVNFW2VdID8gdCAtIGhlIC8gKF8ubGluZV9zdHJva2VXaWR0aCAvIHBlLmxpbmVTaXplKSAvIGcucGx1Z1NpemVTRVtlXSAqIDIgOiB0IC8gMikgfHwgdilcbiAgICB9KSwgdikpLCAodC5mYWNlcyB8fCBlZS5saW5lIHx8IGVlLnBsdWcgfHwgZWUubGluZU91dGxpbmUgfHwgZWUucGx1Z091dGxpbmUpICYmIChlZS5mYWNlcyA9IChiID0gKEUgPSBlKS5jdXJTdGF0cywgayA9IEUuYXBsU3RhdHMsIHcgPSBFLmV2ZW50cywgTyA9ICExLCAhYi5saW5lX2FsdENvbG9yICYmIFdlKEUsIGssIFwibGluZV9jb2xvclwiLCB4ID0gYi5saW5lX2NvbG9yLCB3LmFwbF9saW5lX2NvbG9yKSAmJiAoRS5saW5lRmFjZS5zdHlsZS5zdHJva2UgPSB4LCBPID0gITApLCBXZShFLCBrLCBcImxpbmVfc3Ryb2tlV2lkdGhcIiwgeCA9IGIubGluZV9zdHJva2VXaWR0aCwgdy5hcGxfbGluZV9zdHJva2VXaWR0aCkgJiYgKEUubGluZVNoYXBlLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwLCAocmUgfHwgbGUpICYmIChBZShFLCBFLmxpbmVTaGFwZSksIGxlICYmIChBZShFLCBFLmxpbmVGYWNlKSwgQWUoRSwgRS5saW5lTWFza0NhcHMpKSkpLCBXZShFLCBrLCBcImxpbmVPdXRsaW5lX2VuYWJsZWRcIiwgeCA9IGIubGluZU91dGxpbmVfZW5hYmxlZCwgdy5hcGxfbGluZU91dGxpbmVfZW5hYmxlZCkgJiYgKEUubGluZU91dGxpbmVGYWNlLnN0eWxlLmRpc3BsYXkgPSB4ID8gXCJpbmxpbmVcIiA6IFwibm9uZVwiLCBPID0gITApLCBiLmxpbmVPdXRsaW5lX2VuYWJsZWQgJiYgKFdlKEUsIGssIFwibGluZU91dGxpbmVfY29sb3JcIiwgeCA9IGIubGluZU91dGxpbmVfY29sb3IsIHcuYXBsX2xpbmVPdXRsaW5lX2NvbG9yKSAmJiAoRS5saW5lT3V0bGluZUZhY2Uuc3R5bGUuc3Ryb2tlID0geCwgTyA9ICEwKSwgV2UoRSwgaywgXCJsaW5lT3V0bGluZV9zdHJva2VXaWR0aFwiLCB4ID0gYi5saW5lT3V0bGluZV9zdHJva2VXaWR0aCwgdy5hcGxfbGluZU91dGxpbmVfc3Ryb2tlV2lkdGgpICYmIChFLmxpbmVPdXRsaW5lTWFza1NoYXBlLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwLCBsZSAmJiAoQWUoRSwgRS5saW5lT3V0bGluZU1hc2tDYXBzKSwgQWUoRSwgRS5saW5lT3V0bGluZUZhY2UpKSksIFdlKEUsIGssIFwibGluZU91dGxpbmVfaW5TdHJva2VXaWR0aFwiLCB4ID0gYi5saW5lT3V0bGluZV9pblN0cm9rZVdpZHRoLCB3LmFwbF9saW5lT3V0bGluZV9pblN0cm9rZVdpZHRoKSAmJiAoRS5saW5lTWFza1NoYXBlLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwLCBsZSAmJiAoQWUoRSwgRS5saW5lT3V0bGluZU1hc2tDYXBzKSwgQWUoRSwgRS5saW5lT3V0bGluZUZhY2UpKSkpLCBXZShFLCBrLCBcInBsdWdfZW5hYmxlZFwiLCB4ID0gYi5wbHVnX2VuYWJsZWQsIHcuYXBsX3BsdWdfZW5hYmxlZCkgJiYgKEUucGx1Z3NGYWNlLnN0eWxlLmRpc3BsYXkgPSB4ID8gXCJpbmxpbmVcIiA6IFwibm9uZVwiLCBPID0gITApLCBiLnBsdWdfZW5hYmxlZCAmJiBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGUgPSBiLnBsdWdfcGx1Z1NFW25dLFxuICAgICAgICB0ID0gZSAhPT0gbmUgPyBhZVtpZVtlXV0gOiBudWxsLFxuICAgICAgICBhID0gTmUobiwgdCk7XG4gICAgICBXZShFLCBrLnBsdWdfZW5hYmxlZFNFLCBuLCB4ID0gYi5wbHVnX2VuYWJsZWRTRVtuXSwgdy5hcGxfcGx1Z19lbmFibGVkU0UpICYmIChFLnBsdWdzRmFjZS5zdHlsZVthLnByb3BdID0geCA/IFwidXJsKCNcIiArIEUucGx1Z01hcmtlcklkU0Vbbl0gKyBcIilcIiA6IFwibm9uZVwiLCBPID0gITApLCBiLnBsdWdfZW5hYmxlZFNFW25dICYmIChXZShFLCBrLnBsdWdfcGx1Z1NFLCBuLCBlLCB3LmFwbF9wbHVnX3BsdWdTRSkgJiYgKEUucGx1Z0ZhY2VTRVtuXS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHQuZWxtSWQsIFBlKEUsIEUucGx1Z01hcmtlclNFW25dLCBhLm9yaWVudCwgdC5iQm94LCBFLnN2ZywgRS5wbHVnTWFya2VyU2hhcGVTRVtuXSwgRS5wbHVnc0ZhY2UpLCBPID0gITAsIHJlICYmIEFlKEUsIEUucGx1Z3NGYWNlKSksIFdlKEUsIGsucGx1Z19jb2xvclNFLCBuLCB4ID0gYi5wbHVnX2NvbG9yU0Vbbl0sIHcuYXBsX3BsdWdfY29sb3JTRSkgJiYgKEUucGx1Z0ZhY2VTRVtuXS5zdHlsZS5maWxsID0geCwgTyA9ICEwLCAoc2UgfHwgdWUgfHwgbGUpICYmICFiLmxpbmVfY29sb3JUcmEgJiYgQWUoRSwgbGUgPyBFLmxpbmVNYXNrQ2FwcyA6IEUuY2Fwc01hc2tMaW5lKSksIFtcIm1hcmtlcldpZHRoXCIsIFwibWFya2VySGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBcInBsdWdfXCIgKyBlICsgXCJTRVwiO1xuICAgICAgICBXZShFLCBrW3RdLCBuLCB4ID0gYlt0XVtuXSwgd1tcImFwbF9cIiArIHRdKSAmJiAoRS5wbHVnTWFya2VyU0Vbbl1bZV0uYmFzZVZhbC52YWx1ZSA9IHgsIE8gPSAhMClcbiAgICAgIH0pLCBXZShFLCBrLnBsdWdPdXRsaW5lX2VuYWJsZWRTRSwgbiwgeCA9IGIucGx1Z091dGxpbmVfZW5hYmxlZFNFW25dLCB3LmFwbF9wbHVnT3V0bGluZV9lbmFibGVkU0UpICYmICh4ID8gKEUucGx1Z0ZhY2VTRVtuXS5zdHlsZS5tYXNrID0gXCJ1cmwoI1wiICsgRS5wbHVnTWFza0lkU0Vbbl0gKyBcIilcIiwgRS5wbHVnT3V0bGluZUZhY2VTRVtuXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIikgOiAoRS5wbHVnRmFjZVNFW25dLnN0eWxlLm1hc2sgPSBcIm5vbmVcIiwgRS5wbHVnT3V0bGluZUZhY2VTRVtuXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpLCBPID0gITApLCBiLnBsdWdPdXRsaW5lX2VuYWJsZWRTRVtuXSAmJiAoV2UoRSwgay5wbHVnT3V0bGluZV9wbHVnU0UsIG4sIGUsIHcuYXBsX3BsdWdPdXRsaW5lX3BsdWdTRSkgJiYgKEUucGx1Z091dGxpbmVGYWNlU0Vbbl0uaHJlZi5iYXNlVmFsID0gRS5wbHVnTWFza1NoYXBlU0Vbbl0uaHJlZi5iYXNlVmFsID0gRS5wbHVnT3V0bGluZU1hc2tTaGFwZVNFW25dLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgdC5lbG1JZCwgW0UucGx1Z01hc2tTRVtuXSwgRS5wbHVnT3V0bGluZU1hc2tTRVtuXV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnguYmFzZVZhbC52YWx1ZSA9IHQuYkJveC5sZWZ0LCBlLnkuYmFzZVZhbC52YWx1ZSA9IHQuYkJveC50b3AsIGUud2lkdGguYmFzZVZhbC52YWx1ZSA9IHQuYkJveC53aWR0aCwgZS5oZWlnaHQuYmFzZVZhbC52YWx1ZSA9IHQuYkJveC5oZWlnaHRcbiAgICAgIH0pLCBPID0gITApLCBXZShFLCBrLnBsdWdPdXRsaW5lX2NvbG9yU0UsIG4sIHggPSBiLnBsdWdPdXRsaW5lX2NvbG9yU0Vbbl0sIHcuYXBsX3BsdWdPdXRsaW5lX2NvbG9yU0UpICYmIChFLnBsdWdPdXRsaW5lRmFjZVNFW25dLnN0eWxlLmZpbGwgPSB4LCBPID0gITAsIGxlICYmIChBZShFLCBFLmxpbmVNYXNrQ2FwcyksIEFlKEUsIEUubGluZU91dGxpbmVNYXNrQ2FwcykpKSwgV2UoRSwgay5wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFLCBuLCB4ID0gYi5wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFW25dLCB3LmFwbF9wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFKSAmJiAoRS5wbHVnT3V0bGluZU1hc2tTaGFwZVNFW25dLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwKSwgV2UoRSwgay5wbHVnT3V0bGluZV9pblN0cm9rZVdpZHRoU0UsIG4sIHggPSBiLnBsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRVtuXSwgdy5hcGxfcGx1Z091dGxpbmVfaW5TdHJva2VXaWR0aFNFKSAmJiAoRS5wbHVnTWFza1NoYXBlU0Vbbl0uc3R5bGUuc3Ryb2tlV2lkdGggPSB4ICsgXCJweFwiLCBPID0gITApKSlcbiAgICB9KSwgTykpLCAodC5wb3NpdGlvbiB8fCBlZS5saW5lIHx8IGVlLnBsdWcpICYmIChlZS5wb3NpdGlvbiA9IEZlKGUpKSwgKHQucGF0aCB8fCBlZS5wb3NpdGlvbikgJiYgKGVlLnBhdGggPSAoQyA9IChNID0gZSkuY3VyU3RhdHMsIEwgPSBNLmFwbFN0YXRzLCBBID0gTS5wYXRoTGlzdC5hbmltVmFsIHx8IE0ucGF0aExpc3QuYmFzZVZhbCwgViA9IEMucGF0aF9lZGdlLCBQID0gITEsIEEgJiYgKFYueDEgPSBWLngyID0gQVswXVswXS54LCBWLnkxID0gVi55MiA9IEFbMF1bMF0ueSwgQy5wYXRoX3BhdGhEYXRhID0gSSA9IHdlKEEsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnggPCBWLngxICYmIChWLngxID0gZS54KSwgZS55IDwgVi55MSAmJiAoVi55MSA9IGUueSksIGUueCA+IFYueDIgJiYgKFYueDIgPSBlLngpLCBlLnkgPiBWLnkyICYmIChWLnkyID0gZS55KVxuICAgIH0pLCBNZShJLCBMLnBhdGhfcGF0aERhdGEpICYmIChNLmxpbmVQYXRoLnNldFBhdGhEYXRhKEkpLCBMLnBhdGhfcGF0aERhdGEgPSBJLCBQID0gITAsIGxlID8gKEFlKE0sIE0ucGx1Z3NGYWNlKSwgQWUoTSwgTS5saW5lTWFza0NhcHMpKSA6IHJlICYmIEFlKE0sIE0ubGluZVBhdGgpLCBNLmV2ZW50cy5hcGxfcGF0aCAmJiBNLmV2ZW50cy5hcGxfcGF0aC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlKE0sIEkpXG4gICAgfSkpKSwgUCkpLCBlZS52aWV3Qm94ID0gKEIgPSAoTiA9IGUpLmN1clN0YXRzLCBSID0gTi5hcGxTdGF0cywgRiA9IEIucGF0aF9lZGdlLCBHID0gQi52aWV3Qm94X2JCb3gsIEQgPSBSLnZpZXdCb3hfYkJveCwgeiA9IE4uc3ZnLnZpZXdCb3guYmFzZVZhbCwgaiA9IE4uc3ZnLnN0eWxlLCBIID0gITEsIFQgPSBNYXRoLm1heChCLmxpbmVfc3Ryb2tlV2lkdGggLyAyLCBCLnZpZXdCb3hfcGx1Z0JDaXJjbGVTRVswXSB8fCAwLCBCLnZpZXdCb3hfcGx1Z0JDaXJjbGVTRVsxXSB8fCAwKSwgVyA9IHtcbiAgICAgIHgxOiBGLngxIC0gVCxcbiAgICAgIHkxOiBGLnkxIC0gVCxcbiAgICAgIHgyOiBGLngyICsgVCxcbiAgICAgIHkyOiBGLnkyICsgVFxuICAgIH0sIE4uZXZlbnRzLm5ld19lZGdlNHZpZXdCb3ggJiYgTi5ldmVudHMubmV3X2VkZ2U0dmlld0JveC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlKE4sIFcpXG4gICAgfSksIEcueCA9IEIubGluZU1hc2tfeCA9IEIubGluZU91dGxpbmVNYXNrX3ggPSBCLm1hc2tCR1JlY3RfeCA9IFcueDEsIEcueSA9IEIubGluZU1hc2tfeSA9IEIubGluZU91dGxpbmVNYXNrX3kgPSBCLm1hc2tCR1JlY3RfeSA9IFcueTEsIEcud2lkdGggPSBXLngyIC0gVy54MSwgRy5oZWlnaHQgPSBXLnkyIC0gVy55MSwgW1wieFwiLCBcInlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdDtcbiAgICAgICh0ID0gR1tlXSkgIT09IERbZV0gJiYgKHpbZV0gPSBEW2VdID0gdCwgaltvZVtlXV0gPSB0ICsgKFwieFwiID09PSBlIHx8IFwieVwiID09PSBlID8gTi5ib2R5T2Zmc2V0W2VdIDogMCkgKyBcInB4XCIsIEggPSAhMClcbiAgICB9KSwgSCksIGVlLm1hc2sgPSAoWSA9IChVID0gZSkuY3VyU3RhdHMsIFggPSBVLmFwbFN0YXRzLCBxID0gITEsIFkucGx1Z19lbmFibGVkID8gWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFW2VdID0gWS5wbHVnX2VuYWJsZWRTRVtlXSAmJiBZLnBsdWdfY29sb3JUcmFTRVtlXSB8fCBZLnBsdWdPdXRsaW5lX2VuYWJsZWRTRVtlXSAmJiBZLnBsdWdPdXRsaW5lX2NvbG9yVHJhU0VbZV1cbiAgICB9KSA6IFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFWzBdID0gWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0VbMV0gPSAhMSwgWS5jYXBzTWFza01hcmtlcl9lbmFibGVkID0gWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0VbMF0gfHwgWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0VbMV0sIFkubGluZU1hc2tfb3V0bGluZU1vZGUgPSBZLmxpbmVPdXRsaW5lX2VuYWJsZWQsIFkuY2Fwc19lbmFibGVkID0gWS5jYXBzTWFza01hcmtlcl9lbmFibGVkIHx8IFkuY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFWzBdIHx8IFkuY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFWzFdLCBZLmxpbmVNYXNrX2VuYWJsZWQgPSBZLmNhcHNfZW5hYmxlZCB8fCBZLmxpbmVNYXNrX291dGxpbmVNb2RlLCAoWS5saW5lTWFza19lbmFibGVkICYmICFZLmxpbmVNYXNrX291dGxpbmVNb2RlIHx8IFkubGluZU91dGxpbmVfZW5hYmxlZCkgJiYgW1wieFwiLCBcInlcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBcIm1hc2tCR1JlY3RfXCIgKyBlO1xuICAgICAgV2UoVSwgWCwgdCwgWiA9IFlbdF0pICYmIChVLm1hc2tCR1JlY3RbZV0uYmFzZVZhbC52YWx1ZSA9IFosIHEgPSAhMClcbiAgICB9KSwgV2UoVSwgWCwgXCJsaW5lTWFza19lbmFibGVkXCIsIFogPSBZLmxpbmVNYXNrX2VuYWJsZWQpICYmIChVLmxpbmVGYWNlLnN0eWxlLm1hc2sgPSBaID8gXCJ1cmwoI1wiICsgVS5saW5lTWFza0lkICsgXCIpXCIgOiBcIm5vbmVcIiwgcSA9ICEwLCB1ZSAmJiBBZShVLCBVLmxpbmVNYXNrKSksIFkubGluZU1hc2tfZW5hYmxlZCAmJiAoV2UoVSwgWCwgXCJsaW5lTWFza19vdXRsaW5lTW9kZVwiLCBaID0gWS5saW5lTWFza19vdXRsaW5lTW9kZSkgJiYgKFogPyAoVS5saW5lTWFza0JHLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgVS5saW5lTWFza1NoYXBlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiKSA6IChVLmxpbmVNYXNrQkcuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIsIFUubGluZU1hc2tTaGFwZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpLCBxID0gITApLCBbXCJ4XCIsIFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IFwibGluZU1hc2tfXCIgKyBlO1xuICAgICAgV2UoVSwgWCwgdCwgWiA9IFlbdF0pICYmIChVLmxpbmVNYXNrW2VdLmJhc2VWYWwudmFsdWUgPSBaLCBxID0gITApXG4gICAgfSksIFdlKFUsIFgsIFwiY2Fwc19lbmFibGVkXCIsIFogPSBZLmNhcHNfZW5hYmxlZCkgJiYgKFUubGluZU1hc2tDYXBzLnN0eWxlLmRpc3BsYXkgPSBVLmxpbmVPdXRsaW5lTWFza0NhcHMuc3R5bGUuZGlzcGxheSA9IFogPyBcImlubGluZVwiIDogXCJub25lXCIsIHEgPSAhMCwgdWUgJiYgQWUoVSwgVS5jYXBzTWFza0xpbmUpKSwgWS5jYXBzX2VuYWJsZWQgJiYgKFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIFdlKFUsIFguY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFLCBlLCBaID0gWS5jYXBzTWFza0FuY2hvcl9lbmFibGVkU0VbZV0pICYmIChVLmNhcHNNYXNrQW5jaG9yU0VbZV0uc3R5bGUuZGlzcGxheSA9IFogPyBcImlubGluZVwiIDogXCJub25lXCIsIHEgPSAhMCwgdWUgJiYgQWUoVSwgVS5saW5lTWFzaykpLCBZLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVtlXSAmJiAoTWUodCA9IFkuY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRVtlXSwgWC5jYXBzTWFza0FuY2hvcl9wYXRoRGF0YVNFW2VdKSAmJiAoVS5jYXBzTWFza0FuY2hvclNFW2VdLnNldFBhdGhEYXRhKHQpLCBYLmNhcHNNYXNrQW5jaG9yX3BhdGhEYXRhU0VbZV0gPSB0LCBxID0gITApLCBXZShVLCBYLmNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0UsIGUsIFogPSBZLmNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0VbZV0pICYmIChVLmNhcHNNYXNrQW5jaG9yU0VbZV0uc3R5bGUuc3Ryb2tlV2lkdGggPSBaICsgXCJweFwiLCBxID0gITApKVxuICAgIH0pLCBXZShVLCBYLCBcImNhcHNNYXNrTWFya2VyX2VuYWJsZWRcIiwgWiA9IFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZCkgJiYgKFUuY2Fwc01hc2tMaW5lLnN0eWxlLmRpc3BsYXkgPSBaID8gXCJpbmxpbmVcIiA6IFwibm9uZVwiLCBxID0gITApLCBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWQgJiYgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgIHZhciBlID0gWS5jYXBzTWFza01hcmtlcl9wbHVnU0Vbbl0sXG4gICAgICAgIHQgPSBlICE9PSBuZSA/IGFlW2llW2VdXSA6IG51bGwsXG4gICAgICAgIGEgPSBOZShuLCB0KTtcbiAgICAgIFdlKFUsIFguY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFLCBuLCBaID0gWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0Vbbl0pICYmIChVLmNhcHNNYXNrTGluZS5zdHlsZVthLnByb3BdID0gWiA/IFwidXJsKCNcIiArIFUubGluZU1hc2tNYXJrZXJJZFNFW25dICsgXCIpXCIgOiBcIm5vbmVcIiwgcSA9ICEwKSwgWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0Vbbl0gJiYgKFdlKFUsIFguY2Fwc01hc2tNYXJrZXJfcGx1Z1NFLCBuLCBlKSAmJiAoVS5jYXBzTWFza01hcmtlclNoYXBlU0Vbbl0uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyB0LmVsbUlkLCBQZShVLCBVLmNhcHNNYXNrTWFya2VyU0Vbbl0sIGEub3JpZW50LCB0LmJCb3gsIFUuc3ZnLCBVLmNhcHNNYXNrTWFya2VyU2hhcGVTRVtuXSwgVS5jYXBzTWFza0xpbmUpLCBxID0gITAsIHJlICYmIChBZShVLCBVLmNhcHNNYXNrTGluZSksIEFlKFUsIFUubGluZUZhY2UpKSksIFtcIm1hcmtlcldpZHRoXCIsIFwibWFya2VySGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBcImNhcHNNYXNrTWFya2VyX1wiICsgZSArIFwiU0VcIjtcbiAgICAgICAgV2UoVSwgWFt0XSwgbiwgWiA9IFlbdF1bbl0pICYmIChVLmNhcHNNYXNrTWFya2VyU0Vbbl1bZV0uYmFzZVZhbC52YWx1ZSA9IFosIHEgPSAhMClcbiAgICAgIH0pKVxuICAgIH0pKSksIFkubGluZU91dGxpbmVfZW5hYmxlZCAmJiBbXCJ4XCIsIFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IFwibGluZU91dGxpbmVNYXNrX1wiICsgZTtcbiAgICAgIFdlKFUsIFgsIHQsIFogPSBZW3RdKSAmJiAoVS5saW5lT3V0bGluZU1hc2tbZV0uYmFzZVZhbC52YWx1ZSA9IFosIHEgPSAhMClcbiAgICB9KSwgcSksIHQuZWZmZWN0ICYmIChKID0gKFEgPSBlKS5jdXJTdGF0cywgJCA9IFEuYXBsU3RhdHMsIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IHRlW2VdLFxuICAgICAgICBuID0gZSArIFwiX2VuYWJsZWRcIixcbiAgICAgICAgYSA9IGUgKyBcIl9vcHRpb25zXCIsXG4gICAgICAgIGkgPSBKW2FdO1xuICAgICAgV2UoUSwgJCwgbiwgSyA9IEpbbl0pID8gKEsgJiYgKCRbYV0gPSBkZShpKSksIHRbSyA/IFwiaW5pdFwiIDogXCJyZW1vdmVcIl0oUSkpIDogSyAmJiBjZShpLCAkW2FdKSAmJiAodC5yZW1vdmUoUSksICRbbl0gPSAhMCwgJFthXSA9IGRlKGkpLCB0LmluaXQoUSkpXG4gICAgfSkpLCAoc2UgfHwgdWUpICYmIGVlLmxpbmUgJiYgIWVlLnBhdGggJiYgQWUoZSwgZS5saW5lU2hhcGUpLCBzZSAmJiBlZS5wbHVnICYmICFlZS5saW5lICYmIEFlKGUsIGUucGx1Z3NGYWNlKSwgVmUoZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHplKGUsIHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IHcoZS5kdXJhdGlvbikgJiYgMCA8IGUuZHVyYXRpb24gPyBlLmR1cmF0aW9uIDogdC5kdXJhdGlvbixcbiAgICAgIHRpbWluZzogYy52YWxpZFRpbWluZyhlLnRpbWluZykgPyBlLnRpbWluZyA6IGRlKHQudGltaW5nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGplKGUsIHQsIG4sIGEpIHtcbiAgICB2YXIgaSwgbyA9IGUuY3VyU3RhdHMsXG4gICAgICBsID0gZS5hcGxTdGF0cyxcbiAgICAgIHIgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHMoKSB7XG4gICAgICBbXCJzaG93X29uXCIsIFwic2hvd19lZmZlY3RcIiwgXCJzaG93X2FuaW1PcHRpb25zXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbFtlXSA9IG9bZV1cbiAgICAgIH0pXG4gICAgfVxuICAgIG8uc2hvd19vbiA9IHQsIG4gJiYgZ1tuXSAmJiAoby5zaG93X2VmZmVjdCA9IG4sIG8uc2hvd19hbmltT3B0aW9ucyA9IHplKGsoYSkgPyBhIDoge30sIGdbbl0uZGVmYXVsdEFuaW1PcHRpb25zKSksIHIuc2hvd19vbiA9IG8uc2hvd19vbiAhPT0gbC5zaG93X29uLCByLnNob3dfZWZmZWN0ID0gby5zaG93X2VmZmVjdCAhPT0gbC5zaG93X2VmZmVjdCwgci5zaG93X2FuaW1PcHRpb25zID0gY2Uoby5zaG93X2FuaW1PcHRpb25zLCBsLnNob3dfYW5pbU9wdGlvbnMpLCByLnNob3dfZWZmZWN0IHx8IHIuc2hvd19hbmltT3B0aW9ucyA/IG8uc2hvd19pbkFuaW0gPyAoaSA9IHIuc2hvd19lZmZlY3QgPyBnW2wuc2hvd19lZmZlY3RdLnN0b3AoZSwgITAsICEwKSA6IGdbbC5zaG93X2VmZmVjdF0uc3RvcChlKSwgcygpLCBnW2wuc2hvd19lZmZlY3RdLmluaXQoZSwgaSkpIDogci5zaG93X29uICYmIChsLnNob3dfZWZmZWN0ICYmIHIuc2hvd19lZmZlY3QgJiYgZ1tsLnNob3dfZWZmZWN0XS5zdG9wKGUsICEwLCAhMCksIHMoKSwgZ1tsLnNob3dfZWZmZWN0XS5pbml0KGUpKSA6IHIuc2hvd19vbiAmJiAocygpLCBnW2wuc2hvd19lZmZlY3RdLnN0YXJ0KGUpKVxuICB9XG5cbiAgZnVuY3Rpb24gSGUoZSwgdCwgbikge1xuICAgIHZhciBhID0ge1xuICAgICAgcHJvcHM6IGUsXG4gICAgICBvcHRpb25OYW1lOiBuXG4gICAgfTtcbiAgICByZXR1cm4gISghKGUuYXR0YWNobWVudHMuaW5kZXhPZih0KSA8IDApIHx8IHQuY29uZi5iaW5kICYmICF0LmNvbmYuYmluZCh0LCBhKSkgJiYgKGUuYXR0YWNobWVudHMucHVzaCh0KSwgdC5ib3VuZFRhcmdldHMucHVzaChhKSwgITApXG4gIH1cblxuICBmdW5jdGlvbiBVZShuLCBhLCBlKSB7XG4gICAgdmFyIGkgPSBuLmF0dGFjaG1lbnRzLmluZGV4T2YoYSk7IC0gMSA8IGkgJiYgbi5hdHRhY2htZW50cy5zcGxpY2UoaSwgMSksIGEuYm91bmRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlLnByb3BzID09PSBuICYmIChhLmNvbmYudW5iaW5kICYmIGEuY29uZi51bmJpbmQoYSwgZSksIGkgPSB0LCAhMClcbiAgICB9KSAmJiAoYS5ib3VuZFRhcmdldHMuc3BsaWNlKGksIDEpLCBlIHx8IExlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGEuYm91bmRUYXJnZXRzLmxlbmd0aCB8fCBvKGEpXG4gICAgfSkpXG4gIH1cblxuICBmdW5jdGlvbiBaZShzLCB1KSB7XG4gICAgdmFyIGUsIGksIGggPSBzLm9wdGlvbnMsXG4gICAgICBwID0ge307XG5cbiAgICBmdW5jdGlvbiBmKGUsIHQsIG4sIGEsIGkpIHtcbiAgICAgIHZhciBvID0ge307XG4gICAgICByZXR1cm4gbiA/IG51bGwgIT0gYSA/IChvLmNvbnRhaW5lciA9IGVbbl0sIG8ua2V5ID0gYSkgOiAoby5jb250YWluZXIgPSBlLCBvLmtleSA9IG4pIDogKG8uY29udGFpbmVyID0gZSwgby5rZXkgPSB0KSwgby5kZWZhdWx0ID0gaSwgby5hY2NlcHRzQXV0byA9IG51bGwgPT0gby5kZWZhdWx0LCBvXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYyhlLCB0LCBuLCBhLCBpLCBvLCBsKSB7XG4gICAgICB2YXIgciwgcywgdSwgaCA9IGYoZSwgbiwgaSwgbywgbCk7XG4gICAgICByZXR1cm4gbnVsbCAhPSB0W25dICYmIChzID0gKHRbbl0gKyBcIlwiKS50b0xvd2VyQ2FzZSgpKSAmJiAoaC5hY2NlcHRzQXV0byAmJiBzID09PSB4IHx8ICh1ID0gYVtzXSkpICYmIHUgIT09IGguY29udGFpbmVyW2gua2V5XSAmJiAoaC5jb250YWluZXJbaC5rZXldID0gdSwgciA9ICEwKSwgbnVsbCAhPSBoLmNvbnRhaW5lcltoLmtleV0gfHwgaC5hY2NlcHRzQXV0byB8fCAoaC5jb250YWluZXJbaC5rZXldID0gaC5kZWZhdWx0LCByID0gITApLCByXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZChlLCB0LCBuLCBhLCBpLCBvLCBsLCByLCBzKSB7XG4gICAgICB2YXIgdSwgaCwgcCwgYywgZCA9IGYoZSwgbiwgaSwgbywgbCk7XG4gICAgICBpZiAoIWEpIHtcbiAgICAgICAgaWYgKG51bGwgPT0gZC5kZWZhdWx0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGB0eXBlYDogXCIgKyBuKTtcbiAgICAgICAgYSA9IHR5cGVvZiBkLmRlZmF1bHRcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsICE9IHRbbl0gJiYgKGQuYWNjZXB0c0F1dG8gJiYgKHRbbl0gKyBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSB4IHx8IChwID0gaCA9IHRbbl0sIChcIm51bWJlclwiID09PSAoYyA9IGEpID8gdyhwKSA6IHR5cGVvZiBwID09PSBjKSAmJiAoaCA9IHMgJiYgXCJzdHJpbmdcIiA9PT0gYSAmJiBoID8gaC50cmltKCkgOiBoLCAxKSAmJiAoIXIgfHwgcihoKSkpKSAmJiBoICE9PSBkLmNvbnRhaW5lcltkLmtleV0gJiYgKGQuY29udGFpbmVyW2Qua2V5XSA9IGgsIHUgPSAhMCksIG51bGwgIT0gZC5jb250YWluZXJbZC5rZXldIHx8IGQuYWNjZXB0c0F1dG8gfHwgKGQuY29udGFpbmVyW2Qua2V5XSA9IGQuZGVmYXVsdCwgdSA9ICEwKSwgdVxuICAgIH1cbiAgICBpZiAodSA9IHUgfHwge30sIFtcInN0YXJ0XCIsIFwiZW5kXCJdLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIG4gPSB1W2VdLFxuICAgICAgICAgIGEgPSAhMTtcbiAgICAgICAgaWYgKG4gJiYgKHllKG4pIHx8IChhID0gXyhuLCBcImFuY2hvclwiKSkpICYmIG4gIT09IGguYW5jaG9yU0VbdF0pIHtcbiAgICAgICAgICBpZiAoITEgIT09IHMub3B0aW9uSXNBdHRhY2guYW5jaG9yU0VbdF0gJiYgVWUocywgJFtoLmFuY2hvclNFW3RdLl9pZF0pLCBhICYmICFIZShzLCAkW24uX2lkXSwgZSkpIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGJpbmQgYXR0YWNobWVudFwiKTtcbiAgICAgICAgICBoLmFuY2hvclNFW3RdID0gbiwgcy5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVt0XSA9IGEsIGkgPSBwLnBvc2l0aW9uID0gITBcbiAgICAgICAgfVxuICAgICAgfSksICFoLmFuY2hvclNFWzBdIHx8ICFoLmFuY2hvclNFWzFdIHx8IGguYW5jaG9yU0VbMF0gPT09IGguYW5jaG9yU0VbMV0pIHRocm93IG5ldyBFcnJvcihcImBzdGFydGAgYW5kIGBlbmRgIGFyZSByZXF1aXJlZC5cIik7XG4gICAgaSAmJiAoZSA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICB2YXIgbiwgYSwgaTtcbiAgICAgIGlmICghKG4gPSBtZShlKSkgfHwgIShhID0gbWUodCkpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IGZyYW1lcy5cIik7XG4gICAgICByZXR1cm4gbi5sZW5ndGggJiYgYS5sZW5ndGggJiYgKG4ucmV2ZXJzZSgpLCBhLnJldmVyc2UoKSwgbi5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBhLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZSA9PT0gdCAmJiAoaSA9IGUuY29udGVudFdpbmRvdywgITApXG4gICAgICAgIH0pXG4gICAgICB9KSksIGkgfHwgd2luZG93XG4gICAgfSghMSAhPT0gcy5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVswXSA/ICRbaC5hbmNob3JTRVswXS5faWRdLmVsZW1lbnQgOiBoLmFuY2hvclNFWzBdLCAhMSAhPT0gcy5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVsxXSA/ICRbaC5hbmNob3JTRVsxXS5faWRdLmVsZW1lbnQgOiBoLmFuY2hvclNFWzFdKSkgIT09IHMuYmFzZVdpbmRvdyAmJiAoISBmdW5jdGlvbiAoYSwgZSkge1xuICAgICAgdmFyIHQsIG4sIGksIG8sIGwsIHIsIHMsIHUsIGgsIHAsIGMgPSBhLmFwbFN0YXRzLFxuICAgICAgICBkID0gZS5kb2N1bWVudCxcbiAgICAgICAgZiA9IHYgKyBcIi1cIiArIGEuX2lkO1xuXG4gICAgICBmdW5jdGlvbiB5KGUpIHtcbiAgICAgICAgdmFyIHQgPSBuLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwibWFza1wiKSk7XG4gICAgICAgIHJldHVybiB0LmlkID0gZSwgdC5tYXNrVW5pdHMuYmFzZVZhbCA9IFNWR1VuaXRUeXBlcy5TVkdfVU5JVF9UWVBFX1VTRVJTUEFDRU9OVVNFLCBbdC54LCB0LnksIHQud2lkdGgsIHQuaGVpZ2h0XS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYLCAwKVxuICAgICAgICB9KSwgdFxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBTKGUpIHtcbiAgICAgICAgdmFyIHQgPSBuLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwibWFya2VyXCIpKTtcbiAgICAgICAgcmV0dXJuIHQuaWQgPSBlLCB0Lm1hcmtlclVuaXRzLmJhc2VWYWwgPSBTVkdNYXJrZXJFbGVtZW50LlNWR19NQVJLRVJVTklUU19TVFJPS0VXSURUSCwgdC52aWV3Qm94LmJhc2VWYWwgfHwgdC5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDAgMFwiKSwgdFxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtKGUpIHtcbiAgICAgICAgcmV0dXJuIFtlLndpZHRoLCBlLmhlaWdodF0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFLCAxMDApXG4gICAgICAgIH0pLCBlXG4gICAgICB9XG4gICAgICBhLnBhdGhMaXN0ID0ge30sIFRlKGMsIFkpLCBPYmplY3Qua2V5cyh0ZSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IGUgKyBcIl9lbmFibGVkXCI7XG4gICAgICAgIGNbdF0gJiYgKHRlW2VdLnJlbW92ZShhKSwgY1t0XSA9ICExKVxuICAgICAgfSksIGEuYmFzZVdpbmRvdyAmJiBhLnN2ZyAmJiBhLmJhc2VXaW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhLnN2ZyksIFJlKGEuYmFzZVdpbmRvdyA9IGUpLCBhLmJvZHlPZmZzZXQgPSBCZShlKSwgYS5zdmcgPSB0ID0gZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJzdmdcIiksIHQuY2xhc3NOYW1lLmJhc2VWYWwgPSB2LCB0LnZpZXdCb3guYmFzZVZhbCB8fCB0LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMCAwXCIpLCBhLmRlZnMgPSBuID0gdC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcImRlZnNcIikpLCBhLmxpbmVQYXRoID0gbyA9IG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJwYXRoXCIpKSwgby5pZCA9IGwgPSBmICsgXCItbGluZS1wYXRoXCIsIG8uY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItbGluZS1wYXRoXCIsIHVlICYmIChvLnN0eWxlLmZpbGwgPSBcIm5vbmVcIiksIGEubGluZVNoYXBlID0gbyA9IG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmlkID0gciA9IGYgKyBcIi1saW5lLXNoYXBlXCIsIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyBsLCAoaSA9IG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJnXCIpKSkuaWQgPSBzID0gZiArIFwiLWNhcHNcIiwgYS5jYXBzTWFza0FuY2hvclNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gaS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInBhdGhcIikpO1xuICAgICAgICByZXR1cm4gZS5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1jYXBzLW1hc2stYW5jaG9yXCIsIGVcbiAgICAgIH0pLCBhLmxpbmVNYXNrTWFya2VySWRTRSA9IFtmICsgXCItY2Fwcy1tYXNrLW1hcmtlci0wXCIsIGYgKyBcIi1jYXBzLW1hc2stbWFya2VyLTFcIl0sIGEuY2Fwc01hc2tNYXJrZXJTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFMoYS5saW5lTWFza01hcmtlcklkU0VbZV0pXG4gICAgICB9KSwgYS5jYXBzTWFza01hcmtlclNoYXBlU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gYS5jYXBzTWFza01hcmtlclNFW2VdLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKTtcbiAgICAgICAgcmV0dXJuIHQuY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItY2Fwcy1tYXNrLW1hcmtlci1zaGFwZVwiLCB0XG4gICAgICB9KSwgYS5jYXBzTWFza0xpbmUgPSBvID0gaS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSksIG8uY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItY2Fwcy1tYXNrLWxpbmVcIiwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHIsIGEubWFza0JHUmVjdCA9IG8gPSBtKG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJyZWN0XCIpKSksIG8uaWQgPSB1ID0gZiArIFwiLW1hc2stYmctcmVjdFwiLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLW1hc2stYmctcmVjdFwiLCB1ZSAmJiAoby5zdHlsZS5maWxsID0gXCJ3aGl0ZVwiKSwgYS5saW5lTWFzayA9IG0oeShhLmxpbmVNYXNrSWQgPSBmICsgXCItbGluZS1tYXNrXCIpKSwgYS5saW5lTWFza0JHID0gbyA9IGEubGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgdSwgYS5saW5lTWFza1NoYXBlID0gbyA9IGEubGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLWxpbmUtbWFzay1zaGFwZVwiLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgbCwgby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIGEubGluZU1hc2tDYXBzID0gbyA9IGEubGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgcywgYS5saW5lT3V0bGluZU1hc2sgPSBtKHkoaCA9IGYgKyBcIi1saW5lLW91dGxpbmUtbWFza1wiKSksIChvID0gYS5saW5lT3V0bGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHUsIGEubGluZU91dGxpbmVNYXNrU2hhcGUgPSBvID0gYS5saW5lT3V0bGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLWxpbmUtb3V0bGluZS1tYXNrLXNoYXBlXCIsIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyBsLCBhLmxpbmVPdXRsaW5lTWFza0NhcHMgPSBvID0gYS5saW5lT3V0bGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgcywgYS5mYWNlID0gdC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcImdcIikpLCBhLmxpbmVGYWNlID0gbyA9IGEuZmFjZS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSksIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyByLCBhLmxpbmVPdXRsaW5lRmFjZSA9IG8gPSBhLmZhY2UuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgciwgby5zdHlsZS5tYXNrID0gXCJ1cmwoI1wiICsgaCArIFwiKVwiLCBvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgYS5wbHVnTWFza0lkU0UgPSBbZiArIFwiLXBsdWctbWFzay0wXCIsIGYgKyBcIi1wbHVnLW1hc2stMVwiXSwgYS5wbHVnTWFza1NFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4geShhLnBsdWdNYXNrSWRTRVtlXSlcbiAgICAgIH0pLCBhLnBsdWdNYXNrU2hhcGVTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBhLnBsdWdNYXNrU0VbZV0uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpO1xuICAgICAgICByZXR1cm4gdC5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1wbHVnLW1hc2stc2hhcGVcIiwgdFxuICAgICAgfSksIHAgPSBbXSwgYS5wbHVnT3V0bGluZU1hc2tTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHkocFtlXSA9IGYgKyBcIi1wbHVnLW91dGxpbmUtbWFzay1cIiArIGUpXG4gICAgICB9KSwgYS5wbHVnT3V0bGluZU1hc2tTaGFwZVNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IGEucGx1Z091dGxpbmVNYXNrU0VbZV0uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpO1xuICAgICAgICByZXR1cm4gdC5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1wbHVnLW91dGxpbmUtbWFzay1zaGFwZVwiLCB0XG4gICAgICB9KSwgYS5wbHVnTWFya2VySWRTRSA9IFtmICsgXCItcGx1Zy1tYXJrZXItMFwiLCBmICsgXCItcGx1Zy1tYXJrZXItMVwiXSwgYS5wbHVnTWFya2VyU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gUyhhLnBsdWdNYXJrZXJJZFNFW2VdKTtcbiAgICAgICAgcmV0dXJuIHVlICYmICh0Lm1hcmtlclVuaXRzLmJhc2VWYWwgPSBTVkdNYXJrZXJFbGVtZW50LlNWR19NQVJLRVJVTklUU19VU0VSU1BBQ0VPTlVTRSksIHRcbiAgICAgIH0pLCBhLnBsdWdNYXJrZXJTaGFwZVNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gYS5wbHVnTWFya2VyU0VbZV0uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJnXCIpKVxuICAgICAgfSksIGEucGx1Z0ZhY2VTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGEucGx1Z01hcmtlclNoYXBlU0VbZV0uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpXG4gICAgICB9KSwgYS5wbHVnT3V0bGluZUZhY2VTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBhLnBsdWdNYXJrZXJTaGFwZVNFW2VdLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKTtcbiAgICAgICAgcmV0dXJuIHQuc3R5bGUubWFzayA9IFwidXJsKCNcIiArIHBbZV0gKyBcIilcIiwgdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIHRcbiAgICAgIH0pLCBhLnBsdWdzRmFjZSA9IG8gPSBhLmZhY2UuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLXBsdWdzLWZhY2VcIiwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHIsIG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLCBhLmN1clN0YXRzLnNob3dfaW5BbmltID8gKGEuaXNTaG93biA9IDEsIGdbYy5zaG93X2VmZmVjdF0uc3RvcChhLCAhMCkpIDogYS5pc1Nob3duIHx8ICh0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiKSwgZC5ib2R5LmFwcGVuZENoaWxkKHQpLCBbMCwgMSwgMl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCwgbiA9IGEub3B0aW9ucy5sYWJlbFNFTVtlXTtcbiAgICAgICAgbiAmJiBfKG4sIFwibGFiZWxcIikgJiYgKHQgPSAkW24uX2lkXSkuY29uZi5pbml0U3ZnICYmIHQuY29uZi5pbml0U3ZnKHQsIGEpXG4gICAgICB9KVxuICAgIH0ocywgZSksIHAubGluZSA9IHAucGx1ZyA9IHAubGluZU91dGxpbmUgPSBwLnBsdWdPdXRsaW5lID0gcC5mYWNlcyA9IHAuZWZmZWN0ID0gITApLCBwLnBvc2l0aW9uID0gYyhoLCB1LCBcInBhdGhcIiwgbSwgbnVsbCwgbnVsbCwgcGUucGF0aCkgfHwgcC5wb3NpdGlvbiwgcC5wb3NpdGlvbiA9IGMoaCwgdSwgXCJzdGFydFNvY2tldFwiLCBuLCBcInNvY2tldFNFXCIsIDApIHx8IHAucG9zaXRpb24sIHAucG9zaXRpb24gPSBjKGgsIHUsIFwiZW5kU29ja2V0XCIsIG4sIFwic29ja2V0U0VcIiwgMSkgfHwgcC5wb3NpdGlvbiwgW3Uuc3RhcnRTb2NrZXRHcmF2aXR5LCB1LmVuZFNvY2tldEdyYXZpdHldLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBuLCBhLCBpID0gITE7XG4gICAgICBudWxsICE9IGUgJiYgKEFycmF5LmlzQXJyYXkoZSkgPyB3KGVbMF0pICYmIHcoZVsxXSkgJiYgKGkgPSBbZVswXSwgZVsxXV0sIEFycmF5LmlzQXJyYXkoaC5zb2NrZXRHcmF2aXR5U0VbdF0pICYmIChuID0gaSwgYSA9IGguc29ja2V0R3Jhdml0eVNFW3RdLCBuLmxlbmd0aCA9PT0gYS5sZW5ndGggJiYgbi5ldmVyeShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSA9PT0gYVt0XVxuICAgICAgfSkpICYmIChpID0gITEpKSA6ICgoZSArIFwiXCIpLnRvTG93ZXJDYXNlKCkgPT09IHggPyBpID0gbnVsbCA6IHcoZSkgJiYgMCA8PSBlICYmIChpID0gZSksIGkgPT09IGguc29ja2V0R3Jhdml0eVNFW3RdICYmIChpID0gITEpKSwgITEgIT09IGkgJiYgKGguc29ja2V0R3Jhdml0eVNFW3RdID0gaSwgcC5wb3NpdGlvbiA9ICEwKSlcbiAgICB9KSwgcC5saW5lID0gZChoLCB1LCBcImNvbG9yXCIsIG51bGwsIFwibGluZUNvbG9yXCIsIG51bGwsIHBlLmxpbmVDb2xvciwgbnVsbCwgITApIHx8IHAubGluZSwgcC5saW5lID0gZChoLCB1LCBcInNpemVcIiwgbnVsbCwgXCJsaW5lU2l6ZVwiLCBudWxsLCBwZS5saW5lU2l6ZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAwIDwgZVxuICAgIH0pIHx8IHAubGluZSwgW1wic3RhcnRQbHVnXCIsIFwiZW5kUGx1Z1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBwLnBsdWcgPSBjKGgsIHUsIGUsIEUsIFwicGx1Z1NFXCIsIHQsIHBlLnBsdWdTRVt0XSkgfHwgcC5wbHVnLCBwLnBsdWcgPSBkKGgsIHUsIGUgKyBcIkNvbG9yXCIsIFwic3RyaW5nXCIsIFwicGx1Z0NvbG9yU0VcIiwgdCwgbnVsbCwgbnVsbCwgITApIHx8IHAucGx1ZywgcC5wbHVnID0gZChoLCB1LCBlICsgXCJTaXplXCIsIG51bGwsIFwicGx1Z1NpemVTRVwiLCB0LCBwZS5wbHVnU2l6ZVNFW3RdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gMCA8IGVcbiAgICAgIH0pIHx8IHAucGx1Z1xuICAgIH0pLCBwLmxpbmVPdXRsaW5lID0gZChoLCB1LCBcIm91dGxpbmVcIiwgbnVsbCwgXCJsaW5lT3V0bGluZUVuYWJsZWRcIiwgbnVsbCwgcGUubGluZU91dGxpbmVFbmFibGVkKSB8fCBwLmxpbmVPdXRsaW5lLCBwLmxpbmVPdXRsaW5lID0gZChoLCB1LCBcIm91dGxpbmVDb2xvclwiLCBudWxsLCBcImxpbmVPdXRsaW5lQ29sb3JcIiwgbnVsbCwgcGUubGluZU91dGxpbmVDb2xvciwgbnVsbCwgITApIHx8IHAubGluZU91dGxpbmUsIHAubGluZU91dGxpbmUgPSBkKGgsIHUsIFwib3V0bGluZVNpemVcIiwgbnVsbCwgXCJsaW5lT3V0bGluZVNpemVcIiwgbnVsbCwgcGUubGluZU91dGxpbmVTaXplLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIDAgPCBlICYmIGUgPD0gLjQ4XG4gICAgfSkgfHwgcC5saW5lT3V0bGluZSwgW1wic3RhcnRQbHVnT3V0bGluZVwiLCBcImVuZFBsdWdPdXRsaW5lXCJdLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHAucGx1Z091dGxpbmUgPSBkKGgsIHUsIGUsIG51bGwsIFwicGx1Z091dGxpbmVFbmFibGVkU0VcIiwgdCwgcGUucGx1Z091dGxpbmVFbmFibGVkU0VbdF0pIHx8IHAucGx1Z091dGxpbmUsIHAucGx1Z091dGxpbmUgPSBkKGgsIHUsIGUgKyBcIkNvbG9yXCIsIFwic3RyaW5nXCIsIFwicGx1Z091dGxpbmVDb2xvclNFXCIsIHQsIG51bGwsIG51bGwsICEwKSB8fCBwLnBsdWdPdXRsaW5lLCBwLnBsdWdPdXRsaW5lID0gZChoLCB1LCBlICsgXCJTaXplXCIsIG51bGwsIFwicGx1Z091dGxpbmVTaXplU0VcIiwgdCwgcGUucGx1Z091dGxpbmVTaXplU0VbdF0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAxIDw9IGVcbiAgICAgIH0pIHx8IHAucGx1Z091dGxpbmVcbiAgICB9KSwgW1wic3RhcnRMYWJlbFwiLCBcImVuZExhYmVsXCIsIFwibWlkZGxlTGFiZWxcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgdmFyIG4sIGEsIGksIG8gPSB1W2VdLFxuICAgICAgICBsID0gaC5sYWJlbFNFTVt0XSAmJiAhcy5vcHRpb25Jc0F0dGFjaC5sYWJlbFNFTVt0XSA/ICRbaC5sYWJlbFNFTVt0XS5faWRdLnRleHQgOiBoLmxhYmVsU0VNW3RdLFxuICAgICAgICByID0gITE7XG4gICAgICBpZiAoKG4gPSBcInN0cmluZ1wiID09IHR5cGVvZiBvKSAmJiAobyA9IG8udHJpbSgpKSwgKG4gfHwgbyAmJiAociA9IF8obywgXCJsYWJlbFwiKSkpICYmIG8gIT09IGwpIHtcbiAgICAgICAgaWYgKGgubGFiZWxTRU1bdF0gJiYgKFVlKHMsICRbaC5sYWJlbFNFTVt0XS5faWRdKSwgaC5sYWJlbFNFTVt0XSA9IFwiXCIpLCBvKSB7XG4gICAgICAgICAgaWYgKHIgPyAoYSA9ICRbKGkgPSBvKS5faWRdKS5ib3VuZFRhcmdldHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGEuY29uZi5yZW1vdmVPcHRpb24oYSwgZSlcbiAgICAgICAgICAgIH0pIDogaSA9IG5ldyBTKHkuY2FwdGlvbkxhYmVsLCBbb10pLCAhSGUocywgJFtpLl9pZF0sIGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBiaW5kIGF0dGFjaG1lbnRcIik7XG4gICAgICAgICAgaC5sYWJlbFNFTVt0XSA9IGlcbiAgICAgICAgfVxuICAgICAgICBzLm9wdGlvbklzQXR0YWNoLmxhYmVsU0VNW3RdID0gclxuICAgICAgfVxuICAgIH0pLCBPYmplY3Qua2V5cyh0ZSkuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGUsIHQsIG8gPSB0ZVthXSxcbiAgICAgICAgbiA9IGEgKyBcIl9lbmFibGVkXCIsXG4gICAgICAgIGkgPSBhICsgXCJfb3B0aW9uc1wiO1xuXG4gICAgICBmdW5jdGlvbiBsKGEpIHtcbiAgICAgICAgdmFyIGkgPSB7fTtcbiAgICAgICAgcmV0dXJuIG8ub3B0aW9uc0NvbmYuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gZVswXSxcbiAgICAgICAgICAgIG4gPSBlWzNdO1xuICAgICAgICAgIG51bGwgPT0gZVs0XSB8fCBpW25dIHx8IChpW25dID0gW10pLCAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ID8gdCA6IFwiaWRcIiA9PT0gdCA/IGMgOiBkKS5hcHBseShudWxsLCBbaSwgYV0uY29uY2F0KGUuc2xpY2UoMSkpKVxuICAgICAgICB9KSwgaVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgdmFyIHQsIG4gPSBhICsgXCJfYW5pbU9wdGlvbnNcIjtcbiAgICAgICAgcmV0dXJuIGUuaGFzT3duUHJvcGVydHkoXCJhbmltYXRpb25cIikgPyBrKGUuYW5pbWF0aW9uKSA/IHQgPSBzLmN1clN0YXRzW25dID0gemUoZS5hbmltYXRpb24sIG8uZGVmYXVsdEFuaW1PcHRpb25zKSA6ICh0ID0gISFlLmFuaW1hdGlvbiwgcy5jdXJTdGF0c1tuXSA9IHQgPyB6ZSh7fSwgby5kZWZhdWx0QW5pbU9wdGlvbnMpIDogbnVsbCkgOiAodCA9ICEhby5kZWZhdWx0RW5hYmxlZCwgcy5jdXJTdGF0c1tuXSA9IHQgPyB6ZSh7fSwgby5kZWZhdWx0QW5pbU9wdGlvbnMpIDogbnVsbCksIHRcbiAgICAgIH1cbiAgICAgIHUuaGFzT3duUHJvcGVydHkoYSkgJiYgKGUgPSB1W2FdLCBrKGUpID8gKHMuY3VyU3RhdHNbbl0gPSAhMCwgdCA9IHMuY3VyU3RhdHNbaV0gPSBsKGUpLCBvLmFuaW0gJiYgKHMuY3VyU3RhdHNbaV0uYW5pbWF0aW9uID0gcihlKSkpIDogKHQgPSBzLmN1clN0YXRzW25dID0gISFlKSAmJiAocy5jdXJTdGF0c1tpXSA9IGwoe30pLCBvLmFuaW0gJiYgKHMuY3VyU3RhdHNbaV0uYW5pbWF0aW9uID0gcih7fSkpKSwgY2UodCwgaFthXSkgJiYgKGhbYV0gPSB0LCBwLmVmZmVjdCA9ICEwKSlcbiAgICB9KSwgRGUocywgcClcbiAgfVxuXG4gIGZ1bmN0aW9uIFllKGUsIHQsIG4pIHtcbiAgICB2YXIgYSA9IHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYW5jaG9yU0U6IFtdLFxuICAgICAgICBzb2NrZXRTRTogW10sXG4gICAgICAgIHNvY2tldEdyYXZpdHlTRTogW10sXG4gICAgICAgIHBsdWdTRTogW10sXG4gICAgICAgIHBsdWdDb2xvclNFOiBbXSxcbiAgICAgICAgcGx1Z1NpemVTRTogW10sXG4gICAgICAgIHBsdWdPdXRsaW5lRW5hYmxlZFNFOiBbXSxcbiAgICAgICAgcGx1Z091dGxpbmVDb2xvclNFOiBbXSxcbiAgICAgICAgcGx1Z091dGxpbmVTaXplU0U6IFtdLFxuICAgICAgICBsYWJlbFNFTTogW1wiXCIsIFwiXCIsIFwiXCJdXG4gICAgICB9LFxuICAgICAgb3B0aW9uSXNBdHRhY2g6IHtcbiAgICAgICAgYW5jaG9yU0U6IFshMSwgITFdLFxuICAgICAgICBsYWJlbFNFTTogWyExLCAhMSwgITFdXG4gICAgICB9LFxuICAgICAgY3VyU3RhdHM6IHt9LFxuICAgICAgYXBsU3RhdHM6IHt9LFxuICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgZXZlbnRzOiB7fSxcbiAgICAgIHJlZmxvd1RhcmdldHM6IFtdXG4gICAgfTtcbiAgICBUZShhLmN1clN0YXRzLCBZKSwgVGUoYS5hcGxTdGF0cywgWSksIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IHRlW2VdLnN0YXRzO1xuICAgICAgVGUoYS5jdXJTdGF0cywgdCksIFRlKGEuYXBsU3RhdHMsIHQpLCBhLm9wdGlvbnNbZV0gPSAhMVxuICAgIH0pLCBUZShhLmN1clN0YXRzLCBYKSwgVGUoYS5hcGxTdGF0cywgWCksIGEuY3VyU3RhdHMuc2hvd19lZmZlY3QgPSBxLCBhLmN1clN0YXRzLnNob3dfYW5pbU9wdGlvbnMgPSBkZShnW3FdLmRlZmF1bHRBbmltT3B0aW9ucyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pZFwiLCB7XG4gICAgICB2YWx1ZTogKytKXG4gICAgfSksIGEuX2lkID0gdGhpcy5faWQsIEtbdGhpcy5faWRdID0gYSwgMSA9PT0gYXJndW1lbnRzLmxlbmd0aCAmJiAobiA9IGUsIGUgPSBudWxsKSwgbiA9IG4gfHwge30sIChlIHx8IHQpICYmIChuID0gZGUobiksIGUgJiYgKG4uc3RhcnQgPSBlKSwgdCAmJiAobi5lbmQgPSB0KSksIGEuaXNTaG93biA9IGEuYXBsU3RhdHMuc2hvd19vbiA9ICFuLmhpZGUsIHRoaXMuc2V0T3B0aW9ucyhuKVxuICB9XG4gIHJldHVybiB0ZSA9IHtcbiAgICAgIGRhc2g6IHtcbiAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICBkYXNoX2xlbjoge30sXG4gICAgICAgICAgZGFzaF9nYXA6IHt9LFxuICAgICAgICAgIGRhc2hfbWF4T2Zmc2V0OiB7fVxuICAgICAgICB9LFxuICAgICAgICBhbmltOiAhMCxcbiAgICAgICAgZGVmYXVsdEFuaW1PcHRpb25zOiB7XG4gICAgICAgICAgZHVyYXRpb246IDFlMyxcbiAgICAgICAgICB0aW1pbmc6IFwibGluZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc0NvbmY6IFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwibGVuXCIsIFwibnVtYmVyXCIsIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gMCA8IGVcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiZ2FwXCIsIFwibnVtYmVyXCIsIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gMCA8IGVcbiAgICAgICAgICB9XVxuICAgICAgICBdLFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIEllKGUsIFwiYXBsX2xpbmVfc3Ryb2tlV2lkdGhcIiwgdGUuZGFzaC51cGRhdGUpLCBlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAwLCB0ZS5kYXNoLnVwZGF0ZShlKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLmN1clN0YXRzO1xuICAgICAgICAgIENlKGUsIFwiYXBsX2xpbmVfc3Ryb2tlV2lkdGhcIiwgdGUuZGFzaC51cGRhdGUpLCB0LmRhc2hfYW5pbUlkICYmIChjLnJlbW92ZSh0LmRhc2hfYW5pbUlkKSwgdC5kYXNoX2FuaW1JZCA9IG51bGwpLCBlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IFwibm9uZVwiLCBlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAwLCBUZShlLmFwbFN0YXRzLCB0ZS5kYXNoLnN0YXRzKVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdmFyIGUsIG4gPSB0LmN1clN0YXRzLFxuICAgICAgICAgICAgYSA9IHQuYXBsU3RhdHMsXG4gICAgICAgICAgICBpID0gYS5kYXNoX29wdGlvbnMsXG4gICAgICAgICAgICBvID0gITE7XG4gICAgICAgICAgbi5kYXNoX2xlbiA9IGkubGVuIHx8IDIgKiBhLmxpbmVfc3Ryb2tlV2lkdGgsIG4uZGFzaF9nYXAgPSBpLmdhcCB8fCBhLmxpbmVfc3Ryb2tlV2lkdGgsIG4uZGFzaF9tYXhPZmZzZXQgPSBuLmRhc2hfbGVuICsgbi5kYXNoX2dhcCwgbyA9IFdlKHQsIGEsIFwiZGFzaF9sZW5cIiwgbi5kYXNoX2xlbikgfHwgbywgKG8gPSBXZSh0LCBhLCBcImRhc2hfZ2FwXCIsIG4uZGFzaF9nYXApIHx8IG8pICYmICh0LmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGEuZGFzaF9sZW4gKyBcIixcIiArIGEuZGFzaF9nYXApLCBuLmRhc2hfYW5pbU9wdGlvbnMgPyAobyA9IFdlKHQsIGEsIFwiZGFzaF9tYXhPZmZzZXRcIiwgbi5kYXNoX21heE9mZnNldCksIGEuZGFzaF9hbmltT3B0aW9ucyAmJiAobyB8fCBjZShuLmRhc2hfYW5pbU9wdGlvbnMsIGEuZGFzaF9hbmltT3B0aW9ucykpICYmIChuLmRhc2hfYW5pbUlkICYmIChlID0gYy5zdG9wKG4uZGFzaF9hbmltSWQpLCBjLnJlbW92ZShuLmRhc2hfYW5pbUlkKSksIGEuZGFzaF9hbmltT3B0aW9ucyA9IG51bGwpLCBhLmRhc2hfYW5pbU9wdGlvbnMgfHwgKG4uZGFzaF9hbmltSWQgPSBjLmFkZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICgxIC0gZSkgKiBhLmRhc2hfbWF4T2Zmc2V0ICsgXCJweFwiXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHQubGluZUZhY2Uuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGVcbiAgICAgICAgICB9LCBuLmRhc2hfYW5pbU9wdGlvbnMuZHVyYXRpb24sIDAsIG4uZGFzaF9hbmltT3B0aW9ucy50aW1pbmcsICExLCBlKSwgYS5kYXNoX2FuaW1PcHRpb25zID0gZGUobi5kYXNoX2FuaW1PcHRpb25zKSkpIDogYS5kYXNoX2FuaW1PcHRpb25zICYmIChuLmRhc2hfYW5pbUlkICYmIChjLnJlbW92ZShuLmRhc2hfYW5pbUlkKSwgbi5kYXNoX2FuaW1JZCA9IG51bGwpLCB0LmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAwLCBhLmRhc2hfYW5pbU9wdGlvbnMgPSBudWxsKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICBncmFkaWVudF9jb2xvclNFOiB7XG4gICAgICAgICAgICBoYXNTRTogITBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyYWRpZW50X3BvaW50U0U6IHtcbiAgICAgICAgICAgIGhhc1NFOiAhMCxcbiAgICAgICAgICAgIGhhc1Byb3BzOiAhMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc0NvbmY6IFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwic3RhcnRDb2xvclwiLCBcInN0cmluZ1wiLCBcImNvbG9yU0VcIiwgMCwgbnVsbCwgbnVsbCwgITBdLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJlbmRDb2xvclwiLCBcInN0cmluZ1wiLCBcImNvbG9yU0VcIiwgMSwgbnVsbCwgbnVsbCwgITBdXG4gICAgICAgIF0sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQsIGEgPSBlLmJhc2VXaW5kb3cuZG9jdW1lbnQsXG4gICAgICAgICAgICBuID0gZS5kZWZzLFxuICAgICAgICAgICAgaSA9IHYgKyBcIi1cIiArIGUuX2lkICsgXCItZ3JhZGllbnRcIjtcbiAgICAgICAgICBlLmVmY19ncmFkaWVudF9ncmFkaWVudCA9IHQgPSBuLmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudE5TKGIsIFwibGluZWFyR3JhZGllbnRcIikpLCB0LmlkID0gaSwgdC5ncmFkaWVudFVuaXRzLmJhc2VWYWwgPSBTVkdVbml0VHlwZXMuU1ZHX1VOSVRfVFlQRV9VU0VSU1BBQ0VPTlVTRSwgW3QueDEsIHQueTEsIHQueDIsIHQueTJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMClcbiAgICAgICAgICB9KSwgZS5lZmNfZ3JhZGllbnRfc3RvcFNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIG4gPSBlLmVmY19ncmFkaWVudF9ncmFkaWVudC5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnROUyhiLCBcInN0b3BcIikpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgbi5vZmZzZXQuYmFzZVZhbCA9IHRcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUuY29kZSAhPT0gRE9NRXhjZXB0aW9uLk5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUikgdGhyb3cgZTtcbiAgICAgICAgICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIiwgdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuXG4gICAgICAgICAgfSksIEllKGUsIFwiY3VyX3BsdWdfY29sb3JTRVwiLCB0ZS5ncmFkaWVudC51cGRhdGUpLCBJZShlLCBcImFwbF9wYXRoXCIsIHRlLmdyYWRpZW50LnVwZGF0ZSksIGUuY3VyU3RhdHMubGluZV9hbHRDb2xvciA9ICEwLCBlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZSA9IFwidXJsKCNcIiArIGkgKyBcIilcIiwgdGUuZ3JhZGllbnQudXBkYXRlKGUpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLmVmY19ncmFkaWVudF9ncmFkaWVudCAmJiAoZS5kZWZzLnJlbW92ZUNoaWxkKGUuZWZjX2dyYWRpZW50X2dyYWRpZW50KSwgZS5lZmNfZ3JhZGllbnRfZ3JhZGllbnQgPSBlLmVmY19ncmFkaWVudF9zdG9wU0UgPSBudWxsKSwgQ2UoZSwgXCJjdXJfcGx1Z19jb2xvclNFXCIsIHRlLmdyYWRpZW50LnVwZGF0ZSksIENlKGUsIFwiYXBsX3BhdGhcIiwgdGUuZ3JhZGllbnQudXBkYXRlKSwgZS5jdXJTdGF0cy5saW5lX2FsdENvbG9yID0gITEsIGUubGluZUZhY2Uuc3R5bGUuc3Ryb2tlID0gZS5jdXJTdGF0cy5saW5lX2NvbG9yLCBUZShlLmFwbFN0YXRzLCB0ZS5ncmFkaWVudC5zdGF0cylcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHZhciBlLCB0LCBpID0gYS5jdXJTdGF0cyxcbiAgICAgICAgICAgIG8gPSBhLmFwbFN0YXRzLFxuICAgICAgICAgICAgbiA9IG8uZ3JhZGllbnRfb3B0aW9ucyxcbiAgICAgICAgICAgIGwgPSBhLnBhdGhMaXN0LmFuaW1WYWwgfHwgYS5wYXRoTGlzdC5iYXNlVmFsO1xuICAgICAgICAgIFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpLmdyYWRpZW50X2NvbG9yU0VbZV0gPSBuLmNvbG9yU0VbZV0gfHwgaS5wbHVnX2NvbG9yU0VbZV1cbiAgICAgICAgICB9KSwgdCA9IGxbMF1bMF0sIGkuZ3JhZGllbnRfcG9pbnRTRVswXSA9IHtcbiAgICAgICAgICAgIHg6IHQueCxcbiAgICAgICAgICAgIHk6IHQueVxuICAgICAgICAgIH0sIHQgPSAoZSA9IGxbbC5sZW5ndGggLSAxXSlbZS5sZW5ndGggLSAxXSwgaS5ncmFkaWVudF9wb2ludFNFWzFdID0ge1xuICAgICAgICAgICAgeDogdC54LFxuICAgICAgICAgICAgeTogdC55XG4gICAgICAgICAgfSwgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgV2UoYSwgby5ncmFkaWVudF9jb2xvclNFLCB0LCBuID0gaS5ncmFkaWVudF9jb2xvclNFW3RdKSAmJiAodWUgPyAobiA9IGZlKG4pLCBhLmVmY19ncmFkaWVudF9zdG9wU0VbdF0uc3R5bGUuc3RvcENvbG9yID0gblsxXSwgYS5lZmNfZ3JhZGllbnRfc3RvcFNFW3RdLnN0eWxlLnN0b3BPcGFjaXR5ID0gblswXSkgOiBhLmVmY19ncmFkaWVudF9zdG9wU0VbdF0uc3R5bGUuc3RvcENvbG9yID0gbiksIFtcInhcIiwgXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgKG4gPSBpLmdyYWRpZW50X3BvaW50U0VbdF1bZV0pICE9PSBvLmdyYWRpZW50X3BvaW50U0VbdF1bZV0gJiYgKGEuZWZjX2dyYWRpZW50X2dyYWRpZW50W2UgKyAodCArIDEpXS5iYXNlVmFsLnZhbHVlID0gby5ncmFkaWVudF9wb2ludFNFW3RdW2VdID0gbilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRyb3BTaGFkb3c6IHtcbiAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICBkcm9wU2hhZG93X2R4OiB7fSxcbiAgICAgICAgICBkcm9wU2hhZG93X2R5OiB7fSxcbiAgICAgICAgICBkcm9wU2hhZG93X2JsdXI6IHt9LFxuICAgICAgICAgIGRyb3BTaGFkb3dfY29sb3I6IHt9LFxuICAgICAgICAgIGRyb3BTaGFkb3dfb3BhY2l0eToge30sXG4gICAgICAgICAgZHJvcFNoYWRvd194OiB7fSxcbiAgICAgICAgICBkcm9wU2hhZG93X3k6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNDb25mOiBbXG4gICAgICAgICAgW1widHlwZVwiLCBcImR4XCIsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJkeVwiLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiYmx1clwiLCBudWxsLCBudWxsLCBudWxsLCAzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIDAgPD0gZVxuICAgICAgICAgIH1dLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJjb2xvclwiLCBudWxsLCBudWxsLCBudWxsLCBcIiMwMDBcIiwgbnVsbCwgITBdLFxuICAgICAgICAgIFtcInR5cGVcIiwgXCJvcGFjaXR5XCIsIG51bGwsIG51bGwsIG51bGwsIC44LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIDAgPD0gZSAmJiBlIDw9IDFcbiAgICAgICAgICB9XVxuICAgICAgICBdLFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHZhciBlLCBuLCBhLCBpLCBvLCBsID0gdC5iYXNlV2luZG93LmRvY3VtZW50LFxuICAgICAgICAgICAgciA9IHQuZGVmcyxcbiAgICAgICAgICAgIHMgPSB2ICsgXCItXCIgKyB0Ll9pZCArIFwiLWRyb3BTaGFkb3dcIixcbiAgICAgICAgICAgIHUgPSAoZSA9IGwsIG4gPSBzLCBvID0ge30sIFwiYm9vbGVhblwiICE9IHR5cGVvZiBwICYmIChwID0gISF3aW5kb3cuU1ZHRkVEcm9wU2hhZG93RWxlbWVudCAmJiAhdWUpLCBvLmVsbXNBcHBlbmQgPSBbby5lbG1GaWx0ZXIgPSBhID0gZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmaWx0ZXJcIildLCBhLmZpbHRlclVuaXRzLmJhc2VWYWwgPSBTVkdVbml0VHlwZXMuU1ZHX1VOSVRfVFlQRV9VU0VSU1BBQ0VPTlVTRSwgYS54LmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgsIDApLCBhLnkuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMCksIGEud2lkdGguYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QRVJDRU5UQUdFLCAxMDApLCBhLmhlaWdodC5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsIDEwMCksIGEuaWQgPSBuLCBwID8gKG8uZWxtT2Zmc2V0ID0gby5lbG1CbHVyID0gaSA9IGEuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZURyb3BTaGFkb3dcIikpLCBvLnN0eWxlRmxvb2QgPSBpLnN0eWxlKSA6IChvLmVsbUJsdXIgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVHYXVzc2lhbkJsdXJcIikpLCBvLmVsbU9mZnNldCA9IGkgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVPZmZzZXRcIikpLCBpLnJlc3VsdC5iYXNlVmFsID0gXCJvZmZzZXRibHVyXCIsIGkgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVGbG9vZFwiKSksIG8uc3R5bGVGbG9vZCA9IGkuc3R5bGUsIChpID0gYS5hcHBlbmRDaGlsZChlLmNyZWF0ZUVsZW1lbnROUyhiLCBcImZlQ29tcG9zaXRlXCIpKSkuaW4yLmJhc2VWYWwgPSBcIm9mZnNldGJsdXJcIiwgaS5vcGVyYXRvci5iYXNlVmFsID0gU1ZHRkVDb21wb3NpdGVFbGVtZW50LlNWR19GRUNPTVBPU0lURV9PUEVSQVRPUl9JTiwgKGkgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVNZXJnZVwiKSkpLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVNZXJnZU5vZGVcIikpLCBpLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVNZXJnZU5vZGVcIikpLmluMS5iYXNlVmFsID0gXCJTb3VyY2VHcmFwaGljXCIpLCBvKTtcbiAgICAgICAgICBbXCJlbG1GaWx0ZXJcIiwgXCJlbG1PZmZzZXRcIiwgXCJlbG1CbHVyXCIsIFwic3R5bGVGbG9vZFwiLCBcImVsbXNBcHBlbmRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdFtcImVmY19kcm9wU2hhZG93X1wiICsgZV0gPSB1W2VdXG4gICAgICAgICAgfSksIHUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByLmFwcGVuZENoaWxkKGUpXG4gICAgICAgICAgfSksIHQuZmFjZS5zZXRBdHRyaWJ1dGUoXCJmaWx0ZXJcIiwgXCJ1cmwoI1wiICsgcyArIFwiKVwiKSwgSWUodCwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIHRlLmRyb3BTaGFkb3cuYWRqdXN0RWRnZSksIHRlLmRyb3BTaGFkb3cudXBkYXRlKHQpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGUuZGVmcztcbiAgICAgICAgICBlLmVmY19kcm9wU2hhZG93X2VsbXNBcHBlbmQgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0LnJlbW92ZUNoaWxkKGUpXG4gICAgICAgICAgfSksIGUuZWZjX2Ryb3BTaGFkb3dfZWxtRmlsdGVyID0gZS5lZmNfZHJvcFNoYWRvd19lbG1PZmZzZXQgPSBlLmVmY19kcm9wU2hhZG93X2VsbUJsdXIgPSBlLmVmY19kcm9wU2hhZG93X3N0eWxlRmxvb2QgPSBlLmVmY19kcm9wU2hhZG93X2VsbXNBcHBlbmQgPSBudWxsKSwgQ2UoZSwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIHRlLmRyb3BTaGFkb3cuYWRqdXN0RWRnZSksIERlKGUsIHt9KSwgZS5mYWNlLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSwgVGUoZS5hcGxTdGF0cywgdGUuZHJvcFNoYWRvdy5zdGF0cylcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0LCBuLCBhID0gZS5jdXJTdGF0cyxcbiAgICAgICAgICAgIGkgPSBlLmFwbFN0YXRzLFxuICAgICAgICAgICAgbyA9IGkuZHJvcFNoYWRvd19vcHRpb25zO1xuICAgICAgICAgIGEuZHJvcFNoYWRvd19keCA9IHQgPSBvLmR4LCBXZShlLCBpLCBcImRyb3BTaGFkb3dfZHhcIiwgdCkgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfZWxtT2Zmc2V0LmR4LmJhc2VWYWwgPSB0LCBuID0gITApLCBhLmRyb3BTaGFkb3dfZHkgPSB0ID0gby5keSwgV2UoZSwgaSwgXCJkcm9wU2hhZG93X2R5XCIsIHQpICYmIChlLmVmY19kcm9wU2hhZG93X2VsbU9mZnNldC5keS5iYXNlVmFsID0gdCwgbiA9ICEwKSwgYS5kcm9wU2hhZG93X2JsdXIgPSB0ID0gby5ibHVyLCBXZShlLCBpLCBcImRyb3BTaGFkb3dfYmx1clwiLCB0KSAmJiAoZS5lZmNfZHJvcFNoYWRvd19lbG1CbHVyLnNldFN0ZERldmlhdGlvbih0LCB0KSwgbiA9ICEwKSwgbiAmJiBEZShlLCB7fSksIGEuZHJvcFNoYWRvd19jb2xvciA9IHQgPSBvLmNvbG9yLCBXZShlLCBpLCBcImRyb3BTaGFkb3dfY29sb3JcIiwgdCkgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfc3R5bGVGbG9vZC5mbG9vZENvbG9yID0gdCksIGEuZHJvcFNoYWRvd19vcGFjaXR5ID0gdCA9IG8ub3BhY2l0eSwgV2UoZSwgaSwgXCJkcm9wU2hhZG93X29wYWNpdHlcIiwgdCkgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfc3R5bGVGbG9vZC5mbG9vZE9wYWNpdHkgPSB0KVxuICAgICAgICB9LFxuICAgICAgICBhZGp1c3RFZGdlOiBmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgIHZhciBlLCB0LCBvID0gYS5jdXJTdGF0cyxcbiAgICAgICAgICAgIGwgPSBhLmFwbFN0YXRzO1xuICAgICAgICAgIG51bGwgIT0gby5kcm9wU2hhZG93X2R4ICYmIChlID0gMyAqIG8uZHJvcFNoYWRvd19ibHVyLCAodCA9IHtcbiAgICAgICAgICAgIHgxOiBpLngxIC0gZSArIG8uZHJvcFNoYWRvd19keCxcbiAgICAgICAgICAgIHkxOiBpLnkxIC0gZSArIG8uZHJvcFNoYWRvd19keSxcbiAgICAgICAgICAgIHgyOiBpLngyICsgZSArIG8uZHJvcFNoYWRvd19keCxcbiAgICAgICAgICAgIHkyOiBpLnkyICsgZSArIG8uZHJvcFNoYWRvd19keVxuICAgICAgICAgIH0pLngxIDwgaS54MSAmJiAoaS54MSA9IHQueDEpLCB0LnkxIDwgaS55MSAmJiAoaS55MSA9IHQueTEpLCB0LngyID4gaS54MiAmJiAoaS54MiA9IHQueDIpLCB0LnkyID4gaS55MiAmJiAoaS55MiA9IHQueTIpLCBbXCJ4XCIsIFwieVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCwgbiA9IFwiZHJvcFNoYWRvd19cIiArIGU7XG4gICAgICAgICAgICBvW25dID0gdCA9IGlbZSArIFwiMVwiXSwgV2UoYSwgbCwgbiwgdCkgJiYgKGEuZWZjX2Ryb3BTaGFkb3dfZWxtRmlsdGVyW2VdLmJhc2VWYWwudmFsdWUgPSB0KVxuICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgT2JqZWN0LmtleXModGUpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gdGVbZV0sXG4gICAgICAgIG4gPSB0LnN0YXRzO1xuICAgICAgbltlICsgXCJfZW5hYmxlZFwiXSA9IHtcbiAgICAgICAgaW5pVmFsdWU6ICExXG4gICAgICB9LCBuW2UgKyBcIl9vcHRpb25zXCJdID0ge1xuICAgICAgICBoYXNQcm9wczogITBcbiAgICAgIH0sIHQuYW5pbSAmJiAobltlICsgXCJfYW5pbU9wdGlvbnNcIl0gPSB7fSwgbltlICsgXCJfYW5pbUlkXCJdID0ge30pXG4gICAgfSksIGcgPSB7XG4gICAgICBub25lOiB7XG4gICAgICAgIGRlZmF1bHRBbmltT3B0aW9uczoge30sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4gPSBlLmN1clN0YXRzO1xuICAgICAgICAgIG4uc2hvd19hbmltSWQgJiYgKGMucmVtb3ZlKG4uc2hvd19hbmltSWQpLCBuLnNob3dfYW5pbUlkID0gbnVsbCksIGcubm9uZS5zdGFydChlLCB0KVxuICAgICAgICB9LFxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBnLm5vbmUuc3RvcChlLCAhMClcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgICB2YXIgYSA9IGUuY3VyU3RhdHM7XG4gICAgICAgICAgcmV0dXJuIG4gPSBudWxsICE9IG4gPyBuIDogZS5hcGxTdGF0cy5zaG93X29uLCBhLnNob3dfaW5BbmltID0gITEsIHQgJiYgR2UoZSwgbiksIG4gPyAxIDogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFkZToge1xuICAgICAgICBkZWZhdWx0QW5pbU9wdGlvbnM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgIHRpbWluZzogXCJsaW5lYXJcIlxuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAobiwgZSkge1xuICAgICAgICAgIHZhciB0ID0gbi5jdXJTdGF0cyxcbiAgICAgICAgICAgIGEgPSBuLmFwbFN0YXRzO1xuICAgICAgICAgIHQuc2hvd19hbmltSWQgJiYgYy5yZW1vdmUodC5zaG93X2FuaW1JZCksIHQuc2hvd19hbmltSWQgPSBjLmFkZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgdCA/IGcuZmFkZS5zdG9wKG4sICEwKSA6IChuLnN2Zy5zdHlsZS5vcGFjaXR5ID0gZSArIFwiXCIsIGxlICYmIChBZShuLCBuLnN2ZyksIFZlKG4pKSlcbiAgICAgICAgICB9LCBhLnNob3dfYW5pbU9wdGlvbnMuZHVyYXRpb24sIDEsIGEuc2hvd19hbmltT3B0aW9ucy50aW1pbmcsIG51bGwsICExKSwgZy5mYWRlLnN0YXJ0KG4sIGUpXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuLCBhID0gZS5jdXJTdGF0cztcbiAgICAgICAgICBhLnNob3dfaW5BbmltICYmIChuID0gYy5zdG9wKGEuc2hvd19hbmltSWQpKSwgR2UoZSwgMSksIGEuc2hvd19pbkFuaW0gPSAhMCwgYy5zdGFydChhLnNob3dfYW5pbUlkLCAhZS5hcGxTdGF0cy5zaG93X29uLCBudWxsICE9IHQgPyB0IDogbilcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgICB2YXIgYSwgaSA9IGUuY3VyU3RhdHM7XG4gICAgICAgICAgcmV0dXJuIG4gPSBudWxsICE9IG4gPyBuIDogZS5hcGxTdGF0cy5zaG93X29uLCBhID0gaS5zaG93X2luQW5pbSA/IGMuc3RvcChpLnNob3dfYW5pbUlkKSA6IG4gPyAxIDogMCwgaS5zaG93X2luQW5pbSA9ICExLCB0ICYmIChlLnN2Zy5zdHlsZS5vcGFjaXR5ID0gbiA/IFwiXCIgOiBcIjBcIiwgR2UoZSwgbikpLCBhXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkcmF3OiB7XG4gICAgICAgIGRlZmF1bHRBbmltT3B0aW9uczoge1xuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgdGltaW5nOiBbLjU4LCAwLCAuNDIsIDFdXG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChuLCBlKSB7XG4gICAgICAgICAgdmFyIHQgPSBuLmN1clN0YXRzLFxuICAgICAgICAgICAgYSA9IG4uYXBsU3RhdHMsXG4gICAgICAgICAgICBsID0gbi5wYXRoTGlzdC5iYXNlVmFsLFxuICAgICAgICAgICAgaSA9IE9lKGwpLFxuICAgICAgICAgICAgciA9IGkuc2Vnc0xlbixcbiAgICAgICAgICAgIHMgPSBpLmxlbkFsbDtcbiAgICAgICAgICB0LnNob3dfYW5pbUlkICYmIGMucmVtb3ZlKHQuc2hvd19hbmltSWQpLCB0LnNob3dfYW5pbUlkID0gYy5hZGQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0LCBuLCBhLCBpLCBvID0gLTE7XG4gICAgICAgICAgICBpZiAoMCA9PT0gZSkgbiA9IFtcbiAgICAgICAgICAgICAgW2xbMF1bMF0sIGxbMF1bMF1dXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgZWxzZSBpZiAoMSA9PT0gZSkgbiA9IGw7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yICh0ID0gcyAqIGUsIG4gPSBbXTsgdCA+PSByWysrb107KSBuLnB1c2gobFtvXSksIHQgLT0gcltvXTtcbiAgICAgICAgICAgICAgdCAmJiAoMiA9PT0gKGEgPSBsW29dKS5sZW5ndGggPyBuLnB1c2goW2FbMF0sIHZlKGFbMF0sIGFbMV0sIHQgLyByW29dKV0pIDogKGkgPSB4ZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCBrZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCB0KSksIG4ucHVzaChbYVswXSwgaS5mcm9tUDEsIGkuZnJvbVAyLCBpXSkpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgdCA/IGcuZHJhdy5zdG9wKG4sICEwKSA6IChuLnBhdGhMaXN0LmFuaW1WYWwgPSBlLCBEZShuLCB7XG4gICAgICAgICAgICAgIHBhdGg6ICEwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9LCBhLnNob3dfYW5pbU9wdGlvbnMuZHVyYXRpb24sIDEsIGEuc2hvd19hbmltT3B0aW9ucy50aW1pbmcsIG51bGwsICExKSwgZy5kcmF3LnN0YXJ0KG4sIGUpXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuLCBhID0gZS5jdXJTdGF0cztcbiAgICAgICAgICBhLnNob3dfaW5BbmltICYmIChuID0gYy5zdG9wKGEuc2hvd19hbmltSWQpKSwgR2UoZSwgMSksIGEuc2hvd19pbkFuaW0gPSAhMCwgSWUoZSwgXCJhcGxfcG9zaXRpb25cIiwgZy5kcmF3LnVwZGF0ZSksIGMuc3RhcnQoYS5zaG93X2FuaW1JZCwgIWUuYXBsU3RhdHMuc2hvd19vbiwgbnVsbCAhPSB0ID8gdCA6IG4pXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgdmFyIGEsIGkgPSBlLmN1clN0YXRzO1xuICAgICAgICAgIHJldHVybiBuID0gbnVsbCAhPSBuID8gbiA6IGUuYXBsU3RhdHMuc2hvd19vbiwgYSA9IGkuc2hvd19pbkFuaW0gPyBjLnN0b3AoaS5zaG93X2FuaW1JZCkgOiBuID8gMSA6IDAsIGkuc2hvd19pbkFuaW0gPSAhMSwgdCAmJiAoZS5wYXRoTGlzdC5hbmltVmFsID0gbiA/IG51bGwgOiBbXG4gICAgICAgICAgICBbZS5wYXRoTGlzdC5iYXNlVmFsWzBdWzBdLCBlLnBhdGhMaXN0LmJhc2VWYWxbMF1bMF1dXG4gICAgICAgICAgXSwgRGUoZSwge1xuICAgICAgICAgICAgcGF0aDogITBcbiAgICAgICAgICB9KSwgR2UoZSwgbikpLCBhXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBDZShlLCBcImFwbF9wb3NpdGlvblwiLCBnLmRyYXcudXBkYXRlKSwgZS5jdXJTdGF0cy5zaG93X2luQW5pbSA/IGcuZHJhdy5pbml0KGUsIGcuZHJhdy5zdG9wKGUpKSA6IGUuYXBsU3RhdHMuc2hvd19hbmltT3B0aW9ucyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIHIobikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IHt9O1xuICAgICAgICAgIHRbbl0gPSBlLCB0aGlzLnNldE9wdGlvbnModClcbiAgICAgICAgfVxuICAgICAgfSBbXG4gICAgICAgIFtcInN0YXJ0XCIsIFwiYW5jaG9yU0VcIiwgMF0sXG4gICAgICAgIFtcImVuZFwiLCBcImFuY2hvclNFXCIsIDFdLFxuICAgICAgICBbXCJjb2xvclwiLCBcImxpbmVDb2xvclwiXSxcbiAgICAgICAgW1wic2l6ZVwiLCBcImxpbmVTaXplXCJdLFxuICAgICAgICBbXCJzdGFydFNvY2tldEdyYXZpdHlcIiwgXCJzb2NrZXRHcmF2aXR5U0VcIiwgMF0sXG4gICAgICAgIFtcImVuZFNvY2tldEdyYXZpdHlcIiwgXCJzb2NrZXRHcmF2aXR5U0VcIiwgMV0sXG4gICAgICAgIFtcInN0YXJ0UGx1Z0NvbG9yXCIsIFwicGx1Z0NvbG9yU0VcIiwgMF0sXG4gICAgICAgIFtcImVuZFBsdWdDb2xvclwiLCBcInBsdWdDb2xvclNFXCIsIDFdLFxuICAgICAgICBbXCJzdGFydFBsdWdTaXplXCIsIFwicGx1Z1NpemVTRVwiLCAwXSxcbiAgICAgICAgW1wiZW5kUGx1Z1NpemVcIiwgXCJwbHVnU2l6ZVNFXCIsIDFdLFxuICAgICAgICBbXCJvdXRsaW5lXCIsIFwibGluZU91dGxpbmVFbmFibGVkXCJdLFxuICAgICAgICBbXCJvdXRsaW5lQ29sb3JcIiwgXCJsaW5lT3V0bGluZUNvbG9yXCJdLFxuICAgICAgICBbXCJvdXRsaW5lU2l6ZVwiLCBcImxpbmVPdXRsaW5lU2l6ZVwiXSxcbiAgICAgICAgW1wic3RhcnRQbHVnT3V0bGluZVwiLCBcInBsdWdPdXRsaW5lRW5hYmxlZFNFXCIsIDBdLFxuICAgICAgICBbXCJlbmRQbHVnT3V0bGluZVwiLCBcInBsdWdPdXRsaW5lRW5hYmxlZFNFXCIsIDFdLFxuICAgICAgICBbXCJzdGFydFBsdWdPdXRsaW5lQ29sb3JcIiwgXCJwbHVnT3V0bGluZUNvbG9yU0VcIiwgMF0sXG4gICAgICAgIFtcImVuZFBsdWdPdXRsaW5lQ29sb3JcIiwgXCJwbHVnT3V0bGluZUNvbG9yU0VcIiwgMV0sXG4gICAgICAgIFtcInN0YXJ0UGx1Z091dGxpbmVTaXplXCIsIFwicGx1Z091dGxpbmVTaXplU0VcIiwgMF0sXG4gICAgICAgIFtcImVuZFBsdWdPdXRsaW5lU2l6ZVwiLCBcInBsdWdPdXRsaW5lU2l6ZVNFXCIsIDFdXG4gICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBlWzBdLFxuICAgICAgICAgIG4gPSBlWzFdLFxuICAgICAgICAgIGEgPSBlWzJdO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWWUucHJvdG90eXBlLCB0LCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG51bGwgIT0gYSA/IEtbdGhpcy5faWRdLm9wdGlvbnNbbl1bYV0gOiBuID8gS1t0aGlzLl9pZF0ub3B0aW9uc1tuXSA6IEtbdGhpcy5faWRdLm9wdGlvbnNbdF07XG4gICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBlID8geCA6IGRlKGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IHIodCksXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcbiAgICAgICAgfSlcbiAgICAgIH0pLCBbXG4gICAgICAgIFtcInBhdGhcIiwgbV0sXG4gICAgICAgIFtcInN0YXJ0U29ja2V0XCIsIG4sIFwic29ja2V0U0VcIiwgMF0sXG4gICAgICAgIFtcImVuZFNvY2tldFwiLCBuLCBcInNvY2tldFNFXCIsIDFdLFxuICAgICAgICBbXCJzdGFydFBsdWdcIiwgRSwgXCJwbHVnU0VcIiwgMF0sXG4gICAgICAgIFtcImVuZFBsdWdcIiwgRSwgXCJwbHVnU0VcIiwgMV1cbiAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgYSA9IGVbMF0sXG4gICAgICAgICAgaSA9IGVbMV0sXG4gICAgICAgICAgbyA9IGVbMl0sXG4gICAgICAgICAgbCA9IGVbM107XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShZZS5wcm90b3R5cGUsIGEsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0LCBuID0gbnVsbCAhPSBsID8gS1t0aGlzLl9pZF0ub3B0aW9uc1tvXVtsXSA6IG8gPyBLW3RoaXMuX2lkXS5vcHRpb25zW29dIDogS1t0aGlzLl9pZF0ub3B0aW9uc1thXTtcbiAgICAgICAgICAgIHJldHVybiBuID8gT2JqZWN0LmtleXMoaSkuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaVtlXSA9PT0gbiAmJiAodCA9IGUsICEwKVxuICAgICAgICAgICAgfSkgPyB0IDogbmV3IEVycm9yKFwiSXQncyBicm9rZW5cIikgOiB4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IHIoYSksXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcbiAgICAgICAgfSlcbiAgICAgIH0pLCBPYmplY3Qua2V5cyh0ZSkuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICB2YXIgYSA9IHRlW25dO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWWUucHJvdG90eXBlLCBuLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdSwgZSwgdCA9IEtbdGhpcy5faWRdLm9wdGlvbnNbbl07XG4gICAgICAgICAgICByZXR1cm4gayh0KSA/ICh1ID0gdCwgZSA9IGEub3B0aW9uc0NvbmYucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBuLCBhID0gdFswXSxcbiAgICAgICAgICAgICAgICBpID0gdFsxXSxcbiAgICAgICAgICAgICAgICBvID0gdFsyXSxcbiAgICAgICAgICAgICAgICBsID0gdFszXSxcbiAgICAgICAgICAgICAgICByID0gdFs0XSxcbiAgICAgICAgICAgICAgICBzID0gbnVsbCAhPSByID8gdVtsXVtyXSA6IGwgPyB1W2xdIDogdVtpXTtcbiAgICAgICAgICAgICAgcmV0dXJuIGVbaV0gPSBcImlkXCIgPT09IGEgPyBzID8gT2JqZWN0LmtleXMobykuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvW2VdID09PSBzICYmIChuID0gZSwgITApXG4gICAgICAgICAgICAgIH0pID8gbiA6IG5ldyBFcnJvcihcIkl0J3MgYnJva2VuXCIpIDogeCA6IG51bGwgPT0gcyA/IHggOiBkZShzKSwgZVxuICAgICAgICAgICAgfSwge30pLCBhLmFuaW0gJiYgKGUuYW5pbWF0aW9uID0gZGUodS5hbmltYXRpb24pKSwgZSkgOiB0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IHIobiksXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcbiAgICAgICAgfSlcbiAgICAgIH0pLCBbXCJzdGFydExhYmVsXCIsIFwiZW5kTGFiZWxcIiwgXCJtaWRkbGVMYWJlbFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShZZS5wcm90b3R5cGUsIGUsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlID0gS1t0aGlzLl9pZF0sXG4gICAgICAgICAgICAgIHQgPSBlLm9wdGlvbnM7XG4gICAgICAgICAgICByZXR1cm4gdC5sYWJlbFNFTVtuXSAmJiAhZS5vcHRpb25Jc0F0dGFjaC5sYWJlbFNFTVtuXSA/ICRbdC5sYWJlbFNFTVtuXS5faWRdLmh0bWwgOiB0LmxhYmVsU0VNW25dIHx8IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogcihlKSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiAhMFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KCksIFllLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBaZShLW3RoaXMuX2lkXSwgZSksIHRoaXNcbiAgICB9LCBZZS5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gRGUoS1t0aGlzLl9pZF0sIHtcbiAgICAgICAgcG9zaXRpb246ICEwXG4gICAgICB9KSwgdGhpc1xuICAgIH0sIFllLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCA9IEtbdGhpcy5faWRdLFxuICAgICAgICBuID0gdC5jdXJTdGF0cztcbiAgICAgIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0ID0gZSArIFwiX2FuaW1JZFwiO1xuICAgICAgICBuW3RdICYmIGMucmVtb3ZlKG5bdF0pXG4gICAgICB9KSwgbi5zaG93X2FuaW1JZCAmJiBjLnJlbW92ZShuLnNob3dfYW5pbUlkKSwgdC5hdHRhY2htZW50cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgVWUodCwgZSlcbiAgICAgIH0pLCB0LmJhc2VXaW5kb3cgJiYgdC5zdmcgJiYgdC5iYXNlV2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodC5zdmcpLCBkZWxldGUgS1t0aGlzLl9pZF1cbiAgICB9LCBZZS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gamUoS1t0aGlzLl9pZF0sICEwLCBlLCB0KSwgdGhpc1xuICAgIH0sIFllLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBqZShLW3RoaXMuX2lkXSwgITEsIGUsIHQpLCB0aGlzXG4gICAgfSwgbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICB0ICYmICRbdC5faWRdICYmICh0LmJvdW5kVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgVWUoZS5wcm9wcywgdCwgITApXG4gICAgICB9KSwgdC5jb25mLnJlbW92ZSAmJiB0LmNvbmYucmVtb3ZlKHQpLCBkZWxldGUgJFt0Ll9pZF0pXG4gICAgfSwgUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICB2YXIgbiwgYSA9IHtcbiAgICAgICAgICAgIGNvbmY6IGUsXG4gICAgICAgICAgICBjdXJTdGF0czoge30sXG4gICAgICAgICAgICBhcGxTdGF0czoge30sXG4gICAgICAgICAgICBib3VuZFRhcmdldHM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpID0ge307XG4gICAgICAgIGUuYXJnT3B0aW9ucy5ldmVyeShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAhKCF0Lmxlbmd0aCB8fCAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS50eXBlID8gdHlwZW9mIHRbMF0gIT09IGUudHlwZSA6IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS50eXBlIHx8ICFlLnR5cGUodFswXSkpKSAmJiAoaVtlLm9wdGlvbk5hbWVdID0gdC5zaGlmdCgpLCAhMClcbiAgICAgICAgfSksIG4gPSB0Lmxlbmd0aCAmJiBrKHRbMF0pID8gZGUodFswXSkgOiB7fSwgT2JqZWN0LmtleXMoaSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG5bZV0gPSBpW2VdXG4gICAgICAgIH0pLCBlLnN0YXRzICYmIChUZShhLmN1clN0YXRzLCBlLnN0YXRzKSwgVGUoYS5hcGxTdGF0cywgZS5zdGF0cykpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaWRcIiwge1xuICAgICAgICAgIHZhbHVlOiArK2VlXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc1JlbW92ZWRcIiwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEkW3RoaXMuX2lkXVxuICAgICAgICAgIH1cbiAgICAgICAgfSksIGEuX2lkID0gdGhpcy5faWQsIGUuaW5pdCAmJiAhZS5pbml0KGEsIG4pIHx8ICgkW3RoaXMuX2lkXSA9IGEpXG4gICAgICB9XG4gICAgICByZXR1cm4gZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMsXG4gICAgICAgICAgbiA9ICRbdC5faWRdO1xuICAgICAgICBuICYmIChuLmJvdW5kVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBuLmNvbmYucmVtb3ZlT3B0aW9uKG4sIGUpXG4gICAgICAgIH0pLCBMZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUgPSAkW3QuX2lkXTtcbiAgICAgICAgICBlICYmIChjb25zb2xlLmVycm9yKFwiTGVhZGVyTGluZUF0dGFjaG1lbnQgd2FzIG5vdCByZW1vdmVkIGJ5IHJlbW92ZU9wdGlvblwiKSwgbyhlKSlcbiAgICAgICAgfSkpXG4gICAgICB9LCBlXG4gICAgfSgpLCB3aW5kb3cuTGVhZGVyTGluZUF0dGFjaG1lbnQgPSBTLCBfID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgUyAmJiAoIShlLmlzUmVtb3ZlZCB8fCB0ICYmICRbZS5faWRdLmNvbmYudHlwZSAhPT0gdCkgfHwgbnVsbClcbiAgICB9LCB5ID0ge1xuICAgICAgcG9pbnRBbmNob3I6IHtcbiAgICAgICAgdHlwZTogXCJhbmNob3JcIixcbiAgICAgICAgYXJnT3B0aW9uczogW3tcbiAgICAgICAgICBvcHRpb25OYW1lOiBcImVsZW1lbnRcIixcbiAgICAgICAgICB0eXBlOiB5ZVxuICAgICAgICB9XSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gZS5lbGVtZW50ID0geS5wb2ludEFuY2hvci5jaGVja0VsZW1lbnQodC5lbGVtZW50KSwgZS54ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQodC54LCAhMCkgfHwgWy41LCAhMF0sIGUueSA9IHkucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KHQueSwgITApIHx8IFsuNSwgITBdLCAhMFxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVPcHRpb246IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzLFxuICAgICAgICAgICAgYSA9IHt9LFxuICAgICAgICAgICAgaSA9IGUuZWxlbWVudCxcbiAgICAgICAgICAgIG8gPSBuLm9wdGlvbnMuYW5jaG9yU0VbXCJzdGFydFwiID09PSB0Lm9wdGlvbk5hbWUgPyAxIDogMF07XG4gICAgICAgICAgaSA9PT0gbyAmJiAoaSA9IG8gPT09IGRvY3VtZW50LmJvZHkgPyBuZXcgUyh5LnBvaW50QW5jaG9yLCBbaV0pIDogZG9jdW1lbnQuYm9keSksIGFbdC5vcHRpb25OYW1lXSA9IGksIFplKG4sIGEpXG4gICAgICAgIH0sXG4gICAgICAgIGdldEJCb3hOZXN0OiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuID0gZ2UoZS5lbGVtZW50LCB0LmJhc2VXaW5kb3cpLFxuICAgICAgICAgICAgYSA9IG4ud2lkdGgsXG4gICAgICAgICAgICBpID0gbi5oZWlnaHQ7XG4gICAgICAgICAgcmV0dXJuIG4ud2lkdGggPSBuLmhlaWdodCA9IDAsIG4ubGVmdCA9IG4ucmlnaHQgPSBuLmxlZnQgKyBlLnhbMF0gKiAoZS54WzFdID8gYSA6IDEpLCBuLnRvcCA9IG4uYm90dG9tID0gbi50b3AgKyBlLnlbMF0gKiAoZS55WzFdID8gaSA6IDEpLCBuXG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlUGVyY2VudDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiwgYSwgaSA9ICExO1xuICAgICAgICAgIHJldHVybiB3KGUpID8gYSA9IGUgOiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChuID0gdS5leGVjKGUpKSAmJiBuWzJdICYmIChpID0gMCAhPT0gKGEgPSBwYXJzZUZsb2F0KG5bMV0pIC8gMTAwKSksIG51bGwgIT0gYSAmJiAodCB8fCAwIDw9IGEpID8gW2EsIGldIDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBjaGVja0VsZW1lbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKG51bGwgPT0gZSkgZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgZWxzZSBpZiAoIXllKGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJgZWxlbWVudGAgbXVzdCBiZSBFbGVtZW50XCIpO1xuICAgICAgICAgIHJldHVybiBlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcmVhQW5jaG9yOiB7XG4gICAgICAgIHR5cGU6IFwiYW5jaG9yXCIsXG4gICAgICAgIGFyZ09wdGlvbnM6IFt7XG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJlbGVtZW50XCIsXG4gICAgICAgICAgdHlwZTogeWVcbiAgICAgICAgfSwge1xuICAgICAgICAgIG9wdGlvbk5hbWU6IFwic2hhcGVcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH1dLFxuICAgICAgICBzdGF0czoge1xuICAgICAgICAgIGNvbG9yOiB7fSxcbiAgICAgICAgICBzdHJva2VXaWR0aDoge30sXG4gICAgICAgICAgZWxlbWVudFdpZHRoOiB7fSxcbiAgICAgICAgICBlbGVtZW50SGVpZ2h0OiB7fSxcbiAgICAgICAgICBlbGVtZW50TGVmdDoge30sXG4gICAgICAgICAgZWxlbWVudFRvcDoge30sXG4gICAgICAgICAgcGF0aExpc3RSZWw6IHt9LFxuICAgICAgICAgIGJCb3hSZWw6IHt9LFxuICAgICAgICAgIHBhdGhEYXRhOiB7fSxcbiAgICAgICAgICB2aWV3Qm94QkJveDoge1xuICAgICAgICAgICAgaGFzUHJvcHM6ICEwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXNoTGVuOiB7fSxcbiAgICAgICAgICBkYXNoR2FwOiB7fVxuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoaSwgZSkge1xuICAgICAgICAgIHZhciB0LCBuLCBhLCBvID0gW107XG4gICAgICAgICAgcmV0dXJuIGkuZWxlbWVudCA9IHkucG9pbnRBbmNob3IuY2hlY2tFbGVtZW50KGUuZWxlbWVudCksIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUuY29sb3IgJiYgKGkuY29sb3IgPSBlLmNvbG9yLnRyaW0oKSksIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUuZmlsbENvbG9yICYmIChpLmZpbGwgPSBlLmZpbGxDb2xvci50cmltKCkpLCB3KGUuc2l6ZSkgJiYgMCA8PSBlLnNpemUgJiYgKGkuc2l6ZSA9IGUuc2l6ZSksIGUuZGFzaCAmJiAoaS5kYXNoID0gITAsIHcoZS5kYXNoLmxlbikgJiYgMCA8IGUuZGFzaC5sZW4gJiYgKGkuZGFzaExlbiA9IGUuZGFzaC5sZW4pLCB3KGUuZGFzaC5nYXApICYmIDAgPCBlLmRhc2guZ2FwICYmIChpLmRhc2hHYXAgPSBlLmRhc2guZ2FwKSksIFwiY2lyY2xlXCIgPT09IGUuc2hhcGUgPyBpLnNoYXBlID0gZS5zaGFwZSA6IFwicG9seWdvblwiID09PSBlLnNoYXBlICYmIEFycmF5LmlzQXJyYXkoZS5wb2ludHMpICYmIDMgPD0gZS5wb2ludHMubGVuZ3RoICYmIGUucG9pbnRzLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuICEoISh0LnggPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlWzBdLCAhMCkpIHx8ICEodC55ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZVsxXSwgITApKSkgJiYgKG8ucHVzaCh0KSwgKHQueFsxXSB8fCB0LnlbMV0pICYmIChpLmhhc1JhdGlvID0gITApLCAhMClcbiAgICAgICAgICB9KSA/IChpLnNoYXBlID0gZS5zaGFwZSwgaS5wb2ludHMgPSBvKSA6IChpLnNoYXBlID0gXCJyZWN0XCIsIGkucmFkaXVzID0gdyhlLnJhZGl1cykgJiYgMCA8PSBlLnJhZGl1cyA/IGUucmFkaXVzIDogMCksIFwicmVjdFwiICE9PSBpLnNoYXBlICYmIFwiY2lyY2xlXCIgIT09IGkuc2hhcGUgfHwgKGkueCA9IHkucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KGUueCwgITApIHx8IFstLjA1LCAhMF0sIGkueSA9IHkucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KGUueSwgITApIHx8IFstLjA1LCAhMF0sIGkud2lkdGggPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlLndpZHRoKSB8fCBbMS4xLCAhMF0sIGkuaGVpZ2h0ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZS5oZWlnaHQpIHx8IFsxLjEsICEwXSwgKGkueFsxXSB8fCBpLnlbMV0gfHwgaS53aWR0aFsxXSB8fCBpLmhlaWdodFsxXSkgJiYgKGkuaGFzUmF0aW8gPSAhMCkpLCB0ID0gaS5lbGVtZW50Lm93bmVyRG9jdW1lbnQsIGkuc3ZnID0gbiA9IHQuY3JlYXRlRWxlbWVudE5TKGIsIFwic3ZnXCIpLCBuLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLWFyZWFBbmNob3JcIiwgbi52aWV3Qm94LmJhc2VWYWwgfHwgbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDAgMFwiKSwgaS5wYXRoID0gbi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInBhdGhcIikpLCBpLnBhdGguc3R5bGUuZmlsbCA9IGkuZmlsbCB8fCBcIm5vbmVcIiwgaS5pc1Nob3duID0gITEsIG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsIHQuYm9keS5hcHBlbmRDaGlsZChuKSwgUmUoYSA9IHQuZGVmYXVsdFZpZXcpLCBpLmJvZHlPZmZzZXQgPSBCZShhKSwgaS51cGRhdGVDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlLCB0ID0gaS5jdXJTdGF0cyxcbiAgICAgICAgICAgICAgbiA9IGkuYXBsU3RhdHMsXG4gICAgICAgICAgICAgIGEgPSBpLmJvdW5kVGFyZ2V0cy5sZW5ndGggPyBpLmJvdW5kVGFyZ2V0c1swXS5wcm9wcy5jdXJTdGF0cyA6IG51bGw7XG4gICAgICAgICAgICB0LmNvbG9yID0gZSA9IGkuY29sb3IgfHwgKGEgPyBhLmxpbmVfY29sb3IgOiBwZS5saW5lQ29sb3IpLCBXZShpLCBuLCBcImNvbG9yXCIsIGUpICYmIChpLnBhdGguc3R5bGUuc3Ryb2tlID0gZSlcbiAgICAgICAgICB9LCBpLnVwZGF0ZVNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBHZShpLCBpLmJvdW5kVGFyZ2V0cy5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhMCA9PT0gZS5wcm9wcy5pc1Nob3duXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9LCAhMFxuICAgICAgICB9LFxuICAgICAgICBiaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuID0gdC5wcm9wcztcbiAgICAgICAgICByZXR1cm4gZS5jb2xvciB8fCBJZShuLCBcImN1cl9saW5lX2NvbG9yXCIsIGUudXBkYXRlQ29sb3IpLCBJZShuLCBcInN2Z1Nob3dcIiwgZS51cGRhdGVTaG93KSwgTGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS51cGRhdGVDb2xvcigpLCBlLnVwZGF0ZVNob3coKVxuICAgICAgICAgIH0pLCAhMFxuICAgICAgICB9LFxuICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzO1xuICAgICAgICAgIGUuY29sb3IgfHwgQ2UobiwgXCJjdXJfbGluZV9jb2xvclwiLCBlLnVwZGF0ZUNvbG9yKSwgQ2UobiwgXCJzdmdTaG93XCIsIGUudXBkYXRlU2hvdyksIDEgPCBlLmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgTGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS51cGRhdGVDb2xvcigpLCBlLnVwZGF0ZVNob3coKSwgeS5hcmVhQW5jaG9yLnVwZGF0ZShlKSAmJiBlLmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIERlKGUucHJvcHMsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogITBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlT3B0aW9uOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHkucG9pbnRBbmNob3IucmVtb3ZlT3B0aW9uKGUsIHQpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB0LmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgKGNvbnNvbGUuZXJyb3IoXCJMZWFkZXJMaW5lQXR0YWNobWVudCB3YXMgbm90IHVuYm91bmQgYnkgcmVtb3ZlXCIpLCB0LmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB5LmFyZWFBbmNob3IudW5iaW5kKHQsIGUpXG4gICAgICAgICAgfSkpLCB0LnN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQuc3ZnKVxuICAgICAgICB9LFxuICAgICAgICBnZXRTdHJva2VXaWR0aDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4geS5hcmVhQW5jaG9yLnVwZGF0ZShlKSAmJiAxIDwgZS5ib3VuZFRhcmdldHMubGVuZ3RoICYmIExlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgZS5wcm9wcyAhPT0gdCAmJiBEZShlLnByb3BzLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICEwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLCBlLmN1clN0YXRzLnN0cm9rZVdpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldFBhdGhEYXRhOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuID0gZ2UoZS5lbGVtZW50LCB0LmJhc2VXaW5kb3cpO1xuICAgICAgICAgIHJldHVybiB3ZShlLmN1clN0YXRzLnBhdGhMaXN0UmVsLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS54ICs9IG4ubGVmdCwgZS55ICs9IG4udG9wXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QkJveE5lc3Q6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4gPSBnZShlLmVsZW1lbnQsIHQuYmFzZVdpbmRvdyksXG4gICAgICAgICAgICBhID0gZS5jdXJTdGF0cy5iQm94UmVsO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBhLmxlZnQgKyBuLmxlZnQsXG4gICAgICAgICAgICB0b3A6IGEudG9wICsgbi50b3AsXG4gICAgICAgICAgICByaWdodDogYS5yaWdodCArIG4ubGVmdCxcbiAgICAgICAgICAgIGJvdHRvbTogYS5ib3R0b20gKyBuLnRvcCxcbiAgICAgICAgICAgIHdpZHRoOiBhLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBhLmhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHZhciBhLCBuLCBpLCBvLCBlLCBsLCByLCBzLCB1LCBoLCBwLCBjLCBkLCBmLCB5LCBTLCBtLCBnLCBfLCB2LCBFLCB4LCBiLCBrLCB3LCBPLCBNLCBJLCBDLCBMLCBBLCBWLCBQID0gdC5jdXJTdGF0cyxcbiAgICAgICAgICAgIE4gPSB0LmFwbFN0YXRzLFxuICAgICAgICAgICAgVCA9IHQuYm91bmRUYXJnZXRzLmxlbmd0aCA/IHQuYm91bmRUYXJnZXRzWzBdLnByb3BzLmN1clN0YXRzIDogbnVsbCxcbiAgICAgICAgICAgIFcgPSB7fTtcbiAgICAgICAgICBpZiAoVy5zdHJva2VXaWR0aCA9IFdlKHQsIFAsIFwic3Ryb2tlV2lkdGhcIiwgbnVsbCAhPSB0LnNpemUgPyB0LnNpemUgOiBUID8gVC5saW5lX3N0cm9rZVdpZHRoIDogcGUubGluZVNpemUpLCBhID0gU2UodC5lbGVtZW50KSwgVy5lbGVtZW50V2lkdGggPSBXZSh0LCBQLCBcImVsZW1lbnRXaWR0aFwiLCBhLndpZHRoKSwgVy5lbGVtZW50SGVpZ2h0ID0gV2UodCwgUCwgXCJlbGVtZW50SGVpZ2h0XCIsIGEuaGVpZ2h0KSwgVy5lbGVtZW50TGVmdCA9IFdlKHQsIFAsIFwiZWxlbWVudExlZnRcIiwgYS5sZWZ0KSwgVy5lbGVtZW50VG9wID0gV2UodCwgUCwgXCJlbGVtZW50VG9wXCIsIGEudG9wKSwgVy5zdHJva2VXaWR0aCB8fCB0Lmhhc1JhdGlvICYmIChXLmVsZW1lbnRXaWR0aCB8fCBXLmVsZW1lbnRIZWlnaHQpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHQuc2hhcGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJyZWN0XCI6XG4gICAgICAgICAgICAgICh2ID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IHQueFswXSAqICh0LnhbMV0gPyBhLndpZHRoIDogMSksXG4gICAgICAgICAgICAgICAgdG9wOiB0LnlbMF0gKiAodC55WzFdID8gYS5oZWlnaHQgOiAxKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogdC53aWR0aFswXSAqICh0LndpZHRoWzFdID8gYS53aWR0aCA6IDEpLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdC5oZWlnaHRbMF0gKiAodC5oZWlnaHRbMV0gPyBhLmhlaWdodCA6IDEpXG4gICAgICAgICAgICAgIH0pLnJpZ2h0ID0gdi5sZWZ0ICsgdi53aWR0aCwgdi5ib3R0b20gPSB2LnRvcCArIHYuaGVpZ2h0LCBrID0gUC5zdHJva2VXaWR0aCAvIDIsIHggPSAoYiA9IE1hdGgubWluKHYud2lkdGgsIHYuaGVpZ2h0KSkgPyBiIC8gMiAqIE1hdGguU1FSVDIgKyBrIDogMCwgKEUgPSB0LnJhZGl1cyA/IHQucmFkaXVzIDw9IHggPyB0LnJhZGl1cyA6IHggOiAwKSA/IChPID0gRSAtICh3ID0gKEUgLSBrKSAvIE1hdGguU1FSVDIpLCBJID0gRSAqIFUsIE0gPSBbe1xuICAgICAgICAgICAgICAgIHg6IHYubGVmdCAtIE8sXG4gICAgICAgICAgICAgICAgeTogdi50b3AgKyB3XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgKyB3LFxuICAgICAgICAgICAgICAgIHk6IHYudG9wIC0gT1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCAtIHcsXG4gICAgICAgICAgICAgICAgeTogdi50b3AgLSBPXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB4OiB2LnJpZ2h0ICsgTyxcbiAgICAgICAgICAgICAgICB5OiB2LnRvcCArIHdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgKyBPLFxuICAgICAgICAgICAgICAgIHk6IHYuYm90dG9tIC0gd1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCAtIHcsXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gKyBPXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgKyB3LFxuICAgICAgICAgICAgICAgIHk6IHYuYm90dG9tICsgT1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0IC0gTyxcbiAgICAgICAgICAgICAgICB5OiB2LmJvdHRvbSAtIHdcbiAgICAgICAgICAgICAgfV0sIFAucGF0aExpc3RSZWwgPSBbXG4gICAgICAgICAgICAgICAgW01bMF0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IE1bMF0ueCxcbiAgICAgICAgICAgICAgICAgIHk6IE1bMF0ueSAtIElcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB4OiBNWzFdLnggLSBJLFxuICAgICAgICAgICAgICAgICAgeTogTVsxXS55XG4gICAgICAgICAgICAgICAgfSwgTVsxXV1cbiAgICAgICAgICAgICAgXSwgTVsxXS54ICE9PSBNWzJdLnggJiYgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzFdLCBNWzJdXSksIFAucGF0aExpc3RSZWwucHVzaChbTVsyXSwge1xuICAgICAgICAgICAgICAgIHg6IE1bMl0ueCArIEksXG4gICAgICAgICAgICAgICAgeTogTVsyXS55XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB4OiBNWzNdLngsXG4gICAgICAgICAgICAgICAgeTogTVszXS55IC0gSVxuICAgICAgICAgICAgICB9LCBNWzNdXSksIE1bM10ueSAhPT0gTVs0XS55ICYmIFAucGF0aExpc3RSZWwucHVzaChbTVszXSwgTVs0XV0pLCBQLnBhdGhMaXN0UmVsLnB1c2goW01bNF0sIHtcbiAgICAgICAgICAgICAgICB4OiBNWzRdLngsXG4gICAgICAgICAgICAgICAgeTogTVs0XS55ICsgSVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogTVs1XS54ICsgSSxcbiAgICAgICAgICAgICAgICB5OiBNWzVdLnlcbiAgICAgICAgICAgICAgfSwgTVs1XV0pLCBNWzVdLnggIT09IE1bNl0ueCAmJiBQLnBhdGhMaXN0UmVsLnB1c2goW01bNV0sIE1bNl1dKSwgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzZdLCB7XG4gICAgICAgICAgICAgICAgeDogTVs2XS54IC0gSSxcbiAgICAgICAgICAgICAgICB5OiBNWzZdLnlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHg6IE1bN10ueCxcbiAgICAgICAgICAgICAgICB5OiBNWzddLnkgKyBJXG4gICAgICAgICAgICAgIH0sIE1bN11dKSwgTVs3XS55ICE9PSBNWzBdLnkgJiYgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzddLCBNWzBdXSksIFAucGF0aExpc3RSZWwucHVzaChbXSksIE8gPSBFIC0gdyArIFAuc3Ryb2tlV2lkdGggLyAyLCBNID0gW3tcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgLSBPLFxuICAgICAgICAgICAgICAgIHk6IHYudG9wIC0gT1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCArIE8sXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gKyBPXG4gICAgICAgICAgICAgIH1dKSA6IChPID0gUC5zdHJva2VXaWR0aCAvIDIsIE0gPSBbe1xuICAgICAgICAgICAgICAgIHg6IHYubGVmdCAtIE8sXG4gICAgICAgICAgICAgICAgeTogdi50b3AgLSBPXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB4OiB2LnJpZ2h0ICsgTyxcbiAgICAgICAgICAgICAgICB5OiB2LmJvdHRvbSArIE9cbiAgICAgICAgICAgICAgfV0sIFAucGF0aExpc3RSZWwgPSBbXG4gICAgICAgICAgICAgICAgW01bMF0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IE1bMV0ueCxcbiAgICAgICAgICAgICAgICAgIHk6IE1bMF0ueVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICB4OiBNWzFdLngsXG4gICAgICAgICAgICAgICAgICB5OiBNWzBdLnlcbiAgICAgICAgICAgICAgICB9LCBNWzFdXSxcbiAgICAgICAgICAgICAgICBbTVsxXSwge1xuICAgICAgICAgICAgICAgICAgeDogTVswXS54LFxuICAgICAgICAgICAgICAgICAgeTogTVsxXS55XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgXSwgTSA9IFt7XG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0IC0gUC5zdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiB2LnRvcCAtIFAuc3Ryb2tlV2lkdGhcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgKyBQLnN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IHYuYm90dG9tICsgUC5zdHJva2VXaWR0aFxuICAgICAgICAgICAgICB9XSksIFAuYkJveFJlbCA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNWzBdLngsXG4gICAgICAgICAgICAgICAgdG9wOiBNWzBdLnksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IE1bMV0ueCxcbiAgICAgICAgICAgICAgICBib3R0b206IE1bMV0ueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogTVsxXS54IC0gTVswXS54LFxuICAgICAgICAgICAgICAgIGhlaWdodDogTVsxXS55IC0gTVswXS55XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgICAgICAociA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiB0LnhbMF0gKiAodC54WzFdID8gYS53aWR0aCA6IDEpLFxuICAgICAgICAgICAgICAgIHRvcDogdC55WzBdICogKHQueVsxXSA/IGEuaGVpZ2h0IDogMSksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHQud2lkdGhbMF0gKiAodC53aWR0aFsxXSA/IGEud2lkdGggOiAxKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHQuaGVpZ2h0WzBdICogKHQuaGVpZ2h0WzFdID8gYS5oZWlnaHQgOiAxKVxuICAgICAgICAgICAgICB9KS53aWR0aCB8fCByLmhlaWdodCB8fCAoci53aWR0aCA9IHIuaGVpZ2h0ID0gMTApLCByLndpZHRoIHx8IChyLndpZHRoID0gci5oZWlnaHQpLCByLmhlaWdodCB8fCAoci5oZWlnaHQgPSByLndpZHRoKSwgci5yaWdodCA9IHIubGVmdCArIHIud2lkdGgsIHIuYm90dG9tID0gci50b3AgKyByLmhlaWdodCwgcyA9IHIubGVmdCArIHIud2lkdGggLyAyLCB1ID0gci50b3AgKyByLmhlaWdodCAvIDIsIGYgPSBQLnN0cm9rZVdpZHRoIC8gMiwgeSA9IHIud2lkdGggLyAyLCBTID0gci5oZWlnaHQgLyAyLCBoID0geSAqIE1hdGguU1FSVDIgKyBmLCBwID0gUyAqIE1hdGguU1FSVDIgKyBmLCBjID0gaCAqIFUsIGQgPSBwICogVSwgXyA9IFt7XG4gICAgICAgICAgICAgICAgeDogcyAtIGgsXG4gICAgICAgICAgICAgICAgeTogdVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogcyxcbiAgICAgICAgICAgICAgICB5OiB1IC0gcFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogcyArIGgsXG4gICAgICAgICAgICAgICAgeTogdVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgeDogcyxcbiAgICAgICAgICAgICAgICB5OiB1ICsgcFxuICAgICAgICAgICAgICB9XSwgUC5wYXRoTGlzdFJlbCA9IFtcbiAgICAgICAgICAgICAgICBbX1swXSwge1xuICAgICAgICAgICAgICAgICAgeDogX1swXS54LFxuICAgICAgICAgICAgICAgICAgeTogX1swXS55IC0gZFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IF9bMV0ueCAtIGMsXG4gICAgICAgICAgICAgICAgICB5OiBfWzFdLnlcbiAgICAgICAgICAgICAgICB9LCBfWzFdXSxcbiAgICAgICAgICAgICAgICBbX1sxXSwge1xuICAgICAgICAgICAgICAgICAgeDogX1sxXS54ICsgYyxcbiAgICAgICAgICAgICAgICAgIHk6IF9bMV0ueVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IF9bMl0ueCxcbiAgICAgICAgICAgICAgICAgIHk6IF9bMl0ueSAtIGRcbiAgICAgICAgICAgICAgICB9LCBfWzJdXSxcbiAgICAgICAgICAgICAgICBbX1syXSwge1xuICAgICAgICAgICAgICAgICAgeDogX1syXS54LFxuICAgICAgICAgICAgICAgICAgeTogX1syXS55ICsgZFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IF9bM10ueCArIGMsXG4gICAgICAgICAgICAgICAgICB5OiBfWzNdLnlcbiAgICAgICAgICAgICAgICB9LCBfWzNdXSxcbiAgICAgICAgICAgICAgICBbX1szXSwge1xuICAgICAgICAgICAgICAgICAgeDogX1szXS54IC0gYyxcbiAgICAgICAgICAgICAgICAgIHk6IF9bM10ueVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IF9bMF0ueCxcbiAgICAgICAgICAgICAgICAgIHk6IF9bMF0ueSArIGRcbiAgICAgICAgICAgICAgICB9LCBfWzBdXSxcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICBdLCBtID0gaCAtIHkgKyBQLnN0cm9rZVdpZHRoIC8gMiwgZyA9IHAgLSBTICsgUC5zdHJva2VXaWR0aCAvIDIsIF8gPSBbe1xuICAgICAgICAgICAgICAgIHg6IHIubGVmdCAtIG0sXG4gICAgICAgICAgICAgICAgeTogci50b3AgLSBnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB4OiByLnJpZ2h0ICsgbSxcbiAgICAgICAgICAgICAgICB5OiByLmJvdHRvbSArIGdcbiAgICAgICAgICAgICAgfV0sIFAuYkJveFJlbCA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBfWzBdLngsXG4gICAgICAgICAgICAgICAgdG9wOiBfWzBdLnksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IF9bMV0ueCxcbiAgICAgICAgICAgICAgICBib3R0b206IF9bMV0ueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogX1sxXS54IC0gX1swXS54LFxuICAgICAgICAgICAgICAgIGhlaWdodDogX1sxXS55IC0gX1swXS55XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcbiAgICAgICAgICAgICAgdC5wb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gZS54WzBdICogKGUueFsxXSA/IGEud2lkdGggOiAxKSxcbiAgICAgICAgICAgICAgICAgIG4gPSBlLnlbMF0gKiAoZS55WzFdID8gYS5oZWlnaHQgOiAxKTtcbiAgICAgICAgICAgICAgICBpID8gKHQgPCBpLmxlZnQgJiYgKGkubGVmdCA9IHQpLCB0ID4gaS5yaWdodCAmJiAoaS5yaWdodCA9IHQpLCBuIDwgaS50b3AgJiYgKGkudG9wID0gbiksIG4gPiBpLmJvdHRvbSAmJiAoaS5ib3R0b20gPSBuKSkgOiBpID0ge1xuICAgICAgICAgICAgICAgICAgbGVmdDogdCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0LFxuICAgICAgICAgICAgICAgICAgdG9wOiBuLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiBuXG4gICAgICAgICAgICAgICAgfSwgbyA/IFAucGF0aExpc3RSZWwucHVzaChbbywge1xuICAgICAgICAgICAgICAgICAgeDogdCxcbiAgICAgICAgICAgICAgICAgIHk6IG5cbiAgICAgICAgICAgICAgICB9XSkgOiBQLnBhdGhMaXN0UmVsID0gW10sIG8gPSB7XG4gICAgICAgICAgICAgICAgICB4OiB0LFxuICAgICAgICAgICAgICAgICAgeTogblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIFAucGF0aExpc3RSZWwucHVzaChbXSksIGUgPSBQLnN0cm9rZVdpZHRoIC8gMiwgbCA9IFt7XG4gICAgICAgICAgICAgICAgeDogaS5sZWZ0IC0gZSxcbiAgICAgICAgICAgICAgICB5OiBpLnRvcCAtIGVcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHg6IGkucmlnaHQgKyBlLFxuICAgICAgICAgICAgICAgIHk6IGkuYm90dG9tICsgZVxuICAgICAgICAgICAgICB9XSwgUC5iQm94UmVsID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGxbMF0ueCxcbiAgICAgICAgICAgICAgICB0b3A6IGxbMF0ueSxcbiAgICAgICAgICAgICAgICByaWdodDogbFsxXS54LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogbFsxXS55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBsWzFdLnggLSBsWzBdLngsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBsWzFdLnkgLSBsWzBdLnlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVy5wYXRoTGlzdFJlbCA9IFcuYkJveFJlbCA9ICEwXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoVy5wYXRoTGlzdFJlbCB8fCBXLmVsZW1lbnRMZWZ0IHx8IFcuZWxlbWVudFRvcCkgJiYgKFAucGF0aERhdGEgPSB3ZShQLnBhdGhMaXN0UmVsLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS54ICs9IGEubGVmdCwgZS55ICs9IGEudG9wXG4gICAgICAgICAgfSkpLCBXZSh0LCBOLCBcInN0cm9rZVdpZHRoXCIsIG4gPSBQLnN0cm9rZVdpZHRoKSAmJiAodC5wYXRoLnN0eWxlLnN0cm9rZVdpZHRoID0gbiArIFwicHhcIiksIE1lKG4gPSBQLnBhdGhEYXRhLCBOLnBhdGhEYXRhKSAmJiAodC5wYXRoLnNldFBhdGhEYXRhKG4pLCBOLnBhdGhEYXRhID0gbiwgVy5wYXRoRGF0YSA9ICEwKSwgdC5kYXNoICYmICghVy5wYXRoRGF0YSAmJiAoIVcuc3Ryb2tlV2lkdGggfHwgdC5kYXNoTGVuICYmIHQuZGFzaEdhcCkgfHwgKFAuZGFzaExlbiA9IHQuZGFzaExlbiB8fCAyICogUC5zdHJva2VXaWR0aCwgUC5kYXNoR2FwID0gdC5kYXNoR2FwIHx8IFAuc3Ryb2tlV2lkdGgpLCBXLmRhc2ggPSBXZSh0LCBOLCBcImRhc2hMZW5cIiwgUC5kYXNoTGVuKSB8fCBXLmRhc2gsIFcuZGFzaCA9IFdlKHQsIE4sIFwiZGFzaEdhcFwiLCBQLmRhc2hHYXApIHx8IFcuZGFzaCwgVy5kYXNoICYmICh0LnBhdGguc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gTi5kYXNoTGVuICsgXCIsXCIgKyBOLmRhc2hHYXApKSwgQyA9IFAudmlld0JveEJCb3gsIEwgPSBOLnZpZXdCb3hCQm94LCBBID0gdC5zdmcudmlld0JveC5iYXNlVmFsLCBWID0gdC5zdmcuc3R5bGUsIEMueCA9IFAuYkJveFJlbC5sZWZ0ICsgYS5sZWZ0LCBDLnkgPSBQLmJCb3hSZWwudG9wICsgYS50b3AsIEMud2lkdGggPSBQLmJCb3hSZWwud2lkdGgsIEMuaGVpZ2h0ID0gUC5iQm94UmVsLmhlaWdodCwgW1wieFwiLCBcInlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAobiA9IENbZV0pICE9PSBMW2VdICYmIChBW2VdID0gTFtlXSA9IG4sIFZbb2VbZV1dID0gbiArIChcInhcIiA9PT0gZSB8fCBcInlcIiA9PT0gZSA/IHQuYm9keU9mZnNldFtlXSA6IDApICsgXCJweFwiKVxuICAgICAgICAgIH0pLCBXLnN0cm9rZVdpZHRoIHx8IFcucGF0aExpc3RSZWwgfHwgVy5iQm94UmVsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb3VzZUhvdmVyQW5jaG9yOiB7XG4gICAgICAgIHR5cGU6IFwiYW5jaG9yXCIsXG4gICAgICAgIGFyZ09wdGlvbnM6IFt7XG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJlbGVtZW50XCIsXG4gICAgICAgICAgdHlwZTogeWVcbiAgICAgICAgfSwge1xuICAgICAgICAgIG9wdGlvbk5hbWU6IFwic2hvd0VmZmVjdE5hbWVcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH1dLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkMmxrZEdnOUlqSTBJaUJvWldsbmFIUTlJakkwSWo0OGNHOXNlV2R2YmlCd2IybHVkSE05SWpJMExEQWdNQ3c0SURnc01URWdNQ3d4T1NBMUxESTBJREV6TERFMklERTJMREkwSWlCbWFXeHNQU0pqYjNKaGJDSXZQand2YzNablBnPT0nKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIlwiLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ODFcIixcbiAgICAgICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyU3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibm9uZVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmFkZjhmXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgIHRvcDogMSxcbiAgICAgICAgICByaWdodDogMTUsXG4gICAgICAgICAgYm90dG9tOiAxLFxuICAgICAgICAgIGxlZnQ6IDJcbiAgICAgICAgfSxcbiAgICAgICAgbWluSGVpZ2h0OiAxNSxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgICAgICAgcmlnaHQ6IDIsXG4gICAgICAgICAgdG9wOiAyXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tncm91bmRTaXplOiB7XG4gICAgICAgICAgd2lkdGg6IDEyLFxuICAgICAgICAgIGhlaWdodDogMTJcbiAgICAgICAgfSxcbiAgICAgICAgZGlyS2V5czogW1xuICAgICAgICAgIFtcInRvcFwiLCBcIlRvcFwiXSxcbiAgICAgICAgICBbXCJyaWdodFwiLCBcIlJpZ2h0XCJdLFxuICAgICAgICAgIFtcImJvdHRvbVwiLCBcIkJvdHRvbVwiXSxcbiAgICAgICAgICBbXCJsZWZ0XCIsIFwiTGVmdFwiXVxuICAgICAgICBdLFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgIHZhciBvLCB0LCBlLCBuLCBsLCByLCBzLCB1LCBoLCBwLCBjLCBkID0geS5tb3VzZUhvdmVyQW5jaG9yLFxuICAgICAgICAgICAgZiA9IHt9O1xuICAgICAgICAgIGlmIChhLmVsZW1lbnQgPSB5LnBvaW50QW5jaG9yLmNoZWNrRWxlbWVudChpLmVsZW1lbnQpLCB1ID0gYS5lbGVtZW50LCAhKChwID0gdS5vd25lckRvY3VtZW50KSAmJiAoaCA9IHAuZGVmYXVsdFZpZXcpICYmIGguSFRNTEVsZW1lbnQgJiYgdSBpbnN0YW5jZW9mIGguSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJgZWxlbWVudGAgbXVzdCBiZSBIVE1MIGVsZW1lbnRcIik7XG4gICAgICAgICAgcmV0dXJuIGQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBkLmJhY2tncm91bmRTaXplLndpZHRoICsgXCJweCBcIiArIGQuYmFja2dyb3VuZFNpemUuaGVpZ2h0ICsgXCJweFwiLCBbXCJzdHlsZVwiLCBcImhvdmVyU3R5bGVcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG4gPSBkW2VdO1xuICAgICAgICAgICAgYVtlXSA9IE9iamVjdC5rZXlzKG4pLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICByZXR1cm4gZVt0XSA9IG5bdF0sIGVcbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgIH0pLCBcImlubGluZVwiID09PSAobyA9IGEuZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYS5lbGVtZW50LCBcIlwiKSkuZGlzcGxheSA/IGEuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCIgOiBcIm5vbmVcIiA9PT0gby5kaXNwbGF5ICYmIChhLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpLCB5Lm1vdXNlSG92ZXJBbmNob3IuZGlyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGVbMF0sXG4gICAgICAgICAgICAgIG4gPSBcInBhZGRpbmdcIiArIGVbMV07XG4gICAgICAgICAgICBwYXJzZUZsb2F0KG9bbl0pIDwgZC5wYWRkaW5nW3RdICYmIChhLnN0eWxlW25dID0gZC5wYWRkaW5nW3RdICsgXCJweFwiKVxuICAgICAgICAgIH0pLCBhLnN0eWxlLmRpc3BsYXkgJiYgKG4gPSBhLmVsZW1lbnQuc3R5bGUuZGlzcGxheSwgYS5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBhLnN0eWxlLmRpc3BsYXkpLCB5Lm1vdXNlSG92ZXJBbmNob3IuZGlyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IFwicGFkZGluZ1wiICsgZVsxXTtcbiAgICAgICAgICAgIGEuc3R5bGVbdF0gJiYgKGZbdF0gPSBhLmVsZW1lbnQuc3R5bGVbdF0sIGEuZWxlbWVudC5zdHlsZVt0XSA9IGEuc3R5bGVbdF0pXG4gICAgICAgICAgfSksIChlID0gYS5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS5oZWlnaHQgPCBkLm1pbkhlaWdodCAmJiAobGUgPyAoYyA9IGQubWluSGVpZ2h0LCBcImNvbnRlbnQtYm94XCIgPT09IG8uYm94U2l6aW5nID8gYyAtPSBwYXJzZUZsb2F0KG8uYm9yZGVyVG9wV2lkdGgpICsgcGFyc2VGbG9hdChvLmJvcmRlckJvdHRvbVdpZHRoKSArIHBhcnNlRmxvYXQoby5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoby5wYWRkaW5nQm90dG9tKSA6IFwicGFkZGluZy1ib3hcIiA9PT0gby5ib3hTaXppbmcgJiYgKGMgLT0gcGFyc2VGbG9hdChvLmJvcmRlclRvcFdpZHRoKSArIHBhcnNlRmxvYXQoby5ib3JkZXJCb3R0b21XaWR0aCkpLCBhLnN0eWxlLmhlaWdodCA9IGMgKyBcInB4XCIpIDogYS5zdHlsZS5oZWlnaHQgPSBwYXJzZUZsb2F0KG8uaGVpZ2h0KSArIChkLm1pbkhlaWdodCAtIGUuaGVpZ2h0KSArIFwicHhcIiksIGEuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gdWUgPyBlLndpZHRoIC0gZC5iYWNrZ3JvdW5kU2l6ZS53aWR0aCAtIGQuYmFja2dyb3VuZFBvc2l0aW9uLnJpZ2h0ICsgXCJweCBcIiArIGQuYmFja2dyb3VuZFBvc2l0aW9uLnRvcCArIFwicHhcIiA6IFwicmlnaHQgXCIgKyBkLmJhY2tncm91bmRQb3NpdGlvbi5yaWdodCArIFwicHggdG9wIFwiICsgZC5iYWNrZ3JvdW5kUG9zaXRpb24udG9wICsgXCJweFwiLCBhLnN0eWxlLmRpc3BsYXkgJiYgKGEuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbiksIHkubW91c2VIb3ZlckFuY2hvci5kaXJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gXCJwYWRkaW5nXCIgKyBlWzFdO1xuICAgICAgICAgICAgYS5zdHlsZVt0XSAmJiAoYS5lbGVtZW50LnN0eWxlW3RdID0gZlt0XSlcbiAgICAgICAgICB9KSwgW1wic3R5bGVcIiwgXCJob3ZlclN0eWxlXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gYVtlXSxcbiAgICAgICAgICAgICAgbiA9IGlbZV07XG4gICAgICAgICAgICBrKG4pICYmIE9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgbltlXSB8fCB3KG5bZV0pID8gdFtlXSA9IG5bZV0gOiBudWxsID09IG5bZV0gJiYgZGVsZXRlIHRbZV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaS5vblN3aXRjaCAmJiAocyA9IGkub25Td2l0Y2gpLCBpLnNob3dFZmZlY3ROYW1lICYmIGdbaS5zaG93RWZmZWN0TmFtZV0gJiYgKGEuc2hvd0VmZmVjdE5hbWUgPSBsID0gaS5zaG93RWZmZWN0TmFtZSksIHIgPSBpLmFuaW1PcHRpb25zLCBhLmVsbVN0eWxlID0gdCA9IGEuZWxlbWVudC5zdHlsZSwgYS5tb3VzZWVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGEuaG92ZXJTdHlsZVNhdmUgPSBkLmdldFN0eWxlcyh0LCBPYmplY3Qua2V5cyhhLmhvdmVyU3R5bGUpKSwgZC5zZXRTdHlsZXModCwgYS5ob3ZlclN0eWxlKSwgYS5ib3VuZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBqZShlLnByb3BzLCAhMCwgbCwgcilcbiAgICAgICAgICAgIH0pLCBzICYmIHMoZSlcbiAgICAgICAgICB9LCBhLm1vdXNlbGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZC5zZXRTdHlsZXModCwgYS5ob3ZlclN0eWxlU2F2ZSksIGEuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgamUoZS5wcm9wcywgITEsIGwsIHIpXG4gICAgICAgICAgICB9KSwgcyAmJiBzKGUpXG4gICAgICAgICAgfSwgITBcbiAgICAgICAgfSxcbiAgICAgICAgYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiwgYSwgaSwgbywgbDtcbiAgICAgICAgICByZXR1cm4gdC5wcm9wcy5zdmcgPyB5Lm1vdXNlSG92ZXJBbmNob3IubGxTaG93KHQucHJvcHMsICExLCBlLnNob3dFZmZlY3ROYW1lKSA6IExlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHkubW91c2VIb3ZlckFuY2hvci5sbFNob3codC5wcm9wcywgITEsIGUuc2hvd0VmZmVjdE5hbWUpXG4gICAgICAgICAgfSksIGUuZW5hYmxlZCB8fCAoZS5zdHlsZVNhdmUgPSB5Lm1vdXNlSG92ZXJBbmNob3IuZ2V0U3R5bGVzKGUuZWxtU3R5bGUsIE9iamVjdC5rZXlzKGUuc3R5bGUpKSwgeS5tb3VzZUhvdmVyQW5jaG9yLnNldFN0eWxlcyhlLmVsbVN0eWxlLCBlLnN0eWxlKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyID0gKG4gPSBlLmVsZW1lbnQsIGEgPSBlLm1vdXNlZW50ZXIsIGkgPSBlLm1vdXNlbGVhdmUsIFwib25tb3VzZWVudGVyXCIgaW4gbiAmJiBcIm9ubW91c2VsZWF2ZVwiIGluIG4gPyAobi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBhLCAhMSksIG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaSwgITEpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGEsICExKSwgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBpLCAhMSlcbiAgICAgICAgICB9KSA6IChjb25zb2xlLndhcm4oXCJtb3VzZWVudGVyIGFuZCBtb3VzZWxlYXZlIGV2ZW50cyBwb2x5ZmlsbCBpcyBlbmFibGVkLlwiKSwgbyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnJlbGF0ZWRUYXJnZXQgJiYgKGUucmVsYXRlZFRhcmdldCA9PT0gdGhpcyB8fCB0aGlzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUucmVsYXRlZFRhcmdldCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSkgfHwgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSwgbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG8pLCBsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucmVsYXRlZFRhcmdldCAmJiAoZS5yZWxhdGVkVGFyZ2V0ID09PSB0aGlzIHx8IHRoaXMuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZS5yZWxhdGVkVGFyZ2V0KSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKSB8fCBpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LCBuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBsKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG8sICExKSwgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbCwgITEpXG4gICAgICAgICAgfSkpLCBlLmVuYWJsZWQgPSAhMCksICEwXG4gICAgICAgIH0sXG4gICAgICAgIHVuYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBlLmVuYWJsZWQgJiYgZS5ib3VuZFRhcmdldHMubGVuZ3RoIDw9IDEgJiYgKGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigpLCB5Lm1vdXNlSG92ZXJBbmNob3Iuc2V0U3R5bGVzKGUuZWxtU3R5bGUsIGUuc3R5bGVTYXZlKSwgZS5lbmFibGVkID0gITEpLCB5Lm1vdXNlSG92ZXJBbmNob3IubGxTaG93KHQucHJvcHMsICEwLCBlLnNob3dFZmZlY3ROYW1lKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVPcHRpb246IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgeS5wb2ludEFuY2hvci5yZW1vdmVPcHRpb24oZSwgdClcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHQuYm91bmRUYXJnZXRzLmxlbmd0aCAmJiAoY29uc29sZS5lcnJvcihcIkxlYWRlckxpbmVBdHRhY2htZW50IHdhcyBub3QgdW5ib3VuZCBieSByZW1vdmVcIiksIHQuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHkubW91c2VIb3ZlckFuY2hvci51bmJpbmQodCwgZSlcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QkJveE5lc3Q6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgcmV0dXJuIGdlKGUuZWxlbWVudCwgdC5iYXNlV2luZG93KVxuICAgICAgICB9LFxuICAgICAgICBsbFNob3c6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgICAgZ1tuIHx8IGUuY3VyU3RhdHMuc2hvd19lZmZlY3RdLnN0b3AoZSwgITAsIHQpLCBlLmFwbFN0YXRzLnNob3dfb24gPSB0XG4gICAgICAgIH0sXG4gICAgICAgIGdldFN0eWxlczogZnVuY3Rpb24gKG4sIGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlW3RdID0gblt0XSwgZVxuICAgICAgICAgIH0sIHt9KVxuICAgICAgICB9LFxuICAgICAgICBzZXRTdHlsZXM6IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdFtlXSA9IG5bZV1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FwdGlvbkxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFwibGFiZWxcIixcbiAgICAgICAgYXJnT3B0aW9uczogW3tcbiAgICAgICAgICBvcHRpb25OYW1lOiBcInRleHRcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH1dLFxuICAgICAgICBzdGF0czoge1xuICAgICAgICAgIGNvbG9yOiB7fSxcbiAgICAgICAgICB4OiB7fSxcbiAgICAgICAgICB5OiB7fVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0U3R5bGVQcm9wczogW1wiZm9udEZhbWlseVwiLCBcImZvbnRTdHlsZVwiLCBcImZvbnRWYXJpYW50XCIsIFwiZm9udFdlaWdodFwiLCBcImZvbnRTdHJldGNoXCIsIFwiZm9udFNpemVcIiwgXCJmb250U2l6ZUFkanVzdFwiLCBcImtlcm5pbmdcIiwgXCJsZXR0ZXJTcGFjaW5nXCIsIFwid29yZFNwYWNpbmdcIiwgXCJ0ZXh0RGVjb3JhdGlvblwiXSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC50ZXh0ICYmICh1LnRleHQgPSB0LnRleHQudHJpbSgpKSwgISF1LnRleHQgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQuY29sb3IgJiYgKHUuY29sb3IgPSB0LmNvbG9yLnRyaW0oKSksIHUub3V0bGluZUNvbG9yID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5vdXRsaW5lQ29sb3IgPyB0Lm91dGxpbmVDb2xvci50cmltKCkgOiBcIiNmZmZcIiwgQXJyYXkuaXNBcnJheSh0Lm9mZnNldCkgJiYgdyh0Lm9mZnNldFswXSkgJiYgdyh0Lm9mZnNldFsxXSkgJiYgKHUub2Zmc2V0ID0ge1xuICAgICAgICAgICAgeDogdC5vZmZzZXRbMF0sXG4gICAgICAgICAgICB5OiB0Lm9mZnNldFsxXVxuICAgICAgICAgIH0pLCB3KHQubGluZU9mZnNldCkgJiYgKHUubGluZU9mZnNldCA9IHQubGluZU9mZnNldCksIHkuY2FwdGlvbkxhYmVsLnRleHRTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG51bGwgIT0gdFtlXSAmJiAodVtlXSA9IHRbZV0pXG4gICAgICAgICAgfSksIHUudXBkYXRlQ29sb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgeS5jYXB0aW9uTGFiZWwudXBkYXRlQ29sb3IodSwgZSlcbiAgICAgICAgICB9LCB1LnVwZGF0ZVNvY2tldFhZID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0LCBuLCBhLCBpLCBvID0gdS5jdXJTdGF0cyxcbiAgICAgICAgICAgICAgbCA9IHUuYXBsU3RhdHMsXG4gICAgICAgICAgICAgIHIgPSBlLmN1clN0YXRzLFxuICAgICAgICAgICAgICBzID0gci5wb3NpdGlvbl9zb2NrZXRYWVNFW3Uuc29ja2V0SW5kZXhdO1xuICAgICAgICAgICAgbnVsbCAhPSBzLnggJiYgKHUub2Zmc2V0ID8gKG8ueCA9IHMueCArIHUub2Zmc2V0LngsIG8ueSA9IHMueSArIHUub2Zmc2V0LnkpIDogKHQgPSB1LmhlaWdodCAvIDIsIG4gPSBNYXRoLm1heChyLmF0dGFjaF9wbHVnU2lkZUxlblNFW3Uuc29ja2V0SW5kZXhdIHx8IDAsIHIubGluZV9zdHJva2VXaWR0aCAvIDIpLCBhID0gci5wb3NpdGlvbl9zb2NrZXRYWVNFW3Uuc29ja2V0SW5kZXggPyAwIDogMV0sIHMuc29ja2V0SWQgPT09IEwgfHwgcy5zb2NrZXRJZCA9PT0gSSA/IChvLnggPSBzLnNvY2tldElkID09PSBMID8gcy54IC0gdCAtIHUud2lkdGggOiBzLnggKyB0LCBvLnkgPSBhLnkgPCBzLnkgPyBzLnkgKyBuICsgdCA6IHMueSAtIG4gLSB0IC0gdS5oZWlnaHQpIDogKG8ueCA9IGEueCA8IHMueCA/IHMueCArIG4gKyB0IDogcy54IC0gbiAtIHQgLSB1LndpZHRoLCBvLnkgPSBzLnNvY2tldElkID09PSBNID8gcy55IC0gdCAtIHUuaGVpZ2h0IDogcy55ICsgdCkpLCBXZSh1LCBsLCBcInhcIiwgaSA9IG8ueCkgJiYgKHUuZWxtUG9zaXRpb24ueC5iYXNlVmFsLmdldEl0ZW0oMCkudmFsdWUgPSBpKSwgV2UodSwgbCwgXCJ5XCIsIGkgPSBvLnkpICYmICh1LmVsbVBvc2l0aW9uLnkuYmFzZVZhbC5nZXRJdGVtKDApLnZhbHVlID0gaSArIHUuaGVpZ2h0KSlcbiAgICAgICAgICB9LCB1LnVwZGF0ZVBhdGggPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQsIG4sIGEgPSB1LmN1clN0YXRzLFxuICAgICAgICAgICAgICBpID0gdS5hcGxTdGF0cyxcbiAgICAgICAgICAgICAgbyA9IGUucGF0aExpc3QuYW5pbVZhbCB8fCBlLnBhdGhMaXN0LmJhc2VWYWw7XG4gICAgICAgICAgICBvICYmICh0ID0geS5jYXB0aW9uTGFiZWwuZ2V0TWlkUG9pbnQobywgdS5saW5lT2Zmc2V0KSwgYS54ID0gdC54IC0gdS53aWR0aCAvIDIsIGEueSA9IHQueSAtIHUuaGVpZ2h0IC8gMiwgV2UodSwgaSwgXCJ4XCIsIG4gPSBhLngpICYmICh1LmVsbVBvc2l0aW9uLnguYmFzZVZhbC5nZXRJdGVtKDApLnZhbHVlID0gbiksIFdlKHUsIGksIFwieVwiLCBuID0gYS55KSAmJiAodS5lbG1Qb3NpdGlvbi55LmJhc2VWYWwuZ2V0SXRlbSgwKS52YWx1ZSA9IG4gKyB1LmhlaWdodCkpXG4gICAgICAgICAgfSwgdS51cGRhdGVTaG93ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHkuY2FwdGlvbkxhYmVsLnVwZGF0ZVNob3codSwgZSlcbiAgICAgICAgICB9LCB1ZSAmJiAodS5hZGp1c3RFZGdlID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdS5jdXJTdGF0cztcbiAgICAgICAgICAgIG51bGwgIT0gbi54ICYmIHkuY2FwdGlvbkxhYmVsLmFkanVzdEVkZ2UodCwge1xuICAgICAgICAgICAgICB4OiBuLngsXG4gICAgICAgICAgICAgIHk6IG4ueSxcbiAgICAgICAgICAgICAgd2lkdGg6IHUud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogdS5oZWlnaHRcbiAgICAgICAgICAgIH0sIHUuc3Ryb2tlV2lkdGggLyAyKVxuICAgICAgICAgIH0pLCAhMClcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29sb3I6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4sIGEgPSBlLmN1clN0YXRzLFxuICAgICAgICAgICAgaSA9IGUuYXBsU3RhdHMsXG4gICAgICAgICAgICBvID0gdC5jdXJTdGF0cztcbiAgICAgICAgICBhLmNvbG9yID0gbiA9IGUuY29sb3IgfHwgby5saW5lX2NvbG9yLCBXZShlLCBpLCBcImNvbG9yXCIsIG4pICYmIChlLnN0eWxlRmlsbC5maWxsID0gbilcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlU2hvdzogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiA9ICEwID09PSB0LmlzU2hvd247XG4gICAgICAgICAgbiAhPT0gZS5pc1Nob3duICYmIChlLnN0eWxlU2hvdy52aXNpYmlsaXR5ID0gbiA/IFwiXCIgOiBcImhpZGRlblwiLCBlLmlzU2hvd24gPSBuKVxuICAgICAgICB9LFxuICAgICAgICBhZGp1c3RFZGdlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgIHZhciBhID0ge1xuICAgICAgICAgICAgeDE6IHQueCAtIG4sXG4gICAgICAgICAgICB5MTogdC55IC0gbixcbiAgICAgICAgICAgIHgyOiB0LnggKyB0LndpZHRoICsgbixcbiAgICAgICAgICAgIHkyOiB0LnkgKyB0LmhlaWdodCArIG5cbiAgICAgICAgICB9O1xuICAgICAgICAgIGEueDEgPCBlLngxICYmIChlLngxID0gYS54MSksIGEueTEgPCBlLnkxICYmIChlLnkxID0gYS55MSksIGEueDIgPiBlLngyICYmIChlLngyID0gYS54MiksIGEueTIgPiBlLnkyICYmIChlLnkyID0gYS55MilcbiAgICAgICAgfSxcbiAgICAgICAgbmV3VGV4dDogZnVuY3Rpb24gKGUsIHQsIG4sIGEsIGkpIHtcbiAgICAgICAgICB2YXIgbywgbCwgciwgcywgdSwgaDtcbiAgICAgICAgICByZXR1cm4gKG8gPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInRleHRcIikpLnRleHRDb250ZW50ID0gZSwgW28ueCwgby55XS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IG4uY3JlYXRlU1ZHTGVuZ3RoKCk7XG4gICAgICAgICAgICB0Lm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYLCAwKSwgZS5iYXNlVmFsLmluaXRpYWxpemUodClcbiAgICAgICAgICB9KSwgXCJib29sZWFuXCIgIT0gdHlwZW9mIGYgJiYgKGYgPSBcInBhaW50T3JkZXJcIiBpbiBvLnN0eWxlKSwgaSAmJiAhZiA/IChyID0gdC5jcmVhdGVFbGVtZW50TlMoYiwgXCJkZWZzXCIpLCBvLmlkID0gYSwgci5hcHBlbmRDaGlsZChvKSwgKHUgPSAobCA9IHQuY3JlYXRlRWxlbWVudE5TKGIsIFwiZ1wiKSkuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIGEsIChzID0gbC5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSkpLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgYSwgKGggPSB1LnN0eWxlKS5zdHJva2VMaW5lam9pbiA9IFwicm91bmRcIiwge1xuICAgICAgICAgICAgZWxtUG9zaXRpb246IG8sXG4gICAgICAgICAgICBzdHlsZVRleHQ6IG8uc3R5bGUsXG4gICAgICAgICAgICBzdHlsZUZpbGw6IHMuc3R5bGUsXG4gICAgICAgICAgICBzdHlsZVN0cm9rZTogaCxcbiAgICAgICAgICAgIHN0eWxlU2hvdzogbC5zdHlsZSxcbiAgICAgICAgICAgIGVsbXNBcHBlbmQ6IFtyLCBsXVxuICAgICAgICAgIH0pIDogKGggPSBvLnN0eWxlLCBpICYmIChoLnN0cm9rZUxpbmVqb2luID0gXCJyb3VuZFwiLCBoLnBhaW50T3JkZXIgPSBcInN0cm9rZVwiKSwge1xuICAgICAgICAgICAgZWxtUG9zaXRpb246IG8sXG4gICAgICAgICAgICBzdHlsZVRleHQ6IGgsXG4gICAgICAgICAgICBzdHlsZUZpbGw6IGgsXG4gICAgICAgICAgICBzdHlsZVN0cm9rZTogaSA/IGggOiBudWxsLFxuICAgICAgICAgICAgc3R5bGVTaG93OiBoLFxuICAgICAgICAgICAgZWxtc0FwcGVuZDogW29dXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TWlkUG9pbnQ6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4sIGEsIGksIG8gPSBPZShlKSxcbiAgICAgICAgICAgIGwgPSBvLnNlZ3NMZW4sXG4gICAgICAgICAgICByID0gby5sZW5BbGwsXG4gICAgICAgICAgICBzID0gLTE7XG4gICAgICAgICAgaWYgKChuID0gciAvIDIgKyAodCB8fCAwKSkgPD0gMCkgcmV0dXJuIDIgPT09IChhID0gZVswXSkubGVuZ3RoID8gdmUoYVswXSwgYVsxXSwgMCkgOiB4ZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCAwKTtcbiAgICAgICAgICBpZiAociA8PSBuKSByZXR1cm4gMiA9PT0gKGEgPSBlW2UubGVuZ3RoIC0gMV0pLmxlbmd0aCA/IHZlKGFbMF0sIGFbMV0sIDEpIDogeGUoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgMSk7XG4gICAgICAgICAgZm9yIChpID0gW107IG4gPiBsWysrc107KSBpLnB1c2goZVtzXSksIG4gLT0gbFtzXTtcbiAgICAgICAgICByZXR1cm4gMiA9PT0gKGEgPSBlW3NdKS5sZW5ndGggPyB2ZShhWzBdLCBhWzFdLCBuIC8gbFtzXSkgOiB4ZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCBrZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCBuKSlcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdFN2ZzogZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICB2YXIgZSwgYSwgaSA9IHkuY2FwdGlvbkxhYmVsLm5ld1RleHQodC50ZXh0LCBuLmJhc2VXaW5kb3cuZG9jdW1lbnQsIG4uc3ZnLCB2ICsgXCItY2FwdGlvbkxhYmVsLVwiICsgdC5faWQsIHQub3V0bGluZUNvbG9yKTtcbiAgICAgICAgICBbXCJlbG1Qb3NpdGlvblwiLCBcInN0eWxlRmlsbFwiLCBcInN0eWxlU2hvd1wiLCBcImVsbXNBcHBlbmRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdFtlXSA9IGlbZV1cbiAgICAgICAgICB9KSwgdC5pc1Nob3duID0gITEsIHQuc3R5bGVTaG93LnZpc2liaWxpdHkgPSBcImhpZGRlblwiLCB5LmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBudWxsICE9IHRbZV0gJiYgKGkuc3R5bGVUZXh0W2VdID0gdFtlXSlcbiAgICAgICAgICB9KSwgaS5lbG1zQXBwZW5kLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG4uc3ZnLmFwcGVuZENoaWxkKGUpXG4gICAgICAgICAgfSksIGUgPSBpLmVsbVBvc2l0aW9uLmdldEJCb3goKSwgdC53aWR0aCA9IGUud2lkdGgsIHQuaGVpZ2h0ID0gZS5oZWlnaHQsIHQub3V0bGluZUNvbG9yICYmIChhID0gMTAgPCAoYSA9IGUuaGVpZ2h0IC8gOSkgPyAxMCA6IGEgPCAyID8gMiA6IGEsIGkuc3R5bGVTdHJva2Uuc3Ryb2tlV2lkdGggPSBhICsgXCJweFwiLCBpLnN0eWxlU3Ryb2tlLnN0cm9rZSA9IHQub3V0bGluZUNvbG9yKSwgdC5zdHJva2VXaWR0aCA9IGEgfHwgMCwgVGUodC5hcGxTdGF0cywgeS5jYXB0aW9uTGFiZWwuc3RhdHMpLCB0LnVwZGF0ZUNvbG9yKG4pLCB0LnJlZlNvY2tldFhZID8gdC51cGRhdGVTb2NrZXRYWShuKSA6IHQudXBkYXRlUGF0aChuKSwgdWUgJiYgRGUobiwge30pLCB0LnVwZGF0ZVNob3cobilcbiAgICAgICAgfSxcbiAgICAgICAgYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XG4gICAgICAgICAgcmV0dXJuIGUuY29sb3IgfHwgSWUobiwgXCJjdXJfbGluZV9jb2xvclwiLCBlLnVwZGF0ZUNvbG9yKSwgKGUucmVmU29ja2V0WFkgPSBcInN0YXJ0TGFiZWxcIiA9PT0gdC5vcHRpb25OYW1lIHx8IFwiZW5kTGFiZWxcIiA9PT0gdC5vcHRpb25OYW1lKSA/IChlLnNvY2tldEluZGV4ID0gXCJzdGFydExhYmVsXCIgPT09IHQub3B0aW9uTmFtZSA/IDAgOiAxLCBJZShuLCBcImFwbF9wb3NpdGlvblwiLCBlLnVwZGF0ZVNvY2tldFhZKSwgZS5vZmZzZXQgfHwgKEllKG4sIFwiY3VyX2F0dGFjaF9wbHVnU2lkZUxlblNFXCIsIGUudXBkYXRlU29ja2V0WFkpLCBJZShuLCBcImN1cl9saW5lX3N0cm9rZVdpZHRoXCIsIGUudXBkYXRlU29ja2V0WFkpKSkgOiBJZShuLCBcImFwbF9wYXRoXCIsIGUudXBkYXRlUGF0aCksIEllKG4sIFwic3ZnU2hvd1wiLCBlLnVwZGF0ZVNob3cpLCB1ZSAmJiBJZShuLCBcIm5ld19lZGdlNHZpZXdCb3hcIiwgZS5hZGp1c3RFZGdlKSwgeS5jYXB0aW9uTGFiZWwuaW5pdFN2ZyhlLCBuKSwgITBcbiAgICAgICAgfSxcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuID0gdC5wcm9wcztcbiAgICAgICAgICBlLmVsbXNBcHBlbmQgJiYgKGUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBuLnN2Zy5yZW1vdmVDaGlsZChlKVxuICAgICAgICAgIH0pLCBlLmVsbVBvc2l0aW9uID0gZS5zdHlsZUZpbGwgPSBlLnN0eWxlU2hvdyA9IGUuZWxtc0FwcGVuZCA9IG51bGwpLCBUZShlLmN1clN0YXRzLCB5LmNhcHRpb25MYWJlbC5zdGF0cyksIFRlKGUuYXBsU3RhdHMsIHkuY2FwdGlvbkxhYmVsLnN0YXRzKSwgZS5jb2xvciB8fCBDZShuLCBcImN1cl9saW5lX2NvbG9yXCIsIGUudXBkYXRlQ29sb3IpLCBlLnJlZlNvY2tldFhZID8gKENlKG4sIFwiYXBsX3Bvc2l0aW9uXCIsIGUudXBkYXRlU29ja2V0WFkpLCBlLm9mZnNldCB8fCAoQ2UobiwgXCJjdXJfYXR0YWNoX3BsdWdTaWRlTGVuU0VcIiwgZS51cGRhdGVTb2NrZXRYWSksIENlKG4sIFwiY3VyX2xpbmVfc3Ryb2tlV2lkdGhcIiwgZS51cGRhdGVTb2NrZXRYWSkpKSA6IENlKG4sIFwiYXBsX3BhdGhcIiwgZS51cGRhdGVQYXRoKSwgQ2UobiwgXCJzdmdTaG93XCIsIGUudXBkYXRlU2hvdyksIHVlICYmIChDZShuLCBcIm5ld19lZGdlNHZpZXdCb3hcIiwgZS5hZGp1c3RFZGdlKSwgRGUobiwge30pKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVPcHRpb246IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzLFxuICAgICAgICAgICAgYSA9IHt9O1xuICAgICAgICAgIGFbdC5vcHRpb25OYW1lXSA9IFwiXCIsIFplKG4sIGEpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB0LmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgKGNvbnNvbGUuZXJyb3IoXCJMZWFkZXJMaW5lQXR0YWNobWVudCB3YXMgbm90IHVuYm91bmQgYnkgcmVtb3ZlXCIpLCB0LmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB5LmNhcHRpb25MYWJlbC51bmJpbmQodCwgZSlcbiAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBhdGhMYWJlbDoge1xuICAgICAgICB0eXBlOiBcImxhYmVsXCIsXG4gICAgICAgIGFyZ09wdGlvbnM6IFt7XG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICB9XSxcbiAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICBjb2xvcjoge30sXG4gICAgICAgICAgc3RhcnRPZmZzZXQ6IHt9LFxuICAgICAgICAgIHBhdGhEYXRhOiB7fVxuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAocywgdCkge1xuICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiB0LnRleHQgJiYgKHMudGV4dCA9IHQudGV4dC50cmltKCkpLCAhIXMudGV4dCAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5jb2xvciAmJiAocy5jb2xvciA9IHQuY29sb3IudHJpbSgpKSwgcy5vdXRsaW5lQ29sb3IgPSBcInN0cmluZ1wiID09IHR5cGVvZiB0Lm91dGxpbmVDb2xvciA/IHQub3V0bGluZUNvbG9yLnRyaW0oKSA6IFwiI2ZmZlwiLCB3KHQubGluZU9mZnNldCkgJiYgKHMubGluZU9mZnNldCA9IHQubGluZU9mZnNldCksIHkuY2FwdGlvbkxhYmVsLnRleHRTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG51bGwgIT0gdFtlXSAmJiAoc1tlXSA9IHRbZV0pXG4gICAgICAgICAgfSksIHMudXBkYXRlQ29sb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgeS5jYXB0aW9uTGFiZWwudXBkYXRlQ29sb3IocywgZSlcbiAgICAgICAgICB9LCBzLnVwZGF0ZVBhdGggPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHQsIG4gPSBzLmN1clN0YXRzLFxuICAgICAgICAgICAgICBhID0gcy5hcGxTdGF0cyxcbiAgICAgICAgICAgICAgaSA9IGUuY3VyU3RhdHMsXG4gICAgICAgICAgICAgIG8gPSBlLnBhdGhMaXN0LmFuaW1WYWwgfHwgZS5wYXRoTGlzdC5iYXNlVmFsO1xuICAgICAgICAgICAgbyAmJiAobi5wYXRoRGF0YSA9IHQgPSB5LnBhdGhMYWJlbC5nZXRPZmZzZXRQYXRoRGF0YShvLCBpLmxpbmVfc3Ryb2tlV2lkdGggLyAyICsgcy5zdHJva2VXaWR0aCAvIDIgKyBzLmhlaWdodCAvIDQsIDEuMjUgKiBzLmhlaWdodCksIE1lKHQsIGEucGF0aERhdGEpICYmIChzLmVsbVBhdGguc2V0UGF0aERhdGEodCksIGEucGF0aERhdGEgPSB0LCBzLmJCb3ggPSBzLmVsbVBvc2l0aW9uLmdldEJCb3goKSwgcy51cGRhdGVTdGFydE9mZnNldChlKSkpXG4gICAgICAgICAgfSwgcy51cGRhdGVTdGFydE9mZnNldCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdCwgbiwgYSwgaSwgbyA9IHMuY3VyU3RhdHMsXG4gICAgICAgICAgICAgIGwgPSBzLmFwbFN0YXRzLFxuICAgICAgICAgICAgICByID0gZS5jdXJTdGF0cztcbiAgICAgICAgICAgIG8ucGF0aERhdGEgJiYgKCgyICE9PSBzLnNlbUluZGV4IHx8IHMubGluZU9mZnNldCkgJiYgKHQgPSBvLnBhdGhEYXRhLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICB2YXIgbiwgYSA9IHQudmFsdWVzO1xuICAgICAgICAgICAgICBzd2l0Y2ggKHQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICB4OiBhWzBdLFxuICAgICAgICAgICAgICAgICAgeTogYVsxXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICAgIHg6IGFbMF0sXG4gICAgICAgICAgICAgICAgICB5OiBhWzFdXG4gICAgICAgICAgICAgICAgfSwgaSAmJiAoZSArPSBfZShpLCBuKSksIGkgPSBuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQ1wiOlxuICAgICAgICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICAgICAgICB4OiBhWzRdLFxuICAgICAgICAgICAgICAgICAgeTogYVs1XVxuICAgICAgICAgICAgICAgIH0sIGkgJiYgKGUgKz0gYmUoaSwge1xuICAgICAgICAgICAgICAgICAgeDogYVswXSxcbiAgICAgICAgICAgICAgICAgIHk6IGFbMV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB4OiBhWzJdLFxuICAgICAgICAgICAgICAgICAgeTogYVszXVxuICAgICAgICAgICAgICAgIH0sIG4pKSwgaSA9IG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICAgICAgfSwgMCksIGEgPSAwID09PSBzLnNlbUluZGV4ID8gMCA6IDEgPT09IHMuc2VtSW5kZXggPyB0IDogdCAvIDIsIDIgIT09IHMuc2VtSW5kZXggJiYgKG4gPSBNYXRoLm1heChyLmF0dGFjaF9wbHVnQmFja0xlblNFW3Muc2VtSW5kZXhdIHx8IDAsIHIubGluZV9zdHJva2VXaWR0aCAvIDIpICsgcy5zdHJva2VXaWR0aCAvIDIgKyBzLmhlaWdodCAvIDQsIGEgPSAoYSArPSAwID09PSBzLnNlbUluZGV4ID8gbiA6IC1uKSA8IDAgPyAwIDogdCA8IGEgPyB0IDogYSksIHMubGluZU9mZnNldCAmJiAoYSA9IChhICs9IHMubGluZU9mZnNldCkgPCAwID8gMCA6IHQgPCBhID8gdCA6IGEpLCBvLnN0YXJ0T2Zmc2V0ID0gYSwgV2UocywgbCwgXCJzdGFydE9mZnNldFwiLCBhKSAmJiAocy5lbG1PZmZzZXQuc3RhcnRPZmZzZXQuYmFzZVZhbC52YWx1ZSA9IGEpKSlcbiAgICAgICAgICB9LCBzLnVwZGF0ZVNob3cgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgeS5jYXB0aW9uTGFiZWwudXBkYXRlU2hvdyhzLCBlKVxuICAgICAgICAgIH0sIHVlICYmIChzLmFkanVzdEVkZ2UgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcy5iQm94ICYmIHkuY2FwdGlvbkxhYmVsLmFkanVzdEVkZ2UodCwgcy5iQm94LCBzLnN0cm9rZVdpZHRoIC8gMilcbiAgICAgICAgICB9KSwgITApXG4gICAgICAgIH0sXG4gICAgICAgIGdldE9mZnNldFBhdGhEYXRhOiBmdW5jdGlvbiAoZSwgeCwgbikge1xuICAgICAgICAgIHZhciBiLCBhLCBpID0gMyxcbiAgICAgICAgICAgIGsgPSBbXTtcblxuICAgICAgICAgIGZ1bmN0aW9uIHcoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGUueCAtIHQueCkgPCBpICYmIE1hdGguYWJzKGUueSAtIHQueSkgPCBpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0LCBuLCBhLCBpLCBvLCBsLCByLCBzLCB1LCBoLCBwLCBjLCBkLCBmLCB5LCBTLCBtLCBnLCBfLCB2LCBFO1xuICAgICAgICAgICAgMiA9PT0gZS5sZW5ndGggPyAoZyA9IGVbMF0sIF8gPSBlWzFdLCB2ID0geCwgRSA9IE1hdGguYXRhbjIoZy55IC0gXy55LCBfLnggLSBnLngpICsgLjUgKiBNYXRoLlBJLCB0ID0gW3tcbiAgICAgICAgICAgICAgeDogZy54ICsgTWF0aC5jb3MoRSkgKiB2LFxuICAgICAgICAgICAgICB5OiBnLnkgKyBNYXRoLnNpbihFKSAqIHYgKiAtMVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB4OiBfLnggKyBNYXRoLmNvcyhFKSAqIHYsXG4gICAgICAgICAgICAgIHk6IF8ueSArIE1hdGguc2luKEUpICogdiAqIC0xXG4gICAgICAgICAgICB9XSwgYiA/IChhID0gYi5wb2ludHMsIDAgPD0gKGkgPSBNYXRoLmF0YW4yKGFbMV0ueSAtIGFbMF0ueSwgYVswXS54IC0gYVsxXS54KSAtIE1hdGguYXRhbjIoZVswXS55IC0gZVsxXS55LCBlWzFdLnggLSBlWzBdLngpKSAmJiBpIDw9IE1hdGguUEkgPyBuID0ge1xuICAgICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgcG9pbnRzOiB0LFxuICAgICAgICAgICAgICBpbnNpZGU6ICEwXG4gICAgICAgICAgICB9IDogKGwgPSBFZShhWzBdLCBhWzFdLCB4KSwgbyA9IEVlKHRbMV0sIHRbMF0sIHgpLCBzID0gYVswXSwgaCA9IG8sIHAgPSB0WzFdLCBjID0gKHUgPSBsKS54IC0gcy54LCBkID0gdS55IC0gcy55LCBmID0gcC54IC0gaC54LCB5ID0gcC55IC0gaC55LCBTID0gKC1kICogKHMueCAtIGgueCkgKyBjICogKHMueSAtIGgueSkpIC8gKC1mICogZCArIGMgKiB5KSwgbSA9IChmICogKHMueSAtIGgueSkgLSB5ICogKHMueCAtIGgueCkpIC8gKC1mICogZCArIGMgKiB5KSwgKHIgPSAwIDw9IFMgJiYgUyA8PSAxICYmIDAgPD0gbSAmJiBtIDw9IDEgPyB7XG4gICAgICAgICAgICAgIHg6IHMueCArIG0gKiBjLFxuICAgICAgICAgICAgICB5OiBzLnkgKyBtICogZFxuICAgICAgICAgICAgfSA6IG51bGwpID8gbiA9IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgICAgICAgIHBvaW50czogW2FbMV0gPSByLCB0WzFdXVxuICAgICAgICAgICAgfSA6IChhWzFdID0gdyhvLCBsKSA/IG8gOiBsLCBuID0ge1xuICAgICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgcG9pbnRzOiBbbywgdFsxXV1cbiAgICAgICAgICAgIH0pLCBiLmxlbiA9IF9lKGFbMF0sIGFbMV0pKSkgOiBuID0ge1xuICAgICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgcG9pbnRzOiB0XG4gICAgICAgICAgICB9LCBuLmxlbiA9IF9lKG4ucG9pbnRzWzBdLCBuLnBvaW50c1sxXSksIGsucHVzaChiID0gbikpIDogKGsucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY3ViaWNcIixcbiAgICAgICAgICAgICAgcG9pbnRzOiBmdW5jdGlvbiAoZSwgdCwgbiwgYSwgaSwgbykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGwsIHIsIHMgPSBiZShlLCB0LCBuLCBhKSAvIG8sIHUgPSAxIC8gKG8gPCBpID8gcyAqIChpIC8gbykgOiBzKSwgaCA9IFtdLCBwID0gMDsgciA9ICg5MCAtIChsID0geGUoZSwgdCwgbiwgYSwgcCkpLmFuZ2xlKSAqIChNYXRoLlBJIC8gMTgwKSwgaC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogbC54ICsgTWF0aC5jb3MocikgKiBpLFxuICAgICAgICAgICAgICAgICAgICB5OiBsLnkgKyBNYXRoLnNpbihyKSAqIGkgKiAtMVxuICAgICAgICAgICAgICAgICAgfSksICEoMSA8PSBwKTspIDEgPCAocCArPSB1KSAmJiAocCA9IDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBoXG4gICAgICAgICAgICAgIH0oZVswXSwgZVsxXSwgZVsyXSwgZVszXSwgeCwgMTYpXG4gICAgICAgICAgICB9KSwgYiA9IG51bGwpXG4gICAgICAgICAgfSksIGIgPSBudWxsLCBrLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgXCJsaW5lXCIgPT09IGUudHlwZSA/IChlLmluc2lkZSAmJiAoYi5sZW4gPiB4ID8gKCh0ID0gYi5wb2ludHMpWzFdID0gRWUodFswXSwgdFsxXSwgLXgpLCBiLmxlbiA9IF9lKHRbMF0sIHRbMV0pKSA6IChiLnBvaW50cyA9IG51bGwsIGIubGVuID0gMCksIGUubGVuID4geCArIG4gPyAoKHQgPSBlLnBvaW50cylbMF0gPSBFZSh0WzFdLCB0WzBdLCAtKHggKyBuKSksIGUubGVuID0gX2UodFswXSwgdFsxXSkpIDogKGUucG9pbnRzID0gbnVsbCwgZS5sZW4gPSAwKSksIGIgPSBlKSA6IGIgPSBudWxsXG4gICAgICAgICAgfSksIGsucmVkdWNlKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGUucG9pbnRzO1xuICAgICAgICAgICAgcmV0dXJuIG4gJiYgKGEgJiYgdyhuWzBdLCBhKSB8fCB0LnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBbblswXS54LCBuWzBdLnldXG4gICAgICAgICAgICB9KSwgXCJsaW5lXCIgPT09IGUudHlwZSA/IHQucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFtuWzFdLngsIG5bMV0ueV1cbiAgICAgICAgICAgIH0pIDogKG4uc2hpZnQoKSwgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbZS54LCBlLnldXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSksIGEgPSBuW24ubGVuZ3RoIC0gMV0pLCB0XG4gICAgICAgICAgfSwgW10pXG4gICAgICAgIH0sXG4gICAgICAgIG5ld1RleHQ6IGZ1bmN0aW9uIChlLCB0LCBuLCBhKSB7XG4gICAgICAgICAgdmFyIGksIG8sIGwsIHIsIHMsIHUsIGgsIHAsIGMsIGQ7XG4gICAgICAgICAgcmV0dXJuIChyID0gKGwgPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcImRlZnNcIikpLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGIsIFwicGF0aFwiKSkpLmlkID0gaSA9IG4gKyBcIi1wYXRoXCIsICh1ID0gKHMgPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInRleHRcIikpLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGIsIFwidGV4dFBhdGhcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIGksIHUuc3RhcnRPZmZzZXQuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMCksIHUudGV4dENvbnRlbnQgPSBlLCBcImJvb2xlYW5cIiAhPSB0eXBlb2YgZiAmJiAoZiA9IFwicGFpbnRPcmRlclwiIGluIHMuc3R5bGUpLCBhICYmICFmID8gKHMuaWQgPSBvID0gbiArIFwiLXRleHRcIiwgbC5hcHBlbmRDaGlsZChzKSwgKGMgPSAoaCA9IHQuY3JlYXRlRWxlbWVudE5TKGIsIFwiZ1wiKSkuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIG8sIChwID0gaC5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSkpLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgbywgKGQgPSBjLnN0eWxlKS5zdHJva2VMaW5lam9pbiA9IFwicm91bmRcIiwge1xuICAgICAgICAgICAgZWxtUG9zaXRpb246IHMsXG4gICAgICAgICAgICBlbG1QYXRoOiByLFxuICAgICAgICAgICAgZWxtT2Zmc2V0OiB1LFxuICAgICAgICAgICAgc3R5bGVUZXh0OiBzLnN0eWxlLFxuICAgICAgICAgICAgc3R5bGVGaWxsOiBwLnN0eWxlLFxuICAgICAgICAgICAgc3R5bGVTdHJva2U6IGQsXG4gICAgICAgICAgICBzdHlsZVNob3c6IGguc3R5bGUsXG4gICAgICAgICAgICBlbG1zQXBwZW5kOiBbbCwgaF1cbiAgICAgICAgICB9KSA6IChkID0gcy5zdHlsZSwgYSAmJiAoZC5zdHJva2VMaW5lam9pbiA9IFwicm91bmRcIiwgZC5wYWludE9yZGVyID0gXCJzdHJva2VcIiksIHtcbiAgICAgICAgICAgIGVsbVBvc2l0aW9uOiBzLFxuICAgICAgICAgICAgZWxtUGF0aDogcixcbiAgICAgICAgICAgIGVsbU9mZnNldDogdSxcbiAgICAgICAgICAgIHN0eWxlVGV4dDogZCxcbiAgICAgICAgICAgIHN0eWxlRmlsbDogZCxcbiAgICAgICAgICAgIHN0eWxlU3Ryb2tlOiBhID8gZCA6IG51bGwsXG4gICAgICAgICAgICBzdHlsZVNob3c6IGQsXG4gICAgICAgICAgICBlbG1zQXBwZW5kOiBbbCwgc11cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBpbml0U3ZnOiBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgIHZhciBlLCBhLCBpID0geS5wYXRoTGFiZWwubmV3VGV4dCh0LnRleHQsIG4uYmFzZVdpbmRvdy5kb2N1bWVudCwgdiArIFwiLXBhdGhMYWJlbC1cIiArIHQuX2lkLCB0Lm91dGxpbmVDb2xvcik7XG4gICAgICAgICAgW1wiZWxtUG9zaXRpb25cIiwgXCJlbG1QYXRoXCIsIFwiZWxtT2Zmc2V0XCIsIFwic3R5bGVGaWxsXCIsIFwic3R5bGVTaG93XCIsIFwiZWxtc0FwcGVuZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0W2VdID0gaVtlXVxuICAgICAgICAgIH0pLCB0LmlzU2hvd24gPSAhMSwgdC5zdHlsZVNob3cudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsIHkuY2FwdGlvbkxhYmVsLnRleHRTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG51bGwgIT0gdFtlXSAmJiAoaS5zdHlsZVRleHRbZV0gPSB0W2VdKVxuICAgICAgICAgIH0pLCBpLmVsbXNBcHBlbmQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbi5zdmcuYXBwZW5kQ2hpbGQoZSlcbiAgICAgICAgICB9KSwgaS5lbG1QYXRoLnNldFBhdGhEYXRhKFt7XG4gICAgICAgICAgICB0eXBlOiBcIk1cIixcbiAgICAgICAgICAgIHZhbHVlczogWzAsIDEwMF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcImhcIixcbiAgICAgICAgICAgIHZhbHVlczogWzEwMF1cbiAgICAgICAgICB9XSksIGUgPSBpLmVsbVBvc2l0aW9uLmdldEJCb3goKSwgaS5zdHlsZVRleHQudGV4dEFuY2hvciA9IFtcInN0YXJ0XCIsIFwiZW5kXCIsIFwibWlkZGxlXCJdW3Quc2VtSW5kZXhdLCAyICE9PSB0LnNlbUluZGV4IHx8IHQubGluZU9mZnNldCB8fCBpLmVsbU9mZnNldC5zdGFydE9mZnNldC5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsIDUwKSwgdC5oZWlnaHQgPSBlLmhlaWdodCwgdC5vdXRsaW5lQ29sb3IgJiYgKGEgPSAxMCA8IChhID0gZS5oZWlnaHQgLyA5KSA/IDEwIDogYSA8IDIgPyAyIDogYSwgaS5zdHlsZVN0cm9rZS5zdHJva2VXaWR0aCA9IGEgKyBcInB4XCIsIGkuc3R5bGVTdHJva2Uuc3Ryb2tlID0gdC5vdXRsaW5lQ29sb3IpLCB0LnN0cm9rZVdpZHRoID0gYSB8fCAwLCBUZSh0LmFwbFN0YXRzLCB5LnBhdGhMYWJlbC5zdGF0cyksIHQudXBkYXRlQ29sb3IobiksIHQudXBkYXRlUGF0aChuKSwgdC51cGRhdGVTdGFydE9mZnNldChuKSwgdWUgJiYgRGUobiwge30pLCB0LnVwZGF0ZVNob3cobilcbiAgICAgICAgfSxcbiAgICAgICAgYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XG4gICAgICAgICAgcmV0dXJuIGUuY29sb3IgfHwgSWUobiwgXCJjdXJfbGluZV9jb2xvclwiLCBlLnVwZGF0ZUNvbG9yKSwgSWUobiwgXCJjdXJfbGluZV9zdHJva2VXaWR0aFwiLCBlLnVwZGF0ZVBhdGgpLCBJZShuLCBcImFwbF9wYXRoXCIsIGUudXBkYXRlUGF0aCksIGUuc2VtSW5kZXggPSBcInN0YXJ0TGFiZWxcIiA9PT0gdC5vcHRpb25OYW1lID8gMCA6IFwiZW5kTGFiZWxcIiA9PT0gdC5vcHRpb25OYW1lID8gMSA6IDIsICgyICE9PSBlLnNlbUluZGV4IHx8IGUubGluZU9mZnNldCkgJiYgSWUobiwgXCJjdXJfYXR0YWNoX3BsdWdCYWNrTGVuU0VcIiwgZS51cGRhdGVTdGFydE9mZnNldCksIEllKG4sIFwic3ZnU2hvd1wiLCBlLnVwZGF0ZVNob3cpLCB1ZSAmJiBJZShuLCBcIm5ld19lZGdlNHZpZXdCb3hcIiwgZS5hZGp1c3RFZGdlKSwgeS5wYXRoTGFiZWwuaW5pdFN2ZyhlLCBuKSwgITBcbiAgICAgICAgfSxcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHZhciBuID0gdC5wcm9wcztcbiAgICAgICAgICBlLmVsbXNBcHBlbmQgJiYgKGUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBuLnN2Zy5yZW1vdmVDaGlsZChlKVxuICAgICAgICAgIH0pLCBlLmVsbVBvc2l0aW9uID0gZS5lbG1QYXRoID0gZS5lbG1PZmZzZXQgPSBlLnN0eWxlRmlsbCA9IGUuc3R5bGVTaG93ID0gZS5lbG1zQXBwZW5kID0gbnVsbCksIFRlKGUuY3VyU3RhdHMsIHkucGF0aExhYmVsLnN0YXRzKSwgVGUoZS5hcGxTdGF0cywgeS5wYXRoTGFiZWwuc3RhdHMpLCBlLmNvbG9yIHx8IENlKG4sIFwiY3VyX2xpbmVfY29sb3JcIiwgZS51cGRhdGVDb2xvciksIENlKG4sIFwiY3VyX2xpbmVfc3Ryb2tlV2lkdGhcIiwgZS51cGRhdGVQYXRoKSwgQ2UobiwgXCJhcGxfcGF0aFwiLCBlLnVwZGF0ZVBhdGgpLCAoMiAhPT0gZS5zZW1JbmRleCB8fCBlLmxpbmVPZmZzZXQpICYmIENlKG4sIFwiY3VyX2F0dGFjaF9wbHVnQmFja0xlblNFXCIsIGUudXBkYXRlU3RhcnRPZmZzZXQpLCBDZShuLCBcInN2Z1Nob3dcIiwgZS51cGRhdGVTaG93KSwgdWUgJiYgKENlKG4sIFwibmV3X2VkZ2U0dmlld0JveFwiLCBlLmFkanVzdEVkZ2UpLCBEZShuLCB7fSkpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZU9wdGlvbjogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHMsXG4gICAgICAgICAgICBhID0ge307XG4gICAgICAgICAgYVt0Lm9wdGlvbk5hbWVdID0gXCJcIiwgWmUobiwgYSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHQuYm91bmRUYXJnZXRzLmxlbmd0aCAmJiAoY29uc29sZS5lcnJvcihcIkxlYWRlckxpbmVBdHRhY2htZW50IHdhcyBub3QgdW5ib3VuZCBieSByZW1vdmVcIiksIHQuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHkucGF0aExhYmVsLnVuYmluZCh0LCBlKVxuICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgT2JqZWN0LmtleXMoeSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgWWVbZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUyh5W2VdLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgfVxuICAgIH0pLCBZZS5wb3NpdGlvbkJ5V2luZG93UmVzaXplID0gITAsIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIE8uYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgIFllLnBvc2l0aW9uQnlXaW5kb3dSZXNpemUgJiYgT2JqZWN0LmtleXMoSykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBEZShLW2VdLCB7XG4gICAgICAgICAgcG9zaXRpb246ICEwXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pLCAhMSksIFllXG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0TGluZTogZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIGNvbmZpZyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBMZWFkZXJMaW5lKHN0YXJ0LCBlbmQsIGNvbmZpZylcbiAgfSxcbiAgb2JqOiBMZWFkZXJMaW5lXG59XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGYwMjQyYzAmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmE1NjQ1MDAmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YzI2MTRiZCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiNTliZTg3Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyN2Q5NDJhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjAyNDJjMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmMDI0MmMwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImRmMDI0MmMwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZGYwMjQyYzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdkZjAyNDJjMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMDI0MmMwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJ2RmMDI0MmMwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhNTY0NTAwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmE1NjQ1MDBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YTU2NDUwMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YTU2NDUwMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzI2MTRiZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YzI2MTRiZFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZjMjYxNGJkJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNmMyNjE0YmQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMyNjE0YmRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNmMyNjE0YmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjU5YmU4NyZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiN2I1OWJlODdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3YjU5YmU4NycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzdiNTliZTg3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiNTliZTg3XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzdiNTliZTg3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjg1YTAzM2JhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnODVhMDMzYmEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1YTAzM2JhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzg1YTAzM2JhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzI3ZDk0MmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczMjdkOTQyYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzMyN2Q5NDJhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIm5hbWUiLCJlbWl0cyIsInByb3BzIiwic2NoZW1lX2NvZGUiLCJTdHJpbmciLCJjb250ZXh0IiwiT2JqZWN0IiwiY29udGV4dF90eXBlIiwibW91c2VfeCIsIk51bWJlciIsIm1vdXNlX3kiLCJkYXRhIiwiaXRlbXMiLCJ4IiwieSIsIndhdGNoIiwiZ2V0TWVudUl0ZW1zIiwiY29tcHV0ZWQiLCJtb2R1bGVTdHlsZSIsImxlZnQiLCJjb25jYXQiLCJ0b3AiLCJtZXRob2RzIiwiY2xvc2UiLCIkZW1pdCIsIl90aGlzIiwiS3JpdGkiLCJhcGkiLCJ1cmwiLCJ0eXBlIiwidXVpZCIsInRoZW4iLCJyZXNwb25zZSIsImNsaWNrSXRlbSIsIml0ZW0iLCJjb2RlIiwiXyIsImNsb25lRGVlcCIsIk1vZHVsZSIsImNvbXBvbmVudHMiLCJub2RlIiwicG9pbnQiLCJDb250cm9sUGFuZWwiLCJub2RlX21lbnUiLCJhY3RpdmVfbWV0aG9kIiwiYnV0dG9ucyIsImljb24iLCJjbGljayIsInNldERhdGEiLCJfdGhpczIiLCJnZXREYXRhIiwibWV0aG9kIiwidmFyaWFibGUiLCJfdGhpczMiLCJ0cmFuc2Zvcm1NZXRob2QiLCJfdGhpczQiLCJ2YWx1ZXMiLCJnZXRDb250ZW50IiwicHJlZml4IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkxlYWRlckxpbmUiLCJOb2RlIiwiTm9kZU1vZGFsIiwiQ29udGV4dE1lbnUiLCJhY3RpdmVfc2NoZW1lX2NvZGUiLCJzY2hlbWUiLCJjb250ZXh0X21lbnVfb2JqZWN0Iiwid29ya3NwYWNlX3dpZHRoIiwid29ya3NwYWNlX2hlaWdodCIsImhvbGRfeF9mYWN0b3IiLCJob2xkX3lfZmFjdG9yIiwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZCIsInBsYXRvX3giLCJwbGF0b195IiwicGxhdG9feF9zdGFydCIsInBsYXRvX3lfc3RhcnQiLCJib2R5X3hfZmFjdG9yIiwiYm9keV95X2ZhY3RvciIsImFjdGl2ZV9ub2RlIiwibGFzdF9ob2xkX3giLCJsYXN0X2hvbGRfeSIsImxpbmVzIiwibGluZXNfb2JqZWN0cyIsIm5vZGVzIiwiX3RoaXMkc2NoZW1lIiwibW91bnRlZCIsImRlZmluZVdvcmtzcGFjZVNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0U2NoZW1lIiwialF1ZXJ5IiwiY3NzIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImFkZExpbmtzIiwiYmVmb3JlVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCIkbmV4dFRpY2siLCJwYXJlbnRFbGVtZW50IiwiJGVsIiwicGFyZW50Tm9kZSIsImdsb2JhbCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZm4iLCJzYW5pdGl6ZU5vZGVzIiwibWFwIiwic2V0U2NoZW1lIiwic2NoZW1lX2RhdGEiLCJjb25zb2xlIiwibG9nIiwibW92ZVBsYXRvIiwiaG9sZF9wbGF0byIsImRyb3BQbGF0byIsIm1vdXNlbW92ZSIsImV2ZW50IiwicGFnZVgiLCJwYWdlWSIsIm1vdmVOb2RlIiwiY29ycmVjdExpbmVzIiwibm9kZUhvbGQiLCJidXR0b24iLCJzYXZlSG9sZFBvc2l0aW9uIiwiZm9jdXMiLCJub2RlRHJvcCIsIndvcmtzcGFjZUNvbnRleHRNZW51Iiwib3BlbkNvbnRleHRNZW51IiwiY2xvc2VDb250ZXh0TWVudSIsImNsaWNrQ29udGV4dE1lbnVJdGVtIiwicHVzaCIsImNyZWF0ZVVVSUQiLCJfdGhpczUiLCJsaW5rcyIsImxpbmsiLCJhZGRMaW5rIiwiZWxlbWVudF9hIiwiJHJlZnMiLCJlbGVtZW50X2IiLCJvcHRpb25zIiwic3RhcnRQbHVnIiwiZW5kUGx1ZyIsInNpemUiLCJwYXRoIiwibWlkZGxlTGFiZWwiLCJsaW5lX29iamVjdCIsInNldExpbmUiLCJvYmplY3QiLCJwb3NpdGlvbiIsImNyZWF0ZUxpbmsiLCJXb3Jrc3BhY2UiLCJzdHlsZV9tb2R1bGUiLCJzdHlsZSIsIm1vZHVsZSIsInN0eWxlX21vZHVsZV90aXRsZSIsIm1vZHVsZV90aXRsZSIsIiRkYXRhIiwibGVuZ3RoIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ub3JtYWxpemVTdHlsZSIsIiRvcHRpb25zIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzEiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIm9uQ2xpY2siLCIkZXZlbnQiLCJfbm9ybWFsaXplQ2xhc3MiLCJfdG9EaXNwbGF5U3RyaW5nIiwidGV4dCIsIiRwcm9wcyIsIl9jcmVhdGVCbG9jayIsIl9jb21wb25lbnRfTW9kdWxlIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsIl9jYWNoZSIsIl9jdHgiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsImFjdGl2ZSIsInRpdGxlIiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzkiLCJfY29tcG9uZW50X0Zvcm1GaXR0ZXIiLCIkc2xvdHMiLCJfcmVuZGVyU2xvdCIsIl9ob2lzdGVkXzEwIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9Db250cm9sUGFuZWwiLCJvbk1vdXNlZG93biIsIl93aXRoTW9kaWZpZXJzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvbk1vdXNldXAiLCJvbk1vdXNlbW92ZSIsIm9uRGJsY2xpY2siLCJyZWYiLCJfY29tcG9uZW50X05vZGUiLCJpZCIsIm9uQ29udGV4dG1lbnUiLCJfY29tcG9uZW50X05vZGVNb2RhbCIsIm9uQ2xvc2UiLCJvblVwZGF0ZSIsIl9jb21wb25lbnRfQ29udGV4dE1lbnUiLCJvbkNsaWNrX2l0ZW0iLCJfY29tcG9uZW50X1dvcmtzcGFjZSIsInNldHRpbmdzIl0sInNvdXJjZVJvb3QiOiIifQ==