import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import routes from "../helpers/routes";

const PrivateRoute = (props) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const location = useLocation();
	if (!isAuthenticated)
		return (
			<Redirect to={{ pathname: routes.home, state: { from: location } }} />
		);
	return <Route {...props} />;
};

export default PrivateRoute;
