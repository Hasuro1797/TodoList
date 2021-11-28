const { File, Todo } = require("../../../db.js");

const postFile = async (req, res, next) => {
	const { title } = req.body;
	try {
		if (title) {
			const newFile = await File.create({
				title,
			});
			await newFile.setAuth(req.user);
			const file = await File.findByPk(newFile.id, {
				include: {
					model: Todo,
				},
			});
			res.send({ file });
		} else {
			res.status(422).send({ message: "The data is not enough." });
		}
	} catch (error) {
		next(error);
	}
};

module.exports = postFile;
