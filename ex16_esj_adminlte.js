var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, "/adminlte")))

app.set('view engine', 'ejs');
app.set('views', './adminlte')

app.get('/',function(req,res){
   res.render('index2', {header: "CodeMobiles"
   })
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
