<template>
    <div class="form">
        <template v-for="element in scheme">
            <template v-if="element.slot">
                <slot :name="element.slot"></slot>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    name: "Form",
    emits: ['update:modelValue'],
    props: {
        scheme: {
            type: Object,
            default: null
        },
        modelValue: null
    },
    data() {
        return {
            form_data: null
        }
    },
    watch: {
        modelValue: {
            handler(modelValue) {
                this.$emit('update:modelValue', modelValue);
            },
            deep: true
        }
    }
}
</script>

<style scoped>

</style>
