<template>
<div class="color-palette">
    <div v-for="(color, index) in colors" class="color-palette__color" :style="`background-color: ${color.code}`">
        <input class="color-palette__code" type="text" v-model="colors[index].name">
        <input class="color-palette__name" type="text" v-model="colors[index].code">
        <div class="color-palette__select" @click="selectActiveColor(color)">
            <i class="bi bi-palette"></i>
        </div>
    </div>
    <div class="color-palette__button" @click="addNewColor">
        +
    </div>
    <div class="color-palette__button" @click="saveColors">
        Save colors
    </div>
    <div v-if="active_color" class="color-palette__palette">
        <div class="color-palette__palette__close" @click="closePalette">
            Закрыть
        </div>
        <Vue3ColorPicker v-model="active_color.code" mode="solid" :showColorList="false" :showEyeDrop="false" type="HEX" />
    </div>
</div>
</template>

<script>
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';

export default {
    name: "ColorPalette",
    components: { Vue3ColorPicker },
    data() {
        return {
            colors: [],
            active_color: null
        }
    },
    mounted() {
        this.loadColors()
    },
    methods: {
        addNewColor() {
            this.colors.push({
                name: '$color-100',
                code: '#777'
            })
        },
        loadColors() {
            Kriti.api({
                url: 'kriti.api.Colors:loadColors',
                then: (response) => {
                    this.colors = response.colors
                }
            })
        },
        saveColors() {
            Kriti.api({
                url: 'kriti.api.Colors:saveColors',
                data: {
                    colors: this.colors
                },
                then: (response) => {
                    if (response.success) {
                        location.reload()
                    }
                }
            })
        },
        selectActiveColor(color) {
            this.active_color = null
            this.active_color = color
        },
        closePalette() {
            this.active_color = null
        }
    }
}
</script>

<style lang="scss">
.color-palette {
    width: 450px;
    padding: 10px;
    background: #0000001f;
    border-radius: 12px;

    &__select {
        margin-left: auto;
        border-radius: 12px;
        color: #000000;
        margin-top: 2px;
    }

    .color-palette__color {
        display: flex;
        padding: 10px;
        input {
            border: none;
            width: 110px;
            background: #ffffff2b;
            border-radius: 5px;
            margin: 0px 5px;
            text-align: center;
        }
    }
    &__button {
        padding: 5px 13px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 11px;
        display: inline-block;
        background: #fff;
        margin-right: 5px;
    }
    &__palette {
        position: absolute;
        margin-left: 180px;
        margin-top: -32px;
        &__close {
            padding: 6px 13px;
            text-align: center;
            background: #fff;
            border-radius: 16px;
            margin-bottom: 5px;
        }
    }
}
</style>
