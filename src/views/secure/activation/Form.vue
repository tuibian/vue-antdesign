<template>
    <a-spin tip="Loading..." :spinning="isLoading">
        <div class="wrap-box">
            <a-form layout="horizontal" :form="form" @submit="handleSubmit">
                <a-form-item label="操作功能"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-select v-decorator="['czgn',{initialValue:'czgn1'}]">
                        <a-select-option value="czgn1">操作功能1</a-select-option>
                        <a-select-option value="czgn2">操作功能2</a-select-option>
                        <a-select-option value="czgn3">操作功能3</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="账户类型"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-select v-decorator="['zhlx',{initialValue:'zhlx1'}]">
                        <a-select-option value="zhlx1">账户类型1</a-select-option>
                        <a-select-option value="zhlx2">账户类型2</a-select-option>
                        <a-select-option value="zhlx3">账户类型3</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="账户代号"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-input v-decorator="['zhdh',{rules: [{ required: true, message: '请输入账户代号'}]}]" placeholder="请输入账户代号" />
                </a-form-item>
                <a-form-item label="凭证代号"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-input v-decorator="['pzdh',{rules: [{ required: true, message: '请输入凭证代号'}]}]" placeholder="请输入凭证代号" />
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
                <a-form-item label="密码"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-input
                            type="password"
                            v-decorator="['password',{rules: [
                            { required: true, message: '请输入密码'},
                            {validator: validateToNextPassword}]}]"
                            placeholder="请输入密码" />
                </a-form-item>
                <a-form-item label="再次输入密码"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-input
                            type="password"
                            v-decorator="['pwd_confirm',{rules: [
                            { required: true, message: '请再次输入密码'},
                            {validator: compareToFirstPassword}
                            ]}]"
                            @blur="handleConfirmBlur"
                            placeholder="请再次输入密码" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                    <a-button type="primary" html-type="submit">
                        确认
                    </a-button>
                    <a-button style="margin-left: 15px" type="danger" @click="home">
                        取消
                    </a-button>
                </a-form-item>
            </a-form>
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
                isLoading: false,
                confirmDirty: false
            };
        },
        created() {
            this.$notification.open({
                message: '消息提示',
                duration: 6,
                description: '本交易适用于状态为“有效”、“未激活”和“未核查”的个人银行账户',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        destroyed(){
            this.$notification.destroy();
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.isLoading = true;
                        this.Api.Core.active(values).then(res => {
                            this.isLoading = false;
                            console.log('结果：', res);
                            this.$router.replace({ name: 'xykjh-result', params: { res: res.data } });
                        });
                    }
                });
            },
            compareToFirstPassword  (rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('两次输入的密码不一致！');
                } else {
                    callback();
                }
            },
            validateToNextPassword  (rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['pwd_confirm'], { force: true });
                }
                callback();
            },
            handleConfirmBlur  (e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            }
        },
    };
</script>
<style scoped lang="less">
    .wrap-box {

    }
</style>