import Vue from 'vue';
import Vuex from 'vuex';

import ingredientsModule from './ingredients/ingredients';
import mealsModule from './meals/meals';
import accountModule from './account/authorizedUserLogin';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        ingredientsModule,
        mealsModule,
        accountModule,
    },
});

export default store;
