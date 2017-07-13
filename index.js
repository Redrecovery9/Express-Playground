var express = require('express');
var server = express();
var port = 8080;

server.get('/math/pi',function(req, res){
  res.send(`${Math.PI}`);
})

server.get('/math/calculate', function(req, res) {
  var oper = req.query.operation
  var x = parseFloat(req.query.x)
  var y = parseFloat(req.query.y)
  if (oper === 'add'){
    res.send(`${x + y}`)
  } else if (oper === 'subtract') {
    res.send(`${x - y}`)
  } else if (oper === 'divide') {
    res.send(`${x / y}`)
  } else if (oper === 'multiply') {
    res.send(`${x * y}`)
  } else {
    res.send(`${x + y}`)
  }

})

server.listen(port);
