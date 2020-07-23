var express = require('express');
var path  = require('path');
var app = express();
app.use(express.static(path.join(__dirname, "/public")));


app.get('/download', function(req, res){
  res.download(path.join(__dirname, '/public/images/download.png')); // Prompt a file to be downloaded.
});

app.get('/send', function(req, res){
  res.send("Welcome, I juse called Send");
});

app.get('/end', function(req, res){
  res.write("Hi, ");
  res.write(" Lek");
  res.write(" How are you?");
  //res.end();
  res.end(" Welcome, I juse called End");
});

app.get('/html', function(req, res){
  res.setHeader("Content-Type", "text/html");
  res.write("<b><font color='#FF0000'>Html</font></b>")
  res.end();
});

app.get('/redirect', function(req, res){
  res.redirect('/json');
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/json', function(req, res){
  var data = {result: "ok", message: "test"}
  res.json(data);
});






var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
