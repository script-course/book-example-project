import axios from "axios";

/**
 * @type {import("vuex").Module<{all:{id:number}[]}>}
 */
export const booksModule = {
    namespaced:true,
    state: () => ({ all: [] }),
    getters: {
        getAll: state => state.all,
        getById: state => id => state.all.find(item => item.id === id)
    },
    mutations: {
        SET_ALL: (state, payload) => state.all = payload
    },
    actions: {
        async setAll({commit}) {
            const {data}  = await axios.get('api/books')
            commit('SET_ALL', data)
        }
    }
};
