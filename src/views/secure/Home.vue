<template>
    <div class="home">
        {{$t('home')}}
    </div>
</template>
<script>
    /* eslint-disable no-console */
    export default {
        name: "Home",
        created:function () {
            console.log('创建主页');
        },
        activated:function () {
            console.log('激活主页');
        },
        deactivated:function () {
            console.log('离开主页');
        }
    }
</script>