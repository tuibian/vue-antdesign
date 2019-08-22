<template>
    <div class="box">
        <div class="head">
            <div class="logo"></div>
            <a-button @click="takeSnapshot">打印</a-button>
        </div>
        <h2>零售业务凭证</h2>
        <a-row>
            <a-col :span="8">网点：马尾分行</a-col>
            <a-col :span="8">户名：奥特曼</a-col>
            <a-col :span="8">卡号/账号：62212261402025698563</a-col>
        </a-row>
        <a-row>
            <a-col :span="8">批次号：001</a-col>
            <a-col :span="8">识别码：123456</a-col>
            <a-col :span="8">日期：2019-08-22</a-col>
        </a-row>
        <hr>
        <a-row>
            <a-col :span="3">序号</a-col>
            <a-col :span="4">交易类型</a-col>
            <a-col :span="4">交易信息</a-col>
            <a-col :span="3">币种</a-col>
            <a-col :span="3">交易金额</a-col>
            <a-col :span="4">授权</a-col>
            <a-col :span="3">流水号</a-col>
        </a-row>
        <a-row class="bg">
            <a-col :span="3">1</a-col>
            <a-col :span="4">转账</a-col>
            <a-col :span="4">转账信息</a-col>
            <a-col :span="3">人民币</a-col>
            <a-col :span="3">100.00</a-col>
            <a-col :span="4">XX授权</a-col>
            <a-col :span="3">000111</a-col>
        </a-row>
        <a-row>
            <a-col :span="3">2</a-col>
            <a-col :span="4">转账</a-col>
            <a-col :span="4">转账信息</a-col>
            <a-col :span="3">欧元</a-col>
            <a-col :span="3">100.00</a-col>
            <a-col :span="4">XX授权</a-col>
            <a-col :span="3">000112</a-col>
        </a-row>
        <a-row class="bg">
            <a-col :span="3">3</a-col>
            <a-col :span="4">转账</a-col>
            <a-col :span="4">转账信息</a-col>
            <a-col :span="3">美元</a-col>
            <a-col :span="3">100.00</a-col>
            <a-col :span="4">XX授权</a-col>
            <a-col :span="3">000113</a-col>
        </a-row>
        <div class="bottom">
            共<span class="under">3</span>笔，请核对上述银行记录并签名确认<span class="under" style="width: 100px;display: inline-block"></span>
        </div>
    </div>
</template>

<script>
    import Base from '@/components/common/Base';

    export default {
        name: "Print",
        extends: Base
    }
</script>

<style scoped lang="less">
    .box {
        width: 750px;
        min-height: 400px;
        margin: 0px auto;
        position: relative;
        top: 50px;
        padding: 15px;
        border: 1px solid #000;
        .head {
            display: flex;
            justify-content: space-between;
            .logo {
                width: 151px;
                height: 26px;
                background: url("~@/assets/images/logo.png") no-repeat;
            }
        }
        > h2 {
            text-align: center;
            border-bottom: 1px solid #000;
        }
        .bg {
            background: #dcdcdc !important;
        }
        .bottom {
            position: absolute;
            bottom: 15px;
            .under {
                margin: 0 5px;
                border-bottom: 1px solid #000;
            }
        }
    }

    .ant-row {
        margin-bottom: .5em;
    }
</style>