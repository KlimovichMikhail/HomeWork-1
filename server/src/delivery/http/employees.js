const express = require("express");
const router = express.Router();
const UseCases = require('../../useCases')

router.get("", async (req, res) => {
  const { value, error } = await UseCases.EmployeeService.getList();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.delete("/:id", async (req, res) => {
  const { value, error } = await UseCases.EmployeeService.deleteEmployee(req.params.id)
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.put("/:id", async (req, res) => { 
  const { value, error } = await UseCases.EmployeeService.editEmployee(req.params.id, req.params.firstName, req.params.lastName);
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.post("", async (req, res) => {
const { value, error } = await UseCases.EmployeeService.createEmployee(req.params.firstName, req.params.lastName);
if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.get("/:id", async (req, res) => {
  const { value, error } = await UseCases.EmployeeService.getEmployee(req.params.id)
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

module.exports = router;
