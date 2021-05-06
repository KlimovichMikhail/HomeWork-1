import React from "react";
import EmployeeList from "../EmployeeList";
// import { Link } from "react-router-dom";
import styles from "../../assets/ModalWindow.module.scss";
import AddEmployee from "../AddEmployee";
import EditEmployee from "../EditEmployee";

const EmployeesPage = () => {
  return (
    <div className={styles.heading}>
      <h1>CRUD App </h1>
      <div className="flex-row">
      <AddEmployee/>
      <EditEmployee/>
        <EmployeeList />
        {/* <Link to={"/add"}>+ Add employee</Link> */}
      </div>
    </div>
  );
};

export default EmployeesPage;
