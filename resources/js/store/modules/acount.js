import axios from "axios";
import { root } from "postcss";

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import("vuex").Module<{all:{id:number}[]}>}
 */
export const acount = {
    namespaced: true,
    state: () => ({ user: [] }),
    getters: {
        get: state => state.user
    },
    mutations: {
        SET: (state, payload) => (state.user = payload)
    },
    actions: {
        async set({ commit }) {
            const { data } = await axios.get("api/users");
            commit("acount/SET", data, { root: true });
        }
    }
};
