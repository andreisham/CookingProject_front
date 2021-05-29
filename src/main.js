import Vue from 'vue';
import App from './App.vue';

import router from './router/router';
import store from './vuex/store';

import './assets/styles/styles.scss';
import 'material-design-icons-iconfont';
import env from '../.env.local';

Vue.prototype.$env = env;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
