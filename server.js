var express= require("express");
var methOver= require("method-override");
var bodyPars= require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyPars.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methOver('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controller/burger-controller.js');

app.use('/', routes);

app.listen(port);