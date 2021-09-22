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
        // eslint-disable-next-line no-console
        console.log('Check if user is loggedin!');
    },
    render: h => h(App),
});
