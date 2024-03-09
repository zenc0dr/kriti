<template>
    <div v-if="node_data" class="node-modal">
        <div class="node-modal__body">
            <div class="node-modal__header">
                <div class="node-modal__title">
                    Тут заголовок модуля {{ node_data }}
                </div>
                <div class="node-modal__close">
                    <i class="bi bi-x-square-fill" @click="$emit('close')"></i>
                </div>
            </div>
            <div class="node-modal__content">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NodeModal",
    emits: ['close'],
    props: {
        node: Object
    },
    data() {
        return {
            node_data: null
        }
    },
    watch: {
        node(node) {
            if (!node) {
                this.node_data = null
                return
            }
            this.node_data = node.type
        }
    },
    methods: {

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
    }

    &__header {
        display: flex;
        justify-content: space-between;
    }

    &__title {

    }

    &__close {
        i {
            color: #a0a0a0;
            cursor: pointer;
            transition: 200ms;
            &:hover {
                color: #ff4f4f;
            }
        }
    }

    &__content {

    }
}
</style>
