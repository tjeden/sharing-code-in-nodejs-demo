var http = require('http'), 
    jade = require('jade'),
    express = require('express'),
    Task = require('./app/models/task');

app = express.createServer();

app.get('/', function(req, res) {
  var task = new Task();
  task.create();

  res.render('index.jade');
});

app.listen('7777');
console.log('Up and running.');
