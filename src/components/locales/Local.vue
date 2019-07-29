<template>
    <a-dropdown>
        <a class="ant-dropdown-link" href="javascript:;">
            {{$t('language')}}
            <a-icon type="down" />
        </a>
        <a-menu slot="overlay" @click="onClick">
            <a-menu-item key="zh">
                <a href="javascript:;">简体中文</a>
            </a-menu-item>
            <a-menu-item key="en">
                <a href="javascript:;">English</a>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
    export default {
        name: "Local",
        methods: {
            onClick({ key }) {
                const current = localStorage.getItem('language');
                if (key !== current) {
                    localStorage.setItem('language', key);
                    this.$i18n.locale = key;
                }
            }
        }
    }
</script>