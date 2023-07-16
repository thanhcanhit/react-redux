const addTodo = (data) => {
	return { type: "todoList/addTodo", payload: data };
};

const updateTodo = (data) => {
	return { type: "todoList/updateTodo", payload: data };
};

const searchFiltersChange = (data) => {
	return { type: "filters/searchFiltersChange", payload: data };
};

const statusFiltersChange = (data) => {
	return { type: "filters/statusFiltersChange", payload: data };
};

const priorityFiltersChange = (data) => {
	return { type: "filters/priorityFiltersChange", payload: data };
};


export {
	addTodo,
	updateTodo,
	searchFiltersChange,
	statusFiltersChange,
	priorityFiltersChange,
};
