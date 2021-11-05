//Need to look into this
import axios from 'axios';
window.axios = axios;
axios.defaults.baseURL = '/api/';

import Vue from 'vue';

//Main pages
import App from './App.vue';

//Import store
import store from './store';

//Import router
import router from './router';

import 'bootstrap';
import '../css/app.scss';

new Vue({
    el: '#app',
    store,
    router,
    mounted() {
        this.$store.dispatch('account/set');
    },
    render: h => h(App),
});

Goedemorgen! 