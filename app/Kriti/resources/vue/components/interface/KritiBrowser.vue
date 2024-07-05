<template>
    <div ref="kriti_browser" class="kriti-browser">
        <div class="kriti-browser__header">
            Браузер модулей
        </div>
        <div class="kriti-browser__body">
            <div v-if="nodes !== null" class="kriti-browser__nodes">
                <div v-for="(node, node_code) in nodes" class="kriti-browser__node">
                    <div class="kriti-browser__node__header">
                        <div class="kriti-browser__node__name">
                            {{ node.info.name }} <div class="kriti-browser__node__code">({{ node_code }})</div>
                        </div>
                        <div class="kriti-browser__node__desc">
                            {{ node.info.desc }}
                        </div>
                    </div>
                    <div class="kriti-browser__node__methods">
                        <div @click="createNode(node_code, method_code, method)" v-for="(method, method_code) in node.methods" class="kriti-browser__node__method">
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
    emits: ['update'],
    props: {
        plato_x: {
            type: Number,
            default: 0,
        },
        plato_y: {
            type: Number,
            default: 0,
        },
        scheme_code: null,
    },
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
        },
        createNode(node_code, method_code, method) {
            // this.plato_x, this.plato_y

            if (!this.scheme_code) {
                return
            }

            const rect = this.$refs.kriti_browser.getBoundingClientRect()
            let create_x = rect.right
            let create_y = rect.top

            console.log(create_x, create_y, this.plato_x, this.plato_y)

            // Kriti.api({
            //     url: 'kriti.api.Node:createNode',
            //     data: {
            //         node_code,
            //         method_code,
            //         version: method.version,
            //         scheme_code: this.scheme_code,
            //     },
            //     then: response => {
            //         if (response.success) {
            //             this.$emit('update')
            //         }
            //     }
            // })
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
    max-width: 250px;

    &__header {
        color: #3f607c;
        padding: 3px 5px;
        border-radius: 4px;
        margin-bottom: 5px;
    }
    &__body {

    }
    &__nodes {

    }
    &__node {
        border: 1px solid #c0c0c0;
        padding: 7px 11px;
        border-radius: 5px;
        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &__header {
            margin-bottom: 10px;
        }

        &__name {
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: center;
        }

        &__desc {
            font-size: 12px;
            color: #5b5b5b;
        }

        &__code {
            font-size: 13px;
            color: #3f607c;
            margin-left: 5px;
        }

        &__methods {

        }
        &__method {
            padding: 5px 10px;
            background: #ededed;
            border-radius: 4px;
            margin-bottom: 7px;
            i {
                margin-right: 3px;
            }
            cursor: pointer;
            transition: 200ms;
            &:hover {
                background: #dcffcc;
                color: #204b0c;
            }
        }
    }
}
</style>
