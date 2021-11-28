import axios from "axios";
import { URL, tokenConfig } from "./userActions";
import {
	GET_FILES,
	DELETE_FILE,
	UPDATE_FILE,
	ADD_FILE,
	FILES_LOADING,
	ADD_TODO,
	UPDATE_TODO,
	DELETE_TODO,
	UPDATE_TODO_CHECK,
} from "./types";
import { returnErrors } from "./errorActions";
import { toast } from "react-toastify";

export const getFiles = () => {
	return async (dispatch, getState) => {
		dispatch(setFilesLoading());
		try {
			const res = await axios.get(`${URL}/file`, tokenConfig(getState));
			dispatch({
				type: GET_FILES,
				payload: res.data,
			});
		} catch (error) {
			dispatch(returnErrors(error.response?.data, error.response?.status));
		}
	};
};
export const addNewFile = (data) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.post(`${URL}/file`, data, tokenConfig(getState));
			dispatch({
				type: ADD_FILE,
				payload: res.data,
			});
		} catch (error) {
			dispatch(returnErrors(error.response.data, error.response.status));
		}
	};
};
export const addNewToDo = (data) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.post(`${URL}/todo`, data, tokenConfig(getState));
			dispatch({
				type: ADD_TODO,
				payload: res.data,
			});
		} catch (error) {
			dispatch(returnErrors(error.response.data, error.response.status));
		}
	};
};
export const deleteFile = (id) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.delete(
				`${URL}/file/${id}`,
				tokenConfig(getState)
			);
			if (res.data?.success) {
				dispatch({
					type: DELETE_FILE,
					payload: id,
				});
				toast.success("File deleted successfully.");
			} else {
				toast.error("The file could not be deleted.");
			}
		} catch (error) {
			dispatch(returnErrors(error.response.data, error.response.status));
		}
	};
};
export const deleteToDo = (id, fileId) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.delete(
				`${URL}/todo/${id}`,
				tokenConfig(getState)
			);
			if (res.data?.success) {
				dispatch({
					type: DELETE_TODO,
					payload: { id, fileId },
				});
				toast.success("Task deleted successfully.");
			} else {
				toast.error("The task could not be deleted.");
			}
		} catch (error) {
			dispatch(returnErrors(error.response.data, error.response.status));
		}
	};
};
export const updateFile = (data) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.put(`${URL}/file/`, data, tokenConfig(getState));
			toast.success("File updated.");
			dispatch({
				type: UPDATE_FILE,
				payload: res.data,
			});
		} catch (error) {
			toast.error("File not updated.");
			dispatch(returnErrors(error.response.data, error.response.status));
		}
	};
};
export const updateToDo = (data) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.put(
				`${URL}/todo/title`,
				data,
				tokenConfig(getState)
			);
			dispatch({
				type: UPDATE_TODO,
				payload: res.data,
			});
		} catch (error) {
			dispatch(returnErrors(error?.response?.data, error?.response?.status));
		}
	};
};
export const updateToDoCheck = (data) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.patch(`${URL}/todo`, data, tokenConfig(getState));
			dispatch({
				type: UPDATE_TODO_CHECK,
				payload: res.data,
			});
		} catch (error) {
			dispatch(returnErrors(error?.response?.data, error?.response?.status));
		}
	};
};
export const setFilesLoading = () => {
	return {
		type: FILES_LOADING,
	};
};
