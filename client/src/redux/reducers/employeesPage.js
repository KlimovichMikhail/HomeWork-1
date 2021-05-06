import {
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  SET_CURRENT_EMPLOYEE,
  UPDATE_EMPLOYEE,
  EPMLOEE_LIST_ERROR,
  EPMLOEE_LIST_SUCCESS,
  EPMLOEE_LIST_LOADER
} from "../actionTypes/employee";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  isOpen: false,
  currentEmployee: {
    id: null,
    firstName: "",
    lastName: ""
  },
  employeeLoader: false,
  isError: false,
  employees: []
};

function employeesPage(state = initialState, action) {
  switch (action.type) {
    case EPMLOEE_LIST_ERROR:
      return {
        ...state,
        isError: action.value
      };
    case EPMLOEE_LIST_LOADER:
      return {
        ...state,
        employeeLoader: action.value
      };
    case EPMLOEE_LIST_SUCCESS: {
      return {
        ...state,
        employees: action.value
      };
    }
    case ADD_EMPLOYEE: {
      let firstName = action.firstName;
      let lastName = action.lastName;
      return {
        ...state,
        employees: [...state.employees, { id: uuidv4(), firstName, lastName }],
        isOpen: false,
        currentEmployee: {}
      };
    }
    case DELETE_EMPLOYEE:{
      console.log(action.id);
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== action.id)
      };
    }
    case SET_CURRENT_EMPLOYEE: {
      return {
        ...state,
        currentEmployee: {
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName
        },
        isOpen: true
      };
    }
    case UPDATE_EMPLOYEE: {

      let firstName = action.firstName;
      let lastName = action.lastName;
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === action.id ? { ...employee, firstName, lastName } : employee
        ),
        isOpen: false
      };
    }
    default:
      return state;
  }
}
export default employeesPage;
