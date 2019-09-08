<template>
    <section>
        <div class="banner">
            <div class="content">
                <h1 style="color: #fff;">新零售解决方案</h1>
                <p>业界领先的新零售收银系统</p>
                <p>便宜、简单、轻量级，但功能强大！</p>
            </div>
        </div>
        <div class="saas">
            <div class="center-box">
                <div class="left">
                    <h1 class="title">零售SaaS系统</h1>
                    <p>支持网页登录，包含商品管理、库存管理、</p>
                    <p>会员管理、营销管理、详细的经营分析和微店</p>
                </div>
                <div class="right"></div>
            </div>
        </div>
        <div class="gzh">
            <div class="content">
                <p style="display: flex;align-items: center"><img src="~@/assets/images/logos.png"><span style="margin-left: 10px">慧徕店商家助手（公众号）</span></p>
                <h1 class="title">随时随地管理店铺</h1>
                <p>作为零售SaaS系统的移动端载体，商户可在手机上<br>进行对应操作，使用更便捷！</p>
            </div>
        </div>
        <div class="ymq">
            <div class="center-box">
                <div class="left">
                    <h1 class="title">云码枪</h1>
                    <p>没有什么比便宜和轻量级来的更让人喜欢了<br>新零售解决方案中的收银设备，保留强大功能，降低开店成本，即扫即卖更高效！</p>
                    <div class="img-box">
                        <img width="240" src="~@/assets/images/smsp.png">
                        <img width="240" src="~@/assets/images/shoukuan.png">
                    </div>
                </div>
                <div class="right"></div>
            </div>
        </div>
        <div class="shouyinji">
            <div class="center-box">
                <div class="left"></div>
                <div class="right">
                    <h1 class="title">收银机（适配零售SaaS系统）</h1>
                    <p>全面，外设丰富，满足各种业态需求<br>丰富的外设 + 适配零售SaaS系统的收银机 + 全类型支付，<br>满足各种业态需求！ </p>
                </div>
            </div>
        </div>
        <div class="waishe">
            <div class="center-box">
                <div class="left">
                    <h1 class="title">我们提供丰富的外设供您选择</h1>
                    <p>无线打印机、无线播报音箱和高性能WIFI路由器，<br>根据自身需要随心配！还可免费提供品牌物料！</p>
                </div>
                <div class="right">
                </div>
            </div>
        </div>
        <div class="lcxy">
            <div class="center-box">
                <div class="top">
                    <hr>
                    <h1 class="title">外设丰富满足各种业态需求</h1>
                    <hr>
                </div>
                <div class="bottom">
                    <img src="~@/assets/images/linshou.png">
                    <img src="~@/assets/images/canyin.png">
                    <img src="~@/assets/images/school.png">
                    <img src="~@/assets/images/yiliao.png">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Pcrs"
    }
</script>

<style scoped lang="less">
    .saas {
        width: 100%;
        padding: 70px 0;
        .center-box {
            display: flex;
            justify-content: space-between;
            .left {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h1 {
                    margin-bottom: 30px;
                }
                p {
                    margin-bottom: 15px;
                }
            }
            .right {
                flex: 1.5;
                width: 779px;
                height: 497px;
                background: url("~@/assets/images/erp.png") no-repeat;
                background-size: contain;
            }
        }
    }
    .gzh {
        padding-top: 38.54%;
        width: 100%;
        height: 100%;
        background: url("~@/assets/images/gzhpt.png") no-repeat;
        background-size: cover;
        position: relative;
        .content {
            position: absolute;
            top: 19%;
            right: 15%;
            h1 {
                margin-top: 60px;
                margin-bottom: 25px;
            }
            p {
                line-height: 1.5;
            }
        }
    }
    .ymq {
        width: 100%;
        padding: 120px 0;
        background: #fff;
        .center-box {
            display: flex;
            justify-content: space-between;
            .left {
                h1 {
                    margin-bottom: 25px;
                }
                p {
                    line-height: 1.5;
                }
                .img-box {
                    margin-top: 75px;
                    display: flex;
                }
            }
            .right {
                width: 460px;
                height: 509px;
                background: url("~@/assets/images/ymq.png") no-repeat;
                background-size: contain;
            }
        }
    }
    .shouyinji {
        width: 100%;
        padding: 120px 0;
        background: #f6f6f6;
        .center-box {
            display: flex;
            justify-content: space-between;
            .left {
                width: 600px;
                height: 500px;
                background: url("~@/assets/images/shouyinji.png") no-repeat;
                background-size: contain;
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                h1 {
                    margin-bottom: 25px;
                }
                p {
                    line-height: 1.5;
                }
            }
        }
    }
    .waishe {
        width: 100%;
        padding: 90px 0;
        background: #fff;
        .center-box {
            display: flex;
            justify-content: space-between;
            .left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                h1 {
                    margin-bottom: 25px;
                }
                p {
                    line-height: 1.5;
                }
            }
            .right {
                width: 566px;
                height: 577px;
                background: url("~@/assets/images/waishe.png") no-repeat;
                background-size: contain;
            }
        }
    }
    .lcxy {
        width: 100%;
        padding-bottom: 90px;
        background: #fff;
        .center-box {
            .top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h1 {
                    margin: 0 30px;
                }
                hr {
                    flex: 1;
                    height: 1px;
                    border: none;
                    border-top: 1px solid #d9d9d9;
                }
            }
            .bottom {
                display: flex;
                margin-top: 60px;
                justify-content: space-between;
                img {
                    width: 230px;
                }
            }
        }
    }
</style>