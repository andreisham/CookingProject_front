import Vue from 'vue';
import App from './App.vue';

import router from './router/router';
import store from './vuex/store';

import 'material-design-icons-iconfont';
import './assets/styles/styles.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
