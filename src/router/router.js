import Vue from 'vue';
import Router from 'vue-router';

import vSkeleton from '../components/layout/skeleton/v-skeleton';
import vHome from '../components/pages/home/v-home';
import vMeals from '../components/pages/meal/v-meals';
import vIngredients from '../components/pages/ingredients/v-ingredients';
import vAccount from '../components/pages/account/v-account';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: vSkeleton,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: vHome,
                },
                {
                    path: 'meals',
                    name: 'meals',
                    component: vMeals,
                    props: true,
                },
                {
                    path: '/account',
                    name: 'account',
                    component: vAccount,
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

export default router;