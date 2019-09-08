<template>
    <section>
        <img width="100%" src="~@/assets/images/banner.png">
        <div class="lsfa">
            <div class="center-box">
                <div class="left">
                    <h1 class="title">新零售解决方案</h1>
                    <h2 class="title">轻量级组合</h2>
                    <p>零售SaaS系统 + 微信公众号 + 云码枪 = 收银机，用极简方式呈现复杂功能</p>
                    <h2 class="title">方案包含</h2>
                    <ul class="fa-list">
                        <li><i class="spgl"></i>商品管理</li>
                        <li><i class="hygl"></i>会员管理</li>
                        <li><i class="jyfx"></i>经营分析</li>
                        <li><i class="jhzf"></i>聚合支付</li>
                        <li><i class="kcgl"></i>库存管理</li>
                        <li><i class="yxgl"></i>营销管理</li>
                        <li><i class="wedian"></i>微店</li>
                    </ul>
                    <p style="margin-top: 5px">适用于各种零售业态，助您开店无忧！</p>
                </div>
                <div class="right"></div>
            </div>
        </div>
        <div class="jjfa">
            <div class="center-box">
                <div class="left"></div>
                <div class="right">
                    <h1 class="title">支付解决方案</h1>
                    <p>支持微信、支付宝和银联二维码，支持信用卡和储蓄卡，还可语音播报和打印小票，助您高效收款不漏单！</p>
                    <div class="pic">
                        <div class="quick-pass"></div>
                        <div class="wechat"></div>
                        <div class="alipay"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="team">
            <div class="a-center">
                <p class="title">
                    专业的运营和客服团队
                </p>
                <p style="margin-top: 16px;margin-bottom: 50px">提供多方位支持和服务，让您使用和售后无忧</p>
                <p class="title big">
                    24小时在线，4006886501，客服电话任您call！
                </p>
            </div>
        </div>
        <div class="partners">
            <h1 class="title">合作伙伴</h1>
            <div class="bg"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped lang="less">
    .lsfa {
        width: 100%;
        padding: 90px 0;
        background: #fff;
        .center-box {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
                h2.title {
                    width: fit-content;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    margin-top: 30px;
                    border-bottom: 1px solid #dedede;
                }
                p {
                    color: #333;
                    margin-top: 15px;
                }
                .fa-list {
                    width: 550px;
                    color: #333;
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 18px;
                    margin-left: 5px;
                    padding-left: 0;
                    li {
                        display: flex;
                        margin-right: 30px;
                        margin-bottom: 15px;
                        align-items: center;
                    }
                    i {
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        margin-right: 8px;
                        &.spgl {
                            background: url("~@/assets/images/spgl.png") no-repeat 100%;
                        }
                        &.hygl {
                            background: url("~@/assets/images/hygl.png") no-repeat 100%;
                        }
                        &.jyfx {
                            background: url("~@/assets/images/jyfx.png") no-repeat 100%;
                        }
                        &.jhzf {
                            background: url("~@/assets/images/jhzf.png") no-repeat 100%;
                        }
                        &.kcgl {
                            background: url("~@/assets/images/kcgl.png") no-repeat 100%;
                        }
                        &.yxgl {
                            background: url("~@/assets/images/yxgl.png") no-repeat 100%;
                        }
                        &.wedian {
                            background: url("~@/assets/images/wedian.png") no-repeat 100%;
                        }
                    }
                }
            }
            .right {
                width: 448px;
                height: 426px;
                background: url("~@/assets/images/lspt.png") no-repeat;
                background-size: 100%;
            }
        }
    }
    .jjfa {
        width: 100%;
        padding: 90px 0;
        background: #f6f6f6;
        .center-box {
            height: 100%;
            display: flex;
            align-items: center;
            .left {
                width: 682px;
                height: 468px;
                background: url("~@/assets/images/pc.png") no-repeat;
                background-size: 100%;
            }
            .right {
                p {
                    color: #333;
                    width: 400px;
                    line-height: 1.5;
                    margin-top: 30px;
                    margin-bottom: 50px;
                }
                .pic {
                    display: flex;
                    div {
                        width: 50px;
                        height: 50px;
                        margin-right: 30px;
                        &.quick-pass {
                            background: url("~@/assets/images/quick-pass.png") no-repeat 100%;
                        }
                        &.wechat {
                            background: url("~@/assets/images/wechat.png") no-repeat 100%;
                        }
                        &.alipay {
                            background: url("~@/assets/images/alipay.png") no-repeat 100%;
                        }
                    }
                }
            }
        }
    }
    .team {
        width: 100%;
        height: 563px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("~@/assets/images/tdpt.png") no-repeat 100%;
        p {
            color: #ffffff;
            &.title {
                font-size: 30px;
                line-height: 30px;
            }
            &.big{
                font-size: 36px;
                line-height: 36px;
            }
        }
    }
    .partners {
        width: 100%;
        padding: 150px 0;
        .a-center;
        h1 {
            width: fit-content;
            height: 50px;
            display: flex;
            align-items: center;
            margin: 0 auto 110px;
            border-bottom: 2px solid #205bff;
        }
        .bg {
            width: 95%;
            max-width: 1000px;
            height: 412px;
            margin: 0 auto;
            background: url("~@/assets/images/partners.png") no-repeat;
            background-size: 100%;
        }
    }
</style>