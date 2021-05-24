import Vue from 'vue';
import Router from 'vue-router';

import vHome from '../components/pages/home/v-home';
import vMeal from '../components/pages/meal/v-meal';

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
            path: '/meal',
            name: 'meal',
            component: vMeal,
            props: true,
        },
    ]
});

export default router;
