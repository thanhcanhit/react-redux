import { Row, Col, Checkbox } from "antd";
import PropTypes from "prop-types";
import PriorityTag from "../PriorityTag/PriorityTag";

export default function TodoItem({ todo }) {
	const { name, priority, isCompleted } = todo;
	return (
		<Row justify={"space-between"} style={{margin: 8}}>
			<Col span={20}>
				<Checkbox checked={isCompleted} style={{ width: "100%" }}>
					{name}
				</Checkbox>
			</Col>

			<Col span={4}>
				<Row justify="end">
					<PriorityTag label={priority} />
				</Row>
			</Col>
		</Row>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		priority: PropTypes.string.isRequired,
		isCompleted: PropTypes.bool.isRequired,
	}),
};
