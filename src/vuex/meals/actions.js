import axios from "axios";

export default {
    GET_MEALS_FROM_API_BY_INGREDIENT_ID({ commit }, ingredientId) {
        return axios('http://localhost:8000/api/meals?ingredient=' + ingredientId, {
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
};
