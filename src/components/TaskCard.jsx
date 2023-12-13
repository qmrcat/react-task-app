//import TaskContext from "../context/TaskContext";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
	// function mostraAlerta() {
	// 	alert("Elminant... tasca: " + task.id);
	// }

	const {deleteTask} = useContext(TaskContext);
	// console.log(valor);

	return (
			<div ikey={task.id} className="bg-gray-800 text-white p-4 rounded-md">
				<h1 className="text-xl font-bold capitalize">{task.title}</h1>
				<p className="text-gray-300 text-sm">{task.description}</p>
				<button className="bg-red-500 py-2 px-2 mt-2 rounded-md hover:bg-red-700" onClick={() => deleteTask(task.id)}> 
					Elminar tasca
				</button>
			</div>
	);
}

export default TaskCard;
