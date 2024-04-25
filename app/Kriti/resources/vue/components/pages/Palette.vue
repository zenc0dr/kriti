<template>
    <div class="playground">
        <ColorPalette/>
    </div>
</template>

<script>
import ColorPalette from "../interface/ColorPalette";
export default {
    name: "Palette",
    components: {
        ColorPalette
    }

}
</script>

<style lang="scss">
.playground {
    padding: 15px;
    background-color: #777;
}
</style>
