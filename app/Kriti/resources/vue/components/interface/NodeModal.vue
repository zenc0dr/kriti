<template>
    <KritiModal class="node-modal" :show="!!node_menu" @close="$emit('close')">
        <template #heading>
            <div class="node-modal__title">
                Настройки нода uuid:<div class="node-modal__uuid">{{ node_uuid }}</div>
            </div>
        </template>
        <template #default>
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
        </template>
        <template #footer>
            <ControlPanel :buttons="buttons" />
        </template>
    </KritiModal>
</template>

<script>
import ControlPanel from "./Dwarf/forms/ControlPanel";
import KritiModal from "./KritiModal";
export default {
    name: "NodeModal",
    components: {
        ControlPanel, KritiModal
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
    computed: {
        node_uuid() {
            return this.node?.uuid
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
    &__title {
        display: flex;
        flex-direction: row;
    }

    &__uuid {
        color: #777;
        margin-left: 5px;
    }

    &__content {
        display: flex;
        justify-content: space-between;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        margin-right: 15px;

        &__item {
            padding: 0px 11px;
            cursor: pointer;
            color: #9d9d9d;
            font-size: 17px;
            margin-bottom: 4px;

            &.active {
                color: #7284d6;
                border-left: 3px solid #7284d6;
                margin-left: -3px;
            }
        }
    }

    &__form {
        flex: 1 0 0;
    }
}
</style>
