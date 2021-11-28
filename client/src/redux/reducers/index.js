import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import fileReducer from "./fileReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "error"],
};

const rootReducers = combineReducers({
	auth: authReducer,
	error: errorReducer,
	files: fileReducer,
});

export default persistReducer(persistConfig, rootReducers);
