<template>
    <div v-if="node" class="module" :style="style_module">
        <div class="module__title" :style="style_module_title">
            <i :class="node.static.icon"></i>
            {{ node.static.settings.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Module",
    props: {
        node: Object
    },
    computed: {
        style_module() {
            return this.node.static.style.module
        },
        style_module_title() {
            return this.node.static.style.module_title
        }
    },
}
</script>
<style lang="scss">
.module {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    i {
        margin-right: 3px;
    }
}

.module .module__title i {
    font-weight: bold;
    font-size: 20px;
}
</style>
