<template>
    <div class="kriti-menu">
        <div class="kriti-menu__select-scheme">
            <div class="kriti-menu__select-scheme__selected">
                <template v-if="schemes_list.length">

                </template>
                <template v-else>
                    Схемы отсутствуют
                </template>
            </div>
            <div class="kriti-menu__select-scheme__add">
                <i class="bi bi-plus-circle-fill" title="Добавить новую схему"></i>
            </div>
        </div>
    </div>

</template>

<script>
import KritiModal from "./KritiModal";
export default {
    name: "KritiMenu",
    components: {
        KritiModal
    },
    props: {
        active_scheme_code: {
            type: String,
            default: null
        }
    },
    emits: [
        'selectScheme',
        'update'
    ],
    data() {
        return {
            schemes_list: [],
            scheme_blocks: null, //
        }
    },
    watch: {
        active_scheme_code(code) {
            if (code) {
                console.log('Схема изменилась')
            }
        }
    },
    mounted() {
        this.getSchemes()
    },
    methods: {
        getSchemes() {
            Kriti.api({
                url: 'kriti.api.Scheme:getSchemesList',
                then: response => {
                    this.schemes_list = response.schemes_list
                    if (!this.schemes_list || !this.schemes_list.length) {
                        return
                    }
                    let active_scheme_code = localStorage.getItem('kriti-active_scheme_code')
                    this.schemes_list.some(scheme => {
                        if (scheme.code === active_scheme_code) {
                            this.selectScheme(scheme)
                            return true
                        }
                    })
                }
            })
        },

        getSchemeModules()
        {

        },

        selectScheme(scheme)
        {

        }
    }
}
</script>

<style lang="scss">
.kriti-menu {
    position: fixed;
    left: 5px;
    top: 5px;
    padding: 15px;
    border-radius: 4px;
    background: #fff;
    width: 250px;

    &__select-scheme {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__selected {
            display: flex;
        }
        &__add {
            i {
                font-size: 27px;
                cursor: pointer;
            }
        }
    }
}
</style>
