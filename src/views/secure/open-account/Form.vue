<template>
    <a-spin tip="Loading..." :spinning="isLoading">
        <div class="wrap-box">
            <a-steps :current="current">
                <a-step v-for="item in steps" :key="item.title" :title="item.title" />
            </a-steps>
            <div class="steps-content">
                <a-form v-show="current===0" layout="horizontal" :form="form" @submit="handleSubmit">
                    <a-form-item label="借记卡号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['account',{rules: [{ required: true, message: '请输入借记卡号'}]}]" placeholder="请输入借记卡号" />
                    </a-form-item>
                    <a-form-item label="客户姓名"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['name',{rules: [{ required: true, message: '请输入客户姓名'}]}]" placeholder="请输入客户姓名" />
                    </a-form-item>
                    <a-form-item label="凭证代号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['yspzh',{rules: [{ required: true, message: '请输入凭证代号'}]}]" placeholder="请输入凭证代号" />
                    </a-form-item>
                    <a-form-item label="证件类型"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['zjlx',{initialValue:'sfz'}]">
                            <a-select-option value="sfz">身份证</a-select-option>
                            <a-select-option value="jgz">军官证</a-select-option>
                            <a-select-option value="hz">护照</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="证件号码"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['zjhm',{rules: [{ required: true, message: '请输入证件号码'}]}]" placeholder="请输入证件号码" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                        <a-button type="primary" html-type="submit">
                            下一步
                        </a-button>
                        <a-button style="margin-left: 15px" type="danger" @click="home">
                            取消
                        </a-button>
                    </a-form-item>
                </a-form>
                <a-form v-show="current===1" layout="horizontal" :form="form1" @submit="handleSubmit">
                    <a-form-item label="业务代号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['ywdh',{rules: [{ required: true, message: '请输入业务代号'}]}]" placeholder="请输入业务代号" />
                    </a-form-item>
                    <a-form-item label="产品代号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['cpdh',{rules: [{ required: true, message: '请输入产品代号'}]}]" placeholder="请输入产品代号" />
                    </a-form-item>
                    <a-form-item label="小序号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['xxh',{rules: [{ required: true, message: '请输入小序号'}]}]" placeholder="请输入小序号" />
                    </a-form-item>
                    <a-form-item label="货币种类"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['hbzl',{initialValue:'rmb'}]">
                            <a-select-option value="rmb">人民币</a-select-option>
                            <a-select-option value="wb">外币</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="转出金额"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['zcje',{rules: [{ required: true, message: '请输入转出金额'}]}]" placeholder="请输入转出金额" />
                    </a-form-item>
                    <a-form-item label="产品期限"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['cpqx',{initialValue:'30d'}]">
                            <a-select-option value="30d">30天</a-select-option>
                            <a-select-option value="60d">60天</a-select-option>
                            <a-select-option value="90d">90天</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="存期"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['cq',{initialValue:'yq'}]">
                            <a-select-option value="yq">一期</a-select-option>
                            <a-select-option value="eq">二期</a-select-option>
                            <a-select-option value="sq">三期</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="续存方式"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['xcfs',{initialValue:'xcfs1'}]">
                            <a-select-option value="xcfs1">续存方式1</a-select-option>
                            <a-select-option value="xcfs2">续存方式2</a-select-option>
                            <a-select-option value="xcfs3">续存方式3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="续存存期"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['xccq',{initialValue:'yq'}]">
                            <a-select-option value="yq">一期</a-select-option>
                            <a-select-option value="eq">二期</a-select-option>
                            <a-select-option value="sq">三期</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                        <a-button @click="prev">
                            上一步
                        </a-button>
                        <a-button style="margin-left: 15px" type="primary" html-type="submit">
                            下一步
                        </a-button>
                        <a-button style="margin-left: 15px" type="danger" @click="home">
                            取消
                        </a-button>
                    </a-form-item>
                </a-form>
                <a-form v-show="current===2" layout="horizontal" :form="form2" @submit="handleSubmit">
                    <a-form-item label="计息标志"

                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['jxbz',{initialValue:'bz1'}]">
                            <a-select-option value="bz1">标志1</a-select-option>
                            <a-select-option value="bz2">标志2</a-select-option>
                            <a-select-option value="bz3">标志3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="重订价周期"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['cdjzq',{initialValue:'cdjzq1'}]">
                            <a-select-option value="cdjzq1">重订价周期1</a-select-option>
                            <a-select-option value="cdjzq2">重订价周期2</a-select-option>
                            <a-select-option value="cdjzq3">重订价周期3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="利率确定方式"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['llqdfs',{initialValue:'llqdfs1'}]">
                            <a-select-option value="llqdfs1">利率确定方式1</a-select-option>
                            <a-select-option value="llqdfs2">利率确定方式2</a-select-option>
                            <a-select-option value="llqdfs3">利率确定方式3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="产品利率代号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['lldh',{rules: [{ required: true, message: '请输入产品利率代号'}]}]" placeholder="请输入产品利率代号" />
                    </a-form-item>
                    <a-form-item label="产品利率比例浮动值"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['llfdz',{rules: [{ required: true, message: '请输入产品利率比例浮动值'}]}]" placeholder="请输入产品利率比例浮动值" />
                    </a-form-item>
                    <a-form-item label="产品利率点数浮动值"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['lldfd',{rules: [{ required: true, message: '请输入产品利率点数浮动值'}]}]" placeholder="请输入产品利率点数浮动值" />
                    </a-form-item>
                    <a-form-item label="利率条件编号"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['lltjbh',{initialValue:'lltjbh1'}]">
                            <a-select-option value="lltjbh1">条件编号1</a-select-option>
                            <a-select-option value="lltjbh2">条件编号2</a-select-option>
                            <a-select-option value="lltjbh3">条件编号3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="利率条件名称"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['llname',{rules: [{ required: true, message: '请输入利率条件名称'}]}]" placeholder="请输入利率条件名称" />
                    </a-form-item>
                    <a-form-item label="查看利率条件"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-checkbox-group :options="['条件1','条件2','条件3']" v-decorator="['lltj']" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                        <a-button @click="prev">
                            上一步
                        </a-button>
                        <a-button style="margin-left: 15px" type="primary" html-type="submit">
                            下一步
                        </a-button>
                        <a-button style="margin-left: 15px" type="danger" @click="home">
                            取消
                        </a-button>
                    </a-form-item>
                </a-form>
                <a-form v-show="current===3" layout="horizontal" :form="form3" @submit="handleSubmit">
                    <a-form-item label="结息标志"

                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['jixbz',{initialValue:'jbz1'}]">
                            <a-select-option value="jbz1">标志1</a-select-option>
                            <a-select-option value="jbz2">标志2</a-select-option>
                            <a-select-option value="jbz3">标志3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="结息周期"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['jxzq',{initialValue:'jxzq1'}]">
                            <a-select-option value="jxzq1">结息周期1</a-select-option>
                            <a-select-option value="jxzq2">结息周期2</a-select-option>
                            <a-select-option value="jxzq3">结息周期3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="账户利率比例浮动值"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['zhllfd',{rules: [{ required: true, message: '请输入账户利率比例浮动值'}]}]" placeholder="请输入账户利率比例浮动值" />
                    </a-form-item>
                    <a-form-item label="账户利率点数浮动值"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['zhlldfd',{rules: [{ required: true, message: '请输入账户利率点数浮动值'}]}]" placeholder="请输入账户利率点数浮动值" />
                    </a-form-item>
                    <a-form-item label="账户利率优惠点数"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['yhds',{rules: [{ required: true, message: '请输入账户利率优惠点数'}]}]" placeholder="请输入账户利率优惠点数" />
                    </a-form-item>
                    <a-form-item label="查看利率优惠"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-select v-decorator="['ckllyh',{initialValue:'ckllyh1'}]">
                            <a-select-option value="ckllyh1">利率优惠1</a-select-option>
                            <a-select-option value="ckllyh2">利率优惠2</a-select-option>
                            <a-select-option value="ckllyh3">利率优惠3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="营销人员ID"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['yxry',{rules: [{ required: true, message: '请输入营销人员ID'}]}]" placeholder="请输入营销人员ID" />
                    </a-form-item>
                    <a-form-item label="营销人员姓名"
                                 :label-col="{ span: 6 }"
                                 :wrapper-col="{ span: 14 }"
                    >
                        <a-input v-decorator="['yxryn',{rules: [{ required: true, message: '请输入营销人员姓名'}]}]" placeholder="请输入营销人员姓名" />
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
                            确认
                        </a-button>
                        <a-button style="margin-left: 15px" type="danger" @click="home">
                            取消
                        </a-button>
                    </a-form-item>
                </a-form>
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
                form2: this.$form.createForm(this),
                form3: this.$form.createForm(this),
                current: 0,
                steps: [{
                    title: '第一步',
                }, {
                    title: '第二步',
                }, {
                    title: '第三步',
                }, {
                    title: '确认提交',
                }],
                isLoading: false,
                password:''
            };
        },
        created() {
            this.$notification.open({
                message: '消息提示',
                duration: 6,
                description: '本业务完成借记卡内本外币活期账户转为本外币整存整取、人民币通知存款或人民币定活两便储蓄存款账户的转账业务。',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        destroyed() {
            this.$notification.destroy();
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                if (this.current === 0) {
                    this.form.validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form1: ', values);
                            this.current++;
                        }
                    });
                } else if (this.current === 1) {
                    this.form1.validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form2: ', values);
                            this.current++;
                        }
                    });
                }else if (this.current === 2) {
                    this.form2.validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form2: ', values);
                            this.current++;
                        }
                    });
                } else if (this.current === 3) {
                    this.form3.validateFields((err, values) => {
                        if (!err) {
                            console.log('Received values of form3: ', values);
                            this.isLoading = true;
                            const req = Object.assign(values, this.form.getFieldsValue(), this.form1.getFieldsValue(),this.form2.getFieldsValue());
                            this.Api.Core.openAccount(req).then(res => {
                                this.isLoading = false;
                                console.log('结果：', res);
                                this.$router.replace({ name: 'zzkh-result', params: { res: res.data } });
                                localStorage.setItem('hasValidatedPwd', 'true');
                            });
                        }
                    });
                }
            },
            prev() {
                this.current--;
            },
            openKeyBoard() {
                if (!this._isMobile()) return;
                window.PwdKeyboardPlugin.open('0$89.25$16');
                window.PwdKeyboardPluginopen = (key) => {
                    console.log('key:', key);
                    this.password = key;
                    const { form3: { setFieldsValue } } = this;
                    setFieldsValue({ password: key });
                }
            },
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