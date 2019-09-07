import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: () => import('../views/public/Index.vue')
        },
        {
            path: '*',
            component: () => import('../views/public/Page404.vue'),
            meta: {
                needAuth: true
            }
        }
    ]
});
