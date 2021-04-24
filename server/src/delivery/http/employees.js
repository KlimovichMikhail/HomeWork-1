const express = require("express");
const router = express.Router();

//Get employees
router.get("", async (req, res) => {
  const error = undefined;
  const value = [
    { id: 1, firstName: "Ivan", lastName: "Nefedov" },
    { id: 2, firstName: "Nikita", lastName: "Zalubov" },
    { id: 3, firstName: "Andrew", lastName: "Taranow" },
    { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
    { id: 5, firstName: "Artem", lastName: "Haliman" }
  ];

  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

//Create employee
router.post("/create-employee", async (req, res) => {
  const error = undefined;
  const value = true;
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});
module.exports = router;
