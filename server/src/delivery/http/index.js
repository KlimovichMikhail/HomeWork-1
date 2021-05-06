const express = require("express");
const employeesRoutes = require("./employees");

const app = (express.Application = express());
app.use(express.json({ limit: "10mb" }));

app.use("/api/employees", employeesRoutes);

module.exports = app;