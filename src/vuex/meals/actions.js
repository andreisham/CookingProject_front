export default {
    LOAD_MEALS({ commit }, meals) {
        if (!Array.isArray(meals)) {
            meals = [ meals ];
        }
        commit('SET_MEALS_TO_STATE', meals);
    },

    LOAD_MEALS_NAMES_LIST({ commit }, list) {
        commit('SET_MEALS_NAMES_LIST_TO_STATE', list);
    },

    CLEAR_MEALS({ commit }) {
        commit('CLEAR_MEALS_STATE');
    },
};
