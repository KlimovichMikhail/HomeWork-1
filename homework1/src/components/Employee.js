import React from "react";
import styles from "../assets/Employee.module.scss";
import { connect } from "react-redux";
import { deleteEmployee } from "../redux/action/employee";

class Employee extends React.Component {
  deleteEmployee = id => {
    this.props.deleteEmployee(id);
  };
  render() {
    return (
      <div className={styles.employee}>
        <div className={styles.bottom}>
          <div className={styles.name}>
            <p>First Name:{this.props.firstName}</p>
            <p>Last Name: {this.props.lastName}</p>
          </div>
        </div>
        <button>EDIT</button>
        <button onClick={() => this.deleteEmployee(this.props.id)}>DELETE</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  };
}
export default connect(
  mapStateToProps,
  { deleteEmployee }
)(Employee);
