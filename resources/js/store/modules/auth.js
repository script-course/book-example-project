import axios from 'axios';

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import('../../types/storeModules').AuthModule}
 */
export const auth = {
    namespaced: true,
    state: () => ({user: {}, isLoggedIn: false}),
    getters: {
        getIsLoggedIn: state => state.isLoggedIn,
    },
    mutations: {
        SET_LOGGEDIN: (state, payload) => (state.isLoggedIn = payload),
    },
    actions: {
        async login({commit}, payload) {
            const {data} = await axios.post('api/login', payload);
            commit('account/SET', data, {root: true});
            commit('SET_LOGGEDIN', true);
        },
        async logout({commit}) {
            await axios.get('api/logout');
            commit('account/SET', undefined, {root: true});
            commit('SET_LOGGEDIN', false);
        },
    },
};
