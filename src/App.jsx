// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import { tasks as dataTasks } from "./data/task";
// import { useEffect, useState } from "react";

function App() {
	return (
		<main className="bg-zinc-900 h-screen ">
			<h1>Hola Mon</h1>
			<div className="container mx-auto p-10">
				<TaskForm />
				<TaskList />
			</div>
		</main>
	);
}

export default App;
