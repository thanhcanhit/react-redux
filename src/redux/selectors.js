const todoListSelector = (state) => {
	const searchText = state.filters.search;
	const status = state.filters.status;
	const priorities = state.filters.priority;

	let todoList = [...state.todoList];

	if (searchText)
		todoList = state.todoList.filter((todo) =>
			todo.name.toLowerCase().includes(searchText.toLowerCase())
		);

	if (status != "All") {
		const cond = status == "Completed";
		todoList = state.todoList.filter((todo) => todo.isCompleted == cond);
	}

	if (priorities.length > 0) {
		todoList = state.todoList.filter((todo) =>
			priorities.includes(todo.priority)
		);
	}

	return todoList;
};
const filtersSelector = (state) => state.filters;

export { todoListSelector, filtersSelector };
