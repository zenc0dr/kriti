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
            return this.node.style
        }
    },
}
</script>

<style lang="scss">
.module {

}
</style>
