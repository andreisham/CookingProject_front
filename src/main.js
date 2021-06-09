import Vue from 'vue';
import App from './App.vue';

// Extensions
import router from './router/router';
import store from './vuex/store';
import axios from './api/axios';

// Styles
import 'material-design-icons-iconfont';
import './assets/styles/styles.scss';

// Plugins
import api from './api/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  axios,
  api,
}).$mount('#app')
