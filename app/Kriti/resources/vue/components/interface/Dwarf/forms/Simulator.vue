<template>
    <div class="simulator">
        <div class="simulator__menu">
            <button title="Добавить блок" @click="show_sims = true" class="btn btn-primary">
                <i class="bi bi-plus-square"></i>
            </button>
            <button title="Очистить симуляцию" @click="simulation = []" class="btn btn-primary">
                <i class="bi bi-x-circle"></i>
            </button>
            <button title="Сбросить прогресс" @click="resetProgress" class="btn btn-primary">
                <i class="bi bi-arrow-clockwise"></i>
            </button>
            <button title="Импорт/Экспорт симуляции" @click="json_show = true" class="btn btn-primary">
                <i class="bi bi-filetype-json"></i>
            </button>
            <DwarfSelect
                v-if="databases_options !== null"
                label="База данных"
                :style="`width: 200px`"
                :options="databases_options"
                :modelValue="database"
                @update:modelValue="database = $event"
            />
            <i title="Обучение" @click="help_window = true" class="bi bi-question-square help-button"></i>
        </div>
        <div class="simulation"
             :class="{dragging: this.reorder_record !== null}"
             @mouseup="dropReorder"
             @mousemove="writeCursor"
             @mouseleave="leaveReorder"
        >
            <div
                v-if="simulation.length"
                v-for="sim in simulation"
                class="sim-block sim-item"
                :class="[{draggable:sim.draggable}, sim.reorder_class]"
                :style="rowStyle(sim)"
                @mousemove="rowMouseMove(sim, $event)"
                @mouseleave="rowMouseLeave(sim)"
            >
                <div class="sim-block__control">
                    <i
                        :class="`bi ${ sim.icon } sim-block__control__icon reorder`"
                        @mousedown.stop="holdReorder(sim, $event)"
                    ></i>
                    <div class="sim-block__control__title">
                        {{ sim.title }}
                    </div>
                    <div class="sim-block__control__time" :class="{valid:brakePointIsValid(sim)}">
                        <input v-model="sim.breakpoint">
                    </div>
                    <div class="sim-block__control__opts" :class="completeness(sim)">
                        <i @click="editSim(sim)" class="bi bi-card-list"></i>
                    </div>
                    <div class="sim-block__control__copy">
                        <i @click="copySim(sim)" class="bi bi-copy"></i>
                    </div>
                    <div class="sim-block__control__remove">
                        <i @click="deleteSim(sim)" class="bi bi-trash-fill"></i>
                    </div>
                </div>
                <div class="sim-block__operation">
                    <input placeholder="Название..." class="sim-block__operation__name" v-model="sim.name">
                    <div @click="runSimulations(sim)" class="sim-block__operation__point">
                        <div v-if="sim.error" class="sim-block__operation__error">
                            <i :title="sim.error" class="bi bi-x-circle-fill"></i>
                        </div>
                        <div v-else-if="sim.complete" class="sim-block__operation__complete">
                            <i class="bi bi-check-circle-fill"></i>
                        </div>
                        <div v-else-if="sim.process" class="spinner-border"></div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :show="show_sims" title="Блоки симуляции" @close="show_sims = false">
            <div v-if="sims !== null" @click="addSim(sim)" v-for="sim in sims" class="sim-block menu-item">
                <div class="sim-block__control">
                    <i :class="`bi ${ sim.icon } sim-block__control__icon`"></i>
                    <div class="sim-block__control__title">
                        {{ sim.title }}
                    </div>
                </div>
            </div>
        </Modal>
        <Modal :show="editable_sim_show" title="Настройки сима" @close="editable_sim_show = false">
            <div v-if="editable_sim !== null" class="sim-options">
                <DwarfDatetime
                    :modelValue="editable_sim.breakpoint"
                    @update:modelValue="editable_sim.breakpoint = $event"
                    label="Дата и время события"
                />
                <div v-for="(prop, name) in editable_sim.props" class="sim-options__option">
                    <div class="sim-options__option__label">
                        {{ name }}{{ editable_sim.required.includes(name) ? ' *' : '' }}:
                    </div>
                    <input v-model="editable_sim.props[name]">
                </div>
            </div>
        </Modal>
        <Modal :show="json_show" title="Данные симуляции" @close="json_show = false">
            <div class="simulator__menu">
                <button @click="copyToClipboard" class="btn btn-primary">
                    <i class="bi bi-clipboard-check"></i> Копировать в буфер
                </button>
                <button @click="downloadFile" class="btn btn-primary">
                    <i class="bi bi-cloud-download-fill"></i> Скачать json-файл
                </button>
                <button @click="uploadFile" class="btn btn-primary">
                    <i class="bi bi-cloud-upload"></i> Загрузить json-файл
                </button>
            </div>
            <Textarea class="json-editor" v-model="json" :autoResize="true" spellcheck="false"></Textarea>
            <input type="file" ref="file_input" @change="handleFile" style="display: none;" />
        </Modal>
        <Modal max-width="870px" :show="help_window" @close="help_window = false">
            <div class="help-video">
                <iframe
                    width="800"
                    height="400"
                    src="https://www.youtube.com/embed/z0bO0sMHtu8?si=Z-cQOqIUdMmaGP-n"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from "./Modal";
