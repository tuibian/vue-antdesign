//基类处理全局问题，供其他需要的组件继承
<script>
    import { Api } from '@/http/api';
    export default {
        name: "Base",
        data:function () {
            return {
                Api
            }
        }
    }
</script>