import axios from 'axios';

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import('../../types/storeModules').AccountModule}
 */
export const account = {
    namespaced: true,
    state: () => ({user: undefined}),
    getters: {
        get: state => state.user,
    },
    mutations: {
        SET: (state, payload) => (state.user = payload),
    },
    actions: {
        async set({commit}) {
            const {data} = await axios.get('api/users');
            commit('SET', data);
        },
    },
};
