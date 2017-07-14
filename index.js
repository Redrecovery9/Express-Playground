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

server.post('/math/sum', function(req, res) {
  var n = req.query.n
  var result = 0
  for (var i = 0; i < n.length; i++) {
  result += parseFloat(n[i])
  }
  res.send(String(result))
})

server.patch('/math/volume/:num1/:num2/:num3', function(req, res) {
  var number1 = parseFloat(req.params.num1)
  var number2 = parseFloat(req.params.num2)
  var number3 = parseFloat(req.params.num3)
  res.send(String(number1 * number2 * number3))
})

server.listen(port);
