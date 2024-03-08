<template>
    <div v-if="node_data" class="node-modal">
        Модальное окно нода {{ node_data }}
    </div>
</template>

<script>
export default {
    name: "NodeModal",
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
            this.node_data = node.type
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
.node-modal {

}
</style>
