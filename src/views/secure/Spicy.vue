<template>
    <p>{{$t('spicyc')}}</p>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        name: "Spicy",
        created:function () {
            console.log('创建麻辣');
        },
        activated:function () {
            console.log('激活麻辣');
        },
        deactivated:function () {
            console.log('离开麻辣');
        }
    }
</script>

<style scoped>

</style>