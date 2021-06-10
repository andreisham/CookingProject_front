export default {
    SET_MEALS_TO_STATE: (state, meals) => {
        state.meals = meals;
    },

    CLEAR_MEALS_STATE: (state) => {
        state.meals = [];
    },
};
