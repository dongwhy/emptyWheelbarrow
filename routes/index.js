var express = require('express');
var router = express.Router();

module.exports = router;
var mysql_dbc = require('../config/database')();
var connection = mysql_dbc.init();

mysql_dbc.test_open(connection);
/*
router.get('/', function(req, res){
  var sql = 'SELECT * FROM user';
  console.log('router get / 접속');
  connection.query(sql,function (error, rows, fields) {
    console.log('rows.length : ' + rows.length);
    var result = [];

    if (!error) {

      console.log("result-------");

      for (var i = 0; i < rows.length; i++) {
        // console.log(res.json(rows[i]));
        result.push(rows[i]);
        console.log(result[i]);
      }
      var json_result = {
        'result' : result
      };

      res.render('index', json_result);

    } else {
      console.log('query error : ' + error);
    }
  });
})*/

f


module.exports = router;
