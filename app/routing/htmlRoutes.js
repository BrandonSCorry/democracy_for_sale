// Dependencies
// =============================================================
// var path = require("path");

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