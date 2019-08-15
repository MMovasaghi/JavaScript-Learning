var express = require('express');

var app = express();

require('./middleware')(app);

require('./routes')(app);

require('./services/errorhandler')(app);

module.exports = app;
