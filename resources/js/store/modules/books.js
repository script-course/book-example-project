import {getRequest} from '../../services/http';

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import('../../types/storeModules').BookModule}
 */
export const books = {
    namespaced: true,
    state: () => ({
        all: [],
    }),
    getters: {
        getAll: state => state.all,
        getById: state => (/** @type {number|string} */ id) => {
            const convertedId = parseInt(id.toString());
            return state.all.find(item => item.id === convertedId);
        },
    },
    mutations: {
        SET_ALL: (state, payload) => (state.all = payload),
    },
    actions: {
        async setAll({commit}) {
            const {data} = await getRequest('books');
            commit('SET_ALL', data);
        },
    },
};
