<template>
    <a-spin tip="Loading..." :spinning="isLoading">
        <div class="content">
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
                <a-row :class="{ bg: index%2==0 }" v-for="(bill, index) in bills">
                    <a-col :span="3">{{index+1}}</a-col>
                    <a-col :span="4">{{bill.transType}}</a-col>
                    <a-col :span="4">{{bill.transInfo}}</a-col>
                    <a-col :span="3">{{bill.currency}}</a-col>
                    <a-col :span="3">{{bill.amount}}</a-col>
                    <a-col :span="4">{{bill.auth}}</a-col>
                    <a-col :span="3">000111</a-col>
                </a-row>
                <div class="bottom">
                    共<span class="under">{{total}}</span>笔，请核对上述银行记录并签名确认<span class="under" style="width: 100px;display: inline-block"></span>
                </div>
            </div>
            <a-button type="danger" @click="home">取消</a-button>
        </div>
    </a-spin>
</template>

<script>
    import Base from '@/components/common/Base';

    export default {
        name: "Print",
        extends: Base,
        data() {
            return {
                bills: [],
                isLoading: false
            }
        },
        computed: {
            total: function () {
                // `this` 指向 vm 实例
                return this.bills.length;
            }
        },
        created() {
            this.isLoading = true;
            this.Api.Core.bills().then(res => {
                this.isLoading = false;
                console.log('结果：', res);
                this.bills = res.data;
            });
        }
    }
</script>

<style scoped lang="less">
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box {
        width: 750px;
        min-height: 400px;
        padding: 15px;
        margin: 50px 0 30px;
        position: relative;
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