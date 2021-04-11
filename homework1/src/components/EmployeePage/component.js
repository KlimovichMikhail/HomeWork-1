import React from "react";
import EmployeeListContainer from "../EmployeeList/container";
import AddEmployeeContainer from "../AddEmployee/container";
import EditEmployeeContainer from "../EditEmployee/container";
import styles from "../../assets/EmployeeList.module.scss";

const EmployeesPage = () => {
  return (
    <div className={styles.heading}>
      <h1>CRUD App </h1>
      <div className="flex-row">
        <EditEmployeeContainer />
        <AddEmployeeContainer />
        <EmployeeListContainer />
      </div>
    </div>
  );
};

export default EmployeesPage;
