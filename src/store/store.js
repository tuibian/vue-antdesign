import Vue from 'vue';
import Vuex from 'vuex';
import * as TYPE from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        panes: [
            { title: 'homePage', to: '/home', key: 'home', closable: false, componentName: 'Home' }
        ],
        activeKey: 'home'
    },
    mutations: {
        [TYPE.ADD_OR_CHANGE_TAB](state, payload) {
            if (!state.panes.some(pane => pane.key === payload.key)) {
                state.panes.push(payload);
            }
            state.activeKey = payload.key;
        },
        [TYPE.CHANGE_TAB](state, key) {
            state.activeKey = key;
        },
        [TYPE.REMOVE_TAB](state, key) {
            const index = state.panes.findIndex(item => item.key === key);
            if (state.activeKey === key) {
                state.activeKey = state.panes[index - 1].key;
            }
            state.panes.splice(index, 1);
        },
        [TYPE.INIT_STORE](state) {
            state.panes = [
                { title: 'homePage', to: '/home', key: 'home', closable: false, componentName: 'Home' }
            ];
            state.activeKey = 'home';
        }
    },
    actions: {}
});
