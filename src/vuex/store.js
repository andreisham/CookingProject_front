import Vue from 'vue';
import Vuex from 'vuex';

import ingredientsModule from './ingredients/ingredients';
import mealsModule from './meals/meals';
import accountModule from './account/authorizedUserLogin';
import favoritesModule from './favorites/favorites';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        ingredientsModule,
        mealsModule,
        accountModule,
        favoritesModule,
    },
});

export default store;
