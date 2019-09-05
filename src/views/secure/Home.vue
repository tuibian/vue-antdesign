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
            </a-tab-pane>
            <a-tab-pane v-if="currentUser.isLeader" tab="我组" key="2">
                <ul class="rank">
                    <li v-for="(item, index) in groupRank">
                        <label>{{index+1}}.{{item.userName}}</label>
                        <span>{{item.count}}</span>
                    </li>
                </ul>
                <div style="width: 80%;margin: 0 auto">
                    <a-form
                            :form="form"
                            @submit="handleSubmit"
                    >
                        <a-form-item label="组员">
                            <a-select v-decorator="['loginName',{initialValue:groupRank[0].loginName}]">
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
                currentUser: JSON.parse(localStorage.getItem('user'))
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
            logout(){
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                this.$router.replace('/login');
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        created: function () {
            console.log('创建主页');
            this.Api.User.rank(this.currentUser).then(res => {
                this.rankList = res.allUser;
                this.groupRank = res.groupUser;
            });
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
    .logout{
        position: absolute;
        top: 13px;
        right: 20px;
    }
</style>