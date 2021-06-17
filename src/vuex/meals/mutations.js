export default {
    SET_MEALS_TO_STATE: (state, meals) => {
        state.meals = meals;
    },

    SET_MEALS_NAMES_LIST_TO_STATE: (state, list) => {
        state.list = list;
    },

    CLEAR_MEALS_STATE: (state) => {
        state.meals = [];
    },
};
