export default {
    LOAD_MEAL({ commit }, meal) {
        commit('SET_MEALS_TO_STATE', meal);
    },

    LOAD_MEALS_NAMES_LIST({ commit }, list) {
        commit('SET_MEALS_NAMES_LIST_TO_STATE', list);
    },

    CLEAR_MEALS({ commit }) {
        commit('CLEAR_MEALS_STATE');
    },
};
