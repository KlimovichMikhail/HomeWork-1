import { Component } from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { addEmployee } from "../../redux/action/employee";

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:"",
      lastName:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({ [id]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName} = this.state;
    this.props.addCars({ firstName, lastName});
    this.setState({ firstName: "", lastName: "" });
  }

  render() {
    const { firstName, lastName} = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Modal Window</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <br />
          <input required type="text" placeholder="First Name" id="firstName" value={firstName} onChange={this.handleChange} />
          <br />
          <input required type="text" placeholder="Last Name" id="lastName" value={lastName} onChange={this.handleChange} />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  list: state.list
});
function mapDispatchToProps(dispatch) {
  return {
    addCars: employee => dispatch(addEmployee(employee))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindow);

