import styles from "./App.module.scss";
import EmployeesPage from "./components/EmployeesPage";

import React from "react";

function App() {
  return (
    <div className={styles.App}>
      <EmployeesPage />
    </div>
  );
}

export default App;
