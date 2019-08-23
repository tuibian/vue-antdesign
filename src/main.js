/* eslint-disable no-console,no-unused-vars*/
import Vue from 'vue';
import { Button, Layout, Spin, Steps, Form, Input, Col, Collapse, Row, Select, notification, message, Checkbox, Icon, Modal } from 'ant-design-vue'; //这里全局引入Antd库，也可以局部加载（局部加载无需引入antd.css并且vue.config.js需要配置具体参考官网）
// import "ant-design-vue/dist/antd.css";
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import i18n from './i18n';

//非生产模式开启调试工具
if (process.env.NODE_ENV !== 'production') {
    import("vconsole").then((VConsole) => {
        const vConsole = new VConsole.default();
    });
}

Vue.config.productionTip = false;
const antComponents = [Button, Layout, Spin, Steps, Form, Input, Col, Collapse, Row, Select, Checkbox, Icon, Modal];
antComponents.forEach((component) => {
    Vue.use(component);
});
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
// Vue.use(Antd, {
//     size: 'small'
// });
const imports = [VueAxios, axios];
Vue.use(...imports);
window.vm = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
