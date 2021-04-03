import styles from "./App.module.scss";
import EmployeeList from "./components/EmployeeList";
import ModalWindow from "./components/ModalWindow";
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";


function App (){
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Route path="/addEmployee" render={() =><ModalWindow /> } />
        <Route render={() => <EmployeeList />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
