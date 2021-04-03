import React from "react";
import styles from "../assets/EmployeeList.module.scss";
import Employee from "./Employee";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getEmployees } from "../redux/action/employee";

class EmployeeList extends React.Component {
  showList() {
    return this.props.list.map(employee => {
      return <Employee key={employee.id} id={employee.id} firstName={employee.firstName} lastName={employee.lastName} />;
    });
  }
  componentDidMount() {
    this.props.getEmployees();
  }
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.conteiner}>
          <NavLink to="/addEmployee">+ Add Employee</NavLink>
          <div className={styles.catalogList}>{this.showList()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getEmployees: () => {
      dispatch(getEmployees());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
