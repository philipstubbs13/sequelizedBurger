// Import the model (burger.js) 
var db = require("../models");

//Require express
var express = require("express");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.
  //GET route to get burgers from database.
  app.get("/", function(req, res) {
      db.Burger.findAll({}).then(function(results) {
        //console.log(results);
        res.render("index", {
          burgers: results,
        });
      }).catch(function(err){
        console.log(err);
      }); 
  }); 

  //POST route to create/add a burger.
  app.post("/api/burgers", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    console.log("Burger name: " + req.body.burger_name);
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      console.log(results);
      //results here would be the newly created burger
      res.redirect('/');
    });
  });

  //PUT route to update burger devoured state.
  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.redirect("/");
    });
});

  // //DELETE route to throw away a burger.
  // app.delete("/api/burgers/:id", function(req, res) {

  // });
}



