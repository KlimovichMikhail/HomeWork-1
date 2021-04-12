import React from "react";
import styles from "../../assets/Employee.module.scss";

const EmployeeList = ({employees, onEdit,onDelete}) => {
  
  return (
    <div className="flex-large">
      <h2>Employee List</h2>
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
                    <button
                      className="button muted-button"
                      onClick={() => {
                        onEdit(employee);
                      }}
                    >
                      Edit
                    </button>
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
    </div>
  );
};
export default EmployeeList;