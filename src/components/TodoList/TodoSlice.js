import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
	name: "todoList",
	initialState: [
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
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		updateTodo: (state, action) => {
			const currentTodo = state.find((item) => item.id == action.payload);
			if (currentTodo) {
				currentTodo.isCompleted = !currentTodo.isCompleted;
			}
		},
	},
});
