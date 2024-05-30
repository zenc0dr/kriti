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
                {{ heading }}
            </div>
            <div @click="close" class="kriti-modal__header__close">
                <i class="bi bi-x"></i>
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
        heading: {
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
    position: fixed;
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
        margin-top: 50px;
        padding: 15px;
        border-radius: 10px;
        background-color: #fff;
        min-width: 300px;
    }

    &__loading {

    }

    &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &__title {
            color: #000;
        }

        &__close {
            color: #000;
            i {
                cursor: pointer;
                border-radius: 50%;
                padding: 0px 3px;
                padding-top: 2px;
                font-size: 24px;
                transition: 200ms;
                color: #7b7b7b;

                &:hover {
                    background: #ebebeb;
                    color: #636363;
                }
            }
        }
    }

    &__content {

    }

    &__footer {

    }
}
</style>
