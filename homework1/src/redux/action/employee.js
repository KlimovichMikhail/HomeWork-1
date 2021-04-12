import { DELETE_EMPLOYEE, ADD_EMPLOYEE, SET_CURRENT_EMPLOYEE, UPDATE_EMPLOYEE } from "../actionTypes/employee";

export function addEmployee(id) {
  return {
    type: ADD_EMPLOYEE,
    payload: id
  };
}

export function deleteEmployee(id) {
  return {
    type: DELETE_EMPLOYEE,
    payload: id
  };
}
export function setCurrentEmployee(id, firstName, lastName) {
  return { type: SET_CURRENT_EMPLOYEE, id, firstName, lastName };
}

export function updateEmployee(id, firstName, lastName) {
  return {
    type: UPDATE_EMPLOYEE,
    id,
    firstName, 
    lastName
  };
}
