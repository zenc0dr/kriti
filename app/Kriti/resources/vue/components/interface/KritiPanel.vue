<template>
<div class="kriti-panel" v-click-outside-element="closeSchemeSettings">
    <div class="kriti-panel__tabs">
        <div class="kriti-panel__tabs__tab">
            Схемы
        </div>
        <div class="kriti-panel__tabs__tab">
            Блоки
        </div>
    </div>
    <div v-if="items" class="kriti-panel__body">
        <div v-for="item in items"
             class="kriti-panel__item"
             :class="{active:isActive(item)}"
             @click="selectItem(item)"
        >
            <div class="kriti-panel__item__name">
                {{ item.name }} <i @click.stop="openSchemeSettings(item, $event)" class="bi bi-gear-fill"></i>
            </div>
            <div class="kriti-panel__item__count">
                Нодов: {{ item.nodes_count }}
            </div>
            <div class="kriti-panel__item__desc">
                {{ item.description }}
            </div>
        </div>
    </div>
    <div v-if="settings" class="kriti-panel__settings" :style="`top:${settings.y}px`">
        <div @click="clearLinks" class="kriti-panel__settings__btn">
            <i class="bi bi-recycle"></i> Очистить сцепки
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
    emits: ['select', 'update'],
    data() {
        return {
            items: null,
            settings: null,
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
            const coordinates = {
                x: event.clientX,
                y: event.clientY
            };
            console.log('Координаты клика:', coordinates);

            localStorage.setItem('kriti-panel-active', item.code)
            this.$emit('select', item.code)
        },
        isActive(item) {
            return this.active_code === item.code
        },
        openSchemeSettings(scheme, event) {
            this.settings = {
                scheme: scheme,
                y: event.clientY - 10
            }
        },
        closeSchemeSettings() {
            this.settings = null
        },
        clearLinks() {
            this.$emit('update', 'clear_links')
        }
    }
}
</script>

<style lang="scss">
.kriti-panel {
    font-size: 13px;
    max-width: 250px;
    position: fixed;
    top: 10px;
    left: 10px;
    background: #fff;
    padding: 9px;
    border-radius: 10px;

    &__tabs {
        display: flex;
        &__tab {
            font-size: 20px;
            color: #1e7c13;
            margin-bottom: 10px;
        }
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
            display: flex;
            font-size: 15px;
            justify-content: space-between;
            i {
                cursor: pointer;
                color: #7a8292;
            }
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

    &__settings {
        background: #fff;
        padding: 15px;
        position: fixed;
        left: 200px;
        border-radius: 4px;

        &__btn {
            background: #009eff;
            color: #fff;
            border-radius: 4px;
            margin: 5px 5px;
            padding: 10px 21px;
            cursor: pointer;
            transition: 200ms;
            i {
                margin-right: 10px;
            }
            &:hover {
                background: #00708e;
            }
        }
    }
}
</style>
