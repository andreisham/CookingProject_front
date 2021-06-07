import axios from "axios";

export default {
    GET_MEALS_FROM_API_BY_INGREDIENTS({ commit }, ingredients) {
        return axios.get('/api/meals', {
            params: {
                ingredient: ingredients,
            },
        })
            .then(response => {
                commit('SET_MEALS_TO_STATE', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },

    GET_MEALS_FROM_API_BY_ID({ commit }, mealId) {
        return axios.get('/api/meals/' + mealId)
            .then(response => {
                commit('SET_MEALS_TO_STATE', [ response.data ]);
                return response;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },

    GET_RANDOM_MEAL_FROM_API({ commit }) {
        return axios.get('/api/meal/random')
            .then(response => {
                commit('SET_MEALS_TO_STATE', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },

    CLEAR_MEALS({ commit }) {
        commit('CLEAR_MEALS_STATE');
    },
};
