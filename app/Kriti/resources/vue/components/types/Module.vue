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
            return this.node.style.module
        },
        module_title() {
            return this.node.style.module_title
        }
    },
}
</script>
