export default {
    SET_FAVORITE_MEALS_TO_STATE: (state, meals) => {
        this.state.favorites = meals;
    },

    ADD_FAVORITE_MEALS_TO_STATE: (state, meal) => {
        this.state.favorites.push(meal);
    },

    REMOVE_FAVORITE_MEALS_FROM_STATE: (state, index) => {
        this.state.favorites.splice(index, 1);
    },
}
