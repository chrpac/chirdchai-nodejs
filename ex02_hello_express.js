var express = require("express");
var app = express();

app.get('/', function(req,res){
  res.end("Hi");
});

app.get('/profile', function(req,res){
  res.end("Hi, My name is LEK");
});

app.post('/profile', function(req, res){
  res.json({result: 'post success'});
})

app.delete('/profile', function(req, res){
  res.json({result: 'delete success'});
})

app.get('/login', function(req,res){
  res.end("Please login with your username and password");
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});