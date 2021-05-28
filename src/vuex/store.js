import Vue from 'vue';
import Vuex from 'vuex';

import ingredientsModule from './ingredients/ingredients';
import mealsModule from './meals/meals';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        ingredientsModule,
        mealsModule,
    }
});

export default store;
