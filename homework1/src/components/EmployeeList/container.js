// @ts-nocheck
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {  deleteEmployee,setCurrentEmployee} from "../../redux/action/employee";
import EmployeeList from "./component";

const EmployeeListContainer = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employeesPage.employees);
  const onEdit = employee => {
    dispatch(setCurrentEmployee(employee.id, employee.firstName, employee.lastName));
  };
  const onDelete = id => {
    dispatch(deleteEmployee(id));
  };
  return (
    <EmployeeList employees={employees} onEdit={onEdit} onDelete={onDelete}/>
  );
};
export const container = EmployeeListContainer;
