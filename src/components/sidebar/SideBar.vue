<template>
    <a-spin :spinning="!menuList.length">
        <a-menu @click="menuClick" :selectedKeys="[activeKey]" mode="inline" :style="{ height: '100%', borderRight: 0 }">
            <template v-for="menu in menuList">
                <a-menu-item v-if="!menu.children" :key="menu.key" :item="menu">
                    <a-icon v-if="menu.icon" :type="menu.icon" />
                    <span>{{$t(menu.name)}}</span>
                </a-menu-item>
                <sub-menu v-else :menu-info="menu" :key="menu.key" />
            </template>
        </a-menu>
    </a-spin>
</template>

<script>
    /* eslint-disable no-console */

    import SubMenu from '@/components/sidebar/SubMenu';
    import { Api } from '@/http/api';
    import { mapMutations } from 'vuex';
    import { ADD_OR_CHANGE_TAB } from '@/store/mutation-types';
    import { mapState } from "vuex";

    export default {
        name: "SideBar",
        components: {
            'sub-menu': SubMenu
        },
        data() {
            return {
                menuList: [] //菜单列表
            }
        },
        computed: {
            ...mapState([
                'activeKey'
            ])
        },
        created: function () {
            //初始化组件时从后端获取菜单列表
            Api.Menu.getMenu().then(res => {
                this.menuList = res.data;
            });
        },
        methods: {
            menuClick({ item }) { //点击菜单子项响应函数
                const menu = item.$attrs.item;
                this.$router.replace(menu.target, (route) => { //跳转到对应路由
                    const componentName = route.matched[1].components.default.name;
                    this[ADD_OR_CHANGE_TAB]({ //更新store状态
                        title: menu.name,
                        to: menu.target,
                        key: menu.key,
                        componentName
                    });
                });
            },
            ...mapMutations([
                ADD_OR_CHANGE_TAB
            ]),
        }
    }
</script>

<style scoped lang="less">
    .themes({ .ant-menu-item-selected {
        background-color: @side-selected;
        &:after {
            border-right-color: @side-border-r;
        }
    } });
    .ant-spin-nested-loading {
        height: 100%;
    }
</style>