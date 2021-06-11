import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    state: {
        authorizedUserLogin: '',
        loginErrorMessage: '',
        registrationErrorMessage: ''
    },
    mutations,
    actions,
    getters,
};
