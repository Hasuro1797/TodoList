const { Todo } = require("../../../db.js");

const putToDo = async (req, res, next) => {
	const { toDoId, title } = req.body;
	try {
		await Todo.update(
			{
				title,
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

module.exports = putToDo;
