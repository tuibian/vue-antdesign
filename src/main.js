/* eslint-disable no-console */
import Vue from 'vue';
import Antd from 'ant-design-vue'; //这里全局引入Antd库，也可以局部加载（局部加载无需引入antd.css并且vue.config.js需要配置具体参考官网）
import "ant-design-vue/dist/antd.css";
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.use(Antd, {
    size: 'small'
});
const imports = [VueAxios, axios];
Vue.use(...imports);
let hasInit = false;
// 使用钩子函数对路由进行权限跳转
// 路由跳转时，先判断是否登录过或者登录信息是否有效
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    if (!token && to.meta.needAuth) { // 未登录并且去往地址需要登录
        next({
            path: '/login',
        });
    } else {
        if (hasInit) {
            next();
        } else {
            hasInit = true;
            next({
                path: '/home',
            });
        }
    }
});
window.vm = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
