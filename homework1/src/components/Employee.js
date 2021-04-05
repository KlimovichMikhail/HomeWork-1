import React from "react";
import styles from "../assets/Employee.module.scss";

const Employee = props => (
  <div className={styles.employee}>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length > 0 ? (
          props.employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => {
                    props.editEmployee(employee);
                  }}
                >
                  Edit
                </button>
                <button className="button muted-button" onClick={() => props.deleteEmployee(employee.id)}>
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
);

export default Employee;
