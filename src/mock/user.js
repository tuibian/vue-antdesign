/* eslint-disable no-console */
module.exports = {
    '/user/login': function (req) {
        console.log(req);
        return {
            delay: 10000,
            data: {
                token: new Date().getTime()
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