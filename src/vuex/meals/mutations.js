export default {
    SET_MEALS_TO_STATE: (state, meal) => {
        if (!state.meals.includes(meal)) {
            state.meals.push(meal);
        }
    },

    SET_MEALS_NAMES_LIST_TO_STATE: (state, list) => {
        state.list = list;
    },

    CLEAR_MEALS_STATE: (state) => {
        state.meals = [];
    },
};
