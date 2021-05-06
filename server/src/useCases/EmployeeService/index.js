class EmployeeService {
  getList = async () => {
    const res = {
      value: [
        { id: 1, firstName: "Ivan", lastName: "Nefedov" },
        { id: 2, firstName: "Nikita", lastName: "Zalubov" },
        { id: 3, firstName: "Andrew", lastName: "Taranow" },
        { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
        { id: 5, firstName: "Artem", lastName: "Haliman" },
      ],
      error: undefined,
    };
    if (res.error) return { error: res.error };
    return { value: res.value };
  };
  createEmployee = async (firstName, lastName) => {
    const res = {
      value: true,
      error: undefined,
    };
    if (res.error) return { error: res.error };
    return { value: res.value };
  };
  editEmployee = async (id, firstName, lastName) => {
    const res = {
      value: true,
      error: undefined,
    };
    if (res.error) return { error: res.error };
    return { value: res.value };
  };
  deleteEmployee = async (id) => {
    const res = {
      value: true,
      error: undefined,
    };
    if (res.error) return { error: res.error };
    return { value: res.value };
  };
  getEmployee = async (id) => {
    const res = {
      value: true,
      error: undefined,
    };
    if (res.error) return { error: res.error };
    return { value: res.value };
  };
}
module.exports = new EmployeeService();