const express = require("express");
const morgan = require('morgan');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors = require('cors');
const mongoose = require("mongoose");
const mysql = require('mysql');
const favicon = require('serve-favicon');
const expressValidator = require('express-validator');
const fs = require('fs');
const path = require('path');
const passport = require("passport");
const session = require("express-session");
const compression = require('compression');
const config = require('./config/app.config');
const dbConfig = require('./config/dbconfig');
const routes = require('./routes/routes');

//Connect to MongoDB 

mongoose.connect('mongodb://localhost:27017/lalaworld');

//Setting Access Control Header 

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With Content-Type, Accept");
    next();
});

//Body-Parser config
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

//Setting Public Directory

app.use(express.static(__dirname + "/public"));

//Configure express session

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

//Initialise Passport and Use Session

app.use(passport.initialize());
app.use(passport.session());

//Using Express Validator

app.use(expressValidator());

//Using CORS

app.use(cors());

//Logger function
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
})
app.use(morgan('dev', {
    stream: accessLogStream
}))

//Using PUG Template Engine

app.set("view engine", "pug");

//Router Initialization

app.use(routes);

//Server Initialization

app.listen(config.port, config.host, () => {
    console.log('Server started on ' + new Date());
    console.log(`server is running at http://${config.host}:${config.port}`);
});