import { Card, Divider } from "antd";
import Filter from "./components/Filter/Filter";
import TodoList from "./components/TodoList/TodoList";
import 'antd/dist/reset.css'

function App() {
	return (
		<div style={{width: '100vw', height: '100vh', background: '#ccc', padding: 8}}>
			<Card
				title="React Redux"
				style={{ width: 600, marginInline: "auto" }}
			>
				<Filter />
        <Divider />
				<TodoList />
			</Card>
		</div>
	);
}

export default App;
