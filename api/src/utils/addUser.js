const { Auth, Profile } = require("../db");
const bcrypt = require("bcrypt");

const addUser = async () => {
	try {
		const { count } = await Auth.findAndCountAll();
		if (count === 0) {
			//user Added
			const password = "password1234";
			const email = "usuario@usuario.com";
			const name = "Manuel Benjamin";
			const lastName = "Villarroel Bedregal";
			//Bcrypt
			const saltRound = 10;
			const salt = await bcrypt.genSalt(saltRound);
			const bcryptPassword = await bcrypt.hash(password, salt);
			const user = await Auth.create({
				email,
				password: bcryptPassword,
			});
			const profile = await Profile.create({
				name,
				lastName,
			});
			await profile.setAuth(user.email);
		} else {
			console.log("User added: ", count);
		}
	} catch (errors) {
		console.error(errors);
	}
};

module.exports = addUser;
