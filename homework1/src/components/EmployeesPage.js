import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import styles from "../assets/EmployeeList.module.scss";
import { v4 as uuidv4 } from "uuid";

const EmployeesPage = () => {
  const employeesData = [
    { id: uuidv4(), firstName: "Ivan", lastName: "Nefedov" },
    { id: uuidv4(), firstName: "Nikita", lastName: "Zalubov" },
    { id: uuidv4(), firstName: "Andrew", lastName: "Taranow" },
    { id: uuidv4(), firstName: "Mihail", lastName: "Ptuskin" },
    { id: uuidv4(), firstName: "Artem", lastName: "Haliman" }
  ];

  const initialFormState = { id: null, firstName: "", lastName: "" };

  const [employees, setEmployees] = useState(employeesData);
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState);
  const [isOpen, setIsOpen] = useState(false);

  const editEmployee = employee => {
    setIsOpen(true);
    setCurrentEmployee({ id: employee.id, firstName: employee.firstName, lastName: employee.lastName });
  };

  const addEmployee = employee => {
    employee.id = uuidv4();
    setEmployees([...employees, employee]);
  };
  const deleteEmployee = id => {
    setIsOpen(false);
    setEmployees(employees.filter(employee => employee.id !== id));
  };
  const updateEmployee = (id, updatedEmployee) => {
    setIsOpen(false);
    setEmployees(employees.map(employee => (employee.id === id ? updatedEmployee : employee)));
  };

  return (
    <div className={styles.heading}>
      <h1>CRUD App </h1>
      <div className="flex-row">
        <EditEmployee isOpen={isOpen} setIsOpen={setIsOpen} currentEmployee={currentEmployee} updateEmployee={updateEmployee} />
        <AddEmployee isOpen={isOpen} addEmployee={addEmployee} />
        <EmployeeList employees={employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />
      </div>
    </div>
  );
};

export default EmployeesPage;
