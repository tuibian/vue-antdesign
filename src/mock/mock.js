/* eslint-disable no-console */
//引入mockjs
const express = require('express');   //引入express
const Mock = require('mockjs');       //引入mock
const core = require('./core');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const mocks = core;
const bills = []; // 交易回单数据
let g_delay = 0; // 全局交易延迟
//使用mockjs模拟数据
for (let key in mocks) {
    app.use('/poc' + key, function (req, res) {
        console.log('请求头：', req.headers);
        console.log('请求体：', req.body);
        // if (new Date().getTime() - req.headers.token > 300000) {
        //     res.status(401).end();
        // }
        let mockValue = mocks[key];
        if (typeof mockValue === 'function') {
            mockValue = mockValue(req.body);
        }
        const { delay } = mockValue;
        const response = Mock.mock(mockValue.data);
        if (delay || g_delay) {
            setTimeout(() => {
                res.json(response);
            }, delay || g_delay);
        } else {
            res.json(response);
        }
        if (mockValue.bill) {
            bills.push(mockValue.bill);
        }
    });
}
app.use('/poc/bills', function (req, res) {
    res.json(bills);
});
app.use('/poc/setDelay', function (req, res) {
    if (req.body.delay) {
        g_delay = req.body.delay;
    } else {
        g_delay = 0;
    }
    res.json(Mock.mock({ g_delay }));
});
app.listen('8090', () => {
    console.log('监听端口 8090');
});