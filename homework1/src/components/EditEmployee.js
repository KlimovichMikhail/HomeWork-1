import React, { useState,useEffect } from "react";
import styles from "../assets/ModalWindow.module.scss";

const EditEmployee = props => {
  const initialFormState = { id: null, firstName: "", lastName: "" };
  const [employee, setEmployee] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;

    setEmployee({ ...employee, [name]: value });
  };
  useEffect(() => {
    setEmployee(props.currentEmployee)
  }, [props])
  return (
    <form className={styles.form}
      onSubmit={event => {
        event.preventDefault();
        props.updateEmployee(employee.id, employee);
      }}
    >
      <label>First Name</label>
      <input type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} />
      <label>Last Name</label>
      <input type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} />
      <button>Edit employee</button>
    </form>
  );
};

export default EditEmployee;
