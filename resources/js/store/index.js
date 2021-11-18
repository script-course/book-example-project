import Vue from 'vue';
import Vuex from 'vuex';
import {books} from './modules/books';
import {users} from './modules/users';
import {account} from './modules/account';
import {authors} from './modules/authors';
import {categories} from './modules/categories';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {books, users, account, authors, categories},
    strict: true,
});
