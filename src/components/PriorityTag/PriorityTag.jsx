import { Tag } from "antd";
import PropType from "prop-types";

const customColor = { High: "red", Low: "grey", Medium: "blue" };

export default function PriorityTag({ label, isDeleted }) {
	return (
		<Tag
			style={{
				textDecoration: isDeleted && "line-through",
				opacity: isDeleted && 0.6,
			}}
			color={customColor[label]}
		>
			{label}
		</Tag>
	);
}

PriorityTag.propTypes = {
	label: PropType.string.isRequired,
	isDeleted: PropType.bool,
};
