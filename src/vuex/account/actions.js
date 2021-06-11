import axios from "axios";

export default {
    GET_AUTHORIZED_USER_LOGIN_FROM_API({commit}) {
        return axios.get('/api/authorized')
            .then(response => {
                commit('SET_AUTHORIZED_USER_LOGIN', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },

    LOGIN({commit}, params) {
        return axios.post('/api/login', {
            login: params.login,
            password: params.password
        })
            .then(response => {
                if (response.data.isLoginSuccessful) {
                    commit('SET_AUTHORIZED_USER_LOGIN', response.data.login);
                    return response;
                }
                else {
                    commit('SET_LOGIN_ERROR_MESSAGE', response.data.errorMessage);
                    return response;
                }
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },

    REGISTER({commit}, params) {
        return axios.post('/api/register', {
            login: params.login,
            password: params.password,
            email: params.email
        })
            .then(response => {
                if (response.data.isRegistrationSuccessful) {
                    commit('SET_AUTHORIZED_USER_LOGIN', response.data.login);
                    return response;
                }
                else {
                    commit('SET_REGISTRATION_ERROR_MESSAGE', response.data.errorMessage);
                    return response;
                }
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },

    LOGOUT({commit}) {
        commit('CLEAR_AUTHORIZED_USER_LOGIN');
    },
};
