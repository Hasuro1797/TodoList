import React, { useState } from "react";
import "./home.css";
import LogInSvg from "../../images/logIn.svg";
import SigInSvg from "../../images/register.svg";
import FormLogIn from "../../components/formLogIn/FormLogIn";
import FormSignIn from "../../components/formSignIn/FormSignIn";

const HomePage = () => {
	const [isLogIn, setIsLogIn] = useState(true);

	return (
		<div className={isLogIn ? "container" : `container sign-up-mode`}>
			<div className="forms-container">
				<div className="signin-signup">
					<FormLogIn />
					<FormSignIn />
				</div>
			</div>
			<div className="panels-container">
				<div className="panel left-panel">
					<div className="content">
						<h3>New here ?</h3>
						<p>
							Register and start having your list of activities that you have
							requests.
						</p>
						<button
							type="button"
							className="btn transparent"
							onClick={() => setIsLogIn(!isLogIn)}
						>
							Sign up
						</button>
					</div>
					<img src={LogInSvg} className="image" alt="" />
				</div>
				<div className="panel right-panel">
					<div className="content">
						<h3>Are you one of us ?</h3>
						<p>
							Login to your account and complete or record your pending
							activities.
						</p>
						<button
							type="button"
							className="btn transparent"
							onClick={() => setIsLogIn(!isLogIn)}
						>
							Sign in
						</button>
					</div>
					<img src={SigInSvg} className="image" alt="" />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
