var mysql = require('mysql');

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: '10.40.248.112',
                port: '3306',
                user: 'root',
                password: 'root',
                database: 'ssodb'
            })
        },

        test_open: function (con) {
            con.connect(function (err) {
                if (err) {
                    console.error('mysql connection error :' + err);
                } else {
                    console.info('mysql is connected successfully.');
                }
            })
        }
    }
};