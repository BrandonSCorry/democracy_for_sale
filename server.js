// Dependencies
// =============================================================
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");
var $ = require("jquery");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, "./app/public")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//include route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
