import {getRequest} from '../../services/http';

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import('../../types/storeModules').UserModule}
 */
export const users = {
    namespaced: true,
    state: () => ({all: []}),
    getters: {
        getAll: state => state.all,
        getById: state => (/** @type {number} */ id) => state.all.find(item => item.id === id),
    },
    mutations: {
        SET_ALL: (state, payload) => (state.all = payload),
    },
    actions: {
        async setAll({commit}) {
            const {data} = await getRequest('users');
            commit('SET_ALL', data);
        },
    },
};
