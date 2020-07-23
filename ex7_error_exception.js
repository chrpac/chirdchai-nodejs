var express = require('express');
var path = require('path');
var app = express();

app.get('/profile', function(req, res){
  res.end('/profile');
});

// any unroutes will be replied with this handler
app.use(function(req, res, error){
  //res.end('Page not found');
  res.sendFile(path.join(__dirname, "/public/page_not_found.html"));
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

