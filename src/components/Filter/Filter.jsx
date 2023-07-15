import { Typography, Input, Radio, Select, Row, Col } from "antd";
import PriorityTag from "../PriorityTag/PriorityTag";

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
	return (
		<Row>
			<Col span={24}>
				<Title level={5} style={{ marginTop: 8 }}>
					Search Text
				</Title>
				<Input
					placeholder="Input search text"
					style={{ width: "100%" }}
				/>
			</Col>
			<Col span={24}>
				<Title level={5} style={{ marginTop: 8 }}>
					Filter by status
				</Title>
				<Radio.Group>
					<Radio value="All">All</Radio>
					<Radio value="Completed">Completed</Radio>
					<Radio value="To do">To do</Radio>
				</Radio.Group>
			</Col>
			<Col span={24}>
				<Title level={5} style={{ marginTop: 8 }}>
					Filter by status
				</Title>

				<Select
					style={{ width: "100%" }}
					size="middle"
					mode="multiple"
					allowClear
					placeholder="Type"
					tagRender={PriorityTag}
					options={formSelectOptions}
				/>
			</Col>
		</Row>
	);
}
