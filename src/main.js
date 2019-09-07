/* eslint-disable no-console */
import Vue from 'vue';
import Antd from 'ant-design-vue'; //这里全局引入Antd库，也可以局部加载（局部加载无需引入antd.css并且vue.config.js需要配置具体参考官网）
import "ant-design-vue/dist/antd.css";
import App from './App.vue';
import router from './router/router';

Vue.config.productionTip = false;
Vue.use(Antd, {
    size: 'small'
});

window.vm = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
