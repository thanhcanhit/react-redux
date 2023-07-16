import { Tag } from "antd";
import PropType from "prop-types";

const customColor = { High: "red", Low: "grey", Medium: "blue" };

export default function PriorityTag({ label }) {
	return <Tag color={customColor[label]}>{label}</Tag>;
}

PriorityTag.propTypes = {
	label: PropType.string,
};
