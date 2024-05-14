<template>
<div class="kriti-panel">
    <div class="kriti-panel__title">
        Схемы
    </div>
    <div v-if="items" class="kriti-panel__body">
        <div v-for="item in items"
             class="kriti-panel__item"
             :class="{active:isActive(item)}"
             @click="selectItem(item)"
        >
            <div class="kriti-panel__item__name">
                {{ item.name }}
            </div>
            <div class="kriti-panel__item__count">
                Нодов: {{ item.nodes_count }}
            </div>
            <div class="kriti-panel__item__desc">
                {{ item.description }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "KritiPanel",
    props: {
        active_code: {
            type: String,
            default: null
        }
    },
    emits: ['select'],
    data() {
        return {
            items: null
        }
    },
    mounted() {
        this.getItems()
    },
    methods: {
        getItems() {
            Kriti.api({
                url: 'kriti.api.Panel:getItems',
                then: response => {
                    this.items = response.items
                    let active_item = localStorage.getItem('kriti-panel-active')
                    this.items.some(item => {
                        if (item.code === active_item) {
                            this.selectItem(item)
                            return true
                        }
                    })
                }
            })
        },
        selectItem(item) {
            localStorage.setItem('kriti-panel-active', item.code)
            this.$emit('select', item.code)
        },
        isActive(item) {
            return this.active_code === item.code
        }
    }
}
</script>

<style lang="scss">
.kriti-panel {
    font-size: 13px;
    width: 200px;
    position: fixed;
    top: 10px;
    left: 10px;
    background: #fff;
    padding: 9px;
    border-radius: 10px;

    &__title {
        font-size: 20px;
        color: #1e7c13;
        margin-bottom: 10px;
    }
    &__body {
        color: #000
    }
    &__item {
        margin-top: 10px;
        padding: 6px 10px;
        padding-bottom: 12px;
        background: #f8f8f8;
        border-radius: 5px;
        cursor: pointer;

        &.active {
            background: #ffe298;
        }

        &__name {
            font-size: 15px;
        }
        &__count {
            font-size: 9px;
            font-weight: bold;
            margin-bottom: 2px;
            color: #656565;
        }
        &__desc {
            font-size: 10px;
            color: #777;
        }
    }
}
</style>
