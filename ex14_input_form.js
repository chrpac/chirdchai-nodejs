var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, "/public/login.html"));
});



app.post('/authen', function(req, res){
  res.json({username: req.body.username, password: req.body.password, confirm: req.body.confirm_password});
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
