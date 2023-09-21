// Create web server
// Usage: node comments.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var comments = [];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comments);
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
