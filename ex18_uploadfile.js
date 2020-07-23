var express = require('express');
var formidable = require('formidable');
var path = require('path');
var app = express();
var fs = require("fs");
app.use(express.static('upload'));


app.post('/upload',function(req, res){
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(JSON.stringify(files));

    var newname = Date.now();
    
    var oldpath = files.filetoupload.path;
    //var newpath = path.join(__dirname, "./upload/download.jpeg");
    var newpath = path.join(__dirname, "./upload/" + newname.toString() + "." + files.filetoupload.name.split('.').pop());
    
    fs.rename(oldpath, newpath);
    
    res.send(JSON.stringify(files));
  });
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})