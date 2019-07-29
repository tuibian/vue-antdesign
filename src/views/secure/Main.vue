<template>
    <a-layout :class="theme" id="app">
        <a-layout-header class="header">
            <div class="logo" />
            <div class="header-right">
                <Local></Local>
                <a-dropdown>
                    <a class="ant-dropdown-link" href="javascript:;">
                        {{$t('changeskin')}}
                        <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay" @click="changeSkin">
                        <a-menu-item key="dustred">
                            <a href="javascript:;">{{$t('dustred')}}</a>
                        </a-menu-item>
                        <a-menu-item key="lime">
                            <a href="javascript:;">{{$t('lime')}}</a>
                        </a-menu-item>
                        <a-menu-item key="magenta">
                            <a href="javascript:;">{{$t('magenta')}}</a>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
                <a-dropdown>
                    <div class="profile">
                        <a-spin :spinning="!username">
                            <template v-if="username">
                                <img src="../../assets/images/profile.jpg" />
                                <span>{{username}}</span>
                            </template>
                        </a-spin>
                    </div>
                    <a-menu slot="overlay" @click="onClick">
                        <a-menu-item key="logout">
                            <a href="javascript:;">{{$t('logout')}}</a>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" :collapsible="true" theme="light">
                <SideBar></SideBar>
            </a-layout-sider>
            <a-layout class="pd20">
                <Tab></Tab>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
    import SideBar from "@/components/sidebar/SideBar";
    import Tab from "@/components/tab/Tab";
    import Local from '@/components/locales/Local';
    import Base from '@/components/common/Base';
    import { mapMutations } from 'vuex';
    import { INIT_STORE } from '@/store/mutation-types';

    export default {
        name: "Main",
        extends: Base,
        data: function () {
            return {
                username: '',
                theme: 'dustred'
            }
        },
        created: function () {
            this.Api.User.getInfo().then(res => {
                this.username = res.data.username;
            });
        },
        components: {
            SideBar,
            Tab,
            Local
        },
        methods: {
            onClick({ key }) {
                if (key === 'logout') {
                    localStorage.removeItem('token');
                    this.$router.replace('/login');
                    this[INIT_STORE]();
                }
            },
            changeSkin({ key }) {
                this.theme = key;
            },
            ...mapMutations([
                INIT_STORE
            ])
        }
    }
</script>

<style scoped lang="less">
    #app {
        height: 100%;
        & > a-layout {
            flex: 1;
        }
        a-layout-sider {
            background: @white;
        }
        .pd20 {
            padding: 20px;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        .logo {
            width: 102px;
            height: 100%;
            background: url("~@/assets/images/logo.jpg");
            background-size: cover;
        }
        .profile {
            cursor: pointer;
            padding: 0 10px;
            &:hover {
                background: rgba(255, 255, 255, .25);
            }
            img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
            span {
                margin-left: 15px;
                color: @white;
            }
        }
        .header-right {
            display: flex;
            a.ant-dropdown-trigger {
                padding: 0 10px;
                color: @white;
                &:hover {
                    background: rgba(255, 255, 255, .25);
                }
            }
        }
    }
</style>