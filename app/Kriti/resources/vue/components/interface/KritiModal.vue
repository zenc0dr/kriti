<template>
<div v-if="show" class="kriti-modal">
    <div v-if="loading" class="kriti-modal__body">
        <div class="kriti-modal__loading">
            Загрузка...
        </div>
    </div>
    <div v-else class="kriti-modal__body">
        <div class="kriti-modal__header">
            <div class="kriti-modal__header__title">
                {{ title }}
            </div>
            <div @click="close" class="kriti-modal__header__close">
                X
            </div>
        </div>
        <div class="kriti-modal__content">
            <slot></slot>
        </div>
        <div class="kriti-modal__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "KritiModal",
    emits: ['close'],
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: null,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
.kriti-modal {
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
    z-index: 1;

    &__body {

    }

    &__loading {

    }

    &__header {

        &__title {

        }
    }

    &__content {

    }

    &__footer {

    }
}
</style>
