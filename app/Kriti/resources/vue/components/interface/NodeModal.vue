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
                    >
                        {{ item.title }}
                    </div>
                </div>
                <div class="node-modal__form">
                    <template v-if="active_method === 'style' && data !== null">
                        <Form :scheme="data.scheme" :modelValue="data.form"
                              @update:modelValue="data.form = $event"
                        />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "./Form";
export default {
    name: "NodeModal",
    components: { Form },
    emits: ['close'],
    props: {
        node: Object
    },
    data() {
        return {
            node_menu: null,
            active_method: 'style',
            data: null
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
        getData(props) {
            if (!props.variable) {
                props.variable = 'data'
            }
            Kriti.api({
                url: 'kriti.api.Node:getData',
                data: {
                    uuid: this.node.uuid,
                    method: props.method
                },
                then: response => {
                    this[props.variable] = response.data
                    if (props.then) {
                        props.then()
                    }
                }
            })
        },
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

    &__body {
        background: #fff;
        width: 80%;
        min-height: 300px;
        margin-top: 30px;
        padding: 15px;
        border-radius: 10px;
        padding-top: 10px;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    }

    &__menu {
        display: flex;
        flex-direction: column;
        width: 150px;
        background: #f6f6f6;
        border-radius: 5px;
        padding: 10px;

        &__item {
            background: #7aa4d0;
            padding: 3px 8px;
            margin: 3px;
            cursor: pointer;
            border-radius: 5px;
            color: #fff;
            font-size: 15px;
        }
    }
}
</style>
