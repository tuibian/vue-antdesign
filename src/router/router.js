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
            path: '/',
            component: () => import('../views/public/Main.vue'),
            children: [
                {
                    path: '/index',
                    component: () => import('../views/public/Index.vue')
                },
                {
                    path: '/pcrs',
                    component: () => import('../views/public/Pcrs.vue')
                },
                {
                    path: '/fwszx',
                    component: () => import('../views/public/Fwszx.vue')
                },
                {
                    path: '/shzx',
                    component: () => import('../views/public/Shzx.vue')
                },
                {
                    path: '/zfjjfa',
                    component: () => import('../views/public/Zfjjfa.vue')
                },
                {
                    path: '/cooperation',
                    component: () => import('../views/public/Cooperation.vue')
                },
                {
                    path: '/company',
                    component: () => import('../views/public/Company.vue')
                },
                {
                    path: '*',
                    component: () => import('../views/public/Page404.vue'),
                    meta: {
                        needAuth: true
                    }
                }
            ]
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
