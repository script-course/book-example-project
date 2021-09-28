import {getRequest, postRequest} from '../../services/http';

/**
 * Defining what the module is, so autocomplete know's what's what
 * @type {import('../../types/storeModules').AuthModule}
 */
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
            const {data} = await postRequest('login', payload);
            commit('account/SET', data, {root: true});
            commit('SET_LOGGEDIN', true);
        },
        async logout({commit}) {
            try {
                await getRequest('logout');
            } finally {
                commit('account/SET', undefined, {root: true});
                commit('SET_LOGGEDIN', false);
            }
        },
    },
};
