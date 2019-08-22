//基类处理全局问题，供其他需要的组件继承
<script>
    /* eslint-disable no-console */

    import { Api } from '@/http/api';

    export default {
        name: "Base",
        data: function () {
            return {
                Api,
                hasValidatedPwd: localStorage.getItem('hasValidatedPwd'),
                hasFaced: localStorage.getItem('hasFaced'),
                hasSnapshot: localStorage.getItem('hasSnapshot')
            }
        },
        methods: {
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                return flag;
            },
            home() {
                if (this._isMobile()) {
                    window.UtilPlugin.home('');
                } else {
                    this.$router.go(-1);
                }
            },
            goToLiveDetect(callback) {
                if (this._isMobile() && !this.hasFaced) {
                    window.UtilPlugin.goToLiveDetect();
                    window.UtilPluginLiveDetect = (res) => {
                        console.log(res);
                        if (res.substr(0, 1) === '1') {
                            localStorage.setItem('hasFaced', 'true');
                            callback();
                        } else {
                            this.$message.error('人脸识别失败！');
                        }
                    };
                } else {
                    callback();
                }
            },
            takeSnapshot() {
                if (this._isMobile() && !this.hasSnapshot) {
                    window.UtilPlugin.takeSnapshot();
                    window.UtilPluginTakeSnapshot = (res) => {
                        console.log('打印回单:', res);
                        if (res === '1') {
                            this.$message.success('回单打印成功！');
                        } else {
                            this.$message.error('回单打印失败！');
                        }
                    };
                }
            }
        }
    }
</script>