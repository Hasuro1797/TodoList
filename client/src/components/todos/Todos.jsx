import React, { useState } from "react";
import Todo from "../todo/Todo";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./todos.css";
import { useDispatch } from "react-redux";
import { addNewToDo } from "../../redux/actions/filesActions";

const Todos = ({ fileId, todos, addTask, setAddTask }) => {
	const [taskName, setTaskName] = useState("");
	const dispatch = useDispatch();
	const handleAddTaskSubmit = async (e) => {
		e.preventDefault();
		await dispatch(
			addNewToDo({
				title: taskName,
				fileId,
			})
		);
		setTaskName("");
		setAddTask(false);
	};
	return (
		<div>
			{addTask && (
				<div className="add-task-container">
					<MdCheckBoxOutlineBlank />
					<form
						className="task-add-form"
						onSubmit={(e) => handleAddTaskSubmit(e)}
					>
						<input
							type="text"
							onChange={(e) => setTaskName(e.target.value)}
							value={taskName}
						/>
						<button type="submit" disabled={taskName ? false : true}>
							<AiFillCheckCircle className="icon-edit-form" />
						</button>
						<MdCancel
							className="icon-edit-form"
							onClick={() => setAddTask(false)}
						/>
					</form>
				</div>
			)}
			{todos.map((todo) => (
				<Todo
					id={todo.id}
					title={todo.title}
					status={todo.status}
					key={todo.id}
					fileId={fileId}
				/>
			))}
		</div>
	);
};

export default Todos;
