/* eslint-disable no-console */
//引入mockjs
const path = require('path'), mode = process.env.NODE_ENV;
require('dotenv').config({
    path: path.resolve(process.cwd(), mode ? '.env.' + mode : '.env')
});
const express = require('express');   //引入express
const Mock = require('mockjs');       //引入mock
const user = require('./user');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const mocks = user;
//使用mockjs模拟数据
for (let key in mocks) {
    app.use('/api' + key, function (req, res) {
        console.log('请求头：', req.headers);
        console.log('请求体：', req.body);
        if (new Date().getTime() - req.headers.token > 300000) {
            res.status(401).end();
        }
        let mockValue = mocks[key];
        if (typeof mockValue === 'function') {
            mockValue = mockValue(req.body);
        }
        mockValue.data.token = new Date().getTime();
        const { delay } = mockValue;
        if (delay) {
            setTimeout(() => {
                res.json(Mock.mock(mockValue.data));
            }, delay);
        } else {
            res.json(Mock.mock(mockValue.data));
        }
    });
}
app.listen('8090', () => {
    console.log('监听端口 8090');
});