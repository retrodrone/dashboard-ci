// Sample node.js web app for ShellStack demo
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/assets/css'));
app.use(express.static(__dirname + '/assets/js'));
app.use(express.static(__dirname + '/assets/lib'));
app.use(express.static(__dirname + '/assets/lib/holderjs'));
app.use(express.static(__dirname + '/assets/lib/keen-js'));

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {
  });
});

app.listen(8080);
module.exports.getApp = app;