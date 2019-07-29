<template>
    <a-layout-content class="box">
        <a-tabs
                hideAdd
                v-model="activeKeyCopy"
                type="editable-card"
                @edit="onEdit"
                @change="onChange(activeKey)"
        >
            <a-tab-pane v-for="pane in panes" :tab="$t(pane.title)" :key="pane.key" :closable="pane.closable">
            </a-tab-pane>
        </a-tabs>
        <div class="content">
            <keep-alive :include="panes.map(pane => pane.componentName)">
                <router-view />
            </keep-alive>
        </div>
    </a-layout-content>
</template>

<script>
    /* eslint-disable no-console */

    import { mapState } from "vuex";
    import { mapMutations } from 'vuex';
    import { CHANGE_TAB, REMOVE_TAB } from '@/store/mutation-types';

    export default {
        name: "Tab",
        computed: {
            ...mapState([
                // 映射 this.xxx 为 store.state.xxx
                'panes',
                'activeKey'
            ]),
            activeKeyCopy: {
                // getter
                get: function () {
                    return this.activeKey;
                },
                // setter
                set: function (newValue) {
                    this[CHANGE_TAB](newValue);
                }
            }
        },
        methods: {
            onChange(key) {
                const to = this.panes.filter(pane => pane.key == key)[0].to;
                this.$router.replace(to);
            },
            onEdit(targetKey, action) {
                this[action](targetKey);
            },
            remove(targetKey) {
                this[REMOVE_TAB](targetKey);
                this.onChange(this.activeKey);
            },
            ...mapMutations([
                CHANGE_TAB,
                REMOVE_TAB
            ]),
        }
    }
</script>

<style scoped lang="less">
    .box {
        display: flex;
        flex-direction: column;
        .content {
            flex: 1;
            width: 100%;
            border-left: 1px solid #e8e8e8;
            background: @white;
        }
    }
</style>
<style>
    .ant-tabs-bar {
        margin: 0;
    }
</style>