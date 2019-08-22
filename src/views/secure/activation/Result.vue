<template>
    <div class="wrap-box">
        <div class="icon">
            <a-icon type="check-circle" style="font-size: 40px;color: #52c41a" />
        </div>
        <a-row>
            <a-col :span="4">操作功能：</a-col>
            <a-col :span="8">{{res.czgn}}</a-col>
            <a-col :span="4">账户类型：</a-col>
            <a-col :span="8">{{res.zhlx}}</a-col>
        </a-row>
        <a-row>
            <a-col :span="4">账户代号：</a-col>
            <a-col :span="8">{{res.zhdh}}</a-col>
            <a-col :span="4">凭证代号：</a-col>
            <a-col :span="8">{{res.pzdh}}</a-col>
        </a-row>
        <a-row>
            <a-col :span="4">证件种类：</a-col>
            <a-col :span="8">{{res.zjlx}}</a-col>
            <a-col :span="4">证件号码：</a-col>
            <a-col :span="8">{{res.zjhm}}</a-col>
        </a-row>
        <a-row>
            <a-col :span="4">服务方式：</a-col>
            <a-col :span="8">{{res.fwfs}}</a-col>
            <a-col :span="4">取款方式：</a-col>
            <a-col :span="8">{{res.qkfs}}</a-col>
        </a-row>
        <a-row>
            <a-col :span="4">处理类型：</a-col>
            <a-col :span="8">{{res.cllx}}</a-col>
            <a-col :span="4">客户姓名：</a-col>
            <a-col :span="8">{{res.name}}</a-col>
        </a-row>
        <div class="btn-box">
            <a-button type="primary" @click="home">
                完成
            </a-button>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */
    import Base from '@/components/common/Base';

    export default {
        name: "Result",
        extends: Base,
        data() {
            return {
                res: this.$route.params.res || {}
            }
        }
    }
</script>

<style scoped lang="less">
    .wrap-box {
        .icon {
            text-align: center;
            margin-bottom: 20px;
        }
        .btn-box {
            display: flex;
            padding-top: 20px;
            justify-content: center;
        }
    }
</style>