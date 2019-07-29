<template>
    <div class="bg">
        <a-form
                :form="form"
                class="login-form"
                @submit="handleSubmit"
        >
            <a-form-item>
                <a-input v-decorator="['username',{ rules: [{ required: true, message: $t('enterusername') }] }]" :placeholder="$t('username')">
                    <a-icon
                            slot="prefix"
                            type="user"
                            style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-decorator="['password',{ rules: [{ required: true, message: $t('enterpassword') }] }]" type="password" :placeholder="$t('password')">
                    <a-icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </a-form-item>
            <a-form-item style="margin-bottom: 0;">
                <a-checkbox v-decorator="['remember',{valuePropName: 'checked',initialValue: true,}]">
                    {{$t('rememberme')}}
                </a-checkbox>
                <a class="login-form-forgot" href="javascript:;">
                    {{$t('forgotpassword')}}
                </a>
                <a-button
                        type="primary"
                        html-type="submit"
                        class="login-form-button"
                >
                    {{$t('login')}}
                </a-button>
                <a href="javascript:;">{{$t('registernow')}}>></a>
                <Local class="right"></Local>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    /* eslint-disable no-console */
    import Base from '@/components/common/Base';
    import Local from '@/components/locales/Local';

    export default {
        name: "Login",
        extends: Base,
        components: {
            Local
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, value) => {
                    if (!err) {
                        this.Api.User.login(value).then((res) => {
                            localStorage.setItem('token', res.data.token);
                            this.$router.replace('/home');
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .bg {
        width: 100%;
        height: 100%;
        background: url("~@/assets/images/login-bg.jpg") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-form {
            max-width: 360px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 5px;
            .login-form-forgot {
                float: right;
            }
            .login-form-button {
                width: 100%;
            }
        }
    }
</style>