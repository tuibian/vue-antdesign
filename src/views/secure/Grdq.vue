<template>
    <a-spin tip="Loading..." :spinning="isLoading">
        <div class="wrap-box">
            <a-steps :current="current">
                <a-step v-for="item in steps" :key="item.title" :title="item.title" />
            </a-steps>
            <div class="steps-content">
                <a-form v-show="current===0" layout="horizontal" :form="form" @submit="handleSubmit">
                    <a-form-item label="转出账号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['outAccount',{rules: [{ required: true, message: '请输入转出账号'}]}]" placeholder="请输入转出账号" />
                    </a-form-item>
                    <a-form-item label="取款方式"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['qkfs',{initialValue:'qk1'}]">
                            <a-select-option value="qk1">取款方式1</a-select-option>
                            <a-select-option value="qk2">取款方式2</a-select-option>
                            <a-select-option value="qk3">取款方式3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="印刷凭证代号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['yspzh',{rules: [{ required: true, message: '请输入印刷凭证代号'}]}]" placeholder="请输入印刷凭证代号" />
                    </a-form-item>
                    <a-form-item label="打印凭证代号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['dypzh',{rules: [{ required: true, message: '请输入打印凭证代号'}]}]" placeholder="请输入打印凭证代号" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                        <a-button type="primary" html-type="submit">
                            下一步
                        </a-button>
                        <!--<a-button type="primary" @click="openKeyBoard">-->
                        <!--输入密码-->
                        <!--</a-button>-->
                        <a-button style="margin-left: 15px" type="danger" @click="home">
                            取消
                        </a-button>
                    </a-form-item>
                </a-form>
                <a-form v-show="current===1" layout="horizontal" :form="form1" @submit="handleSubmit">
                    <a-form-item label="转入账号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['inAccount',{rules: [{ required: true, message: '请输入转入账号'}]}]" placeholder="请输入转入账号" />
                    </a-form-item>
                    <a-form-item label="转入户名"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['inName',{rules: [{ required: true, message: '请输入转入户名'}]}]" placeholder="请输入转入户名" />
                    </a-form-item>
                    <a-form-item label="交易金额"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['amount',{rules: [{ required: true, message: '请输入交易金额'}]}]" placeholder="请输入交易金额" />
                    </a-form-item>
                    <a-form-item label="业务代号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['ywdh',{rules: [{ required: true, message: '请输入业务代号'}]}]" placeholder="请输入业务代号" />
                    </a-form-item>
                    <a-form-item label="取消标志"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['qxbz',{rules: [{ required: true, message: '请输入取消标志'}]}]" placeholder="请输入取消标志" />
                    </a-form-item>
                    <a-form-item label="小序号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['xxh',{rules: [{ required: true, message: '请输入小序号'}]}]" placeholder="请输入小序号" />
                    </a-form-item>
                    <a-form-item label="密码"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                                 v-if="!hasValidatedPwd"
                    >
                        <a-input @click="openKeyBoard" type="password" maxlength="6" v-decorator="['password',{rules: [{ required: true, message: '请输入密码'},]}]"
                                 placeholder="请输入密码" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                        <a-button @click="prev">
                            上一步
                        </a-button>
                        <a-button style="margin-left: 15px" type="primary" html-type="submit">
                            确定
                        </a-button>
                        <a-button style="margin-left: 15px" type="danger" @click="home">
                            取消
                        </a-button>
                    </a-form-item>
                </a-form>
                <div v-show="current===2">
                    <a-collapse defaultActiveKey="1" :bordered="false">
                        <a-collapse-panel header="基本信息" key="1">
                            <a-row>
                                <a-col :span="4">转出账号：</a-col>
                                <a-col :span="18">{{res.outAccount}}</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="4">印刷凭证号：</a-col>
                                <a-col :span="8">{{res.yspzh}}</a-col>
                                <a-col :span="4">打印凭证号：</a-col>
                                <a-col :span="8">{{res.dypzh}}</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="4">取款方式：</a-col>
                                <a-col :span="8">{{res.qkfs}}</a-col>
                                <a-col :span="4">交易金额：</a-col>
                                <a-col :span="8">{{res.amount}}</a-col>
                            </a-row>
                        </a-collapse-panel>
                        <a-collapse-panel header="更多信息" key="2" :disabled='false'>
                            <a-row>
                                <a-col :span="5">业务代号：</a-col>
                                <a-col :span="7">{{res.ywdh}}</a-col>
                                <a-col :span="5">小序号：</a-col>
                                <a-col :span="7">{{res.xxh}}</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="5">取销标志：</a-col>
                                <a-col :span="7">{{res.qxbz}}</a-col>
                                <a-col :span="5">转入账号：</a-col>
                                <a-col :span="7">{{res.inAccount}}</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="5">转入户名：</a-col>
                                <a-col :span="7">{{res.inName}}</a-col>
                                <a-col :span="5">转入账户余额：</a-col>
                                <a-col :span="7">{{res.in_blance}}</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="5">转出账户余额：</a-col>
                                <a-col :span="7">{{res.out_blance}}</a-col>
                                <a-col :span="5">利息：</a-col>
                                <a-col :span="7">{{res.interest}}</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="5">利息税：</a-col>
                                <a-col :span="7">{{res.interest_tax}}</a-col>
                                <a-col :span="5">转入金额：</a-col>
                                <a-col :span="7">{{res.amount}}</a-col>
                            </a-row>
                        </a-collapse-panel>
                    </a-collapse>
                    <div class="btn-box">
                        <a-button type="primary" @click="home">
                            完成
                        </a-button>
                    </div>
                </div>
            </div>
        </div>
    </a-spin>
</template>

<script>
    /* eslint-disable no-console */
    import Base from '@/components/common/Base';

    export default {
        extends: Base,
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this),
                form1: this.$form.createForm(this),
                current: 0,
                steps: [{
                    title: '第一步',
                }, {
                    title: '第二步',
                }, {
                    title: '完成',
                }],
                res: {},
                isLoading: false,
                password: '',
            };
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                if (this.current === 0) {
                    this.form.validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form: ', values);
                            this.current++;
                        }
                    });
                } else {
                    this.form1.validateFields((err, values) => {
                        if (!err) {
                            this.goToLiveDetect((res) => {
                                const req = Object.assign(values, this.form.getFieldsValue());
                                console.log('表单数据集合:', req);
                                this.isLoading = true;
                                this.Api.Core.tranfer(req).then(res => {
                                    this.isLoading = false;
                                    console.log('结果：', res);
                                    this.res = res.data;
                                    this.current++;
                                    localStorage.setItem('hasValidatedPwd', 'true');
                                });
                            });
                        }
                    });
                }
            },
            openKeyBoard() {
                if (!this._isMobile()) return;
                window.PwdKeyboardPlugin.open('0$89.25$16');
                window.PwdKeyboardPluginopen = (key) => {
                    console.log('key:', key);
                    this.password = key;
                    const { form1: { setFieldsValue } } = this;
                    setFieldsValue({ password: key });
                }
            },
            prev() {
                this.current--;
            }
        },
    };
</script>
<style scoped lang="less">
    .steps-content {
        padding-top: 30px;
    }

    .btn-box {
        display: flex;
        padding-top: 20px;
        justify-content: center;
    }
</style>