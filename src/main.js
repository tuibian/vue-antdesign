/* eslint-disable no-console */
import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
window.vm = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
