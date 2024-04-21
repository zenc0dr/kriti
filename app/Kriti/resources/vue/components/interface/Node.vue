<template>
    <div class="node"  :style="moduleStyle">
        <Module v-if="node.type === 'Module'" :node="node" />
    </div>
</template>

<script>
/*
Тут мы подключаем типы Point-ов и управляем позиционированием и общим поведением
 */
import Module from "../types/Module";

export default {
    name: "Node",
    components: {
        Module
    },
    props: {
        node: Object
    },
    computed: {
        moduleStyle() {
            return {
                left: `${this.node.point.x}px`,
                top: `${this.node.point.y}px`,
            }
        }
    }
}
</script>

<style lang="scss">
.node {
    display: inline-block;
    user-select: none;
    position: absolute;
    &.focus {
        cursor: grabbing;
    }
}
</style>
