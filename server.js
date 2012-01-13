var requirejs = require('requirejs'), 
    http = require('http'), 
    jade = require('jade'),
    express = require('express'),
    fs = require("fs");

// Boiler plate stuff - as per r.js's instructions
requirejs.config({ nodeRequire: require });

var Task = null;

requirejs(["./models/task"], function(task) {
  Task = task;
});

app = express.createServer();

app.get('/', function(req, res) {
  var task = new Task();
  task.create();

  res.render('index.jade');
});

app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/scripts/models", express.static(__dirname + '/models'));

app.listen('7777');

console.log('Up and running.');
