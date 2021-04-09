import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import styles from "../assets/EmployeeList.module.scss";
import { v4 as uuidv4 } from "uuid";
import { getIsOpen, getEmployees, getCurrentEmployee } from "../redux/selectors/employees";
import { deleteEmployee, setCurrentEmployee, addEmployee, updateEmployee } from "../redux/action/employee";

const EmployeesPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector(getEmployees);
  const isOpen = useSelector(getIsOpen);
  const currentEmployee = useSelector(getCurrentEmployee);
  const onEdit = employee => {
    dispatch(setCurrentEmployee(employee.id, employee.firstName, employee.lastName));
  };
  const onDelete = id => {
    dispatch(deleteEmployee(id));
  };
  const onSave = employee => {
    employee.id = uuidv4();
    dispatch(addEmployee(employee));
  };
  const onChange = (id, firstName, lastName) => {
    dispatch(updateEmployee(id, firstName, lastName));
  };
  return (
    <div className={styles.heading}>
      <h1>CRUD App </h1>
      <div className="flex-row">
        <EditEmployee isOpen={isOpen} currentEmployee={currentEmployee} onChange={onChange} />
        <AddEmployee isOpen={isOpen} onSave={onSave} />
        <EmployeeList employees={employees} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default EmployeesPage;
