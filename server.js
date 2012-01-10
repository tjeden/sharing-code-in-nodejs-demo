var http = require('http'), 
    jade = require('jade'),
    express = require('express'),
    fs = require("fs"), 
    Task = require('./app/models/task');

app = express.createServer();

app.get('/', function(req, res) {
  var task = new Task();
  task.create();

  res.render('index.jade');
});

app.get('/task.js', function(req, res){
  req.accepts('text/javascript');
  fs.readFile('./app/models/task.js', function(err, file) {  
    if(err) {  
      console.log('err');
    }  
    res.send(file);
  });  
});

app.listen('7777');

var bundle = require('browserify')(__dirname + '/app/models/task.js');
app.use(bundle);

console.log('Up and running.');
