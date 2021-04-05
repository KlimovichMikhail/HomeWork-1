import React, { useState } from "react";
import styles from "../assets/ModalWindow.module.scss";

const AddEmployee = props => {
  const initialFormState = { id: null, firstName: "", lastName: "" };
  const [employee, setEmployee] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  const handleFormChange = event => {
    event.preventDefault();
    if (!employee.firstName || !employee.lastName) return;
    props.addEmployee(employee);
    setEmployee(initialFormState);
  };

  return (
    <div>
      <h2>Add employee</h2>
      <form className={styles.form} onSubmit={handleFormChange}>
        <label>First Name</label>
        <input type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} />
        <label>Last Name</label>
        <input type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} />
        <button>Add new employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
