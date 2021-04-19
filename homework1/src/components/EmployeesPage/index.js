import React from "react";
import EmployeeList from "../EmployeeList";
import { Link } from "react-router-dom";
import styles from "../../assets/ModalWindow.module.scss";

const EmployeesPage = () => {
  return (
    <div className={styles.heading}>
      <h1>CRUD App </h1>
      <div className="flex-row">
        <EmployeeList />
        <Link to={"/add"}>+ Add employee</Link>
      </div>
    </div>
  );
};

export default EmployeesPage;
