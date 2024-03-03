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
                width: `${this.object.style.width}px`,
                height: `${this.object.style.height}px`,
                'background-color': `${this.object.style.background_color}`,
            }
        }
    },
}
</script>

<style lang="scss">
.module {

}
</style>
