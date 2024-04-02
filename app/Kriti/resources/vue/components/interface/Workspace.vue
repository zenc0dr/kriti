<template>
<div v-if="workspace_size_is_defined"
     class="workspace"
     :style="`width:${workspace_width}px;height:${workspace_height}px`"
     @mousedown.ctrl.self="movePlato"
     @mouseup.self="dropPlato"
     @mousemove="mousemove"
     @dblclick.self="contextMenu"
>
    <div class="workspace__preloader">
    </div>

    <div class="workspace__plato" :style="`margin-left:${ plato_x }px;margin-top:${ plato_y }px`">
        <Node v-for="node in nodes" :node="node"
             :ref="node.id" :class="{ focus:node === active_node }"
             @mousedown="nodeHold(node, $event)"
             @mouseup="nodeDrop"
             @click.ctrl="createLink(node)"
             @contextmenu.prevent="nodeLoad(node)"
        />
    </div>
    <NodeModal :node="node" @close="node = null" @update="loadNodes"/>
</div>
</template>

<script>
import Node from "./Node";
import NodeModal from "./NodeModal";

export default {
    name: "Workspace",
    components: {
        Node, NodeModal
    },
    props: {

    },
    data() {
        return {
            workspace_width: null, // Ширина рабочей области
            workspace_height: null, // Высота рабочей области
            hold_x_factor: null, // Поправка объекта по x
            hold_y_factor: null, // Поправка объекта по y
            workspace_size_is_defined: false, // Размер рабочей области определён
            plato_x: 0, // Смещение карты по оси Х
            plato_y: 0, // Смещение карты по оси Y
            nodes: null, // Загруженные ноды
            node: null, // Данные нода
            active_node: null, // Выделенный нод
            last_hold_x: 0, // Позиция нода перед перемещением по X
            last_hold_y: 0, // Позиция нода перед перемещением по Y
        }
    },
    created() {
    },
    mounted() {
        this.defineWorkspaceSize()
        window.addEventListener('resize', this.defineWorkspaceSize)
        this.loadNodes()
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.defineWorkspaceSize)
    },
    methods: {
        // Определить размер рабочей области
        defineWorkspaceSize() {
            this.$nextTick(() => {
                let parentElement = this.$el.parentNode;
                this.workspace_width = parentElement.offsetWidth
                this.workspace_height = parentElement.offsetHeight
                if (this.workspace_width && this.workspace_height) {
                    this.workspace_size_is_defined = true
                }
            });
        },

        // Загрузить ноды
        loadNodes() {
            Kriti.api({
                url: 'kriti.api.Nodes:getNodes',
                then: response => {
                    this.nodes = response.nodes
                }
            })
        },

        sanitizeNodes() {
            let nodes = _.cloneDeep(this.nodes)
            nodes.map(function (node) {
                delete node.focus
            })
            return nodes
        },

        // Сохранить ноды
        saveNodes() {
            Kriti.api({
                url: 'kriti.api.Nodes:setNodes',
                data: {
                    nodes: this.sanitizeNodes()
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
            this.saveNodes() // Сохранить состояние
        },

        // Фиксировать движение мыши
        mousemove(event) {
            this.mouse_x = event.pageX
            this.mouse_y = event.pageY
            this.moveNode() // Двигать объект если он активен
        },

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

        contextMenu(){},

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
                this.saveNodes()
            }
        },

        // Загрузить данные нода
        nodeLoad(node) {
            this.node = node
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
