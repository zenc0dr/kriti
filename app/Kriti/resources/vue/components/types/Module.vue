<template>
    <div class="module" :style="moduleStyle">
        Модуль
    </div>
</template>

<script>
export default {
    name: "Module",
    props: {
        object: Object
    },
    computed: {
        moduleStyle() {
            return {
                width: `${this.object.point.width}px`,
                height: `${this.object.point.height}px`,
                'background-color': `${this.object.point.background_color}`,
            }
        }
    },
}
</script>

<style lang="scss">
.module {

}
</style>
