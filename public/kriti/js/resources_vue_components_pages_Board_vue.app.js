"use strict";
(self["webpackChunkkriti"] = self["webpackChunkkriti"] || []).push([["resources_vue_components_pages_Board_vue"],{

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
/* harmony import */ var _ColorPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorPalette */ "./resources/vue/components/interface/ColorPalette.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Workspace",
  components: {
    Node: _Node__WEBPACK_IMPORTED_MODULE_0__["default"],
    // Компонент реализующий ноду
    NodeModal: _NodeModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    // Компонент рабочее окно нода
    ContextMenu: _ContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"],
    // Контекстное меню
    ColorPalette: _ColorPalette__WEBPACK_IMPORTED_MODULE_3__["default"]
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
  var _component_ColorPalette = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ColorPalette");
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
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPalette), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.nodes, function (node) {
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
___CSS_LOADER_EXPORT___.push([module.id, ".kriti-context {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.1607843137);\n  padding: 18px 16px;\n  border-radius: 4px;\n}\n.kriti-context__item {\n  background: #319431;\n  color: #26551b;\n  border-radius: 4px;\n  margin: 5px 5px;\n  padding: 10px 21px;\n  cursor: pointer;\n  transition: 200ms;\n}\n.kriti-context__item i {\n  margin-right: 10px;\n}\n.kriti-context__item:hover {\n  background: #90ce82;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/ContextMenu.vue","webpack://./resources/scss/kriti.palette.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,6CAAA;EACA,kBAAA;EACA,kBAAA;AADJ;AAKI;EACI,mBCVG;EDWH,cCVA;EDWA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;AAHR;AAIQ;EACI,kBAAA;AAFZ;AAIQ;EACI,mBAAA;AAFZ","sourcesContent":["\n@import '../../../scss/kriti.palette.scss';\n.kriti-context {\n    position: absolute;\n    background: #ffffff29;\n    padding: 18px 16px;\n    border-radius: 4px;\n    &__items {\n\n    }\n    &__item {\n        background: $bg-light;\n        color: $f-def;\n        border-radius: 4px;\n        margin: 5px 5px;\n        padding: 10px 21px;\n        cursor: pointer;\n        transition: 200ms;\n        i {\n            margin-right: 10px;\n        }\n        &:hover {\n            background: #90ce82;\n        }\n    }\n}\n\n","$bg-dark: #5b7669;\n$bg-light: #319431;\n$f-def: #26551b;\n$b-def: #72bd8f;\n$f-dark: #1e241e;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".workspace {\n  padding: 10px;\n  background: #5b7669;\n  color: #1e241e;\n}\n.workspace__plato {\n  width: 0;\n  height: 0;\n  position: relative;\n}\n.workspace .kriti-preloader {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4588235294);\n  transition: 300ms;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 100001;\n}", "",{"version":3,"sources":["webpack://./resources/vue/components/interface/Workspace.vue","webpack://./resources/scss/kriti.palette.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,mBCJM;EDKN,cCDK;ADAT;AAGI;EACI,QAAA;EACA,SAAA;EACA,kBAAA;AADR;AAII;EACI,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,6CAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;AAFR","sourcesContent":["\n@import '../../../scss/kriti.palette.scss';\n.workspace {\n    padding: 10px;\n    background: $bg-dark;\n    color: $f-dark;\n\n    &__plato {\n        width: 0;\n        height: 0;\n        position: relative;\n    }\n\n    .kriti-preloader {\n        position: fixed;\n        display: flex;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #ffffff75;\n        transition: 300ms;\n        justify-content: center;\n        align-items: center;\n        user-select: none;\n        z-index: 100001;\n    }\n}\n","$bg-dark: #5b7669;\n$bg-light: #319431;\n$f-def: #26551b;\n$b-def: #72bd8f;\n$f-dark: #1e241e;\n"],"sourceRoot":""}]);
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

/***/ "./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss":
/*!**********************************************************************************************************!*\
  !*** ./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPalette_vue_vue_type_style_index_0_id_44c8a816_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/vue/components/interface/ColorPalette.vue?vue&type=style&index=0&id=44c8a816&lang=scss");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3Z1ZV9jb21wb25lbnRzX3BhZ2VzX0JvYXJkX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF5QjhEO0FBRTlELGlFQUFlO0VBQ1hDLElBQUksRUFBRSxjQUFjO0VBQ3BCQyxVQUFVLEVBQUU7SUFBRUYsZUFBYyxFQUFkQSwwRUFBZUE7RUFBQyxDQUFDO0VBQy9CRyxJQUFJLFdBQUFBLEtBQUEsRUFBRztJQUNILE9BQU87TUFDSEMsTUFBTSxFQUFFLEVBQUU7TUFDVkMsWUFBWSxFQUFFO0lBQ2xCO0VBQ0osQ0FBQztFQUNEQyxPQUFPLFdBQUFBLFFBQUEsRUFBRztJQUNOLElBQUksQ0FBQ0MsVUFBVSxDQUFDO0VBQ3BCLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ0xDLFdBQVcsV0FBQUEsWUFBQSxFQUFHO01BQ1YsSUFBSSxDQUFDTCxNQUFNLENBQUNNLElBQUksQ0FBQztRQUNiVCxJQUFJLEVBQUUsWUFBWTtRQUNsQlUsSUFBSSxFQUFFO01BQ1YsQ0FBQztJQUNMLENBQUM7SUFDREosVUFBVSxXQUFBQSxXQUFBLEVBQUc7TUFBQSxJQUFBSyxLQUFBO01BQ1RDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO1FBQ05DLEdBQUcsRUFBRSw2QkFBNkI7UUFDbENDLElBQUksRUFBRSxTQUFBQSxLQUFDQyxRQUFRLEVBQUs7VUFDaEJMLEtBQUksQ0FBQ1IsTUFBSyxHQUFJYSxRQUFRLENBQUNiLE1BQUs7UUFDaEM7TUFDSixDQUFDO0lBQ0wsQ0FBQztJQUNEYyxVQUFVLFdBQUFBLFdBQUEsRUFBRztNQUNUTCxLQUFLLENBQUNDLEdBQUcsQ0FBQztRQUNOQyxHQUFHLEVBQUUsNkJBQTZCO1FBQ2xDWixJQUFJLEVBQUU7VUFDRkMsTUFBTSxFQUFFLElBQUksQ0FBQ0E7UUFDakIsQ0FBQztRQUNEWSxJQUFJLEVBQUUsU0FBQUEsS0FBQ0MsUUFBUSxFQUFLO1VBQ2hCLElBQUlBLFFBQVEsQ0FBQ0UsT0FBTyxFQUFFO1lBQ2xCQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztVQUNwQjtRQUNKO01BQ0osQ0FBQztJQUNMLENBQUM7SUFDREMsaUJBQWlCLFdBQUFBLGtCQUFDQyxLQUFLLEVBQUU7TUFDckIsSUFBSSxDQUFDbEIsWUFBVyxHQUFJLElBQUc7TUFDdkIsSUFBSSxDQUFDQSxZQUFXLEdBQUlrQixLQUFJO0lBQzVCLENBQUM7SUFDREMsWUFBWSxXQUFBQSxhQUFBLEVBQUc7TUFDWCxJQUFJLENBQUNuQixZQUFXLEdBQUksSUFBRztJQUMzQjtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMvREQsaUVBQWU7RUFDWEosSUFBSSxFQUFFLGFBQWE7RUFDbkJ3QixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0VBQzlCQyxLQUFLLEVBQUU7SUFDSEMsV0FBVyxFQUFFQyxNQUFNO0lBQ25CQyxPQUFPLEVBQUVDLE1BQU07SUFDZkMsWUFBWSxFQUFFSCxNQUFNO0lBQ3BCSSxPQUFPLEVBQUVDLE1BQU07SUFDZkMsT0FBTyxFQUFFRDtFQUNiLENBQUM7RUFDRDlCLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIZ0MsS0FBSyxFQUFFLEVBQUU7TUFDVEMsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFFO0lBQ1A7RUFDSixDQUFDO0VBQ0RDLEtBQUssRUFBRTtJQUNIVCxPQUFPLFdBQUFBLFFBQUNBLFFBQU8sRUFBRTtNQUNiLElBQUlBLFFBQU8sRUFBRTtRQUNULElBQUksQ0FBQ1UsWUFBWSxDQUFDO1FBQ2xCLElBQUksQ0FBQ0gsQ0FBQSxHQUFJLElBQUksQ0FBQ0osT0FBTTtRQUNwQixJQUFJLENBQUNLLENBQUEsR0FBSSxJQUFJLENBQUNILE9BQU07TUFDeEI7SUFDSjtFQUNKLENBQUM7RUFDRE0sUUFBUSxFQUFFO0lBQ05DLFdBQVcsV0FBQUEsWUFBQSxFQUFHO01BQ1YsT0FBTztRQUNIQyxJQUFJLEtBQUFDLE1BQUEsQ0FBSyxJQUFJLENBQUNQLENBQUMsT0FBSTtRQUNuQlEsR0FBRyxLQUFBRCxNQUFBLENBQUssSUFBSSxDQUFDTixDQUFDO01BQ2xCO0lBQ0o7RUFDSixDQUFDO0VBQ0Q3QixPQUFPLEVBQUU7SUFDTHFDLEtBQUssV0FBQUEsTUFBQSxFQUFHO01BQ0osSUFBSSxDQUFDVixLQUFJLEdBQUksRUFBQztNQUNkLElBQUksQ0FBQ1csS0FBSyxDQUFDLE9BQU87SUFDdEIsQ0FBQztJQUNEUCxZQUFZLFdBQUFBLGFBQUEsRUFBRztNQUFBLElBQUEzQixLQUFBO01BQ1hDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO1FBQ05DLEdBQUcsRUFBRSxtQ0FBbUM7UUFDeENaLElBQUksRUFBRTtVQUNGNEMsSUFBSSxFQUFFLElBQUksQ0FBQ2hCLFlBQVk7VUFDdkJpQixJQUFJLEVBQUUsSUFBSSxDQUFDbkIsT0FBTyxDQUFDbUI7UUFDdkIsQ0FBQztRQUNEaEMsSUFBSSxFQUFFLFNBQUFBLEtBQUFDLFFBQU8sRUFBSztVQUNkTCxLQUFJLENBQUN1QixLQUFJLEdBQUlsQixRQUFRLENBQUNrQixLQUFJO1FBQzlCO01BQ0osQ0FBQztJQUNMLENBQUM7SUFDRGMsU0FBUyxXQUFBQSxVQUFDQyxJQUFJLEVBQUU7TUFDWixJQUFJLENBQUNKLEtBQUssQ0FBQyxZQUFZLEVBQUVJLElBQUksQ0FBQ3ZDLElBQUksRUFBRXdDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQztNQUM3RCxJQUFJLENBQUNnQixLQUFLLENBQUM7SUFDZjtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0REO0FBQ0E7O0FBRXFDO0FBRXJDLGlFQUFlO0VBQ1g1QyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxVQUFVLEVBQUU7SUFDUm1ELE1BQUssRUFBTEEscURBQU1BO0VBQ1YsQ0FBQztFQUNEM0IsS0FBSyxFQUFFO0lBQ0g0QixJQUFJLEVBQUV4QjtFQUNWLENBQUM7RUFDRFUsUUFBUSxFQUFFO0lBQ05DLFdBQVcsV0FBQUEsWUFBQSxFQUFHO01BQ1YsT0FBTztRQUNIQyxJQUFJLEtBQUFDLE1BQUEsQ0FBSyxJQUFJLENBQUNXLElBQUksQ0FBQ0MsS0FBSyxDQUFDbkIsQ0FBQyxPQUFJO1FBQzlCUSxHQUFHLEtBQUFELE1BQUEsQ0FBSyxJQUFJLENBQUNXLElBQUksQ0FBQ0MsS0FBSyxDQUFDbEIsQ0FBQztNQUM3QjtJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNTcUQ7QUFDdEQsaUVBQWU7RUFDWHBDLElBQUksRUFBRSxXQUFXO0VBQ2pCQyxVQUFVLEVBQUU7SUFDUnNELFlBQVcsRUFBWEEsaUVBQVlBO0VBQ2hCLENBQUM7RUFDRC9CLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7RUFDMUJDLEtBQUssRUFBRTtJQUNINEIsSUFBSSxFQUFFeEI7RUFDVixDQUFDO0VBQ0QzQixJQUFJLFdBQUFBLEtBQUEsRUFBRztJQUFBLElBQUFTLEtBQUE7SUFDSCxPQUFPO01BQ0g2QyxTQUFTLEVBQUUsSUFBSTtNQUNmQyxhQUFhLEVBQUUsT0FBTztNQUN0QnZELElBQUksRUFBRSxJQUFJO01BQ1Z3RCxPQUFPLEVBQUUsQ0FDTDtRQUNJMUQsSUFBSSxFQUFFLFdBQVc7UUFDakIyRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCQyxLQUFLLEVBQUUsU0FBQUEsTUFBQSxFQUFNO1VBQ1RqRCxLQUFJLENBQUNrRCxPQUFPLENBQUM7UUFDakI7TUFDSjtJQUVSO0VBQ0osQ0FBQztFQUNEeEIsS0FBSyxFQUFFO0lBQ0hnQixJQUFJLFdBQUFBLEtBQUNBLEtBQUksRUFBRTtNQUFBLElBQUFTLE1BQUE7TUFDUCxJQUFJLENBQUNULEtBQUksRUFBRTtRQUNQLElBQUksQ0FBQ0csU0FBUSxHQUFJLElBQUc7UUFDcEI7TUFDSjtNQUNBLElBQUksQ0FBQ08sT0FBTyxDQUFDO1FBQ1RDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLFFBQVEsRUFBQyxXQUFXO1FBQ3BCbEQsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBTTtVQUNSK0MsTUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDVEMsTUFBTSxFQUFFRixNQUFJLENBQUNMO1VBQ2pCLENBQUM7UUFDTDtNQUNKLENBQUM7SUFDTDtFQUNKLENBQUM7RUFDRGxELE9BQU8sRUFBRTtJQUNMO0lBQ0F3RCxPQUFPLFdBQUFBLFFBQUN0QyxLQUFLLEVBQUU7TUFBQSxJQUFBeUMsTUFBQTtNQUNYLElBQUksQ0FBQ3pDLEtBQUssQ0FBQ3dDLFFBQVEsRUFBRTtRQUNqQnhDLEtBQUssQ0FBQ3dDLFFBQU8sR0FBSSxNQUFLO01BQzFCO01BQ0FyRCxLQUFLLENBQUNDLEdBQUcsQ0FBQztRQUNOQyxHQUFHLEVBQUUsd0JBQXdCO1FBQzdCWixJQUFJLEVBQUU7VUFDRjZDLElBQUksRUFBRSxJQUFJLENBQUNNLElBQUksQ0FBQ04sSUFBSTtVQUNwQmlCLE1BQU0sRUFBRSxJQUFJLENBQUNHLGVBQWUsQ0FBQyxLQUFLLEVBQUUxQyxLQUFLLENBQUN1QyxNQUFNO1FBQ3BELENBQUM7UUFDRGpELElBQUksRUFBRSxTQUFBQSxLQUFBQyxRQUFPLEVBQUs7VUFDZGtELE1BQUksQ0FBQ3pDLEtBQUssQ0FBQ3dDLFFBQVEsSUFBSWpELFFBQVEsQ0FBQ2QsSUFBRztVQUNuQyxJQUFJdUIsS0FBSyxDQUFDVixJQUFJLEVBQUU7WUFDWlUsS0FBSyxDQUFDVixJQUFJLENBQUM7VUFDZjtRQUNKO01BQ0osQ0FBQztJQUNMLENBQUM7SUFDRDtJQUNBOEMsT0FBTyxXQUFBQSxRQUFBLEVBQUc7TUFBQSxJQUFBTyxNQUFBO01BQ054RCxLQUFLLENBQUNDLEdBQUcsQ0FBQztRQUNOQyxHQUFHLEVBQUUsd0JBQXdCO1FBQzdCWixJQUFJLEVBQUU7VUFDRjZDLElBQUksRUFBRSxJQUFJLENBQUNNLElBQUksQ0FBQ04sSUFBSTtVQUNwQmlCLE1BQU0sRUFBRSxJQUFJLENBQUNHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDVixhQUFhLENBQUM7VUFDdkRZLE1BQU0sRUFBRSxJQUFJLENBQUNuRSxJQUFJLENBQUNtRTtRQUN0QixDQUFDO1FBQ0R0RCxJQUFJLEVBQUUsU0FBQUEsS0FBQUMsUUFBTyxFQUFLO1VBQ2RvRCxNQUFJLENBQUN2QixLQUFLLENBQUMsUUFBUSxFQUFFN0IsUUFBUSxHQUFFO1FBQ25DO01BQ0osQ0FBQztJQUNMLENBQUM7SUFFRHNELFVBQVUsV0FBQUEsV0FBQ04sTUFBTSxFQUFFO01BQ2YsSUFBSSxDQUFDUCxhQUFZLEdBQUlPLE1BQUs7TUFDMUIsSUFBSSxDQUFDRCxPQUFPLENBQUM7UUFDVEMsTUFBTSxFQUFFLElBQUksQ0FBQ1A7TUFDakIsQ0FBQztJQUNMLENBQUM7SUFFRDtJQUNBVSxlQUFlLFdBQUFBLGdCQUFDSSxNQUFNLEVBQUVQLE1BQU0sRUFBRTtNQUM1QixPQUFPTyxNQUFLLEdBQUlQLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsSUFBSVQsTUFBTSxDQUFDVSxLQUFLLENBQUMsQ0FBQztJQUNuRTtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZ5QjtBQUNVO0FBQ0k7QUFDRTtBQUUxQyxpRUFBZTtFQUNYMUUsSUFBSSxFQUFFLFdBQVc7RUFDakJDLFVBQVUsRUFBRTtJQUNSMEUsSUFBSSxFQUFKQSw2Q0FBSTtJQUFFO0lBQ05DLFNBQVMsRUFBVEEsa0RBQVM7SUFBRTtJQUNYQyxXQUFXLEVBQVhBLG9EQUFXO0lBQUU7SUFDYkMsWUFBVyxFQUFYQSxxREFBWUE7RUFDaEIsQ0FBQztFQUNEckQsS0FBSyxFQUFFLENBRVAsQ0FBQztFQUNEdkIsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0g2RSxrQkFBa0IsRUFBRSxZQUFZO01BQUU7TUFDbENDLE1BQU0sRUFBRSxDQUFDLENBQUM7TUFBRTtNQUNaQyxtQkFBbUIsRUFBRSxJQUFJO01BQUU7O01BRTNCbEQsT0FBTyxFQUFFLENBQUM7TUFDVkUsT0FBTyxFQUFFLENBQUM7TUFDVmlELGVBQWUsRUFBRSxJQUFJO01BQUU7TUFDdkJDLGdCQUFnQixFQUFFLElBQUk7TUFBRTtNQUN4QkMsYUFBYSxFQUFFLElBQUk7TUFBRTtNQUNyQkMsYUFBYSxFQUFFLElBQUk7TUFBRTtNQUNyQkMseUJBQXlCLEVBQUUsS0FBSztNQUFFO01BQ2xDQyxPQUFPLEVBQUUsQ0FBQztNQUFFO01BQ1pDLE9BQU8sRUFBRSxDQUFDO01BQUU7TUFDWm5DLElBQUksRUFBRSxJQUFJO01BQUU7TUFDWm9DLFdBQVcsRUFBRSxJQUFJO01BQUU7TUFDbkJDLFdBQVcsRUFBRSxDQUFDO01BQUU7TUFDaEJDLFdBQVcsRUFBRSxDQUFDLENBQUU7SUFDcEI7RUFDSixDQUFDO0VBQ0RwRCxRQUFRLEVBQUU7SUFDTnFELEtBQUssV0FBQUEsTUFBQSxFQUFHO01BQUEsSUFBQUMsWUFBQTtNQUFFO01BQ04sUUFBQUEsWUFBQSxHQUFPLElBQUksQ0FBQ2IsTUFBTSxjQUFBYSxZQUFBLHVCQUFYQSxZQUFBLENBQWFELEtBQUk7SUFDNUI7RUFDSixDQUFDO0VBQ0R2RixPQUFPLFdBQUFBLFFBQUEsRUFBRztJQUNOLElBQUksQ0FBQ3lGLG1CQUFtQixDQUFDLEdBQUU7SUFDM0JDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0YsbUJBQW1CO0lBQzFELElBQUksQ0FBQ0csU0FBUyxDQUFDO0VBQ25CLENBQUM7RUFDREMsYUFBYSxXQUFBQSxjQUFBLEVBQUc7SUFBRTtJQUNkSCxNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNMLG1CQUFtQjtFQUNqRSxDQUFDO0VBQ0R2RixPQUFPLEVBQUU7SUFDTDtJQUNBdUYsbUJBQW1CLFdBQUFBLG9CQUFBLEVBQUc7TUFBQSxJQUFBbkYsS0FBQTtNQUNsQixJQUFJLENBQUN5RixTQUFTLENBQUMsWUFBTTtRQUNqQixJQUFJQyxhQUFZLEdBQUkxRixLQUFJLENBQUMyRixHQUFHLENBQUNDLFVBQVM7UUFDdEM7UUFDQTNGLEtBQUssQ0FBQzRGLE1BQU0sQ0FBQ3RCLGVBQWMsR0FBSXZFLEtBQUksQ0FBQ3VFLGVBQWMsR0FBSW1CLGFBQWEsQ0FBQ0ksV0FBVTtRQUM5RTdGLEtBQUssQ0FBQzRGLE1BQU0sQ0FBQ3JCLGdCQUFlLEdBQUl4RSxLQUFJLENBQUN3RSxnQkFBZSxHQUFJa0IsYUFBYSxDQUFDSyxZQUFXO1FBQ2pGLElBQUkvRixLQUFJLENBQUN1RSxlQUFjLElBQUt2RSxLQUFJLENBQUN3RSxnQkFBZ0IsRUFBRTtVQUMvQ3hFLEtBQUksQ0FBQzJFLHlCQUF3QixHQUFJLElBQUc7UUFDeEM7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQ7SUFDQVcsU0FBUyxXQUFBQSxVQUFBLEVBQUc7TUFBQSxJQUFBbkMsTUFBQTtNQUNSbEQsS0FBSyxDQUFDQyxHQUFHLENBQUM7UUFDTkMsR0FBRyxFQUFFLDRCQUE0QjtRQUNqQ1osSUFBSSxFQUFFO1VBQ0YsYUFBYSxFQUFFLElBQUksQ0FBQzZFO1FBQ3hCLENBQUM7UUFDRGhFLElBQUksRUFBRSxTQUFBQSxLQUFBQyxRQUFPLEVBQUs7VUFDZDhDLE1BQUksQ0FBQ2tCLE1BQUssR0FBSWhFLFFBQVEsQ0FBQ2dFLE1BQUs7UUFDaEM7TUFDSixDQUFDO0lBQ0wsQ0FBQztJQUVEO0lBQ0EyQixhQUFhLFdBQUFBLGNBQUEsRUFBRztNQUNaLElBQUlmLEtBQUksR0FBSTFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQzZCLE1BQU0sQ0FBQ1ksS0FBSztNQUN6Q0EsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDLFVBQVV2RCxJQUFJLEVBQUU7UUFDdEIsT0FBT0EsSUFBSSxVQUFNO01BQ3JCLENBQUM7TUFDRCxPQUFPdUMsS0FBSTtJQUNmLENBQUM7SUFFRDtJQUNBaUIsVUFBVSxXQUFBQSxXQUFBLEVBQUc7TUFDVGpHLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO1FBQ05DLEdBQUcsRUFBRSw0QkFBNEI7UUFDakNaLElBQUksRUFBRTtVQUNGd0IsV0FBVyxFQUFFLElBQUksQ0FBQ3FELGtCQUFrQjtVQUNwQytCLFdBQVcsRUFBRTtZQUNUOUcsSUFBSSxFQUFFLElBQUksQ0FBQ2dGLE1BQU0sQ0FBQ2hGLElBQUk7WUFDdEIrRyxXQUFXLEVBQUUsSUFBSSxDQUFDL0IsTUFBTSxDQUFDK0IsV0FBVztZQUNwQ25CLEtBQUssRUFBRSxJQUFJLENBQUNlLGFBQWEsQ0FBQztVQUM5QjtRQUNKLENBQUM7UUFDRDVGLElBQUksRUFBRSxTQUFBQSxLQUFBQyxRQUFPLEVBQUs7VUFDZGdHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVk7UUFDNUI7TUFDSixDQUFDO0lBQ0wsQ0FBQztJQUVEO0lBQ0FDLFNBQVMsV0FBQUEsVUFBQSxFQUFHO01BQ1IsSUFBSSxDQUFDOUIsYUFBWSxHQUFJLElBQUksQ0FBQ3JELE9BQU0sR0FBSSxJQUFJLENBQUN3RCxPQUFNO01BQy9DLElBQUksQ0FBQ0YsYUFBWSxHQUFJLElBQUksQ0FBQ3BELE9BQU0sR0FBSSxJQUFJLENBQUN1RCxPQUFNO01BQy9DLElBQUksQ0FBQzJCLFVBQVMsR0FBSSxJQUFHO0lBQ3pCLENBQUM7SUFFRDtJQUNBQyxTQUFTLFdBQUFBLFVBQUEsRUFBRztNQUNSLElBQUksQ0FBQ0QsVUFBUyxHQUFJLEtBQUk7TUFDdEIsSUFBSSxDQUFDTixVQUFVLENBQUMsR0FBRTtJQUN0QixDQUFDO0lBRUQ7SUFDQVEsU0FBUyxXQUFBQSxVQUFDQyxLQUFLLEVBQUU7TUFDYixJQUFJLENBQUN2RixPQUFNLEdBQUl1RixLQUFLLENBQUNDLEtBQUk7TUFDekIsSUFBSSxDQUFDdEYsT0FBTSxHQUFJcUYsS0FBSyxDQUFDRSxLQUFJO01BQ3pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLEdBQUU7SUFDcEIsQ0FBQztJQUVEO0lBQ0FBLFFBQVEsV0FBQUEsU0FBQSxFQUFHO01BQ1AsSUFBSSxJQUFJLENBQUNoQyxXQUFXLEVBQUU7UUFDbEIsSUFBSSxDQUFDQSxXQUFXLENBQUNuQyxLQUFLLENBQUNuQixDQUFBLEdBQUksSUFBSSxDQUFDSixPQUFNLEdBQUksSUFBSSxDQUFDcUQsYUFBWTtRQUMzRCxJQUFJLENBQUNLLFdBQVcsQ0FBQ25DLEtBQUssQ0FBQ2xCLENBQUEsR0FBSSxJQUFJLENBQUNILE9BQU0sR0FBSSxJQUFJLENBQUNvRCxhQUFZO01BQy9EOztNQUVBO01BQ0EsSUFBSSxJQUFJLENBQUM4QixVQUFVLEVBQUU7UUFDakIsSUFBSSxDQUFDNUIsT0FBTSxHQUFJLElBQUksQ0FBQ3hELE9BQU0sR0FBSSxJQUFJLENBQUNxRCxhQUFZO1FBQy9DLElBQUksQ0FBQ0ksT0FBTSxHQUFJLElBQUksQ0FBQ3ZELE9BQU0sR0FBSSxJQUFJLENBQUNvRCxhQUFZO1FBQy9DcUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLENBQUM7VUFDVkMsVUFBVSxFQUFFLElBQUksQ0FBQ3JDLE9BQU0sR0FBSSxJQUFJLENBQUNzQyxhQUFhO1VBQzdDQyxTQUFTLEVBQUUsSUFBSSxDQUFDdEMsT0FBTSxHQUFJLElBQUksQ0FBQ3VDO1FBQ25DLENBQUM7TUFDTDtNQUNBO0lBQ0osQ0FBQztJQUVEO0lBQ0FDLFFBQVEsV0FBQUEsU0FBQzNFLElBQUksRUFBRWlFLEtBQUssRUFBRTtNQUNsQixJQUFJQSxLQUFLLENBQUNXLE1BQUssS0FBTSxDQUFDLEVBQUU7UUFDcEI7TUFDSjtNQUNBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUM7TUFDdEI3RSxJQUFJLFVBQU8sQ0FBQzhFLEtBQUksR0FBSSxJQUFHO01BQ3ZCLElBQUksQ0FBQy9DLGFBQVksR0FBSSxJQUFJLENBQUNyRCxPQUFNLEdBQUlzQixJQUFJLENBQUNDLEtBQUssQ0FBQ25CLENBQUE7TUFDL0MsSUFBSSxDQUFDa0QsYUFBWSxHQUFJLElBQUksQ0FBQ3BELE9BQU0sR0FBSW9CLElBQUksQ0FBQ0MsS0FBSyxDQUFDbEIsQ0FBQTtNQUMvQyxJQUFJLENBQUNxRCxXQUFVLEdBQUlwQyxJQUFHO0lBQzFCLENBQUM7SUFFRDtJQUNBNkUsZ0JBQWdCLFdBQUFBLGlCQUFBLEVBQUc7TUFDZixJQUFJLENBQUN4QyxXQUFVLEdBQUksSUFBSSxDQUFDM0QsT0FBTTtNQUM5QixJQUFJLENBQUM0RCxXQUFVLEdBQUksSUFBSSxDQUFDMUQsT0FBTTtJQUNsQyxDQUFDO0lBRUQ7SUFDQW1HLFFBQVEsV0FBQUEsU0FBQSxFQUFHO01BQ1AsSUFBSWQsS0FBSyxDQUFDVyxNQUFLLEtBQU0sQ0FBQyxFQUFFO1FBQ3BCO01BQ0o7TUFFQSxJQUFJLENBQUNyQyxLQUFLLENBQUNnQixHQUFHLENBQUMsVUFBVXZELElBQUksRUFBRTtRQUMzQkEsSUFBSSxVQUFPLENBQUM4RSxLQUFJLEdBQUksS0FBSTtNQUM1QixDQUFDO01BRUQsSUFBSSxDQUFDMUMsV0FBVSxHQUFJLElBQUc7O01BRXRCO01BQ0EsSUFBSSxJQUFJLENBQUNDLFdBQVUsS0FBTSxJQUFJLENBQUMzRCxPQUFNLElBQUssSUFBSSxDQUFDNEQsV0FBVSxLQUFNLElBQUksQ0FBQzFELE9BQU8sRUFBRTtRQUN4RSxJQUFJLENBQUM0RSxVQUFVLENBQUM7TUFDcEI7SUFDSixDQUFDO0lBRUQ7SUFDQXdCLG9CQUFvQixXQUFBQSxxQkFBQSxFQUFHO01BQ25CckIsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDO0lBQ2xELENBQUM7SUFFRDtJQUNBcUIsZUFBZSxXQUFBQSxnQkFBQ2pGLElBQUksRUFBRTtNQUNsQixJQUFJLENBQUM0QixtQkFBa0IsR0FBSTVCLElBQUc7SUFDbEMsQ0FBQztJQUVEO0lBQ0FrRixnQkFBZ0IsV0FBQUEsaUJBQUEsRUFDaEI7TUFDSSxJQUFJLENBQUN0RCxtQkFBa0IsR0FBSSxJQUFHO0lBQ2xDLENBQUM7SUFFRDtJQUNBdUQsb0JBQW9CLFdBQUFBLHFCQUFDOUgsSUFBSSxFQUFFa0IsT0FBTyxFQUFFO01BQUEsSUFBQXNDLE1BQUE7TUFDaEMsSUFBSXhELElBQUcsS0FBTSxrQkFBa0IsRUFBRTtRQUM3QixJQUFJLENBQUMyQyxJQUFHLEdBQUl6QixPQUFNO01BQ3RCO01BQ0EsSUFBSWxCLElBQUcsS0FBTSxXQUFXLEVBQUU7UUFDdEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0FFLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO1VBQ05YLElBQUksRUFBRTtZQUNGbUQsSUFBSSxFQUFFekI7VUFDVixDQUFDO1VBQ0RkLEdBQUcsRUFBRSwwQkFBMEI7VUFDL0JDLElBQUksRUFBRSxTQUFBQSxLQUFDQyxRQUFRLEVBQUs7WUFDaEIsSUFBSXFDLElBQUcsR0FBSXJDLFFBQVEsQ0FBQ3FDLElBQUc7WUFDdkJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDbkIsQ0FBQSxJQUFLLEdBQUU7WUFDbEJrQixJQUFJLENBQUNDLEtBQUssQ0FBQ2xCLENBQUEsSUFBSyxHQUFFO1lBQ2xCOEIsTUFBSSxDQUFDYyxNQUFNLENBQUNZLEtBQUssQ0FBQ25GLElBQUksQ0FBQzRDLElBQUk7VUFDL0I7UUFDSixDQUFDO01BQ0w7SUFDSixDQUFDO0lBRUQ7SUFDQW9GLFVBQVUsV0FBQUEsV0FBQ0MsRUFBRSxFQUFFO01BQ1g5SCxLQUFLLENBQUNDLEdBQUcsQ0FBQztRQUNOQyxHQUFHLEVBQUUsMkJBQTJCO1FBQ2hDQyxJQUFJLEVBQUUsU0FBQUEsS0FBQUMsUUFBTyxFQUFLO1VBQ2QwSCxFQUFFLENBQUMxSCxRQUFRLENBQUMrQixJQUFJO1FBQ3BCO01BQ0osQ0FBQztJQUNMLENBQUM7SUFFRDRGLFVBQVUsV0FBQUEsV0FBQSxFQUFFLENBQUM7RUFDakI7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxUThDO0FBQy9DLGlFQUFlO0VBQ1gzSSxJQUFJLEVBQUUsT0FBTztFQUNiQyxVQUFVLEVBQUU7SUFDUjJJLFNBQVEsRUFBUkEsNERBQVNBO0VBQ2I7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0hELGlFQUFlO0VBQ1g1SSxJQUFJLEVBQUUsUUFBUTtFQUNkeUIsS0FBSyxFQUFFO0lBQ0g0QixJQUFJLEVBQUV4QjtFQUNWLENBQUM7RUFDRFUsUUFBUSxFQUFFO0lBQ05zRyxZQUFZLFdBQUFBLGFBQUEsRUFBRztNQUNYLE9BQU8sSUFBSSxDQUFDeEYsSUFBSSxVQUFPLENBQUN5RixLQUFLLENBQUNDLE1BQUs7SUFDdkMsQ0FBQztJQUNEQyxrQkFBa0IsV0FBQUEsbUJBQUEsRUFBRztNQUNqQixPQUFPLElBQUksQ0FBQzNGLElBQUksVUFBTyxDQUFDeUYsS0FBSyxDQUFDRyxZQUFXO0lBQzdDO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztFTnRCSSxTQUFNO0FBQWU7Ozs7OEJBS2RDLHVEQUFBLENBQTZCO0VBQTFCLFNBQU07QUFBZTtrQkFBeEJDLFVBQTZCOzs7RUFTWixTQUFNOzs7OzJEQWRuQ0MsdURBQUEsQ0FvQk0sT0FwQk5DLFVBb0JNLDBEQW5CRkQsdURBQUEsQ0FNTUUseUNBQUEsUUFBQUMsK0NBQUEsQ0FOd0JDLEtBQUEsQ0FBQXJKLE1BQU0sWUFBdkJtQixLQUFLLEVBQUVtSSxLQUFLOzZEQUF6QkwsdURBQUEsQ0FNTTtNQU5nQyxTQUFNLHNCQUFzQjtNQUFFTixLQUFLLEVBQUFZLG1EQUFBLHNCQUFBaEgsTUFBQSxDQUF1QnBCLEtBQUssQ0FBQ1osSUFBSTs0REFDdEd3SSx1REFBQSxDQUE0RTtNQUFyRSxTQUFNLHFCQUFxQjtNQUFDcEcsSUFBSSxFQUFDLE1BQU07O2VBQVUwRyxLQUFBLENBQUFySixNQUFNLENBQUNzSixLQUFLLEVBQUV6SixJQUFJLEdBQUEySixNQUFBO01BQUE7d0ZBQWxCSCxLQUFBLENBQUFySixNQUFNLENBQUNzSixLQUFLLEVBQUV6SixJQUFJLHlEQUMxRWtKLHVEQUFBLENBQTRFO01BQXJFLFNBQU0scUJBQXFCO01BQUNwRyxJQUFJLEVBQUMsTUFBTTs7ZUFBVTBHLEtBQUEsQ0FBQXJKLE1BQU0sQ0FBQ3NKLEtBQUssRUFBRS9JLElBQUksR0FBQWlKLE1BQUE7TUFBQTt3RkFBbEJILEtBQUEsQ0FBQXJKLE1BQU0sQ0FBQ3NKLEtBQUssRUFBRS9JLElBQUksS0FDMUV3SSx1REFBQSxDQUVNO01BRkQsU0FBTSx1QkFBdUI7TUFBRVUsT0FBSyxXQUFBQSxRQUFBRCxNQUFBO1FBQUEsT0FBRUUsUUFBQSxDQUFBeEksaUJBQWlCLENBQUNDLEtBQUs7TUFBQTs7b0NBSXRFNEgsdURBQUEsQ0FFTTtJQUZELFNBQU0sdUJBQXVCO0lBQUVVLE9BQUssRUFBQUUsTUFBQSxRQUFBQSxNQUFBO01BQUEsT0FBRUQsUUFBQSxDQUFBckosV0FBQSxJQUFBcUosUUFBQSxDQUFBckosV0FBQSxDQUFBdUosS0FBQSxDQUFBRixRQUFBLEVBQUFHLFNBQUEsQ0FBVztJQUFBO0tBQUUsS0FFeEQsR0FDQWQsdURBQUEsQ0FFTTtJQUZELFNBQU0sdUJBQXVCO0lBQUVVLE9BQUssRUFBQUUsTUFBQSxRQUFBQSxNQUFBO01BQUEsT0FBRUQsUUFBQSxDQUFBNUksVUFBQSxJQUFBNEksUUFBQSxDQUFBNUksVUFBQSxDQUFBOEksS0FBQSxDQUFBRixRQUFBLEVBQUFHLFNBQUEsQ0FBVTtJQUFBO0tBQUUsZUFFdkQsR0FDV1IsS0FBQSxDQUFBcEosWUFBWSxzREFBdkJnSix1REFBQSxDQUtNLE9BTE5hLFVBS00sR0FKRmYsdURBQUEsQ0FFTTtJQUZELFNBQU0sK0JBQStCO0lBQUVVLE9BQUssRUFBQUUsTUFBQSxRQUFBQSxNQUFBO01BQUEsT0FBRUQsUUFBQSxDQUFBdEksWUFBQSxJQUFBc0ksUUFBQSxDQUFBdEksWUFBQSxDQUFBd0ksS0FBQSxDQUFBRixRQUFBLEVBQUFHLFNBQUEsQ0FBWTtJQUFBO0tBQUUsV0FFakUsR0FDQUUsZ0RBQUEsQ0FBbUhDLDBCQUFBO2dCQUF6RlgsS0FBQSxDQUFBcEosWUFBWSxDQUFDTSxJQUFJOzthQUFqQjhJLEtBQUEsQ0FBQXBKLFlBQVksQ0FBQ00sSUFBSSxHQUFBaUosTUFBQTtJQUFBO0lBQUVTLElBQUksRUFBQyxPQUFPO0lBQUVDLGFBQWEsRUFBRSxLQUFLO0lBQUdDLFdBQVcsRUFBRSxLQUFLO0lBQUV4SCxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNqQnRHLFNBQU07QUFBc0I7Ozs7U0FEMUIwRyxLQUFBLENBQUF0SCxLQUFLLENBQUNxSSxNQUFNLDBHQUF2Qm5CLHVEQUFBLENBT007O0lBUG1CLFNBQU0sZUFBZTtJQUFFTixLQUFLLEVBQUFZLG1EQUFBLENBQUVHLFFBQUEsQ0FBQXJILFdBQVc7TUFDOUQwRyx1REFBQSxDQUtNLE9BTE5HLFVBS00sMERBSkZELHVEQUFBLENBR01FLHlDQUFBLFFBQUFDLCtDQUFBLENBSGNDLEtBQUEsQ0FBQXRILEtBQUssWUFBYmUsSUFBSTs2REFBaEJtRyx1REFBQSxDQUdNO01BSHFCLFNBQU0scUJBQXFCO01BQUVRLE9BQUssV0FBQUEsUUFBQUQsTUFBQTtRQUFBLE9BQUVFLFFBQUEsQ0FBQTdHLFNBQVMsQ0FBQ0MsSUFBSTtNQUFBO1FBQ2hFQSxJQUFJLENBQUNVLElBQUksc0RBQWxCeUYsdURBQUEsQ0FBMkM7O01BQXRCLFNBQUtvQixtREFBQSxDQUFFdkgsSUFBSSxDQUFDVSxJQUFJOzJKQUFNLEdBQzNDLEdBQUE4RyxvREFBQSxDQUFHeEgsSUFBSSxDQUFDeUgsSUFBSTs0RkFKcUViLFFBQUEsQ0FBQWpILEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRDQWxHd0csdURBQUEsQ0FFTTtJQUZELFNBQU0sTUFBTTtJQUFHTixLQUFLLEVBQUFZLG1EQUFBLENBQUVHLFFBQUEsQ0FBQXJILFdBQVc7TUFDcEJtSSxNQUFBLENBQUF0SCxJQUFJLENBQUNQLElBQUksbUVBQXZCOEgsZ0RBQUEsQ0FBcURDLGlCQUFBOztJQUFkeEgsSUFBSSxFQUFFc0gsTUFBQSxDQUFBdEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDRDNCLFNBQU07OztFQUNuQixTQUFNO0FBQWtCOztFQUNwQixTQUFNO0FBQW9COzhCQUMzQjZGLHVEQUFBLENBRU07RUFGRCxTQUFNO0FBQW1CLEdBQUMsd0JBRS9COztFQUNLLFNBQU07QUFBbUI7O0VBSTdCLFNBQU07QUFBcUI7O0VBQ3ZCLFNBQU07QUFBa0I7OztFQVN4QixTQUFNO0FBQWtCOztFQVE1QixTQUFNO0FBQXFCOzs7O1NBNUI3Qk0sS0FBQSxDQUFBaEcsU0FBUyxzREFBcEI0Rix1REFBQSxDQWdDTSxPQWhDTkMsVUFnQ00sR0EvQkZILHVEQUFBLENBOEJNLE9BOUJONEIsVUE4Qk0sR0E3QkY1Qix1REFBQSxDQU9NLE9BUE42QixVQU9NLEdBTkZDLFVBRU0sRUFDTjlCLHVEQUFBLENBRU0sT0FGTkMsVUFFTSxHQURGRCx1REFBQSxDQUEyRDtJQUF4RCxTQUFNLHFCQUFxQjtJQUFFVSxPQUFLLEVBQUFFLE1BQUEsUUFBQUEsTUFBQSxnQkFBQUgsTUFBQTtNQUFBLE9BQUVzQixJQUFBLENBQUFwSSxLQUFLO0lBQUE7VUFHcERxRyx1REFBQSxDQWlCTSxPQWpCTmdDLFVBaUJNLEdBaEJGaEMsdURBQUEsQ0FRTSxPQVJOZSxVQVFNLDBEQVBGYix1REFBQSxDQU1NRSx5Q0FBQSxRQUFBQywrQ0FBQSxDQU5jQyxLQUFBLENBQUFoRyxTQUFTLFlBQWpCUCxJQUFJOzZEQUFoQm1HLHVEQUFBLENBTU07TUFMRCxTQUFLb0IsbURBQUEsRUFBQyx3QkFBd0I7UUFBQVcsTUFBQSxFQUNkbEksSUFBSSxDQUFDZSxNQUFNLEtBQUt3RixLQUFBLENBQUEvRjtNQUFhO01BQzVDbUcsT0FBSyxXQUFBQSxRQUFBRCxNQUFBO1FBQUEsT0FBRUUsUUFBQSxDQUFBdkYsVUFBVSxDQUFDckIsSUFBSSxDQUFDZSxNQUFNO01BQUE7NERBRTVCZixJQUFJLENBQUNtSSxLQUFLLGdDQUFBQyxVQUFBO3NDQUdyQm5DLHVEQUFBLENBTU0sT0FOTm9DLFVBTU0sR0FMZ0I5QixLQUFBLENBQUF0SixJQUFJLCtEQUF0QjBLLGdEQUFBLENBSWFXLHFCQUFBOztJQUpxQnZHLE1BQU0sRUFBRXdFLEtBQUEsQ0FBQXRKLElBQUksQ0FBQzhFLE1BQU07Z0JBQVd3RSxLQUFBLENBQUF0SixJQUFJLENBQUNtRSxNQUFNOzthQUFYbUYsS0FBQSxDQUFBdEosSUFBSSxDQUFDbUUsTUFBTSxHQUFBc0YsTUFBQTtJQUFBOzs7c0RBQ3pDc0IsSUFBQSxDQUFBTyxNQUFNLFlBQWxCdEksQ0FBQyxFQUFFbEQsSUFBSTs7WUFBb0JBLElBQU07dURBQy9DO1FBQUEsT0FBb0IsQ0FBcEJ5TCwrQ0FBQSxDQUFvQlIsSUFBQSxDQUFBTyxNQUFBLEVBQVB4TCxJQUFJOzs7aUpBS2pDa0osdURBQUEsQ0FFTSxPQUZOd0MsV0FFTSxHQURGeEIsZ0RBQUEsQ0FBbUN5Qix1QkFBQTtJQUFwQmpJLE9BQU8sRUFBRThGLEtBQUEsQ0FBQTlGO0VBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQ3JCM0N3Rix1REFBQSxDQUNNO0VBREQsU0FBTTtBQUFzQjs7Ozs7O1NBUjFCTSxLQUFBLENBQUFsRSx5QkFBeUIsc0RBQXBDOEQsdURBQUEsQ0FrQ007O0lBakNELFNBQU0sV0FBVztJQUNoQk4sS0FBSyxFQUFBWSxtREFBQSxVQUFBaEgsTUFBQSxDQUFXOEcsS0FBQSxDQUFBdEUsZUFBZSxnQkFBQXhDLE1BQUEsQ0FBYThHLEtBQUEsQ0FBQXJFLGdCQUFnQjtJQUM1RHlHLFdBQVMsRUFBQTlCLE1BQUEsUUFBQUEsTUFBQSxNQUFBK0Isa0RBQUE7TUFBQSxPQUFZaEMsUUFBQSxDQUFBM0MsU0FBQSxJQUFBMkMsUUFBQSxDQUFBM0MsU0FBQSxDQUFBNkMsS0FBQSxDQUFBRixRQUFBLEVBQUFHLFNBQUEsQ0FBUztJQUFBO0lBQzlCOEIsU0FBTyxFQUFBaEMsTUFBQSxRQUFBQSxNQUFBLE1BQUErQixrREFBQTtNQUFBLE9BQU9oQyxRQUFBLENBQUF6QyxTQUFBLElBQUF5QyxRQUFBLENBQUF6QyxTQUFBLENBQUEyQyxLQUFBLENBQUFGLFFBQUEsRUFBQUcsU0FBQSxDQUFTO0lBQUE7SUFDdkIrQixXQUFTLEVBQUFqQyxNQUFBLFFBQUFBLE1BQUE7TUFBQSxPQUFFRCxRQUFBLENBQUF4QyxTQUFBLElBQUF3QyxRQUFBLENBQUF4QyxTQUFBLENBQUEwQyxLQUFBLENBQUFGLFFBQUEsRUFBQUcsU0FBQSxDQUFTO0lBQUE7SUFDcEJnQyxVQUFRLEVBQUFsQyxNQUFBLFFBQUFBLE1BQUEsTUFBQStCLGtEQUFBO01BQUEsT0FBT2hDLFFBQUEsQ0FBQXhCLG9CQUFBLElBQUF3QixRQUFBLENBQUF4QixvQkFBQSxDQUFBMEIsS0FBQSxDQUFBRixRQUFBLEVBQUFHLFNBQUEsQ0FBb0I7SUFBQTtNQUVyQ1gsVUFDTSxFQUVOSCx1REFBQSxDQVdNO0lBWEQsU0FBTSxrQkFBa0I7SUFBRUosS0FBSyxFQUFBWSxtREFBQSxnQkFBQWhILE1BQUEsQ0FBa0I4RyxLQUFBLENBQUFqRSxPQUFPLG9CQUFBN0MsTUFBQSxDQUFtQjhHLEtBQUEsQ0FBQWhFLE9BQU87TUFFbkYwRSxnREFBQSxDQUFlK0IsdUJBQUEsMERBRWY3Qyx1REFBQSxDQU1FRSx5Q0FBQSxRQUFBQywrQ0FBQSxDQU5tQk0sUUFBQSxDQUFBakUsS0FBSyxZQUFidkMsSUFBSTs2REFBakJ1SCxnREFBQSxDQU1Fc0IsZUFBQTtNQU4yQjdJLElBQUksRUFBRUEsSUFBSTs7TUFDakM4SSxHQUFHLEVBQUU5SSxJQUFJLENBQUMrSSxFQUFFO01BQUcsU0FBSzVCLG1EQUFBO1FBQUFyQyxLQUFBLEVBQVU5RSxJQUFJLEtBQUttRyxLQUFBLENBQUEvRDtNQUFXO01BQ2xEbUcsV0FBUyxXQUFBQSxZQUFBakMsTUFBQTtRQUFBLE9BQUVFLFFBQUEsQ0FBQTdCLFFBQVEsQ0FBQzNFLElBQUksRUFBRXNHLE1BQU07TUFBQTtNQUNoQ21DLFNBQU8sRUFBRWpDLFFBQUEsQ0FBQXpCLFFBQVE7TUFDakJ3QixPQUFLLEVBQUFpQyxrREFBQSxXQUFBbEMsTUFBQTtRQUFBLE9BQU9FLFFBQUEsQ0FBQWxCLFVBQVUsQ0FBQ3RGLElBQUk7TUFBQTtNQUMzQmdKLGFBQVcsRUFBQVIsa0RBQUEsV0FBQWxDLE1BQUE7UUFBQSxPQUFVRSxRQUFBLENBQUF2QixlQUFlLENBQUNqRixJQUFJO01BQUE7O3FEQUduRDZHLGdEQUFBLENBQWtFb0Msb0JBQUE7SUFBdERqSixJQUFJLEVBQUVtRyxLQUFBLENBQUFuRyxJQUFJO0lBQUdrSixPQUFLLEVBQUF6QyxNQUFBLFFBQUFBLE1BQUEsZ0JBQUFILE1BQUE7TUFBQSxPQUFFSCxLQUFBLENBQUFuRyxJQUFJO0lBQUE7SUFBVW1KLFFBQU0sRUFBRTNDLFFBQUEsQ0FBQTVEO2lEQUN0RGlFLGdEQUFBLENBUUV1QyxzQkFBQTtJQVBHN0ssT0FBTyxFQUFFNEgsS0FBQSxDQUFBdkUsbUJBQW1CO0lBQzdCbkQsWUFBWSxFQUFDLE1BQU07SUFDbEJKLFdBQVcsRUFBRThILEtBQUEsQ0FBQXpFLGtCQUFrQjtJQUMvQmhELE9BQU8sRUFBRXlILEtBQUEsQ0FBQXpILE9BQU87SUFDaEJFLE9BQU8sRUFBRXVILEtBQUEsQ0FBQXZILE9BQU87SUFDaEJzSyxPQUFLLEVBQUUxQyxRQUFBLENBQUF0QixnQkFBZ0I7SUFDdkJtRSxZQUFVLEVBQUU3QyxRQUFBLENBQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQy9CWixTQUFNO0FBQU87OzsyREFBbEJZLHVEQUFBLENBRU0sT0FGTkMsVUFFTSxHQURGYSxnREFBQSxDQUFheUMsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQ0ROaEMsTUFBQSxDQUFBdEgsSUFBSSxzREFBZitGLHVEQUFBLENBS007O0lBTFcsU0FBTSxRQUFRO0lBQUVOLEtBQUssRUFBQVksbURBQUEsQ0FBRUcsUUFBQSxDQUFBaEIsWUFBWTtNQUNoREssdURBQUEsQ0FHTTtJQUhELFNBQU0sZUFBZTtJQUFFSixLQUFLLEVBQUFZLG1EQUFBLENBQUVHLFFBQUEsQ0FBQWIsa0JBQWtCO01BQ2pERSx1REFBQSxDQUFpQztJQUE3QixTQUFLc0IsbURBQUEsQ0FBRUcsTUFBQSxDQUFBdEgsSUFBSSxVQUFPLENBQUNNLElBQUk7Z0ZBQU0sR0FDakMsR0FBQThHLG9EQUFBLENBQUdFLE1BQUEsQ0FBQXRILElBQUksVUFBTyxDQUFDdUosUUFBUSxDQUFDNU0sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p4QztBQUMrSDtBQUM3QjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMERBQTBELGlCQUFpQixrQkFBa0IsNENBQTRDLHdCQUF3QixHQUFHLDBCQUEwQixzQkFBc0Isd0JBQXdCLG1CQUFtQixvQkFBb0IsR0FBRyx3Q0FBd0Msa0JBQWtCLGtCQUFrQixHQUFHLDhDQUE4QyxpQkFBaUIsaUJBQWlCLGlEQUFpRCx1QkFBdUIsb0JBQW9CLHVCQUF1QixHQUFHLDBCQUEwQixzQkFBc0IsdUJBQXVCLHNCQUFzQixvQkFBb0IscUJBQXFCLDBCQUEwQixxQkFBcUIsc0JBQXNCLEdBQUcsMkJBQTJCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLEdBQUcsa0NBQWtDLHNCQUFzQix1QkFBdUIscUJBQXFCLHdCQUF3Qix1QkFBdUIsR0FBRyxPQUFPLHNIQUFzSCxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsMkNBQTJDLG1CQUFtQixvQkFBb0IsNEJBQTRCLDBCQUEwQixtQkFBbUIsNEJBQTRCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLE9BQU8sK0JBQStCLHdCQUF3Qix3QkFBd0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIsb0NBQW9DLGlDQUFpQyw4QkFBOEIsaUNBQWlDLFdBQVcsT0FBTyxpQkFBaUIsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLDJCQUEyQixnQ0FBZ0MsMkJBQTJCLDRCQUE0QixPQUFPLGtCQUFrQiw2QkFBNkIsNkJBQTZCLDRCQUE0QixvQkFBb0IsZ0NBQWdDLGlDQUFpQywrQkFBK0Isa0NBQWtDLGlDQUFpQyxXQUFXLE9BQU8sR0FBRyxxQkFBcUI7QUFDN25GO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDK0g7QUFDN0I7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDBEQUEwRCx1QkFBdUIsa0RBQWtELHVCQUF1Qix1QkFBdUIsR0FBRyx3QkFBd0Isd0JBQXdCLG1CQUFtQix1QkFBdUIsb0JBQW9CLHVCQUF1QixvQkFBb0Isc0JBQXNCLEdBQUcsMEJBQTBCLHVCQUF1QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyxPQUFPLHFLQUFxSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLHNFQUFzRSxrQkFBa0IseUJBQXlCLDRCQUE0Qix5QkFBeUIseUJBQXlCLGdCQUFnQixTQUFTLGVBQWUsZ0NBQWdDLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLDZCQUE2QiwwQkFBMEIsNEJBQTRCLGFBQWEsaUNBQWlDLFdBQVcsbUJBQW1CLGtDQUFrQyxXQUFXLE9BQU8sR0FBRyx5QkFBeUIscUJBQXFCLGtCQUFrQixrQkFBa0IsbUJBQW1CLHFCQUFxQjtBQUMvOEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMrSDtBQUM3QjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDBCQUEwQiw4QkFBOEIsOEJBQThCLDhCQUE4Qix1QkFBdUIsR0FBRyxlQUFlLHFCQUFxQixHQUFHLE9BQU8sOEdBQThHLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxrQ0FBa0MsNEJBQTRCLHdCQUF3Qix5QkFBeUIsZUFBZSwyQkFBMkIsT0FBTyxHQUFHLHFCQUFxQjtBQUMvbEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMrSDtBQUM3QjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsdURBQXVELHVCQUF1QixrQkFBa0IsNEJBQTRCLDRCQUE0QixXQUFXLFlBQVksYUFBYSxjQUFjLDRDQUE0QyxxQkFBcUIsR0FBRyxxQkFBcUIscUJBQXFCLGVBQWUsc0JBQXNCLHFCQUFxQixrQkFBa0Isd0JBQXdCLHNCQUFzQix5QkFBeUIsR0FBRyx1QkFBdUIsa0JBQWtCLG1DQUFtQyx3QkFBd0Isd0JBQXdCLEdBQUcsd0JBQXdCLG1CQUFtQixvQkFBb0Isc0JBQXNCLG9CQUFvQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyx3QkFBd0Isa0JBQWtCLG1DQUFtQyxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLHVCQUF1Qix1QkFBdUIsR0FBRywyQkFBMkIsc0JBQXNCLG9CQUFvQixtQkFBbUIsb0JBQW9CLHVCQUF1QixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxxQkFBcUIsZ0JBQWdCLEdBQUcsT0FBTyxtSEFBbUgsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSx3Q0FBd0MseUJBQXlCLG9CQUFvQiw4QkFBOEIsOEJBQThCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQiw0QkFBNEIsdUJBQXVCLGlCQUFpQiwyQkFBMkIscUJBQXFCLDRCQUE0QiwyQkFBMkIsd0JBQXdCLDhCQUE4Qiw0QkFBNEIsK0JBQStCLE9BQU8sbUJBQW1CLHdCQUF3Qix5Q0FBeUMsOEJBQThCLDhCQUE4QixPQUFPLGtCQUFrQixTQUFTLGtCQUFrQixhQUFhLDZCQUE2Qiw4QkFBOEIsZ0NBQWdDLDhCQUE4Qix5QkFBeUIsaUNBQWlDLGVBQWUsV0FBVyxPQUFPLG9CQUFvQix3QkFBd0IseUNBQXlDLE9BQU8saUJBQWlCLHdCQUF3QixpQ0FBaUMsNkJBQTZCLDZCQUE2QixxQkFBcUIsZ0NBQWdDLDhCQUE4Qiw2QkFBNkIsOEJBQThCLGlDQUFpQywwQkFBMEIsaUNBQWlDLGVBQWUsV0FBVyxPQUFPLGlCQUFpQixzQkFBc0IsT0FBTyxHQUFHLHFCQUFxQjtBQUN0dEc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMrSDtBQUM3QjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELGtCQUFrQix3QkFBd0IsbUJBQW1CLEdBQUcscUJBQXFCLGFBQWEsY0FBYyx1QkFBdUIsR0FBRywrQkFBK0Isb0JBQW9CLGtCQUFrQixXQUFXLFlBQVksYUFBYSxjQUFjLGtEQUFrRCxzQkFBc0IsNEJBQTRCLHdCQUF3Qiw4QkFBOEIsOEJBQThCLDhCQUE4QixvQkFBb0IsR0FBRyxPQUFPLG1LQUFtSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxzRUFBc0UsY0FBYyxvQkFBb0IsMkJBQTJCLHFCQUFxQixrQkFBa0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsT0FBTywwQkFBMEIsMEJBQTBCLHdCQUF3QixpQkFBaUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsZ0NBQWdDLDRCQUE0QixrQ0FBa0MsOEJBQThCLDRCQUE0QiwwQkFBMEIsT0FBTyxHQUFHLHVCQUF1QixxQkFBcUIsa0JBQWtCLGtCQUFrQixtQkFBbUIscUJBQXFCO0FBQ2xuRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQytIO0FBQzdCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0Qsb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGNBQWMscUJBQXFCLHdCQUF3QixHQUFHLE9BQU8sMkdBQTJHLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsbUNBQW1DLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsdUJBQXVCLDBCQUEwQixHQUFHLHFCQUFxQjtBQUM5aEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMrSDtBQUM3QjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsbURBQW1ELGtCQUFrQiwyQkFBMkIsZ0NBQWdDLEdBQUcsYUFBYSxzQkFBc0IsR0FBRyw0QkFBNEIsc0JBQXNCLG9CQUFvQixHQUFHLE9BQU8sNEdBQTRHLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsb0NBQW9DLG9CQUFvQiw2QkFBNkIsa0NBQWtDLFNBQVMsNEJBQTRCLE9BQU8sR0FBRyw4QkFBOEIsd0JBQXdCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUNuc0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDJEO0FBQ2xHLFlBQXFjOztBQUVyYzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxrWUFBTzs7OztBQUl4QixpRUFBZSxrWUFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1orRDtBQUNsRyxZQUFvYzs7QUFFcGM7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsaVlBQU87Ozs7QUFJeEIsaUVBQWUsaVlBQU8sYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaK0Q7QUFDbEcsWUFBNmI7O0FBRTdiOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDBYQUFPOzs7O0FBSXhCLGlFQUFlLDBYQUFPLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWitEO0FBQ2xHLFlBQWtjOztBQUVsYzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQywrWEFBTzs7OztBQUl4QixpRUFBZSwrWEFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1orRDtBQUNsRyxZQUFrYzs7QUFFbGM7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsK1hBQU87Ozs7QUFJeEIsaUVBQWUsK1hBQU8sYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaK0Q7QUFDbEcsWUFBOGI7O0FBRTliOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJYQUFPOzs7O0FBSXhCLGlFQUFlLDJYQUFPLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWitEO0FBQ2xHLFlBQStiOztBQUUvYjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0WEFBTzs7OztBQUl4QixpRUFBZSw0WEFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNac0M7QUFDVjtBQUNMOztBQUUxRCxDQUF3RTs7QUFFK0I7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsaUZBQU0sYUFBYSxtRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnlEO0FBQ1Y7QUFDTDs7QUFFekQsQ0FBdUU7O0FBRWdDO0FBQ3ZHLGlDQUFpQyxxSEFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJrRDtBQUNWO0FBQ0w7O0FBRWxELENBQWdFOztBQUV1QztBQUN2RyxpQ0FBaUMscUhBQWUsQ0FBQyx5RUFBTSxhQUFhLDJFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdUQ7QUFDVjtBQUNMOztBQUV2RCxDQUFxRTs7QUFFa0M7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsOEVBQU0sYUFBYSxnRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnVEO0FBQ1Y7QUFDTDs7QUFFdkQsQ0FBcUU7O0FBRWtDO0FBQ3ZHLGlDQUFpQyxxSEFBZSxDQUFDLDhFQUFNLGFBQWEsZ0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJtRDtBQUNWO0FBQ0w7O0FBRW5ELENBQWlFOztBQUVzQztBQUN2RyxpQ0FBaUMscUhBQWUsQ0FBQywwRUFBTSxhQUFhLDRFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCb0Q7QUFDVjtBQUNMOztBQUVwRCxDQUFrRTs7QUFFcUM7QUFDdkcsaUNBQWlDLHFIQUFlLENBQUMsMkVBQU0sYUFBYSw2RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQndNOzs7Ozs7Ozs7Ozs7Ozs7QUNBRDs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7Ozs7OztBQ0FLOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7OztBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMk87QUFDNWIsYUFBYSwyQkFBMkIsdUJBQXVCLG9EQUFDO0FBQ2hFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsR0FBRztBQUNIO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsd0NBQUM7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFDLElBQUksdURBQUM7QUFDNUIsTUFBTSx1REFBQztBQUNQLGVBQWUsbURBQUM7QUFDaEI7QUFDQSxPQUFPO0FBQ1AsTUFBTSx1REFBQztBQUNQLGVBQWUsbURBQUM7QUFDaEI7QUFDQSxPQUFPO0FBQ1AsTUFBTSx1REFBQztBQUNQLGVBQWUsbURBQUM7QUFDaEI7QUFDQSxPQUFPO0FBQ1AsTUFBTSx1REFBQztBQUNQLGVBQWUsbURBQUM7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdUJBQXVCLHVEQUFDLFdBQVcsK2lCQUEraUI7QUFDbmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHVCQUF1Qix1REFBQyxXQUFXLGdMQUFnTDtBQUNwTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1QkFBdUIsdURBQUMsV0FBVywwWkFBMFo7QUFDOWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdUJBQXVCLHVEQUFDLFdBQVcsMFpBQTBaO0FBQzliO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHVCQUF1Qix1REFBQyxXQUFXLGtqQkFBa2pCO0FBQ3RsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1QkFBdUIsdURBQUMsV0FBVywwbkJBQTBuQjtBQUM5cEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdUJBQXVCLHVEQUFDLFdBQVcsOFZBQThWO0FBQ2xZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHVCQUF1Qix1REFBQyxXQUFXLCtTQUErUztBQUNuVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsU0FBUyxnQ0FBZ0M7QUFDMUM7QUFDQTtBQUNBLENBQUMsU0FBUyxnQ0FBZ0MseUJBQXlCLFNBQVMsd0JBQXdCLFNBQVMsZ0NBQWdDLHVDQUF1QyxvREFBQztBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQiw4QkFBOEI7QUFDL0Msb0JBQW9CLGlDQUFpQztBQUNyRCx5QkFBeUIsNEJBQTRCO0FBQ3JELHFCQUFxQiw0QkFBNEI7QUFDakQsbUJBQW1CLDRCQUE0QjtBQUMvQyxxQkFBcUIsNEJBQTRCO0FBQ2pELGFBQWEsMkJBQTJCO0FBQ3hDLG1CQUFtQiwyQkFBMkI7QUFDOUMsbUJBQW1CLDJCQUEyQjtBQUM5QyxhQUFhLFdBQVcseUNBQXlDLGdCQUFnQjtBQUNqRixtQkFBbUIsV0FBVyx1RkFBdUY7QUFDckgsR0FBRztBQUNIO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsd0NBQUMsUUFBUSx3Q0FBQyxVQUFVLHdDQUFDLFVBQVUsd0NBQUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFDLElBQUksdURBQUMsQ0FBQyx5Q0FBRTtBQUMvQixNQUFNLHVEQUFDO0FBQ1A7QUFDQSxlQUFlLG1EQUFDLG1EQUFtRDtBQUNuRSxPQUFPO0FBQ1AsZ0NBQWdDLDhDQUFDLElBQUksdURBQUM7QUFDdEMsVUFBVSx1REFBQztBQUNYO0FBQ0EsbUJBQW1CLG1EQUFDO0FBQ3BCO0FBQ0EsbUJBQW1CLG1EQUFDLElBQUksMENBQTBDLEVBQUU7QUFDcEUsV0FBVztBQUNYLG9DQUFvQyw4Q0FBQyxJQUFJLHVEQUFDO0FBQzFDO0FBQ0EscUJBQXFCLG1EQUFDO0FBQ3RCLGFBQWEsZUFBZSw4Q0FBQyxJQUFJLHVEQUFDO0FBQ2xDO0FBQ0EsVUFBVSx1REFBQztBQUNYO0FBQ0EsbUJBQW1CLG1EQUFDO0FBQ3BCO0FBQ0EsbUJBQW1CLG1EQUFDLElBQUksMENBQTBDLEVBQUU7QUFDcEUsV0FBVztBQUNYLG9DQUFvQyw4Q0FBQyxJQUFJLHVEQUFDO0FBQzFDO0FBQ0EscUJBQXFCLG1EQUFDO0FBQ3RCLGFBQWEsZUFBZSw4Q0FBQyxJQUFJLHVEQUFDO0FBQ2xDO0FBQ0EsVUFBVSxtREFBQyxDQUFDLHVEQUFDO0FBQ2I7QUFDQSxtQkFBbUIsbURBQUM7QUFDcEI7QUFDQSxtQkFBbUIsbURBQUMsSUFBSSx5Q0FBeUMsRUFBRTtBQUNuRSxXQUFXO0FBQ1gsbUNBQW1DLDhDQUFDLElBQUksdURBQUM7QUFDekM7QUFDQSxxQkFBcUIsbURBQUM7QUFDdEIsYUFBYSxlQUFlLDhDQUFDLElBQUksdURBQUM7QUFDbEM7QUFDQSxhQUFhLHNDQUFDO0FBQ2Q7QUFDQSxVQUFVLG1EQUFDLENBQUMsdURBQUM7QUFDYjtBQUNBLG1CQUFtQixtREFBQztBQUNwQjtBQUNBLG1CQUFtQixtREFBQyxJQUFJLHlDQUF5QyxFQUFFO0FBQ25FLFdBQVc7QUFDWCxtQ0FBbUMsOENBQUMsSUFBSSx1REFBQztBQUN6QztBQUNBLHFCQUFxQixtREFBQztBQUN0QixhQUFhLGVBQWUsOENBQUMsSUFBSSx1REFBQztBQUNsQztBQUNBLGFBQWEsc0NBQUM7QUFDZDtBQUNBLGNBQWMsdURBQUM7QUFDZixRQUFRLHVEQUFDO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFNBQVM7QUFDVCxrREFBa0QsOENBQUMsSUFBSSx1REFBQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBQyxJQUFJLDZDQUE2QyxFQUFFO0FBQ3ZFO0FBQ0EsV0FBVztBQUNYLHVDQUF1Qyw4Q0FBQyxJQUFJLHVEQUFDO0FBQzdDO0FBQ0EscUJBQXFCLG1EQUFDO0FBQ3RCLGFBQWEsZUFBZSw4Q0FBQyxJQUFJLHVEQUFDO0FBQ2xDLG1CQUFtQix1REFBQztBQUNwQiw2QkFBNkIsOENBQUMsSUFBSSx1REFBQztBQUNuQztBQUNBO0FBQ0EsbUJBQW1CLG1EQUFDO0FBQ3BCO0FBQ0EsbUJBQW1CLG1EQUFDLElBQUksNkNBQTZDLEVBQUU7QUFDdkUsV0FBVztBQUNYLHVDQUF1Qyw4Q0FBQyxJQUFJLHVEQUFDO0FBQzdDO0FBQ0EscUJBQXFCLG1EQUFDO0FBQ3RCLGFBQWEsZUFBZSw4Q0FBQyxJQUFJLHVEQUFDO0FBQ2xDLG1CQUFtQix1REFBQztBQUNwQixVQUFVLG1EQUFDLENBQUMsZ0RBQUU7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYLGFBQWEsc0NBQUM7QUFDZDtBQUNBLDZCQUE2Qiw4Q0FBQyxJQUFJLHVEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFDLElBQUksd0NBQXdDLEVBQUU7QUFDbEUsV0FBVztBQUNYLGtDQUFrQyw4Q0FBQyxJQUFJLHVEQUFDO0FBQ3hDO0FBQ0EscUJBQXFCLG1EQUFDO0FBQ3RCLGFBQWEsZUFBZSw4Q0FBQyxJQUFJLHVEQUFDO0FBQ2xDLG1CQUFtQix1REFBQztBQUNwQixrQ0FBa0MsOENBQUMsSUFBSSx1REFBQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBQyxJQUFJLDRDQUE0QyxFQUFFO0FBQ3RFLFdBQVc7QUFDWCxvQ0FBb0MsOENBQUMsSUFBSSx1REFBQztBQUMxQztBQUNBLHFCQUFxQixtREFBQztBQUN0QixhQUFhLGVBQWUsOENBQUMsSUFBSSx1REFBQztBQUNsQyxtQkFBbUIsdURBQUM7QUFDcEI7QUFDQTtBQUNBLDZCQUE2QixtREFBQyxFQUFFLDhDQUFDLElBQUksdURBQUM7QUFDdEMsUUFBUSx1REFBQztBQUNULFVBQVUsdURBQUM7QUFDWCxZQUFZLG9EQUFFLENBQUMsb0RBQUM7QUFDaEIsWUFBWSx1REFBQyxlQUFlLG9EQUFDO0FBQzdCO0FBQ0EsVUFBVSx1REFBQztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVMsc0NBQUM7QUFDVixXQUFXLHVEQUFDO0FBQ1osNkJBQTZCLG1EQUFDLEVBQUUsOENBQUMsSUFBSSx1REFBQztBQUN0QyxRQUFRLHVEQUFDO0FBQ1QsVUFBVSx1REFBQztBQUNYLFlBQVksb0RBQUUsQ0FBQyxvREFBQztBQUNoQixZQUFZLHVEQUFDLGVBQWUsb0RBQUM7QUFDN0I7QUFDQSxVQUFVLHVEQUFDO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFFBQVEsdURBQUM7QUFDVCxVQUFVLHVEQUFDO0FBQ1gsWUFBWSxvREFBRSxDQUFDLG9EQUFDO0FBQ2hCLFlBQVksdURBQUMsZUFBZSxvREFBQztBQUM3QjtBQUNBLFVBQVUsdURBQUM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTLHNDQUFDO0FBQ1YsV0FBVyx1REFBQztBQUNaO0FBQ0E7QUFDQSxDQUFDLHdCQUF3QixvREFBQztBQUMxQjtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsMkNBQUU7QUFDaEI7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBQyxJQUFJLHVEQUFDO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLHVEQUFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUMsd0JBQXdCLHVEQUFDLFVBQVUsMkJBQTJCLGtDQUFrQyxvREFBQztBQUNsRztBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUFFLGdCQUFnQiwyQ0FBRSxvQkFBb0IsMkNBQUU7QUFDeEQ7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBQyxJQUFJLHVEQUFDO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTSx1REFBQztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU0sdURBQUM7QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUMsVUFBVSxxQkFBcUIsdUNBQXVDLG9EQUFDO0FBQ3hFO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsR0FBRztBQUNIO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBQyxJQUFJLHVEQUFDO0FBQzVCLE1BQU0sdURBQUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxDQUFDLFVBQVUsc0JBQXNCLFNBQVMsdURBQXVELHVDQUF1QyxvREFBQztBQUN6STtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLEdBQUc7QUFDSDtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjLDJDQUFFO0FBQ2hCO0FBQ0E7QUFDQSxzQkFBc0IsOENBQUMsSUFBSSx1REFBQztBQUM1QixNQUFNLHVEQUFDO0FBQ1AsUUFBUSx1REFBQztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLDhCQUE4QixTQUFTLDRCQUE0QixvREFBb0Qsb0RBQUM7QUFDbkk7QUFDQTtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDLGtCQUFrQiwwQkFBMEI7QUFDNUMsV0FBVywwQkFBMEI7QUFDckMsV0FBVztBQUNYLEdBQUc7QUFDSDtBQUNBLGFBQWEsU0FBUztBQUN0Qiw0QkFBNEIsd0NBQUM7QUFDN0IsSUFBSSwwQ0FBRTtBQUNOO0FBQ0EsS0FBSyxJQUFJLGVBQWU7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQiw4Q0FBQyxJQUFJLHVEQUFDO0FBQzVCLE1BQU0sdURBQUMsYUFBYSxvREFBQztBQUNyQixNQUFNLHVEQUFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMENBQUUsT0FBTywwQ0FBRTtBQUM3QixPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUMsVUFBVSx3Q0FBd0MsdUJBQXVCLHVEQUFDLFdBQVcsNEJBQTRCLG1EQUFtRCxvREFBQztBQUN0SztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxhQUFhLFNBQVM7QUFDdEIsNEJBQTRCLHdDQUFDO0FBQzdCO0FBQ0EsaUNBQWlDLG9CQUFvQjtBQUNyRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEMsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLFdBQVcsMENBQUU7QUFDYjtBQUNBLEtBQUssSUFBSSxlQUFlLGNBQWMsOENBQUMsSUFBSSx1REFBQztBQUM1QztBQUNBLE1BQU0sdURBQUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBDQUFFLE9BQU8sMENBQUU7QUFDN0IsT0FBTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSx5RkFBeUYsa0JBQWtCO0FBQzNHO0FBQ0EsaVRBQWlUO0FBQ2pULENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyx5Q0FBeUMsb0RBQUM7QUFDM0M7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLCtCQUErQjtBQUMzQyxpQkFBaUIsOEJBQThCO0FBQy9DLGFBQWEsZ0NBQWdDO0FBQzdDLHNCQUFzQiwyQkFBMkI7QUFDakQscUJBQXFCLDRCQUE0QjtBQUNqRCxtQkFBbUIsNEJBQTRCO0FBQy9DLGlCQUFpQiw0QkFBNEI7QUFDN0MscUJBQXFCLDRCQUE0QjtBQUNqRCxvQkFBb0IsNEJBQTRCO0FBQ2hELGdCQUFnQiw0QkFBNEI7QUFDNUM7QUFDQSxpQkFBaUIseUNBQXlDO0FBQzFEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLHFCQUFxQix3Q0FBQyxtQkFBbUIsd0NBQUM7QUFDMUM7QUFDQSxLQUFLLE1BQU0sd0NBQUM7QUFDWixRQUFRLHFFQUFxRTtBQUM3RSxRQUFRO0FBQ1IsWUFBWSx3Q0FBQyxVQUFVLHdDQUFDLFVBQVUsd0NBQUMsZ0JBQWdCLDZDQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEtBQUssT0FBTyx3Q0FBQyxVQUFVLHdDQUFDLG9CQUFvQix3Q0FBQyxXQUFXLHdDQUFDLFNBQVMsd0NBQUMsUUFBUSx3Q0FBQyxRQUFRLHdDQUFDLFFBQVEsd0NBQUMsUUFBUSw2Q0FBRTtBQUN4RztBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU8sNkNBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU8sNkNBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDRDQUFFLHFCQUFxQiw0Q0FBRSxlQUFlLDRDQUFFLG1CQUFtQiw0Q0FBRSxzQkFBc0IsNENBQUU7QUFDM0Y7QUFDQTtBQUNBLCtVQUErVSxHQUFHLDRCQUE0QixHQUFHO0FBQ2pYLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkRBQTJELEVBQUUsa0dBQWtHLEdBQUcsMERBQTBELEVBQUUsZ0dBQWdHLEdBQUc7QUFDalUsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU0sd0NBQUM7QUFDWixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLE1BQU0sd0NBQUM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbURBQW1ELDBFQUEwRSxTQUFTLGlIQUFpSDtBQUN2UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9CQUFvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSkFBbUosS0FBSztBQUN4SixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx3QkFBd0I7QUFDckUsd0JBQXdCLE9BQU87QUFDL0IsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBLHdDQUF3QyxJQUFJLDRCQUE0QixJQUFJO0FBQzVFLFVBQVU7QUFDVjtBQUNBLHdDQUF3QyxJQUFJLDRCQUE0QixJQUFJO0FBQzVFO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFJLDRCQUE0QixJQUFJO0FBQ3hFLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQyx3QkFBd0I7QUFDbkUsMkJBQTJCLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0dBQW9HLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUN4SDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekMsMEJBQTBCLG9CQUFvQjtBQUM5QyxvQkFBb0IscUNBQXFDO0FBQ3pELHVEQUF1RCxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLElBQUksRUFBRSxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsUUFBUSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLElBQUksRUFBRTtBQUM5TztBQUNBLFVBQVU7QUFDViwyQ0FBMkMsY0FBYyxJQUFJLGNBQWM7QUFDM0UsMEJBQTBCLG9CQUFvQjtBQUM5QyxvQkFBb0IscUNBQXFDO0FBQ3pELHVEQUF1RCxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLElBQUksRUFBRSxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsUUFBUSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxRQUFRLElBQUksRUFBRTtBQUM5TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVE7QUFDL0M7QUFDQTtBQUNBLHVCQUF1QixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLEVBQUU7QUFDbEY7QUFDQTtBQUNBLCtGQUErRixLQUFLO0FBQ3BHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSSw0QkFBNEIsSUFBSTtBQUM5RSxZQUFZO0FBQ1o7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0EsMENBQTBDLElBQUksNEJBQTRCLElBQUk7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQixtQ0FBbUMsT0FBTztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLDBDQUFFO0FBQ2I7QUFDQSxrRUFBa0UsS0FBSztBQUN2RTtBQUNBLE9BQU87QUFDUCxLQUFLLEdBQUcsa0RBQUU7QUFDVjtBQUNBO0FBQ0EsS0FBSyxHQUFHLDhDQUFFO0FBQ1Y7QUFDQTtBQUNBLEtBQUssY0FBYyw4Q0FBQyxJQUFJLHVEQUFDO0FBQ3pCLGFBQWEsbURBQUM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTSxnREFBRSxPQUFPLG1CQUFtQjtBQUNsQyxNQUFNLGdEQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDhCQUE4Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLE9BQU8sS0FBSyx1REFBQztBQUNiLE1BQU0sZ0RBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxxQkFBcUIsOENBQUMsSUFBSSxnREFBQztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sOEJBQThCLHVEQUFDO0FBQ3RDLE1BQU0sbURBQUMsQ0FBQyx1REFBQztBQUNULFNBQVMsc0NBQUM7QUFDVjtBQUNBLG9DQUFvQyw4Q0FBQyxJQUFJLHVEQUFDO0FBQzFDLDhCQUE4Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDRCQUE0Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDZCQUE2Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDZCQUE2Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDZCQUE2Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLDZCQUE2Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOEJBQThCLHVEQUFDO0FBQ3hDLHVCQUF1Qiw4Q0FBQyxJQUFJLGdEQUFDO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw4QkFBOEIsdURBQUM7QUFDeEMsWUFBWSx1REFBQztBQUNiLCtDQUErQyw4Q0FBQyxJQUFJLHVEQUFDO0FBQ3JELFNBQVMsOENBQUMsTUFBTSx1REFBQyxDQUFDLHlDQUFFLFFBQVEsK0NBQUUsa0JBQWtCLDhDQUFDLElBQUksdURBQUM7QUFDdEQsd0JBQXdCLEVBQUU7QUFDMUI7QUFDQSxpQkFBaUIsbURBQUMsR0FBRyxvQkFBb0I7QUFDekM7QUFDQSxTQUFTO0FBQ1QsWUFBWSx1REFBQztBQUNiO0FBQ0E7QUFDQSxDQUFDO0FBR0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT9mNWVkIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/ZDAxYSIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/ZjAyZiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT9lMGU0Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2I5ZjEiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlPzdkODIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT80NTZjIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db2xvclBhbGV0dGUudnVlPzg3MGYiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbnRleHRNZW51LnZ1ZT82ZGQ4Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlLnZ1ZT9jNmY3Iiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlPzZmZjIiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWU/MmQ5ZCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9wYWdlcy9Cb2FyZC52dWU/NDliYiIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy90eXBlcy9Nb2R1bGUudnVlPzJmMmYiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL0NvbG9yUGFsZXR0ZS52dWU/OGY4OCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlPzU1ZTUiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlPzUxNDgiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGVNb2RhbC52dWU/MDAzMCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvV29ya3NwYWNlLnZ1ZT9kMDVhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZT82MGFiIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWU/MWM4MyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZT9iMWNjIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Db250ZXh0TWVudS52dWU/YjZmNyIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWU/ZjkzZCIsIndlYnBhY2s6Ly9rcml0aS8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZT8xMDFhIiwid2VicGFjazovL2tyaXRpLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlP2RlZjkiLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlP2YzYzciLCJ3ZWJwYWNrOi8va3JpdGkvLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvdHlwZXMvTW9kdWxlLnZ1ZT8wNDUxIiwid2VicGFjazovL2tyaXRpLy4vbm9kZV9tb2R1bGVzL0BjeWhua2NrYWxpL3Z1ZTMtY29sb3ItcGlja2VyL2Rpc3QvdnVlMy1jb2xvci1waWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cImNvbG9yLXBhbGV0dGVcIj5cbiAgICA8ZGl2IHYtZm9yPVwiKGNvbG9yLCBpbmRleCkgaW4gY29sb3JzXCIgY2xhc3M9XCJjb2xvci1wYWxldHRlX19jb2xvclwiIDpzdHlsZT1cImBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmNvZGV9YFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJjb2xvci1wYWxldHRlX19jb2RlXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiY29sb3JzW2luZGV4XS5uYW1lXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX25hbWVcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJjb2xvcnNbaW5kZXhdLmNvZGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX3NlbGVjdFwiIEBjbGljaz1cInNlbGVjdEFjdGl2ZUNvbG9yKGNvbG9yKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1wYWxldHRlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGFsZXR0ZV9fYnV0dG9uXCIgQGNsaWNrPVwiYWRkTmV3Q29sb3JcIj5cbiAgICAgICAgK1xuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2xvci1wYWxldHRlX19idXR0b25cIiBAY2xpY2s9XCJzYXZlQ29sb3JzXCI+XG4gICAgICAgIFNhdmUgY29sb3JzXG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiYWN0aXZlX2NvbG9yXCIgY2xhc3M9XCJjb2xvci1wYWxldHRlX19wYWxldHRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1wYWxldHRlX19wYWxldHRlX19jbG9zZVwiIEBjbGljaz1cImNsb3NlUGFsZXR0ZVwiPlxuICAgICAgICAgICAg0JfQsNC60YDRi9GC0YxcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxWdWUzQ29sb3JQaWNrZXIgdi1tb2RlbD1cImFjdGl2ZV9jb2xvci5jb2RlXCIgbW9kZT1cInNvbGlkXCIgOnNob3dDb2xvckxpc3Q9XCJmYWxzZVwiIDpzaG93RXllRHJvcD1cImZhbHNlXCIgdHlwZT1cIkhFWFwiIC8+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1Z1ZTNDb2xvclBpY2tlcn0gZnJvbSAnQGN5aG5rY2thbGkvdnVlMy1jb2xvci1waWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJDb2xvclBhbGV0dGVcIixcbiAgICBjb21wb25lbnRzOiB7IFZ1ZTNDb2xvclBpY2tlciB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgYWN0aXZlX2NvbG9yOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZENvbG9ycygpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZE5ld0NvbG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJyRjb2xvci0xMDAnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICcjNzc3J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZENvbG9ycygpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLkNvbG9yczpsb2FkQ29sb3JzJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMgPSByZXNwb25zZS5jb2xvcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzYXZlQ29sb3JzKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuQ29sb3JzOnNhdmVDb2xvcnMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiB0aGlzLmNvbG9yc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0QWN0aXZlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2NvbG9yID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5hY3RpdmVfY29sb3IgPSBjb2xvclxuICAgICAgICB9LFxuICAgICAgICBjbG9zZVBhbGV0dGUoKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9jb2xvciA9IG51bGxcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5jb2xvci1wYWxldHRlIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgICZfX3NlbGVjdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cblxuICAgIC5jb2xvci1wYWxldHRlX19jb2xvciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYyYjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19idXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICAmX19wYWxldHRlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTgwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zMnB4O1xuICAgICAgICAmX19jbG9zZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTNweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJpdGVtcy5sZW5ndGhcIiBjbGFzcz1cImtyaXRpLWNvbnRleHRcIiA6c3R5bGU9XCJtb2R1bGVTdHlsZVwiIHYtY2xpY2stb3V0c2lkZS1lbGVtZW50PVwiY2xvc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImtyaXRpLWNvbnRleHRfX2l0ZW1zXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIGNsYXNzPVwia3JpdGktY29udGV4dF9faXRlbVwiIEBjbGljaz1cImNsaWNrSXRlbShpdGVtKVwiPlxuICAgICAgICAgICAgICAgIDxpIHYtaWY9XCJpdGVtLmljb25cIiA6Y2xhc3M9XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAge3sgaXRlbS50ZXh0IH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQ29udGV4dE1lbnVcIixcbiAgICBlbWl0czogWydjbG9zZScsICdjbGlja19pdGVtJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2NoZW1lX2NvZGU6IFN0cmluZyxcbiAgICAgICAgY29udGV4dDogT2JqZWN0LFxuICAgICAgICBjb250ZXh0X3R5cGU6IFN0cmluZyxcbiAgICAgICAgbW91c2VfeDogTnVtYmVyLFxuICAgICAgICBtb3VzZV95OiBOdW1iZXIsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgY29udGV4dChjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVudUl0ZW1zKClcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1vdXNlX3hcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLm1vdXNlX3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbW9kdWxlU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMueH1weGAsXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnl9cHhgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgIH0sXG4gICAgICAgIGdldE1lbnVJdGVtcygpIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLkNvbnRleHQ6Z2V0Q29udGV4dEl0ZW1zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuY29udGV4dF90eXBlLFxuICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLmNvbnRleHQudXVpZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuaXRlbXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjbGlja0l0ZW0oaXRlbSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2tfaXRlbScsIGl0ZW0uY29kZSwgXy5jbG9uZURlZXAodGhpcy5jb250ZXh0KSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xuLmtyaXRpLWNvbnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMjk7XG4gICAgcGFkZGluZzogMThweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAmX19pdGVtcyB7XG5cbiAgICB9XG4gICAgJl9faXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiZy1saWdodDtcbiAgICAgICAgY29sb3I6ICRmLWRlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW46IDVweCA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjFweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTBjZTgyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJub2RlXCIgIDpzdHlsZT1cIm1vZHVsZVN0eWxlXCI+XG4gICAgICAgIDxNb2R1bGUgdi1pZj1cIm5vZGUudHlwZSA9PT0gJ01vZHVsZSdcIiA6bm9kZT1cIm5vZGVcIiAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qXG7QotGD0YIg0LzRiyDQv9C+0LTQutC70Y7Rh9Cw0LXQvCDRgtC40L/RiyBQb2ludC3QvtCyINC4INGD0L/RgNCw0LLQu9GP0LXQvCDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtdC8INC4INC+0LHRidC40Lwg0L/QvtCy0LXQtNC10L3QuNC10LxcbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vdHlwZXMvTW9kdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vZHVsZVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBtb2R1bGVTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5ub2RlLnBvaW50Lnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy5ub2RlLnBvaW50Lnl9cHhgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJi5mb2N1cyB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJub2RlX21lbnVcIiBjbGFzcz1cIm5vZGUtbW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2JvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0KLRg9GCINC30LDQs9C+0LvQvtCy0L7QuiDQvNC+0LTRg9C70Y9cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1tb2RhbF9fY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS14LXNxdWFyZS1maWxsXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLW1vZGFsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX21lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gbm9kZV9tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vZGUtbW9kYWxfX21lbnVfX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInthY3RpdmU6aXRlbS5tZXRob2QgPT09IGFjdGl2ZV9tZXRob2R9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRDb250ZW50KGl0ZW0ubWV0aG9kKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaXR0ZXIgdi1pZj1cImRhdGEgIT09IG51bGxcIiA6c2NoZW1lPVwiZGF0YS5zY2hlbWVcIiB2LW1vZGVsPVwiZGF0YS52YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihfLCBuYW1lKSBpbiAkc2xvdHNcIiB2LXNsb3Q6W25hbWVdPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwibmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpdHRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtbW9kYWxfX2NvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbFBhbmVsIDpidXR0b25zPVwiYnV0dG9uc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi9Ed2FyZi9mb3Jtcy9Db250cm9sUGFuZWxcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVNb2RhbFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQ29udHJvbFBhbmVsXG4gICAgfSxcbiAgICBlbWl0czogWydjbG9zZScsICd1cGRhdGUnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBPYmplY3QsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZV9tZW51OiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlX21ldGhvZDogJ3N0eWxlJyxcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn0KHQvtGF0YDQsNC90LjRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2JpIGJpLWNsb3VkLXVwbG9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBub2RlKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZV9tZW51ID0gbnVsbFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdtZW51JyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZTonbm9kZV9tZW51JyxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuYWN0aXZlX21ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCn0YLQtdC90LjQtSDQuNC3INC90L7QtNCwXG4gICAgICAgIGdldERhdGEocHJvcHMpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMudmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy52YXJpYWJsZSA9ICdkYXRhJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuTm9kZTpnZXREYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMubm9kZS51dWlkLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMudHJhbnNmb3JtTWV0aG9kKCdnZXQnLCBwcm9wcy5tZXRob2QpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcHMudmFyaWFibGVdID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMudGhlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMudGhlbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDQl9Cw0L/QuNGB0Ywg0LIg0L3QvtC0XG4gICAgICAgIHNldERhdGEoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5Ob2RlOnNldERhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogdGhpcy5ub2RlLnV1aWQsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy50cmFuc2Zvcm1NZXRob2QoJ3NldCcsIHRoaXMuYWN0aXZlX21ldGhvZCksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogdGhpcy5kYXRhLnZhbHVlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLCByZXNwb25zZSkgLy8g0J/QvtGB0YvQu9Cw0LXRgtGB0Y8g0LTQu9GPINC+0LHQvdC+0LLQu9C10L3QuNGPINGB0YXQtdC80YtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldENvbnRlbnQobWV0aG9kKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9tZXRob2QgPSBtZXRob2RcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmFjdGl2ZV9tZXRob2QsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCf0YDQtdC+0LHRgNCw0LfRg9C10YIgXCJwcmVmaXgsIG1ldGhvZFwiINCyIFwicHJlZml4TWV0aG9kXCJcbiAgICAgICAgdHJhbnNmb3JtTWV0aG9kKHByZWZpeCwgbWV0aG9kKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgbWV0aG9kLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWV0aG9kLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubm9kZS1tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5YztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgJl9fYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcblxuICAgIH1cblxuICAgICZfX2Nsb3NlIHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNGY0ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgJl9fbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDExcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzlkOWQ5ZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzI4NGQ2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIGZsZXg6IDEgMCAwO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJ3b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkXCJcbiAgICAgY2xhc3M9XCJ3b3Jrc3BhY2VcIlxuICAgICA6c3R5bGU9XCJgd2lkdGg6JHt3b3Jrc3BhY2Vfd2lkdGh9cHg7aGVpZ2h0OiR7d29ya3NwYWNlX2hlaWdodH1weGBcIlxuICAgICBAbW91c2Vkb3duLmN0cmwuc2VsZj1cIm1vdmVQbGF0b1wiXG4gICAgIEBtb3VzZXVwLnNlbGY9XCJkcm9wUGxhdG9cIlxuICAgICBAbW91c2Vtb3ZlPVwibW91c2Vtb3ZlXCJcbiAgICAgQGRibGNsaWNrLnNlbGY9XCJ3b3Jrc3BhY2VDb250ZXh0TWVudVwiXG4+XG4gICAgPGRpdiBjbGFzcz1cIndvcmtzcGFjZV9fcHJlbG9hZGVyXCI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwid29ya3NwYWNlX19wbGF0b1wiIDpzdHlsZT1cImBtYXJnaW4tbGVmdDokeyBwbGF0b194IH1weDttYXJnaW4tdG9wOiR7IHBsYXRvX3kgfXB4YFwiPlxuXG4gICAgICAgIDxDb2xvclBhbGV0dGUvPlxuXG4gICAgICAgIDxOb2RlIHYtZm9yPVwibm9kZSBpbiBub2Rlc1wiIDpub2RlPVwibm9kZVwiXG4gICAgICAgICAgICAgOnJlZj1cIm5vZGUuaWRcIiA6Y2xhc3M9XCJ7IGZvY3VzOm5vZGUgPT09IGFjdGl2ZV9ub2RlIH1cIlxuICAgICAgICAgICAgIEBtb3VzZWRvd249XCJub2RlSG9sZChub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICBAbW91c2V1cD1cIm5vZGVEcm9wXCJcbiAgICAgICAgICAgICBAY2xpY2suY3RybD1cImNyZWF0ZUxpbmsobm9kZSlcIlxuICAgICAgICAgICAgIEBjb250ZXh0bWVudS5wcmV2ZW50PVwib3BlbkNvbnRleHRNZW51KG5vZGUpXCJcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8Tm9kZU1vZGFsIDpub2RlPVwibm9kZVwiIEBjbG9zZT1cIm5vZGUgPSBudWxsXCIgQHVwZGF0ZT1cImdldFNjaGVtZVwiLz5cbiAgICA8Q29udGV4dE1lbnVcbiAgICAgICAgOmNvbnRleHQ9XCJjb250ZXh0X21lbnVfb2JqZWN0XCJcbiAgICAgICAgY29udGV4dF90eXBlPVwibm9kZVwiXG4gICAgICAgIDpzY2hlbWVfY29kZT1cImFjdGl2ZV9zY2hlbWVfY29kZVwiXG4gICAgICAgIDptb3VzZV94PVwibW91c2VfeFwiXG4gICAgICAgIDptb3VzZV95PVwibW91c2VfeVwiXG4gICAgICAgIEBjbG9zZT1cImNsb3NlQ29udGV4dE1lbnVcIlxuICAgICAgICBAY2xpY2tfaXRlbT1cImNsaWNrQ29udGV4dE1lbnVJdGVtXCJcbiAgICAvPlxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgTm9kZU1vZGFsIGZyb20gXCIuL05vZGVNb2RhbFwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuL0NvbG9yUGFsZXR0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJXb3Jrc3BhY2VcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5vZGUsIC8vINCa0L7QvNC/0L7QvdC10L3RgiDRgNC10LDQu9C40LfRg9GO0YnQuNC5INC90L7QtNGDXG4gICAgICAgIE5vZGVNb2RhbCwgLy8g0JrQvtC80L/QvtC90LXQvdGCINGA0LDQsdC+0YfQtdC1INC+0LrQvdC+INC90L7QtNCwXG4gICAgICAgIENvbnRleHRNZW51LCAvLyDQmtC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgICAgIENvbG9yUGFsZXR0ZVxuICAgIH0sXG4gICAgcHJvcHM6IHtcblxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2ZV9zY2hlbWVfY29kZTogJ2NhbGN1bGF0b3InLCAvLyDQmNC80Y8g0LDQutGC0LjQstC90L7QuSDRgtC10LzRi1xuICAgICAgICAgICAgc2NoZW1lOiB7fSwgLy8g0JDQutGC0LjQstC90LDRjyDRgdGF0LXQvNCwXG4gICAgICAgICAgICBjb250ZXh0X21lbnVfb2JqZWN0OiBudWxsLCAvLyDQntCx0YrQtdC60YIg0LrQvtC90YLQtdC60YHRgtC90L7Qs9C+INC80LXQvdGOXG5cbiAgICAgICAgICAgIG1vdXNlX3g6IDAsXG4gICAgICAgICAgICBtb3VzZV95OiAwLFxuICAgICAgICAgICAgd29ya3NwYWNlX3dpZHRoOiBudWxsLCAvLyDQqNC40YDQuNC90LAg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgICAgIHdvcmtzcGFjZV9oZWlnaHQ6IG51bGwsIC8vINCS0YvRgdC+0YLQsCDRgNCw0LHQvtGH0LXQuSDQvtCx0LvQsNGB0YLQuFxuICAgICAgICAgICAgaG9sZF94X2ZhY3RvcjogbnVsbCwgLy8g0J/QvtC/0YDQsNCy0LrQsCDQvtCx0YrQtdC60YLQsCDQv9C+IHhcbiAgICAgICAgICAgIGhvbGRfeV9mYWN0b3I6IG51bGwsIC8vINCf0L7Qv9GA0LDQstC60LAg0L7QsdGK0LXQutGC0LAg0L/QviB5XG4gICAgICAgICAgICB3b3Jrc3BhY2Vfc2l6ZV9pc19kZWZpbmVkOiBmYWxzZSwgLy8g0KDQsNC30LzQtdGAINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4INC+0L/RgNC10LTQtdC70ZHQvVxuICAgICAgICAgICAgcGxhdG9feDogMCwgLy8g0KHQvNC10YnQtdC90LjQtSDQutCw0YDRgtGLINC/0L4g0L7RgdC4INClXG4gICAgICAgICAgICBwbGF0b195OiAwLCAvLyDQodC80LXRidC10L3QuNC1INC60LDRgNGC0Ysg0L/QviDQvtGB0LggWVxuICAgICAgICAgICAgbm9kZTogbnVsbCwgLy8g0JTQsNC90L3Ri9C1INC90L7QtNCwXG4gICAgICAgICAgICBhY3RpdmVfbm9kZTogbnVsbCwgLy8g0JLRi9C00LXQu9C10L3QvdGL0Lkg0L3QvtC0XG4gICAgICAgICAgICBsYXN0X2hvbGRfeDogMCwgLy8g0J/QvtC30LjRhtC40Y8g0L3QvtC00LAg0L/QtdGA0LXQtCDQv9C10YDQtdC80LXRidC10L3QuNC10Lwg0L/QviBYXG4gICAgICAgICAgICBsYXN0X2hvbGRfeTogMCwgLy8g0J/QvtC30LjRhtC40Y8g0L3QvtC00LAg0L/QtdGA0LXQtCDQv9C10YDQtdC80LXRidC10L3QuNC10Lwg0L/QviBZXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG5vZGVzKCkgeyAvLyDQndC+0LTRiyDRgdGF0LXQvNGLXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWU/Lm5vZGVzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSgpIC8vINCj0YHRgtCw0L3QvtCy0LjRgtGMINGA0LDQt9C80LXRgNGLINC+0LrQvdCwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlZmluZVdvcmtzcGFjZVNpemUpXG4gICAgICAgIHRoaXMuZ2V0U2NoZW1lKClcbiAgICB9LFxuICAgIGJlZm9yZVVubW91bnQoKSB7IC8vINCf0LXRgNC10LQg0YDQsNC30LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0YPQtNCw0LvQuNGC0Ywg0YHQu9GD0YjQsNGC0LXQu9GMINGA0LDQt9C80LXRgNC+0LIg0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LhcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVmaW5lV29ya3NwYWNlU2l6ZSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvQuNGC0Ywg0YDQsNC30LzQtdGAINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIGRlZmluZVdvcmtzcGFjZVNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSB0aGlzLiRlbC5wYXJlbnROb2RlXG4gICAgICAgICAgICAgICAgLy8g0JfQsNC/0LjRgdGL0LLQsNC10Lwg0Y3RgtC4INC00LDQvdC90YvQtSDQsiDQs9C70L7QsdCw0LvRjNC90YvQtSDQv9C10YDQtdC80LXQvdC90YvQtSBLcml0aVxuICAgICAgICAgICAgICAgIEtyaXRpLmdsb2JhbC53b3Jrc3BhY2Vfd2lkdGggPSB0aGlzLndvcmtzcGFjZV93aWR0aCA9IHBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgICAgICBLcml0aS5nbG9iYWwud29ya3NwYWNlX2hlaWdodCA9IHRoaXMud29ya3NwYWNlX2hlaWdodCA9IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud29ya3NwYWNlX3dpZHRoICYmIHRoaXMud29ya3NwYWNlX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzcGFjZV9zaXplX2lzX2RlZmluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINGB0YXQtdC80YNcbiAgICAgICAgZ2V0U2NoZW1lKCkge1xuICAgICAgICAgICAgS3JpdGkuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdrcml0aS5hcGkuU2NoZW1lOmdldFNjaGVtZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAnc2NoZW1lX2NvZGUnOiB0aGlzLmFjdGl2ZV9zY2hlbWVfY29kZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVtZSA9IHJlc3BvbnNlLnNjaGVtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7Rh9C40YHRgtC40YLRjCDQvdC+0LTRiyDQvtGCINC70LjRiNC90LjRhSDQtNCw0L3QvdGL0YVcbiAgICAgICAgc2FuaXRpemVOb2RlcygpIHtcbiAgICAgICAgICAgIGxldCBub2RlcyA9IF8uY2xvbmVEZWVwKHRoaXMuc2NoZW1lLm5vZGVzKVxuICAgICAgICAgICAgbm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUuc3RhdGljXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KHQvtGF0YDQsNC90LjRgtGMINC90L7QtNGLXG4gICAgICAgIHNhdmVTY2hlbWUoKSB7XG4gICAgICAgICAgICBLcml0aS5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2tyaXRpLmFwaS5TY2hlbWU6c2V0U2NoZW1lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZV9jb2RlOiB0aGlzLmFjdGl2ZV9zY2hlbWVfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lX2RhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc2NoZW1lLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5zY2hlbWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlczogdGhpcy5zYW5pdGl6ZU5vZGVzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm9kZXMgc2F2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQlNCy0LjQs9Cw0YLRjCDQutCw0YDRgtGDXG4gICAgICAgIG1vdmVQbGF0bygpIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZF94X2ZhY3RvciA9IHRoaXMubW91c2VfeCAtIHRoaXMucGxhdG9feFxuICAgICAgICAgICAgdGhpcy5ob2xkX3lfZmFjdG9yID0gdGhpcy5tb3VzZV95IC0gdGhpcy5wbGF0b195XG4gICAgICAgICAgICB0aGlzLmhvbGRfcGxhdG8gPSB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgdGC0LDQstC40YLRjCDQutCw0YDRgtGDXG4gICAgICAgIGRyb3BQbGF0bygpIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZF9wbGF0byA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnNhdmVTY2hlbWUoKSAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KTQuNC60YHQuNGA0L7QstCw0YLRjCDQtNCy0LjQttC10L3QuNC1INC80YvRiNC4XG4gICAgICAgIG1vdXNlbW92ZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZV94ID0gZXZlbnQucGFnZVhcbiAgICAgICAgICAgIHRoaXMubW91c2VfeSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICB0aGlzLm1vdmVOb2RlKCkgLy8g0JTQstC40LPQsNGC0Ywg0L7QsdGK0LXQutGCINC10YHQu9C4INC+0L0g0LDQutGC0LjQstC10L1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9C10YDQtdC80LXRidC10L3QuNC1INC90L7QtNCwXG4gICAgICAgIG1vdmVOb2RlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlX25vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlLnBvaW50LnggPSB0aGlzLm1vdXNlX3ggLSB0aGlzLmhvbGRfeF9mYWN0b3JcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlLnBvaW50LnkgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLmhvbGRfeV9mYWN0b3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LTQstC40LPQsNC10YLRgdGPINC60LDRgNGC0LBcbiAgICAgICAgICAgIGlmICh0aGlzLmhvbGRfcGxhdG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRvX3ggPSB0aGlzLm1vdXNlX3ggLSB0aGlzLmhvbGRfeF9mYWN0b3JcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXRvX3kgPSB0aGlzLm1vdXNlX3kgLSB0aGlzLmhvbGRfeV9mYWN0b3JcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhpcy5wbGF0b194ICsgdGhpcy5ib2R5X3hfZmFjdG9yLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRoaXMucGxhdG9feSArIHRoaXMuYm9keV95X2ZhY3RvclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RoaXMucXVhbnRpemVPYmplY3RzKClcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0YXQstCw0YIg0L3QvtC00LBcbiAgICAgICAgbm9kZUhvbGQobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZUhvbGRQb3NpdGlvbigpXG4gICAgICAgICAgICBub2RlLnN0YXRpYy5mb2N1cyA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaG9sZF94X2ZhY3RvciA9IHRoaXMubW91c2VfeCAtIG5vZGUucG9pbnQueFxuICAgICAgICAgICAgdGhpcy5ob2xkX3lfZmFjdG9yID0gdGhpcy5tb3VzZV95IC0gbm9kZS5wb2ludC55XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9ub2RlID0gbm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDRhNC40LrRgdC40YDQvtCy0LDRgtGMINC/0L7Qt9C40YbQuNGOINC90L7QtNCwXG4gICAgICAgIHNhdmVIb2xkUG9zaXRpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RfaG9sZF94ID0gdGhpcy5tb3VzZV94XG4gICAgICAgICAgICB0aGlzLmxhc3RfaG9sZF95ID0gdGhpcy5tb3VzZV95XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0L3QvtC0XG4gICAgICAgIG5vZGVEcm9wKCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3RhdGljLmZvY3VzID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX25vZGUgPSBudWxsXG5cbiAgICAgICAgICAgIC8vINCh0L7RhdGA0LDQvdGP0YLRjCDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0LHRi9C7INGB0LTQstC40L3Rg9GCINC+0LHRitC10LrRglxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdF9ob2xkX3ggIT09IHRoaXMubW91c2VfeCB8fCB0aGlzLmxhc3RfaG9sZF95ICE9PSB0aGlzLm1vdXNlX3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTY2hlbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YLQutGA0YvRgtGMINC80LXQvdGOINGA0LDQsdC+0YfQtdC5INC+0LHQu9Cw0YHRgtC4XG4gICAgICAgIHdvcmtzcGFjZUNvbnRleHRNZW51KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y4g0YDQsNCx0L7Rh9C10Lkg0L7QsdC70LDRgdGC0LgnKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YLQutGA0YvRgtGMINC60L7QvdGC0LXQutGB0YLQvdC+0LUg0LzQtdC90Y5cbiAgICAgICAgb3BlbkNvbnRleHRNZW51KG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF9tZW51X29iamVjdCA9IG5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0LrRgNGL0YLRjCDQutC+0L3RgtC10LrRgdGC0L3QvtC1INC80LXQvdGOXG4gICAgICAgIGNsb3NlQ29udGV4dE1lbnUoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfbWVudV9vYmplY3QgPSBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RgtC60YDRi9GC0Ywg0LrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjiDQvdC+0LTQsFxuICAgICAgICBjbGlja0NvbnRleHRNZW51SXRlbShjb2RlLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gJ29wZW5Ob2RlU2V0dGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gY29udGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUgPT09ICdjbG9uZU5vZGUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVVVUlEKCh1dWlkKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnRleHQudXVpZCA9IHV1aWRcbiAgICAgICAgICAgICAgICAvLyAgICAgY29udGV4dC5wb2ludC54ICs9IDEwMFxuICAgICAgICAgICAgICAgIC8vICAgICBjb250ZXh0LnBvaW50LnkgKz0gMTAwXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZW1lLm5vZGVzLnB1c2goY29udGV4dClcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Y2xvbmVOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgdGhlbjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHJlc3BvbnNlLm5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucG9pbnQueCArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucG9pbnQueSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1lLm5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNC/0YDQvtGB0LjRgtGMINCz0LXQvdC10YDQsNGG0LjRjiB1dWlkXG4gICAgICAgIGNyZWF0ZVVVSUQoZm4pIHtcbiAgICAgICAgICAgIEtyaXRpLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAna3JpdGkuYXBpLk5vZGU6Y3JlYXRlVVVJRCcsXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmbihyZXNwb25zZS51dWlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlTGluaygpe30sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xuLndvcmtzcGFjZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAkYmctZGFyaztcbiAgICBjb2xvcjogJGYtZGFyaztcblxuICAgICZfX3BsYXRvIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjc1O1xuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYm9hcmRcIj5cbiAgICAgICAgPFdvcmtzcGFjZSAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBXb3Jrc3BhY2UgZnJvbSBcIi4uL2ludGVyZmFjZS9Xb3Jrc3BhY2VcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkJvYXJkXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBXb3Jrc3BhY2VcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYm9hcmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJub2RlXCIgY2xhc3M9XCJtb2R1bGVcIiA6c3R5bGU9XCJzdHlsZV9tb2R1bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZHVsZV9fdGl0bGVcIiA6c3R5bGU9XCJzdHlsZV9tb2R1bGVfdGl0bGVcIj5cbiAgICAgICAgICAgIDxpIDpjbGFzcz1cIm5vZGUuc3RhdGljLmljb25cIj48L2k+XG4gICAgICAgICAgICB7eyBub2RlLnN0YXRpYy5zZXR0aW5ncy5uYW1lIH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk1vZHVsZVwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc3R5bGVfbW9kdWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdGF0aWMuc3R5bGUubW9kdWxlXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlX21vZHVsZV90aXRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuc3RhdGljLnN0eWxlLm1vZHVsZV90aXRsZVxuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubW9kdWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICB9XG59XG5cbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbG9yLXBhbGV0dGUge1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMjE1Njg2Mjc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcbi5jb2xvci1wYWxldHRlX19zZWxlY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcbi5jb2xvci1wYWxldHRlIC5jb2xvci1wYWxldHRlX19jb2xvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmNvbG9yLXBhbGV0dGUgLmNvbG9yLXBhbGV0dGVfX2NvbG9yIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjg2Mjc0NTEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwcHggNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29sb3ItcGFsZXR0ZV9fYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uY29sb3ItcGFsZXR0ZV9fcGFsZXR0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogMTgwcHg7XFxuICBtYXJnaW4tdG9wOiAtMzJweDtcXG59XFxuLmNvbG9yLXBhbGV0dGVfX3BhbGV0dGVfX2Nsb3NlIHtcXG4gIHBhZGRpbmc6IDZweCAxM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQVo7QUFHSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUVRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5jb2xvci1wYWxldHRlIHtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFxuICAgICZfX3NlbGVjdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgfVxcblxcbiAgICAuY29sb3ItcGFsZXR0ZV9fY29sb3Ige1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMmI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxM3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB9XFxuICAgICZfX3BhbGV0dGUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTMycHg7XFxuICAgICAgICAmX19jbG9zZSB7XFxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEzcHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmtyaXRpLWNvbnRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2MDc4NDMxMzcpO1xcbiAgcGFkZGluZzogMThweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ua3JpdGktY29udGV4dF9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiAjMzE5NDMxO1xcbiAgY29sb3I6ICMyNjU1MWI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDVweCA1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIxcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLmtyaXRpLWNvbnRleHRfX2l0ZW0gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5rcml0aS1jb250ZXh0X19pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM5MGNlODI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvc2Nzcy9rcml0aS5wYWxldHRlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBS0k7RUFDSSxtQkNWRztFRFdILGNDVkE7RURXQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhSO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBSVE7RUFDSSxtQkFBQTtBQUZaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mva3JpdGkucGFsZXR0ZS5zY3NzJztcXG4ua3JpdGktY29udGV4dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjI5O1xcbiAgICBwYWRkaW5nOiAxOHB4IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgJl9faXRlbXMge1xcblxcbiAgICB9XFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGJnLWxpZ2h0O1xcbiAgICAgICAgY29sb3I6ICRmLWRlZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIG1hcmdpbjogNXB4IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjFweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzkwY2U4MjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIiRiZy1kYXJrOiAjNWI3NjY5O1xcbiRiZy1saWdodDogIzMxOTQzMTtcXG4kZi1kZWY6ICMyNjU1MWI7XFxuJGItZGVmOiAjNzJiZDhmO1xcbiRmLWRhcms6ICMxZTI0MWU7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9kZS5mb2N1cyB7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL05vZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtBQUNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAmLmZvY3VzIHtcXG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjExNzY0NzA1OSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubm9kZS1tb2RhbF9fYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuLm5vZGUtbW9kYWxfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19jbG9zZSBpIHtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5ub2RlLW1vZGFsX19jbG9zZSBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0ZjRmO1xcbn1cXG4ubm9kZS1tb2RhbF9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubm9kZS1tb2RhbF9fbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLm5vZGUtbW9kYWxfX21lbnVfX2l0ZW0ge1xcbiAgcGFkZGluZzogMHB4IDExcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzlkOWQ5ZDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuLm5vZGUtbW9kYWxfX21lbnVfX2l0ZW0uYWN0aXZlIHtcXG4gIGNvbG9yOiAjNzI4NGQ2O1xcbn1cXG4ubm9kZS1tb2RhbF9fZm9ybSB7XFxuICBmbGV4OiAxIDAgMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Ob2RlTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQVNRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQWjtBQVNZO0VBQ0ksY0FBQTtBQVBoQjtBQVlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBVlI7QUFhSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVhaO0FBYVk7RUFDSSxjQUFBO0FBWGhCO0FBZ0JJO0VBQ0ksV0FBQTtBQWRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDljO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgICAmX19ib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcblxcbiAgICB9XFxuXFxuICAgICZfX2Nsb3NlIHtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICAgIGNvbG9yOiAjYTBhMGEwO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0ZjRmO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgJl9fbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG5cXG4gICAgICAgICZfX2l0ZW0ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMXB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogIzlkOWQ5ZDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcblxcbiAgICAgICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Mjg0ZDY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2Zvcm0ge1xcbiAgICAgICAgZmxleDogMSAwIDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndvcmtzcGFjZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogIzViNzY2OTtcXG4gIGNvbG9yOiAjMWUyNDFlO1xcbn1cXG4ud29ya3NwYWNlX19wbGF0byB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLndvcmtzcGFjZSAua3JpdGktcHJlbG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDU4ODIzNTI5NCk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDEwMDAwMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL2ludGVyZmFjZS9Xb3Jrc3BhY2UudnVlXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvc2Nzcy9rcml0aS5wYWxldHRlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxhQUFBO0VBQ0EsbUJDSk07RURLTixjQ0RLO0FEQVQ7QUFHSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FBRlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9rcml0aS5wYWxldHRlLnNjc3MnO1xcbi53b3Jrc3BhY2Uge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAkYmctZGFyaztcXG4gICAgY29sb3I6ICRmLWRhcms7XFxuXFxuICAgICZfX3BsYXRvIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5rcml0aS1wcmVsb2FkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3NTtcXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XFxuICAgIH1cXG59XFxuXCIsXCIkYmctZGFyazogIzViNzY2OTtcXG4kYmctbGlnaHQ6ICMzMTk0MzE7XFxuJGYtZGVmOiAjMjY1NTFiO1xcbiRiLWRlZjogIzcyYmQ4ZjtcXG4kZi1kYXJrOiAjMWUyNDFlO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzgwZGI4MDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3BhZ2VzL0JvYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjODBkYjgwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kdWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kdWxlIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubW9kdWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICB9XFxufVxcblxcbi5tb2R1bGUgLm1vZHVsZV9fdGl0bGUgaSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YzhhODE2Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZjAyNDJjMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YTU2NDUwMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I1OWJlODcmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1YTAzM2JhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGM4YTgxNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YzhhODE2Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29sb3JQYWxldHRlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI0NGM4YTgxNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzQ0YzhhODE2JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNDRjOGE4MTYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRjOGE4MTZcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNDRjOGE4MTYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjAyNDJjMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmMDI0MmMwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvQ29udGV4dE1lbnUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImRmMDI0MmMwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZGYwMjQyYzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdkZjAyNDJjMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMDI0MmMwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJ2RmMDI0MmMwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhNTY0NTAwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmE1NjQ1MDBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YTU2NDUwMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzZhNTY0NTAwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTU2NDUwMFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2YTU2NDUwMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzI2MTRiZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMjYxNGJkJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2tyaXRpLm1vZy9hcHAvS3JpdGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy92dWUvY29tcG9uZW50cy9pbnRlcmZhY2UvTm9kZU1vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YzI2MTRiZFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZjMjYxNGJkJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNmMyNjE0YmQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMyNjE0YmRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNmMyNjE0YmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1OWJlODdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjU5YmU4NyZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvaW50ZXJmYWNlL1dvcmtzcGFjZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiN2I1OWJlODdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3YjU5YmU4NycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzdiNTliZTg3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3Jrc3BhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiNTliZTg3XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzdiNTliZTg3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVhMDMzYmFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Cb2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NWEwMzNiYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvdmFyL3d3dy9rcml0aS5tb2cvYXBwL0tyaXRpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvdnVlL2NvbXBvbmVudHMvcGFnZXMvQm9hcmQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjg1YTAzM2JhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnODVhMDMzYmEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc4NWEwMzNiYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1YTAzM2JhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzg1YTAzM2JhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI3ZDk0MmEmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL3Zhci93d3cva3JpdGkubW9nL2FwcC9Lcml0aS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL3Z1ZS9jb21wb25lbnRzL3R5cGVzL01vZHVsZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzI3ZDk0MmFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczMjdkOTQyYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzMyN2Q5NDJhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2R1bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyN2Q5NDJhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzMyN2Q5NDJhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Db2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV29ya3NwYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1dvcmtzcGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kdWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZHVsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBBLCByZWYgYXMgUywgb3BlbkJsb2NrIGFzIHksIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBJLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgeCwgbm9ybWFsaXplQ2xhc3MgYXMgUiwgRnJhZ21lbnQgYXMgWGUsIG5vcm1hbGl6ZVN0eWxlIGFzIEcsIHdpdGhEaXJlY3RpdmVzIGFzIFosIHZTaG93IGFzIF8sIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBWLCBjcmVhdGVWTm9kZSBhcyB2ZSwgY3JlYXRlVGV4dFZOb2RlIGFzIGtlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgcSwgaW5qZWN0IGFzIG9lLCB3YXRjaCBhcyB3ZSwgdW5yZWYgYXMgbWUsIHJlYWN0aXZlIGFzIHBlLCBwcm92aWRlIGFzIHNlLCBvbkJlZm9yZU1vdW50IGFzIGx0LCBvbk1vdW50ZWQgYXMgbnQsIGNyZWF0ZUJsb2NrIGFzIFQsIHJlbmRlckxpc3QgYXMgYXQgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBzdCA9IHsgY2xhc3M6IFwiY29sb3ItaW5wdXQtbWVudVwiIH0sIG90ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiQ29sb3JJbnB1dE1lbnVcIixcbiAgcHJvcHM6IHtcbiAgICBpbnB1dFR5cGU6IHsgZGVmYXVsdDogXCJSR0JcIiwgdHlwZTogU3RyaW5nIH1cbiAgfSxcbiAgZW1pdHM6IFtcIm9uQ2hhbmdlSW5wdXROYW1lXCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IGEgPSBTKG4uaW5wdXRUeXBlKSwgaSA9IGQsIHUgPSAoZykgPT4ge1xuICAgICAgYS52YWx1ZSA9IGcsIGkoXCJvbkNoYW5nZUlucHV0TmFtZVwiLCBnKTtcbiAgICB9O1xuICAgIHJldHVybiAoZywgcykgPT4gKHkoKSwgSShcInVsXCIsIHN0LCBbXG4gICAgICB4KFwibGlcIiwge1xuICAgICAgICBjbGFzczogUihhLnZhbHVlID09IFwiUkdCXCIgPyBcImFjdGl2ZVwiIDogXCJcIiksXG4gICAgICAgIG9uQ2xpY2s6IHNbMF0gfHwgKHNbMF0gPSAoYikgPT4gdShcIlJHQlwiKSlcbiAgICAgIH0sIFwiUkdCXCIsIDIpLFxuICAgICAgeChcImxpXCIsIHtcbiAgICAgICAgY2xhc3M6IFIoYS52YWx1ZSA9PSBcIkhTTFwiID8gXCJhY3RpdmVcIiA6IFwiXCIpLFxuICAgICAgICBvbkNsaWNrOiBzWzFdIHx8IChzWzFdID0gKGIpID0+IHUoXCJIU0xcIikpXG4gICAgICB9LCBcIkhTTFwiLCAyKSxcbiAgICAgIHgoXCJsaVwiLCB7XG4gICAgICAgIGNsYXNzOiBSKGEudmFsdWUgPT0gXCJIU1ZcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKSxcbiAgICAgICAgb25DbGljazogc1syXSB8fCAoc1syXSA9IChiKSA9PiB1KFwiSFNWXCIpKVxuICAgICAgfSwgXCJIU1ZcIiwgMiksXG4gICAgICB4KFwibGlcIiwge1xuICAgICAgICBjbGFzczogUihhLnZhbHVlID09IFwiQ01ZS1wiID8gXCJhY3RpdmVcIiA6IFwiXCIpLFxuICAgICAgICBvbkNsaWNrOiBzWzNdIHx8IChzWzNdID0gKGIpID0+IHUoXCJDTVlLXCIpKVxuICAgICAgfSwgXCJDTVlLXCIsIDIpXG4gICAgXSkpO1xuICB9XG59KSwgcnQgPSB7XG4gIGtleTogMCxcbiAgY2xhc3M6IFwiY2stY3AtY29udHJvbGxlci1iYXJcIlxufSwgaXQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sIHV0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMjEuNSAwaDljMC44MzEgMCAxLjUgMC42NjkgMS41IDEuNXY5YzAgMC42MDYtMC4zNjMgMS4xNTYtMC45MjUgMS4zODdzLTEuMjA2IDAuMTA2LTEuNjM3LTAuMzI1bC0yLjQzOC0yLjQzOC01LjQzOCA1LjQzOGMtMC41ODcgMC41ODgtMS41MzggMC41ODgtMi4xMTkgMGwtMi0yYy0wLjU4Ny0wLjU4OC0wLjU4Ny0xLjUzNyAwLTIuMTE5bDUuNDM4LTUuNDM4LTIuNDQ0LTIuNDQ0Yy0wLjQzMS0wLjQzMS0wLjU1Ni0xLjA3NS0wLjMyNS0xLjYzN3MwLjc4MS0wLjkyNSAxLjM4Ny0wLjkyNXpNMTAuNSAzMmgtOWMtMC44MzEgMC0xLjUtMC42NjktMS41LTEuNXYtOWMwLTAuNjA2IDAuMzYyLTEuMTU2IDAuOTI1LTEuMzg3czEuMjA2LTAuMTA2IDEuNjM3IDAuMzI1bDIuNDM4IDIuNDM4IDUuNDM4LTUuNDM4YzAuNTg4LTAuNTg3IDEuNTM3LTAuNTg3IDIuMTE5IDBsMiAyYzAuNTg4IDAuNTg3IDAuNTg4IDEuNTM4IDAgMi4xMTlsLTUuNDM4IDUuNDM4IDIuNDM4IDIuNDM4YzAuNDMxIDAuNDMxIDAuNTU2IDEuMDc1IDAuMzI1IDEuNjM3cy0wLjc4MSAwLjkyNS0xLjM4NyAwLjkyNXpcIiB9LCBudWxsLCAtMSksIGN0ID0gW1xuICB1dFxuXSwgZHQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sIHB0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMjkgMTZjMC03LjE4LTUuODItMTMtMTMtMTNzLTEzIDUuODItMTMgMTN2MGMwIDcuMTggNS44MiAxMyAxMyAxM3MxMy01LjgyIDEzLTEzdjB6TTAgMTZjMC04LjgzNyA3LjE2My0xNiAxNi0xNnMxNiA3LjE2MyAxNiAxNnYwYzAgOC44MzctNy4xNjMgMTYtMTYgMTZzLTE2LTcuMTYzLTE2LTE2djB6XCIgfSwgbnVsbCwgLTEpLCBndCA9IFtcbiAgcHRcbl0sIHZ0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjMyXCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiXG59LCBtdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTAuMDEzIDI5LjMwNmMwLjE1NiAxLjUxMiAxLjQzMSAyLjY5NCAyLjk4NyAyLjY5NGgyNmMxLjY1NiAwIDMtMS4zNDQgMy0zdi02YzAtMS42NTYtMS4zNDQtMy0zLTNoLTN2NWMwIDAuNTUtMC40NSAxLTEgMXMtMS0wLjQ1LTEtMXYtNWgtNHY1YzAgMC41NS0wLjQ1IDEtMSAxcy0xLTAuNDUtMS0xdi01aC00djVjMCAwLjU1LTAuNDUgMS0xIDFzLTEtMC40NS0xLTF2LTVoLTVjLTAuNTUgMC0xLTAuNDUtMS0xczAuNDUtMSAxLTFoNXYtNGgtNWMtMC41NSAwLTEtMC40NS0xLTFzMC40NS0xIDEtMWg1di00aC01Yy0wLjU1IDAtMS0wLjQ1LTEtMXMwLjQ1LTEgMS0xaDV2LTNjMC0xLjY1Ni0xLjM0NC0zLTMtM2gtNmMtMS42NTYgMC0zIDEuMzQ0LTMgM3YyNmMwIDAuMTA2IDAuMDA2IDAuMjA2IDAuMDEzIDAuMzA2elwiIH0sIG51bGwsIC0xKSwgZnQgPSBbXG4gIG10XG5dLCBodCA9IHtcbiAga2V5OiAxLFxuICB2ZXJzaW9uOiBcIjEuMVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogXCIzMlwiLFxuICBoZWlnaHQ6IFwiMzJcIixcbiAgdmlld0JveDogXCIwIDAgMzIgMzJcIlxufSwgeXQgPSAvKiBAX19QVVJFX18gKi8geChcInBhdGhcIiwgeyBkOiBcIk0wLjAxMyAyOS4zMDZjMC4xNTYgMS41MTIgMS40MzEgMi42OTQgMi45ODcgMi42OTRoMjZjMS42NTYgMCAzLTEuMzQ0IDMtM3YtNmMwLTEuNjU2LTEuMzQ0LTMtMy0zaC0zdjVjMCAwLjU1LTAuNDUgMS0xIDFzLTEtMC40NS0xLTF2LTVoLTR2NWMwIDAuNTUtMC40NSAxLTEgMXMtMS0wLjQ1LTEtMXYtNWgtNHY1YzAgMC41NS0wLjQ1IDEtMSAxcy0xLTAuNDUtMS0xdi01aC01Yy0wLjU1IDAtMS0wLjQ1LTEtMXMwLjQ1LTEgMS0xaDV2LTRoLTVjLTAuNTUgMC0xLTAuNDUtMS0xczAuNDUtMSAxLTFoNXYtNGgtNWMtMC41NSAwLTEtMC40NS0xLTFzMC40NS0xIDEtMWg1di0zYzAtMS42NTYtMS4zNDQtMy0zLTNoLTZjLTEuNjU2IDAtMyAxLjM0NC0zIDN2MjZjMCAwLjEwNiAwLjAwNiAwLjIwNiAwLjAxMyAwLjMwNnpcIiB9LCBudWxsLCAtMSksIGJ0ID0gW1xuICB5dFxuXSwga3QgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sICR0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMjEuMzUgMS44MjVsLTYuMzQ0IDYuMzUtMC41ODgtMC41ODhjLTAuNzgxLTAuNzgxLTIuMDUwLTAuNzgxLTIuODMxIDBzLTAuNzgxIDIuMDUwIDAgMi44MzFsMTAgMTBjMC43ODEgMC43ODEgMi4wNTAgMC43ODEgMi44MzEgMHMwLjc4MS0yLjA1MCAwLTIuODMxbC0wLjU4Ny0wLjU4NyA2LjM0NC02LjM1YzIuNDM4LTIuNDM4IDIuNDM4LTYuMzg4IDAtOC44MTlzLTYuMzg3LTIuNDM4LTguODE5IDB6TTMuNDYyIDIwLjIwNmMtMC45MzggMC45MzgtMS40NjIgMi4yMTItMS40NjIgMy41Mzh2Mi42NWwtMS42NjMgMi40OTRjLTAuNTMxIDAuNzk0LTAuNDI1IDEuODUgMC4yNSAyLjUyNXMxLjczMSAwLjc4MSAyLjUyNSAwLjI1bDIuNDk0LTEuNjYzaDIuNjVjMS4zMjUgMCAyLjYtMC41MjUgMy41MzctMS40NjJsNy41NDQtNy41NDQtMi44MzEtMi44MzEtNy41NDQgNy41NDRjLTAuMTg4IDAuMTg4LTAuNDQ0IDAuMjk0LTAuNzA2IDAuMjk0aC0yLjI1NnYtMi4yNTZjMC0wLjI2MiAwLjEwNi0wLjUxOSAwLjI5NC0wLjcwNmw3LjU0NC03LjU0NC0yLjgzMS0yLjgzMS03LjU0NCA3LjU0NHpcIiB9LCBudWxsLCAtMSksIHd0ID0gW1xuICAkdFxuXSwgeHQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMzJcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbn0sIEN0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNMzIgMTZjMCAwLjA1NiAwIDAuMTEzIDAgMC4xNjktMC4wMjUgMi4yODEtMi4xIDMuODMxLTQuMzgxIDMuODMxaC02LjExOWMtMS42NTYgMC0zIDEuMzQ0LTMgMyAwIDAuMjEyIDAuMDI1IDAuNDE5IDAuMDYzIDAuNjE5IDAuMTMxIDAuNjM3IDAuNDA2IDEuMjUgMC42NzUgMS44NjkgMC4zODEgMC44NjMgMC43NTYgMS43MTkgMC43NTYgMi42MjUgMCAxLjk4OC0xLjM1IDMuNzk0LTMuMzM3IDMuODc1LTAuMjE5IDAuMDA2LTAuNDM4IDAuMDEyLTAuNjYyIDAuMDEyLTguODMxIDAtMTUuOTk0LTcuMTYyLTE1Ljk5NC0xNnM3LjE2Mi0xNiAxNi0xNiAxNiA3LjE2MiAxNiAxNnpNOCAxOGMwLTEuMTA1LTAuODk1LTItMi0ycy0yIDAuODk1LTIgMnYwYzAgMS4xMDUgMC44OTUgMiAyIDJzMi0wLjg5NSAyLTJ2MHpNOCAxMmMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMnYwYy0xLjEwNSAwLTIgMC44OTUtMiAyczAuODk1IDIgMiAydjB6TTE4IDZjMC0xLjEwNS0wLjg5NS0yLTItMnMtMiAwLjg5NS0yIDJ2MGMwIDEuMTA1IDAuODk1IDIgMiAyczItMC44OTUgMi0ydjB6TTI0IDEyYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0ydjBjLTEuMTA1IDAtMiAwLjg5NS0yIDJzMC44OTUgMiAyIDJ2MHpcIiB9LCBudWxsLCAtMSksIEl0ID0gW1xuICBDdFxuXSwgTXQgPSB7XG4gIGtleTogMSxcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IFwiMjhcIixcbiAgaGVpZ2h0OiBcIjMyXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI4IDMyXCJcbn0sIFZ0ID0gLyogQF9fUFVSRV9fICovIHgoXCJwYXRoXCIsIHsgZDogXCJNNCAyYy0yLjIwNiAwLTQgMS43OTQtNCA0djIwYzAgMi4yMDYgMS43OTQgNCA0IDRoMjBjMi4yMDYgMCA0LTEuNzk0IDQtNHYtMTUuMTY5YzAtMS4wNjMtMC40MTktMi4wODEtMS4xNjktMi44MzFsLTQuODMxLTQuODMxYy0wLjc1LTAuNzUtMS43NjktMS4xNjktMi44MzEtMS4xNjloLTE1LjE2OXpNNCA4YzAtMS4xMDYgMC44OTQtMiAyLTJoMTJjMS4xMDYgMCAyIDAuODk0IDIgMnY0YzAgMS4xMDYtMC44OTQgMi0yIDJoLTEyYy0xLjEwNiAwLTItMC44OTQtMi0ydi00ek0xNCAxOGMyLjIwOSAwIDQgMS43OTEgNCA0cy0xLjc5MSA0LTQgNHYwYy0yLjIwOSAwLTQtMS43OTEtNC00czEuNzkxLTQgNC00djB6XCIgfSwgbnVsbCwgLTEpLCBOdCA9IFtcbiAgVnRcbl0sIFN0ID0ge1xuICBrZXk6IDEsXG4gIHZlcnNpb246IFwiMS4xXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjI4XCIsXG4gIGhlaWdodDogXCIzMlwiLFxuICB2aWV3Qm94OiBcIjAgMCAyOCAzMlwiXG59LCBCdCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwicGF0aFwiLCB7IGQ6IFwiTTguNDUgMS4xMDZsLTAuNDUgMC44OTRoLTZjLTEuMTA2IDAtMiAwLjg5NC0yIDJzMC44OTQgMiAyIDJoMjRjMS4xMDYgMCAyLTAuODk0IDItMnMtMC44OTQtMi0yLTJoLTZsLTAuNDUtMC44OTRjLTAuMzM3LTAuNjgxLTEuMDMxLTEuMTA2LTEuNzg4LTEuMTA2aC03LjUyNWMtMC43NTYgMC0xLjQ1IDAuNDI1LTEuNzg3IDEuMTA2ek0yNiA4aC0yNGwxLjMyNSAyMS4xODhjMC4xIDEuNTgxIDEuNDEzIDIuODEzIDIuOTk0IDIuODEzaDE1LjM2MmMxLjU4MSAwIDIuODk0LTEuMjMxIDIuOTk0LTIuODEzbDEuMzI1LTIxLjE4OHpcIiB9LCBudWxsLCAtMSksIEx0ID0gW1xuICBCdFxuXSwgRHQgPSB7XG4gIGtleTogMCxcbiAgY2xhc3M6IFwiY2stY3AtbGluZWFyLWFuZ2xlLWNvbnRhaW5lclwiXG59LCBSdCA9IHsgY2xhc3M6IFwiY2stZ3JhZGllbnQtc2V0LWxhYmVsXCIgfSwgVHQgPSBbXCJ2YWx1ZVwiXSwgSHQgPSB7XG4gIGtleTogMSxcbiAgY2xhc3M6IFwiY2stY3AtbGluZWFyLWFuZ2xlLWNvbnRhaW5lclwiXG59LCBFdCA9IHsgY2xhc3M6IFwiY2stZ3JhZGllbnQtc2V0LWxhYmVsXCIgfSwgWXQgPSBbXCJ2YWx1ZVwiXSwgWHQgPSB7IHN0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjFyZW1cIiB9IH0sIE90ID0geyBjbGFzczogXCJjay1ncmFkaWVudC1zZXQtbGFiZWxcIiB9LCBVdCA9IFtcInZhbHVlXCJdLCBHdCA9IC8qIEBfX1BVUkVfXyAqLyBBKHtcbiAgX19uYW1lOiBcIlBpY2tlck1lbnVcIixcbiAgcHJvcHM6IHtcbiAgICBtb2RlOiB7XG4gICAgICBkZWZhdWx0OiBcImdyYWRpZW50XCIsXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGlucHV0VHlwZTogeyBkZWZhdWx0OiBcIlJHQlwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBncmFkaWVudFR5cGU6IHsgZGVmYXVsdDogXCJsaW5lYXJcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgaXNFeWVEcm9wcGVyVXNpbmc6IHsgZGVmYXVsdDogITEsIHR5cGU6IEJvb2xlYW4gfSxcbiAgICBzaG93Q29sb3JMaXN0OiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0V5ZURyb3A6IHsgZGVmYXVsdDogITAsIHR5cGU6IEJvb2xlYW4gfSxcbiAgICBzaG93SW5wdXRNZW51OiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgYW5nbGU6IHsgZGVmYXVsdDogOTAsIHR5cGU6IE51bWJlciB9LFxuICAgIHBlcmNlbnRhZ2VYOiB7IGRlZmF1bHQ6IDUwLCB0eXBlOiBOdW1iZXIgfSxcbiAgICBwZXJjZW50YWdlWTogeyBkZWZhdWx0OiA1MCwgdHlwZTogTnVtYmVyIH0sXG4gICAgbG9jYWw6IHsgZGVmYXVsdDogeyBhbmdsZTogXCJcIiwgcG9zaXRpb25YOiBcIlwiLCBwb3NpdGlvblk6IFwiXCIgfSwgdHlwZTogT2JqZWN0IH0sXG4gICAgaWNvbkNsYXNzZXM6IHsgZGVmYXVsdDogeyBsaW5lYXI6IFwiXCIsIHJhZGlhbDogXCJcIiwgcnVsZXI6IFwiXCIsIGV5ZURyb3BlcjogXCJcIiwgaW5wdXRNZW51OiBcIlwiLCBzYXZlOiBcIlwiLCBkZWxldGU6IFwiXCIgfSwgdHlwZTogT2JqZWN0IH1cbiAgfSxcbiAgZW1pdHM6IFtcIm9uU2F2ZUNvbG9yXCIsIFwib25DaGFuZ2VNb2RlXCIsIFwib25DaGFuZ2VJbnB1dFR5cGVcIiwgXCJvbkRlbGV0ZUNvbG9yXCIsIFwib25DbGlja0V5ZURyb3BwZXJcIiwgXCJ1cGRhdGU6YW5nbGVcIiwgXCJ1cGRhdGU6cGVyY2VudGFnZVhcIiwgXCJ1cGRhdGU6cGVyY2VudGFnZVlcIiwgXCJvbklucHV0XCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBTKCksIGEgPSBTKCExKSwgaSA9IFMoITEpLCB1ID0gUyghMSksIGcgPSBkLCBzID0gKHYsIG0pID0+IHtcbiAgICAgIHN3aXRjaCAobSkge1xuICAgICAgICBjYXNlIFwiYW5nbGVcIjpcbiAgICAgICAgICBnKFwidXBkYXRlOmFuZ2xlXCIsIHBhcnNlSW50KHYudGFyZ2V0LnZhbHVlKSksIGcoXCJvbklucHV0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicGVyY2VudGFnZVhcIjpcbiAgICAgICAgICBnKFwidXBkYXRlOnBlcmNlbnRhZ2VYXCIsIHBhcnNlSW50KHYudGFyZ2V0LnZhbHVlKSksIGcoXCJvbklucHV0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicGVyY2VudGFnZVlcIjpcbiAgICAgICAgICBnKFwidXBkYXRlOnBlcmNlbnRhZ2VZXCIsIHBhcnNlSW50KHYudGFyZ2V0LnZhbHVlKSksIGcoXCJvbklucHV0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIGIgPSAodikgPT4ge1xuICAgICAgdS52YWx1ZSA9ICExLCBnKFwib25DaGFuZ2VJbnB1dFR5cGVcIiwgdik7XG4gICAgfSwgZiA9ICgpID0+IHtcbiAgICAgIHUudmFsdWUgPSAhdS52YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiAodiwgbSkgPT4gKHkoKSwgSShYZSwgbnVsbCwgW1xuICAgICAgeChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImNrLWNwLW1lbnVcIixcbiAgICAgICAgc3R5bGU6IEcobi5tb2RlID09IFwiZ3JhZGllbnRcIiA/IFwiXCIgOiBcImp1c3RpZnktY29udGVudDogZW5kO1wiKVxuICAgICAgfSwgW1xuICAgICAgICBuLm1vZGUgPT0gXCJncmFkaWVudFwiID8gKHkoKSwgSShcImRpdlwiLCBydCwgW1xuICAgICAgICAgIHgoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBSKFtcImNwLWJ0blwiLCBuLmdyYWRpZW50VHlwZSA9PSBcImxpbmVhclwiID8gXCJhY3RpdmVcIiA6IFwiXCJdKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bMF0gfHwgKG1bMF0gPSAoTikgPT4gdi4kZW1pdChcIm9uQ2hhbmdlTW9kZVwiLCBcImxpbmVhclwiKSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLmxpbmVhciA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMubGluZWFyID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMubGluZWFyKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBpdCwgY3QpKVxuICAgICAgICAgIF0sIDYpLFxuICAgICAgICAgIHgoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBSKFtcImNwLWJ0blwiLCBuLmdyYWRpZW50VHlwZSA9PSBcInJhZGlhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJdKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bMV0gfHwgKG1bMV0gPSAoTikgPT4gdi4kZW1pdChcIm9uQ2hhbmdlTW9kZVwiLCBcInJhZGlhbFwiKSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLnJhZGlhbCA/IFwiXCIgOiBcInBhZGRpbmc6IDZweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMucmFkaWFsID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMucmFkaWFsKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBkdCwgZ3QpKVxuICAgICAgICAgIF0sIDYpLFxuICAgICAgICAgIFooeChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IFIoW1wiY3AtYnRuXCIsIGEudmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIl0pLFxuICAgICAgICAgICAgb25DbGljazogbVsyXSB8fCAobVsyXSA9IChOKSA9PiBhLnZhbHVlID0gIWEudmFsdWUpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5ydWxlciA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMucnVsZXIgPyAoeSgpLCBJKFwiaVwiLCB7XG4gICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgY2xhc3M6IFIobi5pY29uQ2xhc3Nlcy5ydWxlcilcbiAgICAgICAgICAgIH0sIG51bGwsIDIpKSA6ICh5KCksIEkoXCJzdmdcIiwgdnQsIGZ0KSlcbiAgICAgICAgICBdLCA2KSwgW1xuICAgICAgICAgICAgW18sIG4uZ3JhZGllbnRUeXBlID09IFwibGluZWFyXCJdXG4gICAgICAgICAgXSksXG4gICAgICAgICAgWih4KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogUihbXCJjcC1idG5cIiwgaS52YWx1ZSA/IFwiYWN0aXZlXCIgOiBcIlwiXSksXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzNdIHx8IChtWzNdID0gKE4pID0+IGkudmFsdWUgPSAhaS52YWx1ZSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLnJ1bGVyID8gXCJcIiA6IFwicGFkZGluZzogN3B4O1wifWApXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgbi5pY29uQ2xhc3Nlcy5ydWxlciA/ICh5KCksIEkoXCJpXCIsIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICBjbGFzczogUihuLmljb25DbGFzc2VzLnJ1bGVyKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBodCwgYnQpKVxuICAgICAgICAgIF0sIDYpLCBbXG4gICAgICAgICAgICBbXywgbi5ncmFkaWVudFR5cGUgPT0gXCJyYWRpYWxcIl1cbiAgICAgICAgICBdKVxuICAgICAgICBdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgeChcImRpdlwiLCB7XG4gICAgICAgICAgcmVmX2tleTogXCJyaWdodENvbnRhaW5lclwiLFxuICAgICAgICAgIHJlZjogbyxcbiAgICAgICAgICBjbGFzczogXCJjay1jcC1jb250cm9sbGVyLWJhclwiLFxuICAgICAgICAgIHN0eWxlOiB7IGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiwgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJlbmRcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9XG4gICAgICAgIH0sIFtcbiAgICAgICAgICBuLmlzRXllRHJvcHBlclVzaW5nICYmIG4uc2hvd0V5ZURyb3AgPyAoeSgpLCBJKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBpZDogXCJjcC1idG4tZXllZHJvcHBlclwiLFxuICAgICAgICAgICAgY2xhc3M6IFwiY3AtYnRuXCIsXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLmV5ZURyb3BlciA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bNF0gfHwgKG1bNF0gPSAoTikgPT4gdi4kZW1pdChcIm9uQ2xpY2tFeWVEcm9wcGVyXCIpKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMuZXllRHJvcGVyID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMuZXllRHJvcGVyKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBrdCwgd3QpKVxuICAgICAgICAgIF0sIDQpKSA6IFYoXCJcIiwgITApLFxuICAgICAgICAgIG4uc2hvd0lucHV0TWVudSA/ICh5KCksIEkoXCJidXR0b25cIiwge1xuICAgICAgICAgICAga2V5OiAxLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBSKFtcImNwLWJ0blwiLCB1LnZhbHVlID8gXCJhY3RpdmVcIiA6IFwiXCJdKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGYsXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLmlucHV0TWVudSA/IFwiXCIgOiBcInBhZGRpbmc6IDdweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMuaW5wdXRNZW51ID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMuaW5wdXRNZW51KVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCB4dCwgSXQpKVxuICAgICAgICAgIF0sIDYpKSA6IFYoXCJcIiwgITApLFxuICAgICAgICAgIFoodmUob3QsIHtcbiAgICAgICAgICAgIGlucHV0VHlwZTogbi5pbnB1dFR5cGUsXG4gICAgICAgICAgICBvbk9uQ2hhbmdlSW5wdXROYW1lOiBiXG4gICAgICAgICAgfSwgbnVsbCwgOCwgW1wiaW5wdXRUeXBlXCJdKSwgW1xuICAgICAgICAgICAgW18sIHUudmFsdWVdXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbi5zaG93Q29sb3JMaXN0ID8gKHkoKSwgSShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBrZXk6IDIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY2xhc3M6IFwiY3AtYnRuXCIsXG4gICAgICAgICAgICBvbkNsaWNrOiBtWzVdIHx8IChtWzVdID0gKE4pID0+IHYuJGVtaXQoXCJvblNhdmVDb2xvclwiKSksXG4gICAgICAgICAgICBzdHlsZTogRyhgJHtuLmljb25DbGFzc2VzLnNhdmUgPyBcIlwiIDogXCJwYWRkaW5nOiA3cHg7XCJ9YClcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBuLmljb25DbGFzc2VzLnNhdmUgPyAoeSgpLCBJKFwiaVwiLCB7XG4gICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgY2xhc3M6IFIobi5pY29uQ2xhc3Nlcy5zYXZlKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBNdCwgTnQpKVxuICAgICAgICAgIF0sIDQpKSA6IFYoXCJcIiwgITApLFxuICAgICAgICAgIG4ubW9kZSA9PSBcImdyYWRpZW50XCIgPyAoeSgpLCBJKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGtleTogMyxcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjbGFzczogXCJjcC1idG5cIixcbiAgICAgICAgICAgIG9uQ2xpY2s6IG1bNl0gfHwgKG1bNl0gPSAoTikgPT4gdi4kZW1pdChcIm9uRGVsZXRlQ29sb3JcIikpLFxuICAgICAgICAgICAgc3R5bGU6IEcoYCR7bi5pY29uQ2xhc3Nlcy5kZWxldGUgPyBcIlwiIDogXCJwYWRkaW5nOiA3LjVweDtcIn1gKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIG4uaWNvbkNsYXNzZXMuZGVsZXRlID8gKHkoKSwgSShcImlcIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIGNsYXNzOiBSKG4uaWNvbkNsYXNzZXMuZGVsZXRlKVxuICAgICAgICAgICAgfSwgbnVsbCwgMikpIDogKHkoKSwgSShcInN2Z1wiLCBTdCwgTHQpKVxuICAgICAgICAgIF0sIDQpKSA6IFYoXCJcIiwgITApXG4gICAgICAgIF0sIDUxMilcbiAgICAgIF0sIDQpLFxuICAgICAgbi5tb2RlID09IFwiZ3JhZGllbnRcIiA/IFooKHkoKSwgSShcImRpdlwiLCBEdCwgW1xuICAgICAgICB4KFwiZGl2XCIsIG51bGwsIFtcbiAgICAgICAgICB4KFwicFwiLCBSdCwgW1xuICAgICAgICAgICAga2UocShuLmxvY2FsLmFuZ2xlID8gbi5sb2NhbC5hbmdsZSA6IFwiQW5nbGVcIikgKyBcIiBcIiwgMSksXG4gICAgICAgICAgICB4KFwic3BhblwiLCBudWxsLCBxKG4uYW5nbGUpICsgXCLCsFwiLCAxKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIHgoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcInJhbmdlXCIsXG4gICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgbWF4OiBcIjM2MFwiLFxuICAgICAgICAgICAgdmFsdWU6IG4uYW5nbGUsXG4gICAgICAgICAgICBvbklucHV0OiBtWzddIHx8IChtWzddID0gKE4pID0+IHMoTiwgXCJhbmdsZVwiKSlcbiAgICAgICAgICB9LCBudWxsLCA0MCwgVHQpXG4gICAgICAgIF0pXG4gICAgICBdLCA1MTIpKSwgW1xuICAgICAgICBbXywgbi5ncmFkaWVudFR5cGUgPT0gXCJsaW5lYXJcIiAmJiBhLnZhbHVlXVxuICAgICAgXSkgOiBWKFwiXCIsICEwKSxcbiAgICAgIG4ubW9kZSA9PSBcImdyYWRpZW50XCIgPyBaKCh5KCksIEkoXCJkaXZcIiwgSHQsIFtcbiAgICAgICAgeChcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgeChcInBcIiwgRXQsIFtcbiAgICAgICAgICAgIGtlKHEobi5sb2NhbC5wb3NpdGlvblggPyBuLmxvY2FsLnBvc2l0aW9uWCA6IFwiUG9zaXRpb24gWFwiKSArIFwiIFwiLCAxKSxcbiAgICAgICAgICAgIHgoXCJzcGFuXCIsIG51bGwsIHEobi5wZXJjZW50YWdlWCkgKyBcIiVcIiwgMSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJyYW5nZVwiLFxuICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgIG1heDogXCIxMDBcIixcbiAgICAgICAgICAgIHZhbHVlOiBuLnBlcmNlbnRhZ2VYLFxuICAgICAgICAgICAgb25JbnB1dDogbVs4XSB8fCAobVs4XSA9IChOKSA9PiBzKE4sIFwicGVyY2VudGFnZVhcIikpXG4gICAgICAgICAgfSwgbnVsbCwgNDAsIFl0KVxuICAgICAgICBdKSxcbiAgICAgICAgeChcImRpdlwiLCBYdCwgW1xuICAgICAgICAgIHgoXCJwXCIsIE90LCBbXG4gICAgICAgICAgICBrZShxKG4ubG9jYWwucG9zaXRpb25ZID8gbi5sb2NhbC5wb3NpdGlvblkgOiBcIlBvc2l0aW9uIFlcIikgKyBcIiBcIiwgMSksXG4gICAgICAgICAgICB4KFwic3BhblwiLCBudWxsLCBxKG4ucGVyY2VudGFnZVkpICsgXCIlXCIsIDEpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgeChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICBtYXg6IFwiMTAwXCIsXG4gICAgICAgICAgICB2YWx1ZTogbi5wZXJjZW50YWdlWSxcbiAgICAgICAgICAgIG9uSW5wdXQ6IG1bOV0gfHwgKG1bOV0gPSAoTikgPT4gcyhOLCBcInBlcmNlbnRhZ2VZXCIpKVxuICAgICAgICAgIH0sIG51bGwsIDQwLCBVdClcbiAgICAgICAgXSlcbiAgICAgIF0sIDUxMikpLCBbXG4gICAgICAgIFtfLCBuLmdyYWRpZW50VHlwZSA9PSBcInJhZGlhbFwiICYmIGkudmFsdWVdXG4gICAgICBdKSA6IFYoXCJcIiwgITApXG4gICAgXSwgNjQpKTtcbiAgfVxufSksIFB0ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiR3JhZGllbnRCYXJcIixcbiAgZW1pdHM6IFtcIm9uQWRkQ29sb3JcIiwgXCJvbk1vdXNlRG93blwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBvID0gb2UoXCJncmFkaWVudEJhclwiKSwgYSA9IChpKSA9PiB7XG4gICAgICBpLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gKGksIHUpID0+ICh5KCksIEkoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZ3JhZGllbnQtYmFyXCIsXG4gICAgICBvbk1vdXNlZG93bjogdVsxXSB8fCAodVsxXSA9IChnKSA9PiBpLiRlbWl0KFwib25Nb3VzZURvd25cIiwgZykpLFxuICAgICAgb25EcmFnc3RhcnQ6IGFcbiAgICB9LCBbXG4gICAgICB4KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmX2tleTogXCJncmFkaWVudEJhclwiLFxuICAgICAgICByZWY6IG8sXG4gICAgICAgIGNsYXNzOiBcImdyYWRpZW50LWNvbnRhaW5lclwiLFxuICAgICAgICBvbkRibGNsaWNrOiB1WzBdIHx8ICh1WzBdID0gKGcpID0+IGkuJGVtaXQoXCJvbkFkZENvbG9yXCIsIGcpKVxuICAgICAgfSwgbnVsbCwgNTQ0KVxuICAgIF0sIDMyKSk7XG4gIH1cbn0pLCB6dCA9IC8qIEBfX1BVUkVfXyAqLyB4KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29sb3VyLWFyZWEtbWFza1wiIH0sIG51bGwsIC0xKSwgQXQgPSAvKiBAX19QVVJFX18gKi8gQSh7XG4gIF9fbmFtZTogXCJQaWNrZXJXcmFwXCIsXG4gIGVtaXRzOiBbXCJvbk1vdXNlRG93blwiXSxcbiAgc2V0dXAobikge1xuICAgIGNvbnN0IGQgPSBvZShcImNhbnZhc1wiKSwgbyA9IG9lKFwicGlja2VyV3JhcFwiKSwgYSA9IG9lKFwicGlja2VyUG9pbnRlclwiKSwgaSA9ICh1KSA9PiB7XG4gICAgICB1LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gKHUsIGcpID0+ICh5KCksIEkoXCJkaXZcIiwge1xuICAgICAgcmVmX2tleTogXCJwaWNrZXJXcmFwXCIsXG4gICAgICByZWY6IG8sXG4gICAgICBjbGFzczogXCJjcC1waWNrZXItd3JhcFwiLFxuICAgICAgb25Nb3VzZWRvd246IGdbMF0gfHwgKGdbMF0gPSAocykgPT4gdS4kZW1pdChcIm9uTW91c2VEb3duXCIsIHMpKSxcbiAgICAgIG9uRHJhZ3N0YXJ0OiBpXG4gICAgfSwgW1xuICAgICAgeChcImNhbnZhc1wiLCB7XG4gICAgICAgIHJlZl9rZXk6IFwiY2FudmFzXCIsXG4gICAgICAgIHJlZjogZCxcbiAgICAgICAgY2xhc3M6IFwiY29sb3VyLWFyZWFcIlxuICAgICAgfSwgbnVsbCwgNTEyKSxcbiAgICAgIHp0LFxuICAgICAgeChcImRpdlwiLCB7XG4gICAgICAgIHJlZl9rZXk6IFwicGlja2VyUG9pbnRlclwiLFxuICAgICAgICByZWY6IGEsXG4gICAgICAgIGNsYXNzOiBcImNvbG91ci1hcmVhLXBvaW50LWNpcmNsZVwiXG4gICAgICB9LCBudWxsLCA1MTIpXG4gICAgXSwgNTQ0KSk7XG4gIH1cbn0pLCBLdCA9IHsgY2xhc3M6IFwicGlja2VyLWh1ZVwiIH0sIFd0ID0gW1widmFsdWVcIl0sIEZ0ID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiUGlja2VySHVlXCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogeyBkZWZhdWx0OiAwLCB0eXBlOiBOdW1iZXIgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIiwgXCJvbklucHV0XCIsIFwib25DaGFuZ2VcIl0sXG4gIHNldHVwKG4sIHsgZW1pdDogZCB9KSB7XG4gICAgY29uc3QgbyA9IGQsIGEgPSAoaSkgPT4ge1xuICAgICAgbyhcInVwZGF0ZTptb2RlbFZhbHVlXCIsIHBhcnNlRmxvYXQoaS50YXJnZXQudmFsdWUpKSwgbyhcIm9uSW5wdXRcIiwgaSk7XG4gICAgfTtcbiAgICByZXR1cm4gKGksIHUpID0+ICh5KCksIEkoXCJkaXZcIiwgS3QsIFtcbiAgICAgIHgoXCJpbnB1dFwiLCB7XG4gICAgICAgIHZhbHVlOiBuLm1vZGVsVmFsdWUsXG4gICAgICAgIGNsYXNzOiBcInBpY2tlci1odWUtcmFuZ2Utc2xpZGVyXCIsXG4gICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgbWF4OiBcIjM2MFwiLFxuICAgICAgICBzdGVwOiBcIjAuMVwiLFxuICAgICAgICBvbklucHV0OiBhLFxuICAgICAgICBvbkNoYW5nZTogdVswXSB8fCAodVswXSA9IChnKSA9PiBpLiRlbWl0KFwib25DaGFuZ2VcIiwgZykpXG4gICAgICB9LCBudWxsLCA0MCwgV3QpXG4gICAgXSkpO1xuICB9XG59KSwgcXQgPSB7IGNsYXNzOiBcIm9wYWNpdHktYmFyXCIgfSwganQgPSB7IGNsYXNzOiBcInBpY2tlci1vcGFjaXR5LXNsaWRlciBvcGFjaXR5LWJhci1iYWNrZ3JvdW5kXCIgfSwgSnQgPSBbXCJ2YWx1ZVwiXSwgUXQgPSAvKiBAX19QVVJFX18gKi8gQSh7XG4gIF9fbmFtZTogXCJPcGFjaXR5QmFyXCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogeyBkZWZhdWx0OiAwLCB0eXBlOiBOdW1iZXIgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIiwgXCJvbklucHV0XCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBvZShcIm9wYWNpdHlTbGlkZXJcIiksIGEgPSBkLCBpID0gKHUpID0+IHtcbiAgICAgIGEoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBwYXJzZUludCh1LnRhcmdldC52YWx1ZSkpLCBhKFwib25JbnB1dFwiLCB1KTtcbiAgICB9O1xuICAgIHJldHVybiAodSwgZykgPT4gKHkoKSwgSShcImRpdlwiLCBxdCwgW1xuICAgICAgeChcImRpdlwiLCBqdCwgW1xuICAgICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICAgIHJlZl9rZXk6IFwib3BhY2l0eVNsaWRlclwiLFxuICAgICAgICAgIHJlZjogbyxcbiAgICAgICAgICB2YWx1ZTogbi5tb2RlbFZhbHVlLFxuICAgICAgICAgIGNsYXNzOiBcIm9wYWNpdHlfX3NsaWRlclwiLFxuICAgICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgIG1heDogXCIxMDBcIixcbiAgICAgICAgICBvbklucHV0OiBpXG4gICAgICAgIH0sIG51bGwsIDQwLCBKdClcbiAgICAgIF0pXG4gICAgXSkpO1xuICB9XG59KSwgWnQgPSB7IGNsYXNzOiBcImNrLWNwLWlucHV0LWNvbnRlbnRcIiB9LCBfdCA9IHsgY2xhc3M6IFwiY2stY3AtaW5wdXQtbGFiZWxcIiB9LCBlbCA9IFtcIm1pblwiLCBcIm1heFwiLCBcInZhbHVlXCJdLCBZID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiSW5wdXROdW1iZXJcIixcbiAgcHJvcHM6IHtcbiAgICBsYWJlbDogeyBkZWZhdWx0OiBcIlwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBtb2RlbFZhbHVlOiB7IGRlZmF1bHQ6IDAsIHR5cGU6IE51bWJlciB9LFxuICAgIG1pbjogeyBkZWZhdWx0OiAwLCB0eXBlOiBOdW1iZXIgfSxcbiAgICBtYXg6IHsgZGVmYXVsdDogMTAwLCB0eXBlOiBOdW1iZXIgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIl0sXG4gIHNldHVwKG4sIHsgZW1pdDogZCB9KSB7XG4gICAgY29uc3QgbyA9IG4sIGEgPSBkLCBpID0gUyhvLm1vZGVsVmFsdWUpO1xuICAgIHdlKCgpID0+IG8ubW9kZWxWYWx1ZSwgKGYsIHYpID0+IHtcbiAgICAgIGYgIT09IHYgJiYgKGkudmFsdWUgPSBmKTtcbiAgICB9LCB7IGltbWVkaWF0ZTogITAgfSk7XG4gICAgY29uc3QgdSA9IChmKSA9PiB7XG4gICAgICBjb25zdCB2ID0gKE4pID0+IHtcbiAgICAgICAgaS52YWx1ZSA9IE4sIGEoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBOKTtcbiAgICAgIH0sIG0gPSBmLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICghbSlcbiAgICAgICAgcmV0dXJuIHYoby5tb2RlbFZhbHVlKTtcbiAgICAgIGlmIChwYXJzZUludChtKSA+IG8ubWF4KVxuICAgICAgICByZXR1cm4gdihvLm1heCk7XG4gICAgICBhKFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgcGFyc2VJbnQobSkpO1xuICAgIH0sIGcgPSAoZikgPT4ge1xuICAgICAgaS52YWx1ZSA9IGYudGFyZ2V0LnZhbHVlO1xuICAgIH0sIHMgPSAoZikgPT4ge1xuICAgICAgaWYgKFtcIktleUVcIiwgXCJFcXVhbFwiLCBcIkVxdWFsXCIsIFwiQmFja3NsYXNoXCIsIFwiU2xhc2hcIiwgXCJOdW1wYWREZWNpbWFsXCIsIFwiTnVtcGFkQWRkXCJdLmluY2x1ZGVzKGYuY29kZSkpXG4gICAgICAgIHJldHVybiBmLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmLmNvZGUgPT09IFwiRW50ZXJcIiAmJiB1KGYpO1xuICAgIH0sIGIgPSB1O1xuICAgIHJldHVybiAoZiwgdikgPT4gKHkoKSwgSShcImRpdlwiLCBadCwgW1xuICAgICAgeChcInNwYW5cIiwgX3QsIHEobi5sYWJlbCksIDEpLFxuICAgICAgeChcImlucHV0XCIsIHtcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgbWluOiBuLm1pbixcbiAgICAgICAgbWF4OiBuLm1heCxcbiAgICAgICAgdmFsdWU6IGkudmFsdWUsXG4gICAgICAgIG9uSW5wdXQ6IGcsXG4gICAgICAgIG9uS2V5ZG93bjogcyxcbiAgICAgICAgb25Gb2N1c291dDogdlswXSB8fCAodlswXSA9IC8vQHRzLWlnbm9yZVxuICAgICAgICAoLi4ubSkgPT4gbWUoYikgJiYgbWUoYikoLi4ubSkpXG4gICAgICB9LCBudWxsLCA0MCwgZWwpXG4gICAgXSkpO1xuICB9XG59KSwgdGwgPSB7IGNsYXNzOiBcImNrLWNwLWlucHV0LWNvbnRlbnQgY29sb3ItaGV4XCIgfSwgbGwgPSAvKiBAX19QVVJFX18gKi8geChcInNwYW5cIiwgeyBjbGFzczogXCJjay1jcC1pbnB1dC1sYWJlbFwiIH0sIFwiSEVYXCIsIC0xKSwgbmwgPSBbXCJ2YWx1ZVwiXSwgYWwgPSAvKiBAX19QVVJFX18gKi8gQSh7XG4gIF9fbmFtZTogXCJJbnB1dEhleFwiLFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHt9XG4gIH0sXG4gIGVtaXRzOiBbXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiXSxcbiAgc2V0dXAobiwgeyBlbWl0OiBkIH0pIHtcbiAgICBjb25zdCBvID0gbiwgYSA9IGQsIGkgPSBTKFwiXCIpLCB1ID0gKGYpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBmLnRhcmdldC52YWx1ZTtcbiAgICAgIGkudmFsdWUgPSB2LCBpLnZhbHVlID0gYCMke3YucmVwbGFjZSgvIy9nLCBcIlwiKX1gO1xuICAgIH0sIGcgPSAoZikgPT4ge1xuICAgICAgY29uc3QgdiA9IGYudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHYgPT09IG8ubW9kZWxWYWx1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKCEvXiNbMC05YS1mQS1GXSskLy50ZXN0KHYpKSB7XG4gICAgICAgIGkudmFsdWUgPSBvLm1vZGVsVmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBtID0gdi5yZXBsYWNlKC8jL2csIFwiXCIpO1xuICAgICAgc3dpdGNoIChtLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgbSA9IG8ubW9kZWxWYWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbSA9IG0ucmVwZWF0KDMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtID0gbS5zbGljZSgwLCAzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbSA9IG0uc2xpY2UoMCwgNik7XG4gICAgICB9XG4gICAgICBpLnZhbHVlID0gYCMke20udG9VcHBlckNhc2UoKX1gLCBhKFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgaS52YWx1ZSk7XG4gICAgfSwgcyA9IChmKSA9PiB7XG4gICAgICBmLmNvZGUgPT09IFwiRW50ZXJcIiAmJiBnKGYpO1xuICAgIH0sIGIgPSBnO1xuICAgIHJldHVybiB3ZSgoKSA9PiBvLm1vZGVsVmFsdWUsIChmLCB2KSA9PiB7XG4gICAgICBmICE9PSB2ICYmIChpLnZhbHVlID0gZik7XG4gICAgfSwgeyBpbW1lZGlhdGU6ICEwIH0pLCAoZiwgdikgPT4gKHkoKSwgSShcImRpdlwiLCB0bCwgW1xuICAgICAgbGwsXG4gICAgICB4KFwiaW5wdXRcIiwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgdmFsdWU6IGkudmFsdWUsXG4gICAgICAgIG9uSW5wdXQ6IHUsXG4gICAgICAgIG9uS2V5ZG93bjogcyxcbiAgICAgICAgb25Gb2N1c291dDogdlswXSB8fCAodlswXSA9IC8vQHRzLWlnbm9yZVxuICAgICAgICAoLi4ubSkgPT4gbWUoYikgJiYgbWUoYikoLi4ubSkpXG4gICAgICB9LCBudWxsLCA0MCwgbmwpXG4gICAgXSkpO1xuICB9XG59KSwgc2wgPSAobikgPT4ge1xuICBjb25zdCBkID0gL15yZ2JcXCgoXFxzKlxcZCtcXHMqKSwoXFxzKlxcZCtcXHMqKSwoXFxzKlxcZCtcXHMqKVxcKSQvaTtcbiAgaWYgKCFkLnRlc3QobikpXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG8gPSBkLmV4ZWMobik7XG4gIGlmICghbylcbiAgICByZXR1cm4gbnVsbDtcbiAgY29uc3QgYSA9IHBhcnNlSW50KG9bMV0udHJpbSgpLCAxMCksIGkgPSBwYXJzZUludChvWzJdLnRyaW0oKSwgMTApLCB1ID0gcGFyc2VJbnQob1szXS50cmltKCksIDEwKTtcbiAgcmV0dXJuIHtcbiAgICByOiBhLFxuICAgIGc6IGksXG4gICAgYjogdVxuICB9O1xufSwgb2wgPSAobikgPT4ge1xuICBjb25zdCBkID0gL15yZ2JhP1xcKChcXHMqXFxkK1xccyopLChcXHMqXFxkK1xccyopLChcXHMqXFxkK1xccyopLChcXHMqW1xcZC5dK1xccyopXFwpJC9pO1xuICBpZiAoIWQudGVzdChuKSlcbiAgICByZXR1cm4gbnVsbDtcbiAgY29uc3QgbyA9IGQuZXhlYyhuKTtcbiAgaWYgKCFvKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCBhID0gcGFyc2VJbnQob1sxXS50cmltKCksIDEwKSwgaSA9IHBhcnNlSW50KG9bMl0udHJpbSgpLCAxMCksIHUgPSBwYXJzZUludChvWzNdLnRyaW0oKSwgMTApLCBnID0gcGFyc2VGbG9hdChvWzRdLnRyaW0oKSk7XG4gIHJldHVybiB7XG4gICAgcjogYSxcbiAgICBnOiBpLFxuICAgIGI6IHUsXG4gICAgYTogZ1xuICB9O1xufSwgcmwgPSAobikgPT4ge1xuICBjb25zdCBkID0gL14jPyhbYS1mXFxkXXs4fSkkL2k7XG4gIGlmICghZC50ZXN0KG4pKVxuICAgIHJldHVybiBudWxsO1xuICBjb25zdCBvID0gZC5leGVjKG4pO1xuICBpZiAoIW8pXG4gICAgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGEgPSBvWzFdLCBpID0gYS5zdWJzdHJpbmcoNiwgOCksIHUgPSBwYXJzZUludChhLnN1YnN0cmluZygwLCAyKSwgMTYpLCBnID0gcGFyc2VJbnQoYS5zdWJzdHJpbmcoMiwgNCksIDE2KSwgcyA9IHBhcnNlSW50KGEuc3Vic3RyaW5nKDQsIDYpLCAxNiksIGIgPSBwYXJzZUludChpLCAxNikgLyAyNTU7XG4gIHJldHVybiB7IHI6IHUsIGcsIGI6IHMsIGE6IGIgfTtcbn0sIGlsID0gKG4sIGQsIG8sIGEpID0+IHtcbiAgZnVuY3Rpb24gaShmKSB7XG4gICAgY29uc3QgdiA9IGYudG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiB2Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgdiA6IHY7XG4gIH1cbiAgY29uc3QgdSA9IGkoTWF0aC5yb3VuZChuKSksIGcgPSBpKE1hdGgucm91bmQoZCkpLCBzID0gaShNYXRoLnJvdW5kKG8pKSwgYiA9IGkoTWF0aC5yb3VuZChhICogMjU1KSk7XG4gIHJldHVybiBgIyR7dX0ke2d9JHtzfSR7Yn1gO1xufSwgZ2UgPSAobikgPT4ge1xuICB2YXIgZDtcbiAgdHJ5IHtcbiAgICBsZXQgbyA9IChkID0gbi5yZXBsYWNlKFxuICAgICAgL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIChnLCBzLCBiLCBmKSA9PiBcIiNcIiArIHMgKyBzICsgYiArIGIgKyBmICsgZlxuICAgICkuc3Vic3RyaW5nKDEpLm1hdGNoKC8uezJ9L2cpKSA9PSBudWxsID8gdm9pZCAwIDogZC5tYXAoKGcpID0+IHBhcnNlSW50KGcsIDE2KSksIGEgPSBvID09IG51bGwgPyB2b2lkIDAgOiBvWzBdLCBpID0gbyA9PSBudWxsID8gdm9pZCAwIDogb1sxXSwgdSA9IG8gPT0gbnVsbCA/IHZvaWQgMCA6IG9bMl07XG4gICAgcmV0dXJuIE51bWJlci5pc05hTihhKSB8fCBOdW1iZXIuaXNOYU4oaSkgfHwgTnVtYmVyLmlzTmFOKHUpIHx8IGEgPT09IHZvaWQgMCB8fCBpID09PSB2b2lkIDAgfHwgdSA9PT0gdm9pZCAwID8gbnVsbCA6IHtcbiAgICAgIHI6IGEsXG4gICAgICBnOiBpLFxuICAgICAgYjogdVxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59LCBRID0gKG4sIGQsIG8pID0+IHtcbiAgbiA9IG4gLyAyNTUsIGQgPSBkIC8gMjU1LCBvID0gbyAvIDI1NTtcbiAgY29uc3QgYSA9IE1hdGgubWF4KG4sIGQsIG8pLCBpID0gTWF0aC5taW4obiwgZCwgbyk7XG4gIGxldCB1O1xuICByZXR1cm4gYSA9PT0gbiA/IHUgPSAoZCAtIG8pIC8gKGEgLSBpKSA6IGEgPT09IGQgPyB1ID0gMiArIChvIC0gbikgLyAoYSAtIGkpIDogdSA9IDQgKyAobiAtIGQpIC8gKGEgLSBpKSwgdSAqPSA2MCwgdSA8IDAgJiYgKHUgKz0gMzYwKSwgTnVtYmVyLmlzTmFOKHUpICYmICh1ID0gMCksIHU7XG59LCB1bCA9IChuLCBkLCBvKSA9PiB7XG4gIGQgPSBkIC8gMTAwLCBvID0gbyAvIDEwMDtcbiAgbGV0IGEsIGksIHUsIGcgPSBbXTtcbiAgcmV0dXJuIGEgPSAoMSAtIE1hdGguYWJzKDIgKiBvIC0gMSkpICogZCwgaSA9IGEgKiAoMSAtIE1hdGguYWJzKG4gLyA2MCAlIDIgLSAxKSksIHUgPSBvIC0gYSAvIDIsIG4gPj0gMCAmJiBuIDwgNjAgJiYgKGcgPSBbYSwgaSwgMF0pLCBuID49IDYwICYmIG4gPCAxMjAgJiYgKGcgPSBbaSwgYSwgMF0pLCBuID49IDEyMCAmJiBuIDwgMTgwICYmIChnID0gWzAsIGEsIGldKSwgbiA+PSAxODAgJiYgbiA8IDI0MCAmJiAoZyA9IFswLCBpLCBhXSksIG4gPj0gMjQwICYmIG4gPCAzMDAgJiYgKGcgPSBbaSwgMCwgYV0pLCBuID49IDMwMCAmJiBuIDw9IDM2MCAmJiAoZyA9IFthLCAwLCBpXSksIGcubWFwKChzKSA9PiBNYXRoLnJvdW5kKDI1NSAqIChzICsgdSkpKTtcbn0sICRlID0gKG4sIGQsIG8pID0+IFwiI1wiICsgKDE2Nzc3MjE2ICsgKG8gfCBkIDw8IDggfCBuIDw8IDE2KSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpLCBIZSA9IChuLCBkLCBvKSA9PiB7XG4gIGxldCBhID0gdWwobiwgZCwgbyk7XG4gIHJldHVybiB7IHJnYjogYSwgaGV4QTogJGUoYVswXSwgYVsxXSwgYVsyXSkgfTtcbn0sIEVlID0gKG4sIGQsIG8pID0+IHtcbiAgbGV0IGEsIGksIHUsIGcsIHMsIGIsIGYgPSAwLCB2ID0gW107XG4gIGZvciAodlswXSA9IG4gLyAyNTUsIHZbMV0gPSBkIC8gMjU1LCB2WzJdID0gbyAvIDI1NSwgYSA9IHZbMF0sIGkgPSB2WzBdLCBiID0gMCwgdSA9IDA7IHUgPCB2Lmxlbmd0aCAtIDE7IHUrKylcbiAgICB2W3UgKyAxXSA8PSBhICYmIChhID0gdlt1ICsgMV0pLCB2W3UgKyAxXSA+PSBpICYmIChpID0gdlt1ICsgMV0sIGIgPSB1ICsgMSk7XG4gIHJldHVybiBiID09PSAwICYmIChmID0gKHZbMV0gLSB2WzJdKSAvIChpIC0gYSkpLCBiID09PSAxICYmIChmID0gMiArICh2WzJdIC0gdlswXSkgLyAoaSAtIGEpKSwgYiA9PT0gMiAmJiAoZiA9IDQgKyAodlswXSAtIHZbMV0pIC8gKGkgLSBhKSksIGlzTmFOKGYpICYmIChmID0gMCksIGYgPSBmICogNjAsIGYgPCAwICYmIChmID0gZiArIDM2MCksIGcgPSAoYSArIGkpIC8gMiwgYSA9PT0gaSA/IHMgPSAwIDogZyA8IDAuNSA/IHMgPSAoaSAtIGEpIC8gKGkgKyBhKSA6IHMgPSAoaSAtIGEpIC8gKDIgLSBpIC0gYSksIHMgPSBzLCB7IGg6IGYsIHMsIGw6IGcgfTtcbn0sIFllID0gKG4sIGQsIG8pID0+IHtcbiAgbiA9IG4gJSAzNjAgLyAzNjAsIGQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBkKSksIG8gPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBvKSk7XG4gIGxldCBhLCBpLCB1O1xuICBpZiAoZCA9PT0gMClcbiAgICBhID0gaSA9IHUgPSBvO1xuICBlbHNlIHtcbiAgICBjb25zdCBnID0gKGYsIHYsIG0pID0+IChtIDwgMCAmJiAobSArPSAxKSwgbSA+IDEgJiYgKG0gLT0gMSksIG0gPCAwLjE2NjY2NjY2NjY2NjY2NjY2ID8gZiArICh2IC0gZikgKiA2ICogbSA6IG0gPCAwLjUgPyB2IDogbSA8IDAuNjY2NjY2NjY2NjY2NjY2NiA/IGYgKyAodiAtIGYpICogKDAuNjY2NjY2NjY2NjY2NjY2NiAtIG0pICogNiA6IGYpLCBzID0gbyA8IDAuNSA/IG8gKiAoMSArIGQpIDogbyArIGQgLSBvICogZCwgYiA9IDIgKiBvIC0gcztcbiAgICBhID0gZyhiLCBzLCBuICsgMSAvIDMpLCBpID0gZyhiLCBzLCBuKSwgdSA9IGcoYiwgcywgbiAtIDEgLyAzKTtcbiAgfVxuICByZXR1cm4gYSA9IE1hdGgucm91bmQoYSAqIDI1NSksIGkgPSBNYXRoLnJvdW5kKGkgKiAyNTUpLCB1ID0gTWF0aC5yb3VuZCh1ICogMjU1KSwgeyByOiBhLCBnOiBpLCBiOiB1IH07XG59LCBjbCA9IChuLCBkLCBvKSA9PiB7XG4gIGxldCBhID0gMCwgaSA9IDAsIHUgPSAwO1xuICBjb25zdCBnID0gbiAvIDYwLCBzID0gbyAqIGQsIGIgPSBzICogKDEgLSBNYXRoLmFicyhnICUgMiAtIDEpKSwgZiA9IG8gLSBzO1xuICBzd2l0Y2ggKE1hdGguZmxvb3IoZykgJSA2KSB7XG4gICAgY2FzZSAwOlxuICAgICAgYSA9IHMsIGkgPSBiLCB1ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIGEgPSBiLCBpID0gcywgdSA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBhID0gMCwgaSA9IHMsIHUgPSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgYSA9IDAsIGkgPSBiLCB1ID0gcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGEgPSBiLCBpID0gMCwgdSA9IHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBhID0gcywgaSA9IDAsIHUgPSBiO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByOiBNYXRoLnJvdW5kKChhICsgZikgKiAyNTUpLFxuICAgIGc6IE1hdGgucm91bmQoKGkgKyBmKSAqIDI1NSksXG4gICAgYjogTWF0aC5yb3VuZCgodSArIGYpICogMjU1KVxuICB9O1xufSwgZGwgPSAobiwgZCwgbykgPT4ge1xuICBuIC89IDI1NSwgZCAvPSAyNTUsIG8gLz0gMjU1O1xuICBjb25zdCBhID0gTWF0aC5tYXgobiwgZCwgbyksIGkgPSBNYXRoLm1pbihuLCBkLCBvKTtcbiAgbGV0IHUsIGcsIHMgPSBhO1xuICBjb25zdCBiID0gYSAtIGk7XG4gIGlmIChhICE9PSAwKVxuICAgIGcgPSBiIC8gYTtcbiAgZWxzZVxuICAgIHJldHVybiB7IGg6IDAsIHM6IDAsIHY6IDAgfTtcbiAgcmV0dXJuIGIgPT09IDAgPyB1ID0gMCA6IGEgPT09IG4gPyB1ID0gNjAgKiAoKGQgLSBvKSAvIGIgJSA2KSA6IGEgPT09IGQgPyB1ID0gNjAgKiAoKG8gLSBuKSAvIGIgKyAyKSA6IHUgPSA2MCAqICgobiAtIGQpIC8gYiArIDQpLCB1IDwgMCAmJiAodSArPSAzNjApLCB7XG4gICAgaDogTWF0aC5yb3VuZCh1KSxcbiAgICBzOiBNYXRoLnJvdW5kKGcgKiAxMDApIC8gMTAwLFxuICAgIHY6IE1hdGgucm91bmQocyAqIDEwMCkgLyAxMDBcbiAgfTtcbn0sIHBsID0gKG4sIGQsIG8pID0+IHtcbiAgY29uc3QgYSA9ICgyIC0gZCkgKiBvIC8gMiwgaSA9IGEgJiYgYSA8IDEgPyBkICogbyAvIChhIDwgMC41ID8gYSAqIDIgOiAyIC0gYSAqIDIpIDogZDtcbiAgcmV0dXJuIHsgaDogbiwgczogaSwgbDogYSB9O1xufSwgZ2wgPSAobiwgZCwgbywgYSkgPT4ge1xuICBjb25zdCBpID0gTWF0aC5yb3VuZCgyNTUgKiAoMSAtIG4pICogKDEgLSBhKSksIHUgPSBNYXRoLnJvdW5kKDI1NSAqICgxIC0gZCkgKiAoMSAtIGEpKSwgZyA9IE1hdGgucm91bmQoMjU1ICogKDEgLSBvKSAqICgxIC0gYSkpO1xuICByZXR1cm4ge1xuICAgIHI6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgaSkpLFxuICAgIGc6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgdSkpLFxuICAgIGI6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgZykpXG4gIH07XG59LCB2bCA9IChuLCBkLCBvKSA9PiB7XG4gIG4gPSBuIC8gMjU1LCBkID0gZCAvIDI1NSwgbyA9IG8gLyAyNTU7XG4gIGNvbnN0IGEgPSAxIC0gTWF0aC5tYXgobiwgZCwgbyksIGkgPSAoMSAtIG4gLSBhKSAvICgxIC0gYSksIHUgPSAoMSAtIGQgLSBhKSAvICgxIC0gYSksIGcgPSAoMSAtIG8gLSBhKSAvICgxIC0gYSk7XG4gIHJldHVybiB7XG4gICAgYzogaXNOYU4oaSkgPyAwIDogaSxcbiAgICBtOiBpc05hTih1KSA/IDAgOiB1LFxuICAgIHk6IGlzTmFOKGcpID8gMCA6IGcsXG4gICAgazogaXNOYU4oYSkgPyAwIDogYVxuICB9O1xufSwgbWwgPSBbXCJjcC10aGVtZVwiXSwgZmwgPSB7IGlkOiBcImNrLWNwLXRhcmdldC1iYWNrZ3JvdW5kXCIgfSwgaGwgPSB7XG4gIGtleTogMixcbiAgY2xhc3M6IFwiY2stY3AtaW5wdXQtY29udGFpbmVyXCJcbn0sIHlsID0ge1xuICBrZXk6IDMsXG4gIGNsYXNzOiBcImNrLWNwLWxvY2FsLWNvbG9yLWNvbmF0aW5lclwiXG59LCBibCA9IFtcIm9uQ2xpY2tcIl0sICRsID0gLyogQF9fUFVSRV9fICovIEEoe1xuICBfX25hbWU6IFwiVnVlM0NvbG9yUGlja2VyXCIsXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogeyBkZWZhdWx0OiBcIlwiIH0sXG4gICAgbW9kZToge1xuICAgICAgZGVmYXVsdDogXCJncmFkaWVudFwiLFxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICB0eXBlOiB7IGRlZmF1bHQ6IFwiSEVYOFwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBpbnB1dFR5cGU6IHsgZGVmYXVsdDogXCJSR0JcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgdGhlbWU6IHsgZGVmYXVsdDogXCJsaWdodFwiLCB0eXBlOiBTdHJpbmcgfSxcbiAgICBjb2xvckxpc3RDb3VudDogeyBkZWZhdWx0OiAxOCwgdHlwZTogTnVtYmVyIH0sXG4gICAgc2hvd0NvbG9yTGlzdDogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIHNob3dFeWVEcm9wOiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0FscGhhOiB7IGRlZmF1bHQ6ICEwLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgc2hvd0lucHV0TWVudTogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIHNob3dJbnB1dFNldDogeyBkZWZhdWx0OiAhMCwgdHlwZTogQm9vbGVhbiB9LFxuICAgIGRpc2FibGVkOiB7IGRlZmF1bHQ6ICExLCB0eXBlOiBCb29sZWFuIH0sXG4gICAgbG9jYWw6IHtcbiAgICAgIGRlZmF1bHQ6IHsgYW5nbGU6IFwiXCIsIHBvc2l0aW9uWDogXCJcIiwgcG9zaXRpb25ZOiBcIlwiIH0sXG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9LFxuICAgIGljb25DbGFzc2VzOiB7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxpbmVhcjogXCJcIixcbiAgICAgICAgcmFkaWFsOiBcIlwiLFxuICAgICAgICBydWxlcjogXCJcIixcbiAgICAgICAgZXllRHJvcGVyOiBcIlwiLFxuICAgICAgICBpbnB1dE1lbnU6IFwiXCIsXG4gICAgICAgIHNhdmU6IFwiXCIsXG4gICAgICAgIGRlbGV0ZTogXCJcIlxuICAgICAgfSxcbiAgICAgIHR5cGU6IE9iamVjdFxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTptb2RlbFZhbHVlXCJdLFxuICBzZXR1cChuLCB7IGVtaXQ6IGQgfSkge1xuICAgIGNvbnN0IG8gPSBuLCBhID0gUyhudWxsKSwgaSA9IGQsIHUgPSBTKG8ubW9kZWxWYWx1ZSksIGcgPSAobCkgPT4ge1xuICAgICAgdS52YWx1ZSA9IGwsIGkoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBsKTtcbiAgICB9LCBzID0gUyhbXG4gICAgICB7IGlkOiAxLCByOiA2OCwgZzogNzEsIGI6IDExOSwgYTogMTAwLCBwZXJjZW50OiAwLCBodWU6IDAsIHNlbGVjdDogITAgfSxcbiAgICAgIHsgaWQ6IDIsIHI6IDAsIGc6IDAsIGI6IDI1NSwgYTogMTAwLCBwZXJjZW50OiAxMDAsIGh1ZTogMCwgc2VsZWN0OiAhMSB9XG4gICAgXSksIGIgPSBTKFtdKSwgZiA9IFMoITEpLCB2ID0gUyhcImxpbmVhclwiKSwgbSA9IHBlKHtcbiAgICAgIGFuZ2xlOiA5MCxcbiAgICAgIHBlcmNlbnRhZ2VYOiA1MCxcbiAgICAgIHBlcmNlbnRhZ2VZOiA1MFxuICAgIH0pLCBOID0gUyhcIlwiKSwgTCA9IFMoby5pbnB1dFR5cGUpLCByZSA9IFMoITEpLCB4ZSA9IFMoKSwgaWUgPSBTKCksIEYgPSBTKCksIFAgPSBTKCksIE0gPSBTKCksIEggPSBwZSh7XG4gICAgICBoOiAwLFxuICAgICAgczogMCxcbiAgICAgIGw6IDBcbiAgICB9KSwgRCA9IHBlKHtcbiAgICAgIGg6IDAsXG4gICAgICBzOiAwLFxuICAgICAgdjogMFxuICAgIH0pLCBCID0gcGUoe1xuICAgICAgYzogMCxcbiAgICAgIG06IDAsXG4gICAgICB5OiAwLFxuICAgICAgazogMFxuICAgIH0pO1xuICAgIHNlKFwiZ3JhZGllbnRCYXJcIiwgaWUpLCBzZShcImNhbnZhc1wiLCBGKSwgc2UoXCJwaWNrZXJXcmFwXCIsIFApLCBzZShcInBpY2tlclBvaW50ZXJcIiwgTSksIHNlKFwib3BhY2l0eVNsaWRlclwiLCB4ZSk7XG4gICAgbGV0IGVlID0gMCwgdGUgPSAwLCBDZSA9IDAsIEllID0gMCwgbGUgPSAwLCBuZSA9IDA7XG4gICAgY29uc3QgT2UgPSAobCkgPT4ge1xuICAgICAgIVAudmFsdWUgfHwgIU0udmFsdWUgfHwgKGxlID0gUC52YWx1ZS5vZmZzZXRIZWlnaHQgLSBNLnZhbHVlLm9mZnNldEhlaWdodCwgbmUgPSBQLnZhbHVlLm9mZnNldFdpZHRoIC0gTS52YWx1ZS5vZmZzZXRXaWR0aCwgQ2UgPSBsLmNsaWVudFggLSBsLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LCBJZSA9IGwuY2xpZW50WSAtIGwudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCwgZWUgPSBDZSAtIE0udmFsdWUub2Zmc2V0V2lkdGggLyAyLCB0ZSA9IEllIC0gTS52YWx1ZS5vZmZzZXRIZWlnaHQgLyAyLCBNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtlZX1weGAsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7dGV9cHhgLCBmZSghMSksIEooKSwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgTWUpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgVmUpKTtcbiAgICB9LCBNZSA9IChsKSA9PiB7XG4gICAgICBsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBlID0gUC52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdCA9IGwuY2xpZW50WCAtIGUubGVmdCAtIE0udmFsdWUub2Zmc2V0V2lkdGggLyAyLCByID0gbC5jbGllbnRZIC0gZS50b3AgLSBNLnZhbHVlLm9mZnNldEhlaWdodCAvIDI7XG4gICAgICB0ID49IDAgJiYgdCA8PSBuZSA/IChlZSA9IHQsIE0udmFsdWUuc3R5bGUubGVmdCA9IGAke3R9cHhgKSA6IDAgPiB0ID8gKGVlID0gMCwgTS52YWx1ZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIikgOiB0ID4gbmUgJiYgKGVlID0gbmUsIE0udmFsdWUuc3R5bGUubGVmdCA9IGAke25lfXB4YCksIHIgPj0gMCAmJiByIDw9IGxlID8gKHRlID0gciwgTS52YWx1ZS5zdHlsZS50b3AgPSBgJHtyfXB4YCkgOiAwID4gciA/ICh0ZSA9IDAsIE0udmFsdWUuc3R5bGUudG9wID0gXCIwcHhcIikgOiByID4gbGUgJiYgKHRlID0gbGUsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7bGV9cHhgKSwgZmUoITEpLCBKKCk7XG4gICAgfSwgVmUgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBNZSksIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBWZSk7XG4gICAgfSwgZmUgPSAobCkgPT4ge1xuICAgICAgaWYgKCFsKSB7XG4gICAgICAgIGxldCBlID0gVWUoKTtcbiAgICAgICAgY29uc3QgdCA9IFllKEsudmFsdWUsIGUucywgZS5sKTtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICBpZiAocmUudmFsdWUpIHtcbiAgICAgICAgICAgIGxldCByID0gcy52YWx1ZS5maW5kKChjKSA9PiBjLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgICAgICByICYmIChyLnIgPSB0LnIsIHIuZyA9IHQuZywgci5iID0gdC5iKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgVSgpLCBFKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBLID0gUygwKSwgaGUgPSBhc3luYyAobCkgPT4ge1xuICAgICAgY29uc3QgeyByZ2I6IGUgfSA9IEhlKEsudmFsdWUsIDEwMCwgNTApO1xuICAgICAgUmUoZSksIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmZShsKSwgSigpO1xuICAgICAgfSwgMCk7XG4gICAgfSwgVWUgPSAoKSA9PiB7XG4gICAgICBsZXQgbCA9IHsgczogMCwgbDogMCB9LCBlID0gUC52YWx1ZS5vZmZzZXRXaWR0aCAtIE0udmFsdWUub2Zmc2V0V2lkdGgsIHQgPSBQLnZhbHVlLm9mZnNldEhlaWdodCAtIE0udmFsdWUub2Zmc2V0SGVpZ2h0LCByID0gcGFyc2VJbnQoTS52YWx1ZS5zdHlsZS5sZWZ0KSwgcCA9IDEgLSBwYXJzZUludChNLnZhbHVlLnN0eWxlLnRvcCkgLyB0LCBrID0gciAvIGU7XG4gICAgICByZXR1cm4gbC5sID0gcCAvIDIgKiAoMiAtIGspLCBsLnMgPSBwICogayAvICgxIC0gTWF0aC5hYnMoMiAqIGwubCAtIDEpKSwgTnVtYmVyLmlzTmFOKGwucykgJiYgKGwucyA9IGwubCksIGwubCA9IGwubCA+IDEgPyAxIDogbC5sLCBsLnMgPSBsLnMgPiAxID8gMSA6IGwucywgbDtcbiAgICB9LCBhZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGNvbnN0IHsgbDogZSwgczogdCB9ID0gRWUobC5yLCBsLmcsIGwuYik7XG4gICAgICAgIGxldCByID0gZSwgYyA9IHQ7XG4gICAgICAgIE51bWJlci5pc05hTihjKSAmJiAoYyA9IHIpO1xuICAgICAgICBsZXQgcCA9IHsgeDogMCwgeTogMCB9LCBrID0gUC52YWx1ZS5vZmZzZXRXaWR0aCAtIE0udmFsdWUub2Zmc2V0V2lkdGgsIEMgPSBQLnZhbHVlLm9mZnNldEhlaWdodCAtIE0udmFsdWUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBbJCwgaF0gPSAyICogciAtIDEgPCAwID8gW1xuICAgICAgICAgIGsgKiAyICogYyAvICgxICsgYyksXG4gICAgICAgICAgQyAqICgxIC0gciAqICgxICsgYykpXG4gICAgICAgIF0gOiBbXG4gICAgICAgICAgLWsgKiAyICogKHIgLSAxKSAqIGMgLyAociArIGMgLSByICogYyksXG4gICAgICAgICAgQyAqIChyIC0gMSkgKiAoYyAtIDEpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBwLnggPSAkLCBwLnkgPSBoLCBwO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIEdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgbCA9IHMudmFsdWUuZmluZCgoZSkgPT4gZS5zZWxlY3QgPT0gITApO1xuICAgICAgbCAmJiAobC5odWUgPSBLLnZhbHVlKTtcbiAgICB9LCBqID0gUygxMDApLCBQZSA9IChsKSA9PiB7XG4gICAgICBpZiAoby5zaG93QWxwaGEpIHtcbiAgICAgICAgY29uc3QgZSA9IGwudGFyZ2V0LCB0ID0gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgIHQgJiYgKHQuYSA9IHBhcnNlSW50KGUudmFsdWUpLCBFKCkpO1xuICAgICAgfVxuICAgIH0sIHplID0gKGwpID0+IHtcbiAgICAgIHZhciB0LCByLCBjLCBwO1xuICAgICAgY29uc3QgZSA9IChyID0gKHQgPSBhLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogdC5xdWVyeVNlbGVjdG9yKFwiLmdyYWRpZW50LWhhbmRsZS1jb250ZW50XCIpKSA9PSBudWxsID8gdm9pZCAwIDogci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiBsID09PSAwID8gXCIwcHhcIiA6IGwgPT09IDEwMCAmJiBlID8gYCR7KCgoYyA9IGllLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogYy5vZmZzZXRXaWR0aCkgfHwgMCkgLSAoZS53aWR0aCB8fCAwKX1weGAgOiBgJHsoKChwID0gaWUudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBwLm9mZnNldFdpZHRoKSB8fCAwKSAqIChsIC8gMTAwKSAtICgoZSA9PSBudWxsID8gdm9pZCAwIDogZS53aWR0aCkgfHwgMCkgLyAyfXB4YDtcbiAgICB9O1xuICAgIGxldCBYID0gbnVsbCwgTyA9IG51bGw7XG4gICAgY29uc3QgTmUgPSAobCkgPT4ge1xuICAgICAgdmFyIHIsIGM7XG4gICAgICBjb25zdCB0ID0gbC50YXJnZXQub2Zmc2V0UGFyZW50O1xuICAgICAgaWYgKChyID0gdCA9PSBudWxsID8gdm9pZCAwIDogdC5pZCkgIT0gbnVsbCAmJiByLmluY2x1ZGVzKFwiY2xyLWdiLVwiKSkge1xuICAgICAgICBjb25zdCBwID0gdC5pZC5yZXBsYWNlKFwiY2xyLWdiLVwiLCBcIlwiKTtcbiAgICAgICAgTyA9IHQ7XG4gICAgICAgIGNvbnN0IGsgPSBzLnZhbHVlLmZpbmQoKEMpID0+IEMuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgaWYgKGsgJiYgay5pZCAhPSBwKSB7XG4gICAgICAgICAgY29uc3QgQyA9IChjID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmdyYWRpZW50LWhhbmRsZS5zZWxlY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgQyA9PSBudWxsIHx8IEMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdFwiKSwgdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0XCIpO1xuICAgICAgICAgIGNvbnN0ICQgPSBzLnZhbHVlLmZpbmRJbmRleChcbiAgICAgICAgICAgIChoKSA9PiBoLnNlbGVjdCA9PSAhMFxuICAgICAgICAgICk7XG4gICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBzLnZhbHVlLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ID0gcy52YWx1ZVtoXTtcbiAgICAgICAgICAgIGlmICh3LmlkID09IHApIHtcbiAgICAgICAgICAgICAgJCAhPSAtMSAmJiAocy52YWx1ZVskXS5zZWxlY3QgPSAhMSksIHMudmFsdWVbaF0uc2VsZWN0ID0gITAsIGoudmFsdWUgPSB3LmEsIFcody5yLCB3LmcsIHcuYiwgdy5odWUsICEwKSwgVSgpLCBKKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBTZSksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBBZSk7XG4gICAgICB9XG4gICAgfSwgQWUgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBTZSksIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBOZSk7XG4gICAgfSwgU2UgPSAobCkgPT4ge1xuICAgICAgdmFyIHAsIGs7XG4gICAgICBsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBlID0gKGsgPSAocCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBwLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JhZGllbnQtaGFuZGxlLWNvbnRlbnRcIikpID09IG51bGwgPyB2b2lkIDAgOiBrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0ID0gWCA9PSBudWxsID8gdm9pZCAwIDogWC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgciA9ICh0ID09IG51bGwgPyB2b2lkIDAgOiB0LndpZHRoKSAtIChlID09IG51bGwgPyB2b2lkIDAgOiBlLndpZHRoKTtcbiAgICAgIGxldCBjID0gbC5jbGllbnRYIC0gKCh0ID09IG51bGwgPyB2b2lkIDAgOiB0LmxlZnQpIHx8IDApIC0gKChlID09IG51bGwgPyB2b2lkIDAgOiBlLndpZHRoKSB8fCAwKSAvIDI7XG4gICAgICBpZiAoYyA8IDAgPyBjID0gMCA6IGMgPiByICYmIChjID0gciksIE8pIHtcbiAgICAgICAgTy5zdHlsZS5sZWZ0ID0gYCR7Y31weGA7XG4gICAgICAgIGNvbnN0IEMgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgIChjIC8gKCh0ID09IG51bGwgPyB2b2lkIDAgOiB0LndpZHRoKSAtIChlID09IG51bGwgPyB2b2lkIDAgOiBlLndpZHRoKSkgKiAxMDApLnRvRml4ZWQoMClcbiAgICAgICAgKSwgJCA9IHMudmFsdWUuZmluZChcbiAgICAgICAgICAoaCkgPT4gaC5pZCA9PSAoTyA9PSBudWxsID8gdm9pZCAwIDogTy5pZC5yZXBsYWNlKFwiY2xyLWdiLVwiLCBcIlwiKSlcbiAgICAgICAgKTtcbiAgICAgICAgJCAmJiAoJC5wZXJjZW50ID0gQyksIEUoKTtcbiAgICAgIH1cbiAgICB9LCBLZSA9IChsKSA9PiB7XG4gICAgICB2YXIgQywgJDtcbiAgICAgIGNvbnN0IGUgPSBYID09IG51bGwgPyB2b2lkIDAgOiBYLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGwuY2xpZW50WCAtICgoZSA9PSBudWxsID8gdm9pZCAwIDogZS5sZWZ0KSB8fCAwKSkgLyAoKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUud2lkdGgpIHx8IDEpICogMTAwXG4gICAgICApLCByID0gcy52YWx1ZS5maW5kSW5kZXgoKGgpID0+IGguc2VsZWN0ID09ICEwKSwgYyA9IHMudmFsdWVbcl0sIHAgPSB7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICByOiBjLnIsXG4gICAgICAgIGc6IGMuZyxcbiAgICAgICAgYjogYy5iLFxuICAgICAgICBhOiBjLmEsXG4gICAgICAgIHBlcmNlbnQ6IHQsXG4gICAgICAgIGh1ZTogYy5odWUsXG4gICAgICAgIHNlbGVjdDogITBcbiAgICAgIH07XG4gICAgICBzLnZhbHVlW3JdLnNlbGVjdCA9ICExO1xuICAgICAgY29uc3QgayA9IChDID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IEMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZ3JhZGllbnQtaGFuZGxlLnNlbGVjdFwiXG4gICAgICApO1xuICAgICAgayA9PSBudWxsIHx8IGsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdFwiKSwgcy52YWx1ZSA9IFsuLi5zLnZhbHVlLCBwXSwgRGUocCksIE8gPSAoJCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiAkLnF1ZXJ5U2VsZWN0b3IoYCNjbHItZ2ItJHtwLmlkfWApLCBFKCk7XG4gICAgfSwgQmUgPSAobCkgPT4ge1xuICAgICAgaWYgKGwuciA9PSAwICYmIGwuZyA9PSAwICYmIGwuYiA9PSAwKVxuICAgICAgICByZXR1cm4gITA7XG4gICAgICBpZiAobC5yID09IDI1NSAmJiBsLmcgPT0gMjU1ICYmIGwuYiA9PSAyNTUpXG4gICAgICAgIHJldHVybiAhMDtcbiAgICAgIHtcbiAgICAgICAgY29uc3QgZSA9IEYudmFsdWUuZ2V0Q29udGV4dChcIjJkXCIsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiAhMCB9KSwgdCA9IEYudmFsdWUud2lkdGgsIHIgPSBGLnZhbHVlLmhlaWdodCwgYyA9IGUuZ2V0SW1hZ2VEYXRhKDAsIDAsIHQsIHIpLmRhdGEsIHAgPSBsLnIsIGsgPSBsLmcsIEMgPSBsLmI7XG4gICAgICAgIGZvciAobGV0ICQgPSAwOyAkIDwgcjsgJCsrKVxuICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgdDsgaCsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ID0gKCQgKiB0ICsgaCkgKiA0LCB6ID0gY1t3XSwgZXQgPSBjW3cgKyAxXSwgdHQgPSBjW3cgKyAyXTtcbiAgICAgICAgICAgIGlmICh6ID09PSBwICYmIGV0ID09PSBrICYmIHR0ID09PSBDKVxuICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9XG4gICAgfSwgVyA9IChsLCBlLCB0LCByLCBjKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKEJlKHsgcjogbCwgZzogZSwgYjogdCB9KSkge1xuICAgICAgICAgIGxldCBwID0gYWUoKTtcbiAgICAgICAgICBwICYmIChNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtwLnh9cHhgLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAke3AueX1weGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBwID0gYWUoKTtcbiAgICAgICAgICBwICYmIChNLnZhbHVlLnN0eWxlLmxlZnQgPSBgJHtwLnh9cHhgLCBNLnZhbHVlLnN0eWxlLnRvcCA9IGAke3AueX1weGApLCBLLnZhbHVlID0gciwgaGUoYyk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH0sIExlID0gKCkgPT4ge1xuICAgICAgcy52YWx1ZS5mb3JFYWNoKCh0KSA9PiBEZSh0KSksIFdlKCk7XG4gICAgICBjb25zdCBsID0gcy52YWx1ZVswXTtcbiAgICAgIEsudmFsdWUgPSBsLmh1ZSwgaGUoITApO1xuICAgICAgbGV0IGUgPSBhZSgpO1xuICAgICAgZSAmJiAoTS52YWx1ZS5zdHlsZS5sZWZ0ID0gYCR7ZS54fXB4YCwgTS52YWx1ZS5zdHlsZS50b3AgPSBgJHtlLnl9cHhgKSwgVSgpLCBFKCk7XG4gICAgfSwgRGUgPSAobCkgPT4ge1xuICAgICAgaWYgKG8ubW9kZSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlLmlkID0gYGNsci1nYi0ke2wuaWR9YCwgZS5jbGFzc0xpc3QuYWRkKFwiZ3JhZGllbnQtaGFuZGxlXCIpLCBlLnN0eWxlLmxlZnQgPSB6ZShsLnBlcmNlbnQpO1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHQuY2xhc3NMaXN0LmFkZChcImdyYWRpZW50LWhhbmRsZS1jb250ZW50XCIpLCBsLnNlbGVjdCA9PSAhMCAmJiBlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIiksIGUuYXBwZW5kQ2hpbGQodCksIFggJiYgWC5hcHBlbmRDaGlsZChlKTtcbiAgICAgIH1cbiAgICB9LCBSZSA9IChsKSA9PiB7XG4gICAgICBjb25zdCBlID0gRi52YWx1ZS5nZXRDb250ZXh0KFwiMmRcIiwgeyB3aWxsUmVhZEZyZXF1ZW50bHk6ICEwIH0pLCB0ID0gRi52YWx1ZS53aWR0aCwgciA9IEYudmFsdWUuaGVpZ2h0O1xuICAgICAgZS5maWxsU3R5bGUgPSBgcmdiKCR7bFswXX0sJHtsWzFdfSwke2xbMl19KWAsIGUuZmlsbFJlY3QoMCwgMCwgdCwgcik7XG4gICAgICBsZXQgYyA9IGUuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdCAtIDEyLCAwKTtcbiAgICAgIGMuYWRkQ29sb3JTdG9wKDAsIFwicmdiKDI1NSwyNTUsMjU1KVwiKSwgYy5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIpLCBlLmZpbGxTdHlsZSA9IGMsIGUuZmlsbFJlY3QoMCwgMCwgdCwgcik7XG4gICAgICBsZXQgcCA9IGUuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgcik7XG4gICAgICBwLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMCwwLDAsMClcIiksIHAuYWRkQ29sb3JTdG9wKDEsIFwicmdiKDAsMCwwKVwiKSwgZS5maWxsU3R5bGUgPSBwLCBlLmZpbGxSZWN0KDAsIDAsIHQsIHIpO1xuICAgIH0sIFUgPSAoKSA9PiB7XG4gICAgICBpZiAoby5zaG93QWxwaGEpIHtcbiAgICAgICAgbGV0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgbCAmJiAoeGUudmFsdWUuc3R5bGUuYmFja2dyb3VuZCA9IGAgbGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoJHtsLnJ9LCAke2wuZ30sICR7bC5ifSwgMTAwKSA5NyUpYCk7XG4gICAgICB9XG4gICAgfSwgRSA9ICgpID0+IHtcbiAgICAgIHZhciBsO1xuICAgICAgaWYgKG8ubW9kZSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICAgICAgcy52YWx1ZS5zb3J0KChjLCBwKSA9PiBjLnBlcmNlbnQgLSBwLnBlcmNlbnQpO1xuICAgICAgICBsZXQgZSA9IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCBcIiwgdDtcbiAgICAgICAgaWYgKHYudmFsdWUgPT0gXCJsaW5lYXJcIikge1xuICAgICAgICAgIHQgPSBgbGluZWFyLWdyYWRpZW50KCR7bS5hbmdsZX1kZWcsIGA7XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBzLnZhbHVlLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBjb25zdCB7IHI6IHAsIGc6IGssIGI6IEMsIGE6ICQsIHBlcmNlbnQ6IGggfSA9IHMudmFsdWVbY107XG4gICAgICAgICAgICBzLnZhbHVlLmxlbmd0aCAtIDEgPT0gYyA/IChlID0gZSArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lKWAsIHQgPSB0ICsgYHJnYmEoJHtwfSwke2t9LCR7Q30sJHskIC8gMTAwfSkgJHtofSUpYCkgOiAoZSA9IGUgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSwgYCwgdCA9IHQgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSwgYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQgPSBgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAke20ucGVyY2VudGFnZVh9JSAke20ucGVyY2VudGFnZVl9JSwgYDtcbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHMudmFsdWUubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcjogcCwgZzogaywgYjogQywgYTogJCwgcGVyY2VudDogaCB9ID0gcy52YWx1ZVtjXTtcbiAgICAgICAgICAgIHMudmFsdWUubGVuZ3RoIC0gMSA9PSBjID8gKGUgPSBlICsgYHJnYmEoJHtwfSwke2t9LCR7Q30sJHskIC8gMTAwfSkgJHtofSUpYCwgdCA9IHQgKyBgcmdiYSgke3B9LCR7a30sJHtDfSwkeyQgLyAxMDB9KSAke2h9JSlgKSA6IChlID0gZSArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lLCBgLCB0ID0gdCArIGByZ2JhKCR7cH0sJHtrfSwke0N9LCR7JCAvIDEwMH0pICR7aH0lLCBgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWUudmFsdWUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZTtcbiAgICAgICAgbGV0IHIgPSAobCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBsLnF1ZXJ5U2VsZWN0b3IoXCIjY2stY3AtdGFyZ2V0LWJhY2tncm91bmRcIik7XG4gICAgICAgIHIgJiYgKHIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdCwgcmUudmFsdWUgJiYgZyhyLnN0eWxlLmJhY2tncm91bmRJbWFnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyByOiBlLCBnOiB0LCBiOiByLCBhOiBjIH0gPSBzLnZhbHVlWzBdO1xuICAgICAgICBsZXQgcCA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoby50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcIkhFWDhcIjpcbiAgICAgICAgICAgIHAgPSBpbChlLCB0LCByLCBjIC8gMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSR0JBXCI6XG4gICAgICAgICAgICBwID0gYHJnYmEoJHtlfSwke3R9LCR7cn0sJHtjIC8gMTAwfSlgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlJHQlwiOlxuICAgICAgICAgICAgcCA9IGByZ2IoJHtlfSwke3R9LCR7cn0pYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJIRVhcIjpcbiAgICAgICAgICAgIHAgPSAkZShlLCB0LCByKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGcocCk7XG4gICAgICB9XG4gICAgfSwgV2UgPSAoKSA9PiB7XG4gICAgICBzLnZhbHVlLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgbC5odWUgPSBRKGwuciwgbC5nLCBsLmIpO1xuICAgICAgfSk7XG4gICAgfSwgRmUgPSAobCkgPT4ge1xuICAgICAgdi52YWx1ZSA9IGwsIEUoKTtcbiAgICB9LCBxZSA9ICgpID0+IHtcbiAgICAgIHZhciBsLCBlO1xuICAgICAgaWYgKHMudmFsdWUubGVuZ3RoID4gMikge1xuICAgICAgICBjb25zdCB0ID0gcy52YWx1ZS5maW5kSW5kZXgoKHIpID0+IHIuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgaWYgKHQgIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgciA9IHMudmFsdWVbdF0uaWQ7XG4gICAgICAgICAgcy52YWx1ZS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgY29uc3QgYyA9IChsID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGwucXVlcnlTZWxlY3RvcihgI2Nsci1nYi0ke3J9YCk7XG4gICAgICAgICAgYyA9PSBudWxsIHx8IGMucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc3QgcCA9IHMudmFsdWVbMF07XG4gICAgICAgICAgcCAmJiAocC5zZWxlY3QgPSAhMCwgTyA9IChlID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGUucXVlcnlTZWxlY3RvcihgI2Nsci1nYi0ke3AuaWR9YCksIE8gPT0gbnVsbCB8fCBPLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RcIiksIFcocC5yLCBwLmcsIHAuYiwgcC5odWUsICExKSwgSigpLCBFKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgamUgPSAoKSA9PiB7XG4gICAgICB2YXIgdDtcbiAgICAgIGNvbnN0IGwgPSAodCA9IGEudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiB0LnF1ZXJ5U2VsZWN0b3IoXCIjY3AtYnRuLWV5ZWRyb3BwZXJcIik7XG4gICAgICBsID09IG51bGwgfHwgbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLCBuZXcgRXllRHJvcHBlcigpLm9wZW4oKS50aGVuKChyKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc1JHQkhleDogYyB9ID0gciwgcCA9IHMudmFsdWUuZmluZCgoQykgPT4gQy5zZWxlY3QgPT0gITApLCBrID0gZ2UoYyk7XG4gICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgY29uc3QgQyA9IFEoay5yLCBrLmcsIGsuYik7XG4gICAgICAgICAgaWYgKHAgJiYgKHAuaHVlID0gQywgcC5yID0gay5yLCBwLmcgPSBrLmcsIHAuYiA9IGsuYiksIEJlKGspKSB7XG4gICAgICAgICAgICBjb25zdCAkID0gYWUoKTtcbiAgICAgICAgICAgICQgJiYgKE0udmFsdWUuc3R5bGUubGVmdCA9IGAkeyQueH1weGAsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7JC55fXB4YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEsudmFsdWUgPSBDO1xuICAgICAgICAgICAgY29uc3QgeyByZ2I6ICQgfSA9IEhlKEMsIDEwMCwgNTApO1xuICAgICAgICAgICAgUmUoJCk7XG4gICAgICAgICAgICBjb25zdCBoID0gYWUoKTtcbiAgICAgICAgICAgIGggJiYgKE0udmFsdWUuc3R5bGUubGVmdCA9IGAke2gueH1weGAsIE0udmFsdWUuc3R5bGUudG9wID0gYCR7aC55fXB4YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEooKSwgVSgpLCBFKCksIGwgPT0gbnVsbCB8fCBsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgbCA9PSBudWxsIHx8IGwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH0sIHVlID0gKGwsIGUpID0+IHtcbiAgICAgIGlmIChlICE9IFwiYVwiKSB7XG4gICAgICAgIGNvbnN0IHQgPSBzLnZhbHVlLmZpbmQoKHIpID0+IHIuc2VsZWN0ID09ICEwKTtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICBjb25zdCByID0gUSh0LnIsIHQuZywgdC5iKTtcbiAgICAgICAgICB0Lmh1ZSA9IHIsIFcoXG4gICAgICAgICAgICB0LnIsXG4gICAgICAgICAgICB0LmcsXG4gICAgICAgICAgICB0LmIsXG4gICAgICAgICAgICB0Lmh1ZSxcbiAgICAgICAgICAgICEwXG4gICAgICAgICAgKSwgRSgpLCBVKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZVxuICAgICAgICBqLnZhbHVlID0gbCwgRSgpLCBVKCk7XG4gICAgfSwgeWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsID0gcy52YWx1ZS5maW5kKChlKSA9PiBlLnNlbGVjdCA9PSAhMCk7XG4gICAgICBpZiAobCAmJiAhTnVtYmVyLmlzTmFOKEguaCkgJiYgIU51bWJlci5pc05hTihILnMpICYmICFOdW1iZXIuaXNOYU4oSC5sKSkge1xuICAgICAgICBjb25zdCB7IHI6IGUsIGc6IHQsIGI6IHIgfSA9IFllKEguaCwgSC5zIC8gMTAwLCBILmwgLyAxMDApO1xuICAgICAgICBsLmh1ZSA9IEguaCwgbC5yID0gZSwgbC5nID0gdCwgbC5iID0gciwgVyhcbiAgICAgICAgICBsLnIsXG4gICAgICAgICAgbC5nLFxuICAgICAgICAgIGwuYixcbiAgICAgICAgICBsLmh1ZSxcbiAgICAgICAgICAhMFxuICAgICAgICApLCBFKCksIFUoKTtcbiAgICAgIH1cbiAgICB9LCBiZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGlmIChsICYmICFOdW1iZXIuaXNOYU4oRC5oKSAmJiAhTnVtYmVyLmlzTmFOKEQucykgJiYgIU51bWJlci5pc05hTihELnYpKSB7XG4gICAgICAgIGNvbnN0IHsgcjogZSwgZzogdCwgYjogciB9ID0gY2woRC5oLCBELnMgLyAxMDAsIEQudiAvIDEwMCksIHsgaDogYyB9ID0gcGwoRC5oLCBELnMgLyAxMDAsIEQudiAvIDEwMCk7XG4gICAgICAgIGwuaHVlID0gYywgbC5yID0gZSwgbC5nID0gdCwgbC5iID0gciwgVyhcbiAgICAgICAgICBsLnIsXG4gICAgICAgICAgbC5nLFxuICAgICAgICAgIGwuYixcbiAgICAgICAgICBsLmh1ZSxcbiAgICAgICAgICAhMFxuICAgICAgICApLCBFKCksIFUoKTtcbiAgICAgIH1cbiAgICB9LCBjZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBzLnZhbHVlLmZpbmQoKGUpID0+IGUuc2VsZWN0ID09ICEwKTtcbiAgICAgIGlmIChsICYmICFOdW1iZXIuaXNOYU4oQi5jKSAmJiAhTnVtYmVyLmlzTmFOKEIubSkgJiYgIU51bWJlci5pc05hTihCLnkpICYmICFOdW1iZXIuaXNOYU4oQi5rKSkge1xuICAgICAgICBjb25zdCB7IHI6IGUsIGc6IHQsIGI6IHIgfSA9IGdsKFxuICAgICAgICAgIEIuYyAvIDEwMCxcbiAgICAgICAgICBCLm0gLyAxMDAsXG4gICAgICAgICAgQi55IC8gMTAwLFxuICAgICAgICAgIEIuayAvIDEwMFxuICAgICAgICApLCBjID0gUShlLCB0LCByKTtcbiAgICAgICAgbC5odWUgPSBjLCBsLnIgPSBlLCBsLmcgPSB0LCBsLmIgPSByLCBXKFxuICAgICAgICAgIGwucixcbiAgICAgICAgICBsLmcsXG4gICAgICAgICAgbC5iLFxuICAgICAgICAgIGwuaHVlLFxuICAgICAgICAgICEwXG4gICAgICAgICksIEUoKSwgVSgpO1xuICAgICAgfVxuICAgIH0sIEplID0gKCkgPT4ge1xuICAgICAgaWYgKE4udmFsdWUpIHtcbiAgICAgICAgY29uc3QgbCA9IGdlKE4udmFsdWUpO1xuICAgICAgICBpZiAobCkge1xuICAgICAgICAgIGNvbnN0IGUgPSBRKGwuciwgbC5nLCBsLmIpLCB0ID0gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCk7XG4gICAgICAgICAgdCAmJiAodC5yID0gbC5yLCB0LmcgPSBsLmcsIHQuYiA9IGwuYiwgdC5odWUgPSBlLCBXKGwuciwgbC5nLCBsLmIsIHQuaHVlLCAhMCksIEUoKSwgVSgpLCBkZShMLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBKID0gKCkgPT4ge1xuICAgICAgY29uc3QgbCA9IHMudmFsdWUuZmluZCgoZSkgPT4gZS5zZWxlY3QgPT0gITApO1xuICAgICAgbCAmJiAoTi52YWx1ZSA9ICRlKGwuciwgbC5nLCBsLmIpLnRvVXBwZXJDYXNlKCkpLCBkZShMLnZhbHVlKTtcbiAgICB9LCBRZSA9IChsKSA9PiB7XG4gICAgICBOLnZhbHVlID0gbDtcbiAgICAgIGxldCBlID0gZ2UoTi52YWx1ZSk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBjb25zdCB0ID0gUShlLnIsIGUuZywgZS5iKSwgciA9IHMudmFsdWUuZmluZCgoYykgPT4gYy5zZWxlY3QgPT0gITApO1xuICAgICAgICByICYmIChyLnIgPSBlLnIsIHIuZyA9IGUuZywgci5iID0gZS5iLCByLmh1ZSA9IHQsIFcoZS5yLCBlLmcsIGUuYiwgci5odWUsICEwKSwgRSgpLCBVKCkpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LkV5ZURyb3BwZXIgJiYgKGYudmFsdWUgPSAhMCk7XG4gICAgY29uc3QgWmUgPSAoKSA9PiB7XG4gICAgICBpZiAoIWIudmFsdWUuZmluZCgoZSkgPT4gZSA9PT0gTi52YWx1ZSkpIHtcbiAgICAgICAgYi52YWx1ZS5sZW5ndGggPT09IG8uY29sb3JMaXN0Q291bnQgJiYgYi52YWx1ZS5wb3AoKTtcbiAgICAgICAgbGV0IGUgPSBOLnZhbHVlO1xuICAgICAgICBiLnZhbHVlLnVuc2hpZnQoZSksIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgIFwiY2stY3AtbG9jYWwtY29sb3ItbGlzdFwiLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGIudmFsdWUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwgX2UgPSAobCA9IFwiXCIpID0+IHtcbiAgICAgIGlmIChvLm1vZGUgPT0gXCJncmFkaWVudFwiKSB7XG4gICAgICAgIGxldCBlID0gbC5pbmNsdWRlcyhcImxpbmVhclwiKSA/IFwibGluZWFyXCIgOiBcInJhZGlhbFwiLCB0ID0gW107XG4gICAgICAgIGlmICh2LnZhbHVlID0gZSwgZSA9PSBcImxpbmVhclwiKSB7XG4gICAgICAgICAgbGV0IHIgPSAvXmxpbmVhci1ncmFkaWVudFxcKCguKilcXCkkLywgYyA9IGwucmVwbGFjZShcIjtcIiwgXCJcIikudHJpbSgpLm1hdGNoKHIpLCBwID0gLyxcXHMqKD8hW14oKV0qXFwpKS87XG4gICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgIGxldCBrID0gY1sxXS5zcGxpdChwKTtcbiAgICAgICAgICAgIGZvciAobGV0IEMgPSAwOyBDIDwgay5sZW5ndGg7IEMrKykge1xuICAgICAgICAgICAgICBjb25zdCAkID0ga1tDXTtcbiAgICAgICAgICAgICAgbGV0IGggPSB7XG4gICAgICAgICAgICAgICAgaWQ6IEMsXG4gICAgICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgICAgICBnOiAwLFxuICAgICAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICAgICAgYTogMTAwLFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IDEwMCxcbiAgICAgICAgICAgICAgICBodWU6IDAsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAhMVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoJC5pbmNsdWRlcyhcImRlZ1wiKSlcbiAgICAgICAgICAgICAgICBtLmFuZ2xlID0gcGFyc2VJbnQoJC5yZXBsYWNlKFwiZGVnXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgZWxzZSBpZiAoJC5pbmNsdWRlcyhcInJnYmFcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9ICQudHJpbSgpLnJlcGxhY2UoL3JnYmF8XFwofFxcKXwlL2csIFwiXCIpLnJlcGxhY2UoLywvZywgXCIgXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICB3ID0gdy5maWx0ZXIoKHopID0+IHoudHJpbSgpICE9PSBcIlwiKSwgaC5yID0gcGFyc2VJbnQod1swXSksIGguZyA9IHBhcnNlSW50KHdbMV0pLCBoLmIgPSBwYXJzZUludCh3WzJdKSwgaC5hID0gcGFyc2VGbG9hdCh3WzNdKSAqIDEwMCwgaC5wZXJjZW50ID0gcGFyc2VJbnQod1s0XSksIHQucHVzaChoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgkLmluY2x1ZGVzKFwicmdiXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAkLnRyaW0oKS5yZXBsYWNlKC9yZ2J8XFwofFxcKXwlL2csIFwiXCIpLnJlcGxhY2UoLywvZywgXCIgXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICB3ID0gdy5maWx0ZXIoKHopID0+IHoudHJpbSgpICE9PSBcIlwiKSwgaC5yID0gcGFyc2VJbnQod1swXSksIGguZyA9IHBhcnNlSW50KHdbMV0pLCBoLmIgPSBwYXJzZUludCh3WzJdKSwgaC5wZXJjZW50ID0gcGFyc2VJbnQod1szXSksIHQucHVzaChoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgciA9IC9ecmFkaWFsLWdyYWRpZW50XFwoKC4qKVxcKSQvLCBjID0gbC5yZXBsYWNlKFwiO1wiLCBcIlwiKS50cmltKCkubWF0Y2gociksIHAgPSAvLFxccyooPyFbXigpXSpcXCkpLztcbiAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgbGV0IGsgPSBjWzFdLnNwbGl0KHApO1xuICAgICAgICAgICAgZm9yIChsZXQgQyA9IDA7IEMgPCBrLmxlbmd0aDsgQysrKSB7XG4gICAgICAgICAgICAgIGNvbnN0ICQgPSBrW0NdO1xuICAgICAgICAgICAgICBsZXQgaCA9IHtcbiAgICAgICAgICAgICAgICBpZDogQyxcbiAgICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgICAgICBhOiAxMDAsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogMTAwLFxuICAgICAgICAgICAgICAgIGh1ZTogMCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6ICExXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmICgkLmluY2x1ZGVzKFwiY2lyY2xlIGF0XCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAkLnJlcGxhY2UoXCJjaXJjbGUgYXQgXCIsIFwiXCIpLnJlcGxhY2UoXCIgXCIsIFwiXCIpLnJlcGxhY2UoLyUvZywgXCIgXCIpLnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgbS5wZXJjZW50YWdlWCA9IHBhcnNlSW50KHdbMF0pLCBtLnBlcmNlbnRhZ2VZID0gcGFyc2VJbnQod1sxXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5pbmNsdWRlcyhcInJnYmFcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9ICQucmVwbGFjZSgvcmdiYXxcXCh8XFwpfCUvZywgXCJcIikucmVwbGFjZSgvLC9nLCBcIiBcIikuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIHcgPSB3LmZpbHRlcigoeikgPT4gei50cmltKCkgIT09IFwiXCIpLCBoLnIgPSBwYXJzZUludCh3WzBdKSwgaC5nID0gcGFyc2VJbnQod1sxXSksIGguYiA9IHBhcnNlSW50KHdbMl0pLCBoLmEgPSBwYXJzZUZsb2F0KHdbM10pICogMTAwLCBoLnBlcmNlbnQgPSBwYXJzZUludCh3WzRdKSwgdC5wdXNoKGgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQuaW5jbHVkZXMoXCJyZ2JcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9ICQucmVwbGFjZSgvcmdifFxcKHxcXCl8JS9nLCBcIlwiKS5yZXBsYWNlKC8sL2csIFwiIFwiKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgdyA9IHcuZmlsdGVyKCh6KSA9PiB6LnRyaW0oKSAhPT0gXCJcIiksIGguciA9IHBhcnNlSW50KHdbMF0pLCBoLmcgPSBwYXJzZUludCh3WzFdKSwgaC5iID0gcGFyc2VJbnQod1syXSksIGgucGVyY2VudCA9IHBhcnNlSW50KHdbM10pLCB0LnB1c2goaCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdC5sZW5ndGggPiAxICYmIChzLnZhbHVlID0gdCwgcy52YWx1ZVswXS5zZWxlY3QgPSAhMCwgai52YWx1ZSA9IHMudmFsdWVbMF0uYSk7XG4gICAgICB9IGVsc2UgaWYgKGwpIHtcbiAgICAgICAgbGV0IGUgPSB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAobC5pbmNsdWRlcyhcIiNcIikpXG4gICAgICAgICAgaWYgKGwubGVuZ3RoID49IDgpXG4gICAgICAgICAgICBlID0gcmwobCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdCA9IGdlKGwpO1xuICAgICAgICAgICAgdCA/IChlLmEgPSAxLCBlLnIgPSB0LnIsIGUuZyA9IHQuZywgZS5iID0gdC5iKSA6IGUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobC5pbmNsdWRlcyhcInJnYlwiKSlcbiAgICAgICAgICBpZiAobC5pbmNsdWRlcyhcInJnYmFcIikpXG4gICAgICAgICAgICBlID0gb2wobCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdCA9IHNsKGwpO1xuICAgICAgICAgICAgdCA/IChlLmEgPSAxLCBlLnIgPSB0LnIsIGUuZyA9IHQuZywgZS5iID0gdC5iKSA6IGUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgZSAmJiAocy52YWx1ZVswXS5yID0gZS5yLCBzLnZhbHVlWzBdLmIgPSBlLmIsIHMudmFsdWVbMF0uZyA9IGUuZywgcy52YWx1ZVswXS5hID0gcGFyc2VJbnQoKGUuYSAqIDEwMCkudG9GaXhlZCgwKSksIGoudmFsdWUgPSBzLnZhbHVlWzBdLmEsIHMudmFsdWVbMF0uaHVlID0gMCk7XG4gICAgICB9XG4gICAgfSwgZGUgPSAobCkgPT4ge1xuICAgICAgY29uc3QgZSA9IHMudmFsdWUuZmluZCgodCkgPT4gdC5zZWxlY3QgPT0gITApO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgc3dpdGNoIChsKSB7XG4gICAgICAgICAgY2FzZSBcIlJHQlwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkhTTFwiOiB7XG4gICAgICAgICAgICBjb25zdCB7IGg6IHQsIHM6IHIsIGw6IGMgfSA9IEVlKFxuICAgICAgICAgICAgICBlLnIsXG4gICAgICAgICAgICAgIGUuZyxcbiAgICAgICAgICAgICAgZS5iXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgSC5oID0gTWF0aC5yb3VuZCh0KSwgSC5zID0gTWF0aC5yb3VuZChyICogMTAwKSwgSC5sID0gTWF0aC5yb3VuZChjICogMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFwiSFNWXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaDogdCwgczogciwgdjogYyB9ID0gZGwoXG4gICAgICAgICAgICAgIGUucixcbiAgICAgICAgICAgICAgZS5nLFxuICAgICAgICAgICAgICBlLmJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBELmggPSBNYXRoLnJvdW5kKHQpLCBELnMgPSBNYXRoLnJvdW5kKHIgKiAxMDApLCBELnYgPSBNYXRoLnJvdW5kKGMgKiAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgXCJDTVlLXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgYzogdCwgbTogciwgeTogYywgazogcCB9ID0gdmwoXG4gICAgICAgICAgICAgICAgZS5yLFxuICAgICAgICAgICAgICAgIGUuZyxcbiAgICAgICAgICAgICAgICBlLmJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgQi5jID0gTWF0aC5yb3VuZCh0ICogMTAwKSwgQi5tID0gTWF0aC5yb3VuZChyICogMTAwKSwgQi55ID0gTWF0aC5yb3VuZChjICogMTAwKSwgQi5rID0gTWF0aC5yb3VuZChwICogMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIEwudmFsdWUgPSBsO1xuICAgICAgfVxuICAgIH0sIFRlID0gKGwpID0+IHtcbiAgICAgIGwgJiYgX2UobCksIExlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gd2UoKCkgPT4gby5tb2RlbFZhbHVlLCAobCwgZSkgPT4ge1xuICAgICAgbCAhPT0gZSAmJiBsICE9PSB1LnZhbHVlICYmIChzLnZhbHVlLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgY29uc3QgciA9IFggPT0gbnVsbCA/IHZvaWQgMCA6IFgucXVlcnlTZWxlY3RvcihgI2Nsci1nYi0ke3QuaWR9YCk7XG4gICAgICAgIHIgPT0gbnVsbCB8fCByLnJlbW92ZSgpO1xuICAgICAgfSksIFRlKGwpKTtcbiAgICB9KSwgbHQoKCkgPT4ge1xuICAgICAgbGV0IGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNrLWNwLWxvY2FsLWNvbG9yLWxpc3RcIik7XG4gICAgICBsICYmIChiLnZhbHVlID0gSlNPTi5wYXJzZShsKSk7XG4gICAgfSksIG50KCgpID0+IHtcbiAgICAgIHZhciBsO1xuICAgICAgby5tb2RlID09IFwiZ3JhZGllbnRcIiAmJiAoWCA9IChsID0gYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGwucXVlcnlTZWxlY3RvcihcIi5ncmFkaWVudC1iYXJcIikpLCBUZShvLm1vZGVsVmFsdWUpLCBkZShMLnZhbHVlKSwgcmUudmFsdWUgPSAhMDtcbiAgICB9KSwgKGwsIGUpID0+ICh5KCksIEkoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFIoW1wiY2stY3AtY29udGFpbmVyXCIsIG4uZGlzYWJsZWQgPyBcImNrLWNwLWRpc2FibGVkIFwiIDogXCJcIl0pLFxuICAgICAgcmVmX2tleTogXCJwaWNrZXJUZW1wbGF0ZVJlZlwiLFxuICAgICAgcmVmOiBhLFxuICAgICAgXCJjcC10aGVtZVwiOiBuLnRoZW1lXG4gICAgfSwgW1xuICAgICAgdmUoQXQsIHsgb25Pbk1vdXNlRG93bjogT2UgfSksXG4gICAgICB2ZShHdCwge1xuICAgICAgICBhbmdsZTogbS5hbmdsZSxcbiAgICAgICAgXCJvblVwZGF0ZTphbmdsZVwiOiBlWzBdIHx8IChlWzBdID0gKHQpID0+IG0uYW5nbGUgPSB0KSxcbiAgICAgICAgcGVyY2VudGFnZVg6IG0ucGVyY2VudGFnZVgsXG4gICAgICAgIFwib25VcGRhdGU6cGVyY2VudGFnZVhcIjogZVsxXSB8fCAoZVsxXSA9ICh0KSA9PiBtLnBlcmNlbnRhZ2VYID0gdCksXG4gICAgICAgIGxvY2FsOiBuLmxvY2FsLFxuICAgICAgICBpY29uQ2xhc3Nlczogbi5pY29uQ2xhc3NlcyxcbiAgICAgICAgaW5wdXRUeXBlOiBMLnZhbHVlLFxuICAgICAgICBwZXJjZW50YWdlWTogbS5wZXJjZW50YWdlWSxcbiAgICAgICAgXCJvblVwZGF0ZTpwZXJjZW50YWdlWVwiOiBlWzJdIHx8IChlWzJdID0gKHQpID0+IG0ucGVyY2VudGFnZVkgPSB0KSxcbiAgICAgICAgbW9kZTogbi5tb2RlLFxuICAgICAgICBzaG93Q29sb3JMaXN0OiBuLnNob3dDb2xvckxpc3QsXG4gICAgICAgIHNob3dJbnB1dE1lbnU6IG4uc2hvd0lucHV0TWVudSxcbiAgICAgICAgc2hvd0V5ZURyb3A6IG4uc2hvd0V5ZURyb3AsXG4gICAgICAgIGlzRXllRHJvcHBlclVzaW5nOiBmLnZhbHVlLFxuICAgICAgICBncmFkaWVudFR5cGU6IHYudmFsdWUsXG4gICAgICAgIG9uT25DaGFuZ2VNb2RlOiBGZSxcbiAgICAgICAgb25PbklucHV0OiBFLFxuICAgICAgICBvbk9uQ2xpY2tFeWVEcm9wcGVyOiBqZSxcbiAgICAgICAgb25PbkRlbGV0ZUNvbG9yOiBxZSxcbiAgICAgICAgb25PblNhdmVDb2xvcjogWmUsXG4gICAgICAgIG9uT25DaGFuZ2VJbnB1dFR5cGU6IGRlXG4gICAgICB9LCBudWxsLCA4LCBbXCJhbmdsZVwiLCBcInBlcmNlbnRhZ2VYXCIsIFwibG9jYWxcIiwgXCJpY29uQ2xhc3Nlc1wiLCBcImlucHV0VHlwZVwiLCBcInBlcmNlbnRhZ2VZXCIsIFwibW9kZVwiLCBcInNob3dDb2xvckxpc3RcIiwgXCJzaG93SW5wdXRNZW51XCIsIFwic2hvd0V5ZURyb3BcIiwgXCJpc0V5ZURyb3BwZXJVc2luZ1wiLCBcImdyYWRpZW50VHlwZVwiXSksXG4gICAgICBuLm1vZGUgPT0gXCJncmFkaWVudFwiID8gKHkoKSwgVChQdCwge1xuICAgICAgICBrZXk6IDAsXG4gICAgICAgIG9uT25BZGRDb2xvcjogS2UsXG4gICAgICAgIG9uT25Nb3VzZURvd246IE5lXG4gICAgICB9KSkgOiBWKFwiXCIsICEwKSxcbiAgICAgIHZlKEZ0LCB7XG4gICAgICAgIG1vZGVsVmFsdWU6IEsudmFsdWUsXG4gICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBlWzNdIHx8IChlWzNdID0gKHQpID0+IEsudmFsdWUgPSB0KSxcbiAgICAgICAgb25PbklucHV0OiBlWzRdIHx8IChlWzRdID0gKHQpID0+IGhlKCExKSksXG4gICAgICAgIG9uT25DaGFuZ2U6IEdlXG4gICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSxcbiAgICAgIG4uc2hvd0FscGhhID8gKHkoKSwgVChRdCwge1xuICAgICAgICBrZXk6IDEsXG4gICAgICAgIG1vZGVsVmFsdWU6IGoudmFsdWUsXG4gICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBlWzVdIHx8IChlWzVdID0gKHQpID0+IGoudmFsdWUgPSB0KSxcbiAgICAgICAgb25PbklucHV0OiBQZVxuICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICBaKHgoXCJkaXZcIiwgZmwsIG51bGwsIDUxMiksIFtcbiAgICAgICAgW18sICExXVxuICAgICAgXSksXG4gICAgICByZS52YWx1ZSAmJiBuLnNob3dJbnB1dFNldCA/ICh5KCksIEkoXCJkaXZcIiwgaGwsIFtcbiAgICAgICAgTC52YWx1ZSAhPT0gXCJDTVlLXCIgPyAoeSgpLCBUKGFsLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IE4udmFsdWUsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbNl0gfHwgKGVbNl0gPSAodCkgPT4gTi52YWx1ZSA9IHQpLFxuICAgICAgICAgICAgSmVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiUkdCXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgbGFiZWw6IFwiUlwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBzLnZhbHVlLmZpbmQoKHQpID0+IHQuc2VsZWN0ID09ICEwKS5yLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzddIHx8IChlWzddID0gKHQpID0+IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApLnIgPSB0KSxcbiAgICAgICAgICAgIGVbOF0gfHwgKGVbOF0gPSAodCkgPT4gdWUodCwgXCJyXCIpKVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJSR0JcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBsYWJlbDogXCJHXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMjU1LFxuICAgICAgICAgIG1vZGVsVmFsdWU6IHMudmFsdWUuZmluZCgodCkgPT4gdC5zZWxlY3QgPT0gITApLmcsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbOV0gfHwgKGVbOV0gPSAodCkgPT4gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCkuZyA9IHQpLFxuICAgICAgICAgICAgZVsxMF0gfHwgKGVbMTBdID0gKHQpID0+IHVlKHQsIFwiZ1wiKSlcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiUkdCXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDMsXG4gICAgICAgICAgbGFiZWw6IFwiQlwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBzLnZhbHVlLmZpbmQoKHQpID0+IHQuc2VsZWN0ID09ICEwKS5iLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzExXSB8fCAoZVsxMV0gPSAodCkgPT4gcy52YWx1ZS5maW5kKChyKSA9PiByLnNlbGVjdCA9PSAhMCkuYiA9IHQpLFxuICAgICAgICAgICAgZVsxMl0gfHwgKGVbMTJdID0gKHQpID0+IHVlKHQsIFwiYlwiKSlcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiSFNMXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDQsXG4gICAgICAgICAgbGFiZWw6IFwiSFwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBILmgsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMTNdIHx8IChlWzEzXSA9ICh0KSA9PiBILmggPSB0KSxcbiAgICAgICAgICAgIHllXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkhTTFwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiA1LFxuICAgICAgICAgIGxhYmVsOiBcIlNcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogSC5zLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzE0XSB8fCAoZVsxNF0gPSAodCkgPT4gSC5zID0gdCksXG4gICAgICAgICAgICB5ZVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJIU0xcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogNixcbiAgICAgICAgICBsYWJlbDogXCJMXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEgubCxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxNV0gfHwgKGVbMTVdID0gKHQpID0+IEgubCA9IHQpLFxuICAgICAgICAgICAgeWVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiSFNWXCIgPyAoeSgpLCBUKFksIHtcbiAgICAgICAgICBrZXk6IDcsXG4gICAgICAgICAgbGFiZWw6IFwiSFwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBELmgsXG4gICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICAgIGVbMTZdIHx8IChlWzE2XSA9ICh0KSA9PiBELmggPSB0KSxcbiAgICAgICAgICAgIGJlXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKSxcbiAgICAgICAgTC52YWx1ZSA9PSBcIkhTVlwiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiA4LFxuICAgICAgICAgIGxhYmVsOiBcIlNcIixcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogRC5zLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBlWzE3XSB8fCAoZVsxN10gPSAodCkgPT4gRC5zID0gdCksXG4gICAgICAgICAgICBiZVxuICAgICAgICAgIF1cbiAgICAgICAgfSwgbnVsbCwgOCwgW1wibW9kZWxWYWx1ZVwiXSkpIDogVihcIlwiLCAhMCksXG4gICAgICAgIEwudmFsdWUgPT0gXCJIU1ZcIiA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogOSxcbiAgICAgICAgICBsYWJlbDogXCJWXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEQudixcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxOF0gfHwgKGVbMThdID0gKHQpID0+IEQudiA9IHQpLFxuICAgICAgICAgICAgYmVcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMCxcbiAgICAgICAgICBsYWJlbDogXCJDXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIuYyxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsxOV0gfHwgKGVbMTldID0gKHQpID0+IEIuYyA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMSxcbiAgICAgICAgICBsYWJlbDogXCJNXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIubSxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyMF0gfHwgKGVbMjBdID0gKHQpID0+IEIubSA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMixcbiAgICAgICAgICBsYWJlbDogXCJZXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIueSxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyMV0gfHwgKGVbMjFdID0gKHQpID0+IEIueSA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBMLnZhbHVlID09IFwiQ01ZS1wiID8gKHkoKSwgVChZLCB7XG4gICAgICAgICAga2V5OiAxMyxcbiAgICAgICAgICBsYWJlbDogXCJLXCIsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IEIuayxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyMl0gfHwgKGVbMjJdID0gKHQpID0+IEIuayA9IHQpLFxuICAgICAgICAgICAgY2VcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm1vZGVsVmFsdWVcIl0pKSA6IFYoXCJcIiwgITApLFxuICAgICAgICBuLnNob3dBbHBoYSA/ICh5KCksIFQoWSwge1xuICAgICAgICAgIGtleTogMTQsXG4gICAgICAgICAgbGFiZWw6IFwiQVwiLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICBzdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJweFwiIH0sXG4gICAgICAgICAgbW9kZWxWYWx1ZTogcy52YWx1ZS5maW5kKCh0KSA9PiB0LnNlbGVjdCA9PSAhMCkuYSxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogW1xuICAgICAgICAgICAgZVsyM10gfHwgKGVbMjNdID0gKHQpID0+IHMudmFsdWUuZmluZCgocikgPT4gci5zZWxlY3QgPT0gITApLmEgPSB0KSxcbiAgICAgICAgICAgIGVbMjRdIHx8IChlWzI0XSA9ICh0KSA9PiB1ZSh0LCBcImFcIikpXG4gICAgICAgICAgXVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJtb2RlbFZhbHVlXCJdKSkgOiBWKFwiXCIsICEwKVxuICAgICAgXSkpIDogVihcIlwiLCAhMCksXG4gICAgICBiLnZhbHVlLmxlbmd0aCA+IDAgJiYgbi5zaG93Q29sb3JMaXN0ID8gKHkoKSwgSShcImRpdlwiLCB5bCwgW1xuICAgICAgICAoeSghMCksIEkoWGUsIG51bGwsIGF0KGIudmFsdWUsICh0KSA9PiAoeSgpLCBJKFwiZGl2XCIsIHtcbiAgICAgICAgICBrZXk6IGBjb2xvci0ke3R9YCxcbiAgICAgICAgICBjbGFzczogXCJjay1jcC1jb2xvci1pdGVtXCIsXG4gICAgICAgICAgc3R5bGU6IEcoeyBiYWNrZ3JvdW5kQ29sb3I6IHQgfSksXG4gICAgICAgICAgb25DbGljazogKHIpID0+IFFlKHQpXG4gICAgICAgIH0sIG51bGwsIDEyLCBibCkpKSwgMTI4KSlcbiAgICAgIF0pKSA6IFYoXCJcIiwgITApXG4gICAgXSwgMTAsIG1sKSk7XG4gIH1cbn0pO1xuZXhwb3J0IHtcbiAgJGwgYXMgVnVlM0NvbG9yUGlja2VyXG59O1xuIl0sIm5hbWVzIjpbIlZ1ZTNDb2xvclBpY2tlciIsIm5hbWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbG9ycyIsImFjdGl2ZV9jb2xvciIsIm1vdW50ZWQiLCJsb2FkQ29sb3JzIiwibWV0aG9kcyIsImFkZE5ld0NvbG9yIiwicHVzaCIsImNvZGUiLCJfdGhpcyIsIktyaXRpIiwiYXBpIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwic2F2ZUNvbG9ycyIsInN1Y2Nlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsInNlbGVjdEFjdGl2ZUNvbG9yIiwiY29sb3IiLCJjbG9zZVBhbGV0dGUiLCJlbWl0cyIsInByb3BzIiwic2NoZW1lX2NvZGUiLCJTdHJpbmciLCJjb250ZXh0IiwiT2JqZWN0IiwiY29udGV4dF90eXBlIiwibW91c2VfeCIsIk51bWJlciIsIm1vdXNlX3kiLCJpdGVtcyIsIngiLCJ5Iiwid2F0Y2giLCJnZXRNZW51SXRlbXMiLCJjb21wdXRlZCIsIm1vZHVsZVN0eWxlIiwibGVmdCIsImNvbmNhdCIsInRvcCIsImNsb3NlIiwiJGVtaXQiLCJ0eXBlIiwidXVpZCIsImNsaWNrSXRlbSIsIml0ZW0iLCJfIiwiY2xvbmVEZWVwIiwiTW9kdWxlIiwibm9kZSIsInBvaW50IiwiQ29udHJvbFBhbmVsIiwibm9kZV9tZW51IiwiYWN0aXZlX21ldGhvZCIsImJ1dHRvbnMiLCJpY29uIiwiY2xpY2siLCJzZXREYXRhIiwiX3RoaXMyIiwiZ2V0RGF0YSIsIm1ldGhvZCIsInZhcmlhYmxlIiwiX3RoaXMzIiwidHJhbnNmb3JtTWV0aG9kIiwiX3RoaXM0IiwidmFsdWVzIiwiZ2V0Q29udGVudCIsInByZWZpeCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJOb2RlIiwiTm9kZU1vZGFsIiwiQ29udGV4dE1lbnUiLCJDb2xvclBhbGV0dGUiLCJhY3RpdmVfc2NoZW1lX2NvZGUiLCJzY2hlbWUiLCJjb250ZXh0X21lbnVfb2JqZWN0Iiwid29ya3NwYWNlX3dpZHRoIiwid29ya3NwYWNlX2hlaWdodCIsImhvbGRfeF9mYWN0b3IiLCJob2xkX3lfZmFjdG9yIiwid29ya3NwYWNlX3NpemVfaXNfZGVmaW5lZCIsInBsYXRvX3giLCJwbGF0b195IiwiYWN0aXZlX25vZGUiLCJsYXN0X2hvbGRfeCIsImxhc3RfaG9sZF95Iiwibm9kZXMiLCJfdGhpcyRzY2hlbWUiLCJkZWZpbmVXb3Jrc3BhY2VTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFNjaGVtZSIsImJlZm9yZVVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiJG5leHRUaWNrIiwicGFyZW50RWxlbWVudCIsIiRlbCIsInBhcmVudE5vZGUiLCJnbG9iYWwiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNhbml0aXplTm9kZXMiLCJtYXAiLCJzYXZlU2NoZW1lIiwic2NoZW1lX2RhdGEiLCJkZXNjcmlwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtb3ZlUGxhdG8iLCJob2xkX3BsYXRvIiwiZHJvcFBsYXRvIiwibW91c2Vtb3ZlIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwibW92ZU5vZGUiLCIkIiwiY3NzIiwibWFyZ2luTGVmdCIsImJvZHlfeF9mYWN0b3IiLCJtYXJnaW5Ub3AiLCJib2R5X3lfZmFjdG9yIiwibm9kZUhvbGQiLCJidXR0b24iLCJzYXZlSG9sZFBvc2l0aW9uIiwiZm9jdXMiLCJub2RlRHJvcCIsIndvcmtzcGFjZUNvbnRleHRNZW51Iiwib3BlbkNvbnRleHRNZW51IiwiY2xvc2VDb250ZXh0TWVudSIsImNsaWNrQ29udGV4dE1lbnVJdGVtIiwiY3JlYXRlVVVJRCIsImZuIiwiY3JlYXRlTGluayIsIldvcmtzcGFjZSIsInN0eWxlX21vZHVsZSIsInN0eWxlIiwibW9kdWxlIiwic3R5bGVfbW9kdWxlX3RpdGxlIiwibW9kdWxlX3RpdGxlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiJGRhdGEiLCJpbmRleCIsIl9ub3JtYWxpemVTdHlsZSIsIiRldmVudCIsIm9uQ2xpY2siLCIkb3B0aW9ucyIsIl9jYWNoZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2hvaXN0ZWRfNyIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfVnVlM0NvbG9yUGlja2VyIiwibW9kZSIsInNob3dDb2xvckxpc3QiLCJzaG93RXllRHJvcCIsImxlbmd0aCIsIl9ub3JtYWxpemVDbGFzcyIsIl90b0Rpc3BsYXlTdHJpbmciLCJ0ZXh0IiwiJHByb3BzIiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9Nb2R1bGUiLCJfaG9pc3RlZF8yIiwiX2hvaXN0ZWRfMyIsIl9ob2lzdGVkXzQiLCJfY3R4IiwiX2hvaXN0ZWRfNiIsImFjdGl2ZSIsInRpdGxlIiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzkiLCJfY29tcG9uZW50X0Zvcm1GaXR0ZXIiLCIkc2xvdHMiLCJfcmVuZGVyU2xvdCIsIl9ob2lzdGVkXzEwIiwiX2NvbXBvbmVudF9Db250cm9sUGFuZWwiLCJvbk1vdXNlZG93biIsIl93aXRoTW9kaWZpZXJzIiwib25Nb3VzZXVwIiwib25Nb3VzZW1vdmUiLCJvbkRibGNsaWNrIiwiX2NvbXBvbmVudF9Db2xvclBhbGV0dGUiLCJfY29tcG9uZW50X05vZGUiLCJyZWYiLCJpZCIsIm9uQ29udGV4dG1lbnUiLCJfY29tcG9uZW50X05vZGVNb2RhbCIsIm9uQ2xvc2UiLCJvblVwZGF0ZSIsIl9jb21wb25lbnRfQ29udGV4dE1lbnUiLCJvbkNsaWNrX2l0ZW0iLCJfY29tcG9uZW50X1dvcmtzcGFjZSIsInNldHRpbmdzIl0sInNvdXJjZVJvb3QiOiIifQ==