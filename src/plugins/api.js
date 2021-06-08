import api from '../axios';

export default {
    install(Vue) {
        Vue.prototype.$api = api;
    }
}
