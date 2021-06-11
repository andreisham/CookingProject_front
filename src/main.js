import Vue from 'vue';
import App from './App.vue';

// Extensions
import axios from './axios/axios';

// Plugins
import router from './router/router';
import store from './vuex/store';
import api from './api/index';

import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  axios,
  router,
  store,
  api,
  Multiselect,
}).$mount('#app')
