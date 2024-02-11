<template>
    <div class="board">
        <Workspace />
    </div>
</template>

<script>
import Workspace from "../interface/Workspace";
export default {
    name: "Board",
    components: {
        Workspace
    }
}
</script>

<style lang="scss">
.board {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #80db80;
}
</style>