import Textarea from "primevue/textarea";
import copy from "clipboard-copy";
import DwarfDatetime from "../inputs/DwarfDatetime";
import DwarfSelect from "../inputs/DwarfSelect";


export default {
    name: "Simulator",
    components: {
        Modal, Textarea, DwarfDatetime, DwarfSelect
    },
    mounted() {
        this.getSims()
    },
    computed: {
        json: {
            get() {
                let json = _.cloneDeep(this.simulation)
                for (let i in json) {
                    delete json[i].reorder_class
                    delete json[i].y
                    delete json[i].process
                    delete json[i].complete
                    delete json[i].draggable
                    delete json[i].error
                }

                return JSON.stringify(json, null, 2)
            },
            set(value) {
                this.simulation = JSON.parse(value)
            }
        }
    },
    data() {
        return {
            databases_options: null,
            database: 'test_db',
            sims: null,
            editable_sim: null,
            editable_sim_show: false,
            json_show: false,
            show_sims: false,
            simulation: [],

            reorder_record: null,
            reorder_target_record: null,
            reorder_raw_height: null,
            cursor_y: null,

            help_window: false
        }
    },
    watch: {
        cursor_y(y) {
            if (this.reorder_record) {
                this.reorder_record.y = y
            }
        }
    },
    methods: {
        getSims() {
            APP.api({
                url: '/play-api/PlayTester:getSimsBlocks',
                then: response => {
                    this.sims = response.sims
                    this.databases_options = response.database_options
                }
            })
        },
        addSim(sim) {
            sim = _.cloneDeep(sim)
            this.simulation.push(sim)
            APP.pushAlerts([
                {
                    'type': 'success',
                    'text': 'Добавлен новый блок симуляции - ' + sim.type
                }
            ])
        },
        editSim(sim) {
            this.editable_sim = sim
            this.editable_sim_show = true
        },
        runSimulations(sim) {
            if (sim.process) {
                return
            }

            let start_index = 0
            for (let i in this.simulation) {
                if (this.simulation[i].process || this.simulation[i].complete) {
                    start_index++
                    continue
                }
                this.simulation[i].process = true
                if (sim === this.simulation[i]) {
                    break
                }
            }
            this.runSimulation(start_index)
        },
        runSimulation(index) {
            let sim = this.simulation[index]
            if (sim && sim.process && !sim.complete && !sim.error) {
                APP.api({
                    url: '/play-api/PlayTester:runSimulation',
                    no_preloader: true,
                    data: {
                        simulation: sim,
                        database: this.database
                    },
                    then: response => {
                        if (response.success) {
                            this.simulation[index].complete = true
                            index++
                            this.runSimulation(index)
                        } else {
                            this.simulation[index].error = response.error
                            APP.pushAlerts([
                                {
                                    'type': 'error',
                                    'text': 'Обнаружена ошибка симуляции: ' + response.error
                                }
                            ])
                            this.stopIfError()
                        }
                    }
                })
            }
        },
        stopIfError() {
            for (let i in this.simulation) {
                if (!this.simulation[i].complete) {
                    if (this.simulation[i].process) {
                        this.simulation[i].process = false
                    }
                }
            }
        },
        brakePointIsValid(sim) {
            if (/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(sim.breakpoint)) {
                return true
            }
            return false
        },
        resetProgress() {
            for (let i in this.simulation) {
                delete this.simulation[i].process
                delete this.simulation[i].complete
                delete this.simulation[i].error
            }
        },
        completeness(sim)
        {
            let valid = true
            for (let key in sim.props) {
                let prop = sim.props[key]
                if (!prop && sim.required.includes(key)) {
                    valid = false
                }
            }
            if (!valid) {
                return 'not-valid'
            }
        },
        deleteSim(sim) {
            let index = this.simulation.indexOf(sim)
            this.simulation.splice(index, 1)
            // APP.pushAlerts([
            //     {
            //         'type': 'success',
            //         'text': 'Элемент удалён'
            //     }
            // ])
        },
        copySim(sim) {
            sim = _.cloneDeep(sim)
            this.simulation.push(sim)
            // APP.pushAlerts([
            //     {
            //         'type': 'success',
            //         'text': 'Элемент дублирован'
            //     }
            // ])
        },
        copyToClipboard()
        {
            copy(this.json)
            APP.pushAlerts([
                {
                    'type': 'success',
                    'text': 'Скопировано в буфер обмена'
                }
            ])
        },

        downloadFile() {
            const blob = new Blob([this.json], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            const token = md5(this.json)
            link.href = url;
            link.download = 'simulation_'+ token +'.json';
            link.click();
            URL.revokeObjectURL(url);
        },

        uploadFile() {
            this.$refs.file_input.click();
        },
        handleFile() {
            const file = event.target.files[0]
            if (file && file.type === 'application/json') {
                const reader = new FileReader()
                reader.onload = (e) => {
                    //this.jsonString = e.target.result;
                    this.simulation = JSON.parse(e.target.result)
                    APP.pushAlerts([
                        {
                            'type': 'success',
                            'text': 'Файл успешно загружен'
                        }
                    ])
                };
                reader.readAsText(file)
            } else {
                APP.pushAlerts([
                    {
                        'type': 'error',
                        'text': 'Выберите корректный JSON файл'
                    }
                ])
            }
        },

        // Мышка отпускается
        dropReorder() {
            if (this.reorder_record === null) {
                return
            }
            this.makeReorder(this.reorder_record, this.reorder_target_record)
            delete this.reorder_record.draggable
            this.reorder_record = null
        },

        // Записывается Y-координата курсора
        writeCursor(event) {
            this.cursor_y = event.layerY
        },

        leaveReorder() {
            if (!this.reorder_record) {
                return
            }
            if (this.reorder_record.draggable) {
                this.reorder_record.draggable = false
            }
            this.reorder_record = null
        },

        // Совершить перестановку
        makeReorder(source, target) {
            if (!source || !target) {
                return
            }
            let position = target.reorder_class === 'drop-top' ? 'before' : 'after'
            let new_array = []
            for (let i = 0; i < this.simulation.length; i++) {
                if (this.simulation[i] === source) {
                    continue
                }
                if (this.simulation[i] === target && position === 'before') {
                    new_array.push(source)
                }
                new_array.push(this.simulation[i])
                if (this.simulation[i] === target && position === 'after') {
                    new_array.push(source)
                }
            }
            this.simulation = new_array
        },

        rowStyle(record) {
            let style = []
            if (this.reorder_record) {
                if (this.reorder_record === record) {
                    style.push(`top:${this.reorder_record.y}px`)
                    style.push('pointer-events:none')
                }
            }
            return style.join(';')
        },

        rowMouseMove(record, event) {
            if (!this.reorder_record) {
                return
            }
            let y = event.offsetY
            let h = this.reorder_raw_height

            if (y < h / 2) {
                record.reorder_class = 'drop-top'
                this.reorder_target_record = record
            } else {
                record.reorder_class = 'drop-bottom'
                this.reorder_target_record = record
            }
        },

        rowMouseLeave(record) {
            delete record.reorder_class
        },

        // Мышка зажимается на элементе
        holdReorder(record, event) {
            record.draggable = true
            this.reorder_record = record
            this.reorder_raw_height = $(event.target).closest('.sim-item').height()
        },
    }
}
</script>

<style lang="scss">
.simulator {
    position: relative;

    .help-video {
        display: flex;
        justify-content: center;
    }

    .simulation {
        max-height: 615px;
        overflow-y: scroll;
        padding-right: 12px;

        &::-webkit-scrollbar{
            width:12px;
        }
        &::-webkit-scrollbar-thumb{
            border-width:1px 1px 1px 2px;
            background-color: #676385;
            border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb:hover{
            border-width: 1px 1px 1px 2px;
            background-color: #676385;
        }
        &::-webkit-scrollbar-track{
            border-width:0;
            background-color: #b6b6b6;
            border-radius: 5px;
        }
    }

    .simulation.dragging {
        user-select: none;
        padding-bottom: 100px;
        > div * {
            pointer-events: none;
        }
    }

    .reorder {
        cursor: ns-resize;
    }

    &__menu {
        display: flex;
        padding: 10px;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 34px;
        margin-right: 24px;
        align-items: center;

        .help-button {
            font-size: 29px;
            margin-left: auto;
            margin-right: 8px;
            color: #a1a1a1;
            transition: 200ms;
            cursor: pointer;

            &:hover {
                color: #0a53be;
            }
        }

        button {
            margin: 5px;
        }
    }

    .sim-block {
        display: flex;
        flex-direction: column;

        &__operation {
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            &__name {
                border: none;
                outline: none;
                border-bottom: 1px solid #dadada;
                color: #4553a0;
                font-size: 20px;
                flex: 1 1 0;
                margin-right: 15px;
            }
            &__error {
                i {
                    color: red;
                }
            }
            &__complete {
                i {
                    color: #0a3622;
                }
            }
            &__point {
                display: flex;
                flex-wrap: wrap;
                height: 40px;
                width: 40px;
                background: #ceffc9;
                border-radius: 50%;
                align-content: center;
                align-items: center;
                justify-content: center;

                .spinner-border {
                    height: 25px;
                    width: 25px;
                    color: #748e71;
                }
            }
        }

        &__control {
            display: flex;
            justify-content: space-between;

            &__icon {

            }

            &__title {
                flex: 1 1 0;
                margin-left: 15px!important;
            }

            > div {
                margin-left: 5px;
            }

            &__time {
                input {
                    width: 131px;
                    border: none;
                    background: #ebebeb;
                    color: #666;
                    font-size: 14px;
                    font-weight: bold;
                    padding: 2px 8px;
                    border-radius: 5px;
                    outline: none;
                }
                &.valid {
                    input {
                        background: #c5ffbf;
                        color: #3d6139;
                    }
                }
            }

            &__opts {
                color: #0f5132;
                i {
                    cursor: pointer;
                    &:hover {
                        color: #0a58ca;
                    }
                }

                &.not-valid {
                    color: red;
                }
            }
            &__copy {
                i {
                    cursor: pointer;
                    &:hover {
                        color: #0a58ca;
                    }
                }
            }
            &__remove {
                i {
                    cursor: pointer;
                    &:hover {
                        color: red;
                    }
                }
            }
        }
    }

    .sim-item {
        padding: 10px 15px;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 3px;

        &.draggable {
            position: absolute;
            z-index: 100;
            width: 100%;
            box-shadow: -1px 2px 14px 0 #00000014;
            opacity: 0.5;
        }
        &.drop-top {
            border-top: 1px solid #00b7ff;
        }

        &.drop-bottom {
            border-bottom: 1px solid #00b7ff;
        }
    }

    .menu-item {
        padding: 10px 15px;
        border: 1px solid #c0d3ac;
        border-radius: 4px;
        margin-bottom: 5px;
        font-size: 20px;
        cursor: pointer;
        user-select: none;
        color: #465535;

        i {
            margin-right: auto;
        }

        &:hover {
            background: #ecffd8;
        }
    }
}

.json-editor {
    width: 100%;
    font-family: var(--bs-font-monospace);
    font-size: 14px;
    line-height: 19px;
    outline: none;
    border: none;
    background: #a6d4f6;
    border-radius: 5px;
    padding: 15px;
    color: #2d3d48;

    &:focus {
        box-shadow: none!important;
    }
}

.sim-options {
    &__option {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        &__label {
            margin-right: 10px;
            font-weight: bold;
            color: #4378a0;
            font-size: 17px;
        }

        input {
            flex: 1 1 0;
            border: none;
            border-bottom: 1px solid #bdbdbd;
            color: #383838;
            outline: none;
        }
    }
}
</style>
