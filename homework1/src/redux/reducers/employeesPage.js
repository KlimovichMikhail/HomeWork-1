import {
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  SET_CURRENT_EMPLOYEE,
  UPDATE_EMPLOYEE,
  EPMLOEE_LIST_ERROR,
  EPMLOEE_LIST_SUCCESS,
  EPMLOEE_LIST_LOADER
} from "../actionTypes/employee";

const initialState = {
  isOpen: false,
  currentEmployee: {
    id: null,
    firstName: "",
    lastName: ""
  },
  employeeLoader: false,
  isError: false,
  employees: [
    // { id: uuidv4(), firstName: "Ivan", lastName: "Nefedov" },
    // { id: uuidv4(), firstName: "Nikita", lastName: "Zalubov" },
    // { id: uuidv4(), firstName: "Andrew", lastName: "Taranow" },
    // { id: uuidv4(), firstName: "Mihail", lastName: "Ptuskin" },
    // { id: uuidv4(), firstName: "Artem", lastName: "Haliman" }
  ]
};

function employeesPage(state = initialState, action) {
  switch (action.type) {
    case EPMLOEE_LIST_ERROR:
      return {
        ...state,
        isError: action.value,
      };
    case EPMLOEE_LIST_LOADER:
      return {
        ...state,
        employeeLoader: action.value,
      };
    case EPMLOEE_LIST_SUCCESS:
      return {
				...state,
				employees: action.value
      };
    case ADD_EMPLOYEE:
      return Object.assign({}, state, {
        employees: state.employees.concat(action.payload)
      });
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== action.payload)
      };
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
