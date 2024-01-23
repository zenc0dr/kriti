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
    padding: 10px;
    margin: 10px;
    background: red;
}
</style>
