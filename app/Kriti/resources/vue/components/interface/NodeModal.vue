<template>
    <div v-if="node_menu" class="node-modal">
        <div class="node-modal__body">
            <div class="node-modal__header">
                <div class="node-modal__title">
                    Тут заголовок модуля
                </div>
                <div class="node-modal__close">
                    <i class="bi bi-x-square-fill" @click="$emit('close')"></i>
                </div>
            </div>
            <div class="node-modal__content">
                <div class="node-modal__menu">
                    <div v-for="item in node_menu"
                         class="node-modal__menu__item"
                         :class="{active:item.method === active_method}"
                         @click="getContent(item.method)"
                    >
                        {{ item.title }}
                    </div>
                </div>
                <div class="node-modal__form">
                    <FormFitter v-if="data !== null" :scheme="data.scheme" v-model="data.values">
                        <template v-for="(_, name) in $slots" v-slot:[name]>
                            <slot :name="name"/>
                        </template>
                    </FormFitter>
                </div>
            </div>
            <div class="node-modal__control">
                <ControlPanel :buttons="buttons" />
            </div>
        </div>
    </div>
</template>

<script>
import ControlPanel from "./Dwarf/forms/ControlPanel";
export default {
    name: "NodeModal",
    components: {
        ControlPanel
    },
    emits: ['close', 'update'],
    props: {
        node: Object,
    },
    data() {
        return {
            node_menu: null,
            active_method: 'style',
            data: null,
            buttons: [
                {
                    name: 'Сохранить',
                    icon: 'bi bi-cloud-upload',
                    click: () => {
                        this.setData()
                    }
                }
            ]
        }
    },
    watch: {
        node(node) {
            if (!node) {
                this.node_menu = null
                return
            }
            this.getData({
                method: 'menu',
                variable:'node_menu',
                then: () => {
                    this.getData({
                        method: this.active_method,
                    })
                }
            })
        }
    },
    methods: {
        // Чтение из нода
        getData(props) {
            if (!props.variable) {
                props.variable = 'data'
            }
            Kriti.api({
                url: 'kriti.api.Node:getData',
                data: {
                    uuid: this.node.uuid,
                    method: this.transformMethod('get', props.method)
                },
                then: response => {
                    this[props.variable] = response.data
                    if (props.then) {
                        props.then()
                    }
                }
            })
        },
        // Запись в нод
        setData() {
            Kriti.api({
                url: 'kriti.api.Node:setData',
                data: {
                    uuid: this.node.uuid,
                    method: this.transformMethod('set', this.active_method),
                    values: this.data.values
                },
                then: response => {
                    this.$emit('update', response) // Посылается для обновления схемы
                }
            })
        },

        getContent(method) {
            this.active_method = method
            this.getData({
                method: this.active_method,
            })
        },

        // Преобразует "prefix, method" в "prefixMethod"
        transformMethod(prefix, method) {
            return prefix + method.charAt(0).toUpperCase() + method.slice(1)
        }
    }
}
</script>

<style lang="scss">
.node-modal {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0000009c;
    overflow-y: auto;

    &__body {
        background: #fff;
        width: 80%;
        min-height: 300px;
        margin-top: 30px;
        padding: 15px;
        border-radius: 10px;
        padding-top: 10px;
        margin-bottom: 100px;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    &__title {

    }

    &__close {
        i {
            color: #a0a0a0;
            cursor: pointer;
            transition: 200ms;
            font-size: 25px;

            &:hover {
                color: #ff4f4f;
            }
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        width: 150px;
        background: #f6f6f6;
        border-radius: 5px;
        padding: 10px;
        margin-right: 15px;

        &__item {
            background: #a5b0bd;
            padding: 3px 8px;
            margin: 3px;
            cursor: pointer;
            border-radius: 5px;
            color: #fff;
            font-size: 15px;

            &.active {
                background: #7aa4d0;
            }
        }
    }

    &__form {
        flex: 1 0 0;
    }
}
</style>
