/* eslint-disable no-console */
import Vue from 'vue';
import { Modal } from 'ant-design-vue';
import router from '../router/router';

//设置http请求的根路径，例如:/toms
const API_CONTEXT = process.env.VUE_APP_BASE_API;//从模式配置文件读取根路径常量
Vue.axios.defaults.baseURL = API_CONTEXT;//设置全局请求根路径
//创建请求的CancelToken用于取消请求
const CancelToken = Vue.axios.CancelToken;
let source = CancelToken.source();
// 添加请求拦截器
Vue.axios.interceptors.request.use(function (config) {
    config.headers.common['token'] = localStorage.getItem('token');//把token设置到请求头上送给服务端校验
    config.cancelToken = source.token;//所有http请求共用一个cancelToken，调用source.cancel()取消所有请求
    return config;
}, function (error) {
    // 请求错误处理
    return Promise.reject(error);
});
// 添加响应拦截器
Vue.axios.interceptors.response.use(function (response) {
    //返回成功数据
    return response;
}, function (error) { //http请求报错
    if (error.message.isCanceled) return Promise.reject(error);//请求被取消
    const status = error.response.status;
    switch (status) {
        case 401://（未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
            source.cancel({ isCanceled: true });//请求返回拦截到无效token，取消其他所有并发请求
            Modal.warning({
                content: window.vm.$i18n.t('logintimeout'),
                onOk: function () {
                    router.replace('/login');
                    source = CancelToken.source();//重新创建CancelToken
                    localStorage.removeItem('token');//清空本地token
                }
            });
            break;
    }
    return Promise.reject(error);
});
const Api = {
    Menu: {
        getMenu: () => Vue.axios.get('/menu')
    },
    User: {
        login: (paylad) => Vue.axios.post('/login', paylad),
        getInfo: () => Vue.axios.get('/getUserInfo')
    }
};
export { Api };