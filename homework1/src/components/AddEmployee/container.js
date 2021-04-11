// @ts-nocheck
import { useSelector, useDispatch } from 'react-redux'
import { addEmployee} from "../../redux/action/employee";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from './component';

const AddEmployeeContainer = () => {
  const dispatch = useDispatch();
  const onSave = employee => {
    employee.id = uuidv4();
    dispatch(addEmployee(employee));
  };
  const isOpen = useSelector(state=>state.employeesPage.isOpen)
  return (
    <AddEmployee onSave={onSave} isOpen={isOpen}/>
  );
};

export default AddEmployeeContainer;
