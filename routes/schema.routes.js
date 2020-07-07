const express = require("express");

let api = express.Router(),
  schemaController = require("../controllers/schema.controller");

api.use("/", schemaController.startGraphql);

module.exports = api;
