export default {
    LOAD_INGREDIENTS({ commit }, ingredients) {
        commit('SET_INGREDIENTS_TO_STATE', ingredients);
    }
};
