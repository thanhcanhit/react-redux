import { createSlice } from "@reduxjs/toolkit";

// Toolkit cos IMMER nên có thể viết immutation như là mutation
export default createSlice({
	name: "filters",
	initialState: {
		search: "",
		status: "All",
		priority: [],
	},
	reducers: {
		searchFiltersChange: (state, action) => {
			state.search = action.payload;
		},
		statusFiltersChange: (state, action) => {
			state.status = action.payload;
		},
		priorityFiltersChange: (state, action) => {
			state.priority = action.payload;
		},
	},
});
