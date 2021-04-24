"use strict";

var express = require("express");

var router = express.Router(); //Get employees

router.get("", function _callee(req, res) {
  var error, value;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          error = undefined;
          value = [{
            id: 1,
            firstName: "Ivan",
            lastName: "Nefedov"
          }, {
            id: 2,
            firstName: "Nikita",
            lastName: "Zalubov"
          }, {
            id: 3,
            firstName: "Andrew",
            lastName: "Taranow"
          }, {
            id: 4,
            firstName: "Mihail",
            lastName: "Ptuskin"
          }, {
            id: 5,
            firstName: "Artem",
            lastName: "Haliman"
          }];

          if (!error) {
            _context.next = 5;
            break;
          }

          res.status(500).json(error || new Error("UC undefined error"));
          return _context.abrupt("return");

        case 5:
          res.status(200).json(value);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}); //Create employee

router.post("/create-employee", function _callee2(req, res) {
  var error, value;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          error = undefined;
          value = true;

          if (!error) {
            _context2.next = 5;
            break;
          }

          res.status(500).json(error || new Error("UC undefined error"));
          return _context2.abrupt("return");

        case 5:
          res.status(200).json(value);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;