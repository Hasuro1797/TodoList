const { File, Todo } = require("../../../db.js");

const putFile = async (req, res, next) => {
	const { fileId, title } = req.body;
	try {
		await File.update(
			{
				title,
			},
			{
				where: {
					id: fileId,
				},
			}
		);
		const file = await File.findByPk(fileId, {
			include: {
				model: Todo,
			},
		});
		res.send({ file });
	} catch (error) {
		next(error);
	}
};

module.exports = putFile;
