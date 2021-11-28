import Todos from "../todos/Todos";
import "./file.css";
import {
	AiFillDelete,
	AiFillEdit,
	AiFillCheckCircle,
	AiFillFileAdd,
} from "react-icons/ai";
import {
	MdCancel,
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";
import { deleteFile, updateFile } from "../../redux/actions/filesActions";
import { useDispatch } from "react-redux";

const File = ({ title, id, todos }) => {
	const [openFile, setOpenFile] = useState(false);
	const [editFile, setEditFile] = useState(false);
	const [inputFileName, setInputFileName] = useState(title);
	const [addTask, setAddTask] = useState(false);
	const dispatch = useDispatch();

	const handleInputFileNameChange = (e) => {
		setInputFileName(e.target.value);
	};
	const handleFileSubmit = async (e) => {
		e.preventDefault();
		await dispatch(
			updateFile({
				fileId: id,
				title: inputFileName,
			})
		);
		setEditFile(false);
	};
	const handleOpenFile = () => {
		if (!editFile) {
			setOpenFile(!openFile);
		}
	};
	const handleDeleteFileClick = () => {
		dispatch(deleteFile(id));
	};

	const handleAddTask = () => {
		setAddTask(true);
		setOpenFile(true);
	};
	return (
		<div className="file-item-container">
			<div className="file-title-container">
				<div className="title-left" onClick={() => handleOpenFile()}>
					{openFile ? (
						<MdOutlineKeyboardArrowDown />
					) : (
						<MdOutlineKeyboardArrowRight />
					)}
					{editFile ? (
						<form
							className="file-edit-form"
							onSubmit={(e) => handleFileSubmit(e)}
						>
							<input
								type="text"
								onChange={(e) => handleInputFileNameChange(e)}
								value={inputFileName}
							/>
							<button type="submit" disabled={inputFileName ? false : true}>
								<AiFillCheckCircle className="icon-edit-form" />
							</button>
							<MdCancel
								className="icon-edit-form"
								onClick={() => setEditFile(false)}
							/>
						</form>
					) : (
						<span className="title-span">{title}</span>
					)}
				</div>
				<div className="title-right">
					<AiFillFileAdd
						className="icon-right"
						onClick={() => handleAddTask()}
					/>
					<AiFillEdit
						className="icon-right"
						onClick={() => setEditFile(true)}
					/>
					<AiFillDelete
						className="icon-right"
						onClick={() => handleDeleteFileClick()}
					/>
				</div>
			</div>
			{openFile && (
				<div>
					<Todos
						todos={todos}
						addTask={addTask}
						setAddTask={setAddTask}
						fileId={id}
					/>
				</div>
			)}
		</div>
	);
};

export default File;
