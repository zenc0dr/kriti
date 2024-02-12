<template>
<div v-if="workspace_size_is_defined"
     class="workspace"
     :style="`width:${workspace_width}px;height:${workspace_height}px`"
>
    <div class="workspace__plato">

    </div>
</div>
</template>

<script>
export default {
    name: "Workspace",
    props: {

    },
    data() {
        return {
            workspace_width: null,
            workspace_height: null,
            workspace_size_is_defined: false
        }
    },
    created() {
    },
    mounted() {
        this.defineWorkspaceSize()
        window.addEventListener('resize', this.defineWorkspaceSize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.defineWorkspaceSize)
    },
    methods: {
        // Определить размер рабочей области
        defineWorkspaceSize()
        {
            this.$nextTick(() => {
                let parentElement = this.$el.parentNode;
                this.workspace_width = parentElement.offsetWidth
                this.workspace_height = parentElement.offsetHeight
                if (this.workspace_width && this.workspace_height) {
                    this.workspace_size_is_defined = true
                }
            });
        },
    }
}
</script>

<style lang="scss">
.workspace {
    padding: 10px;
    background: green;
    color: #000;

    &__plato {
        
    }
}
</style>
