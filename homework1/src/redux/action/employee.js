import { GET_EPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE } from "../actionTypes/employee";
export function getEmployees() {
  return {
    type: GET_EPLOYEES
  };
}
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
