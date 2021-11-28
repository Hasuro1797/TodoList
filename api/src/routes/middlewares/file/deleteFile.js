const { File, Todo } = require("../../../db.js");

const deleteFile = async (req, res, next) => {
	const { id } = req.params;
	try {
		const toDoFile = await File.findByPk(id, {
			include: {
				model: Todo,
			},
		});
		if (toDoFile.todos.length) {
			toDoFile.todos.forEach(async (element) => {
				await Todo.destroy({
					where: {
						id: element.id,
					},
				});
			});
		}
		await File.destroy({
			where: {
				id: id,
			},
		});
		res.send({ success: true });
	} catch (error) {
		next(error);
	}
};

module.exports = deleteFile;
