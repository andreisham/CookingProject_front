import Vue from 'vue';
import App from './App.vue';

import router from './router/router';
import store from './vuex/store';
import axios from './axios/axios';

import 'material-design-icons-iconfont';
import './assets/styles/styles.scss';

import env from '../.env.local';

Vue.prototype.$env = env;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  axios,
}).$mount('#app')
