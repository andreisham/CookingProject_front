export default {
    SET_AUTHORIZED_USER_LOGIN: (state, authorizedUserLogin) => {
        state.authorizedUserLogin = authorizedUserLogin;
    },

    CLEAR_AUTHORIZED_USER_LOGIN: (state) => {
        state.authorizedUserLogin = '';
    },

    SET_LOGIN_ERROR_MESSAGE: (state, loginErrorMessage) => {
        state.loginErrorMessage = loginErrorMessage;
    },

    SET_REGISTRATION_ERROR_MESSAGE: (state, registrationErrorMessage) => {
        state.registrationErrorMessage = registrationErrorMessage;
    },
};
