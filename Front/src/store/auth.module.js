//import AuthServices from "@/services/auth.services";

import {login , logout} from '@/services/users.services'
import router from '@/router/index'; 

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true}, user}
    : { status: { loggedIn: false}, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return login(user).then(
                user => {
                    commit('loginSuccess', user);
                    console.log('login user', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            logout();
            commit('logout');
            router.push('/');
        },
        /*
        register({ commit }, user) {
            return AuthServices.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
        */
    },

    mutations: {
        loginSuccess(state,user) {
            console.log("succes");
            state.status.loggedIn = true;
            state.user = user;
            console.log("state", state.user.roles);
        },

        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        registerSuccess(state) {
            state.status.loggedIn = false;
        },

        registerFailure(state) {
            state.status.loggedIn = false;
        }
    },

    getters: {
        user(state) {
          return state.user;
        },
      },
};