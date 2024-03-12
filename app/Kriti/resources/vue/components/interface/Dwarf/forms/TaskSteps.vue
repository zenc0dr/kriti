<template>
<div class="steps" v-if="modelValue">
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</div>
</template>

<script>
export default {
    name: "TaskSteps.vue",
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
    },
}
</script>

<style lang="scss">

</style>
