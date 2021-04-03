import { ADD_EMPLOYEE,DELETE_EMPLOYEE } from "../actionTypes/employee";
const initialState = {
  isModalOpen: false,
  openEmployee: {
    id: null,
    firstName: "",
    lastName: ""
  },
  list: [
    { id: 1, firstName: "Ivan", lastName: "Nefedov" },
    { id: 2, firstName: "Nikita", lastName: "Zalubov" },
    { id: 3, firstName: "Andrew", lastName: "Taranow" },
    { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
    { id: 5, firstName: "Artem", lastName: "Haliman" }
  ]
};
function employees(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return Object.assign({}, state, {
        list: state.list.concat(action.payload)
      });
      case DELETE_EMPLOYEE:
      return {
        ...state,
        list: state.list.filter(employee => employee.id !== action.payload)
      };

    default:
      return state;
  }
}
export default employees;
