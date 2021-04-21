import React, { useState, useEffect } from "react";

import styles from "../../assets/ModalWindow.module.scss";

const EditEmployee = ({ isOpen, currentEmployee, onChange }) => {
  const initialFormState = { id: null, firstName: "", lastName: "" };
  const [employee, setEmployee] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  useEffect(
    () => {
      setEmployee(currentEmployee);
    },
    [currentEmployee]
  );
  const handleFormChange = event => {
    event.preventDefault();
    onChange(employee.id, employee.firstName, employee.lastName);
  };
  return (
    isOpen && (
      <div className={styles.heading}>
        <h2>Edit employee</h2>
        <form className={styles.form} onSubmit={handleFormChange}>
          <label>First Name</label>
          <input type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} />
          <label>Last Name</label>
          <input type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} />
          <button>Edit employee</button>
        </form>
      </div>
    )
  );
};

export default EditEmployee;
