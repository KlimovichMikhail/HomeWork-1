import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/Employee.module.scss";
import Loader from "../Loader";

const EmployeeList = ({ employees, onEdit, onDelete, isError, employeeLoader, getEmployees }) => {
  useEffect(() => {
    getEmployees();
  }, []);
  
  return (
    <div className="flex-large">
      <h2>Employee List</h2>
      {isError ? (
        <div className={styles.error}>EMPLOYEES NOT FAUND</div>
      ) : employeeLoader ? (
        <Loader />
      ) : (
        <div className={styles.employee}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map(employee => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>
                      <Link to={"edit"}>
                        <button
                          className="button muted-button"
                          onClick={() => {
                            onEdit(employee);
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                      <button className="button muted-button" onClick={() => onDelete(employee.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>No employees</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default EmployeeList;
