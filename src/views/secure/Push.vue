<template>
    <a-spin tip="Loading..." :spinning="isLoading">
        <div class="wrap-box">
            <a-form layout="horizontal" :form="form" @submit="handleSubmit">
                <a-form-item label="推送内容"
                             :label-col="{ span: 6 }"
                             :wrapper-col="{ span: 14 }"
                >
                    <a-input v-decorator="['message',{rules: [{ required: true, message: '请输入推送内容'}]}]" placeholder="请输入推送内容" />
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
    import Base from '@/components/common/Base';

    export default {
        name: "Push",
        extends: Base,
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this),
                isLoading: false,
            };
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.takePush(values.message + '$1', () => {
                            this.isLoading = false;
                            this.$message.success('消息推送成功！');
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .wrap-box {

    }
</style>