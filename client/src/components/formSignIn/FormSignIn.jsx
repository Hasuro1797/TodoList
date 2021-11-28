/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { registerUser } from "../../redux/actions/userActions";

const FormSignIn = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();

	return (
		<>
			<Formik
				initialValues={{
					name: "",
					lastName: "",
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
						errors.password = "*Password is required.";
					} else if (
						!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(values.password)
					) {
						errors.password =
							"*The password must have a minimum of 8 characters between letters and numbers.";
					}
					if (!values.name) {
						errors.name = "*You firstName is required.";
					} else if (!/^([A-Z a-z]+)$/g.test(values.name)) {
						errors.name = "*Only letters should be entered in this field";
					}
					if (!values.lastName) {
						errors.lastName = "*You LastName is required.";
					} else if (!/^([A-Z a-z]+)$/g.test(values.lastName)) {
						errors.lastName = "*Only letters should be entered in this field";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					dispatch(registerUser(values));
					if (location.state?.from) history.push(location.state?.from);
					setSubmitting(false);
					resetForm();
				}}
			>
				{({ isSubmitting }) => (
					<Form className="sign-up-form">
						<h2 className="title">Sign up</h2>
						<div className="input-field">
							<FaUserAlt className="icon" />
							<Field
								className="input"
								type="text"
								name="name"
								placeholder="First Name"
							/>
						</div>
						<ErrorMessage name="name" component="div" className="text-danger" />
						<div className="input-field">
							<FaUserAlt className="icon" />
							<Field
								className="input"
								type="text"
								name="lastName"
								placeholder="Last Name"
							/>
						</div>
						<ErrorMessage
							name="lastName"
							component="div"
							className="text-danger"
						/>
						<div className="input-field">
							<MdEmail className="icon" />
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
								Sign up
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormSignIn;
