import React, { useState } from "react";
import styles from "../assets/ModalWindow.module.scss";

const AddEmployee = props => {
  const initialFormState = { id: null, firstName: "", lastName: "" };
  const [employee, setEmployee] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  return (
    <form className={styles.form}
      onSubmit={event => {
        event.preventDefault();
        if (!employee.firstName || !employee.lastName) return;

        props.addEmployee(employee);
        setEmployee(initialFormState);
      }}
    >
      <label>First Name</label>
      <input type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} />
      <label>Last Name</label>
      <input type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} />
      <button>Add new employee</button>
    </form>
  );
};

export default AddEmployee;
