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
        if (username === 'admin') {
            if (password !== 'ball') {
                res.data.status = 500;
                res.data.data = '用户名或密码错！';
            } else {
                res.data.status = 200;
                res.data.user = { "loginName": "admin", "userName": "管理员", "isAdmin": true };
            }
            return res;
        }
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
        let { loginName, add, leader } = req;
        add = Number(add);
        let groupUser = JSON.parse(fs.readFileSync(__dirname + `/${leader}.json`, 'utf8')).list;
        let total = 0, max = Number(groupUser.length * 20);
        groupUser.forEach((item) => {
            total += Number(item.count);
        });
        if (total >= max) {
            return {
                status: 500,
                data: "超预算啦！"
            }
        }
        if (total + add > max) {
            add = max - total;
        }
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
    '/user/clear': function (req) {
        groupA.forEach((item) => {
            item.count = 0;
        });
        groupB.forEach((item) => {
            item.count = 0;
        });
        fs.writeFileSync(__dirname + `/chirh.json`, JSON.stringify({
            list: groupA
        }));
        fs.writeFileSync(__dirname + `/jiangwz.json`, JSON.stringify({
            list: groupB
        }));
        refresh();
        return {
            status: 200,
            data: {
                allUser
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