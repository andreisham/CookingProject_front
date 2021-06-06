import Vue from 'vue';
import App from './App.vue';

// Extensions
import router from './router/router';
import store from './vuex/store';
import axios from './axios/axios';

// Styles
import 'material-design-icons-iconfont';
import './assets/styles/styles.scss';

// Plugins
import Api from './plugins/api';

Vue.use(Api);

import env from '../.env.local';

Vue.prototype.$env = env;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  axios,
}).$mount('#app')
