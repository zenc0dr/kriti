<template>
    <div v-if="items.length" class="kriti-context">
        <div class="kriti-context__title" v-click-outside-element="close">
            Контекстное меню
        </div>
        <div class="kriti-context__items">
            <div v-for="item in items" class="kriti-context__item">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContextMenu",
    emits: ['close'],
    props: {
        context: Object
    },
    watch: {
        context(context) {
            if (context) {
                this.items.push('Одын')
                this.items.push('Два')
                this.items.push('Три')
            }
        }
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        close() {
            this.items = []
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
.kriti-context {
    overflow-y: auto;
}

</style>
