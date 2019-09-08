<template>
    <header>
        <div class="content">
            <div class="logo"></div>
            <ul class="menu">
                <li :class="{ selected: current==='/index' }">
                    <router-link to="/index">首页</router-link>
                </li>
                <li :class="{ selected: current==='/pcrs'||current==='/zfjjfa' }" @mouseenter="showSub" @mouseleave="hideSub">
                    <router-link to="/pcrs">产品中心</router-link>
                    <template v-if="showSubMenu">
                        <div class="sub-bg"></div>
                        <ul class="subMenu">
                            <li :class="{ selected: current==='/pcrs' }">
                                <router-link to="/pcrs">新零售解决方案</router-link>
                            </li>
                            <li :class="{ selected: current==='/zfjjfa' }">
                                <router-link to="/zfjjfa">支付解决方案</router-link>
                            </li>
                            <li><a>丰富的外设</a></li>
                        </ul>
                    </template>
                </li>
                <li :class="{ selected: current==='/shzx' }">
                    <router-link to="/shzx">商户中心</router-link>
                </li>
                <li :class="{ selected: current==='/fwszx' }">
                    <router-link to="/fwszx">服务商中心</router-link>
                </li>
                <li :class="{ selected: current==='/cooperation' }">
                    <router-link to="/cooperation">合作案例</router-link>
                </li>
                <li :class="{ selected: current==='/company' }">
                    <router-link to="/company">关于我们</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                showSubMenu: false,
                timer: null
            }
        },
        computed: {
            current: function () {
                return this.$route.path;
            }
        },
        methods: {
            showSub: function () {
                this.showSubMenu = true;
                clearTimeout(this.timer);
            },
            hideSub: function () {
                this.timer = setTimeout(() => {
                    this.showSubMenu = false;
                }, 300);
            }
        }
    }
</script>

<style scoped lang="less">
    header {
        width: 100%;
        height: 80px;
        .content {
            margin: 0 auto;
            width: 1200px;
            padding: 10px 0px 0px 20px;
            .logo {
                float: left;
                width: 100px;
                height: 40px;
                margin-top: 8px;
                background: url("~@/assets/images/logo.png") no-repeat;
                background-size: contain;
            }
            ul.menu {
                float: right;
                display: flex;
                font-size: 16px;
                li {
                    height: 3.125rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 25px;
                    white-space: nowrap;
                    z-index: 999;
                    &.selected {
                        border-bottom: 3px solid #2059ff;
                        > a {
                            color: #2059ff;
                        }
                    }
                    a {
                        text-decoration: none;
                        color: #010101;
                    }
                }
                .sub-bg {
                    position: absolute;
                    height: 50px;
                    left: 0;
                    right: 0;
                    top: 80px;
                    min-width: 1200px;
                    background: rgba(255, 255, 255, .5);
                }
                .subMenu {
                    position: absolute;
                    display: flex;
                    top: 80px;
                    height: 50px;
                    color: #333;
                    li.selected {
                        border: none;
                        a {
                            color: #2059ff;
                        }
                    }
                }
            }
        }
    }
</style>