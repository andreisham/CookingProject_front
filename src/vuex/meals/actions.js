export default {
    LOAD_MEALS({ commit }, meals) {
        if (!Array.isArray(meals)) {
            meals = [ meals ];
        }
        commit('SET_MEALS_TO_STATE', meals);
    },

    CLEAR_MEALS({ commit }) {
        commit('CLEAR_MEALS_STATE');
    },
};
