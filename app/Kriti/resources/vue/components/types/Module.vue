<template>
    <div class="module" :style="style_module">
        <div class="module__title" :style="style_module_title">
            Модуль
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
