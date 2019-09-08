<template>
    <section>
        <div class="banner gywm"></div>
        <div class="content">
            <h1>公司简介</h1>
            <div class="flex-box">
                <div class="left"></div>
                <div class="right">
                    <p>上海杉昊智能科技发展有限公司是上海杉欣集团在聚合支付领域的重要布局。作为新一代移动全场景收银解决方案提供商，我们本着以用户为中心、深耕零售科技、打造场景闭环的经营理念；集中解决商户及连锁企业数据孤岛、场景支付、库存管理、会员营销、供应链、普惠金融等痛点需求，打造覆盖零售、餐饮、医疗、烟草等多行业的综合解决方案。</p>
                    <div class="bottom">
                        <hr>
                        <img src="~@/assets/images/shanhao.png"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Company"
    }
</script>

<style scoped lang="less">
    section {
        padding-bottom: 105px;
        background: #f6f6f6;
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1200px;
            margin: 64px auto 0;
            background: #fff;
            padding-top: 69px;
            box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.06);
            h1{
                font-size:36px;
                line-height: 36px;
                font-weight:500;
                color:rgba(34,60,78,1);
            }
            .flex-box{
                display: flex;
                margin: 60px 0 116px;
                justify-content: space-between;
                .left{
                    width: 454px;
                    height: 284px;
                    background: url("~@/assets/images/gsjj.png") no-repeat;
                    background-size: contain;
                }
                .right{
                    height: 284px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-left: 60px;
                    p{
                        width: 540px;
                    }
                    hr{
                        width: 378px;
                        height: 1px;
                        border: none;
                        border-top: 1px solid #d9d9d9;
                    }
                    .bottom{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                }
            }
        }
    }
</style>