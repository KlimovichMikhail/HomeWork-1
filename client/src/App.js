import styles from "../src/assets/App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeesPage from "./components/EmployeesPage";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

import React from "react";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Switch>
          <Route exact path= {["/","/employee"]} render={() =><EmployeesPage/>} />
          <Route path="/add" render={() =><AddEmployee/> } />
          <Route path="/edit" render={() =><EditEmployee/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
