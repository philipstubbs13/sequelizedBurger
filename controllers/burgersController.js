// Import the model (burger.js) to use its database functions.
var db = require("../models");

//Require express
var express = require("express");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.
  //GET route to get burgers from database.
  app.get("/", function(req, res) {
    db.Burger.findAll({
    }).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  }); 

  //POST route to create/add a burger.
  app.post("/api/burgers", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    console.log("Burger name: " + req.body.burger_name);
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(result) {
      res.json({ id: result.insertId });
    });
  });

  //PUT route to update burger devoured state.
  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.redirect("/");
    });
});

  // //DELETE route to throw away a burger.
  // app.delete("/api/burgers/:id", function(req, res) {

  // });
}



