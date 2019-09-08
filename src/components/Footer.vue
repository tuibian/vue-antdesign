<template>
    <footer>
        <div class="center-box">
            <div class="top">
                <div class="left">
                    <div class="box">
                        <p class="title">产品</p>
                        <p>新零售解决方案</p>
                        <p>支付解决方案</p>
                        <p>商户中心</p>
                        <p>服务商中心</p>
                    </div>
                    <div class="box">
                        <p class="title">关于我们</p>
                        <p>公司介绍</p>
                        <p>企业文化</p>
                    </div>
                    <div class="box">
                        <p class="title">服务</p>
                        <p>400-688-6501</p>
                        <p>24小时在线</p>
                    </div>
                </div>
                <div class="right">
                    <div class="qrcode"></div>
                    <p class="a-center" style="margin-top: 15px">慧徕店公众号</p>
                </div>
            </div>
            <div class="bottom">
                <p>上海杉昊只能科技发展有限公司</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less">
    footer {
        width: 100%;
        min-width: 1200px;
        height: 300px;
        font-size: 14px;
        color: #4f505e;
        background: #141621;
        .top {
            display: flex;
            width: 100%;
            height: 210px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #242632;
            .left {
                display: flex;
                .box {
                    width: 250px;
                    p {
                        margin-bottom: 10px;
                        &.title {
                            font-size: 20px;
                            color: #d6d6d7;
                            margin-bottom: 25px;
                        }
                    }
                }
            }
            .right {
                .qrcode {
                    width: 114px;
                    height: 114px;
                    background: url("~@/assets/images/qrcode.png") no-repeat 100%;
                }
            }
        }
        .bottom {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            p {
                line-height: 1.5;
            }
        }
    }
</style>