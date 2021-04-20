class Core {
  getEmployeesList = async () => {
    const result = {
      value: null,
      error: null
    };
    try {
      result.value = [
        { id: 1, firstName: "Ivan", lastName: "Nefedov" },
        { id: 2, firstName: "Nikita", lastName: "Zalubov" },
        { id: 3, firstName: "Andrew", lastName: "Taranow" },
        { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
        { id: 5, firstName: "Artem", lastName: "Haliman" }
      ];
    } catch (e) {
      result.error = e.response.data;
    }
    return result;
  };
}
export default new Core();
