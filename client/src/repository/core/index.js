/* eslint-disable no-template-curly-in-string */
import axios from "axios";

class Core {
  getEmployeesList = async () => {
    const result = {
      value: null,
      error: null
    };
    try {
      const response = await axios.get("/api/employees");
      result.value = response.data
    } catch (e) {
      result.error = e.response.data;
    }
    return result;
  };
  deleteEmployee = async (employeeId) => {
    const result = {
      value: null,
      error: null
    };
    try {
      const response = await axios.delete("/api/employees/${employeeId}");
      result.value = response.data
    } catch (e) {
      result.error = e.response.data;
    }
    return result;
  };
  updateEmployee = async (id, firstName, lastName) => {
    const result = {
      value: null,
      error: null
    };
    try {
      const response = await axios.put("/api/employees/${id}", {
        firstName,
        lastName,
      });
      result.value = response.data
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };


    createEmployee = async (firstName, lastName) => {
    const result = {
      value: null,
      error: null,
    };
    try {

      const response = await axios.post("/api/employees", {
        firstName,
        lastName,
      });

      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
   getEmployee = async (id) => {
    const result = {
      value: null,
      error: null
    };
    try {
      const response = await axios.get("/api/employees/${id}");
      result.value = response.data
    } catch (e) {
      result.error = e.response.data;
    }
    return result;
  };
}
export default new Core();
