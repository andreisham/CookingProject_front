import axios from "axios";

export default {
    GET_INGREDIENTS_FROM_API({ commit }) {
        return axios(this._vm.$env.api + '/api/ingredients', {
            method: 'GET',
        })
            .then(response => {
                commit('SET_INGREDIENTS_TO_STATE', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
};
