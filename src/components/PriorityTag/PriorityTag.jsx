import { Tag } from "antd";
import PropType from "prop-types";

const customColor = { High: "red", Low: "green", Medium: "yellow" };

export default function PriorityTag({ label }) {
	return <Tag color={customColor[label]}>{label}</Tag>;
}

PriorityTag.propTypes = {
	label: PropType.string,
};
