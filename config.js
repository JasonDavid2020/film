var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 //res.render('index', { title: 'Express' });
//});

var app = express();

app.get('/home', function (req, res) {
  res.render('home');
});

module.exports = router;
