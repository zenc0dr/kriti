<template>
    <div class="form">
        <template v-if="modelValue" v-for="element in scheme">
            <StringInput
                v-if="element.type === 'string'"
                :modelValue="modelValue[element.field]"
                @update:modelValue="modelValue[element.field] = $event"
                :style="element.style"
            />
        </template>
    </div>
</template>

<script>
import StringInput from "./controls/StringInput";
export default {
    name: "Form",
    components: { StringInput },
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

<style lang="scss">

</style>
