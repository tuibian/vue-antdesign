import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: () => import('../views/secure/Main.vue')
        },
        {
            path: '/grdq',
            component: () => import('../views/secure/Grdq.vue')
        },
        {
            path: '/print',
            component: () => import('../views/secure/Print.vue')
        },
        {
            path: '/xykjh',
            component: {
                template:"<router-view />"
            },
            children: [
                {
                    path: '',
                    component: () => import('../views/secure/activation/Form.vue')
                },
                {
                    path: 'result',
                    name:'xykjh-result',
                    props: true,
                    component: () => import('../views/secure/activation/Result.vue')
                }
            ]
        },
        {
            path: '/zzkh',
            component: {
                template:"<router-view />"
            },
            children: [
                {
                    path: '',
                    component: () => import('../views/secure/open-account/Form.vue')
                },
                {
                    path: 'result',
                    name:'zzkh-result',
                    props: true,
                    component: () => import('../views/secure/open-account/Result.vue')
                }
            ]
        },
        {
            path: '*',
            component: () => import('../views/public/Page404.vue')
        }
    ]
});
