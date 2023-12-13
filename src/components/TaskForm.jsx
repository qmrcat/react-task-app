import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const { createTask } = useContext(TaskContext);
	// console.log(valor);

	// gestionar Enviament
	const handleSubmit = (e) => {
		e.preventDefault();
		if (title !== "") {
			createTask({ title, description });
			setTitle("");
			setDescription("");
		} else {
			alert("El titol es obligatori");
		}
	};

	return (
		<div className=" max-w-md mx-auto">
			<form
				onSubmit={handleSubmit}
				className="container m-5 bg-zinc-500 mx-auto px-3 py-4"
			>
				<h1 className=" text-2xl my-2 font-bold text-white">Nova tasca</h1>
				<input
					className=" bg-slate-300 p-3 w-full mb-1"
					placeholder="Escriu la teva tasca"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
				/>
				<br />
				<textarea
					className=" bg-slate-300 p-3 w-full mb-1"
					placeholder="Escriu la descripció"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
				></textarea>
				<br />
				<button className=" bg-green-400 hover:bg-green-700 hover:text-white py-2 px-2 mt-2 rounded-md">
					Desar
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
