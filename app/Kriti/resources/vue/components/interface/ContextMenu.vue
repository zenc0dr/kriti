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
        context: Object,
        contextType: String,
    },
    watch: {
        context(context) {
            if (context) {
                this.getMenuItems()
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
        },
        getMenuItems() {
            Kriti.api({
                url: 'kriti.api.Context:getContextItems',
                data: {
                    type: this.contextType,
                    uuid: this.context.uuid
                },
                then: response => {
                    this.items = response.items
                }
            })
        }
    }
}
</script>

<style lang="scss">
.kriti-context {
    overflow-y: auto;
}

</style>
