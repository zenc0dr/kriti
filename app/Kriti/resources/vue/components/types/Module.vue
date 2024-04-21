<template>
    <div class="module" :style="module">
        <div class="module__title" :style="module_title">
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
        module() {
            return this.node.static.style.module
        },
        module_title() {
            return this.node.static.style.module_title
        }
    },
}
</script>
