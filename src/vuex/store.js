import Vue from 'vue';
import Vuex from 'vuex';

import ingredientsModule from './ingredients/ingredients';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        ingredientsModule,
    }
});

export default store;
