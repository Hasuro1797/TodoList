import React from "react";
import HomePage from "../pages/Home/HomePage.jsx";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "../helpers/routes";
import { Switch } from "react-router-dom";
import ToDoPage from "../pages/toDoPage/ToDoPage.jsx";

const AppRouter = () => {
	return (
		<>
			<Switch>
				<PublicRoute exact path={routes.home} component={HomePage} />
				<PrivateRoute exact path={routes.todoList} component={ToDoPage} />
			</Switch>
		</>
	);
};

export default AppRouter;
