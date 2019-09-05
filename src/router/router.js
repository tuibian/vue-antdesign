import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: () => {
                if (localStorage.getItem('token')) {
                    return 'home';
                }
                return '/login';
            }
        },
        {
            path: '/login',
            component: () => import('../views/public/Login.vue'),
            meta: {
                needAuth: false
            }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/secure/Home.vue'),
            meta: {
                needAuth: true
            }
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
