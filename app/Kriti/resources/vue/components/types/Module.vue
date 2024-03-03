<template>
    <div class="module" :style="moduleStyle">
        Модуль
    </div>
</template>

<script>
export default {
    name: "Module",
    props: {
        node: Object
    },
    computed: {
        moduleStyle() {
            return {
                width: `${this.node.style.width}px`,
                height: `${this.node.style.height}px`,
                'background-color': `${this.node.style['background-color']}`,
            }
        }
    },
}
</script>

<style lang="scss">
.module {

}
</style>
