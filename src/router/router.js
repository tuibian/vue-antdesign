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
            path: '/',
            component: () => import('../views/secure/Main.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('../views/secure/Home.vue'),
                    meta: {
                        needAuth: true
                    }
                },
                {
                    path: '/ml',
                    name: 'spicy',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../views/secure/Spicy.vue'),
                    meta: {
                        needAuth: true
                    }
                },
                {
                    path: '/sr',
                    component: () => import('../views/secure/Garlic.vue'),
                    meta: {
                        needAuth: true
                    }
                },
                {
                    path: '/ssx',
                    component: () => import('../views/secure/ThirteenIncense.vue'),
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
        }
    ]
});
