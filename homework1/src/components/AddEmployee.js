// @ts-nocheck
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from "react";
import styles from "../assets/ModalWindow.module.scss";
import { addEmployee} from "../redux/action/employee";
import { v4 as uuidv4 } from "uuid";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const onSave = employee => {
    employee.id = uuidv4();
    dispatch(addEmployee(employee));
  };
  const isOpen = useSelector(state=>state.employeesPage.isOpen)
  const initialFormState = { id: null, firstName: "", lastName: "" };
  const [employee, setEmployee] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  const handleFormChange = event => {
    event.preventDefault();
    if (!employee.firstName || !employee.lastName) return;
    onSave(employee);
    setEmployee(initialFormState);
  };

  return (
    !isOpen && (
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
    )
  );
};

export default AddEmployee;
