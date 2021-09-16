import Vue from "vue";
import Vuex from "vuex";
import { booksModule } from "./modules/books";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{booksModule},
});
