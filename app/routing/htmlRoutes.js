// Dependencies
// =============================================================
<<<<<<< HEAD
// var path = require("path");
=======
//var path = require("path");
>>>>>>> 4cfc2634d050c7dc4b6fb09fc76ab44b681a8fb5

// Routes
// =============================================================
module.exports = function(app) {

// Basic route that sends the user first to the AJAX Page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../home.html"));
  });

  app.get("/map", function (req, res) {
    res.sendFile(path.join(__dirname, "../../map.html"));
  });
  app.get("/carousel", function (req, res) {
    res.sendFile(path.join(__dirname, "../../carousel.html"));
  });
};
