var express = require('express');
var http    = require('http');
var url     = require('url');

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
	console.log(req.url);
	res.send('hello world!');
});
