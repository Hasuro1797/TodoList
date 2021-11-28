import React, { useState } from "react";
import { MdCheckBoxOutlineBlank, MdCancel } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./todo.css";
import { useDispatch } from "react-redux";
import {
	deleteToDo,
	updateToDo,
	updateToDoCheck,
} from "../../redux/actions/filesActions";

const Todo = ({ id, title, status, fileId }) => {
	const dispatch = useDispatch();
	const [updateTask, setUpdateTask] = useState(false);
	const [inputTask, setInputTask] = useState(title);
	const handleChecked = () => {
		dispatch(
			updateToDoCheck({
				toDoId: id,
				status: !status,
			})
		);
	};

	const handleUpdateTask = async (e) => {
		e.preventDefault();
		await dispatch(
			updateToDo({
				toDoId: id,
				title: inputTask,
			})
		);
		setUpdateTask(false);
	};
	const handleTaskDelete = () => {
		dispatch(deleteToDo(id, fileId));
	};
	return (
		<div className="todo-item-container">
			<div className="todo-item-left">
				{status ? (
					<IoMdCheckboxOutline
						className="icon-checked"
						onClick={() => handleChecked()}
					/>
				) : (
					<MdCheckBoxOutlineBlank
						className="icon-checked"
						onClick={() => handleChecked()}
					/>
				)}
				{updateTask ? (
					<div className="update-task-container">
						<form
							className="task-add-form"
							onSubmit={(e) => handleUpdateTask(e)}
						>
							<input
								type="text"
								onChange={(e) => setInputTask(e.target.value)}
								value={inputTask}
							/>
							<button type="submit" disabled={inputTask ? false : true}>
								<AiFillCheckCircle className="icon-edit-form" />
							</button>
							<MdCancel
								className="icon-edit-form"
								onClick={() => setUpdateTask(false)}
							/>
						</form>
					</div>
				) : (
					<span>{title}</span>
				)}
			</div>
			<div className="todo-right-content">
				<AiFillEdit
					className="icon-right"
					onClick={() => setUpdateTask(true)}
				/>
				<AiFillDelete
					className="icon-right"
					onClick={() => handleTaskDelete()}
				/>
			</div>
		</div>
	);
};

export default Todo;
