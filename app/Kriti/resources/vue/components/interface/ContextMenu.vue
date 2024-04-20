<template>
    <div v-if="items.length" class="kriti-context" :style="moduleStyle" v-click-outside-element="close">
        <div class="kriti-context__items">
            <div v-for="item in items" class="kriti-context__item" @click="clickItem(item)">
                <i v-if="item.icon" :class="item.icon"></i>
                {{ item.text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContextMenu",
    emits: ['close', 'click_item'],
    props: {
        scheme_name: String,
        context: Object,
        context_type: String,
        mouse_x: Number,
        mouse_y: Number,
    },
    data() {
        return {
            items: [],
            x: 0,
            y: 0
        }
    },
    watch: {
        context(context) {
            if (context) {
                this.getMenuItems()
                this.x = this.mouse_x
                this.y = this.mouse_y
            }
        }
    },
    computed: {
        moduleStyle() {
            return {
                left: `${this.x}px`,
                top: `${this.y}px`,
            }
        }
    },
    methods: {
        close() {
            this.items = []
            this.$emit('close')
        },
        getMenuItems() {
            Kriti.api({
                url: 'kriti.api.Context:getContextItems',
                data: {
                    scheme_name: this.scheme_name,
                    type: this.context_type,
                    uuid: this.context.uuid
                },
                then: response => {
                    this.items = response.items
                }
            })
        },
        clickItem(item) {
            this.$emit('click_item', item.code, _.cloneDeep(this.context))
            this.close()
        }
    }
}
</script>

<style lang="scss">
.kriti-context {
    position: absolute;
    background: #ffffff29;
    padding: 18px 16px;
    border-radius: 4px;
    &__items {

    }
    &__item {
        background: #d2ffc8;
        color: #26551b;
        border-radius: 4px;
        margin: 5px 5px;
        padding: 10px 21px;
        cursor: pointer;
        transition: 200ms;
        &:hover {
            background: #90ce82;
        }
    }
}

</style>
