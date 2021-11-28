import React, { useState } from "react";
import File from "../file/File";
import "./files.css";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addNewFile } from "../../redux/actions/filesActions";

const Files = ({ filesList }) => {
	const [addFile, setAddFile] = useState(false);
	const [fileName, setFileName] = useState("");
	const dispatch = useDispatch();

	const handleAddFileSubmit = async (e) => {
		e.preventDefault();
		await dispatch(
			addNewFile({
				title: fileName,
			})
		);
		setAddFile(false);
	};
	return (
		<div className="files-container">
			<div className="hide-files-container">
				<span className="title-todoList">To Do List</span>
				<div className="icon-add-file" onClick={() => setAddFile(true)}>
					<AiTwotoneFolderAdd />
					<span>Add File</span>
				</div>
			</div>
			{addFile && (
				<div>
					<form
						className="file-edit-form"
						onSubmit={(e) => handleAddFileSubmit(e)}
					>
						<input
							type="text"
							onChange={(e) => setFileName(e.target.value)}
							value={fileName}
						/>
						<button type="submit" disabled={fileName ? false : true}>
							<AiFillCheckCircle className="icon-edit-form" />
						</button>
						<MdCancel
							className="icon-edit-form"
							onClick={() => setAddFile(false)}
						/>
					</form>
				</div>
			)}
			{filesList.map((file) => (
				<File
					key={file.id}
					title={file.title}
					todos={file.todos}
					id={file.id}
				/>
			))}
		</div>
	);
};

export default Files;
