import axios from "axios";

export default {
    GET_MEALS_FROM_API_BY_INGREDIENT_ID({ commit }, ingredientId) {
        return axios(this._vm.$env.serverApi.url + '/api/meals?ingredient=' + ingredientId, {
            method: 'GET',
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

    GET_RANDOM_MEAL_FROM_API({ commit }) {
        return axios(this._vm.$env.serverApi.url + '/api/meal', {
            method: 'GET',
        })
            .then(response => {
                commit('SET_MEALS_TO_STATE', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    }
};
