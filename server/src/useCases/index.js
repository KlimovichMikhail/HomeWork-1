const EmployeeService = require("./employeeService");

class UseCases {
  EmpmloyeeService;
  constructor() {
    this.EmployeeService = EmployeeService;
  }
}
module.exports = new UseCases();