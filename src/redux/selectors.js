import { createSelector } from "reselect";

const filtersSelector = (state) => state.filters;
const filtersSearchSelector = (state) => state.filters.search;
const filtersStatusSelector = (state) => state.filters.status;
const filtersPrioritySelector = (state) => state.filters.priority;
const todoListSelector = (state) => state.todoList;

const restTodoListSelector = createSelector(
	[filtersSelector, todoListSelector],
	(filters, todoList) => {
		const searchText = filters.search;
		const status = filters.status;
		const priorities = filters.priority;

		let restTodoList = [...todoList];

		if (searchText)
			restTodoList = restTodoList.filter((todo) =>
				todo.name.toLowerCase().includes(searchText.toLowerCase())
			);

		if (status != "All") {
			const cond = status == "Completed";
			restTodoList = restTodoList.filter(
				(todo) => todo.isCompleted == cond
			);
		}

		if (priorities.length > 0) {
			restTodoList = restTodoList.filter((todo) =>
				priorities.includes(todo.priority)
			);
		}

		return restTodoList;
	}
);

export {
	todoListSelector,
	restTodoListSelector,
	filtersSelector,
	filtersSearchSelector,
	filtersStatusSelector,
	filtersPrioritySelector,
};
