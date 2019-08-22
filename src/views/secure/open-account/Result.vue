<template>
    <div class="wrap-box">
        <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
            <div v-show="current===0">
                <a-row>
                    <a-col :span="4">借记卡号：</a-col>
                    <a-col :span="18">{{res.account}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">凭证代号：</a-col>
                    <a-col :span="8">{{res.yspzh}}</a-col>
                    <a-col :span="4">客户姓名：</a-col>
                    <a-col :span="8">{{res.name}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">证件种类：</a-col>
                    <a-col :span="8">{{res.zjlx}}</a-col>
                    <a-col :span="4">证件号码：</a-col>
                    <a-col :span="8">{{res.zjhm}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">业务代号：</a-col>
                    <a-col :span="8">{{res.ywdh}}</a-col>
                    <a-col :span="4">产品代号：</a-col>
                    <a-col :span="8">{{res.cpdh}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">小序号：</a-col>
                    <a-col :span="8">{{res.xxh}}</a-col>
                    <a-col :span="4">币种种类：</a-col>
                    <a-col :span="8">{{res.hbzl}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">转出金额：</a-col>
                    <a-col :span="8">{{res.zcje}}</a-col>
                    <a-col :span="4">产品期限：</a-col>
                    <a-col :span="8">{{res.cpqx}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">续存方式：</a-col>
                    <a-col :span="8">{{res.xcfs}}</a-col>
                    <a-col :span="4">存期：</a-col>
                    <a-col :span="8">{{res.cq}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">续存存期：</a-col>
                    <a-col :span="8">{{res.xccq}}</a-col>
                </a-row>
                <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                    <a-button type="primary" @click="next">
                        下一页
                    </a-button>
                    <a-button style="margin-left: 15px" type="danger" @click="home">
                        退出
                    </a-button>
                </a-form-item>
            </div>
            <div v-show="current===1">
                <a-row>
                    <a-col :span="4">计息标志：</a-col>
                    <a-col :span="8">{{res.jxbz}}</a-col>
                    <a-col :span="4">重订价周期：</a-col>
                    <a-col :span="8">{{res.cdjzq}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">利率确定方式：</a-col>
                    <a-col :span="8">{{res.llqdfs}}</a-col>
                    <a-col :span="4">产品利率代号：</a-col>
                    <a-col :span="8">{{res.lldh}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">利率比例浮动：</a-col>
                    <a-col :span="8">{{res.llfdz}}</a-col>
                    <a-col :span="4">利率点数浮动：</a-col>
                    <a-col :span="8">{{res.lldfd}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">利率条件编号：</a-col>
                    <a-col :span="8">{{res.lltjbh}}</a-col>
                    <a-col :span="4">利率条件名称：</a-col>
                    <a-col :span="8">{{res.llname}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">查看利率条件：</a-col>
                    <a-col :span="8">{{res.lltj}}</a-col>
                </a-row>
                <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                    <a-button @click="prev">
                        上一页
                    </a-button>
                    <a-button type="primary" style="margin-left: 15px" @click="next">
                        下一页
                    </a-button>
                    <a-button style="margin-left: 15px" type="danger" @click="home">
                        退出
                    </a-button>
                </a-form-item>
            </div>
            <div v-show="current===2">
                <a-row>
                    <a-col :span="4">结息标志：</a-col>
                    <a-col :span="8">{{res.jixbz}}</a-col>
                    <a-col :span="4">结息周期：</a-col>
                    <a-col :span="8">{{res.jxzq}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">利率比例浮动：</a-col>
                    <a-col :span="8">{{res.zhllfd}}</a-col>
                    <a-col :span="4">利率点数浮动：</a-col>
                    <a-col :span="8">{{res.zhlldfd}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">利率优惠点数：</a-col>
                    <a-col :span="8">{{res.yhds}}</a-col>
                    <a-col :span="4">查看利率优惠：</a-col>
                    <a-col :span="8">{{res.ckllyh}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">营销人员ID：</a-col>
                    <a-col :span="8">{{res.yxry}}</a-col>
                    <a-col :span="4">营销人员姓名：</a-col>
                    <a-col :span="8">{{res.yxryn}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">小序号：</a-col>
                    <a-col :span="8">{{res.xxh}}</a-col>
                    <a-col :span="4">定期账号：</a-col>
                    <a-col :span="8">{{res.dqzh}}</a-col>
                </a-row>
                <a-row>
                    <a-col :span="4">当前账户利率：</a-col>
                    <a-col :span="8">{{res.dqzhll}}</a-col>
                </a-row>
                <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                    <a-button @click="prev">
                        上一页
                    </a-button>
                    <a-button style="margin-left: 15px" type="danger" @click="home">
                        退出
                    </a-button>
                </a-form-item>
            </div>
        </div>
    </div>
</template>

<script>
    import Base from '@/components/common/Base';

    export default {
        name: "Result",
        extends: Base,
        data() {
            return {
                current: 0,
                res: this.$route.params.res || {},
                steps: [{
                    title: '回显信息1',
                }, {
                    title: '回显信息2',
                }, {
                    title: '回显信息3',
                }]
            }
        },
        methods: {
            next() {
                this.current++;
            },
            prev() {
                this.current--;
            }
        }
    }
</script>

<style scoped lang="less">
    .steps-content {
        padding-top: 30px;
    }

    .ant-form-item {
        margin-top: 20px;
    }
</style>