var express = require('express');
var app = express();

// root path
app.get('/', function(req, res){
  res.end( 'default' );
});

// fix path 
app.get('/api/add', function(req, res){
  res.end('/api/add');
});


// ? = optional
// ex: /abcd or /acd
app.get('/ab?cd', function(req, res){
  res.end('/ab?cd');
});

// + with same...
// ex: /x1cd, x11cd, x11111cd (not call if xcd only) 
app.get('/x1+c?d', function(req, res){
  res.end('/x1+c?d , This route path will match ex: /x1cd, x11cd, x11111cd');
});

// * = any
app.get('/ab*cd', function (req, res) {
  res.end('/ab*cd, This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.');
})

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});


