import Vue from 'vue';
import Router from 'vue-router';

import vSkeleton from '../components/layout/skeleton/v-skeleton';
import vHome from '../components/pages/home/v-home';
import vMeals from '../components/pages/meal/v-meals';
import vIngredients from '../components/pages/ingredients/v-ingredients';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: vSkeleton,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: vHome,
                },
                {
                    path: 'meals',
                    name: 'meals',
                    component: vMeals,
                    props: true,
                },
            ],
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            component: vIngredients,
        },
    ]
});
