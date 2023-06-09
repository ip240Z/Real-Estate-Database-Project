var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Sequelize } = require("sequelize");
// const {*tables*} = require("models");




var indexRouter = require('./routes/index');
var agentsRouter = require('./routes/agents');
var clientsRouter = require('./routes/clients');
var propertiesRouter = require('./routes/properties')

var app = express();

const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/agents', agentsRouter);
app.use('/clients', clientsRouter);
app.use('/properties', propertiesRouter);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

module.exports = app;
