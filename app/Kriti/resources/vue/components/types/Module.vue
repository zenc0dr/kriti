<template>
    <div v-if="node" class="module" :style="node.static.style.module">
        <div class="module__title" :style="node.static.style.module_title">
            <i :class="node.static.icon"></i>
            {{ node.static.settings.name }}
        </div>
        <div class="module__vars">
            <div v-if="node.static.settings.inputs instanceof Array" class="module__io">
                <template v-for="item in node.static.settings.inputs">
                    <div v-if="item.var_key"
                         :id="node.uuid + ':input:' + item.var_key"
                         @click="makeLink(node.uuid + ':input:' + item.var_key)"
                         class="module__io__item">
                        {{ item.var_type }} : <span class="module__io__item__name">{{ item.var_key }} [{{ item.var_title }}]</span>
                    </div>
                </template>
            </div>
            <div v-if="node.static.settings.events instanceof Array" class="module__io">
                <template v-for="item in node.static.settings.events">
                    <div v-if="item.event_code"
                         :id="node.uuid + ':event:' + item.event_code"
                         @click="makeLink(node.uuid + ':event:' + item.event_code)"
                         class="module__io__item"
                         :title="item.event_name"
                    >
                        {{ item.event_type }} : <span class="module__io__item__name">{{ item.event_code }}</span>
                    </div>
                </template>
            </div>
            <div v-if="node.static.settings.output instanceof Object" class="module__io">
                <div @click.prevent="makeLink(node.uuid + ':output')"
                     class="module__io__item" :id="node.uuid + ':output'">
                    <span class="module__io__item__name">
                        {{ node.static.settings.output.var_type }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Module",
    props: {
        node: Object
    },
    methods: {
        makeLink(link_code)
        {
            console.log('Нажал')
            Kriti.makeLink(link_code)
        }
    }
}
</script>
<style lang="scss">
.module {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    i {
        margin-right: 3px;
    }

    &__vars {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
    }

    &__io {
        &__item {
            padding: 2px 8px;
            padding-top: 4px;
            background: #ffffff;
            border-radius: 5px;
            border: 1px solid #b1b1b1;
            color: #265c78;
            font-size: 11px;
            margin-bottom: 5px;
            cursor: pointer;

            &__name {
                font-weight: bold;
                color: #777;
            }

            &.marked {
                background: #2a8d0e;
                color: #fff;

                .module__io__item__name {
                    color: #fff;
                }
            }
        }




    }
}

.module .module__title i {
    font-weight: bold;
    font-size: 20px;
}
</style>
