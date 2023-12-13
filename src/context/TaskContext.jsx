import { createContext, useEffect, useState  } from "react";
import { tasks as dataTasks } from "../data/tasks";


export const TaskContext = createContext();

export function TaskContextProvider(props) {

	const [tasks, setTasks] = useState([]);

	function createTask(task) {
		setTasks([
			...tasks,
			{
				id: tasks.length,
				title: task.title,
				description: task.description,
			},
		]);
	}

	function deleteTask(taskID) {
		setTasks(tasks.filter((task) => task.id !== taskID));
	}

	useEffect(() => {
		setTasks(dataTasks);
	}, []);

	//Provider = proveidor
	return (
		<TaskContext.Provider
			value={{
				tasks: tasks,
				createTask: createTask,
				deleteTask: deleteTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}

////export default TaskContextProvider;
