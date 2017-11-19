var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello Team I have passed the Unit Test level, Now I am on SIT/UAT Server, Yours CODE');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
