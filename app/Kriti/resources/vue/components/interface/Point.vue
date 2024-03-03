<template>
    <div class="point" :style="moduleStyle">
        <Module v-if="object.type === 'Module'" :object="object" />
    </div>
</template>

<script>
/*
Тут мы подключаем типы Point-ов и управляем позиционированием и общим поведением
 */
import Module from "../types/Module";

export default {
    name: "Point",
    components: {
        Module
    },
    props: {
        object: Object
    },
    computed: {
        moduleStyle() {
            return {
                left: `${this.object.point.x}px`,
                top: `${this.object.point.y}px`,
            }
        }
    }
}
</script>

<style lang="scss">
.point {
    width: 0;
    height: 0;
}
</style>
