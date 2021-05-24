import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ingredients: [],
        recipes: [],
    },

    mutations: {
        SET_INGREDIENTS_TO_STATE: (state, ingredients) => {
            state.ingredients = ingredients;
        },

        SET_RECIPES: (state, recipes) => {
            state.recipes = recipes;
        },
    },

    actions: {
        GET_INGREDIENTS({ commit }) {
            return axios('https://themealdb.com/api/json/v1/1/list.php?i=list', {
               method: 'GET',
            })
                .then((response) => {
                    commit('SET_INGREDIENTS_TO_STATE', response.data);
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },

        GET_RECIPES_BY_INGREDIENT({ commit }, ingredient) {
            return axios('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient, {
                method: 'GET',
            })
                .then((response) => {
                    commit('SET_RECIPES', response.data);
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },

    getters: {
        INGREDIENTS(state) {
            return state.ingredients;
        },

        RECIPES(state) {
            return state.recipes;
        }
    },
});

export default store;
