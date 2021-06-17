import Vue from 'vue';
import App from './App.vue';

// Extensions
import axios from './axios/axios';
import multiselect from 'vue-multiselect'
import vueAgile from 'vue-agile';
import Vue2TouchEvents from 'vue2-touch-events'

// Plugins
import router from './router/router';
import store from './vuex/store';
import api from './api/index';

Vue.use(vueAgile);
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  axios,
  router,
  store,
  api,
  multiselect,
}).$mount('#app')
