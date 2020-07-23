var express = require('express');
var app = express();

app.route('/test')
.get(function(req, res){
  res.end("get");
})
.post(function(req, res){
  res.end("post");
})
.put(function(req, res){
  res.end("put");
})
.delete(function(req, res){
  res.end("delete");
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

