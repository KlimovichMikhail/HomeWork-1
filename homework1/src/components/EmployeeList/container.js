// @ts-nocheck
import { useDispatch,useSelector} from "react-redux";
import React from "react";
import {  deleteEmployee,setCurrentEmployee,getEmployeesList} from "../../redux/action/employee";
import EmployeeList from "./component";

const EmployeeListContainer = () => {
  const dispatch = useDispatch();
  const employees =useSelector(state => state.employeesPage.employees);
	const employeeLoader = useSelector((state) => state.employeesPage.employeeLoader);
	const isError = useSelector((state) => state.employeesPage.isError);


  const onEdit = employee => {
    dispatch(setCurrentEmployee(employee.id, employee.firstName, employee.lastName));
  };
  const onDelete = id => {
    dispatch(deleteEmployee(id));
  };
  const getEmployees = () => {
    dispatch(getEmployeesList())
	}
  return (
    <EmployeeList employees={employees} 
    onEdit={onEdit} 
    onDelete={onDelete} 
    isError ={isError} 
    employeeLoader={employeeLoader}
    getEmployees={getEmployees} />
    
  );
};

export const container = EmployeeListContainer;
