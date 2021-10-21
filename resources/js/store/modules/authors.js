export const authors = {
    namespaced: true,
    state: () => ({all: []}),
    getters: {
        getAll: state => state.all,
        getById: state => id => state.all.find(item => item.id === id),
    },
    mutations: {
        SET_ALL: (state, payload) => (state.all = payload),
    },
    actions: {
        async setAll({commit}) {
            const {data} = await axios.get('authors');
            commit('SET_ALL', data);
        },
        async create({commit}, payload) {
            const {data} = await axios.post('authors', payload);
            commit('SET_ALL', data);
        },
    },
};
