var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

// HTTP GET (call-back function standard javascript)
app.get('/', function(req, res){
  res.end("welcome")
});

// HTTP GET (call-back function lambada)
app.get('/profile', (req, res)=>{
  res.end("profile")
});

// HTTP GET (call-back function lambada)
app.get('/login', (req, res)=>{
  res.end("username: " + req.query.username + ", password: " + req.query.password);
});

app.post('/post', function(req, res){
  res.end("post: username: " + req.body.username + ", password: " + req.body.password);
});

app.put('/post', function(req, res){
  res.end("put: username: " + req.body.username + ", password: " + req.body.password);
});

app.delete('/post', function(req, res){
  res.end("delete: username: " + req.body.username + ", password: " + req.body.password);
});

// HTTP Methods (GET/POST/PUT/DELETE)

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});