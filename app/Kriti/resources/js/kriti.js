window.jQuery = window.$ = require('jquery');
window.bootstrap = require('bootstrap');
window.Popper = require('popper.js');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window._ = require('lodash');
window.md5 = require('md5');

import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import router from './routes';

import KritiApp from "../vue/KritiApp";

window.Kriti = {
    requests_register: {}, // Объект фиксации запросов
    events: [], // Массив событий

    global: {
        workspace_width: null,
        workspace_height: null
    }, // Глобальные данные

    bootstrap() {
        this.checkAuth()
        //this.loadBootstrapData()
    },

    checkAuth() {
        this.auth_token = localStorage.getItem('kriti-token')
    },

    /* Загрузка начальных данных */
    loadBootstrapData() {
        this.api({
            url: 'kriti.api.Workspace:bootstrap',
            then: response => {
               // Параметры по умолчанию
            }
        })
    },

    preloader(state) {
        this.eventExecOnce('kriti.preloader')
    },

    api(opts) {
        let domain = location.origin
        let data = (opts.data) ? opts.data : null
        let config = (opts.config) ? opts.config : null
        if (!opts.url.includes('/')) {
            opts.url = '/' + opts.url
        }

        let api_url = domain + opts.url
        let request_key = md5(api_url)
        if (this.requests_register[request_key]) {
            return null
        }

        console.log(api_url, data) // todo:debug

        /* Если запрос не выполнился за 2 секунды, пинаем включение прелоадера */
        this.requests_register[request_key] = setTimeout(() => {
            if (this.requests_register[request_key]) {
                this.preloader(true)
            }
        }, 2000)


        if (this.auth_token) {
            config = config || {}
            config.withCredentials = true
            config.headers = config.headers || {}
            config.headers.KritiAuth = this.auth_token
        }

        /* Запрос */
        if (!data) { // Если нет данных то запрос GET
            axios.get(api_url, config)
                .then((response) => {
                    console.log(response.data) // todo:debug
                    this.handleResponse(response.data, opts.then, request_key)
                })
                .catch((error) => {
                    if (error.response && error.response.status === 419) {
                        location.reload()
                        return
                    }
                    delete this.requests_register[request_key]
                    this.preloader(false)
                    console.log(error) // todo:debug
                })
        } else {
            axios.post(api_url, data, config)
                .then((response) => {
                    console.log(response.data) // todo:debug
                    this.handleResponse(response.data, opts.then, request_key)
                })
                .catch((error) => {
                    if (error.response && error.response.status === 419) {
                        location.reload()
                        return
                    }
                    delete this.requests_register[request_key]
                    this.preloader(false)
                    console.log(error) // todo:debug
                })
        }
    },

    /* Обработка ответа */
    handleResponse(response, then, request_key) {
        delete this.requests_register[request_key]
        if (then) {
            then(response)
        }
    },

    /**** begin: Kriti Event Bus ****/
    /* Добавить событие */
    eventPush(name, fn) {
        this.events.push({name, fn})
    }, // Добавить событие
    eventUniquePush(name, fn) {
        let fn_exists = false
        this.events.forEach(event => {
            if (event.name === name) {
                event.fn = fn
                fn_exists = true
            }
        })
        if (!fn_exists) {
            this.addEvent(name, fn)
        }
    }, // Добавить уникальное событие
    eventExec(event_name) {
        this.events.forEach(event => {
            if (event.name === event_name) {
                event.fn()
            }
        })
    }, // Выполнить событие
    eventExecOnce(event_name) {
        const eventIndex = this.events.findIndex(event => event.name === event_name)
        if (eventIndex !== -1) {
            this.events[eventIndex].fn()
            this.events.splice(eventIndex, 1)
        }
    }, // Выполнить событие единожды
    /**** end: Kriti Event Bus ****/

}

Kriti.bootstrap()

import FormFitter from "../vue/components/interface/Dwarf/forms/FormFitter";
import FormSection from "../vue/components/interface/Dwarf/forms/FormSection";

const app = createApp(KritiApp)
app.use(router)
app.use(PrimeVue, {ripple: true})
app.component('FormFitter', FormFitter)
app.component('FormSection', FormSection)
app.mount("#kriti-app")
