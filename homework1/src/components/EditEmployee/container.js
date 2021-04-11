// @ts-nocheck
import { useSelector, useDispatch } from "react-redux";
import { updateEmployee } from "../../redux/action/employee";
import EditEmployee from "./component";

const EditEmployeeContainer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state=>state.employeesPage.isOpen);
  const currentEmployee = useSelector((state=>state.employeesPage.currentEmployee));
  const onChange = (id, firstName, lastName) => {
    dispatch(updateEmployee(id, firstName, lastName));
  };
    
  return (
    <EditEmployee isOpen={isOpen} currentEmployee={currentEmployee} onChange={onChange}/>
  );
};

export default EditEmployeeContainer;
