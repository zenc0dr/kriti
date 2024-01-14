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

const app = createApp(KritiApp)
app.use(router)
app.use(PrimeVue, {ripple: true})
app.mount("#kriti-app")
