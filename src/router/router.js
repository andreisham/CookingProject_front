import Vue from 'vue';
import Router from 'vue-router';

import vEmptyLayout from '../components/layout/empty/v-empty-layout';

import vHome from '../components/pages/home/v-home';
import vMeals from '../components/pages/meal/v-meals';
import vIngredients from '../components/pages/ingredients/v-ingredients';
import vFavorites from '../components/pages/favorites/v-favorites';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome,
        },
        {
            path: '/meals',
            name: 'meals',
            component: vMeals,
            props: true,
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: vFavorites,
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            component: vIngredients,
            meta: { layout: vEmptyLayout },
        },
    ]
});

export default router;