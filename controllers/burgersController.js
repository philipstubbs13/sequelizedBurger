// Import the model (burger.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.
  //GET route to get burgers from database.
  app.get("/", function(req, res) {
    db.Burger.findAll({
    }).then(function(result) {
      res.render("index", { burgers: result });
    });
  }); 

  //POST route to create/add a burger.
  // app.post("/api/burgers", function(req, res) {

  // });

  // //PUT route to update burger devoured state.
  // app.put("/api/burgers/:id", function(req, res) {

  // });

  // //DELETE route to throw away a burger.
  // app.delete("/api/burgers/:id", function(req, res) {

  // });
}



