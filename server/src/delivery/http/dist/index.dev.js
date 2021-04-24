"use strict";

var express = require("express");

var employeesRoutes = require("./employees");

var app = express.Application = express();
app.use(express.json({
  limit: "10mb"
}));
app.use("/api/employees", employeesRoutes);
module.exports = app;