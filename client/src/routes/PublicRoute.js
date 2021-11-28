import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import routes from "../helpers/routes";

const PublicRoute = (props) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	if (isAuthenticated) return <Redirect to={routes.todoList} />;
	return <Route {...props} />;
};

export default PublicRoute;
