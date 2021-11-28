const { Todo } = require("../../../db.js");

const deleteToDo = async (req, res, next) => {
	const { id } = req.params;
	try {
		await Todo.destroy({
			where: {
				id: id,
			},
		});
		res.send({ success: true });
	} catch (error) {
		next(error);
	}
};

module.exports = deleteToDo;
