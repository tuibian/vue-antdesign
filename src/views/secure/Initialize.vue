<template>
    <div>
        <h1>主库初始化配置</h1>
        <a-form
                :form="form"
                @submit="handleSubmit"
        >
            <a-form-item
                    label="主数据库IP地址"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input v-decorator="['masterIp',{rules: [{ required: true, message: '请输入主数据库IP地址' }]}]" />
            </a-form-item>

            <a-form-item
                    label="主库操作系统管理员用户名"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input v-decorator="['masterUser',{rules: [{ required: true, message: '请输入主库操作系统管理员用户名' }]}]" />
            </a-form-item>

            <a-form-item
                    label="主库操作系统管理员密码"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input type="password" v-decorator="['masterPwd',{rules: [{ required: true, message: '请输入主库操作系统管理员密码' }]}]" />
            </a-form-item>

            <a-form-item
                    label="主库oracle用户密码"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input type="password" v-decorator="['oraclePwd',{rules: [{ required: true, message: '请输入主库oracle用户密码' }]}]" />
            </a-form-item>

            <a-form-item
                    label="主数据库实例名"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input v-decorator="['dbInstance',{rules: [{ required: true, message: '请输入主数据库实例名' }]}]" />
            </a-form-item>

            <a-form-item
                    label="主数据库sys用户密码"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input type="password" v-decorator="['sysPwd',{rules: [{ required: true, message: '请输入主数据库sys用户密码' }]}]" />
            </a-form-item>

            <a-form-item
                    label="脚本存放目录（默认/opt/tools）"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input v-decorator="['path',{rules: [{ required: true, message: '请输入脚本路径' }]}]" />
            </a-form-item>

            <a-form-item
                    label="主数据库归档日志存放目录"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input v-decorator="['logPath',{rules: [{ required: true, message: '请输入主数据库归档日志存放目录' }]}]" />
            </a-form-item>

            <a-form-item
                    label="备库主机IP地址"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input v-decorator="['backupIp',{rules: [{ required: true, message: '请输入备库主机IP地址' }]}]" />
            </a-form-item>

            <a-form-item
                    label="主数据库数据文件存放目录"
                    :label-col="{ span: 7 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input v-decorator="['dataPath',{rules: [{ required: true, message: '请输入主数据库数据文件存放目录' }]}]" />
            </a-form-item>

            <a-form-item
                    :wrapper-col="{ span: 12, offset: 5 }"
            >
                <a-button
                        type="primary"
                        html-type="submit"
                >
                    执行
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    import Base from '@/components/common/Base';

    export default {
        name: "Initialize",
        extends: Base,
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this),
            };
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.Api.Core.run(values).then((res) => {
                            this.$message.success(res);
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .ant-form {
        width: 50%;
        min-width: 600px;
        margin: 0 auto;
    }

    h1 {
        text-align: center;
        margin: 20px 0;
    }
</style>