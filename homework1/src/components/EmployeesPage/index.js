import React from "react";
import EmployeeList from "../EmployeeList";
import AddEmployee from "../AddEmployee";
import EditEmployee from "../EditEmployee";
import styles from "../../assets/EmployeeList.module.scss";

const EmployeesPage = () => {
  return (
    <div className={styles.heading}>
      <h1>CRUD App </h1>
      <div className="flex-row">
        <EditEmployee/>
        <AddEmployee/>
        <EmployeeList/>
      </div>
    </div>
  );
};

export default EmployeesPage;
