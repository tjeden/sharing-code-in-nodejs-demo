var requirejs = require('requirejs'), 
    http = require('http'), 
    jade = require('jade'),
    express = require('express'),
    fs = require("fs");

// Boiler plate stuff - as per r.js's instructions
requirejs.config({ nodeRequire: require });


var ClientTask = null;
requirejs(["./models/client/task"], function(task) {
  ClientTask = task;
});

var Task = null;
requirejs(["./models/server/task"], function(task) {
  Task = task;
  Task.prototype = new ClientTask();
});

app = express.createServer();

app.get('/', function(req, res) {
  var task = new Task();
  
  // Both method should work
  task.create();
  task.DBconnect();

  res.render('index.jade');
});

app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/scripts/models", express.static(__dirname + '/models/client'));

app.listen('7777');

console.log('Up and running.');
