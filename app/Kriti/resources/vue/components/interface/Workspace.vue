<template>
<div v-if="workspace_size_is_defined"
     class="workspace"
     :style="`width:${workspace_width}px;height:${workspace_height}px`"
>
    <div class="workspace__preloader">
    </div>
    <div class="workspace__plato" :style="`margin-left:${ plato_x }px;margin-top:${ plato_y }px`">
        <div v-for="node in nodes"
             :ref="node.id" class="node" :class="{ focus:node === active_node }"
             @mousedown.self="nodeHold(node, $event)"
             @mouseup.self="nodeDrop"
             @click.ctrl="createLink(node)"
             @contextmenu.prevent.self="nodeLoad(node)"
        >
            <Node :node="node"/>
        </div>
    </div>
</div>
</template>

<script>
import Node from "./Node";
import PopUp from "./PopUp";
export default {
    name: "Workspace",
    components: {
        Node
    },
    props: {

    },
    data() {
        return {
            workspace_width: null,
            workspace_height: null,
            workspace_size_is_defined: false,
            plato_x: 0,
            plato_y: 0,
            nodes: null,
            active_node: null, // Выделенный объект
        }
    },
    created() {
    },
    mounted() {
        this.defineWorkspaceSize()
        window.addEventListener('resize', this.defineWorkspaceSize)
        this.loadNodes()
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.defineWorkspaceSize)
    },
    methods: {
        // Определить размер рабочей области
        defineWorkspaceSize()
        {
            this.$nextTick(() => {
                let parentElement = this.$el.parentNode;
                this.workspace_width = parentElement.offsetWidth
                this.workspace_height = parentElement.offsetHeight
                if (this.workspace_width && this.workspace_height) {
                    this.workspace_size_is_defined = true
                }
            });
        },

        loadNodes() {
            Kriti.api({
                url: 'kriti.api.Nodes:getNodes',
                then: response => {
                    this.nodes = response.nodes
                }
            })
        },

        nodeHold(){},
        nodeDrop(){},
        createLink(){},
        nodeLoad(){}
    }
}
</script>

<style lang="scss">
.workspace {
    padding: 10px;
    background: #5794a9;
    color: #000;

    &__plato {

    }
    .kriti-preloader {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff75;
        transition: 300ms;
        justify-content: center;
        align-items: center;
        user-select: none;
        z-index: 100001;
    }
}
</style>
