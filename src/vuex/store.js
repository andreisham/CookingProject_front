import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ingredients: [],
    },

    mutations: {
        SET_INGREDIENTS_TO_STATE: (state, ingredients) => {
            state.ingredients = ingredients;
        },
    },

    actions: {
        GET_INGREDIENTS_FROM_API({ commit }) {
            return axios('https://themealdb.com/api/json/v1/1/list.php?i=list', {
               method: 'GET',
            })
                .then((ingredients) => {
                    commit('SET_INGREDIENTS_TO_STATE', ingredients.data);
                    return ingredients;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
    },

    getters: {
        INGREDIENTS(state) {
            return state.ingredients;
        },
    },
});

export default store;
