<template>
    <a-layout :class="theme" id="app">
        <div class="main-box">
            <router-link to="/grdq">
                <a-button type="primary" :size="'large'">个人定期储蓄取款销户转活期2323</a-button>
            </router-link>
            <router-link to="/xykjh">
                <a-button type="primary" :size="'large'">借记卡激活2502</a-button>
            </router-link>
            <router-link to="/zzkh">
                <a-button type="primary" :size="'large'">借记卡内定期转账开户2518</a-button>
            </router-link>
            <router-link to="/print">
                <a-button type="primary" :size="'large'">打印凭证</a-button>
            </router-link>
            <router-link to="/push">
                <a-button type="primary" :size="'large'">消息推送</a-button>
            </router-link>
            <router-link to="/publish">
                <a-button type="primary" :size="'large'">版本发布</a-button>
            </router-link>
        </div>
    </a-layout>
</template>

<script>
    import Base from '@/components/common/Base';

    export default {
        name: "Main",
        extends: Base,
        data: function () {
            return {
                theme: 'dustred'
            }
        },
        created: function () {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    #app {
        height: 100%;
        .main-box {
            width: 200px;
            padding: 20px;
            display: flex;
            .ant-btn {
                margin-left: 15px;
            }
        }
    }
</style>