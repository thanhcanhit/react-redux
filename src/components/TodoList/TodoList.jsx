import { Row, Col, Space, Input, Select, Divider, Button } from "antd";
import TodoItem from "./TodoItem";
import PriorityTag from "../PriorityTag/PriorityTag";

const defaultList = [
	{
		isCompleted: true,
		name: "Learn React",
		priority: "High",
	},
	{
		isCompleted: true,
		name: "Learn Redux",
		priority: "Medium",
	},
	{
		isCompleted: true,
		name: "Learn js",
		priority: "Low",
	},
	{
		isCompleted: true,
		name: "Learn React",
		priority: "High",
	},
	{
		isCompleted: true,
		name: "Learn Redux",
		priority: "Medium",
	},
	{
		isCompleted: true,
		name: "Learn js",
		priority: "Low",
	},
	{
		isCompleted: true,
		name: "Learn React",
		priority: "High",
	},
	{
		isCompleted: true,
		name: "Learn Redux",
		priority: "Medium",
	},
	{
		isCompleted: true,
		name: "Learn js",
		priority: "Low",
	},
];

export default function TodoList() {
	const todoListRender = defaultList.map((todo) => (
		<TodoItem key={todo.name} todo={todo} />
	));

	const priorityTagRender = (
		<Select defaultValue="Medium" style={{ width: "fit-content" }}>
			{["High", "Medium", "Low"].map((item) => (
				<Select.Option key={item} value={item}>
					<PriorityTag label={item} />
				</Select.Option>
			))}
		</Select>
	);
	return (
		<Row>
		<Col span={24} style={{ height: "180px", overflow: "auto" }}>
				{todoListRender}
			</Col>
			<Divider />
			<Col span={24}>
				<Space.Compact block style={{ width: "100%" }}>
					<Input style={{ flex: "" }} placeholder="Job..." />
					{priorityTagRender}
					<Button type="primary">Add</Button>
				</Space.Compact>
			</Col>
		</Row>
	);
}
