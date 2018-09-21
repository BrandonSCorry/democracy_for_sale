// Dependencies
// =============================================================
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");
<<<<<<< HEAD
var fs = require("fs");
var $ = require("jquery");
=======
var $ = require("jquery");

>>>>>>> 4cfc2634d050c7dc4b6fb09fc76ab44b681a8fb5

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, "./assets")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


<<<<<<< HEAD
//point to routes folder
// require("./app/routing/apiRoutes")(app);
=======
//include route files
require("./app/routing/apiRoutes")(app);
>>>>>>> 4cfc2634d050c7dc4b6fb09fc76ab44b681a8fb5
require("./app/routing/htmlRoutes")(app);


//server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
