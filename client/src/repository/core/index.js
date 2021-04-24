import axios from "axios";

class Core {
  getEmployeesList = async () => {
    const result = {
      value: null,
      error: null
    };
    try {
      const response = await axios.get("/api/employees");
      console.log(response.data);
      result.value = response.data
    } catch (e) {
      result.error = e.response.data;
    }
    return result;
  };
//   createEmployee = async () => {
//     let employee;
//     try {
//       const request = await axios.post("/api/employees");
//       console.log(request.data);
//       result.value = response.data
//     } catch (e) {
//       result.error = e.response.data;
//     }
//     return result;
//   };
}
export default new Core();
