<template>
    <div class="kriti-menu">
        <div class="kriti-menu__select-scheme">
            <div class="kriti-menu__select-scheme__selected">
                <template v-if="schemes_list !== null">
                    <div v-if="selected_scheme" class="kriti-menu__select-scheme__selected__item">
                        <div class="scheme-name">
                            {{ selected_scheme.name }}
                        </div>
                        <div class="scheme-description">
                            {{ selected_scheme.description }}
                        </div>
                    </div>
                    <div class="kriti-menu__select-scheme__selected__dropdown" @click="modal_select = true">
                        <i class="bi bi-caret-down-fill"></i>
                    </div>
                </template>
                <template v-else>
                    Схемы отсутствуют
                </template>
            </div>
            <div class="kriti-menu__select-scheme__add">
                <i class="bi bi-plus-circle-fill"
                   title="Добавить новую схему"
                   @click="createNewScheme"
                >
                </i>
            </div>
            <KritiModal
                heading="Настройки схемы"
                :show="scheme !== null"
                @close="scheme = null"
                max-width="800px"
            >
                <FormFitter
                    v-if="scheme !== null"
                    v-model="scheme"
                    :scheme="[
                        {
                            label: 'Название',
                            type: 'string',
                            size: 'half',
                            field: 'name'
                        },
                        {
                            label: 'Код',
                            type: 'string',
                            size: 'half',
                            field: 'code'
                        },
                        {
                            label: 'Описание',
                            type: 'textarea',
                            field: 'description'
                        }
                    ]"
                />
                <template #footer>
                    <ControlPanel :buttons="scheme_modal_buttons"/>
                </template>
            </KritiModal>
            <KritiModal
                heading="Список схем проекта"
                :show="modal_select"
                @close="modal_select = false"
                max-width="800px"
            >
                <div v-if="schemes_list !== null" class="kriti-menu__modal-select">
                    <div v-for="item in schemes_list"
                         class="kriti-menu__modal-select__item"
                         @click="selectScheme(item)"
                    >
                        <div class="kriti-menu__modal-select__item__info">
                            <div class="scheme-name">
                                [ {{ item.code }} ] {{ item.name }}
                            </div>
                            <div class="scheme-description">
                                {{ item.description }}
                            </div>
                        </div>
                        <div class="kriti-menu__modal-select__item__control">
                            <i @click="removeScheme(item)" class="bi bi-trash" title="Удалить схему"></i>
                        </div>
                    </div>
                </div>
            </KritiModal>
        </div>
    </div>

</template>

<script>
import KritiModal from "./KritiModal";
import ControlPanel from "./Dwarf/forms/ControlPanel";
export default {
    name: "KritiMenu",
    components: {
        KritiModal,
        ControlPanel
    },
    props: {
        active_scheme_code: {
            type: String,
            default: null
        }
    },
    emits: [
        'update_scheme'
    ],
    data() {
        return {
            schemes_list: null,
            modal_select: false,
            scheme: null,
            scheme_modal_buttons: [
                {
                    name: 'Сохранить',
                    icon: 'bi bi-cloud-upload',
                    click: () => {
                        this.saveScheme()
                    }
                }
            ]
        }
    },
    mounted() {
        this.getSchemes(
            () => {
                this.selectActualScheme()
            }
        )
    },
    computed: {
        selected_scheme() {
            if (!this.schemes_list || !this.schemes_list.length) {
                return null;
            }
            return this.schemes_list.find(scheme => scheme.code === this.active_scheme_code) || {
                name: 'Схема не выбрана',
                description: null
            }
        }
    },
    methods: {
        getSchemes(fn) {
            Kriti.api({
                url: 'kriti.api.Scheme:getSchemesList',
                then: response => {
                    if (!response.schemes_list || !response.schemes_list.length) {
                        return
                    }
                    this.schemes_list = response.schemes_list
                    if (fn) {
                        fn()
                    }
                }
            })
        },

        selectActualScheme() {
            let active_scheme_code = localStorage.getItem('kriti-active_scheme_code')
            this.schemes_list.some(scheme => {
                if (scheme.code === active_scheme_code) {
                    this.$emit('update_scheme', scheme.code)
                    return true
                }
            })
        },

        createNewScheme()
        {
            this.scheme = {
                name: null,
                code: null,
                description: null,
            }
        },

        saveScheme() {
            Kriti.api({
                url: 'kriti.api.Scheme:setScheme',
                data: {
                    scheme_code: this.scheme.code,
                    scheme_data: {
                        name: this.scheme.name,
                        description: this.scheme.description
                    }
                },
                then: response => {
                    this.getSchemes(() => {
                        this.$emit('update_scheme', this.scheme.code)
                        this.scheme = null
                    })
                }
            })
        },

        removeScheme(scheme) {
            Kriti.api({
                url: 'kriti.api.Scheme:removeScheme',
                data: {
                    scheme_code: scheme.code,
                },
                then: response => {
                    this.getSchemes(() => {
                        if (scheme.code === this.active_scheme_code) {
                            this.$emit('update_scheme', null)
                        }
                    })
                }
            })
        },

        selectScheme(scheme)
        {
            this.$emit('update_scheme', scheme.code)
            this.modal_select = false
            localStorage.setItem('kriti-active_scheme_code', scheme.code)
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
    width: 300px;

    &__select-scheme {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__selected {
            display: flex;
            flex: 1 0 0;
            &__item {
                flex: 1 0 0;
                .scheme-name {
                    font-size: 16px;
                    color: #3f607c;
                }
                .scheme-description {
                    font-size: 13px;
                    color: #565656;
                }
            }

            &__dropdown {
                display: flex;
                align-items: center;
                padding: 0 5px;
                color: #565656;
                margin: 0 3px;
                cursor: pointer;
                margin-right: 5px;
            }
        }
        &__add {
            i {
                font-size: 27px;
                cursor: pointer;
            }
        }
    }

    &__modal-select {
        &__item {
            display: flex;
            flex-direction: row;
            padding: 10px;
            border: 1px solid #d7d7d7;
            border-radius: 5px;
            margin-bottom: 8px;
            justify-content: space-between;
            cursor: pointer;

            &:hover {
                border: 1px solid #57abff;
            }

            &__info {
                flex: 1 0 0;
                .scheme-name {
                    font-size: 16px;
                    color: #3f607c;
                }
                .scheme-description {
                    font-size: 13px;
                    color: #565656;
                }
            }
            &__control {
                display: flex;
                width: 100px;
                align-items: center;
                justify-content: flex-end;
            }
        }
    }
}
</style>
