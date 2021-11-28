const { Auth, Profile } = require("../../../db");
const postVerify = async (req, res, next) => {
	try {
		const user = await Auth.findByPk(req.user, {
			attributes: ["email"],
			include: {
				model: Profile,
			},
		});
		res.json({
			user,
		});
	} catch (e) {
		next(error);
	}
};

module.exports = postVerify;
