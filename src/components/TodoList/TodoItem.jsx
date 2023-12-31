import { Row, Col, Checkbox, Typography } from "antd";
import PropTypes from "prop-types";
import PriorityTag from "../PriorityTag/PriorityTag";

export default function TodoItem({ todo, onChange }) {
	const { id, name, priority, isCompleted } = todo;
	return (
		<Row key={id} justify={"space-between"} style={{ margin: 8 }}>
			<Col span={20}>
				<Checkbox
					checked={isCompleted}
					style={{ width: "100%" }}
					onClick={() => onChange(id)}
				>
					<Typography.Paragraph
						delete={isCompleted}
						style={{
							marginBottom: 0,
							color: isCompleted ? "grey" : "inherit",
						}}
					>
						{name}
					</Typography.Paragraph>
				</Checkbox>
			</Col>

			<Col span={4}>
				<Row justify="end">
					<PriorityTag label={priority} isDeleted={isCompleted}/>
				</Row>
			</Col>
		</Row>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		priority: PropTypes.string.isRequired,
		isCompleted: PropTypes.bool.isRequired,
		onChange: PropTypes.func,
	}),
	onChange: PropTypes.func.isRequired,
};
