import Vue from "vue";
import Vuex from "vuex";
import { books } from "./modules/books";
import { auth } from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { books, auth }
});
