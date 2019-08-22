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
            data: res
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
            data: res
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
            data: res
        }
    }
};