import { useState } from "react";
import { Row, Col, Space, Input, Select, Divider, Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import PriorityTag from "../PriorityTag/PriorityTag";
import todoSlice from "./todoSlice";
import { restTodoListSelector } from "../../redux/selectors";

export default function TodoList() {
	const [todoName, setTodoName] = useState("");
	const [todoPriority, setTodoPriority] = useState("Medium");

	const dispatch = useDispatch();
	const todoList = useSelector(restTodoListSelector);

	const handleInputChange = (e) => {
		setTodoName(e.target.value);
	};

	const handlePriorityChange = (value) => {
		setTodoPriority(value);
	};

	const handleAddClick = () => {
		if (!todoName) return;
		dispatch(
			todoSlice.actions.addTodo({
				id: uuidv4(),
				name: todoName,
				priority: todoPriority,
				isCompleted: false,
			})
		);
		setTodoName("");
		setTodoPriority("Medium");
	};

	const handleTodoChange = (id) => {
		dispatch(todoSlice.actions.updateTodo(id));
	};

	const todoListRender = todoList.map((todo) => (
		<TodoItem key={todo.id} todo={todo} onChange={handleTodoChange} />
	));

	return (
		<Row>
			<Col span={24} style={{ height: "180px", overflow: "auto" }}>
				{todoListRender}
			</Col>
			<Divider />
			<Col span={24}>
				<Space.Compact block style={{ width: "100%" }}>
					<Input
						style={{ flex: "" }}
						placeholder="Job..."
						value={todoName}
						onChange={handleInputChange}
					/>
					<Select
						defaultValue="Medium"
						value={todoPriority}
						style={{ width: "fit-content" }}
						onChange={handlePriorityChange}
					>
						{["High", "Medium", "Low"].map((item) => (
							<Select.Option key={item} value={item}>
								<PriorityTag label={item} />
							</Select.Option>
						))}
					</Select>
					<Button type="primary" onClick={handleAddClick}>
						Add
					</Button>
				</Space.Compact>
			</Col>
		</Row>
	);
}
