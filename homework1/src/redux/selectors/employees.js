export const getEmployees = (state) => {
	return state.employeesPage.employees
}
export const getIsOpen = (state) => {
	return state.employeesPage.isOpen
}
export const getCurrentEmployee = (state) => {
	return state.employeesPage.currentEmployee
}