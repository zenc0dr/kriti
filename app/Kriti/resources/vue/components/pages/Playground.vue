<template>
    <div class="playground">
        <KritiJsonEditor :json="json" />
    </div>
</template>

<script>
import KritiJsonEditor from "../interface/Dwarf/inputs/KritiJsonEditor";
export default {
    name: "Playground",
    components: {
        KritiJsonEditor
    },
    data() {
        return {
            json: {
                foo: "bar",
                baz: 123,
                zozo: {
                    key1: 123,
                    key2: {
                        key3: "okay"
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss">
.playground {

}
</style>
