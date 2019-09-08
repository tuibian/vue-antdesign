<template>
    <header>
        <div class="content">
            <div class="logo"></div>
            <ul class="menu">
                <li :class="{ selected: current==='index' }" @click="current='index'">
                    <router-link to="/index">首页</router-link>
                </li>
                <li :class="{ selected: current==='pcrs' }" @click="current='pcrs'" @mouseenter="showSub" @mouseleave="hideSub">
                    <router-link to="/pcrs">产品中心</router-link>
                    <template v-if="showSubMenu">
                        <div class="sub-bg"></div>
                        <ul class="subMenu">
                            <li><router-link to="/pcrs">新零售解决方案</router-link></li>
                            <li><router-link to="/zfjjfa">支付解决方案</router-link></li>
                            <li><a>丰富的外设</a></li>
                        </ul>
                    </template>
                </li>
                <li :class="{ selected: current==='shzx' }" @click="current='shzx'">
                    <router-link to="/shzx">商户中心</router-link>
                </li>
                <li :class="{ selected: current==='fwszx' }" @click="current='fwszx'">
                    <router-link to="/fwszx">服务商中心</router-link>
                </li>
                <li>
                    <a>合作案例</a>
                </li>
                <li>
                    <a>关于我们</a>
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
                current: 'index',
                showSubMenu: false,
                timer: null
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
        height: 5rem;
        .content {
            margin: 0 auto;
            width: 1000px;
            padding-top: 10px;
            .logo {
                float: left;
                width: 140px;
                height: 55px;
                background: url("~@/assets/images/logo.png") no-repeat;
                background-size: contain;
            }
            ul.menu {
                float: right;
                display: flex;
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
                        font-weight: bold;
                    }
                }
                .sub-bg {
                    position: absolute;
                    height: 50px;
                    left: 0;
                    right: 0;
                    top: 80px;
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