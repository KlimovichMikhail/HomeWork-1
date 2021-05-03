// @ts-nocheck
import { useSelector, useDispatch } from "react-redux";
import { addEmployee} from "../../redux/action/employee";
import AddEmployee from "./component";

const AddEmployeeContainer = () => {
  const dispatch = useDispatch();
  const onSave = employee => {
    let firstName = employee.firstName;
    let lastName = employee.lastName
    dispatch(addEmployee(firstName,lastName));
  };
  const isOpen = useSelector(state => state.employeesPage.isOpen);
  return <AddEmployee onSave={onSave} isOpen={isOpen} />;
};

export const container = AddEmployeeContainer;
