export const books = {
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
            const {data} = await axios.get('books');
            commit('SET_ALL', data);
        },
        async create({commit}, payload) {
            console.log();
            const {data} = await axios.post('books', payload);
            commit('SET_ALL', data);
        },
    },
};
