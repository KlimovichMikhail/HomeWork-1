import { createStore } from "redux"
import reducers from "./reducers/employee"

const store = createStore(reducers)
export default store