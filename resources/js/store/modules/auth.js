import axios from 'axios';

export const auth = {
    namespaced: true,
    state: () => ({isLoggedIn: !!JSON.stringify(localStorage.getItem('loggedIn'))}),
    getters: {
        getIsLoggedIn: state => state.isLoggedIn,
    },
    mutations: {
        SET_LOGGEDIN: (state, payload) => {
            state.isLoggedIn = payload;
            localStorage.setItem('loggedIn', payload.toString());
        },
    },
    actions: {
        async login({commit}, payload) {
            const {data} = await axios.post('login', payload);
            commit('account/SET', data, {root: true});
            commit('SET_LOGGEDIN', true);
        },
        async logout({commit}) {
            await axios.get('logout');
            commit('account/SET', undefined, {root: true});
            commit('SET_LOGGEDIN', false);
        },
    },
};
