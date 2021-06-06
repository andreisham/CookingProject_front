export default {
    INIT_FAVORITE_MEALS({ commit }, meals) {
        commit('SET_FAVORITE_MEALS_TO_STATE', meals);
    },

    ADD_FAVORITE_MEAL({ commit }, meal) {
        commit('ADD_FAVORITE_MEALS_TO_STATE', meal);
    },

    REMOVE_FAVORITE_MEAL({ commit }, index) {
        commit('REMOVE_FAVORITE_MEALS_FROM_STATE', index);
    },
};