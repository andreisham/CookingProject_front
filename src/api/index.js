import Vue from 'vue';
import axios from './axios';
import ingredientsModule from './modules/ingredinets';
import mealsModule from './modules/meals';
import favoritesModule from './modules/favorites';

const api = {
    install(Vue) {
        Vue.prototype.$api = {
            favorites: favoritesModule(axios),
            meals: mealsModule(axios),
            ingredients: ingredientsModule(axios),
        };
    }
}

Vue.use(api);

export default api;