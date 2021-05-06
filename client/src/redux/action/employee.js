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

export const getEmployee = (id) => async (dispatch) => {
  console.log(123);
  dispatch(employeeLoader(true));
  const { value, error } = await Repository.APICore.getEmployee(id);
  if (error || !value) {
    dispatch(employeeListError(true));
  } else {
    dispatch(employeeListSuccess(value));
  }
  dispatch(employeeLoader(false));
};

export const deleteEmployee = (id) => async dispatch => {
  dispatch(employeeLoader(true));
  const { value, error } = await Repository.APICore.deleteEmployee(id);

  if (error || !value) {
    dispatch(employeeListError(true));
  } else {
  dispatch(deleteStoreEmployee(id));
  }
  dispatch(employeeLoader(false));
};

export const addEmployee = (firstName,lastName) => async dispatch => {
  const { value, error } = await Repository.APICore.createEmployee(firstName,lastName);
  console.log(value, error);
  if (error || !value) {
    dispatch(employeeListError(true));
  } else 
  dispatch(addStoreEmployee(firstName,lastName));
};

export const updateEmployee = (id, firstName, lastName)=> async dispatch => {
  const { value, error } = await Repository.APICore.updateEmployee(id, firstName, lastName);
  if (error || !value) {
    dispatch(employeeListError(true));
  } else 
  dispatch(updateStoreEmployee(id, firstName, lastName));
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

export function addStoreEmployee(firstName,lastName) {
  return {
    type: ADD_EMPLOYEE,
    firstName,lastName
  };
}

export function deleteStoreEmployee(id) {
  return {
    type: DELETE_EMPLOYEE,
    id
  };
}

export function setCurrentEmployee(id, firstName, lastName) {
  return { type: SET_CURRENT_EMPLOYEE, id, firstName, lastName };
}

export function updateStoreEmployee(id, firstName, lastName) {
  return {
    type: UPDATE_EMPLOYEE,
    id,
    firstName,
    lastName
  };
 
}
