<template>
    <a-spin :spinning="isLoading">
        <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="排行" key="1">
                <ul class="rank">
                    <li v-for="(item, index) in rankList">
                        <label>{{index+1}}.{{item.userName}}</label>
                        <span>{{item.count}}</span>
                    </li>
                </ul>
                <div class="button-box">
                    <a-progress type="circle" :percent="Number(allPercent)" />
                    <a-button @click="refreshData" :disabled="btnDis">刷新<span v-if="btnDis">({{count}}S)</span></a-button>
                </div>
            </a-tab-pane>
            <a-tab-pane v-if="currentUser.isLeader" tab="我组" key="2">
                <ul class="rank">
                    <li v-for="(item, index) in groupRank">
                        <label>{{index+1}}.{{item.userName}}</label>
                        <span>{{item.count}}</span>
                    </li>
                </ul>
                <div class="button-box">
                    <a-progress type="circle" :percent="Number(groupPercent)" />
                </div>
                <div style="width: 80%;margin: 0 auto">
                    <a-form
                            :form="form"
                            @submit="handleSubmit"
                    >
                        <a-form-item label="组员">
                            <a-select v-decorator="['loginName',{initialValue:initValue}]">
                                <template v-for="item in groupRank">
                                    <a-select-option :value="item.loginName">{{item.userName}}</a-select-option>
                                </template>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="新增个数">
                            <a-select v-decorator="['add',{initialValue:1}]">
                                <a-select-option value="1">1</a-select-option>
                                <a-select-option value="2">2</a-select-option>
                                <a-select-option value="3">3</a-select-option>
                                <a-select-option value="4">4</a-select-option>
                                <a-select-option value="5">5</a-select-option>
                                <a-select-option value="6">6</a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-button type="primary" html-type="submit">提交</a-button>
                    </a-form>
                </div>

            </a-tab-pane>
            <a-tab-pane v-if="currentUser.isAdmin" tab="设置" key="3">
                <a-button @click="clearData">清空数据</a-button>
            </a-tab-pane>
        </a-tabs>
        <a class="logout" @click="logout">退出</a>
    </a-spin>
</template>
<script>
    /* eslint-disable no-console */
    import Base from '@/components/common/Base';

    export default {
        name: "Home",
        extends: Base,
        data: function () {
            return {
                rankList: [],
                groupRank: [],
                btnDis: false,
                count: 5,
                allPercent: 0,
                groupPercent: 0,
                currentUser: JSON.parse(localStorage.getItem('user'))
            }
        },
        computed: {
            initValue: function () {
                if (this.groupRank[0]) {
                    return this.groupRank[0].loginName;
                } else {
                    return '';
                }
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, value) => {
                    if (!err) {
                        this.$confirm({
                            title: '确认提交?',
                            content: `确认给${value.loginName}增加${value.add}个4吗？`,
                            onOk: () => {
                                this.isLoading = true;
                                value.leader = this.currentUser.loginName;
                                this.Api.User.add(value).then((res) => {
                                    if (res.allUser) {
                                        this.$message.success('新增成功！');
                                        this.rankList = res.allUser;
                                        this.groupRank = res.groupUser;
                                        this.setPercent();
                                    } else {
                                        this.$message.error(res);
                                    }
                                }).finally(() => {
                                    this.isLoading = false;
                                });
                            }
                        });
                    }
                });
            },
            logout() {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                this.$router.replace('/login');
            },
            refreshData() {
                this.isLoading = true;
                this.Api.User.rank(this.currentUser).then(res => {
                    this.rankList = res.allUser;
                    this.groupRank = res.groupUser;
                    this.countDown();
                    this.setPercent();
                }).finally(() => {
                    this.isLoading = false;
                });
            },
            setPercent() {
                let allTotal = 0, groupTotal = 0;
                this.rankList.forEach((item) => {
                    allTotal += item.count;
                });
                this.groupRank.forEach((item) => {
                    groupTotal += item.count;
                });
                this.allPercent = (allTotal / (this.rankList.length * 20) * 100).toFixed(2);
                this.groupPercent = (groupTotal / (this.groupRank.length * 20) * 100).toFixed(2);
            },
            countDown() {
                this.btnDis = true;
                const t = setInterval(() => {
                    this.count--;
                    if (this.count <= 0) {
                        clearInterval(t);
                        this.btnDis = false;
                        this.count = 5;
                    }
                }, 1000);
            },
            clearData(){
                this.$confirm({
                    content: '确认清空所有数据？',
                    onOk: () => {
                        this.isLoading = true;
                        this.Api.User.clearData().then(res => {
                            this.$message.success('数据已清空！');
                            this.rankList = res.allUser;
                            this.setPercent();
                        }).finally(() => {
                            this.isLoading = false;
                        });
                    }
                });
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        created: function () {
            console.log('创建主页');
            this.refreshData();
        },
        activated: function () {
            console.log('激活主页');
        },
        deactivated: function () {
            console.log('离开主页');
        }
    }
</script>
<style scoped lang="less">
    ul.rank {
        list-style: none;
        padding: 0 20px;
        li {
            display: flex;
            justify-content: space-between;
        }
    }

    .logout {
        position: absolute;
        top: 13px;
        right: 20px;
    }

    .button-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .ant-btn-default {
            margin-top: 15px;
        }
    }
</style>