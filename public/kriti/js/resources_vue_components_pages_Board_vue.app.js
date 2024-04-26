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
    testPlato: function testPlato() {
      console.log('Двигаю стрелки');
      var el = this.$refs['plato'];
      el.style.marginLeft += 100;
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
    addLink: function addLink(link, save) {
      var element_a = this.$refs[link[0]][0].$el;
      var element_b = this.$refs[link[1]][0].$el;
      var options = {
        startPlug: 'disc',
        endPlug: 'arrow1'
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
      console.log('plato_x_start', this.plato_x_start);
      console.log('plato_x', this.plato_x);
      console.log('plato_x_start', this.plato_x_start);
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
    onMousedown: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.movePlato && $options.movePlato.apply($options, arguments);
    }, ["ctrl", "self"])),
    onMouseup: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.dropPlato && $options.dropPlato.apply($options, arguments);
    }, ["self"])),
    onMousemove: _cache[4] || (_cache[4] = function () {
      return $options.mousemove && $options.mousemove.apply($options, arguments);
    }),
    onDblclick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.workspaceContextMenu && $options.workspaceContextMenu.apply($options, arguments);
    }, ["self"]))
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "workspace__plato",
    ref: "plato",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("margin-left:".concat($data.plato_x, "px;margin-top:").concat($data.plato_y, "px"))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.testPlato && $options.testPlato.apply($options, arguments);
    })
  }, "Сдвинуть стрелки"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.nodes, function (node) {
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
    onClose: _cache[1] || (_cache[1] = function ($event) {
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  position: absolute;\n}\n.workspace {\n  padding: 10px;\n  background: #e8e8e8;\n  color: #1e241e;\n}\n.workspace__plato {\n  width: 0;\n  height: 0;\n  position: relative;\n}\n.workspace .kriti-preloader {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4588235294);\n  transition: 300ms;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 100001;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Workspace.vue","webpack://./resources/scss/kriti.palette.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;AADJ;AAIA;EACI,aAAA;EACA,mBCRM;EDSN,cCLK;ADIT;AAGI;EACI,QAAA;EACA,SAAA;EACA,kBAAA;AADR;AAII;EACI,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,6CAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;AAFR","sourcesContent":["\n@import '../../../scss/kriti.palette.scss';\nbody {\n    position: absolute;\n}\n\n.workspace {\n    padding: 10px;\n    background: $bg-dark;\n    color: $f-dark;\n\n    &__plato {\n        width: 0;\n        height: 0;\n        position: relative;\n    }\n\n    .kriti-preloader {\n        position: fixed;\n        display: flex;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #ffffff75;\n        transition: 300ms;\n        justify-content: center;\n        align-items: center;\n        user-select: none;\n        z-index: 100001;\n    }\n}\n","$bg-dark: #e8e8e8;\n$bg-light: #d9d9d9;\n$f-def: #26551b;\n$b-def: #72bd8f;\n$f-dark: #1e241e;\n$color-100: #dc25cb;\n$color-100: #9b8d8d;\n$color-100: #144c60;\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLGlFQUFlO0VBQ1hBLElBQUksRUFBRSxhQUFhO0VBQ25CQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0VBQzlCQyxLQUFLLEVBQUU7SUFDSEMsV0FBVyxFQUFFQyxNQUFNO0lBQ25CQyxPQUFPLEVBQUVDLE1BQU07SUFDZkMsWUFBWSxFQUFFSCxNQUFNO0lBQ3BCSSxPQUFPLEVBQUVDLE1BQU07SUFDZkMsT0FBTyxFQUFFRDtFQUNiLENBQUM7RUFDREUsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLEtBQUssRUFBRSxFQUFFO01BQ1RDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNQO0VBQ0osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSFYsT0FBTyxXQUFBQSxRQUFDQSxRQUFPLEVBQUU7TUFDYixJQUFJQSxRQUFPLEVBQUU7UUFDVCxJQUFJLENBQUNXLFlBQVksQ0FBQztRQUNsQixJQUFJLENBQUNILENBQUEsR0FBSSxJQUFJLENBQUNMLE9BQU07UUFDcEIsSUFBSSxDQUFDTSxDQUFBLEdBQUksSUFBSSxDQUFDSixPQUFNO01BQ3hCO0lBQ0o7RUFDSixDQUFDO0VBQ0RPLFFBQVEsRUFBRTtJQUNOQyxXQUFXLFdBQUFBLFlBQUEsRUFBRztNQUNWLE9BQU87UUFDSEMsSUFBSSxLQUFBQyxNQUFBLENBQUssSUFBSSxDQUFDUCxDQUFDLE9BQUk7UUFDbkJRLEdBQUcsS0FBQUQsTUFBQSxDQUFLLElBQUksQ0FBQ04sQ0FBQztNQUNsQjtJQUNKO0VBQ0osQ0FBQztFQUNEUSxPQUFPLEVBQUU7SUFDTEMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7TUFDSixJQUFJLENBQUNYLEtBQUksR0FBSSxFQUFDO01BQ2QsSUFBSSxDQUFDWSxLQUFLLENBQUMsT0FBTztJQUN0QixDQUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBLDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsbUJBQW1CLDhEQUE4RDtBQUNqRjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywwSEFBMEg7QUFDdks7QUFDQSwwREFBMEQsT0FBTztBQUNqRTtBQUNBO0FBQ0EscUJBQXFCLDBIQUEwSDtBQUMvSTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEhBQTBIO0FBQy9JO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pC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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx5RkFBeUY7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFD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QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7OztBQ0FLOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7OztBQ0FDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbnRleHRNZW51LnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbnRleHRNZW51LnZ1ZT9kMDFhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9mMDJmIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlP2UwZTQiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/YjlmMSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/N2Q4MiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlPzQ1NmMiLCJ3ZWJwYWNrOi8va3JpdGkvLi9ub2RlX21vZHVsZXMvbGVhZGVyLWxpbmUtdnVlL2xlYWRlci1saW5lLXZ1ZS5qcyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlPzZkZDgiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2M2ZjciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/NmZmMiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT8yZDlkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT80OWJiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MmYyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlPzU1ZTUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlPzUxNDgiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/MDAzMCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9kMDVhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT82MGFiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MWM4MyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlP2I2ZjciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlP2Y5M2QiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/MTAxYSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9kZWY5Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT9mM2M3Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MDQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwiaXRlbXMubGVuZ3RoXCIgY2xhc3M9XCJrcml0aS1jb250ZXh0XCIgOnN0eWxlPVwibW9kdWxlU3R5bGVcIiB2LWNsaWNrLW91dHNpZGUtZWxlbWVudD1cImNsb3NlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcml0aS1jb250ZXh0X19pdGVtc1wiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiBjbGFzcz1cImtyaXRpLWNvbnRleHRfX2l0ZW1cIiBAY2xpY2s9XCJjbGlja0l0ZW0oaXRlbSlcIj5cbiAgICAgICAgICAgICAgICA8aSB2LWlmPVwiaXRlbS5pY29uXCIgOmNsYXNzPVwiaXRlbS5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW0udGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkNvbnRleHRNZW51XCIsXG4gICAgZW1pdHM6IFsnY2xvc2UnLCAnY2xpY2tfaXRlbSddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNjaGVtZV9jb2RlOiBTdHJpbmcsXG4gICAgICAgIGNvbnRleHQ6IE9iamVjdCxcbiAgICAgICAgY29udGV4dF90eXBlOiBTdHJpbmcsXG4gICAgICAgIG1vdXNlX3g6IE51bWJlcixcbiAgICAgICAgbW91c2VfeTogTnVtYmVyLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGNvbnRleHQoY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lbnVJdGVtcygpXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tb3VzZV94XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5tb3VzZV95XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1vZHVsZVN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHt0aGlzLnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICB9LFxuICAgICAgICBnZXRNZW51SXRlbXMoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Db250ZXh0OmdldENvbnRleHRJdGVtcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmNvbnRleHRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogdGhpcy5jb250ZXh0LnV1aWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLml0ZW1zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2tJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrX2l0ZW0nLCBpdGVtLmNvZGUsIF8uY2xvbmVEZWVwKHRoaXMuY29udGV4dCkpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mva3JpdGkucGFsZXR0ZS5zY3NzJztcbi5rcml0aS1jb250ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjI5O1xuICAgIHBhZGRpbmc6IDE4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJl9faXRlbXMge1xuXG4gICAgfVxuICAgICZfX2l0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmctbGlnaHQ7XG4gICAgICAgIGNvbG9yOiAkZi1kZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luOiA1cHggNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIxcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzkwY2U4MjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibm9kZVwiICA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiPlxuICAgICAgICA8TW9kdWxlIHYtaWY9XCJub2RlLnR5cGUgPT09ICdNb2R1bGUnXCIgOm5vZGU9XCJub2RlXCIgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKlxu0KLRg9GCINC80Ysg0L/QvtC00LrQu9GO0YfQsNC10Lwg0YLQuNC/0YsgUG9pbnQt0L7QsiDQuCDRg9C/0YDQsNCy0LvRj9C10Lwg0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40LXQvCDQuCDQvtCx0YnQuNC8INC/0L7QstC10LTQtdC90LjQtdC8XG4gKi9cbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uL3R5cGVzL01vZHVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2R1bGVcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubm9kZS5wb2ludC54fXB4YCxcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMubm9kZS5wb2ludC55fXB4YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICYuZm9jdXMge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwibm9kZV9tZW51XCIgY2xhc3M9XCJub2RlLW1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCi0YPRgiDQt9Cw0LPQvtC70L7QstC+0Log0LzQvtC00YPQu9GPXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2Nsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmkteC1zcXVhcmUtZmlsbFwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIG5vZGVfbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub2RlLW1vZGFsX19tZW51X19pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7YWN0aXZlOml0ZW0ubWV0aG9kID09PSBhY3RpdmVfbWV0aG9kfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0Q29udGVudChpdGVtLm1ldGhvZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRml0dGVyIHYtaWY9XCJkYXRhICE9PSBudWxsXCIgOnNjaGVtZT1cImRhdGEuc2NoZW1lXCIgdi1tb2RlbD1cImRhdGEudmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoXywgbmFtZSkgaW4gJHNsb3RzXCIgdi1zbG90OltuYW1lXT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cIm5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaXR0ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xQYW5lbCA6YnV0dG9ucz1cImJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4vRHdhcmYvZm9ybXMvQ29udHJvbFBhbmVsXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlTW9kYWxcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIENvbnRyb2xQYW5lbFxuICAgIH0sXG4gICAgZW1pdHM6IFsnY2xvc2UnLCAndXBkYXRlJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0LFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGVfbWVudTogbnVsbCxcbiAgICAgICAgICAgIGFjdGl2ZV9tZXRob2Q6ICdzdHlsZScsXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC40YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdiaSBiaS1jbG91ZC11cGxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgbm9kZShub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVfbWVudSA9IG51bGxcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnbWVudScsXG4gICAgICAgICAgICAgICAgdmFyaWFibGU6J25vZGVfbWVudScsXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmFjdGl2ZV9tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQp9GC0LXQvdC40LUg0LjQtyDQvdC+0LTQsFxuICAgICAgICBnZXREYXRhKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzLnZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMudmFyaWFibGUgPSAnZGF0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Z2V0RGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLm5vZGUudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnRyYW5zZm9ybU1ldGhvZCgnZ2V0JywgcHJvcHMubWV0aG9kKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BzLnZhcmlhYmxlXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnRoZW4oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g0JfQsNC/0LjRgdGMINCyINC90L7QtFxuICAgICAgICBzZXREYXRhKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpzZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMubm9kZS51dWlkLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMudHJhbnNmb3JtTWV0aG9kKCdzZXQnLCB0aGlzLmFjdGl2ZV9tZXRob2QpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHRoaXMuZGF0YS52YWx1ZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UpIC8vINCf0L7RgdGL0LvQsNC10YLRgdGPINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdGF0LXQvNGLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb250ZW50KG1ldGhvZCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbWV0aG9kID0gbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5hY3RpdmVfbWV0aG9kLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9GA0LXQvtCx0YDQsNC30YPQtdGCIFwicHJlZml4LCBtZXRob2RcIiDQsiBcInByZWZpeE1ldGhvZFwiXG4gICAgICAgIHRyYW5zZm9ybU1ldGhvZChwcmVmaXgsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIG1ldGhvZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1ldGhvZC5zbGljZSgxKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICZfX2JvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG5cbiAgICB9XG5cbiAgICAmX19jbG9zZSB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjRmNGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICZfX21lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICM5ZDlkOWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcyODRkNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZFwiXG4gICAgIGNsYXNzPVwid29ya3NwYWNlXCJcbiAgICAgOnN0eWxlPVwiYHdpZHRoOiR7d29ya3NwYWNlX3dpZHRofXB4O2hlaWdodDoke3dvcmtzcGFjZV9oZWlnaHR9cHhgXCJcbiAgICAgQG1vdXNlZG93bi5jdHJsLnNlbGY9XCJtb3ZlUGxhdG9cIlxuICAgICBAbW91c2V1cC5zZWxmPVwiZHJvcFBsYXRvXCJcbiAgICAgQG1vdXNlbW92ZT1cIm1vdXNlbW92ZVwiXG4gICAgIEBkYmxjbGljay5zZWxmPVwid29ya3NwYWNlQ29udGV4dE1lbnVcIlxuPlxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc3BhY2VfX3ByZWxvYWRlclwiPjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIndvcmtzcGFjZV9fcGxhdG9cIiByZWY9XCJwbGF0b1wiIDpzdHlsZT1cImBtYXJnaW4tbGVmdDokeyBwbGF0b194IH1weDttYXJnaW4tdG9wOiR7IHBsYXRvX3kgfXB4YFwiPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRlc3RQbGF0b1wiPtCh0LTQstC40L3Rg9GC0Ywg0YHRgtGA0LXQu9C60Lg8L2J1dHRvbj5cbiAgICAgICAgPE5vZGUgdi1mb3I9XCJub2RlIGluIG5vZGVzXCIgOm5vZGU9XCJub2RlXCJcbiAgICAgICAgICAgICA6cmVmPVwibm9kZS51dWlkXCIgOmlkPVwibm9kZS51dWlkXCIgOmNsYXNzPVwieyBmb2N1czpub2RlID09PSBhY3RpdmVfbm9kZSB9XCJcbiAgICAgICAgICAgICBAbW91c2Vkb3duPVwibm9kZUhvbGQobm9kZSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgQG1vdXNldXA9XCJub2RlRHJvcFwiXG4gICAgICAgICAgICAgQGNsaWNrLmN0cmw9XCJjcmVhdGVMaW5rKG5vZGUpXCJcbiAgICAgICAgICAgICBAY29udGV4dG1lbnUucHJldmVudD1cIm9wZW5Db250ZXh0TWVudShub2RlKVwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPE5vZGVNb2RhbCA6bm9kZT1cIm5vZGVcIiBAY2xvc2U9XCJub2RlID0gbnVsbFwiIEB1cGRhdGU9XCJnZXRTY2hlbWVcIi8+XG4gICAgPENvbnRleHRNZW51XG4gICAgICAgIDpjb250ZXh0PVwiY29udGV4dF9tZW51X29iamVjdFwiXG4gICAgICAgIGNvbnRleHRfdHlwZT1cIm5vZGVcIlxuICAgICAgICA6c2NoZW1lX2NvZGU9XCJhY3RpdmVfc2NoZW1lX2NvZGVcIlxuICAgICAgICA6bW91c2VfeD1cIm1vdXNlX3hcIlxuICAgICAgICA6bW91c2VfeT1cIm1vdXNlX3lcIlxuICAgICAgICBAY2xvc2U9XCJjbG9zZUNvbnRleHRNZW51XCJcbiAgICAgICAgQGNsaWNrX2l0ZW09XCJjbGlja0NvbnRleHRNZW51SXRlbVwiXG4gICAgLz5cblxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IExlYWRlckxpbmUgZnJvbSBcImxlYWRlci1saW5lLXZ1ZVwiIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnNla2kvbGVhZGVyLWxpbmVcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCBOb2RlTW9kYWwgZnJvbSBcIi4vTm9kZU1vZGFsXCI7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4vQ29udGV4dE1lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiV29ya3NwYWNlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBOb2RlLCAvLyDQmtC+0LzQv9C+0L3QtdC90YIg0YDQtdCw0LvQuNC30YPRjtGJ0LjQuSDQvdC+0LTRg1xuICAgICAgICBOb2RlTW9kYWwsIC8vINCa0L7QvNC/0L7QvdC10L3RgiDRgNCw0LHQvtGH0LXQtSDQvtC60L3QviDQvdC+0LTQsFxuICAgICAgICBDb250ZXh0TWVudSAvLyDQmtC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgfSxcbiAgICBwcm9wczoge1xuXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlX3NjaGVtZV9jb2RlOiAnY2FsY3VsYXRvcicsIC8vINCY0LzRjyDQsNC60YLQuNCy0L3QvtC5INGC0LXQvNGLXG4gICAgICAgICAgICBzY2hlbWU6IHt9LCAvLyDQkNC60YLQuNCy0L3QsNGPINGB0YXQtdC80LBcbiAgICAgICAgICAgIGNvbnRleHRfbWVudV9vYmplY3Q6IG51bGwsIC8vINCe0LHRitC10LrRgiDQutC+0L3RgtC10LrRgdGC0L3QvtCz0L4g0LzQtdC90Y5cblxuICAgICAgICAgICAgbW91c2VfeDogMCxcbiAgICAgICAgICAgIG1vdXNlX3k6IDAsXG4gICAgICAgICAgICB3b3Jrc3BhY2Vfd2lkdGg6IG51bGwsIC8vINCo0LjRgNC40L3QsCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICAgICAgd29ya3NwYWNlX2hlaWdodDogbnVsbCwgLy8g0JLRi9GB0L7RgtCwINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgICAgICBob2xkX3hfZmFjdG9yOiBudWxsLCAvLyDQn9C+0L/RgNCw0LLQutCwINC+0LHRitC10LrRgtCwINC/0L4geFxuICAgICAgICAgICAgaG9sZF95X2ZhY3RvcjogbnVsbCwgLy8g0J/QvtC/0YDQsNCy0LrQsCDQvtCx0YrQtdC60YLQsCDQv9C+IHlcbiAgICAgICAgICAgIHdvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQ6IGZhbHNlLCAvLyDQoNCw0LfQvNC10YAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0Lgg0L7Qv9GA0LXQtNC10LvRkdC9XG5cbiAgICAgICAgICAgIHBsYXRvX3g6IDAsIC8vINCh0LzQtdGJ0LXQvdC40LUg0LrQsNGA0YLRiyDQv9C+INC+0YHQuCDQpVxuICAgICAgICAgICAgcGxhdG9feTogMCwgLy8g0KHQvNC10YnQtdC90LjQtSDQutCw0YDRgtGLINC/0L4g0L7RgdC4IFlcbiAgICAgICAgICAgIHBsYXRvX3hfc3RhcnQ6IDAsIC8vINCk0LjQutGB0LDRhtC40Y8g0L3QsNGH0LDQu9GM0L3Ri9GFINC60L7QvtGA0LTQuNC90LDRgiDQv9C+INC+0YHQuCDQpVxuICAgICAgICAgICAgcGxhdG9feV9zdGFydDogMCwgLy8g0KTQuNC60YHQsNGG0LjRjyDQvdCw0YfQsNC70YzQvdGL0YUg0LrQvtC+0YDQtNC40L3QsNGCINC/0L4g0L7RgdC4IFlcblxuICAgICAgICAgICAgYm9keV94X2ZhY3RvcjogMCwgLy8g0JrQvtGN0YTRhNC40YbQuNC10L3RglxuICAgICAgICAgICAgYm9keV95X2ZhY3RvcjogMCxcblxuICAgICAgICAgICAgbm9kZTogbnVsbCwgLy8g0JTQsNC90L3Ri9C1INC90L7QtNCwXG4gICAgICAgICAgICBhY3RpdmVfbm9kZTogbnVsbCwgLy8g0JLRi9C00LXQu9C10L3QvdGL0Lkg0L3QvtC0XG4gICAgICAgICAgICBsYXN0X2hvbGRfeDogMCwgLy8g0J/QvtC30LjRhtC40Y8g0L3QvtC00LAg0L/QtdGA0LXQtCDQv9C10YDQtdC80LXRidC10L3QuNC10Lwg0L/QviBYXG4gICAgICAgICAgICBsYXN0X2hvbGRfeTogMCwgLy8g0J/QvtC30LjRhtC40Y8g0L3QvtC00LAg0L/QtdGA0LXQtCDQv9C10YDQtdC80LXRidC10L3QuNC10Lwg0L/QviBZXG5cbiAgICAgICAgICAgIGxpbmVzOiBbXSwgLy8g0JvQuNC90LjQuCAtINGB0LLRj9C30LhcbiAgICAgICAgICAgIGxpbmVzX29iamVjdHM6IFtdLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBub2RlcygpIHsgLy8g0J3QvtC00Ysg0YHRhdC10LzRi1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lPy5ub2Rlc1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUoKSAvLyDQo9GB0YLQsNC90L7QstC40YLRjCDRgNCw0LfQvNC10YDRiyDQvtC60L3QsFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kZWZpbmVXb3Jrc3BhY2VTaXplKVxuICAgICAgICB0aGlzLmdldFNjaGVtZSgoKSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucGxhdG9feCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRoaXMucGxhdG9feSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBsYXRvX3hfc3RhcnQgPSB0aGlzLnBsYXRvX3hcbiAgICAgICAgICAgIHRoaXMucGxhdG9feV9zdGFydCA9IHRoaXMucGxhdG9feVxuICAgICAgICAgICAgdGhpcy5hZGRMaW5rcygpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBiZWZvcmVVbm1vdW50KCkgeyAvLyDQn9C10YDQtdC0INGA0LDQt9C80L7QvdGC0LjRgNC+0LLQsNC90LjQtdC8INGD0LTQsNC70LjRgtGMINGB0LvRg9GI0LDRgtC10LvRjCDRgNCw0LfQvNC10YDQvtCyINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCe0L/RgNC10LTQtdC70LjRgtGMINGA0LDQt9C80LXRgCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICBkZWZpbmVXb3Jrc3BhY2VTaXplKCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy4kZWwucGFyZW50Tm9kZVxuICAgICAgICAgICAgICAgIC8vINCX0LDQv9C40YHRi9Cy0LDQtdC8INGN0YLQuCDQtNCw0L3QvdGL0LUg0LIg0LPQu9C+0LHQsNC70YzQvdGL0LUg0L/QtdGA0LXQvNC10L3QvdGL0LUgS3JpdGlcbiAgICAgICAgICAgICAgICBLcml0aS5nbG9iYWwud29ya3NwYWNlX3dpZHRoID0gdGhpcy53b3Jrc3BhY2Vfd2lkdGggPSBwYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgICAgICAgICAgS3JpdGkuZ2xvYmFsLndvcmtzcGFjZV9oZWlnaHQgPSB0aGlzLndvcmtzcGFjZV9oZWlnaHQgPSBwYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndvcmtzcGFjZV93aWR0aCAmJiB0aGlzLndvcmtzcGFjZV9oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQs9GA0YPQt9C40YLRjCDRgdGF0LXQvNGDXG4gICAgICAgIGdldFNjaGVtZShmbikge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuU2NoZW1lOmdldFNjaGVtZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAnc2NoZW1lX2NvZGUnOiB0aGlzLmFjdGl2ZV9zY2hlbWVfY29kZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVtZSA9IHJlc3BvbnNlLnNjaGVtZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7Rh9C40YHRgtC40YLRjCDQvdC+0LTRiyDQvtGCINC70LjRiNC90LjRhSDQtNCw0L3QvdGL0YVcbiAgICAgICAgc2FuaXRpemVOb2RlcygpIHtcbiAgICAgICAgICAgIGxldCBub2RlcyA9IF8uY2xvbmVEZWVwKHRoaXMuc2NoZW1lLm5vZGVzKVxuICAgICAgICAgICAgbm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUuc3RhdGljXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KHQvtGF0YDQsNC90LjRgtGMINC90L7QtNGLXG4gICAgICAgIHNldFNjaGVtZSgpIHtcblxuICAgICAgICAgICAgY29uc3Qgc2NoZW1lID0gXy5jbG9uZURlZXAodGhpcy5zY2hlbWUpXG4gICAgICAgICAgICBzY2hlbWUubm9kZXMgPSB0aGlzLnNhbml0aXplTm9kZXMoKVxuXG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5TY2hlbWU6c2V0U2NoZW1lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZV9jb2RlOiB0aGlzLmFjdGl2ZV9zY2hlbWVfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lX2RhdGE6IHNjaGVtZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm9kZXMgc2F2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQlNCy0LjQs9Cw0YLRjCDQutCw0YDRgtGDXG4gICAgICAgIG1vdmVQbGF0bygpIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZF94X2ZhY3RvciA9IHRoaXMubW91c2VfeCAtIHRoaXMucGxhdG9feFxuICAgICAgICAgICAgdGhpcy5ob2xkX3lfZmFjdG9yID0gdGhpcy5tb3VzZV95IC0gdGhpcy5wbGF0b195XG4gICAgICAgICAgICB0aGlzLmhvbGRfcGxhdG8gPSB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgdGC0LDQstC40YLRjCDQutCw0YDRgtGDXG4gICAgICAgIGRyb3BQbGF0bygpIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZF9wbGF0byA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnNldFNjaGVtZSgpIC8vINCh0L7RhdGA0LDQvdC40YLRjCDRgdC+0YHRgtC+0Y/QvdC40LVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQpNC40LrRgdC40YDQvtCy0LDRgtGMINC00LLQuNC20LXQvdC40LUg0LzRi9GI0LhcbiAgICAgICAgbW91c2Vtb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX3ggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgdGhpcy5tb3VzZV95ID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgIHRoaXMubW92ZU5vZGUoKSAvLyDQlNCy0LjQs9Cw0YLRjCDQvtCx0YrQtdC60YIg0LXRgdC70Lgg0L7QvSDQsNC60YLQuNCy0LXQvVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCf0LXRgNC10LzQtdGJ0LXQvdC40LUg0L3QvtC00LBcbiAgICAgICAgbW92ZU5vZGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVfbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueCA9IHRoaXMubW91c2VfeCAtIHRoaXMuaG9sZF94X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUucG9pbnQueSA9IHRoaXMubW91c2VfeSAtIHRoaXMuaG9sZF95X2ZhY3RvclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdExpbmVzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LTQstC40LPQsNC10YLRgdGPINC60LDRgNGC0LBcbiAgICAgICAgICAgIGlmICh0aGlzLmhvbGRfcGxhdG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRvX3ggPSB0aGlzLm1vdXNlX3ggLSB0aGlzLmhvbGRfeF9mYWN0b3JcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRvX3kgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLmhvbGRfeV9mYWN0b3JcblxuICAgICAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucGxhdG9feCArIHRoaXMuYm9keV94X2ZhY3RvcixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnBsYXRvX3kgKyB0aGlzLmJvZHlfeV9mYWN0b3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGlzLnF1YW50aXplT2JqZWN0cygpXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNGF0LLQsNGCINC90L7QtNCwXG4gICAgICAgIG5vZGVIb2xkKG5vZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNhdmVIb2xkUG9zaXRpb24oKVxuICAgICAgICAgICAgbm9kZS5zdGF0aWMuZm9jdXMgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhvbGRfeF9mYWN0b3IgPSB0aGlzLm1vdXNlX3ggLSBub2RlLnBvaW50LnhcbiAgICAgICAgICAgIHRoaXMuaG9sZF95X2ZhY3RvciA9IHRoaXMubW91c2VfeSAtIG5vZGUucG9pbnQueVxuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbm9kZSA9IG5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0YTQuNC60YHQuNGA0L7QstCw0YLRjCDQv9C+0LfQuNGG0LjRjiDQvdC+0LTQsFxuICAgICAgICBzYXZlSG9sZFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0X2hvbGRfeCA9IHRoaXMubW91c2VfeFxuICAgICAgICAgICAgdGhpcy5sYXN0X2hvbGRfeSA9IHRoaXMubW91c2VfeVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjRgtGMINC90L7QtFxuICAgICAgICBub2RlRHJvcCgpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ub2Rlcy5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0YXRpYy5mb2N1cyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlID0gbnVsbFxuXG4gICAgICAgICAgICAvLyDQodC+0YXRgNCw0L3Rj9GC0Ywg0YLQvtC70YzQutC+INC10YHQu9C4INCx0YvQuyDRgdC00LLQuNC90YPRgiDQvtCx0YrQtdC60YJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RfaG9sZF94ICE9PSB0aGlzLm1vdXNlX3ggfHwgdGhpcy5sYXN0X2hvbGRfeSAhPT0gdGhpcy5tb3VzZV95KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTY2hlbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YLQutGA0YvRgtGMINC80LXQvdGOINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIHdvcmtzcGFjZUNvbnRleHRNZW51KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y4g0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LgnKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YLQutGA0YvRgtGMINC60L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y5cbiAgICAgICAgb3BlbkNvbnRleHRNZW51KG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF9tZW51X29iamVjdCA9IG5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0LrRgNGL0YLRjCDQutC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgICAgIGNsb3NlQ29udGV4dE1lbnUoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfbWVudV9vYmplY3QgPSBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgtC60YDRi9GC0Ywg0LrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjiDQvdC+0LTQsFxuICAgICAgICBjbGlja0NvbnRleHRNZW51SXRlbShjb2RlLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gJ29wZW5Ob2RlU2V0dGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gY29udGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUgPT09ICdjbG9uZU5vZGUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVVVUlEKCh1dWlkKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQudXVpZCA9IHV1aWRcbiAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5wb2ludC54ICs9IDEwMFxuICAgICAgICAgICAgICAgIC8vICAgICBjb250ZXh0LnBvaW50LnkgKz0gMTAwXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZW1lLm5vZGVzLnB1c2goY29udGV4dClcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Y2xvbmVOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgdGhlbjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHJlc3BvbnNlLm5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucG9pbnQueCArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucG9pbnQueSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1lLm5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdGVzdFBsYXRvKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9CU0LLQuNCz0LDRjiDRgdGC0YDQtdC70LrQuCcpXG4gICAgICAgICAgICBsZXQgZWwgPSB0aGlzLiRyZWZzWydwbGF0byddXG4gICAgICAgICAgICBlbC5zdHlsZS5tYXJnaW5MZWZ0ICs9IDEwMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQv9GA0L7RgdC40YLRjCDQs9C10L3QtdGA0LDRhtC40Y4gdXVpZCB0b2RvOiDQl9Cw0YfQtdC8Pz8/XG4gICAgICAgIGNyZWF0ZVVVSUQoZm4pIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Y3JlYXRlVVVJRCcsXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmbihyZXNwb25zZS51dWlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgtC+0LHRgNCw0LfQuNGC0Ywg0YHRhtC10L/QutC4XG4gICAgICAgIGFkZExpbmtzKCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1lLmxpbmtzLm1hcChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMaW5rKGxpbmspXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40YLRjCDRgdGG0LXQv9C60YNcbiAgICAgICAgYWRkTGluayhsaW5rLCBzYXZlKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudF9hID0gdGhpcy4kcmVmc1tsaW5rWzBdXVswXS4kZWxcbiAgICAgICAgICAgIGxldCBlbGVtZW50X2IgPSB0aGlzLiRyZWZzW2xpbmtbMV1dWzBdLiRlbFxuXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBzdGFydFBsdWc6ICdkaXNjJyxcbiAgICAgICAgICAgICAgICBlbmRQbHVnOiAnYXJyb3cxJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGluZV9vYmplY3QgPSBMZWFkZXJMaW5lLnNldExpbmUoZWxlbWVudF9hLCBlbGVtZW50X2IsIG9wdGlvbnMpXG4gICAgICAgICAgICB0aGlzLmxpbmVzX29iamVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGluayxcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGxpbmVfb2JqZWN0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvcnJlY3RMaW5lcygpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keV94X2ZhY3RvciA9IHRoaXMucGxhdG9feF9zdGFydCAtIHRoaXMucGxhdG9feFxuICAgICAgICAgICAgdGhpcy5ib2R5X3lfZmFjdG9yID0gdGhpcy5wbGF0b195X3N0YXJ0IC0gdGhpcy5wbGF0b195XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF0b194X3N0YXJ0JywgdGhpcy5wbGF0b194X3N0YXJ0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXRvX3gnLCB0aGlzLnBsYXRvX3gpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGxhdG9feF9zdGFydCcsIHRoaXMucGxhdG9feF9zdGFydClcblxuICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnBsYXRvX3ggKyB0aGlzLnBsYXRvX3hfc3RhcnQgLSB0aGlzLnBsYXRvX3gsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnBsYXRvX3kgKyB0aGlzLnBsYXRvX3lfc3RhcnQgLSB0aGlzLnBsYXRvX3lcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMubGluZXNfb2JqZWN0cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5vYmplY3QucG9zaXRpb24oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVMaW5rKCl7fSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzcyc7XG5ib2R5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi53b3Jrc3BhY2Uge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJGJnLWRhcms7XG4gICAgY29sb3I6ICRmLWRhcms7XG5cbiAgICAmX19wbGF0byB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAua3JpdGktcHJlbG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3NTtcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgei1pbmRleDogMTAwMDAxO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJvYXJkXCI+XG4gICAgICAgIDxXb3Jrc3BhY2UgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgV29ya3NwYWNlIGZyb20gXCIuLi9pbnRlcmZhY2UvV29ya3NwYWNlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJCb2FyZFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgV29ya3NwYWNlXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmJvYXJkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogIzgwZGI4MDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwibm9kZVwiIGNsYXNzPVwibW9kdWxlXCIgOnN0eWxlPVwic3R5bGVfbW9kdWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2R1bGVfX3RpdGxlXCIgOnN0eWxlPVwic3R5bGVfbW9kdWxlX3RpdGxlXCI+XG4gICAgICAgICAgICA8aSA6Y2xhc3M9XCJub2RlLnN0YXRpYy5pY29uXCI+PC9pPlxuICAgICAgICAgICAge3sgbm9kZS5zdGF0aWMuc2V0dGluZ3MubmFtZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJNb2R1bGVcIixcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBPYmplY3RcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHN0eWxlX21vZHVsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuc3RhdGljLnN0eWxlLm1vZHVsZVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZV9tb2R1bGVfdGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnN0YXRpYy5zdHlsZS5tb2R1bGVfdGl0bGVcbiAgICAgICAgfVxuICAgIH0sXG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm1vZHVsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxufVxuXG4ubW9kdWxlIC5tb2R1bGVfX3RpdGxlIGkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5rcml0aS1jb250ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjA3ODQzMTM3KTtcXG4gIHBhZGRpbmc6IDE4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmtyaXRpLWNvbnRleHRfX2l0ZW0ge1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjMjY1NTFiO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiA1cHggNXB4O1xcbiAgcGFkZGluZzogMTBweCAyMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcbi5rcml0aS1jb250ZXh0X19pdGVtIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ua3JpdGktY29udGV4dF9faXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjOTBjZTgyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbnRleHRNZW51LnZ1ZVwiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL3Njc3Mva3JpdGkucGFsZXR0ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtJO0VBQ0ksbUJDVkc7RURXSCxjQ1ZBO0VEV0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQUlRO0VBQ0ksa0JBQUE7QUFGWjtBQUlRO0VBQ0ksbUJBQUE7QUFGWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzcyc7XFxuLmtyaXRpLWNvbnRleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYyOTtcXG4gICAgcGFkZGluZzogMThweCAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICZfX2l0ZW1zIHtcXG5cXG4gICAgfVxcbiAgICAmX19pdGVtIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICRiZy1saWdodDtcXG4gICAgICAgIGNvbG9yOiAkZi1kZWY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBtYXJnaW46IDVweCA1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIxcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgIGkge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5MGNlODI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXCIsXCIkYmctZGFyazogI2U4ZThlODtcXG4kYmctbGlnaHQ6ICNkOWQ5ZDk7XFxuJGYtZGVmOiAjMjY1NTFiO1xcbiRiLWRlZjogIzcyYmQ4ZjtcXG4kZi1kYXJrOiAjMWUyNDFlO1xcbiRjb2xvci0xMDA6ICNkYzI1Y2I7XFxuJGNvbG9yLTEwMDogIzliOGQ4ZDtcXG4kY29sb3ItMTAwOiAjMTQ0YzYwO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ub2RlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLm5vZGUuZm9jdXMge1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubm9kZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgJi5mb2N1cyB7XFxuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ub2RlLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYxMTc2NDcwNTkpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLm5vZGUtbW9kYWxfX2JvZHkge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcbi5ub2RlLW1vZGFsX19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ubm9kZS1tb2RhbF9fY2xvc2UgaSB7XFxuICBjb2xvcjogI2EwYTBhMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4ubm9kZS1tb2RhbF9fY2xvc2UgaTpob3ZlciB7XFxuICBjb2xvcjogI2ZmNGY0ZjtcXG59XFxuLm5vZGUtbW9kYWxfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5vZGUtbW9kYWxfX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19tZW51X19pdGVtIHtcXG4gIHBhZGRpbmc6IDBweCAxMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM5ZDlkOWQ7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcbi5ub2RlLW1vZGFsX19tZW51X19pdGVtLmFjdGl2ZSB7XFxuICBjb2xvcjogIzcyODRkNjtcXG59XFxuLm5vZGUtbW9kYWxfX2Zvcm0ge1xcbiAgZmxleDogMSAwIDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUFSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFTUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUFo7QUFTWTtFQUNJLGNBQUE7QUFQaEI7QUFZSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQVZSO0FBYUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFhUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFYWjtBQWFZO0VBQ0ksY0FBQTtBQVhoQjtBQWdCSTtFQUNJLFdBQUE7QUFkUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubm9kZS1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5YztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAmX19oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG5cXG4gICAgfVxcblxcbiAgICAmX19jbG9zZSB7XFxuICAgICAgICBpIHtcXG4gICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNGY0ZjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgICZfX21lbnUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuXFxuICAgICAgICAmX19pdGVtIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTFweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6ICM5ZDlkOWQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG5cXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzI4NGQ2O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19mb3JtIHtcXG4gICAgICAgIGZsZXg6IDEgMCAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ud29ya3NwYWNlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbiAgY29sb3I6ICMxZTI0MWU7XFxufVxcbi53b3Jrc3BhY2VfX3BsYXRvIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ud29ya3NwYWNlIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTg4MjM1Mjk0KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMTAwMDAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIixcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGtCQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkNSTTtFRFNOLGNDTEs7QURJVDtBQUdJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFGUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL2tyaXRpLnBhbGV0dGUuc2Nzcyc7XFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLndvcmtzcGFjZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICRiZy1kYXJrO1xcbiAgICBjb2xvcjogJGYtZGFyaztcXG5cXG4gICAgJl9fcGxhdG8ge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLmtyaXRpLXByZWxvYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwMTtcXG4gICAgfVxcbn1cXG5cIixcIiRiZy1kYXJrOiAjZThlOGU4O1xcbiRiZy1saWdodDogI2Q5ZDlkOTtcXG4kZi1kZWY6ICMyNjU1MWI7XFxuJGItZGVmOiAjNzJiZDhmO1xcbiRmLWRhcms6ICMxZTI0MWU7XFxuJGNvbG9yLTEwMDogI2RjMjVjYjtcXG4kY29sb3ItMTAwOiAjOWI4ZDhkO1xcbiRjb2xvci0xMDA6ICMxNDRjNjA7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvYXJkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6ICM4MGRiODA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2R1bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2R1bGUgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuLm1vZHVsZSAubW9kdWxlX190aXRsZSBpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFDSTtFQUNJLGlCQUFBO0FBQ1I7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5tb2R1bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgIH1cXG59XFxuXFxuLm1vZHVsZSAubW9kdWxlX190aXRsZSBpIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8qISBMZWFkZXJMaW5lIHYxLjAuNSAoYykgYW5zZWtpIGh0dHBzOi8vYW5zZWtpLmdpdGh1Yi5pby9sZWFkZXItbGluZS8gKi9cclxudmFyIExlYWRlckxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgdmFyIHRlLCBnLCB5LCBTLCBfLCBvLCB0LCBoLCBmLCBwLCBhLCBpLCBsLCB2ID0gXCJsZWFkZXItbGluZVwiLFxyXG4gICAgTSA9IDEsXHJcbiAgICBJID0gMixcclxuICAgIEMgPSAzLFxyXG4gICAgTCA9IDQsXHJcbiAgICBuID0ge1xyXG4gICAgICB0b3A6IE0sXHJcbiAgICAgIHJpZ2h0OiBJLFxyXG4gICAgICBib3R0b206IEMsXHJcbiAgICAgIGxlZnQ6IExcclxuICAgIH0sXHJcbiAgICBBID0gMSxcclxuICAgIFYgPSAyLFxyXG4gICAgUCA9IDMsXHJcbiAgICBOID0gNCxcclxuICAgIFQgPSA1LFxyXG4gICAgbSA9IHtcclxuICAgICAgc3RyYWlnaHQ6IEEsXHJcbiAgICAgIGFyYzogVixcclxuICAgICAgZmx1aWQ6IFAsXHJcbiAgICAgIG1hZ25ldDogTixcclxuICAgICAgZ3JpZDogVFxyXG4gICAgfSxcclxuICAgIG5lID0gXCJiZWhpbmRcIixcclxuICAgIHIgPSB2ICsgXCItZGVmc1wiLFxyXG4gICAgcyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJsZWFkZXItbGluZS1kZWZzXCI+PHN0eWxlPjwhW0NEQVRBWy5sZWFkZXItbGluZXtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzp2aXNpYmxlIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lIWltcG9ydGFudDtmb250LXNpemU6MTZweH0jbGVhZGVyLWxpbmUtZGVmc3t3aWR0aDowO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MH0ubGVhZGVyLWxpbmUtbGluZS1wYXRoe2ZpbGw6bm9uZX0ubGVhZGVyLWxpbmUtbWFzay1iZy1yZWN0e2ZpbGw6I2ZmZn0ubGVhZGVyLWxpbmUtY2Fwcy1tYXNrLWFuY2hvciwubGVhZGVyLWxpbmUtY2Fwcy1tYXNrLW1hcmtlci1zaGFwZXtmaWxsOiMwMDB9LmxlYWRlci1saW5lLWNhcHMtbWFzay1hbmNob3J7c3Ryb2tlOiMwMDB9LmxlYWRlci1saW5lLWNhcHMtbWFzay1saW5lLC5sZWFkZXItbGluZS1wbHVncy1mYWNle3N0cm9rZTp0cmFuc3BhcmVudH0ubGVhZGVyLWxpbmUtbGluZS1tYXNrLXNoYXBle3N0cm9rZTojZmZmfS5sZWFkZXItbGluZS1saW5lLW91dGxpbmUtbWFzay1zaGFwZXtzdHJva2U6IzAwMH0ubGVhZGVyLWxpbmUtcGx1Zy1tYXNrLXNoYXBle2ZpbGw6I2ZmZjtzdHJva2U6IzAwMH0ubGVhZGVyLWxpbmUtcGx1Zy1vdXRsaW5lLW1hc2stc2hhcGV7ZmlsbDojMDAwO3N0cm9rZTojZmZmfS5sZWFkZXItbGluZS1hcmVhQW5jaG9ye3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OnZpc2libGUhaW1wb3J0YW50fV1dPjwvc3R5bGU+PGRlZnM+PGNpcmNsZSBpZD1cImxlYWRlci1saW5lLWRpc2NcIiBjeD1cIjBcIiBjeT1cIjBcIiByPVwiNVwiLz48cmVjdCBpZD1cImxlYWRlci1saW5lLXNxdWFyZVwiIHg9XCItNVwiIHk9XCItNVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiLz48cG9seWdvbiBpZD1cImxlYWRlci1saW5lLWFycm93MVwiIHBvaW50cz1cIi04LC04IDgsMCAtOCw4IC01LDBcIi8+PHBvbHlnb24gaWQ9XCJsZWFkZXItbGluZS1hcnJvdzJcIiBwb2ludHM9XCItNCwtOCA0LDAgLTQsOCAtNyw1IC0yLDAgLTcsLTVcIi8+PHBvbHlnb24gaWQ9XCJsZWFkZXItbGluZS1hcnJvdzNcIiBwb2ludHM9XCItNCwtNSA4LDAgLTQsNVwiLz48ZyBpZD1cImxlYWRlci1saW5lLWhhbmRcIj48cGF0aCBzdHlsZT1cImZpbGw6ICNmY2ZjZmNcIiBkPVwiTTkuMTkgMTEuMTRoNC43NWMxLjM4IDAgMi40OS0xLjExIDIuNDktMi40OSAwLS41MS0uMTUtLjk4LS40MS0xLjM3aDEuM2MxLjM4IDAgMi40OS0xLjExIDIuNDktMi40OXMtMS4xMS0yLjUzLTIuNDktMi41M2gxLjAyYzEuMzggMCAyLjQ5LTEuMTEgMi40OS0yLjQ5cy0xLjExLTIuNDktMi40OS0yLjQ5aDE0Ljk2YzEuMzcgMCAyLjQ5LTEuMTEgMi40OS0yLjQ5cy0xLjExLTIuNDktMi40OS0yLjQ5SDE2LjU4QzE2LTkuODYgMTQuMjgtMTEuMTQgOS43LTExLjE0Yy00Ljc5IDAtNi41NSAzLjQyLTcuODcgNC43M0gtMi4xNHYxMy4yM2gzLjY4QzMuMjkgOS45NyA1LjQ3IDExLjE0IDkuMTkgMTEuMTRMOS4xOSAxMS4xNFpcIi8+PHBhdGggc3R5bGU9XCJmaWxsOiBibGFja1wiIGQ9XCJNMTMuOTUgMTJjMS44NSAwIDMuMzUtMS41IDMuMzUtMy4zNSAwLS4xNy0uMDItLjM0LS4wNC0uNTFoLjA3YzEuODUgMCAzLjM1LTEuNSAzLjM1LTMuMzUgMC0uNzktLjI3LTEuNTEtLjcyLTIuMDggMS4wMy0uNTcgMS43NC0xLjY3IDEuNzQtMi45MyAwLS41OS0uMTYtMS4xNS0uNDMtMS42M2gxMi4wNGMxLjg1IDAgMy4zNS0xLjUgMy4zNS0zLjM1IDAtMS44NS0xLjUtMy4zNS0zLjM1LTMuMzVIMTcuMkMxNi4yNi0xMC45MyAxMy45MS0xMiA5LjctMTIgNS4zNi0xMiAzLjIyLTkuNCAxLjk0LTcuODRjMCAwLS4yOS4zMy0uNS41Ny0uNjMgMC0zLjU4IDAtMy41OCAwQy0yLjYxLTcuMjctMy02Ljg4LTMtNi40MXYxMy4yM2MwIC40Ny4zOS44Ni44Ni44NiAwIDAgMi40OCAwIDMuMiAwQzIuOSAxMC43MyA1LjI5IDEyIDkuMTkgMTJMMTMuOTUgMTJaTTkuMTkgMTAuMjhjLTMuNDYgMC01LjMzLTEuMDUtNi45LTMuODctLjE1LS4yNy0uNDQtLjQ0LS43NS0uNDQgMCAwLTEuODEgMC0yLjgyIDBWLTUuNTVjMS4wNiAwIDMuMTEgMCAzLjExIDAgLjI1IDAgLjQ0LS4wNi42MS0uMjVsLjgzLS45NWMxLjIzLTEuNDkgMi45MS0zLjUzIDYuNDMtMy41MyAzLjQ1IDAgNC45Ljc0IDUuNTcgMS43MmgtNC4zYy0uNDggMC0uODYuMzgtLjg2Ljg2cy4zOS44Ni44Ni44NmgyMi4zNGMuOSAwIDEuNjMuNzMgMS42MyAxLjYzIDAgLjktLjczIDEuNjMtMS42MyAxLjYzSDE1LjgzYy0uNDggMC0uODYuMzgtLjg2Ljg2IDAgLjQ3LjM5Ljg2Ljg2Ljg2aDIuNTJjLjkgMCAxLjYzLjczIDEuNjMgMS42M3MtLjczIDEuNjMtMS42MyAxLjYzaC0zLjEyYy0uNDggMC0uODYuMzgtLjg2Ljg2IDAgLjQ3LjM5Ljg2Ljg2Ljg2aDIuMTFjLjg4IDAgMS42My43NiAxLjYzIDEuNjcgMCAuOS0uNzMgMS42My0xLjYzIDEuNjNoLTMuMmMtLjQ4IDAtLjg2LjM5LS44Ni44NiAwIC40Ny4zOS44Ni44Ni44NmgxLjM2Yy4wNS4xNi4wOS4zNC4wOS41MSAwIC45LS43MyAxLjYzLTEuNjMgMS42M0MxMy45NSAxMC4yOCA5LjE5IDEwLjI4IDkuMTkgMTAuMjhaXCIvPjwvZz48ZyBpZD1cImxlYWRlci1saW5lLWNyb3NzaGFpclwiPjxwYXRoIGQ9XCJNMC03OC45N2MtNDMuNTQgMC03OC45NyAzNS40My03OC45NyA3OC45NyAwIDQzLjU0IDM1LjQzIDc4Ljk3IDc4Ljk3IDc4Ljk3czc4Ljk3LTM1LjQzIDc4Ljk3LTc4Ljk3Qzc4Ljk3LTQzLjU0IDQzLjU1LTc4Ljk3IDAtNzguOTdaTTc2LjUxLTEuMjFoLTkuOTF2LTkuMTFoLTIuNDN2OS4xMWgtMTEuNDVjLS42NC0yOC4xMi0yMy4zOC01MC44Ni01MS41LTUxLjVWLTY0LjE3aDkuMTFWLTY2LjZoLTkuMTF2LTkuOTFDNDIuNDYtNzUuODYgNzUuODYtNDIuNDUgNzYuNTEtMS4yMVpNLTEuMjEtMzAuNzZoLTkuMTF2Mi40M2g5LjExVi00LjJjLTEuNDQuNDItMi41NyAxLjU0LTIuOTggMi45OEgtMjguMzN2LTkuMTFoLTIuNDN2OS4xMUgtNTAuMjlDLTQ5LjY1LTI4LTI3Ljk5LTQ5LjY1LTEuMjEtNTAuMjlWLTMwLjc2Wk0tMzAuNzYgMS4yMXY5LjExaDIuNDN2LTkuMTFILTQuMmMuNDIgMS40NCAxLjU0IDIuNTcgMi45OCAyLjk4djI0LjEzaC05LjExdjIuNDNoOS4xMXYxOS41M0MtMjcuOTkgNDkuNjUtNDkuNjUgMjgtNTAuMjkgMS4yMUgtMzAuNzZaTTEuMjIgMzAuNzVoOS4xMXYtMi40M2gtOS4xMVY0LjJjMS40NC0uNDIgMi41Ni0xLjU0IDIuOTgtMi45OGgyNC4xM3Y5LjExaDIuNDN2LTkuMTFoMTkuNTNDNDkuNjUgMjggMjggNDkuNjUgMS4yMiA1MC4yOVYzMC43NVpNMzAuNzYtMS4yMXYtOS4xMWgtMi40M3Y5LjExSDQuMmMtLjQyLTEuNDQtMS41NC0yLjU2LTIuOTgtMi45OFYtMjguMzNoOS4xMXYtMi40M2gtOS4xMVYtNTAuMjlDMjgtNDkuNjUgNDkuNjUtMjggNTAuMjktMS4yMUgzMC43NlpNLTEuMjEtNzYuNTF2OS45MWgtOS4xMXYyLjQzaDkuMTF2MTEuNDVjLTI4LjEyLjY0LTUwLjg2IDIzLjM4LTUxLjUgNTEuNUgtNjQuMTd2LTkuMTFILTY2LjZ2OS4xMWgtOS45MUMtNzUuODYtNDIuNDUtNDIuNDUtNzUuODYtMS4yMS03Ni41MVpNLTc2LjUxIDEuMjFoOS45MXY5LjExaDIuNDN2LTkuMTFoMTEuNDVjLjY0IDI4LjEyIDIzLjM4IDUwLjg2IDUxLjUgNTEuNXYxMS40NWgtOS4xMXYyLjQzaDkuMTF2OS45MUMtNDIuNDUgNzUuODYtNzUuODYgNDIuNDUtNzYuNTEgMS4yMVpNMS4yMiA3Ni41MXYtOS45MWg5LjExdi0yLjQzaC05LjExdi0xMS40NWMyOC4xMi0uNjQgNTAuODYtMjMuMzggNTEuNS01MS41aDExLjQ1djkuMTFoMi40M3YtOS4xMWg5LjkxQzc1Ljg2IDQyLjQ1IDQyLjQ1IDc1Ljg2IDEuMjIgNzYuNTFaXCIvPjxwYXRoIGQ9XCJNMCA4My41OC03LjEgOTYgNy4xIDk2WlwiLz48cGF0aCBkPVwiTTAtODMuNTggNy4xLTk2LTcuMS05NlwiLz48cGF0aCBkPVwiTTgzLjU4IDAgOTYgNy4xIDk2LTcuMVpcIi8+PHBhdGggZD1cIk0tODMuNTggMC05Ni03LjEtOTYgNy4xWlwiLz48L2c+PC9kZWZzPjwvc3ZnPicsXHJcbiAgICBhZSA9IHtcclxuICAgICAgZGlzYzoge1xyXG4gICAgICAgIGVsbUlkOiBcImxlYWRlci1saW5lLWRpc2NcIixcclxuICAgICAgICBub1JvdGF0ZTogITAsXHJcbiAgICAgICAgYkJveDoge1xyXG4gICAgICAgICAgbGVmdDogLTUsXHJcbiAgICAgICAgICB0b3A6IC01LFxyXG4gICAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgIHJpZ2h0OiA1LFxyXG4gICAgICAgICAgYm90dG9tOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aFI6IDIuNSxcclxuICAgICAgICBoZWlnaHRSOiAyLjUsXHJcbiAgICAgICAgYkNpcmNsZTogNSxcclxuICAgICAgICBzaWRlTGVuOiA1LFxyXG4gICAgICAgIGJhY2tMZW46IDUsXHJcbiAgICAgICAgb3ZlcmhlYWQ6IDAsXHJcbiAgICAgICAgb3V0bGluZUJhc2U6IDEsXHJcbiAgICAgICAgb3V0bGluZU1heDogNFxyXG4gICAgICB9LFxyXG4gICAgICBzcXVhcmU6IHtcclxuICAgICAgICBlbG1JZDogXCJsZWFkZXItbGluZS1zcXVhcmVcIixcclxuICAgICAgICBub1JvdGF0ZTogITAsXHJcbiAgICAgICAgYkJveDoge1xyXG4gICAgICAgICAgbGVmdDogLTUsXHJcbiAgICAgICAgICB0b3A6IC01LFxyXG4gICAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgIHJpZ2h0OiA1LFxyXG4gICAgICAgICAgYm90dG9tOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aFI6IDIuNSxcclxuICAgICAgICBoZWlnaHRSOiAyLjUsXHJcbiAgICAgICAgYkNpcmNsZTogNSxcclxuICAgICAgICBzaWRlTGVuOiA1LFxyXG4gICAgICAgIGJhY2tMZW46IDUsXHJcbiAgICAgICAgb3ZlcmhlYWQ6IDAsXHJcbiAgICAgICAgb3V0bGluZUJhc2U6IDEsXHJcbiAgICAgICAgb3V0bGluZU1heDogNFxyXG4gICAgICB9LFxyXG4gICAgICBhcnJvdzE6IHtcclxuICAgICAgICBlbG1JZDogXCJsZWFkZXItbGluZS1hcnJvdzFcIixcclxuICAgICAgICBiQm94OiB7XHJcbiAgICAgICAgICBsZWZ0OiAtOCxcclxuICAgICAgICAgIHRvcDogLTgsXHJcbiAgICAgICAgICB3aWR0aDogMTYsXHJcbiAgICAgICAgICBoZWlnaHQ6IDE2LFxyXG4gICAgICAgICAgcmlnaHQ6IDgsXHJcbiAgICAgICAgICBib3R0b206IDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoUjogNCxcclxuICAgICAgICBoZWlnaHRSOiA0LFxyXG4gICAgICAgIGJDaXJjbGU6IDgsXHJcbiAgICAgICAgc2lkZUxlbjogOCxcclxuICAgICAgICBiYWNrTGVuOiA4LFxyXG4gICAgICAgIG92ZXJoZWFkOiA4LFxyXG4gICAgICAgIG91dGxpbmVCYXNlOiAyLFxyXG4gICAgICAgIG91dGxpbmVNYXg6IDEuNVxyXG4gICAgICB9LFxyXG4gICAgICBhcnJvdzI6IHtcclxuICAgICAgICBlbG1JZDogXCJsZWFkZXItbGluZS1hcnJvdzJcIixcclxuICAgICAgICBiQm94OiB7XHJcbiAgICAgICAgICBsZWZ0OiAtNyxcclxuICAgICAgICAgIHRvcDogLTgsXHJcbiAgICAgICAgICB3aWR0aDogMTEsXHJcbiAgICAgICAgICBoZWlnaHQ6IDE2LFxyXG4gICAgICAgICAgcmlnaHQ6IDQsXHJcbiAgICAgICAgICBib3R0b206IDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoUjogMi43NSxcclxuICAgICAgICBoZWlnaHRSOiA0LFxyXG4gICAgICAgIGJDaXJjbGU6IDgsXHJcbiAgICAgICAgc2lkZUxlbjogOCxcclxuICAgICAgICBiYWNrTGVuOiA3LFxyXG4gICAgICAgIG92ZXJoZWFkOiA0LFxyXG4gICAgICAgIG91dGxpbmVCYXNlOiAxLFxyXG4gICAgICAgIG91dGxpbmVNYXg6IDEuNzVcclxuICAgICAgfSxcclxuICAgICAgYXJyb3czOiB7XHJcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtYXJyb3czXCIsXHJcbiAgICAgICAgYkJveDoge1xyXG4gICAgICAgICAgbGVmdDogLTQsXHJcbiAgICAgICAgICB0b3A6IC01LFxyXG4gICAgICAgICAgd2lkdGg6IDEyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgIHJpZ2h0OiA4LFxyXG4gICAgICAgICAgYm90dG9tOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aFI6IDMsXHJcbiAgICAgICAgaGVpZ2h0UjogMi41LFxyXG4gICAgICAgIGJDaXJjbGU6IDgsXHJcbiAgICAgICAgc2lkZUxlbjogNSxcclxuICAgICAgICBiYWNrTGVuOiA0LFxyXG4gICAgICAgIG92ZXJoZWFkOiA4LFxyXG4gICAgICAgIG91dGxpbmVCYXNlOiAxLFxyXG4gICAgICAgIG91dGxpbmVNYXg6IDIuNVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kOiB7XHJcbiAgICAgICAgZWxtSWQ6IFwibGVhZGVyLWxpbmUtaGFuZFwiLFxyXG4gICAgICAgIGJCb3g6IHtcclxuICAgICAgICAgIGxlZnQ6IC0zLFxyXG4gICAgICAgICAgdG9wOiAtMTIsXHJcbiAgICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDI0LFxyXG4gICAgICAgICAgcmlnaHQ6IDM3LFxyXG4gICAgICAgICAgYm90dG9tOiAxMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGhSOiAxMCxcclxuICAgICAgICBoZWlnaHRSOiA2LFxyXG4gICAgICAgIGJDaXJjbGU6IDM3LFxyXG4gICAgICAgIHNpZGVMZW46IDEyLFxyXG4gICAgICAgIGJhY2tMZW46IDMsXHJcbiAgICAgICAgb3ZlcmhlYWQ6IDM3XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3NzaGFpcjoge1xyXG4gICAgICAgIGVsbUlkOiBcImxlYWRlci1saW5lLWNyb3NzaGFpclwiLFxyXG4gICAgICAgIG5vUm90YXRlOiAhMCxcclxuICAgICAgICBiQm94OiB7XHJcbiAgICAgICAgICBsZWZ0OiAtOTYsXHJcbiAgICAgICAgICB0b3A6IC05NixcclxuICAgICAgICAgIHdpZHRoOiAxOTIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDE5MixcclxuICAgICAgICAgIHJpZ2h0OiA5NixcclxuICAgICAgICAgIGJvdHRvbTogOTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoUjogNDgsXHJcbiAgICAgICAgaGVpZ2h0UjogNDgsXHJcbiAgICAgICAgYkNpcmNsZTogOTYsXHJcbiAgICAgICAgc2lkZUxlbjogOTYsXHJcbiAgICAgICAgYmFja0xlbjogOTYsXHJcbiAgICAgICAgb3ZlcmhlYWQ6IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIEUgPSB7XHJcbiAgICAgIGJlaGluZDogbmUsXHJcbiAgICAgIGRpc2M6IFwiZGlzY1wiLFxyXG4gICAgICBzcXVhcmU6IFwic3F1YXJlXCIsXHJcbiAgICAgIGFycm93MTogXCJhcnJvdzFcIixcclxuICAgICAgYXJyb3cyOiBcImFycm93MlwiLFxyXG4gICAgICBhcnJvdzM6IFwiYXJyb3czXCIsXHJcbiAgICAgIGhhbmQ6IFwiaGFuZFwiLFxyXG4gICAgICBjcm9zc2hhaXI6IFwiY3Jvc3NoYWlyXCJcclxuICAgIH0sXHJcbiAgICBpZSA9IHtcclxuICAgICAgZGlzYzogXCJkaXNjXCIsXHJcbiAgICAgIHNxdWFyZTogXCJzcXVhcmVcIixcclxuICAgICAgYXJyb3cxOiBcImFycm93MVwiLFxyXG4gICAgICBhcnJvdzI6IFwiYXJyb3cyXCIsXHJcbiAgICAgIGFycm93MzogXCJhcnJvdzNcIixcclxuICAgICAgaGFuZDogXCJoYW5kXCIsXHJcbiAgICAgIGNyb3NzaGFpcjogXCJjcm9zc2hhaXJcIlxyXG4gICAgfSxcclxuICAgIFcgPSBbTSwgSSwgQywgTF0sXHJcbiAgICB4ID0gXCJhdXRvXCIsXHJcbiAgICBvZSA9IHtcclxuICAgICAgeDogXCJsZWZ0XCIsXHJcbiAgICAgIHk6IFwidG9wXCIsXHJcbiAgICAgIHdpZHRoOiBcIndpZHRoXCIsXHJcbiAgICAgIGhlaWdodDogXCJoZWlnaHRcIlxyXG4gICAgfSxcclxuICAgIEIgPSA4MCxcclxuICAgIFIgPSA0LFxyXG4gICAgRiA9IDUsXHJcbiAgICBHID0gMTIwLFxyXG4gICAgRCA9IDgsXHJcbiAgICB6ID0gMy43NSxcclxuICAgIGogPSAxMCxcclxuICAgIEggPSAzMCxcclxuICAgIFUgPSAuNTUyMjg0NyxcclxuICAgIFogPSAuMjUgKiBNYXRoLlBJLFxyXG4gICAgdSA9IC9eXFxzKihcXC0/W1xcZFxcLl0rKVxccyooXFwlKT9cXHMqJC8sXHJcbiAgICBiID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgZSA9IFwiLW1zLXNjcm9sbC1saW1pdFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBcIi1tcy1pbWUtYWxpZ25cIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcclxuICAgIGxlID0gIWUgJiYgISFkb2N1bWVudC51bmlxdWVJRCxcclxuICAgIHJlID0gXCJNb3pBcHBlYXJhbmNlXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgc2UgPSAhKGUgfHwgcmUgfHwgIXdpbmRvdy5jaHJvbWUgfHwgIXdpbmRvdy5DU1MpLFxyXG4gICAgdWUgPSAhZSAmJiAhbGUgJiYgIXJlICYmICFzZSAmJiAhd2luZG93LmNocm9tZSAmJiBcIldlYmtpdEFwcGVhcmFuY2VcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICBoZSA9IGxlIHx8IGUgPyAuMiA6IC4xLFxyXG4gICAgcGUgPSB7XHJcbiAgICAgIHBhdGg6IFAsXHJcbiAgICAgIGxpbmVDb2xvcjogXCJjb3JhbFwiLFxyXG4gICAgICBsaW5lU2l6ZTogNCxcclxuICAgICAgcGx1Z1NFOiBbbmUsIFwiYXJyb3cxXCJdLFxyXG4gICAgICBwbHVnU2l6ZVNFOiBbMSwgMV0sXHJcbiAgICAgIGxpbmVPdXRsaW5lRW5hYmxlZDogITEsXHJcbiAgICAgIGxpbmVPdXRsaW5lQ29sb3I6IFwiaW5kaWFucmVkXCIsXHJcbiAgICAgIGxpbmVPdXRsaW5lU2l6ZTogLjI1LFxyXG4gICAgICBwbHVnT3V0bGluZUVuYWJsZWRTRTogWyExLCAhMV0sXHJcbiAgICAgIHBsdWdPdXRsaW5lU2l6ZVNFOiBbMSwgMV1cclxuICAgIH0sXHJcbiAgICBrID0gKGEgPSB7fS50b1N0cmluZywgaSA9IHt9Lmhhc093blByb3BlcnR5LnRvU3RyaW5nLCBsID0gaS5jYWxsKE9iamVjdCksIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0LCBuO1xyXG4gICAgICByZXR1cm4gZSAmJiBcIltvYmplY3QgT2JqZWN0XVwiID09PSBhLmNhbGwoZSkgJiYgKCEodCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSkgfHwgKG4gPSB0Lmhhc093blByb3BlcnR5KFwiY29uc3RydWN0b3JcIikgJiYgdC5jb25zdHJ1Y3RvcikgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuICYmIGkuY2FsbChuKSA9PT0gbClcclxuICAgIH0pLFxyXG4gICAgdyA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgZSAmJiB3aW5kb3cuaXNGaW5pdGUoZSlcclxuICAgIH0sXHJcbiAgICBjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZSwgeCA9IHtcclxuICAgICAgICAgIGVhc2U6IFsuMjUsIC4xLCAuMjUsIDFdLFxyXG4gICAgICAgICAgbGluZWFyOiBbMCwgMCwgMSwgMV0sXHJcbiAgICAgICAgICBcImVhc2UtaW5cIjogWy40MiwgMCwgMSwgMV0sXHJcbiAgICAgICAgICBcImVhc2Utb3V0XCI6IFswLCAwLCAuNTgsIDFdLFxyXG4gICAgICAgICAgXCJlYXNlLWluLW91dFwiOiBbLjQyLCAwLCAuNTgsIDFdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiID0gMWUzIC8gNjAgLyAyLFxyXG4gICAgICAgIHQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZSwgYilcclxuICAgICAgICB9LFxyXG4gICAgICAgIG4gPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgZSAmJiB3aW5kb3cuaXNGaW5pdGUoZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGsgPSBbXSxcclxuICAgICAgICB3ID0gMDtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGwoKSB7XHJcbiAgICAgICAgdmFyIGkgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgbyA9ICExO1xyXG4gICAgICAgIGUgJiYgKG4uY2FsbCh3aW5kb3csIGUpLCBlID0gbnVsbCksIGsuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQsIG4sIGE7XHJcbiAgICAgICAgICBpZiAoZS5mcmFtZXNTdGFydCkge1xyXG4gICAgICAgICAgICBpZiAoKHQgPSBpIC0gZS5mcmFtZXNTdGFydCkgPj0gZS5kdXJhdGlvbiAmJiBlLmNvdW50ICYmIGUubG9vcHNMZWZ0IDw9IDEpIHJldHVybiBhID0gZS5mcmFtZXNbZS5sYXN0RnJhbWUgPSBlLnJldmVyc2UgPyAwIDogZS5mcmFtZXMubGVuZ3RoIC0gMV0sIGUuZnJhbWVDYWxsYmFjayhhLnZhbHVlLCAhMCwgYS50aW1lUmF0aW8sIGEub3V0cHV0UmF0aW8pLCB2b2lkKGUuZnJhbWVzU3RhcnQgPSBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHQgPiBlLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG4gPSBNYXRoLmZsb29yKHQgLyBlLmR1cmF0aW9uKSwgZS5jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gPj0gZS5sb29wc0xlZnQpIHJldHVybiBhID0gZS5mcmFtZXNbZS5sYXN0RnJhbWUgPSBlLnJldmVyc2UgPyAwIDogZS5mcmFtZXMubGVuZ3RoIC0gMV0sIGUuZnJhbWVDYWxsYmFjayhhLnZhbHVlLCAhMCwgYS50aW1lUmF0aW8sIGEub3V0cHV0UmF0aW8pLCB2b2lkKGUuZnJhbWVzU3RhcnQgPSBudWxsKTtcclxuICAgICAgICAgICAgICAgIGUubG9vcHNMZWZ0IC09IG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZS5mcmFtZXNTdGFydCArPSBlLmR1cmF0aW9uICogbiwgdCA9IGkgLSBlLmZyYW1lc1N0YXJ0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZS5yZXZlcnNlICYmICh0ID0gZS5kdXJhdGlvbiAtIHQpLCBhID0gZS5mcmFtZXNbZS5sYXN0RnJhbWUgPSBNYXRoLnJvdW5kKHQgLyBiKV0sICExICE9PSBlLmZyYW1lQ2FsbGJhY2soYS52YWx1ZSwgITEsIGEudGltZVJhdGlvLCBhLm91dHB1dFJhdGlvKSA/IG8gPSAhMCA6IGUuZnJhbWVzU3RhcnQgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksIG8gJiYgKGUgPSB0LmNhbGwod2luZG93LCBsKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gTyhlLCB0KSB7XHJcbiAgICAgICAgZS5mcmFtZXNTdGFydCA9IERhdGUubm93KCksIG51bGwgIT0gdCAmJiAoZS5mcmFtZXNTdGFydCAtPSBlLmR1cmF0aW9uICogKGUucmV2ZXJzZSA/IDEgLSB0IDogdCkpLCBlLmxvb3BzTGVmdCA9IGUuY291bnQsIGUubGFzdEZyYW1lID0gbnVsbCwgbCgpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIChuLCBlLCB0LCBhLCBpLCBvLCBsKSB7XHJcbiAgICAgICAgICB2YXIgciwgcywgdSwgaCwgcCwgYywgZCwgZiwgeSwgUywgbSwgZywgXywgdiA9ICsrdztcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBFKGUsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogbih0KSxcclxuICAgICAgICAgICAgICB0aW1lUmF0aW86IGUsXHJcbiAgICAgICAgICAgICAgb3V0cHV0UmF0aW86IHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGkgJiYgKGkgPSB4W2ldKSwgbiA9IG4gfHwgZnVuY3Rpb24gKCkge30sIHQgPCBiKSBzID0gW0UoMCwgMCksIEUoMSwgMSldO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh1ID0gYiAvIHQsIHMgPSBbRSgwLCAwKV0sIDAgPT09IGlbMF0gJiYgMCA9PT0gaVsxXSAmJiAxID09PSBpWzJdICYmIDEgPT09IGlbM10pXHJcbiAgICAgICAgICAgICAgZm9yIChwID0gdTsgcCA8PSAxOyBwICs9IHUpIHMucHVzaChFKHAsIHApKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGZvciAoYyA9IGggPSAocCA9IHUpIC8gMTA7IGMgPD0gMTsgYyArPSBoKSB2b2lkIDAsIFMgPSAoeSA9IChmID0gYykgKiBmKSAqIGYsIF8gPSAzICogKG0gPSAxIC0gZikgKiB5LCBwIDw9IChkID0ge1xyXG4gICAgICAgICAgICAgICAgeDogKGcgPSAzICogKG0gKiBtKSAqIGYpICogaVswXSArIF8gKiBpWzJdICsgUyxcclxuICAgICAgICAgICAgICAgIHk6IGcgKiBpWzFdICsgXyAqIGlbM10gKyBTXHJcbiAgICAgICAgICAgICAgfSkueCAmJiAocy5wdXNoKEUoZC54LCBkLnkpKSwgcCArPSB1KTtcclxuICAgICAgICAgICAgcy5wdXNoKEUoMSwgMSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gciA9IHtcclxuICAgICAgICAgICAgYW5pbUlkOiB2LFxyXG4gICAgICAgICAgICBmcmFtZUNhbGxiYWNrOiBlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdCxcclxuICAgICAgICAgICAgY291bnQ6IGEsXHJcbiAgICAgICAgICAgIGZyYW1lczogcyxcclxuICAgICAgICAgICAgcmV2ZXJzZTogISFvXHJcbiAgICAgICAgICB9LCBrLnB1c2gociksICExICE9PSBsICYmIE8ociwgbCksIHZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgIHZhciBhO1xyXG4gICAgICAgICAgay5zb21lKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1JZCA9PT0gbiAmJiAoYSA9IHQsICEoZS5mcmFtZXNTdGFydCA9IG51bGwpKVxyXG4gICAgICAgICAgfSkgJiYgay5zcGxpY2UoYSwgMSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAodCwgbiwgYSkge1xyXG4gICAgICAgICAgay5zb21lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1JZCA9PT0gdCAmJiAoZS5yZXZlcnNlID0gISFuLCBPKGUsIGEpLCAhMClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wOiBmdW5jdGlvbiAodCwgbikge1xyXG4gICAgICAgICAgdmFyIGE7XHJcbiAgICAgICAgICByZXR1cm4gay5zb21lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1JZCA9PT0gdCAmJiAobiA/IG51bGwgIT0gZS5sYXN0RnJhbWUgJiYgKGEgPSBlLmZyYW1lc1tlLmxhc3RGcmFtZV0udGltZVJhdGlvKSA6IChhID0gKERhdGUubm93KCkgLSBlLmZyYW1lc1N0YXJ0KSAvIGUuZHVyYXRpb24sIGUucmV2ZXJzZSAmJiAoYSA9IDEgLSBhKSwgYSA8IDAgPyBhID0gMCA6IDEgPCBhICYmIChhID0gMSkpLCAhKGUuZnJhbWVzU3RhcnQgPSBudWxsKSlcclxuICAgICAgICAgIH0pLCBhXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZFRpbWluZzogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiB0ID8geFt0XSA6IEFycmF5LmlzQXJyYXkodCkgJiYgWzAsIDEsIDIsIDNdLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhKHRbZV0pICYmIDAgPD0gdFtlXSAmJiB0W2VdIDw9IDFcclxuICAgICAgICAgIH0pID8gW3RbMF0sIHRbMV0sIHRbMl0sIHRbM11dIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSgpLFxyXG4gICAgZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhICYmIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnNldFBhdGhEYXRhIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaSA9IHtcclxuICAgICAgICAgICAgWjogXCJaXCIsXHJcbiAgICAgICAgICAgIE06IFwiTVwiLFxyXG4gICAgICAgICAgICBMOiBcIkxcIixcclxuICAgICAgICAgICAgQzogXCJDXCIsXHJcbiAgICAgICAgICAgIFE6IFwiUVwiLFxyXG4gICAgICAgICAgICBBOiBcIkFcIixcclxuICAgICAgICAgICAgSDogXCJIXCIsXHJcbiAgICAgICAgICAgIFY6IFwiVlwiLFxyXG4gICAgICAgICAgICBTOiBcIlNcIixcclxuICAgICAgICAgICAgVDogXCJUXCIsXHJcbiAgICAgICAgICAgIHo6IFwiWlwiLFxyXG4gICAgICAgICAgICBtOiBcIm1cIixcclxuICAgICAgICAgICAgbDogXCJsXCIsXHJcbiAgICAgICAgICAgIGM6IFwiY1wiLFxyXG4gICAgICAgICAgICBxOiBcInFcIixcclxuICAgICAgICAgICAgYTogXCJhXCIsXHJcbiAgICAgICAgICAgIGg6IFwiaFwiLFxyXG4gICAgICAgICAgICB2OiBcInZcIixcclxuICAgICAgICAgICAgczogXCJzXCIsXHJcbiAgICAgICAgICAgIHQ6IFwidFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZyA9IGUsIHRoaXMuX2N1cnJlbnRJbmRleCA9IDAsIHRoaXMuX2VuZEluZGV4ID0gdGhpcy5fc3RyaW5nLmxlbmd0aCwgdGhpcy5fcHJldkNvbW1hbmQgPSBudWxsLCB0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGwgPSAtMSAhPT0gZS5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIFwiKTtcclxuICAgICAgICBvLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgIHBhcnNlU2VnbWVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdLFxyXG4gICAgICAgICAgICAgIHQgPSBpW2VdID8gaVtlXSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChudWxsID09PSB0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX3ByZXZDb21tYW5kKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gKHQgPSAoXCIrXCIgPT09IGUgfHwgXCItXCIgPT09IGUgfHwgXCIuXCIgPT09IGUgfHwgXCIwXCIgPD0gZSAmJiBlIDw9IFwiOVwiKSAmJiBcIlpcIiAhPT0gdGhpcy5fcHJldkNvbW1hbmQgPyBcIk1cIiA9PT0gdGhpcy5fcHJldkNvbW1hbmQgPyBcIkxcIiA6IFwibVwiID09PSB0aGlzLl9wcmV2Q29tbWFuZCA/IFwibFwiIDogdGhpcy5fcHJldkNvbW1hbmQgOiBudWxsKSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMuX2N1cnJlbnRJbmRleCArPSAxO1xyXG4gICAgICAgICAgICB2YXIgbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgYSA9ICh0aGlzLl9wcmV2Q29tbWFuZCA9IHQpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkhcIiA9PT0gYSB8fCBcIlZcIiA9PT0gYSA/IG4gPSBbdGhpcy5fcGFyc2VOdW1iZXIoKV0gOiBcIk1cIiA9PT0gYSB8fCBcIkxcIiA9PT0gYSB8fCBcIlRcIiA9PT0gYSA/IG4gPSBbdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKV0gOiBcIlNcIiA9PT0gYSB8fCBcIlFcIiA9PT0gYSA/IG4gPSBbdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKV0gOiBcIkNcIiA9PT0gYSA/IG4gPSBbdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKV0gOiBcIkFcIiA9PT0gYSA/IG4gPSBbdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VOdW1iZXIoKSwgdGhpcy5fcGFyc2VBcmNGbGFnKCksIHRoaXMuX3BhcnNlQXJjRmxhZygpLCB0aGlzLl9wYXJzZU51bWJlcigpLCB0aGlzLl9wYXJzZU51bWJlcigpXSA6IFwiWlwiID09PSBhICYmICh0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSwgbiA9IFtdKSwgbnVsbCA9PT0gbiB8fCAwIDw9IG4uaW5kZXhPZihudWxsKSA/IG51bGwgOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogdCxcclxuICAgICAgICAgICAgICB2YWx1ZXM6IG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhhc01vcmVEYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBlZWtTZWdtZW50VHlwZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gaVtlXSA/IGlbZV0gOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW5pdGlhbENvbW1hbmRJc01vdmVUbzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzTW9yZURhdGEoKSkgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMucGVla1NlZ21lbnRUeXBlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBcIk1cIiA9PT0gZSB8fCBcIm1cIiA9PT0gZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIF9pc0N1cnJlbnRTcGFjZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZSA8PSBcIiBcIiAmJiAoXCIgXCIgPT09IGUgfHwgXCJcXG5cIiA9PT0gZSB8fCBcIlxcdFwiID09PSBlIHx8IFwiXFxyXCIgPT09IGUgfHwgXCJcXGZcIiA9PT0gZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBfc2tpcE9wdGlvbmFsU3BhY2VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAoOyB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiB0aGlzLl9pc0N1cnJlbnRTcGFjZSgpOykgdGhpcy5fY3VycmVudEluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIF9za2lwT3B0aW9uYWxTcGFjZXNPckRlbGltaXRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gISh0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiAhdGhpcy5faXNDdXJyZW50U3BhY2UoKSAmJiBcIixcIiAhPT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pICYmICh0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSAmJiB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIixcIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCB0aGlzLl9za2lwT3B0aW9uYWxTcGFjZXMoKSksIHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIF9wYXJzZU51bWJlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IDAsXHJcbiAgICAgICAgICAgICAgdCA9IDAsXHJcbiAgICAgICAgICAgICAgbiA9IDEsXHJcbiAgICAgICAgICAgICAgYSA9IDAsXHJcbiAgICAgICAgICAgICAgaSA9IDEsXHJcbiAgICAgICAgICAgICAgbyA9IDEsXHJcbiAgICAgICAgICAgICAgbCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NraXBPcHRpb25hbFNwYWNlcygpLCB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIitcIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gPyB0aGlzLl9jdXJyZW50SW5kZXggKz0gMSA6IHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4ICYmIFwiLVwiID09PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSAmJiAodGhpcy5fY3VycmVudEluZGV4ICs9IDEsIGkgPSAtMSksIHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gdGhpcy5fZW5kSW5kZXggfHwgKHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIDwgXCIwXCIgfHwgXCI5XCIgPCB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkgJiYgXCIuXCIgIT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IHRoaXMuX2N1cnJlbnRJbmRleDsgdGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fZW5kSW5kZXggJiYgXCIwXCIgPD0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gJiYgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gPD0gXCI5XCI7KSB0aGlzLl9jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCAhPT0gcilcclxuICAgICAgICAgICAgICBmb3IgKHZhciBzID0gdGhpcy5fY3VycmVudEluZGV4IC0gMSwgdSA9IDE7IHIgPD0gczspIHQgKz0gdSAqICh0aGlzLl9zdHJpbmdbc10gLSBcIjBcIiksIHMgLT0gMSwgdSAqPSAxMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4ICYmIFwiLlwiID09PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggKz0gMSwgdGhpcy5fY3VycmVudEluZGV4ID49IHRoaXMuX2VuZEluZGV4IHx8IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIDwgXCIwXCIgfHwgXCI5XCIgPCB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgZm9yICg7IHRoaXMuX2N1cnJlbnRJbmRleCA8IHRoaXMuX2VuZEluZGV4ICYmIFwiMFwiIDw9IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdICYmIHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIDw9IFwiOVwiOykgbiAqPSAxMCwgYSArPSAodGhpcy5fc3RyaW5nLmNoYXJBdCh0aGlzLl9jdXJyZW50SW5kZXgpIC0gXCIwXCIpIC8gbiwgdGhpcy5fY3VycmVudEluZGV4ICs9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICE9PSBsICYmIHRoaXMuX2N1cnJlbnRJbmRleCArIDEgPCB0aGlzLl9lbmRJbmRleCAmJiAoXCJlXCIgPT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXhdIHx8IFwiRVwiID09PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSkgJiYgXCJ4XCIgIT09IHRoaXMuX3N0cmluZ1t0aGlzLl9jdXJyZW50SW5kZXggKyAxXSAmJiBcIm1cIiAhPT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleCArIDFdKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCBcIitcIiA9PT0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gPyB0aGlzLl9jdXJyZW50SW5kZXggKz0gMSA6IFwiLVwiID09PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSAmJiAodGhpcy5fY3VycmVudEluZGV4ICs9IDEsIG8gPSAtMSksIHRoaXMuX2N1cnJlbnRJbmRleCA+PSB0aGlzLl9lbmRJbmRleCB8fCB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8IFwiMFwiIHx8IFwiOVwiIDwgdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0pIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIGZvciAoOyB0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9lbmRJbmRleCAmJiBcIjBcIiA8PSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSAmJiB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XSA8PSBcIjlcIjspIGUgKj0gMTAsIGUgKz0gdGhpcy5fc3RyaW5nW3RoaXMuX2N1cnJlbnRJbmRleF0gLSBcIjBcIiwgdGhpcy5fY3VycmVudEluZGV4ICs9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaCA9IHQgKyBhO1xyXG4gICAgICAgICAgICByZXR1cm4gaCAqPSBpLCBlICYmIChoICo9IE1hdGgucG93KDEwLCBvICogZSkpLCBsID09PSB0aGlzLl9jdXJyZW50SW5kZXggPyBudWxsIDogKHRoaXMuX3NraXBPcHRpb25hbFNwYWNlc09yRGVsaW1pdGVyKCksIGgpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgX3BhcnNlQXJjRmxhZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ID49IHRoaXMuX2VuZEluZGV4KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgdmFyIGUgPSBudWxsLFxyXG4gICAgICAgICAgICAgIHQgPSB0aGlzLl9zdHJpbmdbdGhpcy5fY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCArPSAxLCBcIjBcIiA9PT0gdCkgZSA9IDA7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChcIjFcIiAhPT0gdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgZSA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2tpcE9wdGlvbmFsU3BhY2VzT3JEZWxpbWl0ZXIoKSwgZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUgfHwgMCA9PT0gZS5sZW5ndGgpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgdmFyIHQgPSBuZXcgbyhlKSxcclxuICAgICAgICAgICAgICBuID0gW107XHJcbiAgICAgICAgICAgIGlmICh0LmluaXRpYWxDb21tYW5kSXNNb3ZlVG8oKSlcclxuICAgICAgICAgICAgICBmb3IgKDsgdC5oYXNNb3JlRGF0YSgpOykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0LnBhcnNlU2VnbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IGEpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgbi5wdXNoKGEpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG4gPSBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsXHJcbiAgICAgICAgICByID0gZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLFxyXG4gICAgICAgICAgZCA9IGUuU3ltYm9sID8gZS5TeW1ib2woKSA6IFwiX19jYWNoZWRQYXRoRGF0YVwiLFxyXG4gICAgICAgICAgZiA9IGUuU3ltYm9sID8gZS5TeW1ib2woKSA6IFwiX19jYWNoZWROb3JtYWxpemVkUGF0aERhdGFcIixcclxuICAgICAgICAgIFUgPSBmdW5jdGlvbiAoZSwgdCwgbiwgYSwgaSwgbywgbCwgciwgcywgdSkge1xyXG4gICAgICAgICAgICB2YXIgaCwgcCwgYywgZCwgZiwgeSA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICB4OiBlICogTWF0aC5jb3MobikgLSB0ICogTWF0aC5zaW4obiksXHJcbiAgICAgICAgICAgICAgICAgIHk6IGUgKiBNYXRoLnNpbihuKSArIHQgKiBNYXRoLmNvcyhuKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgUyA9IChoID0gbCwgTWF0aC5QSSAqIGggLyAxODApLFxyXG4gICAgICAgICAgICAgIG0gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHUpIHAgPSB1WzBdLCBjID0gdVsxXSwgZCA9IHVbMl0sIGYgPSB1WzNdO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICB2YXIgZyA9IHkoZSwgdCwgLVMpO1xyXG4gICAgICAgICAgICAgIGUgPSBnLngsIHQgPSBnLnk7XHJcbiAgICAgICAgICAgICAgdmFyIF8gPSB5KG4sIGEsIC1TKSxcclxuICAgICAgICAgICAgICAgIHYgPSAoZSAtIChuID0gXy54KSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgRSA9ICh0IC0gKGEgPSBfLnkpKSAvIDIsXHJcbiAgICAgICAgICAgICAgICB4ID0gdiAqIHYgLyAoaSAqIGkpICsgRSAqIEUgLyAobyAqIG8pO1xyXG4gICAgICAgICAgICAgIDEgPCB4ICYmIChpICo9IHggPSBNYXRoLnNxcnQoeCksIG8gKj0geCk7XHJcbiAgICAgICAgICAgICAgdmFyIGIgPSBpICogaSxcclxuICAgICAgICAgICAgICAgIGsgPSBvICogbyxcclxuICAgICAgICAgICAgICAgIHcgPSBiICogayAtIGIgKiBFICogRSAtIGsgKiB2ICogdixcclxuICAgICAgICAgICAgICAgIE8gPSBiICogRSAqIEUgKyBrICogdiAqIHYsXHJcbiAgICAgICAgICAgICAgICBNID0gKHIgPT09IHMgPyAtMSA6IDEpICogTWF0aC5zcXJ0KE1hdGguYWJzKHcgLyBPKSk7XHJcbiAgICAgICAgICAgICAgZCA9IE0gKiBpICogRSAvIG8gKyAoZSArIG4pIC8gMiwgZiA9IE0gKiAtbyAqIHYgLyBpICsgKHQgKyBhKSAvIDIsIHAgPSBNYXRoLmFzaW4ocGFyc2VGbG9hdCgoKHQgLSBmKSAvIG8pLnRvRml4ZWQoOSkpKSwgYyA9IE1hdGguYXNpbihwYXJzZUZsb2F0KCgoYSAtIGYpIC8gbykudG9GaXhlZCg5KSkpLCBlIDwgZCAmJiAocCA9IE1hdGguUEkgLSBwKSwgbiA8IGQgJiYgKGMgPSBNYXRoLlBJIC0gYyksIHAgPCAwICYmIChwID0gMiAqIE1hdGguUEkgKyBwKSwgYyA8IDAgJiYgKGMgPSAyICogTWF0aC5QSSArIGMpLCBzICYmIGMgPCBwICYmIChwIC09IDIgKiBNYXRoLlBJKSwgIXMgJiYgcCA8IGMgJiYgKGMgLT0gMiAqIE1hdGguUEkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIEkgPSBjIC0gcDtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKEkpID4gMTIwICogTWF0aC5QSSAvIDE4MCkge1xyXG4gICAgICAgICAgICAgIHZhciBDID0gYyxcclxuICAgICAgICAgICAgICAgIEwgPSBuLFxyXG4gICAgICAgICAgICAgICAgQSA9IGE7XHJcbiAgICAgICAgICAgICAgYyA9IHMgJiYgcCA8IGMgPyBwICsgMTIwICogTWF0aC5QSSAvIDE4MCAqIDEgOiBwICsgMTIwICogTWF0aC5QSSAvIDE4MCAqIC0xLCBuID0gZCArIGkgKiBNYXRoLmNvcyhjKSwgYSA9IGYgKyBvICogTWF0aC5zaW4oYyksIG0gPSBVKG4sIGEsIEwsIEEsIGksIG8sIGwsIDAsIHMsIFtjLCBDLCBkLCBmXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBJID0gYyAtIHA7XHJcbiAgICAgICAgICAgIHZhciBWID0gTWF0aC5jb3MocCksXHJcbiAgICAgICAgICAgICAgUCA9IE1hdGguc2luKHApLFxyXG4gICAgICAgICAgICAgIE4gPSBNYXRoLmNvcyhjKSxcclxuICAgICAgICAgICAgICBUID0gTWF0aC5zaW4oYyksXHJcbiAgICAgICAgICAgICAgVyA9IE1hdGgudGFuKEkgLyA0KSxcclxuICAgICAgICAgICAgICBCID0gNCAvIDMgKiBpICogVyxcclxuICAgICAgICAgICAgICBSID0gNCAvIDMgKiBvICogVyxcclxuICAgICAgICAgICAgICBGID0gW2UsIHRdLFxyXG4gICAgICAgICAgICAgIEcgPSBbZSArIEIgKiBQLCB0IC0gUiAqIFZdLFxyXG4gICAgICAgICAgICAgIEQgPSBbbiArIEIgKiBULCBhIC0gUiAqIE5dLFxyXG4gICAgICAgICAgICAgIHogPSBbbiwgYV07XHJcbiAgICAgICAgICAgIGlmIChHWzBdID0gMiAqIEZbMF0gLSBHWzBdLCBHWzFdID0gMiAqIEZbMV0gLSBHWzFdLCB1KSByZXR1cm4gW0csIEQsIHpdLmNvbmNhdChtKTtcclxuICAgICAgICAgICAgbSA9IFtHLCBELCB6XS5jb25jYXQobSkuam9pbigpLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdmFyIGogPSBbXSxcclxuICAgICAgICAgICAgICBIID0gW107XHJcbiAgICAgICAgICAgIHJldHVybiBtLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICB0ICUgMiA/IEgucHVzaCh5KG1bdCAtIDFdLCBtW3RdLCBTKS55KSA6IEgucHVzaCh5KG1bdF0sIG1bdCArIDFdLCBTKS54KSwgNiA9PT0gSC5sZW5ndGggJiYgKGoucHVzaChIKSwgSCA9IFtdKVxyXG4gICAgICAgICAgICB9KSwgalxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHkgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5tYXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLnZhbHVlcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgUyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBTID0gW10sXHJcbiAgICAgICAgICAgICAgbSA9IG51bGwsXHJcbiAgICAgICAgICAgICAgZyA9IG51bGwsXHJcbiAgICAgICAgICAgICAgXyA9IG51bGwsXHJcbiAgICAgICAgICAgICAgdiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgRSA9IG51bGwsXHJcbiAgICAgICAgICAgICAgeCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgYiA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBpZiAoXCJNXCIgPT09IGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBlLnZhbHVlc1swXSxcclxuICAgICAgICAgICAgICAgICAgbiA9IGUudmFsdWVzWzFdO1xyXG4gICAgICAgICAgICAgICAgUy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW3QsIG5dXHJcbiAgICAgICAgICAgICAgICB9KSwgdiA9IHggPSB0LCBFID0gYiA9IG5cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiQ1wiID09PSBlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gZS52YWx1ZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgIGkgPSBlLnZhbHVlc1sxXSxcclxuICAgICAgICAgICAgICAgICAgbyA9IGUudmFsdWVzWzJdLFxyXG4gICAgICAgICAgICAgICAgICBsID0gZS52YWx1ZXNbM107XHJcbiAgICAgICAgICAgICAgICB0ID0gZS52YWx1ZXNbNF0sIG4gPSBlLnZhbHVlc1s1XTtcclxuICAgICAgICAgICAgICAgIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBpLCBvLCBsLCB0LCBuXVxyXG4gICAgICAgICAgICAgICAgfSksIGcgPSBvLCBfID0gbCwgdiA9IHQsIEUgPSBuXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIkxcIiA9PT0gZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gZS52YWx1ZXNbMF0sIG4gPSBlLnZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFt0LCBuXVxyXG4gICAgICAgICAgICAgICAgfSksIHYgPSB0LCBFID0gblxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJIXCIgPT09IGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IGUudmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgUy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW3QsIEVdXHJcbiAgICAgICAgICAgICAgICB9KSwgdiA9IHRcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiVlwiID09PSBlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG4gPSBlLnZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFt2LCBuXVxyXG4gICAgICAgICAgICAgICAgfSksIEUgPSBuXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIlNcIiA9PT0gZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBvID0gZS52YWx1ZXNbMF0sIGwgPSBlLnZhbHVlc1sxXSwgdCA9IGUudmFsdWVzWzJdLCBuID0gZS52YWx1ZXNbM107XHJcbiAgICAgICAgICAgICAgICBcIkNcIiA9PT0gbSB8fCBcIlNcIiA9PT0gbSA/IChyID0gdiArICh2IC0gZyksIHMgPSBFICsgKEUgLSBfKSkgOiAociA9IHYsIHMgPSBFKSwgUy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW3IsIHMsIG8sIGwsIHQsIG5dXHJcbiAgICAgICAgICAgICAgICB9KSwgZyA9IG8sIF8gPSBsLCB2ID0gdCwgRSA9IG5cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiVFwiID09PSBlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHQgPSBlLnZhbHVlc1swXSwgbiA9IGUudmFsdWVzWzFdO1xyXG4gICAgICAgICAgICAgICAgXCJRXCIgPT09IG0gfHwgXCJUXCIgPT09IG0gPyAoYSA9IHYgKyAodiAtIGcpLCBpID0gRSArIChFIC0gXykpIDogKGEgPSB2LCBpID0gRSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IHYgKyAyICogKGEgLSB2KSAvIDMsXHJcbiAgICAgICAgICAgICAgICAgIHMgPSBFICsgMiAqIChpIC0gRSkgLyAzLFxyXG4gICAgICAgICAgICAgICAgICB1ID0gdCArIDIgKiAoYSAtIHQpIC8gMyxcclxuICAgICAgICAgICAgICAgICAgaCA9IG4gKyAyICogKGkgLSBuKSAvIDM7XHJcbiAgICAgICAgICAgICAgICBTLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbciwgcywgdSwgaCwgdCwgbl1cclxuICAgICAgICAgICAgICAgIH0pLCBnID0gYSwgXyA9IGksIHYgPSB0LCBFID0gblxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJRXCIgPT09IGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IGUudmFsdWVzWzBdLCBpID0gZS52YWx1ZXNbMV0sIHQgPSBlLnZhbHVlc1syXSwgbiA9IGUudmFsdWVzWzNdLCByID0gdiArIDIgKiAoYSAtIHYpIC8gMywgcyA9IEUgKyAyICogKGkgLSBFKSAvIDMsIHUgPSB0ICsgMiAqIChhIC0gdCkgLyAzLCBoID0gbiArIDIgKiAoaSAtIG4pIC8gMztcclxuICAgICAgICAgICAgICAgIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFtyLCBzLCB1LCBoLCB0LCBuXVxyXG4gICAgICAgICAgICAgICAgfSksIGcgPSBhLCBfID0gaSwgdiA9IHQsIEUgPSBuXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIkFcIiA9PT0gZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGUudmFsdWVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICBjID0gZS52YWx1ZXNbMV0sXHJcbiAgICAgICAgICAgICAgICAgIGQgPSBlLnZhbHVlc1syXSxcclxuICAgICAgICAgICAgICAgICAgZiA9IGUudmFsdWVzWzNdLFxyXG4gICAgICAgICAgICAgICAgICB5ID0gZS52YWx1ZXNbNF07XHJcbiAgICAgICAgICAgICAgICB0ID0gZS52YWx1ZXNbNV0sIG4gPSBlLnZhbHVlc1s2XTtcclxuICAgICAgICAgICAgICAgIGlmICgwID09PSBwIHx8IDAgPT09IGMpIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFt2LCBFLCB0LCBuLCB0LCBuXVxyXG4gICAgICAgICAgICAgICAgfSksIHYgPSB0LCBFID0gbjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgIT09IHQgfHwgRSAhPT0gbikgVSh2LCBFLCB0LCBuLCBwLCBjLCBkLCBmLCB5KS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIFMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBlXHJcbiAgICAgICAgICAgICAgICAgIH0pLCB2ID0gdCwgRSA9IG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSBlbHNlIFwiWlwiID09PSBlLnR5cGUgJiYgKFMucHVzaChlKSwgdiA9IHgsIEUgPSBiKTtcclxuICAgICAgICAgICAgICBtID0gZS50eXBlXHJcbiAgICAgICAgICAgIH0pLCBTXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICBcImRcIiA9PT0gZSAmJiAodGhpc1tkXSA9IG51bGwsIHRoaXNbZl0gPSBudWxsKSwgbi5jYWxsKHRoaXMsIGUsIHQpXHJcbiAgICAgICAgfSwgZS5TVkdQYXRoRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIFwiZFwiID09PSBlICYmICh0aGlzW2RdID0gbnVsbCwgdGhpc1tmXSA9IG51bGwpLCByLmNhbGwodGhpcywgZSlcclxuICAgICAgICB9LCBlLlNWR1BhdGhFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBpZiAoZSAmJiBlLm5vcm1hbGl6ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpc1tmXSkgcmV0dXJuIHkodGhpc1tmXSk7XHJcbiAgICAgICAgICAgIHRoaXNbZF0gPyBuID0geSh0aGlzW2RdKSA6IChuID0gYSh0aGlzLmdldEF0dHJpYnV0ZShcImRcIikgfHwgXCJcIiksIHRoaXNbZF0gPSB5KG4pKTtcclxuICAgICAgICAgICAgdmFyIHQgPSBTKChzID0gW10sIGMgPSBwID0gaCA9IHUgPSBudWxsLCBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICB2YXIgdCA9IGUudHlwZTtcclxuICAgICAgICAgICAgICBpZiAoXCJNXCIgPT09IHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gZS52YWx1ZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgIGEgPSBlLnZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxyXG4gICAgICAgICAgICAgICAgfSksIHUgPSBwID0gbiwgaCA9IGMgPSBhXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIm1cIiA9PT0gdCkgbiA9IHUgKyBlLnZhbHVlc1swXSwgYSA9IGggKyBlLnZhbHVlc1sxXSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IHAgPSBuLCBoID0gYyA9IGE7XHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAoXCJMXCIgPT09IHQpIG4gPSBlLnZhbHVlc1swXSwgYSA9IGUudmFsdWVzWzFdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuLCBhXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGE7XHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAoXCJsXCIgPT09IHQpIG4gPSB1ICsgZS52YWx1ZXNbMF0sIGEgPSBoICsgZS52YWx1ZXNbMV0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW24sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYTtcclxuICAgICAgICAgICAgICBlbHNlIGlmIChcIkNcIiA9PT0gdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSBlLnZhbHVlc1swXSxcclxuICAgICAgICAgICAgICAgICAgbyA9IGUudmFsdWVzWzFdLFxyXG4gICAgICAgICAgICAgICAgICBsID0gZS52YWx1ZXNbMl0sXHJcbiAgICAgICAgICAgICAgICAgIHIgPSBlLnZhbHVlc1szXTtcclxuICAgICAgICAgICAgICAgIG4gPSBlLnZhbHVlc1s0XSwgYSA9IGUudmFsdWVzWzVdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbaSwgbywgbCwgciwgbiwgYV1cclxuICAgICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGFcclxuICAgICAgICAgICAgICB9IGVsc2UgXCJjXCIgPT09IHQgPyAoaSA9IHUgKyBlLnZhbHVlc1swXSwgbyA9IGggKyBlLnZhbHVlc1sxXSwgbCA9IHUgKyBlLnZhbHVlc1syXSwgciA9IGggKyBlLnZhbHVlc1szXSwgbiA9IHUgKyBlLnZhbHVlc1s0XSwgYSA9IGggKyBlLnZhbHVlc1s1XSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbaSwgbywgbCwgciwgbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwiUVwiID09PSB0ID8gKGkgPSBlLnZhbHVlc1swXSwgbyA9IGUudmFsdWVzWzFdLCBuID0gZS52YWx1ZXNbMl0sIGEgPSBlLnZhbHVlc1szXSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbaSwgbywgbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwicVwiID09PSB0ID8gKGkgPSB1ICsgZS52YWx1ZXNbMF0sIG8gPSBoICsgZS52YWx1ZXNbMV0sIG4gPSB1ICsgZS52YWx1ZXNbMl0sIGEgPSBoICsgZS52YWx1ZXNbM10sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2ksIG8sIG4sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcIkFcIiA9PT0gdCA/IChuID0gZS52YWx1ZXNbNV0sIGEgPSBlLnZhbHVlc1s2XSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbZS52YWx1ZXNbMF0sIGUudmFsdWVzWzFdLCBlLnZhbHVlc1syXSwgZS52YWx1ZXNbM10sIGUudmFsdWVzWzRdLCBuLCBhXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGEpIDogXCJhXCIgPT09IHQgPyAobiA9IHUgKyBlLnZhbHVlc1s1XSwgYSA9IGggKyBlLnZhbHVlc1s2XSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbZS52YWx1ZXNbMF0sIGUudmFsdWVzWzFdLCBlLnZhbHVlc1syXSwgZS52YWx1ZXNbM10sIGUudmFsdWVzWzRdLCBuLCBhXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbiwgaCA9IGEpIDogXCJIXCIgPT09IHQgPyAobiA9IGUudmFsdWVzWzBdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJIXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbikgOiBcImhcIiA9PT0gdCA/IChuID0gdSArIGUudmFsdWVzWzBdLCBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJIXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtuXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gbikgOiBcIlZcIiA9PT0gdCA/IChhID0gZS52YWx1ZXNbMF0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlZcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2FdXHJcbiAgICAgICAgICAgICAgfSksIGggPSBhKSA6IFwidlwiID09PSB0ID8gKGEgPSBoICsgZS52YWx1ZXNbMF0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlZcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2FdXHJcbiAgICAgICAgICAgICAgfSksIGggPSBhKSA6IFwiU1wiID09PSB0ID8gKGwgPSBlLnZhbHVlc1swXSwgciA9IGUudmFsdWVzWzFdLCBuID0gZS52YWx1ZXNbMl0sIGEgPSBlLnZhbHVlc1szXSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU1wiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbCwgciwgbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwic1wiID09PSB0ID8gKGwgPSB1ICsgZS52YWx1ZXNbMF0sIHIgPSBoICsgZS52YWx1ZXNbMV0sIG4gPSB1ICsgZS52YWx1ZXNbMl0sIGEgPSBoICsgZS52YWx1ZXNbM10sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2wsIHIsIG4sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcIlRcIiA9PT0gdCA/IChuID0gZS52YWx1ZXNbMF0sIGEgPSBlLnZhbHVlc1sxXSwgcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbbiwgYV1cclxuICAgICAgICAgICAgICB9KSwgdSA9IG4sIGggPSBhKSA6IFwidFwiID09PSB0ID8gKG4gPSB1ICsgZS52YWx1ZXNbMF0sIGEgPSBoICsgZS52YWx1ZXNbMV0sIHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlRcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW24sIGFdXHJcbiAgICAgICAgICAgICAgfSksIHUgPSBuLCBoID0gYSkgOiBcIlpcIiAhPT0gdCAmJiBcInpcIiAhPT0gdCB8fCAocy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiWlwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXVxyXG4gICAgICAgICAgICAgIH0pLCB1ID0gcCwgaCA9IGMpXHJcbiAgICAgICAgICAgIH0pLCBzKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2ZdID0geSh0KSwgdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXNbZF0pIHJldHVybiB5KHRoaXNbZF0pO1xyXG4gICAgICAgICAgdmFyIHMsIHUsIGgsIHAsIGMsIG4gPSBhKHRoaXMuZ2V0QXR0cmlidXRlKFwiZFwiKSB8fCBcIlwiKTtcclxuICAgICAgICAgIHJldHVybiB0aGlzW2RdID0geShuKSwgblxyXG4gICAgICAgIH0sIGUuU1ZHUGF0aEVsZW1lbnQucHJvdG90eXBlLnNldFBhdGhEYXRhID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmICgwID09PSBlLmxlbmd0aCkgbCA/IHRoaXMuc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSA6IHRoaXMucmVtb3ZlQXR0cmlidXRlKFwiZFwiKTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gXCJcIiwgbiA9IDAsIGEgPSBlLmxlbmd0aDsgbiA8IGE7IG4gKz0gMSkge1xyXG4gICAgICAgICAgICAgIHZhciBpID0gZVtuXTtcclxuICAgICAgICAgICAgICAwIDwgbiAmJiAodCArPSBcIiBcIiksIHQgKz0gaS50eXBlLCBpLnZhbHVlcyAmJiAwIDwgaS52YWx1ZXMubGVuZ3RoICYmICh0ICs9IFwiIFwiICsgaS52YWx1ZXMuam9pbihcIiBcIikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkXCIsIHQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZS5TVkdSZWN0RWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGEgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSB0aGlzLnguYmFzZVZhbC52YWx1ZSxcclxuICAgICAgICAgICAgbiA9IHRoaXMueS5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBhID0gdGhpcy53aWR0aC5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBpID0gdGhpcy5oZWlnaHQuYmFzZVZhbC52YWx1ZSxcclxuICAgICAgICAgICAgbyA9IHRoaXMuaGFzQXR0cmlidXRlKFwicnhcIikgPyB0aGlzLnJ4LmJhc2VWYWwudmFsdWUgOiB0aGlzLnJ5LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIGwgPSB0aGlzLmhhc0F0dHJpYnV0ZShcInJ5XCIpID8gdGhpcy5yeS5iYXNlVmFsLnZhbHVlIDogdGhpcy5yeC5iYXNlVmFsLnZhbHVlO1xyXG4gICAgICAgICAgYSAvIDIgPCBvICYmIChvID0gYSAvIDIpLCBpIC8gMiA8IGwgJiYgKGwgPSBpIC8gMik7XHJcbiAgICAgICAgICB2YXIgciA9IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFt0ICsgbywgbl1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJIXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW3QgKyBhIC0gb11cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW28sIGwsIDAsIDAsIDEsIHQgKyBhLCBuICsgbF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJWXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW24gKyBpIC0gbF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW28sIGwsIDAsIDAsIDEsIHQgKyBhIC0gbywgbiArIGldXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiSFwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFt0ICsgb11cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW28sIGwsIDAsIDAsIDEsIHQsIG4gKyBpIC0gbF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJWXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW24gKyBsXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgdmFsdWVzOiBbbywgbCwgMCwgMCwgMSwgdCArIG8sIG5dXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiWlwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgICAgICB9XTtcclxuICAgICAgICAgIHJldHVybiByID0gci5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQVwiICE9PSBlLnR5cGUgfHwgMCAhPT0gZS52YWx1ZXNbMF0gJiYgMCAhPT0gZS52YWx1ZXNbMV1cclxuICAgICAgICAgIH0pLCBlICYmICEwID09PSBlLm5vcm1hbGl6ZSAmJiAociA9IFMocikpLCByXHJcbiAgICAgICAgfSwgZS5TVkdDaXJjbGVFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IHRoaXMuY3guYmFzZVZhbC52YWx1ZSxcclxuICAgICAgICAgICAgbiA9IHRoaXMuY3kuYmFzZVZhbC52YWx1ZSxcclxuICAgICAgICAgICAgYSA9IHRoaXMuci5iYXNlVmFsLnZhbHVlLFxyXG4gICAgICAgICAgICBpID0gW3tcclxuICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFt0ICsgYSwgbl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGEsIDAsIDAsIDEsIHQsIG4gKyBhXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgYSwgMCwgMCwgMSwgdCAtIGEsIG5dXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBhLCAwLCAwLCAxLCB0LCBuIC0gYV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGEsIDAsIDAsIDEsIHQgKyBhLCBuXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJaXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbXVxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICAgIHJldHVybiBlICYmICEwID09PSBlLm5vcm1hbGl6ZSAmJiAoaSA9IFMoaSkpLCBpXHJcbiAgICAgICAgfSwgZS5TVkdFbGxpcHNlRWxlbWVudC5wcm90b3R5cGUuZ2V0UGF0aERhdGEgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSB0aGlzLmN4LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLmN5LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnJ4LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIGkgPSB0aGlzLnJ5LmJhc2VWYWwudmFsdWUsXHJcbiAgICAgICAgICAgIG8gPSBbe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW3QgKyBhLCBuXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgaSwgMCwgMCwgMSwgdCwgbiArIGldXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkFcIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFthLCBpLCAwLCAwLCAxLCB0IC0gYSwgbl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiQVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW2EsIGksIDAsIDAsIDEsIHQsIG4gLSBpXVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJBXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbYSwgaSwgMCwgMCwgMSwgdCArIGEsIG5dXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIlpcIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgcmV0dXJuIGUgJiYgITAgPT09IGUubm9ybWFsaXplICYmIChvID0gUyhvKSksIG9cclxuICAgICAgICB9LCBlLlNWR0xpbmVFbGVtZW50LnByb3RvdHlwZS5nZXRQYXRoRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgdmFsdWVzOiBbdGhpcy54MS5iYXNlVmFsLnZhbHVlLCB0aGlzLnkxLmJhc2VWYWwudmFsdWVdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFt0aGlzLngyLmJhc2VWYWwudmFsdWUsIHRoaXMueTIuYmFzZVZhbC52YWx1ZV1cclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwgZS5TVkdQb2x5bGluZUVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IHRoaXMucG9pbnRzLm51bWJlck9mSXRlbXM7IHQgKz0gMSkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMucG9pbnRzLmdldEl0ZW0odCk7XHJcbiAgICAgICAgICAgIGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogMCA9PT0gdCA/IFwiTVwiIDogXCJMXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbbi54LCBuLnldXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZVxyXG4gICAgICAgIH0sIGUuU1ZHUG9seWdvbkVsZW1lbnQucHJvdG90eXBlLmdldFBhdGhEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IHRoaXMucG9pbnRzLm51bWJlck9mSXRlbXM7IHQgKz0gMSkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMucG9pbnRzLmdldEl0ZW0odCk7XHJcbiAgICAgICAgICAgIGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogMCA9PT0gdCA/IFwiTVwiIDogXCJMXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWVzOiBbbi54LCBuLnldXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZS5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJaXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogW11cclxuICAgICAgICAgIH0pLCBlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KClcclxuICAgIH0sXHJcbiAgICBPID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgdmFyIGEgPSB7fTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xyXG4gICAgICAgIGlmIChhW2VdKSByZXR1cm4gYVtlXS5leHBvcnRzO1xyXG4gICAgICAgIHZhciB0ID0gYVtlXSA9IHtcclxuICAgICAgICAgIGk6IGUsXHJcbiAgICAgICAgICBsOiAhMSxcclxuICAgICAgICAgIGV4cG9ydHM6IHt9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbltlXS5jYWxsKHQuZXhwb3J0cywgdCwgdC5leHBvcnRzLCBpKSwgdC5sID0gITAsIHQuZXhwb3J0c1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpLm0gPSBuLCBpLmMgPSBhLCBpLmQgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgIGkubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xyXG4gICAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcclxuICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxyXG4gICAgICAgICAgZ2V0OiBuXHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgaS5yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgICAgICAgIHZhbHVlOiAhMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIGkubiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBlLmRlZmF1bHRcclxuICAgICAgICB9IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpLmQodCwgXCJhXCIsIHQpLCB0XHJcbiAgICAgIH0sIGkubyA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KVxyXG4gICAgICB9LCBpLnAgPSBcIlwiLCBpKGkucyA9IDApXHJcbiAgICB9KFtmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICBuLnIodCk7XHJcbiAgICAgIHZhciBhID0gNTAwLFxyXG4gICAgICAgIGkgPSBbXSxcclxuICAgICAgICBvID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChlLCAxZTMgLyA2MClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgciA9IHZvaWQgMCxcclxuICAgICAgICBzID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHUoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB2b2lkIDAsXHJcbiAgICAgICAgICBlID0gdm9pZCAwO1xyXG4gICAgICAgIHIgJiYgKGwuY2FsbCh3aW5kb3csIHIpLCByID0gbnVsbCksIGkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgZS5ldmVudCAmJiAoZS5saXN0ZW5lcihlLmV2ZW50KSwgZS5ldmVudCA9IG51bGwsIHQgPSAhMClcclxuICAgICAgICB9KSwgdCA/IChzID0gRGF0ZS5ub3coKSwgZSA9ICEwKSA6IERhdGUubm93KCkgLSBzIDwgYSAmJiAoZSA9ICEwKSwgZSAmJiAociA9IG8uY2FsbCh3aW5kb3csIHUpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBoKG4pIHtcclxuICAgICAgICB2YXIgYSA9IC0xO1xyXG4gICAgICAgIHJldHVybiBpLnNvbWUoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHJldHVybiBlLmxpc3RlbmVyID09PSBuICYmIChhID0gdCwgITApXHJcbiAgICAgICAgfSksIGFcclxuICAgICAgfVxyXG4gICAgICB2YXIgcCA9IHtcclxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IHZvaWQgMDtcclxuICAgICAgICAgIHJldHVybiAtMSA9PT0gaChlKSA/IChpLnB1c2godCA9IHtcclxuICAgICAgICAgICAgbGlzdGVuZXI6IGVcclxuICAgICAgICAgIH0pLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0LmV2ZW50ID0gZSwgciB8fCB1KClcclxuICAgICAgICAgIH0pIDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQ7IC0gMSA8ICh0ID0gaChlKSkgJiYgKGkuc3BsaWNlKHQsIDEpLCAhaS5sZW5ndGggJiYgciAmJiAobC5jYWxsKHdpbmRvdywgciksIHIgPSBudWxsKSlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHQuZGVmYXVsdCA9IHBcclxuICAgIH1dKS5kZWZhdWx0LFxyXG4gICAgWSA9IHtcclxuICAgICAgbGluZV9hbHRDb2xvcjoge1xyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lX2NvbG9yOiB7fSxcclxuICAgICAgbGluZV9jb2xvclRyYToge1xyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lX3N0cm9rZVdpZHRoOiB7fSxcclxuICAgICAgcGx1Z19lbmFibGVkOiB7XHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdfZW5hYmxlZFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwLFxyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnX3BsdWdTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMCxcclxuICAgICAgICBpbmlWYWx1ZTogbmVcclxuICAgICAgfSxcclxuICAgICAgcGx1Z19jb2xvclNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdfY29sb3JUcmFTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMCxcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgcGx1Z19tYXJrZXJXaWR0aFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdfbWFya2VySGVpZ2h0U0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfSxcclxuICAgICAgbGluZU91dGxpbmVfZW5hYmxlZDoge1xyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lT3V0bGluZV9jb2xvcjoge30sXHJcbiAgICAgIGxpbmVPdXRsaW5lX2NvbG9yVHJhOiB7XHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbmVPdXRsaW5lX3N0cm9rZVdpZHRoOiB7fSxcclxuICAgICAgbGluZU91dGxpbmVfaW5TdHJva2VXaWR0aDoge30sXHJcbiAgICAgIHBsdWdPdXRsaW5lX2VuYWJsZWRTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMCxcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgcGx1Z091dGxpbmVfcGx1Z1NFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwLFxyXG4gICAgICAgIGluaVZhbHVlOiBuZVxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnT3V0bGluZV9jb2xvclNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdPdXRsaW5lX2NvbG9yVHJhU0U6IHtcclxuICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdPdXRsaW5lX3N0cm9rZVdpZHRoU0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfSxcclxuICAgICAgcGx1Z091dGxpbmVfaW5TdHJva2VXaWR0aFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uX3NvY2tldFhZU0U6IHtcclxuICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgaGFzUHJvcHM6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uX3BhdGg6IHt9LFxyXG4gICAgICBwb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGg6IHt9LFxyXG4gICAgICBwb3NpdGlvbl9zb2NrZXRHcmF2aXR5U0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfSxcclxuICAgICAgcGF0aF9wYXRoRGF0YToge30sXHJcbiAgICAgIHBhdGhfZWRnZToge1xyXG4gICAgICAgIGhhc1Byb3BzOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICB2aWV3Qm94X2JCb3g6IHtcclxuICAgICAgICBoYXNQcm9wczogITBcclxuICAgICAgfSxcclxuICAgICAgdmlld0JveF9wbHVnQkNpcmNsZVNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbmVNYXNrX2VuYWJsZWQ6IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgbGluZU1hc2tfb3V0bGluZU1vZGU6IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgbGluZU1hc2tfeDoge30sXHJcbiAgICAgIGxpbmVNYXNrX3k6IHt9LFxyXG4gICAgICBsaW5lT3V0bGluZU1hc2tfeDoge30sXHJcbiAgICAgIGxpbmVPdXRsaW5lTWFza195OiB7fSxcclxuICAgICAgbWFza0JHUmVjdF94OiB7fSxcclxuICAgICAgbWFza0JHUmVjdF95OiB7fSxcclxuICAgICAgY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwLFxyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBjYXBzTWFza0FuY2hvcl9wYXRoRGF0YVNFOiB7XHJcbiAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfSxcclxuICAgICAgY2Fwc01hc2tNYXJrZXJfZW5hYmxlZDoge1xyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LFxyXG4gICAgICBjYXBzTWFza01hcmtlcl9lbmFibGVkU0U6IHtcclxuICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgaW5pVmFsdWU6ICExXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcHNNYXNrTWFya2VyX3BsdWdTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMCxcclxuICAgICAgICBpbmlWYWx1ZTogbmVcclxuICAgICAgfSxcclxuICAgICAgY2Fwc01hc2tNYXJrZXJfbWFya2VyV2lkdGhTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBjYXBzTWFza01hcmtlcl9tYXJrZXJIZWlnaHRTRToge1xyXG4gICAgICAgIGhhc1NFOiAhMFxyXG4gICAgICB9LFxyXG4gICAgICBjYXBzX2VuYWJsZWQ6IHtcclxuICAgICAgICBpbmlWYWx1ZTogITFcclxuICAgICAgfSxcclxuICAgICAgYXR0YWNoX3BsdWdTaWRlTGVuU0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfSxcclxuICAgICAgYXR0YWNoX3BsdWdCYWNrTGVuU0U6IHtcclxuICAgICAgICBoYXNTRTogITBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFggPSB7XHJcbiAgICAgIHNob3dfb246IHt9LFxyXG4gICAgICBzaG93X2VmZmVjdDoge30sXHJcbiAgICAgIHNob3dfYW5pbU9wdGlvbnM6IHt9LFxyXG4gICAgICBzaG93X2FuaW1JZDoge30sXHJcbiAgICAgIHNob3dfaW5BbmltOiB7fVxyXG4gICAgfSxcclxuICAgIHEgPSBcImZhZGVcIixcclxuICAgIFEgPSBbXSxcclxuICAgIEsgPSB7fSxcclxuICAgIEogPSAwLFxyXG4gICAgJCA9IHt9LFxyXG4gICAgZWUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBjZSh0LCBuKSB7XHJcbiAgICB2YXIgZSwgYTtcclxuICAgIHJldHVybiB0eXBlb2YgdCAhPSB0eXBlb2YgbiB8fCAoZSA9IGsodCkgPyBcIm9ialwiIDogQXJyYXkuaXNBcnJheSh0KSA/IFwiYXJyYXlcIiA6IFwiXCIpICE9IChrKG4pID8gXCJvYmpcIiA6IEFycmF5LmlzQXJyYXkobikgPyBcImFycmF5XCIgOiBcIlwiKSB8fCAoXCJvYmpcIiA9PT0gZSA/IGNlKGEgPSBPYmplY3Qua2V5cyh0KS5zb3J0KCksIE9iamVjdC5rZXlzKG4pLnNvcnQoKSkgfHwgYS5zb21lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHJldHVybiBjZSh0W2VdLCBuW2VdKVxyXG4gICAgfSkgOiBcImFycmF5XCIgPT09IGUgPyB0Lmxlbmd0aCAhPT0gbi5sZW5ndGggfHwgdC5zb21lKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHJldHVybiBjZShlLCBuW3RdKVxyXG4gICAgfSkgOiB0ICE9PSBuKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGUobikge1xyXG4gICAgcmV0dXJuIG4gPyBrKG4pID8gT2JqZWN0LmtleXMobikucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHJldHVybiBlW3RdID0gZGUoblt0XSksIGVcclxuICAgIH0sIHt9KSA6IEFycmF5LmlzQXJyYXkobikgPyBuLm1hcChkZSkgOiBuIDogblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmUoZSkge1xyXG4gICAgdmFyIHQsIG4sIGEsIGkgPSAxLFxyXG4gICAgICBvID0gZSA9IChlICsgXCJcIikudHJpbSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGwoZSkge1xyXG4gICAgICB2YXIgdCA9IDEsXHJcbiAgICAgICAgbiA9IHUuZXhlYyhlKTtcclxuICAgICAgcmV0dXJuIG4gJiYgKHQgPSBwYXJzZUZsb2F0KG5bMV0pLCBuWzJdID8gdCA9IDAgPD0gdCAmJiB0IDw9IDEwMCA/IHQgLyAxMDAgOiAxIDogKHQgPCAwIHx8IDEgPCB0KSAmJiAodCA9IDEpKSwgdFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICh0ID0gL14ocmdiYXxoc2xhfGh3YnxncmF5fGRldmljZVxcLWNteWspXFxzKlxcKChbXFxzXFxTXSspXFwpJC9pLmV4ZWMoZSkpID8gKG4gPSB0WzFdLnRvTG93ZXJDYXNlKCksIGEgPSB0WzJdLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqLyksIFwicmdiYVwiID09PSBuICYmIDQgPT09IGEubGVuZ3RoID8gKGkgPSBsKGFbM10pLCBvID0gXCJyZ2IoXCIgKyBhLnNsaWNlKDAsIDMpLmpvaW4oXCIsIFwiKSArIFwiKVwiKSA6IFwiaHNsYVwiID09PSBuICYmIDQgPT09IGEubGVuZ3RoID8gKGkgPSBsKGFbM10pLCBvID0gXCJoc2woXCIgKyBhLnNsaWNlKDAsIDMpLmpvaW4oXCIsIFwiKSArIFwiKVwiKSA6IFwiaHdiXCIgPT09IG4gJiYgNCA9PT0gYS5sZW5ndGggPyAoaSA9IGwoYVszXSksIG8gPSBcImh3YihcIiArIGEuc2xpY2UoMCwgMykuam9pbihcIiwgXCIpICsgXCIpXCIpIDogXCJncmF5XCIgPT09IG4gJiYgMiA9PT0gYS5sZW5ndGggPyAoaSA9IGwoYVsxXSksIG8gPSBcImdyYXkoXCIgKyBhWzBdICsgXCIpXCIpIDogXCJkZXZpY2UtY215a1wiID09PSBuICYmIDUgPD0gYS5sZW5ndGggJiYgKGkgPSBsKGFbNF0pLCBvID0gXCJkZXZpY2UtY215ayhcIiArIGEuc2xpY2UoMCwgNCkuam9pbihcIiwgXCIpICsgXCIpXCIpKSA6ICh0ID0gL15cXCMoPzooW1xcZGEtZl17Nn0pKFtcXGRhLWZdezJ9KXwoW1xcZGEtZl17M30pKFtcXGRhLWZdKSkkL2kuZXhlYyhlKSkgPyB0WzFdID8gKGkgPSBwYXJzZUludCh0WzJdLCAxNikgLyAyNTUsIG8gPSBcIiNcIiArIHRbMV0pIDogKGkgPSBwYXJzZUludCh0WzRdICsgdFs0XSwgMTYpIC8gMjU1LCBvID0gXCIjXCIgKyB0WzNdKSA6IFwidHJhbnNwYXJlbnRcIiA9PT0gZS50b0xvY2FsZUxvd2VyQ2FzZSgpICYmIChpID0gMCksIFtpLCBvXVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24geWUoZSkge1xyXG4gICAgcmV0dXJuICEoIWUgfHwgZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNlKGUsIHQpIHtcclxuICAgIHZhciBuLCBhLCBpLCBvLCBsID0ge307XHJcbiAgICBpZiAoIShpID0gZS5vd25lckRvY3VtZW50KSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgZ2V0IGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXCIpLCBudWxsO1xyXG4gICAgaWYgKGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oaSkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0RJU0NPTk5FQ1RFRCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBIGRpc2Nvbm5lY3RlZCBlbGVtZW50IHdhcyBwYXNzZWQuXCIpLCBudWxsO1xyXG4gICAgZm9yIChhIGluIG4gPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSBsW2FdID0gblthXTtcclxuICAgIGlmICghdCkge1xyXG4gICAgICBpZiAoIShvID0gaS5kZWZhdWx0VmlldykpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGdldCB3aW5kb3cgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudC5cIiksIG51bGw7XHJcbiAgICAgIGwubGVmdCArPSBvLnBhZ2VYT2Zmc2V0LCBsLnJpZ2h0ICs9IG8ucGFnZVhPZmZzZXQsIGwudG9wICs9IG8ucGFnZVlPZmZzZXQsIGwuYm90dG9tICs9IG8ucGFnZVlPZmZzZXRcclxuICAgIH1cclxuICAgIHJldHVybiBsXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZShlLCB0KSB7XHJcbiAgICB2YXIgbiwgYSwgaSA9IFtdLFxyXG4gICAgICBvID0gZTtcclxuICAgIGZvciAodCA9IHQgfHwgd2luZG93OzspIHtcclxuICAgICAgaWYgKCEobiA9IG8ub3duZXJEb2N1bWVudCkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGdldCBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlwiKSwgbnVsbDtcclxuICAgICAgaWYgKCEoYSA9IG4uZGVmYXVsdFZpZXcpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkNhbm5vdCBnZXQgd2luZG93IHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQuXCIpLCBudWxsO1xyXG4gICAgICBpZiAoYSA9PT0gdCkgYnJlYWs7XHJcbiAgICAgIGlmICghKG8gPSBhLmZyYW1lRWxlbWVudCkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiYGJhc2VXaW5kb3dgIHdhcyBub3QgZm91bmQuXCIpLCBudWxsO1xyXG4gICAgICBpLnVuc2hpZnQobylcclxuICAgIH1cclxuICAgIHJldHVybiBpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZShlLCB0KSB7XHJcbiAgICB2YXIgbiwgYSwgbyA9IDAsXHJcbiAgICAgIGwgPSAwO1xyXG4gICAgcmV0dXJuIChhID0gbWUoZSwgdCA9IHQgfHwgd2luZG93KSkgPyBhLmxlbmd0aCA/IChhLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgdmFyIG4sIGEsIGkgPSBTZShlLCAwIDwgdCk7XHJcbiAgICAgIG8gKz0gaS5sZWZ0LCBsICs9IGkudG9wLCBhID0gKG4gPSBlKS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobiwgXCJcIiksIGkgPSB7XHJcbiAgICAgICAgbGVmdDogbi5jbGllbnRMZWZ0ICsgcGFyc2VGbG9hdChhLnBhZGRpbmdMZWZ0KSxcclxuICAgICAgICB0b3A6IG4uY2xpZW50VG9wICsgcGFyc2VGbG9hdChhLnBhZGRpbmdUb3ApXHJcbiAgICAgIH0sIG8gKz0gaS5sZWZ0LCBsICs9IGkudG9wXHJcbiAgICB9KSwgKG4gPSBTZShlLCAhMCkpLmxlZnQgKz0gbywgbi5yaWdodCArPSBvLCBuLnRvcCArPSBsLCBuLmJvdHRvbSArPSBsLCBuKSA6IFNlKGUpIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2UoZSwgdCkge1xyXG4gICAgdmFyIG4gPSBlLnggLSB0LngsXHJcbiAgICAgIGEgPSBlLnkgLSB0Lnk7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KG4gKiBuICsgYSAqIGEpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2ZShlLCB0LCBuKSB7XHJcbiAgICB2YXIgYSA9IHQueCAtIGUueCxcclxuICAgICAgaSA9IHQueSAtIGUueTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IGUueCArIGEgKiBuLFxyXG4gICAgICB5OiBlLnkgKyBpICogbixcclxuICAgICAgYW5nbGU6IE1hdGguYXRhbjIoaSwgYSkgLyAoTWF0aC5QSSAvIDE4MClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEVlKGUsIHQsIG4pIHtcclxuICAgIHZhciBhID0gTWF0aC5hdGFuMihlLnkgLSB0LnksIHQueCAtIGUueCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiB0LnggKyBNYXRoLmNvcyhhKSAqIG4sXHJcbiAgICAgIHk6IHQueSArIE1hdGguc2luKGEpICogbiAqIC0xXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB4ZShlLCB0LCBuLCBhLCBpKSB7XHJcbiAgICB2YXIgbyA9IGkgKiBpLFxyXG4gICAgICBsID0gbyAqIGksXHJcbiAgICAgIHIgPSAxIC0gaSxcclxuICAgICAgcyA9IHIgKiByLFxyXG4gICAgICB1ID0gcyAqIHIsXHJcbiAgICAgIGggPSB1ICogZS54ICsgMyAqIHMgKiBpICogdC54ICsgMyAqIHIgKiBvICogbi54ICsgbCAqIGEueCxcclxuICAgICAgcCA9IHUgKiBlLnkgKyAzICogcyAqIGkgKiB0LnkgKyAzICogciAqIG8gKiBuLnkgKyBsICogYS55LFxyXG4gICAgICBjID0gZS54ICsgMiAqIGkgKiAodC54IC0gZS54KSArIG8gKiAobi54IC0gMiAqIHQueCArIGUueCksXHJcbiAgICAgIGQgPSBlLnkgKyAyICogaSAqICh0LnkgLSBlLnkpICsgbyAqIChuLnkgLSAyICogdC55ICsgZS55KSxcclxuICAgICAgZiA9IHQueCArIDIgKiBpICogKG4ueCAtIHQueCkgKyBvICogKGEueCAtIDIgKiBuLnggKyB0LngpLFxyXG4gICAgICB5ID0gdC55ICsgMiAqIGkgKiAobi55IC0gdC55KSArIG8gKiAoYS55IC0gMiAqIG4ueSArIHQueSksXHJcbiAgICAgIFMgPSByICogZS54ICsgaSAqIHQueCxcclxuICAgICAgbSA9IHIgKiBlLnkgKyBpICogdC55LFxyXG4gICAgICBnID0gciAqIG4ueCArIGkgKiBhLngsXHJcbiAgICAgIF8gPSByICogbi55ICsgaSAqIGEueSxcclxuICAgICAgdiA9IDkwIC0gMTgwICogTWF0aC5hdGFuMihjIC0gZiwgZCAtIHkpIC8gTWF0aC5QSTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IGgsXHJcbiAgICAgIHk6IHAsXHJcbiAgICAgIGZyb21QMjoge1xyXG4gICAgICAgIHg6IGMsXHJcbiAgICAgICAgeTogZFxyXG4gICAgICB9LFxyXG4gICAgICB0b1AxOiB7XHJcbiAgICAgICAgeDogZixcclxuICAgICAgICB5OiB5XHJcbiAgICAgIH0sXHJcbiAgICAgIGZyb21QMToge1xyXG4gICAgICAgIHg6IFMsXHJcbiAgICAgICAgeTogbVxyXG4gICAgICB9LFxyXG4gICAgICB0b1AyOiB7XHJcbiAgICAgICAgeDogZyxcclxuICAgICAgICB5OiBfXHJcbiAgICAgIH0sXHJcbiAgICAgIGFuZ2xlOiB2ICs9IDE4MCA8IHYgPyAtMTgwIDogMTgwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiZShuLCBhLCBpLCBvLCBlKSB7XHJcbiAgICBmdW5jdGlvbiBsKGUsIHQsIG4sIGEsIGkpIHtcclxuICAgICAgcmV0dXJuIGUgKiAoZSAqICgtMyAqIHQgKyA5ICogbiAtIDkgKiBhICsgMyAqIGkpICsgNiAqIHQgLSAxMiAqIG4gKyA2ICogYSkgLSAzICogdCArIDMgKiBuXHJcbiAgICB9XHJcbiAgICB2YXIgciwgcywgdSwgaCwgcCwgYyA9IFsuMjQ5MSwgLjI0OTEsIC4yMzM1LCAuMjMzNSwgLjIwMzIsIC4yMDMyLCAuMTYwMSwgLjE2MDEsIC4xMDY5LCAuMTA2OSwgLjA0NzIsIC4wNDcyXSxcclxuICAgICAgZCA9IDA7XHJcbiAgICByZXR1cm4gciA9IChlID0gbnVsbCA9PSBlIHx8IDEgPCBlID8gMSA6IGUgPCAwID8gMCA6IGUpIC8gMiwgWy0uMTI1MiwgLjEyNTIsIC0uMzY3OCwgLjM2NzgsIC0uNTg3MywgLjU4NzMsIC0uNzY5OSwgLjc2OTksIC0uOTA0MSwgLjkwNDEsIC0uOTgxNiwgLjk4MTZdLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgdSA9IGwocyA9IHIgKiBlICsgciwgbi54LCBhLngsIGkueCwgby54KSwgaCA9IGwocywgbi55LCBhLnksIGkueSwgby55KSwgcCA9IHUgKiB1ICsgaCAqIGgsIGQgKz0gY1t0XSAqIE1hdGguc3FydChwKVxyXG4gICAgfSksIHIgKiBkXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBrZShlLCB0LCBuLCBhLCBpKSB7XHJcbiAgICBmb3IgKHZhciBvLCBsID0gLjUsIHIgPSAxIC0gbDsgbyA9IGJlKGUsIHQsIG4sIGEsIHIpLCAhKE1hdGguYWJzKG8gLSBpKSA8PSAuMDEpOykgciArPSAobyA8IGkgPyAxIDogLTEpICogKGwgLz0gMik7XHJcbiAgICByZXR1cm4gclxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gd2UoZSwgbikge1xyXG4gICAgdmFyIGE7XHJcbiAgICByZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0ID0gbiA/IGUubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSB7XHJcbiAgICAgICAgICB4OiBlLngsXHJcbiAgICAgICAgICB5OiBlLnlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuKHQpLCB0XHJcbiAgICAgIH0pIDogZTtcclxuICAgICAgYSB8fCAoYSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgdmFsdWVzOiBbdFswXS54LCB0WzBdLnldXHJcbiAgICAgIH1dKSwgYS5wdXNoKHQubGVuZ3RoID8gMiA9PT0gdC5sZW5ndGggPyB7XHJcbiAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgdmFsdWVzOiBbdFsxXS54LCB0WzFdLnldXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgdmFsdWVzOiBbdFsxXS54LCB0WzFdLnksIHRbMl0ueCwgdFsyXS55LCB0WzNdLngsIHRbM10ueV1cclxuICAgICAgfSA6IHtcclxuICAgICAgICB0eXBlOiBcIlpcIixcclxuICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgIH0pXHJcbiAgICB9KSwgYVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gT2UoZSkge1xyXG4gICAgdmFyIG4gPSBbXSxcclxuICAgICAgYSA9IDA7XHJcbiAgICByZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0ID0gKDIgPT09IGUubGVuZ3RoID8gX2UgOiBiZSkuYXBwbHkobnVsbCwgZSk7XHJcbiAgICAgIG4ucHVzaCh0KSwgYSArPSB0XHJcbiAgICB9KSwge1xyXG4gICAgICBzZWdzTGVuOiBuLFxyXG4gICAgICBsZW5BbGw6IGFcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE1lKGUsIGEpIHtcclxuICAgIHJldHVybiBudWxsID09IGUgfHwgbnVsbCA9PSBhIHx8IGUubGVuZ3RoICE9PSBhLmxlbmd0aCB8fCBlLnNvbWUoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgdmFyIG4gPSBhW3RdO1xyXG4gICAgICByZXR1cm4gZS50eXBlICE9PSBuLnR5cGUgfHwgZS52YWx1ZXMuc29tZShmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgIHJldHVybiBlICE9PSBuLnZhbHVlc1t0XVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEllKGUsIHQsIG4pIHtcclxuICAgIGUuZXZlbnRzW3RdID8gZS5ldmVudHNbdF0uaW5kZXhPZihuKSA8IDAgJiYgZS5ldmVudHNbdF0ucHVzaChuKSA6IGUuZXZlbnRzW3RdID0gW25dXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBDZShlLCB0LCBuKSB7XHJcbiAgICB2YXIgYTtcclxuICAgIGUuZXZlbnRzW3RdICYmIC0xIDwgKGEgPSBlLmV2ZW50c1t0XS5pbmRleE9mKG4pKSAmJiBlLmV2ZW50c1t0XS5zcGxpY2UoYSwgMSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIExlKGUpIHtcclxuICAgIHQgJiYgY2xlYXJUaW1lb3V0KHQpLCBRLnB1c2goZSksIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSgpXHJcbiAgICAgIH0pLCBRID0gW11cclxuICAgIH0sIDApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBZShlLCB0KSB7XHJcbiAgICBlLnJlZmxvd1RhcmdldHMuaW5kZXhPZih0KSA8IDAgJiYgZS5yZWZsb3dUYXJnZXRzLnB1c2godClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFZlKGUpIHtcclxuICAgIGUucmVmbG93VGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBuO1xyXG4gICAgICBuID0gZSwgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSBuLnBhcmVudE5vZGUsXHJcbiAgICAgICAgICB0ID0gbi5uZXh0U2libGluZztcclxuICAgICAgICBlLmluc2VydEJlZm9yZShlLnJlbW92ZUNoaWxkKG4pLCB0KVxyXG4gICAgICB9LCAwKVxyXG4gICAgfSksIGUucmVmbG93VGFyZ2V0cyA9IFtdXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQZShlLCB0LCBuLCBhLCBpLCBvLCBsKSB7XHJcbiAgICB2YXIgciwgcywgdTtcclxuICAgIFwiYXV0by1zdGFydC1yZXZlcnNlXCIgPT09IG4gPyAoXCJib29sZWFuXCIgIT0gdHlwZW9mIGggJiYgKHQuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIFwiYXV0by1zdGFydC1yZXZlcnNlXCIpLCBoID0gdC5vcmllbnRUeXBlLmJhc2VWYWwgPT09IFNWR01hcmtlckVsZW1lbnQuU1ZHX01BUktFUl9PUklFTlRfVU5LTk9XTiksIGggPyB0LnNldEF0dHJpYnV0ZShcIm9yaWVudFwiLCBuKSA6ICgociA9IGkuY3JlYXRlU1ZHVHJhbnNmb3JtKCkpLnNldFJvdGF0ZSgxODAsIDAsIDApLCBvLnRyYW5zZm9ybS5iYXNlVmFsLmFwcGVuZEl0ZW0ociksIHQuc2V0QXR0cmlidXRlKFwib3JpZW50XCIsIFwiYXV0b1wiKSwgdSA9ICEwKSkgOiAodC5zZXRBdHRyaWJ1dGUoXCJvcmllbnRcIiwgbiksICExID09PSBoICYmIG8udHJhbnNmb3JtLmJhc2VWYWwuY2xlYXIoKSksIHMgPSB0LnZpZXdCb3guYmFzZVZhbCwgdSA/IChzLnggPSAtYS5yaWdodCwgcy55ID0gLWEuYm90dG9tKSA6IChzLnggPSBhLmxlZnQsIHMueSA9IGEudG9wKSwgcy53aWR0aCA9IGEud2lkdGgsIHMuaGVpZ2h0ID0gYS5oZWlnaHQsIGxlICYmIEFlKGUsIGwpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBOZShlLCB0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wOiBlID8gXCJtYXJrZXJFbmRcIiA6IFwibWFya2VyU3RhcnRcIixcclxuICAgICAgb3JpZW50OiB0ID8gdC5ub1JvdGF0ZSA/IFwiMFwiIDogZSA/IFwiYXV0b1wiIDogXCJhdXRvLXN0YXJ0LXJldmVyc2VcIiA6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFRlKG4sIGEpIHtcclxuICAgIE9iamVjdC5rZXlzKGEpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSBhW2VdO1xyXG4gICAgICBuW2VdID0gbnVsbCAhPSB0LmluaVZhbHVlID8gdC5oYXNTRSA/IFt0LmluaVZhbHVlLCB0LmluaVZhbHVlXSA6IHQuaW5pVmFsdWUgOiB0Lmhhc1NFID8gdC5oYXNQcm9wcyA/IFt7fSwge31dIDogW10gOiB0Lmhhc1Byb3BzID8ge30gOiBudWxsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gV2UodCwgZSwgbiwgYSwgaSkge1xyXG4gICAgcmV0dXJuIGEgIT09IGVbbl0gJiYgKGVbbl0gPSBhLCBpICYmIGkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlKHQsIGEsIG4pXHJcbiAgICB9KSwgITApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCZShlKSB7XHJcbiAgICBmdW5jdGlvbiB0KGUsIHQpIHtcclxuICAgICAgcmV0dXJuIGUgKyBwYXJzZUZsb2F0KHQpXHJcbiAgICB9XHJcbiAgICB2YXIgbiA9IGUuZG9jdW1lbnQsXHJcbiAgICAgIGEgPSBlLmdldENvbXB1dGVkU3R5bGUobi5kb2N1bWVudEVsZW1lbnQsIFwiXCIpLFxyXG4gICAgICBpID0gZS5nZXRDb21wdXRlZFN0eWxlKG4uYm9keSwgXCJcIiksXHJcbiAgICAgIG8gPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gXCJzdGF0aWNcIiAhPT0gaS5wb3NpdGlvbiA/IChvLnggLT0gW2EubWFyZ2luTGVmdCwgYS5ib3JkZXJMZWZ0V2lkdGgsIGEucGFkZGluZ0xlZnQsIGkubWFyZ2luTGVmdCwgaS5ib3JkZXJMZWZ0V2lkdGhdLnJlZHVjZSh0LCAwKSwgby55IC09IFthLm1hcmdpblRvcCwgYS5ib3JkZXJUb3BXaWR0aCwgYS5wYWRkaW5nVG9wLCBpLm1hcmdpblRvcCwgaS5ib3JkZXJUb3BXaWR0aF0ucmVkdWNlKHQsIDApKSA6IFwic3RhdGljXCIgIT09IGEucG9zaXRpb24gJiYgKG8ueCAtPSBbYS5tYXJnaW5MZWZ0LCBhLmJvcmRlckxlZnRXaWR0aF0ucmVkdWNlKHQsIDApLCBvLnkgLT0gW2EubWFyZ2luVG9wLCBhLmJvcmRlclRvcFdpZHRoXS5yZWR1Y2UodCwgMCkpLCBvXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBSZShlKSB7XHJcbiAgICB2YXIgdCwgbiA9IGUuZG9jdW1lbnQ7XHJcbiAgICBuLmdldEVsZW1lbnRCeUlkKHIpIHx8ICh0ID0gKG5ldyBlLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHMsIFwiaW1hZ2Uvc3ZnK3htbFwiKSwgbi5ib2R5LmFwcGVuZENoaWxkKHQuZG9jdW1lbnRFbGVtZW50KSwgZChlKSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEZlKHUpIHtcclxuICAgIHZhciBfLCBmLCB2LCBlLCBuLCBhLCBpLCB5LCBzLCBoLCBwLCB0LCBvLCBsLCByLCBjLCBkLCBTLCBtLCBnID0gdS5vcHRpb25zLFxyXG4gICAgICBFID0gdS5jdXJTdGF0cyxcclxuICAgICAgeCA9IHUuYXBsU3RhdHMsXHJcbiAgICAgIGIgPSBFLnBvc2l0aW9uX3NvY2tldFhZU0UsXHJcbiAgICAgIGsgPSAhMTtcclxuXHJcbiAgICBmdW5jdGlvbiB3KGUsIHQpIHtcclxuICAgICAgdmFyIG4gPSB0ID09PSBNID8ge1xyXG4gICAgICAgIHg6IGUubGVmdCArIGUud2lkdGggLyAyLFxyXG4gICAgICAgIHk6IGUudG9wXHJcbiAgICAgIH0gOiB0ID09PSBJID8ge1xyXG4gICAgICAgIHg6IGUucmlnaHQsXHJcbiAgICAgICAgeTogZS50b3AgKyBlLmhlaWdodCAvIDJcclxuICAgICAgfSA6IHQgPT09IEMgPyB7XHJcbiAgICAgICAgeDogZS5sZWZ0ICsgZS53aWR0aCAvIDIsXHJcbiAgICAgICAgeTogZS5ib3R0b21cclxuICAgICAgfSA6IHtcclxuICAgICAgICB4OiBlLmxlZnQsXHJcbiAgICAgICAgeTogZS50b3AgKyBlLmhlaWdodCAvIDJcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIG4uc29ja2V0SWQgPSB0LCBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTyhlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogZS54LFxyXG4gICAgICAgIHk6IGUueVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoRS5wb3NpdGlvbl9wYXRoID0gZy5wYXRoLCBFLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCA9IEUubGluZV9zdHJva2VXaWR0aCwgRS5wb3NpdGlvbl9zb2NrZXRHcmF2aXR5U0UgPSBfID0gZGUoZy5zb2NrZXRHcmF2aXR5U0UpLCBmID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0LCBuLCBhLCBpID0gZy5hbmNob3JTRVtlXSxcclxuICAgICAgICAgIG8gPSB1Lm9wdGlvbklzQXR0YWNoLmFuY2hvclNFW2VdLFxyXG4gICAgICAgICAgbCA9ICExICE9PSBvID8gJFtpLl9pZF0gOiBudWxsLFxyXG4gICAgICAgICAgciA9ICExICE9PSBvICYmIGwuY29uZi5nZXRTdHJva2VXaWR0aCA/IGwuY29uZi5nZXRTdHJva2VXaWR0aChsLCB1KSA6IDAsXHJcbiAgICAgICAgICBzID0gITEgIT09IG8gJiYgbC5jb25mLmdldEJCb3hOZXN0ID8gbC5jb25mLmdldEJCb3hOZXN0KGwsIHUsIHIpIDogZ2UoaSwgdS5iYXNlV2luZG93KTtcclxuICAgICAgICByZXR1cm4gRS5jYXBzTWFza0FuY2hvcl9wYXRoRGF0YVNFW2VdID0gITEgIT09IG8gJiYgbC5jb25mLmdldFBhdGhEYXRhID8gbC5jb25mLmdldFBhdGhEYXRhKGwsIHUsIHIpIDogKG4gPSBudWxsICE9ICh0ID0gcykucmlnaHQgPyB0LnJpZ2h0IDogdC5sZWZ0ICsgdC53aWR0aCwgYSA9IG51bGwgIT0gdC5ib3R0b20gPyB0LmJvdHRvbSA6IHQudG9wICsgdC5oZWlnaHQsIFt7XHJcbiAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgIHZhbHVlczogW3QubGVmdCwgdC50b3BdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICB2YWx1ZXM6IFtuLCB0LnRvcF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgIHZhbHVlczogW24sIGFdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICB2YWx1ZXM6IFt0LmxlZnQsIGFdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdHlwZTogXCJaXCIsXHJcbiAgICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgICAgfV0pLCBFLmNhcHNNYXNrQW5jaG9yX3N0cm9rZVdpZHRoU0VbZV0gPSByLCBzXHJcbiAgICAgIH0pLCBpID0gLTEsIGcuc29ja2V0U0VbMF0gJiYgZy5zb2NrZXRTRVsxXSA/IChiWzBdID0gdyhmWzBdLCBnLnNvY2tldFNFWzBdKSwgYlsxXSA9IHcoZlsxXSwgZy5zb2NrZXRTRVsxXSkpIDogKGcuc29ja2V0U0VbMF0gfHwgZy5zb2NrZXRTRVsxXSA/IChnLnNvY2tldFNFWzBdID8gKG4gPSAwLCBhID0gMSkgOiAobiA9IDEsIGEgPSAwKSwgYltuXSA9IHcoZltuXSwgZy5zb2NrZXRTRVtuXSksIChlID0gVy5tYXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdyhmW2FdLCBlKVxyXG4gICAgICB9KSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gX2UoZSwgYltuXSk7XHJcbiAgICAgICAgKHQgPCBpIHx8IC0xID09PSBpKSAmJiAoYlthXSA9IGUsIGkgPSB0KVxyXG4gICAgICB9KSkgOiAoZSA9IFcubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHcoZlsxXSwgZSlcclxuICAgICAgfSksIFcubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHcoZlswXSwgZSlcclxuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobikge1xyXG4gICAgICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHQgPSBfZShuLCBlKTtcclxuICAgICAgICAgICh0IDwgaSB8fCAtMSA9PT0gaSkgJiYgKGJbMF0gPSBuLCBiWzFdID0gZSwgaSA9IHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkpLCBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0LCBuO1xyXG4gICAgICAgIGcuc29ja2V0U0VbZV0gfHwgKGZbZV0ud2lkdGggfHwgZltlXS5oZWlnaHQgPyBmW2VdLndpZHRoIHx8IGJbZV0uc29ja2V0SWQgIT09IEwgJiYgYltlXS5zb2NrZXRJZCAhPT0gSSA/IGZbZV0uaGVpZ2h0IHx8IGJbZV0uc29ja2V0SWQgIT09IE0gJiYgYltlXS5zb2NrZXRJZCAhPT0gQyB8fCAoYltlXS5zb2NrZXRJZCA9IDAgPD0gYltlID8gMCA6IDFdLnkgLSBmW2VdLnRvcCA/IEMgOiBNKSA6IGJbZV0uc29ja2V0SWQgPSAwIDw9IGJbZSA/IDAgOiAxXS54IC0gZltlXS5sZWZ0ID8gSSA6IEwgOiAodCA9IGJbZSA/IDAgOiAxXS54IC0gZltlXS5sZWZ0LCBuID0gYltlID8gMCA6IDFdLnkgLSBmW2VdLnRvcCwgYltlXS5zb2NrZXRJZCA9IE1hdGguYWJzKHQpID49IE1hdGguYWJzKG4pID8gMCA8PSB0ID8gSSA6IEwgOiAwIDw9IG4gPyBDIDogTSkpXHJcbiAgICAgIH0pKSwgRS5wb3NpdGlvbl9wYXRoICE9PSB4LnBvc2l0aW9uX3BhdGggfHwgRS5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGggIT09IHgucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoIHx8IFswLCAxXS5zb21lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIEUucG9zaXRpb25fcGx1Z092ZXJoZWFkU0VbZV0gIT09IHgucG9zaXRpb25fcGx1Z092ZXJoZWFkU0VbZV0gfHwgKGkgPSBiW2VdLCBvID0geC5wb3NpdGlvbl9zb2NrZXRYWVNFW2VdLCBpLnggIT09IG8ueCB8fCBpLnkgIT09IG8ueSB8fCBpLnNvY2tldElkICE9PSBvLnNvY2tldElkKSB8fCAodCA9IF9bZV0sIG4gPSB4LnBvc2l0aW9uX3NvY2tldEdyYXZpdHlTRVtlXSwgKGEgPSBudWxsID09IHQgPyBcImF1dG9cIiA6IEFycmF5LmlzQXJyYXkodCkgPyBcImFycmF5XCIgOiBcIm51bWJlclwiKSAhPT0gKG51bGwgPT0gbiA/IFwiYXV0b1wiIDogQXJyYXkuaXNBcnJheShuKSA/IFwiYXJyYXlcIiA6IFwibnVtYmVyXCIpIHx8IChcImFycmF5XCIgPT09IGEgPyB0WzBdICE9PSBuWzBdIHx8IHRbMV0gIT09IG5bMV0gOiB0ICE9PSBuKSk7XHJcbiAgICAgICAgdmFyIHQsIG4sIGEsIGksIG9cclxuICAgICAgfSkpIHtcclxuICAgICAgc3dpdGNoICh1LnBhdGhMaXN0LmJhc2VWYWwgPSB2ID0gW10sIHUucGF0aExpc3QuYW5pbVZhbCA9IG51bGwsIEUucG9zaXRpb25fcGF0aCkge1xyXG4gICAgICBjYXNlIEE6XHJcbiAgICAgICAgdi5wdXNoKFtPKGJbMF0pLCBPKGJbMV0pXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVjpcclxuICAgICAgICB0ID0gXCJudW1iZXJcIiA9PSB0eXBlb2YgX1swXSAmJiAwIDwgX1swXSB8fCBcIm51bWJlclwiID09IHR5cGVvZiBfWzFdICYmIDAgPCBfWzFdLCBvID0gWiAqICh0ID8gLTEgOiAxKSwgbCA9IE1hdGguYXRhbjIoYlsxXS55IC0gYlswXS55LCBiWzFdLnggLSBiWzBdLngpLCByID0gLWwgKyBvLCBjID0gTWF0aC5QSSAtIGwgLSBvLCBkID0gX2UoYlswXSwgYlsxXSkgLyBNYXRoLnNxcnQoMikgKiBVLCBTID0ge1xyXG4gICAgICAgICAgeDogYlswXS54ICsgTWF0aC5jb3MocikgKiBkLFxyXG4gICAgICAgICAgeTogYlswXS55ICsgTWF0aC5zaW4ocikgKiBkICogLTFcclxuICAgICAgICB9LCBtID0ge1xyXG4gICAgICAgICAgeDogYlsxXS54ICsgTWF0aC5jb3MoYykgKiBkLFxyXG4gICAgICAgICAgeTogYlsxXS55ICsgTWF0aC5zaW4oYykgKiBkICogLTFcclxuICAgICAgICB9LCB2LnB1c2goW08oYlswXSksIFMsIG0sIE8oYlsxXSldKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQOlxyXG4gICAgICBjYXNlIE46XHJcbiAgICAgICAgcyA9IFtfWzBdLCBFLnBvc2l0aW9uX3BhdGggPT09IE4gPyAwIDogX1sxXV0sIGggPSBbXSwgcCA9IFtdLCBiLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuLCBhLCBpLCBvLCBsLCByID0gc1t0XTtcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocikgPyBuID0ge1xyXG4gICAgICAgICAgICB4OiByWzBdLFxyXG4gICAgICAgICAgICB5OiByWzFdXHJcbiAgICAgICAgICB9IDogXCJudW1iZXJcIiA9PSB0eXBlb2YgciA/IG4gPSBlLnNvY2tldElkID09PSBNID8ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAtclxyXG4gICAgICAgICAgfSA6IGUuc29ja2V0SWQgPT09IEkgPyB7XHJcbiAgICAgICAgICAgIHg6IHIsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgIH0gOiBlLnNvY2tldElkID09PSBDID8ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiByXHJcbiAgICAgICAgICB9IDoge1xyXG4gICAgICAgICAgICB4OiAtcixcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgfSA6IChhID0gYlt0ID8gMCA6IDFdLCBvID0gMCA8IChpID0gRS5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRVt0XSkgPyBHICsgKEQgPCBpID8gKGkgLSBEKSAqIHogOiAwKSA6IEIgKyAoRS5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGggPiBSID8gKEUucG9zaXRpb25fbGluZVN0cm9rZVdpZHRoIC0gUikgKiBGIDogMCksIGUuc29ja2V0SWQgPT09IE0gPyAoKGwgPSAoZS55IC0gYS55KSAvIDIpIDwgbyAmJiAobCA9IG8pLCBuID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAtbFxyXG4gICAgICAgICAgfSkgOiBlLnNvY2tldElkID09PSBJID8gKChsID0gKGEueCAtIGUueCkgLyAyKSA8IG8gJiYgKGwgPSBvKSwgbiA9IHtcclxuICAgICAgICAgICAgeDogbCxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgfSkgOiBlLnNvY2tldElkID09PSBDID8gKChsID0gKGEueSAtIGUueSkgLyAyKSA8IG8gJiYgKGwgPSBvKSwgbiA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogbFxyXG4gICAgICAgICAgfSkgOiAoKGwgPSAoZS54IC0gYS54KSAvIDIpIDwgbyAmJiAobCA9IG8pLCBuID0ge1xyXG4gICAgICAgICAgICB4OiAtbCxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgfSkpLCBoW3RdID0gZS54ICsgbi54LCBwW3RdID0gZS55ICsgbi55XHJcbiAgICAgICAgfSksIHYucHVzaChbTyhiWzBdKSwge1xyXG4gICAgICAgICAgeDogaFswXSxcclxuICAgICAgICAgIHk6IHBbMF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICB4OiBoWzFdLFxyXG4gICAgICAgICAgeTogcFsxXVxyXG4gICAgICAgIH0sIE8oYlsxXSldKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUOlxyXG4gICAgICAgICEgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGEsIG8gPSAxLFxyXG4gICAgICAgICAgICBsID0gMixcclxuICAgICAgICAgICAgciA9IDMsXHJcbiAgICAgICAgICAgIHMgPSA0LFxyXG4gICAgICAgICAgICB1ID0gW1xyXG4gICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGggPSBbXTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBwKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUgPT09IG8gPyByIDogZSA9PT0gbCA/IHMgOiBlID09PSByID8gbyA6IGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUgPT09IGwgfHwgZSA9PT0gcyA/IFwieFwiIDogXCJ5XCJcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgdmFyIGEgPSB7XHJcbiAgICAgICAgICAgICAgeDogZS54LFxyXG4gICAgICAgICAgICAgIHk6IGUueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgIGlmIChuID09PSBwKGUuZGlySWQpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRpcklkOiBcIiArIG4pO1xyXG4gICAgICAgICAgICAgIGEuZGlySWQgPSBuXHJcbiAgICAgICAgICAgIH0gZWxzZSBhLmRpcklkID0gZS5kaXJJZDtcclxuICAgICAgICAgICAgcmV0dXJuIGEuZGlySWQgPT09IG8gPyBhLnkgLT0gdCA6IGEuZGlySWQgPT09IGwgPyBhLnggKz0gdCA6IGEuZGlySWQgPT09IHIgPyBhLnkgKz0gdCA6IGEueCAtPSB0LCBhXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gZihlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmRpcklkID09PSBvID8gZS55IDw9IHQueSA6IHQuZGlySWQgPT09IGwgPyBlLnggPj0gdC54IDogdC5kaXJJZCA9PT0gciA/IGUueSA+PSB0LnkgOiBlLnggPD0gdC54XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24geShlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmRpcklkID09PSBvIHx8IHQuZGlySWQgPT09IHIgPyBlLnggPT09IHQueCA6IGUueSA9PT0gdC55XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gUyhlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlWzBdID8ge1xyXG4gICAgICAgICAgICAgIGNvbnRhaW46IDAsXHJcbiAgICAgICAgICAgICAgbm90Q29udGFpbjogMVxyXG4gICAgICAgICAgICB9IDoge1xyXG4gICAgICAgICAgICAgIGNvbnRhaW46IDEsXHJcbiAgICAgICAgICAgICAgbm90Q29udGFpbjogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gbShlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh0W25dIC0gZVtuXSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBnKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwieFwiID09PSBuID8gZS54IDwgdC54ID8gbCA6IHMgOiBlLnkgPCB0LnkgPyByIDogb1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgICAgIHZhciBlLCB0LCBhLCBpLCBuID0gW2YoaFsxXSwgaFswXSksIGYoaFswXSwgaFsxXSldLFxyXG4gICAgICAgICAgICAgIG8gPSBbYyhoWzBdLmRpcklkKSwgYyhoWzFdLmRpcklkKV07XHJcbiAgICAgICAgICAgIGlmIChvWzBdID09PSBvWzFdKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG5bMF0gJiYgblsxXSkgcmV0dXJuIHkoaFsxXSwgaFswXSkgfHwgKGhbMF1bb1swXV0gPT09IGhbMV1bb1sxXV0gPyAodVswXS5wdXNoKGhbMF0pLCB1WzFdLnB1c2goaFsxXSkpIDogKGUgPSBoWzBdW29bMF1dICsgKGhbMV1bb1sxXV0gLSBoWzBdW29bMF1dKSAvIDIsIHVbMF0ucHVzaChkKGhbMF0sIE1hdGguYWJzKGUgLSBoWzBdW29bMF1dKSkpLCB1WzFdLnB1c2goZChoWzFdLCBNYXRoLmFicyhlIC0gaFsxXVtvWzFdXSkpKSkpLCAhMTtcclxuICAgICAgICAgICAgICBuWzBdICE9PSBuWzFdID8gKHQgPSBTKG4pLCAoYSA9IG0oaFt0Lm5vdENvbnRhaW5dLCBoW3QuY29udGFpbl0sIG9bdC5ub3RDb250YWluXSkpIDwgSCAmJiAoaFt0Lm5vdENvbnRhaW5dID0gZChoW3Qubm90Q29udGFpbl0sIEggLSBhKSksIHVbdC5ub3RDb250YWluXS5wdXNoKGhbdC5ub3RDb250YWluXSksIGhbdC5ub3RDb250YWluXSA9IGQoaFt0Lm5vdENvbnRhaW5dLCBILCB5KGhbdC5jb250YWluXSwgaFt0Lm5vdENvbnRhaW5dKSA/IFwieFwiID09PSBvW3Qubm90Q29udGFpbl0gPyByIDogbCA6IGcoaFt0Lm5vdENvbnRhaW5dLCBoW3QuY29udGFpbl0sIFwieFwiID09PSBvW3Qubm90Q29udGFpbl0gPyBcInlcIiA6IFwieFwiKSkpIDogKGEgPSBtKGhbMF0sIGhbMV0sIFwieFwiID09PSBvWzBdID8gXCJ5XCIgOiBcInhcIiksIHUuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG4gPSAwID09PSB0ID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICBlLnB1c2goaFt0XSksIGhbdF0gPSBkKGhbdF0sIEgsIDIgKiBIIDw9IGEgPyBnKGhbdF0sIGhbbl0sIFwieFwiID09PSBvW3RdID8gXCJ5XCIgOiBcInhcIikgOiBcInhcIiA9PT0gb1t0XSA/IHIgOiBsKVxyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChuWzBdICYmIG5bMV0pIHJldHVybiB5KGhbMV0sIGhbMF0pID8gdVsxXS5wdXNoKGhbMV0pIDogeShoWzBdLCBoWzFdKSA/IHVbMF0ucHVzaChoWzBdKSA6IHVbMF0ucHVzaChcInhcIiA9PT0gb1swXSA/IHtcclxuICAgICAgICAgICAgICAgIHg6IGhbMV0ueCxcclxuICAgICAgICAgICAgICAgIHk6IGhbMF0ueVxyXG4gICAgICAgICAgICAgIH0gOiB7XHJcbiAgICAgICAgICAgICAgICB4OiBoWzBdLngsXHJcbiAgICAgICAgICAgICAgICB5OiBoWzFdLnlcclxuICAgICAgICAgICAgICB9KSwgITE7XHJcbiAgICAgICAgICAgICAgblswXSAhPT0gblsxXSA/ICh0ID0gUyhuKSwgdVt0Lm5vdENvbnRhaW5dLnB1c2goaFt0Lm5vdENvbnRhaW5dKSwgaFt0Lm5vdENvbnRhaW5dID0gZChoW3Qubm90Q29udGFpbl0sIEgsIG0oaFt0Lm5vdENvbnRhaW5dLCBoW3QuY29udGFpbl0sIG9bdC5jb250YWluXSkgPj0gSCA/IGcoaFt0Lm5vdENvbnRhaW5dLCBoW3QuY29udGFpbl0sIG9bdC5jb250YWluXSkgOiBoW3QuY29udGFpbl0uZGlySWQpKSA6IChpID0gW3tcclxuICAgICAgICAgICAgICAgIHg6IGhbMF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IGhbMF0ueVxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IGhbMV0ueCxcclxuICAgICAgICAgICAgICAgIHk6IGhbMV0ueVxyXG4gICAgICAgICAgICAgIH1dLCB1LmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gMCA9PT0gdCA/IDEgOiAwLFxyXG4gICAgICAgICAgICAgICAgICBhID0gbShpW3RdLCBpW25dLCBvW3RdKTtcclxuICAgICAgICAgICAgICAgIGEgPCBIICYmIChoW3RdID0gZChoW3RdLCBIIC0gYSkpLCBlLnB1c2goaFt0XSksIGhbdF0gPSBkKGhbdF0sIEgsIGcoaFt0XSwgaFtuXSwgb1tuXSkpXHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICEwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKGIuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgIHZhciBuLCBhID0gTyhlKSxcclxuICAgICAgICAgICAgICAgIGkgPSBfW3RdO1xyXG4gICAgICAgICAgICAgIG4gPSBBcnJheS5pc0FycmF5KGkpID8gaVswXSA8IDAgPyBbcywgLWlbMF1dIDogMCA8IGlbMF0gPyBbbCwgaVswXV0gOiBpWzFdIDwgMCA/IFtvLCAtaVsxXV0gOiAwIDwgaVsxXSA/IFtyLCBpWzFdXSA6IFtlLnNvY2tldElkLCAwXSA6IFwibnVtYmVyXCIgIT0gdHlwZW9mIGkgPyBbZS5zb2NrZXRJZCwgSF0gOiAwIDw9IGkgPyBbZS5zb2NrZXRJZCwgaV0gOiBbcChlLnNvY2tldElkKSwgLWldLCBhLmRpcklkID0gblswXSwgaSA9IG5bMV0sIHVbdF0ucHVzaChhKSwgaFt0XSA9IGQoYSwgaSlcclxuICAgICAgICAgICAgfSk7IGUoKTspO1xyXG4gICAgICAgICAgdVsxXS5yZXZlcnNlKCksIHVbMF0uY29uY2F0KHVbMV0pLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4gPSB7XHJcbiAgICAgICAgICAgICAgeDogZS54LFxyXG4gICAgICAgICAgICAgIHk6IGUueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAwIDwgdCAmJiB2LnB1c2goW2EsIG5dKSwgYSA9IG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSgpXHJcbiAgICAgIH1cclxuICAgICAgeSA9IFtdLCBFLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICB2YXIgbiwgYSwgaSwgbywgbCwgciwgcywgdSwgaCwgcCwgYywgZCA9ICF0O1xyXG4gICAgICAgIDAgPCBlID8gMiA9PT0gKG4gPSB2W2EgPSBkID8gMCA6IHYubGVuZ3RoIC0gMV0pLmxlbmd0aCA/ICh5W2FdID0geVthXSB8fCBfZS5hcHBseShudWxsLCBuKSwgeVthXSA+IGogJiYgKHlbYV0gLSBlIDwgaiAmJiAoZSA9IHlbYV0gLSBqKSwgaSA9IHZlKG5bMF0sIG5bMV0sIChkID8gZSA6IHlbYV0gLSBlKSAvIHlbYV0pLCB2W2FdID0gZCA/IFtpLCBuWzFdXSA6IFtuWzBdLCBpXSwgeVthXSAtPSBlKSkgOiAoeVthXSA9IHlbYV0gfHwgYmUuYXBwbHkobnVsbCwgbiksIHlbYV0gPiBqICYmICh5W2FdIC0gZSA8IGogJiYgKGUgPSB5W2FdIC0gaiksIGkgPSB4ZShuWzBdLCBuWzFdLCBuWzJdLCBuWzNdLCBrZShuWzBdLCBuWzFdLCBuWzJdLCBuWzNdLCBkID8gZSA6IHlbYV0gLSBlKSksIGQgPyAobyA9IG5bMF0sIGwgPSBpLnRvUDEpIDogKG8gPSBuWzNdLCBsID0gaS5mcm9tUDIpLCByID0gTWF0aC5hdGFuMihvLnkgLSBpLnksIGkueCAtIG8ueCksIHMgPSBfZShpLCBsKSwgaS54ID0gby54ICsgTWF0aC5jb3MocikgKiBlLCBpLnkgPSBvLnkgKyBNYXRoLnNpbihyKSAqIGUgKiAtMSwgbC54ID0gaS54ICsgTWF0aC5jb3MocikgKiBzLCBsLnkgPSBpLnkgKyBNYXRoLnNpbihyKSAqIHMgKiAtMSwgdlthXSA9IGQgPyBbaSwgaS50b1AxLCBpLnRvUDIsIG5bM11dIDogW25bMF0sIGkuZnJvbVAxLCBpLmZyb21QMiwgaV0sIHlbYV0gPSBudWxsKSkgOiBlIDwgMCAmJiAobiA9IHZbYSA9IGQgPyAwIDogdi5sZW5ndGggLSAxXSwgdSA9IGJbdF0uc29ja2V0SWQsIGggPSB1ID09PSBMIHx8IHUgPT09IEkgPyBcInhcIiA6IFwieVwiLCBlIDwgKGMgPSAtZlt0XVtcInhcIiA9PT0gaCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdKSAmJiAoZSA9IGMpLCBwID0gZSAqICh1ID09PSBMIHx8IHUgPT09IE0gPyAtMSA6IDEpLCAyID09PSBuLmxlbmd0aCA/IG5bZCA/IDAgOiBuLmxlbmd0aCAtIDFdW2hdICs9IHAgOiAoZCA/IFswLCAxXSA6IFtuLmxlbmd0aCAtIDIsIG4ubGVuZ3RoIC0gMV0pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIG5bZV1baF0gKz0gcFxyXG4gICAgICAgIH0pLCB5W2FdID0gbnVsbClcclxuICAgICAgfSksIHgucG9zaXRpb25fc29ja2V0WFlTRSA9IGRlKGIpLCB4LnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFID0gZGUoRS5wb3NpdGlvbl9wbHVnT3ZlcmhlYWRTRSksIHgucG9zaXRpb25fcGF0aCA9IEUucG9zaXRpb25fcGF0aCwgeC5wb3NpdGlvbl9saW5lU3Ryb2tlV2lkdGggPSBFLnBvc2l0aW9uX2xpbmVTdHJva2VXaWR0aCwgeC5wb3NpdGlvbl9zb2NrZXRHcmF2aXR5U0UgPSBkZShfKSwgayA9ICEwLCB1LmV2ZW50cy5hcGxfcG9zaXRpb24gJiYgdS5ldmVudHMuYXBsX3Bvc2l0aW9uLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlKHUsIHYpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4ga1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gR2UodCwgbikge1xyXG4gICAgbiAhPT0gdC5pc1Nob3duICYmICghIW4gIT0gISF0LmlzU2hvd24gJiYgKHQuc3ZnLnN0eWxlLnZpc2liaWxpdHkgPSBuID8gXCJcIiA6IFwiaGlkZGVuXCIpLCB0LmlzU2hvd24gPSBuLCB0LmV2ZW50cyAmJiB0LmV2ZW50cy5zdmdTaG93ICYmIHQuZXZlbnRzLnN2Z1Nob3cuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlKHQsIG4pXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIERlKGUsIHQpIHtcclxuICAgIHZhciBuLCBhLCBpLCBvLCBsLCBoLCBwLCBjLCBkLCBmLCByLCBzLCB1LCB5LCBTLCBtLCBnLCBfLCB2LCBFLCB4LCBiLCBrLCB3LCBPLCBNLCBJLCBDLCBMLCBBLCBWLCBQLCBOLCBULCBXLCBCLCBSLCBGLCBHLCBELCB6LCBqLCBILCBVLCBaLCBZLCBYLCBxLCBRLCBLLCBKLCAkLCBlZSA9IHt9O1xyXG4gICAgdC5saW5lICYmIChlZS5saW5lID0gKGEgPSAobiA9IGUpLm9wdGlvbnMsIGkgPSBuLmN1clN0YXRzLCBvID0gbi5ldmVudHMsIGwgPSAhMSwgbCA9IFdlKG4sIGksIFwibGluZV9jb2xvclwiLCBhLmxpbmVDb2xvciwgby5jdXJfbGluZV9jb2xvcikgfHwgbCwgbCA9IFdlKG4sIGksIFwibGluZV9jb2xvclRyYVwiLCBmZShpLmxpbmVfY29sb3IpWzBdIDwgMSkgfHwgbCwgbCA9IFdlKG4sIGksIFwibGluZV9zdHJva2VXaWR0aFwiLCBhLmxpbmVTaXplLCBvLmN1cl9saW5lX3N0cm9rZVdpZHRoKSB8fCBsKSksICh0LnBsdWcgfHwgZWUubGluZSkgJiYgKGVlLnBsdWcgPSAocCA9IChoID0gZSkub3B0aW9ucywgYyA9IGguY3VyU3RhdHMsIGQgPSBoLmV2ZW50cywgZiA9ICExLCBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdCwgbiwgYSwgaSwgbywgbCwgciwgcywgdSA9IHAucGx1Z1NFW2VdO1xyXG4gICAgICBmID0gV2UoaCwgYy5wbHVnX2VuYWJsZWRTRSwgZSwgdSAhPT0gbmUpIHx8IGYsIGYgPSBXZShoLCBjLnBsdWdfcGx1Z1NFLCBlLCB1KSB8fCBmLCBmID0gV2UoaCwgYy5wbHVnX2NvbG9yU0UsIGUsIHMgPSBwLnBsdWdDb2xvclNFW2VdIHx8IGMubGluZV9jb2xvciwgZC5jdXJfcGx1Z19jb2xvclNFKSB8fCBmLCBmID0gV2UoaCwgYy5wbHVnX2NvbG9yVHJhU0UsIGUsIGZlKHMpWzBdIDwgMSkgfHwgZiwgdSAhPT0gbmUgJiYgKGkgPSBuID0gKHQgPSBhZVtpZVt1XV0pLndpZHRoUiAqIHAucGx1Z1NpemVTRVtlXSwgbyA9IGEgPSB0LmhlaWdodFIgKiBwLnBsdWdTaXplU0VbZV0sIHVlICYmIChpICo9IGMubGluZV9zdHJva2VXaWR0aCwgbyAqPSBjLmxpbmVfc3Ryb2tlV2lkdGgpLCBmID0gV2UoaCwgYy5wbHVnX21hcmtlcldpZHRoU0UsIGUsIGkpIHx8IGYsIGYgPSBXZShoLCBjLnBsdWdfbWFya2VySGVpZ2h0U0UsIGUsIG8pIHx8IGYsIGMuY2Fwc01hc2tNYXJrZXJfbWFya2VyV2lkdGhTRVtlXSA9IG4sIGMuY2Fwc01hc2tNYXJrZXJfbWFya2VySGVpZ2h0U0VbZV0gPSBhKSwgYy5wbHVnT3V0bGluZV9wbHVnU0VbZV0gPSBjLmNhcHNNYXNrTWFya2VyX3BsdWdTRVtlXSA9IHUsIGMucGx1Z19lbmFibGVkU0VbZV0gPyAocyA9IGMubGluZV9zdHJva2VXaWR0aCAvIHBlLmxpbmVTaXplICogcC5wbHVnU2l6ZVNFW2VdLCBjLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFW2VdID0gdC5vdmVyaGVhZCAqIHMsIGMudmlld0JveF9wbHVnQkNpcmNsZVNFW2VdID0gdC5iQ2lyY2xlICogcywgbCA9IHQuc2lkZUxlbiAqIHMsIHIgPSB0LmJhY2tMZW4gKiBzKSA6IChjLnBvc2l0aW9uX3BsdWdPdmVyaGVhZFNFW2VdID0gLWMubGluZV9zdHJva2VXaWR0aCAvIDIsIGMudmlld0JveF9wbHVnQkNpcmNsZVNFW2VdID0gbCA9IHIgPSAwKSwgV2UoaCwgYy5hdHRhY2hfcGx1Z1NpZGVMZW5TRSwgZSwgbCwgZC5jdXJfYXR0YWNoX3BsdWdTaWRlTGVuU0UpLCBXZShoLCBjLmF0dGFjaF9wbHVnQmFja0xlblNFLCBlLCByLCBkLmN1cl9hdHRhY2hfcGx1Z0JhY2tMZW5TRSksIGMuY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFW2VdID0gIWMucGx1Z19lbmFibGVkU0VbZV1cclxuICAgIH0pLCBmID0gV2UoaCwgYywgXCJwbHVnX2VuYWJsZWRcIiwgYy5wbHVnX2VuYWJsZWRTRVswXSB8fCBjLnBsdWdfZW5hYmxlZFNFWzFdKSB8fCBmKSksICh0LmxpbmVPdXRsaW5lIHx8IGVlLmxpbmUpICYmIChlZS5saW5lT3V0bGluZSA9ICh1ID0gKHIgPSBlKS5vcHRpb25zLCB5ID0gci5jdXJTdGF0cywgUyA9ICExLCBTID0gV2UociwgeSwgXCJsaW5lT3V0bGluZV9lbmFibGVkXCIsIHUubGluZU91dGxpbmVFbmFibGVkKSB8fCBTLCBTID0gV2UociwgeSwgXCJsaW5lT3V0bGluZV9jb2xvclwiLCB1LmxpbmVPdXRsaW5lQ29sb3IpIHx8IFMsIFMgPSBXZShyLCB5LCBcImxpbmVPdXRsaW5lX2NvbG9yVHJhXCIsIGZlKHkubGluZU91dGxpbmVfY29sb3IpWzBdIDwgMSkgfHwgUywgcyA9IHkubGluZV9zdHJva2VXaWR0aCAqIHUubGluZU91dGxpbmVTaXplLCBTID0gV2UociwgeSwgXCJsaW5lT3V0bGluZV9zdHJva2VXaWR0aFwiLCB5LmxpbmVfc3Ryb2tlV2lkdGggLSAyICogcykgfHwgUywgUyA9IFdlKHIsIHksIFwibGluZU91dGxpbmVfaW5TdHJva2VXaWR0aFwiLCB5LmxpbmVPdXRsaW5lX2NvbG9yVHJhID8geS5saW5lT3V0bGluZV9zdHJva2VXaWR0aCArIDIgKiBoZSA6IHkubGluZV9zdHJva2VXaWR0aCAtIHMpIHx8IFMpKSwgKHQucGx1Z091dGxpbmUgfHwgZWUubGluZSB8fCBlZS5wbHVnIHx8IGVlLmxpbmVPdXRsaW5lKSAmJiAoZWUucGx1Z091dGxpbmUgPSAoZyA9IChtID0gZSkub3B0aW9ucywgXyA9IG0uY3VyU3RhdHMsIHYgPSAhMSwgWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQsIG4gPSBfLnBsdWdPdXRsaW5lX3BsdWdTRVtlXSxcclxuICAgICAgICBhID0gbiAhPT0gbmUgPyBhZVtpZVtuXV0gOiBudWxsO1xyXG4gICAgICB2ID0gV2UobSwgXy5wbHVnT3V0bGluZV9lbmFibGVkU0UsIGUsIGcucGx1Z091dGxpbmVFbmFibGVkU0VbZV0gJiYgXy5wbHVnX2VuYWJsZWQgJiYgXy5wbHVnX2VuYWJsZWRTRVtlXSAmJiAhIWEgJiYgISFhLm91dGxpbmVCYXNlKSB8fCB2LCB2ID0gV2UobSwgXy5wbHVnT3V0bGluZV9jb2xvclNFLCBlLCB0ID0gZy5wbHVnT3V0bGluZUNvbG9yU0VbZV0gfHwgXy5saW5lT3V0bGluZV9jb2xvcikgfHwgdiwgdiA9IFdlKG0sIF8ucGx1Z091dGxpbmVfY29sb3JUcmFTRSwgZSwgZmUodClbMF0gPCAxKSB8fCB2LCBhICYmIGEub3V0bGluZUJhc2UgJiYgKCh0ID0gZy5wbHVnT3V0bGluZVNpemVTRVtlXSkgPiBhLm91dGxpbmVNYXggJiYgKHQgPSBhLm91dGxpbmVNYXgpLCB0ICo9IDIgKiBhLm91dGxpbmVCYXNlLCB2ID0gV2UobSwgXy5wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFLCBlLCB0KSB8fCB2LCB2ID0gV2UobSwgXy5wbHVnT3V0bGluZV9pblN0cm9rZVdpZHRoU0UsIGUsIF8ucGx1Z091dGxpbmVfY29sb3JUcmFTRVtlXSA/IHQgLSBoZSAvIChfLmxpbmVfc3Ryb2tlV2lkdGggLyBwZS5saW5lU2l6ZSkgLyBnLnBsdWdTaXplU0VbZV0gKiAyIDogdCAvIDIpIHx8IHYpXHJcbiAgICB9KSwgdikpLCAodC5mYWNlcyB8fCBlZS5saW5lIHx8IGVlLnBsdWcgfHwgZWUubGluZU91dGxpbmUgfHwgZWUucGx1Z091dGxpbmUpICYmIChlZS5mYWNlcyA9IChiID0gKEUgPSBlKS5jdXJTdGF0cywgayA9IEUuYXBsU3RhdHMsIHcgPSBFLmV2ZW50cywgTyA9ICExLCAhYi5saW5lX2FsdENvbG9yICYmIFdlKEUsIGssIFwibGluZV9jb2xvclwiLCB4ID0gYi5saW5lX2NvbG9yLCB3LmFwbF9saW5lX2NvbG9yKSAmJiAoRS5saW5lRmFjZS5zdHlsZS5zdHJva2UgPSB4LCBPID0gITApLCBXZShFLCBrLCBcImxpbmVfc3Ryb2tlV2lkdGhcIiwgeCA9IGIubGluZV9zdHJva2VXaWR0aCwgdy5hcGxfbGluZV9zdHJva2VXaWR0aCkgJiYgKEUubGluZVNoYXBlLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwLCAocmUgfHwgbGUpICYmIChBZShFLCBFLmxpbmVTaGFwZSksIGxlICYmIChBZShFLCBFLmxpbmVGYWNlKSwgQWUoRSwgRS5saW5lTWFza0NhcHMpKSkpLCBXZShFLCBrLCBcImxpbmVPdXRsaW5lX2VuYWJsZWRcIiwgeCA9IGIubGluZU91dGxpbmVfZW5hYmxlZCwgdy5hcGxfbGluZU91dGxpbmVfZW5hYmxlZCkgJiYgKEUubGluZU91dGxpbmVGYWNlLnN0eWxlLmRpc3BsYXkgPSB4ID8gXCJpbmxpbmVcIiA6IFwibm9uZVwiLCBPID0gITApLCBiLmxpbmVPdXRsaW5lX2VuYWJsZWQgJiYgKFdlKEUsIGssIFwibGluZU91dGxpbmVfY29sb3JcIiwgeCA9IGIubGluZU91dGxpbmVfY29sb3IsIHcuYXBsX2xpbmVPdXRsaW5lX2NvbG9yKSAmJiAoRS5saW5lT3V0bGluZUZhY2Uuc3R5bGUuc3Ryb2tlID0geCwgTyA9ICEwKSwgV2UoRSwgaywgXCJsaW5lT3V0bGluZV9zdHJva2VXaWR0aFwiLCB4ID0gYi5saW5lT3V0bGluZV9zdHJva2VXaWR0aCwgdy5hcGxfbGluZU91dGxpbmVfc3Ryb2tlV2lkdGgpICYmIChFLmxpbmVPdXRsaW5lTWFza1NoYXBlLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwLCBsZSAmJiAoQWUoRSwgRS5saW5lT3V0bGluZU1hc2tDYXBzKSwgQWUoRSwgRS5saW5lT3V0bGluZUZhY2UpKSksIFdlKEUsIGssIFwibGluZU91dGxpbmVfaW5TdHJva2VXaWR0aFwiLCB4ID0gYi5saW5lT3V0bGluZV9pblN0cm9rZVdpZHRoLCB3LmFwbF9saW5lT3V0bGluZV9pblN0cm9rZVdpZHRoKSAmJiAoRS5saW5lTWFza1NoYXBlLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwLCBsZSAmJiAoQWUoRSwgRS5saW5lT3V0bGluZU1hc2tDYXBzKSwgQWUoRSwgRS5saW5lT3V0bGluZUZhY2UpKSkpLCBXZShFLCBrLCBcInBsdWdfZW5hYmxlZFwiLCB4ID0gYi5wbHVnX2VuYWJsZWQsIHcuYXBsX3BsdWdfZW5hYmxlZCkgJiYgKEUucGx1Z3NGYWNlLnN0eWxlLmRpc3BsYXkgPSB4ID8gXCJpbmxpbmVcIiA6IFwibm9uZVwiLCBPID0gITApLCBiLnBsdWdfZW5hYmxlZCAmJiBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAobikge1xyXG4gICAgICB2YXIgZSA9IGIucGx1Z19wbHVnU0Vbbl0sXHJcbiAgICAgICAgdCA9IGUgIT09IG5lID8gYWVbaWVbZV1dIDogbnVsbCxcclxuICAgICAgICBhID0gTmUobiwgdCk7XHJcbiAgICAgIFdlKEUsIGsucGx1Z19lbmFibGVkU0UsIG4sIHggPSBiLnBsdWdfZW5hYmxlZFNFW25dLCB3LmFwbF9wbHVnX2VuYWJsZWRTRSkgJiYgKEUucGx1Z3NGYWNlLnN0eWxlW2EucHJvcF0gPSB4ID8gXCJ1cmwoI1wiICsgRS5wbHVnTWFya2VySWRTRVtuXSArIFwiKVwiIDogXCJub25lXCIsIE8gPSAhMCksIGIucGx1Z19lbmFibGVkU0Vbbl0gJiYgKFdlKEUsIGsucGx1Z19wbHVnU0UsIG4sIGUsIHcuYXBsX3BsdWdfcGx1Z1NFKSAmJiAoRS5wbHVnRmFjZVNFW25dLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgdC5lbG1JZCwgUGUoRSwgRS5wbHVnTWFya2VyU0Vbbl0sIGEub3JpZW50LCB0LmJCb3gsIEUuc3ZnLCBFLnBsdWdNYXJrZXJTaGFwZVNFW25dLCBFLnBsdWdzRmFjZSksIE8gPSAhMCwgcmUgJiYgQWUoRSwgRS5wbHVnc0ZhY2UpKSwgV2UoRSwgay5wbHVnX2NvbG9yU0UsIG4sIHggPSBiLnBsdWdfY29sb3JTRVtuXSwgdy5hcGxfcGx1Z19jb2xvclNFKSAmJiAoRS5wbHVnRmFjZVNFW25dLnN0eWxlLmZpbGwgPSB4LCBPID0gITAsIChzZSB8fCB1ZSB8fCBsZSkgJiYgIWIubGluZV9jb2xvclRyYSAmJiBBZShFLCBsZSA/IEUubGluZU1hc2tDYXBzIDogRS5jYXBzTWFza0xpbmUpKSwgW1wibWFya2VyV2lkdGhcIiwgXCJtYXJrZXJIZWlnaHRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0ID0gXCJwbHVnX1wiICsgZSArIFwiU0VcIjtcclxuICAgICAgICBXZShFLCBrW3RdLCBuLCB4ID0gYlt0XVtuXSwgd1tcImFwbF9cIiArIHRdKSAmJiAoRS5wbHVnTWFya2VyU0Vbbl1bZV0uYmFzZVZhbC52YWx1ZSA9IHgsIE8gPSAhMClcclxuICAgICAgfSksIFdlKEUsIGsucGx1Z091dGxpbmVfZW5hYmxlZFNFLCBuLCB4ID0gYi5wbHVnT3V0bGluZV9lbmFibGVkU0Vbbl0sIHcuYXBsX3BsdWdPdXRsaW5lX2VuYWJsZWRTRSkgJiYgKHggPyAoRS5wbHVnRmFjZVNFW25dLnN0eWxlLm1hc2sgPSBcInVybCgjXCIgKyBFLnBsdWdNYXNrSWRTRVtuXSArIFwiKVwiLCBFLnBsdWdPdXRsaW5lRmFjZVNFW25dLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiKSA6IChFLnBsdWdGYWNlU0Vbbl0uc3R5bGUubWFzayA9IFwibm9uZVwiLCBFLnBsdWdPdXRsaW5lRmFjZVNFW25dLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiksIE8gPSAhMCksIGIucGx1Z091dGxpbmVfZW5hYmxlZFNFW25dICYmIChXZShFLCBrLnBsdWdPdXRsaW5lX3BsdWdTRSwgbiwgZSwgdy5hcGxfcGx1Z091dGxpbmVfcGx1Z1NFKSAmJiAoRS5wbHVnT3V0bGluZUZhY2VTRVtuXS5ocmVmLmJhc2VWYWwgPSBFLnBsdWdNYXNrU2hhcGVTRVtuXS5ocmVmLmJhc2VWYWwgPSBFLnBsdWdPdXRsaW5lTWFza1NoYXBlU0Vbbl0uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyB0LmVsbUlkLCBbRS5wbHVnTWFza1NFW25dLCBFLnBsdWdPdXRsaW5lTWFza1NFW25dXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS54LmJhc2VWYWwudmFsdWUgPSB0LmJCb3gubGVmdCwgZS55LmJhc2VWYWwudmFsdWUgPSB0LmJCb3gudG9wLCBlLndpZHRoLmJhc2VWYWwudmFsdWUgPSB0LmJCb3gud2lkdGgsIGUuaGVpZ2h0LmJhc2VWYWwudmFsdWUgPSB0LmJCb3guaGVpZ2h0XHJcbiAgICAgIH0pLCBPID0gITApLCBXZShFLCBrLnBsdWdPdXRsaW5lX2NvbG9yU0UsIG4sIHggPSBiLnBsdWdPdXRsaW5lX2NvbG9yU0Vbbl0sIHcuYXBsX3BsdWdPdXRsaW5lX2NvbG9yU0UpICYmIChFLnBsdWdPdXRsaW5lRmFjZVNFW25dLnN0eWxlLmZpbGwgPSB4LCBPID0gITAsIGxlICYmIChBZShFLCBFLmxpbmVNYXNrQ2FwcyksIEFlKEUsIEUubGluZU91dGxpbmVNYXNrQ2FwcykpKSwgV2UoRSwgay5wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFLCBuLCB4ID0gYi5wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFW25dLCB3LmFwbF9wbHVnT3V0bGluZV9zdHJva2VXaWR0aFNFKSAmJiAoRS5wbHVnT3V0bGluZU1hc2tTaGFwZVNFW25dLnN0eWxlLnN0cm9rZVdpZHRoID0geCArIFwicHhcIiwgTyA9ICEwKSwgV2UoRSwgay5wbHVnT3V0bGluZV9pblN0cm9rZVdpZHRoU0UsIG4sIHggPSBiLnBsdWdPdXRsaW5lX2luU3Ryb2tlV2lkdGhTRVtuXSwgdy5hcGxfcGx1Z091dGxpbmVfaW5TdHJva2VXaWR0aFNFKSAmJiAoRS5wbHVnTWFza1NoYXBlU0Vbbl0uc3R5bGUuc3Ryb2tlV2lkdGggPSB4ICsgXCJweFwiLCBPID0gITApKSlcclxuICAgIH0pLCBPKSksICh0LnBvc2l0aW9uIHx8IGVlLmxpbmUgfHwgZWUucGx1ZykgJiYgKGVlLnBvc2l0aW9uID0gRmUoZSkpLCAodC5wYXRoIHx8IGVlLnBvc2l0aW9uKSAmJiAoZWUucGF0aCA9IChDID0gKE0gPSBlKS5jdXJTdGF0cywgTCA9IE0uYXBsU3RhdHMsIEEgPSBNLnBhdGhMaXN0LmFuaW1WYWwgfHwgTS5wYXRoTGlzdC5iYXNlVmFsLCBWID0gQy5wYXRoX2VkZ2UsIFAgPSAhMSwgQSAmJiAoVi54MSA9IFYueDIgPSBBWzBdWzBdLngsIFYueTEgPSBWLnkyID0gQVswXVswXS55LCBDLnBhdGhfcGF0aERhdGEgPSBJID0gd2UoQSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS54IDwgVi54MSAmJiAoVi54MSA9IGUueCksIGUueSA8IFYueTEgJiYgKFYueTEgPSBlLnkpLCBlLnggPiBWLngyICYmIChWLngyID0gZS54KSwgZS55ID4gVi55MiAmJiAoVi55MiA9IGUueSlcclxuICAgIH0pLCBNZShJLCBMLnBhdGhfcGF0aERhdGEpICYmIChNLmxpbmVQYXRoLnNldFBhdGhEYXRhKEkpLCBMLnBhdGhfcGF0aERhdGEgPSBJLCBQID0gITAsIGxlID8gKEFlKE0sIE0ucGx1Z3NGYWNlKSwgQWUoTSwgTS5saW5lTWFza0NhcHMpKSA6IHJlICYmIEFlKE0sIE0ubGluZVBhdGgpLCBNLmV2ZW50cy5hcGxfcGF0aCAmJiBNLmV2ZW50cy5hcGxfcGF0aC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUoTSwgSSlcclxuICAgIH0pKSksIFApKSwgZWUudmlld0JveCA9IChCID0gKE4gPSBlKS5jdXJTdGF0cywgUiA9IE4uYXBsU3RhdHMsIEYgPSBCLnBhdGhfZWRnZSwgRyA9IEIudmlld0JveF9iQm94LCBEID0gUi52aWV3Qm94X2JCb3gsIHogPSBOLnN2Zy52aWV3Qm94LmJhc2VWYWwsIGogPSBOLnN2Zy5zdHlsZSwgSCA9ICExLCBUID0gTWF0aC5tYXgoQi5saW5lX3N0cm9rZVdpZHRoIC8gMiwgQi52aWV3Qm94X3BsdWdCQ2lyY2xlU0VbMF0gfHwgMCwgQi52aWV3Qm94X3BsdWdCQ2lyY2xlU0VbMV0gfHwgMCksIFcgPSB7XHJcbiAgICAgIHgxOiBGLngxIC0gVCxcclxuICAgICAgeTE6IEYueTEgLSBULFxyXG4gICAgICB4MjogRi54MiArIFQsXHJcbiAgICAgIHkyOiBGLnkyICsgVFxyXG4gICAgfSwgTi5ldmVudHMubmV3X2VkZ2U0dmlld0JveCAmJiBOLmV2ZW50cy5uZXdfZWRnZTR2aWV3Qm94LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZShOLCBXKVxyXG4gICAgfSksIEcueCA9IEIubGluZU1hc2tfeCA9IEIubGluZU91dGxpbmVNYXNrX3ggPSBCLm1hc2tCR1JlY3RfeCA9IFcueDEsIEcueSA9IEIubGluZU1hc2tfeSA9IEIubGluZU91dGxpbmVNYXNrX3kgPSBCLm1hc2tCR1JlY3RfeSA9IFcueTEsIEcud2lkdGggPSBXLngyIC0gVy54MSwgRy5oZWlnaHQgPSBXLnkyIC0gVy55MSwgW1wieFwiLCBcInlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0O1xyXG4gICAgICAodCA9IEdbZV0pICE9PSBEW2VdICYmICh6W2VdID0gRFtlXSA9IHQsIGpbb2VbZV1dID0gdCArIChcInhcIiA9PT0gZSB8fCBcInlcIiA9PT0gZSA/IE4uYm9keU9mZnNldFtlXSA6IDApICsgXCJweFwiLCBIID0gITApXHJcbiAgICB9KSwgSCksIGVlLm1hc2sgPSAoWSA9IChVID0gZSkuY3VyU3RhdHMsIFggPSBVLmFwbFN0YXRzLCBxID0gITEsIFkucGx1Z19lbmFibGVkID8gWzAsIDFdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0VbZV0gPSBZLnBsdWdfZW5hYmxlZFNFW2VdICYmIFkucGx1Z19jb2xvclRyYVNFW2VdIHx8IFkucGx1Z091dGxpbmVfZW5hYmxlZFNFW2VdICYmIFkucGx1Z091dGxpbmVfY29sb3JUcmFTRVtlXVxyXG4gICAgfSkgOiBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWRTRVswXSA9IFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFWzFdID0gITEsIFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZCA9IFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFWzBdIHx8IFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFWzFdLCBZLmxpbmVNYXNrX291dGxpbmVNb2RlID0gWS5saW5lT3V0bGluZV9lbmFibGVkLCBZLmNhcHNfZW5hYmxlZCA9IFkuY2Fwc01hc2tNYXJrZXJfZW5hYmxlZCB8fCBZLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVswXSB8fCBZLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVsxXSwgWS5saW5lTWFza19lbmFibGVkID0gWS5jYXBzX2VuYWJsZWQgfHwgWS5saW5lTWFza19vdXRsaW5lTW9kZSwgKFkubGluZU1hc2tfZW5hYmxlZCAmJiAhWS5saW5lTWFza19vdXRsaW5lTW9kZSB8fCBZLmxpbmVPdXRsaW5lX2VuYWJsZWQpICYmIFtcInhcIiwgXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSBcIm1hc2tCR1JlY3RfXCIgKyBlO1xyXG4gICAgICBXZShVLCBYLCB0LCBaID0gWVt0XSkgJiYgKFUubWFza0JHUmVjdFtlXS5iYXNlVmFsLnZhbHVlID0gWiwgcSA9ICEwKVxyXG4gICAgfSksIFdlKFUsIFgsIFwibGluZU1hc2tfZW5hYmxlZFwiLCBaID0gWS5saW5lTWFza19lbmFibGVkKSAmJiAoVS5saW5lRmFjZS5zdHlsZS5tYXNrID0gWiA/IFwidXJsKCNcIiArIFUubGluZU1hc2tJZCArIFwiKVwiIDogXCJub25lXCIsIHEgPSAhMCwgdWUgJiYgQWUoVSwgVS5saW5lTWFzaykpLCBZLmxpbmVNYXNrX2VuYWJsZWQgJiYgKFdlKFUsIFgsIFwibGluZU1hc2tfb3V0bGluZU1vZGVcIiwgWiA9IFkubGluZU1hc2tfb3V0bGluZU1vZGUpICYmIChaID8gKFUubGluZU1hc2tCRy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIFUubGluZU1hc2tTaGFwZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIikgOiAoVS5saW5lTWFza0JHLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiLCBVLmxpbmVNYXNrU2hhcGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSwgcSA9ICEwKSwgW1wieFwiLCBcInlcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdCA9IFwibGluZU1hc2tfXCIgKyBlO1xyXG4gICAgICBXZShVLCBYLCB0LCBaID0gWVt0XSkgJiYgKFUubGluZU1hc2tbZV0uYmFzZVZhbC52YWx1ZSA9IFosIHEgPSAhMClcclxuICAgIH0pLCBXZShVLCBYLCBcImNhcHNfZW5hYmxlZFwiLCBaID0gWS5jYXBzX2VuYWJsZWQpICYmIChVLmxpbmVNYXNrQ2Fwcy5zdHlsZS5kaXNwbGF5ID0gVS5saW5lT3V0bGluZU1hc2tDYXBzLnN0eWxlLmRpc3BsYXkgPSBaID8gXCJpbmxpbmVcIiA6IFwibm9uZVwiLCBxID0gITAsIHVlICYmIEFlKFUsIFUuY2Fwc01hc2tMaW5lKSksIFkuY2Fwc19lbmFibGVkICYmIChbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdDtcclxuICAgICAgV2UoVSwgWC5jYXBzTWFza0FuY2hvcl9lbmFibGVkU0UsIGUsIFogPSBZLmNhcHNNYXNrQW5jaG9yX2VuYWJsZWRTRVtlXSkgJiYgKFUuY2Fwc01hc2tBbmNob3JTRVtlXS5zdHlsZS5kaXNwbGF5ID0gWiA/IFwiaW5saW5lXCIgOiBcIm5vbmVcIiwgcSA9ICEwLCB1ZSAmJiBBZShVLCBVLmxpbmVNYXNrKSksIFkuY2Fwc01hc2tBbmNob3JfZW5hYmxlZFNFW2VdICYmIChNZSh0ID0gWS5jYXBzTWFza0FuY2hvcl9wYXRoRGF0YVNFW2VdLCBYLmNhcHNNYXNrQW5jaG9yX3BhdGhEYXRhU0VbZV0pICYmIChVLmNhcHNNYXNrQW5jaG9yU0VbZV0uc2V0UGF0aERhdGEodCksIFguY2Fwc01hc2tBbmNob3JfcGF0aERhdGFTRVtlXSA9IHQsIHEgPSAhMCksIFdlKFUsIFguY2Fwc01hc2tBbmNob3Jfc3Ryb2tlV2lkdGhTRSwgZSwgWiA9IFkuY2Fwc01hc2tBbmNob3Jfc3Ryb2tlV2lkdGhTRVtlXSkgJiYgKFUuY2Fwc01hc2tBbmNob3JTRVtlXS5zdHlsZS5zdHJva2VXaWR0aCA9IFogKyBcInB4XCIsIHEgPSAhMCkpXHJcbiAgICB9KSwgV2UoVSwgWCwgXCJjYXBzTWFza01hcmtlcl9lbmFibGVkXCIsIFogPSBZLmNhcHNNYXNrTWFya2VyX2VuYWJsZWQpICYmIChVLmNhcHNNYXNrTGluZS5zdHlsZS5kaXNwbGF5ID0gWiA/IFwiaW5saW5lXCIgOiBcIm5vbmVcIiwgcSA9ICEwKSwgWS5jYXBzTWFza01hcmtlcl9lbmFibGVkICYmIFswLCAxXS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgIHZhciBlID0gWS5jYXBzTWFza01hcmtlcl9wbHVnU0Vbbl0sXHJcbiAgICAgICAgdCA9IGUgIT09IG5lID8gYWVbaWVbZV1dIDogbnVsbCxcclxuICAgICAgICBhID0gTmUobiwgdCk7XHJcbiAgICAgIFdlKFUsIFguY2Fwc01hc2tNYXJrZXJfZW5hYmxlZFNFLCBuLCBaID0gWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0Vbbl0pICYmIChVLmNhcHNNYXNrTGluZS5zdHlsZVthLnByb3BdID0gWiA/IFwidXJsKCNcIiArIFUubGluZU1hc2tNYXJrZXJJZFNFW25dICsgXCIpXCIgOiBcIm5vbmVcIiwgcSA9ICEwKSwgWS5jYXBzTWFza01hcmtlcl9lbmFibGVkU0Vbbl0gJiYgKFdlKFUsIFguY2Fwc01hc2tNYXJrZXJfcGx1Z1NFLCBuLCBlKSAmJiAoVS5jYXBzTWFza01hcmtlclNoYXBlU0Vbbl0uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyB0LmVsbUlkLCBQZShVLCBVLmNhcHNNYXNrTWFya2VyU0Vbbl0sIGEub3JpZW50LCB0LmJCb3gsIFUuc3ZnLCBVLmNhcHNNYXNrTWFya2VyU2hhcGVTRVtuXSwgVS5jYXBzTWFza0xpbmUpLCBxID0gITAsIHJlICYmIChBZShVLCBVLmNhcHNNYXNrTGluZSksIEFlKFUsIFUubGluZUZhY2UpKSksIFtcIm1hcmtlcldpZHRoXCIsIFwibWFya2VySGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCA9IFwiY2Fwc01hc2tNYXJrZXJfXCIgKyBlICsgXCJTRVwiO1xyXG4gICAgICAgIFdlKFUsIFhbdF0sIG4sIFogPSBZW3RdW25dKSAmJiAoVS5jYXBzTWFza01hcmtlclNFW25dW2VdLmJhc2VWYWwudmFsdWUgPSBaLCBxID0gITApXHJcbiAgICAgIH0pKVxyXG4gICAgfSkpKSwgWS5saW5lT3V0bGluZV9lbmFibGVkICYmIFtcInhcIiwgXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSBcImxpbmVPdXRsaW5lTWFza19cIiArIGU7XHJcbiAgICAgIFdlKFUsIFgsIHQsIFogPSBZW3RdKSAmJiAoVS5saW5lT3V0bGluZU1hc2tbZV0uYmFzZVZhbC52YWx1ZSA9IFosIHEgPSAhMClcclxuICAgIH0pLCBxKSwgdC5lZmZlY3QgJiYgKEogPSAoUSA9IGUpLmN1clN0YXRzLCAkID0gUS5hcGxTdGF0cywgT2JqZWN0LmtleXModGUpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSB0ZVtlXSxcclxuICAgICAgICBuID0gZSArIFwiX2VuYWJsZWRcIixcclxuICAgICAgICBhID0gZSArIFwiX29wdGlvbnNcIixcclxuICAgICAgICBpID0gSlthXTtcclxuICAgICAgV2UoUSwgJCwgbiwgSyA9IEpbbl0pID8gKEsgJiYgKCRbYV0gPSBkZShpKSksIHRbSyA/IFwiaW5pdFwiIDogXCJyZW1vdmVcIl0oUSkpIDogSyAmJiBjZShpLCAkW2FdKSAmJiAodC5yZW1vdmUoUSksICRbbl0gPSAhMCwgJFthXSA9IGRlKGkpLCB0LmluaXQoUSkpXHJcbiAgICB9KSksIChzZSB8fCB1ZSkgJiYgZWUubGluZSAmJiAhZWUucGF0aCAmJiBBZShlLCBlLmxpbmVTaGFwZSksIHNlICYmIGVlLnBsdWcgJiYgIWVlLmxpbmUgJiYgQWUoZSwgZS5wbHVnc0ZhY2UpLCBWZShlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gemUoZSwgdCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZHVyYXRpb246IHcoZS5kdXJhdGlvbikgJiYgMCA8IGUuZHVyYXRpb24gPyBlLmR1cmF0aW9uIDogdC5kdXJhdGlvbixcclxuICAgICAgdGltaW5nOiBjLnZhbGlkVGltaW5nKGUudGltaW5nKSA/IGUudGltaW5nIDogZGUodC50aW1pbmcpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBqZShlLCB0LCBuLCBhKSB7XHJcbiAgICB2YXIgaSwgbyA9IGUuY3VyU3RhdHMsXHJcbiAgICAgIGwgPSBlLmFwbFN0YXRzLFxyXG4gICAgICByID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gcygpIHtcclxuICAgICAgW1wic2hvd19vblwiLCBcInNob3dfZWZmZWN0XCIsIFwic2hvd19hbmltT3B0aW9uc1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbFtlXSA9IG9bZV1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIG8uc2hvd19vbiA9IHQsIG4gJiYgZ1tuXSAmJiAoby5zaG93X2VmZmVjdCA9IG4sIG8uc2hvd19hbmltT3B0aW9ucyA9IHplKGsoYSkgPyBhIDoge30sIGdbbl0uZGVmYXVsdEFuaW1PcHRpb25zKSksIHIuc2hvd19vbiA9IG8uc2hvd19vbiAhPT0gbC5zaG93X29uLCByLnNob3dfZWZmZWN0ID0gby5zaG93X2VmZmVjdCAhPT0gbC5zaG93X2VmZmVjdCwgci5zaG93X2FuaW1PcHRpb25zID0gY2Uoby5zaG93X2FuaW1PcHRpb25zLCBsLnNob3dfYW5pbU9wdGlvbnMpLCByLnNob3dfZWZmZWN0IHx8IHIuc2hvd19hbmltT3B0aW9ucyA/IG8uc2hvd19pbkFuaW0gPyAoaSA9IHIuc2hvd19lZmZlY3QgPyBnW2wuc2hvd19lZmZlY3RdLnN0b3AoZSwgITAsICEwKSA6IGdbbC5zaG93X2VmZmVjdF0uc3RvcChlKSwgcygpLCBnW2wuc2hvd19lZmZlY3RdLmluaXQoZSwgaSkpIDogci5zaG93X29uICYmIChsLnNob3dfZWZmZWN0ICYmIHIuc2hvd19lZmZlY3QgJiYgZ1tsLnNob3dfZWZmZWN0XS5zdG9wKGUsICEwLCAhMCksIHMoKSwgZ1tsLnNob3dfZWZmZWN0XS5pbml0KGUpKSA6IHIuc2hvd19vbiAmJiAocygpLCBnW2wuc2hvd19lZmZlY3RdLnN0YXJ0KGUpKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGUoZSwgdCwgbikge1xyXG4gICAgdmFyIGEgPSB7XHJcbiAgICAgIHByb3BzOiBlLFxyXG4gICAgICBvcHRpb25OYW1lOiBuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuICEoIShlLmF0dGFjaG1lbnRzLmluZGV4T2YodCkgPCAwKSB8fCB0LmNvbmYuYmluZCAmJiAhdC5jb25mLmJpbmQodCwgYSkpICYmIChlLmF0dGFjaG1lbnRzLnB1c2godCksIHQuYm91bmRUYXJnZXRzLnB1c2goYSksICEwKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gVWUobiwgYSwgZSkge1xyXG4gICAgdmFyIGkgPSBuLmF0dGFjaG1lbnRzLmluZGV4T2YoYSk7IC0gMSA8IGkgJiYgbi5hdHRhY2htZW50cy5zcGxpY2UoaSwgMSksIGEuYm91bmRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgcmV0dXJuIGUucHJvcHMgPT09IG4gJiYgKGEuY29uZi51bmJpbmQgJiYgYS5jb25mLnVuYmluZChhLCBlKSwgaSA9IHQsICEwKVxyXG4gICAgfSkgJiYgKGEuYm91bmRUYXJnZXRzLnNwbGljZShpLCAxKSwgZSB8fCBMZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGEuYm91bmRUYXJnZXRzLmxlbmd0aCB8fCBvKGEpXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFplKHMsIHUpIHtcclxuICAgIHZhciBlLCBpLCBoID0gcy5vcHRpb25zLFxyXG4gICAgICBwID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gZihlLCB0LCBuLCBhLCBpKSB7XHJcbiAgICAgIHZhciBvID0ge307XHJcbiAgICAgIHJldHVybiBuID8gbnVsbCAhPSBhID8gKG8uY29udGFpbmVyID0gZVtuXSwgby5rZXkgPSBhKSA6IChvLmNvbnRhaW5lciA9IGUsIG8ua2V5ID0gbikgOiAoby5jb250YWluZXIgPSBlLCBvLmtleSA9IHQpLCBvLmRlZmF1bHQgPSBpLCBvLmFjY2VwdHNBdXRvID0gbnVsbCA9PSBvLmRlZmF1bHQsIG9cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjKGUsIHQsIG4sIGEsIGksIG8sIGwpIHtcclxuICAgICAgdmFyIHIsIHMsIHUsIGggPSBmKGUsIG4sIGksIG8sIGwpO1xyXG4gICAgICByZXR1cm4gbnVsbCAhPSB0W25dICYmIChzID0gKHRbbl0gKyBcIlwiKS50b0xvd2VyQ2FzZSgpKSAmJiAoaC5hY2NlcHRzQXV0byAmJiBzID09PSB4IHx8ICh1ID0gYVtzXSkpICYmIHUgIT09IGguY29udGFpbmVyW2gua2V5XSAmJiAoaC5jb250YWluZXJbaC5rZXldID0gdSwgciA9ICEwKSwgbnVsbCAhPSBoLmNvbnRhaW5lcltoLmtleV0gfHwgaC5hY2NlcHRzQXV0byB8fCAoaC5jb250YWluZXJbaC5rZXldID0gaC5kZWZhdWx0LCByID0gITApLCByXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZChlLCB0LCBuLCBhLCBpLCBvLCBsLCByLCBzKSB7XHJcbiAgICAgIHZhciB1LCBoLCBwLCBjLCBkID0gZihlLCBuLCBpLCBvLCBsKTtcclxuICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgaWYgKG51bGwgPT0gZC5kZWZhdWx0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGB0eXBlYDogXCIgKyBuKTtcclxuICAgICAgICBhID0gdHlwZW9mIGQuZGVmYXVsdFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsICE9IHRbbl0gJiYgKGQuYWNjZXB0c0F1dG8gJiYgKHRbbl0gKyBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSB4IHx8IChwID0gaCA9IHRbbl0sIChcIm51bWJlclwiID09PSAoYyA9IGEpID8gdyhwKSA6IHR5cGVvZiBwID09PSBjKSAmJiAoaCA9IHMgJiYgXCJzdHJpbmdcIiA9PT0gYSAmJiBoID8gaC50cmltKCkgOiBoLCAxKSAmJiAoIXIgfHwgcihoKSkpKSAmJiBoICE9PSBkLmNvbnRhaW5lcltkLmtleV0gJiYgKGQuY29udGFpbmVyW2Qua2V5XSA9IGgsIHUgPSAhMCksIG51bGwgIT0gZC5jb250YWluZXJbZC5rZXldIHx8IGQuYWNjZXB0c0F1dG8gfHwgKGQuY29udGFpbmVyW2Qua2V5XSA9IGQuZGVmYXVsdCwgdSA9ICEwKSwgdVxyXG4gICAgfVxyXG4gICAgaWYgKHUgPSB1IHx8IHt9LCBbXCJzdGFydFwiLCBcImVuZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdmFyIG4gPSB1W2VdLFxyXG4gICAgICAgICAgYSA9ICExO1xyXG4gICAgICAgIGlmIChuICYmICh5ZShuKSB8fCAoYSA9IF8obiwgXCJhbmNob3JcIikpKSAmJiBuICE9PSBoLmFuY2hvclNFW3RdKSB7XHJcbiAgICAgICAgICBpZiAoITEgIT09IHMub3B0aW9uSXNBdHRhY2guYW5jaG9yU0VbdF0gJiYgVWUocywgJFtoLmFuY2hvclNFW3RdLl9pZF0pLCBhICYmICFIZShzLCAkW24uX2lkXSwgZSkpIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGJpbmQgYXR0YWNobWVudFwiKTtcclxuICAgICAgICAgIGguYW5jaG9yU0VbdF0gPSBuLCBzLm9wdGlvbklzQXR0YWNoLmFuY2hvclNFW3RdID0gYSwgaSA9IHAucG9zaXRpb24gPSAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSksICFoLmFuY2hvclNFWzBdIHx8ICFoLmFuY2hvclNFWzFdIHx8IGguYW5jaG9yU0VbMF0gPT09IGguYW5jaG9yU0VbMV0pIHRocm93IG5ldyBFcnJvcihcImBzdGFydGAgYW5kIGBlbmRgIGFyZSByZXF1aXJlZC5cIik7XHJcbiAgICBpICYmIChlID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgdmFyIG4sIGEsIGk7XHJcbiAgICAgIGlmICghKG4gPSBtZShlKSkgfHwgIShhID0gbWUodCkpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IGZyYW1lcy5cIik7XHJcbiAgICAgIHJldHVybiBuLmxlbmd0aCAmJiBhLmxlbmd0aCAmJiAobi5yZXZlcnNlKCksIGEucmV2ZXJzZSgpLCBuLnNvbWUoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gYS5zb21lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZSA9PT0gdCAmJiAoaSA9IGUuY29udGVudFdpbmRvdywgITApXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkpLCBpIHx8IHdpbmRvd1xyXG4gICAgfSghMSAhPT0gcy5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVswXSA/ICRbaC5hbmNob3JTRVswXS5faWRdLmVsZW1lbnQgOiBoLmFuY2hvclNFWzBdLCAhMSAhPT0gcy5vcHRpb25Jc0F0dGFjaC5hbmNob3JTRVsxXSA/ICRbaC5hbmNob3JTRVsxXS5faWRdLmVsZW1lbnQgOiBoLmFuY2hvclNFWzFdKSkgIT09IHMuYmFzZVdpbmRvdyAmJiAoISBmdW5jdGlvbiAoYSwgZSkge1xyXG4gICAgICB2YXIgdCwgbiwgaSwgbywgbCwgciwgcywgdSwgaCwgcCwgYyA9IGEuYXBsU3RhdHMsXHJcbiAgICAgICAgZCA9IGUuZG9jdW1lbnQsXHJcbiAgICAgICAgZiA9IHYgKyBcIi1cIiArIGEuX2lkO1xyXG5cclxuICAgICAgZnVuY3Rpb24geShlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBuLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwibWFza1wiKSk7XHJcbiAgICAgICAgcmV0dXJuIHQuaWQgPSBlLCB0Lm1hc2tVbml0cy5iYXNlVmFsID0gU1ZHVW5pdFR5cGVzLlNWR19VTklUX1RZUEVfVVNFUlNQQUNFT05VU0UsIFt0LngsIHQueSwgdC53aWR0aCwgdC5oZWlnaHRdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMClcclxuICAgICAgICB9KSwgdFxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBTKGUpIHtcclxuICAgICAgICB2YXIgdCA9IG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJtYXJrZXJcIikpO1xyXG4gICAgICAgIHJldHVybiB0LmlkID0gZSwgdC5tYXJrZXJVbml0cy5iYXNlVmFsID0gU1ZHTWFya2VyRWxlbWVudC5TVkdfTUFSS0VSVU5JVFNfU1RST0tFV0lEVEgsIHQudmlld0JveC5iYXNlVmFsIHx8IHQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAwIDBcIiksIHRcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gbShlKSB7XHJcbiAgICAgICAgcmV0dXJuIFtlLndpZHRoLCBlLmhlaWdodF0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgZS5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsIDEwMClcclxuICAgICAgICB9KSwgZVxyXG4gICAgICB9XHJcbiAgICAgIGEucGF0aExpc3QgPSB7fSwgVGUoYywgWSksIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBlICsgXCJfZW5hYmxlZFwiO1xyXG4gICAgICAgIGNbdF0gJiYgKHRlW2VdLnJlbW92ZShhKSwgY1t0XSA9ICExKVxyXG4gICAgICB9KSwgYS5iYXNlV2luZG93ICYmIGEuc3ZnICYmIGEuYmFzZVdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEuc3ZnKSwgUmUoYS5iYXNlV2luZG93ID0gZSksIGEuYm9keU9mZnNldCA9IEJlKGUpLCBhLnN2ZyA9IHQgPSBkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInN2Z1wiKSwgdC5jbGFzc05hbWUuYmFzZVZhbCA9IHYsIHQudmlld0JveC5iYXNlVmFsIHx8IHQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAwIDBcIiksIGEuZGVmcyA9IG4gPSB0LmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwiZGVmc1wiKSksIGEubGluZVBhdGggPSBvID0gbi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInBhdGhcIikpLCBvLmlkID0gbCA9IGYgKyBcIi1saW5lLXBhdGhcIiwgby5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1saW5lLXBhdGhcIiwgdWUgJiYgKG8uc3R5bGUuZmlsbCA9IFwibm9uZVwiKSwgYS5saW5lU2hhcGUgPSBvID0gbi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSksIG8uaWQgPSByID0gZiArIFwiLWxpbmUtc2hhcGVcIiwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIGwsIChpID0gbi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcImdcIikpKS5pZCA9IHMgPSBmICsgXCItY2Fwc1wiLCBhLmNhcHNNYXNrQW5jaG9yU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZSA9IGkuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJwYXRoXCIpKTtcclxuICAgICAgICByZXR1cm4gZS5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1jYXBzLW1hc2stYW5jaG9yXCIsIGVcclxuICAgICAgfSksIGEubGluZU1hc2tNYXJrZXJJZFNFID0gW2YgKyBcIi1jYXBzLW1hc2stbWFya2VyLTBcIiwgZiArIFwiLWNhcHMtbWFzay1tYXJrZXItMVwiXSwgYS5jYXBzTWFza01hcmtlclNFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiBTKGEubGluZU1hc2tNYXJrZXJJZFNFW2VdKVxyXG4gICAgICB9KSwgYS5jYXBzTWFza01hcmtlclNoYXBlU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBhLmNhcHNNYXNrTWFya2VyU0VbZV0uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpO1xyXG4gICAgICAgIHJldHVybiB0LmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLWNhcHMtbWFzay1tYXJrZXItc2hhcGVcIiwgdFxyXG4gICAgICB9KSwgYS5jYXBzTWFza0xpbmUgPSBvID0gaS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSksIG8uY2xhc3NOYW1lLmJhc2VWYWwgPSB2ICsgXCItY2Fwcy1tYXNrLWxpbmVcIiwgby5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHIsIGEubWFza0JHUmVjdCA9IG8gPSBtKG4uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJyZWN0XCIpKSksIG8uaWQgPSB1ID0gZiArIFwiLW1hc2stYmctcmVjdFwiLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLW1hc2stYmctcmVjdFwiLCB1ZSAmJiAoby5zdHlsZS5maWxsID0gXCJ3aGl0ZVwiKSwgYS5saW5lTWFzayA9IG0oeShhLmxpbmVNYXNrSWQgPSBmICsgXCItbGluZS1tYXNrXCIpKSwgYS5saW5lTWFza0JHID0gbyA9IGEubGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgdSwgYS5saW5lTWFza1NoYXBlID0gbyA9IGEubGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLWxpbmUtbWFzay1zaGFwZVwiLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgbCwgby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIGEubGluZU1hc2tDYXBzID0gbyA9IGEubGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgcywgYS5saW5lT3V0bGluZU1hc2sgPSBtKHkoaCA9IGYgKyBcIi1saW5lLW91dGxpbmUtbWFza1wiKSksIChvID0gYS5saW5lT3V0bGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIHUsIGEubGluZU91dGxpbmVNYXNrU2hhcGUgPSBvID0gYS5saW5lT3V0bGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLWxpbmUtb3V0bGluZS1tYXNrLXNoYXBlXCIsIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyBsLCBhLmxpbmVPdXRsaW5lTWFza0NhcHMgPSBvID0gYS5saW5lT3V0bGluZU1hc2suYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgcywgYS5mYWNlID0gdC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcImdcIikpLCBhLmxpbmVGYWNlID0gbyA9IGEuZmFjZS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSksIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyByLCBhLmxpbmVPdXRsaW5lRmFjZSA9IG8gPSBhLmZhY2UuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpLCBvLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgciwgby5zdHlsZS5tYXNrID0gXCJ1cmwoI1wiICsgaCArIFwiKVwiLCBvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgYS5wbHVnTWFza0lkU0UgPSBbZiArIFwiLXBsdWctbWFzay0wXCIsIGYgKyBcIi1wbHVnLW1hc2stMVwiXSwgYS5wbHVnTWFza1NFID0gWzAsIDFdLm1hcChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB5KGEucGx1Z01hc2tJZFNFW2VdKVxyXG4gICAgICB9KSwgYS5wbHVnTWFza1NoYXBlU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBhLnBsdWdNYXNrU0VbZV0uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpO1xyXG4gICAgICAgIHJldHVybiB0LmNsYXNzTmFtZS5iYXNlVmFsID0gdiArIFwiLXBsdWctbWFzay1zaGFwZVwiLCB0XHJcbiAgICAgIH0pLCBwID0gW10sIGEucGx1Z091dGxpbmVNYXNrU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHkocFtlXSA9IGYgKyBcIi1wbHVnLW91dGxpbmUtbWFzay1cIiArIGUpXHJcbiAgICAgIH0pLCBhLnBsdWdPdXRsaW5lTWFza1NoYXBlU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBhLnBsdWdPdXRsaW5lTWFza1NFW2VdLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKTtcclxuICAgICAgICByZXR1cm4gdC5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1wbHVnLW91dGxpbmUtbWFzay1zaGFwZVwiLCB0XHJcbiAgICAgIH0pLCBhLnBsdWdNYXJrZXJJZFNFID0gW2YgKyBcIi1wbHVnLW1hcmtlci0wXCIsIGYgKyBcIi1wbHVnLW1hcmtlci0xXCJdLCBhLnBsdWdNYXJrZXJTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCA9IFMoYS5wbHVnTWFya2VySWRTRVtlXSk7XHJcbiAgICAgICAgcmV0dXJuIHVlICYmICh0Lm1hcmtlclVuaXRzLmJhc2VWYWwgPSBTVkdNYXJrZXJFbGVtZW50LlNWR19NQVJLRVJVTklUU19VU0VSU1BBQ0VPTlVTRSksIHRcclxuICAgICAgfSksIGEucGx1Z01hcmtlclNoYXBlU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGEucGx1Z01hcmtlclNFW2VdLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwiZ1wiKSlcclxuICAgICAgfSksIGEucGx1Z0ZhY2VTRSA9IFswLCAxXS5tYXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gYS5wbHVnTWFya2VyU2hhcGVTRVtlXS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSlcclxuICAgICAgfSksIGEucGx1Z091dGxpbmVGYWNlU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBhLnBsdWdNYXJrZXJTaGFwZVNFW2VdLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKTtcclxuICAgICAgICByZXR1cm4gdC5zdHlsZS5tYXNrID0gXCJ1cmwoI1wiICsgcFtlXSArIFwiKVwiLCB0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgdFxyXG4gICAgICB9KSwgYS5wbHVnc0ZhY2UgPSBvID0gYS5mYWNlLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudE5TKGIsIFwidXNlXCIpKSwgby5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1wbHVncy1mYWNlXCIsIG8uaHJlZi5iYXNlVmFsID0gXCIjXCIgKyByLCBvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgYS5jdXJTdGF0cy5zaG93X2luQW5pbSA/IChhLmlzU2hvd24gPSAxLCBnW2Muc2hvd19lZmZlY3RdLnN0b3AoYSwgITApKSA6IGEuaXNTaG93biB8fCAodC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiksIGQuYm9keS5hcHBlbmRDaGlsZCh0KSwgWzAsIDEsIDJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCwgbiA9IGEub3B0aW9ucy5sYWJlbFNFTVtlXTtcclxuICAgICAgICBuICYmIF8obiwgXCJsYWJlbFwiKSAmJiAodCA9ICRbbi5faWRdKS5jb25mLmluaXRTdmcgJiYgdC5jb25mLmluaXRTdmcodCwgYSlcclxuICAgICAgfSlcclxuICAgIH0ocywgZSksIHAubGluZSA9IHAucGx1ZyA9IHAubGluZU91dGxpbmUgPSBwLnBsdWdPdXRsaW5lID0gcC5mYWNlcyA9IHAuZWZmZWN0ID0gITApLCBwLnBvc2l0aW9uID0gYyhoLCB1LCBcInBhdGhcIiwgbSwgbnVsbCwgbnVsbCwgcGUucGF0aCkgfHwgcC5wb3NpdGlvbiwgcC5wb3NpdGlvbiA9IGMoaCwgdSwgXCJzdGFydFNvY2tldFwiLCBuLCBcInNvY2tldFNFXCIsIDApIHx8IHAucG9zaXRpb24sIHAucG9zaXRpb24gPSBjKGgsIHUsIFwiZW5kU29ja2V0XCIsIG4sIFwic29ja2V0U0VcIiwgMSkgfHwgcC5wb3NpdGlvbiwgW3Uuc3RhcnRTb2NrZXRHcmF2aXR5LCB1LmVuZFNvY2tldEdyYXZpdHldLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgdmFyIG4sIGEsIGkgPSAhMTtcclxuICAgICAgbnVsbCAhPSBlICYmIChBcnJheS5pc0FycmF5KGUpID8gdyhlWzBdKSAmJiB3KGVbMV0pICYmIChpID0gW2VbMF0sIGVbMV1dLCBBcnJheS5pc0FycmF5KGguc29ja2V0R3Jhdml0eVNFW3RdKSAmJiAobiA9IGksIGEgPSBoLnNvY2tldEdyYXZpdHlTRVt0XSwgbi5sZW5ndGggPT09IGEubGVuZ3RoICYmIG4uZXZlcnkoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICByZXR1cm4gZSA9PT0gYVt0XVxyXG4gICAgICB9KSkgJiYgKGkgPSAhMSkpIDogKChlICsgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0geCA/IGkgPSBudWxsIDogdyhlKSAmJiAwIDw9IGUgJiYgKGkgPSBlKSwgaSA9PT0gaC5zb2NrZXRHcmF2aXR5U0VbdF0gJiYgKGkgPSAhMSkpLCAhMSAhPT0gaSAmJiAoaC5zb2NrZXRHcmF2aXR5U0VbdF0gPSBpLCBwLnBvc2l0aW9uID0gITApKVxyXG4gICAgfSksIHAubGluZSA9IGQoaCwgdSwgXCJjb2xvclwiLCBudWxsLCBcImxpbmVDb2xvclwiLCBudWxsLCBwZS5saW5lQ29sb3IsIG51bGwsICEwKSB8fCBwLmxpbmUsIHAubGluZSA9IGQoaCwgdSwgXCJzaXplXCIsIG51bGwsIFwibGluZVNpemVcIiwgbnVsbCwgcGUubGluZVNpemUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHJldHVybiAwIDwgZVxyXG4gICAgfSkgfHwgcC5saW5lLCBbXCJzdGFydFBsdWdcIiwgXCJlbmRQbHVnXCJdLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgcC5wbHVnID0gYyhoLCB1LCBlLCBFLCBcInBsdWdTRVwiLCB0LCBwZS5wbHVnU0VbdF0pIHx8IHAucGx1ZywgcC5wbHVnID0gZChoLCB1LCBlICsgXCJDb2xvclwiLCBcInN0cmluZ1wiLCBcInBsdWdDb2xvclNFXCIsIHQsIG51bGwsIG51bGwsICEwKSB8fCBwLnBsdWcsIHAucGx1ZyA9IGQoaCwgdSwgZSArIFwiU2l6ZVwiLCBudWxsLCBcInBsdWdTaXplU0VcIiwgdCwgcGUucGx1Z1NpemVTRVt0XSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gMCA8IGVcclxuICAgICAgfSkgfHwgcC5wbHVnXHJcbiAgICB9KSwgcC5saW5lT3V0bGluZSA9IGQoaCwgdSwgXCJvdXRsaW5lXCIsIG51bGwsIFwibGluZU91dGxpbmVFbmFibGVkXCIsIG51bGwsIHBlLmxpbmVPdXRsaW5lRW5hYmxlZCkgfHwgcC5saW5lT3V0bGluZSwgcC5saW5lT3V0bGluZSA9IGQoaCwgdSwgXCJvdXRsaW5lQ29sb3JcIiwgbnVsbCwgXCJsaW5lT3V0bGluZUNvbG9yXCIsIG51bGwsIHBlLmxpbmVPdXRsaW5lQ29sb3IsIG51bGwsICEwKSB8fCBwLmxpbmVPdXRsaW5lLCBwLmxpbmVPdXRsaW5lID0gZChoLCB1LCBcIm91dGxpbmVTaXplXCIsIG51bGwsIFwibGluZU91dGxpbmVTaXplXCIsIG51bGwsIHBlLmxpbmVPdXRsaW5lU2l6ZSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgcmV0dXJuIDAgPCBlICYmIGUgPD0gLjQ4XHJcbiAgICB9KSB8fCBwLmxpbmVPdXRsaW5lLCBbXCJzdGFydFBsdWdPdXRsaW5lXCIsIFwiZW5kUGx1Z091dGxpbmVcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICBwLnBsdWdPdXRsaW5lID0gZChoLCB1LCBlLCBudWxsLCBcInBsdWdPdXRsaW5lRW5hYmxlZFNFXCIsIHQsIHBlLnBsdWdPdXRsaW5lRW5hYmxlZFNFW3RdKSB8fCBwLnBsdWdPdXRsaW5lLCBwLnBsdWdPdXRsaW5lID0gZChoLCB1LCBlICsgXCJDb2xvclwiLCBcInN0cmluZ1wiLCBcInBsdWdPdXRsaW5lQ29sb3JTRVwiLCB0LCBudWxsLCBudWxsLCAhMCkgfHwgcC5wbHVnT3V0bGluZSwgcC5wbHVnT3V0bGluZSA9IGQoaCwgdSwgZSArIFwiU2l6ZVwiLCBudWxsLCBcInBsdWdPdXRsaW5lU2l6ZVNFXCIsIHQsIHBlLnBsdWdPdXRsaW5lU2l6ZVNFW3RdLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiAxIDw9IGVcclxuICAgICAgfSkgfHwgcC5wbHVnT3V0bGluZVxyXG4gICAgfSksIFtcInN0YXJ0TGFiZWxcIiwgXCJlbmRMYWJlbFwiLCBcIm1pZGRsZUxhYmVsXCJdLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgdmFyIG4sIGEsIGksIG8gPSB1W2VdLFxyXG4gICAgICAgIGwgPSBoLmxhYmVsU0VNW3RdICYmICFzLm9wdGlvbklzQXR0YWNoLmxhYmVsU0VNW3RdID8gJFtoLmxhYmVsU0VNW3RdLl9pZF0udGV4dCA6IGgubGFiZWxTRU1bdF0sXHJcbiAgICAgICAgciA9ICExO1xyXG4gICAgICBpZiAoKG4gPSBcInN0cmluZ1wiID09IHR5cGVvZiBvKSAmJiAobyA9IG8udHJpbSgpKSwgKG4gfHwgbyAmJiAociA9IF8obywgXCJsYWJlbFwiKSkpICYmIG8gIT09IGwpIHtcclxuICAgICAgICBpZiAoaC5sYWJlbFNFTVt0XSAmJiAoVWUocywgJFtoLmxhYmVsU0VNW3RdLl9pZF0pLCBoLmxhYmVsU0VNW3RdID0gXCJcIiksIG8pIHtcclxuICAgICAgICAgIGlmIChyID8gKGEgPSAkWyhpID0gbykuX2lkXSkuYm91bmRUYXJnZXRzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGEuY29uZi5yZW1vdmVPcHRpb24oYSwgZSlcclxuICAgICAgICAgICAgfSkgOiBpID0gbmV3IFMoeS5jYXB0aW9uTGFiZWwsIFtvXSksICFIZShzLCAkW2kuX2lkXSwgZSkpIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGJpbmQgYXR0YWNobWVudFwiKTtcclxuICAgICAgICAgIGgubGFiZWxTRU1bdF0gPSBpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMub3B0aW9uSXNBdHRhY2gubGFiZWxTRU1bdF0gPSByXHJcbiAgICAgIH1cclxuICAgIH0pLCBPYmplY3Qua2V5cyh0ZSkuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xyXG4gICAgICB2YXIgZSwgdCwgbyA9IHRlW2FdLFxyXG4gICAgICAgIG4gPSBhICsgXCJfZW5hYmxlZFwiLFxyXG4gICAgICAgIGkgPSBhICsgXCJfb3B0aW9uc1wiO1xyXG5cclxuICAgICAgZnVuY3Rpb24gbChhKSB7XHJcbiAgICAgICAgdmFyIGkgPSB7fTtcclxuICAgICAgICByZXR1cm4gby5vcHRpb25zQ29uZi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IGVbMF0sXHJcbiAgICAgICAgICAgIG4gPSBlWzNdO1xyXG4gICAgICAgICAgbnVsbCA9PSBlWzRdIHx8IGlbbl0gfHwgKGlbbl0gPSBbXSksIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgPyB0IDogXCJpZFwiID09PSB0ID8gYyA6IGQpLmFwcGx5KG51bGwsIFtpLCBhXS5jb25jYXQoZS5zbGljZSgxKSkpXHJcbiAgICAgICAgfSksIGlcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcihlKSB7XHJcbiAgICAgICAgdmFyIHQsIG4gPSBhICsgXCJfYW5pbU9wdGlvbnNcIjtcclxuICAgICAgICByZXR1cm4gZS5oYXNPd25Qcm9wZXJ0eShcImFuaW1hdGlvblwiKSA/IGsoZS5hbmltYXRpb24pID8gdCA9IHMuY3VyU3RhdHNbbl0gPSB6ZShlLmFuaW1hdGlvbiwgby5kZWZhdWx0QW5pbU9wdGlvbnMpIDogKHQgPSAhIWUuYW5pbWF0aW9uLCBzLmN1clN0YXRzW25dID0gdCA/IHplKHt9LCBvLmRlZmF1bHRBbmltT3B0aW9ucykgOiBudWxsKSA6ICh0ID0gISFvLmRlZmF1bHRFbmFibGVkLCBzLmN1clN0YXRzW25dID0gdCA/IHplKHt9LCBvLmRlZmF1bHRBbmltT3B0aW9ucykgOiBudWxsKSwgdFxyXG4gICAgICB9XHJcbiAgICAgIHUuaGFzT3duUHJvcGVydHkoYSkgJiYgKGUgPSB1W2FdLCBrKGUpID8gKHMuY3VyU3RhdHNbbl0gPSAhMCwgdCA9IHMuY3VyU3RhdHNbaV0gPSBsKGUpLCBvLmFuaW0gJiYgKHMuY3VyU3RhdHNbaV0uYW5pbWF0aW9uID0gcihlKSkpIDogKHQgPSBzLmN1clN0YXRzW25dID0gISFlKSAmJiAocy5jdXJTdGF0c1tpXSA9IGwoe30pLCBvLmFuaW0gJiYgKHMuY3VyU3RhdHNbaV0uYW5pbWF0aW9uID0gcih7fSkpKSwgY2UodCwgaFthXSkgJiYgKGhbYV0gPSB0LCBwLmVmZmVjdCA9ICEwKSlcclxuICAgIH0pLCBEZShzLCBwKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gWWUoZSwgdCwgbikge1xyXG4gICAgdmFyIGEgPSB7XHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBhbmNob3JTRTogW10sXHJcbiAgICAgICAgc29ja2V0U0U6IFtdLFxyXG4gICAgICAgIHNvY2tldEdyYXZpdHlTRTogW10sXHJcbiAgICAgICAgcGx1Z1NFOiBbXSxcclxuICAgICAgICBwbHVnQ29sb3JTRTogW10sXHJcbiAgICAgICAgcGx1Z1NpemVTRTogW10sXHJcbiAgICAgICAgcGx1Z091dGxpbmVFbmFibGVkU0U6IFtdLFxyXG4gICAgICAgIHBsdWdPdXRsaW5lQ29sb3JTRTogW10sXHJcbiAgICAgICAgcGx1Z091dGxpbmVTaXplU0U6IFtdLFxyXG4gICAgICAgIGxhYmVsU0VNOiBbXCJcIiwgXCJcIiwgXCJcIl1cclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uSXNBdHRhY2g6IHtcclxuICAgICAgICBhbmNob3JTRTogWyExLCAhMV0sXHJcbiAgICAgICAgbGFiZWxTRU06IFshMSwgITEsICExXVxyXG4gICAgICB9LFxyXG4gICAgICBjdXJTdGF0czoge30sXHJcbiAgICAgIGFwbFN0YXRzOiB7fSxcclxuICAgICAgYXR0YWNobWVudHM6IFtdLFxyXG4gICAgICBldmVudHM6IHt9LFxyXG4gICAgICByZWZsb3dUYXJnZXRzOiBbXVxyXG4gICAgfTtcclxuICAgIFRlKGEuY3VyU3RhdHMsIFkpLCBUZShhLmFwbFN0YXRzLCBZKSwgT2JqZWN0LmtleXModGUpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSB0ZVtlXS5zdGF0cztcclxuICAgICAgVGUoYS5jdXJTdGF0cywgdCksIFRlKGEuYXBsU3RhdHMsIHQpLCBhLm9wdGlvbnNbZV0gPSAhMVxyXG4gICAgfSksIFRlKGEuY3VyU3RhdHMsIFgpLCBUZShhLmFwbFN0YXRzLCBYKSwgYS5jdXJTdGF0cy5zaG93X2VmZmVjdCA9IHEsIGEuY3VyU3RhdHMuc2hvd19hbmltT3B0aW9ucyA9IGRlKGdbcV0uZGVmYXVsdEFuaW1PcHRpb25zKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2lkXCIsIHtcclxuICAgICAgdmFsdWU6ICsrSlxyXG4gICAgfSksIGEuX2lkID0gdGhpcy5faWQsIEtbdGhpcy5faWRdID0gYSwgMSA9PT0gYXJndW1lbnRzLmxlbmd0aCAmJiAobiA9IGUsIGUgPSBudWxsKSwgbiA9IG4gfHwge30sIChlIHx8IHQpICYmIChuID0gZGUobiksIGUgJiYgKG4uc3RhcnQgPSBlKSwgdCAmJiAobi5lbmQgPSB0KSksIGEuaXNTaG93biA9IGEuYXBsU3RhdHMuc2hvd19vbiA9ICFuLmhpZGUsIHRoaXMuc2V0T3B0aW9ucyhuKVxyXG4gIH1cclxuICByZXR1cm4gdGUgPSB7XHJcbiAgICAgIGRhc2g6IHtcclxuICAgICAgICBzdGF0czoge1xyXG4gICAgICAgICAgZGFzaF9sZW46IHt9LFxyXG4gICAgICAgICAgZGFzaF9nYXA6IHt9LFxyXG4gICAgICAgICAgZGFzaF9tYXhPZmZzZXQ6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltOiAhMCxcclxuICAgICAgICBkZWZhdWx0QW5pbU9wdGlvbnM6IHtcclxuICAgICAgICAgIGR1cmF0aW9uOiAxZTMsXHJcbiAgICAgICAgICB0aW1pbmc6IFwibGluZWFyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnNDb25mOiBbXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwibGVuXCIsIFwibnVtYmVyXCIsIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwIDwgZVxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiZ2FwXCIsIFwibnVtYmVyXCIsIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwIDwgZVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBJZShlLCBcImFwbF9saW5lX3N0cm9rZVdpZHRoXCIsIHRlLmRhc2gudXBkYXRlKSwgZS5saW5lRmFjZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gMCwgdGUuZGFzaC51cGRhdGUoZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gZS5jdXJTdGF0cztcclxuICAgICAgICAgIENlKGUsIFwiYXBsX2xpbmVfc3Ryb2tlV2lkdGhcIiwgdGUuZGFzaC51cGRhdGUpLCB0LmRhc2hfYW5pbUlkICYmIChjLnJlbW92ZSh0LmRhc2hfYW5pbUlkKSwgdC5kYXNoX2FuaW1JZCA9IG51bGwpLCBlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IFwibm9uZVwiLCBlLmxpbmVGYWNlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAwLCBUZShlLmFwbFN0YXRzLCB0ZS5kYXNoLnN0YXRzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdmFyIGUsIG4gPSB0LmN1clN0YXRzLFxyXG4gICAgICAgICAgICBhID0gdC5hcGxTdGF0cyxcclxuICAgICAgICAgICAgaSA9IGEuZGFzaF9vcHRpb25zLFxyXG4gICAgICAgICAgICBvID0gITE7XHJcbiAgICAgICAgICBuLmRhc2hfbGVuID0gaS5sZW4gfHwgMiAqIGEubGluZV9zdHJva2VXaWR0aCwgbi5kYXNoX2dhcCA9IGkuZ2FwIHx8IGEubGluZV9zdHJva2VXaWR0aCwgbi5kYXNoX21heE9mZnNldCA9IG4uZGFzaF9sZW4gKyBuLmRhc2hfZ2FwLCBvID0gV2UodCwgYSwgXCJkYXNoX2xlblwiLCBuLmRhc2hfbGVuKSB8fCBvLCAobyA9IFdlKHQsIGEsIFwiZGFzaF9nYXBcIiwgbi5kYXNoX2dhcCkgfHwgbykgJiYgKHQubGluZUZhY2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYS5kYXNoX2xlbiArIFwiLFwiICsgYS5kYXNoX2dhcCksIG4uZGFzaF9hbmltT3B0aW9ucyA/IChvID0gV2UodCwgYSwgXCJkYXNoX21heE9mZnNldFwiLCBuLmRhc2hfbWF4T2Zmc2V0KSwgYS5kYXNoX2FuaW1PcHRpb25zICYmIChvIHx8IGNlKG4uZGFzaF9hbmltT3B0aW9ucywgYS5kYXNoX2FuaW1PcHRpb25zKSkgJiYgKG4uZGFzaF9hbmltSWQgJiYgKGUgPSBjLnN0b3Aobi5kYXNoX2FuaW1JZCksIGMucmVtb3ZlKG4uZGFzaF9hbmltSWQpKSwgYS5kYXNoX2FuaW1PcHRpb25zID0gbnVsbCksIGEuZGFzaF9hbmltT3B0aW9ucyB8fCAobi5kYXNoX2FuaW1JZCA9IGMuYWRkKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoMSAtIGUpICogYS5kYXNoX21heE9mZnNldCArIFwicHhcIlxyXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5saW5lRmFjZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gZVxyXG4gICAgICAgICAgfSwgbi5kYXNoX2FuaW1PcHRpb25zLmR1cmF0aW9uLCAwLCBuLmRhc2hfYW5pbU9wdGlvbnMudGltaW5nLCAhMSwgZSksIGEuZGFzaF9hbmltT3B0aW9ucyA9IGRlKG4uZGFzaF9hbmltT3B0aW9ucykpKSA6IGEuZGFzaF9hbmltT3B0aW9ucyAmJiAobi5kYXNoX2FuaW1JZCAmJiAoYy5yZW1vdmUobi5kYXNoX2FuaW1JZCksIG4uZGFzaF9hbmltSWQgPSBudWxsKSwgdC5saW5lRmFjZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gMCwgYS5kYXNoX2FuaW1PcHRpb25zID0gbnVsbClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyYWRpZW50OiB7XHJcbiAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgIGdyYWRpZW50X2NvbG9yU0U6IHtcclxuICAgICAgICAgICAgaGFzU0U6ICEwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZ3JhZGllbnRfcG9pbnRTRToge1xyXG4gICAgICAgICAgICBoYXNTRTogITAsXHJcbiAgICAgICAgICAgIGhhc1Byb3BzOiAhMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uc0NvbmY6IFtcclxuICAgICAgICAgIFtcInR5cGVcIiwgXCJzdGFydENvbG9yXCIsIFwic3RyaW5nXCIsIFwiY29sb3JTRVwiLCAwLCBudWxsLCBudWxsLCAhMF0sXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiZW5kQ29sb3JcIiwgXCJzdHJpbmdcIiwgXCJjb2xvclNFXCIsIDEsIG51bGwsIG51bGwsICEwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0LCBhID0gZS5iYXNlV2luZG93LmRvY3VtZW50LFxyXG4gICAgICAgICAgICBuID0gZS5kZWZzLFxyXG4gICAgICAgICAgICBpID0gdiArIFwiLVwiICsgZS5faWQgKyBcIi1ncmFkaWVudFwiO1xyXG4gICAgICAgICAgZS5lZmNfZ3JhZGllbnRfZ3JhZGllbnQgPSB0ID0gbi5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnROUyhiLCBcImxpbmVhckdyYWRpZW50XCIpKSwgdC5pZCA9IGksIHQuZ3JhZGllbnRVbml0cy5iYXNlVmFsID0gU1ZHVW5pdFR5cGVzLlNWR19VTklUX1RZUEVfVVNFUlNQQUNFT05VU0UsIFt0LngxLCB0LnkxLCB0LngyLCB0LnkyXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMClcclxuICAgICAgICAgIH0pLCBlLmVmY19ncmFkaWVudF9zdG9wU0UgPSBbMCwgMV0ubWFwKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gZS5lZmNfZ3JhZGllbnRfZ3JhZGllbnQuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50TlMoYiwgXCJzdG9wXCIpKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBuLm9mZnNldC5iYXNlVmFsID0gdFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGUuY29kZSAhPT0gRE9NRXhjZXB0aW9uLk5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUikgdGhyb3cgZTtcclxuICAgICAgICAgICAgICBuLnNldEF0dHJpYnV0ZShcIm9mZnNldFwiLCB0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuXHJcbiAgICAgICAgICB9KSwgSWUoZSwgXCJjdXJfcGx1Z19jb2xvclNFXCIsIHRlLmdyYWRpZW50LnVwZGF0ZSksIEllKGUsIFwiYXBsX3BhdGhcIiwgdGUuZ3JhZGllbnQudXBkYXRlKSwgZS5jdXJTdGF0cy5saW5lX2FsdENvbG9yID0gITAsIGUubGluZUZhY2Uuc3R5bGUuc3Ryb2tlID0gXCJ1cmwoI1wiICsgaSArIFwiKVwiLCB0ZS5ncmFkaWVudC51cGRhdGUoZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuZWZjX2dyYWRpZW50X2dyYWRpZW50ICYmIChlLmRlZnMucmVtb3ZlQ2hpbGQoZS5lZmNfZ3JhZGllbnRfZ3JhZGllbnQpLCBlLmVmY19ncmFkaWVudF9ncmFkaWVudCA9IGUuZWZjX2dyYWRpZW50X3N0b3BTRSA9IG51bGwpLCBDZShlLCBcImN1cl9wbHVnX2NvbG9yU0VcIiwgdGUuZ3JhZGllbnQudXBkYXRlKSwgQ2UoZSwgXCJhcGxfcGF0aFwiLCB0ZS5ncmFkaWVudC51cGRhdGUpLCBlLmN1clN0YXRzLmxpbmVfYWx0Q29sb3IgPSAhMSwgZS5saW5lRmFjZS5zdHlsZS5zdHJva2UgPSBlLmN1clN0YXRzLmxpbmVfY29sb3IsIFRlKGUuYXBsU3RhdHMsIHRlLmdyYWRpZW50LnN0YXRzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgdmFyIGUsIHQsIGkgPSBhLmN1clN0YXRzLFxyXG4gICAgICAgICAgICBvID0gYS5hcGxTdGF0cyxcclxuICAgICAgICAgICAgbiA9IG8uZ3JhZGllbnRfb3B0aW9ucyxcclxuICAgICAgICAgICAgbCA9IGEucGF0aExpc3QuYW5pbVZhbCB8fCBhLnBhdGhMaXN0LmJhc2VWYWw7XHJcbiAgICAgICAgICBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpLmdyYWRpZW50X2NvbG9yU0VbZV0gPSBuLmNvbG9yU0VbZV0gfHwgaS5wbHVnX2NvbG9yU0VbZV1cclxuICAgICAgICAgIH0pLCB0ID0gbFswXVswXSwgaS5ncmFkaWVudF9wb2ludFNFWzBdID0ge1xyXG4gICAgICAgICAgICB4OiB0LngsXHJcbiAgICAgICAgICAgIHk6IHQueVxyXG4gICAgICAgICAgfSwgdCA9IChlID0gbFtsLmxlbmd0aCAtIDFdKVtlLmxlbmd0aCAtIDFdLCBpLmdyYWRpZW50X3BvaW50U0VbMV0gPSB7XHJcbiAgICAgICAgICAgIHg6IHQueCxcclxuICAgICAgICAgICAgeTogdC55XHJcbiAgICAgICAgICB9LCBbMCwgMV0uZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgbjtcclxuICAgICAgICAgICAgV2UoYSwgby5ncmFkaWVudF9jb2xvclNFLCB0LCBuID0gaS5ncmFkaWVudF9jb2xvclNFW3RdKSAmJiAodWUgPyAobiA9IGZlKG4pLCBhLmVmY19ncmFkaWVudF9zdG9wU0VbdF0uc3R5bGUuc3RvcENvbG9yID0gblsxXSwgYS5lZmNfZ3JhZGllbnRfc3RvcFNFW3RdLnN0eWxlLnN0b3BPcGFjaXR5ID0gblswXSkgOiBhLmVmY19ncmFkaWVudF9zdG9wU0VbdF0uc3R5bGUuc3RvcENvbG9yID0gbiksIFtcInhcIiwgXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAobiA9IGkuZ3JhZGllbnRfcG9pbnRTRVt0XVtlXSkgIT09IG8uZ3JhZGllbnRfcG9pbnRTRVt0XVtlXSAmJiAoYS5lZmNfZ3JhZGllbnRfZ3JhZGllbnRbZSArICh0ICsgMSldLmJhc2VWYWwudmFsdWUgPSBvLmdyYWRpZW50X3BvaW50U0VbdF1bZV0gPSBuKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRyb3BTaGFkb3c6IHtcclxuICAgICAgICBzdGF0czoge1xyXG4gICAgICAgICAgZHJvcFNoYWRvd19keDoge30sXHJcbiAgICAgICAgICBkcm9wU2hhZG93X2R5OiB7fSxcclxuICAgICAgICAgIGRyb3BTaGFkb3dfYmx1cjoge30sXHJcbiAgICAgICAgICBkcm9wU2hhZG93X2NvbG9yOiB7fSxcclxuICAgICAgICAgIGRyb3BTaGFkb3dfb3BhY2l0eToge30sXHJcbiAgICAgICAgICBkcm9wU2hhZG93X3g6IHt9LFxyXG4gICAgICAgICAgZHJvcFNoYWRvd195OiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uc0NvbmY6IFtcclxuICAgICAgICAgIFtcInR5cGVcIiwgXCJkeFwiLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgICAgIFtcInR5cGVcIiwgXCJkeVwiLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgICAgIFtcInR5cGVcIiwgXCJibHVyXCIsIG51bGwsIG51bGwsIG51bGwsIDMsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwIDw9IGVcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgW1widHlwZVwiLCBcImNvbG9yXCIsIG51bGwsIG51bGwsIG51bGwsIFwiIzAwMFwiLCBudWxsLCAhMF0sXHJcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwib3BhY2l0eVwiLCBudWxsLCBudWxsLCBudWxsLCAuOCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAgPD0gZSAmJiBlIDw9IDFcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdmFyIGUsIG4sIGEsIGksIG8sIGwgPSB0LmJhc2VXaW5kb3cuZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIHIgPSB0LmRlZnMsXHJcbiAgICAgICAgICAgIHMgPSB2ICsgXCItXCIgKyB0Ll9pZCArIFwiLWRyb3BTaGFkb3dcIixcclxuICAgICAgICAgICAgdSA9IChlID0gbCwgbiA9IHMsIG8gPSB7fSwgXCJib29sZWFuXCIgIT0gdHlwZW9mIHAgJiYgKHAgPSAhIXdpbmRvdy5TVkdGRURyb3BTaGFkb3dFbGVtZW50ICYmICF1ZSksIG8uZWxtc0FwcGVuZCA9IFtvLmVsbUZpbHRlciA9IGEgPSBlLmNyZWF0ZUVsZW1lbnROUyhiLCBcImZpbHRlclwiKV0sIGEuZmlsdGVyVW5pdHMuYmFzZVZhbCA9IFNWR1VuaXRUeXBlcy5TVkdfVU5JVF9UWVBFX1VTRVJTUEFDRU9OVVNFLCBhLnguYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMCksIGEueS5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYLCAwKSwgYS53aWR0aC5iYXNlVmFsLm5ld1ZhbHVlU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BFUkNFTlRBR0UsIDEwMCksIGEuaGVpZ2h0LmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUEVSQ0VOVEFHRSwgMTAwKSwgYS5pZCA9IG4sIHAgPyAoby5lbG1PZmZzZXQgPSBvLmVsbUJsdXIgPSBpID0gYS5hcHBlbmRDaGlsZChlLmNyZWF0ZUVsZW1lbnROUyhiLCBcImZlRHJvcFNoYWRvd1wiKSksIG8uc3R5bGVGbG9vZCA9IGkuc3R5bGUpIDogKG8uZWxtQmx1ciA9IGEuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZUdhdXNzaWFuQmx1clwiKSksIG8uZWxtT2Zmc2V0ID0gaSA9IGEuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZU9mZnNldFwiKSksIGkucmVzdWx0LmJhc2VWYWwgPSBcIm9mZnNldGJsdXJcIiwgaSA9IGEuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZUZsb29kXCIpKSwgby5zdHlsZUZsb29kID0gaS5zdHlsZSwgKGkgPSBhLmFwcGVuZENoaWxkKGUuY3JlYXRlRWxlbWVudE5TKGIsIFwiZmVDb21wb3NpdGVcIikpKS5pbjIuYmFzZVZhbCA9IFwib2Zmc2V0Ymx1clwiLCBpLm9wZXJhdG9yLmJhc2VWYWwgPSBTVkdGRUNvbXBvc2l0ZUVsZW1lbnQuU1ZHX0ZFQ09NUE9TSVRFX09QRVJBVE9SX0lOLCAoaSA9IGEuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZU1lcmdlXCIpKSkuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZU1lcmdlTm9kZVwiKSksIGkuYXBwZW5kQ2hpbGQoZS5jcmVhdGVFbGVtZW50TlMoYiwgXCJmZU1lcmdlTm9kZVwiKSkuaW4xLmJhc2VWYWwgPSBcIlNvdXJjZUdyYXBoaWNcIiksIG8pO1xyXG4gICAgICAgICAgW1wiZWxtRmlsdGVyXCIsIFwiZWxtT2Zmc2V0XCIsIFwiZWxtQmx1clwiLCBcInN0eWxlRmxvb2RcIiwgXCJlbG1zQXBwZW5kXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdFtcImVmY19kcm9wU2hhZG93X1wiICsgZV0gPSB1W2VdXHJcbiAgICAgICAgICB9KSwgdS5lbG1zQXBwZW5kLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgci5hcHBlbmRDaGlsZChlKVxyXG4gICAgICAgICAgfSksIHQuZmFjZS5zZXRBdHRyaWJ1dGUoXCJmaWx0ZXJcIiwgXCJ1cmwoI1wiICsgcyArIFwiKVwiKSwgSWUodCwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIHRlLmRyb3BTaGFkb3cuYWRqdXN0RWRnZSksIHRlLmRyb3BTaGFkb3cudXBkYXRlKHQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IGUuZGVmcztcclxuICAgICAgICAgIGUuZWZjX2Ryb3BTaGFkb3dfZWxtc0FwcGVuZCAmJiAoZS5lZmNfZHJvcFNoYWRvd19lbG1zQXBwZW5kLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5yZW1vdmVDaGlsZChlKVxyXG4gICAgICAgICAgfSksIGUuZWZjX2Ryb3BTaGFkb3dfZWxtRmlsdGVyID0gZS5lZmNfZHJvcFNoYWRvd19lbG1PZmZzZXQgPSBlLmVmY19kcm9wU2hhZG93X2VsbUJsdXIgPSBlLmVmY19kcm9wU2hhZG93X3N0eWxlRmxvb2QgPSBlLmVmY19kcm9wU2hhZG93X2VsbXNBcHBlbmQgPSBudWxsKSwgQ2UoZSwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIHRlLmRyb3BTaGFkb3cuYWRqdXN0RWRnZSksIERlKGUsIHt9KSwgZS5mYWNlLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSwgVGUoZS5hcGxTdGF0cywgdGUuZHJvcFNoYWRvdy5zdGF0cylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0LCBuLCBhID0gZS5jdXJTdGF0cyxcclxuICAgICAgICAgICAgaSA9IGUuYXBsU3RhdHMsXHJcbiAgICAgICAgICAgIG8gPSBpLmRyb3BTaGFkb3dfb3B0aW9ucztcclxuICAgICAgICAgIGEuZHJvcFNoYWRvd19keCA9IHQgPSBvLmR4LCBXZShlLCBpLCBcImRyb3BTaGFkb3dfZHhcIiwgdCkgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfZWxtT2Zmc2V0LmR4LmJhc2VWYWwgPSB0LCBuID0gITApLCBhLmRyb3BTaGFkb3dfZHkgPSB0ID0gby5keSwgV2UoZSwgaSwgXCJkcm9wU2hhZG93X2R5XCIsIHQpICYmIChlLmVmY19kcm9wU2hhZG93X2VsbU9mZnNldC5keS5iYXNlVmFsID0gdCwgbiA9ICEwKSwgYS5kcm9wU2hhZG93X2JsdXIgPSB0ID0gby5ibHVyLCBXZShlLCBpLCBcImRyb3BTaGFkb3dfYmx1clwiLCB0KSAmJiAoZS5lZmNfZHJvcFNoYWRvd19lbG1CbHVyLnNldFN0ZERldmlhdGlvbih0LCB0KSwgbiA9ICEwKSwgbiAmJiBEZShlLCB7fSksIGEuZHJvcFNoYWRvd19jb2xvciA9IHQgPSBvLmNvbG9yLCBXZShlLCBpLCBcImRyb3BTaGFkb3dfY29sb3JcIiwgdCkgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfc3R5bGVGbG9vZC5mbG9vZENvbG9yID0gdCksIGEuZHJvcFNoYWRvd19vcGFjaXR5ID0gdCA9IG8ub3BhY2l0eSwgV2UoZSwgaSwgXCJkcm9wU2hhZG93X29wYWNpdHlcIiwgdCkgJiYgKGUuZWZjX2Ryb3BTaGFkb3dfc3R5bGVGbG9vZC5mbG9vZE9wYWNpdHkgPSB0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRqdXN0RWRnZTogZnVuY3Rpb24gKGEsIGkpIHtcclxuICAgICAgICAgIHZhciBlLCB0LCBvID0gYS5jdXJTdGF0cyxcclxuICAgICAgICAgICAgbCA9IGEuYXBsU3RhdHM7XHJcbiAgICAgICAgICBudWxsICE9IG8uZHJvcFNoYWRvd19keCAmJiAoZSA9IDMgKiBvLmRyb3BTaGFkb3dfYmx1ciwgKHQgPSB7XHJcbiAgICAgICAgICAgIHgxOiBpLngxIC0gZSArIG8uZHJvcFNoYWRvd19keCxcclxuICAgICAgICAgICAgeTE6IGkueTEgLSBlICsgby5kcm9wU2hhZG93X2R5LFxyXG4gICAgICAgICAgICB4MjogaS54MiArIGUgKyBvLmRyb3BTaGFkb3dfZHgsXHJcbiAgICAgICAgICAgIHkyOiBpLnkyICsgZSArIG8uZHJvcFNoYWRvd19keVxyXG4gICAgICAgICAgfSkueDEgPCBpLngxICYmIChpLngxID0gdC54MSksIHQueTEgPCBpLnkxICYmIChpLnkxID0gdC55MSksIHQueDIgPiBpLngyICYmIChpLngyID0gdC54MiksIHQueTIgPiBpLnkyICYmIChpLnkyID0gdC55MiksIFtcInhcIiwgXCJ5XCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQsIG4gPSBcImRyb3BTaGFkb3dfXCIgKyBlO1xyXG4gICAgICAgICAgICBvW25dID0gdCA9IGlbZSArIFwiMVwiXSwgV2UoYSwgbCwgbiwgdCkgJiYgKGEuZWZjX2Ryb3BTaGFkb3dfZWxtRmlsdGVyW2VdLmJhc2VWYWwudmFsdWUgPSB0KVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCBPYmplY3Qua2V5cyh0ZSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdCA9IHRlW2VdLFxyXG4gICAgICAgIG4gPSB0LnN0YXRzO1xyXG4gICAgICBuW2UgKyBcIl9lbmFibGVkXCJdID0ge1xyXG4gICAgICAgIGluaVZhbHVlOiAhMVxyXG4gICAgICB9LCBuW2UgKyBcIl9vcHRpb25zXCJdID0ge1xyXG4gICAgICAgIGhhc1Byb3BzOiAhMFxyXG4gICAgICB9LCB0LmFuaW0gJiYgKG5bZSArIFwiX2FuaW1PcHRpb25zXCJdID0ge30sIG5bZSArIFwiX2FuaW1JZFwiXSA9IHt9KVxyXG4gICAgfSksIGcgPSB7XHJcbiAgICAgIG5vbmU6IHtcclxuICAgICAgICBkZWZhdWx0QW5pbU9wdGlvbnM6IHt9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IGUuY3VyU3RhdHM7XHJcbiAgICAgICAgICBuLnNob3dfYW5pbUlkICYmIChjLnJlbW92ZShuLnNob3dfYW5pbUlkKSwgbi5zaG93X2FuaW1JZCA9IG51bGwpLCBnLm5vbmUuc3RhcnQoZSwgdClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgZy5ub25lLnN0b3AoZSwgITApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgdmFyIGEgPSBlLmN1clN0YXRzO1xyXG4gICAgICAgICAgcmV0dXJuIG4gPSBudWxsICE9IG4gPyBuIDogZS5hcGxTdGF0cy5zaG93X29uLCBhLnNob3dfaW5BbmltID0gITEsIHQgJiYgR2UoZSwgbiksIG4gPyAxIDogMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFkZToge1xyXG4gICAgICAgIGRlZmF1bHRBbmltT3B0aW9uczoge1xyXG4gICAgICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgICAgIHRpbWluZzogXCJsaW5lYXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKG4sIGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gbi5jdXJTdGF0cyxcclxuICAgICAgICAgICAgYSA9IG4uYXBsU3RhdHM7XHJcbiAgICAgICAgICB0LnNob3dfYW5pbUlkICYmIGMucmVtb3ZlKHQuc2hvd19hbmltSWQpLCB0LnNob3dfYW5pbUlkID0gYy5hZGQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHQgPyBnLmZhZGUuc3RvcChuLCAhMCkgOiAobi5zdmcuc3R5bGUub3BhY2l0eSA9IGUgKyBcIlwiLCBsZSAmJiAoQWUobiwgbi5zdmcpLCBWZShuKSkpXHJcbiAgICAgICAgICB9LCBhLnNob3dfYW5pbU9wdGlvbnMuZHVyYXRpb24sIDEsIGEuc2hvd19hbmltT3B0aW9ucy50aW1pbmcsIG51bGwsICExKSwgZy5mYWRlLnN0YXJ0KG4sIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuLCBhID0gZS5jdXJTdGF0cztcclxuICAgICAgICAgIGEuc2hvd19pbkFuaW0gJiYgKG4gPSBjLnN0b3AoYS5zaG93X2FuaW1JZCkpLCBHZShlLCAxKSwgYS5zaG93X2luQW5pbSA9ICEwLCBjLnN0YXJ0KGEuc2hvd19hbmltSWQsICFlLmFwbFN0YXRzLnNob3dfb24sIG51bGwgIT0gdCA/IHQgOiBuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgIHZhciBhLCBpID0gZS5jdXJTdGF0cztcclxuICAgICAgICAgIHJldHVybiBuID0gbnVsbCAhPSBuID8gbiA6IGUuYXBsU3RhdHMuc2hvd19vbiwgYSA9IGkuc2hvd19pbkFuaW0gPyBjLnN0b3AoaS5zaG93X2FuaW1JZCkgOiBuID8gMSA6IDAsIGkuc2hvd19pbkFuaW0gPSAhMSwgdCAmJiAoZS5zdmcuc3R5bGUub3BhY2l0eSA9IG4gPyBcIlwiIDogXCIwXCIsIEdlKGUsIG4pKSwgYVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZHJhdzoge1xyXG4gICAgICAgIGRlZmF1bHRBbmltT3B0aW9uczoge1xyXG4gICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgIHRpbWluZzogWy41OCwgMCwgLjQyLCAxXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKG4sIGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gbi5jdXJTdGF0cyxcclxuICAgICAgICAgICAgYSA9IG4uYXBsU3RhdHMsXHJcbiAgICAgICAgICAgIGwgPSBuLnBhdGhMaXN0LmJhc2VWYWwsXHJcbiAgICAgICAgICAgIGkgPSBPZShsKSxcclxuICAgICAgICAgICAgciA9IGkuc2Vnc0xlbixcclxuICAgICAgICAgICAgcyA9IGkubGVuQWxsO1xyXG4gICAgICAgICAgdC5zaG93X2FuaW1JZCAmJiBjLnJlbW92ZSh0LnNob3dfYW5pbUlkKSwgdC5zaG93X2FuaW1JZCA9IGMuYWRkKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuLCBhLCBpLCBvID0gLTE7XHJcbiAgICAgICAgICAgIGlmICgwID09PSBlKSBuID0gW1xyXG4gICAgICAgICAgICAgIFtsWzBdWzBdLCBsWzBdWzBdXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBlbHNlIGlmICgxID09PSBlKSBuID0gbDtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgZm9yICh0ID0gcyAqIGUsIG4gPSBbXTsgdCA+PSByWysrb107KSBuLnB1c2gobFtvXSksIHQgLT0gcltvXTtcclxuICAgICAgICAgICAgICB0ICYmICgyID09PSAoYSA9IGxbb10pLmxlbmd0aCA/IG4ucHVzaChbYVswXSwgdmUoYVswXSwgYVsxXSwgdCAvIHJbb10pXSkgOiAoaSA9IHhlKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10sIGtlKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10sIHQpKSwgbi5wdXNoKFthWzBdLCBpLmZyb21QMSwgaS5mcm9tUDIsIGldKSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5cclxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHQgPyBnLmRyYXcuc3RvcChuLCAhMCkgOiAobi5wYXRoTGlzdC5hbmltVmFsID0gZSwgRGUobiwge1xyXG4gICAgICAgICAgICAgIHBhdGg6ICEwXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgfSwgYS5zaG93X2FuaW1PcHRpb25zLmR1cmF0aW9uLCAxLCBhLnNob3dfYW5pbU9wdGlvbnMudGltaW5nLCBudWxsLCAhMSksIGcuZHJhdy5zdGFydChuLCBlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiwgYSA9IGUuY3VyU3RhdHM7XHJcbiAgICAgICAgICBhLnNob3dfaW5BbmltICYmIChuID0gYy5zdG9wKGEuc2hvd19hbmltSWQpKSwgR2UoZSwgMSksIGEuc2hvd19pbkFuaW0gPSAhMCwgSWUoZSwgXCJhcGxfcG9zaXRpb25cIiwgZy5kcmF3LnVwZGF0ZSksIGMuc3RhcnQoYS5zaG93X2FuaW1JZCwgIWUuYXBsU3RhdHMuc2hvd19vbiwgbnVsbCAhPSB0ID8gdCA6IG4pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgdmFyIGEsIGkgPSBlLmN1clN0YXRzO1xyXG4gICAgICAgICAgcmV0dXJuIG4gPSBudWxsICE9IG4gPyBuIDogZS5hcGxTdGF0cy5zaG93X29uLCBhID0gaS5zaG93X2luQW5pbSA/IGMuc3RvcChpLnNob3dfYW5pbUlkKSA6IG4gPyAxIDogMCwgaS5zaG93X2luQW5pbSA9ICExLCB0ICYmIChlLnBhdGhMaXN0LmFuaW1WYWwgPSBuID8gbnVsbCA6IFtcclxuICAgICAgICAgICAgW2UucGF0aExpc3QuYmFzZVZhbFswXVswXSwgZS5wYXRoTGlzdC5iYXNlVmFsWzBdWzBdXVxyXG4gICAgICAgICAgXSwgRGUoZSwge1xyXG4gICAgICAgICAgICBwYXRoOiAhMFxyXG4gICAgICAgICAgfSksIEdlKGUsIG4pKSwgYVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgQ2UoZSwgXCJhcGxfcG9zaXRpb25cIiwgZy5kcmF3LnVwZGF0ZSksIGUuY3VyU3RhdHMuc2hvd19pbkFuaW0gPyBnLmRyYXcuaW5pdChlLCBnLmRyYXcuc3RvcChlKSkgOiBlLmFwbFN0YXRzLnNob3dfYW5pbU9wdGlvbnMgPSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZnVuY3Rpb24gcihuKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IHt9O1xyXG4gICAgICAgICAgdFtuXSA9IGUsIHRoaXMuc2V0T3B0aW9ucyh0KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBbXHJcbiAgICAgICAgW1wic3RhcnRcIiwgXCJhbmNob3JTRVwiLCAwXSxcclxuICAgICAgICBbXCJlbmRcIiwgXCJhbmNob3JTRVwiLCAxXSxcclxuICAgICAgICBbXCJjb2xvclwiLCBcImxpbmVDb2xvclwiXSxcclxuICAgICAgICBbXCJzaXplXCIsIFwibGluZVNpemVcIl0sXHJcbiAgICAgICAgW1wic3RhcnRTb2NrZXRHcmF2aXR5XCIsIFwic29ja2V0R3Jhdml0eVNFXCIsIDBdLFxyXG4gICAgICAgIFtcImVuZFNvY2tldEdyYXZpdHlcIiwgXCJzb2NrZXRHcmF2aXR5U0VcIiwgMV0sXHJcbiAgICAgICAgW1wic3RhcnRQbHVnQ29sb3JcIiwgXCJwbHVnQ29sb3JTRVwiLCAwXSxcclxuICAgICAgICBbXCJlbmRQbHVnQ29sb3JcIiwgXCJwbHVnQ29sb3JTRVwiLCAxXSxcclxuICAgICAgICBbXCJzdGFydFBsdWdTaXplXCIsIFwicGx1Z1NpemVTRVwiLCAwXSxcclxuICAgICAgICBbXCJlbmRQbHVnU2l6ZVwiLCBcInBsdWdTaXplU0VcIiwgMV0sXHJcbiAgICAgICAgW1wib3V0bGluZVwiLCBcImxpbmVPdXRsaW5lRW5hYmxlZFwiXSxcclxuICAgICAgICBbXCJvdXRsaW5lQ29sb3JcIiwgXCJsaW5lT3V0bGluZUNvbG9yXCJdLFxyXG4gICAgICAgIFtcIm91dGxpbmVTaXplXCIsIFwibGluZU91dGxpbmVTaXplXCJdLFxyXG4gICAgICAgIFtcInN0YXJ0UGx1Z091dGxpbmVcIiwgXCJwbHVnT3V0bGluZUVuYWJsZWRTRVwiLCAwXSxcclxuICAgICAgICBbXCJlbmRQbHVnT3V0bGluZVwiLCBcInBsdWdPdXRsaW5lRW5hYmxlZFNFXCIsIDFdLFxyXG4gICAgICAgIFtcInN0YXJ0UGx1Z091dGxpbmVDb2xvclwiLCBcInBsdWdPdXRsaW5lQ29sb3JTRVwiLCAwXSxcclxuICAgICAgICBbXCJlbmRQbHVnT3V0bGluZUNvbG9yXCIsIFwicGx1Z091dGxpbmVDb2xvclNFXCIsIDFdLFxyXG4gICAgICAgIFtcInN0YXJ0UGx1Z091dGxpbmVTaXplXCIsIFwicGx1Z091dGxpbmVTaXplU0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kUGx1Z091dGxpbmVTaXplXCIsIFwicGx1Z091dGxpbmVTaXplU0VcIiwgMV1cclxuICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBlWzBdLFxyXG4gICAgICAgICAgbiA9IGVbMV0sXHJcbiAgICAgICAgICBhID0gZVsyXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWWUucHJvdG90eXBlLCB0LCB7XHJcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSBudWxsICE9IGEgPyBLW3RoaXMuX2lkXS5vcHRpb25zW25dW2FdIDogbiA/IEtbdGhpcy5faWRdLm9wdGlvbnNbbl0gOiBLW3RoaXMuX2lkXS5vcHRpb25zW3RdO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBlID8geCA6IGRlKGUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2V0OiByKHQpLFxyXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcclxuICAgICAgICB9KVxyXG4gICAgICB9KSwgW1xyXG4gICAgICAgIFtcInBhdGhcIiwgbV0sXHJcbiAgICAgICAgW1wic3RhcnRTb2NrZXRcIiwgbiwgXCJzb2NrZXRTRVwiLCAwXSxcclxuICAgICAgICBbXCJlbmRTb2NrZXRcIiwgbiwgXCJzb2NrZXRTRVwiLCAxXSxcclxuICAgICAgICBbXCJzdGFydFBsdWdcIiwgRSwgXCJwbHVnU0VcIiwgMF0sXHJcbiAgICAgICAgW1wiZW5kUGx1Z1wiLCBFLCBcInBsdWdTRVwiLCAxXVxyXG4gICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgYSA9IGVbMF0sXHJcbiAgICAgICAgICBpID0gZVsxXSxcclxuICAgICAgICAgIG8gPSBlWzJdLFxyXG4gICAgICAgICAgbCA9IGVbM107XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFllLnByb3RvdHlwZSwgYSwge1xyXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuID0gbnVsbCAhPSBsID8gS1t0aGlzLl9pZF0ub3B0aW9uc1tvXVtsXSA6IG8gPyBLW3RoaXMuX2lkXS5vcHRpb25zW29dIDogS1t0aGlzLl9pZF0ub3B0aW9uc1thXTtcclxuICAgICAgICAgICAgcmV0dXJuIG4gPyBPYmplY3Qua2V5cyhpKS5zb21lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGlbZV0gPT09IG4gJiYgKHQgPSBlLCAhMClcclxuICAgICAgICAgICAgfSkgPyB0IDogbmV3IEVycm9yKFwiSXQncyBicm9rZW5cIikgOiB4XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2V0OiByKGEpLFxyXG4gICAgICAgICAgZW51bWVyYWJsZTogITBcclxuICAgICAgICB9KVxyXG4gICAgICB9KSwgT2JqZWN0LmtleXModGUpLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgYSA9IHRlW25dO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShZZS5wcm90b3R5cGUsIG4sIHtcclxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdSwgZSwgdCA9IEtbdGhpcy5faWRdLm9wdGlvbnNbbl07XHJcbiAgICAgICAgICAgIHJldHVybiBrKHQpID8gKHUgPSB0LCBlID0gYS5vcHRpb25zQ29uZi5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICB2YXIgbiwgYSA9IHRbMF0sXHJcbiAgICAgICAgICAgICAgICBpID0gdFsxXSxcclxuICAgICAgICAgICAgICAgIG8gPSB0WzJdLFxyXG4gICAgICAgICAgICAgICAgbCA9IHRbM10sXHJcbiAgICAgICAgICAgICAgICByID0gdFs0XSxcclxuICAgICAgICAgICAgICAgIHMgPSBudWxsICE9IHIgPyB1W2xdW3JdIDogbCA/IHVbbF0gOiB1W2ldO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlW2ldID0gXCJpZFwiID09PSBhID8gcyA/IE9iamVjdC5rZXlzKG8pLnNvbWUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvW2VdID09PSBzICYmIChuID0gZSwgITApXHJcbiAgICAgICAgICAgICAgfSkgPyBuIDogbmV3IEVycm9yKFwiSXQncyBicm9rZW5cIikgOiB4IDogbnVsbCA9PSBzID8geCA6IGRlKHMpLCBlXHJcbiAgICAgICAgICAgIH0sIHt9KSwgYS5hbmltICYmIChlLmFuaW1hdGlvbiA9IGRlKHUuYW5pbWF0aW9uKSksIGUpIDogdFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNldDogcihuKSxcclxuICAgICAgICAgIGVudW1lcmFibGU6ICEwXHJcbiAgICAgICAgfSlcclxuICAgICAgfSksIFtcInN0YXJ0TGFiZWxcIiwgXCJlbmRMYWJlbFwiLCBcIm1pZGRsZUxhYmVsXCJdLmZvckVhY2goZnVuY3Rpb24gKGUsIG4pIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWWUucHJvdG90eXBlLCBlLCB7XHJcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSBLW3RoaXMuX2lkXSxcclxuICAgICAgICAgICAgICB0ID0gZS5vcHRpb25zO1xyXG4gICAgICAgICAgICByZXR1cm4gdC5sYWJlbFNFTVtuXSAmJiAhZS5vcHRpb25Jc0F0dGFjaC5sYWJlbFNFTVtuXSA/ICRbdC5sYWJlbFNFTVtuXS5faWRdLnRleHQgOiB0LmxhYmVsU0VNW25dIHx8IFwiXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXQ6IHIoZSksXHJcbiAgICAgICAgICBlbnVtZXJhYmxlOiAhMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KCksIFllLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgcmV0dXJuIFplKEtbdGhpcy5faWRdLCBlKSwgdGhpc1xyXG4gICAgfSwgWWUucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gRGUoS1t0aGlzLl9pZF0sIHtcclxuICAgICAgICBwb3NpdGlvbjogITBcclxuICAgICAgfSksIHRoaXNcclxuICAgIH0sIFllLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0ID0gS1t0aGlzLl9pZF0sXHJcbiAgICAgICAgbiA9IHQuY3VyU3RhdHM7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRlKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBlICsgXCJfYW5pbUlkXCI7XHJcbiAgICAgICAgblt0XSAmJiBjLnJlbW92ZShuW3RdKVxyXG4gICAgICB9KSwgbi5zaG93X2FuaW1JZCAmJiBjLnJlbW92ZShuLnNob3dfYW5pbUlkKSwgdC5hdHRhY2htZW50cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBVZSh0LCBlKVxyXG4gICAgICB9KSwgdC5iYXNlV2luZG93ICYmIHQuc3ZnICYmIHQuYmFzZVdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQuc3ZnKSwgZGVsZXRlIEtbdGhpcy5faWRdXHJcbiAgICB9LCBZZS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHJldHVybiBqZShLW3RoaXMuX2lkXSwgITAsIGUsIHQpLCB0aGlzXHJcbiAgICB9LCBZZS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgIHJldHVybiBqZShLW3RoaXMuX2lkXSwgITEsIGUsIHQpLCB0aGlzXHJcbiAgICB9LCBvID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgdCAmJiAkW3QuX2lkXSAmJiAodC5ib3VuZFRhcmdldHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgVWUoZS5wcm9wcywgdCwgITApXHJcbiAgICAgIH0pLCB0LmNvbmYucmVtb3ZlICYmIHQuY29uZi5yZW1vdmUodCksIGRlbGV0ZSAkW3QuX2lkXSlcclxuICAgIH0sIFMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xyXG4gICAgICAgIHZhciBuLCBhID0ge1xyXG4gICAgICAgICAgICBjb25mOiBlLFxyXG4gICAgICAgICAgICBjdXJTdGF0czoge30sXHJcbiAgICAgICAgICAgIGFwbFN0YXRzOiB7fSxcclxuICAgICAgICAgICAgYm91bmRUYXJnZXRzOiBbXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGkgPSB7fTtcclxuICAgICAgICBlLmFyZ09wdGlvbnMuZXZlcnkoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHJldHVybiAhKCF0Lmxlbmd0aCB8fCAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS50eXBlID8gdHlwZW9mIHRbMF0gIT09IGUudHlwZSA6IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS50eXBlIHx8ICFlLnR5cGUodFswXSkpKSAmJiAoaVtlLm9wdGlvbk5hbWVdID0gdC5zaGlmdCgpLCAhMClcclxuICAgICAgICB9KSwgbiA9IHQubGVuZ3RoICYmIGsodFswXSkgPyBkZSh0WzBdKSA6IHt9LCBPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBuW2VdID0gaVtlXVxyXG4gICAgICAgIH0pLCBlLnN0YXRzICYmIChUZShhLmN1clN0YXRzLCBlLnN0YXRzKSwgVGUoYS5hcGxTdGF0cywgZS5zdGF0cykpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaWRcIiwge1xyXG4gICAgICAgICAgdmFsdWU6ICsrZWVcclxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNSZW1vdmVkXCIsIHtcclxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gISRbdGhpcy5faWRdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksIGEuX2lkID0gdGhpcy5faWQsIGUuaW5pdCAmJiAhZS5pbml0KGEsIG4pIHx8ICgkW3RoaXMuX2lkXSA9IGEpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXMsXHJcbiAgICAgICAgICBuID0gJFt0Ll9pZF07XHJcbiAgICAgICAgbiAmJiAobi5ib3VuZFRhcmdldHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBuLmNvbmYucmVtb3ZlT3B0aW9uKG4sIGUpXHJcbiAgICAgICAgfSksIExlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBlID0gJFt0Ll9pZF07XHJcbiAgICAgICAgICBlICYmIChjb25zb2xlLmVycm9yKFwiTGVhZGVyTGluZUF0dGFjaG1lbnQgd2FzIG5vdCByZW1vdmVkIGJ5IHJlbW92ZU9wdGlvblwiKSwgbyhlKSlcclxuICAgICAgICB9KSlcclxuICAgICAgfSwgZVxyXG4gICAgfSgpLCB3aW5kb3cuTGVhZGVyTGluZUF0dGFjaG1lbnQgPSBTLCBfID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBTICYmICghKGUuaXNSZW1vdmVkIHx8IHQgJiYgJFtlLl9pZF0uY29uZi50eXBlICE9PSB0KSB8fCBudWxsKVxyXG4gICAgfSwgeSA9IHtcclxuICAgICAgcG9pbnRBbmNob3I6IHtcclxuICAgICAgICB0eXBlOiBcImFuY2hvclwiLFxyXG4gICAgICAgIGFyZ09wdGlvbnM6IFt7XHJcbiAgICAgICAgICBvcHRpb25OYW1lOiBcImVsZW1lbnRcIixcclxuICAgICAgICAgIHR5cGU6IHllXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHJldHVybiBlLmVsZW1lbnQgPSB5LnBvaW50QW5jaG9yLmNoZWNrRWxlbWVudCh0LmVsZW1lbnQpLCBlLnggPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudCh0LngsICEwKSB8fCBbLjUsICEwXSwgZS55ID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQodC55LCAhMCkgfHwgWy41LCAhMF0sICEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVPcHRpb246IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHMsXHJcbiAgICAgICAgICAgIGEgPSB7fSxcclxuICAgICAgICAgICAgaSA9IGUuZWxlbWVudCxcclxuICAgICAgICAgICAgbyA9IG4ub3B0aW9ucy5hbmNob3JTRVtcInN0YXJ0XCIgPT09IHQub3B0aW9uTmFtZSA/IDEgOiAwXTtcclxuICAgICAgICAgIGkgPT09IG8gJiYgKGkgPSBvID09PSBkb2N1bWVudC5ib2R5ID8gbmV3IFMoeS5wb2ludEFuY2hvciwgW2ldKSA6IGRvY3VtZW50LmJvZHkpLCBhW3Qub3B0aW9uTmFtZV0gPSBpLCBaZShuLCBhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QkJveE5lc3Q6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IGdlKGUuZWxlbWVudCwgdC5iYXNlV2luZG93KSxcclxuICAgICAgICAgICAgYSA9IG4ud2lkdGgsXHJcbiAgICAgICAgICAgIGkgPSBuLmhlaWdodDtcclxuICAgICAgICAgIHJldHVybiBuLndpZHRoID0gbi5oZWlnaHQgPSAwLCBuLmxlZnQgPSBuLnJpZ2h0ID0gbi5sZWZ0ICsgZS54WzBdICogKGUueFsxXSA/IGEgOiAxKSwgbi50b3AgPSBuLmJvdHRvbSA9IG4udG9wICsgZS55WzBdICogKGUueVsxXSA/IGkgOiAxKSwgblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyc2VQZXJjZW50OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4sIGEsIGkgPSAhMTtcclxuICAgICAgICAgIHJldHVybiB3KGUpID8gYSA9IGUgOiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChuID0gdS5leGVjKGUpKSAmJiBuWzJdICYmIChpID0gMCAhPT0gKGEgPSBwYXJzZUZsb2F0KG5bMV0pIC8gMTAwKSksIG51bGwgIT0gYSAmJiAodCB8fCAwIDw9IGEpID8gW2EsIGldIDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tFbGVtZW50OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKG51bGwgPT0gZSkgZSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICBlbHNlIGlmICgheWUoZSkpIHRocm93IG5ldyBFcnJvcihcImBlbGVtZW50YCBtdXN0IGJlIEVsZW1lbnRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXJlYUFuY2hvcjoge1xyXG4gICAgICAgIHR5cGU6IFwiYW5jaG9yXCIsXHJcbiAgICAgICAgYXJnT3B0aW9uczogW3tcclxuICAgICAgICAgIG9wdGlvbk5hbWU6IFwiZWxlbWVudFwiLFxyXG4gICAgICAgICAgdHlwZTogeWVcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBvcHRpb25OYW1lOiBcInNoYXBlXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgIGNvbG9yOiB7fSxcclxuICAgICAgICAgIHN0cm9rZVdpZHRoOiB7fSxcclxuICAgICAgICAgIGVsZW1lbnRXaWR0aDoge30sXHJcbiAgICAgICAgICBlbGVtZW50SGVpZ2h0OiB7fSxcclxuICAgICAgICAgIGVsZW1lbnRMZWZ0OiB7fSxcclxuICAgICAgICAgIGVsZW1lbnRUb3A6IHt9LFxyXG4gICAgICAgICAgcGF0aExpc3RSZWw6IHt9LFxyXG4gICAgICAgICAgYkJveFJlbDoge30sXHJcbiAgICAgICAgICBwYXRoRGF0YToge30sXHJcbiAgICAgICAgICB2aWV3Qm94QkJveDoge1xyXG4gICAgICAgICAgICBoYXNQcm9wczogITBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXNoTGVuOiB7fSxcclxuICAgICAgICAgIGRhc2hHYXA6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoaSwgZSkge1xyXG4gICAgICAgICAgdmFyIHQsIG4sIGEsIG8gPSBbXTtcclxuICAgICAgICAgIHJldHVybiBpLmVsZW1lbnQgPSB5LnBvaW50QW5jaG9yLmNoZWNrRWxlbWVudChlLmVsZW1lbnQpLCBcInN0cmluZ1wiID09IHR5cGVvZiBlLmNvbG9yICYmIChpLmNvbG9yID0gZS5jb2xvci50cmltKCkpLCBcInN0cmluZ1wiID09IHR5cGVvZiBlLmZpbGxDb2xvciAmJiAoaS5maWxsID0gZS5maWxsQ29sb3IudHJpbSgpKSwgdyhlLnNpemUpICYmIDAgPD0gZS5zaXplICYmIChpLnNpemUgPSBlLnNpemUpLCBlLmRhc2ggJiYgKGkuZGFzaCA9ICEwLCB3KGUuZGFzaC5sZW4pICYmIDAgPCBlLmRhc2gubGVuICYmIChpLmRhc2hMZW4gPSBlLmRhc2gubGVuKSwgdyhlLmRhc2guZ2FwKSAmJiAwIDwgZS5kYXNoLmdhcCAmJiAoaS5kYXNoR2FwID0gZS5kYXNoLmdhcCkpLCBcImNpcmNsZVwiID09PSBlLnNoYXBlID8gaS5zaGFwZSA9IGUuc2hhcGUgOiBcInBvbHlnb25cIiA9PT0gZS5zaGFwZSAmJiBBcnJheS5pc0FycmF5KGUucG9pbnRzKSAmJiAzIDw9IGUucG9pbnRzLmxlbmd0aCAmJiBlLnBvaW50cy5ldmVyeShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gISghKHQueCA9IHkucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KGVbMF0sICEwKSkgfHwgISh0LnkgPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlWzFdLCAhMCkpKSAmJiAoby5wdXNoKHQpLCAodC54WzFdIHx8IHQueVsxXSkgJiYgKGkuaGFzUmF0aW8gPSAhMCksICEwKVxyXG4gICAgICAgICAgfSkgPyAoaS5zaGFwZSA9IGUuc2hhcGUsIGkucG9pbnRzID0gbykgOiAoaS5zaGFwZSA9IFwicmVjdFwiLCBpLnJhZGl1cyA9IHcoZS5yYWRpdXMpICYmIDAgPD0gZS5yYWRpdXMgPyBlLnJhZGl1cyA6IDApLCBcInJlY3RcIiAhPT0gaS5zaGFwZSAmJiBcImNpcmNsZVwiICE9PSBpLnNoYXBlIHx8IChpLnggPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlLngsICEwKSB8fCBbLS4wNSwgITBdLCBpLnkgPSB5LnBvaW50QW5jaG9yLnBhcnNlUGVyY2VudChlLnksICEwKSB8fCBbLS4wNSwgITBdLCBpLndpZHRoID0geS5wb2ludEFuY2hvci5wYXJzZVBlcmNlbnQoZS53aWR0aCkgfHwgWzEuMSwgITBdLCBpLmhlaWdodCA9IHkucG9pbnRBbmNob3IucGFyc2VQZXJjZW50KGUuaGVpZ2h0KSB8fCBbMS4xLCAhMF0sIChpLnhbMV0gfHwgaS55WzFdIHx8IGkud2lkdGhbMV0gfHwgaS5oZWlnaHRbMV0pICYmIChpLmhhc1JhdGlvID0gITApKSwgdCA9IGkuZWxlbWVudC5vd25lckRvY3VtZW50LCBpLnN2ZyA9IG4gPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInN2Z1wiKSwgbi5jbGFzc05hbWUuYmFzZVZhbCA9IHYgKyBcIi1hcmVhQW5jaG9yXCIsIG4udmlld0JveC5iYXNlVmFsIHx8IG4uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAwIDBcIiksIGkucGF0aCA9IG4uYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYiwgXCJwYXRoXCIpKSwgaS5wYXRoLnN0eWxlLmZpbGwgPSBpLmZpbGwgfHwgXCJub25lXCIsIGkuaXNTaG93biA9ICExLCBuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLCB0LmJvZHkuYXBwZW5kQ2hpbGQobiksIFJlKGEgPSB0LmRlZmF1bHRWaWV3KSwgaS5ib2R5T2Zmc2V0ID0gQmUoYSksIGkudXBkYXRlQ29sb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlLCB0ID0gaS5jdXJTdGF0cyxcclxuICAgICAgICAgICAgICBuID0gaS5hcGxTdGF0cyxcclxuICAgICAgICAgICAgICBhID0gaS5ib3VuZFRhcmdldHMubGVuZ3RoID8gaS5ib3VuZFRhcmdldHNbMF0ucHJvcHMuY3VyU3RhdHMgOiBudWxsO1xyXG4gICAgICAgICAgICB0LmNvbG9yID0gZSA9IGkuY29sb3IgfHwgKGEgPyBhLmxpbmVfY29sb3IgOiBwZS5saW5lQ29sb3IpLCBXZShpLCBuLCBcImNvbG9yXCIsIGUpICYmIChpLnBhdGguc3R5bGUuc3Ryb2tlID0gZSlcclxuICAgICAgICAgIH0sIGkudXBkYXRlU2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgR2UoaSwgaS5ib3VuZFRhcmdldHMuc29tZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAhMCA9PT0gZS5wcm9wcy5pc1Nob3duXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgfSwgITBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XHJcbiAgICAgICAgICByZXR1cm4gZS5jb2xvciB8fCBJZShuLCBcImN1cl9saW5lX2NvbG9yXCIsIGUudXBkYXRlQ29sb3IpLCBJZShuLCBcInN2Z1Nob3dcIiwgZS51cGRhdGVTaG93KSwgTGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlLnVwZGF0ZUNvbG9yKCksIGUudXBkYXRlU2hvdygpXHJcbiAgICAgICAgICB9KSwgITBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVuYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuID0gdC5wcm9wcztcclxuICAgICAgICAgIGUuY29sb3IgfHwgQ2UobiwgXCJjdXJfbGluZV9jb2xvclwiLCBlLnVwZGF0ZUNvbG9yKSwgQ2UobiwgXCJzdmdTaG93XCIsIGUudXBkYXRlU2hvdyksIDEgPCBlLmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgTGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlLnVwZGF0ZUNvbG9yKCksIGUudXBkYXRlU2hvdygpLCB5LmFyZWFBbmNob3IudXBkYXRlKGUpICYmIGUuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBEZShlLnByb3BzLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogITBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZU9wdGlvbjogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHkucG9pbnRBbmNob3IucmVtb3ZlT3B0aW9uKGUsIHQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICB0LmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgKGNvbnNvbGUuZXJyb3IoXCJMZWFkZXJMaW5lQXR0YWNobWVudCB3YXMgbm90IHVuYm91bmQgYnkgcmVtb3ZlXCIpLCB0LmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHkuYXJlYUFuY2hvci51bmJpbmQodCwgZSlcclxuICAgICAgICAgIH0pKSwgdC5zdmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0LnN2ZylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0cm9rZVdpZHRoOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgcmV0dXJuIHkuYXJlYUFuY2hvci51cGRhdGUoZSkgJiYgMSA8IGUuYm91bmRUYXJnZXRzLmxlbmd0aCAmJiBMZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGUuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBlLnByb3BzICE9PSB0ICYmIERlKGUucHJvcHMsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAhMFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KSwgZS5jdXJTdGF0cy5zdHJva2VXaWR0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UGF0aERhdGE6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IGdlKGUuZWxlbWVudCwgdC5iYXNlV2luZG93KTtcclxuICAgICAgICAgIHJldHVybiB3ZShlLmN1clN0YXRzLnBhdGhMaXN0UmVsLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnggKz0gbi5sZWZ0LCBlLnkgKz0gbi50b3BcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRCQm94TmVzdDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuID0gZ2UoZS5lbGVtZW50LCB0LmJhc2VXaW5kb3cpLFxyXG4gICAgICAgICAgICBhID0gZS5jdXJTdGF0cy5iQm94UmVsO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogYS5sZWZ0ICsgbi5sZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IGEudG9wICsgbi50b3AsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBhLnJpZ2h0ICsgbi5sZWZ0LFxyXG4gICAgICAgICAgICBib3R0b206IGEuYm90dG9tICsgbi50b3AsXHJcbiAgICAgICAgICAgIHdpZHRoOiBhLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGEuaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICB2YXIgYSwgbiwgaSwgbywgZSwgbCwgciwgcywgdSwgaCwgcCwgYywgZCwgZiwgeSwgUywgbSwgZywgXywgdiwgRSwgeCwgYiwgaywgdywgTywgTSwgSSwgQywgTCwgQSwgViwgUCA9IHQuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgIE4gPSB0LmFwbFN0YXRzLFxyXG4gICAgICAgICAgICBUID0gdC5ib3VuZFRhcmdldHMubGVuZ3RoID8gdC5ib3VuZFRhcmdldHNbMF0ucHJvcHMuY3VyU3RhdHMgOiBudWxsLFxyXG4gICAgICAgICAgICBXID0ge307XHJcbiAgICAgICAgICBpZiAoVy5zdHJva2VXaWR0aCA9IFdlKHQsIFAsIFwic3Ryb2tlV2lkdGhcIiwgbnVsbCAhPSB0LnNpemUgPyB0LnNpemUgOiBUID8gVC5saW5lX3N0cm9rZVdpZHRoIDogcGUubGluZVNpemUpLCBhID0gU2UodC5lbGVtZW50KSwgVy5lbGVtZW50V2lkdGggPSBXZSh0LCBQLCBcImVsZW1lbnRXaWR0aFwiLCBhLndpZHRoKSwgVy5lbGVtZW50SGVpZ2h0ID0gV2UodCwgUCwgXCJlbGVtZW50SGVpZ2h0XCIsIGEuaGVpZ2h0KSwgVy5lbGVtZW50TGVmdCA9IFdlKHQsIFAsIFwiZWxlbWVudExlZnRcIiwgYS5sZWZ0KSwgVy5lbGVtZW50VG9wID0gV2UodCwgUCwgXCJlbGVtZW50VG9wXCIsIGEudG9wKSwgVy5zdHJva2VXaWR0aCB8fCB0Lmhhc1JhdGlvICYmIChXLmVsZW1lbnRXaWR0aCB8fCBXLmVsZW1lbnRIZWlnaHQpKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5zaGFwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwicmVjdFwiOlxyXG4gICAgICAgICAgICAgICh2ID0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogdC54WzBdICogKHQueFsxXSA/IGEud2lkdGggOiAxKSxcclxuICAgICAgICAgICAgICAgIHRvcDogdC55WzBdICogKHQueVsxXSA/IGEuaGVpZ2h0IDogMSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdC53aWR0aFswXSAqICh0LndpZHRoWzFdID8gYS53aWR0aCA6IDEpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0LmhlaWdodFswXSAqICh0LmhlaWdodFsxXSA/IGEuaGVpZ2h0IDogMSlcclxuICAgICAgICAgICAgICB9KS5yaWdodCA9IHYubGVmdCArIHYud2lkdGgsIHYuYm90dG9tID0gdi50b3AgKyB2LmhlaWdodCwgayA9IFAuc3Ryb2tlV2lkdGggLyAyLCB4ID0gKGIgPSBNYXRoLm1pbih2LndpZHRoLCB2LmhlaWdodCkpID8gYiAvIDIgKiBNYXRoLlNRUlQyICsgayA6IDAsIChFID0gdC5yYWRpdXMgPyB0LnJhZGl1cyA8PSB4ID8gdC5yYWRpdXMgOiB4IDogMCkgPyAoTyA9IEUgLSAodyA9IChFIC0gaykgLyBNYXRoLlNRUlQyKSwgSSA9IEUgKiBVLCBNID0gW3tcclxuICAgICAgICAgICAgICAgIHg6IHYubGVmdCAtIE8sXHJcbiAgICAgICAgICAgICAgICB5OiB2LnRvcCArIHdcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgKyB3LFxyXG4gICAgICAgICAgICAgICAgeTogdi50b3AgLSBPXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCAtIHcsXHJcbiAgICAgICAgICAgICAgICB5OiB2LnRvcCAtIE9cclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiB2LnJpZ2h0ICsgTyxcclxuICAgICAgICAgICAgICAgIHk6IHYudG9wICsgd1xyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgKyBPLFxyXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gLSB3XHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCAtIHcsXHJcbiAgICAgICAgICAgICAgICB5OiB2LmJvdHRvbSArIE9cclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgKyB3LFxyXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gKyBPXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0IC0gTyxcclxuICAgICAgICAgICAgICAgIHk6IHYuYm90dG9tIC0gd1xyXG4gICAgICAgICAgICAgIH1dLCBQLnBhdGhMaXN0UmVsID0gW1xyXG4gICAgICAgICAgICAgICAgW01bMF0sIHtcclxuICAgICAgICAgICAgICAgICAgeDogTVswXS54LFxyXG4gICAgICAgICAgICAgICAgICB5OiBNWzBdLnkgLSBJXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IE1bMV0ueCAtIEksXHJcbiAgICAgICAgICAgICAgICAgIHk6IE1bMV0ueVxyXG4gICAgICAgICAgICAgICAgfSwgTVsxXV1cclxuICAgICAgICAgICAgICBdLCBNWzFdLnggIT09IE1bMl0ueCAmJiBQLnBhdGhMaXN0UmVsLnB1c2goW01bMV0sIE1bMl1dKSwgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzJdLCB7XHJcbiAgICAgICAgICAgICAgICB4OiBNWzJdLnggKyBJLFxyXG4gICAgICAgICAgICAgICAgeTogTVsyXS55XHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogTVszXS54LFxyXG4gICAgICAgICAgICAgICAgeTogTVszXS55IC0gSVxyXG4gICAgICAgICAgICAgIH0sIE1bM11dKSwgTVszXS55ICE9PSBNWzRdLnkgJiYgUC5wYXRoTGlzdFJlbC5wdXNoKFtNWzNdLCBNWzRdXSksIFAucGF0aExpc3RSZWwucHVzaChbTVs0XSwge1xyXG4gICAgICAgICAgICAgICAgeDogTVs0XS54LFxyXG4gICAgICAgICAgICAgICAgeTogTVs0XS55ICsgSVxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IE1bNV0ueCArIEksXHJcbiAgICAgICAgICAgICAgICB5OiBNWzVdLnlcclxuICAgICAgICAgICAgICB9LCBNWzVdXSksIE1bNV0ueCAhPT0gTVs2XS54ICYmIFAucGF0aExpc3RSZWwucHVzaChbTVs1XSwgTVs2XV0pLCBQLnBhdGhMaXN0UmVsLnB1c2goW01bNl0sIHtcclxuICAgICAgICAgICAgICAgIHg6IE1bNl0ueCAtIEksXHJcbiAgICAgICAgICAgICAgICB5OiBNWzZdLnlcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBNWzddLngsXHJcbiAgICAgICAgICAgICAgICB5OiBNWzddLnkgKyBJXHJcbiAgICAgICAgICAgICAgfSwgTVs3XV0pLCBNWzddLnkgIT09IE1bMF0ueSAmJiBQLnBhdGhMaXN0UmVsLnB1c2goW01bN10sIE1bMF1dKSwgUC5wYXRoTGlzdFJlbC5wdXNoKFtdKSwgTyA9IEUgLSB3ICsgUC5zdHJva2VXaWR0aCAvIDIsIE0gPSBbe1xyXG4gICAgICAgICAgICAgICAgeDogdi5sZWZ0IC0gTyxcclxuICAgICAgICAgICAgICAgIHk6IHYudG9wIC0gT1xyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHYucmlnaHQgKyBPLFxyXG4gICAgICAgICAgICAgICAgeTogdi5ib3R0b20gKyBPXHJcbiAgICAgICAgICAgICAgfV0pIDogKE8gPSBQLnN0cm9rZVdpZHRoIC8gMiwgTSA9IFt7XHJcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgLSBPLFxyXG4gICAgICAgICAgICAgICAgeTogdi50b3AgLSBPXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCArIE8sXHJcbiAgICAgICAgICAgICAgICB5OiB2LmJvdHRvbSArIE9cclxuICAgICAgICAgICAgICB9XSwgUC5wYXRoTGlzdFJlbCA9IFtcclxuICAgICAgICAgICAgICAgIFtNWzBdLCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IE1bMV0ueCxcclxuICAgICAgICAgICAgICAgICAgeTogTVswXS55XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgIHg6IE1bMV0ueCxcclxuICAgICAgICAgICAgICAgICAgeTogTVswXS55XHJcbiAgICAgICAgICAgICAgICB9LCBNWzFdXSxcclxuICAgICAgICAgICAgICAgIFtNWzFdLCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IE1bMF0ueCxcclxuICAgICAgICAgICAgICAgICAgeTogTVsxXS55XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICAgICAgXSwgTSA9IFt7XHJcbiAgICAgICAgICAgICAgICB4OiB2LmxlZnQgLSBQLnN0cm9rZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgeTogdi50b3AgLSBQLnN0cm9rZVdpZHRoXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogdi5yaWdodCArIFAuc3Ryb2tlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB5OiB2LmJvdHRvbSArIFAuc3Ryb2tlV2lkdGhcclxuICAgICAgICAgICAgICB9XSksIFAuYkJveFJlbCA9IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IE1bMF0ueCxcclxuICAgICAgICAgICAgICAgIHRvcDogTVswXS55LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IE1bMV0ueCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogTVsxXS55LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IE1bMV0ueCAtIE1bMF0ueCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogTVsxXS55IC0gTVswXS55XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxyXG4gICAgICAgICAgICAgIChyID0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogdC54WzBdICogKHQueFsxXSA/IGEud2lkdGggOiAxKSxcclxuICAgICAgICAgICAgICAgIHRvcDogdC55WzBdICogKHQueVsxXSA/IGEuaGVpZ2h0IDogMSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdC53aWR0aFswXSAqICh0LndpZHRoWzFdID8gYS53aWR0aCA6IDEpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0LmhlaWdodFswXSAqICh0LmhlaWdodFsxXSA/IGEuaGVpZ2h0IDogMSlcclxuICAgICAgICAgICAgICB9KS53aWR0aCB8fCByLmhlaWdodCB8fCAoci53aWR0aCA9IHIuaGVpZ2h0ID0gMTApLCByLndpZHRoIHx8IChyLndpZHRoID0gci5oZWlnaHQpLCByLmhlaWdodCB8fCAoci5oZWlnaHQgPSByLndpZHRoKSwgci5yaWdodCA9IHIubGVmdCArIHIud2lkdGgsIHIuYm90dG9tID0gci50b3AgKyByLmhlaWdodCwgcyA9IHIubGVmdCArIHIud2lkdGggLyAyLCB1ID0gci50b3AgKyByLmhlaWdodCAvIDIsIGYgPSBQLnN0cm9rZVdpZHRoIC8gMiwgeSA9IHIud2lkdGggLyAyLCBTID0gci5oZWlnaHQgLyAyLCBoID0geSAqIE1hdGguU1FSVDIgKyBmLCBwID0gUyAqIE1hdGguU1FSVDIgKyBmLCBjID0gaCAqIFUsIGQgPSBwICogVSwgXyA9IFt7XHJcbiAgICAgICAgICAgICAgICB4OiBzIC0gaCxcclxuICAgICAgICAgICAgICAgIHk6IHVcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBzLFxyXG4gICAgICAgICAgICAgICAgeTogdSAtIHBcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBzICsgaCxcclxuICAgICAgICAgICAgICAgIHk6IHVcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBzLFxyXG4gICAgICAgICAgICAgICAgeTogdSArIHBcclxuICAgICAgICAgICAgICB9XSwgUC5wYXRoTGlzdFJlbCA9IFtcclxuICAgICAgICAgICAgICAgIFtfWzBdLCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IF9bMF0ueCxcclxuICAgICAgICAgICAgICAgICAgeTogX1swXS55IC0gZFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBfWzFdLnggLSBjLFxyXG4gICAgICAgICAgICAgICAgICB5OiBfWzFdLnlcclxuICAgICAgICAgICAgICAgIH0sIF9bMV1dLFxyXG4gICAgICAgICAgICAgICAgW19bMV0sIHtcclxuICAgICAgICAgICAgICAgICAgeDogX1sxXS54ICsgYyxcclxuICAgICAgICAgICAgICAgICAgeTogX1sxXS55XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IF9bMl0ueCxcclxuICAgICAgICAgICAgICAgICAgeTogX1syXS55IC0gZFxyXG4gICAgICAgICAgICAgICAgfSwgX1syXV0sXHJcbiAgICAgICAgICAgICAgICBbX1syXSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBfWzJdLngsXHJcbiAgICAgICAgICAgICAgICAgIHk6IF9bMl0ueSArIGRcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgeDogX1szXS54ICsgYyxcclxuICAgICAgICAgICAgICAgICAgeTogX1szXS55XHJcbiAgICAgICAgICAgICAgICB9LCBfWzNdXSxcclxuICAgICAgICAgICAgICAgIFtfWzNdLCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IF9bM10ueCAtIGMsXHJcbiAgICAgICAgICAgICAgICAgIHk6IF9bM10ueVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBfWzBdLngsXHJcbiAgICAgICAgICAgICAgICAgIHk6IF9bMF0ueSArIGRcclxuICAgICAgICAgICAgICAgIH0sIF9bMF1dLFxyXG4gICAgICAgICAgICAgICAgW11cclxuICAgICAgICAgICAgICBdLCBtID0gaCAtIHkgKyBQLnN0cm9rZVdpZHRoIC8gMiwgZyA9IHAgLSBTICsgUC5zdHJva2VXaWR0aCAvIDIsIF8gPSBbe1xyXG4gICAgICAgICAgICAgICAgeDogci5sZWZ0IC0gbSxcclxuICAgICAgICAgICAgICAgIHk6IHIudG9wIC0gZ1xyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IHIucmlnaHQgKyBtLFxyXG4gICAgICAgICAgICAgICAgeTogci5ib3R0b20gKyBnXHJcbiAgICAgICAgICAgICAgfV0sIFAuYkJveFJlbCA9IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IF9bMF0ueCxcclxuICAgICAgICAgICAgICAgIHRvcDogX1swXS55LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IF9bMV0ueCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogX1sxXS55LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IF9bMV0ueCAtIF9bMF0ueCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogX1sxXS55IC0gX1swXS55XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcclxuICAgICAgICAgICAgICB0LnBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGUueFswXSAqIChlLnhbMV0gPyBhLndpZHRoIDogMSksXHJcbiAgICAgICAgICAgICAgICAgIG4gPSBlLnlbMF0gKiAoZS55WzFdID8gYS5oZWlnaHQgOiAxKTtcclxuICAgICAgICAgICAgICAgIGkgPyAodCA8IGkubGVmdCAmJiAoaS5sZWZ0ID0gdCksIHQgPiBpLnJpZ2h0ICYmIChpLnJpZ2h0ID0gdCksIG4gPCBpLnRvcCAmJiAoaS50b3AgPSBuKSwgbiA+IGkuYm90dG9tICYmIChpLmJvdHRvbSA9IG4pKSA6IGkgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHQsXHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0LFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IG4sXHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogblxyXG4gICAgICAgICAgICAgICAgfSwgbyA/IFAucGF0aExpc3RSZWwucHVzaChbbywge1xyXG4gICAgICAgICAgICAgICAgICB4OiB0LFxyXG4gICAgICAgICAgICAgICAgICB5OiBuXHJcbiAgICAgICAgICAgICAgICB9XSkgOiBQLnBhdGhMaXN0UmVsID0gW10sIG8gPSB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IHQsXHJcbiAgICAgICAgICAgICAgICAgIHk6IG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KSwgUC5wYXRoTGlzdFJlbC5wdXNoKFtdKSwgZSA9IFAuc3Ryb2tlV2lkdGggLyAyLCBsID0gW3tcclxuICAgICAgICAgICAgICAgIHg6IGkubGVmdCAtIGUsXHJcbiAgICAgICAgICAgICAgICB5OiBpLnRvcCAtIGVcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBpLnJpZ2h0ICsgZSxcclxuICAgICAgICAgICAgICAgIHk6IGkuYm90dG9tICsgZVxyXG4gICAgICAgICAgICAgIH1dLCBQLmJCb3hSZWwgPSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBsWzBdLngsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGxbMF0ueSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBsWzFdLngsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IGxbMV0ueSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBsWzFdLnggLSBsWzBdLngsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGxbMV0ueSAtIGxbMF0ueVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBXLnBhdGhMaXN0UmVsID0gVy5iQm94UmVsID0gITBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoVy5wYXRoTGlzdFJlbCB8fCBXLmVsZW1lbnRMZWZ0IHx8IFcuZWxlbWVudFRvcCkgJiYgKFAucGF0aERhdGEgPSB3ZShQLnBhdGhMaXN0UmVsLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnggKz0gYS5sZWZ0LCBlLnkgKz0gYS50b3BcclxuICAgICAgICAgIH0pKSwgV2UodCwgTiwgXCJzdHJva2VXaWR0aFwiLCBuID0gUC5zdHJva2VXaWR0aCkgJiYgKHQucGF0aC5zdHlsZS5zdHJva2VXaWR0aCA9IG4gKyBcInB4XCIpLCBNZShuID0gUC5wYXRoRGF0YSwgTi5wYXRoRGF0YSkgJiYgKHQucGF0aC5zZXRQYXRoRGF0YShuKSwgTi5wYXRoRGF0YSA9IG4sIFcucGF0aERhdGEgPSAhMCksIHQuZGFzaCAmJiAoIVcucGF0aERhdGEgJiYgKCFXLnN0cm9rZVdpZHRoIHx8IHQuZGFzaExlbiAmJiB0LmRhc2hHYXApIHx8IChQLmRhc2hMZW4gPSB0LmRhc2hMZW4gfHwgMiAqIFAuc3Ryb2tlV2lkdGgsIFAuZGFzaEdhcCA9IHQuZGFzaEdhcCB8fCBQLnN0cm9rZVdpZHRoKSwgVy5kYXNoID0gV2UodCwgTiwgXCJkYXNoTGVuXCIsIFAuZGFzaExlbikgfHwgVy5kYXNoLCBXLmRhc2ggPSBXZSh0LCBOLCBcImRhc2hHYXBcIiwgUC5kYXNoR2FwKSB8fCBXLmRhc2gsIFcuZGFzaCAmJiAodC5wYXRoLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IE4uZGFzaExlbiArIFwiLFwiICsgTi5kYXNoR2FwKSksIEMgPSBQLnZpZXdCb3hCQm94LCBMID0gTi52aWV3Qm94QkJveCwgQSA9IHQuc3ZnLnZpZXdCb3guYmFzZVZhbCwgViA9IHQuc3ZnLnN0eWxlLCBDLnggPSBQLmJCb3hSZWwubGVmdCArIGEubGVmdCwgQy55ID0gUC5iQm94UmVsLnRvcCArIGEudG9wLCBDLndpZHRoID0gUC5iQm94UmVsLndpZHRoLCBDLmhlaWdodCA9IFAuYkJveFJlbC5oZWlnaHQsIFtcInhcIiwgXCJ5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAobiA9IENbZV0pICE9PSBMW2VdICYmIChBW2VdID0gTFtlXSA9IG4sIFZbb2VbZV1dID0gbiArIChcInhcIiA9PT0gZSB8fCBcInlcIiA9PT0gZSA/IHQuYm9keU9mZnNldFtlXSA6IDApICsgXCJweFwiKVxyXG4gICAgICAgICAgfSksIFcuc3Ryb2tlV2lkdGggfHwgVy5wYXRoTGlzdFJlbCB8fCBXLmJCb3hSZWxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdXNlSG92ZXJBbmNob3I6IHtcclxuICAgICAgICB0eXBlOiBcImFuY2hvclwiLFxyXG4gICAgICAgIGFyZ09wdGlvbnM6IFt7XHJcbiAgICAgICAgICBvcHRpb25OYW1lOiBcImVsZW1lbnRcIixcclxuICAgICAgICAgIHR5cGU6IHllXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJzaG93RWZmZWN0TmFtZVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtODtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJakkwSWlCb1pXbG5hSFE5SWpJMElqNDhjRzlzZVdkdmJpQndiMmx1ZEhNOUlqSTBMREFnTUN3NElEZ3NNVEVnTUN3eE9TQTFMREkwSURFekxERTJJREUyTERJMElpQm1hV3hzUFNKamIzSmhiQ0l2UGp3dmMzWm5QZz09JylcIixcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIlwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjhmODgxXCIsXHJcbiAgICAgICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBob3ZlclN0eWxlOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibm9uZVwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWRmOGZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgdG9wOiAxLFxyXG4gICAgICAgICAgcmlnaHQ6IDE1LFxyXG4gICAgICAgICAgYm90dG9tOiAxLFxyXG4gICAgICAgICAgbGVmdDogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWluSGVpZ2h0OiAxNSxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcclxuICAgICAgICAgIHJpZ2h0OiAyLFxyXG4gICAgICAgICAgdG9wOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICAgICAgd2lkdGg6IDEyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlyS2V5czogW1xyXG4gICAgICAgICAgW1widG9wXCIsIFwiVG9wXCJdLFxyXG4gICAgICAgICAgW1wicmlnaHRcIiwgXCJSaWdodFwiXSxcclxuICAgICAgICAgIFtcImJvdHRvbVwiLCBcIkJvdHRvbVwiXSxcclxuICAgICAgICAgIFtcImxlZnRcIiwgXCJMZWZ0XCJdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoYSwgaSkge1xyXG4gICAgICAgICAgdmFyIG8sIHQsIGUsIG4sIGwsIHIsIHMsIHUsIGgsIHAsIGMsIGQgPSB5Lm1vdXNlSG92ZXJBbmNob3IsXHJcbiAgICAgICAgICAgIGYgPSB7fTtcclxuICAgICAgICAgIGlmIChhLmVsZW1lbnQgPSB5LnBvaW50QW5jaG9yLmNoZWNrRWxlbWVudChpLmVsZW1lbnQpLCB1ID0gYS5lbGVtZW50LCAhKChwID0gdS5vd25lckRvY3VtZW50KSAmJiAoaCA9IHAuZGVmYXVsdFZpZXcpICYmIGguSFRNTEVsZW1lbnQgJiYgdSBpbnN0YW5jZW9mIGguSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJgZWxlbWVudGAgbXVzdCBiZSBIVE1MIGVsZW1lbnRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGQuYmFja2dyb3VuZFNpemUud2lkdGggKyBcInB4IFwiICsgZC5iYWNrZ3JvdW5kU2l6ZS5oZWlnaHQgKyBcInB4XCIsIFtcInN0eWxlXCIsIFwiaG92ZXJTdHlsZVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gZFtlXTtcclxuICAgICAgICAgICAgYVtlXSA9IE9iamVjdC5rZXlzKG4pLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBlW3RdID0gblt0XSwgZVxyXG4gICAgICAgICAgICB9LCB7fSlcclxuICAgICAgICAgIH0pLCBcImlubGluZVwiID09PSAobyA9IGEuZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYS5lbGVtZW50LCBcIlwiKSkuZGlzcGxheSA/IGEuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCIgOiBcIm5vbmVcIiA9PT0gby5kaXNwbGF5ICYmIChhLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpLCB5Lm1vdXNlSG92ZXJBbmNob3IuZGlyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZVswXSxcclxuICAgICAgICAgICAgICBuID0gXCJwYWRkaW5nXCIgKyBlWzFdO1xyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KG9bbl0pIDwgZC5wYWRkaW5nW3RdICYmIChhLnN0eWxlW25dID0gZC5wYWRkaW5nW3RdICsgXCJweFwiKVxyXG4gICAgICAgICAgfSksIGEuc3R5bGUuZGlzcGxheSAmJiAobiA9IGEuZWxlbWVudC5zdHlsZS5kaXNwbGF5LCBhLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGEuc3R5bGUuZGlzcGxheSksIHkubW91c2VIb3ZlckFuY2hvci5kaXJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBcInBhZGRpbmdcIiArIGVbMV07XHJcbiAgICAgICAgICAgIGEuc3R5bGVbdF0gJiYgKGZbdF0gPSBhLmVsZW1lbnQuc3R5bGVbdF0sIGEuZWxlbWVudC5zdHlsZVt0XSA9IGEuc3R5bGVbdF0pXHJcbiAgICAgICAgICB9KSwgKGUgPSBhLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLmhlaWdodCA8IGQubWluSGVpZ2h0ICYmIChsZSA/IChjID0gZC5taW5IZWlnaHQsIFwiY29udGVudC1ib3hcIiA9PT0gby5ib3hTaXppbmcgPyBjIC09IHBhcnNlRmxvYXQoby5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KG8uYm9yZGVyQm90dG9tV2lkdGgpICsgcGFyc2VGbG9hdChvLnBhZGRpbmdUb3ApICsgcGFyc2VGbG9hdChvLnBhZGRpbmdCb3R0b20pIDogXCJwYWRkaW5nLWJveFwiID09PSBvLmJveFNpemluZyAmJiAoYyAtPSBwYXJzZUZsb2F0KG8uYm9yZGVyVG9wV2lkdGgpICsgcGFyc2VGbG9hdChvLmJvcmRlckJvdHRvbVdpZHRoKSksIGEuc3R5bGUuaGVpZ2h0ID0gYyArIFwicHhcIikgOiBhLnN0eWxlLmhlaWdodCA9IHBhcnNlRmxvYXQoby5oZWlnaHQpICsgKGQubWluSGVpZ2h0IC0gZS5oZWlnaHQpICsgXCJweFwiKSwgYS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSB1ZSA/IGUud2lkdGggLSBkLmJhY2tncm91bmRTaXplLndpZHRoIC0gZC5iYWNrZ3JvdW5kUG9zaXRpb24ucmlnaHQgKyBcInB4IFwiICsgZC5iYWNrZ3JvdW5kUG9zaXRpb24udG9wICsgXCJweFwiIDogXCJyaWdodCBcIiArIGQuYmFja2dyb3VuZFBvc2l0aW9uLnJpZ2h0ICsgXCJweCB0b3AgXCIgKyBkLmJhY2tncm91bmRQb3NpdGlvbi50b3AgKyBcInB4XCIsIGEuc3R5bGUuZGlzcGxheSAmJiAoYS5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBuKSwgeS5tb3VzZUhvdmVyQW5jaG9yLmRpcktleXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IFwicGFkZGluZ1wiICsgZVsxXTtcclxuICAgICAgICAgICAgYS5zdHlsZVt0XSAmJiAoYS5lbGVtZW50LnN0eWxlW3RdID0gZlt0XSlcclxuICAgICAgICAgIH0pLCBbXCJzdHlsZVwiLCBcImhvdmVyU3R5bGVcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGFbZV0sXHJcbiAgICAgICAgICAgICAgbiA9IGlbZV07XHJcbiAgICAgICAgICAgIGsobikgJiYgT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIG5bZV0gfHwgdyhuW2VdKSA/IHRbZV0gPSBuW2VdIDogbnVsbCA9PSBuW2VdICYmIGRlbGV0ZSB0W2VdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBpLm9uU3dpdGNoICYmIChzID0gaS5vblN3aXRjaCksIGkuc2hvd0VmZmVjdE5hbWUgJiYgZ1tpLnNob3dFZmZlY3ROYW1lXSAmJiAoYS5zaG93RWZmZWN0TmFtZSA9IGwgPSBpLnNob3dFZmZlY3ROYW1lKSwgciA9IGkuYW5pbU9wdGlvbnMsIGEuZWxtU3R5bGUgPSB0ID0gYS5lbGVtZW50LnN0eWxlLCBhLm1vdXNlZW50ZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBhLmhvdmVyU3R5bGVTYXZlID0gZC5nZXRTdHlsZXModCwgT2JqZWN0LmtleXMoYS5ob3ZlclN0eWxlKSksIGQuc2V0U3R5bGVzKHQsIGEuaG92ZXJTdHlsZSksIGEuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBqZShlLnByb3BzLCAhMCwgbCwgcilcclxuICAgICAgICAgICAgfSksIHMgJiYgcyhlKVxyXG4gICAgICAgICAgfSwgYS5tb3VzZWxlYXZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZC5zZXRTdHlsZXModCwgYS5ob3ZlclN0eWxlU2F2ZSksIGEuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBqZShlLnByb3BzLCAhMSwgbCwgcilcclxuICAgICAgICAgICAgfSksIHMgJiYgcyhlKVxyXG4gICAgICAgICAgfSwgITBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiwgYSwgaSwgbywgbDtcclxuICAgICAgICAgIHJldHVybiB0LnByb3BzLnN2ZyA/IHkubW91c2VIb3ZlckFuY2hvci5sbFNob3codC5wcm9wcywgITEsIGUuc2hvd0VmZmVjdE5hbWUpIDogTGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB5Lm1vdXNlSG92ZXJBbmNob3IubGxTaG93KHQucHJvcHMsICExLCBlLnNob3dFZmZlY3ROYW1lKVxyXG4gICAgICAgICAgfSksIGUuZW5hYmxlZCB8fCAoZS5zdHlsZVNhdmUgPSB5Lm1vdXNlSG92ZXJBbmNob3IuZ2V0U3R5bGVzKGUuZWxtU3R5bGUsIE9iamVjdC5rZXlzKGUuc3R5bGUpKSwgeS5tb3VzZUhvdmVyQW5jaG9yLnNldFN0eWxlcyhlLmVsbVN0eWxlLCBlLnN0eWxlKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyID0gKG4gPSBlLmVsZW1lbnQsIGEgPSBlLm1vdXNlZW50ZXIsIGkgPSBlLm1vdXNlbGVhdmUsIFwib25tb3VzZWVudGVyXCIgaW4gbiAmJiBcIm9ubW91c2VsZWF2ZVwiIGluIG4gPyAobi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBhLCAhMSksIG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaSwgITEpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgYSwgITEpLCBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGksICExKVxyXG4gICAgICAgICAgfSkgOiAoY29uc29sZS53YXJuKFwibW91c2VlbnRlciBhbmQgbW91c2VsZWF2ZSBldmVudHMgcG9seWZpbGwgaXMgZW5hYmxlZC5cIiksIG8gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnJlbGF0ZWRUYXJnZXQgJiYgKGUucmVsYXRlZFRhcmdldCA9PT0gdGhpcyB8fCB0aGlzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUucmVsYXRlZFRhcmdldCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSkgfHwgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXHJcbiAgICAgICAgICB9LCBuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbyksIGwgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnJlbGF0ZWRUYXJnZXQgJiYgKGUucmVsYXRlZFRhcmdldCA9PT0gdGhpcyB8fCB0aGlzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUucmVsYXRlZFRhcmdldCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSkgfHwgaS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXHJcbiAgICAgICAgICB9LCBuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBsKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbywgITEpLCBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBsLCAhMSlcclxuICAgICAgICAgIH0pKSwgZS5lbmFibGVkID0gITApLCAhMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgZS5lbmFibGVkICYmIGUuYm91bmRUYXJnZXRzLmxlbmd0aCA8PSAxICYmIChlLnJlbW92ZUV2ZW50TGlzdGVuZXIoKSwgeS5tb3VzZUhvdmVyQW5jaG9yLnNldFN0eWxlcyhlLmVsbVN0eWxlLCBlLnN0eWxlU2F2ZSksIGUuZW5hYmxlZCA9ICExKSwgeS5tb3VzZUhvdmVyQW5jaG9yLmxsU2hvdyh0LnByb3BzLCAhMCwgZS5zaG93RWZmZWN0TmFtZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZU9wdGlvbjogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHkucG9pbnRBbmNob3IucmVtb3ZlT3B0aW9uKGUsIHQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICB0LmJvdW5kVGFyZ2V0cy5sZW5ndGggJiYgKGNvbnNvbGUuZXJyb3IoXCJMZWFkZXJMaW5lQXR0YWNobWVudCB3YXMgbm90IHVuYm91bmQgYnkgcmVtb3ZlXCIpLCB0LmJvdW5kVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHkubW91c2VIb3ZlckFuY2hvci51bmJpbmQodCwgZSlcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QkJveE5lc3Q6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZ2UoZS5lbGVtZW50LCB0LmJhc2VXaW5kb3cpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsbFNob3c6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICBnW24gfHwgZS5jdXJTdGF0cy5zaG93X2VmZmVjdF0uc3RvcChlLCAhMCwgdCksIGUuYXBsU3RhdHMuc2hvd19vbiA9IHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0eWxlczogZnVuY3Rpb24gKG4sIGUpIHtcclxuICAgICAgICAgIHJldHVybiBlLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZVt0XSA9IG5bdF0sIGVcclxuICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0U3R5bGVzOiBmdW5jdGlvbiAodCwgbikge1xyXG4gICAgICAgICAgT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0W2VdID0gbltlXVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcHRpb25MYWJlbDoge1xyXG4gICAgICAgIHR5cGU6IFwibGFiZWxcIixcclxuICAgICAgICBhcmdPcHRpb25zOiBbe1xyXG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgIGNvbG9yOiB7fSxcclxuICAgICAgICAgIHg6IHt9LFxyXG4gICAgICAgICAgeToge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRTdHlsZVByb3BzOiBbXCJmb250RmFtaWx5XCIsIFwiZm9udFN0eWxlXCIsIFwiZm9udFZhcmlhbnRcIiwgXCJmb250V2VpZ2h0XCIsIFwiZm9udFN0cmV0Y2hcIiwgXCJmb250U2l6ZVwiLCBcImZvbnRTaXplQWRqdXN0XCIsIFwia2VybmluZ1wiLCBcImxldHRlclNwYWNpbmdcIiwgXCJ3b3JkU3BhY2luZ1wiLCBcInRleHREZWNvcmF0aW9uXCJdLFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh1LCB0KSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC50ZXh0ICYmICh1LnRleHQgPSB0LnRleHQudHJpbSgpKSwgISF1LnRleHQgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQuY29sb3IgJiYgKHUuY29sb3IgPSB0LmNvbG9yLnRyaW0oKSksIHUub3V0bGluZUNvbG9yID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5vdXRsaW5lQ29sb3IgPyB0Lm91dGxpbmVDb2xvci50cmltKCkgOiBcIiNmZmZcIiwgQXJyYXkuaXNBcnJheSh0Lm9mZnNldCkgJiYgdyh0Lm9mZnNldFswXSkgJiYgdyh0Lm9mZnNldFsxXSkgJiYgKHUub2Zmc2V0ID0ge1xyXG4gICAgICAgICAgICB4OiB0Lm9mZnNldFswXSxcclxuICAgICAgICAgICAgeTogdC5vZmZzZXRbMV1cclxuICAgICAgICAgIH0pLCB3KHQubGluZU9mZnNldCkgJiYgKHUubGluZU9mZnNldCA9IHQubGluZU9mZnNldCksIHkuY2FwdGlvbkxhYmVsLnRleHRTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbnVsbCAhPSB0W2VdICYmICh1W2VdID0gdFtlXSlcclxuICAgICAgICAgIH0pLCB1LnVwZGF0ZUNvbG9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgeS5jYXB0aW9uTGFiZWwudXBkYXRlQ29sb3IodSwgZSlcclxuICAgICAgICAgIH0sIHUudXBkYXRlU29ja2V0WFkgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCwgbiwgYSwgaSwgbyA9IHUuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgICAgbCA9IHUuYXBsU3RhdHMsXHJcbiAgICAgICAgICAgICAgciA9IGUuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgICAgcyA9IHIucG9zaXRpb25fc29ja2V0WFlTRVt1LnNvY2tldEluZGV4XTtcclxuICAgICAgICAgICAgbnVsbCAhPSBzLnggJiYgKHUub2Zmc2V0ID8gKG8ueCA9IHMueCArIHUub2Zmc2V0LngsIG8ueSA9IHMueSArIHUub2Zmc2V0LnkpIDogKHQgPSB1LmhlaWdodCAvIDIsIG4gPSBNYXRoLm1heChyLmF0dGFjaF9wbHVnU2lkZUxlblNFW3Uuc29ja2V0SW5kZXhdIHx8IDAsIHIubGluZV9zdHJva2VXaWR0aCAvIDIpLCBhID0gci5wb3NpdGlvbl9zb2NrZXRYWVNFW3Uuc29ja2V0SW5kZXggPyAwIDogMV0sIHMuc29ja2V0SWQgPT09IEwgfHwgcy5zb2NrZXRJZCA9PT0gSSA/IChvLnggPSBzLnNvY2tldElkID09PSBMID8gcy54IC0gdCAtIHUud2lkdGggOiBzLnggKyB0LCBvLnkgPSBhLnkgPCBzLnkgPyBzLnkgKyBuICsgdCA6IHMueSAtIG4gLSB0IC0gdS5oZWlnaHQpIDogKG8ueCA9IGEueCA8IHMueCA/IHMueCArIG4gKyB0IDogcy54IC0gbiAtIHQgLSB1LndpZHRoLCBvLnkgPSBzLnNvY2tldElkID09PSBNID8gcy55IC0gdCAtIHUuaGVpZ2h0IDogcy55ICsgdCkpLCBXZSh1LCBsLCBcInhcIiwgaSA9IG8ueCkgJiYgKHUuZWxtUG9zaXRpb24ueC5iYXNlVmFsLmdldEl0ZW0oMCkudmFsdWUgPSBpKSwgV2UodSwgbCwgXCJ5XCIsIGkgPSBvLnkpICYmICh1LmVsbVBvc2l0aW9uLnkuYmFzZVZhbC5nZXRJdGVtKDApLnZhbHVlID0gaSArIHUuaGVpZ2h0KSlcclxuICAgICAgICAgIH0sIHUudXBkYXRlUGF0aCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuLCBhID0gdS5jdXJTdGF0cyxcclxuICAgICAgICAgICAgICBpID0gdS5hcGxTdGF0cyxcclxuICAgICAgICAgICAgICBvID0gZS5wYXRoTGlzdC5hbmltVmFsIHx8IGUucGF0aExpc3QuYmFzZVZhbDtcclxuICAgICAgICAgICAgbyAmJiAodCA9IHkuY2FwdGlvbkxhYmVsLmdldE1pZFBvaW50KG8sIHUubGluZU9mZnNldCksIGEueCA9IHQueCAtIHUud2lkdGggLyAyLCBhLnkgPSB0LnkgLSB1LmhlaWdodCAvIDIsIFdlKHUsIGksIFwieFwiLCBuID0gYS54KSAmJiAodS5lbG1Qb3NpdGlvbi54LmJhc2VWYWwuZ2V0SXRlbSgwKS52YWx1ZSA9IG4pLCBXZSh1LCBpLCBcInlcIiwgbiA9IGEueSkgJiYgKHUuZWxtUG9zaXRpb24ueS5iYXNlVmFsLmdldEl0ZW0oMCkudmFsdWUgPSBuICsgdS5oZWlnaHQpKVxyXG4gICAgICAgICAgfSwgdS51cGRhdGVTaG93ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgeS5jYXB0aW9uTGFiZWwudXBkYXRlU2hvdyh1LCBlKVxyXG4gICAgICAgICAgfSwgdWUgJiYgKHUuYWRqdXN0RWRnZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gdS5jdXJTdGF0cztcclxuICAgICAgICAgICAgbnVsbCAhPSBuLnggJiYgeS5jYXB0aW9uTGFiZWwuYWRqdXN0RWRnZSh0LCB7XHJcbiAgICAgICAgICAgICAgeDogbi54LFxyXG4gICAgICAgICAgICAgIHk6IG4ueSxcclxuICAgICAgICAgICAgICB3aWR0aDogdS53aWR0aCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IHUuaGVpZ2h0XHJcbiAgICAgICAgICAgIH0sIHUuc3Ryb2tlV2lkdGggLyAyKVxyXG4gICAgICAgICAgfSksICEwKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlQ29sb3I6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiwgYSA9IGUuY3VyU3RhdHMsXHJcbiAgICAgICAgICAgIGkgPSBlLmFwbFN0YXRzLFxyXG4gICAgICAgICAgICBvID0gdC5jdXJTdGF0cztcclxuICAgICAgICAgIGEuY29sb3IgPSBuID0gZS5jb2xvciB8fCBvLmxpbmVfY29sb3IsIFdlKGUsIGksIFwiY29sb3JcIiwgbikgJiYgKGUuc3R5bGVGaWxsLmZpbGwgPSBuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlU2hvdzogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuID0gITAgPT09IHQuaXNTaG93bjtcclxuICAgICAgICAgIG4gIT09IGUuaXNTaG93biAmJiAoZS5zdHlsZVNob3cudmlzaWJpbGl0eSA9IG4gPyBcIlwiIDogXCJoaWRkZW5cIiwgZS5pc1Nob3duID0gbilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkanVzdEVkZ2U6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICB2YXIgYSA9IHtcclxuICAgICAgICAgICAgeDE6IHQueCAtIG4sXHJcbiAgICAgICAgICAgIHkxOiB0LnkgLSBuLFxyXG4gICAgICAgICAgICB4MjogdC54ICsgdC53aWR0aCArIG4sXHJcbiAgICAgICAgICAgIHkyOiB0LnkgKyB0LmhlaWdodCArIG5cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBhLngxIDwgZS54MSAmJiAoZS54MSA9IGEueDEpLCBhLnkxIDwgZS55MSAmJiAoZS55MSA9IGEueTEpLCBhLngyID4gZS54MiAmJiAoZS54MiA9IGEueDIpLCBhLnkyID4gZS55MiAmJiAoZS55MiA9IGEueTIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXdUZXh0OiBmdW5jdGlvbiAoZSwgdCwgbiwgYSwgaSkge1xyXG4gICAgICAgICAgdmFyIG8sIGwsIHIsIHMsIHUsIGg7XHJcbiAgICAgICAgICByZXR1cm4gKG8gPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInRleHRcIikpLnRleHRDb250ZW50ID0gZSwgW28ueCwgby55XS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gbi5jcmVhdGVTVkdMZW5ndGgoKTtcclxuICAgICAgICAgICAgdC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMCksIGUuYmFzZVZhbC5pbml0aWFsaXplKHQpXHJcbiAgICAgICAgICB9KSwgXCJib29sZWFuXCIgIT0gdHlwZW9mIGYgJiYgKGYgPSBcInBhaW50T3JkZXJcIiBpbiBvLnN0eWxlKSwgaSAmJiAhZiA/IChyID0gdC5jcmVhdGVFbGVtZW50TlMoYiwgXCJkZWZzXCIpLCBvLmlkID0gYSwgci5hcHBlbmRDaGlsZChvKSwgKHUgPSAobCA9IHQuY3JlYXRlRWxlbWVudE5TKGIsIFwiZ1wiKSkuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIGEsIChzID0gbC5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSkpLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgYSwgKGggPSB1LnN0eWxlKS5zdHJva2VMaW5lam9pbiA9IFwicm91bmRcIiwge1xyXG4gICAgICAgICAgICBlbG1Qb3NpdGlvbjogbyxcclxuICAgICAgICAgICAgc3R5bGVUZXh0OiBvLnN0eWxlLFxyXG4gICAgICAgICAgICBzdHlsZUZpbGw6IHMuc3R5bGUsXHJcbiAgICAgICAgICAgIHN0eWxlU3Ryb2tlOiBoLFxyXG4gICAgICAgICAgICBzdHlsZVNob3c6IGwuc3R5bGUsXHJcbiAgICAgICAgICAgIGVsbXNBcHBlbmQ6IFtyLCBsXVxyXG4gICAgICAgICAgfSkgOiAoaCA9IG8uc3R5bGUsIGkgJiYgKGguc3Ryb2tlTGluZWpvaW4gPSBcInJvdW5kXCIsIGgucGFpbnRPcmRlciA9IFwic3Ryb2tlXCIpLCB7XHJcbiAgICAgICAgICAgIGVsbVBvc2l0aW9uOiBvLFxyXG4gICAgICAgICAgICBzdHlsZVRleHQ6IGgsXHJcbiAgICAgICAgICAgIHN0eWxlRmlsbDogaCxcclxuICAgICAgICAgICAgc3R5bGVTdHJva2U6IGkgPyBoIDogbnVsbCxcclxuICAgICAgICAgICAgc3R5bGVTaG93OiBoLFxyXG4gICAgICAgICAgICBlbG1zQXBwZW5kOiBbb11cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRNaWRQb2ludDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuLCBhLCBpLCBvID0gT2UoZSksXHJcbiAgICAgICAgICAgIGwgPSBvLnNlZ3NMZW4sXHJcbiAgICAgICAgICAgIHIgPSBvLmxlbkFsbCxcclxuICAgICAgICAgICAgcyA9IC0xO1xyXG4gICAgICAgICAgaWYgKChuID0gciAvIDIgKyAodCB8fCAwKSkgPD0gMCkgcmV0dXJuIDIgPT09IChhID0gZVswXSkubGVuZ3RoID8gdmUoYVswXSwgYVsxXSwgMCkgOiB4ZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCAwKTtcclxuICAgICAgICAgIGlmIChyIDw9IG4pIHJldHVybiAyID09PSAoYSA9IGVbZS5sZW5ndGggLSAxXSkubGVuZ3RoID8gdmUoYVswXSwgYVsxXSwgMSkgOiB4ZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCAxKTtcclxuICAgICAgICAgIGZvciAoaSA9IFtdOyBuID4gbFsrK3NdOykgaS5wdXNoKGVbc10pLCBuIC09IGxbc107XHJcbiAgICAgICAgICByZXR1cm4gMiA9PT0gKGEgPSBlW3NdKS5sZW5ndGggPyB2ZShhWzBdLCBhWzFdLCBuIC8gbFtzXSkgOiB4ZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCBrZShhWzBdLCBhWzFdLCBhWzJdLCBhWzNdLCBuKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXRTdmc6IGZ1bmN0aW9uICh0LCBuKSB7XHJcbiAgICAgICAgICB2YXIgZSwgYSwgaSA9IHkuY2FwdGlvbkxhYmVsLm5ld1RleHQodC50ZXh0LCBuLmJhc2VXaW5kb3cuZG9jdW1lbnQsIG4uc3ZnLCB2ICsgXCItY2FwdGlvbkxhYmVsLVwiICsgdC5faWQsIHQub3V0bGluZUNvbG9yKTtcclxuICAgICAgICAgIFtcImVsbVBvc2l0aW9uXCIsIFwic3R5bGVGaWxsXCIsIFwic3R5bGVTaG93XCIsIFwiZWxtc0FwcGVuZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRbZV0gPSBpW2VdXHJcbiAgICAgICAgICB9KSwgdC5pc1Nob3duID0gITEsIHQuc3R5bGVTaG93LnZpc2liaWxpdHkgPSBcImhpZGRlblwiLCB5LmNhcHRpb25MYWJlbC50ZXh0U3R5bGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG51bGwgIT0gdFtlXSAmJiAoaS5zdHlsZVRleHRbZV0gPSB0W2VdKVxyXG4gICAgICAgICAgfSksIGkuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG4uc3ZnLmFwcGVuZENoaWxkKGUpXHJcbiAgICAgICAgICB9KSwgZSA9IGkuZWxtUG9zaXRpb24uZ2V0QkJveCgpLCB0LndpZHRoID0gZS53aWR0aCwgdC5oZWlnaHQgPSBlLmhlaWdodCwgdC5vdXRsaW5lQ29sb3IgJiYgKGEgPSAxMCA8IChhID0gZS5oZWlnaHQgLyA5KSA/IDEwIDogYSA8IDIgPyAyIDogYSwgaS5zdHlsZVN0cm9rZS5zdHJva2VXaWR0aCA9IGEgKyBcInB4XCIsIGkuc3R5bGVTdHJva2Uuc3Ryb2tlID0gdC5vdXRsaW5lQ29sb3IpLCB0LnN0cm9rZVdpZHRoID0gYSB8fCAwLCBUZSh0LmFwbFN0YXRzLCB5LmNhcHRpb25MYWJlbC5zdGF0cyksIHQudXBkYXRlQ29sb3IobiksIHQucmVmU29ja2V0WFkgPyB0LnVwZGF0ZVNvY2tldFhZKG4pIDogdC51cGRhdGVQYXRoKG4pLCB1ZSAmJiBEZShuLCB7fSksIHQudXBkYXRlU2hvdyhuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuID0gdC5wcm9wcztcclxuICAgICAgICAgIHJldHVybiBlLmNvbG9yIHx8IEllKG4sIFwiY3VyX2xpbmVfY29sb3JcIiwgZS51cGRhdGVDb2xvciksIChlLnJlZlNvY2tldFhZID0gXCJzdGFydExhYmVsXCIgPT09IHQub3B0aW9uTmFtZSB8fCBcImVuZExhYmVsXCIgPT09IHQub3B0aW9uTmFtZSkgPyAoZS5zb2NrZXRJbmRleCA9IFwic3RhcnRMYWJlbFwiID09PSB0Lm9wdGlvbk5hbWUgPyAwIDogMSwgSWUobiwgXCJhcGxfcG9zaXRpb25cIiwgZS51cGRhdGVTb2NrZXRYWSksIGUub2Zmc2V0IHx8IChJZShuLCBcImN1cl9hdHRhY2hfcGx1Z1NpZGVMZW5TRVwiLCBlLnVwZGF0ZVNvY2tldFhZKSwgSWUobiwgXCJjdXJfbGluZV9zdHJva2VXaWR0aFwiLCBlLnVwZGF0ZVNvY2tldFhZKSkpIDogSWUobiwgXCJhcGxfcGF0aFwiLCBlLnVwZGF0ZVBhdGgpLCBJZShuLCBcInN2Z1Nob3dcIiwgZS51cGRhdGVTaG93KSwgdWUgJiYgSWUobiwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIGUuYWRqdXN0RWRnZSksIHkuY2FwdGlvbkxhYmVsLmluaXRTdmcoZSwgbiksICEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XHJcbiAgICAgICAgICBlLmVsbXNBcHBlbmQgJiYgKGUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG4uc3ZnLnJlbW92ZUNoaWxkKGUpXHJcbiAgICAgICAgICB9KSwgZS5lbG1Qb3NpdGlvbiA9IGUuc3R5bGVGaWxsID0gZS5zdHlsZVNob3cgPSBlLmVsbXNBcHBlbmQgPSBudWxsKSwgVGUoZS5jdXJTdGF0cywgeS5jYXB0aW9uTGFiZWwuc3RhdHMpLCBUZShlLmFwbFN0YXRzLCB5LmNhcHRpb25MYWJlbC5zdGF0cyksIGUuY29sb3IgfHwgQ2UobiwgXCJjdXJfbGluZV9jb2xvclwiLCBlLnVwZGF0ZUNvbG9yKSwgZS5yZWZTb2NrZXRYWSA/IChDZShuLCBcImFwbF9wb3NpdGlvblwiLCBlLnVwZGF0ZVNvY2tldFhZKSwgZS5vZmZzZXQgfHwgKENlKG4sIFwiY3VyX2F0dGFjaF9wbHVnU2lkZUxlblNFXCIsIGUudXBkYXRlU29ja2V0WFkpLCBDZShuLCBcImN1cl9saW5lX3N0cm9rZVdpZHRoXCIsIGUudXBkYXRlU29ja2V0WFkpKSkgOiBDZShuLCBcImFwbF9wYXRoXCIsIGUudXBkYXRlUGF0aCksIENlKG4sIFwic3ZnU2hvd1wiLCBlLnVwZGF0ZVNob3cpLCB1ZSAmJiAoQ2UobiwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIGUuYWRqdXN0RWRnZSksIERlKG4sIHt9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZU9wdGlvbjogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuID0gdC5wcm9wcyxcclxuICAgICAgICAgICAgYSA9IHt9O1xyXG4gICAgICAgICAgYVt0Lm9wdGlvbk5hbWVdID0gXCJcIiwgWmUobiwgYSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHQuYm91bmRUYXJnZXRzLmxlbmd0aCAmJiAoY29uc29sZS5lcnJvcihcIkxlYWRlckxpbmVBdHRhY2htZW50IHdhcyBub3QgdW5ib3VuZCBieSByZW1vdmVcIiksIHQuYm91bmRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgeS5jYXB0aW9uTGFiZWwudW5iaW5kKHQsIGUpXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBhdGhMYWJlbDoge1xyXG4gICAgICAgIHR5cGU6IFwibGFiZWxcIixcclxuICAgICAgICBhcmdPcHRpb25zOiBbe1xyXG4gICAgICAgICAgb3B0aW9uTmFtZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgIGNvbG9yOiB7fSxcclxuICAgICAgICAgIHN0YXJ0T2Zmc2V0OiB7fSxcclxuICAgICAgICAgIHBhdGhEYXRhOiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHMsIHQpIHtcclxuICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiB0LnRleHQgJiYgKHMudGV4dCA9IHQudGV4dC50cmltKCkpLCAhIXMudGV4dCAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5jb2xvciAmJiAocy5jb2xvciA9IHQuY29sb3IudHJpbSgpKSwgcy5vdXRsaW5lQ29sb3IgPSBcInN0cmluZ1wiID09IHR5cGVvZiB0Lm91dGxpbmVDb2xvciA/IHQub3V0bGluZUNvbG9yLnRyaW0oKSA6IFwiI2ZmZlwiLCB3KHQubGluZU9mZnNldCkgJiYgKHMubGluZU9mZnNldCA9IHQubGluZU9mZnNldCksIHkuY2FwdGlvbkxhYmVsLnRleHRTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbnVsbCAhPSB0W2VdICYmIChzW2VdID0gdFtlXSlcclxuICAgICAgICAgIH0pLCBzLnVwZGF0ZUNvbG9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgeS5jYXB0aW9uTGFiZWwudXBkYXRlQ29sb3IocywgZSlcclxuICAgICAgICAgIH0sIHMudXBkYXRlUGF0aCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuID0gcy5jdXJTdGF0cyxcclxuICAgICAgICAgICAgICBhID0gcy5hcGxTdGF0cyxcclxuICAgICAgICAgICAgICBpID0gZS5jdXJTdGF0cyxcclxuICAgICAgICAgICAgICBvID0gZS5wYXRoTGlzdC5hbmltVmFsIHx8IGUucGF0aExpc3QuYmFzZVZhbDtcclxuICAgICAgICAgICAgbyAmJiAobi5wYXRoRGF0YSA9IHQgPSB5LnBhdGhMYWJlbC5nZXRPZmZzZXRQYXRoRGF0YShvLCBpLmxpbmVfc3Ryb2tlV2lkdGggLyAyICsgcy5zdHJva2VXaWR0aCAvIDIgKyBzLmhlaWdodCAvIDQsIDEuMjUgKiBzLmhlaWdodCksIE1lKHQsIGEucGF0aERhdGEpICYmIChzLmVsbVBhdGguc2V0UGF0aERhdGEodCksIGEucGF0aERhdGEgPSB0LCBzLmJCb3ggPSBzLmVsbVBvc2l0aW9uLmdldEJCb3goKSwgcy51cGRhdGVTdGFydE9mZnNldChlKSkpXHJcbiAgICAgICAgICB9LCBzLnVwZGF0ZVN0YXJ0T2Zmc2V0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQsIG4sIGEsIGksIG8gPSBzLmN1clN0YXRzLFxyXG4gICAgICAgICAgICAgIGwgPSBzLmFwbFN0YXRzLFxyXG4gICAgICAgICAgICAgIHIgPSBlLmN1clN0YXRzO1xyXG4gICAgICAgICAgICBvLnBhdGhEYXRhICYmICgoMiAhPT0gcy5zZW1JbmRleCB8fCBzLmxpbmVPZmZzZXQpICYmICh0ID0gby5wYXRoRGF0YS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICB2YXIgbiwgYSA9IHQudmFsdWVzO1xyXG4gICAgICAgICAgICAgIHN3aXRjaCAodC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgIGkgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IGFbMF0sXHJcbiAgICAgICAgICAgICAgICAgIHk6IGFbMV1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgbiA9IHtcclxuICAgICAgICAgICAgICAgICAgeDogYVswXSxcclxuICAgICAgICAgICAgICAgICAgeTogYVsxXVxyXG4gICAgICAgICAgICAgICAgfSwgaSAmJiAoZSArPSBfZShpLCBuKSksIGkgPSBuO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgIG4gPSB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IGFbNF0sXHJcbiAgICAgICAgICAgICAgICAgIHk6IGFbNV1cclxuICAgICAgICAgICAgICAgIH0sIGkgJiYgKGUgKz0gYmUoaSwge1xyXG4gICAgICAgICAgICAgICAgICB4OiBhWzBdLFxyXG4gICAgICAgICAgICAgICAgICB5OiBhWzFdXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IGFbMl0sXHJcbiAgICAgICAgICAgICAgICAgIHk6IGFbM11cclxuICAgICAgICAgICAgICAgIH0sIG4pKSwgaSA9IG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICAgICAgfSwgMCksIGEgPSAwID09PSBzLnNlbUluZGV4ID8gMCA6IDEgPT09IHMuc2VtSW5kZXggPyB0IDogdCAvIDIsIDIgIT09IHMuc2VtSW5kZXggJiYgKG4gPSBNYXRoLm1heChyLmF0dGFjaF9wbHVnQmFja0xlblNFW3Muc2VtSW5kZXhdIHx8IDAsIHIubGluZV9zdHJva2VXaWR0aCAvIDIpICsgcy5zdHJva2VXaWR0aCAvIDIgKyBzLmhlaWdodCAvIDQsIGEgPSAoYSArPSAwID09PSBzLnNlbUluZGV4ID8gbiA6IC1uKSA8IDAgPyAwIDogdCA8IGEgPyB0IDogYSksIHMubGluZU9mZnNldCAmJiAoYSA9IChhICs9IHMubGluZU9mZnNldCkgPCAwID8gMCA6IHQgPCBhID8gdCA6IGEpLCBvLnN0YXJ0T2Zmc2V0ID0gYSwgV2UocywgbCwgXCJzdGFydE9mZnNldFwiLCBhKSAmJiAocy5lbG1PZmZzZXQuc3RhcnRPZmZzZXQuYmFzZVZhbC52YWx1ZSA9IGEpKSlcclxuICAgICAgICAgIH0sIHMudXBkYXRlU2hvdyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHkuY2FwdGlvbkxhYmVsLnVwZGF0ZVNob3cocywgZSlcclxuICAgICAgICAgIH0sIHVlICYmIChzLmFkanVzdEVkZ2UgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICBzLmJCb3ggJiYgeS5jYXB0aW9uTGFiZWwuYWRqdXN0RWRnZSh0LCBzLmJCb3gsIHMuc3Ryb2tlV2lkdGggLyAyKVxyXG4gICAgICAgICAgfSksICEwKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0T2Zmc2V0UGF0aERhdGE6IGZ1bmN0aW9uIChlLCB4LCBuKSB7XHJcbiAgICAgICAgICB2YXIgYiwgYSwgaSA9IDMsXHJcbiAgICAgICAgICAgIGsgPSBbXTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiB3KGUsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGUueCAtIHQueCkgPCBpICYmIE1hdGguYWJzKGUueSAtIHQueSkgPCBpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuLCBhLCBpLCBvLCBsLCByLCBzLCB1LCBoLCBwLCBjLCBkLCBmLCB5LCBTLCBtLCBnLCBfLCB2LCBFO1xyXG4gICAgICAgICAgICAyID09PSBlLmxlbmd0aCA/IChnID0gZVswXSwgXyA9IGVbMV0sIHYgPSB4LCBFID0gTWF0aC5hdGFuMihnLnkgLSBfLnksIF8ueCAtIGcueCkgKyAuNSAqIE1hdGguUEksIHQgPSBbe1xyXG4gICAgICAgICAgICAgIHg6IGcueCArIE1hdGguY29zKEUpICogdixcclxuICAgICAgICAgICAgICB5OiBnLnkgKyBNYXRoLnNpbihFKSAqIHYgKiAtMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgeDogXy54ICsgTWF0aC5jb3MoRSkgKiB2LFxyXG4gICAgICAgICAgICAgIHk6IF8ueSArIE1hdGguc2luKEUpICogdiAqIC0xXHJcbiAgICAgICAgICAgIH1dLCBiID8gKGEgPSBiLnBvaW50cywgMCA8PSAoaSA9IE1hdGguYXRhbjIoYVsxXS55IC0gYVswXS55LCBhWzBdLnggLSBhWzFdLngpIC0gTWF0aC5hdGFuMihlWzBdLnkgLSBlWzFdLnksIGVbMV0ueCAtIGVbMF0ueCkpICYmIGkgPD0gTWF0aC5QSSA/IG4gPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgcG9pbnRzOiB0LFxyXG4gICAgICAgICAgICAgIGluc2lkZTogITBcclxuICAgICAgICAgICAgfSA6IChsID0gRWUoYVswXSwgYVsxXSwgeCksIG8gPSBFZSh0WzFdLCB0WzBdLCB4KSwgcyA9IGFbMF0sIGggPSBvLCBwID0gdFsxXSwgYyA9ICh1ID0gbCkueCAtIHMueCwgZCA9IHUueSAtIHMueSwgZiA9IHAueCAtIGgueCwgeSA9IHAueSAtIGgueSwgUyA9ICgtZCAqIChzLnggLSBoLngpICsgYyAqIChzLnkgLSBoLnkpKSAvICgtZiAqIGQgKyBjICogeSksIG0gPSAoZiAqIChzLnkgLSBoLnkpIC0geSAqIChzLnggLSBoLngpKSAvICgtZiAqIGQgKyBjICogeSksIChyID0gMCA8PSBTICYmIFMgPD0gMSAmJiAwIDw9IG0gJiYgbSA8PSAxID8ge1xyXG4gICAgICAgICAgICAgIHg6IHMueCArIG0gKiBjLFxyXG4gICAgICAgICAgICAgIHk6IHMueSArIG0gKiBkXHJcbiAgICAgICAgICAgIH0gOiBudWxsKSA/IG4gPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgcG9pbnRzOiBbYVsxXSA9IHIsIHRbMV1dXHJcbiAgICAgICAgICAgIH0gOiAoYVsxXSA9IHcobywgbCkgPyBvIDogbCwgbiA9IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgICAgICAgICBwb2ludHM6IFtvLCB0WzFdXVxyXG4gICAgICAgICAgICB9KSwgYi5sZW4gPSBfZShhWzBdLCBhWzFdKSkpIDogbiA9IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgICAgICAgICBwb2ludHM6IHRcclxuICAgICAgICAgICAgfSwgbi5sZW4gPSBfZShuLnBvaW50c1swXSwgbi5wb2ludHNbMV0pLCBrLnB1c2goYiA9IG4pKSA6IChrLnB1c2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiY3ViaWNcIixcclxuICAgICAgICAgICAgICBwb2ludHM6IGZ1bmN0aW9uIChlLCB0LCBuLCBhLCBpLCBvKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBsLCByLCBzID0gYmUoZSwgdCwgbiwgYSkgLyBvLCB1ID0gMSAvIChvIDwgaSA/IHMgKiAoaSAvIG8pIDogcyksIGggPSBbXSwgcCA9IDA7IHIgPSAoOTAgLSAobCA9IHhlKGUsIHQsIG4sIGEsIHApKS5hbmdsZSkgKiAoTWF0aC5QSSAvIDE4MCksIGgucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogbC54ICsgTWF0aC5jb3MocikgKiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGwueSArIE1hdGguc2luKHIpICogaSAqIC0xXHJcbiAgICAgICAgICAgICAgICAgIH0pLCAhKDEgPD0gcCk7KSAxIDwgKHAgKz0gdSkgJiYgKHAgPSAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgfShlWzBdLCBlWzFdLCBlWzJdLCBlWzNdLCB4LCAxNilcclxuICAgICAgICAgICAgfSksIGIgPSBudWxsKVxyXG4gICAgICAgICAgfSksIGIgPSBudWxsLCBrLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQ7XHJcbiAgICAgICAgICAgIFwibGluZVwiID09PSBlLnR5cGUgPyAoZS5pbnNpZGUgJiYgKGIubGVuID4geCA/ICgodCA9IGIucG9pbnRzKVsxXSA9IEVlKHRbMF0sIHRbMV0sIC14KSwgYi5sZW4gPSBfZSh0WzBdLCB0WzFdKSkgOiAoYi5wb2ludHMgPSBudWxsLCBiLmxlbiA9IDApLCBlLmxlbiA+IHggKyBuID8gKCh0ID0gZS5wb2ludHMpWzBdID0gRWUodFsxXSwgdFswXSwgLSh4ICsgbikpLCBlLmxlbiA9IF9lKHRbMF0sIHRbMV0pKSA6IChlLnBvaW50cyA9IG51bGwsIGUubGVuID0gMCkpLCBiID0gZSkgOiBiID0gbnVsbFxyXG4gICAgICAgICAgfSksIGsucmVkdWNlKGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gZS5wb2ludHM7XHJcbiAgICAgICAgICAgIHJldHVybiBuICYmIChhICYmIHcoblswXSwgYSkgfHwgdC5wdXNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgICB2YWx1ZXM6IFtuWzBdLngsIG5bMF0ueV1cclxuICAgICAgICAgICAgfSksIFwibGluZVwiID09PSBlLnR5cGUgPyB0LnB1c2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlczogW25bMV0ueCwgblsxXS55XVxyXG4gICAgICAgICAgICB9KSA6IChuLnNoaWZ0KCksIG4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2UueCwgZS55XVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pKSwgYSA9IG5bbi5sZW5ndGggLSAxXSksIHRcclxuICAgICAgICAgIH0sIFtdKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV3VGV4dDogZnVuY3Rpb24gKGUsIHQsIG4sIGEpIHtcclxuICAgICAgICAgIHZhciBpLCBvLCBsLCByLCBzLCB1LCBoLCBwLCBjLCBkO1xyXG4gICAgICAgICAgcmV0dXJuIChyID0gKGwgPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcImRlZnNcIikpLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGIsIFwicGF0aFwiKSkpLmlkID0gaSA9IG4gKyBcIi1wYXRoXCIsICh1ID0gKHMgPSB0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInRleHRcIikpLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudE5TKGIsIFwidGV4dFBhdGhcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIGksIHUuc3RhcnRPZmZzZXQuYmFzZVZhbC5uZXdWYWx1ZVNwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWCwgMCksIHUudGV4dENvbnRlbnQgPSBlLCBcImJvb2xlYW5cIiAhPSB0eXBlb2YgZiAmJiAoZiA9IFwicGFpbnRPcmRlclwiIGluIHMuc3R5bGUpLCBhICYmICFmID8gKHMuaWQgPSBvID0gbiArIFwiLXRleHRcIiwgbC5hcHBlbmRDaGlsZChzKSwgKGMgPSAoaCA9IHQuY3JlYXRlRWxlbWVudE5TKGIsIFwiZ1wiKSkuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50TlMoYiwgXCJ1c2VcIikpKS5ocmVmLmJhc2VWYWwgPSBcIiNcIiArIG8sIChwID0gaC5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnROUyhiLCBcInVzZVwiKSkpLmhyZWYuYmFzZVZhbCA9IFwiI1wiICsgbywgKGQgPSBjLnN0eWxlKS5zdHJva2VMaW5lam9pbiA9IFwicm91bmRcIiwge1xyXG4gICAgICAgICAgICBlbG1Qb3NpdGlvbjogcyxcclxuICAgICAgICAgICAgZWxtUGF0aDogcixcclxuICAgICAgICAgICAgZWxtT2Zmc2V0OiB1LFxyXG4gICAgICAgICAgICBzdHlsZVRleHQ6IHMuc3R5bGUsXHJcbiAgICAgICAgICAgIHN0eWxlRmlsbDogcC5zdHlsZSxcclxuICAgICAgICAgICAgc3R5bGVTdHJva2U6IGQsXHJcbiAgICAgICAgICAgIHN0eWxlU2hvdzogaC5zdHlsZSxcclxuICAgICAgICAgICAgZWxtc0FwcGVuZDogW2wsIGhdXHJcbiAgICAgICAgICB9KSA6IChkID0gcy5zdHlsZSwgYSAmJiAoZC5zdHJva2VMaW5lam9pbiA9IFwicm91bmRcIiwgZC5wYWludE9yZGVyID0gXCJzdHJva2VcIiksIHtcclxuICAgICAgICAgICAgZWxtUG9zaXRpb246IHMsXHJcbiAgICAgICAgICAgIGVsbVBhdGg6IHIsXHJcbiAgICAgICAgICAgIGVsbU9mZnNldDogdSxcclxuICAgICAgICAgICAgc3R5bGVUZXh0OiBkLFxyXG4gICAgICAgICAgICBzdHlsZUZpbGw6IGQsXHJcbiAgICAgICAgICAgIHN0eWxlU3Ryb2tlOiBhID8gZCA6IG51bGwsXHJcbiAgICAgICAgICAgIHN0eWxlU2hvdzogZCxcclxuICAgICAgICAgICAgZWxtc0FwcGVuZDogW2wsIHNdXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdFN2ZzogZnVuY3Rpb24gKHQsIG4pIHtcclxuICAgICAgICAgIHZhciBlLCBhLCBpID0geS5wYXRoTGFiZWwubmV3VGV4dCh0LnRleHQsIG4uYmFzZVdpbmRvdy5kb2N1bWVudCwgdiArIFwiLXBhdGhMYWJlbC1cIiArIHQuX2lkLCB0Lm91dGxpbmVDb2xvcik7XHJcbiAgICAgICAgICBbXCJlbG1Qb3NpdGlvblwiLCBcImVsbVBhdGhcIiwgXCJlbG1PZmZzZXRcIiwgXCJzdHlsZUZpbGxcIiwgXCJzdHlsZVNob3dcIiwgXCJlbG1zQXBwZW5kXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdFtlXSA9IGlbZV1cclxuICAgICAgICAgIH0pLCB0LmlzU2hvd24gPSAhMSwgdC5zdHlsZVNob3cudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsIHkuY2FwdGlvbkxhYmVsLnRleHRTdHlsZVByb3BzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbnVsbCAhPSB0W2VdICYmIChpLnN0eWxlVGV4dFtlXSA9IHRbZV0pXHJcbiAgICAgICAgICB9KSwgaS5lbG1zQXBwZW5kLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbi5zdmcuYXBwZW5kQ2hpbGQoZSlcclxuICAgICAgICAgIH0pLCBpLmVsbVBhdGguc2V0UGF0aERhdGEoW3tcclxuICAgICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogWzAsIDEwMF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJoXCIsXHJcbiAgICAgICAgICAgIHZhbHVlczogWzEwMF1cclxuICAgICAgICAgIH1dKSwgZSA9IGkuZWxtUG9zaXRpb24uZ2V0QkJveCgpLCBpLnN0eWxlVGV4dC50ZXh0QW5jaG9yID0gW1wic3RhcnRcIiwgXCJlbmRcIiwgXCJtaWRkbGVcIl1bdC5zZW1JbmRleF0sIDIgIT09IHQuc2VtSW5kZXggfHwgdC5saW5lT2Zmc2V0IHx8IGkuZWxtT2Zmc2V0LnN0YXJ0T2Zmc2V0LmJhc2VWYWwubmV3VmFsdWVTcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUEVSQ0VOVEFHRSwgNTApLCB0LmhlaWdodCA9IGUuaGVpZ2h0LCB0Lm91dGxpbmVDb2xvciAmJiAoYSA9IDEwIDwgKGEgPSBlLmhlaWdodCAvIDkpID8gMTAgOiBhIDwgMiA/IDIgOiBhLCBpLnN0eWxlU3Ryb2tlLnN0cm9rZVdpZHRoID0gYSArIFwicHhcIiwgaS5zdHlsZVN0cm9rZS5zdHJva2UgPSB0Lm91dGxpbmVDb2xvciksIHQuc3Ryb2tlV2lkdGggPSBhIHx8IDAsIFRlKHQuYXBsU3RhdHMsIHkucGF0aExhYmVsLnN0YXRzKSwgdC51cGRhdGVDb2xvcihuKSwgdC51cGRhdGVQYXRoKG4pLCB0LnVwZGF0ZVN0YXJ0T2Zmc2V0KG4pLCB1ZSAmJiBEZShuLCB7fSksIHQudXBkYXRlU2hvdyhuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmluZDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIHZhciBuID0gdC5wcm9wcztcclxuICAgICAgICAgIHJldHVybiBlLmNvbG9yIHx8IEllKG4sIFwiY3VyX2xpbmVfY29sb3JcIiwgZS51cGRhdGVDb2xvciksIEllKG4sIFwiY3VyX2xpbmVfc3Ryb2tlV2lkdGhcIiwgZS51cGRhdGVQYXRoKSwgSWUobiwgXCJhcGxfcGF0aFwiLCBlLnVwZGF0ZVBhdGgpLCBlLnNlbUluZGV4ID0gXCJzdGFydExhYmVsXCIgPT09IHQub3B0aW9uTmFtZSA/IDAgOiBcImVuZExhYmVsXCIgPT09IHQub3B0aW9uTmFtZSA/IDEgOiAyLCAoMiAhPT0gZS5zZW1JbmRleCB8fCBlLmxpbmVPZmZzZXQpICYmIEllKG4sIFwiY3VyX2F0dGFjaF9wbHVnQmFja0xlblNFXCIsIGUudXBkYXRlU3RhcnRPZmZzZXQpLCBJZShuLCBcInN2Z1Nob3dcIiwgZS51cGRhdGVTaG93KSwgdWUgJiYgSWUobiwgXCJuZXdfZWRnZTR2aWV3Qm94XCIsIGUuYWRqdXN0RWRnZSksIHkucGF0aExhYmVsLmluaXRTdmcoZSwgbiksICEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgbiA9IHQucHJvcHM7XHJcbiAgICAgICAgICBlLmVsbXNBcHBlbmQgJiYgKGUuZWxtc0FwcGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG4uc3ZnLnJlbW92ZUNoaWxkKGUpXHJcbiAgICAgICAgICB9KSwgZS5lbG1Qb3NpdGlvbiA9IGUuZWxtUGF0aCA9IGUuZWxtT2Zmc2V0ID0gZS5zdHlsZUZpbGwgPSBlLnN0eWxlU2hvdyA9IGUuZWxtc0FwcGVuZCA9IG51bGwpLCBUZShlLmN1clN0YXRzLCB5LnBhdGhMYWJlbC5zdGF0cyksIFRlKGUuYXBsU3RhdHMsIHkucGF0aExhYmVsLnN0YXRzKSwgZS5jb2xvciB8fCBDZShuLCBcImN1cl9saW5lX2NvbG9yXCIsIGUudXBkYXRlQ29sb3IpLCBDZShuLCBcImN1cl9saW5lX3N0cm9rZVdpZHRoXCIsIGUudXBkYXRlUGF0aCksIENlKG4sIFwiYXBsX3BhdGhcIiwgZS51cGRhdGVQYXRoKSwgKDIgIT09IGUuc2VtSW5kZXggfHwgZS5saW5lT2Zmc2V0KSAmJiBDZShuLCBcImN1cl9hdHRhY2hfcGx1Z0JhY2tMZW5TRVwiLCBlLnVwZGF0ZVN0YXJ0T2Zmc2V0KSwgQ2UobiwgXCJzdmdTaG93XCIsIGUudXBkYXRlU2hvdyksIHVlICYmIChDZShuLCBcIm5ld19lZGdlNHZpZXdCb3hcIiwgZS5hZGp1c3RFZGdlKSwgRGUobiwge30pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlT3B0aW9uOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIG4gPSB0LnByb3BzLFxyXG4gICAgICAgICAgICBhID0ge307XHJcbiAgICAgICAgICBhW3Qub3B0aW9uTmFtZV0gPSBcIlwiLCBaZShuLCBhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdC5ib3VuZFRhcmdldHMubGVuZ3RoICYmIChjb25zb2xlLmVycm9yKFwiTGVhZGVyTGluZUF0dGFjaG1lbnQgd2FzIG5vdCB1bmJvdW5kIGJ5IHJlbW92ZVwiKSwgdC5ib3VuZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB5LnBhdGhMYWJlbC51bmJpbmQodCwgZSlcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgT2JqZWN0LmtleXMoeSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICBZZVtlXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFMoeVtlXSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuICAgICAgfVxyXG4gICAgfSksIFllLnBvc2l0aW9uQnlXaW5kb3dSZXNpemUgPSAhMCwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgTy5hZGQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBZZS5wb3NpdGlvbkJ5V2luZG93UmVzaXplICYmIE9iamVjdC5rZXlzKEspLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBEZShLW2VdLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogITBcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSksICExKSwgWWVcclxufSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNldExpbmU6IGZ1bmN0aW9uIChzdGFydCwgZW5kLCBjb25maWcgPSB7fSkge1xyXG4gICAgcmV0dXJuIG5ldyBMZWFkZXJMaW5lKHN0YXJ0LCBlbmQsIGNvbmZpZylcclxuICB9LFxyXG4gIG9iajogTGVhZGVyTGluZVxyXG59XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZjAyNDJjMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YTU2NDUwMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I1OWJlODcmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMDI0MmMwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGYwMjQyYzAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZGYwMjQyYzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdkZjAyNDJjMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJ2RmMDI0MmMwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGYwMjQyYzBcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignZGYwMjQyYzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTY0NTAwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmE1NjQ1MDAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YTU2NDUwMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNmE1NjQ1MDAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTY0NTAwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzZhNTY0NTAwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMjYxNGJkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmMyNjE0YmQmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZjMjYxNGJkXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmMyNjE0YmQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc2YzI2MTRiZCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzI2MTRiZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YzI2MTRiZCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjU5YmU4N1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiNTliZTg3Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3YjU5YmU4N1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzdiNTliZTg3JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnN2I1OWJlODcnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignN2I1OWJlODcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NWEwMzNiYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiODVhMDMzYmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzg1YTAzM2JhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignODVhMDMzYmEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI3ZDk0MmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjdkOTQyYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzMjdkOTQyYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMzI3ZDk0MmEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZHVsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI3ZDk0MmFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMzI3ZDk0MmEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJzY2hlbWVfY29kZSIsIlN0cmluZyIsImNvbnRleHQiLCJPYmplY3QiLCJjb250ZXh0X3R5cGUiLCJtb3VzZV94IiwiTnVtYmVyIiwibW91c2VfeSIsImRhdGEiLCJpdGVtcyIsIngiLCJ5Iiwid2F0Y2giLCJnZXRNZW51SXRlbXMiLCJjb21wdXRlZCIsIm1vZHVsZVN0eWxlIiwibGVmdCIsImNvbmNhdCIsInRvcCIsIm1ldGhvZHMiLCJjbG9zZSIsIiRlbWl0IiwiX3RoaXMiLCJLcml0aSIsImFwaSIsInVybCIsInR5cGUiLCJ1dWlkIiwidGhlbiIsInJlc3BvbnNlIiwiY2xpY2tJdGVtIiwiaXRlbSIsImNvZGUiLCJfIiwiY2xvbmVEZWVwIiwiTW9kdWxlIiwiY29tcG9uZW50cyIsIm5vZGUiLCJwb2ludCIsIkNvbnRyb2xQYW5lbCIsIm5vZGVfbWVudSIsImFjdGl2ZV9tZXRob2QiLCJidXR0b25zIiwiaWNvbiIsImNsaWNrIiwic2V0RGF0YSIsIl90aGlzMiIsImdldERhdGEiLCJtZXRob2QiLCJ2YXJpYWJsZSIsIl90aGlzMyIsInRyYW5zZm9ybU1ldGhvZCIsIl90aGlzNCIsInZhbHVlcyIsImdldENvbnRlbnQiLCJwcmVmaXgiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiTGVhZGVyTGluZSIsIk5vZGUiLCJOb2RlTW9kYWwiLCJDb250ZXh0TWVudSIsImFjdGl2ZV9zY2hlbWVfY29kZSIsInNjaGVtZSIsImNvbnRleHRfbWVudV9vYmplY3QiLCJ3b3Jrc3BhY2Vfd2lkdGgiLCJ3b3Jrc3BhY2VfaGVpZ2h0IiwiaG9sZF94X2ZhY3RvciIsImhvbGRfeV9mYWN0b3IiLCJ3b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkIiwicGxhdG9feCIsInBsYXRvX3kiLCJwbGF0b194X3N0YXJ0IiwicGxhdG9feV9zdGFydCIsImJvZHlfeF9mYWN0b3IiLCJib2R5X3lfZmFjdG9yIiwiYWN0aXZlX25vZGUiLCJsYXN0X2hvbGRfeCIsImxhc3RfaG9sZF95IiwibGluZXMiLCJsaW5lc19vYmplY3RzIiwibm9kZXMiLCJfdGhpcyRzY2hlbWUiLCJtb3VudGVkIiwiZGVmaW5lV29ya3NwYWNlU2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRTY2hlbWUiLCJqUXVlcnkiLCJjc3MiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiYWRkTGlua3MiLCJiZWZvcmVVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiRuZXh0VGljayIsInBhcmVudEVsZW1lbnQiLCIkZWwiLCJwYXJlbnROb2RlIiwiZ2xvYmFsIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJmbiIsInNhbml0aXplTm9kZXMiLCJtYXAiLCJzZXRTY2hlbWUiLCJzY2hlbWVfZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtb3ZlUGxhdG8iLCJob2xkX3BsYXRvIiwiZHJvcFBsYXRvIiwibW91c2Vtb3ZlIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwibW92ZU5vZGUiLCJjb3JyZWN0TGluZXMiLCJub2RlSG9sZCIsImJ1dHRvbiIsInNhdmVIb2xkUG9zaXRpb24iLCJmb2N1cyIsIm5vZGVEcm9wIiwid29ya3NwYWNlQ29udGV4dE1lbnUiLCJvcGVuQ29udGV4dE1lbnUiLCJjbG9zZUNvbnRleHRNZW51IiwiY2xpY2tDb250ZXh0TWVudUl0ZW0iLCJwdXNoIiwidGVzdFBsYXRvIiwiZWwiLCIkcmVmcyIsInN0eWxlIiwiY3JlYXRlVVVJRCIsIl90aGlzNSIsImxpbmtzIiwibGluayIsImFkZExpbmsiLCJzYXZlIiwiZWxlbWVudF9hIiwiZWxlbWVudF9iIiwib3B0aW9ucyIsInN0YXJ0UGx1ZyIsImVuZFBsdWciLCJsaW5lX29iamVjdCIsInNldExpbmUiLCJvYmplY3QiLCJwb3NpdGlvbiIsImNyZWF0ZUxpbmsiLCJXb3Jrc3BhY2UiLCJzdHlsZV9tb2R1bGUiLCJtb2R1bGUiLCJzdHlsZV9tb2R1bGVfdGl0bGUiLCJtb2R1bGVfdGl0bGUiLCIkZGF0YSIsImxlbmd0aCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCIkb3B0aW9ucyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJvbkNsaWNrIiwiJGV2ZW50IiwiX25vcm1hbGl6ZUNsYXNzIiwiX3RvRGlzcGxheVN0cmluZyIsInRleHQiLCIkcHJvcHMiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X01vZHVsZSIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfY2FjaGUiLCJfY3R4IiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzciLCJhY3RpdmUiLCJ0aXRsZSIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2NvbXBvbmVudF9Gb3JtRml0dGVyIiwiJHNsb3RzIiwiX3JlbmRlclNsb3QiLCJfaG9pc3RlZF8xMCIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfQ29udHJvbFBhbmVsIiwib25Nb3VzZWRvd24iLCJfd2l0aE1vZGlmaWVycyIsImFwcGx5IiwiYXJndW1lbnRzIiwib25Nb3VzZXVwIiwib25Nb3VzZW1vdmUiLCJvbkRibGNsaWNrIiwicmVmIiwiX2NvbXBvbmVudF9Ob2RlIiwiaWQiLCJvbkNvbnRleHRtZW51IiwiX2NvbXBvbmVudF9Ob2RlTW9kYWwiLCJvbkNsb3NlIiwib25VcGRhdGUiLCJfY29tcG9uZW50X0NvbnRleHRNZW51Iiwib25DbGlja19pdGVtIiwiX2NvbXBvbmVudF9Xb3Jrc3BhY2UiLCJzZXR0aW5ncyJdLCJzb3VyY2VSb290IjoiIn0=