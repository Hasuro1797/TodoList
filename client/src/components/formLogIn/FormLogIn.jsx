import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory, useLocation } from "react-router";
import { logInUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const FormLogIn = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();

	return (
		<>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = "*Email is required.";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "*Email is invalidated";
					}
					if (!values.password) {
						errors.password = "*Password is invalidate";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					dispatch(logInUser(values));
					if (location.state?.from) history.push(location.state?.from);
					setSubmitting(false);
					resetForm();
				}}
			>
				{({ isSubmitting }) => (
					<Form className="sign-in-form">
						<h2 className="title">Sign in</h2>
						<div className="input-field">
							<FaUserAlt className="icon" />
							<Field
								className="input"
								type="email"
								name="email"
								placeholder="Email"
							/>
						</div>
						<ErrorMessage
							name="email"
							component="div"
							className="text-danger"
						/>
						<div className="input-field">
							<RiLockPasswordFill className="icon" />
							<Field
								className="input"
								type="password"
								name="password"
								placeholder="Password"
							/>
						</div>
						<ErrorMessage
							name="password"
							component="div"
							className="text-danger"
						/>
						<div>
							<button
								className="btn solid"
								type="submit"
								disabled={isSubmitting}
							>
								Log In
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormLogIn;
