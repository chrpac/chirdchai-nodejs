var express = require('express');
var app = express();

app.all('/secured/*', function(req, res, next){
  console.log('Accessing the secret section');  

  if(req.query.username == "admin"){
    next();
  }else{
    res.end('You need to login first!\n');
  }
});

app.get('/', function(req, res){    
  res.end("Home Page");
});

app.get('/secured/profile', function(req, res){
  res.end('Profile Page');
});

app.get('/secured/inbox', function(req, res){
  res.end('Inbox Page');
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
