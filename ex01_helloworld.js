var http = require('http'); 

http.createServer(function(req, res){
  res.end("Hi, CodeMobiles");
}).listen(3000);
console.log("Server is running at port 3000");