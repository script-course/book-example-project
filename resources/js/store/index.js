import Vue from 'vue';
import Vuex from 'vuex';
import {books} from './modules/books';
import {users} from './modules/users';
import {auth} from './modules/auth';
import {account} from './modules/account';
import {authors} from './modules/authors';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {books, auth, users, account, authors},
    strict: true,
});
