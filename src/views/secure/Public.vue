<template>
    <a-spin tip="Loading..." :spinning="isLoading">
        <div class="wrap-box">
            <a-form layout="horizontal" :form="form" @submit="handleSubmit">
                <a-form-item label="版本号"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-input v-decorator="['version',{rules: [{ required: true, message: '请输入版本号'}]}]" placeholder="请输入版本号" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                    <a-button type="primary" @click="clearls">
                        清除缓存
                    </a-button>
                    <a-button type="primary" style="margin-left: 15px" html-type="submit">
                        发布
                    </a-button>
                    <a-button style="margin-left: 15px" type="danger" @click="home">
                        取消
                    </a-button>
                </a-form-item>
            </a-form>
            <a-form layout="horizontal" :form="form1" @submit="handleSubmit1">
                <a-form-item label="交易延迟时间"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <!--<a-input v-decorator="['delay',{rules: [{ required: true, message: '请输入交易延迟时间'}]}]" placeholder="请输入交易延迟时间" />-->
                    <a-input-number v-decorator="['delay',{rules: [{ required: true, message: '请输入交易延迟时间'}]}]" placeholder="请输入交易延迟时间" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset:6 }">
                    <a-button type="primary" html-type="submit">
                        确认
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </a-spin>
</template>

<script>
    import Base from '@/components/common/Base';

    export default {
        name: "Public",
        extends: Base,
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this),
                form1: this.$form.createForm(this),
                isLoading: false,
            };
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.isLoading = true;
                        console.log('Received values of form: ', values);
                        this.Api.Core.publicVersion(values).then((res) => {
                            this.isLoading = false;
                            this.$message.success('发布成功！');
                        });
                    }
                });
            },
            handleSubmit1(e) {
                e.preventDefault();
                this.form1.validateFields((err, values) => {
                    if (!err) {
                        this.isLoading = true;
                        this.Api.Core.setDelay(values).then((res) => {
                            this.isLoading = false;
                            this.$message.success('设置成功！');
                        });
                    }
                });
            },
            clearls() {
                localStorage.removeItem('hasValidatedPwd');
                localStorage.removeItem('hasFaced');
                this.$message.success('清除成功！');
            }
        }
    }
</script>

<style scoped lang="less">
    .wrap-box {

    }
</style>