import api from '../axios/api/index';

export default {
    install(Vue) {
        Vue.prototype.$api = api;
    }
}
