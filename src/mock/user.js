/* eslint-disable no-console */
var fs = require('fs');
let groupA, groupB, allUser;

function refresh() {
    groupA = JSON.parse(fs.readFileSync(__dirname + '/chirh.json', 'utf8')).list;
    groupB = JSON.parse(fs.readFileSync(__dirname + '/jiangwz.json', 'utf8')).list;
    allUser = [...groupA, ...groupB].sort((a, b) => b.count - a.count);
}

refresh();
module.exports = {
    '/user/login': function (req) {
        let res = {
            data: {
                token: new Date().getTime()
            }
        };
        const { username, password } = req;
        const user = allUser.find(user => user.loginName === username);
        if (user) {
            if (user.isLeader && password === username) {
                res.data.status = 200;
            } else if (!user.isLeader && password === '111111') {
                res.data.status = 200;
            } else {
                res.data.status = 500;
                res.data.data = '用户名或密码错！';
            }
            res.data.user = user;
        } else {
            res.data.status = 500;
            res.data.data = '用户名或密码错！';
        }
        return res;
    },
    '/user/rank': function (req) {
        refresh();
        const { loginName } = req;
        let groupUser = [];
        const user = allUser.find(user => user.loginName === loginName);
        if (user && user.isLeader) {
            groupUser = JSON.parse(fs.readFileSync(__dirname + `/${loginName}.json`, 'utf8')).list.sort((a, b) => b.count - a.count)
        }
        return {
            status: 200,
            data: {
                allUser,
                groupUser
            }
        }
    },
    '/user/add': function (req) {
        const { loginName, add, leader } = req;
        let groupUser = JSON.parse(fs.readFileSync(__dirname + `/${leader}.json`, 'utf8')).list;
        const user = groupUser.find(user => user.loginName === loginName);
        if (user) {
            user.count += Number(add);
            fs.writeFileSync(__dirname + `/${leader}.json`, JSON.stringify({
                list: groupUser
            }));
            refresh();
        } else {
            return {
                status: 500,
                data: "新增失败！"
            }
        }
        return {
            status: 200,
            data: {
                allUser,
                groupUser: groupUser.sort((a, b) => b.count - a.count)
            }
        }
    },
    '/getUserInfo': {
        // delay: 5000,
        data: {
            username: 'DVA'
        }
    }
};