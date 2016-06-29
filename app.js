// Sample node.js web app for ShellStack demo
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.get('/', function(req, res) {
});

app.listen(8080);
module.exports.getApp = app;