import Vue from "vue";
import Vuex from "vuex";
import { books } from "./modules/books";
import { users } from "./modules/users";
import { auth } from "./modules/auth";
import { acount } from "./modules/acount";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { books, auth, users, acount },
    strict: true
});
