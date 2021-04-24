import Repository from "../../repository";
import {
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  SET_CURRENT_EMPLOYEE,
  UPDATE_EMPLOYEE,
  EPMLOEE_LIST_ERROR,
  EPMLOEE_LIST_SUCCESS,
  EPMLOEE_LIST_LOADER
} from "../actionTypes/employee";

export const getEmployeesList = () => async dispatch => {
  dispatch(employeeLoader(true));
  const { value, error } = await Repository.APICore.getEmployeesList();
  if (error || !value) {
    dispatch(employeeListError(true));
  } else dispatch(employeeListSuccess(value));
  dispatch(employeeLoader(false));
};

export function employeeListError(value) {
  return { type: EPMLOEE_LIST_ERROR, value };
}

export function employeeListSuccess(value) {
  return { type: EPMLOEE_LIST_SUCCESS, value };
}

export function employeeLoader(value) {
  return { type: EPMLOEE_LIST_LOADER, value };
}

export function addEmployee(id) {
  return {
    type: ADD_EMPLOYEE,
    payload: id,
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
