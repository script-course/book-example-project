import {getRequest} from '../../services/http';

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import('../../types/storeModules').BookModule}
 */
export const books = {
    namespaced: true,
    state: () => ({
        all: [],
        search: '',
    }),
    getters: {
        getAll: state => state.all,
        getSearch: state => state.search,
        getById: state => (/** @type {number} */ id) => state.all.find(item => item.id === id),
        getFiltered: state => {
            const search = state.search.toLocaleLowerCase();
            return state.all.filter(book => book.title.toLocaleLowerCase().includes(search));
        },
    },
    mutations: {
        SET_ALL: (state, payload) => (state.all = payload),
        SET_SEARCH: (state, payload) => (state.search = payload),
    },
    actions: {
        async setAll({commit}) {
            const {data} = await getRequest('books');
            commit('SET_ALL', data);
        },

        setSearch({commit}, value) {
            commit('SET_SEARCH', value);
        },
    },
};
