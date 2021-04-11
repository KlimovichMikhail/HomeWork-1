import styles from "./App.module.scss";
import EmployeesPage from "./components/EmployeePage/component";

import React from "react";

function App() {
  return (
    <div className={styles.App}>
      <EmployeesPage />
    </div>
  );
}

export default App;
