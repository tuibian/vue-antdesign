/* eslint-disable no-console */
module.exports = {
    '/tranfer': function (req) {
        console.log(req);
        const res = Object.assign(req, {
            interest: 1,
            interest_tax: 1,
            out_blance: 100,
            in_blance: 200
        });
        return {
            data: res,
            bill: {
                transType: '转账',
                transInfo: '转账信息',
                currency: '人民币',
                amount: res.amount || '--',
                auth: 'XX授权'
            }
        }
    },
    '/active': function (req) {
        console.log(req);
        const res = Object.assign(req, {
            name: '皮卡丘',
            fwfs: '柜面服务',
            qkfs: 'ATM',
            cllx: '紧急处理'
        });
        return {
            data: res,
            bill: {
                transType: '激活',
                transInfo: '激活信息',
                currency: '人民币',
                amount: res.amount || '--',
                auth: 'AA授权'
            }
        }
    },
    '/openAccount': function (req) {
        console.log(req);
        const res = Object.assign(req, {
            xxh: '666',
            dqzh: '621226965986953',
            dqzhll: '4.3%'
        });
        return {
            data: res,
            bill: {
                transType: '开户',
                transInfo: '开户信息',
                currency: '人民币',
                amount: res.amount || '--',
                auth: 'BB授权'
            }
        }
    }
};