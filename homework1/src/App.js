import styles from "./App.module.scss";
import EmployeeList from "./components/EmployeeList";

import React from "react";

function App() {
  return (
    <div className={styles.App}>
      <EmployeeList />
    </div>
  );
}

export default App;
