var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use((_, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/test-status', (req, res) => {
	res.sendStatus(200);
});

app.get('/test-data', (req, res) => {
	res.json({ test: true });
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});