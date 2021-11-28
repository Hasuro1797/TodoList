const { File, Todo } = require("../../../db.js");

const getFile = async (req, res, next) => {
	try {
		const file = await File.findAll({
			where: {
				authEmail: req.user,
			},
			include: {
				model: Todo,
			},
		});
		res.json({ file });
	} catch (error) {
		next(error);
	}
};

module.exports = getFile;
