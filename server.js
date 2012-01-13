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

app.get('/scripts/require.js', function(req, res){
  fs.readFile('./node_modules/requirejs/require.js', function(err, file) {  
    if(err) {  
      console.log('err');
    }  
    res.send(file);
  });  
});

console.log(__dirname + '/scripts')
app.use("/scripts", express.static(__dirname + '/scripts'));

app.get('/scripts/task.js', function(req, res){
  fs.readFile('./models/task.js', function(err, file) {  
    if(err) {  
      console.log('err');
    }  
    res.send(file);
  });  
});

app.get('/scripts/2main.js', function(req, res){
  fs.readFile('./scripts/main.js', function(err, file) {  
    if(err) {  
      console.log('err');
    }  
    res.send(file);
  });  
});

app.listen('7777');

console.log('Up and running.');
