var express = require('express');
var http    = require('http');

var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function() {
  console.log('the server is running on port ', app.get('port'));
  //document.write("Bangg!");
  //document.write(app.get('port'));
});
app.get('/', function(req, res){
  res.send('hello world!');
});
