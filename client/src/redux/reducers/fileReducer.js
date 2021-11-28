import {
	ADD_FILE,
	DELETE_FILE,
	FILES_LOADING,
	UPDATE_FILE,
	GET_FILES,
	ADD_TODO,
	UPDATE_TODO,
	DELETE_TODO,
	UPDATE_TODO_CHECK,
} from "../actions/types";

const initialState = {
	filesList: [],
	filesLoading: false,
	todoLoading: false,
};

const fileReducer = (state = initialState, action) => {
	switch (action.type) {
		case FILES_LOADING:
			return {
				...state,
				filesLoading: true,
			};
		case GET_FILES:
			return {
				...state,
				filesList: action.payload.file,
				filesLoading: false,
			};
		case ADD_FILE:
			return {
				...state,
				filesList: [action.payload.file, ...state.filesList],
			};
		case ADD_TODO:
			let taskFile = state.filesList.find(
				(file) => file.id === action.payload.todo.fileId
			);
			if (taskFile?.id)
				taskFile["todos"] = [action.payload.todo, ...taskFile.todos];
			return {
				...state,
				filesList: [...state.filesList],
			};
		case DELETE_FILE:
			return {
				...state,
				filesList: state.filesList.filter((file) => file.id !== action.payload),
			};
		case DELETE_TODO:
			return {
				...state,
				filesList: state.filesList.map((element) => {
					if (element.id === action.payload.fileId) {
						return {
							...element,
							todos: element.todos.filter(
								(todo) => todo.id !== action.payload.id
							),
						};
					} else {
						return element;
					}
				}),
			};
		case UPDATE_FILE:
			const file = state.filesList.find(
				(element) => element.id === action.payload.file.id
			);
			if (file?.id) file["title"] = action.payload.file.title;
			return {
				...state,
				filesList: [...state.filesList],
			};
		case UPDATE_TODO:
			// let newToDoList = state.filesList.map((element) => {
			// 	if (element.id === action.payload.todo.fileId) {
			// 		return {
			// 			...element,
			// 			todos: element.todos.map((todo) => {
			// 				if (todo.id === action.payload.todo.id) {
			// 					return { ...todo, title: action.payload.todo.title };
			// 				} else {
			// 					return todo;
			// 				}
			// 			}),
			// 		};
			// 	} else {
			// 		return element;
			// 	}
			// });
			console.log("aqui debe actualizarse");
			const fileSearched = state.filesList.find(
				(element) => element.id === action.payload.todo.fileId
			);
			if (fileSearched?.id) {
				const toDo = fileSearched.todos.find(
					(todo) => todo.id === action.payload.todo.id
				);
				if (toDo?.id) {
					toDo["title"] = action.payload.todo.title;
				}
			}
			return {
				...state,
				filesList: [...state.filesList],
			};
		case UPDATE_TODO_CHECK:
			let newToDoList = [];
			// newToDoList = state.filesList.map((element) => {
			// 	if (element.id === action.payload.todo.fileId) {
			// 		return {
			// 			...element,
			// 			todos: element.todos.map((todo) => {
			// 				if (todo.id === action.payload.todo.id) {
			// 					return { ...todo, status: action.payload.todo.status };
			// 				} else {
			// 					return todo;
			// 				}
			// 			}),
			// 		};
			// 	} else {
			// 		return element;
			// 	}
			// });
			console.log("ingreso al check");
			console.log("el valor del array es", newToDoList);
			const TaskSearched = state.filesList.find(
				(element) => element.id === action.payload.todo.fileId
			);
			if (TaskSearched?.id) {
				const toDo = TaskSearched.todos.find(
					(todo) => todo.id === action.payload.todo.id
				);
				if (toDo?.id) {
					toDo["status"] = action.payload.todo.status;
				}
			}
			return {
				...state,
				filesList: [...state.filesList],
			};
		default:
			return state;
	}
};

export default fileReducer;
