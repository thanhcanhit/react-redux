import { useState } from "react";
import { Typography, Input, Radio, Select, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import PriorityTag from "../PriorityTag/PriorityTag";
import filtersSlice from "./filtersSlice";

const { Title } = Typography;

const formSelectOptions = [
	{
		label: "High",
		value: "High",
	},
	{
		label: "Medium",
		value: "Medium",
	},
	{
		label: "Low",
		value: "Low",
	},
];

export default function Filter() {
	const [searchText, setSearchText] = useState("");
	const [statusRadio, setStatusRadio] = useState("All");
	const [priority, setPriority] = useState([]);
	const dispatch = useDispatch();

	const handleSearchTextChange = (e) => {
		const value = e.target.value;
		setSearchText(value);
		dispatch(filtersSlice.actions.searchFiltersChange(value));
	};

	const handleStatusChange = (e) => {
		const value = e.target.value;
		setStatusRadio(value);
		dispatch(filtersSlice.actions.statusFiltersChange(value));
	};

	const handlePriorityChange = (value) => {
		setPriority(value);
		dispatch(filtersSlice.actions.priorityFiltersChange(value));
	};

	return (
		<Row>
			<Col span={24}>
				<Title level={5} style={{ marginTop: 8 }}>
					Search Text
				</Title>
				<Input
					placeholder="Input search text"
					value={searchText}
					onChange={handleSearchTextChange}
					style={{ width: "100%" }}
				/>
			</Col>
			<Col span={24}>
				<Title level={5} style={{ marginTop: 8 }}>
					Filter by status
				</Title>
				<Radio.Group value={statusRadio} onChange={handleStatusChange}>
					<Radio value="All">All</Radio>
					<Radio value="Completed">Completed</Radio>
					<Radio value="To do">To do</Radio>
				</Radio.Group>
			</Col>
			<Col span={24}>
				<Title level={5} style={{ marginTop: 8 }}>
					Filter by priority
				</Title>

				<Select
					style={{ width: "100%" }}
					size="middle"
					mode="multiple"
					allowClear
					placeholder="Type"
					tagRender={PriorityTag}
					options={formSelectOptions}
					value={priority}
					onChange={handlePriorityChange}
				/>
			</Col>
		</Row>
	);
}
