import React, { useState } from "react";
import Employee from "./Employee";
import ModalWindow from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import styles from "../assets/EmployeeList.module.scss";

const EmployeeList = () => {
  const employeesData = [
    { id: 1, firstName: "Ivan", lastName: "Nefedov" },
    { id: 2, firstName: "Nikita", lastName: "Zalubov" },
    { id: 3, firstName: "Andrew", lastName: "Taranow" },
    { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
    { id: 5, firstName: "Artem", lastName: "Haliman" }
  ];

  const initialFormState = { id: null, firstName: "", lastName: "" };

  const [employees, setEmployees] = useState(employeesData);
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const editRow = employee => {
    setEditing(true);

    setCurrentEmployee({ id: employee.id, firstName: employee.firstName, lastName: employee.lastName });
  };
  const addEmployee = employee => {
    employee.id = employees.length + 1;
    setEmployees([...employees, employee]);
  };
  const deleteEmployee = id => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };
  const updateEmployee = (id, updatedEmployee) => {
    setEditing(false);

    setEmployees(employees.map(employee => (employee.id === id ? updatedEmployee : employee)));
  };

  return (
    <div className={styles.heading}>
      <h1>CRUD App </h1>
      <div className="flex-row">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditEmployee setEditing={setEditing} currentEmployee={currentEmployee} updateEmployee={updateEmployee} />
          </div>
        ) : (
          <div className="flex-large">
            <h2>Add employee</h2>
            <ModalWindow addEmployee={addEmployee} />
          </div>
        )}
        <div className="flex-large">
          <h2>View employees</h2>
          <Employee employees={employees} editRow={editRow} deleteEmployee={deleteEmployee} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
