var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './public')

app.get('/',function(req,res){
   res.render('index2', {
     header: "CodeMobiles Training Center",
     description: 'Our courses',
     courses: ['Android Programming', 'iOS Programming', ' NodeJS Programming']
   })
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
