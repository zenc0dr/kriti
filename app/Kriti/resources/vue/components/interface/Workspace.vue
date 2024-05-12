<template>
<div v-if="workspace_size_is_defined"
     class="workspace"
     :style="workspaceStyle"
     @mousedown.ctrl.self="movePlato"
     @mouseup.self="dropPlato"
     @mousemove="mousemove"
     @dblclick.self="workspaceContextMenu"
>
    <div class="workspace__preloader"></div>

    <div id="plato" class="workspace__plato" :style="platoStyle">
        <Node v-for="node in nodes" :node="node"
             :ref="node.uuid" :id="node.uuid" :class="{ focus:node === active_node }"
             @mousedown="nodeHold(node, $event)"
             @mouseup="nodeDrop"
             @click.ctrl="createLink(node)"
             @contextmenu.prevent="openContextMenu(node)"
        />
    </div>
    <NodeModal :node="node" @close="node = null" @update="getScheme"/>
    <ContextMenu
        :context="context_menu_object"
        context_type="node"
        :scheme_code="active_scheme_code"
        :mouse_x="mouse_x"
        :mouse_y="mouse_y"
        @close="closeContextMenu"
        @click_item="clickContextMenuItem"
    />

</div>
</template>

<script>
//import LeaderLine from "leader-line-vue" // https://github.com/anseki/leader-line
import LinkerLine from 'linkerline' // https://github.com/AhmedAyachi/LinkerLine
import Node from "./Node";
import NodeModal from "./NodeModal";
import ContextMenu from "./ContextMenu";

export default {
    name: "Workspace",
    components: {
        Node, // Компонент реализующий ноду
        NodeModal, // Компонент рабочее окно нода
        ContextMenu // Контекстное меню
    },
    props: {

    },
    data() {
        return {
            active_scheme_code: 'calculator', // Имя активной темы
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
            plato_x_start: 0, // Фиксация начальных координат по оси Х
            plato_y_start: 0, // Фиксация начальных координат по оси Y

            //body_x_factor: 0, // Коэффициент
            //body_y_factor: 0,

            node: null, // Данные нода
            active_node: null, // Выделенный нод
            last_hold_x: 0, // Позиция нода перед перемещением по X
            last_hold_y: 0, // Позиция нода перед перемещением по Y

            links: [], // Сцепки
            lines_objects: [],
        }
    },
    computed: {
        nodes() { // Ноды схемы
            return this.scheme?.nodes
        },
        platoStyle() {
            return {
                marginLeft: this.plato_x + 'px',
                marginTop: this.plato_y + 'px'
            }
        },
        workspaceStyle() {
            if (this.workspace_size_is_defined) {
                return {
                    width: this.workspace_width + 'px',
                    height: this.workspace_height + 'px',
                    backgroundPositionX: this.plato_x + 'px',
                    backgroundPositionY: this.plato_y + 'px'
                }
            }
        }
    },
    mounted() {
        Kriti.Workspace = this
        this.defineWorkspaceSize() // Установить размеры окна
        window.addEventListener('resize', this.defineWorkspaceSize)
        this.getScheme(() => {
            // jQuery('body').css({
            //     marginLeft: this.plato_x,
            //     marginTop: this.plato_y,
            // })
            this.plato_x_start = this.plato_x
            this.plato_y_start = this.plato_y
            this.addLinks()
        })
    },
    beforeUnmount() { // Перед размонтированием удалить слушатель размеров рабочей области
        Kriti.Workspace = null
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
        getScheme(fn) {
            Kriti.api({
                url: 'kriti.api.Scheme:getScheme',
                data: {
                    'scheme_code': this.active_scheme_code
                },
                then: response => {
                    this.scheme = response.scheme
                    if (fn) {
                        fn()
                    }
                }
            })
        },

        // Очистить ноды от лишних данных
        sanitizeNodes() {
            let nodes = _.cloneDeep(this.scheme.nodes)
            nodes.map(function (node) {
                delete node.static
            })
            return nodes
        },

        // Сохранить ноды
        setScheme() {

            const scheme = _.cloneDeep(this.scheme)
            scheme.nodes = this.sanitizeNodes()

            Kriti.api({
                url: 'kriti.api.Scheme:setScheme',
                data: {
                    scheme_code: this.active_scheme_code,
                    scheme_data: scheme
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
            this.setScheme() // Сохранить состояние
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
                this.correctLines()
            }

            // Если двигается карта
            if (this.hold_plato) {
                this.plato_x = this.mouse_x - this.hold_x_factor
                this.plato_y = this.mouse_y - this.hold_y_factor

                // jQuery('body').css({
                //     marginLeft: this.plato_x + this.body_x_factor,
                //     marginTop: this.plato_y + this.body_y_factor
                // })
            }
            //this.quantizeObjects()
        },

        // Захват нода
        nodeHold(node, event) {
            if (event.button !== 0) {
                return
            }
            this.saveHoldPosition()
            node.static.focus = true
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
                node.static.focus = false
            })

            this.active_node = null

            // Сохранять только если был сдвинут объект
            if (this.last_hold_x !== this.mouse_x || this.last_hold_y !== this.mouse_y) {
                this.setScheme()
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
                    then: (response) => {
                        let node = response.node
                        node.point.x += 100
                        node.point.y += 100
                        this.scheme.nodes.push(node)
                    }
                })
            }
        },

        // Запросить генерацию uuid todo: Зачем???
        createUUID(fn) {
            Kriti.api({
                url: 'kriti.api.Node:createUUID',
                then: response => {
                    fn(response.uuid)
                }
            })
        },

        // Отобразить сцепки
        addLinks() {
            this.$nextTick(() => {
                // this.scheme.links.map(link => {
                //     this.addLink(link)
                // })

                let links = []
                this.scheme.nodes.forEach(node => {
                    if (node.links) {
                        for (let target_uuid in node.links) {
                            let codes = node.links[target_uuid]
                            codes.forEach(code => {
                                code = code.split('@')
                                links.push({
                                    of: `${node.uuid}:${code[0]}`,
                                    to: `${target_uuid}:${code[1]}`
                                })
                            })
                        }
                    }
                })

                links.map((link) => {
                    this.addLink(link)
                })
            })
        },

        // Добавить сцепку
        addLink(link) {
            let plato = document.getElementById('plato')
            let element_a = document.getElementById(link.of)
            let element_b = document.getElementById(link.to)

            let options = {
                parent: plato,
                start: element_a,
                end: element_b,
                startPlug: 'disc',
                endPlug: 'arrow1',
                size: 3,
                path: 'fluid',
                dash: {
                    animation: {
                        duration: 200 // Указываем длительность анимации в миллисекундах
                    },
                }
            }

            let line = new LinkerLine(options)
            this.lines_objects.push(line)
        },

        removeAllLinks() {
            LinkerLine.removeAllLines()
        },

        makeLink(link, fn) {
            Kriti.api({
                url: 'kriti.api.Node:makeLink',
                data: {
                    link,
                    scheme_code: this.active_scheme_code
                },
                then: response => {
                    if (fn) {
                        fn()
                    }
                }
            })
        },

        correctLines() {
            LinkerLine.positionAll()
        },

        createLink(){},
    }
}
</script>

<style lang="scss">
@import '../../../scss/kriti.palette.scss';

.workspace {
    padding: 10px;
    background: $bg-dark;
    color: $f-dark;
    background-color: #D9D9D9;
    background-image: url(/kriti/images/gridcube.png);

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
