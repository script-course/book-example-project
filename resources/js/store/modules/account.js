import axios from 'axios';

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
            const {data} = await axios.get('me');
            commit('SET', data);
        },
        async removeBook({commit}, payload) {
            const {data} = await axios.post('remove-book', {bookId: payload});
            commit('SET', data);
        },
    },
};
