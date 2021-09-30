import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import BookOverview from '../pages/books/Overview.vue';
import BookCreate from '../pages/books/Create.vue';
import LoginOverview from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';
import Account from '../pages/Account.vue';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/books',
            component: BookOverview,
            name: 'book.overview',
        },
        {
            path: '/book/create',
            component: BookCreate,
            name: 'book.create',
        },
        {
            path: '/login',
            component: LoginOverview,
            name: 'auth.login',
            meta: {
                shouldBeLoggedOut: true,
            },
        },
        {
            path: '/register',
            component: Register,
            name: 'auth.register',
            meta: {
                shouldBeLoggedOut: true,
            },
        },
        {
            path: '/account',
            component: Account,
            name: 'account',
            meta: {
                shouldBeLoggedIn: true,
            },
        },
    ],
});

router.beforeEach(({meta}, from, next) => {
    const isLoggedIn = store.getters['auth/getIsLoggedIn'];
    if (meta.shouldBeLoggedIn && !isLoggedIn) next({name: 'auth.login'});
    if (meta.shouldBeLoggedOut && isLoggedIn) next({name: 'account'});
    next();
});

export default router;
