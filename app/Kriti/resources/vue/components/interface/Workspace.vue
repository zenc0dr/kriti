<template>
<div v-if="workspace_size_is_defined"
     class="workspace"
     :style="`width:${workspace_width}px;height:${workspace_height}px`"
     @mousedown.ctrl.self="movePlato"
     @mouseup.self="dropPlato"
     @mousemove="mousemove"
     @dblclick.self="workspaceContextMenu"
>
    <div class="workspace__preloader">
    </div>

    <div class="workspace__plato" :style="`margin-left:${ plato_x }px;margin-top:${ plato_y }px`">
        <Node v-for="node in nodes" :node="node"
             :ref="node.id" :class="{ focus:node === active_node }"
             @mousedown="nodeHold(node, $event)"
             @mouseup="nodeDrop"
             @click.ctrl="createLink(node)"
             @contextmenu.prevent="openContextMenu(node)"
        />
    </div>
    <NodeModal :scheme_name="active_scheme_name" :node="node" @close="node = null" @update="getScheme"/>
    <ContextMenu
        :context="context_menu_object"
        context_type="node"
        :scheme_name="active_scheme_name"
        :mouse_x="mouse_x"
        :mouse_y="mouse_y"
        @close="closeContextMenu"
        @click_item="clickContextMenuItem"
    />

</div>
</template>

<script>
import Node from "./Node";
import NodeModal from "./NodeModal";
import ContextMenu from "./ContextMenu";

export default {
    name: "Workspace",
    components: {
        Node, // Компонент реализующий ноду
        NodeModal, // Компонент рабочее окно нода
        ContextMenu
    },
    props: {

    },
    data() {
        return {
            active_scheme_name: 'calculator', // Имя активной темы
            scheme: {}, // Активная схема
            context_menu_object: null, // Объект контекстного меню

            mouse_x: 0,
            mouse_y: 0,
            workspace_width: null, // Ширина рабочей области
            workspace_height: null, // Высота рабочей области
            hold_x_factor: null, // Поправка объекта по x
            hold_y_factor: null, // Поправка объекта по y
            workspace_size_is_defined: false, // Размер рабочей области определён
            plato_x: 0, // Смещение карты по оси Х
            plato_y: 0, // Смещение карты по оси Y
            node: null, // Данные нода
            active_node: null, // Выделенный нод
            last_hold_x: 0, // Позиция нода перед перемещением по X
            last_hold_y: 0, // Позиция нода перед перемещением по Y
        }
    },
    computed: {
        nodes() { // Ноды схемы
            return this.scheme?.nodes
        }
    },
    created() {
    },
    mounted() {
        this.defineWorkspaceSize() // Установить размеры окна
        window.addEventListener('resize', this.defineWorkspaceSize)
        this.getScheme()
    },
    beforeUnmount() { // Перед размонтированием удалить слушатель размеров рабочей области
        window.removeEventListener('resize', this.defineWorkspaceSize)
    },
    methods: {
        // Определить размер рабочей области
        defineWorkspaceSize() {
            this.$nextTick(() => {
                let parentElement = this.$el.parentNode
                // Записываем эти данные в глобальные переменные Kriti
                Kriti.global.workspace_width = this.workspace_width = parentElement.offsetWidth
                Kriti.global.workspace_height = this.workspace_height = parentElement.offsetHeight
                if (this.workspace_width && this.workspace_height) {
                    this.workspace_size_is_defined = true
                }
            });
        },

        // Загрузить схему
        getScheme() {
            Kriti.api({
                url: 'kriti.api.Scheme:getScheme',
                data: {
                    'scheme_name': this.active_scheme_name
                },
                then: response => {
                    this.scheme = response.scheme
                }
            })
        },

        // Очистить ноды от лишних данных
        sanitizeNodes() {
            let nodes = _.cloneDeep(this.scheme.nodes)
            nodes.map(function (node) {
                delete node.focus
            })
            return nodes
        },

        // Сохранить ноды
        saveScheme() {
            Kriti.api({
                url: 'kriti.api.Scheme:setScheme',
                data: {
                    scheme_name: this.active_scheme_name,
                    scheme_data: {
                        name: this.scheme.name,
                        nodes: this.sanitizeNodes()
                    }
                },
                then: response => {
                    console.log('nodes save')
                }
            })
        },

        // Двигать карту
        movePlato() {
            this.hold_x_factor = this.mouse_x - this.plato_x
            this.hold_y_factor = this.mouse_y - this.plato_y
            this.hold_plato = true
        },

        // Оставить карту
        dropPlato() {
            this.hold_plato = false
            this.saveScheme() // Сохранить состояние
        },

        // Фиксировать движение мыши
        mousemove(event) {
            this.mouse_x = event.pageX
            this.mouse_y = event.pageY
            this.moveNode() // Двигать объект если он активен
        },

        // Перемещение нода
        moveNode() {
            if (this.active_node) {
                this.active_node.point.x = this.mouse_x - this.hold_x_factor
                this.active_node.point.y = this.mouse_y - this.hold_y_factor
            }

            // Если двигается карта
            if (this.hold_plato) {
                this.plato_x = this.mouse_x - this.hold_x_factor
                this.plato_y = this.mouse_y - this.hold_y_factor
                $('body').css({
                    marginLeft: this.plato_x + this.body_x_factor,
                    marginTop: this.plato_y + this.body_y_factor
                })
            }
            //this.quantizeObjects()
        },

        // Захват нода
        nodeHold(node, event) {
            if (event.button !== 0) {
                return
            }
            this.saveHoldPosition()
            node.focus = true
            this.hold_x_factor = this.mouse_x - node.point.x
            this.hold_y_factor = this.mouse_y - node.point.y
            this.active_node = node
        },

        // Зафиксировать позицию нода
        saveHoldPosition() {
            this.last_hold_x = this.mouse_x
            this.last_hold_y = this.mouse_y
        },

        // Установить нод
        nodeDrop() {
            if (event.button !== 0) {
                return
            }

            this.nodes.map(function (node) {
                node.focus = false
            })

            this.active_node = null

            // Сохранять только если был сдвинут объект
            if (this.last_hold_x !== this.mouse_x || this.last_hold_y !== this.mouse_y) {
                this.saveScheme()
            }
        },

        // Открыть меню рабочей области
        workspaceContextMenu() {
            console.log('Контекстное меню рабочей области')
        },

        // Открыть контекстное меню
        openContextMenu(node) {
            this.context_menu_object = node
        },

        // Закрыть контекстное меню
        closeContextMenu()
        {
            this.context_menu_object = null
        },

        // Открыть контекстное меню нода
        clickContextMenuItem(code, context) {
            if (code === 'openNodeSettings') {
                this.node = context
            }
            if (code === 'cloneModule') {
                this.createUUID((uuid) => {
                    context.uuid = uuid
                    context.point.x += 100
                    context.point.y += 100
                    this.scheme.nodes.push(context)
                })
            }
        },

        createUUID(fn) {
            Kriti.api({
                url: 'kriti.api.Node:createUUID',
                then: response => {
                    fn(response.uuid)
                }
            })
        },

        createLink(){},
    }
}
</script>

<style lang="scss">
.workspace {
    padding: 10px;
    background: #3e684e;
    color: #000;

    &__plato {
        width: 0;
        height: 0;
        position: relative;
    }

    .kriti-preloader {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff75;
        transition: 300ms;
        justify-content: center;
        align-items: center;
        user-select: none;
        z-index: 100001;
    }
}
</style>
