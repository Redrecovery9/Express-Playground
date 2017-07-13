var express = require(‘express’);
var server = express();
var port = 8080;

server.get(‘/math/pi’,function(req,res){
  res.send(`${Math.PI}`);
})

server.listen(port);
