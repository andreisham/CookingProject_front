import Vue from 'vue';
import Router from 'vue-router';

import vHome from '../components/pages/home/v-home';
import vMeals from '../components/pages/meal/v-meals';
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
        // {
        //     path: '/meal',
        //     name: 'meal',
        //     component: vMeals,
        // },
        {
            path: '/meals',
            name: 'meals',
            component: vMeals,
            props: true,
        }
    ]
});

export default router;
