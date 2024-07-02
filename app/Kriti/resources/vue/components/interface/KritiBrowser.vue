<template>
    <div class="kriti-browser">
        <div class="kriti-browser__header">
            Браузер модулей
        </div>
        <div class="kriti-browser__body">
            <div v-if="nodes !== null" class="kriti-browser__nodes">
                <div v-for="(node, node_code) in nodes" class="kriti-browser__node">
                    <div class="kriti-browser__node__name">
                        {{ node.info.name }} {{ node_code }}
                    </div>
                    <div class="kriti-browser__node__methods">
                        <div v-for="(method, method_code) in node.methods" class="kriti-browser__node__method">
                            <i :class="method.icon" /> {{ method.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KritiBrowser",
    data() {
        return {
            nodes: null
        }
    },
    mounted() {
        this.getModules()
    },
    methods: {
        getModules() {
            Kriti.api({
                url: 'kriti.api.Browser:getLocalNodes',
                then: response => {
                    this.nodes = response.nodes
                }
            })
        }
    }
}
</script>

<style lang="scss">
.kriti-browser {
    display: flex;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    flex-direction: column;
    position: fixed;
    left: 5px;
    bottom: 5px;

    &__header {

    }
    &__body {

    }
    &__nodes {

    }
    &__node {

        &__name {

        }

        &__methods {

        }
        &__method {

        }
    }
}
</style>
