/* eslint-disable no-console */
module.exports = {
    '/login': function (req) {
        console.log(req);
        return {
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