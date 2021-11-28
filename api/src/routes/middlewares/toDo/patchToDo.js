const { Todo } = require("../../../db.js");

const patchToDo = async (req, res, next) => {
	const { toDoId, status } = req.body;
	try {
		await Todo.update(
			{
				status,
			},
			{
				where: {
					id: toDoId,
				},
			}
		);
		const toDo = await Todo.findByPk(toDoId);
		res.send({ toDo });
	} catch (error) {
		next(error);
	}
};

module.exports = patchToDo;
