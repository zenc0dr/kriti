<template>
    <div class="kriti-popup">
        <div class="kriti-popup kriti-popup__title">

        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "PopUp",
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: null
        },
    }
}
</script>

<style lang="scss">
.kriti-popup {
    overflow-y: auto;
}

</style>
