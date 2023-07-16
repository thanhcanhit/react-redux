const initialState = {
	filters: {
		search: "",
		status: "All",
		priority: [],
	},
	todoList: [
		{
			id: "1",
			isCompleted: false,
			name: "Learn React",
			priority: "High",
		},
		{
			id: "2",
			isCompleted: true,
			name: "Learn Redux",
			priority: "Medium",
		},
		{
			id: "3",
			isCompleted: true,
			name: "Learn js",
			priority: "Low",
		},
	],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "todoList/addTodo":
			return { ...state, todoList: [...state.todoList, action.payload] };
		case "todoList/updateTodo":
			return {
				...state,
				todoList: state.todoList.map((todo) =>
					todo.id === action.payload
						? (todo = { ...todo, isCompleted: !todo.isCompleted })
						: todo
				),
			};
		case "filters/searchFiltersChange":
			return {
				...state,
				filters: { ...state.filters, search: action.payload },
			};
		case "filters/statusFiltersChange":
			return {
				...state,
				filters: { ...state.filters, status: action.payload },
			};
		case "filters/priorityFiltersChange":
			return {
				...state,
				filters: { ...state.filters, priority: action.payload },
			};
		default:
			return state;
	}
};

export default rootReducer;
