const initialState = [
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
];

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "todoList/addTodo":
			return [...state, action.payload];
		case "todoList/updateTodo":
			return state.map((todo) =>
				todo.id === action.payload
					? (todo = { ...todo, isCompleted: !todo.isCompleted })
					: todo
			);
		default:
			return state;
	}
};

export default todoReducer;
