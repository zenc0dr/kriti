<template>
<div v-if="workspace_size_is_defined"
     class="workspace"
     :style="`width:${workspace_width}px;height:${workspace_height}px`"
>
    <div class="workspace__plato" :style="`margin-left:${ plato_x }px;margin-top:${ plato_y }px`">
        <div v-for="object in objects"
             :ref="object.id" class="object" :class="{ focus:object === active_object }"
             :style="`left:${ object.x }px;top:${ object.y }px`"
             @mousedown.self="holdObject(object, $event)"
             @mouseup.self="dropObject"
             @click.ctrl="createLink(object)"
             @contextmenu.prevent.self="loadObject(object)"
        >
            <Point :object="object"/>
        </div>
    </div>
</div>
</template>

<script>
import Point from "./Point";
export default {
    name: "Workspace",
    components: {
        Point
    },
    props: {

    },
    data() {
        return {
            workspace_width: null,
            workspace_height: null,
            workspace_size_is_defined: false,
            plato_x: 0,
            plato_y: 0,
            objects: [
                {
                    type: 'Module',
                    point: {
                        height: 100,
                        width: 100,
                        left: 0,
                        right: 0,
                        background_color: '#50ff15'
                    }
                }
            ],
            active_object: null, // Выделенный объект
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

        holdObject(){},
        dropObject(){},
        createLink(){},
        loadObject(){}
    }
}
</script>

<style lang="scss">
.workspace {
    padding: 10px;
    background: #5794a9;
    color: #000;

    &__plato {

    }
}
</style>
