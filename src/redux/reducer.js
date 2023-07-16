import { combineReducers } from "redux";
import todoReducer from "../components/TodoList/TodoSlice";
import filtersReducer from "./../components/Filter/FiltersSlice";

const rootReducer = combineReducers({
	filters: filtersReducer,
	todoList: todoReducer,
});

// const rootReducer = (state = {}, action) => {
// 	return {
// 		filters: filtersReducer(state.filters, action),
// 		todoList: todoReducer(state.todoList, action),
// 	};
// };

export default rootReducer;
