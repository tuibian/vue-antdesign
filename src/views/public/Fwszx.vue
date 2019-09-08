<template>
    <section>
        <div class="banner fwszx">
            <div class="content">
                <h1 style="color: #fff">服务商后台 + 慧徕店展业助手APP</h1>
                <a href="http://merchant.huilaidian.com.cn/merchant/" class="btn">服务商后台</a>
            </div>
        </div>
        <div class="common-box gray left">
            <div class="center-box">
                <div class="left">
                    <h1 class="title">随心进件</h1>
                    <p>同时支持后台和展业助手APP商户进件，<br>高效拓户无烦恼！</p>
                </div>
                <div class="right sxjj"></div>
            </div>
        </div>
        <div class="common-box right">
            <div class="center-box">
                <div class="left syck"></div>
                <div class="right">
                    <h1 class="title">收益查看</h1>
                    <p>在后台或展业助手APP清晰记录<br>每一条分润数据，实时查看！</p>
                </div>
            </div>
        </div>
        <div class="bgss">
            <img width="100%" src="~@/assets/images/bgss.png">
            <div class="content">
                <div class="left">
                    <div style="display: flex;align-items: flex-end;margin-bottom: 50px">
                        <h1 class="title">分润稳定&nbsp;</h1>
                        <p>结算稳定，政策优惠</p>
                    </div>
                    <div style="display: flex;align-items: flex-end">
                        <h1 class="title">硬件收益&nbsp;</h1>
                        <p>各类设备销售利润可观</p>
                    </div>
                </div>
                <div class="right"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "fwszx"
    }
</script>

<style scoped lang="less">
    .bgss {
        width: 100%;
        padding-bottom: 430px;
        background: #fff;
        position: relative;
        .content {
            width: 70%;
            height: 500px;
            border-radius: 10px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 2px 2px 5px #b9b9b9,2px -2px 5px #b9b9b9, -2px 2px 5px #b9b9b9,-2px -2px 5px #b9b9b9;
            display: flex;
            padding-left: 8%;
            justify-content: space-between;
            align-items: center;
            .right {
                width: 674px;
                height: 377px;
                background: url("~@/assets/images/yunmaqiang.png") no-repeat;
                background-size: contain;
            }
        }
    }
    .btn{
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        width:164px;
        height:50px;
        color: #fff;
        border:1px solid rgba(255,255,255,1);
        border-radius:4px;
    }
</style>