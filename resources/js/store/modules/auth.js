import axios from "axios";

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import("vuex").Module<{all:{id:number}[]}>}
 */
export const authModule = {
    namespaced: true,
    state: () => ({ user: {}, isLoggedIn: false }),
    getters: {
        getUser: state => state.user,
        getIsLoggedIn: state => state.isLoggedIn
    },
    mutations: {
        SET_USER: (state, payload) => (state.user = payload),
        SET_LOGGEDIN: (state, payload) => (state.isLoggedIn = payload)
    },
    actions: {
        async login({ commit }, payload) {
            console.log(payload);
            const { data } = await axios.post("api/login", payload);
            commit("SET_USER", data);
        }
    }
};
