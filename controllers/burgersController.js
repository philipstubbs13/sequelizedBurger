//Require express
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//GET route to get burgers from database.
router.get("/", function(req, res) {

});

//POST route to create/add a burger.
router.post("/api/burgers", function(req, res) {

});

//PUT route to update burger devoured state.
router.put("/api/burgers/:id", function(req, res) {

});

//DELETE route to throw away a burger.
router.delete("/api/burgers/:id", function(req, res) {

});


// Export routes for server.js to use.
module.exports = router;

