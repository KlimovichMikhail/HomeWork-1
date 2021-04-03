import styles from "./App.scss";
import EmployeeList from "./components/EmployeeList/index";
import ModalWindow from "./components/ModalWindow/index";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
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
