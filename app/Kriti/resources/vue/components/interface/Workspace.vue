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
        <KritiMenu
            :active_scheme_code="active_scheme_code"
            @update_scheme="reloadScheme"
        />
        <KritiBlocks
            ref="KritiBlocks"
        />
    </div>
</template>

<script>
//import LeaderLine from "leader-line-vue" // https://github.com/anseki/leader-line
import LinkerLine from 'linkerline' // https://github.com/AhmedAyachi/LinkerLine
import KritiMenu from "./KritiMenu";
import Node from "./Node";
import NodeModal from "./NodeModal";
import ContextMenu from "./ContextMenu";
import KritiBlocks from "./KritiBlocks";
//import KritiPanel from "./KritiPanel";

export default {
    name: "Workspace",
    components: {

        Node, // Компонент реализующий ноду
        NodeModal, // Компонент рабочее окно нода
        ContextMenu, // Контекстное меню
        KritiMenu,
        KritiBlocks
    },
    props: {},
    data() {
        return {
            active_scheme_code: null, // Имя активной темы
            scheme: null, // Активная схема
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
            plato_x_fix: 0, // Фиксация начальных координат по оси Х
            plato_y_fix: 0, // Фиксация начальных координат по оси Y

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
            return this?.scheme?.nodes
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

        // Обновить схему (или переключить на другую)
        reloadScheme(scheme_code) {
            this.active_scheme_code = scheme_code

            if (this.active_scheme_code) {
                this.getScheme()
            } else {
                this.removeAllLinks()
                this.scheme = null
            }
        },

        // Загрузить схему
        getScheme() {
            this.removeAllLinks()
            if (!this.active_scheme_code) {
                this.scheme = null
                return
            }
            Kriti.api({
                url: 'kriti.api.Scheme:getScheme',
                data: {
                    'scheme_code': this.active_scheme_code
                },
                then: response => {
                    this.scheme = response.scheme
                    this.plato_x_fix = this.plato_x
                    this.plato_y_fix = this.plato_y
                    this.addLinks()
                    this.reloadBlocks()
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
            Kriti.cleanLink()
            this.hold_plato = false
            if (this.plato_x !== this.plato_x_fix || this.plato_y !== this.plato_x_fix) {
                //this.setScheme() // Сохранить состояние
            }
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
            }
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
        closeContextMenu() {
            this.context_menu_object = null
        },

        // Открыть контекстное меню нода
        clickContextMenuItem(code, context) {
            if (code === 'openNodeSettings') {
                this.node = context
            }
            if (code === 'cloneNode') {
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
                        this.reloadBlocks()
                    }
                })
            }

            if (code === 'removeNode') {
                Kriti.api({
                    data: {
                        node_uuid: context.uuid,
                        scheme_code: this.active_scheme_code
                    },
                    url: 'kriti.api.Scheme:removeNode',
                    then: (response) => {
                        this.getScheme()
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
                let links = []
                this.scheme.nodes.forEach(node => {
                    if (node.links) {
                        for (let target_uuid in node.links) {
                            let codes = node.links[target_uuid] ?? null
                            if (codes) {
                                codes.forEach(code => {
                                    code = code.split('@')
                                    links.push({
                                        of: `${node.uuid}:${code[0]}`,
                                        to: `${target_uuid}:${code[1]}`
                                    })
                                })
                            }
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

        panelUpdate(event) {
            if (event === 'clear_links') {

            }
            Kriti.api({
                url: 'kriti.api.Scheme:clearLinks',
                data: {
                    scheme: this.active_scheme_code
                },
                then: response => {
                    this.getScheme()
                }
            })
        },

        reloadBlocks() {
            this.$refs.KritiBlocks.reload()
        },

        addNode() {
            console.log('Добавить нод')
        },
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
    background-image: url(/kriti/images/gridcube.png); // https://www.figma.com/file/68Bxea6uIkMR5KpExVlquG/kriti-links?type=design&node-id=12-4&mode=design&t=QtqPulOKMqBvDyFA-0

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
