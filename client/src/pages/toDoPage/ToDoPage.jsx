/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Files from "../../components/files/Files";
import { getFiles } from "../../redux/actions/filesActions";
import { logOut } from "../../redux/actions/userActions";

import "./toDoPage.css";

const ToDoPage = () => {
	const filesList = useSelector((state) => state.files.filesList);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!filesList.length) {
			dispatch(getFiles());
		}
	}, []);
	return (
		<div className="todo-container">
			<div className="nav-container">
				<h1>TODO APP</h1>
				<p onClick={() => dispatch(logOut())}>Log Out</p>
			</div>
			<Files filesList={filesList} />
		</div>
	);
};

export default ToDoPage;
