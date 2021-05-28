import Vue from 'vue';
import Router from 'vue-router';

import vHome from '../components/pages/home/v-home';
import vMeal from '../components/pages/meal/v-meal';
import vIngredients from '../components/pages/ingredients/v-ingredients';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome,
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            component: vIngredients,
        },
        {
            path: '/meal',
            name: 'meals',
            component: vMeal,
        },
        {
            path: '/meals/:id',
            name: 'meals',
            component: vMeal,
        }
    ]
});

export default router;
