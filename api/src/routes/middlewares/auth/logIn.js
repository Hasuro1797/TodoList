const { Auth, Profile } = require("../../../db.js");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../../../utils/jwtGenerator");

const LogIn = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		if (!email || !password)
			return res.status(401).send({ message: "User invalidated" });
		const user = await Auth.findByPk(email, {
			include: {
				model: Profile,
			},
		});

		if (!user) {
			return res.status(401).send({ message: "User invalidated" });
		}

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword)
			return res.status(401).send({ message: "User invalidated" });

		const token = jwtGenerator(user.email);
		return res.send({
			token,
			user: {
				email: user.email,
				profile: user.profile,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = LogIn;
