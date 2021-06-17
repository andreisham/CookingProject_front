export default {
    SET_FAVORITE_MEALS_TO_STATE: (state, meals) => {
        state.favorites = meals;
    },

    ADD_FAVORITE_MEALS_TO_STATE: (state, meal) => {
        state.favorites.push(meal);
    },

    REMOVE_FAVORITE_MEALS_FROM_STATE: (state, index) => {
        state.favorites.splice(index, 1);
    },
}
