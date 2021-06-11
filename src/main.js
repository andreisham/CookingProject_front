import Vue from 'vue';
import App from './App.vue';

// Extensions
import axios from './axios/axios';
import multiselect from 'vue-multiselect'

// Plugins
import router from './router/router';
import store from './vuex/store';
import api from './api/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  axios,
  router,
  store,
  api,
  multiselect,
}).$mount('#app')
